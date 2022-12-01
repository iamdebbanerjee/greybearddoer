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

	// Task Add Function
	function taskAdd(e){
		// Check if the user has entered anything or not
		if (taskInput.value === ''){
			alert("Please enter a Task");
		}
			
		// Create new task
		const newTask = taskInput.value;

		// Create new List Item element and assign this task

		let newListItem = document.createElement('li');
		let newTextNode = document.createTextNode(newTask);
		newListItem.appendChild(newTextNode);
		taskList.appendChild(newListItem);


		e.preventDefault();
	}
}




// Program Test

// console.log(taskForm, addTask, taskFilter, taskList, clearTasks);