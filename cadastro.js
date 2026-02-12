const usuario = document.querySelector('#usuario')
const senha = document.querySelector('#senha')
const confirmaSenha = document.querySelector('#confirma-senha')
const btnCadastro = document.querySelector('#btnCadastro')

const avisoUsuario = document.querySelector('#avisoUsuario')
const avisoSenha = document.querySelector('#avisoSenha')
const avisoConfirmaSenha = document.querySelector('#avisoConfirmaSenha')


function atualizaCadastros() {
    localStorage.setItem('login', JSON.stringify(login))
}

let login = JSON.parse(localStorage.getItem('login')) //verifica se já tem login no localstorage, se já tem ele já salva ali
if (!login) { //se não tiver ele cria o login de admin e cria o localstorage
    login = [{ usuario: 'admin', senha: 'admin' }]
    localStorage.setItem('login', JSON.stringify(login))
}

btnCadastro.addEventListener('click',()=>{ 
    const usuarioDigitado = usuario.value
    const senhaDigitada = senha.value
    const confirmaSenhaDigitada = confirmaSenha.value
    const usuarioValidado = verificaUsuario(usuarioDigitado) //salva o resultado boolean da function
    const senhaValidada = verificaSenha(senhaDigitada,confirmaSenhaDigitada) //salva o resultado boolean da function

    if ( usuarioValidado && //se o boolean for true ele chama cadastra com os parametros
        senhaValidada
    ) {
        cadastra(usuarioDigitado, senhaDigitada)
    }
})

function verificaSenha(senhaDigitada,confirmaSenhaDigitada) { //verifica a senha

    avisoSenha.innerHTML = '' //esvazia o campo 
    avisoConfirmaSenha.innerHTML = '' //esvazia o campo

    if (!senhaDigitada || !confirmaSenhaDigitada) {
        avisoSenha.innerHTML = `Digite uma senha` //se não dá aviso
        avisoConfirmaSenha.innerHTML = `Digite uma senha`
    } else {
            if (senhaDigitada.trim() === confirmaSenhaDigitada.trim()) { //ve se as senhas batem
                return true //se sim, retorna true
            } else {
                avisoSenha.innerHTML = `Senhas divergentes` //se não dá aviso
                avisoConfirmaSenha.innerHTML = `Senhas divergentes`
                return false
        }
    }
}

function verificaUsuario(usuarioDigitado){

    avisoUsuario.innerHTML = '' //esvazia o campo 

    for (const cadastro of login) { //for que passa a cada usuario vendo se os nomes de usuarios são iguais
        if (cadastro.usuario.trim() == usuarioDigitado.trim()) {
            avisoUsuario.innerHTML = `Já existe um usuário com este nome de usuário`
            avisoUsuario.classList.add('text-red-900')
            return false
        }
    } 
    avisoUsuario.innerHTML = 'Usuário disponível' //depois de passar por todos usuarios, se nenhum for igual, dai sim ele retorna true
    avisoUsuario.classList.add('text-green-900/90')
    return true
}

function cadastra(usuarioDigitado, senhaDigitada) { //function cadastra 
    login.push({ //dá push para o array
        usuario: usuarioDigitado,
        senha: senhaDigitada
    })
    atualizaCadastros() //salva no localstorage

    window.location.href = 'index.html' //manda pro index
}

