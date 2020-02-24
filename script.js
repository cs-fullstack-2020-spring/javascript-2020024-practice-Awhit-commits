//Define variables
let firstName;
let secondName;
let thirdName;

let firstAddy;
let secondAddy;
let thirdAddy;

let firstCity;
let secondCity;
let thirdCity;

let firstState;
let secondState;
let thirdState;

let firstZip;
let secondZip;
let thirdZip;

firstName ="Andrew Whitmore";
firstAddy = "2020 Second St";
firstCity = "Memphis";
firstState = "TN";
firstZip = "38106";


secondName ="Drew Hill"
secondAddy="201 Poplar Ave"
secondState="Memphis"
secondZip="38109"
secondCity="Tn"

thirdName ="Morgan Blake"
thirdAddy="201 Poplar Ave"
thirdState="Memphis"
thirdZip="38109"
thirdCity="Tn"
function printLabel(name,addy,city,state,zip){
    address = `
    ${name}
    ${addy}
    ${city}, ${state} ${zip}`
    return address;
}

address = printLabel(firstName,firstAddy,firstCity,firstState,firstZip);
console.log(address);
secondLabel = printLabel(secondName,secondAddy,secondState,secondCity,secondZip);
console.log(secondLabel);
thirdLabel = printLabel(thirdName, thirdAddy,thirdState,thirdCity,thirdZip);
console.log(thirdLabel);
