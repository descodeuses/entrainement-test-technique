describe("FilterDuplicate", function() {
  it("retourne la liste sans les doublons [test de recette]", function() {
    const input = `8
1 1 3 2 1 4 5 4
`
    expect(main(input)).toEqual("1 3 2 4 5");
  });

  xit("récupère l'entier de la première ligne", function (){
    const input = "8\n1 1 3 2 1 4 5 4"
    expect(extractIntegerQuantity(input)).toEqual("8");
  })

  it("récupère la liste d''entier de la seconde ligne", function () {
    const input = "8\n1 1 3 2 1 4 5 4"
    expect(extractIntegerList(input)).toEqual("1 1 3 2 1 4 5 4");
  }) 

  it("découpe la liste de l'input pour avoir un tableau", function () {
    const integerList = "1 1 3"
    expect(splitIntegerList(integerList)).toEqual(["1", "1", "3"]);

  })

  xit("erreur si on plus de 10 puissance 5 entiers à traiter", function() {
    const input = `100001
1 1 3 2 1 4 5 4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`
    expect(main(input)).toThrow("Error trop d'entier dans la liste");
  });

  xit("erreur si un entier n'est pas entre - 10 puissance 6 et 10 puissance 6", function() {
    const input = `1
-1000001
`
    expect(main(input)).toThrow("Error entier en dehors de la zone autorisé");
  });
});
