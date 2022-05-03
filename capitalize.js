const capitalize = function (string) {
  return string.trim()[0].toUpperCase() + string.trim().slice(1);
};

export { capitalize };
