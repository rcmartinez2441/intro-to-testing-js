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
    return true;
}