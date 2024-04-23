$(document).ready(function () {
    var txt_hoten = $("#txt-hoten");
    var txt_tb_hovaten = $("#txt-tb-hovaten");

    function ktHoVaTen () {
        var kt_hvt = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/; 
        if(txt_hoten.val() == "") {
            txt_tb_hovaten.html("* Bạn chưa nhập họ và tên!");
            return false;
        } else if(!kt_hvt.test(txt_hoten.val())) {
            txt_tb_hovaten.html("* Tên không hợp lệ, vui lòng nhập lại!");
            return false;
        } else {
            txt_tb_hovaten.html("*");
            return true;
        }
    }

    txt_hoten.blur(ktHoVaTen);

    var txt_email = $("#txt-email");
    var txt_tb_email = $("#txt-tb-email");

    function ktEmail () {
        var kt_email = /^[\w-\.]+@[\w-]+\.[\w-]{2,4}$/;
        if(txt_email.val() == "") {
            txt_tb_email.html("* Bạn chưa nhập email!");
            return false;
        } else if (!kt_email.test(txt_email.val())) {
            txt_tb_email.html("* Email không hợp lệ, vui lòng nhập lại!");
            return false;
        } else {
            txt_tb_email.html("*");
            return true;
        }
    }

    txt_email.blur(ktEmail);

    var txt_dn = $("#txt-sdt");
    var tb_dn = $("#txt-tb-sdt");

    function kiemTraTDN() {
        var kt_tdn = /^\d{3}\.\d{4}\.\d{3}$/;
        if(txt_dn.val() == "") {
            tb_dn.html("* Bạn chưa nhập tên đăng nhập (số điện thoại)!");
            return false;
        }
        if(!kt_tdn.test(txt_dn.val())) {
            tb_dn.html("* SĐT phải theo mẫu: xxx.xxxx.xxx");
            return false;
        }
        tb_dn.html("*");
        return true;
    }

    txt_dn.blur(kiemTraTDN);

    var txt_ns = $("#txt-ns");
    var txt_tb_ns = $("#txt-tb-ns");

    function ktNgaySinh() {
        var inputDate = new Date(txt_ns.val());
        var currentDate = new Date();
        var eighteenYearsAgo = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
    
        if (isNaN(inputDate.getTime())) {
            txt_tb_ns.html("* Ngày sinh không hợp lệ, vui lòng nhập lại!");
            return false;
        } else if (inputDate >= currentDate) {
            txt_tb_ns.html("* Ngày sinh không được lớn hơn hoặc bằng ngày hiện tại!");
            return false;
        } else if (inputDate > eighteenYearsAgo) {
            txt_tb_ns.html("* Bạn chưa đủ 18 tuổi!");
            return false;
        } else {
            txt_tb_ns.html("*");
            return true;
        }
    }    

    txt_ns.blur(ktNgaySinh);

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

    var txt_quocgia = $("#txt-quocgia");
    var tb_quocgia = $("#tb-quocgia");

    function kiemTraQG() {
        var kt_qg = /^[A-Za-z\s]+$/;
        if(txt_quocgia.val() == "") {
            tb_quocgia.html("* Bạn chưa nhập quốc gia!");
            return false;
        }
        if(!kt_qg.test(txt_quocgia.val())) {
            tb_quocgia.html("* Quốc gia sai!");
            return false;
        }
        tb_quocgia.html("*");
        return true;
    }

    txt_quocgia.blur(kiemTraQG);

    var txt_thanhpho = $("#txt-thanhpho");
    var tb_thanhpho = $("#tb-thanhpho");

    function kiemTraTP() {
        var kt_tp = /^[A-Za-z\s]+$/;
        if(txt_thanhpho.val() == "") {
            tb_thanhpho.html("* Bạn chưa nhập thành phố!");
            return false;
        }
        if(!kt_tp.test(txt_thanhpho.val())) {
            tb_thanhpho.html("* Thành phố sai!");
            return false;
        }
        tb_thanhpho.html("*");
        return true;
    }

    txt_thanhpho.blur(kiemTraTP);

    $("#save").click(function () {
        if (ktHoVaTen() && ktEmail() && kiemTraTDN() && ktNgaySinh() && kiemTraMK() && kiemTraQG() && kiemTraTP()) {
            var hoTen = txt_hoten.val();
            var email = txt_email.val();
            var sdt = txt_dn.val();
            var matKhau = txt_mk.val();
            var ngaySinh = txt_ns.val();
    
            var dongMoi = $("<tr></tr>");
            dongMoi.append("<td>" + hoTen + "</td>");
            dongMoi.append("<td>" + sdt + "</td>");
            dongMoi.append("<td>" + email + "</td>");
            dongMoi.append("<td>" + ngaySinh + "</td>");
            dongMoi.append("<td>" + matKhau + "</td>");
    
            $(".table tbody").append(dongMoi);
    
            txt_hoten.val("");
            txt_dn.val("");
            txt_email.val("");
            txt_mk.val("");
            txt_ns.val("");
            $("#thongbao").html("Đăng ký thành công!");
            alert("Đăng ký thành công!");
            return true;
        } else {
            $("#thongbao").html("Bạn phải nhập đầy đủ thông tin!");
        }
    });
    
});
