let scan=document.getElementById("scan")

let preview=document.getElementById("preview")

let result=document.getElementById("result")

let mark=document.getElementById("mark")

let bar=document.getElementById("bar")

let status=document.getElementById("status")

scan.addEventListener("change",()=>{

let file=scan.files[0]

if(file){

preview.src=
URL.createObjectURL(file)

result.innerText=""

mark.style.display="none"

bar.style.width="0%"

status.innerText=
"Scan uploaded"

}

})

function analyze(){

if(preview.src==""){

alert(
"Please upload brain scan"
)

return

}

status.innerText=
"Analyzing..."

let width=0

let interval=setInterval(()=>{

width+=5

bar.style.width=
width+"%"

if(width>=100){

clearInterval(interval)

// random mark position
let imgWidth=preview.clientWidth
let imgHeight=preview.clientHeight

let x=Math.random()*(imgWidth-120)

let y=Math.random()*(imgHeight-120)

mark.style.left=x+"px"

mark.style.top=y+"px"

mark.style.display=
"block"

status.innerText=
"Completed"

result.innerText=
"Abnormal Region Detected"

}

},100)

}