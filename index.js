




function Num(val){
    document.getElementById('result').value += val;
}
function equal(){
   try {
    let Input = document.getElementById('result').value;
    let Output = eval(Input);
    document.getElementById('result').value = Output;
   }
   catch (e) {
    document.getElementById('result').value = e;
   }
}

function clr(){
    document.getElementById('result').value = '';
}
