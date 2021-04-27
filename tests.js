// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World" when executed', function() {
      expect(helloWorld()).toBe("Hello, World");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Exercise #1- #9
describe ('sayhello', function () {
    it('should be a defined function called sayHello', function (){
       expect(typeof sayHello).toBe('function');
    });
    it('should return a string value', function () {
       expect( typeof sayHello() ).toBe(`string`);
    });
    it(`should return 'Hello, Jane' when imputed a value`, function () {
        expect(sayHello(`Jane`)).toBe(`Hello, Jane`);
    });
    it(`should return 'Hello, Alex'`, function () {
        expect(sayHello(`Alex`)).toBe(`Hello, Alex`);
    });
    it(`should return 'Hello, Pat' as well`, function () {
        expect(sayHello(`Pat`)).toBe(`Hello, Pat`);
    });
    it(`should return 'Hello, World'`, function () {
        expect(sayHello()).toBe(`Hello, World`);
    });
    it(`should return 'Hello, World' when input is true`, function () {
        expect(sayHello(true)).toBe(`Hello, World`);
    });
    it(`should return 'Hello, World' when input is false`, function () {
        expect(sayHello(false)).toBe(`Hello, World`);
    });
});

//Exercise #10
describe(`isFive`, function (){
   it(`Should be a defined function called isFive`, function (){
      expect(typeof isFive).toBe(`function`);
   });
    it('should return a boolean value no matter the input', function () {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true if input is "5"', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true if passed a string "5"', function () {
        expect(isFive('5')).toBe(true);
    });

});

//Exercise #11
describe('isEven', function () {
    it('should de a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean no matter the input', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when passed the number 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed the number 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when entered "banana"', function () {
        expect(isEven('banana')).toBe(false);
    });
    it(`should return true when passed string '8'`, function () {
        expect(isEven('8')).toBe(true);
    });
    it(`Should return false when passed 'Infinity'`, function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it(`should return false when passed a boolean 'true'`, function () {
        expect(isEven(true)).toBe(false);
    });
    it(`should return false when passed a boolean 'false'`, function () {
        expect(isEven(false)).toBe(false);
    });
    it(`should return false when called without an argument`, function () {
        expect(isEven()).toBe(false);
    });
});

//Exercise #12
describe('isVowel', function () {
    it(`should be a defined function`, function () {
        expect(typeof isVowel).toBe('function');
    });
    it(`should always return a boolean regardless of input`, function () {
        expect( typeof isVowel() ).toBe('boolean');
    });
    it(`should return true when passed string "a" `, function () {
        expect(isVowel('a')).toBe(true);
    });
    it('should return true when passed the string "A" ', function () {
        expect(isVowel('A')).toBe(true);
    });
    it('should return false when passed "y"', function () {
        expect(isVowel('y')).toBe(false);
    });
    it('should return false when passed the number 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed boolean value "true" ', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed boolean value "false"', function () {
        expect(isVowel( false)).toBe(false);
    });
    it('should return false when passed "banana"', function () {
        expect(isVowel('banana')).toBe(false);
    });
    it('should return false if passed without any parameters', function () {
        expect(isVowel()).toBe(false);
    });

});
// adding another test and code to intro-to-testing for exercise #12
