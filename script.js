document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

   
    const addTask = () => {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const listItem = document.createElement('li');

       
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

       
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');

      
        const completeBtn = document.createElement('button');
        completeBtn.classList.add('complete-btn');
        completeBtn.innerHTML = '&#10003;'; 
        completeBtn.title = 'Mark as Complete';
        completeBtn.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

       
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.innerHTML = '&times;'; 
        removeBtn.title = 'Remove Task';
        removeBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        actionsDiv.appendChild(completeBtn);
        actionsDiv.appendChild(removeBtn);

        listItem.appendChild(taskSpan);
        listItem.appendChild(actionsDiv);
        taskList.appendChild(listItem);

        taskInput.value = ''; 
    };

  
    addTaskBtn.addEventListener('click', addTask);

   
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});