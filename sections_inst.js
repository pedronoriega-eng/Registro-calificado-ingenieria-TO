// ===================================================================
// SECCIÓN: PRESENTACIÓN INSTITUCIONAL — v2 MEJORADA
// Fuente: Presentación Institucional.pptx (23 slides)
// Con gráficos Chart.js, fotos reales de sedes, estadísticas
// ===================================================================
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS.inst = `
<div class="slide-header" style="border-bottom: 3px solid #C8102E; padding-bottom: 15px; margin-bottom: 25px;">
    <div style="display:flex; align-items:center; gap:15px; margin-bottom:10px;">
        <img src="https://campusvirtual.tecnologicadeloriente.edu.co/pluginfile.php/1/theme_edmo/mobile_logo/1772556380/logo%2Bvertical-1920w.jpg" alt="Logo TO" style="height:60px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.12);">
        <div>
            <div class="slide-subtitle" style="color:#C8102E; font-weight:bold; text-transform:uppercase; font-size:1rem; letter-spacing:2px;">Corporación Escuela Tecnológica del Oriente</div>
            <h1 style="color:#0A2540; font-size:2.2rem; margin:0; font-weight:800;">Presentación Institucional</h1>
        </div>
    </div>
    <p style="color:#6b7280; font-size:0.95rem; margin:0; font-style:italic;">"Establecer metas es el primer paso para transformar lo invisible en visible." — Tony Robbins</p>
</div>

<!-- ============ NAVEGACIÓN POR PESTAÑAS ============ -->
<div id="instTabBar" style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:25px; border-bottom:2px solid #e5e7eb; padding-bottom:12px;">
    <button class="inst-tab-btn active" onclick="window.switchInstTab('identidad')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#0A2540; color:white;"><i class="fas fa-university mr-1"></i> Identidad</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('pei')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-book mr-1"></i> PEI</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('evolucion')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-chart-line mr-1"></i> Evolución</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('convenios')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-handshake mr-1"></i> Convenios</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('oferta')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-graduation-cap mr-1"></i> Oferta</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('estudiantes')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-users mr-1"></i> Estudiantes</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('infra')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-building mr-1"></i> Infraestructura</button>
    <button class="inst-tab-btn" onclick="window.switchInstTab('retos')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-bullseye mr-1"></i> Retos</button>
</div>

<!-- ==================== TAB: IDENTIDAD ==================== -->
<div id="instTab_identidad" class="inst-tab-content" style="display:block;">
    <!-- Hero Banner -->
    <div style="position:relative; border-radius:16px; overflow:hidden; margin-bottom:25px; min-height:220px; background:linear-gradient(135deg, #0A2540 0%, #173A66 60%, #1e3a5f 100%);">
        <div style="position:absolute; top:0; right:0; width:45%; height:100%; opacity:0.15; background:url('assets/inst_slides/inst_slide_7_img_0.png') center/cover;"></div>
        <div style="position:relative; z-index:2; padding:35px 30px; color:white;">
            <div style="display:flex; align-items:center; gap:20px; margin-bottom:20px;">
                <img src="https://campusvirtual.tecnologicadeloriente.edu.co/pluginfile.php/1/theme_edmo/mobile_logo/1772556380/logo%2Bvertical-1920w.jpg" alt="Logo" style="height:80px; background:white; padding:8px; border-radius:10px; box-shadow:0 4px 15px rgba(0,0,0,0.3);">
                <div>
                    <h2 style="font-size:1.8rem; font-weight:800; margin:0; font-family:'Montserrat',sans-serif;">Tecnológica del Oriente</h2>
                    <p style="font-size:1rem; color:#cbd5e1; margin:5px 0 0;">Institución de Educación Superior · Bucaramanga, Santander</p>
                </div>
            </div>
            <p style="font-size:1.05rem; line-height:1.7; color:#ffffff; max-width:95%; text-align:justify; font-family:'Open Sans', sans-serif;">Institución de Educación Superior que contribuye al desarrollo integral de sus estudiantes, mediante un Modelo Pedagógico denominado <strong style="color:#fbbf24;">"Formación en Contextos de Aplicación"</strong> que incorpora la transferencia del conocimiento a la solución de los problemas reales del entorno.</p>
        </div>
    </div>

    <!-- Contadores animados -->
    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:15px; margin-bottom:25px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px; text-align:center; transition:transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(10,37,64,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='';">
            <div style="width:55px; height:55px; background:linear-gradient(135deg, #C8102E, #e53e3e); border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-school" style="color:white; font-size:1.3rem;"></i></div>
            <div style="font-size:2.5rem; font-weight:800; color:#0A2540; font-family:'Montserrat';">4</div>
            <div style="font-size:0.78rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Pregrado Presencial</div>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px; text-align:center; transition:transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(10,37,64,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='';">
            <div style="width:55px; height:55px; background:linear-gradient(135deg, #0A2540, #173A66); border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-laptop" style="color:white; font-size:1.3rem;"></i></div>
            <div style="font-size:2.5rem; font-weight:800; color:#0A2540; font-family:'Montserrat';">5</div>
            <div style="font-size:0.78rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Pregrado Virtual</div>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px; text-align:center; transition:transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(10,37,64,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='';">
            <div style="width:55px; height:55px; background:linear-gradient(135deg, #d97706, #f59e0b); border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-award" style="color:white; font-size:1.3rem;"></i></div>
            <div style="font-size:2.5rem; font-weight:800; color:#0A2540; font-family:'Montserrat';">3</div>
            <div style="font-size:0.78rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Posgrado Presencial</div>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px; text-align:center; transition:transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 8px 25px rgba(10,37,64,0.15)';" onmouseout="this.style.transform=''; this.style.boxShadow='';">
            <div style="width:55px; height:55px; background:linear-gradient(135deg, #7c3aed, #8b5cf6); border-radius:50%; margin:0 auto 10px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-wifi" style="color:white; font-size:1.3rem;"></i></div>
            <div style="font-size:2.5rem; font-weight:800; color:#0A2540; font-family:'Montserrat';">4</div>
            <div style="font-size:0.78rem; font-weight:700; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px;">Posgrado Virtual</div>
        </div>
    </div>

    <!-- Gráfico de programas -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px;">
        <h3 style="color:#0A2540; font-weight:700; font-size:1.2rem; margin-bottom:15px;"><i class="fas fa-chart-pie mr-2" style="color:#C8102E;"></i>Distribución de Oferta Académica</h3>
        <div style="max-width:400px; margin:0 auto;"><canvas id="instOfertaChart"></canvas></div>
    </div>
</div>

<!-- ==================== TAB: PEI ==================== -->
<div id="instTab_pei" class="inst-tab-content" style="display:none;">
    <div style="background:linear-gradient(135deg, #0A2540 0%, #173A66 100%); color:white; border-radius:16px; padding:30px; margin-bottom:25px;">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;">
            <div style="width:50px; height:50px; background:rgba(200,16,46,0.2); border:2px solid #C8102E; border-radius:50%; display:flex; align-items:center; justify-content:center;"><i class="fas fa-book-open" style="color:#C8102E; font-size:1.3rem;"></i></div>
            <div>
                <h3 style="font-weight:800; font-size:1.5rem; margin:0;">Proyecto Educativo Institucional</h3>
                <p style="color:#94a3b8; margin:0; font-size:0.9rem;">Modelo Pedagógico Constructivista</p>
            </div>
        </div>
        <div style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); border-radius:10px; padding:20px; margin-bottom:20px;">
            <p style="font-size:1.1rem; line-height:1.7; color:#e2e8f0; margin:0; text-align:center;">"<strong style="color:#fbbf24;">Formación en Contextos de Aplicación</strong>" — Transferencia del conocimiento a la solución de problemas reales del entorno, bajo principios humanísticos y de responsabilidad social y ambiental.</p>
        </div>
    </div>

    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:20px; margin-bottom:25px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform=''">
            <div style="width:60px; height:60px; background:linear-gradient(135deg, #fef2f2, #fff); border:2px solid #fecaca; border-radius:50%; margin:0 auto 15px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-eye" style="font-size:1.5rem; color:#C8102E;"></i></div>
            <h4 style="color:#0A2540; font-weight:700; font-size:1.15rem; margin-bottom:10px;">Visión</h4>
            <p style="color:#4b5563; font-size:0.9rem; line-height:1.6;">Ser referente nacional en formación integral de profesionales competentes con impacto social y ambiental.</p>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform=''">
            <div style="width:60px; height:60px; background:linear-gradient(135deg, #eff6ff, #fff); border:2px solid #bfdbfe; border-radius:50%; margin:0 auto 15px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-bullhorn" style="font-size:1.5rem; color:#0A2540;"></i></div>
            <h4 style="color:#0A2540; font-weight:700; font-size:1.15rem; margin-bottom:10px;">Misión</h4>
            <p style="color:#4b5563; font-size:0.9rem; line-height:1.6;">Contribuir al desarrollo integral mediante transferencia de conocimiento a problemas reales del entorno.</p>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform=''">
            <div style="width:60px; height:60px; background:linear-gradient(135deg, #f0fdf4, #fff); border:2px solid #bbf7d0; border-radius:50%; margin:0 auto 15px; display:flex; align-items:center; justify-content:center;"><i class="fas fa-hands-helping" style="font-size:1.5rem; color:#16a34a;"></i></div>
            <h4 style="color:#0A2540; font-weight:700; font-size:1.15rem; margin-bottom:10px;">Principios</h4>
            <p style="color:#4b5563; font-size:0.9rem; line-height:1.6;">Humanismo, responsabilidad social y ambiental, excelencia académica e innovación pedagógica.</p>
        </div>
    </div>

    <!-- Gráfico rueda interactiva PEI -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; display:grid; grid-template-columns:1.2fr 1fr; gap:20px; align-items:center;">
        <div>
            <h3 style="color:#0A2540; font-weight:700; font-size:1.2rem; margin-bottom:15px;"><i class="fas fa-puzzle-piece mr-2" style="color:#C8102E;"></i>Ejes del Modelo Pedagógico</h3>
            <div style="position:relative; width:100%; max-width:360px; margin:0 auto;">
                <svg viewBox="0 0 400 400" width="100%" height="100%" id="peiPuzzleWheel" style="overflow:visible;">
                    <defs>
                        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stop-color="#fff" />
                            <stop offset="100%" stop-color="#f8fafc" />
                        </radialGradient>
                    </defs>
                    <!-- 8 Sectors of the Puzzle -->
                    <!-- Sector 1: Excelencia Académica (top) -->
                    <path d="M 200 200 L 200 40 A 160 160 0 0 1 313.1 86.9 Z" fill="#e0e7ff" stroke="#4f46e5" stroke-width="1.5" class="pei-sector" style="cursor:pointer; transition:all 0.3s;" onclick="window.showPeiAxisDetail('excelencia', this)" onmouseover="this.style.fill='#c7d2fe'" onmouseout="this.style.fill='#e0e7ff'" />
                    <!-- Sector 2: Corporatividad -->
                    <path d="M 200 200 L 313.1 86.9 A 160 160 0 0 1 360 200 Z" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5" class="pei-sector" style="cursor:pointer; transition:all 0.3s;" onclick="window.showPeiAxisDetail('corporatividad', this)" onmouseover="this.style.fill='#bbf7d0'" onmouseout="this.style.fill='#dcfce7'" />
                    <!-- Sector 3: Flexibilidad Curricular -->
                    <path d="M 200 200 L 360 200 A 160 160 0 0 1 313.1 313.1 Z" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.5" class="pei-sector" style="cursor:pointer; transition:all 0.3s;" onclick="window.showPeiAxisDetail('flexibilidad', this)" onmouseover="this.style.fill='#fef08a'" onmouseout="this.style.fill='#fef9c3'" />
                    <!-- Sector 4: Formación Integral -->
                    <path d="M 200 200 L 313.1 313.1 A 160 160 0 0 1 200 360 Z" fill="#ffedd5" stroke="#ea580c" stroke-width="1.5" class="pei-sector" style="cursor:pointer; transition:all 0.3s;" onclick="window.showPeiAxisDetail('formacion', this)" onmouseover="this.style.fill='#fed7aa'" onmouseout="this.style.fill='#ffedd5'" />
                    <!-- Sector 5: Desarrollo Sostenible -->
                    <path d="M 200 200 L 200 360 A 160 160 0 0 1 86.9 313.1 Z" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" class="pei-sector" style="cursor:pointer; transition:all 0.3s;" onclick="window.showPeiAxisDetail('desarrollo', this)" onmouseover="this.style.fill='#fecaca'" onmouseout="this.style.fill='#fee2e2'" />
                    <!-- Sector 6: Coherencia y Coexistencia -->
                    <path d="M 200 200 L 86.9 313.1 A 160 160 0 0 1 40 200 Z" fill="#f5f3ff" stroke="#7c3aed" stroke-width="1.5" class="pei-sector" style="cursor:pointer; transition:all 0.3s;" onclick="window.showPeiAxisDetail('coherencia', this)" onmouseover="this.style.fill='#ddd6fe'" onmouseout="this.style.fill='#f5f3ff'" />
                    <!-- Sector 7: Pertinencia -->
                    <path d="M 200 200 L 40 200 A 160 160 0 0 1 86.9 86.9 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" class="pei-sector" style="cursor:pointer; transition:all 0.3s;" onclick="window.showPeiAxisDetail('pertinencia', this)" onmouseover="this.style.fill='#bae6fd'" onmouseout="this.style.fill='#e0f2fe'" />
                    <!-- Sector 8: Innovación -->
                    <path d="M 200 200 L 86.9 86.9 A 160 160 0 0 1 200 40 Z" fill="#fae8ff" stroke="#c084fc" stroke-width="1.5" class="pei-sector" style="cursor:pointer; transition:all 0.3s;" onclick="window.showPeiAxisDetail('innovacion', this)" onmouseover="this.style.fill='#f5d0fe'" onmouseout="this.style.fill='#fae8ff'" />

                    <!-- Central Circle -->
                    <circle cx="200" cy="200" r="72" fill="url(#centerGlow)" stroke="#0A2540" stroke-width="2.5" />
                    <circle cx="200" cy="200" r="58" fill="none" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="2,2" />

                    <!-- Central Icon and Text -->
                    <image href="https://campusvirtual.tecnologicadeloriente.edu.co/pluginfile.php/1/theme_edmo/mobile_logo/1772556380/logo%2Bvertical-1920w.jpg" x="165" y="150" height="50" width="70" />
                    <text x="200" y="215" fill="#0A2540" font-size="8.5" font-weight="800" text-anchor="middle">PEI</text>
                    <text x="200" y="225" fill="#FF6600" font-size="6.5" font-weight="700" text-anchor="middle">Click en Eje</text>

                    <!-- Labels on the sectors -->
                    <text x="222" y="78" fill="#4f46e5" font-size="7.5" font-weight="800">Excelencia</text>
                    <text x="282" y="142" fill="#16a34a" font-size="7.5" font-weight="800">Corporatividad</text>
                    <text x="278" y="252" fill="#ca8a04" font-size="7.5" font-weight="800">Flexibilidad</text>
                    <text x="215" y="312" fill="#ea580c" font-size="7.5" font-weight="800">F. Integral</text>
                    <text x="135" y="312" fill="#dc2626" font-size="7.5" font-weight="800">Sostenibilidad</text>
                    <text x="78" y="252" fill="#7c3aed" font-size="7.5" font-weight="800">Coherencia</text>
                    <text x="65" y="142" fill="#0284c7" font-size="7.5" font-weight="800">Pertinencia</text>
                    <text x="135" y="78" fill="#c084fc" font-size="7.5" font-weight="800">Innovación</text>
                </svg>
            </div>
        </div>
        
        <!-- Panel de Detalles -->
        <div id="peiAxisDetailPanel" style="background:#f8fafc; border:2px solid #e5e7eb; border-radius:12px; padding:20px; min-height:280px; display:flex; flex-direction:column; justify-content:center; border-left:5px solid #0A2540; transition: border-left-color 0.3s;">
            <div id="peiAxisDetailDefault">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.1rem; margin:0 0 10px 0;"><i class="fas fa-info-circle mr-2" style="color:#FF6600;"></i>Ejes del PEI</h4>
                <p style="color:#475569; font-size:0.85rem; line-height:1.5; margin:0;">Haga clic en cualquiera de las piezas del rompecabezas del modelo PEI para ver su descripción conceptual y cómo se articula con nuestro modelo educativo.</p>
            </div>
            <div id="peiAxisDetailActive" style="display:none;">
                <h4 id="peiAxisActiveTitle" style="color:#0A2540; font-weight:800; font-size:1.1rem; margin:0 0 8px 0; text-transform:uppercase;">Eje Seleccionado</h4>
                <p id="peiAxisActiveDesc" style="color:#475569; font-size:0.85rem; line-height:1.5; margin:0; font-style:italic;">Descripción...</p>
            </div>
        </div>
    </div>

    <div class="evidence-box" style="background:#f0fdf4; color:#166534; border-left:5px solid #16a34a; padding:15px; font-weight:bold; font-size:1rem; border-radius:4px; margin-top:20px;">
        <i class="fas fa-folder-open mr-2"></i> Anexo 5: Proyecto Educativo Institucional (PEI) · Anexo 6: Modelo Pedagógico
    </div>
</div>

<!-- ==================== TAB: EVOLUCIÓN ==================== -->
<div id="instTab_evolucion" class="inst-tab-content" style="display:none;">
    <!-- Imagen de la línea temporal del PPTX -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; margin-bottom:25px; text-align:center;">
        <h3 style="color:#0A2540; font-weight:800; font-size:1.5rem; margin-bottom:5px;"><i class="fas fa-history mr-2" style="color:#C8102E;"></i>Evolución Institucional (1992 – 2024)</h3>
        <p style="color:#6b7280; margin-bottom:15px; font-size:0.95rem;">Más de 30 años de trayectoria en educación superior</p>
        <img src="assets/evolucion_timeline.png" alt="Línea de Tiempo Institucional" style="max-width:100%; border-radius:10px; border:1px solid #e5e7eb; box-shadow:0 4px 15px rgba(0,0,0,0.08);">
    </div>

    <!-- Timeline interactivo -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px;">
        <h3 style="color:#0A2540; font-weight:700; font-size:1.3rem; margin-bottom:20px;">Hitos Clave</h3>
        <div class="timeline" style="border-left:4px solid #C8102E; padding-left:25px; margin-left:15px;">
            <div style="position:relative; margin-bottom:20px; background:linear-gradient(135deg, #eff6ff, #fff); padding:18px; border-radius:10px; border:1px solid #bfdbfe; cursor:pointer; transition:transform 0.2s;" onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform=''">
                <div style="position:absolute; left:-37px; top:18px; width:14px; height:14px; border-radius:50%; background:#C8102E; border:3px solid white; box-shadow:0 0 0 2px #C8102E;"></div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <span style="background:#C8102E; color:white; font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:4px;">1992</span>
                        <h4 style="color:#0A2540; font-weight:700; font-size:1.1rem; margin:8px 0 4px;">Fundación Institucional</h4>
                        <p style="color:#4b5563; font-size:0.9rem; margin:0;">Creación de Estatutos Generales y constitución de la Asamblea de Corporados.</p>
                    </div>
                    <i class="fas fa-landmark" style="font-size:1.5rem; color:#C8102E; opacity:0.5;"></i>
                </div>
            </div>
            <div style="position:relative; margin-bottom:20px; background:linear-gradient(135deg, #f0fdf4, #fff); padding:18px; border-radius:10px; border:1px solid #bbf7d0; cursor:pointer; transition:transform 0.2s;" onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform=''">
                <div style="position:absolute; left:-37px; top:18px; width:14px; height:14px; border-radius:50%; background:#16a34a; border:3px solid white; box-shadow:0 0 0 2px #16a34a;"></div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <span style="background:#16a34a; color:white; font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:4px;">2004-2009</span>
                        <h4 style="color:#0A2540; font-weight:700; font-size:1.1rem; margin:8px 0 4px;">Impacto Social</h4>
                        <p style="color:#4b5563; font-size:0.9rem; margin:0;">Lidera el programa Nacional de Erradicación del Analfabetismo. Actualización del PEI.</p>
                    </div>
                    <i class="fas fa-heart" style="font-size:1.5rem; color:#16a34a; opacity:0.5;"></i>
                </div>
            </div>
            <div style="position:relative; margin-bottom:20px; background:linear-gradient(135deg, #fef3c7, #fff); padding:18px; border-radius:10px; border:1px solid #fde68a; cursor:pointer; transition:transform 0.2s;" onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform=''">
                <div style="position:absolute; left:-37px; top:18px; width:14px; height:14px; border-radius:50%; background:#d97706; border:3px solid white; box-shadow:0 0 0 2px #d97706;"></div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <span style="background:#d97706; color:white; font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:4px;">2012-2014</span>
                        <h4 style="color:#0A2540; font-weight:700; font-size:1.1rem; margin:8px 0 4px;">Transformación Institucional</h4>
                        <p style="color:#4b5563; font-size:0.9rem; margin:0;">Cambio de denominación a <strong>Corporación Escuela Tecnológica del Oriente</strong>. Fortalecimiento del modelo virtual e investigación.</p>
                    </div>
                    <i class="fas fa-sync-alt" style="font-size:1.5rem; color:#d97706; opacity:0.5;"></i>
                </div>
            </div>
            <div style="position:relative; margin-bottom:20px; background:linear-gradient(135deg, #f5f3ff, #fff); padding:18px; border-radius:10px; border:1px solid #ddd6fe; cursor:pointer; transition:transform 0.2s;" onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform=''">
                <div style="position:absolute; left:-37px; top:18px; width:14px; height:14px; border-radius:50%; background:#7c3aed; border:3px solid white; box-shadow:0 0 0 2px #7c3aed;"></div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <span style="background:#7c3aed; color:white; font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:4px;">2021-2022</span>
                        <h4 style="color:#0A2540; font-weight:700; font-size:1.1rem; margin:8px 0 4px;">Expansión de Posgrados</h4>
                        <p style="color:#4b5563; font-size:0.9rem; margin:0;">Especialización en Pedagogía y Didácticas Específicas (EGIRSST - EGP). Fortalecimiento de nuevos programas.</p>
                    </div>
                    <i class="fas fa-rocket" style="font-size:1.5rem; color:#7c3aed; opacity:0.5;"></i>
                </div>
            </div>
            <div style="position:relative; background:linear-gradient(135deg, #0A2540, #173A66); padding:18px; border-radius:10px; color:white; cursor:pointer; transition:transform 0.2s;" onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform=''">
                <div style="position:absolute; left:-37px; top:18px; width:14px; height:14px; border-radius:50%; background:#fbbf24; border:3px solid white; box-shadow:0 0 0 2px #fbbf24;"></div>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <span style="background:#fbbf24; color:#0A2540; font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:4px;">2023-2024</span>
                        <h4 style="font-weight:700; font-size:1.1rem; margin:8px 0 4px;">Renovación RC · Concepto Favorable</h4>
                        <p style="color:#cbd5e1; font-size:0.9rem; margin:0;">Renovación de Registro Calificado LEI. Visita de condiciones institucionales exitosa. Acreditación en marcha.</p>
                    </div>
                    <i class="fas fa-trophy" style="font-size:1.5rem; color:#fbbf24; opacity:0.7;"></i>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ==================== TAB: CONVENIOS ==================== -->
<div id="instTab_convenios" class="inst-tab-content" style="display:none;">
    <!-- Hero Banner (Uniforme) -->
    <div style="position:relative; border-radius:16px; overflow:hidden; margin-bottom:25px; min-height:220px; background:linear-gradient(135deg, #0A2540 0%, #173A66 60%, #1e3a5f 100%);">
        <div style="position:absolute; top:0; right:0; width:45%; height:100%; opacity:0.15; background:url('assets/inst_slides/inst_slide_7_img_0.png') center/cover;"></div>
        <div style="position:relative; z-index:2; padding:35px 30px; color:white;">
            <div style="display:flex; align-items:center; gap:20px; margin-bottom:20px;">
                <img src="https://campusvirtual.tecnologicadeloriente.edu.co/pluginfile.php/1/theme_edmo/mobile_logo/1772556380/logo%2Bvertical-1920w.jpg" alt="Logo" style="height:80px; background:white; padding:8px; border-radius:10px; box-shadow:0 4px 15px rgba(0,0,0,0.3);">
                <div>
                    <h2 style="font-size:1.8rem; font-weight:800; margin:0; font-family:'Montserrat',sans-serif;">Tecnológica del Oriente</h2>
                    <p style="font-size:1rem; color:#cbd5e1; margin:5px 0 0;">Institución de Educación Superior · Bucaramanga, Santander</p>
                </div>
            </div>
            <p style="font-size:1.05rem; line-height:1.7; color:#ffffff; max-width:95%; text-align:justify; font-family:'Open Sans', sans-serif;">Institución de Educación Superior que contribuye al desarrollo integral de sus estudiantes, mediante un Modelo Pedagógico denominado <strong style="color:#fbbf24;">"Formación en Contextos de Aplicación"</strong> que incorpora la transferencia del conocimiento a la solución de los problemas reales del entorno.</p>
        </div>
    </div>

    <!-- Mapa de convenios -->
    <div style="display:grid; grid-template-columns:1fr; gap:20px; margin-bottom:25px;">
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:15px;">
            <div style="background:linear-gradient(135deg, #0A2540, #173A66); color:white; border-radius:12px; padding:20px; text-align:center;">
                <div style="font-size:2.5rem; font-weight:800; font-family:'Montserrat'; color:#fbbf24;">más de 4</div>
                <div style="font-size:0.85rem; font-weight:600; color:#94a3b8;">Convenios Internacionales</div>
                <div style="font-size:0.75rem; color:#64748b; margin-top:5px;">México · España · Ecuador · Panamá</div>
            </div>
            <div style="background:white; border:2px solid #C8102E; border-radius:12px; padding:20px; text-align:center;">
                <div style="font-size:2.5rem; font-weight:800; font-family:'Montserrat'; color:#C8102E;">más de 25</div>
                <div style="font-size:0.85rem; font-weight:600; color:#6b7280;">Convenios Académicos</div>
                <div style="font-size:0.75rem; color:#9ca3af; margin-top:5px;">Universidades y centros de formación</div>
            </div>
            <div style="background:white; border:2px solid #0A2540; border-radius:12px; padding:20px; text-align:center;">
                <div style="font-size:2.5rem; font-weight:800; font-family:'Montserrat'; color:#0A2540;">más de 100</div>
                <div style="font-size:0.85rem; font-weight:600; color:#6b7280;">Sector Público y Privado</div>
                <div style="font-size:0.75rem; color:#9ca3af; margin-top:5px;">Gobernaciones, alcaldías, empresas</div>
            </div>
        </div>
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:22px;">
            <h4 style="color:#0A2540; font-weight:700; font-size:1.15rem; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:8px;"><i class="fas fa-globe mr-2" style="color:#C8102E;"></i>Internacionales</h4>
            <div style="display:grid; gap:8px;">
                <div style="display:flex; align-items:center; gap:10px; background:#f9fafb; padding:10px 15px; border-radius:8px; border-left:3px solid #3b82f6;"><span style="font-size:1.2rem;">🇲🇽</span><div><div style="font-weight:700; color:#0A2540; font-size:0.9rem;">UNADE de México</div></div></div>
                <div style="display:flex; align-items:center; gap:10px; background:#f9fafb; padding:10px 15px; border-radius:8px; border-left:3px solid #C8102E;"><span style="font-size:1.2rem;">🇪🇸</span><div><div style="font-weight:700; color:#0A2540; font-size:0.9rem;">Universidad de Granada</div></div></div>
                <div style="display:flex; align-items:center; gap:10px; background:#f9fafb; padding:10px 15px; border-radius:8px; border-left:3px solid #fbbf24;"><span style="font-size:1.2rem;">🇪🇨</span><div><div style="font-weight:700; color:#0A2540; font-size:0.9rem;">Universidad de Cuenca</div></div></div>
                <div style="display:flex; align-items:center; gap:10px; background:#f9fafb; padding:10px 15px; border-radius:8px; border-left:3px solid #16a34a;"><span style="font-size:1.2rem;">🇵🇦</span><div><div style="font-weight:700; color:#0A2540; font-size:0.9rem;">UMECIT</div></div></div>
            </div>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:22px;">
            <h4 style="color:#0A2540; font-weight:700; font-size:1.15rem; margin-bottom:15px; border-bottom:2px solid #0A2540; padding-bottom:8px;"><i class="fas fa-handshake mr-2" style="color:#0A2540;"></i>Nacionales Destacados</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🏛️ Gobernación de Santander</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">👮 Policía Nacional</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🎓 SENA</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🏢 Fenalco Santander</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🏥 Positiva ARL</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🏫 Cajasan</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">🎓 U. Católica de Colombia</div>
                <div style="background:#f9fafb; padding:10px; border-radius:6px; font-size:0.85rem; font-weight:600; color:#374151; text-align:center; border:1px solid #e5e7eb;">📜 Asonal Judicial</div>
            </div>
        </div>
    </div>

    <!-- Gráfico de convenios -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; margin-top:20px;">
        <h3 style="color:#0A2540; font-weight:700; font-size:1.2rem; margin-bottom:15px;"><i class="fas fa-chart-bar mr-2" style="color:#C8102E;"></i>Distribución de Convenios por Tipo</h3>
        <div style="max-width:500px; margin:0 auto;"><canvas id="instConveniosChart"></canvas></div>
    </div>
</div>

<!-- ==================== TAB: OFERTA ==================== -->
<div id="instTab_oferta" class="inst-tab-content" style="display:none;">
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:30px; margin-bottom:25px;">
        <h3 style="color:#0A2540; font-weight:800; font-size:1.5rem; margin-bottom:20px;"><i class="fas fa-graduation-cap mr-2" style="color:#C8102E;"></i>Oferta Académica Vigente</h3>
        
        <!-- Pregrado Presencial -->
        <h4 style="color:#0A2540; font-weight:700; font-size:1.15rem; margin-bottom:12px; padding-bottom:8px; border-bottom:2px solid #e5e7eb;"><i class="fas fa-school mr-2" style="color:#C8102E;"></i>Pregrado Presencial<span style="float:right; font-size:0.78rem; color:#6b7280; font-weight:400;">📍 Calle 41 · 10-30, Bucaramanga</span></h4>
        <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:12px; margin-bottom:25px;">
            <div style="background:#fef2f2; border-left:4px solid #C8102E; border-radius:8px; padding:15px; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform=''">
                <div style="font-weight:700; color:#0A2540; font-size:0.95rem;">🏭 Téc. Prof. en Higiene y Seguridad en el Trabajo</div>
                <div style="font-size:0.82rem; color:#6b7280; margin-top:4px;">4 Sem · SNIES: 103527 · 62 Cr.</div>
                <span style="display:inline-block; background:#C8102E; color:white; font-size:0.65rem; font-weight:700; padding:2px 8px; border-radius:4px; margin-top:5px;">🔥 ALTA DEMANDA</span>
            </div>
            <div style="background:#eff6ff; border-left:4px solid #0A2540; border-radius:8px; padding:15px; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform=''">
                <div style="font-weight:700; color:#0A2540; font-size:0.95rem;">💼 Administración de Empresas</div>
                <div style="font-size:0.82rem; color:#6b7280; margin-top:4px;">9 Sem · SNIES: 108445 · 145 Cr.</div>
                <span style="display:inline-block; background:#0A2540; color:white; font-size:0.65rem; font-weight:700; padding:2px 8px; border-radius:4px; margin-top:5px;">👑 PREMIUM</span>
            </div>
            <div style="background:#f0fdf4; border-left:4px solid #16a34a; border-radius:8px; padding:15px; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform=''">
                <div style="font-weight:700; color:#0A2540; font-size:0.95rem;">👶 Licenciatura en Educación Infantil</div>
                <div style="font-size:0.82rem; color:#6b7280; margin-top:4px;">9 Sem · SNIES: 116357 · 158 Cr.</div>
                <span style="display:inline-block; background:#16a34a; color:white; font-size:0.65rem; font-weight:700; padding:2px 8px; border-radius:4px; margin-top:5px;">💝 VOCACIÓN</span>
            </div>
            <div style="background:#fef3c7; border-left:4px solid #d97706; border-radius:8px; padding:15px; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform=''">
                <div style="font-weight:700; color:#0A2540; font-size:0.95rem;">🛡️ Seguridad y Salud en el Trabajo</div>
                <div style="font-size:0.82rem; color:#6b7280; margin-top:4px;">9 Sem · SNIES: 106177 · 155 Cr.</div>
                <span style="display:inline-block; background:#d97706; color:white; font-size:0.65rem; font-weight:700; padding:2px 8px; border-radius:4px; margin-top:5px;">💼 LIDERAZGO</span>
            </div>
        </div>

        <!-- Pregrado Virtual -->
        <h4 style="color:#0A2540; font-weight:700; font-size:1.15rem; margin-bottom:12px; padding-bottom:8px; border-bottom:2px solid #e5e7eb;"><i class="fas fa-laptop mr-2" style="color:#C8102E;"></i>Pregrado Virtual<span style="float:right; font-size:0.78rem; color:#6b7280; font-weight:400;">🌐 Cobertura Nacional</span></h4>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px; margin-bottom:25px;">
            <div style="background:#f9fafb; border:2px solid #3b82f6; border-radius:8px; padding:15px; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform=''">
                <div style="font-weight:700; color:#0A2540; font-size:0.9rem;">💼 Administración de Empresas</div>
                <div style="font-size:0.78rem; color:#6b7280; margin-top:4px;">9 Sem · SNIES 108445 · 145 Cr.</div>
                <span style="display:inline-block; background:#3b82f6; color:white; font-size:0.6rem; font-weight:700; padding:2px 6px; border-radius:3px; margin-top:5px;">VIRTUAL</span>
            </div>
            <div style="background:#f9fafb; border:2px solid #3b82f6; border-radius:8px; padding:15px; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform=''">
                <div style="font-weight:700; color:#0A2540; font-size:0.9rem;">👶 Lic. Educación Infantil</div>
                <div style="font-size:0.78rem; color:#6b7280; margin-top:4px;">9 Sem · SNIES 116357 · 158 Cr.</div>
                <span style="display:inline-block; background:#3b82f6; color:white; font-size:0.6rem; font-weight:700; padding:2px 6px; border-radius:3px; margin-top:5px;">VIRTUAL</span>
            </div>
            <div style="background:#f9fafb; border:2px solid #C8102E; border-radius:8px; padding:15px; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform=''">
                <div style="font-weight:700; color:#0A2540; font-size:0.9rem;">💻 Ingeniería de Software</div>
                <div style="font-size:0.78rem; color:#6b7280; margin-top:4px;">8 Sem · SNIES 118074 · 144 Cr.</div>
                <span style="display:inline-block; background:#C8102E; color:white; font-size:0.6rem; font-weight:700; padding:2px 6px; border-radius:3px; margin-top:5px;">VIRTUAL</span>
            </div>
            <div style="background:#f9fafb; border:2px solid #16a34a; border-radius:8px; padding:15px; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform=''">
                <div style="font-weight:700; color:#0A2540; font-size:0.9rem;">🛡️ Seguridad y Salud en el Trabajo</div>
                <div style="font-size:0.78rem; color:#6b7280; margin-top:4px;">9 Sem · SNIES 106177 · 155 Cr.</div>
                <span style="display:inline-block; background:#16a34a; color:white; font-size:0.6rem; font-weight:700; padding:2px 6px; border-radius:3px; margin-top:5px;">VIRTUAL</span>
            </div>
            <div style="background:#f9fafb; border:2px solid #7c3aed; border-radius:8px; padding:15px; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform=''">
                <div style="font-weight:700; color:#0A2540; font-size:0.9rem;">⚖️ Derecho</div>
                <div style="font-size:0.78rem; color:#6b7280; margin-top:4px;">9 Sem · SNIES 111068 · 159 Cr.</div>
                <span style="display:inline-block; background:#7c3aed; color:white; font-size:0.6rem; font-weight:700; padding:2px 6px; border-radius:3px; margin-top:5px;">VIRTUAL</span>
            </div>
        </div>

        <!-- Posgrados -->
        <h4 style="color:#0A2540; font-weight:700; font-size:1.15rem; margin-bottom:12px; padding-bottom:8px; border-bottom:2px solid #e5e7eb;"><i class="fas fa-award mr-2" style="color:#C8102E;"></i>Posgrados</h4>
        <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:12px; margin-bottom:25px;">
            <div>
                <div style="color:#6b7280; font-weight:700; font-size:0.8rem; text-transform:uppercase; margin-bottom:8px;">Presenciales · Sábados</div>
                <div style="display:grid; gap:8px;">
                    <div style="background:#0A2540; color:white; border-radius:8px; padding:12px; border-bottom:3px solid #C8102E;"><div style="font-weight:700; font-size:0.88rem;">Esp. Gerencia Integral del Riesgo, SST</div><div style="font-size:0.75rem; color:#94a3b8;">3 Cuatr. · SNIES: 110536 · 30 Cr.</div></div>
                    <div style="background:#0A2540; color:white; border-radius:8px; padding:12px; border-bottom:3px solid #C8102E;"><div style="font-weight:700; font-size:0.88rem;">Esp. Gerencia de Proyectos</div><div style="font-size:0.75rem; color:#94a3b8;">2 Sem. · SNIES: 103745 · 28 Cr.</div></div>
                    <div style="background:#0A2540; color:white; border-radius:8px; padding:12px; border-bottom:3px solid #C8102E;"><div style="font-weight:700; font-size:0.88rem;">Esp. Pedagogía y Didácticas Específicas</div><div style="font-size:0.75rem; color:#94a3b8;">4 Sem. · SNIES: 101639 · 35 Cr.</div></div>
                </div>
            </div>
            <div>
                <div style="color:#6b7280; font-weight:700; font-size:0.8rem; text-transform:uppercase; margin-bottom:8px;">Virtuales · Cobertura Nacional</div>
                <div style="display:grid; gap:8px;">
                    <div style="background:#173A66; color:white; border-radius:8px; padding:12px; border-bottom:3px solid #3b82f6;"><div style="font-weight:700; font-size:0.88rem;">Esp. Gerencia de la Seguridad y Salud en el Trabajo</div><div style="font-size:0.75rem; color:#cbd5e1;">2 Sem · SNIES 111195 · 24 Cr.</div><span style="display:inline-block; background:#3b82f6; color:white; font-size:0.6rem; font-weight:700; padding:2px 6px; border-radius:3px; margin-top:4px;">VIRTUAL</span></div>
                    <div style="background:#173A66; color:white; border-radius:8px; padding:12px; border-bottom:3px solid #3b82f6;"><div style="font-weight:700; font-size:0.88rem;">Esp. Inteligencia de Negocios y Analítica</div><div style="font-size:0.75rem; color:#cbd5e1;">2 Sem · SNIES 111246 · 24 Cr.</div><span style="display:inline-block; background:#3b82f6; color:white; font-size:0.6rem; font-weight:700; padding:2px 6px; border-radius:3px; margin-top:4px;">VIRTUAL</span></div>
                    <div style="background:#173A66; color:white; border-radius:8px; padding:12px; border-bottom:3px solid #3b82f6;"><div style="font-weight:700; font-size:0.88rem;">Esp. Gerencia de Proyectos</div><div style="font-size:0.75rem; color:#cbd5e1;">2 Sem · SNIES 103745 · 28 Cr.</div><span style="display:inline-block; background:#3b82f6; color:white; font-size:0.6rem; font-weight:700; padding:2px 6px; border-radius:3px; margin-top:4px;">VIRTUAL</span></div>
                    <div style="background:#173A66; color:white; border-radius:8px; padding:12px; border-bottom:3px solid #3b82f6;"><div style="font-weight:700; font-size:0.88rem;">Esp. Pedagogía y Didácticas Específicas</div><div style="font-size:0.75rem; color:#cbd5e1;">4 Sem · SNIES 101639 · 35 Cr.</div><span style="display:inline-block; background:#3b82f6; color:white; font-size:0.6rem; font-weight:700; padding:2px 6px; border-radius:3px; margin-top:4px;">VIRTUAL</span></div>
                </div>
            </div>
        </div>

        <!-- Próximamente -->
        <div style="background:linear-gradient(135deg, #fef3c7, #fffbeb); border:2px dashed #d97706; border-radius:10px; padding:18px;">
            <h4 style="color:#92400e; font-weight:700; font-size:1rem; margin-bottom:10px;"><i class="fas fa-rocket mr-2"></i>Próximamente</h4>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">
                <span style="background:white; border:1px solid #d97706; border-radius:5px; padding:4px 10px; font-size:0.82rem; font-weight:600; color:#C8102E;">🏭 Ingeniería Industrial</span>
                <span style="background:white; border:1px solid #d97706; border-radius:5px; padding:4px 10px; font-size:0.82rem; font-weight:600; color:#374151;">📱 Marketing Digital</span>
                <span style="background:white; border:1px solid #d97706; border-radius:5px; padding:4px 10px; font-size:0.82rem; font-weight:600; color:#374151;">🎓 Esp. Psicopedagogía</span>
                <span style="background:white; border:1px solid #d97706; border-radius:5px; padding:4px 10px; font-size:0.82rem; font-weight:600; color:#374151;">📚 Maestría en Educación</span>
            </div>
        </div>
    </div>
</div>

<!-- ==================== TAB: ESTUDIANTES ==================== -->
<div id="instTab_estudiantes" class="inst-tab-content" style="display:none;">
    <!-- Banner con imagen de estudiantes -->
    <div style="position:relative; border-radius:16px; overflow:hidden; margin-bottom:25px; height:200px;">
        <img src="assets/inst_slides/inst_slide_7_img_0.png" alt="Estudiantes" style="width:100%; height:100%; object-fit:cover; filter:brightness(0.4);">
        <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; flex-direction:column; color:white; text-align:center; padding:20px;">
            <h3 style="font-size:2rem; font-weight:800; margin-bottom:5px; font-family:'Montserrat';">Nuestros Estudiantes</h3>
            <p style="font-size:1.1rem; color:#e2e8f0;">Comunidad estudiantil de la Tecnológica del Oriente</p>
        </div>
    </div>

    <!-- Estadísticas de estudiantes -->
    <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:15px; margin-bottom:25px;">
        <div style="background:linear-gradient(135deg, #C8102E, #e53e3e); color:white; border-radius:12px; padding:20px; text-align:center;">
            <i class="fas fa-user-graduate" style="font-size:1.8rem; margin-bottom:8px; opacity:0.8;"></i>
            <div style="font-size:2rem; font-weight:800; font-family:'Montserrat';">16</div>
            <div style="font-size:0.75rem; font-weight:600; color:rgba(255,255,255,0.8); text-transform:uppercase;">Programas Activos</div>
        </div>
        <div style="background:linear-gradient(135deg, #0A2540, #173A66); color:white; border-radius:12px; padding:20px; text-align:center;">
            <i class="fas fa-laptop-code" style="font-size:1.8rem; margin-bottom:8px; opacity:0.8;"></i>
            <div style="font-size:2rem; font-weight:800; font-family:'Montserrat';">9</div>
            <div style="font-size:0.75rem; font-weight:600; color:rgba(255,255,255,0.8); text-transform:uppercase;">Programas Virtuales</div>
        </div>
        <div style="background:linear-gradient(135deg, #16a34a, #22c55e); color:white; border-radius:12px; padding:20px; text-align:center;">
            <i class="fas fa-map-marker-alt" style="font-size:1.8rem; margin-bottom:8px; opacity:0.8;"></i>
            <div style="font-size:2rem; font-weight:800; font-family:'Montserrat';">3</div>
            <div style="font-size:0.75rem; font-weight:600; color:rgba(255,255,255,0.8); text-transform:uppercase;">Sedes Físicas</div>
        </div>
        <div style="background:linear-gradient(135deg, #7c3aed, #8b5cf6); color:white; border-radius:12px; padding:20px; text-align:center;">
            <i class="fas fa-globe-americas" style="font-size:1.8rem; margin-bottom:8px; opacity:0.8;"></i>
            <div style="font-size:2rem; font-weight:800; font-family:'Montserrat';">Nacional</div>
            <div style="font-size:0.75rem; font-weight:600; color:rgba(255,255,255,0.8); text-transform:uppercase;">Cobertura</div>
        </div>
    </div>

    <!-- Gráficos de caracterización -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px;">
            <h4 style="color:#0A2540; font-weight:700; font-size:1.1rem; margin-bottom:15px;"><i class="fas fa-chart-pie mr-2" style="color:#C8102E;"></i>Distribución por Modalidad</h4>
            <canvas id="instEstModalidadChart"></canvas>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px;">
            <h4 style="color:#0A2540; font-weight:700; font-size:1.1rem; margin-bottom:15px;"><i class="fas fa-chart-bar mr-2" style="color:#0A2540;"></i>Matrícula por Nivel</h4>
            <canvas id="instEstNivelChart"></canvas>
        </div>
    </div>

    <!-- Características -->
    <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:15px; margin-top:20px;">
        <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:10px; padding:18px; text-align:center;">
            <i class="fas fa-users" style="font-size:2rem; color:#0A2540; margin-bottom:8px;"></i>
            <h4 style="color:#0A2540; font-weight:700; font-size:0.95rem; margin-bottom:5px;">Perfil Diverso</h4>
            <p style="color:#6b7280; font-size:0.82rem; line-height:1.5;">Estudiantes de diferentes departamentos, estratos socioeconómicos y edades.</p>
        </div>
        <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:10px; padding:18px; text-align:center;">
            <i class="fas fa-clock" style="font-size:2rem; color:#C8102E; margin-bottom:8px;"></i>
            <h4 style="color:#0A2540; font-weight:700; font-size:0.95rem; margin-bottom:5px;">Horarios Flexibles</h4>
            <p style="color:#6b7280; font-size:0.82rem; line-height:1.5;">Jornada mañana, nocturna y virtual para trabajadores y profesionales activos.</p>
        </div>
        <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:10px; padding:18px; text-align:center;">
            <i class="fas fa-hand-holding-heart" style="font-size:2rem; color:#16a34a; margin-bottom:8px;"></i>
            <h4 style="color:#0A2540; font-weight:700; font-size:0.95rem; margin-bottom:5px;">Bienestar Integral</h4>
            <p style="color:#6b7280; font-size:0.82rem; line-height:1.5;">Estrategias de permanencia, acompañamiento psicosocial y actividades de bienestar.</p>
        </div>
    </div>
</div>

<!-- ==================== TAB: INFRAESTRUCTURA ==================== -->
<div id="instTab_infra" class="inst-tab-content" style="display:none;">
    <!-- Foto oficial de las sedes -->
    <div style="border-radius:16px; overflow:hidden; margin-bottom:25px; border:2px solid #e5e7eb; box-shadow:0 4px 15px rgba(0,0,0,0.08);">
        <img src="assets/sedes_institucionales.png" alt="Sedes de la Tecnológica del Oriente" style="width:100%; display:block;">
    </div>



    <!-- Gráfico de área por sede -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:25px;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px;">
            <h4 style="color:#0A2540; font-weight:700; font-size:1.1rem; margin-bottom:15px;"><i class="fas fa-chart-bar mr-2" style="color:#C8102E;"></i>Área por Sede (m²)</h4>
            <canvas id="instAreaChart"></canvas>
        </div>
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px;">
            <h4 style="color:#0A2540; font-weight:700; font-size:1.1rem; margin-bottom:15px;"><i class="fas fa-chart-pie mr-2" style="color:#0A2540;"></i>Total Espacios Académicos</h4>
            <canvas id="instEspaciosChart"></canvas>
        </div>
    </div>

    <!-- Sedes recreativas -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; overflow:hidden;">
        <div style="background:#16a34a; color:white; padding:15px 20px;"><h4 style="margin:0; font-weight:700; font-size:1.15rem;"><i class="fas fa-tree mr-2"></i>Sedes Recreativas y Deportivas</h4></div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0;">
            <div style="padding:0;"><img src="assets/inst_slides/inst_slide_18_img_1.png" alt="Instalaciones deportivas" style="width:100%; height:200px; object-fit:cover;"></div>
            <div style="padding:0;"><img src="assets/inst_slides/inst_slide_18_img_2.jpg" alt="Cajasan Campo Alegre" style="width:100%; height:200px; object-fit:cover;"></div>
        </div>
        <div style="padding:15px; display:flex; gap:15px;">
            <div style="flex:1; background:#f9fafb; padding:12px; border-radius:8px; border-left:3px solid #16a34a;"><div style="font-weight:700; color:#0A2540; font-size:0.9rem;">Recrear la Victoria</div><div style="font-size:0.8rem; color:#6b7280;">Canchas, piscinas y zonas verdes</div></div>
            <div style="flex:1; background:#f9fafb; padding:12px; border-radius:8px; border-left:3px solid #16a34a;"><div style="font-weight:700; color:#0A2540; font-size:0.9rem;">Cajasan Campo Alegre</div><div style="font-size:0.8rem; color:#6b7280;">Bienestar institucional</div></div>
        </div>
    </div>
</div>

<!-- ==================== TAB: RETOS ==================== -->
<div id="instTab_retos" class="inst-tab-content" style="display:none;">
    <!-- Imagen de retos del PPTX -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px; margin-bottom:25px; text-align:center; display:flex; justify-content:center; align-items:center;">
        <img src="assets/inst_slides/inst_slide_19_img_1.png" alt="Retos Estratégicos" style="max-width:450px; width:100%; border-radius:10px; display:block; margin:0 auto;">
    </div>

    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:25px;">
        <!-- Retos 2025 -->
        <div style="background:linear-gradient(135deg, #0A2540 0%, #173A66 100%); color:white; border-radius:12px; padding:25px;">
            <h4 style="font-weight:700; font-size:1.25rem; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:10px;"><i class="fas fa-flag-checkered mr-2"></i>Retos 2025</h4>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px; border-left:3px solid #fbbf24; transition:background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">
                    <div style="font-weight:700; font-size:0.88rem; color:#fbbf24;">🌎 Presencia Nacional</div>
                    <div style="font-size:0.78rem; color:#cbd5e1;">11 programas nuevos</div>
                </div>
                <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px; border-left:3px solid #10b981;">
                    <div style="font-weight:700; font-size:0.88rem; color:#10b981;">🔬 Investigación</div>
                    <div style="font-size:0.78rem; color:#cbd5e1;">Grupo categoría B</div>
                </div>
                <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px; border-left:3px solid #3b82f6;">
                    <div style="font-weight:700; font-size:0.88rem; color:#3b82f6;">💙 Bienestar</div>
                    <div style="font-size:0.78rem; color:#cbd5e1;">Deserción 9%–11%</div>
                </div>
                <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px; border-left:3px solid #C8102E;">
                    <div style="font-weight:700; font-size:0.88rem; color:#f87171;">💰 Finanzas</div>
                    <div style="font-size:0.78rem; color:#cbd5e1;">EBITDA ≥ 15%</div>
                </div>
            </div>
        </div>

        <!-- Retos 2026 -->
        <div style="background:white; border:2px solid #C8102E; border-radius:12px; padding:25px;">
            <h4 style="color:#0A2540; font-weight:700; font-size:1.25rem; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:10px;"><i class="fas fa-chart-line mr-2" style="color:#C8102E;"></i>Retos 2026</h4>
            <div style="display:grid; gap:10px;">
                <div style="background:#f9fafb; border:1px solid #e5e7eb; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px; transition:background 0.2s;" onmouseover="this.style.background='#eff6ff'" onmouseout="this.style.background='#f9fafb'">
                    <i class="fas fa-medal" style="color:#d97706; font-size:1.1rem;"></i>
                    <div><div style="font-weight:700; color:#0A2540; font-size:0.88rem;">Acreditación: 2 programas</div><div style="font-size:0.78rem; color:#6b7280;">SST y LEI</div></div>
                </div>
                <div style="background:#f9fafb; border:1px solid #e5e7eb; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px; transition:background 0.2s;" onmouseover="this.style.background='#eff6ff'" onmouseout="this.style.background='#f9fafb'">
                    <i class="fas fa-shield-alt" style="color:#3b82f6; font-size:1.1rem;"></i>
                    <div><div style="font-weight:700; color:#0A2540; font-size:0.88rem;">SIAC</div><div style="font-size:0.78rem; color:#6b7280;">Mejoramiento &gt; 80%</div></div>
                </div>
                <div style="background:#f9fafb; border:1px solid #e5e7eb; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px; transition:background 0.2s;" onmouseover="this.style.background='#eff6ff'" onmouseout="this.style.background='#f9fafb'">
                    <i class="fas fa-server" style="color:#7c3aed; font-size:1.1rem;"></i>
                    <div><div style="font-weight:700; color:#0A2540; font-size:0.88rem;">Infraestructura</div><div style="font-size:0.78rem; color:#6b7280;">Ambientes físicos y virtuales</div></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Marco Estratégico 2026-2030 -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; overflow:hidden;">
        <div style="background:linear-gradient(135deg, #0A2540, #1e3a5f, #C8102E); color:white; padding:15px 20px; text-align:center;">
            <h4 style="font-weight:800; font-size:1.3rem; margin:0;"><i class="fas fa-compass mr-2"></i>Marco Estratégico 2026–2030 · 8 Pilares</h4>
        </div>
        <div style="padding:20px;">
            <img src="assets/inst_slides/inst_slide_21_img_1.png" alt="Marco Estratégico 2026-2030 - 8 Pilares" style="width:100%; border-radius:8px;">
        </div>
    </div>
</div>
`;

// =====================================================
// LÓGICA DE PESTAÑAS
// =====================================================
window.switchInstTab = function(tabId) {
    document.querySelectorAll('.inst-tab-content').forEach(function(el) {
        el.style.display = 'none';
    });
    document.querySelectorAll('.inst-tab-btn').forEach(function(btn) {
        btn.style.background = '#e5e7eb';
        btn.style.color = '#374151';
    });
    var tab = document.getElementById('instTab_' + tabId);
    if (tab) tab.style.display = 'block';
    var buttons = document.querySelectorAll('.inst-tab-btn');
    var tabNames = ['identidad','pei','evolucion','convenios','oferta','estudiantes','infra','retos'];
    var idx = tabNames.indexOf(tabId);
    if (idx >= 0 && buttons[idx]) {
        buttons[idx].style.background = '#0A2540';
        buttons[idx].style.color = 'white';
    }
    // Inicializar gráficos de la pestaña
    setTimeout(function() { window._initInstCharts(tabId); }, 200);
};

// =====================================================
// GRÁFICOS CHART.JS
// =====================================================
window._instCharts = {};

window._initInstCharts = function(tabId) {
    // Identidad - Oferta
    if (tabId === 'identidad') {
        var ctx = document.getElementById('instOfertaChart');
        if (ctx && !window._instCharts.oferta) {
            window._instCharts.oferta = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Pregrado Presencial', 'Pregrado Virtual', 'Posgrado Presencial', 'Posgrado Virtual'],
                    datasets: [{
                        data: [4, 5, 3, 4],
                        backgroundColor: ['#C8102E', '#0A2540', '#d97706', '#7c3aed'],
                        borderWidth: 3,
                        borderColor: '#fff'
                    }]
                },
                options: { responsive: true, cutout: '55%', plugins: { legend: { position: 'bottom', labels: { color: '#374151', font: { size: 12, weight: 'bold' }, padding: 15 } } } }
            });
        }
    }

    // PEI (Inicialización Rueda)
    if (tabId === 'pei') {
        setTimeout(function() {
            if (typeof window.showPeiAxisDetail === 'function') {
                window.showPeiAxisDetail('excelencia');
            }
        }, 100);
    }

    // Convenios
    if (tabId === 'convenios') {
        var ctx3 = document.getElementById('instConveniosChart');
        if (ctx3 && !window._instCharts.conv) {
            window._instCharts.conv = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: ['Internacionales', 'Académicos', 'Sector Público y Privado'],
                    datasets: [{
                        label: 'Convenios',
                        data: [4, 25, 100],
                        backgroundColor: ['#0A2540', '#C8102E', '#3b82f6'],
                        borderRadius: 8,
                        barThickness: 30
                    }]
                },
                options: { responsive: true, indexAxis: 'y', plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, grid: { color: '#e5e7eb' }, ticks: { color: '#374151' } }, y: { grid: { display: false }, ticks: { color: '#374151', font: { size: 11, weight: 'bold' } } } } }
            });
        }
    }

    // Estudiantes
    if (tabId === 'estudiantes') {
        var ctx4 = document.getElementById('instEstModalidadChart');
        if (ctx4 && !window._instCharts.estMod) {
            window._instCharts.estMod = new Chart(ctx4, {
                type: 'doughnut',
                data: {
                    labels: ['Presencial', 'Virtual'],
                    datasets: [{
                        data: [58, 42],
                        backgroundColor: ['#0A2540', '#C8102E'],
                        borderWidth: 3, borderColor: '#fff'
                    }]
                },
                options: { responsive: true, cutout: '60%', plugins: { legend: { position: 'bottom', labels: { color: '#374151', font: { size: 12, weight: 'bold' } } } } }
            });
        }
        var ctx5 = document.getElementById('instEstNivelChart');
        if (ctx5 && !window._instCharts.estNiv) {
            window._instCharts.estNiv = new Chart(ctx5, {
                type: 'bar',
                data: {
                    labels: ['Técnico', 'Profesional', 'Especialización'],
                    datasets: [{
                        label: 'Estudiantes (%)',
                        data: [15, 60, 25],
                        backgroundColor: ['#d97706', '#0A2540', '#C8102E'],
                        borderRadius: 8,
                        barThickness: 35
                    }]
                },
                options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, max: 70, grid: { color: '#e5e7eb' }, ticks: { color: '#374151', callback: function(v) { return v + '%'; } } }, x: { grid: { display: false }, ticks: { color: '#374151', font: { weight: 'bold' } } } } }
            });
        }
    }

    // Infraestructura
    if (tabId === 'infra') {
        var ctx6 = document.getElementById('instAreaChart');
        if (ctx6 && !window._instCharts.area) {
            window._instCharts.area = new Chart(ctx6, {
                type: 'bar',
                data: {
                    labels: ['Sede A', 'Sede B', 'Sede C'],
                    datasets: [{
                        label: 'Área (m²)',
                        data: [1140, 1527, 404],
                        backgroundColor: ['#C8102E', '#0A2540', '#d97706'],
                        borderRadius: 8,
                        barThickness: 45
                    }]
                },
                options: { responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: '#e5e7eb' }, ticks: { color: '#374151' } }, x: { grid: { display: false }, ticks: { color: '#374151', font: { weight: 'bold', size: 13 } } } } }
            });
        }
        var ctx7 = document.getElementById('instEspaciosChart');
        if (ctx7 && !window._instCharts.esp) {
            window._instCharts.esp = new Chart(ctx7, {
                type: 'doughnut',
                data: {
                    labels: ['Aulas (26)', 'Laboratorios (2)', 'Salas Inf. (3)', 'Of. Admin. (30)', 'Otros (8)'],
                    datasets: [{
                        data: [26, 2, 3, 30, 8],
                        backgroundColor: ['#0A2540', '#C8102E', '#3b82f6', '#d97706', '#16a34a'],
                        borderWidth: 2, borderColor: '#fff'
                    }]
                },
                options: { responsive: true, cutout: '50%', plugins: { legend: { position: 'bottom', labels: { color: '#374151', font: { size: 10, weight: 'bold' }, padding: 8 } } } }
            });
        }
    }
};

// =====================================================
// DETALLE EJE PEI INTERACTIVO
// =====================================================
window.showPeiAxisDetail = function(axisId, pathEl) {
    document.querySelectorAll('.pei-sector').forEach(el => {
        el.style.opacity = '0.7';
        el.style.strokeWidth = '1.5';
    });

    const axisData = {
        excelencia: {
            title: "Excelencia Académica",
            desc: "Compromiso institucional constante con la calidad educativa, procesos de autoevaluación, mejoramiento de mallas curriculares y cualificación de primer nivel para la planta docente.",
            color: "#4f46e5"
        },
        corporatividad: {
            title: "Corporatividad",
            desc: "Articulación institucional, identidad corporativa y sentido de pertenencia. Promueve el trabajo en equipo interdisciplinar alineado a metas colectivas y de responsabilidad social.",
            color: "#16a34a"
        },
        flexibilidad: {
            title: "Flexibilidad Curricular",
            desc: "Rutas de aprendizaje adaptables y personalizadas, opciones de doble titulación, homologación ágil y múltiples alternativas de trabajo de grado acordes con el perfil profesional.",
            color: "#ca8a04"
        },
        formacion: {
            title: "Formación Integral",
            desc: "Equilibrio formativo entre el ser, el saber y el hacer. Integramos competencias técnicas de ingeniería con un fuerte sentido ético, humanístico e integral de la persona.",
            color: "#ea580c"
        },
        desarrollo: {
            title: "Desarrollo Sostenible",
            desc: "Promoción de prácticas ambientales responsables, economía circular y uso eficiente de los recursos en la cadena de suministros para un desarrollo socialmente responsable.",
            color: "#dc2626"
        },
        coherencia: {
            title: "Coherencia y Coexistencia",
            desc: "Garantía de sintonía absoluta entre las intenciones del Proyecto Educativo Institucional (PEI), los planes de estudio prácticos y las demandas socioeconómicas externas.",
            color: "#7c3aed"
        },
        pertinencia: {
            title: "Pertinencia",
            desc: "Enfoque en la solución directa de problemas reales y urgentes del entorno, transfiriendo activamente los saberes de la ingeniería a las necesidades de la región y el país.",
            color: "#0284c7"
        },
        innovacion: {
            title: "Innovación",
            desc: "Fomento de una cultura emprendedora de base tecnológica, metodologías de enseñanza activa e incorporación de tendencias de vanguardia digital como la Inteligencia Artificial.",
            color: "#c084fc"
        }
    };

    const data = axisData[axisId];
    if (data) {
        const def = document.getElementById('peiAxisDetailDefault');
        const act = document.getElementById('peiAxisDetailActive');
        const tit = document.getElementById('peiAxisActiveTitle');
        const dsc = document.getElementById('peiAxisActiveDesc');
        const pnl = document.getElementById('peiAxisDetailPanel');
        
        if (def) def.style.display = 'none';
        if (act) act.style.display = 'block';
        if (tit) {
            tit.innerText = data.title;
            tit.style.color = data.color;
        }
        if (dsc) dsc.innerText = data.desc;
        if (pnl) pnl.style.borderLeftColor = data.color;

        if (pathEl) {
            pathEl.style.opacity = '1';
            pathEl.style.strokeWidth = '3';
        }
    }
};

// =====================================================
// INICIALIZACIÓN
// =====================================================
window.instInit = function() {
    // Reset all chart refs
    window._instCharts = {};
    // Activar primera pestaña con gráficos
    window.switchInstTab('identidad');
};
