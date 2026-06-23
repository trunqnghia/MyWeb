/* ==========================================================================
   BÀI TẬP 1: ĐỔI TIÊU ĐỀ & LỜI CHÀO KHI TẢI TRANG
   (Giữ nguyên HTML gốc: dùng ID "main-title" và Class "intro")
   ========================================================================== */
// Sử dụng querySelector để nhắm trúng thẻ h1 có id là main-title nằm trong hero
const mainTitle = document.querySelector("#hero #main-title");
// Nhắm trúng thẻ p có class là intro nằm trong hero
const welcomeText = document.querySelector("#hero .intro");

if (mainTitle && welcomeText) {
    // Đổi nội dung theo chủ đề Cà phê & Chữa lành
    mainTitle.textContent = "Ngoại Hạng Cafe & Góc Chữa Lành";
    welcomeText.textContent = "Chào bạn! Đây là không gian nhỏ mình dùng JavaScript để kích hoạt. Hãy cùng mình khám phá những góc quán cà phê trốn deadline cực chill nhé!";
    
    console.log("Bài 1: Đã cập nhật tiêu đề và lời chào thành công!");
}


/* ==========================================================================
   BÀI TẬP 2: XỬ LÝ SỰ KIỆN CLICK CHO NÚT BẤM
   (Giữ nguyên HTML gốc: chọn nút qua class "primary-button" trong hero)
   ========================================================================== */
// Nhắm trúng nút "Khám phá chủ đề" trong phần hero
const helloBtn = document.querySelector("#hero .primary-button");

if (helloBtn) {
    // Vì HTML gốc không có thẻ p id="helloResult", JS sẽ tự động tạo ra một thẻ 
    // và chèn nó ngay dưới nút bấm khi trang web được tải.
    const helloResult = document.createElement("p");
    
    // Định dạng một chút cho vùng hiển thị kết quả bằng JS (cho đẹp và hợp giao diện)
    helloResult.style.marginTop = "15px";
    helloResult.style.fontWeight = "bold";
    helloResult.style.color = "var(--accent-color)";
    helloResult.style.minHeight = "24px";
    
    // Chèn vùng kết quả này vào ngay sau nút bấm trong cấu trúc giao diện
    helloBtn.parentNode.insertBefore(helloResult, helloBtn.nextSibling);

    // Lắng nghe sự kiện Click vào nút
    helloBtn.addEventListener("click", function (event) {
        // Ngăn chặn hành vi cuộn trang mặc định của thẻ liên kết <a>
        event.preventDefault(); 
        
        // Hiển thị thông điệp chữa lành ngay trên trang
        helloResult.textContent = "☕ Chúc bạn một ngày ngập tràn ý tưởng mới và chạy deadline thật mượt mà tại Ngoại Hạng Cafe!";
        
        console.log("Bài 2: Người dùng đã click nhận thông điệp!");
    });
} else {
    console.error("Không tìm thấy nút bấm trong phần Hero.");
}
