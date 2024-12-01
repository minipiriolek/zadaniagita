class Calculator{
    static add(a,b){
        console.log(`wynik dodawania : ${a+b}`)
    }
    static substruct(a,b){
        console.log(`wynik odejmowania : ${a-b}`)
    }
    static multiply(a,b){
        console.log(`wynik mnozenia : ${a*b}`)
    }
    static divide(a,b){
        console.log(`wynik dzielenia : ${a/b}`)
    }
}
let dodawanie = Calculator.add(2,2)
let odejmowanie = Calculator.substruct(2,2)
let mnozenie = Calculator.multiply(2,2)
let dzielenie = Calculator.divide(2,2)
