function sum (a,b) {
    return a+b;
};

function name(){
    return {name: 'muthu'}
}

function str(){
    return "Hello World"
}

function fetchData(callback){
    const msg = "Hello World";
    return callback(msg);
};

function processData(data){
    return data;
};

function promiseFn(){
    return new Promise((resolve,reject) => {
        resolve("Hello Muthu");
    })
}


module.exports = { sum, name ,str, fetchData, processData, promiseFn};