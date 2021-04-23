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
