//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const GIGASECOND =  Math.pow(10, 9);

export const gigasecond = (date) => {
  let newDate = new Date(date);
  newDate.setUTCSeconds(newDate.getUTCSeconds() + GIGASECOND);
  return newDate
};
