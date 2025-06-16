// Datos de municipios (simulados para la visualización)
const municipiosData = {
    "cesar": {
        "municipios": ["Valledupar", "Aguachica", "Curumaní", "La Paz"],
        "horas_sol": 5.5
    },
    "magdalena": {
        "municipios": ["Santa Marta", "Ciénaga", "Aracataca", "Fundación"],
        "horas_sol": 5.8
    },
    "atlantico": {
        "municipios": ["Barranquilla", "Soledad", "Malambo", "Puerto Colombia"],
        "horas_sol": 5.9
    }
};

// Datos por estrato (del CSV proporcionado)
const estratosData = {
    "1": {
        "consumo_promedio_kWh": 100,
        "tarifa_kWh": 250
    },
    "2": {
        "consumo_promedio_kWh": 130,
        "tarifa_kWh": 300
    },
    "3": {
        "consumo_promedio_kWh": 160,
        "tarifa_kWh": 350
    }
};

// Configuración de paneles solares
const EFICIENCIA_PANEL = 0.18;
const PRODUCCION_POR_M2 = 0.15;

// Elementos del DOM
const departamentoSelect = document.getElementById('departamento');
const municipioSelect = document.getElementById('municipio');
const estratoSelect = document.getElementById('estrato');
const consumoSlider = document.getElementById('consumoSlider');
const consumoInput = document.getElementById('consumo');
const panelAreaSlider = document.getElementById('panelAreaSlider');
const panelAreaInput = document.getElementById('panelArea');
const solarForm = document.getElementById('solarForm');

// Event Listeners
departamentoSelect.addEventListener('change', cargarMunicipios);
consumoSlider.addEventListener('input', updateConsumoInput);
consumoInput.addEventListener('input', updateConsumoSlider);
panelAreaSlider.addEventListener('input', updatePanelAreaInput);
panelAreaInput.addEventListener('input', updatePanelAreaSlider);
solarForm.addEventListener('submit', calcularAhorro);

// Cargar municipios basado en departamento seleccionado
function cargarMunicipios() {
    const departamento = departamentoSelect.value;
    
    municipioSelect.innerHTML = '<option value="">Seleccione municipio</option>';
    
    if (departamento) {
        municipioSelect.disabled = false;
        const municipios = municipiosData[departamento].municipios;
        
        municipios.forEach(municipio => {
            const option = document.createElement('option');
            option.value = municipio.toLowerCase();
            option.textContent = municipio;
            municipioSelect.appendChild(option);
        });
    } else {
        municipioSelect.disabled = true;
    }
}

// Sincronizar slider y input de consumo
function updateConsumoInput() {
    consumoInput.value = consumoSlider.value;
}

function updateConsumoSlider() {
    consumoSlider.value = consumoInput.value;
}

// Sincronizar slider y input de área de paneles
function updatePanelAreaInput() {
    panelAreaInput.value = panelAreaSlider.value;
}

function updatePanelAreaSlider() {
    panelAreaSlider.value = panelAreaInput.value;
}

// Calcular ahorro cuando se envía el formulario
function calcularAhorro(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    const estrato = estratoSelect.value;
    const consumo = parseFloat(consumoInput.value);
    const panelArea = parseFloat(panelAreaInput.value);
    const departamento = departamentoSelect.value;
    const municipio = municipioSelect.value;
    
    // Validar selección de estrato
    if (!estrato) {
        alert('Por favor seleccione su estrato');
        return;
    }
    
    // Obtener datos del estrato
    const estratoInfo = estratosData[estrato];
    const tarifa = estratoInfo.tarifa_kWh;
    const consumoPromedio = estratoInfo.consumo_promedio_kWh;
    
    // Obtener horas de sol basado en departamento (para visualización)
    const horasSol = departamento ? municipiosData[departamento].horas_sol : 5.5;
    
    // Calcular energía generada (kWh/mes)
    const energiaGenerada = horasSol * EFICIENCIA_PANEL * panelArea * PRODUCCION_POR_M2 * 30;
    
    // Animación de carga de energía
    animateValue('energyValue', 0, Math.round(energiaGenerada), 1000);
    
    // Calcular ahorro
    const ahorro = Math.min(energiaGenerada, consumo) * tarifa;
    
    // Calcular porcentaje de reducción
    const reduccion = (Math.min(energiaGenerada, consumo) / consumo) * 100;
    
    // Mostrar resultados
    document.getElementById('energiaGenerada').textContent = `${energiaGenerada.toFixed(2)} kWh`;
    document.getElementById('ahorroMensual').textContent = `$${ahorro.toFixed(2)}`;
    document.getElementById('reduccion').textContent = `${reduccion.toFixed(2)}%`;
    
    // Mostrar información de ubicación (visual)
    document.getElementById('infoDepto').textContent = departamentoSelect.options[departamentoSelect.selectedIndex].text || '--';
    document.getElementById('infoMunicipio').textContent = municipioSelect.options[municipioSelect.selectedIndex].text || '--';
    document.getElementById('infoEstrato').textContent = estratoSelect.options[estratoSelect.selectedIndex].text;
    document.getElementById('infoHorasSol').textContent = `${horasSol} horas/día`;
    document.getElementById('infoTarifa').textContent = `$${tarifa}`;
    document.getElementById('infoConsumo').textContent = `${consumo} kWh/mes`;
    
    // Mostrar sección de resultados
    document.getElementById('results').classList.remove('hidden');
    
    // Crear gráfico
    crearGrafico(consumo, energiaGenerada, tarifa, ahorro);
    
    // Desplazarse suavemente a los resultados
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// Animación para el valor de energía generada
function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Crear gráfico de resultados
function crearGrafico(consumo, energiaGenerada, tarifa, ahorro) {
    const ctx = document.getElementById('savingsChart').getContext('2d');
    
    // Destruir gráfico anterior si existe
    if (window.solarChart) {
        window.solarChart.destroy();
    }
    
    const consumoActual = consumo * tarifa;
    const consumoConPaneles = (consumo - Math.min(energiaGenerada, consumo)) * tarifa;
    const ahorroCalculado = consumoActual - consumoConPaneles;
    
    window.solarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Costo Actual', 'Con Paneles', 'Ahorro'],
            datasets: [{
                label: 'Valor en Pesos ($)',
                data: [consumoActual, consumoConPaneles, ahorroCalculado],
                backgroundColor: [
                    'rgba(231, 76, 60, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(52, 152, 219, 0.7)'
                ],
                borderColor: [
                    'rgba(231, 76, 60, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(52, 152, 219, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Costo ($)',
                        font: {
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Comparación de Costos Energéticos Mensuales',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `$${context.raw.toFixed(2)}`;
                        }
                    }
                }
            },
            animation: {
                duration: 1500
            }
        }
    });
}
