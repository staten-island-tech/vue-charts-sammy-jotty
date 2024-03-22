<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script>
// DataPage.vue
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import decompressData from '@/api/decompressData'
import { ref } from 'vue'
import getAllData from '@/api/getAllData'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  async setup() {
    this.data = ref([])
    this.data.value = await getAllData()
  },
  name: 'BarChart',
  components: { Bar },
  props: ['filter', 'data'],
  computed: {
    chartData() {
      const decompressedData = decompressData(this.data)
      return {
        labels: filter.values,
        datasets: [
          {
            label: 'Arrests',
            backgroundColor: '#f87979',
            data: Object.keys(decompressedData)
          }
        ]
      }
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>
