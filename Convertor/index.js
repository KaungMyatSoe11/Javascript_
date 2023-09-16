import { CmToM, MToCM } from "./modules/Length_Convertor.js";
import { CelToFah, FahToCel } from "./modules/Temp_Convertor.js";

const inp_first = document.getElementById("inp-cel");
const inp_second = document.getElementById("inp-fah");
const select_type = document.getElementById("convertor-type");



const reset = () => {
  inp_first.value = "";
  inp_second.value = "";
};

select_type.addEventListener("change", () => {
  console.log("change value", select_type.value);
  switch (Number(select_type.value)) {
    case 1:
      inp_first.setAttribute("placeholder", "cm");
      inp_first.onkeyup = CelToFah(inp_first,inp_second);
      inp_second.setAttribute("placeholder", "m");
      inp_second.addEventListener("keyup", FahToCel);
      reset();
    case 2:
      console.log("cm to m");
      inp_first.setAttribute("placeholder", "cm");
      inp_first.onkeyup = CmToM;
      inp_second.setAttribute("placeholder", "m");
      inp_second.addEventListener("keyup", MToCM);
      reset();
      break;

    default:
      break;
  }
});

inp_first.addEventListener("keyup", CelToFah);

inp_second.addEventListener("keyup", FahToCel)

/*
 *status,img,user
 */
