let count = 0
let count1 = 0
let homeTeamHistory = [0]
let guestTeamHistory = [0]
let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")
let undoHome = document.getElementById("undo-home")
let undoGuest = document.getElementById("undo-guest")
let resetBtn = document.getElementById("resetbtn")

function homeTeam(homeTeamScore){
    count += homeTeamScore
    homeTeamHistory.push(count)
    homePoints.textContent = count
}

undoHome.addEventListener("click", function(){
    if(homeTeamHistory.length > 1)
    {
        homeTeamHistory.pop()
        count = homeTeamHistory[homeTeamHistory.length - 1]
        homePoints.textContent = count
    }
})

function guestTeam(guestTeamScore){
   count1 += guestTeamScore
   guestTeamHistory.push(count1)
   guestPoints.textContent = count1
}


undoGuest.addEventListener("click", function(){
    if(guestTeamHistory.length > 1){
        guestTeamHistory.pop()
        count1 = guestTeamHistory[guestTeamHistory.length - 1]
        guestPoints.textContent = count1
    }
})


resetBtn.addEventListener("click", function(){
    count = 0
    homeTeamHistory = [0];
    homePoints.textContent = 0
    count1 = 0
    guestTeamHistory = [0];
    guestPoints.textContent = 0
})
