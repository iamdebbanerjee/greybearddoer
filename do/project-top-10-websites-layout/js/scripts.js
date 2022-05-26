function displayOnClick() {
    const message = "THIS IS A DUMMY WEBSITE. IT IS CREATED FOR LEARNING PURPOSE ONLY.";
    alert(message);
}

const userClicked = document.querySelector('body');
userClicked.addEventListener('click', displayOnClick);
