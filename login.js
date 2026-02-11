const usuario = document.querySelector('#usuario')
const erroUsuario = document.querySelector('#erroUsuario')
const erroSenha = document.querySelector('#erroSenha')
const senha = document.querySelector('#senha')
const btnLoga = document.querySelector('#btnLoga')

let login = JSON.parse(localStorage.getItem('login'))
if (!login) {
    login = [{ usuario: 'admin', senha: 'admin' }]
    localStorage.setItem('login', JSON.stringify(login))
}


btnLoga.addEventListener('click',()=>{
    const usuarioDigitado = usuario.value
    const senhaDigitada = senha.value

    verificaCadastro(usuarioDigitado,senhaDigitada)
    usuario.value = ''
    senha.value = ''
})

function verificaCadastro(usuario, senha) {
    for (const cadastro of login) {
        if (
            cadastro.usuario === usuario &&
            cadastro.senha === senha
        ) {
            window.location.href = 'index.html'
            return
        }
    }

    emiteErro()
}


function emiteErro(){
    erroUsuario.innerHTML = `Usuário ou senha invalido(s)`
    erroSenha.innerHTML = `Usuário ou senha invalido(s)`
}



