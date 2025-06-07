// template.js - 用于所有子页面引用的模板函数

// 加载CSS样式
function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    document.head.appendChild(link);
}

// 加载导航栏
function loadHeader() {
    const headerHTML = `
        <header class="nav">
            <a href="/"><img src="/images/logo.png" alt="校徽" class="logo"></a>
            <div class="nav-links">
                <a href="/" class="nav-link"><i class="fas fa-home"></i>首页</a>
                <a href="/news/index.html" class="nav-link"><i class="fas fa-newspaper"></i>校园新闻</a>
                <a href="/qsc/index.html" class="nav-link"><i class="fas fa-users"></i>鹊合组织</a>
                <a href="/notice/index.html" class="nav-link"><i class="fas fa-bullhorn"></i>鹊合公告</a>
            </div>
        </header>
    `;
    
    document.write(headerHTML);
}

// 加载页脚
function loadFooter() {
    const footerHTML = `
        <footer class="footer">
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
        </footer>
    `;
    
    document.write(footerHTML);
}

// 加载返回首页按钮
function loadBackToHome() {
    const backBtnHTML = `
        <a href="/" class="back-home-btn" title="返回首页">
            <i class="fas fa-home"></i>
        </a>
    `;
    
    document.write(backBtnHTML);
}

// 加载全部模板元素
function loadAllTemplates() {
    // 加载CSS样式
    loadCSS('/css/style.css');
    
    // 在body开始处插入导航栏
    document.addEventListener('DOMContentLoaded', function() {
        const navInsertPoint = document.body.insertBefore(
            document.createElement('div'), 
            document.body.firstChild
        );
        navInsertPoint.innerHTML = loadHeader();
        navInsertPoint.id = 'header-container';
    });
    
    // 在body结束前插入页脚和返回按钮
    document.addEventListener('DOMContentLoaded', function() {
        const footerInsertPoint = document.body.appendChild(
            document.createElement('div')
        );
        footerInsertPoint.innerHTML = loadFooter() + loadBackToHome();
        footerInsertPoint.id = 'footer-container';
    });
}
