function convert(){
    let machineResult = document.getElementById("inp").value;
    let tearInGm = (machineResult * 16)/9.81;
    document.getElementById("res").innerText= "Result is: "+ Math.round(tearInGm) +" gm";  
}