let map;

function initMap() {
    // Визначення початкових координат (Рим)
    const defaultLocation = { lat: 41.9028, lng: 12.4964 };
    
    // Ініціалізація карти
    map = new google.maps.Map(document.getElementById("map"), {
        center: defaultLocation,
        zoom: 12,
    });

    // Отримання геолокації користувача
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                // Додавання маркера на карту
                const marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    title: "Ви тут!",
                });

                // Центрування карти на поточних координатах
                map.setCenter(pos);

                // Відображення інформації у pop-up
                const infoWindow = new google.maps.InfoWindow({
                    content: `<h3>Ваше місцезнаходження:</h3>
                              <p>Широта: ${pos.lat}</p>
                              <p>Довгота: ${pos.lng}</p>`,
                });
                marker.addListener("click", () => {
                    infoWindow.open(map, marker);
                });
            },
            () => {
                handleLocationError(true, map.getCenter());
            }
        );
    } else {
        // Браузер не підтримує геолокацію
        handleLocationError(false, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, pos) {
    const infoWindow = new google.maps.InfoWindow({
        position: pos,
    });

    infoWindow.setContent(
        browserHasGeolocation
            ? "Помилка: Геолокацію не вдалося отримати."
            : "Помилка: Ваш браузер не підтримує геолокацію."
    );
    infoWindow.open(map);
}
