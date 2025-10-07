function increment() {
    document.getElementById('count').innerText++;
   
    if (document.getElementById('count').innerText == 3) {
      const hiddenMessage = document.createElement('h4');
      hiddenMessage.innerText = 'Selamat! Anda menemukan hadiah tersembunyi...';
 
      const image = document.createElement('img');
      image.setAttribute(
        'src',
        'https://raw.githubusercontent.com/dicodingacademy/a315-web-pemula-labs/shared-files/catto.jpg',
      );
 
      const contents = document.querySelector('.contents');
      contents.appendChild(hiddenMessage).appendChild(image);
    }
  }
 
  function welcome() {
    alert('Sim salabim muncullah elemen-elemen HTML!');
 
    const contents = document.querySelector('.contents');
    contents.removeAttribute('hidden');
  }
 
  document.getElementById('incrementButton').onclick = increment;
  document.body.onload = welcome;