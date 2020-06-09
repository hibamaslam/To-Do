function validate(login){
    let UserID = document.getElementById('UserID');
    let pwd=document.getElementById('Password');
    console.log(UserID.value,pwd.value);

    if ((UserID.value=='admin') && (pwd.value=='12345'))
    {
        login();
    }
    else
    {
        alert("User Credentials not valid!!");
    }
}

function login()
{
    window.location.assign("./main.html");
}