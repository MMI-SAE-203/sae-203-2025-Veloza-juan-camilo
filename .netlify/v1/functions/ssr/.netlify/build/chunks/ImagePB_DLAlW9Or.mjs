import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate } from './astro/server_C7KkCMV5.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from './_astro_assets_CdWwxGIo.mjs';
import PocketBase from 'pocketbase';

const POCKETBASE_URL = 'http://127.0.0.1:8090';

const pb =new PocketBase (POCKETBASE_URL);


//1. Fonction qui retourne la liste de tous les films triés par date de projection

async function AllFilmsProjection() {
const films = await pb.collection('Films').getFullList({
    sort: 'date_film',
    expand: 'invite',
});
    return films;
}

//3.5 fonction qui retourne la liste de tous les que les realisateurs du festival par ordre alphabétique

async function OnlyRealisateursFestival() {
    const allaRealisateurs = await pb.collection('invites').getFullList({
        filter: 'role_invite = "Realisateur"',
        sort: 'nom_invite'
    });
    return allaRealisateurs;
}
//3.5.1 fonction qui retourne la liste de tous les que les Jurys du festival par ordre alphabétique

async function OnlyJurysFestival() {
    const allJurys = await pb.collection('invites').getFullList({
        filter: 'role_invite = "Jury"',
        sort: 'nom_invite'
    });
    return allJurys;
}

//4. Une fonction qui retourne les infos d'un film en donnant son id en paramètre

async function FilmById(id) {
    const film = await pb.collection('Films').getOne(id, {
        expand: 'invite'
    });
    return film;
}

//6. Une fonction qui retourne les infos d'un acteur / réalisateur en donnant son id en paramètre

async function ActorById(id) {
    const actor = await pb.collection('invites').getOne(id, {
        expand: 'films_invite'
    });
    actor.img = pb.files.getURL(actor, actor.image_evenement);
    return actor;
}

const $$Astro = createAstro();
const $$ImagePB = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImagePB;
  const {
    record,
    field = "imgUrl",
    alt,
    classPicture,
    classImg,
    thumb = "1024x1024"
  } = Astro2.props;
  const imageUrl = record?.[field] ? pb.files.getURL(record, record[field], { thumb }) : null;
  return renderTemplate`${imageUrl && renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "pictureAttributes": { class: classPicture }, "class": classImg, "inferSize": true, "formats": ["avif", "webp"], "src": imageUrl, "alt": alt || "Image" })}`}`;
}, "/Users/macbookair/Desktop/Universite\u0301 2024 MMI 1/SAE S2/sae-203-2025-Veloza-juan-camilo/src/components/ImagePB.astro", void 0);

export { $$ImagePB as $, AllFilmsProjection as A, FilmById as F, OnlyRealisateursFestival as O, ActorById as a, OnlyJurysFestival as b };
