document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    if (header) {
        header.innerHTML = 
        "<div class=\"header\"> \
            <img src=\"/resources/mm-icon.png\" height=50> \
            <img src=\"/resources/mm-logo.png\" height=35> \
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
            <a href=\"/index.html\">Overview</a> \
            <h2>U24</h2> \
            <a href=\"/pages/u24-mtgm/u24-mtgm.html\">Modeling the Game Mathematically</a> \
            <a href=\"https://www.example.com/\">Game-State Visualizer in Scratch</a> \
            <a href=\"https://www.example.com/\">Game-State Simulator V1 in Unity</a> \
            <h2>S25</h2> \
            <a href=\"https://www.example.com/\">Revisiting our Underlying Representation</a> \
            <a href=\"https://www.example.com/\">Game Sequence Generator in Python</a> \
            <a href=\"https://www.example.com/\">Game-State Simulator V2 in Unity</a> \
            <h2>F25</h2> \
            <a href=\"https://www.example.com/\">Designing a Deep Q-Learning Environment with the Gymnasiun API</a> \
            <a href=\"https://www.example.com/\">Revisiting our Underlying Representation (Again)</a> \
            <a href=\"https://www.example.com/\">Successor States Generator in Python</a> \
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