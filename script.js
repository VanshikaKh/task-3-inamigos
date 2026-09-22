/* =====================================================
AI LEARNHUB - JAVASCRIPT
===================================================== */

/* ---------- MOBILE MENU ---------- */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

```
navLinks.classList.toggle("active");

const icon = menuBtn.querySelector("i");

if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
} else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
}
```

});

/* ---------- CLOSE MOBILE MENU ---------- */

document.querySelectorAll(".nav-links a").forEach(link => {

```
link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

});
```

});

/* ---------- CONTACT FORM ---------- */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

```
event.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

if (name === "" || email === "" || message === "") {

    formMessage.textContent =
        "Please fill in all the fields.";

    return;
}


formMessage.textContent =
    `Thank you, ${name}! Your message has been received.`;

contactForm.reset();
```

});

/* ---------- CURRENT YEAR ---------- */

document.getElementById("year").textContent =
new Date().getFullYear();

/* ---------- BACK TO TOP ---------- */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

```
if (window.scrollY > 500) {

    backToTop.classList.add("show");

} else {

    backToTop.classList.remove("show");

}
```

});

backToTop.addEventListener("click", () => {

```
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
```

});

/* ---------- SCROLL REVEAL ---------- */

const revealElements = document.querySelectorAll(
".course-card, .service-box, .feature, .benefit, .contact-item"
);

const observer = new IntersectionObserver(

```
entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);

        }

    });

},

{
    threshold: 0.15
}
```

);

revealElements.forEach(element => {

```
element.style.opacity = "0";
element.style.transform = "translateY(25px)";
element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

observer.observe(element);
```

});
