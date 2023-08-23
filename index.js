const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("listContainer")

function addTask(){
    if(inputBox.value === ''){
        // showToast(errorMsg)
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        showToast(successMsg)
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(
        e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData()
        }   
})

let toastBox = document.getElementById("toastBox")

let successMsg = '<i class="fa-solid fa-circle-check"></i>Note added successfully';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>You must type something!';


function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast")
    toast.innerHTML = msg
    toastBox.appendChild(toast)

    if(msg.includes('type')){
        toast.classList.add('error')
    }
    
    setTimeout(()=>{
        toast.remove()
    },3000)
}


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()
