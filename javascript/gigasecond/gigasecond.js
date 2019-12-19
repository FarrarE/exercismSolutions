//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  let newDate = new Date(date);
  let days = 11574;
  let seconds = 2800;

  newDate.setDate(newDate.getDate() + days);
  newDate.setSeconds(newDate.getSeconds() + seconds);
  return newDate
};
