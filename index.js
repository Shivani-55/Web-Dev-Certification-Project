$(document).ready(function(){
    var obj=[
        {
            teamName:"MI",
            teamIcon:"./mumbai_logo.jpg",
            playerCount:14,
            topBatsman:"Rohit Sharma",
            topBowler:"Lasith Malinga",
            matchesWon:5
        },
        {
            teamName:"SRH",
            teamIcon:"./SRH_logo.jpg",
            playerCount:22,
            topBatsman:"David Warner",
            topBowler:"Rashid Khan",
            matchesWon:2
        },
        {
            teamName:"DC",
            teamIcon:"./DC_logo.jpg",
            playerCount:19,
            topBatsman:"Virender Sehwag",
            topBowler:"Kagiso Rabada",
            matchesWon:0
        },
        {
            teamName:"KXIP",
            teamIcon:"./kings_logo.jpg",
            playerCount:16,
            topBatsman:"Dawid Malan",
            topBowler:"Piyush Chawla",
            matchesWon:0
        },
        {
            teamName:"CSK",
            teamIcon:"./CSK_logo.jpg",
            playerCount:25,
            topBatsman:"Suresh Raina",
            topBowler:"Dwayne Bravo",
            matchesWon:3
        },
        {
            teamName:"RR",
            teamIcon:"./RR_logo.jpg",
            playerCount:17,
            topBatsman:"Shivam Dube",
            topBowler:"Jofra Archer",
            matchesWon:1
        },
        {
            teamName:"RCB",
            teamIcon:"./RCB_logo.jpg",
            playerCount:12,
            topBatsman:"David Warner",
            topBowler:"Yuzvendra Chahal",
            matchesWon:1 
        },
        {
            teamName:"KKR",
            teamIcon:"./KKR_logo.jpg",
            playerCount:17,
            topBatsman:"Shubman Gill",
            topBowler:"Varun Chakravarthy",
            matchesWon:2
        }
    ];

    // var button = document.getElementById("button")
    // button.className = "add-btn"

    // button.addEventListener("click",function(){
    //     console.log("clicked")
    // })

    // $(".add-btn").click(function(){
    //     $("#form").show();
    //   });
    $("button").click(function(){
        $("#form").show();
    })

    $("#form").submit(function(event){
        event.preventDefault()
    var getvalue1 = $("#team-name").val()
    var getvalue2 = $("#team-image").val()
    console.log(getvalue1,getvalue2)
    
    var obj={
        teamName:getvalue1,
        teamIcon:getvalue2
    }
    console.log(JSON.stringify(obj))
    localStorage.setItem("obj",JSON.stringify(obj));
    
    $("#form").hide();

    var teamCard = document.getElementById("items")


    function teams(){

        var teamGrid = document.createElement('div');
        teamGrid.classList.add("grid")

        var logo = document.createElement('img');
        logo.src = getvalue2
        logo.classList.add("image")
        teamGrid.appendChild(logo)
        //logo.alt = obj[0].teamIcon

        var teamName = document.createElement('h4')
        teamName.classList.add("top-left")
        teamName.innerHTML = getvalue1
        teamGrid.appendChild(teamName)

        teamCard.appendChild(teamGrid)

        return teamGrid

    }
        teams();
    }); 

    $(".grid1").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[0]));
        location.assign("./details.html"); 
    })
    
    $(".grid2").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[1]));
        location.assign("./details.html"); 
    })

    $(".grid3").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[2]));
        location.assign("./details.html"); 
    })

    $(".grid4").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[3]));
        location.assign("./details.html"); 
    })

    $(".grid5").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[4]));
        location.assign("./details.html"); 
    })

    $(".grid6").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[5]));
        location.assign("./details.html"); 
    })

    $(".grid7").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[6]));
        location.assign("./details.html"); 
    })

    $(".grid8").click(function(){
        localStorage.setItem("teamInfo",JSON.stringify(obj[7]));
        location.assign("./details.html"); 
    })

    $('.search-box').on("keyup", function() {
        var value = $(this).val().toUpperCase();
        //console.log(value)
        $(".grid").each(function(){
            var found="false";
            var title=$(this).children(".top-left").html();
            if(title.indexOf(value)>=0)
            found="true";
            if(found=="true")
            $(this).show();
            else
            $(this).hide();
        });
      }); 
})

// var obj = [
//     {
//         id : "1",
//      teamName : "Mumbai Indians",
//      teamLogo : "./mumbai_logo.jpg",
//         teamInitials:"MI"
//     },
//     {
//         id : "2",
//      teamName : "Sunrisers Hyderabad",
//      teamLogo : "./SRH_logo.jpg",
//         teamInitials:"SRH"
//     },
//     {
//         id : "3",
//      teamName : "Delhi Capitals",
//      teamLogo : "./DC_logo.jpg",
//         teamInitials:"DC"
//     },
//     {
//         id : "4",
//      teamName : "Kings XI Punjab",
//      teamLogo : "./kings_logo.jpg",
//         teamInitials:"KXIP"
//     },
//     {
//         id : "5",
//      teamName : "Chennai SuperKings",
//      teamLogo : "./CSK_logo.jpg",
//         teamInitials:"CSK"
//     },
//     {
//         id : "6",
//      teamName : "Rajasthan Royals",
//      teamLogo : "./RR_logo.jpg",
//         teamInitials:"RR"
//     },
//     {
//         id : "7",
//      teamName : "Royal Challengers Bangalore",
//      teamLogo : "./RCB_logo.jpg",
//     teamInitials:"RCB"
//     },
//     {
//         id : "8",
//      teamName : "Kolkata Knight Riders",
//      teamLogo : "./KKR_logo.jpg",
//      teamInitials:"KKR"
//     },
    
// ]


// var teamCard = document.getElementById("items")


// function teams(items){

//     var teamGrid = document.createElement('div');
//     teamGrid.classList.add("grid")

//     var logo = document.createElement('img');
//     logo.src = obj[items].teamLogo
//     logo.classList.add("image")
//     logo.alt = obj[items].teamName

//     var teamName = document.createElement('div')
//     teamName.classList.add("top-left")
//     teamName.innerHTML = obj[items].teamInitials

//     teamGrid.appendChild(teamName)
//     teamGrid.appendChild(logo)
//     teamCard.appendChild(teamGrid)

//     return teamGrid
// }

// for (var items=0; items<=obj.length; items++) 
// {
//       teams(items);
// }


/* <article class="grid">
<img class="image" src="./mumbai_logo.jpg" alt="Mumbai Indians"/>
<div class="top-left"> MI </div>
</article>

<article class="grid">
<img class="image" src="./SRH_logo.jpg" alt="Sunrisers Hyderabad"/>
<div class="top-left"> SRH </div>
</article>

<article class="grid">
<img class="image" src="./DC_logo.jpg" alt="Delhi Capitals"/>
<div class="top-left"> DC </div>
</article>

<article class="grid">
<img class="image" src="./kings_logo.jpg" alt="Kings XI Punjab"/>
<div class="top-left"> KXIP </div>
</article>

<article class="grid">
<img class="image" src="./CSK_logo.jpg" alt="Chennai SuperKings"/>
<div class="top-left"> CSK </div>
</article>

<article class="grid">
<img class="image" src="./RR_logo.jpg" alt="Rajasthan Royals"/>
<div class="top-left"> RR </div>
</article>

<article class="grid">
<img class="image" src="./RCB_logo.jpg" alt="Royal Challengers Bangalore"/>
<div class="top-left"> RCB </div>
</article>

<article class="grid">
<img class="image" src="./KKR_logo.jpg" alt="Kolkata Knight Riders"/>
<div class="top-left"> KKR </div>
</article> */


// "use strict";

// function team(teamName,teamIcon,playerCount,topBatsman,topBowler,winningStreak){
//     this.teamName = teamName;
//     this.teamIcon = teamIcon;
//     this.playerCount = playerCount;
//     this.topBatsman = topBatsman;
//     this.topBowler = topBowler;
//     this.winningStreak = winningStreak;
//     this.display = function(){
//         document.write(this.teamName + this.teamIcon + this.playerCount + this.topBatsman + this.topBowler + this.winningStreak);
//     }
// }

// let mi = new team ("MI","./mumbai_logo.jpg",14,"Rohit Sharma","Lasith Malinga",5);



//https://stackoverflow.com/questions/64645572/javascript-get-object-value-on-button-click