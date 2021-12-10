function change(cash) {
  /*
    Algo à tester : découpage de 
      - recherche de combinaison
      - filtre des combinaisons
      - selection de la plus intéressante
      - réponse

    Pour chercher des combinaisons possible :
      - que des billets de 2 (nombre de billet de 2 = cash / 2)
      - que des billets de 5 (nombre de billet de 5 = cash / 5)
      - que des billets de 10 (nombre de billet de 10 = cash / 10)

    On filtre les combinaisons qui n'arrive pas à 0

    Si il reste une combinaison, on la propose
    S'il reste plusieurs, on choissi celle qui utilise le plus de gros billet
    Sinon on renvoie null

    ---
    Algo : Prendre le plus gros montant en billet.
    Cette algorithme ne fonctionne pas pour le cas ou nous avons 6 par exemple

    d'abord on privilégie les billets de 10
      nombre de billet de 10 = cash / 10
      reste_de_cash = cash - (nombredebilletde10 * 10)
    puis on prendre le reste et on essaie avec les billets de 5
      nombre de billet de 5 = reste_de_cash / 5
      reste_de_cash = cash - (nombredebilletde5 * 5)
    puis on essaie avec le reste pour les billets de 2
      nombre de billet de 2 = reste_de_cash / 2
      reste_de_cash = cash - (nombredebilletde5 * 2)

    Si reste_de_cash = 1 alors retourn null
    sinon retourn le nombre de billets trouvé
  */

  let billetsDe10 = Math.floor(cash / 10)
  cash = cash - (billetsDe10 * 10)

  let billetsDe5 = Math.floor(cash / 5)
  cash = cash - (billetsDe5 * 5)

  let billetsDe2 = Math.floor(cash / 2)
  cash = cash - (billetsDe2 * 2)

  if (cash > 0) {
    return null
  } else {
    return {
      two: billetsDe2,
      five: billetsDe5,
      ten: billetsDe10
    }
  }

}