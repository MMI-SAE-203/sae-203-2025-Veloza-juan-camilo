import { c as createComponent, d as createAstro, m as maybeRenderHead, r as renderComponent, e as addAttribute, a as renderTemplate } from '../chunks/astro/server_C7KkCMV5.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_8MdTTQie.mjs';
import { S as Star } from '../chunks/Star_C2sPrw3B.mjs';
import { $ as $$ImagePB, O as OnlyRealisateursFestival, b as OnlyJurysFestival } from '../chunks/ImagePB_DLAlW9Or.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Cardinvite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cardinvite;
  const { ...invites } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="group transition-all duration-300 hover:shadow-lg p-4"> <div class="flex flex-row lg:flex-col rounded-lg overflow-hidden"> <div class="w-1/3 lg:w-full"> ${renderComponent($$result, "ImagePB", $$ImagePB, { "record": invites, "field": "photo_invite", "alt": invites.imgAlt || `Photo de ${invites.prenom_invite} ${invites.nom_invite}`, "classPicture": "duotone group-hover:before:bg-black", "classImg": "w-full h-[150px] lg:h-[350px] object-cover filter grayscale-100 group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-300" })} </div> <div class="flex flex-col p-4 w-2/3 lg:w-full"> <h3 class="uppercase font-medium leading-6 text-lg mb-2"> ${invites.prenom_invite} <br> ${invites.nom_invite} </h3> <div class="h-20 overflow-hidden"> <p class="text-xs py-2 tracking-[1.5px] line-clamp-3"> ${invites.description_invite} </p> </div> <a class="text-sm underline decoration-1 mt-auto hover:text-[var(--color-vert)] transition-colors"${addAttribute(`invites/${invites.id}`, "href")}>
En savoir plus
</a> </div> </div> </div>`;
}, "/Users/macbookair/Desktop/Universite\u0301 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/components/Cardinvite.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const realisateurs = await OnlyRealisateursFestival();
  const actors = await OnlyJurysFestival();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-6 py-6 lg:grid lg:grid-cols-13 lg:gap-6 lg:px-12 lg:py-10"> <div class="lg:col-span-13"> <h1 class="text-5xl lg:text-6xl">LES INVITÉS</h1> ${renderComponent($$result2, "Star", Star, { "class": "mt-4" })} <p class="py-10 lg:w-3/4">
Le festival Flash Cinéma 25 est un événement cinématographique qui se
        déroule dans la ville d'Ornans, située dans le département du Doubs. Ce
        festival se distingue de ces concurrents par son concept dynamique, en
        mettant à l'honneur les films courts et des courts métrages capturent la
        rapidité, l'énergie et l'innovation du septième art (Cinéma).
</p> </div> <div class="lg:col-span-13"> <h2 class="text-3xl lg:text-6xl mb-6">JURYS</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "> ${actors.map((invite) => renderTemplate`${renderComponent($$result2, "Cardinvites", $$Cardinvite, { ...invite })}`)} </div> </div> <div class="lg:col-span-13 mt-12"> <h2 class="text-3xl lg:text-6xl mb-6">LES RÉALISATEURS</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${realisateurs.map((realisateur) => renderTemplate`${renderComponent($$result2, "Cardinvites", $$Cardinvite, { ...realisateur })}`)} </div> </div> </div> ` })}`;
}, "/Users/macbookair/Desktop/Universite\u0301 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/invites/index.astro", void 0);

const $$file = "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/invites/index.astro";
const $$url = "/invites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
