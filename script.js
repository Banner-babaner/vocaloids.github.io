window.onload = ()=>{
    
    const burger = document.getElementById("burger");
    if(navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/Android/i)){
        document.getElementById("text_logo").style.display = "none";
        var burger_opened = false;
        const bimg = document.getElementById("bimg");
        bimg.style.display = "unset";
        

        bimg.onclick = ()=>{
            if(burger_opened){
                document.getElementById("burger").style.display="none";
            }
            else{
                document.getElementById("burger").style.display="flex";
            }
            burger_opened = !(burger_opened);
        }
        
    }
}