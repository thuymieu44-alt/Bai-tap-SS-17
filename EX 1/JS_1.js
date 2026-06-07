let text = document.getElementById("text");
let hide = document.querySelector(".hide");
let show = document.querySelector(".show");
hide.onclick = function() {
    text.style.display = "none";
}
show.onclick = function() {
    text.style.display = "block";
}