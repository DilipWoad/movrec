export const formValidation=(email,password)=>{
    //regex
    const isValidEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

    console.log("email : ",isValidEmail);
    console.log("pass : ",isValidPassword);
    if (!isValidEmail) return "Email ID is in invalid format";
    if (!isValidPassword) return "password must contain atleast 8 character and a Special Character";
    
    return null;
}

