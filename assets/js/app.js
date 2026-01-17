function updateClock() {
    var now = new Date();
    var options = { timeZone: 'Europe/Berlin', hour12: false, hour: 'numeric', minute: 'numeric' };
    var formattedTime = now.toLocaleTimeString('en-US', options);
    document.getElementById('current-time').textContent = formattedTime;
}

// Update the clock every minute (60000 milliseconds)
setInterval(updateClock, 60000);

// Initial call to display time immediately
updateClock();
