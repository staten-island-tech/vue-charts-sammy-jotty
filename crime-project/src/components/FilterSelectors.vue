<script setup>
import DataFilterCheckbox from './DataFilterCheckbox.vue'
import DataFilterSelect from './DataFilterSelect.vue'
import options from './filterOptions.js'
const optionsKeys = Object.keys(options)
</script>

<template>
  <div class="grid grid-cols-1">
    <DataFilterSelect
      :type="option"
      :options="options[option]"
      :key="option"
      v-for="option in optionsKeys"
      class="p-2 mx-5 my-2 w-3"
    />
  </div>
</template>
