function RotateFunction() {
    /*Applying Logic for Swapping Buttons colors in Colockwise Direction*/
    var temp;
    temp = document.getElementById('but3').style.backgroundColor;
    document.getElementById('but3').style.backgroundColor = document.getElementById('but1').style.backgroundColor;
    document.getElementById('but1').style.backgroundColor = document.getElementById('but2').style.backgroundColor;
    document.getElementById('but2').style.backgroundColor = temp;
}