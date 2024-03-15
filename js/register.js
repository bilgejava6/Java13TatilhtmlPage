
function register(){
    console.log('çalıştı');    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    
    fetch(burcuAuthRegister,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password,
            email
          })
    }).then(data=>data.json())
    .then(data=>{
        console.log(data);
    }).catch(ex=>{
        console.log('Hata...: ', ex)
    })
}