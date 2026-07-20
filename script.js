window.addEventListener("load", () => {
    const loader = document.querySelector(".loading");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 1200);
});

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.animate([
                {opacity:0,transform:"translateY(40px)"},
                {opacity:1,transform:"translateY(0)"}
            ],{
                duration:700,
                fill:"forwards"
            });
        }
    });
});

document.querySelectorAll("section").forEach(section=>{
    observer.observe(section);
});

document.querySelectorAll(".buttons a").forEach(button=>{
    button.addEventListener("mouseenter",()=>{
        button.style.boxShadow="0 0 20px darkred";
    });

    button.addEventListener("mouseleave",()=>{
        button.style.boxShadow="none";
    });
});

console.log("Official Website - Marten212");
