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
import { renderCharacterCards } from "./util/renderCharacterCards.js";
const app = {};
app.init = () => __awaiter(void 0, void 0, void 0, function* () {
    renderCharacterCards();
});
app.init();
