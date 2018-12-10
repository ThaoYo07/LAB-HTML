// var arraySongs = [
//     {
//         thumbnail: 'http://hinhdep.com.vn/wp-content/uploads/2012/10/sen-trang-tinh-khoi.jpg',
//         name: 'Lạ lùng',
//         singer: 'Vũ',
//         author: 'Vũ',
//         link: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui935/LaLung-Vu-4749614.mp3',
//     },
//     {
//         thumbnail: 'http://hinhdep.com.vn/wp-content/uploads/2012/10/sen-trang-tinh-khoi.jpg',
//         name: 'Em dễ thương Anh đẹp trai',
//         singer: 'Vương Tử Văn',
//         author: 'Vương Tử Văn',
//         link: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui942/EmDeThuongAnhDepTrai-VuongTuVan-4988416_hq.mp3',
//     },
//     {
//         thumbnail: 'http://hinhdep.com.vn/wp-content/uploads/2012/10/sen-trang-tinh-khoi.jpg',
//         name: 'Thầy đừng lo nữa',
//         singer: 'Trung Quân Idol',
//         author: 'Tiên Cookie',
//         link: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui971/ThayDungLoNua-TrungQuanIdol-5749742.mp3',
//     },
//     {
//         thumbnail: 'http://hinhdep.com.vn/wp-content/uploads/2012/10/sen-trang-tinh-khoi.jpg',
//         name: 'Thầy ơi',
//         singer: 'Hoàng Nghi Lâm',
//         author: 'Hoàng Nghi Lâm',
//         link: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui239/ThayOi-HoangNghiLam_4cfph.mp3',
//     },
//     {
//         thumbnail: 'http://hinhdep.com.vn/wp-content/uploads/2012/10/sen-trang-tinh-khoi.jpg',
//         name: 'Giấc mơ màu mực tím',
//         singer: 'Miu Lê',
//         author: 'Miu Lê',
//         link: 'https://c1-ex-swe.nixcdn.com/NhacCuaTui792/BaiThoMauMucTim-MiuLe_4d5pk.mp3',
//     },
// ];

// document.getElementById('load-more').onclick = function () {
// var name = document.forms['song-form']['name'].value;
// var thumbnail = document.forms['song-form']['thumbnail'].value;
// var singer = document.forms['song-form']['singer'].value;
// var author = document.forms['song-form']['author'].value;
// var link = document.forms['song-form']['link'].value;
// // var song = {
// // thumbnail: 'http://hinhdep.com.vn/wp-content/uploads/2012/10/sen-trang-tinh-khoi.jpg',
// // name: 'Lạ lùng',
// // singer: 'Vũ',
// // author: 'Chưa rõ',
// // link: 'https://vnno-vn-5-tf-mp3-s1-zmp3.zadn.vn/d3d79e407004995ac015/188965803224885182?authen=exp=1536650251~acl=/d3d79e407004995ac015/*~hmac=a2fa53f8515411592a93fdb5ed5a7319&filename=La-Lung-Vu.mp3',
// // };
// var song = {
//     thumbnail: thumbnail,
//     name: name,
//     singer: singer,
//     author: author,
//     link: link,
// };
// loadSong();
// };

document.getElementById('load-more').onclick = function () {
    loadSong();
};

document.getElementById('save-song').onclick = function () {
    saveSong();
};

document.getElementById('login').onclick = function () {
    login();
};

document.querySelector("[name='btn-submit']").onclick = function () {
    register();
};

var btnSubmit = document.forms['register-form']['btn-submit'];
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
        // var birthday = document.forms['register-form']['birthday'].value;
        var birthday = '1995-07-07';
        var registerInfomation = {
            firstName: firstName,
            lastName: lastName,
            password: password,
            address: address,
            phone: phone,
            avatar: avatar,
            gender: gender,
            email: email,
            birthday: birthday,
        };
        var sendRegister = JSON.stringify(registerInfomation);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 201) {
                alert('Successful');
                document.forms['register-form'].reset();
            }
        };
        xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com/_api/v2/members', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(sendRegister);
    };
}

function login() {
    var email = document.forms['login-form']['email'].value;
    var password = document.form['login-form']['password'].value;

    var account = {
        email: email,
        password: password,
    };
    var sendAccount = JSON.stringify(account);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201){
            alert('Successful');
            document.forms['login-form'].reset();
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com//_api/v2/members/authentication', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(sendAccount);
}

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
        link: link,
    };
    var sendData = JSON.stringify(song);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            alert('Save song success!');
            document.forms['song-form'].reset();
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/post-free', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(sendData);
}

function playSong(link) {
    var audioPlayer = document.getElementsByTagName('audio')[0];
    audioPlayer.src = link;
    audioPlayer.play();
}

function loadSong() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200){
            alert('Everything is ok!');
            var arraySongs = JSON.parse(xhr.responseText);
            var htmlContent = '';
            for (var i = 0; i < arraySongs.length; i++) {
                var song = arraySongs[i];
                htmlContent += '<div class="song-item">';
                htmlContent += '<div class="song-index">' + (i + 1) + '</div>';
                htmlContent += '<div class="song-thumbnail">';
                htmlContent += '<img src=" ' + song.thumbnail + ' " alt="">';
                htmlContent += '</div>';
                htmlContent += '<div class="song-infor">';
                htmlContent += '<div class="song-name">' + song.name + '</div>';
                htmlContent += '<div class="song-singer">' + song.singer + '</div>';
                htmlContent += '</div>';
                // Style 1.
                htmlContent += '<div class="song-control" onclick="playSong(\'' + song.link + '\')">Play</div>';
                // Style 2.
                // htmlContent += `<div class="song-control" onclick="playSong('${arraySongs.link}')">Play</div>`;
                htmlContent += '<div class="song-control"><a href="#">Detail</a></div>';
                htmlContent += '</div>';
            }
            document.getElementById('list-song').innerHTML += htmlContent;
        }
    };
    xhr.open('GET', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs', true);
    xhr.send();
}