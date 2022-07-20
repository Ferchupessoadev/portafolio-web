export default function scroll() {
    const navBar = document.querySelector("header");
    addEventListener("scroll",(e)=>{
        let scroll = scrollY;
        if(scroll >= 5) {
            navBar.classList.add("header-scroll");
        } else {
            navBar.classList.remove("header-scroll");
        }
    })
}