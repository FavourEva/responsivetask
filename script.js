const form = document.getElementById('form');
const fname = document.getElementById('first_name');
const fnameErr = document.getElementById('first_nameErr')
const lname = document.getElementById('last_name');
const lnameErr = document.getElementById('last_nameErr')
const email = document.getElementById('email');
const emailErr = document.getElementById('emailErr')
const pword = document.getElementById('password');
const pwordErr = document.getElementById('passwordErr')
const input = document.getElementsByTagName('input')



form.addEventListener('submit', (e) =>{

    e.preventDefault();
    changeClass()

});

function changeClass(){
    const fnameVal = fname.value.trim();
    const lnameVal = lname.value.trim();
    const emailVal = email.value.trim();
    const pwordVal = pword.value.trim();

    if (fnameVal == ""){
        fnameErr.className = 'show'
        input[0].className = 'empty'
        input[0].placeholder = ""

    } else{
        console.log(fnameVal)
    }
    if (lnameVal == ""){
        lnameErr.className = 'show'
        input[1].className = 'empty'
        input[1].placeholder = ""
    } 
    if (emailVal == ""){
        emailErr.className = 'show'
        input[2].className = 'empty'
        input[2].placeholder = ""
    } 
    if (pwordVal == ""){
        pwordErr.className = 'show'
        input[3].className = 'empty'
        input[3].placeholder = ""
    } 
   
}
