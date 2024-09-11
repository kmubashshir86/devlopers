document.addEventListener("DOMContentLoaded", function() {
    const modeToggle = document.querySelector('.dark-mode-toggle');
    const modeIcon = document.getElementById('mode-icon');
    let isDarkMode = false;

    modeToggle.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        document.body.classList.toggle('dark-mode', isDarkMode);

        if (isDarkMode) {
            modeIcon.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimg%2F1670169.png&f=1&nofb=1&ipt=253df1769145b8e5b2ae0c13251d537ee692d8481564bca6b2f9f2c7b7bac7ef&ipo=images";
        } else {
            modeIcon.src = "https://static.vecteezy.com/system/resources/previews/018/931/088/original/cartoon-sun-icon-png.png";
        }
    });
});
