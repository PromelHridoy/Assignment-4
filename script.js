let interviewList = [];
let rejectedList = [];
let currentStatus = "All";

let total = document.getElementById("total-count");
console.log(total.innerText);
let interviewCount = document.getElementById("interview-count");
console.log(interviewCount.innerText);
let rejectedCount = document.getElementById("rejected-count");
console.log(rejectedCount.innerText);

const allBtn = document.getElementById("all-btn");
console.log(allBtn);
const interviewBtn = document.getElementById("interview-btn");
console.log(interviewBtn);
const rejectedBtn = document.getElementById("rejected-btn");
console.log(rejectedBtn);

const allCards = document.getElementById("all-cards");
console.log(allCards);
const filteredSection = document.getElementById("filtered-section");
console.log(filteredSection);
const noJobsElement = document.getElementById("no-jobs");
console.log(noJobsElement);
const totalJobsElement = document.getElementById("total-jobs");
console.log(totalJobsElement);

function calculateCounts() {
    total.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
    totalJobsElement.innerText = `${interviewList.length + rejectedList.length} of ${allCards.children.length} Jobs`;
}
calculateCounts();

function toggleStyles(id) {
    allBtn.classList.remove('bg-blue-400', 'text-white');
    interviewBtn.classList.remove('bg-blue-400', 'text-white');
    rejectedBtn.classList.remove('bg-blue-400', 'text-white');

    allBtn.classList.add('bg-gray-200', 'text-gray-700');
    interviewBtn.classList.add('bg-gray-200', 'text-gray-700');
    rejectedBtn.classList.add('bg-gray-200', 'text-gray-700');
    console.log(id);
    const selectedButton = document.getElementById(id);
    
    currentStatus = id
    console.log(currentStatus);
    console.log(selectedButton);
    selectedButton.classList.remove('bg-gray-200', 'text-gray-700');
    selectedButton.classList.add('bg-blue-400', 'text-white');

    if (id === "all-btn") {
        filteredSection.classList.add("hidden");
        allCards.classList.remove("hidden");
            if (allCards.children.length === 0) {
                noJobsElement.classList.remove("hidden");
                noJobsElement.querySelector("h2").innerText = "No Jobs Available";
            } else {
                noJobsElement.classList.add("hidden");
            }
    } else if (id === "interview-btn") {
        allCards.classList.add("hidden");
        filteredSection.classList.remove("hidden");
        if (interviewList.length === 0) {
            noJobsElement.classList.remove("hidden");
            noJobsElement.querySelector("h2").innerText = "No Interview Jobs";
            } else {
                noJobsElement.classList.add("hidden");
            }
        } else if (id === "rejected-btn") {
            allCards.classList.add("hidden");
            filteredSection.classList.remove("hidden");
            if (rejectedList.length === 0) {
                noJobsElement.classList.remove("hidden");
                noJobsElement.querySelector("h2").innerText = "No Rejected Jobs";
            } else {
                noJobsElement.classList.add("hidden");
            }
    } 
}







