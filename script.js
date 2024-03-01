function calculate(){
    var number = parseFloat(document.getElementById("number").value);
    var percent = parseFloat(document.getElementById("percent").value);
    var resultText = " ";

    if(isNaN(number) || isNaN(percent)){
        resultText = "Invalid input Please enter valid number.";
    }
    else{
        var result = (number*percent)/100;
        resultText = "Result:"+ result.toFixed(2);
    }

    document.getElementById("result").innerText = resultText;
}

function clearInputs(){
    document.getElementById("number").value = "";
    document.getElementById("percent").value = "";
    document.getElementById("result").innerText = "Result";
}