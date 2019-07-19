function bold() {
    event.preventDefault();
    var ban = document.getElementById("txt");
    if (ban.style.fontWeight != "bold") {

        ban.style.fontWeight = 'bold';
    } else {
        ban.style.fontWeight = 'normal';
    }
}
function ital() {
    event.preventDefault();
    var ban = document.getElementById("txt");
    if (ban.style.fontStyle != "italic") {

        ban.style.fontStyle = 'italic';
    } else {
        ban.style.fontStyle = 'normal';
    }
}
function und() {
    event.preventDefault();
    var ban = document.getElementById("txt");
    if (ban.style.textDecoration != "underline") {

        ban.style.textDecoration = 'underline';
    } else {
        ban.style.textDecoration= 'none';
    }
}

function siz10(jf)
{
    if(jf=="20px")
document.getElementById('txt').style.fontSize='20px'
else if(jf=="40px") 
{
    document.getElementById('txt').style.fontSize='40px'
}
else 
{
    document.getElementById('txt').style.fontSize='60px' 
}
}

function fonttk(jf)
{
document.getElementById('txt').style.fontFamily=jf;
}