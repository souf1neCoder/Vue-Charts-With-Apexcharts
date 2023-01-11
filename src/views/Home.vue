<template>
  <header>
    <div class="container py-5">
      <div class="text-center">
        <h1>VUE CHART WITH <a href="https://apexcharts.com/">APEXCHARTS</a></h1>
      </div>
    </div>
  </header>
  <main>
    <div class="jumbotron">
      <div class="container">
        <div class="row mt-5">
          <div class="col-lg-4">
            <Line />
          </div>
          <div class="col-lg-4">
            <Area />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Line from "../components/Line.vue";
import Area from "../components/Area.vue";
</script>

<style></style>
