let title=document.querySelector('#status')
let turn='x';



function game (id) {

    let element= document.getElementById(id)
    if (turn==='x' && element.innerHTML=='') {
element.innerHTML='X';
turn='o'
title.innerHTML='Torn jugador O'
        }
 else if (turn==='o' && element.innerHTML=='') {
    element.innerHTML='O'
    turn='x';
    title.innerHTML='Torn jugador X'

 }

}
