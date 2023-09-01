var c = 0
function darkness(){
    c % 2 == 0 ? 
    [
    document.querySelector(".container-left").style.color="white",
    document.querySelector(".container-right").style.color="white",
    document.body.style.backgroundColor ="#291d6d",
    document.querySelector(".images .sun").style.visibility="hidden",
    document.querySelector(".images .moon").style.visibility="visible",
    document.querySelector(".images .moon").style.transform="translate(-10rem)",
    document.querySelector(".images .moon").style.scale="translate(-10rem)",
    document.querySelector(".container-right .heading").style.backgroundColor="#d5d5d575"
    ]
    :
    [
    document.querySelector(".container-left").style.color="#291d6d",
    document.querySelector(".container-right").style.color="#291d6d",
    document.body.style.backgroundColor ="#fdffe6",
    document.querySelector(".images .sun").style.visibility="visible",
    document.querySelector(".images .moon").style.visibility="hidden",
    document.querySelector(".images .moon").style.transform="translate(10rem)",
    document.querySelector(".container-right .heading").style.backgroundColor="#291d6d30;"
    ]
    c+=1
}