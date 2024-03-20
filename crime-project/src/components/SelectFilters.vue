<script setup>
import DataFilterCheckbox from './DataFilterCheckbox.vue'
import options from './filterOptions'
const optionsKeys = Object.keys(options)
</script>

<template>
  <div>
    <div v-for="option in optionsKeys">
      <DataFilterCheckbox :type="option" :options="options[option]" />
    </div>
  </div>
</template>
