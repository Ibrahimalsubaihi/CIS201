function displayNum(x){
  console.log(x);
  document.getElementById("display").innerHTML += x;
}

function displayResult(){
  //get text
  var text_to_eva = document.getElementById("display").innerHTML;
  //evalute text
  document.getElementById("result").innerHTML = eval(text_to_eva);
}
