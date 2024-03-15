
function register(){
       
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    console.log('username....: ', username); 
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "email": email,
    "username": username,
    "password": password
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch(burcuAuthRegister, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result));
}
