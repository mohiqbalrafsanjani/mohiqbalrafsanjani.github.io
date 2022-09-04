
var dateNow = new Date();
var yearNow = dateNow.getFullYear();

var text = document.getElementById("cipher").innerHTML;
var char = text.replace(/[ ,.]/g, '');
var textCount = char.length;

const asciiList = [
65,66,67,68,69,
70,71,72,73,74,
75,76,77,78,79,
80,81,82,83,84,
85,86,87,88,89,90,
48,49,50,51,52,
53,54,55,56,57
]; 

var asciiMax = asciiList.length;

function speedShiftCipher(){
  
  const tempStringResult = [];
  const tempAsciiResult = [];
  var tempTextResult = '';
  
    setTimeout(function(){
      for(let x = 0; x < textCount; x++){
        tempAsciiResult[x] = asciiList[Math.floor(Math.random() * asciiMax)];
        tempStringResult[x] = String.fromCharCode(tempAsciiResult[x]);
        tempTextResult += tempStringResult[x];
        
      }
      document.getElementById("cipher").innerHTML = tempTextResult;
    }, 500); //500 miliseconds
}

function returnText(){

  setTimeout(function(){
    document.getElementById("cipher").innerHTML = "Moh. Iqbal Rafsanjani";
  }, 1000); //1 sec
  
}

function shiftCipher(){
  
var date = new Date();
var hours = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
const stringResult = [];
const asciiResult = [];
var textResult = '';
var count = 0;
  
  for (let i = 0; i < textCount; i++) {
    count = text.charCodeAt(i)+hours+minute+second;
      if(count > asciiMax){
        count = count % asciiMax;
      }
  
    asciiResult[i] = asciiList[count];
    stringResult[i] = String.fromCharCode(asciiResult[i]);
    textResult += stringResult[i];
  }
  speedShiftCipher()
  returnText()
}

setInterval(shiftCipher, 30000);//30 sec


