// code your solution here
//Declaring saturdayFun function using the function keyword and setting a default argument to it to be used when no arguments are passed
function saturdayFun(funActivity = "roller-skate"){
    return `This Saturday, I want to ${funActivity}!`; //expected output
}

//calling the function and passing an argument to its parameter
let returnedFunActivity = saturdayFun("bathe my dog");
console.log(returnedFunActivity)


//Defining mondayWork function using a function expression and set a default argument to it to be used when no arguments are passed
const mondayWork = function(workActivity = "go to the office"){

    return `This Monday, I will ${workActivity}.`; //expected output
}

//Calling the function and passing arguments to it
let returnedWorkActivity = mondayWork(`work from home`);
console.log(returnedWorkActivity)

function wrapAdjective(wrap){
    return function(description = "special"){

        return `You are ${wrap}${description}${wrap}!`;

    }
}

// calling the function 
console.log(wrapAdjective(`*`)(`a hard worker`))

