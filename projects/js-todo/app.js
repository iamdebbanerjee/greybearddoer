// Declare the variables

const taskForm = document.getElementById('task-form');
const taskInput = document.querySelector('#new-task');
const taskFilter = document.querySelector('#filter-task')
const taskList = document.querySelector('.task-list');
const clearTasks = document.querySelector('.task-clr-btn')

// Load all Event Listeners

loadEventListeners();

// Define the Load Event Listeners function

function loadEventListeners(){

	// Add Task event
	taskForm.addEventListener('submit', taskAdd);

	// Delete Task event
	taskList.addEventListener('click', deleteTask);

	// Filter tasks event
	taskFilter.addEventListener('keyup', filterTasks);

	// Clear Tasks event
	clearTasks.addEventListener('click', clearAllTasks);

}

// Task Add Function

function taskAdd(e){
	// Check if the user has entered anything or not
	if (taskInput.value === ''){
		alert("Please enter a Task");
	}else {
			
		// Create new task
		const newTask = taskInput.value;


		// Create new List Item element
		let newListItem = document.createElement('li');

		// Create new text node
		let newTextNode = document.createTextNode(newTask);

		// Append newTextNode to newListItem
		newListItem.appendChild(newTextNode);

		// Create new a element
		let newDeleteLink = document.createElement('a');

		// Create new Font Awesome x icon for deleting tasks
		let newDeleteIcon = document.createElement('i');

		// Assign fa, fa-remove classes to the x icon
		newDeleteIcon.classList.add('fa');
		newDeleteIcon.classList.add('fa-remove');

		// Append icon to a element as child
		newDeleteLink.appendChild(newDeleteIcon);

		// Give a element the href = # and class = 'delete-task' attributes
		newDeleteLink.setAttribute('href', '#');
		newDeleteLink.classList.add('delete-task');

		// Append a element to parent node of newTextNode (since txt nodes cannot append child nodes)
		newTextNode.parentElement.appendChild(newDeleteLink);

		// Append newListItem to taskList
		taskList.appendChild(newListItem);

		// Clear input field for next task
		taskInput.value = '';
	}

	// Prevent form for reloading when it is submitted
		e.preventDefault();
}


// Delete a task function

function deleteTask(e){

	console.log(e.target);

	if(e.target.parentElement.classList.contains('delete-task')){
		if(confirm("Are you sure?")){
			e.target.parentElement.parentElement.remove();
		}
	}
	e.preventDefault();
}

// Filter tasks function

function filterTasks(e) {
	const filterText = e.target.value.toLowerCase();
	const availableTasks = document.querySelectorAll('li');
	availableTasks.forEach(function(task){
		const item = task.textContent;
		if (item.toLowerCase().indexOf(filterText) !== -1){
			task.style.display = 'block';
		} else {
			task.style.display = 'none';
		}

	});
	
	// if (availableTasks.forEach(function(task) {
	// 	indexOf(task.textContent) === filterText;
	// })) {
		
	// }


	console.log(availableTasks);
}



// Clear Tasks function

function clearAllTasks() {
	taskList.innerHTML = '';
	// console.log('button clicked');
}

