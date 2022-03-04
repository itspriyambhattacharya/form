let r_head = document.getElementById('registration-form-head')
let l_head = document.getElementById('login-form-head')

let b_register = document.getElementById('register-btn')
let b_login = document.getElementById('login-btn')

let login_p = document.getElementById('login-p')
let reg_p = document.getElementById('register-p')

let reg_span = document.getElementById('register-span')
let login_span = document.getElementById('login-span')

let select = document.getElementById('type_of_user')
let f_name = document.getElementById('f-name')
let c_f_password = document.getElementById('f-c-password')

reg_span.addEventListener('click', function (e) {
    document.title = "Registration Form"

    login_p.classList.remove('hidden')
    reg_p.classList.add('hidden')

    b_login.classList.add('hidden')
    b_register.classList.remove('hidden')

    l_head.classList.add('hidden')
    r_head.classList.remove('hidden')

    select.classList.remove('hidden')
    f_name.classList.remove('hidden')
    c_f_password.classList.remove('hidden')
})

login_span.addEventListener('click', function (e) {
    document.title = "Login Form"

    login_p.classList.add('hidden')
    reg_p.classList.remove('hidden')

    b_login.classList.remove('hidden')
    b_register.classList.add('hidden')

    l_head.classList.remove('hidden')
    r_head.classList.add('hidden')

    select.classList.add('hidden')
    f_name.classList.add('hidden')
    c_f_password.classList.add('hidden')
})


//Form Validation

const password = document.getElementById('pass-inp')
const c_password = document.getElementById('f-c-password')
console.log(password)
console.log(c_f_password)


const p_err_mes = document.getElementById('password-error')
let cp = 0;

password.addEventListener('focus', function (e) {
    cp++;
    if (cp > 1) {
        p_err_mes.classList.toggle('hidden')
    }
})

password.addEventListener('blur', function (e) {
    const p_data = password.value;
    let p_len = p_data.length;
    if (p_len < 8) {
        console.log("Password Should Be Greater than 8");
        p_err_mes.classList.toggle('hidden')
    }
    else
    {
        console.log("Ok Password")
    }
})