export default function datesOfProyects(){
    const contenedorDeProyectos = document.querySelectorAll(".flex-item");
    for(const containers of contenedorDeProyectos) {
        const datesOfProyects = containers.children[1].children[1];
        const proyectImg = containers.children[1].children[0];
        containers.addEventListener("mouseover",()=>{
            datesOfProyects.classList.add("animation-todo-list-info");
            proyectImg.classList.add("animation-todo-list-img");
            
            datesOfProyects.addEventListener("mouseout",()=> {
                datesOfProyects.classList.remove("animation-todo-list-info");
                proyectImg.classList.remove("animation-todo-list-img");
            })
        })
    }
}
