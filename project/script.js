let input_div=null  //global variable
const red_block         =   document.getElementById('red_block');
const green_block       =   document.getElementById('green_block');
const blue_block        =   document.getElementById('blue_block');
const yellow_block      =   document.getElementById('yellow_block');

const input_user        =   document.getElementById('input_user');
const btn_add_user      =   document.getElementById('btn_add_user');
const btn_delete_user   =   document.getElementById('btn_delete_user');
const btn_move_to_red   =   document.getElementById('btn_move_to_red');
const btn_move_to_green =   document.getElementById('btn_move_to_green');
const btn_move_to_blue  =   document.getElementById('btn_move_to_blue');
const btn_move_to_yellow=   document.getElementById('btn_move_to_yellow');


btn_add_user.addEventListener("click",addUser)
btn_delete_user.addEventListener("click",deleteUser)
btn_move_to_red.addEventListener("click", moveToRed);
btn_move_to_green.addEventListener("click", moveToGreen);
btn_move_to_blue.addEventListener("click", moveToBlue);
btn_move_to_yellow.addEventListener("click", moveToYellow);

function addUser(){
    if(input_div==null){
        input_div=document.createElement('div')     //make a div element
        input_div.innerHTML=input_user.value        //store input value in the div element
        
        //add class for styling
        input_div.className='my_user'       //or: input_div.setAttribute('class','my_user')
        //add id for unique reference
        input_div.setAttribute('id','input_id')
        input_user.disabled=true
        btn_add_user.disabled=true
        btn_delete_user.disabled = false;
        red_block.append(input_div)
    }
}

function deleteUser(){
    if(input_div!=null){
        input_div.remove()
        input_user.disabled=false
        btn_add_user.disabled=false
        btn_delete_user.disabled = true;
        input_user.value=""
        input_div=null
    }
}

function moveToRed() {
    if(input_div != null)
        red_block.append(input_div);
}

function moveToGreen() {
    if(input_div != null)
        green_block.append(input_div);
}


function moveToBlue() {
    if(input_div != null)
        blue_block.append(input_div);
}

function moveToYellow() {
    if(input_div != null)
        yellow_block.append(input_div)
}