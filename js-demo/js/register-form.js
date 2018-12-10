// document.querySelector("[name='btn-submit']").onclick = function () {
//     register();
// };
// var btnSubmit = document.forms['register-form']['btn-submit'];
function register() {
    btnSubmit.onclick = function () {
        var firstName = document.forms['register-form']['firstName'].value;
        var lastName = document.forms['register-form']['lastName'].value;
        var password = document.forms['register-form']['password'].value;
        var address = document.forms['register-form']['address'].value;
        var phone = document.forms['register-form']['phone'].value;
        var avatar = document.forms['register-form']['avatar'].value;
        var gender = document.forms['register-form']['gender'].value;
        var email = document.forms['register-form']['email'].value;
        var birthday = document.forms['register-form']['birthday'].value;
        // var birthday = '1995-07-07';
        var registerInfomation = {
            firstName: firstName,
            lastName: lastName,
            password: password,
            address: address,
            phone: phone,
            avatar: avatar,
            gender: gender,
            email: email,
            birthday: birthday
        };
        var sendRegister = JSON.stringify(registerInfomation);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 201) {
                var reponseData = JSON.parse(xhr.responseText);
                alert('Successful' + reponseData.token);
                localStorage.setItem('token-key' + reponseData.token);
                document.forms['register-form'].reset();
            } else if (xhr.readyState == 4){
                var reponseData = JSON.parse(xhr.responseText);
                alert('Register Fails, Please try again!' + xhr.responseText);
            }
        };
        // true: gửi cùng 1 lúc khi để nhiều dòng xhr.open... .
        // false: gửi từng cái 1 khi để nhiều dòng xhr.open... .
        xhr.open('POST', 'https://2-dot-backup-server-001.appspot.com/_api/v2/members', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(sendRegister);
    };
}

// document.getElementById('id');
// document.getElementsByTagName('tag-name');
// document.getElementsByClassName('class-name');
// document.querySelector()
var btnSubmit = document.forms['register-form']['btn-submit'];
btnSubmit.onclick = function () {
    if (validateForm()) {
        // Gửi dữ liệu đi.
        register();
    }
};

// Kiểm tra dữ liệu người dùng trước khi gửi đi.
// Trả về true hoặc false.
function validateForm() {
    // Lưu trữ trạng thái validate của cả form.
    var isValid = true;
    // Lưu trữ trạng thái validate của first name.
    var isValidFirstName = true;
    // Lưu trữ trạng thái validate của last name.
    var isValidLastName = true;
    // Lưu trữ trạng thái validate của password.
    var isValidPassword = true;
    // Lưu trữ trạng thái validate của confirm password.
    var isValidConfirmPassword = true;
    // Lưu trữ trạng thái validate của address.
    var isValidAddress = true;
    // Lưu trữ trạng thái validate của phone.
    var isValidPhone = true;
    // Lưu trữ trạng thái validate của avatar.
    var isValidAvatar = true;
    // Lưu trữ trạng thái validate của gender.
    var isValidGender = true;
    // Lưu trữ trạng thái validate của email.
    var isValidEmail = true;
    // Lưu trữ trạng thái validate của birthday.
    var isValidBirthday = true;


    // Lấy ra input text có tên là 'firstName' nằm trong form 'register-form'.
    var txtFirstName = document.forms['register-form']['firstName'];
    // Lấy ra phần tử span nằm kế tiếp của txtFirstName. (dùng để hiển thị thông báo lỗi)
    var msgFirstName = txtFirstName.nextElementSibling;
    // Kiểm tra dữ liệu trong input txtFirstName. Nếu không có dữ liệu thì tạo thông báo lỗi.
    if (txtFirstName.value == null || txtFirstName.value.length == 0) {
        // Xoá class msg-success (chuyển chữ thành xanh) khỏi span thông báo lỗi (nếu có).
        msgFirstName.classList.remove('msg-success');
        // Thêm class msg-error (chuyển chữ thành màu đỏ)
        msgFirstName.classList.add('msg-error');
        // Chuyển nội dung text.
        msgFirstName.innerHTML = 'First name is required!';
        // Chuyển trạng thái validate của fistName thành false.
        isValidFirstName = false;
        // isValid = false;
        // return isValid;
    } else {
        msgFirstName.classList.remove('msg-error');
        msgFirstName.classList.add('msg-success');
        msgFirstName.innerHTML = 'Ok!';
    }

    var txtLastName = document.forms['register-form']['lastName'];
    var msgLastName = txtLastName.nextElementSibling;
    if (txtLastName.value == null || txtLastName.value.length == 0) {
        msgLastName.classList.remove('msg-success');
        msgLastName.classList.add('msg-error');
        msgLastName.innerHTML = 'Last name is required!';
        isValidLastName = false;
        // isValid = false;
        // return isValid;
    } else {
        msgLastName.classList.remove('msg-error');
        msgLastName.classList.add('msg-success');
        msgLastName.innerHTML = 'Ok!';
    }

    var pwdPassword = document.forms['register-form']['password'];
    var msgPassword = pwdPassword.nextElementSibling;
    if (pwdPassword.value == null || pwdPassword.value.length == 0) {
        msgPassword.classList.remove('msg-success');
        msgPassword.classList.add('msg-error');
        msgPassword.innerHTML = 'Password is required!';
        isValidPassword = false;
        // isValid = false;
        // return isValid;
    } else {
        msgPassword.classList.remove('msg-error');
        msgPassword.classList.add('msg-success');
        msgPassword.innerHTML = 'Ok!';
    }

    var pwdConfirmPassword = document.forms['register-form']['confirmPassword'];
    var msgConfirmPassword = pwdConfirmPassword.nextElementSibling;
    if (pwdConfirmPassword == null || pwdConfirmPassword.value.length == 0 || pwdConfirmPassword.value != pwdPassword.value) {
        msgConfirmPassword.classList.remove('msg-success');
        msgConfirmPassword.classList.add('msg-error');
        msgConfirmPassword.innerHTML = 'Confirm password doesn\'t match!';
        isValidConfirmPassword = false;
        // isValid = false;
        // return isValid;
    } else {
        msgConfirmPassword.classList.remove('msg-error');
        msgConfirmPassword.classList.add('msg-success');
        msgConfirmPassword.innerHTML = 'Ok!';
    }

    var txtAddress = document.forms['register-form']['address'];
    var msgAddress = txtAddress.nextElementSibling;
    if (txtAddress.value == null || txtAddress.value.length == 0) {
        msgAddress.classList.remove('msg-success');
        msgAddress.classList.add('msg-error');
        msgAddress.innerHTML = 'Address is missing!';
        isValidAddress = false;
        // isValid = false;
        // return isValid;
    } else {
        msgAddress.classList.remove('msg-error');
        msgAddress.classList.add('msg-success');
        msgAddress.innerHTML = 'Ok!';
    }

    var txtPhone = document.forms['register-form']['phone'];
    var msgPhone = txtPhone.nextElementSibling;
    if (txtPhone.value == null || txtPhone.value.length == 0) {
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Phone is missing!';
        isValidPhone = false;
        // isValid = false;
        // return isValid;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'Ok!';
    }

    var txtAvatar = document.forms['register-form']['avatar'];
    var msgAvatar = txtAvatar.nextElementSibling;
    if (txtAvatar.value == null || txtAvatar.value.length == 0) {
        msgAvatar.classList.remove('msg-success');
        msgAvatar.classList.add('msg-error');
        msgAvatar.innerHTML = 'You should add avatar!';
        isValidAvatar = false;
        // isValid = false;
        // return isValid;
    } else {
        msgAvatar.classList.remove('msg-error');
        msgAvatar.classList.add('msg-success');
        msgAvatar.innerHTML = 'Ok!';
    }

    var txtGender = document.forms['register-form']['gender'];
    var msgGender = txtGender.nextElementSibling;
    if (txtGender.value == null || txtGender.value.length == 0) {
        msgGender.classList.remove('msg-success');
        msgGender.classList.add('msg-error');
        msgGender.innerHTML = 'select your gender!';
        isValidGender = false;
        // isValid = false;
        // return isValid;
    } else {
        msgGender.classList.remove('msg-error');
        msgGender.classList.add('msg-success');
        msgGender.innerHTML = 'Ok!';
    }

    var txtEmail = document.forms['register-form']['email'];
    var msgEmail = txtEmail.nextElementSibling;
    if (txtEmail.value == null || txtEmail.value.length == 0) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email is required!';
        isValidEmail = false;
        // isValid = false;
        // return isValid;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Ok!';
    }

    var txtBirthday = document.forms['register-form']['birthday'];
    var msgBirthday = txtBirthday.nextElementSibling;
    if (txtBirthday.value == null || txtBirthday.value.length == 0) {
        msgBirthday.classList.remove('msg-success');
        msgBirthday.classList.add('msg-error');
        msgBirthday.innerHTML = 'Birthday is required!';
        isValidBirthday = false;
        // isValid = false;
        // return isValid;
    } else {
        msgBirthday.classList.remove('msg-error');
        msgBirthday.classList.add('msg-success');
        msgBirthday.innerHTML = 'Ok!';
    }

    isValid = isValidFirstName && isValidLastName && isValidPassword && isValidConfirmPassword && isValidAddress && isValidPhone && isValidAvatar && isValidGender && isValidEmail && isValidBirthday;
    return isValid;
}