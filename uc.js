const Convert = document.getElementById("convert")
const Output1 = document.getElementById("output1")
const Output2 = document.getElementById("output2")
const Output3 = document.getElementById("output3")
const Inputel = document.getElementById("inputel")



Convert.addEventListener("click", function () {
    let num = Inputel.value
    Output1.textContent = num + " meters = " + (num * 3.281).toFixed(3) + " feet " + "  | " +  num + " feet = " + (num / 3.281).toFixed(3) + " meters"
    Output2.textContent = num + " liters = " + (num * 0.264).toFixed(3) + " gallons " + "  | " +num + " gallons = " + (num / 0.264).toFixed(3) + " liters"
    Output3.textContent = num + " kilos = " + (num * 2.204).toFixed(3) + " pounds " + "  | " +num + " pounds = " + (num / 2.204).toFixed(3) + " kilos"

})