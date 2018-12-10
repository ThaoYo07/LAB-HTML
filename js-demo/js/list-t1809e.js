// 1. Set font size cho tất cả các thẻ li thành 23px;
var listli = document.getElementsByTagName("li");
for (var i = 0; i < listli.length; i++) {
    listli[i].style = "font-size: 23px";
}
// 2. Chuyển tất cả các học sinh nữ thành màu hồng.
var listStudentGirl = document.getElementsByClassName("hs-nu");
for (var i = 0; i < listStudentGirl.length; i++) {
    listStudentGirl[i].style = "color: pink; font-size: 23px";
}
// 3. Chuyển tất cả các học sinh nam thành màu xanh.
var listStudentBoy = document.getElementsByClassName("hs-nam");
for (var i = 0; i < listStudentBoy.length; i++) {
    listStudentBoy[i].style = "color: green; font-size: 23px";
}
// 4. Chuyển tên "Đỗ Quốc Vương" thành màu đỏ.
var doQuocVuong = document.getElementById("do-quoc-vuong");
doQuocVuong.style = "color: red; font-size: 23px";
// 5. Chuyển tên tất cả các bạn chưa hiểu rõ thành màu cam.
var listDoNotUnderstand = document.getElementsByClassName("chua-hieu-ro");
for (var i = 0; i < listDoNotUnderstand.length; i++) {
    listDoNotUnderstand[i].style = "color:orange; font-size:23px";
}
// 6. Chuyển tên tất cả các bạn đến muộn thành màu tím.
var listComeLate = document.querySelectorAll("[title='den-muon']");
for (var i = 0; i < listComeLate.length; i++) {
    //đổi tên title.
    listComeLate[i].title = "ting-ting-ting";
    listComeLate[i].style = "color: violet; font-size: 23px";
}