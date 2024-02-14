document.addEventListener("DOMContentLoaded", function () {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
});

// onload = () => {

// };
