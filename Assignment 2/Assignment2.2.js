
//    function of arithmetic operation s sub button clicked then function subraction will be called
   
//    Function for Addition Button
    function Addition()
    {
    x=parseFloat(group.I1.value);
    y=parseFloat(group.I2.value);
    z=(x+y);
    alert("The Addition result is"+z);
    group.I3.value=z
    }

    // Function for Subtraction button
    function Subtraction()
    {
    var x,y,z;
    x=group.I1.value;
    y=group.I2.value;
    z=x-y;
    alert("The subtraction result is "+z);
    group.I3.value=z
    }

    // Function for Multiplication button
    function Multiplication()
    {
    var x,y,z;
    x=group.I1.value;
    y=group.I2.value;
    z=x*y;
    alert("The Multiplication result is "+z);
    group.I3.value=z
    }

    // Function for Division Button
    function Division()
    {
    var x,y,z;
    x=group.I1.value;
    y=group.I2.value;
    z=x/y;
    alert("The Division result is "+z);
    group.I3.value=z
    }

    function Modulus()
    {
    var x,y,z;
    x=group.I1.value;
    y=group.I2.value;
    z=x%y;
    alert("The Modulus result is "+z);
    group.I3.value=z
    }
        