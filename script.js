

function calculate() {
    var bmi

    var result = document.getElementById("result");
    var weight = parseInt(document.getElementById('weight').value)
    document.getElementById('weight-val').textContent = weight + 'kg'

    var height = parseInt(document.getElementById('height').value)
    document.getElementById("height-val").textContent = height + 'cm'

    bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);
    result.textContent = bmi

    if (bmi < 18.5) {
        category = 'Underweight'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal Weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Over Weight';
    } else {
        category = 'Obese';
    }
    document.getElementById("category").textContent = category;
}