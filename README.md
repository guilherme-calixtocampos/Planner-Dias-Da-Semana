# 📌 Ur Planner

Aplicação web simples de **Planner Semanal**, onde o usuário pode organizar tarefas por dia da semana.

Este projeto foi desenvolvido com foco em **manipulação de DOM, lógica em JavaScript e persistência de dados com LocalStorage**.

---

## 🚀 Demonstração

https://guilherme-calixtocampos.github.io/Planner-Dias-Da-Semana/login.html

---

## 🛠 Tecnologias Utilizadas

- HTML5  
- Tailwind CSS  
- JavaScript (Vanilla JS)  
- LocalStorage  
- Git & GitHub  
- GitHub Pages  

---

## 🎯 Funcionalidades

- ✅ Adicionar tarefas por dia da semana
- ✅ Editar tarefas existentes
- ✅ Remover tarefas
- ✅ Marcar tarefas como concluídas
- ✅ Persistência automática das tarefas no navegador (LocalStorage)
- ✅ Manutenção do status (concluída / pendente) mesmo após recarregar a página
- ✅ Contador dinâmico de tarefas por dia
- ✅ Atualização automática da interface após qualquer modificação
- ✅ Carregamento automático das tarefas ao abrir a página
- ✅ Exibição dinâmica da mensagem "Nenhuma tarefa"
- ✅ Organização das tarefas utilizando estrutura de objeto por dia da semana
---

## 🧠 Estrutura de Dados

As tarefas são armazenadas no `localStorage` com a seguinte estrutura:

```json
{
  "segunda": [
    { "texto": "Estudar JavaScript", "status": true },
    { "texto": "Treinar", "status": false }
  ],
  "terca": [],
  "quarta": [],
  "quinta": [],
  "sexta": [],
  "sabado": [],
  "domingo": []
}

