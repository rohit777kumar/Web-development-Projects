/* Ternary Operator: The “Question mark” or “conditional” operator in JavaScript is a ternary operator that has three operands. It is the simplified operator of if/else.

 syntax:------ condition ? value if true : value if false
eg:-Input: let result = (10 > 0) ? true : false;
    Output: true

    Input: let message = (20 > 15) ? "Yes" : "No";
    Output: Yes

*/ 


function gfg() {
    // JavaScript to illustrate
    // Conditional operator
    let PMarks = 40
    let result = (PMarks > 39) ?
        "Pass" : "Fail";
 
    console.log(result);
}
gfg();




function fg() {
    // JavaScript to illustrate
    // Conditional operator
 
    let age = 60
    let result = (age > 59) ?
        "Senior Citizen" : "Not a Senior Citizen";
 
    console.log(result);
}
fg();




function g() {
    // JavaScript to illustrate
    // multiple Conditional operators
 
    let marks = 95;
    let result = (marks < 40) ? "Unsatisfactory" :
        (marks < 60) ? "Average" :
            (marks < 80) ? "Good" : "Excellent";
 
    console.log(result);
}
g();