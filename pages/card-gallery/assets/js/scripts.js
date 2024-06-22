function updateTimeAndDay() {
    const timeElement = document.getElementById('time');
    const ampmElement = document.getElementById('ampm');
    const dayElement = document.getElementById('day');

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getDay()];
    const date = now.getDate();
    const month = now.toLocaleString('default', { month: 'long' });

    timeElement.textContent = `${formattedHours}:${formattedMinutes}`;
    ampmElement.textContent = ampm;
    dayElement.textContent = `${day}, ${month} ${date}`;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
