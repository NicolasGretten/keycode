var table = document.getElementById("keypad");
var l = 4;
var nb_to_guess = [];
for(i = 0; i<4;i++){
    nb_to_guess.push(Math.ceil(Math.random() * 9));
} 
class Grille {
    constructor(i, j, k) {
        var essaie = [];
        var tries = [];
        var k = 0;
        for (i = 1; i < l; i++) {
            var tr = document.createElement("tr");
            for (j = 1; j < l; j++) {
                k++
                var td = document.createElement("td");
                tr.appendChild(td);
                td.id = ("case_" + i + "_" + j);
                // td.className = ("border");
                td.className = ("cel");
                td.addEventListener("click",(e)=>{
                    tries.push(parseInt(e.target.innerHTML));
                    document.getElementById("show").innerHTML = tries;    
                    if(tries.length == 4){
                        if(tries.every(function(element, index){
                            return element === nb_to_guess[index]; 
                        })){
                            alert('win');
                        }
                        else{
                            alert('perdu');
                            essaie.push("1");
                            if(essaie.length == 1){
                                document.getElementById("essaie").classList.add("fas")
                                document.getElementById("essaie").classList.add("fa-star-of-life")
                            }
                            if(essaie.length == 2){
                                document.getElementById("essaie_deux").classList.add("fas")
                                document.getElementById("essaie_deux").classList.add("fa-star-of-life")
                            }
                            if(essaie.length == 3){
                                document.getElementById("essaie_trois").classList.add("fas")
                                document.getElementById("essaie_trois").classList.add("fa-star-of-life")
                                if(confirm("3 tentative raté, le code a déviner était "+nb_to_guess+" géneration d'un nouveau code ?")){
                                    document.location.reload(true);
                                }
                            }
                        }
                    document.getElementById("show").innerHTML = ""
                    tries = [];
                }
                });
                td.innerHTML = k;
            }
            table.appendChild(tr);
        }
    }
}

var g = new Grille();
