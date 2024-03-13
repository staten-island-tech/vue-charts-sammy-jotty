<script setup>
import DataFilterSelect from '@/components/DataFilterSelect.vue'
import DataFilterCheckbox from '@/components/DataFilterCheckbox.vue'
</script>

<template>
  <div>
    <DataFilterSelect :options="['18-24', '25-44', '45-64']" type="age_group" />
    <DataFilterCheckbox type="perp_race" :options="['WHITE', 'BLACK', 'HISPANIC']" />
  </div>
</template>
