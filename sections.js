const NAV=[
{id:'inicio',icon:'fa-home',label:'Inicio'},
{id:'ficha',icon:'fa-id-card',label:'Ficha Tecnica'},
{id:'c1',icon:'fa-tag',label:'01. Denominacion'},
{id:'c2',icon:'fa-bullseye',label:'02. Justificacion'},
{id:'c3',icon:'fa-book-open',label:'03. Contenidos'},
{id:'c4',icon:'fa-calendar-alt',label:'04. Org. Actividades'},
{id:'c5',icon:'fa-flask',label:'05. Investigacion'},
{id:'c6',icon:'fa-handshake',label:'06. Sector Externo'},
{id:'c7',icon:'fa-chalkboard-teacher',label:'07. Profesores'},
{id:'c8',icon:'fa-laptop',label:'08. Medios Educativos'},
{id:'c9',icon:'fa-building',label:'09. Infraestructura'},
{id:'normativo',icon:'fa-gavel',label:'Marco Normativo'},
];
const SECTIONS={
inicio:`<div class="slide-header"><div class="slide-title"><div class="slide-subtitle">Decreto 1330 de 2019</div><h1>Sustentacion de Condiciones de Calidad</h1></div><div class="date-badge"><i class="fas fa-calendar"></i> 2026</div></div>
<div class="grid-4"><div class="card" style="text-align:center"><div class="stat-num orange">9</div><div class="stat-label">Condiciones Sustentadas</div></div><div class="card" style="text-align:center"><div class="stat-num">25</div><div class="stat-label">Anexos Verificables</div></div><div class="card" style="text-align:center"><div class="stat-num orange">144</div><div class="stat-label">Creditos Academicos</div></div><div class="card" style="text-align:center"><div class="stat-num">8</div><div class="stat-label">Semestres</div></div></div>
<div class="grid-3" style="margin-top:20px"><div class="card-accent"><h4><i class="fas fa-robot"></i> IA Transversal</h4><p>6 asignaturas con inteligencia artificial integrada al curriculo</p></div><div class="card"><h4><i class="fas fa-leaf"></i> Sostenibilidad</h4><p>Eje estrategico con desarrollo sostenible y gestion de proyectos verdes</p></div><div class="card"><h4><i class="fas fa-industry"></i> Industria 4.0</h4><p>Big Data, simulacion, automatizacion y gemelos digitales</p></div></div>
<div class="timeline" style="margin-top:24px"><div class="event-card type-induction"><span class="event-time">PROGRAMA</span><div class="event-title">Ingenieria Industrial - Modalidad Virtual</div><div class="event-desc">Corporacion Escuela Tecnologica del Oriente. Pregrado universitario. Titulo: Ingeniero Industrial. NBC: Ingenieria Industrial y afines.</div><div class="evidence-box"><i class="fas fa-check-circle"></i>Acuerdo 011 de 2024 - Creacion del Programa</div></div></div>`,

ficha:`<div class="slide-header"><div class="slide-title"><div class="slide-subtitle">Informacion General</div><h1>Ficha Tecnica del Programa</h1></div></div>
<div class="grid-2"><div class="card"><h4><i class="fas fa-graduation-cap"></i> Datos Academicos</h4><table class="tbl"><tr><td class="lb">Programa</td><td>Ingenieria Industrial</td></tr><tr><td class="lb">Titulo</td><td>Ingeniero Industrial</td></tr><tr><td class="lb">Nivel</td><td>Pregrado Universitario</td></tr><tr><td class="lb">Modalidad</td><td>Virtual</td></tr><tr><td class="lb">Creditos</td><td>144</td></tr><tr><td class="lb">Duracion</td><td>8 Semestres</td></tr><tr><td class="lb">Admision</td><td>Semestral - 140 estudiantes</td></tr><tr><td class="lb">Matricula</td><td>$4.200.000</td></tr></table></div>
<div class="card"><h4><i class="fas fa-university"></i> Datos Institucionales</h4><table class="tbl"><tr><td class="lb">NBC</td><td>Ingenieria Industrial y afines</td></tr><tr><td class="lb">Campo Amplio</td><td>Ingenieria, Industria y Construccion</td></tr><tr><td class="lb">Campo Especifico</td><td>Ingenieria y profesiones afines</td></tr><tr><td class="lb">Area</td><td>Ing., Arquitectura, Urbanismo y afines</td></tr><tr><td class="lb">Escuela</td><td>Escuela de Ingenierias</td></tr><tr><td class="lb">Norma Creacion</td><td>Acuerdo 011 del 12/11/2024</td></tr><tr><td class="lb">Aprobacion</td><td>Acuerdo 021, Acuerdo 03/2026</td></tr><tr><td class="lb">Sede</td><td>Bucaramanga, Santander</td></tr></table></div></div>`,

c1:`<div class="slide-header"><div class="slide-title"><div class="slide-subtitle">Condicion 01</div><h1>Denominacion del Programa</h1></div><div class="date-badge">Art. 2.5.3.2.3.2.2</div></div>
<div class="timeline"><div class="event-card type-legal"><span class="event-time">MARCO LEGAL</span><div class="event-title">Fundamentacion Normativa</div><div class="event-desc">La denominacion responde al marco normativo vigente y a la clasificacion CINE/SNIES.</div><div style="margin-top:8px"><span class="tag-legal">Ley 30/1992</span><span class="tag-legal">Ley 842/2003</span><span class="tag-legal">Ley 1188/2008</span><span class="tag-legal">Decreto 1330/2019</span><span class="tag-legal">Res. 021795/2020</span></div><div class="evidence-box"><i class="fas fa-folder-open"></i>Documento Maestro - Condicion 1 (Anexo 3)</div></div>
<div class="event-card type-academic"><span class="event-time">CLASIFICACION CINE / SNIES</span><div class="event-title">Taxonomia del Programa</div><table class="tbl"><tr><td class="lb">Campo Amplio</td><td>Ingenieria, Industria y Construccion</td></tr><tr><td class="lb">Campo Especifico</td><td>Ingenieria y profesiones afines</td></tr><tr><td class="lb">Campo Detallado</td><td>Ing. y profesiones afines no clasificadas en otra parte</td></tr><tr><td class="lb">Area de Conocimiento</td><td>Ingenieria, Arquitectura, Urbanismo y afines</td></tr><tr class="row-accent"><td class="lb">NBC</td><td>Ingenieria Industrial y afines</td></tr></table></div>
<div class="event-card type-induction"><span class="event-time">ANALISIS COMPARATIVO</span><div class="event-title">Denominaciones, Semestres y Creditos a Nivel Nacional (Programas Virtuales)</div><table class="tbl"><thead><tr><th>IES</th><th>Programa</th><th>Semestres</th><th>Creditos</th></tr></thead><tbody><tr><td>U. de Manizales</td><td>Ingenieria Industrial</td><td>8</td><td>126</td></tr><tr><td>U. Piloto</td><td>Ingenieria Industrial</td><td>8</td><td>142</td></tr><tr><td>UNAD</td><td>Ingenieria Industrial</td><td>9</td><td>152</td></tr><tr><td>Pol. Grancolombiano</td><td>Ingenieria Industrial</td><td>10</td><td>155</td></tr><tr><td>Areandina</td><td>Ingenieria Industrial</td><td>9</td><td>170</td></tr><tr><td>UNIMINUTO</td><td>Ingenieria Industrial</td><td>10 (cuat.)</td><td>144</td></tr><tr class="row-accent"><td>ETO (Nuestro)</td><td>Ingenieria Industrial</td><td>8</td><td>144</td></tr></tbody></table></div>
<div class="event-card type-academic"><span class="event-time">REFERENTES</span><div class="event-title">Perfil de Egreso de otras IES vs ETO</div><table class="tbl"><thead><tr><th>IES</th><th>Perfil de Egreso Destacado</th></tr></thead><tbody><tr><td>U. de Manizales</td><td>Eficiencia operacional, transformacion digital y manufactura sostenible.</td></tr><tr><td>U. Piloto</td><td>Disenar, modelar, gestionar y mejorar sistemas organizacionales.</td></tr><tr><td>UNAD</td><td>Sistemas productivos y logisticos, operaciones y manufactura.</td></tr><tr class="row-accent"><td>ETO (Nuestro)</td><td>Profesional con solida formacion en Industria 4.0, IA transversal, y sostenibilidad, capaz de optimizar recursos para la nueva Revolucion Digital.</td></tr></tbody></table></div>
<div class="event-card type-academic"><span class="event-time">CORRELACION</span><div class="event-title">Denominacion vs Curriculo</div><table class="tbl"><thead><tr><th>Perfil</th><th>Asignaturas Clave</th><th>Justificacion</th></tr></thead><tbody><tr><td>Optimizacion</td><td>Procesos Industriales, IO I y II, Gestion Operac. IA</td><td>Modelar y mejorar sistemas productivos</td></tr><tr><td>Gestion Tecnologica</td><td>Big Data, IA, Modelacion Simulacion</td><td>Decisiones con tecnologias avanzadas</td></tr><tr><td>Sostenibilidad</td><td>Desarrollo Sostenible, Proy. Sostenibles</td><td>Responsabilidad social y ambiental</td></tr><tr><td>Liderazgo e Innovacion</td><td>Gerencia TH, Lab. Innovacion</td><td>Creacion de valor y emprendimiento</td></tr></tbody></table><div class="evidence-box"><i class="fas fa-check-circle"></i>Estudio de Pertinencia (Anexo 4)</div></div></div>`,

c2:`<div class="slide-header"><div class="slide-title"><div class="slide-subtitle">Condicion 02</div><h1>Justificacion del Programa</h1></div><div class="date-badge">Art. 2.5.3.2.3.2.3</div></div>
<div class="grid-3"><div class="card"><h4><i class="fas fa-globe"></i> Contexto Internacional</h4><p>Fuerte demanda global en Industria 4.0, digitalizacion de cadenas de valor y sostenibilidad (ODS).</p></div><div class="card"><h4><i class="fas fa-map"></i> Contexto Nacional</h4><p>Altisima concentracion de oferta en Bogota; deficit critico de ingenieros 4.0 en el resto de regiones.</p></div><div class="card-accent"><h4><i class="fas fa-briefcase"></i> Oportunidades Empleo</h4><p>Logistica avanzada, automatizacion, analisis de datos (Big Data), y gerencia de proyectos tecnologicos.</p></div></div>
<div class="timeline" style="margin-top:20px"><div class="event-card type-academic"><span class="event-time">ANALISIS DE MERCADO</span><div class="event-title">Comparacion Nacional, Matriculas y Mapa de Graduados</div><div class="grid-2" style="margin-top:8px"><div class="card"><h4><i class="fas fa-chart-line"></i> Tendencia de Matriculas</h4><p>Crecimiento sostenido post-pandemia en la modalidad virtual. SNIES refleja que la demanda de educacion virtual en ingenieria presenta el mayor porcentaje de proyeccion.</p></div><div class="card"><h4><i class="fas fa-graduation-cap"></i> Mapa de Graduados</h4><p>Altas tasas de absorcion laboral a nivel nacional (Observatorio Laboral). El Ingeniero Industrial es el 2do grupo de mayor empleabilidad para liderar la reindustrializacion.</p></div></div></div>
<div class="event-card type-academic"><span class="event-time">OFERTA Y DEMANDA</span><div class="event-title">Distribucion Geografica de Programas Virtuales</div><div class="chart-box"><canvas id="demandaChart" height="120"></canvas></div><div class="evidence-box"><i class="fas fa-database"></i>Fuente: SNIES 2024 - 14 programas en Bogota, solo 1 hibrido en Barrancabermeja, 0 virtuales en Bucaramanga.</div></div>
<div class="event-card type-sst"><span class="event-time">VALOR DIFERENCIAL EJE</span><div class="event-title">Pilares del Programa ETO vs Competencia</div><div class="grid-3" style="margin-top:8px"><div class="card"><h4>IA Transversal</h4><p>6 asignaturas directas (Operaciones, Simulacion, Big Data)</p></div><div class="card"><h4>Sostenibilidad</h4><p>Desarrollo Sostenible y Etica Ambiental integradas</p></div><div class="card"><h4>Innovacion</h4><p>Laboratorio y Pensamiento Estrategico Organizacional</p></div></div></div></div>`,

c3:`<div class="slide-header"><div class="slide-title"><div class="slide-subtitle">Condicion 03</div><h1>Contenidos Curriculares</h1></div><div class="date-badge">Art. 2.5.3.2.3.2.4</div></div>
<div class="grid-4"><div class="card" style="text-align:center"><div class="stat-num orange">144</div><div class="stat-label">Creditos</div></div><div class="card" style="text-align:center"><div class="stat-num">48</div><div class="stat-label">Asignaturas</div></div><div class="card" style="text-align:center"><div class="stat-num orange">27</div><div class="stat-label">Syllabus</div></div><div class="card" style="text-align:center"><div class="stat-num">6</div><div class="stat-label">Areas</div></div></div>

<div class="card" style="margin-top:16px; border-left: 4px solid #FF6600;">
    <h4><i class="fas fa-project-diagram" style="color:#FF6600;"></i> Trazabilidad Curricular Dinamica</h4>
    <p style="font-size:0.9em; color:#9ca3af; margin-bottom:15px;">Demostracion de coherencia: Seleccione un Componente Curricular y luego una Asignatura para visualizar como su Resultado de Aprendizaje especifico alimenta el Perfil de Egreso.</p>
    
    <div style="display:flex; gap:15px; margin-bottom: 25px; flex-wrap:wrap;">
        <div style="flex:1; min-width: 250px;">
            <label style="color:#9ca3af; font-size:0.85em; font-weight:bold;"><i class="fas fa-layer-group"></i> 1. Componente Curricular</label>
            <select id="selComponente" onchange="window.updateAsignaturas()" style="width:100%; padding:12px; background:#1f2937; color:#fff; border:1px solid #374151; border-radius:5px; margin-top:8px; outline:none; font-family:Montserrat, sans-serif; font-size:0.95em; cursor:pointer;">
                <option value="">-- Seleccione el componente --</option>
                <option value="Ciencias Basicas">Ciencias Basicas</option>
                <option value="Ingenieria Aplicada">Ingenieria Aplicada</option>
                <option value="Tecnologia 4.0">Tecnologia 4.0</option>
                <option value="Gestion">Gestion Empresarial</option>
                <option value="Investigacion">Investigacion</option>
                <option value="Humanistica">Humanistica y Formacion General</option>
            </select>
        </div>
        <div style="flex:1; min-width: 250px;">
            <label style="color:#9ca3af; font-size:0.85em; font-weight:bold;"><i class="fas fa-book"></i> 2. Asignatura (Anexo 11 - Syllabus)</label>
            <select id="selAsignatura" onchange="window.updateTrace()" style="width:100%; padding:12px; background:#1f2937; color:#fff; border:1px solid #374151; border-radius:5px; margin-top:8px; outline:none; font-family:Montserrat, sans-serif; font-size:0.95em; cursor:pointer;" disabled>
                <option value="">Primero seleccione el componente...</option>
            </select>
        </div>
    </div>

    <style>
    .trace-grid { display: grid; grid-template-columns: 1fr 30px 1.2fr 30px 1fr; gap: 10px; align-items: center; margin-bottom: 5px; }
    .trace-box { background: #111827; border: 1px solid #374151; padding: 20px; border-radius: 8px; transition: all 0.3s ease; position: relative; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.3); }
    .trace-box:hover { transform: translateY(-3px); box-shadow: 0 6px 15px rgba(0,0,0,0.5); }
    .trace-arrow { font-size: 24px; text-align: center; animation: pulseArrow 1.5s infinite; color:#9ca3af;}
    .trace-title { font-size: 0.75em; color: #9ca3af; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; font-weight:800; }
    .trace-content { color: #fff; font-size: 0.9em; font-weight: 500; line-height: 1.5; }
    @keyframes pulseArrow { 0% { transform: translateX(0); opacity: 0.5; } 50% { transform: translateX(5px); opacity: 1; } 100% { transform: translateX(0); opacity: 0.5; } }
    @media (max-width: 768px) { .trace-grid { grid-template-columns: 1fr; } .trace-arrow { transform: rotate(90deg); animation: pulseArrowDown 1.5s infinite; margin: 10px 0; } }
    @keyframes pulseArrowDown { 0% { transform: translateY(0) rotate(90deg); opacity: 0.5; } 50% { transform: translateY(5px) rotate(90deg); opacity: 1; } 100% { transform: translateY(0) rotate(90deg); opacity: 0.5; } }
    </style>

    <div class="trace-grid" id="traceFlow" style="opacity:0.3; pointer-events:none; transition:0.5s ease-in-out;">
        <div class="trace-box" style="border-left: 5px solid #FF6600;">
            <div class="trace-title"><i class="fas fa-book-open"></i> 1. R.A. Especifico de Asignatura</div>
            <div class="trace-content" id="txtRaAsig" style="color:#FF6600;">"Esperando seleccion de asignatura..."</div>
        </div>
        <div class="trace-arrow"><i class="fas fa-chevron-right" style="color:#FF6600"></i></div>
        
        <div class="trace-box" style="border-left: 5px solid #3B82F6;">
            <div class="trace-title"><i class="fas fa-bullseye"></i> 2. R.A. General de Programa</div>
            <div class="trace-content" id="txtRaProg">...</div>
        </div>
        <div class="trace-arrow"><i class="fas fa-chevron-right" style="color:#3B82F6"></i></div>
        
        <div class="trace-box" style="border-left: 5px solid #10B981;">
            <div class="trace-title"><i class="fas fa-user-graduate"></i> 3. Competencia en Perfil de Egreso</div>
            <div class="trace-content" id="txtPerfil">...</div>
        </div>
    </div>
</div>

<div class="grid-2"><div class="chart-box"><h4 style="margin-bottom:8px"><i class="fas fa-chart-bar"></i> Distribucion de Creditos por Area</h4><canvas id="areasChart" height="180"></canvas></div><div class="card"><h4><i class="fas fa-layer-group"></i> Componentes Curriculares</h4><table class="tbl"><tr><td class="lb">Ciencias Basicas</td><td>Calculo, Fisica, Algebra, Estadistica, Ec. Diferenciales</td></tr><tr><td class="lb">Ing. Aplicada</td><td>IO, Procesos, Distribucion Planta, Lean, Six Sigma</td></tr><tr><td class="lb">Tecnologia 4.0</td><td>IA, Big Data, Simulacion, Competencias Digitales</td></tr><tr><td class="lb">Gestion</td><td>Costos, Talento Humano, Derecho Laboral, Teoria Org.</td></tr><tr><td class="lb">Investigacion</td><td>Comp. Investigativas, Met. Cuantitativos, Diseno Exp.</td></tr><tr><td class="lb">Humanistica</td><td>Catedra de la Paz, Bioetica, Desarrollo Sostenible</td></tr></table></div></div>
<div class="card" style="margin-top:16px"><h4><i class="fas fa-th"></i> Malla Curricular Completa</h4><div class="malla"><div class="sh">SEM 1</div><div class="sh">SEM 2</div><div class="sh">SEM 3</div><div class="sh">SEM 4</div><div class="sh">SEM 5</div><div class="sh">SEM 6</div><div class="sh">SEM 7</div><div class="sh">SEM 8</div><div class="mc">Calculo Diferencial</div><div class="mc">Calculo Integral</div><div class="mc">Calculo Multivariado</div><div class="mc">Ecuaciones Diferenciales</div><div class="mc">Termodinamica</div><div class="mc">Distribucion Planta</div><div class="mc i4">Gestion Operac. IA</div><div class="mc i4">Produccion e IA</div><div class="mc">Algebra Lineal</div><div class="mc">Fisica I</div><div class="mc">Fisica II</div><div class="mc">Gerencia Calidad Six Sigma</div><div class="mc">Lean Manufacturing</div><div class="mc">Diseno Experimentos</div><div class="mc i4">Modelac. Simul. IA</div><div class="mc">Gerencia Tecnologica</div><div class="mc">Intro Ing. Industrial</div><div class="mc">Estadist. Descriptiva</div><div class="mc">Estadist. Inferencial</div><div class="mc">IO I Prog. Lineal</div><div class="mc">IO II Estocasticos</div><div class="mc">Metodos Cuantitativos</div><div class="mc">SIG</div><div class="mc">Gestion Proy. Sostenibles</div><div class="mc">Fund. Programacion</div><div class="mc">Fund. Contables</div><div class="mc i4">Inteligencia Artificial</div><div class="mc">Comp. Investigativas</div><div class="mc">Costos y Presupuestos</div><div class="mc">Derecho Laboral</div><div class="mc">Pensam. Estrategico</div><div class="mc">Lab. Innovacion</div><div class="mc">Catedra de la Paz</div><div class="mc">Procesos Industriales</div><div class="mc">Teoria Organizacional</div><div class="mc">Gerencia Talento Humano</div><div class="mc i4">Big Data Analitica</div><div class="mc">Desarrollo Sostenible</div><div class="mc">Form. Eval. Proyectos</div><div class="mc">Diagnostico Empresarial</div><div class="mc">Dibujo Industrial</div><div class="mc">Ingles I</div><div class="mc">Ingles II</div><div class="mc">Ingles III</div><div class="mc">Ingles IV</div><div class="mc">Electiva I</div><div class="mc">Electiva II</div><div class="mc">Electiva III</div></div><div class="malla-leg"><span class="lo">&#9632; INDUSTRIA 4.0</span> <span>&#9632; Formacion General</span></div></div>
<div class="timeline" style="margin-top:16px"><div class="event-card type-academic"><span class="event-time">PERFIL DE EGRESO</span><div class="event-title">Competencias Macro del Ingeniero Industrial ETO</div><div class="event-desc">Profesional con solida formacion cientifica, tecnologica y humanista, capaz de comprender, disenar y optimizar sistemas integrados de personas, materiales, informacion, equipos y energia.</div><table class="tbl" style="margin-top:8px"><thead><tr><th>Competencia</th><th>Descripcion</th></tr></thead><tbody><tr><td>Modelacion</td><td>Aplica ciencias basicas e ingenieria para optimizacion</td></tr><tr><td>Diseno</td><td>Gestiona y mejora procesos industriales y de servicios</td></tr><tr><td>Tecnologia</td><td>Integra IA, Big Data y simulacion en decisiones</td></tr><tr><td>Liderazgo</td><td>Lidera equipos con vision estrategica</td></tr><tr><td>Sostenibilidad</td><td>Formula proyectos con enfoque sostenible</td></tr><tr><td>Investigacion</td><td>Propone soluciones basadas en evidencia</td></tr></tbody></table><div class="evidence-box"><i class="fas fa-file-alt"></i>Syllabus completos documentados (Anexo 11)</div></div></div>`,
};

// ==========================================
// Logica Global de Trazabilidad Curricular
// ==========================================
window.trazabilidadData = {
    "Ciencias Basicas": {
        "Calculo Diferencial": { "asig": "Resolver problemas de optimizacion y tasas de cambio utilizando derivadas e integrales.", "prog": "Aplicar ciencias basicas e ingenieria para optimizacion de procesos productivos.", "perfil": "Competencia de Modelacion: Aplica ciencias basicas para optimizacion." },
        "Calculo Integral": { "asig": "Calcular areas, volumenes y trabajo aplicando teorias de integracion.", "prog": "Aplicar ciencias basicas e ingenieria para optimizacion de procesos productivos.", "perfil": "Competencia de Modelacion: Aplica ciencias basicas para optimizacion." },
        "Calculo Multivariado": { "asig": "Modelar fenomenos fisicos y matematicos en multiples dimensiones.", "prog": "Aplicar ciencias basicas para entender sistemas complejos de ingenieria.", "perfil": "Competencia de Modelacion: Aplica ciencias basicas para optimizacion." },
        "Ecuaciones Diferenciales": { "asig": "Resolver sistemas dinamicos y modelar el comportamiento de fenomenos fisicos continuos.", "prog": "Aplicar ciencias basicas para entender sistemas complejos de ingenieria.", "perfil": "Competencia de Modelacion: Aplica ciencias basicas para optimizacion." },
        "Algebra Lineal": { "asig": "Aplicar espacios vectoriales y matrices en la resolucion de sistemas de ecuaciones lineales.", "prog": "Soportar la toma de decisiones logisticas mediante modelos matriciales.", "perfil": "Competencia de Modelacion: Aplica ciencias basicas para optimizacion." },
        "Fisica I": { "asig": "Comprender los principios de la mecanica clasica y cinematica para el diseno de maquinas.", "prog": "Garantizar la comprension del comportamiento fisico de los materiales en produccion.", "perfil": "Competencia de Modelacion: Aplica ciencias basicas para optimizacion." },
        "Fisica II": { "asig": "Analizar principios de electromagnetismo y ondas aplicados a procesos industriales.", "prog": "Garantizar la comprension del comportamiento fisico de los materiales en produccion.", "perfil": "Competencia de Modelacion: Aplica ciencias basicas para optimizacion." },
        "Estadist. Descriptiva": { "asig": "Analizar datos cuantitativos utilizando software estadistico para la toma de decisiones.", "prog": "Integrar el analisis de datos y modelos probabilisticos en la logistica y produccion.", "perfil": "Competencia de Modelacion: Propone soluciones basadas en evidencia matematica." },
        "Estadist. Inferencial": { "asig": "Aplicar tecnicas de muestreo e inferencia para estimar comportamientos poblacionales.", "prog": "Integrar el analisis de datos y modelos probabilisticos en la logistica y produccion.", "perfil": "Competencia de Modelacion: Propone soluciones basadas en evidencia matematica." },
        "Termodinamica": { "asig": "Analizar los flujos de energia y calor en sistemas mecanicos y de fluidos.", "prog": "Optimizar el consumo energetico dentro de las operaciones industriales.", "perfil": "Competencia Sostenible: Disena sistemas eficientes energeticamente." }
    },
    "Tecnologia 4.0": {
        "Fund. Programacion": { "asig": "Desarrollar algoritmos computacionales estructurados para la solucion automatizada de problemas.", "prog": "Implementar TI y programacion en la gestion de datos empresariales.", "perfil": "Competencia Tecnologica: Integra IA, Big Data y simulacion en procesos." },
        "Inteligencia Artificial": { "asig": "Comprender conceptos de Machine Learning y reconocer su relevancia industrial.", "prog": "Aplicar herramientas de analisis y TI para optimizar procesos empresariales.", "perfil": "Competencia Tecnologica: Integra IA, Big Data y simulacion en procesos." },
        "Big Data Analitica": { "asig": "Procesar grandes volumenes de datos estructurados para predecir tendencias operativas.", "prog": "Aplicar herramientas de analisis y TI para optimizar la toma de decisiones.", "perfil": "Competencia Tecnologica: Integra IA, Big Data y simulacion en procesos." },
        "Modelac. Simul. IA": { "asig": "Crear gemelos digitales y simulaciones de planta usando Inteligencia Artificial.", "prog": "Implementar simulacion avanzada para predecir cuellos de botella.", "perfil": "Competencia Tecnologica: Integra IA, Big Data y simulacion en procesos." },
        "Electiva III": { "asig": "Identificar oportunidades de automatizacion y adopcion tecnologica en procesos.", "prog": "Implementar soluciones de Industria 4.0 en organizaciones del entorno.", "perfil": "Competencia Tecnologica: Integra IA, Big Data y simulacion en procesos." },
        "Competencias Digitales": { "asig": "Desarrollar habilidades en el uso de ecosistemas tecnologicos y herramientas ofimaticas en la nube.", "prog": "Aplicar herramientas de analisis y TI para optimizar procesos empresariales.", "perfil": "Competencia Tecnologica: Integra IA, Big Data y simulacion en procesos." }
    },
    "Ingenieria Aplicada": {
        "Intro Ing. Industrial": { "asig": "Identificar el campo de accion, historia y tendencias de la ingenieria industrial.", "prog": "Apropiar el rol del ingeniero en la cadena de suministro y produccion.", "perfil": "Competencia de Diseno: Gestiona procesos industriales y de servicios." },
        "Procesos Industriales": { "asig": "Analizar metodos de transformacion de materia prima y flujo logistico.", "prog": "Disenar lineas de produccion eficientes minimizando mermas operativas.", "perfil": "Competencia de Diseno: Gestiona procesos industriales y de servicios." },
        "Gerencia Calidad Six Sigma": { "asig": "Implementar herramientas de control estadistico para reducir variabilidad y defectos (DMAIC).", "prog": "Garantizar estandares de calidad internacional en procesos de manufactura.", "perfil": "Competencia de Diseno: Gestiona procesos industriales y de servicios." },
        "Lean Manufacturing": { "asig": "Aplicar principios Lean (5S, Kanban, Kaizen) para la eliminacion sistematica de desperdicios.", "prog": "Gestionar integralmente la cadena de valor aplicando manufactura esbelta.", "perfil": "Competencia de Diseno: Gestiona procesos industriales y de servicios." },
        "IO I Prog. Lineal": { "asig": "Modelar problemas de transporte y asignacion maximizando la utilidad a traves de programacion lineal.", "prog": "Optimizar el uso de recursos limitados en la operacion logistica.", "perfil": "Competencia de Optimizacion: Modela sistemas de operaciones complejos." },
        "IO II Estocasticos": { "asig": "Aplicar teorias de colas, inventarios y Markov para tomar decisiones bajo incertidumbre.", "prog": "Optimizar el uso de recursos limitados en cadenas de suministro probabilisticas.", "perfil": "Competencia de Optimizacion: Modela sistemas de operaciones complejos." },
        "Distribucion Planta": { "asig": "Disenar el layout espacial optimo para minimizar tiempos de transporte interno.", "prog": "Disenar procesos de manufactura garantizando el flujo continuo y ergonomico.", "perfil": "Competencia de Diseno: Gestiona procesos industriales y de servicios." },
        "Gestion Operac. IA": { "asig": "Controlar las operaciones logisticas y de almacen empleando algoritmos y sistemas inteligentes.", "prog": "Integrar el flujo de la cadena de suministro y predecir la demanda mediante tecnologia avanzada.", "perfil": "Competencia de Optimizacion: Modela sistemas de operaciones complejos." },
        "Produccion e IA": { "asig": "Gestionar y automatizar los programas maestros de produccion (MPS) usando analitica predictiva.", "prog": "Optimizar la programacion de maquinaria y rutas de produccion basadas en datos en tiempo real.", "perfil": "Competencia de Optimizacion: Modela sistemas de operaciones complejos." },
        "SIG": { "asig": "Disenar sistemas de calidad, medio ambiente y seguridad (HSEQ).", "prog": "Garantizar el cumplimiento normativo e implementar sistemas integrados ISO.", "perfil": "Competencia de Diseno: Gestiona procesos industriales y de servicios." },
        "Lab. Innovacion": { "asig": "Formular modelos de negocio innovadores a traves de metodologias agiles (Design Thinking).", "prog": "Desarrollar capacidades de intraemprendimiento para mejorar la competitividad empresarial.", "perfil": "Competencia de Liderazgo: Lidera equipos con vision estrategica e innovadora." },
        "Dibujo Industrial": { "asig": "Modelar piezas y maquinaria en software CAD (Computer-Aided Design) para produccion.", "prog": "Integrar herramientas de diseno computacional para soportar procesos de manufactura.", "perfil": "Competencia de Diseno: Gestiona procesos industriales y de servicios." }
    },
    "Gestion": {
        "Fund. Contables": { "asig": "Interpretar estados financieros y dinamicas contables basicas.", "prog": "Integrar el analisis financiero en la planeacion estrategica.", "perfil": "Competencia de Diseno: Gestiona procesos con eficiencia economica." },
        "Costos y Presupuestos": { "asig": "Estructurar sistemas de costeo ABC y elaborar presupuestos operativos.", "prog": "Garantizar la eficiencia financiera y reduccion de sobrecostos operacionales.", "perfil": "Competencia de Diseno: Gestiona procesos con eficiencia economica." },
        "Derecho Laboral": { "asig": "Aplicar la normatividad laboral colombiana en la vinculacion de talento.", "prog": "Garantizar el cumplimiento de normas laborales en las operaciones.", "perfil": "Competencia de Liderazgo: Lidera equipos bajo estrictos principios legales." },
        "Teoria Organizacional": { "asig": "Comprender la estructura, diseno y comportamiento de las organizaciones.", "prog": "Liderar procesos de cambio y adaptacion estructural en empresas del sector.", "perfil": "Competencia de Liderazgo: Lidera equipos con vision estrategica." },
        "Gerencia Talento Humano": { "asig": "Disenar planes de capacitacion, medicion de desempeno y bienestar corporativo.", "prog": "Maximizar la productividad del personal con un enfoque humanista.", "perfil": "Competencia de Liderazgo: Lidera equipos con vision estrategica." },
        "Form. Eval. Proyectos": { "asig": "Formular estudios de mercado, tecnicos y financieros para evaluar viabilidad (TIR, VPN).", "prog": "Gestionar portafolios de inversion que garanticen el ROI institucional.", "perfil": "Competencia Sostenible: Formula proyectos con enfoque economico." },
        "Pensam. Estrategico": { "asig": "Construir escenarios prospectivos para asegurar la competitividad a largo plazo.", "prog": "Disenar estrategias organizacionales basadas en inteligencia de negocios.", "perfil": "Competencia de Liderazgo: Lidera equipos con vision estrategica." },
        "Diagnostico Empresarial": { "asig": "Evaluar el entorno interno y externo mediante DOFA y matrices estrategicas.", "prog": "Disenar estrategias organizacionales basadas en inteligencia de negocios.", "perfil": "Competencia de Liderazgo: Lidera equipos con vision estrategica." },
        "Gerencia Tecnologica": { "asig": "Gestionar la transferencia tecnologica y la innovacion (I+D+i) en empresas.", "prog": "Implementar vigilancia tecnologica para liderar la adopcion de la industria 4.0.", "perfil": "Competencia de Liderazgo: Lidera equipos con vision estrategica." },
        "Gestion Proy. Sostenibles": { "asig": "Gerenciar la ejecucion de proyectos alineados a los Objetivos de Desarrollo Sostenible (ODS).", "prog": "Garantizar la entrega de proyectos con triple impacto (Economico, Social y Ambiental).", "perfil": "Competencia Sostenible: Formula proyectos con enfoque social y economico." },
        "Electiva I": { "asig": "Formular estrategias de marketing apoyadas en canales digitales y embudos de conversion.", "prog": "Conectar los procesos operativos con las necesidades reales del mercado digital.", "perfil": "Competencia de Diseno: Gestiona y mejora la propuesta de valor hacia el cliente." },
        "Electiva II": { "asig": "Implementar sistemas de informacion transaccionales (ERP, CRM) para la gestion de recursos.", "prog": "Aplicar TI y bases de datos para optimizar procesos empresariales.", "perfil": "Competencia Tecnologica: Integra IA, Big Data y simulacion en sistemas productivos." },
        "Fundamentos de economia": { "asig": "Analizar los principios micro y macroeconomicos que afectan los mercados globales.", "prog": "Evaluar la viabilidad financiera y de mercado de proyectos de ingenieria.", "perfil": "Competencia de Diseno: Gestiona y mejora procesos con eficiencia economica." }
    },
    "Investigacion": {
        "Comp. Investigativas": { "asig": "Aplicar los fundamentos del metodo cientifico para la formulacion de problemas reales.", "prog": "Desarrollar capacidades deductivas e inductivas para generar nuevo conocimiento.", "perfil": "Competencia Investigativa: Propone soluciones basadas en evidencia." },
        "Diseno Experimentos": { "asig": "Planificar pruebas estadisticas factoriales para identificar las variables criticas de un proceso.", "prog": "Optimizar productos o procesos mediante la comprobacion de hipotesis ingenieriles.", "perfil": "Competencia Investigativa: Propone soluciones basadas en evidencia." },
        "Metodos Cuantitativos": { "asig": "Utilizar tecnicas matematicas avanzadas para la modelacion y mineria de datos.", "prog": "Aplicar rigor analitico en la prediccion de fenomenos organizacionales.", "perfil": "Competencia Investigativa: Propone soluciones basadas en evidencia matematica." }
    },
    "Humanistica": {
        "Catedra de la Paz": { "asig": "Fomentar el dialogo y la mediacion como herramienta para la construccion de tejido social.", "prog": "Liderar talento humano en entornos de conflicto, promoviendo bienestar y paz.", "perfil": "Competencia de Liderazgo: Lidera equipos con alta responsabilidad etica." },
        "Desarrollo Sostenible": { "asig": "Identificar impactos ambientales y formular estrategias de mitigacion circular.", "prog": "Disenar procesos productivos bajo estandares internacionales de sostenibilidad.", "perfil": "Competencia Sostenible: Formula proyectos con enfoque social y economico." },
        "Bioetica, Globalizacion y Economia": { "asig": "Analizar los dilemas eticos de la tecnologia y la globalizacion en la industria.", "prog": "Disenar procesos productivos bajo estandares de sostenibilidad y bioetica.", "perfil": "Competencia Sostenible: Formula proyectos con enfoque humanistico." },
        "Ingles I": { "asig": "Comprender estructuras gramaticales basicas y vocabulario elemental en ingles (A1).", "prog": "Desarrollar competencias bilingues para la apropiacion de manuales tecnicos.", "perfil": "Competencia Global: Comunicacion en entornos profesionales multiculturales." },
        "Ingles II": { "asig": "Producir textos descriptivos cortos y sostener conversaciones rutinarias (A2).", "prog": "Desarrollar competencias bilingues para la interaccion tecnica internacional.", "perfil": "Competencia Global: Comunicacion en entornos profesionales multiculturales." },
        "Ingles III": { "asig": "Interpretar documentos tecnicos moderados y sostener discursos orientados a negocios (B1).", "prog": "Consolidar las habilidades linguisticas para el analisis de mercados internacionales.", "perfil": "Competencia Global: Comunicacion en entornos profesionales multiculturales." },
        "Ingles IV": { "asig": "Sustentar proyectos de ingenieria y argumentar soluciones corporativas en ingles tecnico (B1+).", "prog": "Asegurar la competitividad global del egresado en ambientes corporativos extranjeros.", "perfil": "Competencia Global: Comunicacion en entornos profesionales multiculturales." }
    }
};

window.updateAsignaturas = function() {
    const comp = document.getElementById('selComponente').value;
    const selAsig = document.getElementById('selAsignatura');
    selAsig.innerHTML = '<option value="">-- Seleccione la asignatura --</option>';
    if (comp && window.trazabilidadData[comp]) {
        Object.keys(window.trazabilidadData[comp]).forEach(k => {
            selAsig.innerHTML += '<option value="' + k + '">' + k + '</option>';
        });
        selAsig.disabled = false;
        selAsig.style.borderColor = '#FF6600';
    } else {
        selAsig.disabled = true;
        selAsig.style.borderColor = '#374151';
    }
    window.updateTrace();
};

window.updateTrace = function() {
    const comp = document.getElementById('selComponente').value;
    const asig = document.getElementById('selAsignatura').value;
    const trace = document.getElementById('traceFlow');
    
    if (comp && asig && window.trazabilidadData[comp][asig]) {
        const d = window.trazabilidadData[comp][asig];
        document.getElementById('txtRaAsig').innerHTML = '<strong>"' + d.asig + '"</strong>';
        document.getElementById('txtRaProg').innerHTML = '<strong>"' + d.prog + '"</strong>';
        document.getElementById('txtPerfil').innerHTML = '<span style="font-size:1.1em; color:#10B981;">' + d.perfil + '</span>';
        
        trace.style.opacity = '1';
        trace.style.pointerEvents = 'auto';
        trace.style.transform = 'scale(1.02)';
        setTimeout(() => trace.style.transform = 'scale(1)', 200);
    } else {
        trace.style.opacity = '0.3';
        trace.style.pointerEvents = 'none';
        document.getElementById('txtRaAsig').innerHTML = '"Esperando seleccion..."';
        document.getElementById('txtRaProg').innerHTML = '...';
        document.getElementById('txtPerfil').innerHTML = '...';
    }
};
