document.addEventListener("DOMContentLoaded", function(){
    let inps = ["age", "weight", "height"];

    inps.forEach(id => {
        document.getElementById(id).addEventListener('focusout', function(){
            checkCorrectData(id);
        });
    });
});

function submitHandler(){
    let rbs = ["weight", "gender"];
    let inps = ["age", "weight", "height"];

    let messages = [];
    let message = "";

    inps.forEach(id =>{
        messages.push(checkFilled(id, "input"));
    });

    rbs.forEach(name =>{
        messages.push(checkFilled(name, "radio"));
    });

    messages = messages.filter(item => !!item).flat();

    if (messages.length > 0){
        message = "Please enter the "
        messages.forEach(m => {
            message += `${m}, `;
        });
        message = message.slice(0, -2);
        alert(message);
    }
    else{
        calculateBMI();
        toResult();
    }
}

// to ensure input boxes are filled with proper data
function checkCorrectData(id) {
    let val = parseFloat(document.getElementById(id).value);

    if (isNaN(val)){
        alert("Please enter a number!");
    }
}

// to ensure that all the data is filled before calculating BMI
function checkFilled(name, type){
    if (type == "radio"){
        let rbs = document.getElementsByName(name);
        let check = false;

        for (let i = 0; i < rbs.length; i++) {
            if (rbs[i].checked){
                check = true;
                break;
            }
        }

        if (!check){
            return `${name}-type`;
        }

        return;
    }
    else if (type == "input"){
        let out = [];

        if (document.getElementById(name).value == ""){
            out.push(`${name}`);
        }

        return out;
    }
}

function calculateBMI(){
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let kgs = document.getElementById("kg").checked;
    
    if (!kgs){
        weight /= 2.2;
    }

    let BMI = weight/((height/100)**2);
    BMI = BMI.toFixed(1);

    document.getElementById("result").innerHTML = BMI

}

function toCalc() {
    document.getElementById("calculator").classList.toggle("active");
}

function toResult() {
    document.getElementById("results").classList.toggle("active");
}
