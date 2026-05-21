// Condición 8 - Medios Educativos
window.SECTIONS.c8 = `
<div class="slide-header" style="border-bottom:2px solid #FF6600; padding-bottom:15px; margin-bottom:25px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
    <div>
        <div class="slide-subtitle" style="color:#FF6600; font-weight:bold; text-transform:uppercase; font-size:1.1rem;">Condición 08</div>
        <h1 style="color:#0A2540; font-size:2.2rem; margin:0; font-weight:bold;">Medios Educativos</h1>
    </div>
    <div style="background:#e5e7eb; border-radius:30px; padding:4px; display:inline-flex; border:1px solid #d1d5db;">
        <button id="tabC8Technical" onclick="window.switchC8Tab('tech')" style="padding:8px 20px; border-radius:25px; font-weight:bold; border:none; cursor:pointer; font-size:0.95rem; transition:0.3s; background:#0A2540; color:white;">Resumen Técnico</button>
        <button id="tabC8Slides" onclick="window.switchC8Tab('slides')" style="padding:8px 20px; border-radius:25px; font-weight:bold; border:none; cursor:pointer; font-size:0.95rem; transition:0.3s; background:transparent; color:#4b5563;">Presentación Completa</button>
    </div>
</div>

<div id="c8TabTechnicalContent">
    <div class="grid-3">
        <div class="card">
            <h4><i class="fas fa-desktop" style="color:#FF6600; margin-right:8px;"></i> LMS Campus Virtual</h4>
            <p>Plataforma de gestión del aprendizaje con recursos multimedia, foros, evaluaciones y seguimiento.</p>
        </div>
        <div class="card-accent" style="background:#0A2540; border-bottom:4px solid #FF6600;">
            <h4 style="color:white;"><i class="fas fa-book-reader" style="color:#FF6600; margin-right:8px;"></i> Biblioteca E-Libro</h4>
            <p style="color:#e5e7eb;">Contrato vigente con miles de títulos especializados en ingeniería y ciencias aplicadas.</p>
        </div>
        <div class="card">
            <h4><i class="fas fa-video" style="color:#FF6600; margin-right:8px;"></i> Plataforma Sincrónica</h4>
            <p>Encuentros en tiempo real con grabación, chat y pizarra virtual.</p>
        </div>
        <div class="card">
            <h4><i class="fas fa-shield-alt" style="color:#FF6600; margin-right:8px;"></i> Software Antiplagio</h4>
            <p>Verificación de originalidad en trabajos académicos y tesis de grado.</p>
        </div>
        <div class="card">
            <h4><i class="fas fa-envelope" style="color:#FF6600; margin-right:8px;"></i> Correo Institucional</h4>
            <p>Suite completa de herramientas de productividad y comunicación académica.</p>
        </div>
        <div class="card">
            <h4><i class="fas fa-paint-brush" style="color:#FF6600; margin-right:8px;"></i> Software de Creación</h4>
            <p>Herramientas avanzadas para producción de contenidos digitales educativos.</p>
        </div>
    </div>

    <div class="timeline" style="margin-top:16px">
        <div class="event-card type-tech" style="border-left:4px solid #0A2540; background:#f9fafb;">
            <span class="event-time" style="color:#FF6600; font-weight:bold;">ACCESIBILIDAD Y CAPACITACIÓN</span>
            <div class="event-title" style="color:#0A2540; font-weight:bold; font-size:1.3rem; margin:5px 0 12px 0;">Garantías de Calidad Digital</div>
            <div class="grid-2" style="margin-top:8px; gap:15px;">
                <div class="card">
                    <h4 style="color:#0A2540; font-size:1.1rem; font-weight:bold;"><i class="fas fa-graduation-cap" style="color:#FF6600; margin-right:5px;"></i> Capacitación</h4>
                    <p>Formación continua para docentes y estudiantes en uso de plataformas y herramientas TIC.</p>
                </div>
                <div class="card">
                    <h4 style="color:#0A2540; font-size:1.1rem; font-weight:bold;"><i class="fas fa-headset" style="color:#FF6600; margin-right:5px;"></i> Soporte Técnico</h4>
                    <p>Mesa de ayuda especializada y acompañamiento disponible para estudiantes y profesores.</p>
                </div>
                <div class="card">
                    <h4 style="color:#0A2540; font-size:1.1rem; font-weight:bold;"><i class="fas fa-universal-access" style="color:#FF6600; margin-right:5px;"></i> Accesibilidad</h4>
                    <p>Ajustes razonables para personas con necesidades especiales o limitaciones visuales/auditivas.</p>
                </div>
                <div class="card">
                    <h4 style="color:#0A2540; font-size:1.1rem; font-weight:bold;"><i class="fas fa-sync" style="color:#FF6600; margin-right:5px;"></i> Actualización</h4>
                    <p>Plan de renovación tecnológica y licenciamiento de plataformas proyectado a 7 años.</p>
                </div>
            </div>
            <div class="evidence-box" style="margin-top:15px; background:#eff6ff; border-left:3px solid #FF6600; color:#1e40af; font-weight:bold;">
                <i class="fas fa-file-pdf" style="color:#FF6600; font-size:1.2rem; margin-right:8px;"></i> Soportes Documentales Vinculados:
                <div style="margin-top:5px; font-weight:normal; font-size:0.9rem; color:#4b5563; display:flex; gap:10px; flex-wrap:wrap;">
                    <span class="tag-legal" style="background:#e5e7eb; padding:2px 8px; border-radius:4px;">Anexo 13 - Instructivo Campus</span>
                    <span class="tag-legal" style="background:#e5e7eb; padding:2px 8px; border-radius:4px;">Anexo 20 - Virtualización</span>
                    <span class="tag-legal" style="background:#e5e7eb; padding:2px 8px; border-radius:4px;">Anexo 21 - Contrato E-Libro</span>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="c8TabSlidesContent" style="display:none;">
    <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:12px; padding:20px; text-align:center;">
        <div style="margin-bottom:15px; display:flex; justify-content:space-between; align-items:center;">
            <button onclick="window.prevC8Slide()" style="background:#0A2540; color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:bold; font-size:1.1rem;"><i class="fas fa-arrow-left mr-2"></i> Anterior</button>
            <span id="c8SlideCounter" style="font-weight:bold; color:#0A2540; font-size:1.2rem;">1 / 17</span>
            <button onclick="window.nextC8Slide()" style="background:#FF6600; color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:bold; font-size:1.1rem;">Siguiente <i class="fas fa-arrow-right ml-2"></i></button>
        </div>
        <img id="c8SlideImg" src="assets/c8_slide_1.png" style="max-width:100%; border-radius:8px; border:2px solid #d1d5db; box-shadow:0 4px 12px rgba(0,0,0,0.15);" alt="Slide de Medios Educativos">
        <div style="margin-top:10px; color:#6b7280; font-size:0.95rem; font-weight:bold;" id="c8SlideTitle">Portada - Condición 8: Medios Educativos</div>
    </div>
</div>
`;

// Slide configuration for C8
window._c8Slides = [
    {img:'assets/c8_slide_1.png', title:'Portada - Condición 8: Medios Educativos'},
    {img:'assets/c8_slide_2.png', title:'Requisitos Decreto 1330 y Resolución 021795'},
    {img:'assets/c8_slide_3.png', title:'Selección y Cobertura de Medios Educativos'},
    {img:'assets/c8_slide_4.png', title:'Recursos para el desarrollo del programa'},
    {img:'assets/c8_slide_5.png', title:'E-Libro: Biblioteca Digital Institucional'},
    {img:'assets/c8_slide_6.png', title:'Títulos suscritos en la Plataforma'},
    {img:'assets/c8_slide_7.png', title:'Títulos de Ingeniería Industrial disponibles'},
    {img:'assets/c8_slide_8.png', title:'Plataformas tecnológicas de la Institución'},
    {img:'assets/c8_slide_9.png', title:'Moodle: Campus Virtual'},
    {img:'assets/c8_slide_10.png', title:'Microsoft 365: Herramientas de productividad'},
    {img:'assets/c8_slide_11.png', title:'Recursos de aprendizaje y entornos virtuales'},
    {img:'assets/c8_slide_12.png', title:'Procesos de capacitación y apropiación'},
    {img:'assets/c8_slide_13.png', title:'Apropiación de medios educativos (Estadísticas y Uso)'},
    {img:'assets/c8_slide_14.png', title:'Modelo de producción de recursos digitales (Parte 1)'},
    {img:'assets/c8_slide_15.png', title:'Modelo de producción de recursos digitales (Parte 2)'},
    {img:'assets/c8_slide_16.png', title:'Tipos de recursos digitales propuestos'},
    {img:'assets/c8_slide_17.png', title:'Cierre - ¡Gracias!'}
];
window._c8Idx = 0;

window.switchC8Tab = function(tab) {
    var techTab = document.getElementById('tabC8Technical');
    var slidesTab = document.getElementById('tabC8Slides');
    var techContent = document.getElementById('c8TabTechnicalContent');
    var slidesContent = document.getElementById('c8TabSlidesContent');
    if (!techTab || !slidesTab || !techContent || !slidesContent) return;
    
    if (tab === 'tech') {
        techTab.style.background = '#0A2540';
        techTab.style.color = 'white';
        slidesTab.style.background = 'transparent';
        slidesTab.style.color = '#4b5563';
        techContent.style.display = 'block';
        slidesContent.style.display = 'none';
    } else {
        slidesTab.style.background = '#0A2540';
        slidesTab.style.color = 'white';
        techTab.style.background = 'transparent';
        techTab.style.color = '#4b5563';
        techContent.style.display = 'none';
        slidesContent.style.display = 'block';
    }
};

window.nextC8Slide = function() {
    if(window._c8Idx < window._c8Slides.length - 1) {
        window._c8Idx++;
        window._updateC8Slide();
    }
};

window.prevC8Slide = function() {
    if(window._c8Idx > 0) {
        window._c8Idx--;
        window._updateC8Slide();
    }
};

window._updateC8Slide = function() {
    var s = window._c8Slides[window._c8Idx];
    var img = document.getElementById('c8SlideImg');
    var counter = document.getElementById('c8SlideCounter');
    var title = document.getElementById('c8SlideTitle');
    if(img) img.src = s.img;
    if(counter) counter.textContent = (window._c8Idx + 1) + ' / ' + window._c8Slides.length;
    if(title) title.textContent = s.title;
};
