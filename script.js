let input = document.getElementById('texto-tarefa');
const inputButton = document.getElementById('criar-tarefa')
let listTarefas = document.querySelector('#lista-tarefas')
let listItem = document.querySelector('#li')

inputButton.addEventListener('click', function (){
    let text = input.value
    let li = document.createElement('li')
    if (text === "") {
        alert('You must wright something!')
    }else{
        li.innerHTML = text     
        listTarefas.insertBefore(li,listTarefas.appendChild(li))
        input.value = ""

    }        
});

