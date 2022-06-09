$.ajax(" https://api.adviceslip.com/advice ",{
    success: function(response){
        var advice = document.createElement("p");
            advice.innerHTML = response;
            console.log(response)

        var header = document.createElement("h3");
        var title = document.createTextNode("Advice For The Day");
            header.appendChild(title);
            document.body.append(header);
            header.style.textAlign= "center";
            document.body.append(advice);
            advice.style.textAlign = "center";
    }
})