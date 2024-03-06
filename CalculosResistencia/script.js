function FazerCalculo(){
    let valueF01 = document.getElementById("faixa01").value;
    let valueF02 = document.getElementById("faixa02").value;
    let mult = document.getElementById("multi").value;
    let tol = document.getElementById("Toler").value;
    let resis = (parseFloat(valueF01+valueF02)) * parseFloat(mult);
    parseFloat(document.getElementById("result").value = resis);
    let TolerP = resis+(resis*parseFloat(tol));
    let TolerN = resis-(resis*parseFloat(tol));
    parseFloat(document.getElementById("resultTP").value = TolerP);
    parseFloat(document.getElementById("resultTN").value = TolerN);
   
}