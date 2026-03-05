const basePath = "list_poem/";
const poems = [
    {
        title: "Mẹ Già",
        name: "me_gia",
        date: "12/05/2023",
        author: "Bành",
        category: ["GIA ĐÌNH", "QUÊ HƯƠNG"],
        type: "LỤC BÁT",
        content: "",  // Nội dung sẽ được lấy từ HTML
    },
    {
        title: "Nơi ấy trò có thầy",
        name: "nguyen_van_cu",
        date: "01/08/2023",
        author: "Bành",
        category: ["QUÊ HƯƠNG","HỌC TRÒ", "ĐỜI NGƯỜI"],
        type: "LỤC BÁT",
        content: "",  // Nội dung sẽ được lấy từ HTML
    }
];

// Đảm bảo đường dẫn chính xác
poems.forEach(p => {
    p.file = `${basePath}${p.name}/index.html`; // Đảm bảo đường dẫn file HTML
    p.image = `${basePath}${p.name}/image.jpg`; // Đảm bảo đường dẫn file hình ảnh
    p.audioFile = `${basePath}${p.name}/audio.mp3`; // Đảm bảo đường dẫn file âm thanh
});