/*
TYPESCRIPT

- Keszits alprogramot, ami...
    - Eldonti, hogy a parameterul kapott szam tombben van-e negativ szam
    - Egy parametrul kapott sugarbol megallapitja a kor keruletet es teruletet
        - Tuple-t alkalmazz
        - Kerulet: 2 * sugar * PI
        - Terulet: sugar * sugar * PI
    
- Keszits interface-t Auto neven
    - Gyarto (szoveg)
    - Tipus (szoveg)
    - Hengerurtartalom (szam)
    - BenzinesE (logikai)
*/


function NegativE(szamok:number[]):boolean{

    var eredmeny:boolean = false;

    for(var i:number = 0; i < szamok.length; i++){
        if(szamok[i] < 0){
            eredmeny = true;
        }
    }
    return eredmeny;
}

console.log(NegativE([0,1,2,3,4,5,5,6,7,8,-34]));
console.log(NegativE([0,1,2,3,4,5,5,6,7,8,34]));

function korKerTer(r:number):[number, number]{

    var korKerulet:number = 2 * r * Math.PI;
    var korTerulet:number = r * r * Math.PI;

    return [korKerulet, korTerulet];
}

console.log(korKerTer(5));
console.log(korKerTer(9));
console.log(korKerTer(4.6));


interface Auto {
    gyarto:string,
    tipus:string,
    ccm:number,
    benzinesE:boolean
}

/*
- Keszits publikus GitHub repositorit a sajat felhasznaloi fiokodban
- Indits Git BASH-t, es a jelenlegi TS projektedben inicializalj git-et
- A lokalis repo-t kosd ossze az online (github-os) repoddal
- Toltsd fel a jelenlegi allapotot a github-ra
*/

/*
TS!!
- Keszits alprogramot, ami kivalasztja egy auto tombbol a legkisebb hengerurtartalmu autot
- Keszits alprogramot, ami megadja a parameterul kapott auto tombbol a benzinesek darabszamat
- A valtoztatasokat toltsd fel a github repodba
*/
