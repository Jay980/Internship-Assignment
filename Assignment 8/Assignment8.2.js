 // if Get Answer button is clicked then this function will call.
    function Calculate()
    {
    let p,m,ans,Sol,Swo; //Declaring variables
    Sol=parseInt(group.solider.value);
    Swo=parseInt(group.swordp.value);
    p=2;
    for (let index = 0; index < Sol; index++) //if index value is greater than So then  loop end 
     {
      if(p>Sol){      //if p value greater than So value  then break 
        break;
      }
        p=p*2;
    }
    m=Sol-p;
    ans=Sol+m+Swo;
    alert("Last Solider is   "+ans);
    group.Answer.value=ans;
    }