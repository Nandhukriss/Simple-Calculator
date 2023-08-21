function btnclick(val) {
    // console.log(val)

    document.getElementById("screen").value += val
}
function clears(){

    document.getElementById("screen").value=""
}
function result(){

    var content=document.getElementById('screen').value
    var result=eval(content)
    document.getElementById('screen').value=result
}   

function backspace(){
    var content=document.getElementById('screen').value
    var lastChar=content.slice(0,content.length-1)
    document.getElementById('screen').value=lastChar
}

// darkmode

var islight=true
document.getElementById("btn").addEventListener('click',light())

function light(){

    if(islight){


        document.getElementById("cal").style.background="linear-gradient(to right, #0c1e2b, #314d62)"
        
    }
    else  {
        
        document.getElementById("cal").style.background="linear-gradient(to right, #456f8e, #505c65)"

    }
    islight=!islight
}
