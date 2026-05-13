// Sección Condición 3 - Aspectos Curriculares (VERSIÓN FINAL COMPLETA)
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS.c3 = `
<div class="slide-header" style="border-bottom:3px solid #C8102E; padding-bottom:15px; margin-bottom:25px;">
    <div style="display:flex; justify-content:space-between; align-items:center;">
        <div>
            <div class="slide-subtitle" style="color:#C8102E; font-weight:bold; text-transform:uppercase;">Condición 3</div>
            <h1 style="color:#0A2540; font-size:2.2rem; margin:0; font-weight:bold;">Contenidos Curriculares e Innovación</h1>
        </div>
        <div style="text-align:right;">
            <div style="background:#0A2540; color:white; padding:10px 20px; border-radius:10px;">
                <span style="font-size:1.5rem; font-weight:bold;">144</span><br><span style="font-size:0.7rem;">CRÉDITOS TOTALES</span>
            </div>
        </div>
    </div>
</div>

<!-- Modelo Pedagógico Detallado -->
<div style="background:#f1f5f9; padding:20px; border-radius:12px; margin-bottom:30px; border-left:6px solid #FF6600;">
    <h3 style="color:#0A2540; margin-top:0;"><i class="fas fa-lightbulb mr-2"></i> Modelo: Formación en Contextos de Aplicación</h3>
    <p style="color:#334155; line-height:1.6; font-size:0.95rem;">
        Este modelo permite que los <strong>Resultados de Aprendizaje (RA)</strong> se alcancen en interacción directa con el sector real. Independiente de la tipología de la asignatura, el estudiante aplica conocimientos en entornos simulados o retos empresariales.
    </p>
    <div style="display:flex; gap:15px; margin-top:10px;">
        <div style="background:white; padding:10px; border-radius:8px; flex:1; border:1px solid #e2e8f0;">
            <strong style="color:#C8102E;">Asignaturas T:</strong> Fomentan la fundamentación científica y teórica necesaria para la toma de decisiones.
        </div>
        <div style="background:white; padding:10px; border-radius:8px; flex:1; border:1px solid #e2e8f0;">
            <strong style="color:#C8102E;">Asignaturas TP:</strong> Desarrollo práctico con software de simulación especializado (FlexSim, Virtual Pro).
        </div>
    </div>
</div>

<style>
    .comp-box { background:white; border:1px solid #e2e8f0; border-radius:12px; margin-bottom:20px; overflow:hidden; }
    .comp-title { background:#0A2540; color:white; padding:10px 15px; font-weight:bold; font-size:1rem; }
    .grid-courses { display:grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap:10px; padding:15px; }
    .course-item { background:#f8fafc; padding:8px 12px; border-radius:6px; font-size:0.85rem; border:1px solid #edf2f7; display:flex; justify-content:space-between; align-items:center; }
    .type-badge { font-size:0.7rem; font-weight:bold; padding:2px 5px; border-radius:4px; }
    .t { background:#dcfce7; color:#166534; }
    .tp { background:#fef9c3; color:#854d0e; }
</style>

<!-- MALLA COMPLETA POR COMPONENTES -->
<div class="comp-box">
    <div class="comp-title">1. CIENCIAS BÁSICAS DE INGENIERÍA</div>
    <div class="grid-courses">
        <div class="course-item">Cálculo Diferencial <span class="type-badge t">T</span></div>
        <div class="course-item">Álgebra Lineal <span class="type-badge t">T</span></div>
        <div class="course-item">Cálculo Integral <span class="type-badge t">T</span></div>
        <div class="course-item">Física I <span class="type-badge t">T</span></div>
        <div class="course-item">Estadística Descriptiva <span class="type-badge t">T</span></div>
        <div class="course-item">Cálculo Multivariado <span class="type-badge t">T</span></div>
        <div class="course-item">Física II <span class="type-badge t">T</span></div>
        <div class="course-item">Estadística Inferencial <span class="type-badge t">T</span></div>
        <div class="course-item">Ecuaciones Diferenciales <span class="type-badge t">T</span></div>
    </div>
</div>

<div class="comp-box">
    <div class="comp-title">2. TECNOLOGÍA, ANÁLISIS Y TRANSFORMACIÓN DE DATOS</div>
    <div class="grid-courses">
        <div class="course-item">Introducción a la Ing. Ind. <span class="type-badge t">T</span></div>
        <div class="course-item">Fund. de Programación <span class="type-badge tp">TP</span></div>
        <div class="course-item">Inteligencia Artificial <span class="type-badge t">T</span></div>
        <div class="course-item">Big Data y Analítica <span class="type-badge t">T</span></div>
        <div class="course-item">Investigación de Mercados <span class="type-badge t">T</span></div>
        <div class="course-item">Métodos Cualit. y Cuant. <span class="type-badge t">T</span></div>
        <div class="course-item">Modelación y Simulación <span class="type-badge tp">TP</span></div>
        <div class="course-item">Diseño de Experimentos <span class="type-badge tp">TP</span></div>
    </div>
</div>

<div class="comp-box">
    <div class="comp-title">3. PROCESOS Y SISTEMAS PRODUCTIVOS</div>
    <div class="grid-courses">
        <div class="course-item">Dibujo Industrial <span class="type-badge tp">TP</span></div>
        <div class="course-item">Procesos Industriales <span class="type-badge t">T</span></div>
        <div class="course-item">Inv. de Operaciones I <span class="type-badge t">T</span></div>
        <div class="course-item">Termodinámica <span class="type-badge t">T</span></div>
        <div class="course-item">Inv. de Operaciones II <span class="type-badge t">T</span></div>
        <div class="course-item">Gerencia de Prod. I <span class="type-badge t">T</span></div>
        <div class="course-item">Logística y Suministro <span class="type-badge t">T</span></div>
        <div class="course-item">Gerencia de Prod. II <span class="type-badge t">T</span></div>
        <div class="course-item">Diseño de Planta <span class="type-badge tp">TP</span></div>
        <div class="course-item">Hig. y Seg. Industrial <span class="type-badge t">T</span></div>
    </div>
</div>

<div class="comp-box">
    <div class="comp-title">4. GESTIÓN ORGANIZACIONAL, ECONÓMICA Y FINANCIERA</div>
    <div class="grid-courses">
        <div class="course-item">Fund. Contables <span class="type-badge t">T</span></div>
        <div class="course-item">Teoría Organizacional <span class="type-badge t">T</span></div>
        <div class="course-item">Gerencia de Calidad <span class="type-badge t">T</span></div>
        <div class="course-item">Talento Humano <span class="type-badge t">T</span></div>
        <div class="course-item">Ing. Económica <span class="type-badge t">T</span></div>
        <div class="course-item">Sist. Integrados Gestión <span class="type-badge tp">TP</span></div>
        <div class="course-item">Costos y Presupuestos <span class="type-badge tp">TP</span></div>
        <div class="course-item">Pensamiento Estratégico <span class="type-badge t">T</span></div>
        <div class="course-item">Gerencia Tecnológica <span class="type-badge t">T</span></div>
        <div class="course-item">Legislación Empresarial <span class="type-badge t">T</span></div>
    </div>
</div>

<!-- Competencias y RA Completos -->
<div style="background:#0A2540; color:white; padding:25px; border-radius:15px; margin-top:30px;">
    <h3 style="color:#FF6600; margin-top:0; font-size:1.3rem;"><i class="fas fa-graduation-cap mr-2"></i> Competencias y Resultados de Aprendizaje</h3>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div>
            <h4 style="border-bottom:1px solid rgba(255,255,255,0.2); padding-bottom:5px;">COMPETENCIA DEL PERFIL</h4>
            <p style="font-size:0.85rem; line-height:1.6;">
                "Diseñar, implementar y gestionar sistemas integrados de producción de bienes y servicios, optimizando recursos técnicos, humanos y financieros para la competitividad organizacional en el marco de la sostenibilidad e Industria 4.0."
            </p>
        </div>
        <div>
            <h4 style="border-bottom:1px solid rgba(255,255,255,0.2); padding-bottom:5px;">RESULTADOS DE APRENDIZAJE (RA)</h4>
            <ul style="font-size:0.8rem; padding-left:15px;">
                <li>Identificar, formular y resolver problemas de ingeniería aplicando ciencias básicas.</li>
                <li>Diseñar soluciones industriales con impacto social y ambiental positivo.</li>
                <li>Utilizar herramientas tecnológicas (IA, Simulación) para la toma de decisiones estratégicas.</li>
            </ul>
        </div>
    </div>
</div>
`;
