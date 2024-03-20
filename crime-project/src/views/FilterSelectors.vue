<script setup>
import DataFilterCheckbox from '../components/DataFilterCheckbox.vue'
import options from '../components/filterOptions.js'
console.log('kehiG')
const optionsKeys = Object.keys(options)
</script>

<template>
  <div class="flex flex-row">
    <DataFilterCheckbox
      :type="option"
      :options="options[option]"
      v-for="option in optionsKeys"
      class="p-5"
    />
  </div>
</template>
