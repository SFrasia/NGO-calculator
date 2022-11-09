function compute()
{
    //creating variables to perform operations
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value
    var years = document.getElementById("years").value
    var interest = principal * years * rate /100;
    
    var year = new Date().getFullYear()+parseInt(years);

    //check if the principal is valid or not
    if(principal ==undefined || principal <=0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return
    }
    else{
        var inr = "If you deposit <mark>" + principal+",</mark><br>";
        var ra = "at an interest rate of <mark>" + rate+"%,</mark><br>";
        var am = "You will receive an amount of <mark>"+ interest+",</mark><br>";
        var ye = "in the year <mark'>" + year +"</mark>"; 
       
        document.getElementById("result").innerHTML=inr+ra+am+ye;
    }

}

function UpdateRate() 
{
    var ratevalue = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=ratevalue;
}