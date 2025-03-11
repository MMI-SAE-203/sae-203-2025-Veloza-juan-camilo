import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');


//1. Fonction qui retourne la liste de tous les films triés par date de projection

export async function AllFilmsProjection() {
const films = await pb.collection('Films').getFullList({
    sort: 'date_film' 
});
    return films;
}

//2. Une fonction qui retourne la liste des activités (Ateliers, expositions, animations…) triés par date de projection.

export async function AllActivitiesProjection() {
    const allactivities = await pb.collection('activites').getFullList({
        sort: 'date_activite'
    });
    return allactivities;
}

//3. fonction qui retourne la liste de tous les acteurs / réalisateurs participant au festival triés par ordre alphabétique.

export async function AllActorsFestival() {
    const allactivities = await pb.collection('invites').getFullList({
        sort: 'nom_invite'
    });
    return allactivities;
}

//3.5 fonction qui retourne la liste de tous les que les realisateurs du festival par ordre alphabétique

export async function OnlyRealisateursFestival() {
    const allaRealisateurs = await pb.collection('invites').getFullList({
        filter: 'role_invite = "realisateur"',
        sort: 'nom_invite'
    });
    return allaRealisateurs;
}

//4. Une fonction qui retourne les infos d'un film en donnant son id en paramètre

export async function FilmById(id) {
    const film = await pb.collection('Films').getOne(id);
    return film;
}

//5. Une fonction qui retourne les infos d'une activité en donnant son id en paramètre

export async function ActivityById(id) {
    const activity = await pb.collection('activites').getOne(id);
    return activity;
}

//6. Une fonction qui retourne les infos d'un acteur / réalisateur en donnant son id en paramètre

export async function ActorById(id) {
    const actor = await pb.collection('invites').getOne(id);
    return actor;
}


//7. Une fonction qui retourne toutes les activités d’un Jury donné par son id

export async function JuryActivitiesById(id) {
    const juryActivities = await pb.collection('activites').getFullList({
        filter: `invite_a = "${id}"`
    });
    return juryActivities;
}

//8. Une fonction qui retourne toutes les activités d’un animateur donné par son nom

export async function AllAnimateursName(name){
    const sortedRecordsAnimateur = await pb.collection('activites').getFullList({
        filter : `invite_a.prenom_invite = '${name}'`,
        expand : 'invite_a',
    });
    return sortedRecordsAnimateur;
}

//9. Une fonction qui permet d’ajouter ou modifier les informations d’un film, activité ou invité

export async function addNewFilm (NewFilm){
    await pb.collection('Films').create(NewFilm);
}

//9.5 Une fonction qui permet d’ajouter ou modifier les informations d’un film, activité ou invité

export async function updateFilmsbyId (id, data){
    await pb.collection('Films').update(id, data);
}

