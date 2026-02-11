const tarefas = document.querySelector('#tarefas')
const nenhumaTarefa = document.querySelector('#nenhuma-tarefa')
const tarefa = document.querySelector('#tarefa')
const btnAddTarefa = document.querySelector('#btn-add-tarefa')
const btnSaveTarefa = document.querySelector('#btn-save-tarefa')

btnAddTarefa.addEventListener('click',() => {
    tarefa.classList.toggle('hidden')
    btnSaveTarefa.classList.toggle('hidden')
    
})
