<template>
<div class="container">
  <div class="productCards" v-for="arrest in arrests" :key="arrest.arrest_key":arrest="arrest">
    <h2 >{{ arrest.arrest_date }}</h2>
    <h2 >{{ arrest.pd_desc }}</h2>
    <h2 >{{ arrest.age_group }}</h2>
    <h2 >{{ arrest.perp_race }}</h2>
    <h2 >{{ arrest.perp_sex }}</h2>
  </div>
</div>
</template>
<script setup>
import { ref } from 'vue';
const arrests = ref(null);
fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json?$limit=1000')
    .then(response => response.json())
    .then(data => arrests.value = data);
</script>

<style scoped>
.productCards{
  width: 200px;
  height: 200px;
  border-radius: 20px;
  transition: 700ms;
  background: linear-gradient(43deg,#f5f5fa 46%, #9698c3 100%);

}
.container{
    margin: auto, 0%;
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
</style>