// ==========================================
// Logica Global de Trazabilidad Curricular (48 Asignaturas Completas)
// Malla Interactiva Horizontal
// ==========================================
window.trazabilidadData = {
    "Ciencias Básicas": [
        { asig: "Cálculo Diferencial", pre: "Ninguno", ra: "Resolver problemas de optimización y tasas de cambio utilizando derivadas e integrales.", prog: "Aplicar ciencias básicas e ingeniería para optimización de procesos." },
        { asig: "Cálculo Integral", pre: "Cálculo Diferencial", ra: "Calcular áreas, volúmenes y resolver problemas de acumulación mediante integración.", prog: "Modelado matemático para la toma de decisiones en ingeniería." },
        { asig: "Cálculo Multivariado", pre: "Cálculo Integral", ra: "Analizar funciones de varias variables y campos vectoriales para sistemas complejos.", prog: "Diseñar procesos industriales con múltiples variables de control." },
        { asig: "Ecuaciones Diferenciales", pre: "Cálculo Multivariado", ra: "Modelar sistemas dinámicos y fenómenos físicos mediante ecuaciones diferenciales.", prog: "Análisis de estabilidad y control de sistemas industriales." },
        { asig: "Álgebra Lineal", pre: "Ninguno", ra: "Utilizar matrices y vectores para resolver sistemas de ecuaciones y transformaciones.", prog: "Fundamentación para optimización y análisis de datos en industria 4.0." },
        { asig: "Física Mecánica", pre: "Ninguno", ra: "Aplicar leyes de la mecánica clásica a problemas de movimiento y fuerzas.", prog: "Diseño de sistemas mecánicos y estructuras industriales." },
        { asig: "Física Electromagnética", pre: "Física Mecánica", ra: "Comprender electromagnetismo y termodinámica aplicada a la energía.", prog: "Gestión de sistemas energéticos y equipos industriales." },
        { asig: "Estadística Descriptiva", pre: "Ninguno", ra: "Organizar y resumir datos para identificar patrones y tendencias.", prog: "Control de calidad y análisis inicial de procesos." },
        { asig: "Estadística Inferencial", pre: "Estadística Descriptiva", ra: "Tomar decisiones poblacionales basadas en muestras significativas.", prog: "Validación de hipótesis en mejora de procesos y SIX SIGMA." },
        { asig: "Termodinámica", pre: "Física Mecánica", ra: "Analizar ciclos de energía y eficiencia en procesos térmicos.", prog: "Optimización del consumo energético industrial." }
    ],
    "Ingeniería Aplicada": [
        { asig: "Intro. Ing. Industrial", pre: "Ninguno", ra: "Identificar el rol del ingeniero industrial en la sociedad y la industria.", prog: "Ética y fundamentación profesional." },
        { asig: "Dibujo Industrial", pre: "Ninguno", ra: "Interpretar y crear planos técnicos mediante software CAD.", prog: "Diseño de productos y componentes mecánicos." },
        { asig: "Procesos de Manufactura", pre: "Ninguno", ra: "Analizar y diagramar procesos de manufactura y servicios.", prog: "Gestión y mejora continua de la cadena de valor." },
        { asig: "Logística y SCM", pre: "Ninguno", ra: "Planificar operaciones logísticas y de cadena de suministro.", prog: "Optimización del flujo de materiales e información." },
        { asig: "Diseño de Planta", pre: "Procesos de Manufactura", ra: "Diseñar layouts eficientes para minimizar movimientos y costos.", prog: "Diseño de instalaciones industriales competitivas." },
        { asig: "Gerencia de Calidad", pre: "Estadística Inferencial", ra: "Implementar metodologías de reducción de variabilidad en procesos.", prog: "Aseguramiento de la excelencia operativa y satisfacción del cliente." },
        { asig: "Modelación y Simulación", pre: "Estadística Inferencial", ra: "Analizar sistemas con incertidumbre y líneas de espera.", prog: "Gestión de la incertidumbre en procesos de servicio y logística." },
        { asig: "Producción e IA", pre: "Modelación y Simulación", ra: "Optimizar líneas de producción mediante aprendizaje automático.", prog: "Soberanía tecnológica y eficiencia productiva." }
    ],
    "Tecnología 4.0 y Eco-Gestión": [
        { asig: "Teoría Organizacional", pre: "Ninguno", ra: "Comprender la estructura y comportamiento de las organizaciones.", prog: "Liderazgo y gestión del cambio corporativo." },
        { asig: "Fundamentos Contables", pre: "Ninguno", ra: "Interpretar estados financieros y flujos de caja.", prog: "Toma de decisiones económicas basadas en datos." },
        { asig: "Ingeniería Económica", pre: "Fundamentos Contables", ra: "Evaluar la rentabilidad de proyectos de inversión.", prog: "Viabilidad financiera de soluciones de ingeniería." },
        { asig: "Gerencia Producción I", pre: "Ingeniería Económica", ra: "Planificar y controlar la producción industrial a corto plazo.", prog: "Optimización de recursos productivos." },
        { asig: "Pensamiento Estratégico", pre: "Gerencia Producción I", ra: "Diseñar estrategias corporativas para la competitividad global.", prog: "Gestión directiva y visión a largo plazo." }
    ],
    "Investigación e Integración": [
        { asig: "Metodología Inv.", pre: "Ninguno", ra: "Aplicar métodos científicos para resolver problemas técnicos.", prog: "Generación de nuevo conocimiento." },
        { asig: "Semilleros Inv.", pre: "Metodología Inv.", ra: "Desarrollar propuestas de investigación aplicada.", prog: "Vinculación con proyectos de desarrollo industrial." },
        { asig: "Proyecto de Grado I", pre: "Semilleros Inv.", ra: "Formular el proyecto de grado aplicado al sector real.", prog: "Capacidad investigativa e innovación." },
        { asig: "Proyecto de Grado II", pre: "Proyecto de Grado I", ra: "Ejecutar y sustentar soluciones de ingeniería de alto impacto.", prog: "Consolidación del perfil profesional del Ingeniero Industrial." }
    ]
};

window.showMallaDetails = function(comp, asigIdx, btn) {
    // Remover clase active de todos los botones
    document.querySelectorAll('.asig-btn').forEach(b => {
        b.style.backgroundColor = 'white';
        b.style.color = '#374151';
        b.style.borderColor = '#e2e8f0';
    });
    // Activar el boton actual
    if(btn) {
        btn.style.backgroundColor = '#0A2540';
        btn.style.color = 'white';
        btn.style.borderColor = '#0A2540';
    }

    const data = window.trazabilidadData[comp][asigIdx];
    document.getElementById('ra_asig').textContent = data.ra;
    document.getElementById('ra_prog').textContent = data.prog;
    document.getElementById('ra_title').textContent = data.asig;
};

window.renderMalla = function() {
    let html = '';
    const colors = {
        "Ciencias Básicas": {bg:"#e0f2fe", border:"#0284c7"},
        "Ingeniería Aplicada": {bg:"#ffedd5", border:"#ea580c"},
        "Tecnología 4.0 y Eco-Gestión": {bg:"#f3e8ff", border:"#9333ea"},
        "Investigacion e Integración": {bg:"#dcfce7", border:"#16a34a"}
    };

    for (const comp in window.trazabilidadData) {
        let col = colors[comp] || {bg:"#f1f5f9", border:"#64748b"};
        html += `<div style="margin-bottom:20px;">
                    <div style="font-weight:bold;color:${col.border};font-size:1.1rem;margin-bottom:8px;border-bottom:2px solid ${col.bg};padding-bottom:4px;">${comp}</div>
                    <div style="display:flex;gap:12px;overflow-x:auto;padding-bottom:8px;align-items:center;">`;
        
        window.trazabilidadData[comp].forEach((asig, idx) => {
            html += `
                <div class="asig-btn" onclick="showMallaDetails('${comp}', ${idx}, this)" style="flex-shrink:0;background:white;border:2px solid #e2e8f0;border-radius:8px;padding:12px;width:180px;cursor:pointer;transition:all 0.2s;box-shadow:0 2px 4px rgba(0,0,0,0.05);position:relative;">
                    <div style="font-size:0.85rem;font-weight:bold;margin-bottom:6px;line-height:1.2;">${asig.asig}</div>
                    <div style="font-size:0.7rem;color:#64748b;background:#f8fafc;padding:4px 6px;border-radius:4px;display:inline-block;"><i class="fas fa-link" style="color:#FF6600"></i> Saberes Previos:<br><span style="color:#0A2540;font-weight:600">${asig.pre}</span></div>
                </div>
                ${idx < window.trazabilidadData[comp].length - 1 ? `<div style="color:#cbd5e1;flex-shrink:0;"><i class="fas fa-arrow-right"></i></div>` : ''}
            `;
        });
        html += `   </div>
                 </div>`;
    }
    const container = document.getElementById('malla_container');
    if (container) container.innerHTML = html;
};

window.changeTab = function(tabId, event) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active', 'border-toOrange', 'text-toOrange'));
    document.getElementById(tabId).classList.remove('hidden');
    if(event && event.currentTarget) {
        event.currentTarget.classList.add('active', 'border-toOrange', 'text-toOrange');
    }
    
    if(tabId === 'malla_traz') {
        window.renderMalla();
        // Reset details
        document.getElementById('ra_asig').textContent = "Seleccione una asignatura en la malla arriba.";
        document.getElementById('ra_prog').textContent = "-";
        document.getElementById('ra_title').textContent = "Detalle de Asignatura";
    }
};

if (!window.SECTIONS) window.SECTIONS = {};

window.SECTIONS.c3 = `
<div class="slide-header">
    <div class="slide-title">
        <div class="slide-subtitle">Condición 03</div>
        <h1>Aspectos Curriculares</h1>
    </div>
    <div class="date-badge">Art. 2.5.3.2.3.2.3</div>
</div>

<!-- Sistema de Pestañas Interactivo -->
<div class="flex border-b border-gray-200 mb-6 overflow-x-auto">
    <button onclick="changeTab('fund', event)" class="tab-btn px-6 py-3 border-b-2 border-transparent hover:text-toOrange transition whitespace-nowrap">Fundamentación</button>
    <button onclick="changeTab('perfiles', event)" class="tab-btn px-6 py-3 border-b-2 border-transparent hover:text-toOrange transition whitespace-nowrap">Perfiles y RA</button>
    <button onclick="changeTab('malla_traz', event)" class="tab-btn active px-6 py-3 border-b-2 border-toOrange text-toOrange font-bold whitespace-nowrap">Malla y Trazabilidad (Interactivo)</button>
    <button onclick="changeTab('flex', event)" class="tab-btn px-6 py-3 border-b-2 border-transparent hover:text-toOrange transition whitespace-nowrap">Flexibilidad</button>
</div>

<!-- CONTENIDO: FUNDAMENTACION -->
<div id="fund" class="tab-content hidden grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="card p-6 bg-white rounded-xl shadow-lg border-l-4 border-toBlue">
        <h4 class="text-xl font-bold mb-4 text-toBlue"><i class="fas fa-book-open mr-2"></i> Componentes Formativos</h4>
        <p class="text-gray-600 mb-4">El programa se estructura en áreas que garantizan la formación integral del Ingeniero Industrial TO:</p>
        <ul class="space-y-2 text-sm">
            <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Ciencias Básicas: 32 Créditos</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Ciencias Básicas de Ingeniería: 28 Créditos</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Ingeniería Aplicada: 54 Créditos</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Socio-Humanística: 12 Créditos</li>
            <li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i> Electivas: 18 Créditos</li>
        </ul>
    </div>
    <div class="card p-6 bg-white rounded-xl shadow-lg border-l-4 border-toOrange">
        <h4 class="text-xl font-bold mb-4 text-toOrange"><i class="fas fa-microchip mr-2"></i> Enfoque Industria 4.0</h4>
        <p class="text-gray-700 leading-relaxed italic">"Formamos ingenieros capaces de liderar la transición digital, integrando IA, IoT y Big Data en la optimización de procesos productivos y de servicios."</p>
    </div>
</div>

<!-- CONTENIDO: PERFILES -->
<div id="perfiles" class="tab-content hidden grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="card p-4 bg-gray-50 rounded-lg shadow">
        <h5 class="font-bold text-toBlue border-b pb-2 mb-3">Perfil Ingreso</h5>
        <p class="text-xs text-gray-600">Bachiller con interés en las ciencias exactas, capacidad de análisis lógico y disposición para el trabajo en equipo y la innovación tecnológica.</p>
    </div>
    <div class="card p-4 bg-gray-50 rounded-lg shadow">
        <h5 class="font-bold text-toBlue border-b pb-2 mb-3">Perfil Profesional</h5>
        <p class="text-xs text-gray-600">Líder integral con visión sistémica, capaz de diseñar, gestionar y optimizar sistemas productivos sostenibles bajo estándares globales.</p>
    </div>
    <div class="card p-4 bg-gray-50 rounded-lg shadow">
        <h5 class="font-bold text-toBlue border-b pb-2 mb-3">Resultados de Aprendizaje (RA)</h5>
        <p class="text-xs text-gray-600">Aseguramos que el egresado demuestre competencias en: Diseño de Procesos, Gestión de Calidad, Analítica de Datos y Ética Profesional.</p>
    </div>
</div>

<!-- CONTENIDO: FLEXIBILIDAD -->
<div id="flex" class="tab-content hidden grid grid-cols-1 md:grid-cols-2 gap-6">
    <div class="card p-6 bg-white rounded-xl shadow-lg">
        <h4 class="font-bold text-toBlue mb-4"><i class="fas fa-exchange-alt mr-2"></i> Opciones de Grado</h4>
        <ul class="space-y-2 text-sm text-gray-600">
            <li><i class="fas fa-chevron-right text-toOrange mr-2"></i> Proyecto de Investigación</li>
            <li><i class="fas fa-chevron-right text-toOrange mr-2"></i> Seminario de Especialización</li>
            <li><i class="fas fa-chevron-right text-toOrange mr-2"></i> Creación de Empresa (Spin-off)</li>
            <li><i class="fas fa-chevron-right text-toOrange mr-2"></i> Práctica de Excelencia</li>
        </ul>
    </div>
    <div class="card p-6 bg-white rounded-xl shadow-lg">
        <h4 class="font-bold text-toBlue mb-4"><i class="fas fa-layer-group mr-2"></i> Créditos Electivos</h4>
        <p class="text-sm text-gray-600">El 12.5% del currículo es electivo, permitiendo al estudiante personalizar su ruta formativa en áreas como Inteligencia Artificial, Logística Verde o Gerencia de Proyectos.</p>
    </div>
</div>

<!-- CONTENIDO: MALLA INTERACTIVA Y TRAZABILIDAD -->
<div id="malla_traz" class="tab-content">
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;">
        <h3 style="color:#0A2540;font-weight:800;margin-top:0;margin-bottom:15px;font-size:1.2rem;"><i class="fas fa-sitemap" style="color:#FF6600;margin-right:8px;"></i> Malla Curricular por Componentes (Ruta Horizontal)</h3>
        <p style="font-size:0.85rem;color:#64748b;margin-bottom:20px;">Haga clic en cualquier asignatura para visualizar su trazabilidad, Saberes Previos (no prerrequisitos restrictivos) y aporte al Perfil de Egreso.</p>
        
        <!-- Contenedor dinámico de la malla horizontal -->
        <div id="malla_container" class="custom-scrollbar" style="max-height: 400px; overflow-y: auto; overflow-x: hidden; padding-right: 10px;"></div>
    </div>
    
    <!-- Panel de Resultados (Inferior) -->
    <div class="card p-6 bg-toBlue text-white rounded-xl shadow-xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
        <h3 id="ra_title" class="text-xl font-bold mb-4 text-toOrange">Detalle de Asignatura</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-5 bg-white/10 rounded-xl border border-white/20">
                <h5 class="text-toOrange font-bold text-xs uppercase tracking-widest mb-2"><i class="fas fa-bullseye mr-1"></i> Resultado de Aprendizaje (RA)</h5>
                <p id="ra_asig" class="text-sm leading-relaxed text-blue-50">Seleccione una asignatura en la malla arriba.</p>
            </div>
            <div class="p-5 bg-white/10 rounded-xl border border-white/20">
                <h5 class="text-toOrange font-bold text-xs uppercase tracking-widest mb-2"><i class="fas fa-graduation-cap mr-1"></i> Aporte a Competencia de Egreso</h5>
                <p id="ra_prog" class="text-sm leading-relaxed text-blue-50">-</p>
            </div>
        </div>
    </div>
</div>
`;
// Aseguramos que se dibuje al cargar la sección
setTimeout(window.renderMalla, 100);
