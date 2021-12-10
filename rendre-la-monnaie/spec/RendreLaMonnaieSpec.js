describe("RendreLaMonnaie", function() {
  it("retourne null quand combinaison impossible", function() {
    expect(change(1)).toEqual(null);
  });

  it("retourne 3 billets de 2 quand le montant est 6", function() {
    expect(change(6)).toEqual({
      two: 3,
      five: 0,
      ten: 0
    });
  });

  it("retourne 2 billets de 2 quand le montant est 4", function() {
    expect(change(4)).toEqual({
      two: 2,
      five: 0,
      ten: 0
    });
  });

  it("retourne 1 billet de 5 quand le montant est 5", function() {
    expect(change(5)).toEqual({
      two: 0,
      five: 1,
      ten: 0
    });
  });

  it("retourne 1 billet de 10 quand le montant est 10", function() {
    expect(change(10)).toEqual({
      two: 0,
      five: 0,
      ten: 1
    });
  });

  it("retourne 98 billet de 10, 1 billet de 5 et 3 billets de 2 quand le montant est 991", function() {
    expect(change(991)).toEqual({
      two: 3,
      five: 1,
      ten: 98
    });
  });
});
