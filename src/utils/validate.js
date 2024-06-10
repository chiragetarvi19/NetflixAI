export const checkValidData = (email, password) =>{
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid && !isPasswordValid) return "Invalid Email & Password";
    if(!isEmailValid) return "Invalid Email";
    if(!isPasswordValid) return "Invalid Password";
    return null;
}