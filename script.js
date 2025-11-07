const countdown = () => {
    const targetDate = new Date('Nov 19, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;
  
    if (diff < 0) {
      document.getElementById("countdown").innerHTML = "The day has arrived!";
      return;
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  };
  
  setInterval(countdown, 1000);
  countdown();
  