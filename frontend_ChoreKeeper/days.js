function getDays(){
    clearUls()
   const days = {
        monday:"Monday",
       tuesday:"Tuesday", 
       wednesday:"Wednesday",
       thursday:"Thursday",
       friday:"Friday",
       saturday:"Saturday",
       sunday:"Sunday"
    }

    document.getElementById("table").innerHTML += `
    <table>
        <thead>
            <tr>
            <th id="name">Names</th>
            <th id="monday">Mon.</th>
            <th id="tuesday">Tue.</th>
            <th id="wednesday">Wed.</th>
            <th id="thursday">Thu.</th>
            <th id="friday">Fri.</th>
            <th id="saturday">Sat.</th>
            <th id="sunday">Sun.</th>                 

            </tr>
        </thead>
        <tbody id="tableData"></tbody>
    </table>`

    loadDays()
}

function loadDays(){
    const tableBody = document.getElementById('tableData')
    fetch(BASE_URL + '/housemates')
    .then(res => res.json())
    .then(mates => {
       mates.forEach(mate => {
     
           let dataHtml = '';   

           dataHtml += `

           <tr data-id=${mate.id} >

            <td>${mate.name}</td>     
             <td>${mate.chores.slice(-1)[0].day === "Monday" ? mate.chores.slice(-1)[0].task : ""}</td>
             <td>${mate.chores.slice(-1)[0].day === "Tuesday" ? mate.chores.slice(-1)[0].task : ""}</td>
             <td>${mate.chores.slice(-1)[0].day === "Wednesday" ? mate.chores.slice(-1)[0].task : ""}</td>
             <td>${mate.chores.slice(-1)[0].day === "Thursday" ? mate.chores.slice(-1)[0].task : ""}</td>
             <td>${mate.chores.slice(-1)[0].day === "Friday" ? mate.chores.slice(-1)[0].task : ""}</td>
             <td>${mate.chores.slice(-1)[0].day === "Saturday" ? mate.chores.slice(-1)[0].task : ""}</td>
             <td>${mate.chores.slice(-1)[0].day === "Sunday" ? mate.chores.slice(-1)[0].task : ""}</td>

            `
           tableBody.innerHTML += dataHtml

       })
    })
}