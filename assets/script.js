document.addEventListener('DOMContentLoaded', () => {
    fetch('quimica')
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
                if (link.href.includes('/files/')) {
                    const li = document.createElement('li');
                    li.textContent = link.href.split('/').pop();
                    fileList.appendChild(li);
                }
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
