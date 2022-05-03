const caesarCipher = function (string) {
  const arr = string.split("").map((char) => char.charCodeAt(0));

  const shiftedCode = arr.map((code) => {
    if (code < 65 || code > 122 || (code > 90 && code < 97)) return code;
    if (code > 109 || (code > 77 && code < 91)) return code - 13;
    return code + 13;
  });
  return shiftedCode.map((code) => String.fromCharCode(code)).join("");
};

export { caesarCipher };
