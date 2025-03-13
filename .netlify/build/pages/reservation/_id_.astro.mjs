import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_C7KkCMV5.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_8MdTTQie.mjs';
import { F as FilmById, $ as $$ImagePB } from '../../chunks/ImagePB_DLAlW9Or.mjs';
import { $ as $$Button } from '../../chunks/Button_DWLfiOg3.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const reservation = await FilmById(id);
  console.log(reservation);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-tnrayxkv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-6 py-6 lg:grid lg:grid-cols-13 lg:gap-6 lg:px-12 lg:py-10" data-astro-cid-tnrayxkv> <!--Titre --> <div class="lg:col-span-13" data-astro-cid-tnrayxkv> <h1 class="text-3xl lg:text-5xl" data-astro-cid-tnrayxkv>RESERVATION</h1> <hr class="my-4" data-astro-cid-tnrayxkv> </div> <!-- Img film --> <div class="lg:col-span-5 lg:order-1" data-astro-cid-tnrayxkv> ${renderComponent($$result2, "ImagePB", $$ImagePB, { "record": reservation, "field": "img_film", "alt": reservation.imgAlt, "classPicture": "duotone group-hover:before:bg-black", "classImg": "w-full object-cover h-auto lg:h-[500px] group-hover:grayscale-0 group-hover:mix-blend-normal", "data-astro-cid-tnrayxkv": true })} </div> <!-- Info del film --> <div class="lg:col-span-8 lg:order-1" data-astro-cid-tnrayxkv> <div class="flex items-center justify-between mb-4" data-astro-cid-tnrayxkv> <h3 class="text-2xl font-semibold" data-astro-cid-tnrayxkv>${reservation.titre_film}</h3> <p class="text-sm lg:text-base" data-astro-cid-tnrayxkv>
Un film par${reservation?.expand?.invite.prenom_invite + " " + reservation?.expand.invite.nom_invite} </p> </div> <div class="mb-6" data-astro-cid-tnrayxkv> <p class="mb-2" data-astro-cid-tnrayxkv>Durée: ${reservation.duree_film}min</p> <p class="mb-2" data-astro-cid-tnrayxkv>${reservation.langue_film} avec sous-titres en FR</p> <a${addAttribute(reservation.bd_film, "href")} class="text-[var(--color-violet)] underline" data-astro-cid-tnrayxkv>${reservation.bd_film}</a> </div> <h2 class="text-xl mb-4 lg:text-2xl" data-astro-cid-tnrayxkv>BANDE D'ANNONCE</h2> <!-- video mais j'sais pas comment mettre une video de youtube --> <div class="mb-6 aspect-video bg-gray-100 flex items-center justify-center" data-astro-cid-tnrayxkv> <p data-astro-cid-tnrayxkv>Vidéo bande d'annonce</p> </div> <h3 class="text-xl font-semibold mb-3" data-astro-cid-tnrayxkv>SYNOPSIS</h3> <p class="text-base mb-6" data-astro-cid-tnrayxkv> <span class="font-bold" data-astro-cid-tnrayxkv>Misericordie</span> raconte l'histoire déchirante
        de Marie, une femme confrontée à un dilemme moral insoutenable : son frère,
        Paul, a accidentellement causé la mort de sa fille dans un moment de folie.
        Rongé par la culpabilité, Paul est prêt à tout pour expier sa faute. Il tente
        désespérément de racheter son acte, offrant son aide inconditionnelle à Marie
        et s'enfonçant dans une spirale de rédemption. Mais Marie, tiraillée entre
        sa douleur, son amour fraternel et sa haine, ne parvient pas à pardonner.
        La culpabilité de Paul ne fait qu'accentuer la souffrance de Marie, qui oscille
        entre l'envie de lui accorder le pardon et l'incapacité d'étouffer sa colère.
        Les souvenirs de sa fille la hantent, et elle se retrouve piégée dans un
        cycle d'émotions contradictoires : un désir de justice, mêlé à la complexité
        de la relation avec son frère.
</p> </div> <!-- Info personne/realisateur-jury --> <div class="bg-[var(--color-violet-obscure)] p-6 mt-8 lg:col-span-13 lg:order-3 lg:mt-12 lg:p-10 lg:rounded-lg" data-astro-cid-tnrayxkv> <h2 class="uppercase text-[36px] text-white mb-4" data-astro-cid-tnrayxkv>
À propos de ${reservation?.expand.invite.prenom_invite + " " + reservation?.expand.invite.nom_invite} </h2> <div class="lg:grid lg:grid-cols-2 lg:gap-8" data-astro-cid-tnrayxkv> <p class="text-white pt-5" data-astro-cid-tnrayxkv>
Née en 2003 à Bogota en Colombie, Carla Diaz Rodriguez, plus connue
          sous le nom de Carly, est une réalisatrice en herbe qui a étudié les
          arts cinématographiques et la photographie à l'Université
          polytechnique nationale de Bogota.
</p> <p class="text-white pt-5" data-astro-cid-tnrayxkv>
Sa motivation l'a amenée à remporter différents prix de réalisation à
          son université et des tournois nationaux dans le domaine des courts
          métrages. Récemment arrivée en France, elle souhaite exprimer sa
          vision de la vie humaine et des relations complexes qu'elle peut
          entretenir.
</p> </div> </div> <!-- Ligne qui divise --> <hr class="mt-10 mb-8 lg:col-span-13 lg:order-4" data-astro-cid-tnrayxkv> <!-- Formulair --> <div class="py-6 lg:pl-25 lg:col-span-13 lg:order-5 lg:justify-center" data-astro-cid-tnrayxkv> <div class="lg:grid lg:grid-cols-13 lg:gap-6" data-astro-cid-tnrayxkv> <div class="lg:col-span-8 lg:col-start-3" data-astro-cid-tnrayxkv> <form class="space-y-6 md:space-y-8" data-astro-cid-tnrayxkv> <div class="bg-white rounded-2xl p-4 md:p-6 border border-gray-300" data-astro-cid-tnrayxkv> <label class="text-gray-500 text-xs md:text-sm mb-2 block" data-astro-cid-tnrayxkv>DATE</label> <div class="flex gap-2 md:gap-4" data-astro-cid-tnrayxkv> <div class="flex-1" data-astro-cid-tnrayxkv> <label class="block" data-astro-cid-tnrayxkv> <input type="radio" name="date" value="8 août 2024" class="sr-only peer" checked data-astro-cid-tnrayxkv> <div class="flex items-center justify-center h-12 md:h-14 rounded-lg border border-gray-200 cursor-pointer text-sm md:text-base peer-checked:bg-gray-100 peer-checked:border-gray-300" data-astro-cid-tnrayxkv>
8 août 2024
</div> </label> </div> <div class="flex-1" data-astro-cid-tnrayxkv> <label class="block" data-astro-cid-tnrayxkv> <input type="radio" name="date" value="9 août 2025" class="sr-only peer" data-astro-cid-tnrayxkv> <div class="flex items-center justify-center h-12 md:h-14 rounded-lg border border-gray-200 cursor-pointer text-sm md:text-base peer-checked:bg-gray-100 peer-checked:border-gray-300" data-astro-cid-tnrayxkv>
9 août 2025
</div> </label> </div> <div class="flex-1" data-astro-cid-tnrayxkv> <label class="block" data-astro-cid-tnrayxkv> <input type="radio" name="date" value="10 août 2025" class="sr-only peer" data-astro-cid-tnrayxkv> <div class="flex items-center justify-center h-12 md:h-14 rounded-lg border border-gray-200 cursor-pointer text-sm md:text-base peer-checked:bg-gray-100 peer-checked:border-gray-300" data-astro-cid-tnrayxkv>
10 août 2025
</div> </label> </div> </div> </div> <div class="space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0" data-astro-cid-tnrayxkv> <div data-astro-cid-tnrayxkv> <input type="text" name="nom" placeholder="NOM" class="w-full h-12 md:h-14 rounded-full bg-white border border-gray-200 px-4 md:px-6 placeholder:text-gray-400 placeholder:text-sm md:placeholder:text-base focus:outline-none focus:ring-2 focus:ring-gray-200" data-astro-cid-tnrayxkv> </div> <div data-astro-cid-tnrayxkv> <input type="text" name="prenom" placeholder="PRENOM" class="w-full h-12 md:h-14 rounded-full bg-white border border-gray-200 px-4 md:px-6 placeholder:text-gray-400 placeholder:text-sm md:placeholder:text-base focus:outline-none focus:ring-2 focus:ring-gray-200" data-astro-cid-tnrayxkv> </div> <div class="lg:col-span-2" data-astro-cid-tnrayxkv> <input type="email" name="email" placeholder="EMAIL" class="w-full h-12 md:h-14 rounded-full bg-white border border-gray-200 px-4 md:px-6 placeholder:text-gray-400 placeholder:text-sm md:placeholder:text-base focus:outline-none focus:ring-2 focus:ring-gray-200" data-astro-cid-tnrayxkv> </div> </div> <div class="lg:flex lg:justify-center" data-astro-cid-tnrayxkv> ${renderComponent($$result2, "Button", $$Button, { "type": "submit", "variant": "violet", "class": "w-full lg:w-1/2 h-12 md:h-14 rounded-full", "data-astro-cid-tnrayxkv": true }, { "default": ($$result3) => renderTemplate`
RÉSERVER
` })} </div> </form> <p class="text-[10px] mt-5 text-gray-500 text-center" data-astro-cid-tnrayxkv>
LIRE LES POLITIQUES DE CONFIDENTIALITÉ AVANT DE REALISER UNE
            RESERVATION DE CE FILM*
</p> </div> </div> </div> </div> ` })} `;
}, "/Users/macbookair/Desktop/Universite\u0301 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/reservation/[id].astro", void 0);

const $$file = "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/reservation/[id].astro";
const $$url = "/reservation/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
