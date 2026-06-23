/* ==========================================================================
   BÀI TẬP 1 & 2: TIÊU ĐỀ, LỜI CHÀO & SỰ KIỆN CLICK AN TOÀN
   (Giữ nguyên HTML gốc: Dùng querySelector để bắt chính xác thẻ)
   ========================================================================== */

const mainTitle = document.querySelector("#hero #main-title");
const welcomeText = document.querySelector("#hero .intro");

if (mainTitle && welcomeText) {
    mainTitle.textContent = "Ngoại Hạng Cafe & Góc Chữa Lành";
    welcomeText.textContent = "Chào bạn! Đây là không gian nhỏ mình dùng JavaScript để kích hoạt. Hãy cùng mình khám phá những góc quán cà phê trốn deadline cực chill nhé!";
    console.log("Bài 1: Đã cập nhật tiêu đề và lời chào thành công!");
}


const helloBtn = document.querySelector("#hero .primary-button");

if (helloBtn) {

    const helloResult = document.createElement("p");
    helloResult.id = "helloResult";
    helloResult.style.cssText = "margin-top: 15px; font-weight: bold; color: var(--accent-color); min-height: 24px;";
    helloBtn.parentNode.insertBefore(helloResult, helloBtn.nextSibling);

    helloBtn.addEventListener("click", function (event) {
        event.preventDefault(); 
        helloResult.textContent = "☕ Chúc bạn một ngày ngập tràn ý tưởng mới và chạy deadline thật mượt mà tại Ngoại Hạng Cafe!";
        console.log("Bài 2: Người dùng đã click nhận thông điệp!");
    });
}


/* ==========================================================================
   BÀI TẬP 3: TÍNH NĂNG ẨN/HIỆN NỘI DUNG (TOGGLE CONTENT)
   (Sử dụng style.display trực tiếp để không phụ thuộc vào file CSS)
   ========================================================================== */
const aboutContent = document.getElementById("story");

if (aboutContent) {
    aboutContent.id = "aboutContent";

    const toggleAboutBtn = document.createElement("button");
    toggleAboutBtn.id = "toggleAboutBtn";
    toggleAboutBtn.textContent = "Thu gọn nội dung giới thiệu";
    toggleAboutBtn.className = "primary-button"; 
    toggleAboutBtn.style.cssText = "margin-top: 20px; cursor: pointer; border: none;";

    aboutContent.parentNode.insertBefore(toggleAboutBtn, aboutContent.nextSibling);

    toggleAboutBtn.addEventListener("click", function () {
        if (aboutContent.style.display === "none") {
            aboutContent.style.display = "";
            toggleAboutBtn.textContent = "Thu gọn nội dung giới thiệu";
        } else {
            aboutContent.style.display = "none";
            toggleAboutBtn.textContent = "Xem thêm nội dung giới thiệu";
        }
        console.log("Bài 3: Đã thực hiện ẩn/hiện khối giới thiệu!");
    });
}


/* ==========================================================================
   BÀI TẬP 4: TỰ ĐỘNG KÍCH HOẠT RESPONSIVE MENU (TOGGLE MENU)
   (Giúp menu đóng/mở mượt mà trên giao diện điện thoại di động)
   ========================================================================== */
const mainMenu = document.querySelector(".main-nav");
const header = document.querySelector(".site-header");

if (mainMenu && header) {
    mainMenu.id = "mainMenu";
   
    const menuToggle = document.createElement("button");
    menuToggle.id = "menuToggle";
    menuToggle.innerHTML = "☰ Menu";
    menuToggle.style.cssText = "padding: 8px 15px; background-color: var(--primary-color); color: #FFFFFF; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 14px; display: none;";

    header.insertBefore(menuToggle, mainMenu);

    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
        @media (max-width: 768px) {
            #menuToggle { display: block !important; }
            #mainMenu {
                display: none; flex-direction: column; position: absolute; top: 75px; left: 0; width: 100%;
                background-color: var(--section-bg); padding: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);
                border-bottom: 2px solid var(--primary-color); z-index: 1000;
            }
            #mainMenu.active { display: flex !important; }
            #mainMenu a { margin: 10px 0 !important; padding-left: 20px; }
        }
    `;
    document.head.appendChild(styleTag);

    menuToggle.addEventListener("click", function () {
        mainMenu.classList.toggle("active");
        menuToggle.innerHTML = mainMenu.classList.contains("active") ? "✕ Đóng" : "☰ Menu";
    });

    mainMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            mainMenu.classList.remove("active");
            menuToggle.innerHTML = "☰ Menu";
        });
    });
}


/* ==========================================================================
   BÀI TẬP 6: HỘP CHỌN CHỦ ĐỀ GIAO DIỆN (THEME SELECTOR)
   (Tự động inject CSS Dark Mode và Warm Mode chuẩn màu cà phê)
   ========================================================================== */
const brandHeader = document.querySelector(".site-header .brand");

if (brandHeader) {
    const themeContainer = document.createElement("div");
    themeContainer.style.cssText = "margin-left: 20px; display: inline-block;";
    themeContainer.innerHTML = `
        <select id="themeSelect" style="padding: 6px 10px; border-radius: 4px; border: 1px solid var(--border-color); font-family: inherit; cursor: pointer;">
            <option value="">☕ Mặc định</option>
            <option value="dark-mode">🌙 Không gian tối</option>
            <option value="warm-mode">🪵 Không gian ấm</option>
        </select>
    `;
    brandHeader.parentNode.insertBefore(themeContainer, brandHeader.nextSibling);

    const themeStyles = document.createElement("style");
    themeStyles.innerHTML = `
        body.dark-mode { background-color: #1a120b !important; color: #f5f5f5 !important; }
        body.dark-mode .site-header, body.dark-mode .hero, body.dark-mode .section, body.dark-mode .contact-section { background-color: #261a11 !important; border-color: #3c2a21 !important; }
        body.dark-mode h1, body.dark-mode h2, body.dark-mode h3, body.dark-mode label { color: #f5ece3 !important; }
        body.dark-mode .feature-card { background-color: #1a120b !important; }
        body.dark-mode p, body.dark-mode li { color: #dddddd !important; }

        body.warm-mode { background-color: #fff7ed !important; color: #431407 !important; }
        body.warm-mode .site-header, body.warm-mode .hero, body.warm-mode .section, body.warm-mode .contact-section { background-color: #ffedd5 !important; border-color: #fed7aa !important; }
        body.warm-mode h1, body.warm-mode h2, body.warm-mode h3 { color: #7c2d12 !important; }
        body.warm-mode .feature-card { background-color: #fff7ed !important; }
    `;
    document.head.appendChild(themeStyles);

    const themeSelect = document.getElementById("themeSelect");
    if (themeSelect) {
        themeSelect.addEventListener("change", function () {
            document.body.classList.remove("dark-mode", "warm-mode");
            if (themeSelect.value !== "") {
                document.body.classList.add(themeSelect.value);
            }
        });
    }
}


/* ==========================================================================
   BÀI TẬP 7 & 8: TÌM KIẾM NỘI DUNG & BỘ LỌC THƯ VIỆN ẢNH (SEARCH & FILTER)
   ========================================================================== */
const galleryGrid = document.querySelector(".portfolio-grid");

if (galleryGrid) {
    const items = galleryGrid.querySelectorAll(".gallery-item");
    const categories = ["drink", "space", "space", "drink"];
    
    items.forEach((item, index) => {
        item.dataset.category = categories[index]; 
        item.classList.add("search-item");          
    });

    const filterAndSearchContainer = document.createElement("div");
    filterAndSearchContainer.style.cssText = "margin: 20px 0; display: flex; flex-wrap: wrap; gap: 15px; justify-content: space-between; align-items: center;";
    filterAndSearchContainer.innerHTML = `
        <div class="filter-group">
            <button class="filter-btn primary-button" data-filter="all" style="padding: 8px 16px; font-size:12px; margin-right:5px; border:none; cursor:pointer;">Tất cả</button>
            <button class="filter-btn primary-button" data-filter="drink" style="padding: 8px 16px; font-size:12px; margin-right:5px; background-color: var(--accent-color); border:none; cursor:pointer;">Đồ uống</button>
            <button class="filter-btn primary-button" data-filter="space" style="padding: 8px 16px; font-size:12px; background-color: var(--accent-color); border:none; cursor:pointer;">Không gian</button>
        </div>
        <div class="search-group">
            <input type="text" id="searchInput" placeholder="Tìm tên ảnh..." style="padding: 10px 15px; width: 250px; border-radius: 6px; border: 1px solid var(--border-color); font-family:inherit; outline:none;">
        </div>
    `;
    galleryGrid.parentNode.insertBefore(filterAndSearchContainer, galleryGrid);

    document.querySelectorAll(".filter-btn").forEach(button => {
        button.addEventListener("click", function () {
            const filterValue = button.dataset.filter;
            items.forEach(item => {
                item.style.display = (filterValue === "all" || item.dataset.category === filterValue) ? "" : "none";
            });
        });
    });

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("keyup", function () {
            const keyword = searchInput.value.toLowerCase().trim();
            items.forEach(item => {
                const figcaptionText = item.querySelector("figcaption") ? item.querySelector("figcaption").textContent.toLowerCase() : "";
                item.style.display = figcaptionText.includes(keyword) ? "" : "none";
            });
        });
    }
}


/* ==========================================================================
   BÀI TẬP 9: SỬA LỖI CHẶN TUYỆT ĐỐI TRÀN FORM (405 NOT ALLOWED FIX)
   ========================================================================== */
const contactFormRaw = document.querySelector(".contact-form");
const nameInputRaw = document.getElementById("name");
const emailInputRaw = document.getElementById("email");

if (contactFormRaw && nameInputRaw && emailInputRaw) {
    contactFormRaw.id = "contactForm";
    nameInputRaw.id = "fullName";
    
    const formMessage = document.createElement("div");
    formMessage.id = "formMessage";
    formMessage.style.cssText = "margin-bottom: 15px; font-weight: bold; font-size: 14px;";
    
    const submitBtn = contactFormRaw.querySelector("button[type='submit']");
    submitBtn.parentNode.insertBefore(formMessage, submitBtn);

    contactFormRaw.addEventListener("submit", function (event) {

        event.preventDefault(); 

        const nameValue = nameInputRaw.value.trim();
        const emailValue = emailInputRaw.value.trim();

        if (nameValue === "") {
            formMessage.textContent = "❌ Vui lòng nhập họ tên của bạn.";
            formMessage.style.color = "#dc2626";
            nameInputRaw.focus();
            return;
        }

        if (emailValue === "" || !emailValue.includes("@") || !emailValue.includes(".")) {
            formMessage.textContent = "❌ Vui lòng nhập địa chỉ email hợp lệ (Có dấu @ và dấu chấm).";
            formMessage.style.color = "#dc2626";
            emailInputRaw.focus();
            return;
        }

        formMessage.textContent = "✔️ Gửi thông điệp thành công! Cảm ơn bạn đã chia sẻ cùng Ngoại Hạng Cafe.";
        formMessage.style.color = "#16a34a";

        contactFormRaw.reset();
        console.log("Bài 9: Đã kiểm tra dữ liệu và chặn thành công lỗi 405!");
    });
}
