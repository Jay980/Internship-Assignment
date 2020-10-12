var CurrentPositionP1=0;
var CurrentPositionP2=0;


   function GenRandomNo(A, B)
{
  return Math.floor(Math.random() * (B - A + 1) ) + A;
}


function PlayerFunction1()
{
  var NewMovePlayer1 = GenRandomNo(1,6);
    document.getElementById("Player2Button").disabled = true;
    document.getElementById("Player1Button").disabled = true;
    document.getElementById("Player2Button").disabled = false;
    document.getElementById('img1').src="Dice"+NewMovePlayer1+".jpg";
    console.log( "Player1  Dice no. is  :"+ NewMovePlayer1);
if(CurrentPositionP1<25)        
{
    CurrentPositionP1=(+CurrentPositionP1)+(+NewMovePlayer1);
    console.log( "Player1 Current Position is  :"+ CurrentPositionP1);
}   
if(CurrentPositionP1>25)
{
  CurrentPositionP1=(+CurrentPositionP1)-(+NewMovePlayer1);
  if(CurrentPositionP1==20)
        {
          alert("Player1  you need Number 5 to win but Your Dice Number is  "+NewMovePlayer1);
        }
        if(CurrentPositionP1==21)
        {
          alert("Player1  you need Number 4 to win but Your Dice Number is  "+NewMovePlayer1);
        }
        if(CurrentPositionP1==22)
        {
          alert("Player1  you need Number 3 to win but Your Dice Number is  "+NewMovePlayer1);
        }
        if(CurrentPositionP1==23)
        {
          alert("Player1 you need Number 2 to win but Your Dice Number is    "+NewMovePlayer1);
        }
        if(CurrentPositionP1==24)
        {
          alert("Player1 you need Number 1 to win but Your Dice Number is    "+NewMovePlayer1);
        }
  
      
}
       
if(CurrentPositionP1 == 25)
  {
               alert("Congratulations   Player1!!!!!!!  you won the game ");
               document.getElementById("Player1Button").disabled = true;
               document.getElementById("Player2Button").disabled = true;
 }                         
    var i;
    if(i=CurrentPositionP1)
    {
       document.getElementById("t"+i).style.backgroundColor="red";
  
    }
    // if player position is 3,5,9,13,25 then snake will bite and after player position will be set Again 0
    switch(CurrentPositionP1)
     {
            case 3: 
            alert("Snake bites  Player1, Now Player1 your current position has been set  zero again") ;
                    for(i=1;i<=3;i++)
                       {
                         document.getElementById("t"+i).style.backgroundColor="white";
                       }             
                       CurrentPositionP1 = 0;
                   break;
                             
            case 5: 
                  alert("Snake bites  Player1 , Now Player1 your current position has been set  zero again") ;
                  for(i=1;i<=5;i++)
                       {
                         document.getElementById("t"+i).style.backgroundColor="white";
                       }                
                       CurrentPositionP1 = 0;
                   break;

            case 9:  
                  alert("Snake bites  Player1, Now Player1 your current position has been set  zero again") ;
                  for(i=1;i<=9;i++)
                       {
                         document.getElementById("t"+i).style.backgroundColor="white";
                       }                
                       CurrentPositionP1= 0;
                    break;
                                     
            case 13: 
                  alert("Snake bites  Player1 , Now Player1 your current position has been set zero again") ;
                  for(i=1;i<=13;i++)
                       {
                         document.getElementById("t"+i).style.backgroundColor="white";
                       }               
                       CurrentPositionP1 = 0;
                    break;
              case 25:
                      for(i=1;i<=25;i++)  
                      {
                         document.getElementById("t"+i).style.backgroundColor="white";
                         document.getElementById("tt"+i).style.backgroundColor="white";
                      }
           }  
 }
function PlayerFunction2()
 {  

    var NewMovePlayer2 = GenRandomNo(1,6);
    document.getElementById("Player1Button").disabled = true;
    document.getElementById("Player2Button").disabled = true;
    document.getElementById("Player1Button").disabled = false;
    document.getElementById('img2').src="Dice"+NewMovePlayer2+".jpg";
    console.log("Player2  Dice no. is : "+ NewMovePlayer2);
    
  if(CurrentPositionP2<25)
  {
    CurrentPositionP2=(+CurrentPositionP2)+(+NewMovePlayer2);
    console.log( "Player2 Current position is :"+ CurrentPositionP2);
  }   
if(CurrentPositionP2>25)
{
  CurrentPositionP2=(+CurrentPositionP2)-(+NewMovePlayer2);
        if(CurrentPositionP2==20)
        {
          alert("Player2 you need  Number 5 to win but your Dice Number is  "+NewMovePlayer2);
        }
        if(CurrentPositionP2==21)
        {
          alert("Player2 you need  Number 4 to win but your Dice Number is  "+NewMovePlayer2);
        }
        if(CurrentPositionP2==22)
        {
          alert("Player2 you need  Number 3 to win but your Dice Number is  "+NewMovePlayer2)
        }
        if(CurrentPositionP2==23)
        {
          alert("Player2 you need  Number 2 to win but your Dice Number is "+NewMovePlayer2)
        }
        if(CurrentPositionP2==24)
        {
          alert("Player2 you need  Number 1 to win but your Dice Number is  "+NewMovePlayer2)
        }
        
        
}              
 if(CurrentPositionP2 == 25)
 {
               alert("Congratulations  Player2 !!!!!!!  you  won the game ");
               document.getElementById("Player1Button").disabled = true;
               document.getElementById("Player2Button").disabled = true;
 }

    var i;
    if(i=CurrentPositionP2)
    {
      document.getElementById("tt"+i).style.backgroundColor="yellow";
     
   }
 
      // if player position is 3,5,9,13,25 then snake will bite and after player position will be set Again 0
     switch(CurrentPositionP2)
     {
            case 3:    
                       alert("Snake bites  Player2, Now Player2 your current position has been set  zero again") ;
                       for(i=1;i<=3;i++)
                       {
                         document.getElementById("tt"+i).style.backgroundColor="white";
                       }          
                       CurrentPositionP2 = 0;
                       break;

            case 5:
                      alert("Snake bites  Player2, Now Player2 your current position has been set  zero again") ;
                       for(i=1;i<=5;i++)
                       {
                         document.getElementById("tt"+i).style.backgroundColor="white";
                       }
                       CurrentPositionP2 = 0;
                       break;

            case 9: 
                      alert("Snake bites  Player2, Now Player2 your current position has been set  zero again") ;
                       for(i=1;i<=9;i++)
                       {
                         document.getElementById("tt"+i).style.backgroundColor="white";
                       }                      
                       CurrentPositionP2 = 0;
                    
                       break;
                                     
            case 13:   
                       alert("Snake bites  Player2, Now Player2 your current position has been set  zero again") ;
                       for(i=1;i<=13;i++)
                       {
                         document.getElementById("tt"+i).style.backgroundColor="white";
                       } 
                       CurrentPositionP2 = 0;
                        break;
             case 25:
                      for(i=1;i<=25;i++)  
                      {
                         document.getElementById("tt"+i).style.backgroundColor="white";
                         document.getElementById("t"+i).style.backgroundColor="white";
                      }          
           }
            
}
