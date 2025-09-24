let amigos = []

const input = document.querySelector("#amigo")
const ulAmigos = document.querySelector("#listaAmigos")
const ulResultado = document.querySelector("#resultado")

function adicionarAmigo() {
    const nome = input.value.trim()
    if (!nome) {
        alert("Informe um nome válido!")
        return
    }
    amigos.push(nome)
    atualizarLista()
    input.value = ""
}

function atualizarLista() {
    ulAmigos.innerHTML = amigos.map(a => `<li>${a}</li>`).join("")
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo na lista!")
        return
    }
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)]
    ulResultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${sorteado}</strong> 🎉</li>`
}
