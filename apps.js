var random=(Math.floor(Math.random() * 6) + 1);
var scoreCount=0;

const button=document.getElementById("clik");
button.addEventListener("click",()=>{
    
    document.getElementById('dice').innerHTML=('DICE');
    document.getElementById('score').innerHTML=('score:0');
    document.getElementById('clik').innerHTML=('Roll!');
})
;
button.addEventListener("click",()=>{
     
     console.log(random);
     
if(random==1){
    document.getElementById('dice').innerHTML=('DICE1');
    document.getElementById('score').innerHTML=('score:0');
    document.getElementById('status').innerHTML=('You lose!');
     
        }
else 
{scoreCount=+random;
    
    document.getElementById('dice').innerHTML=(`DICE${random}`);
document.getElementById('score').innerHTML=(`score:${scoreCount}`);
document.getElementById('clik').innerHTML=('Roll!');
    }
                    });

                
                    button.addEventListener("click",()=>{
     
                        console.log(random);
                        
                   if(random==1){
                       document.getElementById('dice').innerHTML=('DICE1');
                       document.getElementById('score').innerHTML=('score:0');
                       document.getElementById('status').innerHTML=('You lose!');
                       // break;
                           }
                   else 
                   {scoreCount=+random;
                       
                       document.getElementById('dice').innerHTML=(`DICE${random}`);
                   document.getElementById('score').innerHTML=(`score:${scoreCount}`);
                   document.getElementById('clik').innerHTML=('Roll!');
                       }
                                       })






