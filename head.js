// FUNCTION IMPLEMENTATION

const head = function(array) {
  return array[0];
};


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
//Comparing identical strings
assertEqual("hello", 'hello');
//Comparing non-identical strings
assertEqual("Lighthouse Labs", "Bootcamp");
//Comparing identical numbers
assertEqual(1, 1);
//Comparing non-identical numbers
assertEqual(87, 110);


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");