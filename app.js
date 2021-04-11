// Mobile Nav

const navExpand = [].slice.call(document.querySelectorAll(".nav-expand"));
const backLink = `<li class="nav-item">
        <a class="nav-link nav-back-link" href="javascript:;">
          Back
        </a>
      </li>`;

navExpand.forEach((item) => {
    item
        .querySelector(".nav-expand-content")
        .insertAdjacentHTML("afterbegin", backLink);
    item
        .querySelector(".nav-link")
        .addEventListener("click", () => item.classList.add("active"));
    item
        .querySelector(".nav-back-link")
        .addEventListener("click", () => item.classList.remove("active"));
});


const goy = document.querySelectorAll(".goo");
const bodys = document.querySelector('body');
const x = window.matchMedia("(max-width: 767px)")
goy.forEach((gos) => {
    gos.addEventListener("click", () => {
        const el = document.getElementById(gos.getAttribute("data-scroll"));
        el.scrollIntoView({ behavior: "smooth", block: "start" });

        if (el === x) {
            el.style.marginTop = "10px"
        } else {
            el.style.marginTop = "50px";
        }
        bodys.classList.remove('nav-is-toggled')
    });
});



// not-so-important stuff starts here

const ham = document.getElementById("ham");
ham.addEventListener("click", function () {
    document.body.classList.toggle("nav-is-toggled");
});
// Watch Video
const playVideo = document.querySelector(".plays");
const closeVideo = document.querySelector(".close-video");
const watch = document.querySelector(".watch");
const videoPlay = document.querySelector(".video-play");

playVideo.addEventListener("click", function () {
    watch.classList.add("view");
    videoPlay.setAttribute("src", "img/video.mp4");
});
closeVideo.addEventListener("click", function () {
    watch.classList.remove("view");
    videoPlay.setAttribute("src", "");
});
// const items = document.querySelectorAll(".accordion button");

// function toggleAccordion() {
//     const itemToggle = this.getAttribute("aria-expanded");

//     for (i = 0; i < items.length; i++) {
//         items[i].setAttribute("aria-expanded", "false");
//     }

//     if (itemToggle == "false") {
//         this.setAttribute("aria-expanded", "true");
//     }
// }

// items.forEach((item) => item.addEventListener("click", toggleAccordion));