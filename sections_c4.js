window.SECTIONS = window.SECTIONS || {};

// Interactive Functions for Condition 4
window.toggleC4Tab = function(tabId, btn) {
    document.querySelectorAll('.c4-pane').forEach(pane => {
        pane.style.display = 'none';
    });
    document.querySelectorAll('.c4-tab-btn').forEach(button => {
        button.classList.remove('active');
        button.style.backgroundColor = '#f1f5f9';
        button.style.color = '#64748b';
        button.style.borderBottom = 'none';
    });
    
    const activePane = document.getElementById(tabId);
    if (activePane) {
        activePane.style.display = 'block';
    }
    
    if (btn) {
        btn.classList.add('active');
        btn.style.backgroundColor = '#0A2540';
        btn.style.color = '#ffffff';
    }

    if (tabId === 'c4-tab-docentes') {
        setTimeout(() => {
            if (typeof window.initCargaDocenteChart === 'function') {
                window.initCargaDocenteChart('TC');
            }
        }, 150);
    }
};

window.calculateWorkload = function() {
    const creditsInput = document.getElementById('c4-credits-select');
    if (!creditsInput) return;
    
    const credits = parseInt(creditsInput.value);
    
    const acompaSemestral = credits * 16;
    const autonomoSemestral = credits * 32;
    const totalSemestral = credits * 48;
    const totalSemanal = totalSemestral / 16;
    
    const acompaSemanal = acompaSemestral / 16;
    const autonomoSemanal = autonomoSemestral / 16;
    
    document.getElementById('c4-out-acompa').innerText = acompaSemestral + " h";
    document.getElementById('c4-out-autonomo').innerText = autonomoSemestral + " h";
    document.getElementById('c4-out-total').innerText = totalSemestral + " h";
    document.getElementById('c4-out-semanal').innerText = totalSemanal.toFixed(1) + " h/sem";
    
    document.getElementById('c4-bar-acompa').style.width = ((acompaSemestral / totalSemestral) * 100) + "%";
    document.getElementById('c4-bar-autonomo').style.width = ((autonomoSemestral / totalSemestral) * 100) + "%";
    
    document.getElementById('c4-lbl-acompa').innerText = `${acompaSemanal.toFixed(1)} h/semana (Acompañamiento)`;
    document.getElementById('c4-lbl-autonomo').innerText = `${autonomoSemanal.toFixed(1)} h/semana (Trabajo Autónomo)`;
};

window.showBloomDetail = function(domainId, btn) {
    document.querySelectorAll('.c4-bloom-card').forEach(card => {
        card.classList.remove('active');
        card.style.borderColor = '#e2e8f0';
        card.style.boxShadow = 'none';
        card.style.display = 'none';
    });
    document.querySelectorAll('.c4-bloom-btn').forEach(b => {
        b.classList.remove('active');
    });
    
    const selectedCard = document.getElementById(domainId);
    if (selectedCard) {
        selectedCard.classList.add('active');
        selectedCard.style.borderColor = '#FF6600';
        selectedCard.style.boxShadow = '0 10px 15px -3px rgba(255, 102, 0, 0.1), 0 4px 6px -4px rgba(255, 102, 0, 0.1)';
        selectedCard.style.display = 'block';
    }
    
    if (btn) {
        btn.classList.add('active');
    }
};

window.c4Init = function() {
    setTimeout(() => {
        const defaultTab = document.querySelector('.c4-tab-btn');
        if (defaultTab) {
            defaultTab.click();
        }
        window.calculateWorkload();
        
        const defaultBloom = document.querySelector('.c4-bloom-btn');
        if (defaultBloom) {
            defaultBloom.click();
        }
    }, 100);
};

// HTML & CSS Definition
window.SECTIONS.c4 = `
<style>
    .c4-container {
        font-family: 'Open Sans', sans-serif;
    }
    .c4-tab-btn {
        padding: 12px 24px;
        border: none;
        background-color: #f1f5f9;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 700;
        color: #64748b;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    .c4-tab-btn:hover {
        background-color: #e2e8f0;
        color: #0A2540;
    }
    .c4-tab-btn.active {
        background-color: #0A2540 !important;
        color: #ffffff !important;
        box-shadow: 0 4px 6px -1px rgba(10, 37, 64, 0.2), 0 2px 4px -1px rgba(10, 37, 64, 0.1);
    }
    .c4-pane {
        display: none;
        animation: c4FadeIn 0.5s ease-out;
    }
    @keyframes c4FadeIn {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .c4-grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 24px;
    }
    @media (max-width: 768px) {
        .c4-grid-2 {
            grid-template-columns: 1fr;
        }
    }
    .c4-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 24px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.025);
        transition: all 0.3s ease;
    }
    .c4-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.025);
    }
    .c4-kpi-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        margin-bottom: 24px;
    }
    @media (max-width: 1024px) {
        .c4-kpi-container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    .c4-kpi-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 16px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        border-left: 4px solid #0A2540;
    }
    .c4-kpi-icon {
        width: 44px;
        height: 44px;
        border-radius: 8px;
        background: #f0f5fa;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #0A2540;
        font-size: 1.1rem;
        flex-shrink: 0;
    }
    
    /* Focus semesters style */
    .c4-focus-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        margin-top: 16px;
    }
    @media (max-width: 1024px) {
        .c4-focus-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    .c4-focus-card {
        background: #ffffff;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 16px;
        transition: all 0.3s ease;
        border-top: 4px solid #C8102E;
    }
    .c4-focus-card:hover {
        transform: translateY(-3px);
        border-top-color: #FF6600;
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    }
    .c4-sem-badge {
        font-size: 0.75rem;
        font-weight: 800;
        color: #C8102E;
        text-transform: uppercase;
        margin-bottom: 6px;
    }
    .c4-sem-title {
        font-size: 0.95rem;
        font-weight: 800;
        color: #0A2540;
        margin-bottom: 8px;
    }
    .c4-sem-desc {
        font-size: 0.8rem;
        color: #64748b;
        line-height: 1.5;
    }

    /* Moodle and weekly journey styles */
    .c4-journey-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 12px;
        margin-top: 16px;
    }
    @media (max-width: 1024px) {
        .c4-journey-grid {
            grid-template-columns: 1fr;
        }
    }
    .c4-journey-step {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        padding: 16px;
        position: relative;
        text-align: center;
        transition: all 0.3s ease;
    }
    .c4-journey-step:hover {
        background: #ffffff;
        border-color: #FF6600;
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    }
    .c4-step-num {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #0A2540;
        color: #ffffff;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 12px;
        font-size: 0.85rem;
        border: 3px solid #ffffff;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .c4-journey-step:hover .c4-step-num {
        background: #FF6600;
    }

    /* Bloom selection styles */
    .c4-bloom-btn {
        padding: 10px 16px;
        background: #f1f5f9;
        border: 1px solid #e2e8f0;
        border-radius: 8px;
        font-weight: 700;
        color: #475569;
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 0.85rem;
        text-align: left;
        display: flex;
        align-items: center;
        gap: 10px;
    }
    .c4-bloom-btn:hover {
        background: #e2e8f0;
    }
    .c4-bloom-btn.active {
        background: #FF6600;
        color: #ffffff;
        border-color: #FF6600;
    }
    .c4-bloom-card {
        background: #ffffff;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        padding: 20px;
        transition: all 0.3s ease;
    }
    .c4-bloom-card.active {
        border-color: #FF6600;
    }

    /* Alerts student timeline styles */
    .c4-alert-timeline {
        position: relative;
        padding-left: 28px;
        margin-top: 12px;
    }
    .c4-alert-timeline::before {
        content: '';
        position: absolute;
        left: 8px;
        top: 0;
        bottom: 0;
        width: 4px;
        background: #e2e8f0;
        border-radius: 2px;
    }
    .c4-alert-node {
        position: relative;
        margin-bottom: 24px;
    }
    .c4-alert-node::before {
        content: '';
        position: absolute;
        left: -28px;
        top: 4px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #ffffff;
        border: 4px solid #0A2540;
        transition: all 0.3s ease;
    }
    .c4-alert-node:hover::before {
        border-color: #C8102E;
        transform: scale(1.15);
    }
    .c4-alert-week {
        font-size: 0.75rem;
        font-weight: 800;
        color: #C8102E;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    .c4-alert-title {
        font-size: 1rem;
        font-weight: 800;
        color: #0A2540;
        margin: 2px 0 6px 0;
    }
    .c4-alert-body {
        font-size: 0.85rem;
        color: #475569;
        line-height: 1.5;
    }
</style>

<div class="c4-container">
    <!-- Slide Header -->
    <div style="border-bottom:3px solid #C8102E; padding-bottom:15px; margin-bottom:25px; display:flex; justify-content:between; align-items:center; flex-wrap:wrap; gap:10px;">
        <div>
            <div style="color:#C8102E; font-weight:700; text-transform:uppercase; font-size:.85rem; letter-spacing:1px">Condición 4</div>
            <h1 style="color:#0A2540; font-size:2.2rem; margin:0; font-weight:800">Organización de las Actividades Académicas</h1>
        </div>
        <div style="background:#0A2540; color:#ffffff; font-size:0.75rem; font-weight:800; padding:6px 12px; border-radius:30px; letter-spacing:0.5px; border-bottom:2px solid #FF6600;">
            Decreto 1330 - Art. 2.5.3.2.3.2.5
        </div>
    </div>

    <!-- Navigation Tabs -->
    <div style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:28px">
        <button class="c4-tab-btn active" onclick="toggleC4Tab('c4-tab-estudios', this)">
            <i class="fas fa-cubes"></i> Estructura y Enfoques
        </button>
        <button class="c4-tab-btn" onclick="toggleC4Tab('c4-tab-campus', this)">
            <i class="fas fa-laptop-house"></i> Mediaciones y Campus
        </button>
        <button class="c4-tab-btn" onclick="toggleC4Tab('c4-tab-bloom', this)">
            <i class="fas fa-award"></i> Evaluación de RAPs
        </button>
        <button class="c4-tab-btn" onclick="toggleC4Tab('c4-tab-retencion', this)">
            <i class="fas fa-user-shield"></i> Acompañamiento y Alertas
        </button>
        <button class="c4-tab-btn" onclick="toggleC4Tab('c4-tab-docentes', this)">
            <i class="fas fa-chalkboard-teacher"></i> Tiempos y Carga Docente
        </button>
    </div>

    <!-- TAB 1: ESTRUCTURA CURRICULAR Y ENFOQUES -->
    <div id="c4-tab-estudios" class="c4-pane" style="display:block;">
        <!-- KPIs Row -->
        <div class="c4-kpi-container">
            <div class="c4-kpi-card" style="border-left-color: #0A2540;">
                <div class="c4-kpi-icon"><i class="fas fa-graduation-cap"></i></div>
                <div>
                    <div style="font-size:0.7rem; color:#94a3b8; font-weight:700; text-transform:uppercase">Plan de Estudios</div>
                    <div style="font-weight:800; color:#0A2540; font-size:1.05rem;">144 Créditos</div>
                </div>
            </div>
            <div class="c4-kpi-card" style="border-left-color: #C8102E;">
                <div class="c4-kpi-icon" style="color:#C8102E;"><i class="fas fa-clock"></i></div>
                <div>
                    <div style="font-size:0.7rem; color:#94a3b8; font-weight:700; text-transform:uppercase">Dedicación Real</div>
                    <div style="font-weight:800; color:#0A2540; font-size:1.05rem;">6.912 Horas</div>
                </div>
            </div>
            <div class="c4-kpi-card" style="border-left-color: #FF6600;">
                <div class="c4-kpi-icon" style="color:#FF6600;"><i class="fas fa-book-reader"></i></div>
                <div>
                    <div style="font-size:0.7rem; color:#94a3b8; font-weight:700; text-transform:uppercase">Relación Académica</div>
                    <div style="font-weight:800; color:#0A2540; font-size:1.05rem;">1 Cred = 48 h</div>
                </div>
            </div>
            <div class="c4-kpi-card" style="border-left-color: #10B981;">
                <div class="c4-kpi-icon" style="color:#10B981;"><i class="fas fa-laptop"></i></div>
                <div>
                    <div style="font-size:0.7rem; color:#94a3b8; font-weight:700; text-transform:uppercase">Modalidad</div>
                    <div style="font-weight:800; color:#0A2540; font-size:1.05rem;">100% Virtual</div>
                </div>
            </div>
        </div>

        <div class="c4-grid-2">
            <!-- Left Card: Academic Hour Standards -->
            <div class="c4-card" style="display:flex; flex-direction:column; justify-content:between;">
                <div>
                    <h3 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-balance-scale" style="color:#FF6600;"></i> Rigor del Crédito Académico
                    </h3>
                    <p style="font-size:0.85rem; color:#475569; line-height:1.6; margin-bottom:16px;">
                        De acuerdo con las directrices del Ministerio de Educación Nacional y el Decreto 1330, el programa de Ingeniería Industrial de la <strong>TO</strong> formula y planifica sus créditos de manera estricta:
                    </p>
                    <div style="background:#f8fafc; border-radius:8px; padding:16px; border-left:4px solid #FF6600; margin-bottom:16px;">
                        <div style="display:flex; justify-content:between; margin-bottom:8px; font-size:0.85rem;">
                            <span style="font-weight:700; color:#0A2540;">1 Crédito Académico = 48 Horas Reales</span>
                        </div>
                        <ul style="margin:0; padding-left:16px; font-size:0.82rem; color:#475569; display:flex; flex-direction:column; gap:6px;">
                            <li><strong>33.3% Acompañamiento Directo (16h):</strong> Clases virtuales interactivas sincrónicas, debates guiados y tutoría en Moodle.</li>
                            <li><strong>66.7% Trabajo Autónomo (32h):</strong> Lecturas independientes, proyectos de aplicación regional, laboratorios y simuladores.</li>
                        </ul>
                    </div>
                </div>
                
                <div class="evidence-box" style="margin-top:auto;">
                    <i class="fas fa-file-pdf"></i> Soportes Oficiales: 
                    <a href="Anexo 4. Estudio de Pertinencia.pdf" target="_blank" style="color:#047857; text-decoration:underline;">Anexo 4 (PEP)</a> y
                    <a href="Anexo 3. Doc. Ingenieria Industrial.pdf" target="_blank" style="color:#047857; text-decoration:underline;">Anexo 3 (Doc. Maestro)</a>
                </div>
            </div>

            <!-- Right Card: Interactive Credit Simulator -->
            <div class="c4-card">
                <h3 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-calculator" style="color:#C8102E;"></i> Simulador de Carga Académica
                </h3>
                <p style="font-size:0.85rem; color:#475569; line-height:1.6; margin-bottom:16px;">
                    Seleccione el número de créditos asignados a una asignatura del programa para verificar el cálculo exacto de la distribución de horas según la normatividad institucional:
                </p>
                
                <div style="margin-bottom:20px; display:flex; align-items:center; gap:12px; background:#f1f5f9; padding:12px; border-radius:8px;">
                    <label for="c4-credits-select" style="font-weight:700; color:#0A2540; font-size:0.85rem;">Créditos de Asignatura:</label>
                    <select id="c4-credits-select" onchange="calculateWorkload()" style="padding:6px 12px; border-radius:6px; border:1px solid #cbd5e1; font-weight:700; color:#0A2540; background:white; font-size:0.85rem; outline:none;">
                        <option value="1">1 Crédito</option>
                        <option value="2">2 Créditos</option>
                        <option value="3" selected>3 Créditos</option>
                        <option value="4">4 Créditos</option>
                        <option value="5">5 Créditos</option>
                    </select>
                </div>

                <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:20px;">
                    <div style="background:#f8fafc; padding:12px; border-radius:8px; border:1px solid #e2e8f0; text-align:center;">
                        <div style="font-size:0.75rem; color:#64748b; font-weight:600;">ACOMPAÑAMIENTO DIRECTO</div>
                        <div id="c4-out-acompa" style="font-size:1.25rem; font-weight:800; color:#0A2540; margin-top:4px;">48 h</div>
                    </div>
                    <div style="background:#f8fafc; padding:12px; border-radius:8px; border:1px solid #e2e8f0; text-align:center;">
                        <div style="font-size:0.75rem; color:#64748b; font-weight:600;">TRABAJO INDEPENDIENTE</div>
                        <div id="c4-out-autonomo" style="font-size:1.25rem; font-weight:800; color:#FF6600; margin-top:4px;">96 h</div>
                    </div>
                    <div style="background:#f8fafc; padding:12px; border-radius:8px; border:1px solid #e2e8f0; text-align:center;">
                        <div style="font-size:0.75rem; color:#64748b; font-weight:600;">TOTAL SEMESTRAL (16 SEMANAS)</div>
                        <div id="c4-out-total" style="font-size:1.25rem; font-weight:800; color:#C8102E; margin-top:4px;">144 h</div>
                    </div>
                    <div style="background:#f8fafc; padding:12px; border-radius:8px; border:1px solid #e2e8f0; text-align:center;">
                        <div style="font-size:0.75rem; color:#64748b; font-weight:600;">PROMEDIO DEDICACIÓN SEMANAL</div>
                        <div id="c4-out-semanal" style="font-size:1.25rem; font-weight:800; color:#10B981; margin-top:4px;">9.0 h/sem</div>
                    </div>
                </div>

                <!-- Custom visual distribution bar -->
                <div>
                    <div style="font-size:0.75rem; font-weight:700; color:#0A2540; margin-bottom:6px;">PROPORCIÓN DE CARGA POR ACTIVIDAD:</div>
                    <div style="height:12px; background:#e2e8f0; border-radius:6px; display:flex; overflow:hidden; margin-bottom:12px;">
                        <div id="c4-bar-acompa" style="width:33.3%; background:#0A2540; transition:width 0.4s ease;"></div>
                        <div id="c4-bar-autonomo" style="width:66.7%; background:#FF6600; transition:width 0.4s ease;"></div>
                    </div>
                    <div style="display:flex; flex-direction:column; gap:4px; font-size:0.75rem; color:#475569;">
                        <div style="display:flex; align-items:center; gap:6px;">
                            <span style="width:10px; height:10px; border-radius:50%; background:#0A2540; display:inline-block;"></span>
                            <span id="c4-lbl-acompa">3.0 h/semana (Acompañamiento)</span>
                        </div>
                        <div style="display:flex; align-items:center; gap:6px;">
                            <span style="width:10px; height:10px; border-radius:50%; background:#FF6600; display:inline-block;"></span>
                            <span id="c4-lbl-autonomo">6.0 h/semana (Trabajo Autónomo)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- The 8 Semesters Focus Layout -->
        <div style="margin-top:24px;">
            <h3 style="color:#0A2540; font-weight:800; font-size:1.2rem; margin-top:0; margin-bottom:4px;">
                <i class="fas fa-route" style="color:#FF6600;"></i> Los 8 Enfoques Semestrales del Programa
            </h3>
            <p style="font-size:0.85rem; color:#475569; margin-bottom:16px;">
                Estructura curricular de formación por semestres, demostrando la madurez teórica y técnica secuencial del plan de estudios:
            </p>
            
            <div class="c4-focus-grid">
                <div class="c4-focus-card">
                    <div class="c4-sem-badge">SEMESTRE 1</div>
                    <div class="c4-sem-title">Fundamentación Científica</div>
                    <div class="c4-sem-desc">Rol del ingeniero, pensamiento lógico, matemáticas básicas y fundamentos computacionales para estructurar capacidades cognitivas primarias.</div>
                </div>
                <div class="c4-focus-card">
                    <div class="c4-sem-badge">SEMESTRE 2</div>
                    <div class="c4-sem-title">Bases y Procesos</div>
                    <div class="c4-sem-desc">Física general, estadística descriptiva y principios de procesos industriales para modelar la realidad física y contable del entorno manufacturero.</div>
                </div>
                <div class="c4-focus-card">
                    <div class="c4-sem-badge">SEMESTRE 3</div>
                    <div class="c4-sem-title">Tecnologías e IA</div>
                    <div class="c4-sem-desc">Introducción formal a la Inteligencia Artificial, cálculo multivariado y diseño organizacional, permitiendo el inicio del análisis de sistemas de información complejos.</div>
                </div>
                <div class="c4-focus-card">
                    <div class="c4-sem-badge">SEMESTRE 4</div>
                    <div class="c4-sem-title">Métodos y Calidad</div>
                    <div class="c4-sem-desc">Investigación de operaciones (programación lineal), gerencia de calidad avanzada (Six Sigma) y metodologías formales de investigación aplicada.</div>
                </div>
                <div class="c4-focus-card" style="border-top-color:#0A2540">
                    <div class="c4-sem-badge" style="color:#0A2540">SEMESTRE 5</div>
                    <div class="c4-sem-title">Optimización Integral</div>
                    <div class="c4-sem-desc">Modelado estocástico (cadenas de colas), ingeniería económica de proyectos y control de la producción integrando normativas de seguridad HSEQ.</div>
                </div>
                <div class="c4-focus-card" style="border-top-color:#0A2540">
                    <div class="c4-sem-badge" style="color:#0A2540">SEMESTRE 6</div>
                    <div class="c4-sem-title">Analítica Industrial</div>
                    <div class="c4-sem-desc">Uso intensivo de Big Data, logística y cadenas de suministros inteligentes acoplados a la filosofía de manufactura esbelta (Lean) para la alta eficiencia.</div>
                </div>
                <div class="c4-focus-card" style="border-top-color:#0A2540">
                    <div class="c4-sem-badge" style="color:#0A2540">SEMESTRE 7</div>
                    <div class="c4-sem-title">Simulación Estratégica</div>
                    <div class="c4-sem-desc">Generación de gemelos digitales mediante FlexSim y R-Studio, diseño de plantas en entornos virtuales y formulación avanzada de proyectos de inversión.</div>
                </div>
                <div class="c4-focus-card" style="border-top-color:#0A2540">
                    <div class="c4-sem-badge" style="color:#0A2540">SEMESTRE 8</div>
                    <div class="c4-sem-title">Consolidación de Egreso</div>
                    <div class="c4-sem-desc">Laboratorios de innovación, diseño científico de experimentos y defensa del proyecto integrador final de grado, listos para la inserción productiva.</div>
                </div>
            </div>
        </div>
    </div>

    <!-- TAB 2: MEDIACIONES PEDAGÓGICAS Y ECOISISTEMA DE VIRTUALIDAD -->
    <div id="c4-tab-campus" class="c4-pane">
        <div class="c4-grid-2">
            <!-- Left Card: Moodle Structure -->
            <div class="c4-card">
                <h3 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-cubes" style="color:#0A2540;"></i> Diseño Instruccional del Aula Virtual
                </h3>
                <p style="font-size:0.85rem; color:#475569; line-height:1.6; margin-bottom:16px;">
                    Las aulas virtuales en la plataforma de alta disponibilidad **Moodle** del programa de la <strong>TO</strong> no son simples repositorios documentales. Se estructuran científicamente bajo tres fases metodológicas:
                </p>
                
                <div style="display:flex; flex-direction:column; gap:12px;">
                    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #C8102E; padding:12px; border-radius:8px;">
                        <h4 style="margin:0 0 4px; font-size:0.9rem; color:#0A2540; font-weight:800;">1. Fase de Inicio (Encuadre)</h4>
                        <p style="margin:0; font-size:0.78rem; color:#64748b;">
                            El estudiante recibe la Guía de Aprendizaje oficial, acuerda el pacto pedagógico, revisa las rúbricas analíticas de evaluación y el calendario de entregas de evidencias.
                        </p>
                    </div>
                    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #FF6600; padding:12px; border-radius:8px;">
                        <h4 style="margin:0 0 4px; font-size:0.9rem; color:#0A2540; font-weight:800;">2. Fase de Desarrollo (Construcción)</h4>
                        <p style="margin:0; font-size:0.78rem; color:#64748b;">
                            Acceso a Recursos Educativos Digitales interactivos (videos estructurados, simuladores remotos, lecturas en la biblioteca digital E-Libro) y participación en foros académicos.
                        </p>
                    </div>
                    <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #10B981; padding:12px; border-radius:8px;">
                        <h4 style="margin:0 0 4px; font-size:0.9rem; color:#0A2540; font-weight:800;">3. Fase de Cierre (Valoración)</h4>
                        <p style="margin:0; font-size:0.78rem; color:#64748b;">
                            Entrega de evidencias de aprendizaje integradoras (proyectos, análisis de casos), aplicación de autoevaluaciones sincrónicas y coevaluaciones de desempeño de campo.
                        </p>
                    </div>
                </div>

                <div class="evidence-box" style="margin-top:16px;">
                    <i class="fas fa-book"></i> Lineamiento de Calidad: 
                    <a href="Anexo 20.  Lineamiento de Virtualización de Recursos Digitales.pdf" target="_blank" style="color:#047857; text-decoration:underline;">Anexo 20 (Virtualización)</a> y 
                    <a href="Anexo 13. Instructivo de ingreso a Campus Virtual.pdf" target="_blank" style="color:#047857; text-decoration:underline;">Anexo 13 (Campus)</a>
                </div>
            </div>

            <!-- Right Card: Interactive Student Journey -->
            <div class="c4-card" style="display:flex; flex-direction:column; justify-content:between;">
                <div>
                    <h3 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-calendar-check" style="color:#FF6600;"></i> Flujo de Interacción Semanal
                    </h3>
                    <p style="font-size:0.85rem; color:#475569; line-height:1.6; margin-bottom:16px;">
                        Garantizamos la presencialidad digital interactiva por medio de un Journey Semanal diseñado científicamente para equilibrar el acompañamiento docente con el trabajo autónomo del estudiante:
                    </p>
                    
                    <div style="background:#f8fafc; border-radius:8px; padding:16px; border-left:4px solid #0A2540;">
                        <ul style="margin:0; padding-left:16px; font-size:0.82rem; color:#475569; display:flex; flex-direction:column; gap:8px;">
                            <li><strong>Lunes:</strong> Descarga de la guía didáctica y video introductorio docente en Moodle.</li>
                            <li><strong>Martes / Miércoles:</strong> Encuentro sincrónico en vivo (videoconferencia interactiva con debate y resolución de dudas con el profesor).</li>
                            <li><strong>Jueves:</strong> Trabajo autónomo en simuladores virtuales (FlexSim, R-Studio) y consulta en base bibliográfica digital.</li>
                            <li><strong>Viernes:</strong> Participación activa en foros de debate y coevaluación conceptual presencial.</li>
                            <li><strong>Sábado / Domingo:</strong> Consolidación de evidencias prácticas, envío de entregables y retroalimentación docente.</li>
                        </ul>
                    </div>
                </div>

                <div class="evidence-box" style="margin-top:auto;">
                    <i class="fas fa-file-lines"></i> Soporte de Operación:
                    <a href="Anexo 8. Lin. Programas Academicos Virtual.pdf" target="_blank" style="color:#047857; text-decoration:underline;">Anexo 8</a> y
                    <a href="Anexo 9. Lineamiento Educación Virtual_ Ins.pdf" target="_blank" style="color:#047857; text-decoration:underline;">Anexo 9 (Línea Virtual)</a>
                </div>
            </div>
        </div>

        <!-- Weekly visual journey -->
        <div style="margin-top:24px;">
            <h4 style="color:#0A2540; font-weight:800; font-size:1.05rem; margin-top:0; margin-bottom:12px;">Visualización del Camino Semanal del Estudiante:</h4>
            <div class="c4-journey-grid">
                <div class="c4-journey-step">
                    <div class="c4-step-num">1</div>
                    <div style="font-weight:800; font-size:0.85rem; color:#0A2540; margin-bottom:4px;">Inicio de Guía</div>
                    <div style="font-size:0.75rem; color:#64748b;">Descarga de plan de trabajo y visualización de REDs de contextualización.</div>
                </div>
                <div class="c4-journey-step">
                    <div class="c4-step-num">2</div>
                    <div style="font-weight:800; font-size:0.85rem; color:#0A2540; margin-bottom:4px;">Encuentro Sincrónico</div>
                    <div style="font-size:0.75rem; color:#64748b;">Sesión presencial interactiva sincrónica con el docente especializado de la <strong>TO</strong>.</div>
                </div>
                <div class="c4-journey-step">
                    <div class="c4-step-num">3</div>
                    <div style="font-weight:800; font-size:0.85rem; color:#0A2540; margin-bottom:4px;">Práctica y Simulación</div>
                    <div style="font-size:0.75rem; color:#64748b;">Uso activo de licencias y herramientas (FlexSim, R-Studio, biblioteca).</div>
                </div>
                <div class="c4-journey-step">
                    <div class="c4-step-num">4</div>
                    <div style="font-weight:800; font-size:0.85rem; color:#0A2540; margin-bottom:4px;">Foro e Interacción</div>
                    <div style="font-size:0.75rem; color:#64748b;">Debates académicos colaborativos orientados por el profesor en Moodle.</div>
                </div>
                <div class="c4-journey-step" style="border-right: none;">
                    <div class="c4-step-num">5</div>
                    <div style="font-weight:800; font-size:0.85rem; color:#0A2540; margin-bottom:4px;">Evidencia y Rúbrica</div>
                    <div style="font-size:0.75rem; color:#64748b;">Carga de entregable práctico y recepción de feedback cuantitativo y cualitativo.</div>
                </div>
            </div>
        </div>
    </div>

    <!-- TAB 3: MODELO Y CICLO DE EVALUACIÓN DE RAPs -->
    <div id="c4-tab-bloom" class="c4-pane">
        <div class="c4-grid-2">
            <!-- Left Panel: The Triad of RAP and Bloom Dominios -->
            <div class="c4-card" style="display:flex; flex-direction:column; justify-content:between;">
                <div>
                    <h3 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-sitemap" style="color:#C8102E;"></i> La Tríada Curricular de RAPs
                    </h3>
                    <p style="font-size:0.85rem; color:#475569; line-height:1.6; margin-bottom:16px;">
                        Garantizamos una coherencia curricular absoluta articulando tres componentes esenciales del Proyecto Educativo del Programa (PEP):
                    </p>
                    
                    <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:16px;">
                        <div style="display:flex; align-items:start; gap:10px; font-size:0.82rem;">
                            <span style="background:#0A2540; color:white; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-weight:800; font-size:0.75rem;">1</span>
                            <div>
                                <strong style="color:#0A2540;">El Plan Curricular:</strong> 48 asignaturas estructuradas de forma lógica e interactiva para el desarrollo de competencias modernas.
                            </div>
                        </div>
                        <div style="display:flex; align-items:start; gap:10px; font-size:0.82rem;">
                            <span style="background:#FF6600; color:white; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-weight:800; font-size:0.75rem;">2</span>
                            <div>
                                <strong style="color:#FF6600;">Propósitos de Formación:</strong> Formar ingenieros industriales éticos con capacidades en analítica de datos e Industria 4.0.
                            </div>
                        </div>
                        <div style="display:flex; align-items:start; gap:10px; font-size:0.82rem;">
                            <span style="background:#C8102E; color:white; width:22px; height:22px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; font-weight:800; font-size:0.75rem;">3</span>
                            <div>
                                <strong style="color:#C8102E;">El Perfil de Egreso:</strong> Competencias directamente trazables con la demanda del sector productivo moderno de Santander y el país.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="evidence-box" style="margin-top:auto;">
                    <i class="fas fa-award"></i> RAPs y Evaluación Coherentes:
                    <a href="Anexo 7.. Política de Resultados de Aprendizaje Int.pdf" target="_blank" style="color:#047857; text-decoration:underline;">Anexo 7 (Política RAP)</a>
                </div>
            </div>

            <!-- Right Panel: Interactive Bloom Domain Details -->
            <div class="c4-card">
                <h3 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-brain" style="color:#FF6600;"></i> Dominios de Aprendizaje (Taxonomía Bloom)
                </h3>
                <p style="font-size:0.85rem; color:#475569; line-height:1.6; margin-bottom:16px;">
                    Para evaluar con rigor científico los Resultados de Aprendizaje del Programa (RAP), los segmentamos según los dominios cognitivos y psicomotores oficiales del PEP (Sección 3.8):
                </p>
                
                <div style="display:grid; grid-template-columns:1fr; gap:10px; margin-bottom:16px;">
                    <button class="c4-bloom-btn active" onclick="showBloomDetail('c4-bloom-cog', this)">
                        <i class="fas fa-glasses"></i> Dominio Cognitivo (Saber / Analizar)
                    </button>
                    <button class="c4-bloom-btn" onclick="showBloomDetail('c4-bloom-psic', this)">
                        <i class="fas fa-laptop-code"></i> Dominio Psicomotor (Hacer / Aplicar)
                    </button>
                    <button class="c4-bloom-btn" onclick="showBloomDetail('c4-bloom-afec', this)">
                        <i class="fas fa-heart"></i> Dominio Afectivo/Subjetivo (Ser / Cooperar)
                    </button>
                </div>

                <!-- Card Content Display -->
                <div id="c4-bloom-cog" class="c4-bloom-card active" style="display:block;">
                    <h4 style="margin:0 0 6px; font-weight:800; color:#0A2540; font-size:0.9rem;">Dominio Cognitivo (Procesos Intelectuales)</h4>
                    <p style="margin:0 0 10px; font-size:0.8rem; color:#475569; line-height:1.5;">
                        Se enfoca en la comprensión científica de las matemáticas, la física y la optimización lineal.
                    </p>
                    <div style="background:#f8fafc; border-radius:6px; padding:8px 12px; font-size:0.75rem; font-weight:700; color:#C8102E;">
                        Instrumentos: Rúbricas analíticas, proyectos integradores y exámenes prácticos interactivos en Moodle.
                    </div>
                </div>

                <div id="c4-bloom-psic" class="c4-bloom-card" style="display:none;">
                    <h4 style="margin:0 0 6px; font-weight:800; color:#0A2540; font-size:0.9rem;">Dominio Psicomotor (Destrezas Tecnológicas)</h4>
                    <p style="margin:0 0 10px; font-size:0.8rem; color:#475569; line-height:1.5;">
                        Habilidades operativas y prácticas para el modelado en FlexSim, simulación estadística en R-Studio y control de operaciones con software de Inteligencia Artificial.
                    </p>
                    <div style="background:#f8fafc; border-radius:6px; padding:8px 12px; font-size:0.75rem; font-weight:700; color:#C8102E;">
                        Instrumentos: Informes de simulación, laboratorios remotos guiados y portafolios digitales de programación.
                    </div>
                </div>

                <div id="c4-bloom-afec" class="c4-bloom-card" style="display:none;">
                    <h4 style="margin:0 0 6px; font-weight:800; color:#0A2540; font-size:0.9rem;">Dominio Afectivo/Subjetivo (Ser e Integridad)</h4>
                    <p style="margin:0 0 10px; font-size:0.8rem; color:#475569; line-height:1.5;">
                        Ética profesional en ingeniería, liderazgo de equipos multidisciplinarios e interactivos, y compromiso con la sustentabilidad y el desarrollo regional de Santander.
                    </p>
                    <div style="background:#f8fafc; border-radius:6px; padding:8px 12px; font-size:0.75rem; font-weight:700; color:#C8102E;">
                        Instrumentos: Autoevaluación del estudiante, coevaluación cualitativa en foros académicos y bitácoras de trabajo colaborativo.
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- TAB 4: ACOMPAÑAMIENTO Y ALERTAS TEMPRANAS -->
    <div id="c4-tab-retencion" class="c4-pane">
        <div class="c4-grid-2">
            <!-- Left Card: Academic Success Actions -->
            <div class="c4-card" style="display:flex; flex-direction:column; justify-content:between;">
                <div>
                    <h3 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-users-cog" style="color:#C8102E;"></i> Acciones Multidimensionales para el Éxito
                    </h3>
                    <p style="font-size:0.85rem; color:#475569; line-height:1.6; margin-bottom:16px;">
                        Para garantizar una retención estudiantil sobresaliente, la <strong>TO</strong> despliega tres líneas de acción académica directa de acompañamiento permanente:
                    </p>
                    
                    <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:16px;">
                        <div style="background:#f8fafc; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
                            <div style="font-weight:800; font-size:0.85rem; color:#0A2540; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                                <i class="fas fa-chalkboard-teacher" style="color:#FF6600;"></i> Tutorías Académicas Docentes
                            </div>
                            <p style="margin:0; font-size:0.75rem; color:#64748b;">
                                Espacios sincrónicos semanales dedicados a resolver dudas técnicas de las asignaturas. Son liderados directamente por los profesores de tiempo completo en horarios flexibles.
                            </p>
                        </div>
                        <div style="background:#f8fafc; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
                            <div style="font-weight:800; font-size:0.85rem; color:#0A2540; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                                <i class="fas fa-people-arrows" style="color:#FF6600;"></i> Monitorías entre Pares
                            </div>
                            <p style="margin:0; font-size:0.75rem; color:#64748b;">
                                Apoyo y nivelación conceptual liderada por estudiantes destacados de semestres avanzados del programa para acompañar materias críticas (Física, Cálculos, IO).
                            </p>
                        </div>
                        <div style="background:#f8fafc; padding:12px; border-radius:8px; border:1px solid #e2e8f0;">
                            <div style="font-weight:800; font-size:0.85rem; color:#0A2540; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                                <i class="fas fa-graduation-cap" style="color:#FF6600;"></i> Acompañamiento en Opción de Grado
                            </div>
                            <p style="margin:0; font-size:0.75rem; color:#64748b;">
                                Inicia desde el semestre 4 con asignaturas integradoras como Competencias Investigativas, evitando la deserción y rezago en la fase de titulación final del programa.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="evidence-box" style="margin-top:auto;">
                    <i class="fas fa-hand-holding-hand"></i> Bienestar y Permanencia:
                    <a href="Anexo 10. Reglamento Estudiantil.pdf" target="_blank" style="color:#047857; text-decoration:underline;">Anexo 10 (Reglamento)</a> y
                    <a href="Anexo 12. Reglamento de Opción de Grado.pdf" target="_blank" style="color:#047857; text-decoration:underline;">Anexo 12 (Opción Grado)</a>
                </div>
            </div>

            <!-- Right Card: Interactive Early Alerts Protocol (W1-W8) -->
            <div class="c4-card">
                <h3 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
                    <i class="fas fa-funnel-dollar" style="color:#FF6600;"></i> Protocolo de Alertas Tempranas (Semanas 1-8)
                </h3>
                <p style="font-size:0.85rem; color:#475569; line-height:1.6; margin-bottom:16px;">
                    Nuestro sistema automático en Moodle detecta factores de riesgo en el ciclo académico interactivo, activando un protocolo de contingencia inmediata para retener activamente al estudiante:
                </p>

                <div class="c4-alert-timeline">
                    <div class="c4-alert-node">
                        <div class="c4-alert-week">SEMANAS 1 - 2</div>
                        <div class="c4-alert-title">Diagnóstico de Acceso Digital</div>
                        <div class="c4-alert-body">
                            Identificación automática de estudiantes que no registran acceso al Campus Virtual Moodle durante los primeros 7 días. Activación de llamada directa e intervención de Bienestar Universitario.
                        </div>
                    </div>
                    <div class="c4-alert-node">
                        <div class="c4-alert-week">SEMANAS 3 - 4</div>
                        <div class="c4-alert-title">Detección de Desempeño Académico</div>
                        <div class="c4-alert-body">
                            Filtrado de estudiantes con calificaciones inferiores a 3.0 (en escala de 0.0 a 5.0) en las primeras evidencias cargadas. Remisión formal y obligatoria a tutorías académicas con docentes del programa.
                        </div>
                    </div>
                    <div class="c4-alert-node" style="margin-bottom: 0;">
                        <div class="c4-alert-week">SEMANAS 5 - 8</div>
                        <div class="c4-alert-title">Monitoreo de Continuidad</div>
                        <div class="c4-alert-body">
                            Seguimiento psicopedagógico personalizado por parte de Bienestar Universitario, monitoría par académica asignada y plan especial de flexibilización interactiva y nivelación.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- TAB 5: PLAN DE TRABAJO DOCENTE (TIEMPOS Y CARGA DOCENTE) -->
    <div id="c4-tab-docentes" class="c4-pane">
        <div class="c4-grid-2">
            <!-- Left Card: Teachers Time Distribution Details -->
            <div class="c4-card" style="display:flex; flex-direction:column; justify-content:space-between; min-height:430px;">
                <div>
                    <h3 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px; display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-business-time" style="color:#FF6600;"></i> Plan de Dedicación y Tiempos Docentes
                    </h3>
                    <p style="font-size:0.85rem; color:#475569; line-height:1.6; margin-bottom:16px;">
                        Establecemos una distribución del plan de trabajo docente rigurosa y alineada, dividiendo la carga laboral según su modalidad de contratación para Tiempo Completo (TC - 40h) y Medio Tiempo (MT - 20h):
                    </p>
                    
                    <!-- Selector de Vinculación -->
                    <div style="margin-bottom:15px; display:flex; align-items:center; gap:12px; background:#f1f5f9; padding:10px; border-radius:8px; justify-content:center;">
                        <span style="font-weight:700; color:#0A2540; font-size:0.85rem;">Tipo de Vinculación:</span>
                        <button onclick="window.initCargaDocenteChart('TC')" class="c4-vinculo-btn active" style="padding:6px 12px; font-weight:800; font-size:0.8rem; border-radius:6px; border:1.5px solid #0A2540; background:#0A2540; color:white; cursor:pointer;" id="btn_vinculo_tc">Tiempo Completo (40h)</button>
                        <button onclick="window.initCargaDocenteChart('MT')" class="c4-vinculo-btn" style="padding:6px 12px; font-weight:800; font-size:0.8rem; border-radius:6px; border:1.5px solid #cbd5e1; background:white; color:#475569; cursor:pointer;" id="btn_vinculo_mt">Medio Tiempo (20h)</button>
                    </div>

                    <!-- Horas Desglosadas -->
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:0.75rem; color:#374151;">
                        <div style="background:#fafafa; border-left:3.5px solid #0A2540; padding:8px 10px; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
                            <div><strong>Sincrónico (30%):</strong></div>
                            <div id="c4-hrs-sinc" style="font-weight:800; color:#0A2540;">12.0 h</div>
                        </div>
                        <div style="background:#fafafa; border-left:3.5px solid #3b82f6; padding:8px 10px; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
                            <div><strong>Tutorías (5%):</strong></div>
                            <div id="c4-hrs-tuto" style="font-weight:800; color:#3b82f6;">2.0 h</div>
                        </div>
                        <div style="background:#fafafa; border-left:3.5px solid #60a5fa; padding:8px 10px; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
                            <div><strong>Foros (5%):</strong></div>
                            <div id="c4-hrs-foro" style="font-weight:800; color:#60a5fa;">2.0 h</div>
                        </div>
                        <div style="background:#fafafa; border-left:3.5px solid #1d4ed8; padding:8px 10px; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
                            <div><strong>Entregables (10%):</strong></div>
                            <div id="c4-hrs-entr" style="font-weight:800; color:#1d4ed8;">4.0 h</div>
                        </div>
                        <div style="background:#fafafa; border-left:3.5px solid #C8102E; padding:8px 10px; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
                            <div><strong>Investigación (15%):</strong></div>
                            <div id="c4-hrs-inve" style="font-weight:800; color:#C8102E;">6.0 h</div>
                        </div>
                        <div style="background:#fafafa; border-left:3.5px solid #16a34a; padding:8px 10px; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
                            <div><strong>Proy. Social (10%):</strong></div>
                            <div id="c4-hrs-proy" style="font-weight:800; color:#16a34a;">4.0 h</div>
                        </div>
                        <div style="background:#fafafa; border-left:3.5px solid #d97706; padding:8px 10px; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
                            <div><strong>Administrativo (10%):</strong></div>
                            <div id="c4-hrs-admi" style="font-weight:800; color:#d97706;">4.0 h</div>
                        </div>
                        <div style="background:#fafafa; border-left:3.5px solid #64748b; padding:8px 10px; border-radius:6px; display:flex; justify-content:space-between; align-items:center;">
                            <div><strong>Otras Labores (15%):</strong></div>
                            <div id="c4-hrs-otra" style="font-weight:800; color:#64748b;">6.0 h</div>
                        </div>
                    </div>
                </div>

                <div class="evidence-box" style="margin-top:auto;">
                    <i class="fas fa-file-pdf"></i> Lineamiento de Carga Laboral:
                    <a href="Anexo 18. Lineamiento de Distribución de Planes de Trabajo.pdf" target="_blank" style="color:#047857; text-decoration:underline;">Anexo 18 (Planes de Trabajo)</a>
                </div>
            </div>

            <!-- Right Card: The Donut Chart for Teacher dedication -->
            <div class="c4-card" style="display:flex; flex-direction:column; justify-content:center; align-items:center; min-height:430px;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.1rem; margin-top:0; margin-bottom:15px; width:100%; text-align:center;"><i class="fas fa-chart-pie mr-2" style="color:#FF6600;"></i>Distribución Porcentual del Tiempo Semanal</h4>
                <div style="width:100%; max-width:280px; margin:0 auto;"><canvas id="c4CargaDocenteChart"></canvas></div>
                <div style="margin-top:15px; font-size:0.75rem; font-weight:700; color:#64748b; text-align:center;" id="c4-docente-summary">
                    Total dedicación semanal contratada: <span style="color:#C8102E;" id="c4-hrs-total">40.0 h/semana</span>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

<script>
    // Self-initialize the calculator and view tabs
    setTimeout(() => {
        if (typeof window.c4Init === 'function') {
            window.c4Init();
        }
    }, 150);
</script>

<!-- =====================================================
     GRÁFICO INTERACTIVO DE DISTRIBUCIÓN DE CARGA DOCENTE
     ===================================================== -->
<script>
window._c4CargaDocenteChartInstance = null;

window.initCargaDocenteChart = function(tipoVinculacion) {
    var ctx = document.getElementById('c4CargaDocenteChart');
    if (!ctx) return;
    
    // Destroy previous chart if it exists
    if (window._c4CargaDocenteChartInstance) {
        window._c4CargaDocenteChartInstance.destroy();
    }
    
    const horasTotales = tipoVinculacion === 'TC' ? 40 : 20;
    
    // Update button active styles
    const btnTC = document.getElementById('btn_vinculo_tc');
    const btnMT = document.getElementById('btn_vinculo_mt');
    if (tipoVinculacion === 'TC') {
        if (btnTC) {
            btnTC.style.backgroundColor = '#0A2540';
            btnTC.style.color = 'white';
            btnTC.style.borderColor = '#0A2540';
        }
        if (btnMT) {
            btnMT.style.backgroundColor = 'white';
            btnMT.style.color = '#475569';
            btnMT.style.borderColor = '#cbd5e1';
        }
    } else {
        if (btnTC) {
            btnTC.style.backgroundColor = 'white';
            btnTC.style.color = '#475569';
            btnTC.style.borderColor = '#cbd5e1';
        }
        if (btnMT) {
            btnMT.style.backgroundColor = '#0A2540';
            btnMT.style.color = 'white';
            btnMT.style.borderColor = '#0A2540';
        }
    }

    // Render Chart.js
    window._c4CargaDocenteChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Sincrónicos (30%)',
                'Tutorías (5%)',
                'Foros (5%)',
                'Entregables (10%)',
                'Investigación (15%)',
                'Proy. Social (10%)',
                'Administrativo (10%)',
                'Otras Labores (15%)'
            ],
            datasets: [{
                data: [30, 5, 5, 10, 15, 10, 10, 15],
                backgroundColor: [
                    '#0A2540',
                    '#3b82f6',
                    '#60a5fa',
                    '#1d4ed8',
                    '#C8102E',
                    '#16a34a',
                    '#d97706',
                    '#64748b'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            cutout: '60%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const pct = context.raw;
                            const hrs = ((pct / 100) * horasTotales).toFixed(1);
                            return context.label + ": " + pct + "% (" + hrs + " horas/sem)";
                        }
                    }
                }
            }
        }
    });

    // Update text labels
    document.getElementById('c4-hrs-sinc').innerText = ((30/100)*horasTotales).toFixed(1) + " h";
    document.getElementById('c4-hrs-tuto').innerText = ((5/100)*horasTotales).toFixed(1) + " h";
    document.getElementById('c4-hrs-foro').innerText = ((5/100)*horasTotales).toFixed(1) + " h";
    document.getElementById('c4-hrs-entr').innerText = ((10/100)*horasTotales).toFixed(1) + " h";
    document.getElementById('c4-hrs-inve').innerText = ((15/100)*horasTotales).toFixed(1) + " h";
    document.getElementById('c4-hrs-proy').innerText = ((10/100)*horasTotales).toFixed(1) + " h";
    document.getElementById('c4-hrs-admi').innerText = ((10/100)*horasTotales).toFixed(1) + " h";
    document.getElementById('c4-hrs-otra').innerText = ((15/100)*horasTotales).toFixed(1) + " h";
    document.getElementById('c4-hrs-total').innerText = horasTotales.toFixed(1) + " h/semana";
};
</script>
`;
