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
        title: "Quê Hương",
        name: "ve_que",
        date: "01/08/2023",
        author: "Bành",
        category: "QUÊ HƯƠNG",
        type: "TỰ DO",
        content: "",  // Nội dung sẽ được lấy từ HTML
    }, 
    {
        title: "Đời Người",
        name: "doi_nguoi",
        date: "01/08/2023",
        author: "Bành",
        category: ["ĐỜI NGƯỜI", "TÌNH YÊU"],
        type: "LỤC BÁT",
        content: "",  // Nội dung sẽ được lấy từ HTML
    }, 
];

// Đảm bảo đường dẫn chính xác
poems.forEach(p => {
    p.file = `${basePath}${p.name}/index.html`; // Đảm bảo đường dẫn file HTML
    p.image = `${basePath}${p.name}/image.jpg`; // Đảm bảo đường dẫn file hình ảnh
    p.audioFile = `${basePath}${p.name}/audio.mp3`; // Đảm bảo đường dẫn file âm thanh
});