const wynikiTestow = [
    { imie: 'Adam', wynik: 85 },
    { imie: 'Ewa', wynik: 92 },
    { imie: 'Kamil', wynik: 78 },
    { imie: 'Magda', wynik: 95 },
    { imie: 'Piotr', wynik: 88 }
];

function analizujWyniki(wyniki) {
    const wynikiOcen = wyniki.map(({ imie, wynik }) => ({ imie, wynik }));
    const sredniaWynikow = wynikiOcen.reduce((suma, { wynik }) => suma + wynik, 0) / wynikiOcen.length;
    const najwyzszyWynik = wynikiOcen.reduce((max, { wynik }) => wynik > max ? wynik : max, wynikiOcen[0].wynik);
    const najnizszyWynik = wynikiOcen.reduce((min, { wynik }) => wynik < min ? wynik : min, wynikiOcen[0].wynik);

    console.log(`Średnia wyników testów: ${sredniaWynikow.toFixed(2)}`);
    console.log(`Najwyższy wynik: ${najwyzszyWynik}`);
    console.log(`Najniższy wynik: ${najnizszyWynik}`);

}
analizujWyniki(wynikiTestow);
