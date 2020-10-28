let Path='./img/'; /* det er vejen til at få billederne ind */
let ImgAry= new Array ('img1.png', 'img2.png', 'img3.png', 'img4.jpg', 'im5.png'); /* her er variablen med all billederne */

function swap(obj,id) {
    let i=obj.selectedIndex;
    if (i<0) { return; }
    document.getElementById(id).src=Path+ImgAry[i];
}