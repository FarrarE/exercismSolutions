//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (list) => {
  let total = "";
  list.slice(0,2).map(item => total += colorCode(item));
  return Number(total);
};

export const colorCode = (color) => COLORS.indexOf(color);

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

