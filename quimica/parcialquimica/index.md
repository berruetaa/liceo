---
layout: default
title: Base teórica para el parcial de química
---

<body>
    <div class="container">
        <h1>Base teórica para el parcial de química</h1>
        <div class="link-wrapper">
            <a class="button" href="main.pdf" target="_blank">Ver en otra pestaña</a><br>
        </div>
        <div class="smalltext">
            (recomendable si la última modificación es reciente o si estás en celular)
        </div>
        <br>
        <br>
        <a class="button" href="main.pdf" download="main.pdf">Descargar PDF</a>
        <div class="update-info" id="update-info"></div>

        <script>
            function updateLastModified() {
                const lastModifiedDate = new Date('2024-07-18T19:23:00'); // Fecha y hora de la última actualización
                const now = new Date();
                const diffInMs = now - lastModifiedDate;
                
                const diffInSeconds = Math.floor(diffInMs / 1000);
                const diffInMinutes = Math.floor(diffInSeconds / 60);
                const diffInHours = Math.floor(diffInMinutes / 60);
                const diffInDays = Math.floor(diffInHours / 24);

                let timeAgo;

                if (diffInDays > 0) {
                    timeAgo = `hace ${diffInDays} ${diffInDays === 1 ? 'día' : 'días'}`;
                } else if (diffInHours > 0) {
                    const hours = diffInHours;
                    const minutes = diffInMinutes % 60;
                    timeAgo = `hace ${hours} ${hours === 1 ? 'hora' : 'horas'} y ${minutes} ${minutes === 1 ? 'minuto' : 'minutos'}`;
                } else if (diffInMinutes > 0) {
                    timeAgo = `hace ${diffInMinutes} ${diffInMinutes === 1 ? 'minuto' : 'minutos'}`;
                } else {
                    timeAgo = `hace ${diffInSeconds} ${diffInSeconds === 1 ? 'segundo' : 'segundos'}`;
                }

                const updateInfoElement = document.getElementById('update-info');
                updateInfoElement.textContent = `Última modificación: ${timeAgo}`;
            }

            // Llamar a la función para actualizar la información al cargar la página
            updateLastModified();

            // Detectar si la pantalla es móvil y ocultar el visor embebido del PDF
            function checkMobileView() {
                const pdfViewer = document.querySelector('.pdf-viewer');
                if (window.innerWidth <= 768) {
                    pdfViewer.style.display = 'none';
                } else {
                    pdfViewer.style.display = 'block';
                }
            }

            // Llamar a la función al cargar la página y al cambiar el tamaño de la ventana
            window.addEventListener('load', checkMobileView);
            window.addEventListener('resize', checkMobileView);
        </script>

        <div class="pdf-viewer">
            <embed id="pdf-embed" src="main.pdf" width="100%" height="100%" type="application/pdf">
        </div>

        <script>
            const pdfEmbed = document.getElementById('pdf-embed');
            pdfEmbed.src = `main.pdf?v=${new Date().getTime()}`;
        </script>
    </div>
</body>