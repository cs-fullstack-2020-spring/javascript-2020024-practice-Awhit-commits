//Define Variables
let quizNumber = [];
let grades =-9999;


//While loop for getting the grades
while (grades != -1){
    grades = parseInt(prompt("Enter a number:"))

    if (grades !=-1){
        quizNumber.push(grades);
    } //Stop if it's -1 is entered


}
console.log(quizNumber);

//Doing getting the total and returning the average
function gradeAverage(newList){
    let sum =0;
    for (let index = 0; index < newList.length; index++) {
        sum+= newList[index];
        
        
    }
    total = sum / newList.length
    return (total);
}
results = gradeAverage(quizNumber);
alert(`Your average is ${results}`)