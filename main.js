const taskInput = document.querySelector("#taskInput"),
   addBtn = document.querySelector("#addBtn"),
   taskList = document.querySelector(".taskList")

addBtn.addEventListener("click", ()=>{

  if(taskInput.value){
    const input = taskInput.value.trim()
    taskList.innerHTML += `
    <div class = 'task'>
      <p>${input}</p>
          <div class="btns">
              <button class = 'done'>done</button>
              <button class = 'edit'>edit</button>
              <button class = 'delete'>delete</button>
          </div>
      </div>`
      taskInput.value = ''
  }else{
    alert('text kiriting')
  }
})



taskList.addEventListener('click', (e)=>{
  const taskDiv = e.target.closest('.task')
  const pElement = taskDiv.querySelector('p')

  if(e.target.classList.contains('edit')){
    pElement.style.textDecoration = 'line-through'
  }
  if(e.target.classList.contains('delete')){
    taskDiv.remove()
  }
  if(e.target.classList.contains('done')){
    const newText = prompt('change your task', pElement.textContent)
    if(newText !== null){
      pElement.textContent = newText
    }
  }
  
})
