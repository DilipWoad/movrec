//birthDate is in Date() object
export const AgeCalculator =(birthDate)=>{
    const birthDay = new Date(birthDate); 
    const ageDifMs = Date.now() - birthDay.getTime();
    const ageDate = new Date(ageDifMs); 
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}