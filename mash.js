function random(num) {
    const randomNum = Math.random();
    const times = randomNum *num;
    const final = Math.floor(times);
    return final;
}

function mash() {
    if (process.argv[2] === undefined) {
        return"Input type of abode";
    }
    else{
   return  "You will live in a "+ getHome() + ", and you will have " + getChildrenCount() + " children" +" and you'll drive a " +getCar() + ". Your wife's name will be " + nameOfSpouse() + " and you will make "+ salery() + "." + " You will live to the age of "+ age() + "and be a " + career() + "." ;
}

}

function getHome() {
  array = ["Mansion" , "Apartment" , "Shack" , "House" , "Swamp", process.argv[2]];



return array[random(array.length)];

}


function getChildrenCount() {
   //let childCount = Math.random();
    //let times = childCount *101;
    //let final = Math.floor(times);
    //return final;
let ranarg = Math.random()*101;
if (ranarg<=50){
    return process.argv[3];
}
else{
    return Math.floor(Math.random()*101);
}
}
function getCar() {
   const array= ["lambo","bmw","audi","honda","mini coop","prius",process.argv[4]];
   return array[random(array.length)];
}

console.log(mash());

function nameOfSpouse() {
    const array = ["Andrea","Sarah","Jill","Karen","Janyia"];
    return array[random(array.length)];
}

function salery() {
    const array = ["$65,000","$90,000","$170,000","$550,000","1.5 mil", "$-2,000"];
    return array[random(array.length)];
}
function age() {
    const array = [ "20","30","40","50","60","70","80","90","100","110"]
    return array[random(array.length)];
}
function career() {
    const array = [ "Doctor","Paper Salesman","Spy","Lifeguard", "Soccer Coach","Jail Guard"]
    return array[random(array.length)];
}
