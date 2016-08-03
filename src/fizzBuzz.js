function divisible_by_3(number) {
  return number % 3 === 0;
}

function divisible_by_5(number) {
  return number % 5 === 0;
}

function divisible_by_15(number) {
  return number % 15 === 0;
}

function fizzbuzz(number) {
  if (divisible_by_15(number)) {
    return 'FizzBuzz';
  }
  if (divisible_by_3(number)) {
    return 'Fizz';
  }
  if (divisible_by_5(number)) {
    return 'Buzz';
  }
  return number;
}
