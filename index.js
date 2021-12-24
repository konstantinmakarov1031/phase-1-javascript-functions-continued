function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`

}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(highlight){
    const innerFunction = function (declaration = "special"){
        return `You are ${highlight}${declaration}${highlight}!`
    };
    return innerFunction;
}