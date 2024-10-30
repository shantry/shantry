// Function to set cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get cookie
function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if(name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

window.onload = function() {
    // Check if user has accepted the privacy policy
    if (getCookie("privacyAccepted") !== "true") {
        // Show the modal if the cookie is not set
        document.getElementById('privacy-modal').style.display = 'block';
    }

    // Redirect to privacy statement
    document.getElementById('read-privacy').onclick = function() {
        window.location.href = '/terms'; // Replace with your privacy policy URL
    };

    // Accept privacy policy and close modal
    document.getElementById('accept-privacy').onclick = function() {
        document.getElementById('privacy-modal').style.display = 'none';
        setCookie("privacyAccepted", "true", 30); // Set cookie to expire in 30 days
    };
};