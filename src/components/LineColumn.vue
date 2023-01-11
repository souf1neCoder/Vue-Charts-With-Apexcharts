<template>
  <div class="card">
    <h5 class="card-header">Line Column</h5>
    <div class="card-body">
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>

    </div>
  </div>
</template>

<script setup>

 let  series= [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }]
         let chartOptions = {
            
            chart: {
              height: 350,
              type: 'line',
            },
            stroke: {
              width: [0, 4]
            },
            title: {
              text: 'Traffic Sources'
            },
            dataLabels: {
              enabled: true,
              enabledOnSeries: [1]
            },
            labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
            xaxis: {
              type: 'datetime'
            },
            yaxis: [{
              title: {
                text: 'Website Blog',
              },
            
            }, {
              opposite: true,
              title: {
                text: 'Social Media'
              }
            }]
          
          }
</script>

<style></style>
