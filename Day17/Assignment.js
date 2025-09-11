let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let signUpBtn = document.getElementById('signup');
let loginBtn = document.getElementById('login');
form1.addEventListener("submit", (e)=>{
    e.preventDefault();
    let signUpData = {
        name:form1[0].value,
        email:form1[1].value,
        password:form1[2].value
    }
    localStorage.setItem("formData", JSON.stringify(signUpData));
})
form2.addEventListener("submit", (e)=>{
    e.preventDefault();
    let saveData = localStorage.getItem("formData");
    let dataObj = JSON.parse(saveData);
    let loginData = {
        email:form2[0].value,
        password:form2[1].value
    }
    if(dataObj.email == loginData.email && dataObj.password == loginData.password){
        alert("Login Successfully");
    }
    else{
        alert("Error");
    }
})