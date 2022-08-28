let username = 'Max Brown';

// Set a Cookie
function setCookie(cName, cValue, expDays) {
        let date = new Date();
        //Set expiry time for cookie
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

// Consoling cookie on frontend
setCookie('username', username, 30);

//Deleting cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
