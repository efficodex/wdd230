const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#directory");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
    showImg();
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
    hideImg();
    showName();
}
function hideImg() {
    var directoryImg = document.querySelectorAll(".directoryImg");
    directoryImg.forEach(i => {
        i.style.display = "none";
    })
}
function showImg() {
    var directoryImg = document.querySelectorAll(".directoryImg");
    directoryImg.forEach(i => {
        i.style.display = "block";
        i.style.margin = "0 auto";
    })
}
function showName() {
    var nameCompany = document.querySelectorAll(".nameCompany");
    nameCompany.forEach(i => {
        i.style.display = "block"
    })
}



