let input = document.getElementById('texto-tarefa');
let inputButton = document.getElementById('criar-tarefa')
let listTarefas = document.querySelector('#lista-tarefas')
let listItem = document.querySelector('#li')

  inputButton.addEventListener('click', function (){
    let userData = input.value
    let li = document.createElement('li')
    if (input.value === ""){
        alert ("You must rigth something")
    }else{
    
        li.innerHTML = userData     
        listTarefas.insertBefore(li,listTarefas.appendChild(li))
        input.value = "";   
    }    
  });
  
 /*  listTarefas.addEventListener('click',function (event){      
    const listTarefas = event.target
        evento.target.classList.add('cinza')      
  })  */
  
  
  
  listTarefas.addEventListener('dblclick',function(completed){
    const listTarefas = completed.target;
    if (listTarefas.style.textDecoration === 'line-through') {
        listTarefas.style.textDecoration = 'none';
        listTarefas.classList.remove('completed');
    } else {
        listTarefas.style.textDecoration = 'line-through';
        listTarefas.classList.add ('completed');
      }
    });

    clearListButton = document.querySelector('#apagar-tudo')
    clearListButton.addEventListener('click', function () {          
         while (listTarefas.hasChildNodes()) {
          listTarefas.removeChild(listTarefas.firstChild);
        }
    })
    clearDoneListButton = document.querySelector('#remover-finalizados')
    clearDoneListButton.addEventListener('click', () => {
        document.querySelectorAll('li').forEach(function (doneList) {
          if (doneList.classList.contains('completed')) {
            doneList.remove();
          }
        });
      });
      
