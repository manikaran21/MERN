const app = require('../script');
const assert = require('chai').assert;
const expect = require('chai').expect;

// Here you need to write the test cases using assert
describe('General Test Cases', () => {
    //This test case should call sayhello() function and check and check the expected string
    it('Should return hello', () => {
        const username = /[a-zA-z]*/;
        assert.equal(app.sayHello(username) , `Hello ${username}`);
    });
    //This test case should class factorial function and check the expected result (factorial of a number)
    it('Should return factorial of a number', () => {
        const number = /[0-9]/ ;
        const result =  function(number){
            let fact = 1 ;
            for(let i=2 ;i<=number ;i++){
                fact = fact * i ;
            }
            return fact ;
        };

        assert.equal(app.Factorial(number) , result());
        
    });
    //This test case should call factorial() funtion and check the type of returned value to be a number
    it('Factorial() Should return number', () => {
        const number1 = /[0-9]/ ;
        assert.equal(app.Factorial(number) , number1);
        

    });
});

// Here you need to write the test cases using expect
describe('New Test Suite', () => {
    // This test case should call getPerson() function and check the age property in person object
    it('Person should have age property', () => {
        assert.equal(app.getPerson().age , true);
    });

    // This test case should call GetUsers() function and check the name property in person object
    it('User should have name property', (done) => {
        assert.equal(app.GetUsers().name , true);
    });
});
