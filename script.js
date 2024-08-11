




  
  const checkBox = document.querySelector('#checkbox');

  checkBox.addEventListener('change', () => {
    const monthly = document.querySelector('#monthly');
    const annually = document.querySelector('#annually');
  
    if (checkBox.checked) {
      monthly.style.display = 'flex';
      annually.style.display = 'none';
    } else {
      monthly.style.display = 'none';
      annually.style.display = 'flex';
    }
  });

