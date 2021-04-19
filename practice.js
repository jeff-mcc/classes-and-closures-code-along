/* 
  Once you complete a problem, refresh ./closures.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////
/* 
  Below we have a function named count that takes in a number
  Create a closure that will increment num by one and return the result when invoked

  (Hint: When newClosure is invoked, it should return 6 the first time, 7 the second time, etc.)

*/

function count(num){
    return function(){
      return num += 1;
    }
};


// Do not edit the code below.
var newClosure = count(5);

// Do not edit the code above.



////////// PROBLEM 2 //////////
/* 
  Using closures and only the arguments from greeting and greetingClosure's invocations included below, write a function that will make the below code work
  When greetingClosure is invoked with 'Hello', it should return 'Hello Henry'
  'Henry' should be coming from the argument given to the function named greeting

  ------------- CODE TO MAKE WORK ------------
  const greetingClosure = greeting('Henry');
  greetingClosure('Hello')
  
*/
 
function greeting(name){
  return function(greet){
    return `${greet} ${name}`
  }
}
    
    


// After you have created the greeting function above, uncomment the code below, but do not edit it

const greetingClosure = greeting('Henry');
let greet = greetingClosure('Hello')
    


////////// PROBLEM 3 //////////
/* 
  Here we will be creating a calculator

  Write a function called calculatorCreator
  Create a variable called num inside of calculatorCreator that is equal to the value 0
  Use the module pattern to create four additional methods named add, subtract, multiply and divide
  These methods should each take in a number parameter
  They should use the parameter to change the original num variable (by adding, subtracting, multiplying and dividing)

*/

function calculatorCreator(){
  let num = 0;
  return {
    add: function(val){
      return num += val;
    },
    subtract: function(val){
      return num -= val;
    },
    multiply: function(val){
      return num *= val;
    },
    divide: function(val){
      return num /= val;
    }
  }
}



////////// PROBLEM 4 //////////
/* 
  Create a class called Puppy
  The class should have a constructor that accepts three parameters: happiness, energy, and behavior
  
*/

class Puppy{
  constructor(happiness,energy,behavior){
    this.happiness = happiness;
    this.energy = energy;
    this.behavior = behavior;
  }
}



////////// PROBLEM 5 //////////
/* 
  Create a class called Car that creates two properties on each Car object
  The properties should be called manufacturer and year
  The class should also have a method called displayManufacturer that returns the manufacturer
  It should also have a method called displayYear that returns the year

*/

class Car{
  constructor(manufacturer,year){
    this.manufacturer = manufacturer;
    this.year = year;
  }
  displayManufacturer(){
    return this.manufacturer;
  }
  displayYear(){
    return this.year;
  }
}



////////// PROBLEM 6 //////////
/* 
  Using the Puppy class from Problem 4 as a template, create a new class called Panda
  The class should have a constructor that accepts three parameters: happiness, energy, and behavior
  
  This Panda class should also include two prototype methods:
    - getTreat: This method should increase happiness by 20 and return the new happiness value
    - takesNap: This method should decrease energy by 45 and increase behavior by 15

*/

class Panda extends Puppy{
  constructor(happiness,energy,behavior){
    super(happiness,energy,behavior)
  }
  getsTreat(){
    return this.happiness += 20;
  }
  takesNap(){
    this.energy -= 45;
    this.behavior += 15;
    return this
  }
}