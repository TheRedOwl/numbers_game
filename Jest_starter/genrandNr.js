export const generateRandomNR=(min,max)=>{
    let rnNum = Math.floor((Math.random() * max) + min)
    return rnNum
}