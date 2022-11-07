function printLoadingBarInfo(percentage) {

    function createLoadingBar(percentage) {
        let doneProgress = percentage / 10;
        let progressToFinish = 10 - doneProgress;

        let loadingBar = '[';

        for (let i = 0; i < doneProgress; i++) {
            loadingBar += '%';
        }

        for (let i = 0; i < progressToFinish; i++) {
            loadingBar += '.';
        }

        loadingBar += ']';

        return loadingBar;
    }

    let loadingBar = createLoadingBar(percentage);

    if (percentage === 100) {
        console.log('100% Complete!');
        console.log(loadingBar);
    } else {
        console.log(`${percentage}% ${loadingBar}`);
        console.log('Still loading...');
    }
}