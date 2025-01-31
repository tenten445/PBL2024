document.addEventListener('DOMContentLoaded', () => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // localStorageからタスクを読み込み

    const taskInput = document.getElementById('taskInput');
    const tasksContainer = document.getElementById('tasksContainer');

    // タスクを登録する処理
    document.getElementById('addTaskButton').addEventListener('click', () => {
        const taskValue = taskInput.value.trim();
        if (taskValue) {
            tasks.push({ todo: taskValue, finished: false });
            taskInput.value = '';
            saveTasks(); // タスクを保存
            renderTasks();
        }
    });

    // タスクを描画する処理
    function renderTasks() {
        tasksContainer.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');
            if (task.finished) {
                taskElement.classList.add('completed');
            }

            // 完了ボタン
            const completeButton = document.createElement('button');
            completeButton.textContent = '完了';
            completeButton.classList.add('taskButton');
            completeButton.addEventListener('click', () => {
                tasks[index].finished = true;
                saveTasks(); // タスクを保存
                renderTasks();
            });

            // 削除ボタン
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '削除';
            deleteButton.classList.add('taskButton');
            deleteButton.addEventListener('click', () => {
                tasks = tasks.filter((_, i) => i !== index);
                saveTasks(); // タスクを保存
                renderTasks();
            });

            // タスクの内容
            taskElement.textContent = task.todo;
            taskElement.appendChild(completeButton);
            taskElement.appendChild(deleteButton);

            tasksContainer.appendChild(taskElement);
        });
    }

    // タスクをlocalStorageに保存する関数
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // 初期状態でタスクを表示
    renderTasks();
});
