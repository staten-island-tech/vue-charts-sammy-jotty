<script setup>
import DataFilterSelect from '@/components/DataFilterSelect.vue'
import DataFilterCheckbox from '@/components/DataFilterCheckbox.vue'
</script>

<template>
  <div>
    <DataFilterSelect :options="['WHITE', 'BLACK', 'HISPANIC']" type="perp_race" />
    <!-- <DataFilterCheckbox type="perp_race" /> -->
  </div>
</template>
