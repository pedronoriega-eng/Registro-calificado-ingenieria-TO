// =====================================================
// CONDICIÓN 3 - Funciones definidas GLOBALMENTE
// (Los scripts en innerHTML no se ejecutan - esta es la solución correcta)
// =====================================================
window.SECTIONS = window.SECTIONS || {};

// BASE DE DATOS CURRICULAR COMPLETA
window._c3data = {
    basicas: [
        {n:"Cálculo Diferencial", r:"Aplica conceptos de límites y derivadas para optimizar funciones en contextos de ingeniería.", c:"Modelamiento cuantitativo de sistemas de producción.", tipo:"T"},
        {n:"Álgebra Lineal", r:"Resuelve sistemas de ecuaciones lineales para modelar operaciones industriales.", c:"Optimización operativa y toma de decisiones.", tipo:"T"},
        {n:"Cálculo Integral", r:"Aplica la integración para calcular áreas, volúmenes y acumulaciones en procesos físicos.", c:"Análisis cuantitativo de procesos industriales.", tipo:"T"},
        {n:"Estadística Descriptiva", r:"Organiza, resume y representa conjuntos de datos de procesos productivos.", c:"Control estadístico de procesos.", tipo:"T"},
        {n:"Física Mecánica", r:"Comprende principios de mecánica clásica aplicados a sistemas industriales.", c:"Diseño de sistemas mecánicos e infraestructura productiva.", tipo:"T"},
        {n:"Cálculo Multivariado", r:"Extiende el análisis diferencial e integral a funciones de varias variables.", c:"Modelamiento de sistemas complejos de ingeniería.", tipo:"T"},
        {n:"Estadística Inferencial", r:"Utiliza muestras para inferir parámetros poblacionales y tomar decisiones bajo incertidumbre.", c:"Gestión de calidad y mejora continua.", tipo:"T"},
        {n:"Ecuaciones Diferenciales", r:"Formula y resuelve modelos matemáticos dinámicos en sistemas físicos e industriales.", c:"Modelamiento y simulación de procesos.", tipo:"T"}
    ],
    aplicada: [
        {n:"Dibujo Industrial", r:"Interpreta y elabora planos técnicos usando normativas industriales y herramientas CAD.", c:"Diseño de procesos y distribución de planta.", tipo:"TP"},
        {n:"Procesos de Manufactura", r:"Analiza los sistemas de transformación de materiales en entornos de producción real.", c:"Gestión de la manufactura moderna.", tipo:"T"},
        {n:"Física II", r:"Aplica principios de termodinámica básica y electricidad a sistemas industriales.", c:"Diseño energético de procesos productivos.", tipo:"T"},
        {n:"Termodinámica", r:"Analiza ciclos termodinámicos y balance de energía en sistemas de producción.", c:"Eficiencia energética industrial.", tipo:"T"},
        {n:"Inv. de Operaciones I", r:"Construye y resuelve modelos de programación lineal para optimización de recursos.", c:"Toma de decisiones operativas.", tipo:"T"},
        {n:"Inv. de Operaciones II", r:"Aplica teoría de colas, redes y simulación a problemas de sistemas de servicio.", c:"Optimización de sistemas productivos y logísticos.", tipo:"T"},
        {n:"Modelación y Simulación", r:"Construye modelos dinámicos en FlexSim para detectar cuellos de botella y optimizar flujos.", c:"Ingeniería Industrial 4.0.", tipo:"TP"},
        {n:"Diseño de Planta", r:"Proyecta distribuciones de planta eficientes minimizando costos de manejo de materiales con FlexSim.", c:"Optimización de infraestructura productiva.", tipo:"TP"},
        {n:"Diseño de Experimentos", r:"Planifica y analiza experimentos industriales con Virtual Pro para mejorar procesos.", c:"Mejora continua basada en evidencia.", tipo:"TP"},
        {n:"Gestión Seguridad Ind.", r:"Identifica peligros y valora riesgos aplicando la normativa colombiana de SST.", c:"Entornos de trabajo seguros y sostenibles.", tipo:"T"}
    ],
    gestion: [
        {n:"Intro. Ing. Industrial", r:"Reconoce el rol del ingeniero industrial en el contexto empresarial y social colombiano.", c:"Identidad profesional e impacto social.", tipo:"T"},
        {n:"Fundamentos Contables", r:"Interpreta estados financieros básicos para el análisis de la gestión empresarial.", c:"Gestión económica y financiera de proyectos.", tipo:"T"},
        {n:"Teoría Organizacional", r:"Analiza estructuras y modelos organizacionales para optimizar la gestión empresarial.", c:"Liderazgo y dirección organizacional.", tipo:"T"},
        {n:"Ingeniería Económica", r:"Evalúa la viabilidad financiera de proyectos considerando el valor del dinero en el tiempo.", c:"Toma de decisiones de inversión.", tipo:"T"},
        {n:"Gerencia de Producción I", r:"Planifica la producción mediante técnicas de programación y control de inventarios.", c:"Gestión eficiente de sistemas de producción.", tipo:"T"},
        {n:"Logística y SCM", r:"Diseña redes de abastecimiento, producción y distribución alineadas con la demanda del mercado.", c:"Optimización de la cadena de suministro.", tipo:"T"},
        {n:"Gerencia de Producción II", r:"Aplica filosofías Lean y JIT para la eliminación de desperdicios en la cadena de valor.", c:"Productividad y competitividad organizacional.", tipo:"T"},
        {n:"Gerencia de Calidad", r:"Implementa sistemas de gestión de la calidad bajo estándares ISO 9001.", c:"Mejora continua y excelencia operacional.", tipo:"T"},
        {n:"Big Data y Analítica", r:"Procesa y analiza grandes volúmenes de datos industriales con herramientas de BI.", c:"Transformación digital de operaciones.", tipo:"T"},
        {n:"Pensamiento Estratégico", r:"Formula y evalúa estrategias empresariales en entornos VUCA usando análisis DOFA y BSC.", c:"Dirección estratégica competitiva.", tipo:"T"}
    ],
    investigacion: [
        {n:"Metodología de Inv.", r:"Formula proyectos de investigación con rigor científico para resolver problemas del sector real.", c:"Generación de conocimiento técnico aplicado.", tipo:"T"},
        {n:"Semilleros de Investigación", r:"Desarrolla competencias investigativas participando en proyectos con grupos reconocidos.", c:"Innovación y producción académica.", tipo:"T"},
        {n:"Proyecto de Grado", r:"Diseña, implementa y evalúa una solución integral a un problema real del sector industrial regional.", c:"Innovación, emprendimiento y aporte social.", tipo:"TP"}
    ]
};

// FUNCIÓN GLOBAL: Seleccionar Componente
window.c3SelComp = function(id) {
    document.querySelectorAll('.c3-btn-comp').forEach(b => b.classList.remove('active'));
    var activeBtn = document.querySelector('.c3-btn-comp[data-comp="'+id+'"]');
    if(activeBtn) activeBtn.classList.add('active');

    var html = '';
    window._c3data[id].forEach(function(asig, i) {
        html += '<button class="c3-btn-asig" data-comp="'+id+'" data-idx="'+i+'" onclick="c3SelAsig(\''+id+'\','+i+')">'+asig.n+'</button>';
    });
    var el = document.getElementById('c3AsigList');
    if(el) el.innerHTML = html;
    var res = document.getElementById('c3Result');
    if(res) res.style.display = 'none';
};

// FUNCIÓN GLOBAL: Seleccionar Asignatura
window.c3SelAsig = function(compId, idx) {
    document.querySelectorAll('.c3-btn-asig').forEach(b => b.classList.remove('active'));
    var activeBtn = document.querySelector('.c3-btn-asig[data-comp="'+compId+'"][data-idx="'+idx+'"]');
    if(activeBtn) activeBtn.classList.add('active');

    var asig = window._c3data[compId][idx];
    var ra = document.getElementById('c3RaText');
    var comp = document.getElementById('c3CompText');
    var tipo = document.getElementById('c3TipoText');
    var res = document.getElementById('c3Result');
    if(ra) ra.innerText = asig.r;
    if(comp) comp.innerText = asig.c;
    if(tipo) tipo.innerText = asig.tipo === 'TP' ? 'Teórico-Práctica (TP) — Incluye simulación con FlexSim / Virtual Pro' : 'Teórica (T)';
    if(res) { res.style.display = 'block'; res.style.animation = 'c3FadeIn 0.4s ease'; }
};

// INICIALIZAR cuando el DOM esté listo
window.c3Init = function() {
    var btn = document.querySelector('.c3-btn-comp[data-comp="basicas"]');
    if(btn) window.c3SelComp('basicas');
};

// HTML DE LA SECCIÓN
window.SECTIONS.c3 = `
<style>
@keyframes c3FadeIn { from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)} }
.c3-btn-comp{padding:10px 22px;border-radius:12px;border:2px solid #e2e8f0;font-weight:700;cursor:pointer;transition:all .3s;background:#f8fafc;color:#64748b;font-size:.95rem}
.c3-btn-comp:hover{border-color:#0A2540;color:#0A2540}
.c3-btn-comp.active{color:white;border-color:transparent;transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,0.15)}
.c3-btn-comp[data-comp="basicas"].active{background:#0A2540}
.c3-btn-comp[data-comp="aplicada"].active{background:#C8102E}
.c3-btn-comp[data-comp="gestion"].active{background:#FFB81C;color:#0A2540}
.c3-btn-comp[data-comp="investigacion"].active{background:#8B5CF6}
.c3-btn-asig{padding:8px 14px;border-radius:8px;border:1px solid #cbd5e1;background:white;cursor:pointer;font-size:.85rem;transition:all .2s;color:#334155}
.c3-btn-asig:hover{border-color:#0A2540;background:#f0f9ff;transform:translateY(-1px)}
.c3-btn-asig.active{background:#0A2540;color:white;border-color:#0A2540}
.c3-malla{min-width:1050px;display:flex;flex-direction:column;gap:10px}
.c3-mrow{display:grid;grid-template-columns:120px repeat(8,1fr);gap:8px;align-items:stretch}
.c3-mrow.hdr .c3-sc{text-align:center;font-weight:700;font-size:.75rem;letter-spacing:1px;color:#94a3b8;padding:6px 0}
.c3-lbl{font-weight:800;font-size:.72rem;padding:10px 5px;border-radius:10px;text-align:center;color:white;text-transform:uppercase;letter-spacing:.5px;display:flex;align-items:center;justify-content:center}
.c3-lbl.b{background:#0A2540}.c3-lbl.a{background:#C8102E}.c3-lbl.g{background:#FFB81C;color:#0A2540}.c3-lbl.i{background:#8B5CF6}
.c3-cell{background:white;border:1px solid #e2e8f0;border-radius:10px;padding:10px 6px;text-align:center;font-size:.73rem;font-weight:600;min-height:60px;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#1e293b;line-height:1.3;box-shadow:0 2px 4px rgba(0,0,0,0.03)}
.c3-cell .sp{color:#94a3b8;font-size:.62rem;font-weight:400;margin-top:3px;font-style:italic}
.c3-cell.b{border-bottom:4px solid #0A2540}.c3-cell.a{border-bottom:4px solid #C8102E}.c3-cell.g{border-bottom:4px solid #FFB81C}.c3-cell.i{border-bottom:4px solid #8B5CF6}
.c3-cell.empty{border:1px dashed #e2e8f0;background:transparent;box-shadow:none}
</style>

<div style="border-bottom:3px solid #C8102E;padding-bottom:15px;margin-bottom:25px;display:flex;justify-content:space-between;align-items:center">
    <div>
        <div style="color:#C8102E;font-weight:700;text-transform:uppercase;font-size:.85rem;letter-spacing:1px">Condición 3</div>
        <h1 style="color:#0A2540;font-size:2.2rem;margin:0;font-weight:800">Contenidos Curriculares e Innovación</h1>
    </div>
    <div style="background:#0A2540;color:white;padding:14px 25px;border-radius:15px;text-align:center;box-shadow:0 8px 20px rgba(10,37,64,.25)">
        <div style="font-size:1.8rem;font-weight:800">144</div>
        <div style="font-size:.7rem;opacity:.8;letter-spacing:1px">CRÉDITOS</div>
    </div>
</div>

<!-- Modelo Pedagógico -->
<div style="background:linear-gradient(135deg,#fff7ed,#fff);padding:22px;border-radius:15px;margin-bottom:30px;border-left:7px solid #FF6600;box-shadow:0 4px 15px rgba(255,102,0,.08);display:flex;gap:18px;align-items:center">
    <div style="background:#FF6600;color:white;width:55px;height:55px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.4rem">🏛</div>
    <div>
        <h3 style="color:#0A2540;margin:0 0 6px 0;font-size:1.2rem;font-weight:700">Modelo: Formación en Contextos de Aplicación</h3>
        <p style="color:#475569;margin:0;font-size:.95rem;line-height:1.6">Garantiza que los Resultados de Aprendizaje se alcancen en interacción directa con el sector real. Asignaturas <strong>Teórico-Prácticas (TP)</strong> se desarrollan con <strong>FlexSim</strong> y <strong>Virtual Pro</strong>. Asignaturas <strong>Teóricas (T)</strong> fundamentan la toma de decisiones mediante rigor científico.</p>
    </div>
</div>

<!-- SELECTOR INTERACTIVO -->
<div style="background:white;border:1px solid #e2e8f0;border-radius:22px;padding:32px;margin-bottom:40px;box-shadow:0 15px 35px rgba(0,0,0,.06)">
    <div style="color:#FF6600;font-weight:700;font-size:.85rem;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px">Herramienta de Trazabilidad</div>
    <h2 style="color:#0A2540;margin:0 0 28px 0;font-size:1.6rem">Componente → Asignatura → R.A. → Competencia</h2>
    
    <p style="font-weight:700;color:#0A2540;margin-bottom:12px;font-size:.95rem">① Seleccione el Componente:</p>
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px">
        <button class="c3-btn-comp" data-comp="basicas" onclick="c3SelComp('basicas')">Ciencias Básicas</button>
        <button class="c3-btn-comp" data-comp="aplicada" onclick="c3SelComp('aplicada')">Ing. Aplicada</button>
        <button class="c3-btn-comp" data-comp="gestion" onclick="c3SelComp('gestion')">Eco-Gestión</button>
        <button class="c3-btn-comp" data-comp="investigacion" onclick="c3SelComp('investigacion')">Investigación</button>
    </div>

    <div style="background:#f8fafc;border:1px dashed #cbd5e1;border-radius:14px;padding:20px;margin-bottom:24px">
        <p style="font-weight:700;color:#0A2540;margin:0 0 12px 0;font-size:.95rem">② Seleccione la Asignatura:</p>
        <div id="c3AsigList" style="display:flex;gap:10px;flex-wrap:wrap">
            <span style="color:#94a3b8;font-style:italic;font-size:.9rem">← Seleccione primero un Componente</span>
        </div>
    </div>

    <div id="c3Result" style="display:none">
        <div style="display:grid;grid-template-columns:1fr 1fr 200px;gap:20px">
            <div style="background:#0A2540;color:white;padding:22px;border-radius:16px">
                <div style="color:#FF6600;font-weight:700;font-size:.75rem;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Resultado de Aprendizaje</div>
                <p id="c3RaText" style="margin:0;line-height:1.7;font-size:.95rem"></p>
            </div>
            <div style="background:#f1f5f9;color:#0A2540;padding:22px;border-radius:16px;border:1px solid #e2e8f0">
                <div style="color:#C8102E;font-weight:700;font-size:.75rem;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Competencia del Perfil de Egreso</div>
                <p id="c3CompText" style="margin:0;line-height:1.7;font-size:.95rem"></p>
            </div>
            <div style="background:white;padding:22px;border-radius:16px;border:1px solid #e2e8f0;text-align:center">
                <div style="color:#64748b;font-weight:700;font-size:.75rem;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Tipología</div>
                <p id="c3TipoText" style="margin:0;font-size:.85rem;font-weight:600;color:#0A2540;line-height:1.6"></p>
            </div>
        </div>
    </div>
</div>

<!-- MALLA CURRICULAR HORIZONTAL CON SABERES PREVIOS -->
<div style="background:white;border:1px solid #e2e8f0;border-radius:22px;padding:32px;box-shadow:0 15px 35px rgba(0,0,0,.06)">
    <h2 style="color:#0A2540;margin:0 0 25px 0;font-size:1.6rem">
        <span style="color:#C8102E;margin-right:10px">⊞</span>Malla Curricular y Saberes Previos (8 Semestres)
    </h2>
    <div style="overflow-x:auto;padding-bottom:15px">
        <div class="c3-malla">
            <div class="c3-mrow hdr">
                <div></div>
                <div class="c3-sc">SEM 1</div><div class="c3-sc">SEM 2</div><div class="c3-sc">SEM 3</div><div class="c3-sc">SEM 4</div>
                <div class="c3-sc">SEM 5</div><div class="c3-sc">SEM 6</div><div class="c3-sc">SEM 7</div><div class="c3-sc">SEM 8</div>
            </div>
            <!-- Ciencias Básicas -->
            <div class="c3-mrow">
                <div class="c3-lbl b">C. Básicas</div>
                <div class="c3-cell b">Cálculo Diferencial</div>
                <div class="c3-cell b">Cálculo Integral<div class="sp">Sab. Previos: Cál. Dif.</div></div>
                <div class="c3-cell b">Álgebra Lineal</div>
                <div class="c3-cell b">Cálculo Multivariado<div class="sp">Sab. Previos: Cál. Int.</div></div>
                <div class="c3-cell b">Estadística Descriptiva</div>
                <div class="c3-cell b">Estadística Inferencial<div class="sp">Sab. Previos: Est. Desc.</div></div>
                <div class="c3-cell b">Ecuaciones Dif.<div class="sp">Sab. Previos: Cál. Mult.</div></div>
                <div class="c3-cell empty"></div>
            </div>
            <!-- Ing. Aplicada -->
            <div class="c3-mrow">
                <div class="c3-lbl a">Ing. Aplicada</div>
                <div class="c3-cell a">Dibujo Industrial</div>
                <div class="c3-cell a">Procesos Manufactura</div>
                <div class="c3-cell a">Física Mecánica</div>
                <div class="c3-cell a">Física II<div class="sp">Sab. Previos: Física I</div></div>
                <div class="c3-cell a">Termodinámica<div class="sp">Sab. Previos: Física II</div></div>
                <div class="c3-cell a">Modelación y Sim.<div class="sp">FlexSim / Arena</div></div>
                <div class="c3-cell a">Diseño de Planta<div class="sp">FlexSim Layout</div></div>
                <div class="c3-cell a">Diseño Experimentos<div class="sp">Virtual Pro</div></div>
            </div>
            <!-- Eco-Gestión -->
            <div class="c3-mrow">
                <div class="c3-lbl g">Eco-Gestión</div>
                <div class="c3-cell g">Intro. Ing. Industrial</div>
                <div class="c3-cell g">Teoría Organizacional</div>
                <div class="c3-cell g">Fund. Contables</div>
                <div class="c3-cell g">Ing. Económica<div class="sp">Sab. Previos: Contabilidad</div></div>
                <div class="c3-cell g">Gerencia Prod. I</div>
                <div class="c3-cell g">Logística y SCM<div class="sp">Sab. Previos: Ger. Prod. I</div></div>
                <div class="c3-cell g">Gerencia de Calidad</div>
                <div class="c3-cell g">Pensamiento Estratégico</div>
            </div>
            <!-- Investigación -->
            <div class="c3-mrow">
                <div class="c3-lbl i">Investigación</div>
                <div class="c3-cell empty"></div>
                <div class="c3-cell empty"></div>
                <div class="c3-cell empty"></div>
                <div class="c3-cell empty"></div>
                <div class="c3-cell i">Metodología de Inv.</div>
                <div class="c3-cell i">Semilleros Inv.</div>
                <div class="c3-cell i">Proyecto de Grado I<div class="sp">Sab. Previos: Metodología</div></div>
                <div class="c3-cell i">Proyecto de Grado II<div class="sp">Sab. Previos: PG I</div></div>
            </div>
        </div>
    </div>
</div>

<script>
// Inicialización tras renderizado
(function tryInit(){
    if(document.querySelector('.c3-btn-comp')) {
        window.c3Init();
    } else {
        setTimeout(tryInit, 150);
    }
})();
</script>
`;
