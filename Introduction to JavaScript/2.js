let getGrade = (grade = 70) =>{
        grade = Number(grade);
        if(isNaN(grade)){console.log("Not a number");}
        else if(grade >= 90){console.log("Grade A");}
        else if(grade >= 80){console.log("Grade B");}
        else if(grade >= 70){console.log("Grade C");}
        else if(grade >= 60){console.log("Grade D");}
        else if(grade < 60){console.log("Grade F");}
} 
try {
    getGrade();
} catch (error){
    console.log("Invalid Input");
}