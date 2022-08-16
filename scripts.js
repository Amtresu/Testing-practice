 export  const stringLength = (string) => {
    const length = string.length
    if (length == 0) {
        return "Please insert a character"
    } else if(length >= 10){
        return "Please keep the string under 10 characters"

    } else{
    
    return length
    }
}

export const reverseString = (string) =>{
    const reverse = string.split("").reverse().join("")
    return reverse
}

export class Calculator {
    static add(a,b){

        return a+b
    }

    static subtract(a,b){

        return a-b
    }

    static divide(a,b){

        return a/b
    }

    static multiply(a,b){

        return a*b
    }
}

export const capitilizeString = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
