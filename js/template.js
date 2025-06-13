// 等待DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 加载header
    fetch('/header.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', html);
            // 初始化导航栏相关功能
            initNavigation();
        });
    
    // 加载footer
    fetch('/footer.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('body').insertAdjacentHTML('beforeend', html);
        });
    
    // 添加返回按钮
    const homeBtn = document.createElement('a');
    homeBtn.className = 'home-btn'; // 对应CSS类名
    homeBtn.href = './index.html'; // 跳转到列表路径
    homeBtn.innerHTML = '<i class="fas fa-home"></i>'; // 使用Font Awesome图标
    document.body.appendChild(homeBtn); // 插入到页面末尾
    });

// 导航栏初始化函数
function initNavigation() {
    const nav = document.getElementById('navLinks');
    if (!nav) return;
    
    const btn = document.querySelector('.menu-btn');
    if (!btn) return;
    
    const toggleMenu = () => {
        nav.classList.toggle('active');
        btn.textContent = nav.classList.contains('active') ? '×' : '☰';
    }
    
    btn.addEventListener('click', toggleMenu);
    
    document.addEventListener('click', e => {
        if (!e.target.closest('.nav') && nav.classList.contains('active')) toggleMenu();
    });
}
