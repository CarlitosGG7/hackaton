// Datos basados en el CSV proporcionado
const estratosData = {
    "1": {
        "consumo_promedio_kWh": 100,
        "tarifa_kWh": 250,
        "horas_sol_promedio": 5.2
    },
    "2": {
        "consumo_promedio_kWh": 130,
        "tarifa_kWh": 300,
        "horas_sol_promedio": 5.5
    },
    "3": {
        "consumo_promedio_kWh": 160,
        "tarifa_kWh": 350,
        "horas_sol_promedio": 5.8
    }
};

// Eficiencia típica de un panel solar (15-20%)
const EFICIENCIA_PANEL = 0.18; // 18%
// Producción por m² de panel (aproximadamente 150W por m²)
const PRODUCCION_POR_M2 = 0.15; // kW/m²

// Cargar consumo promedio cuando se seleccione estrato
document.getElementById('estrato').addEventListener('change', function() {
    const estrato = this.value;
    if (estrato) {
        const consumoPromedio = estratosData[estrato].consumo_promedio_kWh;
        document.getElementById('consumoPromedio').textContent = `Consumo promedio para estrato ${estrato}: ${consumoPromedio} kWh/mes`;
        document.getElementById('consumo').value = consumoPromedio;
    } else {
        document.getElementById('consumoPromedio').textContent = '';
    }
});

// Manejar el envío del formulario
document.getElementById('solarForm').addEventListener('submit', function(e) {
    e.preventDefault();
    calcularAhorro();
});

function calcularAhorro() {
    // Obtener valores del formulario
    const estrato = document.getElementById('estrato').value;
    const consumo = parseFloat(document.getElementById('consumo').value);
    const panelArea = parseFloat(document.getElementById('panelArea').value);
    
    // Obtener datos del estrato seleccionado
    const estratoInfo = estratosData[estrato];
    const tarifa = estratoInfo.tarifa_kWh;
    const horasSol = estratoInfo.horas_sol_promedio;
    const consumoPromedio = estratoInfo.consumo_promedio_kWh;
    
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
    
    // Mostrar información del estrato
    document.getElementById('infoConsumo').textContent = `${consumoPromedio} kWh/mes`;
    document.getElementById('infoTarifa').textContent = tarifa;
    document.getElementById('infoHorasSol').textContent = horasSol;
    
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
    const ahorroCalculado = consumoActual - consumoConPaneles;
    
    window.solarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Costo actual', 'Costo con paneles', 'Ahorro potencial'],
            datasets: [{
                label: 'Valor en pesos ($)',
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
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += `$${context.raw.toFixed(2)}`;
                            return label;
                        }
                    }
                }
            }
        }
    });
}