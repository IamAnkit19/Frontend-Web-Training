let form = document.querySelector('form');
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    // for(let i = 0; i<form.length-1; i++){
    //     console.log(form[i].value);
    // }
    let data = {
        name:form[0].value,
        fname:form[1].value,
        age:form[2].value,
    }
    console.log(data);
    localStorage.setItem("formData", JSON.stringify(data));
})

let btn = document.getElementById('delete-btn');
btn.addEventListener("click", (e)=>{
    localStorage.removeItem("formData");
})