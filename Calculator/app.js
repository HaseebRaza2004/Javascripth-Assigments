var input1 =document.getElementById("input1");
var input2 =document.getElementById("input2");
var result =document.getElementById("result");

function calculate(sign) {
    var input1_value = input1.value;
    var input2_value = input2.value;

    if (sign == "+") {return(result.innerText =  +input1_value +  +input2_value)};
    if (sign == "-") {return(result.innerText =  input1_value -  input2_value)};
    if (sign == "x") {return(result.innerText =  input1_value *  input2_value)};
    if (sign == "/") {return(result.innerText =  input1_value /  input2_value)};
}