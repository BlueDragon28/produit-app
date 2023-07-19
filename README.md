# Produit App

Il s'agit d'un petit projet de type CRUD pour valider mon accès au stage chez Confledis. Les deux parties backend et frontend sont incluses dans ce dépôt. La partie backend est à la racine de ce projet, elle a été réalisée en Python avec Django. Le frontend est dans le dossier gestion_front et a été réalisé avec Reactjs.


## Installation

Pour installer le projet, il faut d'abord cloner le dépôt.

```
git clone https://github.com/BlueDragon28/produit-app.git
cd produit-app
```

Il faut ensuite installer Python 3 (Python 3.11.4 a été utilisé durant le développement), créer un environnement virtuel et installer les dépendances.

```
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Ensuite, appliquer les migrations de la base de données SQLite et lancer le serveur de développement Django.

```
python manage.py migrate
python manage.py runserver 8080
```

Vous pouvez ensuite visiter le site à l'adresse [http://localhost:8080](http://localhost:8080). L'application React est incluse dans les statics de Django.


# Licence

Vous pouvez accéder à la [LICENSE ici](LICENSE).
