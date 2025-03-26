document.addEventListener("DOMContentLoaded",function(){
    let icons=document.querySelectorAll(".icons a");

    icons.forEach(function(icon){
        icon.addEventListener("click",function(){
            icons.forEach(function(etiket){
                etiket.classList.remove("active");
            });
            icon.classList.add("active");
        })
    })
})