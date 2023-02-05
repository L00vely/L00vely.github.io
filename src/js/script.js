let certificatesButton = document.getElementById('button-certificates');

let skillsButton = document.getElementById('button-skills');

let projectsButton = document.getElementById('button-projects');

const hover = event =>{
    let container = event.target.parentNode;
    console.log(container);
    let title = container.querySelector('.container-title');
    title.classList.add('hover');
}

const unhover = event =>{
    let container = event.target.parentNode;
    console.log(container);
    let title = container.querySelector('.container-title');
    title.classList.remove('hover');
}


certificatesButton.addEventListener('mouseover', hover);

skillsButton.addEventListener('mouseover', hover);

projectsButton.addEventListener('mouseover', hover);
