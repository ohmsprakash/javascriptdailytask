const inputBtn1 = document.getElementById("input-btn1");
const inputBtn2 = document.getElementById("input-btn2");
const inputBtn3 = document.getElementById("input-btn3");
const inputBtn4 = document.getElementById("input-btn4");
const inputBtn5 = document.getElementById("input-btn5");
const inputBtn6 = document.getElementById("input-btn6");
const value1 = document.getElementById("input1");
const value2 = document.getElementById("input2");
const value3 = document.getElementById("input3");
const value4 = document.getElementById("input4");
const value5 = document.getElementById("input5");
const value6 = document.getElementById("input6");
const value7 = document.getElementById("input7");
 
function getLogicalOperators(){
    document.getElementById("demo1").innerHTML = value1.value==value2.value;
    document.getElementById("demo2").innerHTML = value1.value===value2.value;
    document.getElementById("demo3").innerHTML = value1.value!=value2.value;
    document.getElementById("demo4").innerHTML = value1.value!==value2.value;
    document.getElementById("demo5").innerHTML = value1.value>value2.value;
    document.getElementById("demo6").innerHTML = value1.value<value2.value;
    document.getElementById("demo7").innerHTML = value1.value>=value2.value;
    document.getElementById("demo8").innerHTML = value1.value<=value2.value;
}

inputBtn1.addEventListener("click",getLogicalOperators)

function getInputValues() {
  document.getElementById("demo9").innerHTML = value3.value%2==0 ? "Even" : "Odd"
}

inputBtn2.addEventListener("click", getInputValues);


function getMajorOrMinor() {
    document.getElementById("demo10").innerHTML = value4.value>=18 ? "Major" : "Minor"
  }
  
inputBtn3.addEventListener("click", getMajorOrMinor);

function getGrade() {
    document.getElementById("demo11").innerHTML = value5.value>=90 ? "A" : value5.value>=75 ? "B" : value5.value>=60 ? "C" : value5.value>=45 ? "D" : value5.value<45 ? "F" : ""
  }
  
inputBtn4.addEventListener("click", getGrade);

function getTemparatureCatageory() {
    document.getElementById("demo12").innerHTML = value6.value > 30 ? "Hot" : value6.value >= 20 ? "Warm" : value6.value >= 10 ? "Cool" : value6.value < 10 ? "Cold" : ""
  }
  
inputBtn5.addEventListener("click", getTemparatureCatageory);

function getAgeGroup() {
    document.getElementById("demo13").innerHTML = value7.value <=12 ? "Child" : value7.value <=19 ? "Teen" : value7.value <=64 ? "Adult" : value7.value >= 65 ? "Senior" : ""  
  }
  
inputBtn6.addEventListener("click", getAgeGroup);
