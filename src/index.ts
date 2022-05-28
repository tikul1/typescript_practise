
{
    const data : string = "hello world";
    console.log(data);
    let id : number = 12;



let isBoolean : boolean = true
let x : any = "hey"

let numberArray : number[] = [1,2,3,4,5,];
let anyArray : any[] = [1,"hey", true];


//tuple
let tupleData : [number, string , boolean] =  [1, "string", false];
let tupleArray : [number, string, boolean][] 
tupleArray = [
    [1, "hey", true],
    [2,"hello", false]
]

//union

let id1 : string | number = 22;

//enum
enum xyz {
    a =1 ,
    b,
    c,
    d,
    e,
}
console.log(xyz);

//objectss

const user: {
    id: number,
    name: string,
} = {
    id: 1,
    name: "hardik"
}

//diffrent way

type User = {
    id: number,
    name: string
}

const user1: User = {
    id: 1,
    name: "hardik"
}


//type assertion

let custId : any = 1
let cId = custId as number



}

//functions

function addNum(x: number, y:number): number {
    console.log(x+y);
    return x+y;

}
addNum(2,3)

//using void 
function addnum2(x: number | string): void {
    console.log(x);
    
}
 addnum2("hh")

 interface userInterface {
   //readonly so it cant be changed.
    readonly  id: number,
     name: string,
     age? : number
 }
 const user1: userInterface  = {
     id: 1,
     name: "hardik",
     //optional
    //  age: 28      
 }

