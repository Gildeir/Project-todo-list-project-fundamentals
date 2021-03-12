let input = document.getElementById('texto-tarefa');
let inputButton = document.getElementById('criar-tarefa')
let listTarefas = document.querySelector('#lista-tarefas')
let listItem = document.querySelector('#li')

  inputButton.addEventListener('click', function (){
    let userData = input.value
    let li = document.createElement('li')
    
        li.innerHTML = userData     
        listTarefas.insertBefore(li,listTarefas.appendChild(li))
        input.value = "";       
  });
  
  listTarefas.addEventListener('click',function (evento){      
      evento.target.classList.add('cinza')      
  })
  
  listTarefas.addEventListener('dblclick',function(completed){
    
    if (listTarefas.style.textDecoration === 'line-through') {
        listTarefas.style.textDecoration = 'none';
        //listTarefas.classList.remove('completed');
      } else {
        listTarefas.style.textDecoration = 'line-through';
       // listTarefas.target.classList.add ('completed');
      }
    });





