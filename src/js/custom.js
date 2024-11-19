
const downloadBtn = document.getElementById('rick');

downloadBtn.addEventListener('click', function () {
  const confirmDownload = confirm('Are you sure you want to download the file?');

  if (confirmDownload) {
    alert('File is downloading...');
    
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'; 
  }
});
