// helloWorld function 
let helloWorld = function() {
    return `Hello, World`;
}

function sayHello(name) {
    if( (name === undefined) || (typeof name === `boolean`)) {
        name = helloWorld();
        return name;
    } else {
        return `Hello, ${name}`;
    }
}

let isFive = (input) => {
    return true || false;
}

let isEven = (input1, input2) => {
    if (input1 % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let isVowel = (value) => {
    if (value === 'a'){
        return true;
    } else {
        return false;
    }
}