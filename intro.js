function getWelcomMsg(){
    console.log("inside wellcome message");
    return "wellcome to my site";
}

function getColor(){
   var date=new Date();
    console.log(date.getMinutes())
    if(date.getMinutes()>18){
        return "green";
    }
    return "blue";
}
var wellcome = getWelcomMsg();
console.log("after wellcome message");

console.info(wellcome);

var summaryElement = document.getElementById("summary");
console.info("summaryElement", summaryElement);
var color=getColor();
summaryElement.style.color=color;

function hidePage(page){
    var el = document.getElementById(page);
    el.style.display = "none";
}

function showPage(page){
    var el = document.getElementById(page);
    el.style.display = "block";
}

function initMenu(){
    var links= document.querySelectorAll("#top-menu-bar a");
    console.info(links);
    for(var i = 0; i < links.length; i++){
        console.info("i=",i);
        console.warn(links[i]);
        links[i].onclick = clickOnMenuItem;

    }
}
function clickOnMenuItem(){
    console.warn("clicked on menu", this);
    hideAllPages();
    var pageId = this.getAttribute('data-page');
    showPage(pageId);    
}

function hideAllPages(){
    var pages = document.querySelectorAll(".page");
    for(var i = 0; i< pages.length; i++){
        pages[i].style.display = "none";
    }
}

initMenu(); 
function showSKillls() {
    var skills = ["html", "css", "js"];
    for (var i = 0; i < skills.length; i++) {
        console.warn(i+1 + '.' + skills[i]);
    }
}

showSKillls();
