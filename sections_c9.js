// Condición 9 - Infraestructura Física y Tecnológica
window.SECTIONS.c9 = `
<div class="slide-header" style="border-bottom:2px solid #FF6600; padding-bottom:15px; margin-bottom:25px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px;">
    <div>
        <div class="slide-subtitle" style="color:#FF6600; font-weight:bold; text-transform:uppercase; font-size:1.1rem;">Condición 09</div>
        <h1 style="color:#0A2540; font-size:2.2rem; margin:0; font-weight:bold;">Infraestructura Física y Tecnológica</h1>
    </div>
    <div style="background:#e5e7eb; border-radius:30px; padding:4px; display:inline-flex; border:1px solid #d1d5db;">
        <button id="tabC9Technical" onclick="window.switchC9Tab('tech')" style="padding:8px 20px; border-radius:25px; font-weight:bold; border:none; cursor:pointer; font-size:0.95rem; transition:0.3s; background:#0A2540; color:white;">Resumen Técnico</button>
        <button id="tabC9Slides" onclick="window.switchC9Tab('slides')" style="padding:8px 20px; border-radius:25px; font-weight:bold; border:none; cursor:pointer; font-size:0.95rem; transition:0.3s; background:transparent; color:#4b5563;">Presentación Completa</button>
    </div>
</div>

<div id="c9TabTechnicalContent">
    <div class="grid-3">
        <div class="card-accent" style="background:#0A2540; border-bottom:4px solid #FF6600;">
            <h4 style="color:white;"><i class="fas fa-building" style="color:#FF6600; margin-right:8px;"></i> Sede A (Principal)</h4>
            <p style="color:#e5e7eb;">Oficinas administrativas y aulas. Contrato vigente. Uso de suelo y Licencia de Construcción aprobados para el desarrollo óptimo de las actividades académicas.</p>
            <div style="margin-top:12px; display:flex; gap:6px;">
                <span class="tag-legal" style="background:rgba(255,255,255,.2); color:#fff; padding:2px 8px; border-radius:4px;">Anexo 22</span>
                <span class="tag-legal" style="background:rgba(255,255,255,.2); color:#fff; padding:2px 8px; border-radius:4px;">Anexo 23</span>
            </div>
        </div>
        <div class="card">
            <h4><i class="fas fa-university" style="color:#0A2540; margin-right:8px;"></i> Sede B (Bienestar)</h4>
            <p>Convenio institucional para espacios complementarios, bienestar universitario, actividades deportivas y recreativas y proyección social.</p>
            <div style="margin-top:12px;">
                <span class="tag-legal" style="background:#e5e7eb; padding:2px 8px; border-radius:4px;">Anexo 25</span>
            </div>
        </div>
        <div class="card">
            <h4><i class="fas fa-microscope" style="color:#0A2540; margin-right:8px;"></i> Sede C (Laboratorios)</h4>
            <p>Laboratorios especializados, salas de cómputo con licencias profesionales y espacios de práctica experimental. Contrato de arrendamiento vigente.</p>
            <div style="margin-top:12px;">
                <span class="tag-legal" style="background:#e5e7eb; padding:2px 8px; border-radius:4px;">Anexo 24</span>
            </div>
        </div>
    </div>

    <div class="grid-2" style="margin-top:16px; gap:20px;">
        <div class="card">
            <h4><i class="fas fa-server" style="color:#0A2540; margin-right:8px;"></i> Plataforma Tecnológica</h4>
            <table class="tbl" style="margin-top:5px;">
                <tr><td class="lb" style="color:#0A2540; font-weight:bold; width:25%;">LMS</td><td>Gestión del aprendizaje institucional (Moodle adaptado)</td></tr>
                <tr><td class="lb" style="color:#0A2540; font-weight:bold;">Sincrónico</td><td>Videoconferencias en tiempo real y clases grabadas</td></tr>
                <tr><td class="lb" style="color:#0A2540; font-weight:bold;">E-Libro</td><td>Acceso a miles de títulos y material de consulta especializado</td></tr>
                <tr><td class="lb" style="color:#0A2540; font-weight:bold;">Antiplagio</td><td>Verificación de originalidad y coincidencia de textos</td></tr>
                <tr><td class="lb" style="color:#0A2540; font-weight:bold;">Correo</td><td>Suite de productividad de clase mundial para estudiantes</td></tr>
                <tr><td class="lb" style="color:#0A2540; font-weight:bold;">Servidores</td><td>Capacidad técnica garantizada para 140+ estudiantes/cohorte</td></tr>
            </table>
        </div>
        <div class="chart-box" style="background:white; border:1px solid #e5e7eb; border-radius:8px; padding:20px; box-shadow:0 4px 6px rgba(0,0,0,0.02);">
            <h4 style="color:#0A2540; font-weight:bold; margin-bottom:12px;"><i class="fas fa-chart-bar" style="color:#FF6600; margin-right:8px;"></i> Dimensionamiento Tecnológico</h4>
            <canvas id="techChart" height="180"></canvas>
        </div>
    </div>
</div>

<div id="c9TabSlidesContent" style="display:none;">
    <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:12px; padding:20px; text-align:center;">
        <div style="margin-bottom:15px; display:flex; justify-content:space-between; align-items:center;">
            <button onclick="window.prevC9Slide()" style="background:#0A2540; color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:bold; font-size:1.1rem;"><i class="fas fa-arrow-left mr-2"></i> Anterior</button>
            <span id="c9SlideCounter" style="font-weight:bold; color:#0A2540; font-size:1.2rem;">1 / 26</span>
            <button onclick="window.nextC9Slide()" style="background:#FF6600; color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:bold; font-size:1.1rem;">Siguiente <i class="fas fa-arrow-right mr-2"></i></button>
        </div>
        <img id="c9SlideImg" src="assets/c9_slide_1.png" style="max-width:100%; border-radius:8px; border:2px solid #d1d5db; box-shadow:0 4px 12px rgba(0,0,0,0.15);" alt="Slide de Infraestructura">
        <div style="margin-top:10px; color:#6b7280; font-size:0.95rem; font-weight:bold;" id="c9SlideTitle">Portada - Condición 9: Infraestructura Física y Tecnológica</div>
    </div>
</div>
`;

// Slide configuration for C9
window._c9Slides = [
    {img:'assets/c9_slide_1.png', title:'Portada - Condición 9: Infraestructura Física y Tecnológica'},
    {img:'assets/c9_slide_2.png', title:'Infraestructura Física y Tecnológica (Marco General)'},
    {img:'assets/c9_slide_3.png', title:'Infraestructura Física Institucional'},
    {img:'assets/c9_slide_4.png', title:'Espacios Físicos de la Institución y Área Total (6.135 m²)'},
    {img:'assets/c9_slide_5.png', title:'Sede A: Distribución y Aulas Disponibles'},
    {img:'assets/c9_slide_6.png', title:'Sede A: Salones de Clase Equipados'},
    {img:'assets/c9_slide_7.png', title:'Sede A: Biblioteca y Áreas de Estudio'},
    {img:'assets/c9_slide_8.png', title:'Sede A: Cafetería y Espacios de Esparcimiento'},
    {img:'assets/c9_slide_9.png', title:'Sede A: Sala de Cómputo y Conectividad'},
    {img:'assets/c9_slide_10.png', title:'Sede B: Convenio Institucional (Instalaciones y Bienestar)'},
    {img:'assets/c9_slide_11.png', title:'Sede B: Áreas Recreativas y Canchas Deportivas (1)'},
    {img:'assets/c9_slide_12.png', title:'Sede B: Áreas Recreativas y Zonas Comunes (2)'},
    {img:'assets/c9_slide_13.png', title:'Sede B: Auditorios y Espacios de Proyección'},
    {img:'assets/c9_slide_14.png', title:'Sede C: Laboratorios Especializados de Práctica'},
    {img:'assets/c9_slide_15.png', title:'Sede C: Laboratorios de Cómputo y Licencias Especiales'},
    {img:'assets/c9_slide_16.png', title:'Disponibilidad de Espacios y Capacidad Instalada (21 Aulas)'},
    {img:'assets/c9_slide_17.png', title:'Infraestructura Tecnológica del Programa (Capacidad y Servidores)'},
    {img:'assets/c9_slide_18.png', title:'Red Interna Tecnológica: Sede A (Esquema de Conexiones)'},
    {img:'assets/c9_slide_19.png', title:'Red Interna Tecnológica: Sede B (Esquema de Conexiones)'},
    {img:'assets/c9_slide_20.png', title:'Red Interna Tecnológica: Sede C (Esquema de Conexiones)'},
    {img:'assets/c9_slide_21.png', title:'Conectividad a Internet (Enlace Dedicado de 100 Mb)'},
    {img:'assets/c9_slide_22.png', title:'Sistema de Información de Gestión Académica (SIGA)'},
    {img:'assets/c9_slide_23.png', title:'Diagrama de Arquitectura de SIGA'},
    {img:'assets/c9_slide_24.png', title:'Diagrama de Arquitectura de Moodle - Campus Virtual'},
    {img:'assets/c9_slide_25.png', title:'Soporte y Mantenimiento Tecnológico Permanente'},
    {img:'assets/c9_slide_26.png', title:'Cierre - ¡Gracias!'}
];
window._c9Idx = 0;

window.c9Init = function() {
    var t = document.getElementById('techChart');
    if (!t) return;
    
    // Si ya existe un gráfico previo en window.ci.t, lo destruimos para evitar duplicación y liberar memoria
    if (window.ci && window.ci.t) {
        try {
            window.ci.t.destroy();
        } catch(e) {
            console.error(e);
        }
    }
    
    // Inicializar el nuevo gráfico sobre el canvas recién inyectado
    if (!window.ci) window.ci = {};
    
    window.ci.t = new Chart(t, {
        type: 'radar',
        data: {
            labels: ['LMS (Moodle)', 'Sincrónica (Teams)', 'E-Libro', 'Antiplagio', 'Correo (Office 365)', 'Creación Contenido'],
            datasets: [{
                label: 'Capacidad y Cobertura (%)',
                data: [100, 95, 100, 90, 100, 85],
                backgroundColor: 'rgba(255, 102, 0, 0.15)',
                borderColor: '#FF6600',
                borderWidth: 2,
                pointBackgroundColor: '#0A2540',
                pointBorderColor: '#fff',
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    grid: { color: '#cbd5e1' },
                    angleLines: { color: '#cbd5e1' },
                    pointLabels: {
                        color: '#0A2540',
                        font: { size: 10, weight: 'bold', family: 'Montserrat' }
                    },
                    ticks: { display: false }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
};

window.switchC9Tab = function(tab) {
    var techTab = document.getElementById('tabC9Technical');
    var slidesTab = document.getElementById('tabC9Slides');
    var techContent = document.getElementById('c9TabTechnicalContent');
    var slidesContent = document.getElementById('c9TabSlidesContent');
    if (!techTab || !slidesTab || !techContent || !slidesContent) return;
    
    if (tab === 'tech') {
        techTab.style.background = '#0A2540';
        techTab.style.color = 'white';
        slidesTab.style.background = 'transparent';
        slidesTab.style.color = '#4b5563';
        techContent.style.display = 'block';
        slidesContent.style.display = 'none';
        
        // Destruir e inicializar de nuevo el gráfico en el nuevo canvas
        setTimeout(function() {
            if (window.c9Init) window.c9Init();
        }, 50);
    } else {
        slidesTab.style.background = '#0A2540';
        slidesTab.style.color = 'white';
        techTab.style.background = 'transparent';
        techTab.style.color = '#4b5563';
        techContent.style.display = 'none';
        slidesContent.style.display = 'block';
    }
};

window.nextC9Slide = function() {
    if(window._c9Idx < window._c9Slides.length - 1) {
        window._c9Idx++;
        window._updateC9Slide();
    }
};

window.prevC9Slide = function() {
    if(window._c9Idx > 0) {
        window._c9Idx--;
        window._updateC9Slide();
    }
};

window._updateC9Slide = function() {
    var s = window._c9Slides[window._c9Idx];
    var img = document.getElementById('c9SlideImg');
    var counter = document.getElementById('c9SlideCounter');
    var title = document.getElementById('c9SlideTitle');
    if(img) img.src = s.img;
    if(counter) counter.textContent = (window._c9Idx + 1) + ' / ' + window._c9Slides.length;
    if(title) title.textContent = s.title;
};
