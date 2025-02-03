document.addEventListener('DOMContentLoaded', function() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
    
        portfolioItems.forEach(item => {
            const caption = item.querySelector('.caption');
            const title = item.querySelector('.title');
            const body = item.querySelector('.body');
            const footer = item.querySelector('.footer');
    
            item.addEventListener('mouseleave', function() {
                // 依次渐出
                title.style.transitionDelay = '0.3s';
                body.style.transitionDelay = '0.2s';
                footer.style.transitionDelay = '0.1s';
                
                title.style.opacity = '0';
                title.style.transform = 'translateY(10px)';
                body.style.opacity = '0';
                body.style.transform = 'translateY(10px)';
                footer.style.opacity = '0';
                footer.style.transform = 'translateY(10px)';
                
                // 监听最后一个元素（footer）动画结束后隐藏 caption
                footer.addEventListener('transitionend', function hideCaption() {
                    caption.style.opacity = '0';
                    caption.style.transition = 'opacity 0.3s ease';
                    footer.removeEventListener('transitionend', hideCaption);
                });
            });
    
            item.addEventListener('mouseenter', function() {
                // 先显示 caption
                caption.style.opacity = '1';
                
                // 重置透明度和位移
                title.style.transitionDelay = '0.1s';
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
                
                body.style.transitionDelay = '0.2s';
                body.style.opacity = '1';
                body.style.transform = 'translateY(0)';
                
                footer.style.transitionDelay = '0.3s';
                footer.style.opacity = '1';
                footer.style.transform = 'translateY(0)';
            });
        });
    });