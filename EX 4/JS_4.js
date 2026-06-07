let items = document.querySelectorAll(".item");
items.forEach(item => {
    item.onmouseover = () => {
        document.body.style.backgroundColor = item.id;
    };
});
document.querySelector(".container").onmouseleave = () => {
    document.body.style.backgroundColor = "white";
}; //Rời khỏi container sẽ trả về màu trắng cho nền 