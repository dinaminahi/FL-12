const maxElement = (arr) => Math.max(...arr);

const copyArray = (arr) => [...arr];

const addUniqueId = (obj) => {
    let uniqueId = Symbol();
    return {id: uniqueId, ...obj};
}

const findUniqueElements = (arr) => [...new Set(arr)];


const hideNumber = (number) => {
    let length = number.length;
    return number.substr(length - 4).padStart(length, '*');
}

const missPropery = () => {
    throw new Error('Missing property');
}

const add = (a = missPropery(), b = missPropery()) => { 
       return a + b;
}