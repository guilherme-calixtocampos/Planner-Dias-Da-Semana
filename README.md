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
- ✅ Persistência automática das tarefas no navegador  
- ✅ Carregamento automático das tarefas ao abrir a página  
- ✅ Exibição dinâmica da mensagem "Nenhuma tarefa"  
- ✅ Organização das tarefas por estrutura de objeto  

---

## 🧠 Estrutura de Dados

As tarefas são armazenadas no `localStorage` com a seguinte estrutura:

```json
{
  "segunda": [],
  "terca": [],
  "quarta": [],
  "quinta": [],
  "sexta": [],
  "sabado": [],
  "domingo": []
}
