let min = 0;
let max = 100;
export function guess(){
    let random = (Math.random() * (max - min) + min);
    console.log(Math.round(random));
    
}