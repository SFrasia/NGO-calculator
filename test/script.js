function compute() {
    //creating variables to perform operations
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const interest = principal * years * rate / 100;
    const year = new Date().getFullYear() + parseInt(years);

    //check if the principal is valid or not
    if (principal === undefined || principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return
    }

    const inr = "If you deposit <mark>" + principal + ",</mark><br>";
    const ra = "at an interest rate of <mark>" + rate + "%,</mark><br>";
    const am = "You will receive an amount of <mark>" + interest + ",</mark><br>";
    const ye = "in the year <mark'>" + year + "</mark>";

    document.getElementById("result").innerHTML = inr + ra + am + ye;

}

function updateRate() {
    document.getElementById("rate_val").innerText
        = document.getElementById("rate").value + "%";
}
