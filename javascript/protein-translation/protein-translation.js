//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (RNA) => {

  let proteins = [];

  // Base case
  if(!RNA)
    return proteins;

  let length = RNA.length;
  let protein;
  let slice;

  while(length > 0){

    // Gets 3 char codon
    slice = RNA.slice(0,3)

    // Stops if slice is the exit code
    if(slice === "UAA" || slice ===  "UAG" || slice === "UGA")
      return proteins;

    // Returns associated protein
    protein = getProtein(slice);

    // Throws on invlaid codon input
    if(protein === ERROR)
      throw ERROR;
      
    // Build solution
    proteins.push(protein);

    // Shrink array
    RNA = RNA.substring(3, length);

    // update length required for exit condition
    length = RNA.length;
  }

  return proteins;
};

// Returns protein associated with three char codon
// Returns ERROR if codon is invalid
const getProtein = (codon) =>{

  if(codon === "AUG")
    return "Methionine";

  if(codon === "UUU" || codon === "UUC")
    return "Phenylalanine";

  if(codon === "UUA" || codon ===  "UUG")
    return "Leucine";
    
  if(codon === "UCU" || codon ===  "UCC" || codon === "UCA" || codon === "UCG")
    return "Serine";
    
  if(codon === "UAU" || codon === "UAC")
    return "Tyrosine";

  if(codon === "UGU" || codon === "UGC")
    return "Cysteine";

  if(codon === "UGG")
    return "Tryptophan";

  return ERROR;
}

const ERROR = "Invalid codon";