import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C7KkCMV5.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_8MdTTQie.mjs';
import { a as ActorById, $ as $$ImagePB } from '../../chunks/ImagePB_DLAlW9Or.mjs';
import { $ as $$Button } from '../../chunks/Button_DWLfiOg3.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const invites = await ActorById(id);
  console.log(invites);
  if (!invites) {
    console.error(`invit\xE9 ${id} not found`);
    return Astro2.redirect("/invites");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": invites?.nom_invite }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="px-6 py-6 lg:grid lg:grid-cols-13 lg:gap-8 lg:px-12 lg:py-10"> <div class="lg:col-span-8 lg:order-2"> <h1 class="text-black text-[58px]/15 lg:text-[72px]/[80px] font-bold"> ${invites?.prenom_invite} <br> ${invites?.nom_invite} </h1> <hr> <h2 class="uppercase text-[36px] pb-4 pt-8">biographie</h2> <p class="lg:text-lg lg:leading-relaxed">${invites?.biographie_invite}</p> </div> <div class="lg:col-span-5 lg:order-1"> ${renderComponent($$result2, "ImagePB", $$ImagePB, { "record": invites, "field": "photo_invite", "alt": invites.imgAlt || `Photo de ${invites.prenom_invite} ${invites.nom_invite}`, "classPicture": "duotone group-hover:before:bg-black", "classImg": "group-hover:grayscale-0 group-hover:mix-blend-normal py-5 w-full h-[390px] lg:h-[500px] object-cover" })} </div> <hr class="my-8 lg:col-span-13 lg:order-3"> <div class="lg:col-span-13 lg:order-4"> <h2 class="uppercase text-[36px] py-6 lg:text-[48px]">
PARTICIPATION AU FESTIVAL
</h2> <div class="lg:grid lg:grid-cols-13 lg:gap-8"> <div class="lg:col-span-8"> <div class="*:py-1 mb-6"> <div class="flex justify-between items-center"> <p class="uppercase font-bold text-lg lg:text-2xl"> ${invites?.expand?.films_invite.titre_film} </p> <p class="text-black px-4 py-1 rounded-full uppercase font-bold"> ${invites?.role_invite} </p> </div> <p class="lg:text-lg">
Durée : ${invites?.expand?.films_invite.duree_film} min
</p> <p class="lg:text-lg">
Langue en ${invites?.expand?.films_invite.langue_film} avec sous-titres
              en FR
</p> <div class="mt-6"> <p class="lg:text-lg line-clamp-4"> ${invites?.expand?.films_invite.synopsis_film || "Synopsis non disponible"} </p> </div> <div class="flex justify-center mt-8"> ${renderComponent($$result2, "Button", $$Button, { "href": `/reservation/${invites?.expand?.films_invite.id}`, "variant": "violet" }, { "default": ($$result3) => renderTemplate`
RÉSERVEZ VOS TICKETS ICI!
` })} </div> </div> </div> <div class="lg:col-span-5"> ${renderComponent($$result2, "ImagePB", $$ImagePB, { "record": invites?.expand?.films_invite, "field": "img_film", "alt": `Affiche du film ${invites?.expand?.films_invite.titre_film}`, "classPicture": "duotone group-hover:before:bg-black", "classImg": "group-hover:grayscale-0 group-hover:mix-blend-normal w-full h-[300px] lg:h-[400px] object-cover" })} </div> </div> </div> <div class="mt-10 lg:col-span-13 lg:order-5 pt-20"> <div class="flex justify-start"> ${renderComponent($$result2, "Button", $$Button, { "href": "/invites", "variant": "outline" }, { "default": ($$result3) => renderTemplate`
RETOUR À LA LISTE DES INVITÉS
` })} </div> </div> </div> ` })}`;
}, "/Users/macbookair/Desktop/Universite\u0301 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/invites/[id].astro", void 0);

const $$file = "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/invites/[id].astro";
const $$url = "/invites/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
