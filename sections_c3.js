// Sección Condición 3 - Aspectos Curriculares (RESTAURADA E INTERACTIVA)
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS.c3 = `
<div class="slide-header" style="border-bottom:3px solid #C8102E; padding-bottom:15px; margin-bottom:25px;">
    <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
            <div class="slide-subtitle" style="color:#C8102E; font-weight:bold; text-transform:uppercase;">Condición 3</div>
            <h1 style="color:#0A2540; font-size:2.2rem; margin:0; font-weight:bold;">Contenidos Curriculares e Innovación</h1>
        </div>
        <div style="background:#0A2540; color:white; padding:10px 20px; border-radius:10px; text-align:center;">
            <span style="font-size:1.5rem; font-weight:bold;">144</span><br><span style="font-size:0.7rem;">CRÉDITOS</span>
        </div>
    </div>
</div>

<!-- Modelo Pedagógico -->
<div style="background:#f8fafc; padding:20px; border-radius:12px; margin-bottom:25px; border-left:6px solid #FF6600;">
    <h3 style="color:#0A2540; margin-top:0; font-size:1.2rem;"><i class="fas fa-university mr-2"></i> Modelo: Formación en Contextos de Aplicación</h3>
    <p style="color:#334155; font-size:0.95rem; line-height:1.6; margin-bottom:10px;">
        Nuestra formación integra el sector real mediante el uso de software de simulación especializado como <strong>FlexSim</strong> (Diseño de Planta) y <strong>Virtual Pro</strong> (Procesos Industriales), asegurando que los Resultados de Aprendizaje se alcancen en interacción con entornos industriales 4.0.
    </p>
</div>

<!-- SELECTOR DE TRAZABILIDAD (INTERACTIVO) -->
<div style="background:white; border:1px solid #e2e8f0; border-radius:15px; padding:25px; margin-bottom:30px; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
    <div style="color:#FF6600; font-weight:bold; font-size:0.9rem; margin-bottom:5px; text-transform:uppercase;">Selector de Trazabilidad</div>
    <h3 style="margin-top:0; color:#0A2540;">Componente → Asignatura → R.A. → Competencia</h3>
    
    <div style="display:flex; gap:10px; margin-bottom:20px; flex-wrap:wrap;">
        <button class="btn-comp active" onclick="showComp('basicas', this)">Ciencias Básicas</button>
        <button class="btn-comp" onclick="showComp('ingenieria', this)">Ing. Aplicada</button>
        <button class="btn-comp" onclick="showComp('gestion', this)">Eco-Gestión</button>
        <button class="btn-comp" onclick="showComp('investigacion', this)">Investigación</button>
    </div>

    <table class="trazabilidad-table" id="trazabilidadTable">
        <thead>
            <tr><th>Asignatura</th><th>R.A. Específico</th><th>Competencia Egreso</th></tr>
        </thead>
        <tbody id="trazabilidadBody">
            <!-- Se llena dinámicamente -->
        </tbody>
    </table>
</div>

<!-- MALLA CURRICULAR HORIZONTAL -->
<h3 style="color:#0A2540; margin-bottom:15px;"><i class="fas fa-project-diagram mr-2"></i> Malla Curricular Semestral por Componentes</h3>
<div style="overflow-x:auto; padding-bottom:15px;">
    <div class="malla-container">
        <!-- Semestres -->
        <div class="malla-row semestres">
            <div class="sem-num">Sem 1</div><div class="sem-num">Sem 2</div><div class="sem-num">Sem 3</div><div class="sem-num">Sem 4</div>
            <div class="sem-num">Sem 5</div><div class="sem-num">Sem 6</div><div class="sem-num">Sem 7</div><div class="sem-num">Sem 8</div>
        </div>
        
        <!-- Componente Básicas -->
        <div class="malla-row">
            <div class="comp-label">Básicas</div>
            <div class="asig-box b">Cálculo Dif.</div><div class="asig-box b">Cálculo Int.</div><div class="asig-box b">Cálculo Mult.</div><div class="asig-box b">Ecuaciones Dif.</div>
            <div class="asig-box empty"></div><div class="asig-box empty"></div><div class="asig-box empty"></div><div class="asig-box empty"></div>
        </div>
        
        <!-- Componente Aplicada -->
        <div class="malla-row">
            <div class="comp-label">Aplicada</div>
            <div class="asig-box a">Dibujo Ind.</div><div class="asig-box a">Proc. Manuf.</div><div class="asig-box a">Física I</div><div class="asig-box a">Física II</div>
            <div class="asig-box a">Termodinámica</div><div class="asig-box a">Modelación</div><div class="asig-box a">Diseño Planta</div><div class="asig-box a">Seguridad Ind.</div>
        </div>

        <!-- Componente Gestión -->
        <div class="malla-row">
            <div class="comp-label">Gestión</div>
            <div class="asig-box g">Intro Ing. Ind</div><div class="asig-box g">Teoría Org.</div><div class="asig-box g">Contabilidad</div><div class="asig-box g">Ing. Económica</div>
            <div class="asig-box g">Gerencia Prod I</div><div class="asig-box g">Logística</div><div class="asig-box g">Calidad</div><div class="asig-box g">Estrategia</div>
        </div>
    </div>
</div>

<style>
    .btn-comp { background:#e2e8f0; border:none; padding:8px 15px; border-radius:8px; cursor:pointer; font-weight:bold; transition:all 0.3s; color:#475569; }
    .btn-comp.active { background:#0A2540; color:white; }
    .trazabilidad-table { width:100%; border-collapse:collapse; margin-top:10px; font-size:0.9rem; }
    .trazabilidad-table th { background:#f8fafc; padding:12px; text-align:left; border-bottom:2px solid #e2e8f0; color:#0A2540; }
    .trazabilidad-table td { padding:12px; border-bottom:1px solid #f1f5f9; color:#334155; }
    
    .malla-container { min-width:1000px; display:flex; flex-direction:column; gap:8px; }
    .malla-row { display:grid; grid-template-columns: 100px repeat(8, 1fr); gap:8px; align-items:center; }
    .sem-num { text-align:center; font-weight:bold; color:#64748b; font-size:0.8rem; }
    .comp-label { font-weight:bold; color:#0A2540; font-size:0.8rem; text-transform:uppercase; }
    .asig-box { background:white; border:1px solid #e2e8f0; border-radius:6px; padding:10px 5px; font-size:0.75rem; text-align:center; min-height:45px; display:flex; align-items:center; justify-content:center; }
    .asig-box.b { border-left:4px solid #3b82f6; }
    .asig-box.a { border-left:4px solid #10b981; }
    .asig-box.g { border-left:4px solid #f59e0b; }
    .asig-box.empty { border:1px dashed #cbd5e1; background:transparent; }
</style>

<script>
(function(){
    var data = {
        basicas: [
            {a:"Matemáticas I", r:"Pensamiento lógico-matemático", c:"Modelamiento cuantitativo"},
            {a:"Cálculo Diferencial", r:"Aplicar derivadas a optimización", c:"Optimización de procesos"},
            {a:"Física Mecánica", r:"Principios mecánicos aplicados", c:"Diseño de sistemas mecánicos"},
            {a:"Estadística y Prob.", r:"Analizar datos con herramientas", c:"Toma de decisiones basadas en datos"},
            {a:"Álgebra Lineal", r:"Resolución de sistemas de ecuaciones", c:"Optimización operativa"}
        ],
        ingenieria: [
            {a:"Dibujo Industrial", r:"Modelado técnico y CAD", c:"Diseño de productos y plantas"},
            {a:"Procesos Industriales", r:"Sistemas de manufactura", c:"Gestión de producción"},
            {a:"Simulación (FlexSim)", r:"Optimización de flujos", c:"Ingeniería 4.0"},
            {a:"Investigación Operaciones", r:"Modelos de decisión", c:"Productividad organizacional"}
        ],
        gestion: [
            {a:"Ingeniería Económica", r:"Evaluación financiera", c:"Viabilidad de proyectos"},
            {a:"Gestión de Calidad", r:"Normativas ISO", c:"Mejora continua"},
            {a:"Logística", r:"Cadena de suministro", c:"Eficiencia operativa"}
        ],
        investigacion: [
            {a:"Metodología Inv.", r:"Diseño de investigación", c:"Generación de conocimiento"},
            {a:"Proyecto de Grado", r:"Solución a problemas reales", c:"Innovación profesional"}
        ]
    };

    window.showComp = function(compId, btn) {
        var btns = document.querySelectorAll('.btn-comp');
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        var body = document.getElementById('trazabilidadBody');
        var html = '';
        data[compId].forEach(row => {
            html += '<tr><td>'+row.a+'</td><td>'+row.r+'</td><td>'+row.c+'</td></tr>';
        });
        body.innerHTML = html;
    };

    // Inicializar
    setTimeout(() => {
        var firstBtn = document.querySelector('.btn-comp');
        if(firstBtn) showComp('basicas', firstBtn);
    }, 200);
})();
</script>
`;
