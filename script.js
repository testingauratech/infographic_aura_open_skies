// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    const tooltipTitleCallback = (tooltipItems) => {
        const item = tooltipItems[0];
        let label = item.chart.data.labels[item.dataIndex];
        if (Array.isArray(label)) {
            return label.join(' ');
        }
        return label;
    };

    const defaultChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                 labels: {
                    color: '#001E3E',
                    font: {
                        family: "'Inter', sans-serif"
                    }
                }
            },
            tooltip: {
                callbacks: {
                    title: tooltipTitleCallback
                },
                backgroundColor: '#00449E',
                titleFont: { family: "'Inter', sans-serif", size: 14 },
                bodyFont: { family: "'Inter', sans-serif", size: 12 },
                padding: 12,
                cornerRadius: 8
            }
        }
    };

    const barChartAxisOptions = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: { color: '#00449E' },
                grid: { color: '#E0E7FF' }
            },
            x: {
                ticks: { color: '#00449E' },
                grid: { display: false }
            }
        }
    };

    // Investment Chart (Donut)
    const investmentCtx = document.getElementById('investmentChart').getContext('2d');
    new Chart(investmentCtx, {
        type: 'doughnut',
        data: {
            labels: ['Desarrollo Continuo', 'Mantenimiento y Servidores', 'Soporte Técnico', 'Actualizaciones y Seguridad'],
            datasets: [{
                label: 'Distribución de la Inversión',
                data: [35, 25, 20, 20],
                backgroundColor: ['#0170E5', '#52A4FF', '#A9D3FF', '#00449E'],
                borderColor: '#FFFFFF',
                borderWidth: 4,
                hoverOffset: 8
            }]
        },
        options: defaultChartOptions
    });

    // Time Chart (Bar)
    const timeCtx = document.getElementById('timeChart').getContext('2d');
    new Chart(timeCtx, {
        type: 'bar',
        data: {
            labels: ['Antes (Manual)', 'Ahora (Automatizado)'],
            datasets: [{
                label: 'Minutos por cotización',
                data: [30, 2],
                backgroundColor: ['#A9D3FF', '#0170E5'],
                borderRadius: 8,
                barPercentage: 0.6
            }]
        },
        options: { ...defaultChartOptions, ...barChartAxisOptions, plugins: { ...defaultChartOptions.plugins, legend: { display: false } } }
    });

    // Productivity Chart (Bar)
    const productivityCtx = document.getElementById('productivityChart').getContext('2d');
    new Chart(productivityCtx, {
        type: 'bar',
        data: {
            labels: ['Antes', 'Ahora'],
            datasets: [{
                label: 'Cotizaciones por agente al día',
                data: [10, 50],
                backgroundColor: ['#A9D3FF', '#0170E5'],
                borderRadius: 8,
                barPercentage: 0.6
            }]
        },
         options: { ...defaultChartOptions, ...barChartAxisOptions, plugins: { ...defaultChartOptions.plugins, legend: { display: false } } }
    });

    // Satisfaction Chart (Bar)
    const satisfactionCtx = document.getElementById('satisfactionChart').getContext('2d');
    new Chart(satisfactionCtx, {
        type: 'bar',
        data: {
            labels: ['Antes', 'Ahora'],
            datasets: [{
                label: 'Tasa de Cierre (%)',
                data: [15, 25],
                backgroundColor: ['#A9D3FF', '#0170E5'],
                borderRadius: 8,
                barPercentage: 0.6
            }]
        },
         options: { ...defaultChartOptions, ...barChartAxisOptions, plugins: { ...defaultChartOptions.plugins, legend: { display: false } } }
    });
});
