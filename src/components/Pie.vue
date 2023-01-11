<template>
  <div class="card">
    <h5 class="card-header">Pie</h5>
    <div class="card-body" >
        <div height="350" style="min-height:350px">

              <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
        </div>

    </div>
  </div>
</template>

<script setup>
let series = [44, 55, 13, 43, 22]
let chartOptions = {
  chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
};
</script>

<style></style>
