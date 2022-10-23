function randomNumber(max, min = 1) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  return randomNumber;
}

module.exports = { randomNumber };
