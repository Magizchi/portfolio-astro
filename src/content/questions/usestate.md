---
title: "React => C'est quoi useState ?"
sujet: "react hooks: useState"
domaine: "React"
number: 2.1
---

# A finir

## React Hooks: useState

<!-- ### (qui) Qui utilise les hooks ?

 Toute la partie React sa sera le développeur -->

### Quoi?

 useState est un Hook qui permet de gérer un ou plusieurs états dans un composant

### Où ?

 On l'utilise à la base des composants (ne peut être utiliser dans des boucles ou des conditions, ni en JS classique).

### Quand ?

 On a besoin de gérer des données dans un composant

### Comment ?

 Il suffit d'importer les useState depuis React, pour les utiliser, par contre c'est inutilisable avec les classes

 ```js
    import { useState } from react;
    const [state, setState] = useState<Type>(init);
 ```

-- **init** : Est la valeur par defaut qu'on initialise</br>
-- **Type** : Permet d'initier le Type du l'etat</br>
-- **state** : Est l'etat sauvegarder</br>
-- **setState** : Permet de modifier la valeur du 'state'</br>

### Pourquoi ?

 Cela permet de sauvegarder des valeurs dans un composant et pouvoir le modifier sans re faire un rendu complet de la page

### En Résumé

 Le useState est une fonctionnalité de React, qui permet de gérer un ou plusieurs état dans un composant.

### Source

 [info useState](https://react.dev/reference/react/useState)
