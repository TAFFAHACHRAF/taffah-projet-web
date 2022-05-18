# projet-web
# Achraf TAFFAH (GLSID1)
A - PRÉSENTATION
Nous nous proposons de développer un Blog dont les parties Backend et Frontend seront développées et testées séparément. Le backend fonctionnera sous forme d’API JSON. Voici les technologies qui seront adoptées pour ce projet :
Du côté backend :
le framework NodeJS Express pour le serveur Web
l’ORM Prisma et une base de données Mysql/MariaDB pour la persistance de données
Du côté frontend :
HTML/CSS/Javascript en utilisant la bibliothèque Javascript JQuery et le framework CSS Bootstrap
B - CONTRAINTES FONCTIONNELLES
L’application Blog devra gérer quatre entités :
Utilisateur :
nom, 
email, 
password, 
role qui doit être un parmi (ADMIN, AUTHOR)
Article 
titre, 
contenu, 
image, 
createdAt,  (date)
updatedAt, (date)
published (Boolean)
Categorie 
nom
Commentaire 
email,
contenu
Relations entre les entités :
Un article est associé à un et un seul utilisateur (Cet utilisateur devrait avoir le role AUTHOR)
Un utilisateur (ayant le rôle AUTHOR) peut écrire zéro ou plusieurs articles
Un article est associé à zéro ou plusieurs catégories
Une catégorie est associée à zéro ou plusieurs articles
Un commentaire est associé à exactement un article
Un article est associé à zéro ou plusieurs commentaires.

C - TRAVAIL DEMANDÉ
C-1 - Avant de commencer le développement :
Dans le Drive de votre compte @etu.enset-media.ac.ma, créez un document Google Doc et nommez-le “Rapport”. Dans ce document, vous devez consigner toutes les étapes de réalisation de votre projet. Vous avez le loisir d’y ajouter des commentaires, des copies d’écrans et tout ce que vous jugez utile. Ce fichier doit être partagé avec moi en écriture sur l’adresse “prof-daaif@enset-media.ac.ma”  
A l’aide de votre adresse mail institutionnelle @etu.enset-media.ac.ma, créer un compte github.
Créez un dépôt privé nommé “projet-web” 
Ajoutez-moi comme collaborateur dans votre dépôt Github (settings)
user.name  : “pr-daaif” ou 
user.email : “prof-daaif@enset-media.ac.ma”
C-2 - BACKEND
Créer un projet dans VS Code dans un dossier  nommé projet-web.
Initiez le suivi du projet à l’aide de git (git init), ajoutez un fichier README.md puis faites un premier commit. Synchronisez ensuite, votre projet avec le dépôt distant correspondant.
Initiez dans ce dossier, un projet Express en utilisant la commande “express” (si elle n’est pas installée allez voir ici). Puis installez les dépendances.
Ajoutez dans la racine du projet un fichier nommé “.gitignore” contenant “node_modules”. (Pour éviter d’envoyer ce dossier au dépôt distant)
Faites un GIT COMMIT, puis un  GIT PUSH
Dans le dossier routes, ajouter trois fichiers :
articles.js
categories.js
commentaires.js

