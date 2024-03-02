const tools = ['HTML', 'CSS', 'JS', 'PHP', 'Python', 'Java', 'Angular', 'NodeJS']
const icon_tools = ['html5', 'css3-alt', 'js', 'php', 'python', 'java', 'angular', 'node']
const color_tools = ['hsl(12, 73%, 51%)', 'hsl(207, 75%, 42%)', 'hsl(49, 86%, 56%)', 
                    'hsl(0, 0%, 2%)', '#5e79c0', 'hsl(10, 75%, 57%)', 'hsl(0, 100%, 38%)', 'green']


const Projects = ['Registro de Asistencia Docente-Alumno', 'Cajero Automático', 'Detección de mascarilla']
const srcProjects = ['project001', 'project-test', 'project-test']
InsertarProjects();

/*tools.forEach(tool => {
    for (let x = 0; x < tools.length; x++) {
        const element = tools[x];
        
    }
    console.log(tool[0])
});
*/
const el = document.querySelector(".card--lenguages");
for (let x = 0; x < tools.length; x++) {
    el.innerHTML+='<div class="tools-item" style="color: '+color_tools[x]+' "> \
                <i class="fa-brands fa-'+icon_tools[x]+' " id="IconTool"></i> \
                <div class="tool-text">' + tools[x] +'</div> \
                </div>';

    document.querySelector('.tools-item').style.color = color_tools[x];
    
}

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