let certificatesButton = document.getElementById('button-certificates');
let skillsButton = document.getElementById('button-skills');
let projectsButton = document.getElementById('button-projects');

const showHide = event =>{
    let container = event.target.parentNode;
    let body = container.querySelector('.container-body');
    if(body.style.display  === ''){
        body.style.display = 'flex';
        event.target.style.backgroundColor = "rgb(109, 153, 219)";
    } else{
        body.style.display = '';
        event.target.style.backgroundColor = "rgb(0, 0, 0)";
    }
}

certificatesButton.addEventListener('click', showHide);
skillsButton.addEventListener('click', showHide);
projectsButton.addEventListener('click', showHide);