// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Exercise #1
describe ('sayhello', function () {
    it('should be a defined function called sayHello', function (){
       expect(typeof sayHello).toBe('function');
    });
    it('should return a string value', function () {
       expect( typeof sayHello() ).toBe(`string`);
    });
    it('should return the value a user input in a string', function () {
        expect(sayHello(`Raul`)).toBe(`Hello, Raul`);
    });
    it('should never be undefined', function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});