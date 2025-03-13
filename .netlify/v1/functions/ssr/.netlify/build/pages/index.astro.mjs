import { c as createComponent, d as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_C7KkCMV5.mjs';
import 'kleur/colors';
/* empty css                                */
import { $ as $$Button } from '../chunks/Button_DWLfiOg3.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from '../chunks/_astro_assets_CdWwxGIo.mjs';
import { $ as $$Layout } from '../chunks/Layout_8MdTTQie.mjs';
export { renderers } from '../renderers.mjs';

const Affiche = new Proxy({"src":"/_astro/affiche.BDh8YC_s.webp","width":440,"height":686,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/assets/img/affiche.webp";
							}
							
							return target[name];
						}
					});

const AfficheDesktop = new Proxy({"src":"/_astro/affichedesktop.DVNOcYal.webp","width":1280,"height":591,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/assets/img/affichedesktop.webp";
							}
							
							return target[name];
						}
					});

const cinemaPleinAir = new Proxy({"src":"/_astro/cinemaPleinAir.Bx__uKMm.webp","width":1280,"height":365,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/assets/img/cinemaPleinAir.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Cardprincipal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cardprincipal;
  const {
    title = "Title",
    description = "Description",
    image = Affiche,
    link = "#",
    imageAlt = "Image du festival"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card border  shadow bg-[var(--color-violet-obscure)] pb-6 rounded-3xl"> <div class="card-image mb-4"> ${renderComponent($$result, "Picture", $$Picture, { "class": "block w-full object-cover h-108", "src": image, "alt": imageAlt })} </div> <div class="card-content px-4"> <h2 class="lg:text-4xl text-xl mb-2 text-white">${title}</h2> <p class="lg:text-[18px] text-sm text-white">${description}</p> </div> <div class="card-action mt-4 px-4"> <a> ${renderComponent($$result, "Button", $$Button, { "href": link, "variant": "beige" }, { "default": ($$result2) => renderTemplate`Réserver` })} </a> </div> </div>`;
}, "/Users/macbookair/Desktop/Universite\u0301 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/components/Cardprincipal.astro", void 0);

const Image = new Proxy({"src":"/_astro/logofestival.ly5hgQ45.webp","width":324,"height":110,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/assets/img/logofestival.webp";
							}
							
							return target[name];
						}
					});

const Image2 = new Proxy({"src":"/_astro/fille.Cqrc5_tZ.webp","width":380,"height":295,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/assets/img/fille.webp";
							}
							
							return target[name];
						}
					});

const Image3 = new Proxy({"src":"/_astro/image.-9FKv-5G.webp","width":380,"height":295,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/assets/img/image.webp";
							}
							
							return target[name];
						}
					});

const Image4 = new Proxy({"src":"/_astro/image-1.C0vg0j7M.webp","width":380,"height":295,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/assets/img/image-1.webp";
							}
							
							return target[name];
						}
					});

const Image5 = new Proxy({"src":"/_astro/image-2.vqoo6J0s.webp","width":380,"height":295,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/assets/img/image-2.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <div class="bg-[var(--color-beige)] flex justify-center items-center py-10"> <h1 class="text-[var(--color-violet-obscure)] lg:text-[74px]/20 text-[54px]/13">
FESTIVAL FLASH <br>CINÉMA 25
</h1> </div> <figure class="w-full"> ${renderComponent($$result2, "Picture", $$Picture, { "class": "block w-full object-cover h-150 md:hidden", "src": Affiche, "alt": "Representation of a cinema festival" })} ${renderComponent($$result2, "Picture", $$Picture, { "class": "hidden md:block w-full object-cover h-200", "src": AfficheDesktop, "alt": "Representation of a cinema festival (desktop version)" })} </figure> </div> <div class="flex flex-col justify-center text-center"> <p class="text-sm lg:text-xl lg:pt-20 pt-10">Une scène pour le cinèma des court metrages</p> <h2 class="text-[var(--color-violet-obscure)] text-4xl/10 lg:text-6xl/10 pb-5 lg:pb-20">
"LE COURT-MÉTRAGE : DE RACONTER <span class="text-[var(--color-vert)]">GRAND EN PEU</span> DE TEMPS."
</h2> <div> ${renderComponent($$result2, "Button", $$Button, { "class": "text-center", "href": "/reservation", "variant": "violet" }, { "default": ($$result3) => renderTemplate`RÉSERVEZ VOS TICKETS !` })} </div> </div> <div class="py-10 px-5 *:py-3 lg:flex lg:flex-col lg:justify-center lg:text-center"> <h2 class="text-3xl lg:text-4xl">FLASH CINÉMA 25</h2> <p class="text-sm lg:text-xl">
"Laissez-vous emporter par les idées brillantes de créateurs audacieux à
      travers une sélection de courts-métrages. Respirez l'air pur, créez des
      souvenirs et partagezvotre passion du cinéma avec d'autres."
</p> </div> <div> <figure class="w-full"> ${renderComponent($$result2, "Picture", $$Picture, { "class": "block w-full object-cover h-[250px]", "src": cinemaPleinAir, "alt": "Representation of a cinema festival" })} </figure> </div> <div class="flex justify-center lg:py-20 py-10"> ${renderComponent($$result2, "Button", $$Button, { "href": "/invites", "variant": "violet" }, { "default": ($$result3) => renderTemplate`EN SAVOIR PLUS` })} </div> <div class="bg-[var(--color-beige)] p-6 text-black"> <h2 class="flex justify-center text-xl lg:text-4xl text-center pb-5">"DECOUVREZ TOUT SUR CINE FLASH 25, A PORTEE DE CLIC! CLIC!"</h2> <hr class="border-2 border-[var(--color-violet-obscure)] w-[290px] mx-auto mb-5"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${renderComponent($$result2, "Cardprincipal", $$Cardprincipal, { "image": Image, "title": "Le festival", "description": "Vous souhaitez vous rendre au festival, mais vous n'y connaissez rien et vous voulez y participer ? NE VOUS INQUI\xC9TEZ PAS ! D\xE9couvrez le festival, son emplacement, ses jurys et les collaborateurs qui rendent ce grand \xE9v\xE9nement possible.", "link": "/festival" })} ${renderComponent($$result2, "Cardprincipal", $$Cardprincipal, { "image": Image2, "title": "Programme 2025", "description": "D\xE9couvrez le programme de cette premi\xE8re \xE9dition du festival flash cin\xE9ma 2025, o\xF9 vous trouverez des aventures passionnantes, des films qui vous feront soupirer d'\xE9motion et bien plus encore. A ne pas manquer !", "link": "/programme" })} ${renderComponent($$result2, "Cardprincipal", $$Cardprincipal, { "image": Image3, "title": "Les invit\xE9s", "description": "D\xE9couvrez les esprits qui se cachent derri\xE8re les critiques de vos films pr\xE9f\xE9r\xE9s, leurs noms et un peu de leur histoire. Ils s'appuieront sur leur exp\xE9rience et leur parcours dans l'industrie cin\xE9matographique. Une bonne occasion de rencontrer des gens qui ont les m\xEAmes go\xFBts que vous.", "link": "/invites" })} ${renderComponent($$result2, "Cardprincipal", $$Cardprincipal, { "image": Image4, "title": "Reservation", "description": "Ne manquez pas ces films magnifiques, r\xE9servez vos billets d\xE8s maintenant sur le site officiel du festival et d\xE9couvrez de nouvelles exp\xE9riences, des \xE9motions et bien plus encore. D\xE9p\xEAchez-vous, les places s'\xE9puisent rapidement !", "link": "/reservation" })} ${renderComponent($$result2, "Cardprincipal", $$Cardprincipal, { "image": Image5, "title": "Participer", "description": "Vous voulez montrer au monde ce que vous pouvez faire en peu de temps ? Vous voulez montrer \xE0 vos amis que vous pouvez faire beaucoup avec peu ? Vous voulez devenir une star du court m\xE9trage ? N'attends plus, inscris-toi \xE0 notre festival et fais partie du groupe !", "link": "/participer" })} </div> </div> ` })}`;
}, "/Users/macbookair/Desktop/Universite\u0301 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/index.astro", void 0);

const $$file = "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
