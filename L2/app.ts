// const person :{
//     firstName :String;
//     age:number;
//     xyz:{
//         address:String;
//     }
// }={
//     firstName:"Patel",
//     age:21,
//     xyz:{
//         address:"mumbai"
//     }
// };

// console.log(person);



//Array

// const person:{
//     firstName:String;
//     age:number;
//     skills:string[];
// }={
//     firstName:"Patel",
//     age:21,
//     skills:["reactjs","nodejs"],
// };

// let favouriteLanguage1 : String [];
// favouriteLanguage1=["Hindi","English"];

// let favouriteLanguage2 : any[];
// favouriteLanguage2=["Hindi","English",21,true];


// console.log(person);




//tuples

// const person :{
//     name:String;
//     age:Number;
//     skills:String[];
//     product:[Number,String];
// }={
//     name:"Patel",
//     age:21,
//     skills:["React" , "Node"],
//     product:[10,"Macbook M2"],
// }


//enum

enum Role { Admin, Author, Read_User_Only }

const person2: {
    name: string;
    age: number;
    skills: string[];
    product: [number, string];
    role: Role;
} = {
    name: "Maurya",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Macbook Air M2"],
    role: Role.Author
}

if (person2.role === Role.Author) {
    console.log("Author");
} else if (person2.role === Role.Admin) {
    console.log("Admin");
} else if (person2.role === Role.Read_User_Only) {
    console.log("Read only_User");
}
    
