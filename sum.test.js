const { beforeEach } = require('node:test');
const {sum, name, str, fetchData, processData, promiseFn} = require('./sum.js');

beforeEach(() => {
    console.warn("This function is going to Run");
})


describe("Test cases for Sum Function", () => {
    test("sum function returns 3", () => {
        expect(sum(1,2)).toBe(3);
    });
    
    test("sum function returns 0", () => {
        expect(sum(0,0)).toEqual(0);
    });

})

test ("Object Testing", () => {
    expect(name()).toEqual({name:'muthu'})
}) 

describe("Checking Str Name", () => {

    test("Checking For Hello using Regex", () => {
        expect(str()).toMatch(/Hello/);
    })

    test("Checking For World using Regex", () => {
        expect(str()).toMatch(/World$/); 
    })

})

test("CallBack function Checking", () => {

    expect(fetchData(processData)).toEqual("Hello World")

})

//To check call back Function is called with correct arguments



test("Callback function Checking", () => {
    const mockFn = jest.fn();
    fetchData(mockFn);
    expect(mockFn).toHaveBeenCalledWith("Hello World");
});


// Testing "Promise Function"

test("Promise Function", () => {
    expect(async() => {
        const res = await promiseFn();
        expect(res).toEqual("Hello Muthu")
    }
    )
})


