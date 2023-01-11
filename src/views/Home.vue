<template>
  <header>
    <div class="container py-5">
      <div class="text-center">
        <h1>VUE CHART WITH <a href="https://apexcharts.com/">APEXCHARTS</a></h1>
      </div>
    </div>
  </header>
  <main>
    <div class="jumbotron p-5 mb-2 bg-light ">
      <div class="container-fluid">
        <div class="row g-4 my-3">
          <div class="col-lg-4">
            <Line />
          </div>
          <div class="col-lg-4">
            <Area />
          </div>
           <div class="col-lg-4">
            <Column />
          </div>
          <div class="col-lg-4">
            <line-column />
          </div>
          <div class="col-lg-4">
            <Scatter />
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer></footer>
</template>

<script setup>
import Line from "../components/Line.vue";
import Area from "../components/Area.vue";
import Column from "../components/Column.vue";
import LineColumn from "../components/LineColumn.vue";
import Scatter from "../components/Scatter.vue";
</script>

<style></style>
