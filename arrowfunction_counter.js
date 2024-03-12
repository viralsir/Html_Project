let count=0;


document.addEventListener("DOMContentLoaded",()=>{

  document.getElementById("clickbtn").onclick=()=>
  {
    document.getElementById("output").innerHTML=count;
    count=count+1;
  };

})

