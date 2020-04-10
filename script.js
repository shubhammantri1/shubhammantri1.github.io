const text = document.getElementById("Hello_Text");
const contactTab = document.getElementById("Contact_Me")
const navButton = document.getElementById("navButton");

const contactBtn = document.getElementById("Contact_Btn");
const homeBtn = document.getElementById("Home_Btn");
const aboutBtn = document.getElementById("About_Btn");
const skillsBtn = document.getElementById("Skills_Btn");
const projectsBtn = document.getElementById("Projects_Btn");

const navBarShow = document.getElementById("navbarNav");
const imgSize1 = document.getElementById("img_size1");
const imgSize2 = document.getElementById("img_size2");
const imgSize3 = document.getElementById("img_size3");
const imgSize4 = document.getElementById("img_size4");
const rmShadow = document.getElementById("rmShadow");

var indi = true;
var activeContact = true;
var lastActiveTab = 0;
const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);



function changeText(){
    if(indi){
        text.innerHTML = "Hello,"
        indi = false;
    }
    else{
        text.innerHTML = "नमस्ते,"
        indi = true;    
    }
}

setInterval("changeText()" ,3000);


contactBtn.addEventListener('click', function(){
    if(activeContact){
        activeContact = false;
        if(vw<990){
            navBarShow.classList.remove("show");
            rmShadow.classList.remove("shadow");
        }
        let calc;
        if(vw>990){
            calc = (vw/2) - 220;
        }
        else{
            calc = (vw/2) - 150;
        }
        imgSize1.style.width = "8vh"
        imgSize2.style.width = "8vh"
        imgSize3.style.width = "8vh"
        imgSize4.style.width = "8vh"
        if(vw>300 && vw<=500){
            contactTab.style.width = "70%";
        }
        else if(vw>500 && vw<990){
            contactTab.style.width = "50%";
        }
        else{
            contactTab.style.width = "280px"
        }
        if(vw>650){
            contactTab.style.left = `${calc}px`;
        }
        else{
            contactTab.style.float = "left";
        }
        contactTab.classList.add("Add_Anim");
    }
    else if(!activeContact && vw > 990){
        activeContact = true;
        imgSize1.style.width = "0vh"
        imgSize2.style.width = "0vh"
        imgSize3.style.width = "0vh"
        imgSize4.style.width = "0vh"
        contactTab.style.width = "0px"
        contactTab.classList.remove("Add_Anim");
    }
});

navButton.addEventListener('click', function(e){
    if(!activeContact && vw < 990){
        activeContact = true;
        imgSize1.style.width = "0vh"
        imgSize2.style.width = "0vh"
        imgSize3.style.width = "0vh"
        imgSize4.style.width = "0vh"
        contactTab.style.width = "0px"
        contactTab.classList.remove("Add_Anim");
    }
});

function unactiveBtn(){
    if(lastActiveTab == 0){
        homeBtn.classList.remove("active");
    }
    else if(lastActiveTab == 1){
        aboutBtn.classList.remove("active");    
    }
    else if(lastActiveTab == 2){
        skillsBtn.classList.remove("active");    
    }
    else if(lastActiveTab == 3){
        projectsBtn.classList.remove("active");    
    }
}

homeBtn.addEventListener('click', function(e){
    if(!activeContact){
        activeContact = true;
        imgSize1.style.width = "0vh"
        imgSize2.style.width = "0vh"
        imgSize3.style.width = "0vh"
        imgSize4.style.width = "0vh"
        contactTab.style.width = "0px"
        contactTab.classList.remove("Add_Anim");
    }
    unactiveBtn();
    homeBtn.classList.add("active");
    lastActiveTab = 0;    
});

aboutBtn.addEventListener('click', function(e){    
    if(!activeContact){
        activeContact = true;
        imgSize1.style.width = "0vh"
        imgSize2.style.width = "0vh"
        imgSize3.style.width = "0vh"
        imgSize4.style.width = "0vh"
        contactTab.style.width = "0px"
        contactTab.classList.remove("Add_Anim");
    }
    unactiveBtn();
    aboutBtn.classList.add("active");
    lastActiveTab = 1;
});

skillsBtn.addEventListener('click', function(e){    
    if(!activeContact){
        activeContact = true;
        imgSize1.style.width = "0vh"
        imgSize2.style.width = "0vh"
        imgSize3.style.width = "0vh"
        imgSize4.style.width = "0vh"
        contactTab.style.width = "0px"
        contactTab.classList.remove("Add_Anim");
    }
    unactiveBtn();
    skillsBtn.classList.add("active");
    lastActiveTab = 2;
});

projectsBtn.addEventListener('click', function(e){    
    if(!activeContact){
        activeContact = true;
        imgSize1.style.width = "0vh"
        imgSize2.style.width = "0vh"
        imgSize3.style.width = "0vh"
        imgSize4.style.width = "0vh"
        contactTab.style.width = "0px"
        contactTab.classList.remove("Add_Anim");
    }
    unactiveBtn();
    projectsBtn.classList.add("active");
    lastActiveTab = 3;
});


