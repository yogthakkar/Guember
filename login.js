// Create login Function here.

function login()
{

    user_name = document.getElementById("playername").value;

    localStorage.setItem("User_Name", user_name);

    window.location = "gamepage.html";
}