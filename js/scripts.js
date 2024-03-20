
const Projects = ['Registro de Asistencia Docente-Alumno', 'Cajero Automático', 'Detección de mascarilla']
const srcProjects = ['project001', 'project-test', 'project003']
InsertarProjects();


async function fetchData(type = "skills") {
    let response
    if (type === "skills") {
        response = await fetch("skills.json")
    }

    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("card--lenguages");
    let skillHTML = "";

    skills.forEach(skill => {
        skillHTML += `
            <div class="tools-item">
                <img src="${skill.icon}" alt="skill"/>
                <span class="tool-text">${skill.name}</span>
            </div>
        `;
    });

    skillsContainer.innerHTML = skillHTML;
}

fetchData().then(data => {
    showSkills(data);
});


var elProj = document.getElementsByClassName("card-project");

function InsertarProjects() {
    const contain = document.querySelector(".project--list");
    const ccn = contain.querySelector(".card-project:nth-child(1)");
    const cloneccn = ccn.cloneNode(true);
    cloneccn.classList.remove("hide");


    for (let x = 0; x < Projects.length; x++) {
        var title = cloneccn.querySelector(".project-title");
        var img = cloneccn.querySelector(".project-image");
        var demo = cloneccn.querySelector(".demo");
        var code = cloneccn.querySelector(".code");

        title.textContent = Projects[x];
        img.setAttribute('src', '../assets/images/'+srcProjects[x]+'.jpg');
        img.setAttribute('alt', 'Project Francisco 001');

        demo.setAttribute('href', 'https://www.youtube.com');
        code.setAttribute('href', 'https://www.github.com')
        contain.appendChild(cloneccn.cloneNode(true));
    }
}

document.body.onscroll = function() { TopPage() };

function TopPage() {

    let idIntro = document.getElementById("Presentation");
    let point = idIntro.getBoundingClientRect();
    
    if (point.top == 0) {
      //alert("Llegamos al top del bloque");
        document.getElementById("Header").classList.toggle('nobg');
    }else{
        document.getElementById("Header").classList.remove('nobg');
    }
}

// IMAGE PROJECT_ASISTENT :https://www.buk.cl/hubfs/CL%20-%20Pillar%20Xtra%20-%20Control%20de%20Asistencia/tipos%20de%20Control%20de%20asistencia.png