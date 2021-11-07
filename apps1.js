
let drums=[
['qKey','boom',81],
['wKey','clap',87],
['eKey','hihat',69],
['rKey','kick',82],
['tKey','openhat',84],
['yKey','ride',89],
['uKey','snare',85],
['iKey','tink',73],
['oKey','tom',79]
];


for(let i=0;i<drums.length;i++){
    document.getElementById(drums[i][0]).addEventListener("click", () => {
    document.getElementById(drums[i][1]).pause();
    document.getElementById(drums[i][1]).currentTime = 0;
    document.getElementById(drums[i][1]).play();
})}


for(let i=0;i<drums.length;i++){
document.addEventListener("keydown",function(event){
   if( event.which ==drums[i][2])    
                {document.getElementById(drums[i][1]).pause();
                        document.getElementById(drums[i][1]).currentTime = 0;
                        document.getElementById(drums[i][1]).play()};
                        {return 0};

                })}


