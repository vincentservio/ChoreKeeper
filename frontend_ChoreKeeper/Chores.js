const displayChoreForm = () => {
    clearForm()
   
    let id = event.target.dataset.id

  

    let cardFormDiv = document.getElementById('name-form')
    let html = `
            <form>
                <input type="text" id="task" placeholder="Clean the Bathroom">
                <br> 
                <select id="days">
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
                <option>Saturday</option>
                <option>Sunday</option>
                <select>
          
            <input type="submit"> 


                
            </form>
        `

    cardFormDiv.innerHTML += html
    document.querySelector('form').addEventListener("submit", () => {
        createChore(event, id)
    })
    
}
      function dayList() {

  document.getElementById("myDropdown").classList.toggle("show");
}


        //ID CANNOT BE SET PLEASE CONTINUE TO CONFIGURE FROM HERE
// housemate_id: document.querySelector(`li a`).dataset.id,
// ^===============  CREATE CARD =======================
function createChore(event, id ){
  event.preventDefault()

    
    const chore = {
        housemate_id: id,
        task: document.getElementById("task").value,
        day: document.getElementById("days").value
    };

    fetch(BASE_URL+`/chores`, {

        method: "POST",
        body: JSON.stringify(chore),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(chores => {
        
        let hm = new Chore(chores)


        document.getElementById('name-form').innerHTML += hm.returnChore()
        clearForm()
        // .then(name => {
//     let hm = new Housemate(name)
//     document.querySelector('#ma in').innerHTML += hm.renderNames()
//     clearForm()
// })

        // `
        // <li>
        //    ${chore.housemate.name} has to ${chore.task} on ${chore.day}
        // </li>
        // `



    //     attachClickToLinks()
    //     clearForm()
    
    })
}





const displayChores = () => {
    clearForm()
    clearUls()
  
    let id = event.target.dataset.id
    fetch(BASE_URL+`/housemates/${id}`)
    .then(resp => resp.json())
    .then(housemates => {
    housemates.chores.reverse().forEach(chore => {
    let ch = new Chore(chore)
    document.querySelector('#main').innerHTML += ch.returnChore() 
  attachClickLinks()
// `   
// <li> ${chore.task} on - ${chore.day}
// </li>
// `

         
        })
    })

    





} 



const removeChore = () => { 
    event.preventDefault()
    clearForm()
    id = event.target.dataset.id
    fetch(BASE_URL+`/chores/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(event.target.parentElement.remove())
    .then(clearUls)
    .then(getNames())
 
}   




const editChore = () => {
    event.preventDefault()
    clearForm()
    let id = event.target.dataset.id
    fetch(BASE_URL + `/chores/${id}`)
    .then(resp => resp.json())
    .then(chore => {
    let formDiv = document.getElementById('name-form')
    let html = `
            <form data-id="${id}">
                <label>Create</label>
                <input type="text" id="task" value='${chore.task}'>
                <input type="text" id="day" value='${chore.day}'>

                <input type="submit"> 
            </form>
            `
    formDiv.innerHTML = html
    formDiv.addEventListener('submit', () => {
        updateChore()
        // getNames()

    })
    })



}
const updateChore = () => {
    event.preventDefault()
    let id = event.target.dataset.id
    const chore = {
        task: document.getElementById("task").value,
        day: document.getElementById("day").value
    }
    fetch(BASE_URL + `/chores/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'aaplication/json'
        },
        body: JSON.stringify(chore)
    })
        .then(resp => resp.json())
        .then(chore => {


            document.querySelector(`li a[data-id="${id}"]`).parentElement.innerHTML =
                `         
      
            <a data-id="${chore.id}">${chore.task}: ${chore.day}<a/>
            <button id="deleteChore" data-id="${chore.id}"> X </button>
            <button id = "editChore" data-id="${chore.id}"> Edit </button>

      
        `

            attachClickLinks()
            clearForm()

        })
}




//  const getChores = () => {
//         clearUls()
//     clearForm()
//     // asynchronus s--fetch returns promise --resolve.pending.error
//     fetch(BASE_URL+"/chores")
//     .then(resp => resp.json())
//     .then(chores => {
//         chores.forEach(task => {
//             let hm = new Housemate(task)
//             // debugger
//             // main.innerHTML += hm.renderNames()
//             attachClickLinks()
//         })
//     })

// }

class Chore {
    static all = []
    constructor(chore) {
        this.id = chore.id
        this.task = chore.task
        this.day = chore.day
        this.housemate_id = chore.housemate_id
        Chore.all.push(this)
    }

    returnChore() {
        return `         
        <li>
            <a data-id="${this.id}">${this.task}: ${this.day}<a/>
            <button id="deleteChore" data-id="${this.id}"> X </button>
            <button id = "editChore" data-id="${this.id}"> Edit </button>

        </li>
        `
    }
}

    
    
