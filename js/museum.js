document.addEventListener('DOMContentLoaded', function() {
    var yumalogo = document.querySelector("#yumalogo");
    yumalogo.addEventListener('mouseenter', function(){
        var yumalogo_txt = document.querySelector("#yumalogo_txt");
        yumalogo_txt.setAttribute("visible",'true');
    })
    yumalogo.addEventListener('mouseleave', function(){
        var yumalogo_txt = document.querySelector("#yumalogo_txt");
        yumalogo_txt.setAttribute("visible",'false');
    })
})