console.info("my first js");

var name="Raluca";
var employed = true;

console.warn("employed");
console.warn(employed);

console.info('Name');
console.info(name);

name="Raluca";

console.info('Name');
console.info(name);

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

// first example
function hideHomePage() {
    var el = document.getElementById('home-page');
    el.style.display = 'none';
}

function showSkillPage(){
    document.getElementById("skills-page").style.display ="block";
}

function clickOnSkills(){
    hideHomePage();
    showSkillPage();
}
// first example - end





function hidePage(page){
    var el = document.getElementById(page);
    el.style.display = "none";
}

function showPage(page){
    var el = document.getElementById(page);
    el.style.display = "block";
}

function clickOnSkills(){
    hidePage("home-page");
    hidePage("languages-page");
    hidePage("about-page");
    showPage("skills-page");
}

function clickOnHome(){
    hidePage("skills-page");
    hidePage("languages-page");
    hidePage("about-page");
    showPage("home-page");
}

