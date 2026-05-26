// ===================================================================
// SECCIÓN: PRESENTACIÓN INSTITUCIONAL
// Fuente: Presentación Institucional.pptx (23 slides)
// Integración como primera tarjeta del portal de sustentación
// ===================================================================
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS.inst = `
<div class="slide-header" style="border-bottom: 3px solid #C8102E; padding-bottom: 15px; margin-bottom: 25px;">
    <div class="slide-subtitle" style="color:#C8102E; font-weight:bold; text-transform:uppercase; font-size:1.1rem; letter-spacing:2px;">Corporación Escuela Tecnológica del Oriente</div>
    <h1 style="color:#0A2540; font-size:2.2rem; margin:0; font-weight:800;">Presentación Institucional</h1>
    <p style="color:#6b7280; font-size:1rem; margin-top:5px; font-style:italic;">"Establecer metas es el primer paso para transformar lo invisible en visible." — Tony Robbins</p>
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

<!-- ============ CONTENIDO DE CADA PESTAÑA ============ -->

<!-- TAB: IDENTIDAD INSTITUCIONAL -->
<div id="instTab_identidad" class="inst-tab-content" style="display:block;">
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:25px; margin-bottom:25px;">
        <div style="background:linear-gradient(135deg, #0A2540 0%, #173A66 100%); color:white; padding:30px; border-radius:12px; display:flex; flex-direction:column; justify-content:center;">
            <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:15px; font-family:'Montserrat',sans-serif;">Identidad Institucional</h2>
            <p style="font-size:1.05rem; line-height:1.7; color:#cbd5e1;">Institución de Educación Superior que, en cumplimiento de sus funciones sustantivas, contribuye al desarrollo integral de sus estudiantes, mediante un Modelo Pedagógico denominado <strong style="color:#C8102E;">"Formación en Contextos de Aplicación"</strong> que incorpora la transferencia del conocimiento a la solución de los problemas reales del entorno, bajo principios humanísticos y de responsabilidad tanto social como ambiental.</p>
        </div>
        <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:12px; padding:25px;">
            <h3 style="color:#0A2540; font-weight:700; font-size:1.3rem; margin-bottom:15px;"><i class="fas fa-bullseye mr-2" style="color:#C8102E;"></i>¿Por qué elegirnos?</h3>
            <p style="color:#374151; font-size:1rem; margin-bottom:20px; line-height:1.6;">Institución líder en Bucaramanga y Santander. Formamos profesionales integrales con nuestro modelo pedagógico único.</p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                <div style="background:white; border:2px solid #C8102E; border-radius:10px; padding:15px; text-align:center;">
                    <div style="font-size:2.2rem; font-weight:800; color:#C8102E; font-family:'Montserrat';">4</div>
                    <div style="font-size:0.8rem; font-weight:700; color:#6b7280; text-transform:uppercase;">Pregrado Presencial</div>
                </div>
                <div style="background:white; border:2px solid #0A2540; border-radius:10px; padding:15px; text-align:center;">
                    <div style="font-size:2.2rem; font-weight:800; color:#0A2540; font-family:'Montserrat';">3</div>
                    <div style="font-size:0.8rem; font-weight:700; color:#6b7280; text-transform:uppercase;">Pregrado Virtual</div>
                </div>
                <div style="background:white; border:2px solid #C8102E; border-radius:10px; padding:15px; text-align:center;">
                    <div style="font-size:2.2rem; font-weight:800; color:#C8102E; font-family:'Montserrat';">3</div>
                    <div style="font-size:0.8rem; font-weight:700; color:#6b7280; text-transform:uppercase;">Posgrado Presencial</div>
                </div>
                <div style="background:white; border:2px solid #0A2540; border-radius:10px; padding:15px; text-align:center;">
                    <div style="font-size:2.2rem; font-weight:800; color:#0A2540; font-family:'Montserrat';">2</div>
                    <div style="font-size:0.8rem; font-weight:700; color:#6b7280; text-transform:uppercase;">Posgrado Virtual</div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- TAB: PEI -->
<div id="instTab_pei" class="inst-tab-content" style="display:none;">
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:30px; margin-bottom:25px; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
        <h3 style="color:#0A2540; font-weight:800; font-size:1.6rem; margin-bottom:5px;"><i class="fas fa-book-open mr-2" style="color:#C8102E;"></i>Proyecto Educativo Institucional</h3>
        <p style="color:#C8102E; font-weight:700; font-size:1rem; margin-bottom:20px;">Modelo Pedagógico Constructivista: "Formación en Contextos de Aplicación"</p>
        
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:20px; margin-bottom:25px;">
            <div style="background:linear-gradient(135deg, #fef2f2, #fff); border:1px solid #fecaca; border-radius:10px; padding:20px; text-align:center;">
                <i class="fas fa-eye" style="font-size:2rem; color:#C8102E; margin-bottom:10px;"></i>
                <h4 style="color:#0A2540; font-weight:700; font-size:1.1rem; margin-bottom:8px;">Visión</h4>
                <p style="color:#4b5563; font-size:0.9rem; line-height:1.5;">Ser referente en la formación integral de profesionales competentes con impacto social.</p>
            </div>
            <div style="background:linear-gradient(135deg, #eff6ff, #fff); border:1px solid #bfdbfe; border-radius:10px; padding:20px; text-align:center;">
                <i class="fas fa-bullhorn" style="font-size:2rem; color:#0A2540; margin-bottom:10px;"></i>
                <h4 style="color:#0A2540; font-weight:700; font-size:1.1rem; margin-bottom:8px;">Misión</h4>
                <p style="color:#4b5563; font-size:0.9rem; line-height:1.5;">Contribuir al desarrollo integral mediante la transferencia de conocimiento a problemas reales.</p>
            </div>
            <div style="background:linear-gradient(135deg, #f0fdf4, #fff); border:1px solid #bbf7d0; border-radius:10px; padding:20px; text-align:center;">
                <i class="fas fa-hands-helping" style="font-size:2rem; color:#16a34a; margin-bottom:10px;"></i>
                <h4 style="color:#0A2540; font-weight:700; font-size:1.1rem; margin-bottom:8px;">Principios</h4>
                <p style="color:#4b5563; font-size:0.9rem; line-height:1.5;">Humanismo, responsabilidad social y ambiental como ejes transversales.</p>
            </div>
        </div>

        <div class="evidence-box" style="background:#f0fdf4; color:#166534; border-left:5px solid #16a34a; padding:15px; font-weight:bold; font-size:1rem; border-radius:4px;">
            <i class="fas fa-folder-open mr-2"></i> Anexo 5: Proyecto Educativo Institucional (PEI)
        </div>
    </div>
</div>

<!-- TAB: EVOLUCIÓN -->
<div id="instTab_evolucion" class="inst-tab-content" style="display:none;">
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:30px; margin-bottom:25px;">
        <h3 style="color:#0A2540; font-weight:800; font-size:1.5rem; margin-bottom:20px;"><i class="fas fa-history mr-2" style="color:#C8102E;"></i>Evolución de la Institución</h3>
        
        <div class="timeline" style="border-left:4px solid #C8102E; padding-left:25px; margin-left:15px;">
            <div style="position:relative; margin-bottom:25px; background:#f9fafb; padding:20px; border-radius:10px; border:1px solid #e5e7eb;">
                <div style="position:absolute; left:-37px; top:20px; width:14px; height:14px; border-radius:50%; background:#C8102E; border:3px solid white; box-shadow:0 0 0 2px #C8102E;"></div>
                <div style="color:#C8102E; font-weight:700; font-size:0.85rem; text-transform:uppercase; letter-spacing:1px; margin-bottom:5px;">Hito Fundacional</div>
                <h4 style="color:#0A2540; font-weight:700; font-size:1.2rem; margin-bottom:8px;">Creación de Estatutos Generales</h4>
                <p style="color:#4b5563; font-size:0.95rem;">Cambio de Asamblea General de Corporados y actualización del PEI.</p>
            </div>
            <div style="position:relative; margin-bottom:25px; background:#f9fafb; padding:20px; border-radius:10px; border:1px solid #e5e7eb;">
                <div style="position:absolute; left:-37px; top:20px; width:14px; height:14px; border-radius:50%; background:#0A2540; border:3px solid white; box-shadow:0 0 0 2px #0A2540;"></div>
                <div style="color:#0A2540; font-weight:700; font-size:0.85rem; text-transform:uppercase; letter-spacing:1px; margin-bottom:5px;">Cambio de Denominación</div>
                <h4 style="color:#0A2540; font-weight:700; font-size:1.2rem; margin-bottom:8px;">Corporación Escuela Tecnológica del Oriente</h4>
                <p style="color:#4b5563; font-size:0.95rem;">Entendiéndose con las siglas <strong>Tecnológica del Oriente</strong> - PJ. Actualización del Proyecto Educativo Institucional.</p>
            </div>
            <div style="position:relative; margin-bottom:25px; background:#f9fafb; padding:20px; border-radius:10px; border:1px solid #e5e7eb;">
                <div style="position:absolute; left:-37px; top:20px; width:14px; height:14px; border-radius:50%; background:#C8102E; border:3px solid white; box-shadow:0 0 0 2px #C8102E;"></div>
                <div style="color:#C8102E; font-weight:700; font-size:0.85rem; text-transform:uppercase; letter-spacing:1px; margin-bottom:5px;">Impacto Social</div>
                <h4 style="color:#0A2540; font-weight:700; font-size:1.2rem; margin-bottom:8px;">Programa Nacional de Erradicación del Analfabetismo</h4>
                <p style="color:#4b5563; font-size:0.95rem;">La institución lidera este programa a nivel nacional, demostrando su compromiso social.</p>
            </div>
            <div style="position:relative; margin-bottom:25px; background:#f9fafb; padding:20px; border-radius:10px; border:1px solid #e5e7eb;">
                <div style="position:absolute; left:-37px; top:20px; width:14px; height:14px; border-radius:50%; background:#0A2540; border:3px solid white; box-shadow:0 0 0 2px #0A2540;"></div>
                <div style="color:#0A2540; font-weight:700; font-size:0.85rem; text-transform:uppercase; letter-spacing:1px; margin-bottom:5px;">Fortalecimiento Académico</div>
                <h4 style="color:#0A2540; font-weight:700; font-size:1.2rem; margin-bottom:8px;">Modelo Virtual e Investigación</h4>
                <p style="color:#4b5563; font-size:0.95rem;">Fortalecimiento e implementación de modelo virtual y Modelo de Investigación. Inicio de posgrado: Especialización en Pedagogía y Didácticas Específicas.</p>
            </div>
            <div style="position:relative; margin-bottom:25px; background:#eff6ff; padding:20px; border-radius:10px; border:2px solid #3b82f6;">
                <div style="position:absolute; left:-37px; top:20px; width:14px; height:14px; border-radius:50%; background:#3b82f6; border:3px solid white; box-shadow:0 0 0 2px #3b82f6;"></div>
                <div style="color:#3b82f6; font-weight:700; font-size:0.85rem; text-transform:uppercase; letter-spacing:1px; margin-bottom:5px;">Logro Reciente</div>
                <h4 style="color:#0A2540; font-weight:700; font-size:1.2rem; margin-bottom:8px;">Renovación de Registro Calificado de LEI - Concepto Favorable</h4>
                <p style="color:#4b5563; font-size:0.95rem;">Visita de condiciones Institucionales con resultado positivo. Fortalecimiento de nuevos programas de posgrado (EGIRSST - EGP).</p>
            </div>
        </div>
    </div>
</div>

<!-- TAB: CONVENIOS -->
<div id="instTab_convenios" class="inst-tab-content" style="display:none;">
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:30px; margin-bottom:25px;">
        <h3 style="color:#0A2540; font-weight:800; font-size:1.5rem; margin-bottom:20px;"><i class="fas fa-handshake mr-2" style="color:#C8102E;"></i>Nuestros Convenios</h3>
        
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:15px; margin-bottom:25px;">
            <div style="background:linear-gradient(135deg, #0A2540, #173A66); color:white; border-radius:10px; padding:20px;">
                <h4 style="font-weight:700; font-size:1.1rem; margin-bottom:12px;"><i class="fas fa-globe mr-2"></i>Internacionales</h4>
                <ul style="list-style:none; padding:0; margin:0; font-size:0.9rem;">
                    <li style="padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.15);"><i class="fas fa-check-circle mr-2" style="color:#10b981;"></i>UNADE de México</li>
                    <li style="padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.15);"><i class="fas fa-check-circle mr-2" style="color:#10b981;"></i>Universidad de Granada (España)</li>
                    <li style="padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.15);"><i class="fas fa-check-circle mr-2" style="color:#10b981;"></i>Universidad de Cuenca (Ecuador)</li>
                    <li style="padding:6px 0;"><i class="fas fa-check-circle mr-2" style="color:#10b981;"></i>UMECIT (Panamá)</li>
                </ul>
            </div>
            <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:10px; padding:20px;">
                <h4 style="color:#0A2540; font-weight:700; font-size:1.1rem; margin-bottom:12px;"><i class="fas fa-university mr-2" style="color:#C8102E;"></i>Académicos Nacionales</h4>
                <ul style="list-style:none; padding:0; margin:0; font-size:0.9rem; color:#374151;">
                    <li style="padding:6px 0; border-bottom:1px solid #e5e7eb;"><i class="fas fa-check mr-2" style="color:#0A2540;"></i>Universidad Ibero</li>
                    <li style="padding:6px 0; border-bottom:1px solid #e5e7eb;"><i class="fas fa-check mr-2" style="color:#0A2540;"></i>Universidad Católica de Colombia</li>
                    <li style="padding:6px 0; border-bottom:1px solid #e5e7eb;"><i class="fas fa-check mr-2" style="color:#0A2540;"></i>ISER de Pamplona</li>
                    <li style="padding:6px 0; border-bottom:1px solid #e5e7eb;"><i class="fas fa-check mr-2" style="color:#0A2540;"></i>SENA</li>
                    <li style="padding:6px 0;"><i class="fas fa-check mr-2" style="color:#0A2540;"></i>Renovación UPEL</li>
                </ul>
            </div>
            <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:10px; padding:20px;">
                <h4 style="color:#0A2540; font-weight:700; font-size:1.1rem; margin-bottom:12px;"><i class="fas fa-briefcase mr-2" style="color:#C8102E;"></i>Sector Público y Privado</h4>
                <ul style="list-style:none; padding:0; margin:0; font-size:0.9rem; color:#374151;">
                    <li style="padding:6px 0; border-bottom:1px solid #e5e7eb;"><i class="fas fa-check mr-2" style="color:#C8102E;"></i>Gobernación de Santander</li>
                    <li style="padding:6px 0; border-bottom:1px solid #e5e7eb;"><i class="fas fa-check mr-2" style="color:#C8102E;"></i>Alcaldías (Bucaramanga, Girón, Pamplona, Lebrija)</li>
                    <li style="padding:6px 0; border-bottom:1px solid #e5e7eb;"><i class="fas fa-check mr-2" style="color:#C8102E;"></i>Policía Nacional</li>
                    <li style="padding:6px 0; border-bottom:1px solid #e5e7eb;"><i class="fas fa-check mr-2" style="color:#C8102E;"></i>Fenalco Santander</li>
                    <li style="padding:6px 0; border-bottom:1px solid #e5e7eb;"><i class="fas fa-check mr-2" style="color:#C8102E;"></i>Cajasan</li>
                    <li style="padding:6px 0;"><i class="fas fa-check mr-2" style="color:#C8102E;"></i>Positiva ARL</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<!-- TAB: OFERTA ACADÉMICA -->
<div id="instTab_oferta" class="inst-tab-content" style="display:none;">
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:30px; margin-bottom:25px;">
        <h3 style="color:#0A2540; font-weight:800; font-size:1.5rem; margin-bottom:20px;"><i class="fas fa-graduation-cap mr-2" style="color:#C8102E;"></i>Oferta Académica Vigente</h3>
        
        <!-- Pregrado Presencial -->
        <div style="margin-bottom:25px;">
            <h4 style="color:#0A2540; font-weight:700; font-size:1.2rem; margin-bottom:15px; padding-bottom:8px; border-bottom:2px solid #e5e7eb;">
                <i class="fas fa-school mr-2" style="color:#C8102E;"></i>Pregrado Presencial
                <span style="float:right; font-size:0.8rem; color:#6b7280; font-weight:400;">📍 Calle 41 · 10-30, Bucaramanga</span>
            </h4>
            <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:12px;">
                <div style="background:#fef2f2; border:1px solid #fecaca; border-left:4px solid #C8102E; border-radius:8px; padding:15px;">
                    <div style="font-weight:700; color:#0A2540; font-size:1rem; margin-bottom:5px;">Técnica Profesional en Higiene y Seguridad en el Trabajo</div>
                    <div style="font-size:0.85rem; color:#6b7280;">4 Semestres · SNIES: 103527 · 62 Créditos</div>
                    <span style="display:inline-block; background:#C8102E; color:white; font-size:0.7rem; font-weight:700; padding:3px 8px; border-radius:4px; margin-top:6px;">ALTA DEMANDA</span>
                </div>
                <div style="background:#eff6ff; border:1px solid #bfdbfe; border-left:4px solid #0A2540; border-radius:8px; padding:15px;">
                    <div style="font-weight:700; color:#0A2540; font-size:1rem; margin-bottom:5px;">Administración de Empresas</div>
                    <div style="font-size:0.85rem; color:#6b7280;">9 Semestres · SNIES: 108445 · 145 Créditos</div>
                    <span style="display:inline-block; background:#0A2540; color:white; font-size:0.7rem; font-weight:700; padding:3px 8px; border-radius:4px; margin-top:6px;">PREMIUM</span>
                </div>
                <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-left:4px solid #16a34a; border-radius:8px; padding:15px;">
                    <div style="font-weight:700; color:#0A2540; font-size:1rem; margin-bottom:5px;">Licenciatura en Educación Infantil</div>
                    <div style="font-size:0.85rem; color:#6b7280;">9 Semestres · SNIES: 116357 · 158 Créditos</div>
                    <span style="display:inline-block; background:#16a34a; color:white; font-size:0.7rem; font-weight:700; padding:3px 8px; border-radius:4px; margin-top:6px;">VOCACIÓN</span>
                </div>
                <div style="background:#fef3c7; border:1px solid #fde68a; border-left:4px solid #d97706; border-radius:8px; padding:15px;">
                    <div style="font-weight:700; color:#0A2540; font-size:1rem; margin-bottom:5px;">Seguridad y Salud en el Trabajo</div>
                    <div style="font-size:0.85rem; color:#6b7280;">9 Semestres · SNIES: 106177 · 155 Créditos</div>
                    <span style="display:inline-block; background:#d97706; color:white; font-size:0.7rem; font-weight:700; padding:3px 8px; border-radius:4px; margin-top:6px;">LIDERAZGO</span>
                </div>
            </div>
        </div>

        <!-- Pregrado Virtual -->
        <div style="margin-bottom:25px;">
            <h4 style="color:#0A2540; font-weight:700; font-size:1.2rem; margin-bottom:15px; padding-bottom:8px; border-bottom:2px solid #e5e7eb;">
                <i class="fas fa-laptop mr-2" style="color:#C8102E;"></i>Pregrado Virtual
                <span style="float:right; font-size:0.8rem; color:#6b7280; font-weight:400;">⏰ Formación autónoma · Cobertura Nacional</span>
            </h4>
            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:8px; padding:15px; position:relative;">
                    <div style="font-weight:700; color:#0A2540; font-size:0.95rem; margin-bottom:5px;">Administración de Empresas</div>
                    <div style="font-size:0.8rem; color:#6b7280;">9 Sem · SNIES: 108445 · 145 Cr.</div>
                    <span style="display:inline-block; background:#3b82f6; color:white; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:3px; margin-top:5px;">NUEVA MODALIDAD</span>
                </div>
                <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:8px; padding:15px;">
                    <div style="font-weight:700; color:#0A2540; font-size:0.95rem; margin-bottom:5px;">Licenciatura en Educación Infantil</div>
                    <div style="font-size:0.8rem; color:#6b7280;">9 Sem · SNIES: 116357 · 158 Cr.</div>
                    <span style="display:inline-block; background:#3b82f6; color:white; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:3px; margin-top:5px;">NUEVA MODALIDAD</span>
                </div>
                <div style="background:#f9fafb; border:2px solid #C8102E; border-radius:8px; padding:15px;">
                    <div style="font-weight:700; color:#0A2540; font-size:0.95rem; margin-bottom:5px;">Ingeniería de Software</div>
                    <div style="font-size:0.8rem; color:#6b7280;">9 Sem · SNIES: trámite · 155 Cr.</div>
                    <span style="display:inline-block; background:#C8102E; color:white; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:3px; margin-top:5px;">NUEVO PROGRAMA</span>
                </div>
            </div>
        </div>

        <!-- Posgrados -->
        <div style="margin-bottom:25px;">
            <h4 style="color:#0A2540; font-weight:700; font-size:1.2rem; margin-bottom:15px; padding-bottom:8px; border-bottom:2px solid #e5e7eb;">
                <i class="fas fa-award mr-2" style="color:#C8102E;"></i>Posgrados Presenciales
                <span style="float:right; font-size:0.8rem; color:#6b7280; font-weight:400;">⏰ Sábados 7:00 AM - 4:00 PM</span>
            </h4>
            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
                <div style="background:#0A2540; color:white; border-radius:8px; padding:15px; border-bottom:3px solid #C8102E;">
                    <div style="font-weight:700; font-size:0.95rem; margin-bottom:5px;">Esp. en Gerencia Integral del Riesgo, SST</div>
                    <div style="font-size:0.8rem; color:#cbd5e1;">3 Cuatrimestres · SNIES: 110536 · 30 Cr.</div>
                </div>
                <div style="background:#0A2540; color:white; border-radius:8px; padding:15px; border-bottom:3px solid #C8102E;">
                    <div style="font-weight:700; font-size:0.95rem; margin-bottom:5px;">Esp. en Gerencia de Proyectos</div>
                    <div style="font-size:0.8rem; color:#cbd5e1;">2 Semestres · SNIES: 103745 · 28 Cr.</div>
                </div>
                <div style="background:#0A2540; color:white; border-radius:8px; padding:15px; border-bottom:3px solid #C8102E;">
                    <div style="font-weight:700; font-size:0.95rem; margin-bottom:5px;">Esp. en Pedagogía y Didácticas Específicas</div>
                    <div style="font-size:0.8rem; color:#cbd5e1;">4 Semestres · SNIES: 101639 · 35 Cr.</div>
                </div>
            </div>
        </div>

        <!-- Posgrados Virtuales -->
        <div style="margin-bottom:25px;">
            <h4 style="color:#0A2540; font-weight:700; font-size:1.2rem; margin-bottom:15px; padding-bottom:8px; border-bottom:2px solid #e5e7eb;">
                <i class="fas fa-wifi mr-2" style="color:#C8102E;"></i>Posgrados Virtuales
            </h4>
            <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:12px;">
                <div style="background:#173A66; color:white; border-radius:8px; padding:15px; border-bottom:3px solid #3b82f6;">
                    <div style="font-weight:700; font-size:0.95rem; margin-bottom:5px;">Gestión de la Seguridad y Salud en el Trabajo</div>
                    <div style="font-size:0.8rem; color:#cbd5e1;">2 Semestres · 24 Créditos</div>
                    <span style="display:inline-block; background:#3b82f6; color:white; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:3px; margin-top:5px;">NUEVA MODALIDAD</span>
                </div>
                <div style="background:#173A66; color:white; border-radius:8px; padding:15px; border-bottom:3px solid #3b82f6;">
                    <div style="font-weight:700; font-size:0.95rem; margin-bottom:5px;">Inteligencia de Negocios y Analítica de Datos</div>
                    <div style="font-size:0.8rem; color:#cbd5e1;">2 Semestres · 24 Créditos</div>
                    <span style="display:inline-block; background:#3b82f6; color:white; font-size:0.65rem; font-weight:700; padding:2px 6px; border-radius:3px; margin-top:5px;">NUEVA MODALIDAD</span>
                </div>
            </div>
        </div>

        <!-- Próximamente -->
        <div style="background:linear-gradient(135deg, #fef3c7, #fffbeb); border:2px dashed #d97706; border-radius:10px; padding:20px;">
            <h4 style="color:#92400e; font-weight:700; font-size:1.1rem; margin-bottom:12px;"><i class="fas fa-rocket mr-2"></i>Próximamente</h4>
            <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:10px;">
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                    <span style="font-weight:700; color:#0A2540; font-size:0.9rem;">Pregrado:</span>
                    <span style="background:white; border:1px solid #d97706; border-radius:5px; padding:4px 10px; font-size:0.85rem; font-weight:600; color:#374151;">Derecho</span>
                    <span style="background:white; border:1px solid #d97706; border-radius:5px; padding:4px 10px; font-size:0.85rem; font-weight:600; color:#C8102E;">Ingeniería Industrial</span>
                    <span style="background:white; border:1px solid #d97706; border-radius:5px; padding:4px 10px; font-size:0.85rem; font-weight:600; color:#374151;">Marketing Digital</span>
                </div>
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                    <span style="font-weight:700; color:#0A2540; font-size:0.9rem;">Posgrado:</span>
                    <span style="background:white; border:1px solid #d97706; border-radius:5px; padding:4px 10px; font-size:0.85rem; font-weight:600; color:#374151;">Esp. Gerencia de Proyectos</span>
                    <span style="background:white; border:1px solid #d97706; border-radius:5px; padding:4px 10px; font-size:0.85rem; font-weight:600; color:#374151;">Esp. Psicopedagogía</span>
                    <span style="background:white; border:1px solid #d97706; border-radius:5px; padding:4px 10px; font-size:0.85rem; font-weight:600; color:#374151;">Maestría en Educación</span>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- TAB: ESTUDIANTES -->
<div id="instTab_estudiantes" class="inst-tab-content" style="display:none;">
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:30px; margin-bottom:25px;">
        <h3 style="color:#0A2540; font-weight:800; font-size:1.5rem; margin-bottom:20px;"><i class="fas fa-users mr-2" style="color:#C8102E;"></i>Nuestros Estudiantes</h3>
        <p style="color:#6b7280; margin-bottom:20px; font-size:1rem;">Caracterización de la comunidad estudiantil de la Corporación Escuela Tecnológica del Oriente.</p>
        
        <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:12px; padding:20px; text-align:center; margin-bottom:20px;">
            <div style="margin-bottom:15px; display:flex; justify-content:space-between; align-items:center;">
                <button onclick="window.prevEstSlide()" style="background:#0A2540; color:white; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-weight:bold; font-size:0.95rem;"><i class="fas fa-arrow-left mr-2"></i> Anterior</button>
                <span id="estSlideCounter" style="font-weight:bold; color:#0A2540; font-size:1.1rem;">1 / 3</span>
                <button onclick="window.nextEstSlide()" style="background:#C8102E; color:white; border:none; padding:10px 20px; border-radius:8px; cursor:pointer; font-weight:bold; font-size:0.95rem;">Siguiente <i class="fas fa-arrow-right ml-2"></i></button>
            </div>
            <img id="estSlideImg" src="assets/inst_slides/inst_slide_14_img_0.png" style="max-width:100%; border-radius:8px; border:2px solid #d1d5db; box-shadow:0 4px 12px rgba(0,0,0,0.15);" alt="Caracterización de Estudiantes">
            <div style="margin-top:10px; color:#6b7280; font-size:0.95rem;" id="estSlideTitle">Nuestros Estudiantes</div>
        </div>
    </div>
</div>

<!-- TAB: INFRAESTRUCTURA -->
<div id="instTab_infra" class="inst-tab-content" style="display:none;">
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:30px; margin-bottom:25px;">
        <h3 style="color:#0A2540; font-weight:800; font-size:1.5rem; margin-bottom:20px;"><i class="fas fa-building mr-2" style="color:#C8102E;"></i>Nuestra Infraestructura</h3>
        
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:25px; margin-bottom:25px;">
            <div>
                <h4 style="color:#0A2540; font-weight:700; font-size:1.2rem; margin-bottom:15px;">Sede Principal · Cra. 10 No. 35-40</h4>
                <p style="color:#C8102E; font-weight:700; font-size:1.5rem; margin-bottom:15px; font-family:'Montserrat';">1.527,3 m²</p>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                    <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:6px; padding:10px; text-align:center;">
                        <div style="font-size:1.5rem; font-weight:800; color:#0A2540;">9</div>
                        <div style="font-size:0.75rem; color:#6b7280; font-weight:600;">Aulas de Clase</div>
                    </div>
                    <div style="background:#f0fdf4; border:1px solid #bbf7d0; border-radius:6px; padding:10px; text-align:center;">
                        <div style="font-size:1.5rem; font-weight:800; color:#16a34a;">1</div>
                        <div style="font-size:0.75rem; color:#6b7280; font-weight:600;">Laboratorio</div>
                    </div>
                    <div style="background:#fef3c7; border:1px solid #fde68a; border-radius:6px; padding:10px; text-align:center;">
                        <div style="font-size:1.5rem; font-weight:800; color:#d97706;">1</div>
                        <div style="font-size:0.75rem; color:#6b7280; font-weight:600;">Sala de Informática</div>
                    </div>
                    <div style="background:#fef2f2; border:1px solid #fecaca; border-radius:6px; padding:10px; text-align:center;">
                        <div style="font-size:1.5rem; font-weight:800; color:#C8102E;">1</div>
                        <div style="font-size:0.75rem; color:#6b7280; font-weight:600;">Auditorio</div>
                    </div>
                    <div style="background:#f5f3ff; border:1px solid #ddd6fe; border-radius:6px; padding:10px; text-align:center;">
                        <div style="font-size:1.5rem; font-weight:800; color:#7c3aed;">4</div>
                        <div style="font-size:0.75rem; color:#6b7280; font-weight:600;">Oficinas Admin.</div>
                    </div>
                    <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; padding:10px; text-align:center;">
                        <div style="font-size:1.5rem; font-weight:800; color:#374151;">1</div>
                        <div style="font-size:0.75rem; color:#6b7280; font-weight:600;">Sala Docentes</div>
                    </div>
                </div>
            </div>
            <div>
                <h4 style="color:#0A2540; font-weight:700; font-size:1.2rem; margin-bottom:15px;">Sedes Complementarias</h4>
                <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:10px; padding:20px; margin-bottom:12px;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <i class="fas fa-futbol" style="font-size:1.5rem; color:#C8102E;"></i>
                        <div>
                            <div style="font-weight:700; color:#0A2540; font-size:1rem;">Recrear la Victoria</div>
                            <div style="font-size:0.85rem; color:#6b7280;">Espacio recreativo y deportivo</div>
                        </div>
                    </div>
                </div>
                <div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:10px; padding:20px; margin-bottom:12px;">
                    <div style="display:flex; align-items:center; gap:12px;">
                        <i class="fas fa-tree" style="font-size:1.5rem; color:#16a34a;"></i>
                        <div>
                            <div style="font-weight:700; color:#0A2540; font-size:1rem;">Cajasan Campo Alegre</div>
                            <div style="font-size:0.85rem; color:#6b7280;">Actividades de bienestar institucional</div>
                        </div>
                    </div>
                </div>
                <div class="evidence-box" style="background:#f0fdf4; color:#166534; border-left:5px solid #16a34a; padding:12px; font-weight:bold; font-size:0.9rem; border-radius:4px; margin-top:15px;">
                    <i class="fas fa-file-pdf mr-2"></i> Anexo 22-25: Contratos y licencias de sedes
                </div>
            </div>
        </div>
    </div>
</div>

<!-- TAB: RETOS ESTRATÉGICOS -->
<div id="instTab_retos" class="inst-tab-content" style="display:none;">
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:30px; margin-bottom:25px;">
        <h3 style="color:#0A2540; font-weight:800; font-size:1.5rem; margin-bottom:20px;"><i class="fas fa-bullseye mr-2" style="color:#C8102E;"></i>Retos Estratégicos y Marco 2026–2030</h3>
        
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:25px;">
            <!-- Retos 2025 -->
            <div style="background:linear-gradient(135deg, #0A2540 0%, #173A66 100%); color:white; border-radius:12px; padding:25px;">
                <h4 style="font-weight:700; font-size:1.3rem; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:10px;"><i class="fas fa-flag-checkered mr-2"></i>Retos 2025</h4>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                    <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px;">
                        <div style="font-weight:700; font-size:0.9rem; color:#fbbf24;">Presencia Nacional</div>
                        <div style="font-size:0.8rem; color:#cbd5e1;">11 programas nuevos</div>
                    </div>
                    <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px;">
                        <div style="font-weight:700; font-size:0.9rem; color:#fbbf24;">Investigación</div>
                        <div style="font-size:0.8rem; color:#cbd5e1;">Grupo categoría B</div>
                    </div>
                    <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px;">
                        <div style="font-weight:700; font-size:0.9rem; color:#fbbf24;">Bienestar</div>
                        <div style="font-size:0.8rem; color:#cbd5e1;">Deserción 9%–11%</div>
                    </div>
                    <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px;">
                        <div style="font-weight:700; font-size:0.9rem; color:#fbbf24;">Finanzas</div>
                        <div style="font-size:0.8rem; color:#cbd5e1;">EBITDA ≥ 15%</div>
                    </div>
                    <div style="background:rgba(255,255,255,0.1); padding:12px; border-radius:8px; grid-column:span 2;">
                        <div style="font-weight:700; font-size:0.9rem; color:#fbbf24;">Movilidad</div>
                        <div style="font-size:0.8rem; color:#cbd5e1;">Nacional e internacional · Convenios UPEL–UMECIT</div>
                    </div>
                </div>
            </div>

            <!-- Retos 2026 -->
            <div style="background:#f9fafb; border:2px solid #C8102E; border-radius:12px; padding:25px;">
                <h4 style="color:#0A2540; font-weight:700; font-size:1.3rem; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:10px;"><i class="fas fa-chart-line mr-2" style="color:#C8102E;"></i>Retos 2026</h4>
                <div style="display:grid; gap:10px;">
                    <div style="background:white; border:1px solid #e5e7eb; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px;">
                        <i class="fas fa-money-bill-wave" style="color:#16a34a; font-size:1.2rem;"></i>
                        <div>
                            <div style="font-weight:700; color:#0A2540; font-size:0.9rem;">Diversificación de Ingresos</div>
                            <div style="font-size:0.8rem; color:#6b7280;">Oferta en educación continua</div>
                        </div>
                    </div>
                    <div style="background:white; border:1px solid #e5e7eb; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px;">
                        <i class="fas fa-medal" style="color:#d97706; font-size:1.2rem;"></i>
                        <div>
                            <div style="font-weight:700; color:#0A2540; font-size:0.9rem;">Acreditación de Programas</div>
                            <div style="font-size:0.8rem; color:#6b7280;">2 programas: SST y LEI</div>
                        </div>
                    </div>
                    <div style="background:white; border:1px solid #e5e7eb; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px;">
                        <i class="fas fa-shield-alt" style="color:#3b82f6; font-size:1.2rem;"></i>
                        <div>
                            <div style="font-weight:700; color:#0A2540; font-size:0.9rem;">SIAC</div>
                            <div style="font-size:0.8rem; color:#6b7280;">Autoevaluación y mejoramiento &gt; 80%</div>
                        </div>
                    </div>
                    <div style="background:white; border:1px solid #e5e7eb; padding:12px; border-radius:8px; display:flex; align-items:center; gap:10px;">
                        <i class="fas fa-server" style="color:#7c3aed; font-size:1.2rem;"></i>
                        <div>
                            <div style="font-weight:700; color:#0A2540; font-size:0.9rem;">Infraestructura</div>
                            <div style="font-size:0.8rem; color:#6b7280;">Ambientes físicos y virtuales</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Marco Estratégico 2026-2030 -->
        <div style="background:linear-gradient(135deg, #0A2540 0%, #1e3a5f 50%, #C8102E 100%); color:white; border-radius:12px; padding:25px; text-align:center;">
            <h4 style="font-weight:800; font-size:1.4rem; margin-bottom:10px;"><i class="fas fa-compass mr-2"></i>Marco Estratégico 2026–2030</h4>
            <p style="color:#cbd5e1; font-size:1rem; max-width:700px; margin:0 auto;">Plan de desarrollo institucional con visión a mediano plazo, orientado al crecimiento sostenible, la excelencia académica y el impacto regional y nacional.</p>
        </div>
    </div>
</div>
`;

// =====================================================
// LÓGICA DE PESTAÑAS
// =====================================================
window.switchInstTab = function(tabId) {
    // Ocultar todos los contenidos
    document.querySelectorAll('.inst-tab-content').forEach(function(el) {
        el.style.display = 'none';
    });
    // Resetear botones
    document.querySelectorAll('.inst-tab-btn').forEach(function(btn) {
        btn.style.background = '#e5e7eb';
        btn.style.color = '#374151';
    });
    // Mostrar pestaña seleccionada
    var tab = document.getElementById('instTab_' + tabId);
    if (tab) tab.style.display = 'block';
    // Activar botón
    var buttons = document.querySelectorAll('.inst-tab-btn');
    var tabNames = ['identidad','pei','evolucion','convenios','oferta','estudiantes','infra','retos'];
    var idx = tabNames.indexOf(tabId);
    if (idx >= 0 && buttons[idx]) {
        buttons[idx].style.background = '#0A2540';
        buttons[idx].style.color = 'white';
    }
};

// =====================================================
// LÓGICA DE SLIDES DE ESTUDIANTES
// =====================================================
window._estSlides = [
    {img:'assets/inst_slides/inst_slide_14_img_0.png', title:'Nuestros Estudiantes'},
    {img:'assets/inst_slides/inst_slide_15_img_0.png', title:'Caracterización de Estudiantes (1)'},
    {img:'assets/inst_slides/inst_slide_16_img_0.png', title:'Caracterización de Estudiantes (2)'}
];
window._estIdx = 0;

window.nextEstSlide = function() {
    if (window._estIdx < window._estSlides.length - 1) {
        window._estIdx++;
        window._updateEstSlide();
    }
};
window.prevEstSlide = function() {
    if (window._estIdx > 0) {
        window._estIdx--;
        window._updateEstSlide();
    }
};
window._updateEstSlide = function() {
    var s = window._estSlides[window._estIdx];
    var img = document.getElementById('estSlideImg');
    var counter = document.getElementById('estSlideCounter');
    var title = document.getElementById('estSlideTitle');
    if (img) img.src = s.img;
    if (counter) counter.textContent = (window._estIdx + 1) + ' / ' + window._estSlides.length;
    if (title) title.textContent = s.title;
};

// =====================================================
// INICIALIZACIÓN
// =====================================================
window.instInit = function() {
    window._estIdx = 0;
    window._updateEstSlide();
    // Activar primera pestaña
    window.switchInstTab('identidad');
};
