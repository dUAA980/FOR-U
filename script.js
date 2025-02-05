document.getElementById('noButton').addEventListener('click', function() {
    const button = this;
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('message').classList.remove('hidden');
    document.querySelector('.buttons').classList.add('hidden');
    document.getElementById('animal').src = "k.gif"; // تغيير الصورة لحيوان فرحان
});