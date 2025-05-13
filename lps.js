function lps(input) {
  if (input.length === 0) {
    return null;
  }

  // if every char is unique, there are no palindromes.
  // So a quick way to check whould be to have at 
  // least 1 char with 2 or more instances.

  // Another thing, is that at some point it happens that:
  // 1. A char is found repeated (abba) 
  // 2. A char is repeated with something in the middle (aba)
  // I need to find those to cases, so I can start comparing backwards.
  const freq = new Map();
  for (let i = 0; i <= input.length; i++) {
    const char = input[i];
    freq.set(char, (freq.get(char) ?? 0) + 1);
    if (i > 0 && char === input[i-1]) {
      // first case?
      // (abbc)
    }
  }
}