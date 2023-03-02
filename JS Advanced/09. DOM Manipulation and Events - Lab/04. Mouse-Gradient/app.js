function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    gradientElement.addEventListener('mousemove', displayPercentage);

    function displayPercentage(e) {
        let gradientWidth = e.target.clientWidth;
        let offset = e.offsetX;
        let percentage = Math.floor((offset / gradientWidth) * 100);

        document.getElementById('result').textContent = `${percentage}%`
    }
}