const CmToM = () => {
  if (inp_first.value) {
    const mResult = Number(inp_first.value) / 100;
    inp_second.value = mResult;
  }
};
const MToCM = () => {
  if (inp_second.value) {
    const cmResult = Number(inp_second.value) * 100;
    inp_first.value = cmResult;
  }
};



export { CmToM, MToCM };
