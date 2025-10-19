const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveBtn = document.getElementById("save-btn")

let myLeads = JSON.parse(localStorage.getItem("myLeads")) || [];

// Renderiza al cargar la página
renderLeads(myLeads);

inputBtn.addEventListener("click", function(){
    const value = inputEl.value.trim();
    if (value === "") return; // evita guardar vacíos

    myLeads.push(value);
    inputEl.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
});

function renderLeads(leads){
    let listItems = "";
    leads.forEach(element => {
        listItems += `
            <li>
                <a href="${element}" target="_blank">${element}</a>
            </li>`;
    });
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    ulEl.innerHTML = "";
    myLeads = [];
});

saveBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
})