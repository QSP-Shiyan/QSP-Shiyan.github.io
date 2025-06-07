// template.js - 修复版的模板加载函数

// 加载CSS样式
function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    document.head.appendChild(link);
}

// 创建页头元素
function createHeader() {
    const header = document.createElement('header');
    header.className = 'nav';
    header.innerHTML = `
        <a href="/"><img src="/images/logo.png" alt="校徽" class="logo"></a>
        <div class="nav-links">
            <a href="/" class="nav-link"><i class="fas fa-home"></i>首页</a>
            <a href="/news/index.html" class="nav-link"><i class="fas fa-newspaper"></i>校园新闻</a>
            <a href="/qsc/index.html" class="nav-link"><i class="fas fa-users"></i>鹊合组织</a>
            <a href="/notice/index.html" class="nav-link"><i class="fas fa-bullhorn"></i>鹊合公告</a>
        </div>
    `;
    return header;
}

// 创建页脚元素
function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-section">
                <h3>联系我们</h3>
                <p><i class="fas fa-building"></i> 总部：2024级36、37班</p>
                <p><i class="fab fa-qq"></i> 官Q：3583268240</p>
                <p><i class="fas fa-envelope"></i> 邮箱：3583268240@qq.com</p>
            </div>
            <div class="footer-section">
                <h3>快速链接</h3>
                <div class="footer-links">
                    <a href="http://sdshiyan.jinan-edu.cn" class="footer-link">
                        <i class="fas fa-globe"></i>省实验官网
                    </a>
                    <a href="/images/map.html" class="footer-link">
                        <i class="fas fa-map-marker-alt"></i>校区地图
                    </a>
                    <a href="/qsc/eng.html" class="footer-link">
                        <i class="fas fa-bookmark"></i>占位
                    </a>
                </div>
            </div>
        </div>
    `;
    return footer;
}

// 创建返回首页按钮
function createBackToHome() {
    const backBtn = document.createElement('a');
    backBtn.className = 'back-home-btn';
    backBtn.title = '返回首页';
    backBtn.innerHTML = '<i class="fas fa-home"></i>';
    backBtn.href = '/';
    return backBtn;
}

// 加载全部模板元素
function loadAllTemplates() {
    // 加载CSS样式
    loadCSS('/css/style.css');
    
    // 在body开始处插入导航栏
    document.addEventListener('DOMContentLoaded', function() {
        const header = createHeader();
        document.body.insertBefore(header, document.body.firstChild);
    });
    
    // 在body结束前插入页脚和返回按钮
    document.addEventListener('DOMContentLoaded', function() {
        const footer = createFooter();
        const backBtn = createBackToHome();
        
        // 先添加页脚
        document.body.appendChild(footer);
        
        // 再添加返回按钮，确保它在页脚上方
        document.body.appendChild(backBtn);
    });
}
