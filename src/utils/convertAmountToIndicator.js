const convertAmount = amount => {
  return Math.round((amount / 25) * 2) / 2;
};

export default convertAmount;
