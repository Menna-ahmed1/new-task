var allproducts = document.querySelectorAll(".container div")
var content = document.querySelector("#content")
var contentprice = document.querySelector("#content-price")
var showprice = document.getElementById("show-price")
var cancel = document.getElementById("cancel")
var totalprice = 0


allproducts.forEach(function(item){  //higher order function
  item.onclick = function(){
    totalprice += +item.getAttribute("price")
    content.innerHTML += item.querySelector("h2").textContent + "<br/>" 
    if(content.innerHTML != ""){
        content.style.display = "block"
    }
    if(content.innerHTML != ""){
        showprice.style.display = "block"
        cancel.style.display = "block"
    }  
  }
})


showprice.addEventListener('click' , () =>{
    if(totalprice > 5000){
        alert("Congratulations, you got a 500 EGP discount")
        totalprice -= 500
    }
    contentprice.innerHTML = "السعر الإجمالي: " + totalprice + " جنيه"
    contentprice.style.display = "block"
})


cancel.addEventListener('click' , () =>{
    content.innerHTML = ""
    showprice.style.display = "none"
    cancel.style.display = "none"
    content.style.display = "none"
    contentprice.style.display = "none" 
    totalprice = 0 
})



var inputsearch = document.getElementById("input")
var productsdiv = document.querySelectorAll(".container div")
var notfound = document.getElementById("notfound")

inputsearch.addEventListener('input' ,() =>{
    var inputvalue = inputsearch.value.toLowerCase()
    
    var anyvisible = false

    productsdiv.forEach((item) =>{
        if(item.textContent.toLowerCase().includes(inputvalue)){
            item.style.display = "block"
            anyvisible = true
        }else{
            item.style.display = "none"
        }
    })
    
   notfound.style.display = anyvisible ? "none" : "block"
})

