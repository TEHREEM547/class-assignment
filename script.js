function calculate() {

    let a1 = Number(document.getElementById("a1").value);
    let a2 = Number(document.getElementById("a2").value);
    let a3 = Number(document.getElementById("a3").value);
    let a4 = Number(document.getElementById("a4").value);
    let endsem = Number(document.getElementById("endsem").value);

    if (
        a1 < 0 || a1 > 25 ||
        a2 < 0 || a2 > 25 ||
        a3 < 0 || a3 > 25 ||
        a4 < 0 || a4 > 25 ||
        endsem < 0 || endsem > 100
    ) {
        document.getElementById("result").innerHTML =
            "Please enter valid marks!";
        return;
    }

    let total = a1 + a2 + a3 + a4 + endsem;

    let percentage = (total / 200) * 100;

    let grade;

    if (percentage >= 80) {
        grade = "A+";
    } 
    else if (percentage >= 70) {
        grade = "A";
    } 
    else if (percentage >= 60) {
        grade = "B";
    } 
    else if (percentage >= 50) {
        grade = "C";
    } 
    else if (percentage >= 40) {
        grade = "D";
    } 
   else{
     grade ="fail";
   }
    document.getElementById("result").innerHTML =
        "Total Marks: " + total + " / 200 <br>" +
        "Percentage: " + percentage.toFixed(2) + "% <br>" +
        "Grade: " + grade;
}