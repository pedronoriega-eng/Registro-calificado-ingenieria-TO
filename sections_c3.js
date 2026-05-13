// Condición 3 - Contenidos Curriculares (Expanded)
window.SECTIONS.c3 = `
<div class="slide-header" style="border-bottom:2px solid #FF6600; padding-bottom:15px; margin-bottom:25px;">
    <div class="slide-subtitle" style="color:#FF6600; font-weight:bold; text-transform:uppercase; font-size:1.1rem;">Condición 03</div>
    <h1 style="color:#0A2540; font-size:2.2rem; margin:0; font-weight:bold;">Contenidos Curriculares</h1>
</div>
<div class="timeline" style="border-left:4px solid #374151; padding-left:25px;">

    <!-- COMPOSICIÓN -->
    <div class="event-card" style="background:white; color:#111827; padding:25px; border-radius:12px; margin-bottom:25px; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
        <span style="color:#FF6600; font-weight:bold; font-size:1rem; text-transform:uppercase; display:block; margin-bottom:5px;">COMPOSICIÓN CURRICULAR</span>
        <div style="color:#111827; font-weight:bold; font-size:1.5rem; margin-bottom:12px;">Plan de Estudios — 48 Asignaturas · 144 Créditos</div>
        <table style="width:100%; border-collapse:collapse; font-size:1.1rem; border:1px solid #e5e7eb;">
            <tr style="background:#0A2540; color:white;"><th style="padding:12px; text-align:left;">Componente</th><th style="padding:12px; text-align:center;">Asignaturas</th><th style="padding:12px; text-align:center;">%</th></tr>
            <tr><td style="padding:12px; border-bottom:1px solid #e5e7eb; font-weight:bold;">Ciencias Básicas</td><td style="text-align:center; padding:12px; border-bottom:1px solid #e5e7eb;">Física, Álgebra, Cálculo, Estadística</td><td style="text-align:center; padding:12px; border-bottom:1px solid #e5e7eb; font-weight:bold;">15%</td></tr>
            <tr><td style="padding:12px; border-bottom:1px solid #e5e7eb; font-weight:bold; color:#C8102E;">Ingeniería Aplicada</td><td style="text-align:center; padding:12px; border-bottom:1px solid #e5e7eb;">Producción, Logística, Simulación, IA</td><td style="text-align:center; padding:12px; border-bottom:1px solid #e5e7eb; font-weight:bold; color:#C8102E;">30%</td></tr>
            <tr><td style="padding:12px; border-bottom:1px solid #e5e7eb; font-weight:bold;">Económico-Gestión</td><td style="text-align:center; padding:12px; border-bottom:1px solid #e5e7eb;">Finanzas, Calidad, Proyectos</td><td style="text-align:center; padding:12px; border-bottom:1px solid #e5e7eb; font-weight:bold;">20%</td></tr>
            <tr><td style="padding:12px; border-bottom:1px solid #e5e7eb; font-weight:bold;">Investigación</td><td style="text-align:center; padding:12px; border-bottom:1px solid #e5e7eb;">Metodología, Seminarios, Grado</td><td style="text-align:center; padding:12px; border-bottom:1px solid #e5e7eb; font-weight:bold;">15%</td></tr>
            <tr><td style="padding:12px; border-bottom:1px solid #e5e7eb; font-weight:bold;">Humanística</td><td style="text-align:center; padding:12px; border-bottom:1px solid #e5e7eb;">Ética, Comunicación, Electivas</td><td style="text-align:center; padding:12px; border-bottom:1px solid #e5e7eb; font-weight:bold;">10%</td></tr>
            <tr><td style="padding:12px; font-weight:bold;">Complementaria</td><td style="text-align:center; padding:12px;">Inglés, TIC, Herramientas</td><td style="text-align:center; padding:12px; font-weight:bold;">10%</td></tr>
        </table>
    </div>

    <!-- SELECTOR DE COMPONENTE -->
    <div class="event-card" style="background:white; color:#111827; padding:25px; border-radius:12px; margin-bottom:25px; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
        <span style="color:#FF6600; font-weight:bold; font-size:1rem; text-transform:uppercase; display:block; margin-bottom:5px;">SELECTOR DE TRAZABILIDAD</span>
        <div style="color:#111827; font-weight:bold; font-size:1.5rem; margin-bottom:12px;">Componente → Asignatura → Resultado de Aprendizaje → Competencia</div>
        <div style="color:#374151; margin-bottom:15px; font-size:1rem;">Seleccione un componente para visualizar la trazabilidad desde la asignatura hasta la competencia del perfil de egreso:</div>
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:15px;">
            <button onclick="document.querySelectorAll('[id^=comp_]').forEach(e=>e.style.display='none'); document.getElementById('comp_basicas').style.display='block';" style="background:#0A2540; color:white; border:none; padding:10px 16px; border-radius:6px; cursor:pointer; font-weight:bold;">Ciencias Básicas</button>
            <button onclick="document.querySelectorAll('[id^=comp_]').forEach(e=>e.style.display='none'); document.getElementById('comp_aplicada').style.display='block';" style="background:#C8102E; color:white; border:none; padding:10px 16px; border-radius:6px; cursor:pointer; font-weight:bold;">Ing. Aplicada</button>
            <button onclick="document.querySelectorAll('[id^=comp_]').forEach(e=>e.style.display='none'); document.getElementById('comp_gestion').style.display='block';" style="background:#eab308; color:#111; border:none; padding:10px 16px; border-radius:6px; cursor:pointer; font-weight:bold;">Eco-Gestión</button>
            <button onclick="document.querySelectorAll('[id^=comp_]').forEach(e=>e.style.display='none'); document.getElementById('comp_invest').style.display='block';" style="background:#8b5cf6; color:white; border:none; padding:10px 16px; border-radius:6px; cursor:pointer; font-weight:bold;">Investigación</button>
        </div>

        <div id="comp_basicas" style="display:block;">
            <table style="width:100%; border-collapse:collapse; font-size:0.95rem; border:1px solid #e5e7eb;">
                <tr style="background:#0A2540; color:white;"><th style="padding:10px;">Asignatura</th><th style="padding:10px;">R.A. Específico</th><th style="padding:10px;">Competencia Egreso</th></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Matemáticas I</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Resolver problemas con pensamiento lógico-matemático</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Modelamiento cuantitativo de problemas industriales</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Cálculo Diferencial</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Aplicar derivadas a optimización</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Optimización de procesos productivos</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Física Mecánica</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Comprender principios mecánicos aplicados</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Diseño de sistemas mecánicos industriales</td></tr>
                <tr><td style="padding:10px;">Estadística y Prob.</td><td style="padding:10px;">Analizar datos con herramientas estadísticas</td><td style="padding:10px;">Toma de decisiones basada en datos</td></tr>
            </table>
        </div>
        <div id="comp_aplicada" style="display:none;">
            <table style="width:100%; border-collapse:collapse; font-size:0.95rem; border:1px solid #e5e7eb;">
                <tr style="background:#C8102E; color:white;"><th style="padding:10px;">Asignatura</th><th style="padding:10px;">R.A. Específico</th><th style="padding:10px;">Competencia Egreso</th></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Intro. Ing. Industrial</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Identificar áreas de acción del ingeniero</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Visión sistémica de la ingeniería</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Procesos Industriales</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Diseñar y documentar procesos</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Gestión y mejora de procesos productivos</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Logística y Cadena</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Optimizar cadenas de suministro</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Gestión logística integral</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Producción con IA</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Aplicar IA a planificación productiva</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Integración tecnológica 4.0</td></tr>
                <tr><td style="padding:10px;">Simulación con IA</td><td style="padding:10px;">Modelar escenarios con herramientas IA</td><td style="padding:10px;">Innovación en procesos industriales</td></tr>
            </table>
        </div>
        <div id="comp_gestion" style="display:none;">
            <table style="width:100%; border-collapse:collapse; font-size:0.95rem; border:1px solid #e5e7eb;">
                <tr style="background:#eab308; color:#111;"><th style="padding:10px;">Asignatura</th><th style="padding:10px;">R.A. Específico</th><th style="padding:10px;">Competencia Egreso</th></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Fund. de Economía</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Comprender contexto económico</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Análisis económico organizacional</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Costos y Presupuestos</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Calcular y controlar costos</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Gestión financiera de operaciones</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Gestión de Calidad</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Implementar SGC (ISO 9001)</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Aseguramiento de calidad industrial</td></tr>
                <tr><td style="padding:10px;">Gerencia de Proyectos</td><td style="padding:10px;">Formular y gestionar proyectos</td><td style="padding:10px;">Liderazgo de proyectos industriales</td></tr>
            </table>
        </div>
        <div id="comp_invest" style="display:none;">
            <table style="width:100%; border-collapse:collapse; font-size:0.95rem; border:1px solid #e5e7eb;">
                <tr style="background:#8b5cf6; color:white;"><th style="padding:10px;">Asignatura</th><th style="padding:10px;">R.A. Específico</th><th style="padding:10px;">Competencia Egreso</th></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Metodología de Inv.</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Diseñar protocolos de investigación</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Investigación aplicada</td></tr>
                <tr><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Seminario I</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Analizar problemas del sector</td><td style="padding:10px; border-bottom:1px solid #e5e7eb;">Pensamiento crítico investigativo</td></tr>
                <tr><td style="padding:10px;">Trabajo de Grado</td><td style="padding:10px;">Ejecutar proyecto de investigación</td><td style="padding:10px;">Generación de conocimiento aplicado</td></tr>
            </table>
        </div>
    </div>

    <!-- MALLA HORIZONTAL COMPLETA -->
    <div class="event-card" style="background:white; color:#111827; padding:25px; border-radius:12px; margin-bottom:25px; box-shadow:0 4px 6px rgba(0,0,0,0.05); overflow:hidden;">
        <span style="color:#FF6600; font-weight:bold; font-size:1rem; text-transform:uppercase; display:block; margin-bottom:5px;">MALLA CURRICULAR COMPLETA</span>
        <div style="color:#111827; font-weight:bold; font-size:1.5rem; margin-bottom:5px;">Estructura de Pre-saberes por Semestre</div>
        <div style="color:#374151; margin-bottom:15px; font-size:1rem;">Deslice horizontalmente → para ver la secuencia completa de 8 semestres.</div>
        <div style="width:100%; overflow-x:auto; padding-bottom:15px;" class="custom-scrollbar">
            <table style="min-width:1400px; border-collapse:collapse; font-size:0.85rem; border:1px solid #e5e7eb;">
                <tr style="background:#0A2540; color:white;">
                    <th style="padding:8px; min-width:100px;">Componente</th>
                    <th style="padding:8px; text-align:center;">Sem 1</th><th style="padding:8px; text-align:center;">Sem 2</th><th style="padding:8px; text-align:center;">Sem 3</th><th style="padding:8px; text-align:center;">Sem 4</th><th style="padding:8px; text-align:center;">Sem 5</th><th style="padding:8px; text-align:center;">Sem 6</th><th style="padding:8px; text-align:center;">Sem 7</th><th style="padding:8px; text-align:center;">Sem 8</th>
                </tr>
                <tr style="background:#eff6ff;"><td style="padding:8px; font-weight:bold; background:#0A2540; color:white;">C. Básicas</td><td style="padding:8px; border:1px solid #e5e7eb;">Matemáticas I</td><td style="padding:8px; border:1px solid #e5e7eb;">Cálculo Dif. →</td><td style="padding:8px; border:1px solid #e5e7eb;">Cálculo Int. →</td><td style="padding:8px; border:1px solid #e5e7eb;">Ec. Diferen. →</td><td style="padding:8px; border:1px solid #e5e7eb;">Estadística →</td><td style="padding:8px; border:1px solid #e5e7eb;">Física Mec.</td><td style="padding:8px; border:1px solid #e5e7eb;">-</td><td style="padding:8px; border:1px solid #e5e7eb;">-</td></tr>
                <tr style="background:#fef2f2;"><td style="padding:8px; font-weight:bold; background:#C8102E; color:white;">Ing. Aplicada</td><td style="padding:8px; border:1px solid #e5e7eb;">Intro Ing. Ind.</td><td style="padding:8px; border:1px solid #e5e7eb;">Procesos Ind. →</td><td style="padding:8px; border:1px solid #e5e7eb;">Métodos y T. →</td><td style="padding:8px; border:1px solid #e5e7eb;">Producción I →</td><td style="padding:8px; border:1px solid #e5e7eb;">Producción IA →</td><td style="padding:8px; border:1px solid #e5e7eb;">Logística →</td><td style="padding:8px; border:1px solid #e5e7eb;">Simulación IA →</td><td style="padding:8px; border:1px solid #e5e7eb;">Diseño Planta</td></tr>
                <tr style="background:#fefce8;"><td style="padding:8px; font-weight:bold; background:#eab308; color:#111;">Eco-Gestión</td><td style="padding:8px; border:1px solid #e5e7eb;">Fund. Economía</td><td style="padding:8px; border:1px solid #e5e7eb;">Contabilidad →</td><td style="padding:8px; border:1px solid #e5e7eb;">Costos →</td><td style="padding:8px; border:1px solid #e5e7eb;">Finanzas →</td><td style="padding:8px; border:1px solid #e5e7eb;">G. Calidad →</td><td style="padding:8px; border:1px solid #e5e7eb;">G. Ambiental →</td><td style="padding:8px; border:1px solid #e5e7eb;">G. Proyectos →</td><td style="padding:8px; border:1px solid #e5e7eb;">Emprendimiento</td></tr>
                <tr style="background:#f5f3ff;"><td style="padding:8px; font-weight:bold; background:#8b5cf6; color:white;">Investigación</td><td style="padding:8px; border:1px solid #e5e7eb;">-</td><td style="padding:8px; border:1px solid #e5e7eb;">-</td><td style="padding:8px; border:1px solid #e5e7eb;">Metodología →</td><td style="padding:8px; border:1px solid #e5e7eb;">Seminario I →</td><td style="padding:8px; border:1px solid #e5e7eb;">Seminario II →</td><td style="padding:8px; border:1px solid #e5e7eb;">-</td><td style="padding:8px; border:1px solid #e5e7eb;">-</td><td style="padding:8px; border:1px solid #e5e7eb;">Trabajo Grado</td></tr>
                <tr style="background:#f0fdf4;"><td style="padding:8px; font-weight:bold; background:#10b981; color:white;">Humanística</td><td style="padding:8px; border:1px solid #e5e7eb;">Comunicación</td><td style="padding:8px; border:1px solid #e5e7eb;">Constitución</td><td style="padding:8px; border:1px solid #e5e7eb;">Ética Prof.</td><td style="padding:8px; border:1px solid #e5e7eb;">Electiva I</td><td style="padding:8px; border:1px solid #e5e7eb;">Electiva II</td><td style="padding:8px; border:1px solid #e5e7eb;">-</td><td style="padding:8px; border:1px solid #e5e7eb;">-</td><td style="padding:8px; border:1px solid #e5e7eb;">-</td></tr>
                <tr style="background:#f9fafb;"><td style="padding:8px; font-weight:bold; background:#6b7280; color:white;">Complementar.</td><td style="padding:8px; border:1px solid #e5e7eb;">Inglés I →</td><td style="padding:8px; border:1px solid #e5e7eb;">Inglés II →</td><td style="padding:8px; border:1px solid #e5e7eb;">Inglés III →</td><td style="padding:8px; border:1px solid #e5e7eb;">Inglés IV</td><td style="padding:8px; border:1px solid #e5e7eb;">Herram. TIC</td><td style="padding:8px; border:1px solid #e5e7eb;">-</td><td style="padding:8px; border:1px solid #e5e7eb;">-</td><td style="padding:8px; border:1px solid #e5e7eb;">-</td></tr>
            </table>
        </div>
        <div style="color:#6b7280; font-size:0.9rem; margin-top:8px;"><i class="fas fa-info-circle mr-1"></i> Las flechas (→) indican pre-saberes obligatorios entre asignaturas consecutivas.</div>
    </div>

    <!-- SÍNTESIS -->
    <div class="event-card" style="background:white; color:#111827; padding:25px; border-radius:12px; margin-bottom:25px; box-shadow:0 4px 6px rgba(0,0,0,0.05);">
        <span style="color:#FF6600; font-weight:bold; font-size:1rem; text-transform:uppercase; display:block; margin-bottom:5px;">DOCUMENTACIÓN</span>
        <div style="color:#111827; font-weight:bold; font-size:1.5rem; margin-bottom:12px;">Evidencias Anexas</div>
        <div style="background:#f0fdf4; color:#166534; border-left:5px solid #16a34a; padding:15px; font-weight:bold; font-size:1.1rem; border-radius:4px; margin-bottom:10px;">
            <i class="fas fa-sitemap mr-2"></i> Anexo 11: Malla Curricular Completa y Estructura de Pre-saberes
        </div>
        <div style="background:#f0fdf4; color:#166534; border-left:5px solid #16a34a; padding:15px; font-weight:bold; font-size:1.1rem; border-radius:4px;">
            <i class="fas fa-book mr-2"></i> Anexo 10: 48 Microcurrículos completos con Resultados de Aprendizaje
        </div>
    </div>
</div>
`;
