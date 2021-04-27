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

let isEven = (input) => {
    if ( (typeof input === 'boolean') ){
        return false;
    } else if ( input % 2 === 0 ) {
        return true;
    } else {
        return false;
    }
}

let isVowel = (value1) => {
    if (value1 === 'a' || value1 === 'A'){
        return true;
    } else {
        return false;
    }
}