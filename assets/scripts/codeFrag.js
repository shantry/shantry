
/*
this JavaScript file is used to load universal elements to pages where the script is called and run.


To add a code fragment to your page, use this format (with codeFragment, and loadCodeFragment changed to better identify the fragment):
<div id="codeFragment"><script src="../scripts/codeFrag.js"></script><script>loadCodeFragment();</script></div>



*/


function loadAudioVideo() { //<div id="audioVideo"><script src="../assets/scripts/codeFrag.js"></script><script>loadAudioVideo();</script></div>
    const homeButtonHTML = `
        <audio id="audio" loop preload="auto">
                <source src="../assets/audio/" type="audio/mp3">
            </audio>

            <video id="video" class="fullscreen bg-video" style="" loop playsinline autoplay preload="auto">
                <source src="../assets/images/earter.mp4" type="video/mp4">
            </video>
        `;
    document.getElementById('audioVideo').innerHTML = homeButtonHTML;
}

function loadAudioVideotemplate() { //<div id="audioVideo"><script src="../assets/scripts/codeFrag.js"></script><script>loadAudioVideotemplate();</script></div>
    const homeButtonHTML = `
        <audio id="audio" loop preload="auto">
                <source src="../assets/audio/Scents.mp3" type="audio/mp3">
            </audio>

            <video id="video" class="fullscreen bg-video" style="filter: blur(10px);" loop playsinline autoplay preload="auto">
                <source src="../assets/images/bg1.mp4" type="video/mp4">
            </video>
        `;
    document.getElementById('audioVideo').innerHTML = homeButtonHTML;
}

  