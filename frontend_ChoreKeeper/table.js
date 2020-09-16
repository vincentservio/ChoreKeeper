// tableData = [allHousemates.forEach(mate => {
    
//         name: `${mate.name}`
//     ]
// })

function displayTable(){
    clearForm()
    clearUls()
    
    let tab = document.querySelector("table")
    tab.innerHTML += `
    <table>
        <thead>
            <tr>
            <th id="name">Names</th>
            <th id="task">   Task  </th>
            <th id="day">Day To Complete</th>

            </tr>
        </thead>
        <tbody id="tableData"></tbody>
    </table>`
//     tr = document.querySelector("tr")
//     allHousemates.forEach(hm => {
//         debugger
//         tr.innerHTML += `

// <th>${hm.name}</th>


// `
// debugger
// hm.chores.forEach(mate => {
// document.getElementById('tableData').innerText += `


//     <td>${chore.task}</td>

// </tr>`


// })

// Create separate collum to load all the task under here 
// follow example above/ check out the table header

   


loadTable()
   
}


function loadTable(){
    const tableBody = document.getElementById('tableData')
    fetch(BASE_URL + '/housemates')
    .then(res => res.json())
    .then(housemates => {
    housemates.forEach(mate => {
     
     
        let dataHtml = ''; 
          if (mate.chores.length === 0){
              dataHtml = `
            <tr data-id=${mate.id}>
            <td>${mate.name}</td> 
            <td>Get ${mate.name} a task!</td> 
            <td>${mate.name}'s Lucky week</td> `
        }
        else 
        dataHtml +=
            `<tr data-id=${mate.id} >
            <td>${mate.name}</td> 
            <td>${mate.chores.slice(-1)[0].task}</td>
            <td>${mate.chores.slice(-1)[0].day}</td>
                </tr>
            `
        tableBody.innerHTML += dataHtml
    }) 
   })

    

}



