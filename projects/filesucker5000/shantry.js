document.getElementById('compressBtn').addEventListener('click', compressFiles);
document.getElementById('extractBtn').addEventListener('click', extractShantry);

function compressFiles() {
    const files = document.getElementById('fileInput').files;
    if (files.length === 0) {
        alert("Please select some files first!");
        return;
    }

    const zip = new JSZip();
    for (let file of files) {
        zip.file(file.name, file);
    }

    zip.generateAsync({type: "blob"})
        .then(function (content) {
            const shantryFile = new Blob([content], {type: "application/octet-stream"});
            saveAs(shantryFile, fileName);
        });
}

function extractShantry() {
    const shantryFile = document.getElementById('shantryInput').files[0];
    if (!shantryFile) {
        alert("Please select a .suck file first!");
        return;
    }

    JSZip.loadAsync(shantryFile)
        .then(function (zip) {
            const filesystem = document.getElementById('filesystem');
            filesystem.innerHTML = ''; // Clear the filesystem display
            zip.forEach(function (relativePath, zipEntry) {
                const fileDiv = document.createElement('div');
                fileDiv.classList.add('file');

                const fileNameSpan = document.createElement('span');
                fileNameSpan.textContent = relativePath;
                fileDiv.appendChild(fileNameSpan);

                const downloadButton = document.createElement('button');
                downloadButton.textContent = 'Download';
                downloadButton.addEventListener('click', function () {
                    zipEntry.async("blob").then(function(blob) {
                        saveAs(blob, relativePath);
                    });
                });
                fileDiv.appendChild(downloadButton);

                filesystem.appendChild(fileDiv);
            });
        });
}
