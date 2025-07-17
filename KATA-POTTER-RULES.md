# 📘 Règles de gestion — Kata Potter

## 🧾 Contexte général

- Le client peut acheter des livres issus d’une série de **5 tomes Harry Potter** (de 1 à 5).
- Chaque tome coûte **8,00€**.
- Des **réductions** sont appliquées lorsqu’un client achète plusieurs **tomes différents** dans un même groupe.

---

## 💰 Prix unitaire

- **Prix de base d’un tome** (hors réduction) : `8.00 €`.

---

## 🎁 Réductions par groupe de tomes différents

| Nombre de tomes différents dans un groupe | Pourcentage de réduction | Prix du groupe |
|-------------------------------------------|--------------------------|----------------|
| 1 tome                                    | 0 %                      | 8,00 €         |
| 2 tomes différents                        | 5 %                      | 15,20 €        |
| 3 tomes différents                        | 10 %                     | 21,60 €        |
| 4 tomes différents                        | 20 %                     | 25,60 €        |
| 5 tomes différents                        | 25 %                     | 30,00 €        |

---

## 📦 Règles de constitution des groupes

- La **réduction s’applique uniquement** à un groupe de **tomes tous différents**.
- Il est **possible d’avoir plusieurs groupes** dans une même commande.
- Si un client achète **plusieurs exemplaires d’un même tome**, ces exemplaires doivent être **répartis dans différents groupes** si cela permet d’obtenir plus de réductions.

---

## 🧠 Règle d'optimisation

- Le système doit **former les groupes de manière à minimiser le prix total** de la commande.
- Il ne suffit pas de former les **groupes les plus grands possibles**.

### 🧪 Exemple d’optimisation

#### Cas d’entrée

- 2 tomes 1
- 2 tomes 2
- 2 tomes 3
- 1 tome 4
- 1 tome 5

#### ❌ Mauvaise stratégie (5 + 3)

- Groupe 1 : tomes 1, 2, 3, 4, 5 → 30,00 €
- Groupe 2 : tomes 1, 2, 3 → 21,60 €
- **Total : 51,60 €**

#### ✅ Stratégie optimale (2 groupes de 4)

- Groupe 1 : tomes 1, 2, 3, 4 → 25,60 €
- Groupe 2 : tomes 1, 2, 3, 5 → 25,60 €
- **Total : 51,20 €**

---

## 📌 Données d’entrée attendues

- Une **liste d’achats** (ex. : nombre d’exemplaires achetés pour chaque tome, de 1 à 5).
- Exemple d'entrée possible : `[2, 2, 2, 1, 1]`  
  *(correspondant aux quantités achetées des tomes 1 à 5)*

---

## 📤 Résultat attendu

- Le **prix total minimal** à payer, après application des réductions.
- *(Optionnel)* Une description des groupes constitués, si utile pour la traçabilité.

---

## ✅ Cas de test (avec 5 tomes)

| #  | Liste des livres (tomes 1 à 5) | Prix attendu (€) |
|----|--------------------------------|------------------|
| 1  | [0, 0, 0, 0, 0]                | 0.00             |
| 2  | [1, 0, 0, 0, 0]                | 8.00             |
| 3  | [1, 1, 0, 0, 0]                | 15.20            |
| 4  | [1, 1, 1, 0, 0]                | 21.60            |
| 5  | [1, 1, 1, 1, 0]                | 25.60            |
| 6  | [1, 1, 1, 1, 1]                | 30.00            |
| 9  | [2, 1, 0, 0, 0]                | 23.20            |
| 10 | [2, 2, 0, 0, 0]                | 30.40            |
| 11 | [2, 2, 2, 0, 0]                | 43.20            |
| 12 | [2, 2, 2, 1, 1]                | 51.20            |
 





