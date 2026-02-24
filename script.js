let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-btn';

const total = document.getElementById('total-count');
console.log(total.innerText);
const interviewCount = document.getElementById("interview-count");
console.log(interviewCount.innerText);
const rejectedCount = document.getElementById("rejected-count");
console.log(rejectedCount.innerText);
const totalJobsElement = document.getElementById("total-jobs");
console.log(totalJobsElement.innerText)

const allBtn = document.getElementById("btn-all");
console.log(allBtn.innerText)
const interviewBtn = document.getElementById("btn-interview");
console.log(interviewBtn.innerText)
const rejectedBtn = document.getElementById("btn-rejected");
console.log(rejectedBtn.innerText)

const allCards = document.getElementById("all-cards");
console.log(allBtn.innerText)
const filteredSection = document.getElementById("filtered-section");

const mainContainer = document.getElementById("main");
const noJobsElement = document.getElementById("no-jobs");


function calculateCount() {

    const totalJobs = allCards.children.length;
    const processedJobs = interviewList.length + rejectedList.length;

    total.innerText = totalJobs;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    if (totalJobs === 0) {
        totalJobsElement.innerText = "0 jobs";
        return;
    }

    totalJobsElement.innerText =
        processedJobs > 0
        ? `${processedJobs} of ${totalJobs} jobs`
        : `${totalJobs} jobs`;
}
calculateCount()

function toggleStyles(id) {
    allBtn.classList.add('bg-gray-200', 'text-gray-700');
    interviewBtn.classList.add('bg-gray-200', 'text-gray-700');
    rejectedBtn.classList.add('bg-gray-200', 'text-gray-700');

    allBtn.classList.remove('bg-blue-400', 'text-white');
    interviewBtn.classList.remove('bg-blue-400', 'text-white');
    rejectedBtn.classList.remove('bg-blue-400', 'text-white');

    console.log(id);
    const selected = document.getElementById(id)

    currentStatus = id 
    // console.log(currentStatus);
    console.log(selected);

    selected.classList.remove('bg-gray-200', 'text-gray-700');
    selected.classList.add('bg-blue-400', 'text-white');


    if(id == 'btn-interview') {
        
        if(interviewList.length == 0){
            noJobsElement.classList.remove('hidden')
        }else{
            noJobsElement.classList.add('hidden')
        }
            allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderInterview()
        
        
    }else if (id == 'btn-all') {

        if(allCards.children.length == 0){
            noJobsElement.classList.remove('hidden')
        }else{
            noJobsElement.classList.add('hidden')
        }

        allCards.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }else if (id == 'btn-rejected') {

        if(rejectedList.length == 0){
            noJobsElement.classList.remove('hidden')
        }else{
            noJobsElement.classList.add('hidden')
        }

        allCards.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        renderRejected()
    }
}

mainContainer.addEventListener('click', function(event) {
   console.log(event.target);
   if(event.target.classList.contains('interview-btn')) {
    const parenNode = event.target.parentNode.parentNode;
    console.log(parenNode);

    const companyName = parenNode.querySelector('.companyName').innerText
    console.log(companyName);
    const jobName =  parenNode.querySelector('.jobName').innerText
    const salary =  parenNode.querySelector('.salary').innerText
    const apply =  parenNode.querySelector('.apply').innerText
    const description = parenNode.querySelector('.description').innerText

    parenNode.querySelector('.apply').innerText = 'Interview'

    parenNode.classList.remove('bg-red-200');
    parenNode.classList.add('bg-green-200');

    const applyEl = parenNode.querySelector('.apply');
    applyEl.classList.remove('bg-red-700');
    applyEl.classList.add('bg-green-700');
    applyEl.classList.add('border-0');

    const cardInfo = {
        companyName,
        jobName, 
        salary,
        apply: 'Interview',
        description
    }




    const jobExist = interviewList.find(item => item.companyName == cardInfo.companyName)

    if(!jobExist) {
        interviewList.push(cardInfo)
    }

    rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName)

    if(currentStatus == 'btn-rejected') {
        renderInterview();
    }
    calculateCount()

   }else if (event.target.classList.contains('rejected-btn')) {

    const parenNode = event.target.parentNode.parentNode;
    console.log(parenNode);


    const companyName = parenNode.querySelector('.companyName').innerText
    console.log(companyName);
    const jobName =  parenNode.querySelector('.jobName').innerText
    const salary =  parenNode.querySelector('.salary').innerText
    const apply =  parenNode.querySelector('.apply').innerText
    const description = parenNode.querySelector('.description').innerText

    parenNode.querySelector('.apply').innerText = 'Rejected'

    parenNode.classList.remove('bg-green-200');
    parenNode.classList.add('bg-red-200');

    const applyEl = parenNode.querySelector('.apply');
    applyEl.classList.remove('bg-green-700');
    applyEl.classList.add('bg-red-700');
    applyEl.classList.add('border-0');

    const cardInfo = {
        companyName,
        jobName, 
        salary,
        apply: 'Rejected',
        description
    }

    const jobExist = rejectedList.find(item => item.companyName == cardInfo.companyName)

    if(!jobExist) {
        rejectedList.push(cardInfo)
    }

    interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

    if(currentStatus == 'btn-interview') {
        renderRejected();
    }
    calculateCount()
   }


    if(event.target.closest('.btn-delete')) {
        const  card = event.target.closest('.card');
        const companyName = card.querySelector('.companyName').innerText;

        interviewList = interviewList.filter(j => j.companyName !== companyName);
        rejectedList = rejectedList.filter(j => j.companyName !== companyName);

            const allCardNode = [...allCards.children].find(c => c.querySelector('.companyName').innerText === companyName);
    if (allCardNode) allCardNode.remove();

    if(currentStatus === 'btn-interview') renderInterview();
    if(currentStatus === 'btn-rejected') renderRejected();

    calculateCount();
    }
})

function  renderInterview() {


    filteredSection.innerHTML = ''

    for(let interview of interviewList) {
        console.log(interview)

        let div = document.createElement('div');
        div.className = `card bg-green-200 p-4 rounded-lg mb-4 space-y-3`
        div.innerHTML =`
        <div class="flex justify-between items-center">
                    <h2 class="companyName text-lg font-bold">${interview.companyName}</h2>
                    <button class="btn-delete btn btn-circle">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
                <p class="jobName text-gray-700 font-semibold">${interview.jobName}</p>
                <span class="salary text-gray-700">${interview.salary}</span>
                <button class="apply btn btn-primary w-35 opacity-70 border-0 bg-green-700">${interview.apply}</button>
                <p class=" description text-gray-700">${interview.description}</p>
                <div>
                    <button class="interview-btn btn btn-outline btn-success">Interview</button>
                    <button class=" rejected-btn btn btn-outline btn-error">Rejected</button>
                </div>
        `
        filteredSection.appendChild(div)
    }


}

function  renderRejected() {
    filteredSection.innerHTML = ''

    for(let reject of rejectedList) {
        console.log(reject)

        let div = document.createElement('div');
        div.className = `card bg-red-200 p-4 rounded-lg mb-4 space-y-3`
        div.innerHTML =`
        <div class="flex justify-between items-center">
                    <h2 class="companyName text-lg font-bold">${reject.companyName}</h2>
                    <button class="btn-delete btn btn-circle">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
                <p class="jobName text-gray-700 font-semibold">${reject.jobName}</p>
                <span class="salary text-gray-700">${reject.salary}</span>
                <button class="apply btn btn-primary w-35 opacity-70 border-0 bg-red-700">${reject.apply}</button>
                <p class=" description text-gray-700">${reject.description}</p>
                <div>
                    <button class="interview-btn btn btn-outline btn-success">Interview</button>
                    <button class=" rejected-btn btn btn-outline btn-error">Rejected</button>
                </div>
        `
        filteredSection.appendChild(div)
    }
}


