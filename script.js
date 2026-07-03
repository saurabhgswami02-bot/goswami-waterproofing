// ===========================
// GOSWAMI WATERPROOFING
// Premium Website Script
// ===========================

// Sticky Header
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Scroll Reveal
const reveals = document.querySelectorAll("section");

function revealSection() {

    reveals.forEach(sec => {

        let top = sec.getBoundingClientRect().top;
        let height = window.innerHeight;

        if (top < height - 120) {
            sec.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealSection);
revealSection();

// Counter Animation
const counters = document.querySelectorAll(".counter h2");

const speed = 100;

counters.forEach(counter => {

    const update = () => {

        const target = parseInt(counter.innerText);

        if (isNaN(target)) return;

        const count = +counter.getAttribute("data-count") || 0;

        const inc = target / speed;

        if (count < target) {

            const next = Math.ceil(count + inc);

            counter.setAttribute("data-count", next);

            counter.innerText = next + "+";

            setTimeout(update, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

});

// Active Menu
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// Back To Top
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "20px";
topBtn.style.bottom = "170px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#004aad";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// Gallery Popup
document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=()=>{

const popup=document.createElement("div");

popup.style.position="fixed";
popup.style.top="0";
popup.style.left="0";
popup.style.width="100%";
popup.style.height="100%";
popup.style.background="rgba(0,0,0,.85)";
popup.style.display="flex";
popup.style.alignItems="center";
popup.style.justifyContent="center";
popup.style.zIndex="9999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="10px";

popup.appendChild(image);

popup.onclick=()=>popup.remove();

document.body.appendChild(popup);

}

});

console.log("Website Loaded Successfully");
