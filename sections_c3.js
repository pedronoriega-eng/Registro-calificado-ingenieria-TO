// Sección Condición 3 - RECONSTRUCCIÓN TOTAL PROFESIONAL
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS.c3 = `
<div class="slide-header" style="border-bottom:3px solid #C8102E; padding-bottom:15px; margin-bottom:25px;">
    <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
            <div class="slide-subtitle" style="color:#C8102E; font-weight:bold; text-transform:uppercase; font-size:0.9rem;">Condición 3</div>
            <h1 style="color:#0A2540; font-size:2.4rem; margin:0; font-weight:bold;">Contenidos Curriculares e Innovación</h1>
        </div>
        <div style="background:#0A2540; color:white; padding:12px 25px; border-radius:15px; text-align:center; box-shadow:0 8px 16px rgba(10,37,64,0.2);">
            <span style="font-size:1.8rem; font-weight:bold;">144</span><br><span style="font-size:0.75rem; letter-spacing:1px; opacity:0.8;">CRÉDITOS TOTALES</span>
        </div>
    </div>
</div>

<!-- Modelo Pedagógico Institucional -->
<div style="background:linear-gradient(135deg, #f8fafc, #f1f5f9); padding:25px; border-radius:18px; margin-bottom:35px; border-left:8px solid #FF6600; box-shadow:0 4px 15px rgba(0,0,0,0.05); display:flex; align-items:center; gap:20px;">
    <div style="background:#FF6600; color:white; width:60px; height:60px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
        <i class="fas fa-university fa-2x"></i>
    </div>
    <div>
        <h3 style="color:#0A2540; margin:0 0 5px 0; font-size:1.4rem;">Modelo: Formación en Contextos de Aplicación</h3>
        <p style="color:#475569; font-size:1.05rem; line-height:1.6; margin:0;">
            Aprendizaje basado en la interacción con el sector real. Uso intensivo de software de simulación especializada: <strong>FlexSim</strong> (Optimización de procesos) y <strong>Virtual Pro</strong> (Manufactura y laboratorios industriales).
        </p>
    </div>
</div>

<!-- SELECTOR DE TRAZABILIDAD PROFESIONAL -->
<div style="background:white; border:1px solid #e2e8f0; border-radius:24px; padding:35px; margin-bottom:45px; box-shadow:0 15px 35px rgba(0,0,0,0.06);">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:25px;">
        <div>
            <div style="color:#FF6600; font-weight:bold; font-size:0.9rem; text-transform:uppercase; letter-spacing:1px;">Herramienta de Auditoría</div>
            <h2 style="margin:0; color:#0A2540; font-size:1.8rem;">Trazabilidad Curricular</h2>
        </div>
        <div style="font-size:0.9rem; color:#64748b; background:#f8fafc; padding:8px 15px; border-radius:10px;">
            Componente → Asignatura → R.A. → Competencia
        </div>
    </div>
    
    <!-- Paso 1: Selección de Componente -->
    <div style="margin-bottom:25px;">
        <p style="font-weight:bold; color:#0A2540; margin-bottom:12px; font-size:0.95rem;">1. Seleccione el Componente:</p>
        <div style="display:flex; gap:12px; flex-wrap:wrap;">
            <button class="btn-c basicas active" onclick="selComp('basicas', this)">Ciencias Básicas</button>
            <button class="btn-c aplicada" onclick="selComp('aplicada', this)">Ing. Aplicada</button>
            <button class="btn-c gestion" onclick="selComp('gestion', this)">Eco-Gestión</button>
            <button class="btn-c investigacion" onclick="selComp('investigacion', this)">Investigación</button>
        </div>
    </div>

    <!-- Paso 2: Selección de Asignatura -->
    <div id="asigSelectorCont" style="margin-bottom:30px; padding:20px; background:#f8fafc; border-radius:15px; border:1px dashed #cbd5e1;">
        <p style="font-weight:bold; color:#0A2540; margin-bottom:12px; font-size:0.95rem;">2. Seleccione la Asignatura:</p>
        <div id="asigList" style="display:flex; gap:10px; flex-wrap:wrap;">
            <!-- Se llena dinámicamente -->
        </div>
    </div>

    <!-- Resultado de Trazabilidad -->
    <div id="traceResult" style="display:none; animation:fadeIn 0.5s ease;">
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
            <div style="background:#0A2540; color:white; padding:20px; border-radius:15px;">
                <h4 style="color:#FF6600; margin:0 0 10px 0; text-transform:uppercase; font-size:0.8rem; letter-spacing:1px;">Resultado de Aprendizaje (R.A.)</h4>
                <p id="raText" style="margin:0; line-height:1.6; font-size:1rem;"></p>
            </div>
            <div style="background:#f1f5f9; color:#0A2540; padding:20px; border-radius:15px; border:1px solid #e2e8f0;">
                <h4 style="color:#C8102E; margin:0 0 10px 0; text-transform:uppercase; font-size:0.8rem; letter-spacing:1px;">Competencia del Perfil</h4>
                <p id="compText" style="margin:0; line-height:1.6; font-size:1rem;"></p>
            </div>
        </div>
    </div>
</div>

<!-- MALLA HORIZONTAL DE SABERES PREVIOS -->
<div style="background:white; border:1px solid #e2e8f0; border-radius:24px; padding:35px; box-shadow:0 15px 35px rgba(0,0,0,0.06);">
    <h2 style="color:#0A2540; margin-bottom:25px;"><i class="fas fa-project-diagram mr-2" style="color:#C8102E;"></i> Malla Curricular y Saberes Previos</h2>
    <div style="overflow-x:auto; padding-bottom:20px;">
        <div class="malla-wrapper">
            <!-- Semestres -->
            <div class="malla-line header">
                <div class="label-col">Componente</div>
                <div class="sem-col">SEM 1</div><div class="sem-col">SEM 2</div><div class="sem-col">SEM 3</div><div class="sem-col">SEM 4</div>
                <div class="sem-col">SEM 5</div><div class="sem-col">SEM 6</div><div class="sem-col">SEM 7</div><div class="sem-col">SEM 8</div>
            </div>
            
            <!-- Ciencias Básicas -->
            <div class="malla-line">
                <div class="label-col b">C. Básicas</div>
                <div class="node-box b">Cálculo Dif.</div>
                <div class="node-box b">Cálculo Int.<br><small>Saberes Previos: Dif.</small></div>
                <div class="node-box b">Cálculo Mult.<br><small>Saberes Previos: Int.</small></div>
                <div class="node-box b">Ecuaciones Dif.<br><small>Saberes Previos: Mult.</small></div>
                <div class="node-box empty"></div><div class="node-box empty"></div><div class="node-box empty"></div><div class="node-box empty"></div>
            </div>

            <!-- Ing. Aplicada -->
            <div class="malla-line">
                <div class="label-col a">Ing. Aplicada</div>
                <div class="node-box a">Dibujo Ind.</div>
                <div class="node-box a">Proc. Manuf.</div>
                <div class="node-box a">Física I</div>
                <div class="node-box a">Física II<br><small>Saberes Previos: Fís I</small></div>
                <div class="node-box a">Termodinámica</div>
                <div class="node-box a">Modelación<br><small>FlexSim</small></div>
                <div class="node-box a">Diseño Planta</div>
                <div class="node-box a">Gestión Seg.</div>
            </div>

            <!-- Eco-Gestión -->
            <div class="malla-line">
                <div class="label-col g">Eco-Gestión</div>
                <div class="node-box g">Intro Ing. Ind</div>
                <div class="node-box g">Teoría Org.</div>
                <div class="node-box g">Contabilidad</div>
                <div class="node-box g">Ing. Económica</div>
                <div class="node-box g">Gerencia Prod I</div>
                <div class="node-box g">Logística</div>
                <div class="node-box g">Gerencia Calidad</div>
                <div class="node-box g">Pens. Estratégico</div>
            </div>
        </div>
    </div>
</div>

<style>
    @keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
    
    .btn-c { padding:10px 20px; border-radius:12px; border:none; font-weight:bold; cursor:pointer; transition:all 0.3s; color:#64748b; background:#f1f5f9; }
    .btn-c.active { color:white; box-shadow:0 5px 15px rgba(0,0,0,0.1); transform:translateY(-2px); }
    .basicas.active { background:#0A2540; }
    .aplicada.active { background:#C8102E; }
    .gestion.active { background:#FFB81C; color:#0A2540; }
    .investigacion.active { background:#8B5CF6; }

    .btn-asig { padding:8px 15px; border-radius:8px; border:1px solid #e2e8f0; background:white; cursor:pointer; font-size:0.85rem; transition:all 0.2s; }
    .btn-asig:hover { border-color:#0A2540; background:#f0f9ff; }
    .btn-asig.active { background:#0A2540; color:white; border-color:#0A2540; }

    .malla-wrapper { min-width:1100px; display:flex; flex-direction:column; gap:12px; }
    .malla-line { display:grid; grid-template-columns: 140px repeat(8, 1fr); gap:12px; align-items:center; }
    .label-col { font-weight:bold; font-size:0.8rem; padding:10px; border-radius:8px; text-align:center; color:white; text-transform:uppercase; }
    .label-col.b { background:#0A2540; }
    .label-col.a { background:#C8102E; }
    .label-col.g { background:#FFB81C; color:#0A2540; }
    
    .sem-col { text-align:center; font-weight:bold; color:#94a3b8; font-size:0.8rem; letter-spacing:1px; }
    .node-box { background:white; border:1px solid #e2e8f0; border-radius:10px; padding:12px 5px; text-align:center; font-size:0.78rem; font-weight:600; min-height:55px; display:flex; flex-direction:column; justify-content:center; box-shadow:0 2px 4px rgba(0,0,0,0.02); }
    .node-box small { color:#94a3b8; font-weight:normal; font-size:0.65rem; margin-top:3px; }
    .node-box.b { border-bottom:4px solid #0A2540; }
    .node-box.a { border-bottom:4px solid #C8102E; }
    .node-box.g { border-bottom:4px solid #FFB81C; }
    .node-box.empty { border:1px dashed #e2e8f0; background:transparent; box-shadow:none; }
</style>

<script>
(function(){
    var data = {
        basicas: [
            {n:"Cálculo Diferencial", r:"Identificar y aplicar los conceptos de límites, derivadas y sus aplicaciones para optimizar funciones reales.", c:"Modelamiento cuantitativo de problemas industriales."},
            {n:"Álgebra Lineal", r:"Resolver sistemas de ecuaciones y transformaciones lineales para modelos operativos.", c:"Optimización operativa y matemática."},
            {n:"Estadística Descriptiva", r:"Analizar y representar conjuntos de datos para la toma de decisiones inicial.", c:"Gestión de datos para la productividad."},
            {n:"Física Mecánica", r:"Comprender principios de mecánica clásica aplicados a la cinemática y dinámica industrial.", c:"Diseño de sistemas mecánicos industriales."}
        ],
        aplicada: [
            {n:"Modelación y Simulación", r:"Construir modelos dinámicos de sistemas industriales en FlexSim para optimizar tiempos y cuellos de botella.", c:"Ingeniería 4.0 y transformación digital."},
            {n:"Investigación de Operaciones", r:"Diseñar modelos matemáticos de optimización para la asignación de recursos limitados.", c:"Eficiencia sistémica organizacional."},
            {n:"Procesos de Manufactura", r:"Analizar y simular procesos de transformación en Virtual Pro para mejorar la calidad del producto.", c:"Gestión de la manufactura moderna."}
        ],
        gestion: [
            {n:"Ingeniería Económica", r:"Evaluar financieramente proyectos de inversión considerando el valor del dinero en el tiempo.", c:"Gestión económica y financiera."},
            {n:"Logística y SCM", r:"Diseñar y optimizar redes de abastecimiento, producción y distribución.", c:"Optimización de la cadena de suministro."}
        ],
        investigacion: [
            {n:"Proyecto de Grado", r:"Aplicar métodos científicos para resolver un problema real del sector industrial regional.", c:"Innovación y emprendimiento profesional."}
        ]
    };

    // Funciones globales para que funcionen con onclick
    window.selComp = function(id, btn) {
        document.querySelectorAll('.btn-c').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        var list = document.getElementById('asigList');
        var html = '';
        data[id].forEach((asig, index) => {
            html += '<button class="btn-asig" onclick="selAsig(\\''+id+'\\','+index+', this)">'+asig.n+'</button>';
        });
        list.innerHTML = html;
        document.getElementById('traceResult').style.display = 'none';
    };

    window.selAsig = function(compId, asigIndex, btn) {
        document.querySelectorAll('.btn-asig').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        var asig = data[compId][asigIndex];
        document.getElementById('raText').innerText = asig.r;
        document.getElementById('compText').innerText = asig.c;
        document.getElementById('traceResult').style.display = 'block';
    };

    // Inicialización forzada
    setTimeout(function(){
        var btn = document.querySelector('.btn-c.basicas');
        if(btn) selComp('basicas', btn);
    }, 300);
})();
</script>
`;
