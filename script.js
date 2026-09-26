/* =====================================================
   SHARIF BD LANDING PAGE
   JavaScript
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* ================= PRODUCT COLOR SWITCH ================= */

const colorButtons = document.querySelectorAll(".color-btn");
const productImage = document.getElementById("productImage");

colorButtons.forEach((button) => {

    button.addEventListener("click", () => {

        colorButtons.forEach((btn) => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const image = button.dataset.image;

        productImage.style.opacity = "0";

        setTimeout(() => {

            productImage.src = image;

            productImage.style.opacity = "1";

        }, 180);

    });

});


/* ================= FAQ ================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");


        /* Close all FAQ items */

        faqItems.forEach((otherItem) => {

            otherItem.classList.remove("active");

            const otherAnswer =
                otherItem.querySelector(".faq-answer");

            otherAnswer.style.maxHeight = null;

        });


        /* Open clicked item */

        if (!isActive) {

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


/* ================= HEADER SCROLL EFFECT ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.06)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* ================= ACTIVE NAV LINK ================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    const scrollPosition =
        window.scrollY + 150;

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach((link) => {

                link.classList.remove("active");

                if (
                    link.getAttribute("href") ===
                    `#${sectionId}`
                ) {

                    link.classList.add("active");

                }

            });

        }

    });

});


/* ================= IMAGE ERROR FALLBACK ================= */

productImage.addEventListener("error", () => {

    console.log(
        "Product image could not be loaded. Check the images folder."
    );

});


/* ================= YEAR ================= */

const year = new Date().getFullYear();

console.log(
    `SHARIF BD Landing Page © ${year}`
);