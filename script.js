// =====================================
// GOSWAMI WATERPROOFING & PAINTS
// Premium JavaScript
// =====================================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Booking Form

const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your booking request has been received.\n\nOur team will contact you soon.");

bookingForm.reset();

});

}


// Fade Animation on Scroll

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition=".8s";

observer.observe(section);

});


// Gallery Popup

const images=document.querySelectorAll(".gallery-grid img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.style.position="fixed";

popup.style.left="0";

popup.style.top="0";

popup.style.width="100%";

popup.style.height="100%";

popup.style.background="rgba(0,0,0,.9)";

popup.style.display="flex";

popup.style.justifyContent="center";

popup.style.alignItems="center";

popup.style.zIndex="9999";

const image=document.createElement("img");

image.src=img.src;

image.style.maxWidth="90%";

image.style.maxHeight="90%";

image.style.borderRadius="15px";

popup.appendChild(image);

popup.onclick=()=>popup.remove();

document.body.appendChild(popup);

});

});


// Floating WhatsApp Animation

const whatsapp=document.querySelector(".floating-whatsapp");

if(whatsapp){

setInterval(()=>{

whatsapp.animate([

{transform:"scale(1)"},

{transform:"scale(1.15)"},

{transform:"scale(1)"}

],{

duration:900

});

},2500);

}


// Header Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.2)";

}else{

header.style.boxShadow="0 5px 15px rgba(0,0,0,.1)";

}

});


// Counter Animation (Optional)

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");

const c=+counter.innerText;

const increment=target/100;

if(c<target){

counter.innerText=Math.ceil(c+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});

const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

galleryImages.forEach(img=>{
    img.addEventListener("click",()=>{
        lightbox.style.display="flex";
        lightboxImg.src=img.src;
    });
});

closeLightbox.onclick=()=>{
    lightbox.style.display="none";
};

lightbox.onclick=(e)=>{
    if(e.target===lightbox){
        lightbox.style.display="none";
    }
};
