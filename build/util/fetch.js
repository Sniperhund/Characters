var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import {} from "./types.js";
export const fetchCharacters = () => __awaiter(void 0, void 0, void 0, function* () {
    const characters = yield fetch("/assets/data/characters.json").then((response) => response.json());
    if (characters)
        return characters;
    throw new Error("Failed to fetch characters");
});
export const fetchCharacter = (i) => __awaiter(void 0, void 0, void 0, function* () {
    const characters = yield fetchCharacters();
    if (characters[i])
        return characters[i];
    throw new Error("Failed to fetch character");
});
