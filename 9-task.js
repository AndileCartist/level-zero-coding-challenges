function getVowels(str) {
  let vowels = [];
  str.split("").forEach((ltr) => {
    switch (ltr) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowels.push(ltr);
        break;
    }
  });
  console.log("Vowels :", vowels.join(","));
}
