export const validateInp = (inp, val) => {
  if (inp !== 'null' && val === '.' && inp.toString().includes(val)) {
    return false;
  }

  return true;
}
