export const FormValidate=(name,email,password)=>{
    const Checkname=/^[a-zA-Z\s]{2,50}$/.test(name);
    const CheckEmail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const CheckPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!Checkname) return "Name must be between 2 to 50 characters and contain only letters and spaces.";
    if(!CheckEmail) return "Invalid Email Address";
    if(!CheckPassword) return "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";

    return null;

};