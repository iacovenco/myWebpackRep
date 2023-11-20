import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calc from "./modules/calc";
import through from "./modules/through";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import sendForm from "./modules/sendForm";

timer("30 november 2023");
menu();
modal();
calc(100);
through();
tabs();
slider();
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form2",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form3",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
