document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    if (header) {
        if (window.innerWidth >= 900) {
            header.innerHTML = 
            "<div class=\"header\"> \
                <a href=\"/index.html\" style=\"padding-top: 10px;\"><img src=\"/resources/mm-icon.png\" height=50></a> \
                <a href=\"/index.html\" style=\"padding-top: 10px;\"><img src=\"/resources/mm-logo.png\" height=35></a> \
                <h1>Documentation</h1> \
                <div class=\"vbar\"></div> \
                <a href=\"https://www.example.com/\">About Us</a> \
                <div class=\"vbar\"></div> \
                <a href=\"https://www.example.com/\">View our Project on rcos.io</a> \
                <div class=\"vbar\"></div> \
                <a href=\"https://www.example.com/\">View our Repos on GitHub</a> \
            </div>";
        } else {
            header.innerHTML = "<div class=\"header\" style=\"flex-direction: column; align-items: center;justify-content: center; gap: 0px;\"> \
            <a href=\"/index.html\" style=\"padding-top: 10px;\"><img src=\"/resources/mm-logo.png\" height=35></a> \
            <div> \
                <div class=\"header-elements\"><a href=\"https://www.example.com/\">About Us</a></div> \
                <div class=\"header-elements\"><a href=\"https://www.example.com/\">View our Project on rcos.io</a></div> \
                <div class=\"header-elements\"><a href=\"https://www.example.com/\">View our Repos on GitHub</a></div> \
                </div> \
            </div>";
        }
    }

    const nav = document.getElementById('nav');
    if (nav) {
        if (window.innerWidth < 900) {
            nav.style.visibility = "hidden";
            nav.style.height = "0px";
            navIsVisible = false;
        }
        nav.innerHTML = 
        "<div class=\"nav\"> \
            <h1>Menu</h1> \
            <a href=\"/index.html\">Overview</a> \
            <h2>U24</h2> \
            <a href=\"/pages/u24-mtgm/u24-mtgm.html\">Modeling the Game Mathematically</a> \
            <a href=\"/pages/u24-gsvis/u24-gsvis.html\">Game-State Visualizer in Scratch</a> \
            <a href=\"/pages/u24-gssv1/u24-gssv1.html\">Game-State Simulator V1 in Unity</a> \
            <h2>S25</h2> \
            <a href=\"/pages/s25-rour/s25-rour.html\">Revisiting our Underlying Representation</a> \
            <a href=\"/pages/s25-gsgip/s25-gsgip.html\">Game Sequence Generator in Python</a> \
            <a href=\"/pages/s25-gssv2/s25-gssv2.html\">Game-State Simulator V2 in Unity</a> \
            <h2>F25</h2> \
            <a href=\"/pages/f25-dqnenvgym/f25-dqnenvgym.html\">Deep Q-Learning with the Gymnasiun API</a> \
            <a href=\"/pages/f25-roura/f25-roura.html\">Revisiting our Underlying Representation (Again)</a> \
            <a href=\"/pages/f25-ssgip/f25-ssgip.html\">Successor States Generator in Python</a> \
        </div>";
    }

    const content = document.getElementById('content');
    if (content) {
        let md_path = String(content.innerHTML)
        content.innerHTML =" \
        <zero-md src=\"" + md_path + "\"> \
            <template> \
                <style>  \
                h1 { font-size: 24px; } \
                p  { font-size: 16px; } \
                </style> \
            </template> \
        </zero-md>"
        document.dispatchEvent(
            new CustomEvent('markdownContentReady', { detail: { content } })
        );
    }
    else {
        console.log("Error loading markdown content.")
    }
});

const showNavButton = document.getElementById("show-nav-button");

let navIsVisible = true;

showNavButton.addEventListener("click", function () {
    console.log("Button was pressed!");
    if (navIsVisible) {
        nav.style.visibility = "hidden";
        nav.style.height = "0px";
        navIsVisible = false;
    }
    else {
        nav.style.visibility = "visible";
        nav.style.height = "max-content";
        navIsVisible = true;
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 900) {
        nav.style.visibility = "visible";
        nav.style.height = "max-content";
        navIsVisible = true;

        header.innerHTML = 
            "<div class=\"header\"> \
                <a href=\"/index.html\" style=\"padding-top: 10px;\"><img src=\"/resources/mm-icon.png\" height=50></a> \
                <a href=\"/index.html\" style=\"padding-top: 10px;\"><img src=\"/resources/mm-logo.png\" height=35></a> \
                <h1>Documentation</h1> \
                <div class=\"vbar\"></div> \
                <a href=\"https://www.example.com/\">About Us</a> \
                <div class=\"vbar\"></div> \
                <a href=\"https://www.example.com/\">View our Project on rcos.io</a> \
                <div class=\"vbar\"></div> \
                <a href=\"https://www.example.com/\">View our Repos on GitHub</a> \
            </div>";        
    }
    else {
        if (navIsVisible) {
            nav.style.visibility = "hidden";
            nav.style.height = "0px";
            navIsVisible = false;
        }
        const header = document.getElementById('header');
        header.innerHTML = "<div class=\"header\" style=\"flex-direction: column; align-items: center;justify-content: center; gap: 0px;\"> \
            <a href=\"/index.html\" style=\"padding-top: 10px;\"><img src=\"/resources/mm-logo.png\" height=35></a> \
            <div> \
                <div class=\"header-elements\"><a href=\"https://www.example.com/\">About Us</a></div> \
                <div class=\"header-elements\"><a href=\"https://www.example.com/\">View our Project on rcos.io</a></div> \
                <div class=\"header-elements\"><a href=\"https://www.example.com/\">View our Repos on GitHub</a></div> \
                </div> \
            </div>";
    }
})

