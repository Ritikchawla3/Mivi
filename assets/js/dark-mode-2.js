let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.getElementById("switch");

const enableDarkMode = () => {
    // document.body.classList.add("darkmode");
    var body = document.getElementById("body").style.background = "black";

    localStorage.setItem("darkMode" , "enabled");
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");

    localStorage.setItem("darkMode" , null);
};

darkModeToggle.addEventListener('click', () => {
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    }else{
        disableDarkMode();
        console.log(darkMode);
    }
});
