const batteryBatches = [4, 5, 3, 4, 4, 6, 5]
const totalBatteries = batteryBatches.reduce((total = 0, batch) => total + batch)
console.log(totalBatteries)