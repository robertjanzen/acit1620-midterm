var menu = "closed";
var left = 0;
var topVal = 0;
var bgHeight = 300;
var currentDiv = -1;
var totalDiv = -1

// ----------- Listeners -----------
document.getElementById("changeBg").addEventListener("keyup",function(ev){
    if(ev.keyCode == 13){
        changeBg();
    }
});

document.getElementById("menuButton").addEventListener("click", function(){
    expandMenu();
});

document.getElementById("changeTitle").addEventListener("keyup", function(ev){
    var ins = document.getElementById("changeTitle").value;
    changeTitle(ins);
});

document.getElementById("changeDesc").addEventListener("keyup", function(ev){
    var ins = document.getElementById("changeDesc").value;
    changeDescription(ins);
});

document.getElementById("changeColor").addEventListener("change", function(){
    var newColor = document.getElementById("changeColor").value;
    changeColor(newColor)
});

document.addEventListener("keydown", function(ev){
    moveBg(ev.keyCode);
});

document.getElementById("plus").addEventListener("click", function(){
    createStory();
});

document.getElementById("background").addEventListener("click", function(){
    currentDiv = -1;
});


// ----------- Functions -----------
function createStory() {
    totalDiv += 1;
    currentDiv = totalDiv;
    url = document.getElementById("background").style.backgroundImage;
    
    // New child divs
    var ndiv = document.createElement("div");
    var ntitle = document.createElement("div");
    var ndesc = document.createElement("div");
    
    // CSS from top div
    var titleCSS = document.getElementById("title").style.cssText;
    var descCSS = document.getElementById("descripiton").style.cssText;
    
    ntitle.id = "title"+currentDiv;
    ntitle.style.cssText = titleCSS;
    ntitle.className = "title";
    ntitle.innerHTML = document.getElementById("title").innerHTML;
    ntitle.color = document.getElementById("title").color;
    ntitle.borderColor = document.getElementById("title").borderColor;
    
    ndesc.id = "desc"+currentDiv;
    ndesc.style.cssText = descCSS;
    ndesc.className = "desc";
    ndesc.innerHTML = document.getElementById("descripiton").innerHTML;
    ndesc.color = document.getElementById("title").color;
    ndesc.borderColor = document.getElementById("title").borderColor;
    
    ndiv.className = "story col-xs-12 col-sm-6 col-md-4 col-lg-3";
    ndiv.id = currentDiv;
    ndiv.addEventListener("click", function(){
        currentDiv = ndiv.id;
    });
    ndiv.style.backgroundImage = url;
    
    ndiv.appendChild(ntitle);
    ndiv.appendChild(ndesc);
    document.getElementById("display").appendChild(ndiv);
}

function expandMenu() {
    if (menu == "closed"){
        document.getElementById("controls").style.bottom = "-50px";
        menu = "open";
    } else if (menu == "open") {
        document.getElementById("controls").style.bottom = "-170px";
        menu = "closed";
    }
}

function changeColor(color) {
    if (currentDiv == -1) {
        document.getElementById("title").style.color = color;
        document.getElementById("descripiton").style.color = color;
        document.getElementById("title").style.borderColor = color;  
    } else {
        document.getElementById("title"+currentDiv).style.color = color;
        document.getElementById("desc"+currentDiv).style.color = color;
        document.getElementById("title"+currentDiv).style.borderColor = color; 
    }

}

function changeDescription(text) {
    if (currentDiv == -1) {
        document.getElementById("descripiton").innerHTML = text;
    } else {
        document.getElementById("desc"+currentDiv).innerHTML = text;
    }
}

function changeTitle(text) {
    if (currentDiv == -1) {
        document.getElementById("title").innerHTML = text;
    } else {
        document.getElementById("title"+currentDiv).innerHTML = text;
    }
}

function changeBg() {
    if (currentDiv == -1) {
        var url = document.getElementById("changeBg").value;
        if(document.getElementById("changeBg").value == "horse")
        {
            document.getElementById("background").style.backgroundImage = 'url(img/bg1.jpg)';
        } else if(document.getElementById("changeBg").value == "night")
        {
            document.getElementById("background").style.backgroundImage = 'url(img/bg2.jpg)';
        } else if(document.getElementById("changeBg").value == "mountain")
        {
            document.getElementById("background").style.backgroundImage = 'url(img/bg3.jpg)';
        } else if(document.getElementById("changeBg").value.indexOf("epic")!=-1)
        {
            document.getElementById("background").style.backgroundImage = 'url(img/bg4.jpg)';
        } else 
        {
            document.getElementById("background").style.backgroundImage = 'url('+url+')'; 
        }
    } else {
        var url = document.getElementById("changeBg").value;
        if(document.getElementById("changeBg").value == "horse")
        {
            document.getElementById(currentDiv).style.backgroundImage = 'url(img/bg1.jpg)';
        } else if(document.getElementById("changeBg").value == "night")
        {
            document.getElementById(currentDiv).style.backgroundImage = 'url(img/bg2.jpg)';
        } else if(document.getElementById("changeBg").value == "mountain")
        {
            document.getElementById(currentDiv).style.backgroundImage = 'url(img/bg3.jpg)';
        } else if(document.getElementById("changeBg").value.indexOf("epic")!=-1)
        {
            document.getElementById(currentDiv).style.backgroundImage = 'url(img/bg4.jpg)';
        } else 
        {
            document.getElementById(currentDiv).style.backgroundImage = 'url('+url+')'; 
        }
    }
}

function moveBg(code) {
    if (currentDiv == -1){
        // Left Arrow 37
        if (code==37){
            left -= 10;
            document.getElementById("background").style.backgroundPositionX = left+"px";
        }
        // Up Arrow 38
        if (code==38){
            topVal -= 10;
            document.getElementById("background").style.backgroundPositionY = topVal+"px";
        }
        // Right Arrow 39
        if (code==39){
            left += 10;
            document.getElementById("background").style.backgroundPositionX = left+"px";
        }
        // Down Arrow 40
        if (code==40){
            topVal += 10;
            document.getElementById("background").style.backgroundPositionY = topVal+"px";
        }
        // +
        if (code==187){
            bgHeight += 10;
            document.getElementById("background").style.height = bgHeight+"px";
        }
        // -
        if (code==189){
            bgHeight -= 10;
            document.getElementById("background").style.height = bgHeight+"px";
        }
    } else {
        if (code==37){
            left -= 10;
            document.getElementById(currentDiv).style.backgroundPositionX = left+"px";
        }
        // Up Arrow 38
        if (code==38){
            topVal -= 10;
            document.getElementById(currentDiv).style.backgroundPositionY = topVal+"px";
        }
        // Right Arrow 39
        if (code==39){
            left += 10;
            document.getElementById(currentDiv).style.backgroundPositionX = left+"px";
        }
        // Down Arrow 40
        if (code==40){
            topVal += 10;
            document.getElementById(currentDiv).style.backgroundPositionY = topVal+"px";
        }
        // +
        if (code==187){
            bgHeight += 10;
            document.getElementById(currentDiv).style.height = bgHeight+"px";
        }
        // -
        if (code==189){
            bgHeight -= 10;
            document.getElementById(currentDiv).style.height = bgHeight+"px";
        }
        
    }
}
