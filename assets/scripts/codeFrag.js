
/*
this JavaScript file is used to load universal elements to pages where the script is called and run.


To add a code fragment to your page, use this format (with codeFragment, and loadCodeFragment changed to better identify the fragment):
<div id="codeFragment"><script src="../scripts/codeFrag.js"></script><script>loadCodeFragment();</script></div>



*/


function loadAudioVideo() { //<div id="audioVideo"><script src="../assets/scripts/codeFrag.js"></script><script>loadAudioVideo();</script></div>
    const homeButtonHTML = `
        <audio id="audio" muted loop preload="auto">
                    <source src="../assets/audio/audio.mp3" type="audio/mp3">
                </audio>

                <video id="video" class="fullscreen bg-video"  loop playsinline autoplay preload="auto">
                    <source src="../assets/images/tyler.mp4" type="video/mp4">
                </video>
        `;
    document.getElementById('audioVideo').innerHTML = homeButtonHTML;
}

  