const Btnconfirm = document.querySelectorAll(".confirm")
Btnconfirm.forEach(button =>{
    button.addEventListener("click",()=>
    {
        // button.innerText
        button.textContent = 'Accepted'; 
        button.classList.add("clicked");
        const box = button.parentElement;
        // box.parentElement.removeChild(box);
        box.remove();
    })
}
)



