
function calcBmi(weight, height){
    return (weight / (height/100) ** 2);
}
function receiveValues(event){
    event.preventDefault();

    let weight = parseFloat(document.getElementById('weight').value);

    let height = parseFloat(document.getElementById('height').value);

    let resultDiv = document.getElementById('bmi-result')

    if ((weight <= 0)|| (height <= 0)){
        resultDiv.innerHTML = 'please enter valid positive numbers'
    } else {
        let bmi = calcBmi(weight,height)
        let message = ''
        
        resultDiv.innerHTML = `your BMI is: ${bmi.toFixed(2)}`
    }

}

document.querySelector('form').addEventListener('submit', receiveValues)
    