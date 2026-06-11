// index.js - Uzay Efektleri ve Etkileşimler

document.addEventListener("DOMContentLoaded", () => {
    const spaceBg = document.querySelector('.space-bg');

    // 100 adet rastgele yıldız oluşturuyoruz
    for (let i = 0; i < 100; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        
        // Yıldızların rastgele konumları ve boyutları
        let x = Math.random() * 100;
        let y = Math.random() * 100;
        let size = Math.random() * 2 + 1;
        
        // Yıldızların parıldama animasyonu için rastgele gecikme
        let delay = Math.random() * 5;
        let duration = Math.random() * 3 + 2;

        star.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background-color: white;
            border-radius: 50%;
            opacity: ${Math.random()};
            box-shadow: 0 0 ${size * 2}px white;
            animation: twinkle ${duration}s infinite ${delay}s alternate;
        `;

        spaceBg.appendChild(star);
    }
});
