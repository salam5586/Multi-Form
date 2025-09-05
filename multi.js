let step1 = document.querySelector(".step-1")
let step2 = document.querySelector(".step-2")
let step3 = document.querySelector(".step-3")
let step4 = document.querySelector(".step-4")

let info = document.querySelector(".info")
let profile = document.querySelector(".profile")
let preference = document.querySelector(".preference")
let review = document.querySelector(".Review")

let Next = document.querySelector(".Next")
let Back = document.querySelector(".Back")

let email =document.querySelectorAll("#email")
let error = document.querySelector(".error")
let steps = [info, profile, preference, review]
let indicators = [step1, step2, step3, step4]
let current = 0
//seve input
document.querySelectorAll("input").forEach(inp=>{
    const seved = localStorage.getItem(inp.id);
    if(seved!==null)inp.value = seved;
    inp.addEventListener("input",()=>localStorage.getItem(inp.id,inp.value));       
});
// fill review 
function fillReview(){
    document.getElementById("review-email").textContent = document.getElementById("email1").value
    document.getElementById("review-fullname").textContent = document.getElementById("fullname").value
    document.getElementById("review-contact").textContent = document.getElementById("contact1").value
    document.getElementById("review-city").textContent = document.getElementById("city1").value
}
function ShowStep(index){
    steps.forEach((s,i)=>{
    s.style.display = (i === index)? "grid":"none"
    })

indicators.forEach((dot,i)=>{
    dot.classList.remove("active", "completed")
    if(i < index){
        dot.classList.add("completed")
    }else if(i === index){
        dot.classList.add("active")
    }
     Next.textContent = (index === steps.length-1) ? "Submit" : "Next"
})
}
Next.addEventListener("click", ()=>{
    if( email == "" || current < steps.length - 1){
        current++
        ShowStep(current)
        if(current === steps.length-1) fillReview();
    }else {
        alert("Form submitted ✅")
        localStorage.clear()
      }
})
Back.addEventListener("click",()=>{
    if(current > 0){
        current--
        ShowStep(current)
    }
})

ShowStep(current)