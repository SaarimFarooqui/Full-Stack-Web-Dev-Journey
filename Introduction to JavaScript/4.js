let validateEmail = (email) => {
    if (email.includes("@") && email.includes(".")){
        console.log(`The email ${email} is a valid email`);
    }else{
        console.log(`The email ${email} is an invalid email`);
    }
}

let userEmail = String(prompt("Enter your email")).toLowerCase().trim();
validateEmail(userEmail);

