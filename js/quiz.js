console.log("hello world")

let dash = document.getElementById("dash");
let dash2 = document.getElementById("dean4");
let result = document.getElementsByClassName("res");
let quest1 = document.getElementById("quest1");
let quest2 = document.getElementById("quest2");
let quest3 = document.getElementById("quest3");
let ans1 = "abuja";

let ans2 = "Ikeja";
let ans3 = "newyork";
let imgShow = document.getElementsByTagName("img");
let imgRand = ["./img/2.gif", "./img/3.jpeg", "./img/6.gif"];





function answers(){
    if(quest1.value === ans1.toUpperCase() && quest2.value === ans2.toUpperCase() && quest3.value === ans3.toUpperCase()){
            result[0].innerHTML = "Good one!";
            quest1.value = "";
            quest2.value = "";
            quest3.value = "";
            imgShow[0].src = imgRand[1];
            document.getElementById("done").value = "Restart"

    }else if(quest1.value === "" || quest2.value === "" || quest3.value === ""){
        result[0].innerHTML = "Please enter an answer to the questions";
        imgShow[0].src = imgRand[2];
    }
    
    else{
        result[0].innerHTML = "Go and study more!";
        imgShow[0].src = imgRand[0];
        quest1.value = "";
            quest2.value = "";
            quest3.value = "";
    }
}



function displayBack(){
    //console.log(event);
    let cl = event.clientX;
    let cl2 = event.clientY;
    let cl3 = `${cl}${cl2}`;
    dash.style.background = `#${cl3}`;
}