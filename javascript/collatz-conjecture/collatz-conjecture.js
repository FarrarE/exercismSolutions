//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {

  if(n < 1)
    throw 'Only positive numbers are allowed';
    
  let count = 0;

  while(n !== 1){
    ++count;
    if(n % 2){
      n = n*3+1;
    }else n = n / 2;
  }

  return count;
};
