const Btnconfirm = document.querySelectorAll(".confirm")
Btnconfirm.forEach(button => {
    button.addEventListener("click", () => {

        //yeu cau 1 2
        // button.innerText 
        button.textContent = 'Accepted';
        button.classList.add("clicked");
        // yeu cau 3
        const box = button.parentElement;
        // box.parentElement.removeChild(box);
        box.remove();
    })
}
)


const Btnnextright = document.querySelector(".next-right")
const Btnnextleft = document.querySelector(".next-left")
const boxes = document.querySelector(".boxs")


let currentindex = 1;

let currentindexright = 1;
let currentindexleft = 1;
const movemount = 20;

Btnnextright.addEventListener('click', () => {
    Btnnextleft.classList.add("open-left");
    const newTransformValue = -movemount * currentindexright;
    boxes.style.transform = `translateX(${newTransformValue}%)`
    currentindexright++;
    currentindexleft = 0;
})

Btnnextleft.addEventListener('click', () => {
    const newTransformValue = movemount * currentindexleft;
    boxes.style.transform = `translateX(${newTransformValue}%)`
    currentindexleft++;
    currentindexright = 0;
})






