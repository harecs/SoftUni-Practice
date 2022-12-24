function extractFileNameAndExtension(filePath) {
    let splitFilePath = filePath.split('\\');
    let file = splitFilePath[splitFilePath.length - 1].split('.');

    let fileExtension = file.pop();
    let fileName = file.join('.');

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}