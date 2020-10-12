
          var arr = []; ////Defining Array Element

          function ButtonClickid(clicked_id, clicked_value) //when any of three button clicked this function will be called !!!!!!!!! this function stores the information of which button is clicked

          {
               document.getElementById(clicked_id).value = parseInt(parseInt(clicked_value) + 1);  //On clicking of any buttton ,value of particular will be increased by 1;
               var n = arr.includes(clicked_id);
               if (arr.length < 3) {
                    if (n == false) {
                         arr.push(clicked_id);
                    }
               }
               else {
                    var index = arr.indexOf(clicked_id);
                    var a = arr.splice(index, 1).toString();
                    arr.push(a);
               }

          }

          function validate() // When validate button is clicked this function will be called.
          {
               if (arr.length == 0) //checking condition if no buttons are clicked and validate button clicked if condition true then value of three will be inreased by 1.
               {
                    document.myform.but1.value = parseInt(parseInt(but1.value) + 1);
                    document.myform.but2.value = parseInt(parseInt(but2.value) + 1);
                    document.myform.but3.value = parseInt(parseInt(but3.value) + 1);
               }
               else {
                    if (arr.length == 1)                // when any one button is clicked
                    {
                         if (arr[0] == "but1")        //Checking Condition if but1 is clicked then if  validate button  clicked  value of but2 and but3 will be increased by 1.
                         {
                              document.myform.but2.value = parseInt(parseInt(but2.value) + 1);
                              document.myform.but3.value = parseInt(parseInt(but3.value) + 1);
                         }
                         else if (arr[0] == "but2")    //Checking Condition if but2 is clicked then if  validate button  clicked  value of but1 and but 3 will be increased by 1.
                         {
                              document.myform.but1.value = parseInt(parseInt(but1.value) + 1);
                              document.myform.but3.value = parseInt(parseInt(but3.value) + 1);
                         }
                         else if (arr[0] == "but3")      //Checking Condition if but3 is clicked then if  validate button  clicked  value of but1 and but2 will be increased by 1.
                         {
                              document.myform.but1.value = parseInt(parseInt(but1.value) + 1);
                              document.myform.but2.value = parseInt(parseInt(but2.value) + 1);
                         }
                    }
                    var b = arr[0];
                    if (arr.length == 2)        //when two buttons are clicked
                    {
                         if (b == "but1" && arr[1] == "but2") //if but1 and but2 both are clicked value of but3 will be increased by 1
                         {
                              document.myform.but3.value = parseInt(parseInt(but3.value) + 1);
                         }
                         else if (b == "but1" && arr[1] == "but3")     //if but1 and but3 both are clicked value of but2 will be increased by 1
                         {
                              document.myform.but2.value = parseInt(parseInt(but2.value) + 1);
                         }
                         else if (b == "but2" && arr[1] == "but1")   //if but2 and but1 both are clicked value of but3 will be increased by 1
                         {
                              document.myform.but3.value = parseInt(parseInt(but3.value) + 1);
                         }
                         else if (b == "but2" && arr[1] == "but3")     //if but2 and but3 both are clicked value of but1 will be increased by 1
                         {
                              document.myform.but1.value = parseInt(parseInt(but1.value) + 1);
                         }
                         else if (b == "but3" && arr[1] == "but1")        //if but3 and but1 both are clicked value of but2 will be increased by 1
                         {
                              document.myform.but2.value = parseInt(parseInt(but2.value) + 1);
                         }
                         else if (b == "but3" && arr[1] == "but2")    //if but3 and but2 both are clicked value of but1 will be increased by 1
                         {
                              document.myform.but1.value = parseInt(parseInt(but1.value) + 1);
                         }
                    }
                    if (arr.length == 3)   //when all the three buttons clicked
                    {
                         document.getElementById(arr[0]).value = parseInt(parseInt(document.getElementById(arr[0]).value) + 1);
                    }

               }

          }
     