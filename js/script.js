// Bước 1: Lấy các phần tử dựa trên ID đã thiết lập trong file HTML
const mainTitle = document.getElementById("mainTitle");
const welcomeText = document.getElementById("welcomeText");

// Bước 2: Kiểm tra điều kiện xem phần tử có tồn tại trên trang hay không
if (mainTitle && welcomeText) {
    
    // Bước 3: Đổi nội dung tiêu đề và lời chào phù hợp với chủ đề Ngoại Hạng Cafe
    mainTitle.textContent = "Ngoại Hạng Cafe & Góc Chữa Lành";
    
    welcomeText.textContent = "Chào bạn! Đây là không gian nhỏ mình dùng JavaScript để kích hoạt. Hãy cùng mình khám phá những góc quán cà phê trốn deadline cực chill nhé!";
    
    // Log thông báo ra Console để dễ kiểm tra quá trình chạy của JS
    console.log("JavaScript đã cập nhật nội dung thành công theo chủ đề Cà phê!");

} else {
    // Tránh lỗi thường gặp: hiển thị cảnh báo nếu viết sai chữ hoa/chữ thường ở ID
    console.error("Lỗi: Không tìm thấy ID 'mainTitle' hoặc 'welcomeText' trong HTML.");
}
