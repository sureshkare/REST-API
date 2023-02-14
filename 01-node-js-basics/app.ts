let courseName:string = `Backend Web Development`;
console.log(courseName);

let printNumbers = (start:number, end: number):void => {
     
     if(start < end){
        let temp:string = "";
        for (let i:number = start; i <= end; i++){
            temp += `${i} `;
        }
        console.log(temp)
     }
     else{
        console.log("Invalid numbers");
     }
}

printNumbers(50, 1000);