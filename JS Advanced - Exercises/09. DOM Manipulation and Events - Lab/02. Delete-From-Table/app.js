function deleteByEmail() {
    let emailForDeletionInput = document.querySelector('body label input').value;
    let customerEmailElements = document.querySelectorAll('#customers td:nth-of-type(2)');
    
    let isDeleted = false;

    for (const customerEmailElement of customerEmailElements) {
        if (customerEmailElement.textContent === emailForDeletionInput) {
            customerEmailElement.parentElement.remove();

            isDeleted = true;
        }
    }

    if (!isDeleted) {
        document.getElementById('result').innerText = 'Not found.';
    }
    
}