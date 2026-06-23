// Cấu hình thông tin website "Ngoại Hạng Cafe"
const webInfo = {
    tenWebsite: "Ngoại Hạng Cafe",
    chuDe: "Săn tìm góc quán trốn deadline & Chữa lành",
    soLuongAnh: 4, // Dựa trên số lượng trong portfolio-grid của bạn
    trangThaiHoanThanh: true
};

// Hàm hiển thị thông tin ra Console
function logWebsiteInfo() {
    console.log("--- THÔNG TIN WEBSITE: " + webInfo.tenWebsite.toUpperCase() + " ---");
    console.log("Chủ đề chính: " + webInfo.chuDe);
    console.log("Số lượng hình ảnh trong thư viện: " + webInfo.soLuongAnh);
    console.log("Trạng thái website: " + (webInfo.trangThaiHoanThanh ? "Đã hoàn thành và đang hoạt động" : "Đang phát triển"));
    
    // Kiểm tra xem tiêu đề có khớp không
    const mainTitle = document.getElementById("main-title").innerText;
    console.log("Tiêu đề chính trên trang: " + mainTitle);
}

// Chạy hàm
logWebsiteInfo();
