var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* Since it has to be ESM compliant I have to add .js after :( and typescript wont do it for me */
import { renderCharacterCards } from "./util/render.js";
const app = {};
app.init = () => __awaiter(void 0, void 0, void 0, function* () {
    renderCharacterCards();
    const characters = document.querySelector("#characters");
    const grid = document.querySelector("#grid");
    const list = document.querySelector("#list");
    grid.addEventListener("click", () => {
        characters.classList.remove("list");
        grid.classList.add("active");
        list.classList.remove("active");
    });
    list.addEventListener("click", () => {
        characters.classList.add("list");
        grid.classList.remove("active");
        list.classList.add("active");
    });
});
app.init();
