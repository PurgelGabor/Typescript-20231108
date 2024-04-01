/*
    - Készíts alprogramot ami...
        - Eldönti, hogy a paraméterül kapott szám tömbben van-e negatív szám
 */
function NegativE(szamok) {
    var eredmeny = false;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] < 0) {
            eredmeny = true;
        }
    }
    return eredmeny;
}
console.log(NegativE([0, 1, 2, 3, 4, 5, 5, 6, 7, 8, -34]));
console.log(NegativE([0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 34]));
function korKerTer(r) {
    var korKerulet = 2 * r * Math.PI;
    var korTerulet = r * r * Math.PI;
    return [korKerulet, korTerulet];
}
console.log(korKerTer(5));
console.log(korKerTer(9));
console.log(korKerTer(4.6));
