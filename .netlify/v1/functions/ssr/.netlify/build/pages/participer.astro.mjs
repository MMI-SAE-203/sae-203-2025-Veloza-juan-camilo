import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C7KkCMV5.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_8MdTTQie.mjs';
import { S as Star } from '../chunks/Star_C2sPrw3B.mjs';
import { $ as $$Button } from '../chunks/Button_DWLfiOg3.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from '../chunks/_astro_assets_CdWwxGIo.mjs';
export { renderers } from '../renderers.mjs';

const cineNight = new Proxy({"src":"/_astro/cinenight.Gcki54ze.webp","width":880,"height":724,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/assets/img/cinenight.webp";
							}
							
							return target[name];
						}
					});

const $$Participer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>PARTICIPEZ AVEC VOS OEUVRES</h1> ${renderComponent($$result2, "Star", Star, {})} <figure class="w-screen"> ${renderComponent($$result2, "Picture", $$Picture, { "class": "block w-full object-fill", "src": cineNight, "alt": "Representation of a cinema festival" })} </figure> <div class="px-20"> <h3 class="flex justify-center text-center uppercase">
“Le comité de sélection, fort de son expertise, détermine la catégorie la
      plus appropriée pour chaque film “
</h3> </div> <div> <p>Pour participer avec votre film, vous devez :</p> <ul class="list-disc list-inside"> <li>Respecter les conditions de présélection</li> <li>Remplir le formulaire d’inscription en ligne</li> <li>Télécharger en ligne pour les courts metrages</li> <li>
Envoyer votre court metrage à l’adresse indiquée à la fin du formulaire
        d’inscription.
</li> <li>
Si votre film est sélectionné, vous devrez respecter le règlement du
        Festival Flash cinéma 25
</li> </ul> <div class="flex justify-center bg-[var(--color-violet)] p-4"> <p class="uppercase text-white text-sm font-semibold">
S'inscrire pour l'année 2025
</p> </div> <div class="bg-[var(--color-beige)] p-4 rounded-4xl z-10 mt-10"> <h3>CONDITION COURT METRAGE</h3> <hr> <div> <p>Éligibilité du film:</p> <ul class="list-disc list-inside"> <li>
Durée: Le film doit respecter une durée maximale et minimale
            spécifiée par le festival.
</li> <li>
Date de réalisation: Le film doit avoir été réalisé après une
            certaine date.
</li> <li>
Première: Le film peut être une première mondiale, nationale,
            régionale ou encore n'avoir jamais été projeté en salle.
</li> </ul> </div> <div> <p>Format de soumission</p> <ul class="list-disc list-inside"> <li>
Plateforme de soumission: Le festival indique généralement la
            plateforme en ligne à utiliser pour soumettre votre film
            (FilmFreeway, Festhome, etc.).
</li> <li>
Formats acceptés: Les formats vidéo acceptés sont précisés (MP4,
            MOV, etc.) ainsi que les codecs et les résolutions.
</li> <li>
Sous-titres: Les sous-titres peuvent être obligatoires dans
            certaines langues.
</li> </ul> </div> <div> <p>Documents à fournir</p> <ul class="list-disc list-inside"> <li>
Fiche technique: Un document PDF détaillant les informations clés
            sur le film (titre, réalisateur, durée, genre, etc.).
</li> <li>Synopsis: Une brève description du film.</li> <li>
Photos: Des visuels de qualité du film (affiches, captures d'écran).
</li> <li>
Biographie du réalisateur: Un court texte présentant le réalisateur
</li> <li>Document d’inscription ci-dessous.</li> </ul> </div> ${renderComponent($$result2, "Button", $$Button, { "href": "#", "variant": "outlineb" }, { "default": ($$result3) => renderTemplate`Téléchargez le PDF` })} </div> <div class="bg-[var(--color-violet-obscure)] py-12 mb-10 px-8"> <div class="text-white"> <h2 class="text-white">CONTACTS</h2> <hr> <div class="font-light"> <p class="pt-6">Département Films</p> <p class="py-6">
Sélection officielle – courts métrages ornans – doubs – France <br> Tel.+33 0712345678 <br>Fax. : +33 0712345678 <br>Emails :festivalFlashCinema25@gamil.com
</p> </div> </div> ${renderComponent($$result2, "Button", $$Button, { "href": "#", "variant": "beige" }, { "default": ($$result3) => renderTemplate`CONTACTS` })} </div> </div> ` })}`;
}, "/Users/macbookair/Desktop/Universite\u0301 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/participer.astro", void 0);

const $$file = "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/participer.astro";
const $$url = "/participer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Participer,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
