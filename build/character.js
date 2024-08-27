var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchCharacter } from "./util/fetch.js";
import { renderCharacterPage } from "./util/render.js";
const app = {};
app.init = () => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(new URLSearchParams(location.search).get("id"));
    const character = yield fetchCharacter(id);
    renderCharacterPage(character);
});
app.init();
