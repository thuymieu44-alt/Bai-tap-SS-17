const input = document.getElementById("input");
const numbers = document.querySelectorAll(".item-number");
const math = document.querySelectorAll(".item-math");
const equal = document.querySelector(".item-equal");
const clear = document.querySelector(".item-clear");

let current = "";      // số đang nhập
let previous = "";     // số trước đó
let operator = "";     // phép toán

// Nhấn số
numbers.forEach(btn => {
    btn.addEventListener("click", () => {
        current += btn.textContent;
        input.value = current;
    });
});

// Nhấn phép toán
math.forEach(op => {
    op.addEventListener("click", () => {
        if (current === "") return; // không cho bấm toán tử khi chưa nhập số

        if (previous !== "") {
            // Nếu đã có phép toán trước → tính luôn
            current = calculate(previous, current, operator).toString();
            input.value = current;
        }

        operator = op.textContent;
        previous = current;
        current = "";
    });
});

// Nhấn "="
equal.addEventListener("click", () => {
    if (previous === "" || current === "") return;

    current = calculate(previous, current, operator).toString();
    input.value = current;

    previous = "";
    operator = "";
});

// Hàm tính toán
function calculate(a, b, op) {
    a = Number(a);
    b = Number(b);

    switch (op) {
        case "+": return a + b;
        case "−": return a - b;
        case "×": return a * b;
        case "÷": return b === 0 ? "Không thể chia cho số 0" : a / b;
    }
}

// Nhấn "C"
clear.addEventListener("click", () => {
    current = "";
    previous = "";
    operator = "";
    input.value = "";
});
