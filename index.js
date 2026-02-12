const botoesAdd = document.querySelectorAll('.btn-add-tarefa')

/* =========================
   MODELO PADRÃO
========================= */

const modeloPadrao = {
    segunda: [],
    terca: [],
    quarta: [],
    quinta: [],
    sexta: [],
    sabado: [],
    domingo: []
}

/* =========================
   INICIALIZAÇÃO
========================= */

let tarefas = JSON.parse(localStorage.getItem("tarefas"))

if (!tarefas || typeof tarefas !== "object") {
    tarefas = modeloPadrao
} else {
    Object.keys(modeloPadrao).forEach(dia => {
        if (!tarefas[dia]) {
            tarefas[dia] = []
        }
    })
}

/* =========================
   SALVAR NO LOCALSTORAGE
========================= */

function salvarLocalStorage() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

/* =========================
   EDITAR TAREFA
========================= */

function editarTarefa(dia, index) {

    const novoTexto = prompt("Editar tarefa:", tarefas[dia][index].texto)

    if (!novoTexto) return

    tarefas[dia][index].texto = novoTexto
    salvarLocalStorage()
    carregarTarefas()
}

function removerTarefa(dia, index) {
    tarefas[dia].splice(index,1)
    salvarLocalStorage()
    carregarTarefas()
}

/* =========================
   EVENTO ADICIONAR
========================= */

botoesAdd.forEach(botao => {

    botao.addEventListener('click', () => {

        const card = botao.closest('.card-dia')
        const textarea = card.querySelector('.input-tarefa')
        const btnSave = card.querySelector('.btn-save-tarefa')

        const dia = card.dataset.dia

        textarea.classList.toggle('hidden')
        btnSave.classList.toggle('hidden')

        btnSave.onclick = () => {

            const texto = textarea.value.trim()
            if (!texto) return

            tarefas[dia].push({
                texto: texto
            })

            salvarLocalStorage()
            carregarTarefas()

            textarea.value = ''
            textarea.classList.add('hidden')
            btnSave.classList.add('hidden')
        }
    })
})

/* =========================
   RENDERIZAR TAREFAS
========================= */

function carregarTarefas() {

    const cards = document.querySelectorAll('.card-dia')

    cards.forEach(card => {

        const dia = card.dataset.dia
        const ul = card.querySelector('.lista-tarefas')
        const msg = card.querySelector('.msg-vazia')

        ul.innerHTML = ''

        if (!tarefas[dia] || tarefas[dia].length === 0) {
            msg.classList.remove('hidden')
            return
        }

        msg.classList.add('hidden')

        tarefas[dia].forEach((tarefaObj, index) => {

            const li = document.createElement('li')
            li.classList.add(
                'text-gray-400',
                'text-lg',
                'flex',
                'justify-between',
                'items-center'
            )

            const span = document.createElement('span')
            span.textContent = tarefaObj.texto

            const div = document.createElement('div')
            div.classList.add(
                'flex',
                'gap-3'
            )

            const imgEdit = document.createElement('img')
            imgEdit.src = './img/pencil.png'
            imgEdit.classList.add(
                'w-6',
                'h-6',
                'cursor-pointer',
                'hover:opacity-70'
            )

            imgEdit.addEventListener('click', () => {
                editarTarefa(dia, index)
            })

            const imgRemove = document.createElement('img')
            imgRemove.src = './img/remove.png'
            imgRemove.classList.add(
                'w-6',
                'h-6',
                'cursor-pointer',
                'hover:opacity-70'
            )

            imgRemove.addEventListener('click', () => {
                removerTarefa(dia, index)
            })

            li.appendChild(span)
            li.appendChild(div)
            div.appendChild(imgEdit)
            div.appendChild(imgRemove)

            ul.appendChild(li)
        })
    })
}

/* =========================
   INICIAR SISTEMA
========================= */

carregarTarefas()
