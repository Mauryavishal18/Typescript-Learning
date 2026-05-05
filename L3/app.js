"use strict";
// function combine (num1 : number | string, num2:number | string){
//     let result;
//     if(typeof num1==="number" && typeof num2=="number"){
//         result=num1+num2;
//     }else{
//         result=num1.toString() + num2.toString();
//     }
function combine(num1, num2, conversionType) {
    let result;
    if (typeof num1 === "number" && typeof num2 == "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
const sum1 = combine(10, 20, "as-number");
const sum2 = combine(10, 50, "as-number");
const combineName = combine("Patel", "MernStack", "as-string");
console.log(sum1, sum2, combineName);
const user = {
    name: "Maurya",
    age: 22,
    skills: ["react", "Node"]
};
