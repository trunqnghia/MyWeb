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
/* ==========================================================================
   BÀI TẬP 3: TÍNH NĂNG ẨN/HIỆN NỘI DUNG (TOGGLE CONTENT)
   (Giữ nguyên 100% HTML & CSS gốc)
   ========================================================================== */

// 1. Tìm khối nội dung giới thiệu (Khối #story của bạn)
const aboutContent = document.getElementById("story");

if (aboutContent) {
  // Đồng bộ ID thành aboutContent cho đúng yêu cầu đề bài bằng JS
  aboutContent.id = "aboutContent";

  // 2. Tạo nút bấm bằng JS vì HTML không có sẵn nút này
  const toggleAboutBtn = document.createElement("button");
  toggleAboutBtn.id = "toggleAboutBtn";
  toggleAboutBtn.textContent = "Thu gọn nội dung giới thiệu";
  
  // Tận dụng class nút bấm màu đỏ (.primary-button) có sẵn trong CSS của bạn
  toggleAboutBtn.className = "primary-button"; 
  toggleAboutBtn.style.marginTop = "20px";
  toggleAboutBtn.style.cursor = "pointer";
  toggleAboutBtn.style.border = "none"; // Xóa viền mặc định của thẻ button

  // 3. Chèn nút bấm này vào ngay dưới khối nội dung giới thiệu
  aboutContent.parentNode.insertBefore(toggleAboutBtn, aboutContent.nextSibling);

  // 4. Lắng nghe sự kiện click để ẩn / hiện
  toggleAboutBtn.addEventListener("click", function () {
    
    // Kiểm tra trạng thái hiển thị hiện tại của khối nội dung
    if (aboutContent.style.display === "none") {
      // Nếu đang ẩn thì hiện lại (trả về trạng thái mặc định)
      aboutContent.style.display = "";
      toggleAboutBtn.textContent = "Thu gọn nội dung giới thiệu";
      console.log("Bài 3: Đã hiện nội dung giới thiệu");
    } else {
      // Nếu đang hiện thì ẩn đi bằng cách gán thẳng style display = none
      aboutContent.style.display = "none";
      toggleAboutBtn.textContent = "Xem thêm nội dung giới thiệu";
      console.log("Bài 3: Đã ẩn nội dung giới thiệu");
    }
  });

} else {
  console.error("Không tìm thấy khối nội dung có id='story' để thực hiện Bài 3.");
}
/* ==========================================================================
   BÀI TẬP 4: TỰ ĐỘNG KÍCH HOẠT RESPONSIVE MENU (TOGGLE MENU)
   (Giữ nguyên 100% HTML & CSS gốc)
   ========================================================================== */

// 1. Tìm thanh điều hướng có sẵn trong HTML gốc của bạn
const mainMenu = document.querySelector(".main-nav");
const header = document.querySelector(".site-header");

if (mainMenu && header) {
  // Đồng bộ ID thành mainMenu cho đúng yêu cầu đề bài bằng JS
  mainMenu.id = "mainMenu";

  // 2. Tạo nút bấm Menu Hamburger (☰ Menu) bằng JS vì HTML không có sẵn
  const menuToggle = document.createElement("button");
  menuToggle.id = "menuToggle";
  menuToggle.innerHTML = "☰ Menu";
  
  // Định dạng phong cách cho nút Menu trông thật "chữa lành" và đồng bộ với Header
  menuToggle.style.padding = "8px 15px";
  menuToggle.style.backgroundColor = "var(--primary-color)";
  menuToggle.style.color = "#FFFFFF";
  menuToggle.style.border = "none";
  menuToggle.style.borderRadius = "4px";
  menuToggle.style.fontWeight = "bold";
  menuToggle.style.cursor = "pointer";
  menuToggle.style.fontSize = "14px";
  menuToggle.style.display = "none"; // Mặc định ẩn trên máy tính, chỉ hiện trên di động

  // Chèn nút bấm Menu vào trong Header, ngay trước thanh Menu chính
  header.insertBefore(menuToggle, mainMenu);

  // 3. Tự động chèn các thuộc tính CSS Responsive trực tiếp bằng JS
  // Đoạn code này giả lập lại việc viết Media Queries trong CSS giúp ẩn/hiện menu mượt mà
  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
    @media (max-width: 768px) {
      #menuToggle {
        display: block !important; /* Hiện nút bấm trên điện thoại */
      }
      #mainMenu {
        display: none; /* Mặc định ẩn menu trên điện thoại */
        flex-direction: column;
        position: absolute;
        top: 75px;
        left: 0;
        width: 100%;
        background-color: var(--section-bg);
        padding: 20px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        border-bottom: 2px solid var(--primary-color);
        z-index: 1000;
      }
      #mainMenu.active {
        display: flex !important; /* Khớp với class .active để mở menu */
      }
      #mainMenu a {
        margin: 10px 0 !important;
        padding-left: 20px;
      }
    }
  `;
  document.head.appendChild(styleTag);

  // 4. Lắng nghe sự kiện Click vào nút menuToggle
  menuToggle.addEventListener("click", function () {
    // Thêm/Xóa class "active" cho thanh menu
    mainMenu.classList.toggle("active");

    // PHẦN MỞ RỘNG: Đổi chữ nút từ "☰ Menu" sang "✕ Đóng"
    if (mainMenu.classList.contains("active")) {
      menuToggle.innerHTML = "✕ Đóng";
    } else {
      menuToggle.innerHTML = "☰ Menu";
    }
    console.log("Bài 4: Đã đóng/mở menu");
  });

  // PHẦN MỞ RỘNG NÂNG CAO: Khi bấm vào một liên kết bất kỳ, tự động đóng menu luôn
  const menuLinks = mainMenu.querySelectorAll("a");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mainMenu.classList.remove("active"); // Gỡ bỏ class active để ẩn menu đi
      menuToggle.innerHTML = "☰ Menu"; // Trả lại chữ cho nút bấm
    });
  });

} else {
  console.error("Không tìm thấy thanh điều hướng để thực hiện Bài 4.");
}
