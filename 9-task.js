function getVowels(str) {
  const vowels = [];
  const vowelCombinations = /[aAeEIiOoUu]/g;
  const matchedVowels = str.match(vowelCombinations).join().toLowerCase();
  matchedVowels.split(",").forEach((letter) => {
    if (vowels.indexOf(letter) === -1) {
      vowels.push(letter);
    }
  });
  console.log(`Vowels : ${vowels.join(",")}`);
}
