// Datos simulados basados en el dataset propuesto
const municipiosData = {
    "Valledupar": {
        "consumo_promedio_kWh": 350,
        "tarifa_kWh": 850,
        "horas_sol_promedio": 5.2
    },
    "Bogotá": {
        "consumo_promedio_kWh": 320,
        "tarifa_kWh": 920,
        "horas_sol_promedio": 4.1
    },
    "Medellín": {
        "consumo_promedio_kWh": 310,
        "tarifa_kWh": 880,
        "horas_sol_promedio": 4.8
    },
    "Cali": {
        "consumo_promedio_kWh": 340,
        "tarifa_kWh": 870,
        "horas_sol_promedio": 5.0
    },
    "Barranquilla": {
        "consumo_promedio_kWh": 380,
        "tarifa_kWh": 830,
        "horas_sol_promedio": 5.8
    }
};

// Eficiencia típica de un panel solar (15-20%)
const EFICIENCIA_PANEL = 0.18; // 18%
// Producción por m² de panel (aproximadamente 150W por m²)
const PRODUCCION_POR_M2 = 0.15; // kW/m²

// Cargar municipios en el select
document.addEventListener('DOMContentLoaded', function() {
    const municipioSelect = document.getElementById('municipio');
    
    for (const municipio in municipiosData) {
        const option = document.createElement('option');
        option.value = municipio;
        option.textContent = municipio;
        municipioSelect.appendChild(option);
    }
});

// Manejar el envío del formulario
document.getElementById('solarForm').addEventListener('submit', function(e) {
    e.preventDefault();
    calcularAhorro();
});

function calcularAhorro() {
    // Obtener valores del formulario
    const consumo = parseFloat(document.getElementById('consumo').value);
    const estrato = document.getElementById('estrato').value;
    const municipio = document.getElementById('municipio').value;
    const panelArea = parseFloat(document.getElementById('panelArea').value);
    
    // Obtener datos del municipio seleccionado
    const municipioInfo = municipiosData[municipio];
    const tarifa = municipioInfo.tarifa_kWh;
    const horasSol = municipioInfo.horas_sol_promedio;
    
    // Calcular energía generada (kWh/mes)
    // Fórmula: Horas_sol * Eficiencia_panel * Área * Producción_por_m2 * 30 días
    const energiaGenerada = horasSol * EFICIENCIA_PANEL * panelArea * PRODUCCION_POR_M2 * 30;
    
    // Calcular ahorro (la energía generada se descuenta del consumo)
    const ahorro = Math.min(energiaGenerada, consumo) * tarifa;
    
    // Calcular porcentaje de reducción
    const reduccion = (Math.min(energiaGenerada, consumo) / consumo) * 100;
    
    // Mostrar resultados
    document.getElementById('energiaGenerada').textContent = `${energiaGenerada.toFixed(2)} kWh/mes`;
    document.getElementById('ahorroMensual').textContent = `$${ahorro.toFixed(2)}`;
    document.getElementById('reduccion').textContent = `${reduccion.toFixed(2)}%`;
    
    // Mostrar sección de resultados
    document.getElementById('results').classList.remove('hidden');
    
    // Crear gráfico
    crearGrafico(consumo, energiaGenerada, tarifa, ahorro);
}

function crearGrafico(consumo, energiaGenerada, tarifa, ahorro) {
    const ctx = document.getElementById('savingsChart').getContext('2d');
    
    // Destruir gráfico anterior si existe
    if (window.solarChart) {
        window.solarChart.destroy();
    }
    
    const consumoActual = consumo * tarifa;
    const consumoConPaneles = (consumo - Math.min(energiaGenerada, consumo)) * tarifa;
    
    window.solarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sin paneles', 'Con paneles solares'],
            datasets: [{
                label: 'Costo mensual de energía ($)',
                data: [consumoActual, consumoConPaneles],
                backgroundColor: [
                    'rgba(231, 76, 60, 0.7)',
                    'rgba(46, 204, 113, 0.7)'
                ],
                borderColor: [
                    'rgba(231, 76, 60, 1)',
                    'rgba(46, 204, 113, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Costo ($)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Comparación de costos energéticos',
                    font: {
                        size: 16
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Costo mensual: $${context.raw.toFixed(2)}`;
                        }
                    }
                }
            }
        }
    });
}