
export default function decompressData(data, filter) {
  let decompressed = {}
  data.forEach((incident) => {
    decompressed[incident[filter]] = (decompressed[incident[filter]] || 0) + 1
  })
  return decompressed
}

