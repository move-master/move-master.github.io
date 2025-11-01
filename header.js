document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    if (header) {
        header.innerHTML = 
        "<div class=\"header\"> \
            <img src=\"resources/mm-icon.png\" height=50> \
            <img src=\"resources/mm-logo.png\" height=35> \
            <h1>Documentation</h1> \
            <div class=\"vbar\"></div> \
            <a href=\"https://www.example.com/\">About Us</a> \
            <div class=\"vbar\"></div> \
            <a href=\"https://www.example.com/\">View our Project on rcos.io</a> \
            <div class=\"vbar\"></div> \
            <a href=\"https://www.example.com/\">View our Repos on GitHub</a> \
        </div>";
    }

    const nav = document.getElementById('nav');
    if (nav) {
        nav.innerHTML = 
        "<div class=\"nav\"> \
            <h1>Menu</h1> \
            <a href=\"https://www.example.com/\">About Us</a> \
            <a href=\"https://www.example.com/\">View our Project on rcos.io</a> \
            <a href=\"https://www.example.com/\">View our Repos on GitHub</a> \
            <a href=\"https://www.example.com/\">View our Repos on GitHub</a> \
        </div>";
    }

    const content = document.getElementById('content');
    if (content) {
        content.innerHTML =" \
        <zero-md src=\"home.md\"> \
            <template> \
                <style>  \
                h1 { font-size: 24px; } \
                p  { font-size: 16px; } \
                </style> \
            </template> \
        </zero-md>"
    }
    else {
        console.log("NOEP!")
    }
});