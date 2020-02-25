let buddyList;
let buddy;
buddyList =[];


while (buddy !="q"|| buddy !="Q"){
    buddy = prompt("What is your buddy's name?");
    buddyList.push(buddy);
}

function buddyFormatter(index, name){
    return `Buddy ${index} is ${name}`
}
for (let step = 0; step < buddyList.length; step++){
    console.log(buddyFormatter(buddyList[step-1],step));
}
console.log(buddyFormatter(buddyList[step-1],step));

buddyFormatter(wheresBuddy,whosBuddy)