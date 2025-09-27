/* 
list = ["Apple","Guava","Melon","Cherry","Blueberry","Custard Apple","Grape"]

list.forEach(name => {
    console.log(name);
});
list.forEach((name,index) => {
    console.log(`${index+1} ${name}`);
}); 

for(a of list){
    console.log(a);
}
for(a in list){
    console.log(a);
}
    
let a = 10;
if(a==10? console.log("Its 10"):console.log("Its not 10"));

const sur_name = Symbol("Farooqui");
const user = {
    name: "Saarim",
    [sur_name]: "Farooqui"
};
console.log(user[sur_name]);
console.log(Object.keys(user));
console.log(user.name + " " + user.sur_name)
*/
let id = Symbol("fulana")

person = {
    name : "Ahmed Saarim Uddin Farooqui",
    [id] : "22sp-004-cs"
}

console.log(person[id]);