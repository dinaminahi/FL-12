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

const logNamesPromises = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then((myJson) => {
        let names = myJson.map(el => el.name);
        return names;
    })
    .then((names) => {
        console.log(names.sort((a, b) => {
            if (a.toLowerCase() <  b.toLowerCase()) {
                return -1;
            } else if (a.toLowerCase() >  b.toLowerCase()) {
                return 1;
            } else {
                return 0;
            }
        }));
    });
}

const logNamesAsync = async (url) => {
    const fetchRequest = await fetch(url);
    const myJson = await fetchRequest.json();
    let names = myJson.map(el => el.name);
    console.log(names.sort((a, b) => {
        if (a.toLowerCase() <  b.toLowerCase()) {
            return -1;
        } else if (a.toLowerCase() >  b.toLowerCase()) {
            return 1;
        } else {
            return 0;
        }
    }));
}
