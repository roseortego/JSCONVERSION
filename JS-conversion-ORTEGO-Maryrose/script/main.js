let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputTypeValue,resultTypeValue;

// to add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
// initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
if(inputTypeValue === "meter" && resultTypeValue === "centimeter"){
    result.value = Number(input.value) * 100;
}else if(inputTypeValue === "meter" && resultTypeValue === "kilometer"){
    result.value = Number(input.value) * 0.001;
}else if(inputTypeValue === "meter" && resultTypeValue === "inches"){
    result.value = Number(input.value) *39.3701;
}else if(inputTypeValue === "meter" && resultTypeValue === "feet"){
    result.value = Number(input.value) * 3.28084;
}

}