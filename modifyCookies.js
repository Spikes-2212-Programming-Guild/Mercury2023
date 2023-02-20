function createCookie(theTag, theContent){
    document.cookie = theTag + "=" + theContent + "expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Lax"
}

function getCookieContent(theTag){
    document.cookie.split(theTag+"=")[1].split("expires")[0]
}
