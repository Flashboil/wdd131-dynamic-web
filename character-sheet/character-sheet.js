// --primary-color: #FFC266;
// --secondary-color: #241200;
// --accent1-color: #FFDB9A;
// --accent2-color: #FF9B00;

const ctx = document.getElementById('myChart');

const data = {
    labels: [
      'STR',
      'DEX',
      'CON',
      'INT',
      'WIS',
      'CHA',
    ],
    datasets: [{
      label: '',
      data: character.attributes,
      pointRadius: 0,
      fill: true,
      backgroundColor: '#FFc266',
      borderColor: '#ff9b00',
      pointBackgroundColor: '#ff9b00',
      pointBorderColor: '#ff9b00',
    }]
  };

new Chart(ctx, {
    type: 'radar',
    data: data, options: {
        scales: {
            r: {
                ticks: {
                    stepSize: 3,
                    display: false
                },
                grid: {
                    color: '#ffc266'
                },
                pointLabels: {
                    color: "#ffdb9a",
                    font: {
                      size: 16, 
                      family: "Courier",
                      weight: "bold"
                    }
                },
                min: 0,
                max: 18
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

function FormatProfile()
{

}

function FormatAttributes()
{

}