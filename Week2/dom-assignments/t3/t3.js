document.addEventListener('DOMContentLoaded', function() {
    const targetElement = document.getElementById('target');
    
    let browserName = "Unknown";
    
    if (navigator.userAgent.includes("Firefox")) {
      browserName = "Mozilla Firefox";
    } else if (navigator.userAgent.includes("Chrome") && !navigator.userAgent.includes("Edg")) {
      browserName = "Google Chrome";
    } else if (navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome")) {
      browserName = "Safari";
    } else if (navigator.userAgent.includes("Edg")) {
      browserName = "Microsoft Edge";
    }
    
    let osName = "Unknown";
    if (navigator.userAgent.includes("Windows")) {
      osName = "Windows";
    } else if (navigator.userAgent.includes("Mac")) {
      osName = "MacOS";
    } else if (navigator.userAgent.includes("Linux")) {
      osName = "Linux";
    } else if (navigator.userAgent.includes("Android")) {
      osName = "Android";
    } else if (navigator.userAgent.includes("iPhone") || navigator.userAgent.includes("iPad")) {
      osName = "iOS";
    }
    
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    
    const availWidth = window.screen.availWidth;
    const availHeight = window.screen.availHeight;
    
    const now = new Date();
    
    const finnishMonths = [
      'tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta',
      'toukokuuta', 'kesäkuuta', 'heinäkuuta', 'elokuuta',
      'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta'
    ];
    
    const day = now.getDate();
    const month = finnishMonths[now.getMonth()];
    const year = now.getFullYear();
    const finnishDate = `${day}. ${month} ${year}`;
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const time = `${hours}:${minutes}`;
    
    targetElement.innerHTML = `
      <p>Browser: ${browserName}</p>
      <p>Operating System: ${osName}</p>
      <p>Screen Resolution: ${screenWidth} x ${screenHeight}</p>
      <p>Available Screen Space: ${availWidth} x ${availHeight}</p>
      <p>Date: ${finnishDate}</p>
      <p>Time: ${time}</p>
    `;
  });