// Sección Condición 3 - Diseño Premium e Interactivo
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS.c3 = `
<div class="slide-header" style="border-bottom:3px solid #C8102E; padding-bottom:15px; margin-bottom:25px;">
    <div style="display:flex; justify-content:space-between; align-items:center;">
        <h1 style="color:#0A2540; font-size:2.2rem; margin:0; font-weight:bold;">3. Contenidos Curriculares e Innovación</h1>
        <div style="background:#0A2540; color:white; padding:10px 20px; border-radius:12px; text-align:center; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
            <span style="font-size:1.6rem; font-weight:bold;">144</span><br><span style="font-size:0.7rem; letter-spacing:1px;">CRÉDITOS</span>
        </div>
    </div>
</div>

<div style="background:#f8fafc; padding:20px; border-radius:15px; margin-bottom:30px; border-left:6px solid #FF6600; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
    <h3 style="color:#0A2540; margin:0 0 10px 0; font-size:1.3rem;"><i class="fas fa-university mr-2"></i> Modelo: Formación en Contextos de Aplicación</h3>
    <p style="color:#334155; font-size:1rem; line-height:1.6; margin:0;">
        Garantizamos que los Resultados de Aprendizaje se alcancen en interacción directa con el sector real mediante el uso de <strong>FlexSim</strong> y <strong>Virtual Pro</strong>, integrando la teoría con la práctica industrial 4.0.
    </p>
</div>

<!-- SELECTOR DE TRAZABILIDAD (DISEÑO ORIGINAL) -->
<div style="background:white; border:1px solid #e2e8f0; border-radius:20px; padding:30px; margin-bottom:40px; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
    <div style="color:#FF6600; font-weight:bold; font-size:0.9rem; margin-bottom:8px; text-transform:uppercase; letter-spacing:1px;">Selector de Trazabilidad</div>
    <h2 style="margin-top:0; color:#0A2540; font-size:1.5rem; margin-bottom:25px;">Componente → Asignatura → R.A. → Competencia</h2>
    
    <div style="display:flex; gap:12px; margin-bottom:30px; flex-wrap:wrap;">
        <button class="btn-selector active b-basicas" onclick="updateTrace('basicas', this)">Ciencias Básicas</button>
        <button class="btn-selector b-aplicada" onclick="updateTrace('aplicada', this)">Ing. Aplicada</button>
        <button class="btn-selector b-gestion" onclick="updateTrace('gestion', this)">Eco-Gestión</button>
        <button class="btn-selector b-investigacion" onclick="updateTrace('investigacion', this)">Investigación</button>
    </div>

    <div style="border-radius:12px; overflow:hidden; border:1px solid #e2e8f0;">
        <table class="trace-table">
            <thead>
                <tr>
                    <th style="width:25%;">Asignatura</th>
                    <th style="width:40%;">R.A. Específico</th>
                    <th style="width:35%;">Competencia Egreso</th>
                </tr>
            </thead>
            <tbody id="traceBody"></tbody>
        </table>
    </div>
</div>

<style>
    .btn-selector { padding:12px 24px; border-radius:12px; border:none; font-weight:bold; cursor:pointer; transition:all 0.3s; font-size:0.95rem; background:#f1f5f9; color:#64748b; }
    .btn-selector.active { transform:translateY(-3px); box-shadow:0 6px 12px rgba(0,0,0,0.15); color:white; }
    .b-basicas.active { background:#0A2540; }
    .b-aplicada.active { background:#C8102E; }
    .b-gestion.active { background:#FFB81C; color:#0A2540; }
    .b-investigacion.active { background:#8B5CF6; }
    
    .trace-table { width:100%; border-collapse:collapse; background:white; }
    .trace-table th { background:#0A2540; color:white; padding:15px 20px; text-align:left; font-size:0.9rem; text-transform:uppercase; letter-spacing:1px; }
    .trace-table td { padding:18px 20px; border-bottom:1px solid #f1f5f9; font-size:0.95rem; color:#334155; line-height:1.5; }
    .trace-table tr:hover { background:#f8fafc; }
</style>

<script>
(function(){
    var db = {
        basicas: [
            {a:"Cálculo Diferencial", r:"Aplica el concepto de derivada para la optimización de funciones en contextos de ingeniería.", c:"Modelamiento cuantitativo de problemas industriales."},
            {a:"Física Mecánica", r:"Comprende y aplica los principios de la mecánica clásica en sistemas físicos.", c:"Diseño de sistemas mecánicos industriales."},
            {a:"Estadística Inferencial", r:"Utiliza herramientas estadísticas para la toma de decisiones bajo incertidumbre.", c:"Gestión de datos para la productividad."},
            {a:"Álgebra Lineal", r:"Resuelve sistemas de ecuaciones lineales aplicados a modelos de producción.", c:"Optimización operativa y matemática."}
        ],
        aplicada: [
            {a:"Modelación y Simulación", r:"Construye modelos dinámicos en FlexSim para optimizar flujos de procesos.", c:"Ingeniería 4.0 y transformación digital."},
            {a:"Investigación de Operaciones", r:"Diseña modelos de programación lineal para la asignación óptima de recursos.", c:"Eficiencia sistémica organizacional."},
            {a:"Procesos Industriales", r:"Analiza los procesos de transformación de materia prima en Virtual Pro.", c:"Gestión de la manufactura moderna."},
            {a:"Diseño de Planta", r:"Proyecta distribuciones espaciales eficientes minimizando costos de manejo de materiales.", c:"Diseño de infraestructura productiva."}
        ],
        gestion: [
            {a:"Ingeniería Económica", r:"Evalúa la viabilidad financiera de proyectos de inversión en ingeniería.", c:"Gestión económica y financiera."},
            {a:"Logística y SCM", r:"Diseña redes de valor integrando proveedores, producción y clientes.", c:"Optimización de la cadena de suministro."},
            {a:"Sistemas de Gestión", r:"Implementa normativas de calidad y seguridad bajo estándares internacionales.", c:"Mejora continua y sostenibilidad."}
        ],
        investigacion: [
            {a:"Metodología de Inv.", r:"Formula protocolos de investigación aplicados a problemas del sector real.", c:"Generación de conocimiento técnico."},
            {a:"Proyecto de Grado", r:"Desarrolla una solución integral a un reto empresarial del entorno regional.", c:"Innovación y emprendimiento profesional."}
        ]
    };

    window.updateTrace = function(key, btn) {
        document.querySelectorAll('.btn-selector').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        var html = '';
        db[key].forEach(i => {
            html += '<tr><td><strong>'+i.a+'</strong></td><td>'+i.r+'</td><td>'+i.c+'</td></tr>';
        });
        document.getElementById('traceBody').innerHTML = html;
    };

    setTimeout(() => {
        var defaultBtn = document.querySelector('.b-basicas');
        if(defaultBtn) updateTrace('basicas', defaultBtn);
    }, 100);
})();
</script>
`;
