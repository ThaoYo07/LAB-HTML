function playSong(link) {
    var audioPlayer = document.getElementsByTagName('audio')[0];
    audioPlayer.src = link;
    audioPlayer.play();
}

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
            htmlContent += '<div class="song-control" onclick="playSong(\'' + song.link + '\')"><i class="far fa-play-circle fa-2x"></div>';
            // Style 2.
            // htmlContent += `<div class="song-control" onclick="playSong('${arraySongs.link}')">Play</div>`;
            htmlContent += '<div class="song-control"><a href="#"><i class="fas fa-info-circle fa-2x"></i></a></div>';
            htmlContent += '</div>';
        }
        document.getElementById('list-my-song').innerHTML += htmlContent;
    } else if (xhr.readyState == 4){
        alert('Fails. Please try again!');
    }
};
xhr.open('GET', 'https://2-dot-backup-server-001.appspot.com/_api/v2/songs/get-mine', true);
xhr.setRequestHeader('Authorization', 'Basic ' + localStorage.getItem('token-key'));
xhr.send();