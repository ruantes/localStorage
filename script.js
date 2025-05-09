let btn = document.querySelector("#btn")
let user = document.querySelector("#user")
let title = document.querySelector("#welcome")
let exit = document.querySelector("#exit")

/* 1 = Salvar LocalStorage */
/* localStorage.setItem("username", "Ruan") */

/* 2 - Pegar ítem LocalStorage */
/* let username = localStorage.getItem("username") */

/* 3 - Apagar ítem LocalStorage */
/* localStorage.removeItem(username) */

const sair = ()=> {
    localStorage.removeItem("username")
    title.innerHTML = "Faça seu Login!" 
}

exit.addEventListener("click", sair)

btn.addEventListener("click", ()=> {
    localStorage.setItem("username", user.value)
    let username = localStorage.getItem("username")
    title.innerHTML = `Bem vindo, ${username}!`

    if(username.trim() != "") {
    title.innerHTML = "Faça seu Login!"
    }
})

function pegarValorLocal() { 
    let username = localStorage.getItem("username")

    if(username == null) {
        title.innerHTML = "Faça seu Login!"
    }else {
    }
}

pegarValorLocal()