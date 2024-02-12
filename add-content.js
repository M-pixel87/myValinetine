var rccount = 0;
var ycount = 0;
var computer= document.getElementById('computer');
var human= document.getElementById('human');
var dialog= document.getElementById('dialog');
function countClicks()
//thats my loss
{
    var getComputerChoice = Math.floor(Math.random()*9);
    if (rccount >=5){
        rccount++ ;
        var hsrc = document.getElementById('hsrc');
        hsrc.src = 'meanKara.jpeg';
    }
    else if (getComputerChoice >= 6){
        rccount++ ;
        var hsrc = document.getElementById('hsrc');
        hsrc.src = 'rock.jpeg';
    } else if (getComputerChoice <= 2){
        rccount++ ;
        var hsrc = document.getElementById('hsrc');
        hsrc.src = 'bam_Kara.jpeg';
    } else if(getComputerChoice == 3){
        rccount++ ;
        var hsrc = document.getElementById('hsrc');
        hsrc.src = 'crazy.jpeg';
    }else if(getComputerChoice == 4){
        rccount++ ;
        var hsrc = document.getElementById('hsrc');
        hsrc.src = 'osamabin.jpeg';}
    if(rccount == 1){
        dialog.innerHTML = 'Hey broo i think clicked the wrong button pleassssee click yes';
    } else if(rccount == 2){
        dialog.innerHTML = '';
    } else if(rccount == 4){
        dialog.innerHTML = 'YouR sTilL cLiCkinG nO!!';
    } else if (rccount == 5){
        dialog.innerHTML = 'No moRe ResPnses fOr you DaWg';}
    else if(rccount == 6){
            dialog.innerHTML = '';
        }
    }
    console.log(rrcount);

//thats my win
function countClicks3()
{
    var hsrc = document.getElementById('hsrc');
    hsrc.src = 'vaca_Loca.JPG';
    var getComputerChoice = Math.floor(Math.random()*9);
    if (rccount == 0 ){
        dialog.innerHTML= "baby thats awsome!"
        //this is my response to me getting chosen first
    } else if (rccount == 1){
        dialog.innerHTML= "your finger prolly slipped no worries baby"

    } else if (rccount >= 1 && rccount <=4){
        dialog.innerHTML= "osoma info leacked!"

    } else if (rccount >= 5){
        hsrc.src = 'meanKara.jpeg';
        dialog.innerHTML= "nuh uhh no taksys backsys"
    } 
    }

