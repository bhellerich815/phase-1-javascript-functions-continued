// Your code here
function saturdayFun(activity = "roller-skate") {
    return`This Saturday, I want to ${activity}!`;
}
// saturdayFun();
// saturdayFun("bathe my dog");

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(str = '*') {
    return function(name = 'special') {
        return `You are ${str}${name}${str}!`
    }
}
wrapAdjective('%')('a dedicated programmer')