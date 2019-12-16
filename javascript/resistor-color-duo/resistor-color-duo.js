//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (list) => {  
  let result;

  if(list.length === 1)
    result = colorCode(list[0]);
  else 
    result = colorCode(list[0]) * 10 + colorCode(list[1]);

  return result;
};

export const colorCode = (color) => COLORS.indexOf(color);

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

