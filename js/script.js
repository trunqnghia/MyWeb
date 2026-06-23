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
/* ==========================================================================
   BÀI TẬP 6: HỘP CHỌN CHỦ ĐỀ GIAO DIỆN (THEME SELECTOR)
   (Giữ nguyên 100% HTML & CSS gốc - Tự tạo Dropdown và inject CSS bằng JS)
   ========================================================================== */
const brandHeader = document.querySelector(".site-header .brand");

if (brandHeader) {
  // 1. Tự sinh khối chọn theme HTML
  const themeContainer = document.createElement("div");
  themeContainer.style.marginLeft = "20px";
  themeContainer.style.display = "inline-block";
  
  themeContainer.innerHTML = `
    <select id="themeSelect" style="padding: 6px 10px; border-radius: 4px; border: 1px solid var(--border-color); font-family: inherit; cursor: pointer;">
      <option value="">☕ Giao diện mặc định</option>
      <option value="dark-mode">🌙 Không gian tối</option>
      <option value="warm-mode">🪵 Không gian ấm</option>
    </select>
  `;
  
  // Chèn hộp chọn ngay sau tên thương hiệu "Ngoại Hạng Cafe"
  brandHeader.parentNode.insertBefore(themeContainer, brandHeader.nextSibling);

  // 2. Inject CSS của các Mode vào hệ thống để không cần sửa file CSS gốc
  const themeStyles = document.createElement("style");
  themeStyles.innerHTML = `
    body.dark-mode { background-color: #1a120b !important; color: #f5f5f5 !important; }
    body.dark-mode .site-header, body.dark-mode .hero, body.dark-mode .section { background-color: #261a11 !important; border-color: #3c2a21 !important; }
    body.dark-mode h1, body.dark-mode h2, body.dark-mode h3, body.dark-mode label { color: #f5ece3 !important; }
    body.dark-mode .feature-card { background-color: #1a120b !important; }
    body.dark-mode p, body.dark-mode li { color: #dddddd !important; }

    body.warm-mode { background-color: #fff7ed !important; color: #431407 !important; }
    body.warm-mode .site-header, body.warm-mode .hero, body.warm-mode .section { background-color: #ffedd5 !important; border-color: #fed7aa !important; }
    body.warm-mode h1, body.warm-mode h2, body.warm-mode h3 { color: #7c2d12 !important; }
    body.warm-mode .feature-card { background-color: #fff7ed !important; }
  `;
  document.head.appendChild(themeStyles);

  // 3. Xử lý sự kiện "change" thay đổi giao diện theo yêu cầu
  const themeSelect = document.getElementById("themeSelect");
  if (themeSelect) {
    themeSelect.addEventListener("change", function () {
      document.body.classList.remove("dark-mode", "warm-mode");
      if (themeSelect.value !== "") {
        document.body.classList.add(themeSelect.value);
      }
      console.log(`Bài 6: Đã chuyển đổi sang giao diện: ${themeSelect.value || "Mặc định"}`);
    });
  }
}

/* ==========================================================================
   BÀI TẬP 7 & 8: TÌM KIẾM NỘI DUNG & BỘ LỌC THƯ VIỆN ẢNH (SEARCH & FILTER)
   (Giữ nguyên 100% HTML & CSS gốc - Tự động thiết lập Data-Category cho ảnh)
   ========================================================================== */
const gallerySection = document.getElementById("portfolio");
const galleryGrid = document.querySelector(".portfolio-grid");

if (gallerySection && galleryGrid) {
  
  // --- BÀI TẬP 8: TẠO BỘ LỌC PHÂN LOẠI ẢNH (FILTER GALLERY) ---
  // Định nghĩa các danh mục thực tế dựa trên thứ tự 4 bức ảnh sẵn có trong HTML của bạn
  // Ảnh 1: Espresso (drink), Ảnh 2: Góc làm việc (space), Ảnh 3: Tổng quan (space), Ảnh 4: Capuccino (drink)
  const items = galleryGrid.querySelectorAll(".gallery-item");
  const categories = ["drink", "space", "space", "drink"];
  
  items.forEach((item, index) => {
    item.dataset.category = categories[index]; // Gán thuộc tính data-category tự động bằng JS
    item.classList.add("search-item");          // Tận dụng gán luôn class .search-item cho bài tập 7
  });

  // Tạo thanh công cụ chứa Nút lọc và Ô tìm kiếm đặt ngay trên lưới ảnh
  const filterAndSearchContainer = document.createElement("div");
  filterAndSearchContainer.style.cssText = "margin: 20px 0; display: flex; flex-wrap: wrap; gap: 15px; justify-content: space-between; align-items: center;";
  
  filterAndSearchContainer.innerHTML = `
    <div class="filter-group">
      <button class="filter-btn primary-button" data-filter="all" style="padding: 8px 16px; font-size:12px; margin-right:5px;">Tất cả</button>
      <button class="filter-btn primary-button" data-filter="drink" style="padding: 8px 16px; font-size:12px; margin-right:5px; background-color: var(--accent-color);">Đồ uống</button>
      <button class="filter-btn primary-button" data-filter="space" style="padding: 8px 16px; font-size:12px; background-color: var(--accent-color);">Không gian</button>
    </div>
    <div class="search-group">
      <input type="text" id="searchInput" placeholder="Tìm tên ảnh hoặc không gian..." style="padding: 10px 15px; width: 280px; border-radius: 6px; border: 1px solid var(--border-color); font-family:inherit; outline:none;">
    </div>
  `;
  
  // Chèn thanh công cụ vào phía trên Thư viện ảnh
  galleryGrid.parentNode.insertBefore(filterAndSearchContainer, galleryGrid);

  // LOGIC BÀI TẬP 8: Lọc ảnh theo danh mục (Click Button)
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(button => {
    button.addEventListener("click", function () {
      const filterValue = button.dataset.filter;
      
      items.forEach(item => {
        if (filterValue === "all" || item.dataset.category === filterValue) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
      console.log(`Bài 8: Đã lọc thư viện ảnh theo nhóm: ${filterValue}`);
    });
  });

  // LOGIC BÀI TẬP 7: Tìm kiếm theo từ khóa theo thời gian thực (keyup)
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const keyword = searchInput.value.toLowerCase().trim();
      
      items.forEach(item => {
        const figcaptionText = item.querySelector("
