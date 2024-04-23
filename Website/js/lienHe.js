$(document).ready(function () {
    var txt_hoten = $("#txt-hoten");
    var txt_tb_hovaten = $("#tb-hoten");

    function ktHoVaTen () {
        var kt_hvt = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/; 
        if(txt_hoten.val() == "") {
            txt_tb_hovaten.html("* Bạn chưa nhập họ và tên!");
            return false;
        } else if(!kt_hvt.test(txt_hoten.val())) {
            txt_tb_hovaten.html("* Chữ cái đầu phải là chữ hoa, vui lòng nhập lại!");
            return false;
        } else {
            txt_tb_hovaten.html("*");
            return true;
        }
    }

    txt_hoten.blur(ktHoVaTen);

    var txt_sdt = $("#txt-sdt");
    var tb_sdt = $("#tb-sdt");

    function ktSDT() {
        var cuPhap = /^\d{3}\.\d{4}\.\d{3}$/
        if(txt_sdt.val() == "") {
            tb_sdt.html("* Bạn chưa nhập số điện thoại!");
            return false;
        } else if(!cuPhap.test(txt_sdt.val())) {
            tb_sdt.html("* Số điện thoại phải theo định dạng: xxx.xxxx.xxx");
            return false;
        } else {
            tb_sdt.html("*");
            return true;
        }
    }

    txt_sdt.blur(ktSDT);

    var txt_email = $("#txt-email");
    var tb_email = $("#tb-email");

    function ktEmail() {
        var cuPhap = /^[\w-\.]+@[\w-]+\.[\w-]{2,4}$/;
        if(txt_email.val() == "") {
            tb_email.html("* Bạn chưa nhập email!");
            return false;
        } else if(!cuPhap.test(txt_email.val())) {
            tb_email.html("* Email sai cú pháp, vui lòng nhập lại!");
            return false
        } else {
            tb_email.html("*");
            return true;
        }
    }

    txt_email.blur(ktEmail);

    var txt_noiDung = $("#txt-nd");
    var tb_noiDung = $("#tb-nd");

    function ktNoiDung() {
        if(txt_noiDung.val() == "") {
            tb_noiDung.html("* Bạn chưa nhập nội dung!");
            return false;
        } else {
            tb_noiDung.html("*");
            return true;
        }
    }

    txt_noiDung.blur(ktNoiDung);

    $("#save").on("click", function() {
        if(ktHoVaTen() && ktSDT() && ktNoiDung() && ktEmail()) {
            alert("Gửi thông tin thành công, cảm ơn bạn đã góp ý!");
        } else {
            alert("Bạn chưa nhập đầy đủ thông tin!");
        }
    });
});