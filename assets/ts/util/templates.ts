import type { Character } from "./types"

/*
    <a href="/character.html?i=0">
        <article
            class="box-shadow"
            style="
                background-image: linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0) 80.5%,
                        rgba(0, 0, 0, 0.75) 95%
                    ),
                    url('/assets/imgs/Ellie/Ellie-1.webp');
            "
        >
            <h2>Ellie Williams</h2>
        </article>
    </a>
*/
export const characterTemplate = (char: Character, id: number) => `
<a href="/character.html?id=${id}">
    <article
        class="box-shadow"
        style="
            background-image: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0) 80.5%,
                    rgba(0, 0, 0, 0.75) 95%
                ),
                url('/assets/imgs/${char.images[0]}');
        "
    >
        <h2>${char.name}</h2>
    </article>
</a>
`
