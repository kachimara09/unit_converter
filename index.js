/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputNum = []
const variable = [3.281, 0.264, 2.204]
const inputField = document.getElementById("input-field")
const inputBtn = document.getElementById("input-btn")


//number only with decimal allow
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode != 46 &&(charCode < 48 || charCode > 57)))
        return false;
    return true;
}

//button in action
inputBtn.addEventListener("click", function() {
    let inputNum = inputField.value
    pl.innerHTML = `${inputNum} meters = ${Number(inputNum * variable[0]).toFixed(3)} feet  |  ${inputNum} feet = ${Number(inputNum / variable[0]).toFixed(3)} meters`
    pv.innerHTML = `${inputNum} liter = ${Number(inputNum * variable[1]).toFixed(3)} gallons | ${inputNum} gallons = ${Number(inputNum / variable[1]).toFixed(3)} liter`
    pm.innerHTML = `${inputNum} kilos = ${Number(inputNum / variable[2]).toFixed(3)} pounds | ${inputNum} pounds = ${Number(inputNum / variable[2]).toFixed(3)} kilos`

})
