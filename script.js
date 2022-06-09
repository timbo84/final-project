var myName = document.getElementById("name");
    myName.addEventListener("mouseenter", function(){
    myName.style.fontSize = '2.4em';
})
myName.addEventListener("mouseleave", function(){
    myName.style.fontSize = 'calc(1.3rem + .6vw)';
})


var myJob = document.getElementById("job");
    myJob.addEventListener("mouseenter", function(){
    myJob.style.fontSize = '2.4em';
})
myJob.addEventListener("mouseleave", function(){
    myJob.style.fontSize = 'calc(1.3rem + .6vw)';
})
$.ajax({
    url: "https://api.adviceslip.com/advice",
  
    dataType: "json",
    success: function(result){
        console.log(result)

        var advice = document.getElementById("advice");
            advice.innerHTML = result.slip.advice;
        
         var header = document.getElementById("header");
             header.style.textAlign= "center";
    }
})
        //col1
var mycol1 = document.getElementById("col1");

mycol1.addEventListener("mouseenter", function(){
    mycol1.style.backgroundColor ="blue"; 
})
mycol1.addEventListener("mouseleave", function(){
    mycol1.style.backgroundColor ="white";
})

        //col2
var myCol2 = document.getElementById("col2");

myCol2.addEventListener("mouseenter", function(){
    myCol2.style.backgroundColor ="blue"; 
})
myCol2.addEventListener("mouseleave", function(){
    myCol2.style.backgroundColor ="white";
})

        //col3
var myCol3 = document.getElementById("col3");

myCol3.addEventListener("mouseenter", function(){
    myCol3.style.backgroundColor ="blue"; 
})
myCol3.addEventListener("mouseleave", function(){
    myCol3.style.backgroundColor ="white";
})
