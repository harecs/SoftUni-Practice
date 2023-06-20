const endpoints = {
    allFurniture: 'http://localhost:3030/data/catalog',
    oneFurniture: 'http://localhost:3030/data/furniture/',
    myFurniture: userId => `http://localhost:3030/data/catalog?where=_ownerId%3D%22${userId}%22`
};

async function createFuniture() {
    console.log('todo');
}