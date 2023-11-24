const Cookie = document.getElementById('cookie');
        let isAnimating = false;

        Cookie.addEventListener('Click', () => {
            if (!isAnimating) {
                isAnimating = true;
                Cookie.style.height = '30%';
                
                setTimeout(() => {
                    isAnimating = false;
                    Cookie.style.transform = 'scale(25%)';
                }, 1000);
            }
        });