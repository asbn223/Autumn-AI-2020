fetch('https://codingameapi.herokuapp.com/').then(function (response) {
//fetch('http://127.0.0.1:5000/').then(function (response) {
    return response.json();
}).then(function (data) {
    appendData(data);
});

function appendData(data) {
    var islington = [];
    var hideAccount = ['SamyogShrestha', 'AcharyaHeeman', 'Jagaran_Maharjan', 'rasnaah'];
        var num = 1;
//        var mainContainer = document.getElementById("myData");
    var mainTable = document.getElementById("table");
    for (var i = 0; i < data.length; i++) {
        if (data[i].school == "Islington College - काठमाडौँ" || data[i].company == "Islington College" || data[i].school == "Islington College" || data[i].company == "Islington College - काठमाडौँ") {
            //            console.log(data[i].pseudo);
            islington.push(data[i]);
        }

    }

    for (var j = 0; j < islington.length; j++) {
        for (var k = 0; k < hideAccount.length; k++) {
            if (islington[j].username.toLowerCase() == hideAccount[k].toLowerCase()) {
                islington.splice(j, 1); // Removes data from the array.
            }
        }
    }

//        for (var k = 0; k < islington.length; k++) {
//            var div = document.createElement("div");
//            div.classList.add("newClass");
//            div.innerHTML = num + ' Name: ' + islington[k].username;
//            mainContainer.appendChild(div);
//            num++;
//        }

    for (var l = 0; l < islington.length; l++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var div = document.createElement('div');
        var div2 = document.createElement('div');
        var div3 = document.createElement('div');
        var div4 = document.createElement('div');
        var img = document.createElement('img');
        var img2 = document.createElement('img');
        div.classList.add('lboard_mem');
        div2.classList.add('img');
        if(islington[l].avatar != "default"){
            img.src="https://static.codingame.com/servlet/fileservlet?id="+islington[l].avatar+"&amp;format=navigation_avatar";
        }
        else{
            img.src="../image/png/default.png";
        }
        img.classList.add('avatar');
        div2.appendChild(img);
        div.appendChild(div2);
        td1.appendChild(div);
        
        td2.innerHTML = islington[l].rank;
        td3.innerHTML = islington[l].username;
        td4.innerHTML = islington[l].cg_rank;
        td6.innerHTML = islington[l].prog_lang;
        if(islington[l].league == 0 || islington[l].league == 1 || islington[l].league == 2){
            img2.src="../image/league/wood.png";
        }
        else if(islington[l].league == 3){
            img2.src="../image/league/bronze.png";
        }
        else if(islington[l].league == 4){
            img2.src="../image/league/silver.png";
        }
        else if(islington[l].league == 5){
            img2.src="../image/league/gold.png";
        }
        else if(islington[l].league == 6){
            img2.src="../image/league/legend.png";
        }
        div4.appendChild(img2);
        div3.appendChild(div4);
        td5.appendChild(div3)
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        mainTable.appendChild(tr);
    }
}
