import {AllFilmsProjection, AllActivitiesProjection, AllActorsFestival, OnlyRealisateursFestival, FilmById, ActivityById, 
ActorById, JuryActivitiesById, AllAnimateursName, addNewFilm } from './backend.mjs';

//1. Fonction qui retourne la liste de tous les films triés par date de projection

    // try {
    //     const films = await AllFilmsProjection();
    //     console.log(films);

    // } catch (error) {
    //     console.error(error);
    // }




//2. Une fonction qui retourne la liste des activités (Ateliers, expositions, animations…) triés par date de projection

// try {
//     const allactivities = await AllActivitiesProjection();
//     console.log(allactivities);
// } catch (error) {
//     console.error(error);
// }




// 3. fonction qui retourne la liste de tous les acteurs / réalisateurs participant au festival triés par ordre alphabétique.

// try{
//     const allActors = await AllActorsFestival();
//     console.log(allActors);
// } catch (error) {
//     console.error(error);
// }



//3.5 fonction qui retourne la liste de tous les que les realisateurs du festival par ordre alphabétique

// try{
//     const allRealsateurs = await OnlyRealisateursFestival();
//     console.log(allRealsateurs);
// } catch (error) {
//     console.error(error);
// }




//4. Une fonction qui retourne les infos d'un film en donnant son id en paramètre

// try {
//     const oneRecord = await FilmById('a016a1xr3a49959');
//     console.log(oneRecord);
// } catch (error) {
//     console.error(error);
// }




//5. Une fonction qui retourne les infos d'une activité en donnant son id en paramètre

// try{
//     const oneRecord = await ActivityById('yx5b8c8aurzpd0f');
//     console.log(oneRecord);
// } catch (error) {
//     console.error(error);
// }




//6. Une fonction qui retourne les infos d'un acteur / réalisateur en donnant son id en paramètre

// try {
//     const oneRecord = await ActorById('n8lit26fi406mz3');
//     console.log(oneRecord);
// } catch (error) {
//     console.error(error);
// }




//7. Une fonction qui retourne toutes les activités d’un Jury donné par son id

// try {
//     const oneRecord = await JuryActivitiesById('1ay47dk80583t0q');
//     console.log(oneRecord);
// } catch (error) {
//     console.error(error);
// }





//8. Une fonction qui retourne toutes les activités d’un animateur donné par son nom

// try {
//     const oneRecord = await AllAnimateursName('José Antonio');
//     console.log(oneRecord);
// } catch (error) {
//     console.error(error);
// }


//9. Une fonction qui permet d’ajouter ou modifier les informations d’un film, activité ou invité

const nouveauFilm = {
    "titre_film" : "Kimi no nawa",
    "description_film" : "Mitsuha, adolescente coincée dans une famille traditionnelle, est loin d'imaginer pouvoir vivre l'aventure urbaine dont elle rêve dans la peau de Taki, un jeune lycéen vivant à Tokyo. À travers ses rêves, Mitsuha se voit vivre dans la vie du jeune garçon au point qu'elle croit vivre la réalité...",
    "date_film" : "2025-08-8",
    "synopsis_film" : "Mitsuha, adolescente coincée dans une famille traditionnelle, rêve de quitter ses montagnes natales pour découvrir la vie trépidante de Tokyo. Elle est loin d'imaginer pouvoir vivre l'aventure urbaine dans la peau de... Taki, un jeune lycéen vivant à Tokyo. À travers ses rêves, Mitsuha se voit littéralement propulsée dans la vie du jeune garçon. Quel mystère se cache derrière ces rêves étranges qui unissent deux destinées que tout oppose et qui ne se sont jamais rencontrées ?",
    "bd_film" : "https://www.youtube.com/watch?v=AROOK45LXXg",
    "duree_film" : 120,
    "genre_film" : "animation",
    "langue_film" : "français"
};

await addNewFilm(nouveauFilm);
