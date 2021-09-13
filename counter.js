//  get element by id and initilize into variable
var counter=document.getElementById("numbers");
var inc=document.getElementById("inc");
var dec=document.getElementById("dec");
var reset=document.getElementById("reset")
var warns=document.getElementById("warn")

// intilize count=0
var count=0;

// count increment by 1
inc.addEventListener("click", function(){
    warns.style.display="none";
    count++;
    counter.innerText=count;
})

// count decrement by 1
dec.addEventListener("click", function(){
    count--;
    if(count<0)
    {
        count=0;
        counter.innerText=count;
        warns.style.display="block"
        // alert("counter not less than 0")
    }
    else{
        counter.innerText=count;
    }
})

// count resert to 0
reset.addEventListener("click", function(){
    count=0;
    warns.style.display="none";
    counter.innerText=count;
})
