//helper function to sanitize input
let sanitize_input = (normal, dirty) => `${normal[0]}${DOMPurify.sanitize(dirty)}`;

//show alert dialog window
document.querySelector('#alt').addEventListener('click', function(){
  document.querySelector('#d_alt').showModal();
});

//comfirm window and two buttom
document.querySelector('#cfm').addEventListener('click', function(){
  document.querySelector('#d_cfm').showModal();
});

document.querySelector('#cfm_confirm').addEventListener('click', function(){
  document.querySelector('output').innerHTML = 'Confirm result: true';
});

document.querySelector('#cfm_cancel').addEventListener('click', function(){
  document.querySelector('output').innerHTML = 'Confirm result: false';
});


//show prompt window
document.querySelector('#ppt').addEventListener('click', function(){
  document.querySelector('#d_ppt').showModal();
});

//store prompted input to varible
let ppt_input;

document.querySelector('#ppt_input').addEventListener('input', function(){
  ppt_input=this.value;
});

document.querySelector('#ppt_confirm').addEventListener('click', function(){
  document.querySelector('output').innerHTML = sanitize_input`Prompted result: ${ppt_input}`;
});

document.querySelector('#ppt_cancel').addEventListener('click', function(){
  document.querySelector('output').innerHTML = 'User canceled';
});