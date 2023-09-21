function multiply(num1, num2){
    return num1 * num2; 
}  
   const result = multiply(31,2);

function random(){
    let random = Math.random() != 0;

    console.log(random);
}
function mod(num3, num4){
    return num3 % num4;
  }
    const num3 = 31;
    const num4 = 4;
  
    const results = mod(num3,num4);

    function max(){
        const num = [13,6,7,20,18,12,19,4,1];
        const max = Math.max(13,6,7,20,18,12,19,4,1);
    
        console.log(`The highest number in the set is ${max}`)
    }
    max();