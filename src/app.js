console.log("ahmetcan")
//JS type safe değildir(tip güvenli değil)
let dolarDun = 9.20
let dolarBugun = 9.30
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11    bu kod çalışmıyor

console.log(euroDun)

//array
//camelCasing - degişken tanımlamaları
//PascalCasing - kelime ilk harfleri büyük
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]
let konutKredileriFiyat = [12,15,17]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("</ul>")

console.log(konutKredileri)
console.log(konutKredileriFiyat)
