// Object, Array, Tuple, Enum
const person : {
    firstName: string;
    age: number;
    xyz : {
        address:string;
    }
} = {
    firstName: "Patel",
    age: 21,
    xyz :{
        address : "Mumbai"
    }
};



const person1: {
    firstName: string;
    age: number;
    skills: string[];
} = {
    firstName: "Patel",
    age: 21,
    skills: ["Reactjs", "Nodejs"],
};

let favouriteLanguage1: string[];
favouriteLanguage1 = ["Hindi", "English"];

let favouriteLanguage2: any[]; // loose ts powerfull
favouriteLanguage2 = ["Hindi", "English", 21, true];

console.log(person);