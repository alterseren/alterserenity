let imagesArray = [
    {path: 'https://content2.rozetka.com.ua/goods/images/big/396766577.jpg', title: 'ауд. 108', description: 'Землетряси'},
    {path: 'https://content1.rozetka.com.ua/goods/images/big/397149561.jpg', title: 'ауд. 103-а', description: 'Кальоші'},
    {path: 'https://content1.rozetka.com.ua/goods/images/big/467627929.jpg', title: 'ауд. 104', description: 'тапки гермеса'}
];

function initPhotoRotator(containerId, images) {
    let currentIndex = 0;

    const container = document.getElementById(containerId);

    const imgElement = document.createElement('img');
    const titleElement = document.createElement('div');
    const descriptionElement = document.createElement('div');
    const counterElement = document.createElement('div');
    const prevLink = document.createElement('a');
    const nextLink = document.createElement('a');


    prevLink.innerText = 'Назад';
    nextLink.innerText = 'Вперед';


    prevLink.classList.add('disabled'); 

    prevLink.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateRotator();
        }
    });

    nextLink.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            updateRotator();
        }
    });


    container.appendChild(counterElement);
    container.appendChild(imgElement);
    container.appendChild(titleElement);
    container.appendChild(descriptionElement);
    container.appendChild(prevLink);
    container.appendChild(nextLink);


    function updateRotator() {
        const image = images[currentIndex];
        imgElement.src = image.path;
        titleElement.innerText = image.title;
        descriptionElement.innerText = image.description;
        counterElement.innerText = `Зображення ${currentIndex + 1} з ${images.length}`;

    
        if (currentIndex === 0) {
            prevLink.classList.add('disabled');
        } else {
            prevLink.classList.remove('disabled');
        }

        if (currentIndex === images.length - 1) {
            nextLink.classList.add('disabled');
        } else {
            nextLink.classList.remove('disabled');
        }
    }


    updateRotator();
}


initPhotoRotator('rotator', imagesArray);
