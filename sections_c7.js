// ===================================================================
// CONDICIÓN 7 — PROFESORES
// Fuente: Condición 7 Profesores (3).pptx (22 slides completos)
// ===================================================================
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS.c7 = `
<div class="slide-header" style="border-bottom:3px solid #C8102E; padding-bottom:18px; margin-bottom:28px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
    <div>
        <div class="slide-subtitle" style="color:#C8102E; font-weight:800; text-transform:uppercase; font-size:1rem; letter-spacing:2px;">Condición 07</div>
        <h1 style="color:#0A2540; font-size:2.4rem; margin:0; font-weight:800; font-family:'Montserrat',sans-serif;">Profesores</h1>
    </div>
    <div id="c7TabBar" style="background:#e5e7eb; border-radius:30px; padding:4px; display:inline-flex; border:1px solid #d1d5db; flex-wrap:wrap; gap:2px;">
        <button id="c7Tab_estatuto" onclick="window.switchC7Tab('estatuto')" class="c7-tab-btn" style="padding:8px 18px; border-radius:25px; font-weight:700; border:none; cursor:pointer; font-size:0.85rem; transition:0.3s; background:#0A2540; color:white;">Estatuto Docente</button>
        <button id="c7Tab_seleccion" onclick="window.switchC7Tab('seleccion')" class="c7-tab-btn" style="padding:8px 18px; border-radius:25px; font-weight:700; border:none; cursor:pointer; font-size:0.85rem; transition:0.3s; background:transparent; color:#4b5563;">Selección y Vinculación</button>
        <button id="c7Tab_proyeccion" onclick="window.switchC7Tab('proyeccion')" class="c7-tab-btn" style="padding:8px 18px; border-radius:25px; font-weight:700; border:none; cursor:pointer; font-size:0.85rem; transition:0.3s; background:transparent; color:#4b5563;">Proyección y Plan de Trabajo</button>
        <button id="c7Tab_cualificacion" onclick="window.switchC7Tab('cualificacion')" class="c7-tab-btn" style="padding:8px 18px; border-radius:25px; font-weight:700; border:none; cursor:pointer; font-size:0.85rem; transition:0.3s; background:transparent; color:#4b5563;">Cualificación</button>
        <button id="c7Tab_bienestar" onclick="window.switchC7Tab('bienestar')" class="c7-tab-btn" style="padding:8px 18px; border-radius:25px; font-weight:700; border:none; cursor:pointer; font-size:0.85rem; transition:0.3s; background:transparent; color:#4b5563;">Bienestar</button>
        <button id="c7Tab_evaluacion" onclick="window.switchC7Tab('evaluacion')" class="c7-tab-btn" style="padding:8px 18px; border-radius:25px; font-weight:700; border:none; cursor:pointer; font-size:0.85rem; transition:0.3s; background:transparent; color:#4b5563;">Evaluación Docente</button>
        <button id="c7Tab_escalafon" onclick="window.switchC7Tab('escalafon')" class="c7-tab-btn" style="padding:8px 18px; border-radius:25px; font-weight:700; border:none; cursor:pointer; font-size:0.85rem; transition:0.3s; background:transparent; color:#4b5563;">Escalafón y Salarios</button>
        <button id="c7Tab_estimulos" onclick="window.switchC7Tab('estimulos')" class="c7-tab-btn" style="padding:8px 18px; border-radius:25px; font-weight:700; border:none; cursor:pointer; font-size:0.85rem; transition:0.3s; background:transparent; color:#4b5563;">Estímulos y Capacitación</button>
        <button id="c7Tab_regimen" onclick="window.switchC7Tab('regimen')" class="c7-tab-btn" style="padding:8px 18px; border-radius:25px; font-weight:700; border:none; cursor:pointer; font-size:0.85rem; transition:0.3s; background:transparent; color:#4b5563;">Régimen Disciplinario</button>
        <button id="c7Tab_slides" onclick="window.switchC7Tab('slides')" class="c7-tab-btn" style="padding:8px 18px; border-radius:25px; font-weight:700; border:none; cursor:pointer; font-size:0.85rem; transition:0.3s; background:transparent; color:#4b5563;">Presentación Completa</button>
    </div>
</div>

<!-- ========== TAB 1: ESTATUTO DOCENTE ========== -->
<div id="c7Content_estatuto" class="c7-tab-content">
    <!-- Pilares del Estatuto Docente -->
    <div style="background:linear-gradient(135deg,#0A2540 0%,#173A66 100%); border-radius:16px; padding:30px; margin-bottom:25px; color:white;">
        <h2 style="font-family:'Montserrat',sans-serif; font-size:1.6rem; margin:0 0 8px 0; color:white;"><i class="fas fa-gavel" style="color:#C8102E; margin-right:10px;"></i>Estatuto Docente</h2>
        <p style="color:#cbd5e1; font-size:0.95rem; margin:0;">Marco normativo que rige la actividad docente en la Corporación Escuela Tecnológica del Oriente</p>
    </div>

    <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:16px; margin-bottom:30px;">
        <div style="background:linear-gradient(135deg,#10b981 0%,#059669 100%); border-radius:14px; padding:22px 16px; text-align:center; color:white; transition:transform 0.3s; cursor:default;" onmouseover="this.style.transform='translateY(-6px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="width:60px; height:60px; background:rgba(255,255,255,0.2); border-radius:50%; margin:0 auto 12px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-balance-scale" style="font-size:1.5rem;"></i></div>
            <h4 style="font-weight:800; font-size:0.95rem; margin:0 0 6px 0; color:white;">Derechos y Deberes</h4>
            <p style="font-size:0.78rem; color:rgba(255,255,255,0.85); margin:0;">Define los derechos y responsabilidades de los docentes.</p>
        </div>
        <div style="background:linear-gradient(135deg,#84cc16 0%,#65a30d 100%); border-radius:14px; padding:22px 16px; text-align:center; color:white; transition:transform 0.3s; cursor:default;" onmouseover="this.style.transform='translateY(-6px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="width:60px; height:60px; background:rgba(255,255,255,0.2); border-radius:50%; margin:0 auto 12px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-users-cog" style="font-size:1.5rem;"></i></div>
            <h4 style="font-weight:800; font-size:0.95rem; margin:0 0 6px 0; color:white;">Participación en el Gobierno</h4>
            <p style="font-size:0.78rem; color:rgba(255,255,255,0.85); margin:0;">Involucra a los docentes en la toma de decisiones.</p>
        </div>
        <div style="background:linear-gradient(135deg,#3b82f6 0%,#2563eb 100%); border-radius:14px; padding:22px 16px; text-align:center; color:white; transition:transform 0.3s; cursor:default;" onmouseover="this.style.transform='translateY(-6px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="width:60px; height:60px; background:rgba(255,255,255,0.2); border-radius:50%; margin:0 auto 12px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-user-check" style="font-size:1.5rem;"></i></div>
            <h4 style="font-weight:800; font-size:0.95rem; margin:0 0 6px 0; color:white;">Selección y Vinculación</h4>
            <p style="font-size:0.78rem; color:rgba(255,255,255,0.85); margin:0;">Proceso para contratar e integrar nuevos docentes.</p>
        </div>
        <div style="background:linear-gradient(135deg,#eab308 0%,#ca8a04 100%); border-radius:14px; padding:22px 16px; text-align:center; color:white; transition:transform 0.3s; cursor:default;" onmouseover="this.style.transform='translateY(-6px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="width:60px; height:60px; background:rgba(255,255,255,0.2); border-radius:50%; margin:0 auto 12px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-file-contract" style="font-size:1.5rem;"></i></div>
            <h4 style="font-weight:800; font-size:0.95rem; margin:0 0 6px 0; color:white;">Funciones y Contratación</h4>
            <p style="font-size:0.78rem; color:rgba(255,255,255,0.85); margin:0;">Describe los roles, tipos de contratos y asignaciones.</p>
        </div>
        <div style="background:linear-gradient(135deg,#f97316 0%,#ea580c 100%); border-radius:14px; padding:22px 16px; text-align:center; color:white; transition:transform 0.3s; cursor:default;" onmouseover="this.style.transform='translateY(-6px)'" onmouseout="this.style.transform='translateY(0)'">
            <div style="width:60px; height:60px; background:rgba(255,255,255,0.2); border-radius:50%; margin:0 auto 12px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-award" style="font-size:1.5rem;"></i></div>
            <h4 style="font-weight:800; font-size:0.95rem; margin:0 0 6px 0; color:white;">Evaluación y Formación</h4>
            <p style="font-size:0.78rem; color:rgba(255,255,255,0.85); margin:0;">Evalúa el desempeño y proporciona oportunidades de desarrollo.</p>
        </div>
    </div>

    <!-- Perfil Docente -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.3rem; margin:0 0 18px 0; font-weight:800;"><i class="fas fa-id-badge" style="color:#C8102E; margin-right:8px;"></i>Perfil Docente – Componentes del Saber</h3>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:16px;">
            <div style="background:#f0fdf4; border:2px solid #bbf7d0; border-radius:12px; padding:20px; text-align:center;">
                <div style="width:50px; height:50px; background:#10b981; border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-chalkboard-teacher" style="color:white; font-size:1.2rem;"></i></div>
                <h4 style="color:#0A2540; font-weight:800; margin:0 0 6px 0; font-size:1rem;">Comp. Pedagógico y Didáctico</h4>
                <p style="color:#4b5563; font-size:0.82rem; margin:0;">Capacidades de enseñanza y estrategias didácticas</p>
            </div>
            <div style="background:#eff6ff; border:2px solid #bfdbfe; border-radius:12px; padding:20px; text-align:center;">
                <div style="width:50px; height:50px; background:#3b82f6; border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-book-open" style="color:white; font-size:1.2rem;"></i></div>
                <h4 style="color:#0A2540; font-weight:800; margin:0 0 6px 0; font-size:1rem;">Comp. Disciplinar</h4>
                <p style="color:#4b5563; font-size:0.82rem; margin:0;">Dominio profundo del área de conocimiento</p>
            </div>
            <div style="background:#faf5ff; border:2px solid #e9d5ff; border-radius:12px; padding:20px; text-align:center;">
                <div style="width:50px; height:50px; background:#8b5cf6; border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-search" style="color:white; font-size:1.2rem;"></i></div>
                <h4 style="color:#0A2540; font-weight:800; margin:0 0 6px 0; font-size:1rem;">Comp. Investigativo</h4>
                <p style="color:#4b5563; font-size:0.82rem; margin:0;">Capacidad investigativa y producción académica</p>
            </div>
            <div style="background:#fefce8; border:2px solid #fef08a; border-radius:12px; padding:20px; text-align:center;">
                <div style="width:50px; height:50px; background:#eab308; border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-university" style="color:white; font-size:1.2rem;"></i></div>
                <h4 style="color:#0A2540; font-weight:800; margin:0 0 6px 0; font-size:1rem;">Comp. Institucional</h4>
                <p style="color:#4b5563; font-size:0.82rem; margin:0;">Alineación con la cultura y valores institucionales</p>
            </div>
            <div style="background:#fdf2f8; border:2px solid #fbcfe8; border-radius:12px; padding:20px; text-align:center;">
                <div style="width:50px; height:50px; background:#ec4899; border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-laptop-code" style="color:white; font-size:1.2rem;"></i></div>
                <h4 style="color:#0A2540; font-weight:800; margin:0 0 6px 0; font-size:1rem;">Comp. Tecnológico</h4>
                <p style="color:#4b5563; font-size:0.82rem; margin:0;">Manejo de herramientas TIC y plataformas virtuales</p>
            </div>
            <div style="background:#fff7ed; border:2px solid #fed7aa; border-radius:12px; padding:20px; text-align:center;">
                <div style="width:50px; height:50px; background:#f97316; border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-hands-helping" style="color:white; font-size:1.2rem;"></i></div>
                <h4 style="color:#0A2540; font-weight:800; margin:0 0 6px 0; font-size:1rem;">Comp. de Interacción</h4>
                <p style="color:#4b5563; font-size:0.82rem; margin:0;">Comunicación y relación con la comunidad académica</p>
            </div>
        </div>
    </div>

    <div class="evidence-box" style="background:#eff6ff; border-left:4px solid #C8102E; color:#1e40af; font-weight:bold; padding:14px 18px; border-radius:8px;">
        <i class="fas fa-file-pdf" style="color:#C8102E; font-size:1.2rem; margin-right:8px;"></i> Soporte Documental:
        <div style="margin-top:5px; font-weight:normal; font-size:0.9rem; color:#4b5563; display:flex; gap:10px; flex-wrap:wrap;">
            <span class="tag-legal" style="background:#e5e7eb; padding:3px 10px; border-radius:4px;">Anexo 17 - Estatuto Docente</span>
            <span class="tag-legal" style="background:#e5e7eb; padding:3px 10px; border-radius:4px;">Anexo 18 - Lineamiento de Distribución de Planes de Trabajo</span>
        </div>
    </div>
</div>

<!-- ========== TAB 2: SELECCIÓN Y VINCULACIÓN ========== -->
<div id="c7Content_seleccion" class="c7-tab-content" style="display:none;">
    <!-- Proceso de Selección Docente -->
    <div style="background:linear-gradient(135deg,#0A2540 0%,#173A66 100%); border-radius:16px; padding:30px; margin-bottom:25px; color:white;">
        <h2 style="font-family:'Montserrat',sans-serif; font-size:1.6rem; margin:0 0 8px 0; color:white;"><i class="fas fa-user-plus" style="color:#C8102E; margin-right:10px;"></i>Proceso de Selección Docente</h2>
        <p style="color:#cbd5e1; font-size:0.95rem; margin:0;">Etapas del proceso de selección y vinculación del personal docente</p>
    </div>

    <!-- Etapas de Selección - Timeline Horizontal -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.2rem; margin:0 0 22px 0; font-weight:800;"><i class="fas fa-route" style="color:#C8102E; margin-right:8px;"></i>Etapas del Proceso de Selección</h3>
        <div style="display:grid; grid-template-columns:repeat(7,1fr); gap:10px; position:relative;">
            <div style="position:absolute; top:30px; left:5%; right:5%; height:3px; background:linear-gradient(90deg,#eab308,#f97316,#ef4444,#ec4899,#8b5cf6,#6366f1,#3b82f6); border-radius:2px; z-index:0;"></div>
            <div style="text-align:center; position:relative; z-index:1;">
                <div style="width:55px; height:55px; background:linear-gradient(135deg,#eab308,#fbbf24); border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(234,179,8,0.4);"><i class="fas fa-clipboard-list" style="color:white; font-size:1.1rem;"></i></div>
                <h5 style="color:#0A2540; font-weight:800; font-size:0.78rem; margin:0 0 4px 0;">Requisición de perfil</h5>
                <p style="color:#6b7280; font-size:0.68rem; margin:0;">Definiendo los criterios para el rol</p>
            </div>
            <div style="text-align:center; position:relative; z-index:1;">
                <div style="width:55px; height:55px; background:linear-gradient(135deg,#f97316,#fb923c); border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(249,115,22,0.4);"><i class="fas fa-bullhorn" style="color:white; font-size:1.1rem;"></i></div>
                <h5 style="color:#0A2540; font-weight:800; font-size:0.78rem; margin:0 0 4px 0;">Publicación convocatoria</h5>
                <p style="color:#6b7280; font-size:0.68rem; margin:0;">Anunciando la oportunidad de trabajo</p>
            </div>
            <div style="text-align:center; position:relative; z-index:1;">
                <div style="width:55px; height:55px; background:linear-gradient(135deg,#ef4444,#f87171); border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(239,68,68,0.4);"><i class="fas fa-file-alt" style="color:white; font-size:1.1rem;"></i></div>
                <h5 style="color:#0A2540; font-weight:800; font-size:0.78rem; margin:0 0 4px 0;">Selección hoja de vida</h5>
                <p style="color:#6b7280; font-size:0.68rem; margin:0;">Revisando aplicaciones recibidas</p>
            </div>
            <div style="text-align:center; position:relative; z-index:1;">
                <div style="width:55px; height:55px; background:linear-gradient(135deg,#ec4899,#f472b6); border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(236,72,153,0.4);"><i class="fas fa-chalkboard" style="color:white; font-size:1.1rem;"></i></div>
                <h5 style="color:#0A2540; font-weight:800; font-size:0.78rem; margin:0 0 4px 0;">Micro-Clase</h5>
                <p style="color:#6b7280; font-size:0.68rem; margin:0;">Evaluando habilidades de enseñanza</p>
            </div>
            <div style="text-align:center; position:relative; z-index:1;">
                <div style="width:55px; height:55px; background:linear-gradient(135deg,#8b5cf6,#a78bfa); border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(139,92,246,0.4);"><i class="fas fa-brain" style="color:white; font-size:1.1rem;"></i></div>
                <h5 style="color:#0A2540; font-weight:800; font-size:0.78rem; margin:0 0 4px 0;">Pruebas Psicotécnicas</h5>
                <p style="color:#6b7280; font-size:0.68rem; margin:0;">Realizando pruebas de aptitud</p>
            </div>
            <div style="text-align:center; position:relative; z-index:1;">
                <div style="width:55px; height:55px; background:linear-gradient(135deg,#6366f1,#818cf8); border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(99,102,241,0.4);"><i class="fas fa-check-double" style="color:white; font-size:1.1rem;"></i></div>
                <h5 style="color:#0A2540; font-weight:800; font-size:0.78rem; margin:0 0 4px 0;">Aprobación contratación</h5>
                <p style="color:#6b7280; font-size:0.68rem; margin:0;">Finalizando la decisión de contratación</p>
            </div>
            <div style="text-align:center; position:relative; z-index:1;">
                <div style="width:55px; height:55px; background:linear-gradient(135deg,#3b82f6,#60a5fa); border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(59,130,246,0.4);"><i class="fas fa-user-tie" style="color:white; font-size:1.1rem;"></i></div>
                <h5 style="color:#0A2540; font-weight:800; font-size:0.78rem; margin:0 0 4px 0;">Selección definitiva</h5>
                <p style="color:#6b7280; font-size:0.68rem; margin:0;">Confirmando la selección del candidato</p>
            </div>
        </div>
    </div>

    <!-- Criterios de Selección -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.2rem; margin:0 0 18px 0; font-weight:800;"><i class="fas fa-clipboard-check" style="color:#C8102E; margin-right:8px;"></i>Resultados Selección Docente – Criterios para la Selección (100%)</h3>
        <table class="tbl" style="border-radius:10px; overflow:hidden;">
            <thead>
                <tr><th style="background:#0A2540; color:white; font-weight:700;">Porcentaje</th><th style="background:#0A2540; color:white; font-weight:700;">Concepto</th><th style="background:#0A2540; color:white; font-weight:700;">Detalle</th></tr>
            </thead>
            <tbody>
                <tr style="background:#eff6ff; border-left:3px solid #3b82f6;">
                    <td style="font-weight:800; color:#0A2540; font-size:1.3rem; text-align:center;">15%</td>
                    <td style="font-weight:700; color:#0A2540;">Análisis de hoja de vida</td>
                    <td style="color:#4b5563; font-size:0.88rem;">
                        <strong>Validar información registrada y soportada:</strong><br>
                        • 3% Educación (formal)<br>
                        • 3% Formación Continua (cursos, capacitaciones certificadas)<br>
                        • 3% Experiencia profesional en el cargo al que aspira<br>
                        • 3% Experiencia docente y/o investigativa<br>
                        • 3% Publicaciones
                    </td>
                </tr>
                <tr>
                    <td style="font-weight:800; color:#0A2540; font-size:1.3rem; text-align:center;">25%</td>
                    <td style="font-weight:700; color:#0A2540;">Entrevista personal</td>
                    <td style="color:#4b5563; font-size:0.88rem;">
                        <strong>Ampliar y valorar información con el postulante:</strong><br>
                        • 7% Conocimientos específicos en el área<br>
                        • 7% Dominio técnico del área<br>
                        • 7% Trayectoria docente y/o investigativa<br>
                        • 4% Conocimientos pedagógicos<br>
                        <em style="color:#6b7280;">Nota: Se debe indagar disponibilidad de vinculación y expectativa salarial</em>
                    </td>
                </tr>
                <tr style="background:#eff6ff; border-left:3px solid #3b82f6;">
                    <td style="font-weight:800; color:#0A2540; font-size:1.3rem; text-align:center;">35%</td>
                    <td style="font-weight:700; color:#0A2540;">Micro-clase</td>
                    <td style="color:#4b5563; font-size:0.88rem;">Valorar las habilidades de la micro-clase, teniendo en cuenta las fases del modelo pedagógico institucional</td>
                </tr>
                <tr>
                    <td style="font-weight:800; color:#0A2540; font-size:1.3rem; text-align:center;">25%</td>
                    <td style="font-weight:700; color:#0A2540;">Evaluación psicotécnica</td>
                    <td style="color:#4b5563; font-size:0.88rem;">
                        Valorar las competencias institucionales y de las áreas conductuales.<br>
                        <strong>25% Elegible | 0% No Elegible</strong><br>
                        <em style="color:#6b7280;">Nota: Estas valoraciones serán asignadas por el área de Talento Humano</em>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Tipos de contrato y Vinculación -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:25px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:24px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
            <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.1rem; margin:0 0 16px 0; font-weight:800;"><i class="fas fa-file-signature" style="color:#C8102E; margin-right:8px;"></i>Proceso de Vinculación – Tipos de Contrato</h3>
            <div style="display:flex; flex-direction:column; gap:12px;">
                <div style="background:#f0fdf4; border-left:4px solid #10b981; border-radius:8px; padding:14px;">
                    <h5 style="color:#0A2540; margin:0 0 4px 0; font-weight:800;">Docente Permanente</h5>
                    <span style="background:#10b981; color:white; padding:3px 10px; border-radius:20px; font-size:0.75rem; font-weight:700;">Contrato a Término Indefinido</span>
                </div>
                <div style="background:#eff6ff; border-left:4px solid #3b82f6; border-radius:8px; padding:14px;">
                    <h5 style="color:#0A2540; margin:0 0 4px 0; font-weight:800;">Docente Permanente</h5>
                    <span style="background:#3b82f6; color:white; padding:3px 10px; border-radius:20px; font-size:0.75rem; font-weight:700;">Contrato a Término Fijo</span>
                </div>
                <div style="background:#fef3c7; border-left:4px solid #eab308; border-radius:8px; padding:14px;">
                    <h5 style="color:#0A2540; margin:0 0 4px 0; font-weight:800;">Docente Ocasional</h5>
                    <span style="background:#eab308; color:white; padding:3px 10px; border-radius:20px; font-size:0.75rem; font-weight:700;">Contrato Ocasional o Temporal</span>
                </div>
            </div>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:24px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
            <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.1rem; margin:0 0 16px 0; font-weight:800;"><i class="fas fa-sitemap" style="color:#C8102E; margin-right:8px;"></i>Comité de Contratación</h3>
            <div style="display:flex; flex-direction:column; gap:10px;">
                <div style="display:flex; align-items:center; gap:12px; padding:10px 14px; background:#f8fafc; border-radius:8px; border:1px solid #e5e7eb;">
                    <div style="width:36px; height:36px; background:#C8102E; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-chart-line" style="color:white; font-size:0.9rem;"></i></div>
                    <span style="color:#374151; font-size:0.9rem; font-weight:600;">Análisis de los resultados de la evaluación docente</span>
                </div>
                <div style="display:flex; align-items:center; gap:12px; padding:10px 14px; background:#f8fafc; border-radius:8px; border:1px solid #e5e7eb;">
                    <div style="width:36px; height:36px; background:#C8102E; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-school" style="color:white; font-size:0.9rem;"></i></div>
                    <span style="color:#374151; font-size:0.9rem; font-weight:600;">Requerimientos de contratación por escuela</span>
                </div>
                <div style="display:flex; align-items:center; gap:12px; padding:10px 14px; background:#f8fafc; border-radius:8px; border:1px solid #e5e7eb;">
                    <div style="width:36px; height:36px; background:#C8102E; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-tasks" style="color:white; font-size:0.9rem;"></i></div>
                    <span style="color:#374151; font-size:0.9rem; font-weight:600;">Requerimientos de contratación por coordinación</span>
                </div>
                <div style="display:flex; align-items:center; gap:12px; padding:10px 14px; background:#f8fafc; border-radius:8px; border:1px solid #e5e7eb;">
                    <div style="width:36px; height:36px; background:#C8102E; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-calendar-alt" style="color:white; font-size:0.9rem;"></i></div>
                    <span style="color:#374151; font-size:0.9rem; font-weight:600;">Contratación docente siguiente periodo</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Contratación y Desvinculación -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:25px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:24px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
            <h3 style="color:#0A2540; font-size:1.1rem; margin:0 0 12px 0; font-weight:800;"><i class="fas fa-handshake" style="color:#10b981; margin-right:8px;"></i>Contratación Docente</h3>
            <img src="assets/c7_slides/c7_slide_8_img_13.png" style="width:100%; border-radius:10px; border:2px solid #e5e7eb; box-shadow:0 2px 8px rgba(0,0,0,0.1);" alt="Contrato Docente">
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:24px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
            <h3 style="color:#0A2540; font-size:1.1rem; margin:0 0 12px 0; font-weight:800;"><i class="fas fa-file-invoice" style="color:#ef4444; margin-right:8px;"></i>Desvinculación Docente</h3>
            <img src="assets/c7_slides/c7_slide_8_img_14.png" style="width:100%; border-radius:10px; border:2px solid #e5e7eb; box-shadow:0 2px 8px rgba(0,0,0,0.1);" alt="Paz y Salvo Docentes">
        </div>
    </div>
</div>

<!-- ========== TAB 3: PROYECCIÓN Y PLAN DE TRABAJO ========== -->
<div id="c7Content_proyeccion" class="c7-tab-content" style="display:none;">
    <div style="background:linear-gradient(135deg,#0A2540 0%,#173A66 100%); border-radius:16px; padding:30px; margin-bottom:25px; color:white;">
        <h2 style="font-family:'Montserrat',sans-serif; font-size:1.6rem; margin:0 0 8px 0; color:white;"><i class="fas fa-chart-line" style="color:#C8102E; margin-right:10px;"></i>Proyección del Grupo Profesoral</h2>
        <p style="color:#cbd5e1; font-size:0.95rem; margin:0;">Proyección del grupo profesoral 2026-1 al 2032-02</p>
    </div>

    <!-- Tabla de Proyección -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.2rem; margin:0 0 18px 0; font-weight:800;"><i class="fas fa-users" style="color:#C8102E; margin-right:8px;"></i>Proyección de Estudiantes y Profesores</h3>
        <div style="overflow-x:auto;">
            <table class="tbl" style="border-radius:10px; overflow:hidden; min-width:700px;">
                <thead>
                    <tr>
                        <th style="background:#0A2540; color:white;">Periodo</th>
                        <th style="background:#0A2540; color:white;">Estudiantes Proyectados</th>
                        <th style="background:#0A2540; color:white;">Profesores Proyectados</th>
                        <th style="background:#0A2540; color:white;">Relación Docente/Estudiantes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="background:#eff6ff; border-left:3px solid #C8102E;"><td style="font-weight:800;">2026-1</td><td>140</td><td>6</td><td><span style="background:#10b981; color:white; padding:2px 10px; border-radius:12px; font-weight:700;">1:23</span></td></tr>
                    <tr><td style="font-weight:700;">2026-2</td><td>239</td><td>10</td><td><span style="background:#10b981; color:white; padding:2px 10px; border-radius:12px; font-weight:700;">1:24</span></td></tr>
                    <tr style="background:#f9fafb;"><td style="font-weight:700;">2027-1</td><td>324</td><td>13</td><td><span style="background:#10b981; color:white; padding:2px 10px; border-radius:12px; font-weight:700;">1:25</span></td></tr>
                    <tr><td style="font-weight:700;">2027-2</td><td>406</td><td>14</td><td><span style="background:#eab308; color:white; padding:2px 10px; border-radius:12px; font-weight:700;">1:29</span></td></tr>
                    <tr style="background:#f9fafb;"><td style="font-weight:700;">2028-1</td><td>473</td><td>14</td><td><span style="background:#eab308; color:white; padding:2px 10px; border-radius:12px; font-weight:700;">1:34</span></td></tr>
                    <tr><td style="font-weight:700;">2028-2</td><td>531</td><td>15</td><td><span style="background:#f97316; color:white; padding:2px 10px; border-radius:12px; font-weight:700;">1:35</span></td></tr>
                    <tr style="background:#f9fafb;"><td style="font-weight:700;">2029-1</td><td>552</td><td>16</td><td><span style="background:#f97316; color:white; padding:2px 10px; border-radius:12px; font-weight:700;">1:35</span></td></tr>
                    <tr><td style="font-weight:700;">2029-2</td><td>591</td><td>17</td><td><span style="background:#f97316; color:white; padding:2px 10px; border-radius:12px; font-weight:700;">1:35</span></td></tr>
                    <tr style="background:#f9fafb;"><td style="font-weight:700;">2030-1</td><td>624</td><td>18</td><td><span style="background:#f97316; color:white; padding:2px 10px; border-radius:12px; font-weight:700;">1:35</span></td></tr>
                    <tr><td style="font-weight:700;">2030-2</td><td>652</td><td>19</td><td><span style="background:#eab308; color:white; padding:2px 10px; border-radius:12px; font-weight:700;">1:34</span></td></tr>
                    <tr style="background:#f9fafb;"><td style="font-weight:700;">2031-1</td><td>675</td><td>20</td><td><span style="background:#eab308; color:white; padding:2px 10px; border-radius:12px; font-weight:700;">1:34</span></td></tr>
                    <tr><td style="font-weight:700;">2031-2</td><td>696</td><td>21</td><td><span style="background:#eab308; color:white; padding:2px 10px; border-radius:12px; font-weight:700;">1:33</span></td></tr>
                    <tr style="background:#f9fafb;"><td style="font-weight:700;">2032-1</td><td>714</td><td>22</td><td><span style="background:#eab308; color:white; padding:2px 10px; border-radius:12px; font-weight:700;">1:32</span></td></tr>
                    <tr style="background:#eff6ff; border-left:3px solid #C8102E;"><td style="font-weight:800;">2032-2</td><td>728</td><td>23</td><td><span style="background:#10b981; color:white; padding:2px 10px; border-radius:12px; font-weight:700;">1:32</span></td></tr>
                </tbody>
            </table>
        </div>
        <div style="margin-top:16px; display:flex; gap:20px; flex-wrap:wrap;">
            <div style="display:flex; align-items:center; gap:6px;"><span style="width:12px; height:12px; background:#10b981; border-radius:50%; display:inline-block;"></span><span style="font-size:0.82rem; color:#6b7280;">Óptima (≤25)</span></div>
            <div style="display:flex; align-items:center; gap:6px;"><span style="width:12px; height:12px; background:#eab308; border-radius:50%; display:inline-block;"></span><span style="font-size:0.82rem; color:#6b7280;">Media (26-34)</span></div>
            <div style="display:flex; align-items:center; gap:6px;"><span style="width:12px; height:12px; background:#f97316; border-radius:50%; display:inline-block;"></span><span style="font-size:0.82rem; color:#6b7280;">Alta (≥35)</span></div>
        </div>
    </div>

    <!-- Gráfico de Proyección (Chart.js) -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.2rem; margin:0 0 18px 0; font-weight:800;"><i class="fas fa-chart-area" style="color:#C8102E; margin-right:8px;"></i>Gráfico de Crecimiento Proyectado</h3>
        <div style="height:350px;"><canvas id="c7ProjectionChart"></canvas></div>
    </div>

    <!-- Distribución de Plan de Trabajo -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.2rem; margin:0 0 18px 0; font-weight:800;"><i class="fas fa-tasks" style="color:#C8102E; margin-right:8px;"></i>Actividades Académicas y Profesionales – Plan de Trabajo</h3>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:16px;">
            <div style="background:#fef2f2; border:2px solid #fecaca; border-radius:12px; padding:20px;">
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                    <div style="width:40px; height:40px; background:#ef4444; border-radius:8px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-chalkboard-teacher" style="color:white;"></i></div>
                    <h4 style="color:#0A2540; margin:0; font-weight:800;">Docencia</h4>
                </div>
                <ul style="margin:0; padding-left:18px; color:#4b5563; font-size:0.88rem;">
                    <li>Carga Académica</li>
                    <li>Perfil</li>
                </ul>
            </div>
            <div style="background:#f0fdf4; border:2px solid #bbf7d0; border-radius:12px; padding:20px;">
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                    <div style="width:40px; height:40px; background:#10b981; border-radius:8px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-globe" style="color:white;"></i></div>
                    <h4 style="color:#0A2540; margin:0; font-weight:800;">Extensión</h4>
                </div>
                <ul style="margin:0; padding-left:18px; color:#4b5563; font-size:0.88rem;">
                    <li>Educación continua</li>
                    <li>Prácticas</li>
                    <li>Acciones de impacto social</li>
                    <li>Internacionalización</li>
                </ul>
            </div>
            <div style="background:#eff6ff; border:2px solid #bfdbfe; border-radius:12px; padding:20px;">
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                    <div style="width:40px; height:40px; background:#3b82f6; border-radius:8px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-clipboard-list" style="color:white;"></i></div>
                    <h4 style="color:#0A2540; margin:0; font-weight:800;">Otras Actividades</h4>
                </div>
                <ul style="margin:0; padding-left:18px; color:#4b5563; font-size:0.88rem;">
                    <li>Preparación de clases</li>
                    <li>Tutorías</li>
                    <li>Actualización de aulas extendidas</li>
                    <li>Seguimiento y Evaluación</li>
                </ul>
            </div>
            <div style="background:#faf5ff; border:2px solid #e9d5ff; border-radius:12px; padding:20px;">
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                    <div style="width:40px; height:40px; background:#8b5cf6; border-radius:8px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-microscope" style="color:white;"></i></div>
                    <h4 style="color:#0A2540; margin:0; font-weight:800;">Investigaciones</h4>
                </div>
                <ul style="margin:0; padding-left:18px; color:#4b5563; font-size:0.88rem;">
                    <li>Semilleros de Investigación</li>
                    <li>Asesoría de proyectos de grado</li>
                    <li>Investigación</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<!-- ========== TAB 4: CUALIFICACIÓN DOCENTE ========== -->
<div id="c7Content_cualificacion" class="c7-tab-content" style="display:none;">
    <div style="background:linear-gradient(135deg,#0A2540 0%,#173A66 100%); border-radius:16px; padding:30px; margin-bottom:25px; color:white;">
        <h2 style="font-family:'Montserrat',sans-serif; font-size:1.6rem; margin:0 0 8px 0; color:white;"><i class="fas fa-graduation-cap" style="color:#C8102E; margin-right:10px;"></i>Cualificación Docente</h2>
        <p style="color:#cbd5e1; font-size:0.95rem; margin:0;">Objetivos y programas de formación permanente para el cuerpo docente</p>
    </div>

    <!-- Objetivos de Cualificación -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.2rem; margin:0 0 18px 0; font-weight:800;"><i class="fas fa-bullseye" style="color:#C8102E; margin-right:8px;"></i>Objetivos de la Cualificación</h3>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:16px;">
            <div style="background:linear-gradient(135deg,#0ea5e9 0%,#0284c7 100%); border-radius:14px; padding:22px; color:white; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="width:50px; height:50px; background:rgba(255,255,255,0.2); border-radius:50%; margin:0 auto 12px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-university" style="font-size:1.3rem;"></i></div>
                <h4 style="color:white; font-weight:800; margin:0 0 6px 0; font-size:0.95rem;">Reconocimiento de la Cultura Institucional</h4>
                <p style="font-size:0.82rem; color:rgba(255,255,255,0.85); margin:0;">Comprender y participar en la cultura institucional</p>
            </div>
            <div style="background:linear-gradient(135deg,#10b981 0%,#059669 100%); border-radius:14px; padding:22px; color:white; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="width:50px; height:50px; background:rgba(255,255,255,0.2); border-radius:50%; margin:0 auto 12px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-lightbulb" style="font-size:1.3rem;"></i></div>
                <h4 style="color:white; font-weight:800; margin:0 0 6px 0; font-size:0.95rem;">Enriquecimiento de Ambientes de Aprendizaje</h4>
                <p style="font-size:0.82rem; color:rgba(255,255,255,0.85); margin:0;">Implementar nuevas prácticas de enseñanza y aprendizaje</p>
            </div>
            <div style="background:linear-gradient(135deg,#84cc16 0%,#65a30d 100%); border-radius:14px; padding:22px; color:white; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="width:50px; height:50px; background:rgba(255,255,255,0.2); border-radius:50%; margin:0 auto 12px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-sync-alt" style="font-size:1.3rem;"></i></div>
                <h4 style="color:white; font-weight:800; margin:0 0 6px 0; font-size:0.95rem;">Reflexión y Actualización Disciplinar</h4>
                <p style="font-size:0.82rem; color:rgba(255,255,255,0.85); margin:0;">Fomentar la reflexión y actualización disciplinar para los docentes</p>
            </div>
        </div>
    </div>

    <!-- Impactos Positivos -->
    <div style="background:linear-gradient(135deg,#fefce8 0%,#fef9c3 100%); border:2px solid #fef08a; border-radius:14px; padding:28px; margin-bottom:25px;">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.2rem; margin:0 0 18px 0; font-weight:800;"><i class="fas fa-trophy" style="color:#eab308; margin-right:8px;"></i>Impactos Positivos</h3>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:16px;">
            <div style="display:flex; align-items:flex-start; gap:14px; background:white; border-radius:12px; padding:18px; border:1px solid #fde68a; box-shadow:0 2px 6px rgba(0,0,0,0.04);">
                <div style="width:50px; height:50px; background:#C8102E; border-radius:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-user-graduate" style="color:white; font-size:1.2rem;"></i></div>
                <div>
                    <h5 style="color:#0A2540; margin:0 0 4px 0; font-weight:800;">Becas Doctorales</h5>
                    <p style="color:#4b5563; font-size:0.88rem; margin:0;"><strong>8 Docentes</strong> con becas del 40% para cursar doctorado en Educación – UPEL.</p>
                </div>
            </div>
            <div style="display:flex; align-items:flex-start; gap:14px; background:white; border-radius:12px; padding:18px; border:1px solid #fde68a; box-shadow:0 2px 6px rgba(0,0,0,0.04);">
                <div style="width:50px; height:50px; background:#10b981; border-radius:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-certificate" style="color:white; font-size:1.2rem;"></i></div>
                <div>
                    <h5 style="color:#0A2540; margin:0 0 4px 0; font-weight:800;">Certificación Virtual SENA</h5>
                    <p style="color:#4b5563; font-size:0.88rem; margin:0;"><strong>100%</strong> docentes certificados en Competencia de Orientar procesos formativos en modalidad virtual y presencial – SENA.</p>
                </div>
            </div>
            <div style="display:flex; align-items:flex-start; gap:14px; background:white; border-radius:12px; padding:18px; border:1px solid #fde68a; box-shadow:0 2px 6px rgba(0,0,0,0.04);">
                <div style="width:50px; height:50px; background:#3b82f6; border-radius:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-laptop-code" style="color:white; font-size:1.2rem;"></i></div>
                <div>
                    <h5 style="color:#0A2540; margin:0 0 4px 0; font-weight:800;">Nuevas Tecnologías SENA</h5>
                    <p style="color:#4b5563; font-size:0.88rem; margin:0;"><strong>100%</strong> docentes participando en procesos de cualificación en Nuevas Tecnologías e Innovación Educativa – SENA.</p>
                </div>
            </div>
            <div style="display:flex; align-items:flex-start; gap:14px; background:white; border-radius:12px; padding:18px; border:1px solid #fde68a; box-shadow:0 2px 6px rgba(0,0,0,0.04);">
                <div style="width:50px; height:50px; background:#8b5cf6; border-radius:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-clipboard-check" style="color:white; font-size:1.2rem;"></i></div>
                <div>
                    <h5 style="color:#0A2540; margin:0 0 4px 0; font-weight:800;">Resultados de Aprendizaje</h5>
                    <p style="color:#4b5563; font-size:0.88rem; margin:0;"><strong>100%</strong> docentes actualizados en Resultados de Aprendizaje y Taxonomía de Bloom.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Galería de Evidencias -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.2rem; margin:0 0 18px 0; font-weight:800;"><i class="fas fa-images" style="color:#C8102E; margin-right:8px;"></i>Evidencias de Cualificación Docente</h3>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:14px;">
            <div style="border-radius:12px; overflow:hidden; border:2px solid #e5e7eb; box-shadow:0 2px 8px rgba(0,0,0,0.08); transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
                <img src="assets/c7_slides/c7_slide_13_img_24.png" style="width:100%; height:180px; object-fit:cover;" alt="Evidencia cualificación 1">
            </div>
            <div style="border-radius:12px; overflow:hidden; border:2px solid #e5e7eb; box-shadow:0 2px 8px rgba(0,0,0,0.08); transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
                <img src="assets/c7_slides/c7_slide_13_img_25.png" style="width:100%; height:180px; object-fit:cover;" alt="Evidencia cualificación 2">
            </div>
            <div style="border-radius:12px; overflow:hidden; border:2px solid #e5e7eb; box-shadow:0 2px 8px rgba(0,0,0,0.08); transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
                <img src="assets/c7_slides/c7_slide_13_img_26.png" style="width:100%; height:180px; object-fit:cover;" alt="Evidencia cualificación 3">
            </div>
            <div style="border-radius:12px; overflow:hidden; border:2px solid #e5e7eb; box-shadow:0 2px 8px rgba(0,0,0,0.08); transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
                <img src="assets/c7_slides/c7_slide_13_img_27.png" style="width:100%; height:180px; object-fit:cover;" alt="Evidencia cualificación 4">
            </div>
            <div style="border-radius:12px; overflow:hidden; border:2px solid #e5e7eb; box-shadow:0 2px 8px rgba(0,0,0,0.08); transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
                <img src="assets/c7_slides/c7_slide_13_img_28.png" style="width:100%; height:180px; object-fit:cover;" alt="Evidencia cualificación 5">
            </div>
            <div style="border-radius:12px; overflow:hidden; border:2px solid #e5e7eb; box-shadow:0 2px 8px rgba(0,0,0,0.08); transition:transform 0.3s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
                <img src="assets/c7_slides/c7_slide_13_img_29.png" style="width:100%; height:180px; object-fit:cover;" alt="Evidencia cualificación 6">
            </div>
        </div>
    </div>
</div>

<!-- ========== TAB 5: BIENESTAR DOCENTE ========== -->
<div id="c7Content_bienestar" class="c7-tab-content" style="display:none;">
    <div style="background:linear-gradient(135deg,#0A2540 0%,#173A66 100%); border-radius:16px; padding:30px; margin-bottom:25px; color:white;">
        <h2 style="font-family:'Montserrat',sans-serif; font-size:1.6rem; margin:0 0 8px 0; color:white;"><i class="fas fa-heart" style="color:#C8102E; margin-right:10px;"></i>Bienestar Docente</h2>
        <p style="color:#cbd5e1; font-size:0.95rem; margin:0;">Asegurar el Bienestar Integral de los Docentes</p>
    </div>

    <!-- Diagrama Ishikawa / Espina de Pescado -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.2rem; margin:0 0 20px 0; font-weight:800;"><i class="fas fa-project-diagram" style="color:#C8102E; margin-right:8px;"></i>Componentes del Bienestar Integral Docente</h3>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:16px;">
            <div style="background:#fef2f2; border:2px solid #fecaca; border-radius:12px; padding:18px; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <div style="width:35px; height:35px; background:#ef4444; border-radius:8px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-heartbeat" style="color:white;"></i></div>
                    <h5 style="color:#0A2540; margin:0; font-weight:800;">Bienestar Físico</h5>
                </div>
                <p style="color:#4b5563; font-size:0.82rem; margin:0;">Programas de salud y bienestar corporal</p>
            </div>
            <div style="background:#f0fdf4; border:2px solid #bbf7d0; border-radius:12px; padding:18px; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <div style="width:35px; height:35px; background:#10b981; border-radius:8px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-stethoscope" style="color:white;"></i></div>
                    <h5 style="color:#0A2540; margin:0; font-weight:800;">Estrategias de Salud</h5>
                </div>
                <p style="color:#4b5563; font-size:0.82rem; margin:0;">Acciones preventivas y atención integral</p>
            </div>
            <div style="background:#fefce8; border:2px solid #fef08a; border-radius:12px; padding:18px; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <div style="width:35px; height:35px; background:#eab308; border-radius:8px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-shield-alt" style="color:white;"></i></div>
                    <h5 style="color:#0A2540; margin:0; font-weight:800;">Prevención</h5>
                </div>
                <p style="color:#4b5563; font-size:0.82rem; margin:0;">Acciones de prevención y cuidado</p>
            </div>
            <div style="background:#eff6ff; border:2px solid #bfdbfe; border-radius:12px; padding:18px; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <div style="width:35px; height:35px; background:#3b82f6; border-radius:8px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-balance-scale-right" style="color:white;"></i></div>
                    <h5 style="color:#0A2540; margin:0; font-weight:800;">Equilibrio Vida-Trabajo</h5>
                </div>
                <p style="color:#4b5563; font-size:0.82rem; margin:0;">Conciliación entre vida personal y laboral</p>
            </div>
            <div style="background:#faf5ff; border:2px solid #e9d5ff; border-radius:12px; padding:18px; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <div style="width:35px; height:35px; background:#8b5cf6; border-radius:8px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-brain" style="color:white;"></i></div>
                    <h5 style="color:#0A2540; margin:0; font-weight:800;">Apoyo Psicosocial</h5>
                </div>
                <p style="color:#4b5563; font-size:0.82rem; margin:0;">Atención emocional y acompañamiento</p>
            </div>
            <div style="background:#fdf2f8; border:2px solid #fbcfe8; border-radius:12px; padding:18px; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <div style="width:35px; height:35px; background:#ec4899; border-radius:8px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-smile-beam" style="color:white;"></i></div>
                    <h5 style="color:#0A2540; margin:0; font-weight:800;">Bienestar Emocional</h5>
                </div>
                <p style="color:#4b5563; font-size:0.82rem; margin:0;">Salud mental y felicidad laboral</p>
            </div>
            <div style="background:#fff7ed; border:2px solid #fed7aa; border-radius:12px; padding:18px; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <div style="width:35px; height:35px; background:#f97316; border-radius:8px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-rocket" style="color:white;"></i></div>
                    <h5 style="color:#0A2540; margin:0; font-weight:800;">Desarrollo Profesional</h5>
                </div>
                <p style="color:#4b5563; font-size:0.82rem; margin:0;">Oportunidades de crecimiento profesional</p>
            </div>
            <div style="background:#ecfdf5; border:2px solid #a7f3d0; border-radius:12px; padding:18px; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <div style="width:35px; height:35px; background:#059669; border-radius:8px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-chart-line" style="color:white;"></i></div>
                    <h5 style="color:#0A2540; margin:0; font-weight:800;">Oportunidades de Crecimiento</h5>
                </div>
                <p style="color:#4b5563; font-size:0.82rem; margin:0;">Ascenso y desarrollo de carrera</p>
            </div>
            <div style="background:#f0f9ff; border:2px solid #bae6fd; border-radius:12px; padding:18px; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
                    <div style="width:35px; height:35px; background:#0ea5e9; border-radius:8px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-hands-helping" style="color:white;"></i></div>
                    <h5 style="color:#0A2540; margin:0; font-weight:800;">Desarrollo de Habilidades</h5>
                </div>
                <p style="color:#4b5563; font-size:0.82rem; margin:0;">Formación continua y capacitación</p>
            </div>
        </div>
    </div>

    <!-- Integración y Cohesión -->
    <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-bottom:25px;">
        <div style="background:#0A2540; border-radius:14px; padding:22px; text-align:center; color:white; border-bottom:4px solid #C8102E;">
            <i class="fas fa-users" style="font-size:2rem; color:#C8102E; margin-bottom:10px;"></i>
            <h4 style="color:white; margin:0 0 6px 0; font-weight:800;">Fortalecimiento del Equipo</h4>
            <p style="color:#cbd5e1; font-size:0.82rem; margin:0;">Trabajo colaborativo y cohesión institucional</p>
        </div>
        <div style="background:#0A2540; border-radius:14px; padding:22px; text-align:center; color:white; border-bottom:4px solid #C8102E;">
            <i class="fas fa-puzzle-piece" style="font-size:2rem; color:#C8102E; margin-bottom:10px;"></i>
            <h4 style="color:white; margin:0 0 6px 0; font-weight:800;">Actividades de Integración</h4>
            <p style="color:#cbd5e1; font-size:0.82rem; margin:0;">Eventos y espacios de encuentro docente</p>
        </div>
        <div style="background:#0A2540; border-radius:14px; padding:22px; text-align:center; color:white; border-bottom:4px solid #C8102E;">
            <i class="fas fa-link" style="font-size:2rem; color:#C8102E; margin-bottom:10px;"></i>
            <h4 style="color:white; margin:0 0 6px 0; font-weight:800;">Cohesión del Equipo</h4>
            <p style="color:#cbd5e1; font-size:0.82rem; margin:0;">Sentido de pertenencia y comunidad</p>
        </div>
    </div>

    <!-- Imagen de Bienestar -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:22px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <img src="assets/c7_slides/c7_slide_16_img_34.png" style="width:100%; max-height:400px; object-fit:contain; border-radius:10px;" alt="Bienestar Docente">
    </div>
</div>

<!-- ========== TAB 6: EVALUACIÓN DOCENTE ========== -->
<div id="c7Content_evaluacion" class="c7-tab-content" style="display:none;">
    <div style="background:linear-gradient(135deg,#0A2540 0%,#173A66 100%); border-radius:16px; padding:30px; margin-bottom:25px; color:white;">
        <h2 style="font-family:'Montserrat',sans-serif; font-size:1.6rem; margin:0 0 8px 0; color:white;"><i class="fas fa-star-half-alt" style="color:#C8102E; margin-right:10px;"></i>Evaluación Docente</h2>
        <p style="color:#cbd5e1; font-size:0.95rem; margin:0;">Sistema integral de evaluación del desempeño docente</p>
    </div>

    <!-- Características de la Evaluación -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.2rem; margin:0 0 18px 0; font-weight:800;"><i class="fas fa-cogs" style="color:#C8102E; margin-right:8px;"></i>Características de la Evaluación</h3>
        <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:12px;">
            <div style="text-align:center; padding:18px 10px; background:linear-gradient(135deg,#0ea5e9,#0284c7); border-radius:12px; color:white; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <i class="fas fa-project-diagram" style="font-size:1.5rem; margin-bottom:8px;"></i>
                <h5 style="margin:0 0 4px 0; font-weight:800; font-size:0.85rem; color:white;">Proceso Sistemático</h5>
                <p style="font-size:0.72rem; color:rgba(255,255,255,0.85); margin:0;">Un enfoque estructurado y organizado para la evaluación</p>
            </div>
            <div style="text-align:center; padding:18px 10px; background:linear-gradient(135deg,#10b981,#059669); border-radius:12px; color:white; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <i class="fas fa-sync-alt" style="font-size:1.5rem; margin-bottom:8px;"></i>
                <h5 style="margin:0 0 4px 0; font-weight:800; font-size:0.85rem; color:white;">Proceso Continuo</h5>
                <p style="font-size:0.72rem; color:rgba(255,255,255,0.85); margin:0;">Evaluación en curso para mejora continua</p>
            </div>
            <div style="text-align:center; padding:18px 10px; background:linear-gradient(135deg,#84cc16,#65a30d); border-radius:12px; color:white; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <i class="fas fa-chart-line" style="font-size:1.5rem; margin-bottom:8px;"></i>
                <h5 style="margin:0 0 4px 0; font-weight:800; font-size:0.85rem; color:white;">Mejora del Desempeño</h5>
                <p style="font-size:0.72rem; color:rgba(255,255,255,0.85); margin:0;">Esfuerzos para mejorar la efectividad de la enseñanza</p>
            </div>
            <div style="text-align:center; padding:18px 10px; background:linear-gradient(135deg,#eab308,#ca8a04); border-radius:12px; color:white; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <i class="fas fa-book-open" style="font-size:1.5rem; margin-bottom:8px;"></i>
                <h5 style="margin:0 0 4px 0; font-weight:800; font-size:0.85rem; color:white;">Calidad de la Enseñanza</h5>
                <p style="font-size:0.72rem; color:rgba(255,255,255,0.85); margin:0;">Enfoque en mejorar los métodos de enseñanza</p>
            </div>
            <div style="text-align:center; padding:18px 10px; background:linear-gradient(135deg,#f97316,#ea580c); border-radius:12px; color:white; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
                <i class="fas fa-graduation-cap" style="font-size:1.5rem; margin-bottom:8px;"></i>
                <h5 style="margin:0 0 4px 0; font-weight:800; font-size:0.85rem; color:white;">Resultados del Aprendizaje</h5>
                <p style="font-size:0.72rem; color:rgba(255,255,255,0.85); margin:0;">Impacto en el éxito académico de los estudiantes</p>
            </div>
        </div>
    </div>

    <!-- Propósito de la Evaluación (Art. 16 Estatuto Docente) -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.2rem; margin:0 0 18px 0; font-weight:800;"><i class="fas fa-bullseye" style="color:#C8102E; margin-right:8px;"></i>Propósito de la Evaluación Docente — Estatuto Docente, Artículo 16</h3>
        <div style="display:grid; grid-template-columns:repeat(2,1fr); gap:16px;">
            <div style="display:flex; align-items:flex-start; gap:14px; background:#fff7ed; border-radius:12px; padding:18px; border:2px solid #fed7aa;">
                <div style="width:45px; height:45px; background:#f97316; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-sync" style="color:white;"></i></div>
                <div>
                    <h5 style="color:#0A2540; margin:0 0 4px 0; font-weight:800;">Mejora Continua</h5>
                    <p style="color:#4b5563; font-size:0.85rem; margin:0;">Esfuerzos para la excelencia institucional a través de una facultad calificada</p>
                </div>
            </div>
            <div style="display:flex; align-items:flex-start; gap:14px; background:#fefce8; border-radius:12px; padding:18px; border:2px solid #fef08a;">
                <div style="width:45px; height:45px; background:#eab308; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-medal" style="color:white;"></i></div>
                <div>
                    <h5 style="color:#0A2540; margin:0 0 4px 0; font-weight:800;">Estímulos y Reconocimientos</h5>
                    <p style="color:#4b5563; font-size:0.85rem; margin:0;">Servir de referente para el otorgamiento de estímulos y distinciones en concordancia con las políticas, lineamientos y reglamentos vigentes.</p>
                </div>
            </div>
            <div style="display:flex; align-items:flex-start; gap:14px; background:#f0fdf4; border-radius:12px; padding:18px; border:2px solid #bbf7d0;">
                <div style="width:45px; height:45px; background:#10b981; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-user-cog" style="color:white;"></i></div>
                <div>
                    <h5 style="color:#0A2540; margin:0 0 4px 0; font-weight:800;">Decisiones de Personal</h5>
                    <p style="color:#4b5563; font-size:0.85rem; margin:0;">Decisión sobre el ingreso, permanencia, evaluación de desempeño y promoción en el escalafón docente</p>
                </div>
            </div>
            <div style="display:flex; align-items:flex-start; gap:14px; background:#eff6ff; border-radius:12px; padding:18px; border:2px solid #bfdbfe;">
                <div style="width:45px; height:45px; background:#3b82f6; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-chart-bar" style="color:white;"></i></div>
                <div>
                    <h5 style="color:#0A2540; margin:0 0 4px 0; font-weight:800;">Desarrollo de Competencias</h5>
                    <p style="color:#4b5563; font-size:0.85rem; margin:0;">Evaluación de habilidades docentes alineadas con los objetivos institucionales</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Modelo de Evaluación: Autoevaluación, Coevaluación, Heteroevaluación -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.2rem; margin:0 0 20px 0; font-weight:800;"><i class="fas fa-recycle" style="color:#C8102E; margin-right:8px;"></i>Modelo de Evaluación Docente</h3>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:20px;">
            <div style="background:linear-gradient(135deg,#10b981 0%,#059669 100%); border-radius:14px; padding:24px; color:white; text-align:center;">
                <div style="width:65px; height:65px; background:rgba(255,255,255,0.2); border-radius:50%; margin:0 auto 14px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-user-edit" style="font-size:1.6rem;"></i></div>
                <h4 style="color:white; font-weight:800; font-size:1.1rem; margin:0 0 10px 0;">Autoevaluación</h4>
                <div style="text-align:left; font-size:0.85rem;">
                    <p style="margin:3px 0; color:rgba(255,255,255,0.9);">• Pedagógico</p>
                    <p style="margin:3px 0; color:rgba(255,255,255,0.9);">• Didáctico</p>
                    <p style="margin:3px 0; color:rgba(255,255,255,0.9);">• Investigativo</p>
                    <p style="margin:3px 0; color:rgba(255,255,255,0.9);">• Administrativo</p>
                </div>
            </div>
            <div style="background:linear-gradient(135deg,#84cc16 0%,#65a30d 100%); border-radius:14px; padding:24px; color:white; text-align:center;">
                <div style="width:65px; height:65px; background:rgba(255,255,255,0.2); border-radius:50%; margin:0 auto 14px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-exchange-alt" style="font-size:1.6rem;"></i></div>
                <h4 style="color:white; font-weight:800; font-size:1.1rem; margin:0 0 10px 0;">Coevaluación</h4>
                <div style="text-align:left; font-size:0.85rem;">
                    <p style="margin:3px 0; color:rgba(255,255,255,0.9);">• Investigativo</p>
                    <p style="margin:3px 0; color:rgba(255,255,255,0.9);">• Administrativo</p>
                </div>
            </div>
            <div style="background:linear-gradient(135deg,#eab308 0%,#ca8a04 100%); border-radius:14px; padding:24px; color:white; text-align:center;">
                <div style="width:65px; height:65px; background:rgba(255,255,255,0.2); border-radius:50%; margin:0 auto 14px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-search" style="font-size:1.6rem;"></i></div>
                <h4 style="color:white; font-weight:800; font-size:1.1rem; margin:0 0 10px 0;">Heteroevaluación</h4>
                <div style="text-align:left; font-size:0.85rem;">
                    <p style="margin:3px 0; color:rgba(255,255,255,0.9);">• Pedagógico</p>
                    <p style="margin:3px 0; color:rgba(255,255,255,0.9);">• Didáctico</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Ponderación por Dimensión y por Fuentes -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:25px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:24px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
            <h3 style="color:#0A2540; font-size:1.1rem; margin:0 0 16px 0; font-weight:800;"><i class="fas fa-weight-hanging" style="color:#C8102E; margin-right:8px;"></i>Ponderación por Dimensión Docente</h3>
            <div style="display:flex; flex-direction:column; gap:10px;">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span style="font-weight:800; color:#0A2540; width:40px; text-align:right; font-size:1.1rem;">35%</span>
                    <div style="flex:1; background:#e5e7eb; border-radius:8px; height:28px; overflow:hidden;"><div style="width:35%; height:100%; background:linear-gradient(90deg,#10b981,#059669); border-radius:8px; display:flex; align-items:center; padding-left:10px;"><span style="color:white; font-size:0.78rem; font-weight:700;">Pedagógico</span></div></div>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <span style="font-weight:800; color:#0A2540; width:40px; text-align:right; font-size:1.1rem;">35%</span>
                    <div style="flex:1; background:#e5e7eb; border-radius:8px; height:28px; overflow:hidden;"><div style="width:35%; height:100%; background:linear-gradient(90deg,#3b82f6,#2563eb); border-radius:8px; display:flex; align-items:center; padding-left:10px;"><span style="color:white; font-size:0.78rem; font-weight:700;">Didáctico</span></div></div>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <span style="font-weight:800; color:#0A2540; width:40px; text-align:right; font-size:1.1rem;">20%</span>
                    <div style="flex:1; background:#e5e7eb; border-radius:8px; height:28px; overflow:hidden;"><div style="width:20%; height:100%; background:linear-gradient(90deg,#8b5cf6,#7c3aed); border-radius:8px; display:flex; align-items:center; padding-left:10px;"><span style="color:white; font-size:0.72rem; font-weight:700;">Investig. y Proy. Social</span></div></div>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <span style="font-weight:800; color:#0A2540; width:40px; text-align:right; font-size:1.1rem;">10%</span>
                    <div style="flex:1; background:#e5e7eb; border-radius:8px; height:28px; overflow:hidden;"><div style="width:10%; height:100%; background:linear-gradient(90deg,#f97316,#ea580c); border-radius:8px;"></div></div>
                    <span style="font-size:0.78rem; color:#6b7280; font-weight:600;">Administrativo</span>
                </div>
            </div>
            <p style="margin-top:14px; font-size:0.85rem; color:#C8102E; font-weight:700;"><i class="fas fa-clipboard-list" style="margin-right:5px;"></i>Plan de mejoramiento producto del resultado de la evaluación docente</p>
        </div>

        <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:24px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
            <h3 style="color:#0A2540; font-size:1.1rem; margin:0 0 16px 0; font-weight:800;"><i class="fas fa-users" style="color:#C8102E; margin-right:8px;"></i>Ponderación por Fuentes de Información</h3>
            <div style="display:flex; flex-direction:column; gap:14px; margin-bottom:18px;">
                <div style="display:flex; align-items:center; gap:10px;">
                    <span style="font-weight:800; color:#0A2540; width:40px; text-align:right; font-size:1.1rem;">20%</span>
                    <div style="flex:1; background:#e5e7eb; border-radius:8px; height:28px; overflow:hidden;"><div style="width:33%; height:100%; background:linear-gradient(90deg,#C8102E,#e11d48); border-radius:8px; display:flex; align-items:center; padding-left:10px;"><span style="color:white; font-size:0.78rem; font-weight:700;">Coordinador</span></div></div>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <span style="font-weight:800; color:#0A2540; width:40px; text-align:right; font-size:1.1rem;">60%</span>
                    <div style="flex:1; background:#e5e7eb; border-radius:8px; height:28px; overflow:hidden;"><div style="width:100%; height:100%; background:linear-gradient(90deg,#10b981,#059669); border-radius:8px; display:flex; align-items:center; padding-left:10px;"><span style="color:white; font-size:0.78rem; font-weight:700;">Estudiante</span></div></div>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <span style="font-weight:800; color:#0A2540; width:40px; text-align:right; font-size:1.1rem;">20%</span>
                    <div style="flex:1; background:#e5e7eb; border-radius:8px; height:28px; overflow:hidden;"><div style="width:33%; height:100%; background:linear-gradient(90deg,#3b82f6,#2563eb); border-radius:8px; display:flex; align-items:center; padding-left:10px;"><span style="color:white; font-size:0.78rem; font-weight:700;">Docente</span></div></div>
                </div>
            </div>
            <div style="height:220px;"><canvas id="c7SourcesChart"></canvas></div>
            <p style="margin-top:14px; font-size:0.85rem; color:#C8102E; font-weight:700;"><i class="fas fa-clipboard-list" style="margin-right:5px;"></i>Plan de mejoramiento producto del resultado de la evaluación docente</p>
        </div>
    </div>

    <!-- Clasificación de Desempeño -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.2rem; margin:0 0 20px 0; font-weight:800;"><i class="fas fa-chart-bar" style="color:#C8102E; margin-right:8px;"></i>Clasificación de Desempeño Cuantitativo</h3>
        <div style="display:grid; grid-template-columns:repeat(5,1fr); gap:14px; text-align:center;">
            <div style="padding:16px;">
                <div style="height:120px; width:50px; margin:0 auto; background:linear-gradient(to top,#10b981,#34d399); border-radius:8px; position:relative; box-shadow:0 4px 8px rgba(16,185,129,0.3);"><span style="position:absolute; top:-25px; left:50%; transform:translateX(-50%); font-weight:800; color:#10b981; font-size:1.4rem;">5</span></div>
                <h5 style="color:#10b981; font-weight:800; margin:12px 0 2px 0; font-size:0.9rem;">Plenamente</h5>
                <p style="color:#6b7280; font-size:0.72rem; margin:0;">Máximo nivel de desempeño</p>
            </div>
            <div style="padding:16px;">
                <div style="height:96px; width:50px; margin:0 auto; background:linear-gradient(to top,#84cc16,#a3e635); border-radius:8px; position:relative; box-shadow:0 4px 8px rgba(132,204,22,0.3);"><span style="position:absolute; top:-25px; left:50%; transform:translateX(-50%); font-weight:800; color:#84cc16; font-size:1.4rem;">4.4</span></div>
                <h5 style="color:#84cc16; font-weight:800; margin:12px 0 2px 0; font-size:0.9rem;">Alto grado</h5>
                <p style="color:#6b7280; font-size:0.72rem; margin:0;">Alto nivel de desempeño</p>
            </div>
            <div style="padding:16px;">
                <div style="height:72px; width:50px; margin:0 auto; background:linear-gradient(to top,#eab308,#facc15); border-radius:8px; position:relative; box-shadow:0 4px 8px rgba(234,179,8,0.3);"><span style="position:absolute; top:-25px; left:50%; transform:translateX(-50%); font-weight:800; color:#eab308; font-size:1.4rem;">3.9</span></div>
                <h5 style="color:#eab308; font-weight:800; margin:12px 0 2px 0; font-size:0.9rem;">Aceptable</h5>
                <p style="color:#6b7280; font-size:0.72rem; margin:0;">Nivel de desempeño aceptable</p>
            </div>
            <div style="padding:16px;">
                <div style="height:52px; width:50px; margin:0 auto; background:linear-gradient(to top,#f97316,#fb923c); border-radius:8px; position:relative; box-shadow:0 4px 8px rgba(249,115,22,0.3);"><span style="position:absolute; top:-25px; left:50%; transform:translateX(-50%); font-weight:800; color:#f97316; font-size:1.4rem;">3.4</span></div>
                <h5 style="color:#f97316; font-weight:800; margin:12px 0 2px 0; font-size:0.9rem;">Insuficiente</h5>
                <p style="color:#6b7280; font-size:0.72rem; margin:0;">Nivel de desempeño insuficiente</p>
            </div>
            <div style="padding:16px;">
                <div style="height:36px; width:50px; margin:0 auto; background:linear-gradient(to top,#ef4444,#f87171); border-radius:8px; position:relative; box-shadow:0 4px 8px rgba(239,68,68,0.3);"><span style="position:absolute; top:-25px; left:50%; transform:translateX(-50%); font-weight:800; color:#ef4444; font-size:1.4rem;">2.9</span></div>
                <h5 style="color:#ef4444; font-weight:800; margin:12px 0 2px 0; font-size:0.9rem;">No cumple</h5>
                <p style="color:#6b7280; font-size:0.72rem; margin:0;">No cumple con los criterios</p>
            </div>
        </div>
    </div>

    <!-- Plan de Mejoramiento -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.2rem; margin:0 0 18px 0; font-weight:800;"><i class="fas fa-chart-pie" style="color:#C8102E; margin-right:8px;"></i>Clasificación del Plan de Mejoramiento</h3>
        <div style="display:grid; grid-template-columns:repeat(3,1fr); gap:16px;">
            <div style="background:linear-gradient(135deg,#10b981 0%,#059669 100%); border-radius:14px; padding:22px; text-align:center; color:white;">
                <div style="font-size:2.5rem; font-weight:800; margin-bottom:6px;">5</div>
                <h5 style="color:white; margin:0 0 4px 0; font-weight:800;">Mantenimiento</h5>
                <p style="font-size:0.82rem; color:rgba(255,255,255,0.85); margin:0;">Nivel de desempeño más alto</p>
            </div>
            <div style="background:linear-gradient(135deg,#84cc16 0%,#65a30d 100%); border-radius:14px; padding:22px; text-align:center; color:white;">
                <div style="font-size:2.5rem; font-weight:800; margin-bottom:6px;">3.7</div>
                <h5 style="color:white; margin:0 0 4px 0; font-weight:800;">Fortalecimiento</h5>
                <p style="font-size:0.82rem; color:rgba(255,255,255,0.85); margin:0;">Nivel de desempeño moderado</p>
            </div>
            <div style="background:linear-gradient(135deg,#eab308 0%,#ca8a04 100%); border-radius:14px; padding:22px; text-align:center; color:white;">
                <div style="font-size:2.5rem; font-weight:800; margin-bottom:6px;">2.2</div>
                <h5 style="color:white; margin:0 0 4px 0; font-weight:800;">Autorregulación</h5>
                <p style="font-size:0.82rem; color:rgba(255,255,255,0.85); margin:0;">Nivel de desempeño más bajo</p>
            </div>
        </div>
    </div>
</div>

<!-- ========== TAB: ESCALAFÓN Y SALARIOS ========== -->
<div id="c7Content_escalafon" class="c7-tab-content" style="display:none;">
    <!-- Introducción -->
    <div style="background:linear-gradient(135deg,#0A2540 0%,#173A66 100%); border-radius:16px; padding:30px; margin-bottom:25px; color:white;">
        <h2 style="font-family:'Montserrat',sans-serif; font-size:1.6rem; margin:0 0 8px 0; color:white;"><i class="fas fa-layer-group" style="color:#C8102E; margin-right:10px;"></i>Escalafón Docente y Estructura Salarial</h2>
        <p style="color:#cbd5e1; font-size:0.95rem; margin:0;">Capítulo VIII: Sistema de clasificación, requisitos por categorías, equivalencias y tabla de remuneración de la Corporación Escuela Tecnológica del Oriente.</p>
    </div>

    <div style="display:grid; grid-template-columns:1fr 2fr; gap:20px; margin-bottom:25px;">
        <!-- Criterios del Escalafón -->
        <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:24px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
            <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.15rem; margin:0 0 16px 0; font-weight:800;"><i class="fas fa-list-check" style="color:#C8102E; margin-right:8px;"></i>Criterios de Clasificación</h3>
            <p style="color:#4b5563; font-size:0.85rem; line-height:1.5; margin:0 0 14px 0;">El escalafón docente se define en el <strong>Artículo 21</strong> como el sistema de clasificación de acuerdo con el saber disciplinar, la experiencia y la investigación, según los siguientes criterios:</p>
            <div style="display:flex; flex-direction:column; gap:8px;">
                <div style="display:flex; align-items:center; gap:10px; font-size:0.85rem; color:#374151; background:#f8fafc; padding:8px 12px; border-radius:8px; border:1px solid #e2e8f0;"><i class="fas fa-graduation-cap" style="color:#C8102E; width:16px;"></i><span>Formación académica</span></div>
                <div style="display:flex; align-items:center; gap:10px; font-size:0.85rem; color:#374151; background:#f8fafc; padding:8px 12px; border-radius:8px; border:1px solid #e2e8f0;"><i class="fas fa-briefcase" style="color:#C8102E; width:16px;"></i><span>Experiencia profesional certificada</span></div>
                <div style="display:flex; align-items:center; gap:10px; font-size:0.85rem; color:#374151; background:#f8fafc; padding:8px 12px; border-radius:8px; border:1px solid #e2e8f0;"><i class="fas fa-chalkboard-teacher" style="color:#C8102E; width:16px;"></i><span>Experiencia como docente universitario</span></div>
                <div style="display:flex; align-items:center; gap:10px; font-size:0.85rem; color:#374151; background:#f8fafc; padding:8px 12px; border-radius:8px; border:1px solid #e2e8f0;"><i class="fas fa-microscope" style="color:#C8102E; width:16px;"></i><span>Producción en investigación e innovación</span></div>
                <div style="display:flex; align-items:center; gap:10px; font-size:0.85rem; color:#374151; background:#f8fafc; padding:8px 12px; border-radius:8px; border:1px solid #e2e8f0;"><i class="fas fa-book-open" style="color:#C8102E; width:16px;"></i><span>Formación continuada</span></div>
                <div style="display:flex; align-items:center; gap:10px; font-size:0.85rem; color:#374151; background:#f8fafc; padding:8px 12px; border-radius:8px; border:1px solid #e2e8f0;"><i class="fas fa-star" style="color:#C8102E; width:16px;"></i><span>Resultados de evaluación docente</span></div>
                <div style="display:flex; align-items:center; gap:10px; font-size:0.85rem; color:#374151; background:#f8fafc; padding:8px 12px; border-radius:8px; border:1px solid #e2e8f0;"><i class="fas fa-history" style="color:#C8102E; width:16px;"></i><span>Permanencia y estabilidad institucional</span></div>
            </div>
        </div>

        <!-- Tabla Salarial (Imagen Adjunta) -->
        <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:24px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
                <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.15rem; margin:0; font-weight:800;"><i class="fas fa-dollar-sign" style="color:#10b981; margin-right:8px;"></i>Escala Salarial Vigente</h3>
                <span style="background:#eff6ff; color:#2563eb; font-weight:800; font-size:0.75rem; padding:4px 12px; border-radius:20px;"><i class="fas fa-clock" style="margin-right:4px;"></i>Estructura de Cargos</span>
            </div>
            <p style="color:#4b5563; font-size:0.85rem; line-height:1.5; margin:0 0 16px 0;">Remuneración mensual establecida de acuerdo con la jornada laboral y el nivel de formación académica alcanzado:</p>
            
            <table class="tbl" style="border-radius:10px; overflow:hidden; width:100%; border-collapse:collapse;">
                <thead>
                    <tr style="background:#0A2540; color:white;">
                        <th style="background:#0A2540; color:white; font-weight:700; padding:12px; text-align:left; font-size:0.85rem;">Nivel de Formación</th>
                        <th style="background:#0A2540; color:white; font-weight:700; padding:12px; text-align:right; font-size:0.85rem;">Medio Tiempo <br><span style="font-size:0.7rem; font-weight:normal; opacity:0.85;">(22 horas / semana)</span></th>
                        <th style="background:#0A2540; color:white; font-weight:700; padding:12px; text-align:right; font-size:0.85rem;">Tiempo Completo <br><span style="font-size:0.7rem; font-weight:normal; opacity:0.85;">(40 horas / semana)</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom:1px solid #e2e8f0; transition: background 0.2s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
                        <td style="padding:12px; font-weight:700; color:#374151; font-size:0.85rem;"><i class="fas fa-user-graduate" style="color:#94a3b8; margin-right:8px;"></i>Profesional</td>
                        <td style="padding:12px; text-align:right; font-weight:800; color:#0A2540; font-size:0.9rem;">$ 1.382.450</td>
                        <td style="padding:12px; text-align:right; font-weight:800; color:#C8102E; font-size:0.9rem;">$ 2.404.300</td>
                    </tr>
                    <tr style="border-bottom:1px solid #e2e8f0; background:#f8fafc; transition: background 0.2s;" onmouseover="this.style.background='#f1f5f9'" onmouseout="this.style.background='#f8fafc'">
                        <td style="padding:12px; font-weight:700; color:#374151; font-size:0.85rem;"><i class="fas fa-medal" style="color:#eab308; margin-right:8px;"></i>Especialista</td>
                        <td style="padding:12px; text-align:right; font-weight:800; color:#0A2540; font-size:0.9rem;">$ 1.744.100</td>
                        <td style="padding:12px; text-align:right; font-weight:800; color:#C8102E; font-size:0.9rem;">$ 3.005.650</td>
                    </tr>
                    <tr style="border-bottom:1px solid #e2e8f0; transition: background 0.2s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background='transparent'">
                        <td style="padding:12px; font-weight:700; color:#374151; font-size:0.85rem;"><i class="fas fa-award" style="color:#3b82f6; margin-right:8px;"></i>Magíster</td>
                        <td style="padding:12px; text-align:right; font-weight:800; color:#0A2540; font-size:0.9rem;">$ 2.103.650</td>
                        <td style="padding:12px; text-align:right; font-weight:800; color:#C8102E; font-size:0.9rem;">$ 3.603.450</td>
                    </tr>
                    <tr style="background:#eff6ff; border-bottom:2px solid #bfdbfe; transition: background 0.2s;" onmouseover="this.style.background='#dbeafe'" onmouseout="this.style.background='#eff6ff'">
                        <td style="padding:12px; font-weight:800; color:#1e40af; font-size:0.85rem;"><i class="fas fa-graduation-cap" style="color:#1d4ed8; margin-right:8px;"></i>Doctor</td>
                        <td style="padding:12px; text-align:right; font-weight:800; color:#1e40af; font-size:0.95rem;">$ 2.524.500</td>
                        <td style="padding:12px; text-align:right; font-weight:800; color:#b91c1c; font-size:0.95rem;">$ 4.327.700</td>
                    </tr>
                </tbody>
            </table>
            <div style="margin-top:12px; background:#faf5ff; border:1px dashed #c084fc; border-radius:8px; padding:10px; font-size:0.75rem; color:#6b21a8; display:flex; gap:8px; align-items:center;">
                <i class="fas fa-info-circle" style="font-size:1rem; flex-shrink:0;"></i>
                <span><strong>Nota de Remuneración:</strong> El escalafón docente se complementa con la formación y la producción académica regulada por el Comité de Contratación.</span>
            </div>
        </div>
    </div>

    <!-- Proceso de Ingreso y Categorías -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.25rem; margin:0 0 16px 0; font-weight:800;"><i class="fas fa-sitemap" style="color:#C8102E; margin-right:8px;"></i>Categorías del Escalafón Docente (Artículo 22)</h3>
        <p style="color:#4b5563; font-size:0.88rem; line-height:1.5; margin:0 0 20px 0;">Para ingresar al escalafón docente, el docente debe haber superado el proceso de ingreso (<strong>reclutamiento, selección y contratación</strong>) y cumplir con todos los criterios de la respectiva categoría:</p>

        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:16px;">
            <!-- Profesor Auxiliar -->
            <div style="border:2px solid #e2e8f0; border-radius:12px; padding:18px; background:#fff; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
                <div>
                    <span style="background:#e2e8f0; color:#475569; padding:3px 10px; border-radius:20px; font-size:0.72rem; font-weight:800; text-transform:uppercase; letter-spacing:1px; display:inline-block; margin-bottom:10px;">Art. 23</span>
                    <h4 style="color:#0A2540; font-weight:800; font-size:1.1rem; margin:0 0 10px 0;"><i class="fas fa-chalkboard-teacher" style="color:#475569; margin-right:6px;"></i>Auxiliar</h4>
                    <ul style="margin:0; padding-left:14px; color:#4b5563; font-size:0.78rem; display:flex; flex-direction:column; gap:6px;">
                        <li>Pregrado universitario.</li>
                        <li>Mínimo 1 año de experiencia laboral.</li>
                        <li>Mínimo 1 año de experiencia docente en educación superior.</li>
                        <li>Mínimo 20 horas en formación pedagógica/didáctica.</li>
                        <li>Acreditar Producción Académica.</li>
                    </ul>
                </div>
            </div>

            <!-- Profesor Asistente -->
            <div style="border:2px solid #bfdbfe; border-radius:12px; padding:18px; background:#eff6ff; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
                <div>
                    <span style="background:#3b82f6; color:white; padding:3px 10px; border-radius:20px; font-size:0.72rem; font-weight:800; text-transform:uppercase; letter-spacing:1px; display:inline-block; margin-bottom:10px;">Art. 24</span>
                    <h4 style="color:#1e40af; font-weight:800; font-size:1.1rem; margin:0 0 10px 0;"><i class="fas fa-user-md" style="color:#2563eb; margin-right:6px;"></i>Asistente</h4>
                    <ul style="margin:0; padding-left:14px; color:#1e3a8a; font-size:0.78rem; display:flex; flex-direction:column; gap:6px;">
                        <li>Pregrado + Posgrado a nivel de <strong>Especialista</strong>.</li>
                        <li>Mínimo 2 años de experiencia laboral.</li>
                        <li>Mínimo 2 años de experiencia docente IES.</li>
                        <li>Acreditar Producción Académica.</li>
                        <li>Lengua extranjera nivel mínimo <strong>A2</strong>.</li>
                        <li>Valoración de "alto grado" en evaluación docente.</li>
                        <li>Participar en plan de cualificación.</li>
                    </ul>
                </div>
            </div>

            <!-- Profesor Asociado -->
            <div style="border:2px solid #fed7aa; border-radius:12px; padding:18px; background:#fff7ed; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
                <div>
                    <span style="background:#f97316; color:white; padding:3px 10px; border-radius:20px; font-size:0.72rem; font-weight:800; text-transform:uppercase; letter-spacing:1px; display:inline-block; margin-bottom:10px;">Art. 25</span>
                    <h4 style="color:#9a3412; font-weight:800; font-size:1.1rem; margin:0 0 10px 0;"><i class="fas fa-medal" style="color:#ea580c; margin-right:6px;"></i>Asociado</h4>
                    <ul style="margin:0; padding-left:14px; color:#7c2d12; font-size:0.78rem; display:flex; flex-direction:column; gap:6px;">
                        <li>Pregrado + Posgrado a nivel de <strong>Maestría o Doctorado</strong>.</li>
                        <li>Mínimo 3 años de experiencia laboral.</li>
                        <li>Mínimo 4 años de experiencia docente IES.</li>
                        <li>Acreditar Producción Académica.</li>
                        <li>Lengua extranjera nivel mínimo <strong>B1</strong>.</li>
                        <li>Vinculación de mínimo 1 año a grupos de investigación institucional.</li>
                        <li>Valoración de "alto grado" en evaluación docente.</li>
                    </ul>
                </div>
            </div>

            <!-- Profesor Titular -->
            <div style="border:2px solid #fbcfe8; border-radius:12px; padding:18px; background:#fdf2f8; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 2px 6px rgba(0,0,0,0.02);">
                <div>
                    <span style="background:#ec4899; color:white; padding:3px 10px; border-radius:20px; font-size:0.72rem; font-weight:800; text-transform:uppercase; letter-spacing:1px; display:inline-block; margin-bottom:10px;">Art. 26</span>
                    <h4 style="color:#9d174d; font-weight:800; font-size:1.1rem; margin:0 0 10px 0;"><i class="fas fa-crown" style="color:#db2777; margin-right:6px;"></i>Titular</h4>
                    <ul style="margin:0; padding-left:14px; color:#831843; font-size:0.78rem; display:flex; flex-direction:column; gap:6px;">
                        <li>Pregrado + Posgrado a nivel de <strong>Maestría o Doctorado</strong>.</li>
                        <li>Mínimo 5 años de experiencia laboral.</li>
                        <li>Mínimo 5 años de experiencia docente IES.</li>
                        <li>Acreditar Producción Académica.</li>
                        <li>Lengua extranjera nivel mínimo <strong>B2</strong>.</li>
                        <li>Vinculación de mínimo 2 años a grupos de investigación institucional.</li>
                        <li>Valoración de "alto grado" en evaluación docente.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Equivalencias, Comité y Normas adicionales -->
    <div style="display:grid; grid-template-columns:2fr 1fr; gap:20px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:24px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
            <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.15rem; margin:0 0 14px 0; font-weight:800;"><i class="fas fa-equals" style="color:#C8102E; margin-right:8px;"></i>Equivalencias del Escalafón (Artículo 30)</h3>
            <p style="color:#4b5563; font-size:0.85rem; margin:0 0 14px 0;">Se establecen criterios de equivalencia para clasificar la experiencia y la formación académica:</p>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:16px;">
                    <h5 style="color:#0A2540; margin:0 0 8px 0; font-weight:800; font-size:0.85rem;"><i class="fas fa-history" style="color:#059669; margin-right:6px;"></i>Equivalencias de Experiencia:</h5>
                    <span style="font-size:0.75rem; color:#6b7280; display:block; margin-bottom:8px;">1 año de experiencia de tiempo completo equivale a:</span>
                    <ul style="margin:0; padding-left:14px; color:#4b5563; font-size:0.75rem; display:flex; flex-direction:column; gap:6px;">
                        <li>2 años de experiencia en educación básica y media.</li>
                        <li>2 años de experiencia en cargos de dirección académica en IES.</li>
                        <li>2 años como profesor de medio tiempo en IES.</li>
                        <li>2 años en instituciones de formación para el trabajo y desarrollo humano.</li>
                    </ul>
                </div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:16px;">
                    <h5 style="color:#0A2540; margin:0 0 8px 0; font-weight:800; font-size:0.85rem;"><i class="fas fa-graduation-cap" style="color:#2563eb; margin-right:6px;"></i>Equivalencias de Formación:</h5>
                    <ul style="margin:0; padding-left:14px; color:#4b5563; font-size:0.75rem; display:flex; flex-direction:column; gap:6px; margin-bottom:10px;">
                        <li>Las especializaciones médicas son equivalentes al título de maestría (Art. 30, b).</li>
                    </ul>
                    <div style="background:#eff6ff; border-left:3px solid #2563eb; padding:8px; border-radius:4px; font-size:0.72rem; color:#1e40af; line-height:1.4;">
                        <strong>Parágrafo 1:</strong> Expertos en áreas de saber sin título académico, pero con reconocida trayectoria, serán evaluados por el Comité de Contratación.
                    </div>
                </div>
            </div>
        </div>

        <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:24px; box-shadow:0 4px 12px rgba(0,0,0,0.06); display:flex; flex-direction:column; justify-content:space-between;">
            <div>
                <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.15rem; margin:0 0 12px 0; font-weight:800;"><i class="fas fa-users-cog" style="color:#C8102E; margin-right:8px;"></i>Comité & Reconocimientos</h3>
                <div style="display:flex; flex-direction:column; gap:10px; font-size:0.78rem; color:#4b5563;">
                    <div style="background:#f0fdf4; border-radius:8px; padding:10px; border:1px solid #bbf7d0;">
                        <strong>Artículos 27 y 28:</strong> La experiencia en otras IES y en básica y media se tomará en cuenta para el cálculo de requisitos y la debida categorización de nuevos profesores.
                    </div>
                    <div style="background:#f8fafc; border-radius:8px; padding:10px; border:1px solid #e2e8f0;">
                        <strong>Artículo 29:</strong> El Comité de Contratación Docente es el responsable de la reclasificación antes del primer periodo de cada año.
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ========== TAB: ESTÍMULOS Y CAPACITACIÓN ========== -->
<div id="c7Content_estimulos" class="c7-tab-content" style="display:none;">
    <!-- Introducción -->
    <div style="background:linear-gradient(135deg,#0A2540 0%,#173A66 100%); border-radius:16px; padding:30px; margin-bottom:25px; color:white;">
        <h2 style="font-family:'Montserrat',sans-serif; font-size:1.6rem; margin:0 0 8px 0; color:white;"><i class="fas fa-gift" style="color:#C8102E; margin-right:10px;"></i>Distinciones, Estímulos y Capacitación Docente</h2>
        <p style="color:#cbd5e1; font-size:0.95rem; margin:0;">Capítulo IX: Reconocimiento a los méritos académicos, becas de posgrado y políticas de perfeccionamiento institucional de la Corporación Escuela Tecnológica del Oriente.</p>
    </div>

    <!-- Becas e Incentivos a Estudios Posgraduales -->
    <div style="background:linear-gradient(135deg,#fefce8 0%,#fef9c3 100%); border:2px solid #fef08a; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(234,179,8,0.15);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; flex-wrap:wrap; gap:10px;">
            <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.25rem; margin:0; font-weight:800;"><i class="fas fa-percentage" style="color:#eab308; margin-right:8px;"></i>Plan de Becas para Formación Avanzada (Art. 38, b)</h3>
            <span style="background:#eab308; color:#0A2540; font-weight:800; font-size:0.75rem; padding:4px 12px; border-radius:20px;"><i class="fas fa-handshake" style="margin-right:4px;"></i>Aliados Estratégicos</span>
        </div>
        <p style="color:#4b5563; font-size:0.88rem; line-height:1.5; margin:0 0 20px 0;">La institución garantiza herramientas y ofrece estímulos para incentivar estudios posgraduales a su profesorado a través de convenios activos de becas:</p>
        
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:20px;">
            <div style="background:white; border-radius:12px; padding:20px; text-align:center; border:2px solid #fde68a; box-shadow:0 4px 8px rgba(0,0,0,0.02);">
                <div style="width:60px; height:60px; background:#eff6ff; border-radius:50%; margin:0 auto 12px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-user-graduate" style="color:#3b82f6; font-size:1.5rem;"></i></div>
                <h4 style="color:#0A2540; font-weight:800; font-size:1.1rem; margin:0 0 6px 0;">Especializaciones</h4>
                <div style="font-size:2rem; font-weight:800; color:#3b82f6; margin-bottom:6px;">20% <span style="font-size:0.9rem; font-weight:normal; color:#6b7280;">Beca</span></div>
                <p style="color:#6b7280; font-size:0.78rem; margin:0;">Incentivo para la formación en especializaciones aliadas</p>
            </div>
            <div style="background:white; border-radius:12px; padding:20px; text-align:center; border:2px solid #fde68a; box-shadow:0 4px 8px rgba(0,0,0,0.02);">
                <div style="width:60px; height:60px; background:#faf5ff; border-radius:50%; margin:0 auto 12px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-book-reader" style="color:#8b5cf6; font-size:1.5rem;"></i></div>
                <h4 style="color:#0A2540; font-weight:800; font-size:1.1rem; margin:0 0 6px 0;">Maestrías</h4>
                <div style="font-size:2rem; font-weight:800; color:#8b5cf6; margin-bottom:6px;">10% <span style="font-size:0.9rem; font-weight:normal; color:#6b7280;">Beca</span></div>
                <p style="color:#6b7280; font-size:0.78rem; margin:0;">Apoyo institucional para la realización de maestrías</p>
            </div>
            <div style="background:white; border-radius:12px; padding:20px; text-align:center; border:2px solid #fde68a; box-shadow:0 4px 8px rgba(0,0,0,0.02);">
                <div style="width:60px; height:60px; background:#fdf2f8; border-radius:50%; margin:0 auto 12px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-university" style="color:#ec4899; font-size:1.5rem;"></i></div>
                <h4 style="color:#0A2540; font-weight:800; font-size:1.1rem; margin:0 0 6px 0;">Doctorados</h4>
                <div style="font-size:2rem; font-weight:800; color:#ec4899; margin-bottom:6px;">Hasta 5% <span style="font-size:0.9rem; font-weight:normal; color:#6b7280;">Beca</span></div>
                <p style="color:#6b7280; font-size:0.78rem; margin:0;">Incentivo especial con convenios activos de aliados estratégicos</p>
            </div>
        </div>
    </div>

    <!-- Distinciones Académicas (Art. 32-36) -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.25rem; margin:0 0 16px 0; font-weight:800;"><i class="fas fa-award" style="color:#C8102E; margin-right:8px;"></i>Distinciones y Reconocimientos (Artículo 32)</h3>
        <p style="color:#4b5563; font-size:0.88rem; line-height:1.5; margin:0 0 18px 0;">Para exaltar los méritos de su cuerpo de profesores, se otorgan las siguientes distinciones solemnes que constarán en acuerdos del Consejo Superior y Rectoría:</p>
        
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px;">
            <!-- Docente Distinguido -->
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
                        <div style="width:36px; height:36px; background:#eab308; border-radius:50%; display:flex; align-items:center; justify-content:center;"><i class="fas fa-star" style="color:#eab308; font-size:0.9rem; filter: drop-shadow(0 0 2px rgba(0,0,0,0.25));"></i></div>
                        <h4 style="color:#0A2540; margin:0; font-weight:800; font-size:0.95rem;">Docente Distinguido</h4>
                    </div>
                    <span style="font-size:0.7rem; color:#6b7280; display:block; margin-bottom:8px;"><strong>Requisitos (Art. 33):</strong></span>
                    <ul style="margin:0; padding-left:14px; color:#4b5563; font-size:0.75rem; display:flex; flex-direction:column; gap:6px;">
                        <li>Docente en ejercicio y mínimo 5 años de servicio continuo en la institución.</li>
                        <li>Reconocimiento por producción intelectual, aporte científico, disciplinar o tecnológico (publicación nacional/internacional).</li>
                        <li>Evaluación de desempeño anual ≥ 4.5 o valoración cualitativa de "Excelente".</li>
                    </ul>
                </div>
                <div style="margin-top:14px; background:#fef3c7; border-radius:6px; padding:8px; font-size:0.7rem; color:#b45309; line-height:1.3;">
                    <strong>Beneficio:</strong> Equivale a los requisitos de producción intelectual para ascenso en escalafón.
                </div>
            </div>

            <!-- Docente Emérito -->
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
                        <div style="width:36px; height:36px; background:#3b82f6; border-radius:50%; display:flex; align-items:center; justify-content:center;"><i class="fas fa-medal" style="color:white; font-size:0.9rem;"></i></div>
                        <h4 style="color:#0A2540; margin:0; font-weight:800; font-size:0.95rem;">Docente Emérito</h4>
                    </div>
                    <span style="font-size:0.7rem; color:#6b7280; display:block; margin-bottom:8px;"><strong>Requisitos (Art. 34):</strong></span>
                    <ul style="margin:0; padding-left:14px; color:#4b5563; font-size:0.75rem; display:flex; flex-direction:column; gap:6px;">
                        <li>Ser o haber sido docente de la institución.</li>
                        <li>Reconocimiento nacional o internacional por sus elevados y relevantes aportes a la ciencia, técnica, humanidades, deporte o artes.</li>
                    </ul>
                </div>
                <div style="margin-top:14px; background:#eff6ff; border-radius:6px; padding:8px; font-size:0.7rem; color:#1d4ed8; line-height:1.3;">
                    <strong>Otorgado por:</strong> Consejo Superior a propuesta del Consejo Académico.
                </div>
            </div>

            <!-- Menciones Especiales -->
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:12px; padding:20px; display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                    <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
                        <div style="width:36px; height:36px; background:#ec4899; border-radius:50%; display:flex; align-items:center; justify-content:center;"><i class="fas fa-ribbon" style="color:white; font-size:0.9rem;"></i></div>
                        <h4 style="color:#0A2540; margin:0; font-weight:800; font-size:0.95rem;">Menciones Especiales</h4>
                    </div>
                    <span style="font-size:0.7rem; color:#6b7280; display:block; margin-bottom:8px;"><strong>Requisitos (Art. 35):</strong></span>
                    <ul style="margin:0; padding-left:14px; color:#4b5563; font-size:0.75rem; display:flex; flex-direction:column; gap:6px;">
                        <li>Docente que por sus aportes intelectuales merezca la distinción.</li>
                        <li>Por evaluación académica sobresaliente.</li>
                        <li>Por tiempo de servicios destacado.</li>
                        <li>Por actuaciones sobresalientes en certámenes tecnológicos, culturales, artísticos y deportivos.</li>
                    </ul>
                </div>
                <div style="margin-top:14px; background:#fdf2f8; border-radius:6px; padding:8px; font-size:0.7rem; color:#be185d; line-height:1.3;">
                    <strong>Otorgado por:</strong> El Rector de la Corporación en acto público (Art. 36).
                </div>
            </div>
        </div>
    </div>

    <!-- Políticas de Capacitación y Perfeccionamiento -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:14px; padding:28px; box-shadow:0 4px 12px rgba(0,0,0,0.06);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
            <h3 style="color:#0A2540; font-family:'Montserrat',sans-serif; font-size:1.25rem; margin:0; font-weight:800;"><i class="fas fa-graduation-cap" style="color:#C8102E; margin-right:8px;"></i>Políticas de Capacitación Docente (Artículos 37, 38 y 39)</h3>
            <span style="background:#f0fdf4; color:#16a34a; font-weight:800; font-size:0.75rem; padding:4px 12px; border-radius:20px;"><i class="fas fa-check" style="margin-right:4px;"></i>Calidad Educativa</span>
        </div>
        <p style="color:#4b5563; font-size:0.85rem; line-height:1.5; margin:0 0 16px 0;">La institución concibe el perfeccionamiento como un proceso permanente para garantizar el mejoramiento del desempeño y la práctica pedagógica:</p>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
            <div style="display:flex; flex-direction:column; gap:8px;">
                <div style="background:#f8fafc; border-left:3px solid #C8102E; padding:10px 14px; border-radius:0 8px 8px 0; font-size:0.8rem; color:#475569;">
                    <strong>A. Proceso Permanente:</strong> Bajo criterios de eficiencia y eficacia para el mejoramiento continuo y consolidación académica.
                </div>
                <div style="background:#f8fafc; border-left:3px solid #C8102E; padding:10px 14px; border-radius:0 8px 8px 0; font-size:0.8rem; color:#475569;">
                    <strong>B. Formación Posgradual:</strong> Incentivos y becas (especializaciones 20%, maestrías 10%, doctorados hasta 5%) con aliados estratégicos.
                </div>
                <div style="background:#f8fafc; border-left:3px solid #C8102E; padding:10px 14px; border-radius:0 8px 8px 0; font-size:0.8rem; color:#475569;">
                    <strong>C. Articulación Curricular:</strong> Toda capacitación debe guardar coherencia con la Misión, Modelo Pedagógico y Lineamientos.
                </div>
                <div style="background:#f8fafc; border-left:3px solid #C8102E; padding:10px 14px; border-radius:0 8px 8px 0; font-size:0.8rem; color:#475569;">
                    <strong>D. Derecho y Deber:</strong> Derecho del docente y deber de la institución para la evolución de la gestión académica.
                </div>
            </div>
            <div style="display:flex; flex-direction:column; gap:8px;">
                <div style="background:#f8fafc; border-left:3px solid #0a2540; padding:10px 14px; border-radius:0 8px 8px 0; font-size:0.8rem; color:#475569;">
                    <strong>E. Superación Profesional:</strong> Actitud permanente de superación según tendencias pedagógicas y tecnológicas.
                </div>
                <div style="background:#f8fafc; border-left:3px solid #0a2540; padding:10px 14px; border-radius:0 8px 8px 0; font-size:0.8rem; color:#475569;">
                    <strong>F. Estímulos a Innovación:</strong> Estímulos a docentes destacados y a quienes desarrollen e implementen innovación pedagógica.
                </div>
                <div style="background:#f8fafc; border-left:3px solid #0a2540; padding:10px 14px; border-radius:0 8px 8px 0; font-size:0.8rem; color:#475569;">
                    <strong>G. Coordinación:</strong> Actividades coordinadas por la Vicerrectoría Académica para garantizar pertinencia (Art. 39, Parágrafo 1).
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ========== TAB: RÉGIMEN DISCIPLINARIO ========== -->
<div id="c7Content_regimen" class="c7-tab-content" style="display:none;">
    <!-- Introducción -->
    <div style="background:linear-gradient(135deg,#0A2540 0%,#173A66 100%); border-radius:16px; padding:30px; margin-bottom:25px; color:white;">
        <h2 style="font-family:'Montserrat',sans-serif; font-size:1.6rem; margin:0 0 8px 0; color:white;"><i class="fas fa-shield-halved" style="color:#C8102E; margin-right:10px;"></i>Régimen Disciplinario y de Cumplimiento</h2>
        <p style="color:#cbd5e1; font-size:0.95rem; margin:0;">Capítulo X: Impedimentos, inhabilidades, incompatibilidades, prohibiciones y conflicto de intereses en la Corporación Escuela Tecnológica del Oriente.</p>
    </div>

    <!-- Módulos de Cumplimiento -->
    <div style="display:grid; grid-template-columns:repeat(5, 1fr); gap:16px; margin-bottom:25px;">
        <!-- Impedimentos -->
        <div style="background:#fff; border:2px solid #ef4444; border-radius:14px; padding:20px; transition:transform 0.3s; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 4px 12px rgba(0,0,0,0.03);" onmouseover="this.style.transform='translateY(-6px)'" onmouseout="this.style.transform='translateY(0)'">
            <div>
                <span style="background:#fef2f2; color:#ef4444; font-weight:800; font-size:0.7rem; padding:3px 10px; border-radius:12px; display:inline-block; margin-bottom:10px; text-transform:uppercase;">Art. 40</span>
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
                    <div style="width:34px; height:34px; background:#fef2f2; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-gavel" style="color:#ef4444; font-size:0.85rem;"></i></div>
                    <h4 style="color:#0A2540; margin:0; font-weight:800; font-size:0.85rem;">Impedimentos</h4>
                </div>
                <p style="color:#4b5563; font-size:0.75rem; line-height:1.4; margin:0;">Para representación o participación en cuerpos colegiados, el docente debe declararse impedido en decisiones (votos) que atañen beneficios familiares o personales.</p>
            </div>
            <div style="margin-top:14px; font-size:0.7rem; color:#ef4444; font-weight:bold;">
                <i class="fas fa-exclamation-triangle"></i> Manifestar conflicto de interés.
            </div>
        </div>

        <!-- Inhabilidades -->
        <div style="background:#fff; border:2px solid #f97316; border-radius:14px; padding:20px; transition:transform 0.3s; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 4px 12px rgba(0,0,0,0.03);" onmouseover="this.style.transform='translateY(-6px)'" onmouseout="this.style.transform='translateY(0)'">
            <div>
                <span style="background:#fff7ed; color:#f97316; font-weight:800; font-size:0.7rem; padding:3px 10px; border-radius:12px; display:inline-block; margin-bottom:10px; text-transform:uppercase;">Art. 41</span>
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
                    <div style="width:34px; height:34px; background:#fff7ed; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-user-slash" style="color:#f97316; font-size:0.85rem;"></i></div>
                    <h4 style="color:#0A2540; margin:0; font-weight:800; font-size:0.85rem;">Inhabilidades</h4>
                </div>
                <p style="color:#4b5563; font-size:0.75rem; line-height:1.4; margin:0;">De acuerdo con el RIT, el docente podrá estar sujeto a inhabilidades por procesos disciplinarios o situaciones de incapacidad para sus funciones.</p>
            </div>
            <div style="margin-top:14px; font-size:0.7rem; color:#f97316; font-weight:bold;">
                <i class="fas fa-info-circle"></i> Notificar a Talento Humano.
            </div>
        </div>

        <!-- Incompatibilidades -->
        <div style="background:#fff; border:2px solid #eab308; border-radius:14px; padding:20px; transition:transform 0.3s; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 4px 12px rgba(0,0,0,0.03);" onmouseover="this.style.transform='translateY(-6px)'" onmouseout="this.style.transform='translateY(0)'">
            <div>
                <span style="background:#fefce8; color:#eab308; font-weight:800; font-size:0.7rem; padding:3px 10px; border-radius:12px; display:inline-block; margin-bottom:10px; text-transform:uppercase;">Art. 42</span>
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
                    <div style="width:34px; height:34px; background:#fefce8; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-balance-scale" style="color:#eab308; font-size:0.85rem;"></i></div>
                    <h4 style="color:#0A2540; margin:0; font-weight:800; font-size:0.85rem;">Incompatibilidades</h4>
                </div>
                <p style="color:#4b5563; font-size:0.75rem; line-height:1.4; margin:0;">Ningún docente podrá tener simultáneamente en la misma jornada laboral dos cargos adscritos a la institución que ameriten relación laboral.</p>
            </div>
            <div style="margin-top:14px; font-size:0.7rem; color:#eab308; font-weight:bold;">
                <i class="fas fa-ban"></i> Restricción de doble cargo.
            </div>
        </div>

        <!-- Prohibiciones -->
        <div style="background:#fff; border:2px solid #8b5cf6; border-radius:14px; padding:20px; transition:transform 0.3s; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 4px 12px rgba(0,0,0,0.03);" onmouseover="this.style.transform='translateY(-6px)'" onmouseout="this.style.transform='translateY(0)'">
            <div>
                <span style="background:#faf5ff; color:#8b5cf6; font-weight:800; font-size:0.7rem; padding:3px 10px; border-radius:12px; display:inline-block; margin-bottom:10px; text-transform:uppercase;">Art. 43</span>
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
                    <div style="width:34px; height:34px; background:#faf5ff; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-ban" style="color:#8b5cf6; font-size:0.85rem;"></i></div>
                    <h4 style="color:#0A2540; margin:0; font-weight:800; font-size:0.85rem;">Prohibiciones</h4>
                </div>
                <p style="color:#4b5563; font-size:0.75rem; line-height:1.4; margin:0;">Ningún docente permanente podrá tener simultáneamente contrato de tiempo completo en la Corporación y otro en el mismo sector económico.</p>
            </div>
            <div style="margin-top:14px; font-size:0.7rem; color:#8b5cf6; font-weight:bold;">
                <i class="fas fa-exclamation-circle"></i> Dedicación exclusiva.
            </div>
        </div>

        <!-- Conflicto de Intereses -->
        <div style="background:#fff; border:2px solid #ec4899; border-radius:14px; padding:20px; transition:transform 0.3s; display:flex; flex-direction:column; justify-content:space-between; box-shadow:0 4px 12px rgba(0,0,0,0.03);" onmouseover="this.style.transform='translateY(-6px)'" onmouseout="this.style.transform='translateY(0)'">
            <div>
                <span style="background:#fdf2f8; color:#ec4899; font-weight:800; font-size:0.7rem; padding:3px 10px; border-radius:12px; display:inline-block; margin-bottom:10px; text-transform:uppercase;">Art. 44</span>
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:10px;">
                    <div style="width:34px; height:34px; background:#fdf2f8; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0;"><i class="fas fa-handshake-slash" style="color:#ec4899; font-size:0.85rem;"></i></div>
                    <h4 style="color:#0A2540; margin:0; font-weight:800; font-size:0.85rem;">Conflicto Interés</h4>
                </div>
                <p style="color:#4b5563; font-size:0.75rem; line-height:1.4; margin:0;">Todo interés primario/secundario, familiar o colectivo que ponga en riesgo la integridad institucional o el buen nombre activará el proceso sancionatorio.</p>
            </div>
            <div style="margin-top:14px; font-size:0.7rem; color:#ec4899; font-weight:bold;">
                <i class="fas fa-balance-scale"></i> Proceso Sancionatorio.
            </div>
        </div>
    </div>

    <!-- Gobierno y Transparencia -->
    <div style="background:#eff6ff; border-left:4px solid #3b82f6; border-radius:8px; padding:18px;">
        <h5 style="color:#1e40af; margin:0 0 6px 0; font-weight:800; font-size:0.95rem;"><i class="fas fa-university" style="margin-right:8px;"></i>Código de Buen Gobierno</h5>
        <p style="color:#4b5563; font-size:0.85rem; margin:0; line-height:1.4;">Los reglamentos disciplinarios de la Corporación Escuela Tecnológica del Oriente garantizan la transparencia, autorregulación y apego a los más altos estándares éticos, en cumplimiento con el Reglamento Interno de Trabajo (RIT) administrado por la Dirección de Talento Humano.</p>
    </div>
</div>

<!-- ========== TAB 7: PRESENTACIÓN COMPLETA (SLIDES PPTX) ========== -->
<div id="c7Content_slides" class="c7-tab-content" style="display:none;">
    <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:12px; padding:20px; text-align:center;">
        <div style="margin-bottom:15px; display:flex; justify-content:space-between; align-items:center;">
            <button onclick="window.prevC7Slide()" style="background:#0A2540; color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:bold; font-size:1rem;"><i class="fas fa-arrow-left" style="margin-right:6px;"></i> Anterior</button>
            <span id="c7SlideCounter" style="font-weight:bold; color:#0A2540; font-size:1.2rem;">1 / 22</span>
            <button onclick="window.nextC7Slide()" style="background:#C8102E; color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:bold; font-size:1rem;">Siguiente <i class="fas fa-arrow-right" style="margin-left:6px;"></i></button>
        </div>
        <img id="c7SlideImg" src="assets/c7_slides/c7_slide_1_img_1.png" style="max-width:100%; border-radius:8px; border:2px solid #d1d5db; box-shadow:0 4px 12px rgba(0,0,0,0.15);" alt="Slide de Profesores">
        <div style="margin-top:10px; color:#6b7280; font-size:0.95rem; font-weight:bold;" id="c7SlideTitle">Portada - Condición 7: Profesores</div>
    </div>
</div>
`;

// ===================================================================
// INTERACTIVIDAD — TAB SWITCHING
// ===================================================================
window.switchC7Tab = function(tabId) {
    var tabs = ['estatuto','seleccion','proyeccion','cualificacion','bienestar','evaluacion','escalafon','estimulos','regimen','slides'];
    tabs.forEach(function(t) {
        var content = document.getElementById('c7Content_' + t);
        var btn = document.getElementById('c7Tab_' + t);
        if(content) content.style.display = (t === tabId) ? 'block' : 'none';
        if(btn) {
            btn.style.background = (t === tabId) ? '#0A2540' : 'transparent';
            btn.style.color = (t === tabId) ? 'white' : '#4b5563';
        }
    });
    // Initialize charts if needed
    if(tabId === 'proyeccion') setTimeout(function(){ window._initC7ProjectionChart(); }, 200);
    if(tabId === 'evaluacion') setTimeout(function(){ window._initC7SourcesChart(); }, 200);
};

// ===================================================================
// SLIDE NAVIGATION
// ===================================================================
window._c7SlideData = [
    {img:'assets/c7_slides/c7_slide_1_img_1.png', title:'Portada - Condición 7: Profesores'},
    {img:'assets/c7_slides/c7_slide_2_img_3.png', title:'Estatuto Docente - Pilares'},
    {img:'assets/c7_slides/c7_slide_4_img_6.png', title:'Proceso de Selección Docente'},
    {img:'assets/c7_slides/c7_slide_5_img_7.png', title:'Proceso de Vinculación - Tipos de Contrato'},
    {img:'assets/c7_slides/c7_slide_6_img_9.png', title:'Comité de Contratación'},
    {img:'assets/c7_slides/c7_slide_7_img_11.png', title:'Resultados Selección Docente'},
    {img:'assets/c7_slides/c7_slide_8_img_13.png', title:'Contratación Docente'},
    {img:'assets/c7_slides/c7_slide_8_img_14.png', title:'Desvinculación Docente - Paz y Salvo'},
    {img:'assets/c7_slides/c7_slide_9_img_16.png', title:'Proyección del Grupo Profesoral'},
    {img:'assets/c7_slides/c7_slide_10_img_18.png', title:'Distribución del Plan de Trabajo'},
    {img:'assets/c7_slides/c7_slide_11_img_20.png', title:'Cualificación Docente - Objetivos'},
    {img:'assets/c7_slides/c7_slide_12_img_22.png', title:'Componentes de Cualificación'},
    {img:'assets/c7_slides/c7_slide_13_img_24.png', title:'Evidencias de Cualificación 1'},
    {img:'assets/c7_slides/c7_slide_13_img_25.png', title:'Evidencias de Cualificación 2'},
    {img:'assets/c7_slides/c7_slide_13_img_26.png', title:'Evidencias de Cualificación 3'},
    {img:'assets/c7_slides/c7_slide_13_img_27.png', title:'Evidencias de Cualificación 4'},
    {img:'assets/c7_slides/c7_slide_13_img_29.png', title:'Evidencias de Cualificación 5'},
    {img:'assets/c7_slides/c7_slide_15_img_32.png', title:'Bienestar Docente'},
    {img:'assets/c7_slides/c7_slide_16_img_34.png', title:'Bienestar - Componentes'},
    {img:'assets/c7_slides/c7_slide_17_img_36.png', title:'Evaluación Docente - Características'},
    {img:'assets/c7_slides/c7_slide_18_img_38.png', title:'Propósito de la Evaluación'},
    {img:'assets/c7_slides/c7_slide_19_img_40.png', title:'Modelo de Evaluación Docente'},
    {img:'assets/c7_slides/c7_slide_20_img_42.png', title:'Clasificación de Desempeño Cuantitativo'},
    {img:'assets/c7_slides/c7_slide_21_img_44.png', title:'Clasificación del Plan de Mejoramiento'},
    {img:'assets/c7_slides/c7_slide_22_img_45.png', title:'¡Gracias!'}
];
window._c7Idx = 0;

window.nextC7Slide = function() {
    if(window._c7Idx < window._c7SlideData.length - 1) {
        window._c7Idx++;
        window._updateC7Slide();
    }
};
window.prevC7Slide = function() {
    if(window._c7Idx > 0) {
        window._c7Idx--;
        window._updateC7Slide();
    }
};
window._updateC7Slide = function() {
    var s = window._c7SlideData[window._c7Idx];
    var img = document.getElementById('c7SlideImg');
    var counter = document.getElementById('c7SlideCounter');
    var title = document.getElementById('c7SlideTitle');
    if(img) img.src = s.img;
    if(counter) counter.textContent = (window._c7Idx + 1) + ' / ' + window._c7SlideData.length;
    if(title) title.textContent = s.title;
};

// ===================================================================
// CHART.JS — Projection Chart
// ===================================================================
window._c7ProjectionChartInstance = null;
window._initC7ProjectionChart = function() {
    var canvas = document.getElementById('c7ProjectionChart');
    if(!canvas || typeof Chart === 'undefined') return;
    if(window._c7ProjectionChartInstance) { window._c7ProjectionChartInstance.destroy(); }
    var ctx = canvas.getContext('2d');
    window._c7ProjectionChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2026-1','2026-2','2027-1','2027-2','2028-1','2028-2','2029-1','2029-2','2030-1','2030-2','2031-1','2031-2','2032-1','2032-2'],
            datasets: [
                {
                    label: 'Estudiantes Proyectados',
                    data: [140,239,324,406,473,531,552,591,624,652,675,696,714,728],
                    borderColor: '#C8102E',
                    backgroundColor: 'rgba(200,16,46,0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: '#C8102E',
                    borderWidth: 3
                },
                {
                    label: 'Profesores Proyectados',
                    data: [6,10,13,14,14,15,16,17,18,19,20,21,22,23],
                    borderColor: '#0A2540',
                    backgroundColor: 'rgba(10,37,64,0.1)',
                    fill: true,
                    tension: 0.4,
                    pointRadius: 5,
                    pointBackgroundColor: '#0A2540',
                    borderWidth: 3,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', labels: { font: { family: 'Montserrat', weight: 'bold' }, usePointStyle: true } }
            },
            scales: {
                y: { title: { display: true, text: 'Estudiantes', font: { family: 'Montserrat', weight: 'bold' } }, beginAtZero: true },
                y1: { position: 'right', title: { display: true, text: 'Profesores', font: { family: 'Montserrat', weight: 'bold' } }, beginAtZero: true, grid: { drawOnChartArea: false } }
            }
        }
    });
};

// ===================================================================
// CHART.JS — Sources Donut Chart
// ===================================================================
window._c7SourcesChartInstance = null;
window._initC7SourcesChart = function() {
    var canvas = document.getElementById('c7SourcesChart');
    if(!canvas || typeof Chart === 'undefined') return;
    if(window._c7SourcesChartInstance) { window._c7SourcesChartInstance.destroy(); }
    var ctx = canvas.getContext('2d');
    window._c7SourcesChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Coordinador (20%)','Estudiante (60%)','Docente (20%)'],
            datasets: [{
                data: [20,60,20],
                backgroundColor: ['#C8102E','#10b981','#3b82f6'],
                borderWidth: 3,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '55%',
            plugins: {
                legend: { position: 'bottom', labels: { font: { family: 'Montserrat', weight: 'bold', size: 12 }, usePointStyle: true, padding: 16 } }
            }
        }
    });
};

// ===================================================================
// C7 INIT
// ===================================================================
window.c7Init = function() {
    window.switchC7Tab('estatuto');
};
