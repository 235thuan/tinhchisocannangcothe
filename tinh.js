
function Tinh() {
    var x1 = document.getElementById('diem1');
    var x2 = document.getElementById('diem2');
    var TB = document.getElementById('bmi');


    bmi = parseFloat(x1.value) / (parseFloat(x2.value) * parseFloat(x2.value));

    TB.innerHTML = bmi.toFixed(1);

    if (bmi < 18) {
        document.getElementById("demo").innerHTML = "Underweight";
    }
    else if (bmi < 25.0) {
        document.getElementById("demo").innerHTML = "Normal";
    }
    else if (bmi < 30.0) {
        document.getElementById("demo").innerHTML = "Overweight";
    }
    else {
        document.getElementById("demo").innerHTML = "Obese";
    }

}