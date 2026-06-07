let open = document.querySelector(".open");
let close = document.querySelector(".close");
let overlay = document.querySelector(".overlay");
open.onclick = function() {
    overlay.style.display = "block";
};
close.onclick = function() {
    overlay.style.display = "none";
    };
    overlay.onclick = function(e) {
    if (e.target === overlay) {
        overlay.style.display = "none";
    }
}