var btnSubmit = document.forms['song-form']['btn-submit'];
btnSubmit.onclick = function () {
    if (validateForm()) {
        saveSong();
    }
};

function saveSong() {
    var name = document.forms['song-form']['name'].value;
    var thumbnail = document.forms['song-form']['thumbnail'].value;
    var singer = document.forms['song-form']['singer'].value;
    var author = document.forms['song-form']['author'].value;
    var link = document.forms['song-form']['link'].value;

    var song = {
        thumbnail: thumbnail,
        name: name,
        singer: singer,
        author: author,
        link: link
    };
    var sendData = JSON.stringify(song);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            // var reponseData = JSON.parse(xhr.responseText);
            alert('Save song success!');
            document.forms['song-form'].reset();
        }
        // else if (xhr.readyState == 4){
        // var reponseData = JSON.parse(xhr.responseText);
        //     alert('Save song Fails, Please try again!' + xhr.responseText);
        // }
    };
    xhr.open('POST', 'https://2-dot-backup-server-001.appspot.com/_api/v2/songs', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('token-key'));
    xhr.send(sendData);
}

function validateForm() {
    var isValid = true;

    var isValidName = true;
    var txtName = document.forms['song-form']['name'];
    var msgName = txtName.nextElementSibling;
    if (txtName.value == null || txtName.value.length == 0) {
        msgName.classList.remove('msg-success');
        msgName.classList.add('msg-error');
        msgName.innerHTML = 'Password is required!';
        isValidName = false;
        // isValid = false;
        // return isValid;
    } else {
        msgName.classList.remove('msg-error');
        msgName.classList.add('msg-success');
        msgName.innerHTML = 'Ok!';
    }

    var isValidThumbnail = true;
    var txtThumbnail = document.forms['song-form']['thumbnail'];
    var msgThumbnail = txtThumbnail.nextElementSibling;
    if (txtThumbnail.value == null || txtThumbnail.value.length == 0) {
        msgThumbnail.classList.remove('msg-success');
        msgThumbnail.classList.add('msg-error');
        msgThumbnail.innerHTML = 'Password is required!';
        isValidThumbnail = false;
        // isValid = false;
        // return isValid;
    } else {
        msgThumbnail.classList.remove('msg-error');
        msgThumbnail.classList.add('msg-success');
        msgThumbnail.innerHTML = 'Ok!';
    }

    var isValidSinger = true;
    var txtSinger = document.forms['song-form']['singer'];
    var msgSinger = txtSinger.nextElementSibling;
    if (txtSinger.value == null || txtSinger.value.length == 0) {
        msgSinger.classList.remove('msg-success');
        msgSinger.classList.add('msg-error');
        msgSinger.innerHTML = 'Password is required!';
        isValidSinger = false;
        // isValid = false;
        // return isValid;
    } else {
        msgSinger.classList.remove('msg-error');
        msgSinger.classList.add('msg-success');
        msgSinger.innerHTML = 'Ok!';
    }

    var isValidAuthor = true;
    var txtAuthor = document.forms['song-form']['author'];
    var msgAuthor = txtAuthor.nextElementSibling;
    if (txtAuthor.value == null || txtAuthor.value.length == 0) {
        msgAuthor.classList.remove('msg-success');
        msgAuthor.classList.add('msg-error');
        msgAuthor.innerHTML = 'Password is required!';
        isValidAuthor = false;
        // isValid = false;
        // return isValid;
    } else {
        msgAuthor.classList.remove('msg-error');
        msgAuthor.classList.add('msg-success');
        msgAuthor.innerHTML = 'Ok!';
    }

    var isValidLink = true;
    var txtLink = document.forms['song-form']['link'];
    var msgLink = txtLink.nextElementSibling;
    if (txtLink.value == null || txtLink.value.length == 0) {
        msgLink.classList.remove('msg-success');
        msgLink.classList.add('msg-error');
        msgLink.innerHTML = 'Password is required!';
        isValidLink = false;
        // isValid = false;
        // return isValid;
    } else {
        msgLink.classList.remove('msg-error');
        msgLink.classList.add('msg-success');
        msgLink.innerHTML = 'Ok!';
    }

    isValid = isValidName && isValidThumbnail && isValidSinger && isValidAuthor && isValidLink;
    return isValid;
}