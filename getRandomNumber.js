const getRandomletter = (length) => {
  let randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
};

console.log(getRandomletter(1));
console.log(getRandomletter(1));
console.log(getRandomletter(1));
console.log(getRandomletter(1));
console.log(getRandomletter(1));
