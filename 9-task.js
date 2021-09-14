function getVowels(string) {
  const vowels = [],
	 reg = /[aAeEIiOoUu]/g,
   allVowels = string.match(reg).join().toLowerCase();
	allVowels.split(",").forEach(letter => {
		if(vowels.indexOf(letter) === -1) {
			vowels.push(letter)
		}
	})
  console.log("Vowels :", vowels.join(","));
}
