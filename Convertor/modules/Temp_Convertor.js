const CelToFah = (inp_first,inp_second) => {
  const celsius = inp_first.value.trim();
  if (celsius) {
    const fah = (celsius * 9) / 5 + 32;
    console.log(fah);
    inp_second.value = fah;
  }
};

const FahToCel = () => {
  const fah = inp_second.value.trim();
  if (fah) {
    const cel = ((fah - 32) * 5) / 9;
    inp_first.value = cel;
  }
};

export { CelToFah, FahToCel };
