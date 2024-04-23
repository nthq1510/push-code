$(document).ready(function() {
    $("#cuocgoi").click(function() {
        var confirmCall = confirm("Bạn có muốn thực hiện cuộc gọi tới số 1900.0351 không?");
        if (confirmCall) {
            alert("Đang thực hiện cuộc gọi...");
        } else {
            alert("Hủy cuộc gọi.");
        }
    });
});