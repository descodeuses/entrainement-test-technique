# Filtrer une liste de données

Partant d'une liste de nombre entier, vous devez supprimer les nombres en double en les laissants dans le même ordre.

Le fichier d'entré contient
- en première ligne le nombre d'entier à traiter
- en seconde ligne la liste des entiers séparé par un espace

exemple d'input :
```
8
1 1 3 2 1 4 5 4
```
la sortie
```
1 3 2 4 5
```

Contraintes bonus :

La quantité d'entier à traité est comprise entre 0 et 10 puissance 5

(- 10 puissance 6) < arr[i] < (10 puissance 6)
i compris entre 0 et N


## Algorithme de résolution

1. Récupèrer la liste d'entier sur la deuxième ligne
2. convertir la deuxième ligne en tableau
3. Parcourir la liste d'entier, pour chaque entier :
  comparer avec le tableau de résultat
    Si l'entier n'est pas dans le tableau alors on l'ajoute

