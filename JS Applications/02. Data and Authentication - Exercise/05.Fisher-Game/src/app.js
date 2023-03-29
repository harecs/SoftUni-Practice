console.log('TODO:// Implement Home functionality');

if (localStorage.key(0) == 'email') {
    document.querySelector('nav p span').textContent = localStorage.getItem('email');
    document.querySelector('nav div[id="guest"]').style.display = 'none';
} else {
    document.querySelector('nav div[id="user"]').style.display = 'none';
}