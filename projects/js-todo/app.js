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


		e.preventDefault();
	}
}




// Program Test

// console.log(taskForm, addTask, taskFilter, taskList, clearTasks);