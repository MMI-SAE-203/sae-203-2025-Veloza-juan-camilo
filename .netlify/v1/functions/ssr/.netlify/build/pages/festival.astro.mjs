import { c as createComponent, m as maybeRenderHead, b as renderScript, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_C7KkCMV5.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_8MdTTQie.mjs';
import { A as AllFilmsProjection, $ as $$ImagePB } from '../chunks/ImagePB_DLAlW9Or.mjs';
import { $ as $$Button } from '../chunks/Button_DWLfiOg3.mjs';
/* empty css                                    */
import { S as Star } from '../chunks/Star_C2sPrw3B.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from '../chunks/_astro_assets_CdWwxGIo.mjs';
export { renderers } from '../renderers.mjs';

const imgcontent1 = new Proxy({"src":"/_astro/cineindependiente1.BgOBxNyt.webp","width":880,"height":556,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/assets/img/cineindependiente1.webp";
							}
							
							return target[name];
						}
					});

const imgcontent2 = new Proxy({"src":"/_astro/cineexperimental1.CABxPBMf.webp","width":440,"height":289,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/assets/img/cineexperimental1.webp";
							}
							
							return target[name];
						}
					});

const imagecontent3 = new Proxy({"src":"/_astro/doubsornans1.09sCaXN_.webp","width":405,"height":253,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/assets/img/doubsornans1.webp";
							}
							
							return target[name];
						}
					});

const Ticketimage = new Proxy({"src":"/_astro/ticket.DHP93vQ-.webp","width":292,"height":404,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/assets/img/ticket.webp";
							}
							
							return target[name];
						}
					});

const $$Carrousel = createComponent(async ($$result, $$props, $$slots) => {
  const films = await AllFilmsProjection();
  return renderTemplate`${maybeRenderHead()}<div class="w-full my-8 relative overflow-hidden" data-astro-cid-bgoom2kq> <div class="relative w-full" data-astro-cid-bgoom2kq> <div class="carousel-track flex gap-4 py-4 overflow-x-auto scroll-smooth scrollbar-hide" data-astro-cid-bgoom2kq> ${films.map((film) => renderTemplate`<div class="flex-none min-w-[280px] w-[280px] lg:w-[420px]" data-astro-cid-bgoom2kq> <div class="rounded-lg overflow-hidden bg-white shadow-md transition-transform duration-300 hover:-translate-y-2" data-astro-cid-bgoom2kq> ${renderComponent($$result, "ImagePB", $$ImagePB, { "record": film, "field": "img_film", "alt": film.titre_film, "classPicture": "duotone", "classImg": "w-full h-[300px] object-cover", "data-astro-cid-bgoom2kq": true })} <div class="p-4" data-astro-cid-bgoom2kq> <h3 class="text-lg font-semibold" data-astro-cid-bgoom2kq>${film.titre_film}</h3> <p class="text-sm mb-2" data-astro-cid-bgoom2kq>Durée: ${film.duree_film} min</p> <p class="text-sm mb-4" data-astro-cid-bgoom2kq> ${film.expand?.invite ? `Film de ${film.expand.invite.prenom_invite} ${film.expand.invite.nom_invite}` : "R\xE9alisateur inconnu"} </p> ${renderComponent($$result, "Button", $$Button, { "href": `/reservation/${film.id}`, "variant": "violet", "data-astro-cid-bgoom2kq": true }, { "default": ($$result2) => renderTemplate`
Voir détails
` })} </div> </div> </div>`)} </div> <button class="carousel-prev absolute top-1/2 left-2 -translate-y-1/2 bg-[var(--color-beige)]/70 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-black/70" aria-label="Previous slide" data-astro-cid-bgoom2kq>&#10094;</button> <button class="carousel-next absolute top-1/2 right-2 -translate-y-1/2 bg-[var(--color-beige)]/70 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-black/70" aria-label="Next slide" data-astro-cid-bgoom2kq>&#10095;</button> </div> </div>  ${renderScript($$result, "/Users/macbookair/Desktop/Universite\u0301 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/components/Carrousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/macbookair/Desktop/Universite\u0301 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/components/Carrousel.astro", void 0);

const $$Festival = createComponent(($$result, $$props, $$slots) => {
  const title = "Le Festival";
  const description = "Le festival Flash Cin\xE9ma 25 est un \xE9v\xE9nement cin\xE9matographique qui se d\xE9roule dans la ville d'Ornans, situ\xE9e dans le d\xE9partement du Doubs. Ce festival se distingue de ces concurrents par son concept dynamique, en mettant \xE0 l'honneur les films courts et des courts m\xE9trages capturent la rapidit\xE9, l'\xE9nergie et l'innovation du septi\xE8me art (Cin\xE9ma).";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="px-5 lg:text-[18px]"> <div class="lg:px-15"> <h1 class="text-[64px] py-2">${title}</h1> ${renderComponent($$result2, "Star", Star, {})} <p class="p-2">
Le festival Flash Cinéma 25 est un événement cinématographique qui se
        déroule dans la ville d'Ornans, située dans le département du Doubs. Ce
        festival se distingue de ces concurrents par son concept dynamique, en
        mettant à l'honneur les films courts et des courts métrages capturent la
        rapidité, l'énergie et l'innovation du septième art (Cinéma).
</p> </div> <figure class="-mx-5 w-screen"> ${renderComponent($$result2, "Picture", $$Picture, { "class": "block w-full h-100 object-cover", "src": imgcontent1, "alt": "Representation of a cinema festival" })} </figure> <div class="lg:px-15"> <h3 class="pt-15 pb-10">NAISSANCE DU FESTIVAL</h3> <div class="*:py-5"> <p>
Le Festival Flash Cinéma 25 à Ornans, dans le Doubs, est né d’une idée
          simple : rendre le cinéma accessible à tous, dans un cadre unique et
          convivial. L’histoire commence il y a quelques années, quand un groupe
          d’amis passionnés par le septième art décide de créer un événement
          original, où la créativité et la diversité seraient à l’honneur. Leur
          ambition : offrir un espace où réalisateurs émergents et amateurs
          pourraient partager leurs œuvres sous les étoiles.
</p> <p>
Pourquoi "Flash" ? Parce que le festival se distingue par la rapidité
          et la spontanéité des créations présentées. Les courts-métrages
          sélectionnés reflètent des visions singulières, des histoires
          racontées en quelques minutes mais avec une intensité qui marque les
          esprits. Le format court permet une plus grande accessibilité pour les
          réalisateurs, tout en captant l’attention d’un public diversifié.
</p> <p>
Installé dans les magnifiques paysages d’Ornans, ce festival en plein
          air est un véritable appel à la découverte et à l’échange. Chacun,
          qu’il soit cinéphile averti ou simple curieux, est accueilli avec
          chaleur et enthousiasme. Ici, pas de barrière : les projections sont
          gratuites, ouvertes à tous, et visent à créer un espace inclusif où la
          rencontre entre les artistes et le public est favorisée
</p> <p>
Le Festival Flash Cinéma 25 est rapidement devenu un rendez-vous
          incontournable pour les amateurs de cinéma et les créateurs de tous
          horizons. Dans un esprit festif et participatif, il célèbre la liberté
          d’expression, l’audace et l’imagination. Chaque année, les rues
          d’Ornans vibrent au rythme de ce festival unique, où l’art
          cinématographique prend vie en plein air, sous les yeux émerveillés de
          spectateurs venus partager un moment d’exception
</p> </div> </div> <figure class="-mx-5 w-screen py-10"> ${renderComponent($$result2, "Picture", $$Picture, { "class": "block w-full object-cover h-100", "src": imgcontent2, "alt": "Representation of a cinema festival" })} </figure> <div class="bg-[var(--color-vert)] w-screen -mx-5 p-4 lg:py-5"> <h1 class="text-[var(--color-violet-obscure)]">
Un Festival en plein air
</h1> <div class="lg:grid lg:grid-cols-9 lg:gap-5"> <figure class="lg:col-span-3 lg:col-start-1"> ${renderComponent($$result2, "Picture", $$Picture, { "class": "block w-full object-fill lg:col-span-3 lg:col-start-1", "src": imagecontent3, "alt": "Representation of a cinema festival" })} </figure> <div class="lg:col-span-6 lg:col-start-4 *:lg:py-3 lg:items-center lg:px-5"> <h3>ORANS-DOUBS</h3> <div class="text-sm font-sans"> <p>
Notre festival de cinéma à Orans-Doubs a choisi de s'installer en
              plein air pour vous offrir une expérience cinématographique unique
              et inoubliable, en parfaite harmonie avec notre magnifique région.
</p> <p>
Le cinéma en plein air est une occasion de partager des moments
              conviviaux entre amis ou en famille. Les spectateurs sont invités
              à apporter leurs couvertures, leurs coussins et leurs pique-niques
              pour se créer un espace cosy et personnalisé.
</p> </div> ${renderComponent($$result2, "Button", $$Button, { "href": "#", "variant": "violet" }, { "default": ($$result3) => renderTemplate`En savoir plus sur la ville` })} </div> </div> </div> <div class="pt-6 lg:px-15"> <!-- VALEURS DU FESTIVAL --> <section class="mb-10"> <h1 class="py-10">VALEURS DU FESTIVAL</h1> <ul class="*:py-2"> <li> <span class="font-bold">Accesibilité:</span> Des projections gratuites
            et ouvertes à tous, sans barrières, pour démocratiser le cinéma.
</li> <li> <span class="font-bold">Crétivité:</span> Un espace qui valorise l'innovation
            et l'originalité dans les œuvres cinématographiques.
</li> <li> <span class="font-bold">Diversité:</span> Une plateforme où des visions
            et des talents variés se rencontrent et s'expriment.
</li> <li> <span class="font-bold">Partage:</span> Favoriser les échanges entre
            réalisateurs et spectateurs dans une ambiance conviviale et chaleureuse.
</li> </ul> </section> <!-- THÉMATIQUE --> <section class="mb-10"> <h1 class="pt-10 pb-5">THÉMATIQUE</h1> <div class="*:py-3"> <p>
L'édition met en lumière l'audace et l'imagination à travers des
            courts-métrages rapides et spontanés. Chaque film reflète des
            histoires intenses et marquantes, célébrant la capacité du cinéma à
            capturer l'essence de la vie en un instant.
</p> <p>
Dans le cadre pittoresque d'Ornans, cette édition invite à célébrer
            la liberté d'expression et l'art de raconter des histoires, tout en
            rapprochant les amateurs de cinéma et les créateurs du monde entier.
</p> </div> </section> <!-- ORGANISATEURS --> <section class="mb-10"> <h1 class="pt-10 pb-5">ORGANISATEURS</h1> <ul class="*:py-2"> <li> <span class="font-bold">María Lopes</span> - Directrice du festival (Gestion
            générale et partenariats)
</li> <li> <span class="font-bold">Jean-Baptiste Durand</span> - Responsable de
            la programmation (Sélection des films et relations avec les réalisateurs)
</li> <li> <span class="font-bold">Camilo Veloza</span> - Chargée de communication
            (Réseaux sociaux, presse et promotion)
</li> <li> <span class="font-bold">Olivier Petit</span> - Coordinateur logistique
            (Lieux de projection, billetterie, hébergement des invités)
</li> <li> <span class="font-bold">Anna Kowaiski</span> - Responsable des événements
            (Masterclasses, conférences et soirées spéciales)
</li> </ul> </section> <!-- ÉQUIPE TECHNIQUE --> <section class="mb-10"> <h1 class="pt-10 pb-5">ÉQUIPE TECHNIQUE</h1> <ul class="*:py-2"> <li> <span class="font-bold">Théo Lambert</span> - Régisseur général (Supervision
            technique de l'événement)
</li> <li> <span class="font-bold">Lucie Morel</span> - Ingénieure du son (Installation
            et contrôle des systèmes audio)
</li> <li> <span class="font-bold">François Dupont</span> - Projectionniste (Gestion
            des copies numériques et projections en salle)
</li> <li> <span class="font-bold">Camille Renaud</span> - Éclairagiste (Mise en
            lumière des espaces et scènes du festival)
</li> <li> <span class="font-bold">Bastien Leroy</span> - Technicien audiovisuel
            (Diffusion des films et gestion des pannes techniques)
</li> </ul> </section> </div> <div class="flex justify-between items-center bg-[var(--color-violet)] w-screen -mx-5"> <div class="px-5"> <h1 class="text-white leading-[30px] py-5 lg:text-[94px] lg:py-15">
RESERVEZ VOS BILLETS ICI !
</h1> ${renderComponent($$result2, "Button", $$Button, { "href": "/reservation", "variant": "beige" }, { "default": ($$result3) => renderTemplate`RECERVEZ ICI` })} </div> <figure class="flex flex-row-reverse lg:flex lg:flex-row-reverse scale-150 lg:scale-150 mr-10 lg:mr-18"> ${renderComponent($$result2, "Picture", $$Picture, { "class": "flex flex-row-reverse", "src": Ticketimage, "alt": "Representation of a cinema festival" })} </figure> </div> </article> <div> <div class="my-10 lg:px-60 px-15"> <h2 class="text-2xl font-bold mb-4">Films en projection</h2> ${renderComponent($$result2, "Carrousel", $$Carrousel, {})} </div> </div> ` })}`;
}, "/Users/macbookair/Desktop/Universite\u0301 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/festival.astro", void 0);

const $$file = "/Users/macbookair/Desktop/Université 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/pages/festival.astro";
const $$url = "/festival";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Festival,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
