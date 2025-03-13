import { c as createComponent, d as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate, e as addAttribute } from '../chunks/astro/server_C7KkCMV5.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_8MdTTQie.mjs';
import { $ as $$ImagePB, A as AllFilmsProjection } from '../chunks/ImagePB_DLAlW9Or.mjs';
import { $ as $$Button } from '../chunks/Button_DWLfiOg3.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Cardfilms = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Cardfilms;
  const { ...event } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div class="p-4"> <div class="border border-black p-5 lg:grid lg:grid-cols-1 lg:gap-6"> <div> <h1 class="lg:text-[35px] pt-4 pb-6 leading-[35px]">${event.titre_film}</h1> <div class="w-fit py-4"> <span class="inline-block bg-[var(--color-violet-obscure)] rounded-3xl px-10 py-1"> <p class="text-white text-sm font-light">${event.genre_film}</p> </span> </div> <div> ${renderComponent($$result, "ImagePB", $$ImagePB, { "record": event, "field": "img_film", "alt": event.imgAlt, "classPicture": "duotone col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black", "classImg": "group-hover:grayscale-0 group-hover:mix-blend-normal  lg:w-[390px] lg:h-[390px] object-cover pb-6" })} </div> </div> <div class="flex flex-col justify-between"> <div> <h3 class="py-4">UN FILM DE ${event.invite}</h3> <p class="pb-4">${event.description_film}</p> <p class="font-bold">${event.lieu_film}</p> </div> <div> <h2 class="flex flex-row-reverse py-4 text-[36px]"> ${event.date_film} </h2> </div> </div> </div> </div> </div> <!-- {events.length > 0 ? (
    events.map(event =>
        <h1 class="">{event.titre_film}</h1>
    )
) : (
    <p class="">Aucun film n'est projeté pour le moment.</p>
)} -->`;
}, "/Users/macbookair/Desktop/Universite\u0301 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/components/Cardfilms.astro", void 0);

const $$Astro = createAstro();
const $$Programme = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Programme;
  const url = new URL(Astro2.request.url);
  const sort = url.searchParams.get("sort") || "asc";
  const category = url.searchParams.get("category") || "all";
  let events = await AllFilmsProjection();
  const sortedEvents = events.sort((a, b) => {
    if (sort === "asc") {
      return new Date(a.date_film) - new Date(b.date_film);
    } else {
      return new Date(b.date_film) - new Date(a.date_film);
    }
  });
  const categories = [...new Set(events.map((event) => event.genre_film))];
  const filteredEvents = sortedEvents.filter(
    (event) => category === "all" || event.genre_film === category
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=""> <div class="bg-[var(--color-violet-obscure)] py-5 lg:py-10"> <h1 class="text-[80px]/18 text-white">PROGRAMME 2025</h1> </div> <div class="flex pt-10 pl-10"> <form method="GET" class="mb-6 flex gap-4"> <div> <label for="sort" class="mr-2 font-bold">Trier par date:</label> <select name="sort" id="sort" class="p-2 border rounded"> <option value="asc"${addAttribute(sort === "asc", "selected")}>Date plus loin</option> <option value="desc"${addAttribute(sort === "desc", "selected")}>Date plus proche</option> </select> </div> <div> <label for="category" class="mr-2 font-bold">Categorie:</label> <select name="category" id="category" class="p-2 border rounded"> <option value="all"${addAttribute(category === "all", "selected")}>Tous</option> ${categories.map((c) => renderTemplate`<option${addAttribute(c, "value")}${addAttribute(category === c, "selected")}> ${c} </option>`)} </select> </div> <button type="submit" class="ml-4 px-10 bg-[var(--color-violet-obscure)] text-white rounded-4xl">Filtrer</button> </form> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${filteredEvents.map((event) => renderTemplate`${renderComponent($$result2, "Cardfilms", $$Cardfilms, { ...event })}`)} </div> </div> <div class="bg-[var(--color-violet-fonce)] p-10 *:py-3"> <h2 class="text-white text-[36px]/10 uppercase pr-10">
si vous souhaitez participer au festival, inscrivez-vous !
</h2> <div> ${renderComponent($$result2, "Button", $$Button, { "href": "/participer", "variant": "beige" }, { "default": ($$result3) => renderTemplate`En savoir plus` })} </div> </div> ` })}`;
}, "/Users/macbookair/Desktop/Universite\u0301 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/programme.astro", void 0);

const $$file = "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/programme.astro";
const $$url = "/programme";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Programme,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
