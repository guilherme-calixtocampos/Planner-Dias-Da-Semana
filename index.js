const botoesAdd = document.querySelectorAll('.btn-add-tarefa')
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || {
    segunda: [],
    terca: [],
    quarta: [],
    quinta: [],
    sexta: [],
    sabado: [],
    domingo: []
}

botoesAdd.forEach(botao => {

    botao.addEventListener('click', () => {

        const card = botao.closest('.card-dia')
        const textarea = card.querySelector('.input-tarefa')
        const btnSave = card.querySelector('.btn-save-tarefa')
        const ul = card.querySelector('.lista-tarefas')
        const msg = card.querySelector('.msg-vazia')

        const dia = card.dataset.dia
        console.log('Dia:', dia)
        console.log('Existe?', tarefas[dia])

        textarea.classList.toggle('hidden')
        btnSave.classList.toggle('hidden')

        // botão salvar
        btnSave.onclick = () => {

            const tarefa = textarea.value.trim()
            if (!tarefa) return

            const li = document.createElement('li')
            li.textContent = tarefa
            li.classList.add('text-gray-400', 'text-sm')

            ul.appendChild(li)

            

            tarefas[dia].push(tarefa)

            localStorage.setItem("tarefas", JSON.stringify(tarefas))
            
            textarea.value = ''
            textarea.classList.add('hidden')
            btnSave.classList.add('hidden')

            carregarTarefas()
        }

        

    })

})
function carregarTarefas() {

    const cards = document.querySelectorAll('.card-dia')

    cards.forEach(card => {

        const dia = card.dataset.dia
        const ul = card.querySelector('.lista-tarefas')
        const msg = card.querySelector('.msg-vazia')

        ul.innerHTML = ''

        if (tarefas[dia].length === 0) {
            msg.classList.remove('hidden')
        } else {
            msg.classList.add('hidden')

            tarefas[dia].forEach(tarefa => {
                const li = document.createElement('li')
                li.textContent = tarefa
                li.classList.add('text-gray-400', 'text-sm')
                ul.appendChild(li)
            })
        }

    })
}

carregarTarefas()

