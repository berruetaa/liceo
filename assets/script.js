document.addEventListener('DOMContentLoaded', () => {
    fetch('/quimica')
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const links = doc.querySelectorAll('a');
            const fileList = document.getElementById('file-list');
            
            links.forEach(link => {
                const path = link.getAttribute('href');
                const fileName = path.split('/').pop();
                
                // Check if the link is a file or a directory
                if (path.endsWith('/')) {
                    // It's a directory (folder)
                    const li = document.createElement('li');
                    li.textContent = `${fileName} (Directory)`;
                    fileList.appendChild(li);
                } else {
                    // It's a file
                    const li = document.createElement('li');
                    li.textContent = fileName;
                    fileList.appendChild(li);
                }
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
