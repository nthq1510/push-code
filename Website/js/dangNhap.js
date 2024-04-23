$(document).ready(function () {
    $("#btn-dn").on("click", function() {
        $("#my-modal-dn").modal();
    });

    var txt_dn = $("#txt-tdn");
    var tb_dn = $("#tb-tdn");

    function kiemTraTDN() {
        var kt_tdn = /^[0-9]{10}$/;
        if(txt_dn.val() == "") {
            tb_dn.html("* Bạn chưa nhập tên đăng nhập (số điện thoại)!");
            return false;
        }
        if(!kt_tdn.test(txt_dn.val())) {
            tb_dn.html("* Tên đăng nhập là số điện thoại (gồm 10 chữ số)!");
            return false;
        }
        tb_dn.html("*");
        return true;
    }

    txt_dn.blur(kiemTraTDN);

    var txt_mk = $("#txt-mk");
    var tb_mk = $("#tb-mk");

    function kiemTraMK() {
        var kt_mk = /^[a-zA-Z0-9_-]{3,16}$/;
        if(txt_mk.val() == "") {
            tb_mk.html("* Bạn chưa nhập mật khẩu!");
            return false;
        }
        if(!kt_mk.test(txt_mk.val())) {
            tb_mk.html("* Mật khẩu gồm các chữ thường, in hoa, số từ 0-9");
            return false;
        }
        tb_mk.html("*");
        return true;
    }

    txt_mk.blur(kiemTraMK);

});
