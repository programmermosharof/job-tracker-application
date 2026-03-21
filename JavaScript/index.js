let currentTab = 'all';
const tabActive = ["btn" , "btn-primary"]
const tabInActive = ["btn", "btn-soft"]
const allContainer = document.getElementById('all-container');
const interviewContainer = document.getElementById('interview-container')
const rejectedContainer = document.getElementById('reject-container')


const switchTab = (tab) => {
    console.log(tab);
    const tabs = ["all", "interview", "rejected"];  
    for (const t of tabs) {
        const tabElement = document.getElementById("tab-" + t);
        
        if(t === tab){
            tabElement.classList.remove(...tabInActive);
            tabElement.classList.add(...tabActive)

        }else{
            tabElement.classList.add(...tabInActive)
        }
    }
const pages = [allContainer, interviewContainer, rejectedContainer]
  for(let section of pages){
        section.classList.add('hidden')
    }
  if(tab === "all"){
     allContainer.classList.remove('hidden')
    } else if (tab === "interview"){
        interviewContainer.classList.remove('hidden')
    }else{
        rejectedContainer.classList.remove('hidden')
    }
}

// Stat Update
const statTotal = document.getElementById('stat-total')
const statInterview = document.getElementById('stat-interview')
const statRejected = document.getElementById('stat-rejected')

switchTab(currentTab)