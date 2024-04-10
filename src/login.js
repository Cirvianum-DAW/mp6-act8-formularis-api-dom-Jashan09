document.getElementById("registerForm").addEventListener("submit", function(event){

    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const idNumber = document.getElementById("idNumber").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;
    const termsAccepted = document.getElementById("terms").checked;

    if(
        !firstName||
        !lastName||
        !idNumber||
        !email||
        !password||
        !birthdate||
        !gender
    ){
        alert("Cal omplir tots els camps");
    }

    if(!termsAccepted){
        alert("No has acceptat els termes i condicions");
        return;
    }

    if(password.length < 6){
        alert("La contrasenya ha de tenir almenys 6 caràcters");
    }

    const emailRegex = /^[^\s@]+@cirvianum+\.cat$/;

    if(!emailRegex.test(email)){
        alert("L'adreça de correu electrònica no és vàlida.");
    }

    const today = new Date();
    const birthdateDate = new Date(birthdate);

    console.log(today, birthdateDate.getTime());
    console.log(today.getTime() - birthdateDate.getTime());

    const age = (today - birthdateDate) / (365.25 * 24 * 3600 * 1000);
    console.log(age);

    if(age < 18){
        alert("Has de ser major d'edat per registrar-te");
    }

    const dniRegex = /^[a-zA-Z0-9]?[0-9]{7}[a-zA-Z0-9]?$/;
    if(!dniRegex.test(idNumber)){
        alert("El DNI no és vàlid")
    }

    const formData = {
        firstName,
        lastName,
        idNumber,
        email,
        password,
        birthdate,
        gender
    }

    sessionStorage.setItem("formData", JSON.stringify(formData));

    const storedFormData = sessionStorage.getItem("formData");
    console.log(storedFormData);

    window.location.href = "meteo.html";

});