const analyzeArray = function (arr) {
  return {
    average: arr.reduce((a, b) => a + b, 0) / arr.length,
    min: arr.reduce((a, b) => (a < b ? a : b)),
    max: arr.reduce((a, b) => (a < b ? b : a)),
    length: arr.length
  };
};

export { analyzeArray };
