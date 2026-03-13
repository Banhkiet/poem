// gửi chiều cao lên file cha mỗi khi nội dung thay đổi
function sendHeight() {
    const height = document.body.scrollHeight;
    window.parent.postMessage(height, "*");
}

// khi load xong
window.addEventListener("load", () => setTimeout(sendHeight, 100));
// khi resize
window.addEventListener("resize", sendHeight);

// theo dõi DOM nếu nội dung thay đổi
const observer = new MutationObserver(() => setTimeout(sendHeight, 50));
observer.observe(document.body, {childList:true, subtree:true});