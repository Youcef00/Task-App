# Task-App
Projet realisé par: **Youcef Moukeut**

### Présentation
Une Web app qui enregistre les taches à faire.
- Chaque tache a un niveau d'importance qui peut varier de 1 à 6
- Après avoir fini une tache tu cliques sur check et elle devient une tache finie
- Aspects techniques:
*	Projet fait avec **React JS**
* 	Le system de stockage des taches est fait  en exploitant le localStorage donc méme si on ferme la fenètre et on reouvre on perds pas les données.


Guide d'installation du projet:
- Executer les commandes suivantes dans le shell a la racine du projet:
```sh
% npm install
```

```sh
% npm run build
```

maintenant vous ouvrez le fichier *dist/index.html* dans votre navigateur.
Sinon vous pouvez consulter le jeu que j'ai déja déployer en ligne:  [Lien vers le site](https://peaceful-austin-cb6efd.netlify.app)



### Remarques:
Voici quelques fonctionalité rajouté
*  Pour switch vers le mode nuit cliquez sur l'icone:  ![icone](src/images/readme_images/dark_mode_icon.png?raw=true "Title")
	et pour retourner vers le mode jour cliquez sur l'icone  ![icone](src/images/readme_images/light_mode_icon.png?raw=true "Title")
*  Si vous voulez montrer que les taches finis cliquez sur **completed** ou si vous voulez les taches en cours cliquez sur **active** sinon **all** pour tout afficher,Vous pouvez voir qu'il y'a méme le comptes des taches en cours a gauche.
![icone](src/images/readme_images/info_bar.png?raw=true "Title")
