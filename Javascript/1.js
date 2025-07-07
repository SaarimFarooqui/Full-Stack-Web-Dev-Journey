function getGrade(score){
    if (isNaN(score)){console.log("Enter a valid input");
        return;
    }
    if (score >= 90){ console.log("Passed with A grade"); }
    else if (score >= 80){ console.log("Passed with B grade"); }
    else if (score >= 70){ console.log("Passed with C grade"); }
    else if (score >= 60){ console.log("Passed with D grade"); }
    else if (score < 60){ console.log("Grade F. Better luck next time"); }
}

try {
    let s = Number(prompt("Enter the score out of 100"));
    getGrade(s);
} catch (error) {
    console.log("Did not enter a valid input")
}
