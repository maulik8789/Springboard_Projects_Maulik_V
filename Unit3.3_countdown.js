 function countdown(s)
{
    let milsecond = 1;
    let timeCount =1;
    for(let i = s - 1; i >= 0; i--)
    {
        milsecond = timeCount * 1000;
        setTimeout(function(){
            if (i == 0)
            console.log("DONE!");
            else
            console.log(i);
        }, milsecond)
        timeCount++;
    }
}
countdown(4);