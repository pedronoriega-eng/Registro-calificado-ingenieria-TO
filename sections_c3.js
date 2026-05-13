// Sección Condición 3 - Aspectos Curriculares (Completa)
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS.c3 = `
<div class="slide-header" style="border-bottom:2px solid #FF6600; padding-bottom:15px; margin-bottom:25px;">
    <div class="slide-subtitle" style="color:#FF6600; font-weight:bold; text-transform:uppercase; font-size:1.1rem;">Condición 3</div>
    <h1 style="color:#0A2540; font-size:2.2rem; margin:0; font-weight:bold;">Aspectos Curriculares e Innovación Pedagógica</h1>
</div>

<!-- Modelo Pedagógico -->
<div style="display:grid; grid-template-columns: 1fr 1fr; gap:25px; margin-bottom:30px;">
    <div style="background:#f8fafc; padding:25px; border-radius:15px; border-left:5px solid #0A2540; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
        <h3 style="color:#0A2540; font-weight:bold; margin-top:0; font-size:1.4rem;"><i class="fas fa-university mr-2"></i> Modelo Pedagógico</h3>
        <p style="font-size:1.1rem; line-height:1.6; color:#334155;">
            Nuestro modelo de <strong>"Formación en Contextos de Aplicación"</strong> garantiza que el aprendizaje no sea solo teórico, sino una interacción constante con el sector real.
        </p>
        <ul style="color:#475569; font-size:1rem; padding-left:20px;">
            <li style="margin-bottom:8px;">Aprendizaje basado en retos industriales reales.</li>
            <li style="margin-bottom:8px;">Resultados de aprendizaje medibles en entornos de simulación.</li>
            <li style="margin-bottom:8px;">Integración de competencias blandas y técnicas.</li>
        </ul>
    </div>
    <div style="background:linear-gradient(135deg, #0A2540, #1e40af); padding:25px; border-radius:15px; color:white; box-shadow:0 10px 20px rgba(10,37,64,0.2);">
        <h3 style="font-weight:bold; margin-top:0; font-size:1.4rem; color:#FF6600;"><i class="fas fa-microchip mr-2"></i> Industria 4.0 y Simulación</h3>
        <p style="font-size:1rem; line-height:1.6; opacity:0.9;">
            Las asignaturas de tipología <strong>Teórico-Práctica (TP)</strong> se desarrollan mediante software especializado y simuladores potenciales para Ingeniería Industrial:
        </p>
        <div style="display:flex; gap:10px; margin-top:15px;">
            <div style="background:rgba(255,255,255,0.1); padding:10px; border-radius:8px; flex:1; text-align:center;">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/FlexSim_Logo.png" style="height:30px; filter:brightness(0) invert(1); margin-bottom:5px;"><br>
                <strong>FlexSim</strong>
            </div>
            <div style="background:rgba(255,255,255,0.1); padding:10px; border-radius:8px; flex:1; text-align:center;">
                <i class="fas fa-vr-cardboard fa-2x" style="color:#FF6600;"></i><br>
                <strong>Virtual Pro</strong>
            </div>
            <div style="background:rgba(255,255,255,0.1); padding:10px; border-radius:8px; flex:1; text-align:center;">
                <i class="fas fa-code-branch fa-2x"></i><br>
                <strong>Apps Propias</strong>
            </div>
        </div>
        <p style="font-size:0.85rem; margin-top:10px; font-style:italic;">*Apps desarrolladas por semilleros de investigación en conjunto con el programa de Software.</p>
    </div>
</div>

<!-- Plan de Estudios Detallado -->
<h2 style="color:#0A2540; border-bottom:2px solid #e2e8f0; padding-bottom:10px;"><i class="fas fa-list-ol mr-2"></i> Estructura del Plan de Estudios (144 Créditos)</h2>

<style>
    .component-card { background: white; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 20px; overflow: hidden; }
    .component-header { background: #f1f5f9; padding: 12px 20px; font-weight: bold; color: #0A2540; display: flex; justify-content: space-between; align-items: center; }
    .course-table { width: 100%; border-collapse: collapse; font-size: 0.9rem; }
    .course-table th { background: #f8fafc; padding: 10px; text-align: left; border-bottom: 2px solid #e2e8f0; color: #64748b; }
    .course-table td { padding: 10px; border-bottom: 1px solid #f1f5f9; }
    .tag-t { background: #dcfce7; color: #166534; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; }
    .tag-tp { background: #fef9c3; color: #854d0e; padding: 2px 6px; border-radius: 4px; font-size: 0.75rem; font-weight: bold; }
</style>

<div class="component-card">
    <div class="component-header">
        <span>CIENCIAS BÁSICAS DE INGENIERÍA</span>
        <span style="background:#0A2540; color:white; font-size:0.7rem; padding:2px 8px; border-radius:10px;">9 ASIGNATURAS</span>
    </div>
    <table class="course-table">
        <thead>
            <tr><th>Sem</th><th>Asignatura</th><th>Tipo</th><th>CR</th><th>Software / Aplicación</th></tr>
        </thead>
        <tbody>
            <tr><td>1</td><td>Cálculo Diferencial</td><td><span class="tag-t">T</span></td><td>3</td><td>GeoGebra / Symbolab</td></tr>
            <tr><td>1</td><td>Álgebra Lineal</td><td><span class="tag-t">T</span></td><td>3</td><td>MATLAB Basic</td></tr>
            <tr><td>2</td><td>Cálculo Integral</td><td><span class="tag-t">T</span></td><td>3</td><td>Wolfram Alpha</td></tr>
            <tr><td>2</td><td>Física I</td><td><span class="tag-t">T</span></td><td>3</td><td>PhET Simulations</td></tr>
            <tr><td>2</td><td>Estadística Descriptiva</td><td><span class="tag-t">T</span></td><td>3</td><td>Excel Avanzado / SPSS</td></tr>
            <tr><td>3</td><td>Cálculo Multivariado</td><td><span class="tag-t">T</span></td><td>3</td><td>Mathematica</td></tr>
            <tr><td>3</td><td>Física II</td><td><span class="tag-t">T</span></td><td>3</td><td>Lab Virtuales Institucionales</td></tr>
            <tr><td>3</td><td>Estadística Inferencial</td><td><span class="tag-t">T</span></td><td>3</td><td>R-Studio / Minitab</td></tr>
            <tr><td>4</td><td>Ecuaciones Diferenciales</td><td><span class="tag-t">T</span></td><td>3</td><td>Matlab / Python</td></tr>
        </tbody>
    </table>
</div>

<div class="component-card">
    <div class="component-header">
        <span>TECNOLOGÍA, ANÁLISIS Y TRANSFORMACIÓN DE DATOS</span>
        <span style="background:#FF6600; color:white; font-size:0.7rem; padding:2px 8px; border-radius:10px;">8 ASIGNATURAS</span>
    </div>
    <table class="course-table">
        <thead>
            <tr><th>Sem</th><th>Asignatura</th><th>Tipo</th><th>CR</th><th>Eje de Innovación</th></tr>
        </thead>
        <tbody>
            <tr><td>1</td><td>Introducción a la Ing. Industrial</td><td><span class="tag-t">T</span></td><td>3</td><td>Contexto Industrial 4.0</td></tr>
            <tr><td>1</td><td>Fundamentos de Programación</td><td><span class="tag-tp">TP</span></td><td>3</td><td>Python para Ingenieros</td></tr>
            <tr><td>3</td><td>Inteligencia Artificial</td><td><span class="tag-t">T</span></td><td>3</td><td>Machine Learning Aplicado</td></tr>
            <tr><td>6</td><td>Big Data y Analítica de Datos</td><td><span class="tag-t">T</span></td><td>3</td><td>Power BI / Tableau</td></tr>
            <tr><td>6</td><td>Investigación de Mercados</td><td><span class="tag-t">T</span></td><td>3</td><td>Análisis de Tendencias Digitales</td></tr>
            <tr><td>6</td><td>Métodos Cualitativos y Cuantitativos</td><td><span class="tag-t">T</span></td><td>3</td><td>Modelamiento Matemático</td></tr>
            <tr><td>7</td><td>Modelación y Simulación</td><td><span class="tag-tp">TP</span></td><td>3</td><td><strong>FlexSim / Arena</strong></td></tr>
            <tr><td>8</td><td>Diseño de Experimentos</td><td><span class="tag-tp">TP</span></td><td>3</td><td><strong>Virtual Pro / Minitab</strong></td></tr>
        </tbody>
    </table>
</div>

<div class="component-card">
    <div class="component-header">
        <span>PROCESOS Y SISTEMAS PRODUCTIVOS</span>
        <span style="background:#059669; color:white; font-size:0.7rem; padding:2px 8px; border-radius:10px;">10 ASIGNATURAS</span>
    </div>
    <table class="course-table">
        <thead>
            <tr><th>Sem</th><th>Asignatura</th><th>Tipo</th><th>CR</th><th>Práctica / Aplicación</th></tr>
        </thead>
        <tbody>
            <tr><td>1</td><td>Dibujo Industrial</td><td><span class="tag-tp">TP</span></td><td>3</td><td>AutoCAD / SolidWorks</td></tr>
            <tr><td>2</td><td>Procesos Industriales y de Manufactura</td><td><span class="tag-t">T</span></td><td>3</td><td>Visitas Virtuales 360°</td></tr>
            <tr><td>4</td><td>Investigación de Operaciones I</td><td><span class="tag-t">T</span></td><td>3</td><td>Solver / Lindo / Lingo</td></tr>
            <tr><td>5</td><td>Termodinámica</td><td><span class="tag-t">T</span></td><td>3</td><td>Simuladores Termo-químicos</td></tr>
            <tr><td>5</td><td>Investigación de Operaciones II</td><td><span class="tag-t">T</span></td><td>3</td><td>Teoría de Colas - Apps Propias</td></tr>
            <tr><td>5</td><td>Gerencia de la Producción I</td><td><span class="tag-t">T</span></td><td>3</td><td>ERP Simulado (SAP/Odoo)</td></tr>
            <tr><td>6</td><td>Logística y Cadena de Suministro</td><td><span class="tag-t">T</span></td><td>3</td><td>Simulación de Redes de Valor</td></tr>
            <tr><td>6</td><td>Gerencia de la Producción II</td><td><span class="tag-t">T</span></td><td>3</td><td>MRP / JIT / Lean Manufacturing</td></tr>
            <tr><td>7</td><td>Diseño de Planta y Dist. de Planta</td><td><span class="tag-tp">TP</span></td><td>3</td><td><strong>FlexSim Layout</strong></td></tr>
            <tr><td>8</td><td>Gestión de la Higiene y Seg. Industrial</td><td><span class="tag-t">T</span></td><td>3</td><td>Matriz de Riesgos Interactiva</td></tr>
        </tbody>
    </table>
</div>

<div style="background:#eff6ff; padding:20px; border-radius:12px; margin-top:20px;">
    <h3 style="color:#1e40af; margin-top:0;"><i class="fas fa-bullseye mr-2"></i> Resultados de Aprendizaje (RA)</h3>
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px; font-size:0.9rem; color:#1e3a8a;">
        <div style="background:white; padding:15px; border-radius:8px;">
            <strong>RA1: Análisis de Sistemas</strong><br>
            Capacidad para identificar, formular y resolver problemas complejos de ingeniería industrial aplicando principios de matemáticas, ciencias y tecnología 4.0.
        </div>
        <div style="background:white; padding:15px; border-radius:8px;">
            <strong>RA2: Diseño Industrial</strong><br>
            Diseña procesos y sistemas que cumplen necesidades específicas con consideraciones de salud pública, seguridad, bienestar social, cultural y ambiental.
        </div>
    </div>
</div>
`;
