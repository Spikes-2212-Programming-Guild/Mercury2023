function createCookie(theTag, theContent){
    document.cookie = theTag + "=" + theContent + "expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Lax"
}

function getCookieContent(theTag){
    return document.cookie.split(theTag+"=")[1].split("expires")[0]
}

function eraseAllCookies(){

// get all cookies
const cookies = document.cookie.split(';');

    // iterate through cookies and delete them
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        const cookieParts = cookie.split('=');
        const cookieName = cookieParts[0];

        // set cookie expiration time to a date in the past
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

}
