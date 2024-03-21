<template>
  <div class="container">
    <Pie :data="data" :options="options" />
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from './chartData/PieChartConfig'
import { useFilterStore } from '@/stores/filterStore'
import getAllData from '@/api/getAllData'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Pie
  },
  async data() {
    const filters = useFilterStore().selectedFilters
    const data = await getAllData()
    const type = 'age_group'
    return formatData(type, data, filters)
  }
}
</script>
