//birthDate is in Date() object
export const AgeCalculator =(birthDate)=>{
    const birthDay = new Date(birthDate); 
    const ageDifMs = Date.now() - birthDay.getTime(); //diffrence in millisec
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}