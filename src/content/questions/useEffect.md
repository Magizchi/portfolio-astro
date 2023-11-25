---
title: "React => C'est quoi useEffect ?"
sujet: "react hooks: useEffect"
domaine: "React"
number: 2.2
---


## React Hooks: useEffect

### Quoi?

 UseEffect permet de modifier le DOM avec les state présents modification de la page, appelle autre que react

### Où ?

 Dans un composant, est s'utilise juste après le useState

### Quand ?

 Pour pouvoir modifier le rendu de la page

### Comment ?

 Au second chargement de la page, ou quand le useEffect est lié au dependance 

### Pourquoi ?

 Cela permet

### Exemple

 ```js
    import { useEffect } from react;
    useEffect(() => {
        // Ton Code ici
    },[/* ici les dépendances de ce useEffect */])
 ```

### En Résumé

 Le useEffect va permet de mettre a jour le DOM avec les nouveau états du composant

### Source
