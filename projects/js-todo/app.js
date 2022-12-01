// Declare the variables

const taskForm = document.getElementById('task-form');
const addTask = document.querySelector('.task-add-btn');
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
	function taskAdd(){
		// Check if the user has entered anything or not
		if (taskForm.value === ''){
			alert("Please enter a Task");
		}else {
			const newTask = taskForm.value;
		}

		// Create new List Item element and assign this task

		let newListItem = document.createElement('li');
		let newTextNode = document.createTextNode('')
	}
}




// Program Test

// console.log(taskForm, addTask, taskFilter, taskList, clearTasks);