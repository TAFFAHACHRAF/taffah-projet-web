# Projet-web
# Achraf TAFFAH (GLSID1)
# A - PRÉSENTATION
Nous nous proposons de développer un Blog dont les parties Backend et Frontend seront développées et testées séparément. Le backend fonctionnera sous forme d’API JSON. Voici les technologies qui seront adoptées pour ce projet :
Du côté backend :
le framework NodeJS Express pour le serveur Web
l’ORM Prisma et une base de données Mysql/MariaDB pour la persistance de données
Du côté frontend :
HTML/CSS/Javascript en utilisant la bibliothèque Javascript JQuery et le framework CSS Bootstrap
# B - CONTRAINTES FONCTIONNELLES
# L’application Blog devra gérer quatre entités :
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
# Relations entre les entités :
Un article est associé à un et un seul utilisateur (Cet utilisateur devrait avoir le role AUTHOR)
Un utilisateur (ayant le rôle AUTHOR) peut écrire zéro ou plusieurs articles
Un article est associé à zéro ou plusieurs catégories
Une catégorie est associée à zéro ou plusieurs articles
Un commentaire est associé à exactement un article
Un article est associé à zéro ou plusieurs commentaires.


