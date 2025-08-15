
function calcBmi(weight, height){
    return (weight / (height/100) ** 2);
}
function bmiCategory(bmi){
    if (bmi < 18.5){
        return ('Underweight')
    }else if (bmi>= 18.5 && bmi<= 24.9){
        return ('Healthy weight')
    } else if (bmi>=25.0 && bmi<= 29.9){
        return ('Overweight')
    }else if(bmi >= 30.0){
        return ('Obesity')
    }

}
function receiveValues(event){

    event.preventDefault();

    let weight = parseFloat(document.getElementById('weight').value);

    let height = parseFloat(document.getElementById('height').value);

    let resultDiv = document.getElementById('bmi-result');

    let age = document.querySelector('input[name="targetBMI"]:checked')

    if ((weight <= 0)|| (height <= 0)){
        resultDiv.innerHTML = 'please enter valid positive numbers'
    } else if ( age && age.value === 'yes'){
        let bmi = calcBmi(weight,height);
        //let message = ''
        let bmiCat = bmiCategory(bmi);
        resultDiv.innerHTML = `your Body mass index is: ${bmi.toFixed(2)} Kg/m²(${bmiCat})`
        resultDiv.style.visibility = 'visible'
    } else if(age && age.value === 'no'){

        resultDiv.innerHTML = "This calculator is for adults 18 and over. Please use a pediatric BMI calculator if under 18.";
          resultDiv.style.visibility = 'visible'; 
        resultDiv.style.background ='#fdeaea'
         resultDiv.style.color='#d32f2f'

    }

}
document.querySelector('form').addEventListener('submit', receiveValues)
    
hello = 'world'