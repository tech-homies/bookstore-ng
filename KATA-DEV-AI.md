# Prérequis

- Utiliser Github Copilot en mode `Agent`
- Utiliser le LLM `GPT-4.1` (included)
- Ajouter le dossier `src` au `Context` ainsi que le dossier `src`

# Instructions - STEP 1 (bugfix)

Il y a un bug dans mon application.  
Il se trouve sans la page qui liste les livres de ma bibliothèque.  
Lorsque je supprime un livre de mon panier en cliquant sur le bouton associé, tous les livres de ce tome sont supprimés hors, cela ne devrait en retirer qu'un seul.  

**`@OPTIONNAL :`** Peux-tu le faire avec des fonctions pures ?

Peux-tu faire un test unitaire associé à ta modification ?

Peux-tu exécuter l'ensemble des tests pour vérifier que tout est OK ?

# Instructions - STEP 2 (discount rules)

Peux-tu calculer le prix du panier en suivant ses règles présentes sur `KATA-POTTER-RULES.md` dans un service nommé `price.service.ts` ?  
Je te conseille de calculer tous les groupes de livres possibles et d'en calculer le prix.  
Le prix du panier doit être le plus petit de l'ensemble des possibilités.  
N'utilise que des fonctions pures.  
Il faudrait également que tu logues les groupes de livres et le prix retenu dans la console.  

**`@OPTIONNAL :`** Évite l'utilisation des boucle for et des while pour privilégier l'API des tableaux.

**`@OPTIONNAL :`** Peux-tu faire un test unitaire associé à ce service ?

**`@OPTIONNAL :`** Optimise les tests pour que les cas de tests soient dans un tableau facilement éditable par la suite.

# Instructions - STEP 3 (connect service to app cart)

Utilise ce service dans le service `cart.service.ts` pour calculer le prix du panier.
