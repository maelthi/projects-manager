# Projects Manager

**Projects manager** is a Single Page Application aiming to give informations about current projects.

It is made with ReactJs and Typescript. The development server is ViteJS.

## How to install

If you need to install the project, go to the Maël-Thi [Github](https://github.com/maelthi/projects-manager) and clone the project in one of your folder :

```
git clone https://github.com/maelthi/projects-manager.git
```

Then, install the packages and dependencies :

```
npm i
```

Start the dev server :

```
npm run dev
```

Start the back-end server :

```
npm run db
```

If you need to run unit tests :

```
npm run test nameOfTheFile.tsx
```

If you still have questions, please contact the Technical leader and front-end developer of the project, Maël-Thi at mseme@hotmail.fr

## Improvements

- lazyload des routes
- loader lors des chargements
- messages quand pas de projets, pas de description ou de commentaires sur la page des projets
- utilisation d'un textarea dans la modale pour la description
- utilisation des getByRole dans les TU
- inputs réutilisables, composants plus génériques
- Mettre le nom du projet dans le title et dans l'url sous la forme d'un slug
- tests automatisés
- ajout d'alerte lorsque l'utilisateur fait des actions comme supprimer le projet, changer l'étape du projet
- pas eu le temps de faire certains tests unitaires
- problème d'appel en trop quand on ouvre la modale
- le tableau disparait lorsque la modale est ouverte
- le projet ne build pas à cause de tests qu'il faudrait creuser
- il y a des scintillements bizarres au niveau des noms des colonnes lorsqu'on fait une recherche, cela ne devrait pas arriver
- investiguer pourquoi le db.json est commité

Temps de dev: 7h
