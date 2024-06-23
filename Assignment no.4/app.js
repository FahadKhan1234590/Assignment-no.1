const APIURL = 'https://api.github.com/users/'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username){
    try{
        let response  = await fetch(APIURL + username)
        let data = await response.json()
        main.innerHTML = "<h1>Wait...</h1>"
        createUserCard(data)
        getRepos(username)
    }catch (err){
       alert("Some Error Occured")
    
    }
}

async function getRepos(username){
    try{
        let response  = await fetch(APIURL + username + '/repos?sort=created')
        let reposData = await response.json()
        addReposToCard(reposData)
    }catch (err){
        const cardHTML = `
            <div class="cardErrorInfo" id="card">
                <h2>The limit for finding accounts is finsihed</h2>
                <p>come back one hour later to find accounts again</p>
            </div>
        `
        main.innerHTML = cardHTML
    }
}

function createUserCard(user){
    if(user.name != null){
        const cardHTML = `
            <div class="cardInfo">
                <div>
                    <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
                </div>

            
                <div class="user-info pt-5">    
                    <h2>${user.name}</h2>
                    <p>${user.bio}</p>
                    
                    <ul>
                        <li>${user.followers} <strong>Followers</strong></li>
                        <li>${user.following} <strong>Following</strong></li>
                        <li>${user.public_repos} <strong>Repos</strong></li>
                    </ul>
    
                    <div id="repos"></div>
                </div>

                <div class = "gotoProfile">
                <a href='https://github.com/${user.login}' target="_blank"><i class="fa-solid fa-arrow-up-right-from-square" style="color: #ffffff;"></i></a>
                </div> 
            </div>
        `
        
        main.innerHTML = cardHTML
        
    }else{
        main.innerHTML = ` <div class="cardInfo">
          <h3 class="text-white fw-bold">This User Does Not Exist</h3>
        </div>`
    }
}


function addReposToCard(reposData){
    const reposEl = document.getElementById('repos')
    reposData.slice(0, 5).forEach(repo => {
            let repoel = `
              <a href ='${repo.html_url}' class='repo' target = "_blank">${repo.name}</a>
            `
            reposEl.innerHTML += repoel
        })
}



form.addEventListener('submit', (e) => {
    e.preventDefault() 
    if(search.value != ""){
        getUser(search.value)
        search.value = ""
    }
})

