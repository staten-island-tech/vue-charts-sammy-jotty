<script setup>
import TestBar from '@/components/TestBar.vue'
import getAllData from '@/api/getAllData'
import applyFilter from '@/api/applyFilter'
import { Suspense } from 'vue'

const filter = {
  type: 'age_group',
  values: ['18-24', '25-44', '45-64']
}
const allData = await getAllData()
const filteredData = applyFilter(allData, filter)
</script>
<template>
  <Suspense>
    <TestBar :data="filteredData" :filter="filter" />
  </Suspense>
</template>
