fetch('https://codingameapi.herokuapp.com/').then(function (response) {
    //fetch('http://127.0.0.1:5000/').then(function (response) {
    return response.json();
}).then(function (data) {
    appendData(data);
});

function appendData(data) {
    var islington = [];
    var account = [];
    var noSchoolName = ['FluidWizard', 'NarbiSanji', 'SPARROT', 'raister21'];
    var hideAccount = ['SamyogShrestha', 'RogerSir', 'Jagaran_Maharjan', 'rasnaah', 'FinalFantasy0057', 'ilaniam', 'MIRACLE-', 'ErebosTheos'];
    var section = document.getElementById("sec");
    for (var i = 0; i < data.length; i++) {
        if (data[i].school == "Islington College - काठमाडौँ" || data[i].company == "Islington College" || data[i].school == "Islington College" || data[i].company == "Islington College - काठमाडौँ" || data[i].username == noSchoolName[0] || data[i].username == noSchoolName[1] || data[i].username == noSchoolName[2] || data[i].username == noSchoolName[3]) {
            islington.push(data[i]);
        }
    }
    
    

    for (var j = 0; j < islington.length; j++) {
//        for (var k = 0; k < hideAccount.length; k++) {
//            if (islington[j].username.toLowerCase() == hideAccount[k].toLowerCase()) {
//                console.log(hideAccount[k]);
//                islington.splice(j, 1); // Removes data from the array.
//            }
//        }
        
        if(islington[j].username != hideAccount[0] && islington[j].username != hideAccount[1]&& islington[j].username != hideAccount[2] && islington[j].username != hideAccount[3] && islington[j].username != hideAccount[4] && islington[j].username != hideAccount[5] && islington[j].username != hideAccount[6] && islington[j].username != hideAccount[7]){
            account.push(islington[j]);
        }
    }

    for (var l = 0; l < account.length; l++) {
        var leagueTitle = "";
        var box = document.createElement('div');
        var imgBx = document.createElement('div');
        var content = document.createElement('div');
        var img = document.createElement('img');
        var h2 = document.createElement('h2');
        var br = document.createElement('br');
        var br1 = document.createElement('br');
        var br2 = document.createElement('br');
        var br3 = document.createElement('br');
        var span = document.createElement('span');
        var league = document.createElement('span');
        var rank = document.createElement('span');
        var cg_rank = document.createElement('span');


        if (account[l].avatar != "default") {
            img.src = "https://static.codingame.com/servlet/fileservlet?id=" + account[l].avatar + "&amp;format=navigation_avatar";
        } else {
            img.src = "../image/png/default.png";
        }
        imgBx.appendChild(img);
        imgBx.classList.add('imgBx');

        if (account[l].league == 0 || account[l].league == 1 || account[l].league == 2) {
            leagueTitle = "Wood";
        } else if (account[l].league == 3) {
            leagueTitle = "Bronze";
        } else if (account[l].league == 4) {
            leagueTitle = "Sliver";
        } else if (account[l].league == 5) {
            leagueTitle = "Gold";
        } else if (account[l].league == 6) {
            leagueTitle = "Legend";
        }


        h2.innerHTML = "Name: "+ account[l].username;
        span.innerHTML = "Prog.: " + account[l].prog_lang;
        league.innerHTML = "League: " + leagueTitle;
        rank.innerHTML = "Rank: " + (l+1);
        cg_rank.innerHTML = "CG-Rank: "+ account[l].cg_rank;


        h2.appendChild(br);
        h2.appendChild(span);
        span.appendChild(br2);
        span.appendChild(rank);
        span.appendChild(br1);
        span.appendChild(cg_rank);
        span.appendChild(br3);
        span.appendChild(league);
        content.appendChild(h2);
        content.classList.add('content');

        box.appendChild(imgBx);
        box.appendChild(content);
        box.classList.add('box');


        section.appendChild(box);

    }
    var footer = document.createElement('footer');
    var h6 = document.createElement('h6');
    var h62 = document.createElement('h6');

    h6.innerHTML = "© 2020 Islington College. All Rights Reserved.";
    h62.innerHTML = "Designed by Computing Team TA - 2020";
    footer.appendChild(h6);
    footer.appendChild(h62);
    footer.style.position = 'static';
    footer.style.paddingTop = "45px";
    footer.classList.add('foot');

    section.appendChild(footer);
}
