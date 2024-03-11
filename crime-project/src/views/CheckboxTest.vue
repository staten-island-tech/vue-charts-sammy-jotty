<script setup>
import DataFilterSelect from '@/components/DataFilterSelect.vue'
</script>

<template>
  <div>
    <DataFilterSelect :options="['18-24', '25-44']" type="age_group" />
    <DataFilterSelect :options="['WHITE', 'BLACK', 'HISPANIC']" type="perp_race" />
  </div>
</template>
