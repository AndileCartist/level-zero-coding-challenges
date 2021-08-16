function getVowels(str) {
  let vowels = [];
	let reg = /[aAeEIiOoUu]/g;
  let allVowels = str.match(reg).join().toLowerCase();
	allVowels.split(",").forEach(ltr => {
		if(vowels.indexOf(ltr) === -1) {
			vowels.push(ltr)
		}
	})
  console.log("Vowels :", vowels.join(","));
}
