const images = [
    'https://drive.google.com/uc?id=1kQ5COm3z-CosT6i-JE7VQQWWVA4JOWPN',
    // Tambahkan lebih banyak link foto di sini jika ada
];

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = document.getElementById('randomImage');
    randomImage.src = images[randomIndex];
    randomImage.style.display = 'block';
}
