let bmi = (weight, height ) => {
 let BMI = weight/(Math.pow(height,2));   
 return BMI;
}
let bmicheck = () =>{
    let BMI;
try{
height = Number(prompt("Enter your height in meters"));
weight = Number(prompt("Enter your weight in kilograms"));
if(isNaN(height) || isNaN(weight)){
    console.log("Enter a valid input");
    return;
}else{
    BMI = bmi(weight,height);
}
if(BMI < 18.5){console.log("Under Weight: "+BMI.toFixed(2));}
else if(BMI >= 18.5 && BMI <= 24.9){console.log("Normal Weight: "+BMI.toFixed(2));}
else if(BMI >= 25 && BMI <= 29.9){console.log("Overweight: "+BMI.toFixed(2));}
else if(BMI >= 30){console.log("Over weight: "+BMI.toFixed(2))}
} catch (error){
    console.log("error occured");
}
}

bmicheck();