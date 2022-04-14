function presistence(num){
    let numbers = num.toString().split('')
    let res = 1

    for(let i = 0; i < numbers.length; i++ ){
       if(numbers.length = 2){
           return numbers[i] * numbers[i + 1]
       } else {
           return numbers[i] * numbers[i + 1] * numbers[i + 2]
       }

       return numbers[i]
    }

    presistence(numbers)
}

console.log(presistence(1))