class Koszyk {
    constructor() {
        this.produkty = []; 
    }
    addProduct(nazwa, cena, ilosc = 1) {
        const istniejacyProdukt = this.produkty.find(produkt => produkt.nazwa === nazwa);

        if (istniejacyProdukt) {
            istniejacyProdukt.ilosc += ilosc;
        } else {
            const nowyProdukt = { nazwa, cena, ilosc };
            this.produkty = [...this.produkty, nowyProdukt];
        }

        console.log(`${nazwa} został dodany do koszyka.`);
    }
    removeProduct(nazwa) {
        const indeksProduktu = this.produkty.findIndex(produkt => produkt.nazwa === nazwa);

        if (indeksProduktu !== -1) {
            this.produkty = this.produkty.filter(produkt => produkt.nazwa !== nazwa);
            console.log(`${nazwa} został usunięty z koszyka.`);
        } else {
            console.log(`Produkt ${nazwa} nie został znaleziony w koszyku.`);
        }
    }

    showCart() {
        if (this.produkty.length === 0) {
            console.log('Koszyk jest pusty.');
        } else {
            console.log('Zawartość koszyka:');
            this.produkty.forEach(({ nazwa, cena, ilosc }) => {
                console.log(`- ${nazwa}, Cena: ${cena} zł, Ilość: ${ilosc}`);
            });
        }
    }
}

const mojKoszyk = new Koszyk();
mojKoszyk.addProduct('Gruszka', 3, 5);
mojKoszyk.addProduct('Chleb', 4, 1);
mojKoszyk.addProduct('Sok', 2.5, 2);
mojKoszyk.showCart();
mojKoszyk.addProduct('Gruszka', 3, 3);
mojKoszyk.showCart();
mojKoszyk.removeProduct('Chleb');
mojKoszyk.showCart();
mojKoszyk.removeProduct('Masło'); 
