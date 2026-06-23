// Lấy các phần tử từ HTML thông qua ID
const mainTitle = document.getElementById("main-title");
const welcomeText = document.getElementById("welcome-text");

// Kiểm tra xem các phần tử có tồn tại không trước khi thay đổi
if (mainTitle && welcomeText) {
    // Thay đổi nội dung bằng textContent
    mainTitle.textContent = "Ngoại Hạng Cafe - Nơi Sáng Tạo Bắt Đầu";
    welcomeText.textContent = "Chào mừng bạn! Nội dung này đã được cập nhật bởi JavaScript.";
    
    // Thêm một chút style nhẹ bằng JS để thấy sự thay đổi
    mainTitle.style.color = "#4a3728"; // Màu nâu Espresso
}
