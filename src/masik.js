

var szemely = {
    nev: "Béla",
    kor: 43
}

var tmp = JSON.stringify(szemely)
console.log(tmp)

var visszaAlakitva = JSON.parse(tmp)
console.log(visszaAlakitva)