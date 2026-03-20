let currentTab = 'all';
const tabActive = ["btn" , "btn-primary"]
const tabInActive = ["btn", "btn-soft"]
const switchTab = (tab) => {
    console.log(tab);
   
    const tabs = ["all", "interview", "rejected"]; 
    
    for (const t of tabs) {
        const tabElement = document.getElementById("tab-" + t);
        console.log(tabElement); 
        if(t === tab){
            tabElement.classList.remove(...tabInActive);
            tabElement.classList.add(...tabActive)

        }else{
            tabElement.classList.add(...tabInActive)
        }
    }
}