$(document).ready(function () {
    $("#gio-hang").on("click", function () {
        $("#myModal").modal("show");
    });

    var i = 0;

    var txt_sp = $(".ten-sp");
    var txt_gia = $(".gia-sp");

    function themSanPham(tenSanPham, gia) {
        var hangMoi = "<tr><td>" + i++ + "</td><td>" + tenSanPham + "</td><td>" + gia + "</td></tr>";
        $("#cart-body").append(hangMoi);
    }

    function hienThiTongTien() {
        var tongTien = 0;
        // Lặp qua từng hàng trong bảng giỏ hàng
        $("#cart-body tr").each(function() {
            var giaSanPham = parseFloat($(this).find("td").eq(2).text().replace("$", ""));
            if (!isNaN(giaSanPham)) {
                tongTien += giaSanPham;
            }
        });

        var tongTienHTML = '<tr id="total-row"><td colspan="2"><strong>Tổng tiền</strong></td><td id="total-price">' + tongTien + ' Triệu VNĐ</td></tr>';
        // Xóa bất kỳ hàng tổng tiền nào đã tồn tại trước đó
        $("#total-row").remove();
        // Thêm hàng tổng tiền vào cuối bảng
        $("#cart-body").append(tongTienHTML);
    }

    // Xử lý khi click vào nút Thêm giỏ hàng
    $(".them-vao-gio-hang").click(function() {
        var card = $(this).closest(".card");
        var tenSanPham = card.find(".card-title h5").text();
        var giaSanPham = card.find(".card-text strong").text();

        var xacNhan = confirm("Bạn có muốn thêm sản phẩm này vào giỏ hàng không?");
        if (xacNhan) {
            themSanPham(tenSanPham, giaSanPham);
            hienThiTongTien();
            alert("Thêm vào giỏ hàng thành công. Vui lòng kiểm tra giỏ hàng.");
        }
    });

    // Xử lý khi click vào nút đóng modal
    $(".close").click(function() {
        $("#myModal").modal("hide");
    });
});
