document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});


AOS.init({
    duration: 1700, // Устанавливаем 2 секунды
});


document.addEventListener("DOMContentLoaded", () => {
    const serviceType = document.getElementById("service-type");
    const workVolume = document.getElementById("work-volume");
    const volumeValue = document.getElementById("volume-value");
    const totalPrice = document.getElementById("total-price");

    // Стоимость услуг
    const servicePrices = {
        "infographics": 500,
        "rich-content": 1000,
        "creative": 700,
        "infoslide": 400,
        "resize": 300
    };

    // Обновить отображение объема работы
    workVolume.addEventListener("input", () => {
        volumeValue.textContent = workVolume.value;
        calculatePrice();
    });

    // Обновить итоговую цену
    serviceType.addEventListener("change", calculatePrice);

    function calculatePrice() {
        const service = serviceType.value;
        const volume = parseInt(workVolume.value, 10);

        if (service && volume) {
            const pricePerUnit = servicePrices[service];
            const total = pricePerUnit * volume;
            totalPrice.textContent = total;
        } else {
            totalPrice.textContent = "0";
        }
    }
});

