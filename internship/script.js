let pendingTasks = [];
let completedTasks = [];

function addTask() {
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;

    if (taskTitle === '' || taskDescription === '') {
        alert('Please fill in both the title and description');
        return;
    }

    const task = {
        title: taskTitle,
        description: taskDescription,
        id: Date.now()
    };

    pendingTasks.push(task);
    renderTasks();
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
}

function completeTask(id) {
    const taskIndex = pendingTasks.findIndex(task => task.id === id);
    const [completedTask] = pendingTasks.splice(taskIndex, 1);
    completedTasks.push(completedTask);
    renderTasks();
}

function deleteTask(id, type) {
    if (type === 'pending') {
        pendingTasks = pendingTasks.filter(task => task.id !== id);
    } else {
        completedTasks = completedTasks.filter(task => task.id !== id);
    }
    renderTasks();
}

function renderTasks() {
    const pendingList = document.getElementById('pendingList');
    const completedList = document.getElementById('completedList');

    pendingList.innerHTML = '';
    completedList.innerHTML = '';

    pendingTasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${task.title}</strong>: ${task.description}
            </div>
            <div>
                <button class="complete" onclick="completeTask(${task.id})">Complete</button>
                <button class="delete" onclick="deleteTask(${task.id}, 'pending')">Delete</button>
            </div>
        `;
        pendingList.appendChild(li);
    });

    completedTasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <strong>${task.title}</strong>: ${task.description}
            </div>
            <div>
                <button class="delete" onclick="deleteTask(${task.id}, 'completed')">Delete</button>
            </div>
        `;
        completedList.appendChild(li);
    });
}

renderTasks();
