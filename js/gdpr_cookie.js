(function () {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookie');
  const cookieName = 'ga_cookie_consent';

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  function loadGA() {
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXX'; // ID
    document.head.appendChild(gaScript);
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXX'); // ID
  }

  if (getCookie(cookieName) === 'true') {
    banner.style.display = 'none';
    loadGA();
  }
  
  acceptBtn.addEventListener('click', function () {
    setCookie(cookieName, 'true', 365);
    banner.style.display = 'none';
    loadGA();
  });
})();