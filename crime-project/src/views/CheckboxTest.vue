<script setup>
import DataFilterSelect from '@/components/DataFilterSelect.vue'
</script>

<template>
  <div>
    <DataFilterSelect :options="['18-24', '25-44']" type="age_group" />
  </div>
</template>
