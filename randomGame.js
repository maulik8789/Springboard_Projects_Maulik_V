var i;
var r = 0;
var multCounter;
var cntr = 0;
function randomGame()
{        
    multCounter = setInterval(function(){
        if (r > 0.75)
        {
            clearInterval(multCounter);
            console.log(cntr);
        }
        else
        {
            r = Math.random();
            cntr++;
        }
    }, 1000)   
    
}
randomGame();