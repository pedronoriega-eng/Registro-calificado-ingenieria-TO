// ===================================================================
// SECCIÓN: SISTEMA DE EDUCACIÓN VIRTUAL — PORTAL INTERACTIVO
// Fuente: Sistema de Educación Virtual.pptx (28 slides completos)
// ===================================================================
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS.virtual = `
<div class="slide-header" style="border-bottom: 3px solid #C8102E; padding-bottom: 15px; margin-bottom: 25px;">
    <div style="display:flex; align-items:center; gap:15px; margin-bottom:10px;">
        <div style="background:white; p:6px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.12); display:flex; align-items:center; justify-content:center; width:65px; height:65px;">
            <img src="https://campusvirtual.tecnologicadeloriente.edu.co/pluginfile.php/1/theme_edmo/mobile_logo/1772556380/logo%2Bvertical-1920w.jpg" alt="Logo TO" style="max-height:100%; max-width:100%; object-contain;">
        </div>
        <div>
            <div class="slide-subtitle" style="color:#C8102E; font-weight:bold; text-transform:uppercase; font-size:1rem; letter-spacing:2px;">Corporación Escuela Tecnológica del Oriente</div>
            <h1 style="color:#0A2540; font-size:2.2rem; margin:0; font-weight:800;">Sistema de Educación Virtual</h1>
        </div>
    </div>
    <p style="color:#6b7280; font-size:0.95rem; margin:0; font-style:italic;">"La tecnología por sí sola no es suficiente. Es la tecnología unida con las humanidades y la pedagogía lo que hace cantar a nuestros corazones." — Adaptación de Steve Jobs</p>
</div>

<!-- ============ NAVEGACIÓN POR PESTAÑAS ============ -->
<div id="virtualTabBar" style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:25px; border-bottom:2px solid #e5e7eb; padding-bottom:12px;">
    <button class="virtual-tab-btn active" onclick="window.switchVirtualTab('modelo')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#0A2540; color:white;"><i class="fas fa-university mr-1"></i> Modelo Pedagógico</button>
    <button class="virtual-tab-btn" onclick="window.switchVirtualTab('dimensiones')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-th-large mr-1"></i> 4 Dimensiones</button>
    <button class="virtual-tab-btn" onclick="window.switchVirtualTab('pedagogica')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-chalkboard mr-1"></i> D. Pedagógica & Currículo</button>
    <button class="virtual-tab-btn" onclick="window.switchVirtualTab('instruccional')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-cogs mr-1"></i> Diseño & Producción</button>
    <button class="virtual-tab-btn" onclick="window.switchVirtualTab('campus')" style="padding:10px 18px; border:none; border-radius:8px 8px 0 0; cursor:pointer; font-weight:700; font-size:0.85rem; transition:all 0.3s; background:#e5e7eb; color:#374151;"><i class="fas fa-laptop-code mr-1"></i> Campus & Ecosistema</button>
</div>

<!-- ==================== TAB: MODELO PEDAGÓGICO ==================== -->
<div id="virtualTab_modelo" class="virtual-tab-content" style="display:block;">
    <!-- Hero Banner -->
    <div style="position:relative; border-radius:16px; overflow:hidden; margin-bottom:25px; min-height:220px; background:linear-gradient(135deg, #0A2540 0%, #173A66 60%, #1e3a5f 100%);">
        <div style="position:absolute; top:0; right:0; width:40%; height:100%; opacity:0.15; background:url('assets/virtual_slides/virtual_slide_1_img_0.png') center/cover;"></div>
        <div style="position:relative; z-index:2; padding:35px 30px; color:white;">
            <div style="display:flex; align-items:center; gap:20px; margin-bottom:20px;">
                <div style="background:white; padding:8px; border-radius:10px; box-shadow:0 4px 15px rgba(0,0,0,0.3); width:80px; height:80px; display:flex; align-items:center; justify-content:center;">
                    <img src="https://campusvirtual.tecnologicadeloriente.edu.co/pluginfile.php/1/theme_edmo/mobile_logo/1772556380/logo%2Bvertical-1920w.jpg" alt="Logo" style="max-height:100%; max-width:100%;">
                </div>
                <div>
                    <h2 style="font-size:1.8rem; font-weight:800; margin:0; font-family:'Montserrat',sans-serif;">Formación en Contextos de Aplicación</h2>
                    <p style="font-size:1rem; color:#cbd5e1; margin:5px 0 0;">Modelo Pedagógico del Sistema de Educación Virtual de la TO</p>
                </div>
            </div>
            <p style="font-size:1.05rem; line-height:1.7; color:#ffffff; max-width:95%; text-align:justify; font-family:'Open Sans', sans-serif;">
                El Sistema de Educación Virtual de la **Corporación Escuela Tecnológica del Oriente (TO)** se consolida a partir del año **2020**. Con ocasión del reto de la pandemia, se produjo un crecimiento exponencial en el uso y apropiación de tecnología, estructurándose sólidamente bajo las políticas y lineamientos del **Ministerio de Educación Nacional** colombiano.
            </p>
        </div>
    </div>

    <!-- Modelo Pedagógico y su Núcleo -->
    <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:25px; margin-bottom:25px; align-items:start;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.02);">
            <h3 style="color:#0A2540; font-weight:800; font-size:1.3rem; margin-top:0; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:8px;">
                <i class="fas fa-graduation-cap mr-2" style="color:#C8102E;"></i>Núcleo del Modelo
            </h3>
            <p style="color:#374151; font-size:0.95rem; line-height:1.7; text-align:justify; margin-bottom:15px;">
                En nuestro modelo **"Formación en Contextos de Aplicación"**, el **estudiante es el centro absoluto** del acto educativo. Él interactúa activamente con:
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:15px;">
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #0A2540; border-radius:8px; padding:12px;">
                    <div style="font-weight:700; color:#0A2540; font-size:0.9rem;">👨‍🏫 Docente Mediador</div>
                    <div style="font-size:0.8rem; color:#64748b; margin-top:4px;">Guía, orienta y acompaña el proceso del estudiante.</div>
                </div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #C8102E; border-radius:8px; padding:12px;">
                    <div style="font-weight:700; color:#C8102E; font-size:0.9rem;">🌍 Contexto Social y Cultural</div>
                    <div style="font-size:0.8rem; color:#64748b; margin-top:4px;">La realidad externa como fuente inagotable de aprendizaje.</div>
                </div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #d97706; border-radius:8px; padding:12px;">
                    <div style="font-weight:700; color:#d97706; font-size:0.9rem;">🔍 Indagación y Observación</div>
                    <div style="font-size:0.8rem; color:#64748b; margin-top:4px;">Fomento de la curiosidad, investigación y análisis crítico.</div>
                </div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #16a34a; border-radius:8px; padding:12px;">
                    <div style="font-weight:700; color:#16a34a; font-size:0.9rem;">🤝 Trabajo Colaborativo</div>
                    <div style="font-size:0.8rem; color:#64748b; margin-top:4px;">Co-construcción de saberes mediante interacción grupal.</div>
                </div>
            </div>
            <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:15px; border-left:4px solid #1e40af;">
                <p style="margin:0; font-size:0.9rem; line-height:1.6; color:#1e3a8a; font-weight:600;">
                    <i class="fas fa-star mr-1"></i> Formación Integral en 3 Dimensiones:
                </p>
                <div style="display:flex; justify-content:space-around; margin-top:10px; font-weight:700; font-size:0.85rem; color:#1e40af;">
                    <span>🧠 Cognitiva</span>
                    <span>❤️ Emocional</span>
                    <span>🛠️ Praxeológica</span>
                </div>
                <p style="margin:8px 0 0 0; font-size:0.82rem; color:#2563eb; line-height:1.4; text-align:justify;">
                    Esta integración armónica permite al egresado un desarrollo equilibrado y de excelencia en sus **competencias profesionales y ciudadanas**.
                </p>
            </div>
        </div>

        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.02); text-align:center;">
            <h3 style="color:#0A2540; font-weight:700; font-size:1.15rem; margin-top:0; margin-bottom:15px; text-align:left;">
                <i class="fas fa-image mr-2" style="color:#FF6600;"></i>Ilustración del Modelo
            </h3>
            <div style="background:#fafafa; border:1px solid #e5e7eb; border-radius:8px; padding:10px; display:inline-block; max-width:100%;">
                <img src="assets/virtual_slides/virtual_slide_5_img_0.png" alt="Esquema Modelo Pedagógico" style="max-width:100%; max-height:280px; border-radius:4px; display:block; margin:0 auto;" onerror="this.src='assets/virtual_slides/virtual_slide_5_img_1.jpg';">
            </div>
            <p style="color:#6b7280; font-size:0.8rem; margin:10px 0 0; font-style:italic;">Interrelación del estudiante con el mediador, el contexto y la praxeología.</p>
        </div>
    </div>

    <!-- Sustentos Teóricos del Modelo -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.02); margin-bottom:25px;">
        <h3 style="color:#0A2540; font-weight:800; font-size:1.3rem; margin-top:0; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:8px;">
            <i class="fas fa-book-reader mr-2" style="color:#C8102E;"></i>Sustentos Teóricos del Modelo Pedagógico
        </h3>
        <p style="color:#374151; font-size:0.95rem; line-height:1.6; margin-bottom:20px;">
            El modelo pedagógico de educación virtual de la **TO** no es improvisado; se fundamenta conceptualmente sobre referentes pedagógicos rigurosos y consolidados a nivel global:
        </p>

        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; margin-bottom:20px;">
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:15px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.borderColor='#0A2540';" onmouseout="this.style.transform=''; this.style.borderColor='#e2e8f0';">
                <div style="font-size:1.8rem; margin-bottom:5px;">👥</div>
                <div style="font-weight:700; color:#0A2540; font-size:0.88rem; margin-bottom:4px;">Constructivismo Social</div>
                <div style="font-weight:600; color:#C8102E; font-size:0.8rem; margin-bottom:6px;">L. Vygotsky</div>
                <div style="font-size:0.78rem; color:#475569; line-height:1.4;">El conocimiento se co-construye a través de la interacción social.</div>
            </div>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:15px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.borderColor='#0A2540';" onmouseout="this.style.transform=''; this.style.borderColor='#e2e8f0';">
                <div style="font-size:1.8rem; margin-bottom:5px;">🧠</div>
                <div style="font-weight:700; color:#0A2540; font-size:0.88rem; margin-bottom:4px;">Aprendizaje Significativo</div>
                <div style="font-weight:600; color:#C8102E; font-size:0.8rem; margin-bottom:6px;">D. Ausubel</div>
                <div style="font-size:0.78rem; color:#475569; line-height:1.4;">Anclaje del nuevo saber sobre estructuras y presaberes del alumno.</div>
            </div>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:15px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.borderColor='#0A2540';" onmouseout="this.style.transform=''; this.style.borderColor='#e2e8f0';">
                <div style="font-size:1.8rem; margin-bottom:5px;">🛠️</div>
                <div style="font-weight:700; color:#0A2540; font-size:0.88rem; margin-bottom:4px;">Aprendizaje Experiencial</div>
                <div style="font-weight:600; color:#C8102E; font-size:0.8rem; margin-bottom:6px;">J. Dewey</div>
                <div style="font-size:0.78rem; color:#475569; line-height:1.4;">Aprender haciendo, resolviendo situaciones problemáticas directas.</div>
            </div>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:15px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.borderColor='#0A2540';" onmouseout="this.style.transform=''; this.style.borderColor='#e2e8f0';">
                <div style="font-size:1.8rem; margin-bottom:5px;">🧩</div>
                <div style="font-weight:700; color:#0A2540; font-size:0.88rem; margin-bottom:4px;">A. Basado en Problemas</div>
                <div style="font-weight:600; color:#C8102E; font-size:0.8rem; margin-bottom:6px;">H. Barrows</div>
                <div style="font-size:0.78rem; color:#475569; line-height:1.4;">ABP como articulador práctico de casos profesionales de estudio.</div>
            </div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:12px;">
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:15px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.borderColor='#0A2540';" onmouseout="this.style.transform=''; this.style.borderColor='#e2e8f0';">
                <div style="font-size:1.8rem; margin-bottom:5px;">📊</div>
                <div style="font-weight:700; color:#0A2540; font-size:0.88rem; margin-bottom:4px;">Taxonomía Cognitiva</div>
                <div style="font-weight:600; color:#C8102E; font-size:0.8rem; margin-bottom:6px;">B. Bloom</div>
                <div style="font-size:0.78rem; color:#475569; line-height:1.4;">Niveles del pensamiento: recordar, comprender, aplicar, analizar, evaluar, crear.</div>
            </div>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:15px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.borderColor='#0A2540';" onmouseout="this.style.transform=''; this.style.borderColor='#e2e8f0';">
                <div style="font-size:1.8rem; margin-bottom:5px;">🎯</div>
                <div style="font-weight:700; color:#0A2540; font-size:0.88rem; margin-bottom:4px;">Enfoque por Competencias</div>
                <div style="font-weight:600; color:#C8102E; font-size:0.8rem; margin-bottom:6px;">S. Tobón</div>
                <div style="font-size:0.78rem; color:#475569; line-height:1.4;">Socioformación orientada a formar profesionales idóneos ante desafíos reales.</div>
            </div>
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:15px; text-align:center; transition:transform 0.3s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.borderColor='#0A2540';" onmouseout="this.style.transform=''; this.style.borderColor='#e2e8f0';">
                <div style="font-size:1.8rem; margin-bottom:5px;">🔄</div>
                <div style="font-weight:700; color:#0A2540; font-size:0.88rem; margin-bottom:4px;">Flexibilidad Curricular</div>
                <div style="font-weight:600; color:#C8102E; font-size:0.8rem; margin-bottom:6px;">J. Arnaz</div>
                <div style="font-size:0.78rem; color:#475569; line-height:1.4;">Trayectos y créditos académicos adaptables a la realidad de cada estudiante.</div>
            </div>
        </div>
        
        <!-- Galería de imágenes sustentadoras reales de la PPTX -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:25px; border-top:1px solid #e5e7eb; padding-top:20px;">
            <div style="background:#fcfcfc; border:1px solid #e2e8f0; border-radius:10px; padding:15px; text-align:center;">
                <h4 style="color:#0A2540; font-size:0.95rem; font-weight:700; margin-top:0; margin-bottom:10px;">Sustentos del Modelo (Pilar Visual)</h4>
                <div style="display:flex; justify-content:center; gap:10px;">
                    <img src="assets/virtual_slides/virtual_slide_2_img_0.png" alt="Sustentos Modelo 1" style="max-height:140px; border-radius:6px; border:1px solid #ddd; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
                    <img src="assets/virtual_slides/virtual_slide_2_img_1.png" alt="Sustentos Modelo 2" style="max-height:140px; border-radius:6px; border:1px solid #ddd; box-shadow:0 2px 5px rgba(0,0,0,0.05);" onerror="this.style.display='none';">
                </div>
            </div>
            <div style="background:#fcfcfc; border:1px solid #e2e8f0; border-radius:10px; padding:15px; text-align:center;">
                <h4 style="color:#0A2540; font-size:0.95rem; font-weight:700; margin-top:0; margin-bottom:10px;">Referentes Conceptuales e Hitos (PPTX)</h4>
                <div style="display:flex; justify-content:center; gap:10px;">
                    <img src="assets/virtual_slides/virtual_slide_3_img_0.png" alt="Conceptos 1" style="max-height:140px; border-radius:6px; border:1px solid #ddd; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
                    <img src="assets/virtual_slides/virtual_slide_3_img_1.png" alt="Conceptos 2" style="max-height:140px; border-radius:6px; border:1px solid #ddd; box-shadow:0 2px 5px rgba(0,0,0,0.05);" onerror="this.style.display='none';">
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ==================== TAB: LAS 4 DIMENSIONES ==================== -->
<div id="virtualTab_dimensiones" class="virtual-tab-content" style="display:none;">
    <div style="background:linear-gradient(135deg, #0A2540 0%, #173A66 100%); color:white; border-radius:16px; padding:30px; margin-bottom:25px;">
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:15px;">
            <div style="width:50px; height:50px; background:rgba(200,16,46,0.2); border:2px solid #C8102E; border-radius:50%; display:flex; align-items:center; justify-content:center;"><i class="fas fa-cubes style='color:#C8102E; font-size:1.3rem;'"></i></div>
            <div>
                <h3 style="font-weight:800; font-size:1.5rem; margin:0;">Estructura Tridimensional Integrada</h3>
                <p style="color:#94a3b8; margin:0; font-size:0.9rem;">Las 4 Dimensiones Habilitadoras de la Virtualidad de la TO</p>
            </div>
        </div>
        <p style="margin:0; font-size:1rem; line-height:1.6; color:#e2e8f0; text-align:justify;">
            La educación virtual en la institución se gestiona y audita a través de **cuatro dimensiones operativas y estratégicas**. Ninguna funciona de forma aislada; coexisten para asegurar un servicio académico robusto, legal, pedagógico e interactivo.
        </p>
    </div>

    <!-- Cuadrantes de Dimensiones -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:25px;">
        <!-- Dimensión Pedagógica -->
        <div class="card" style="border-left:5px solid #C8102E; padding:22px; transition:transform 0.3s; cursor:pointer;" onmouseover="this.style.transform='scale(1.02)';" onmouseout="this.style.transform='';">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
                <span style="font-size:1.8rem;">👩‍🏫</span>
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin:0;">Dimensión Pedagógica</h4>
            </div>
            <p style="color:#4b5563; font-size:0.88rem; line-height:1.6; text-align:justify; margin:0;">
                Permite definir **qué tecnologías** pueden ser parte del proceso enseñanza - aprendizaje y **cómo** se establecerán las relaciones comunicativas entre los diferentes elementos del acto educativo (docentes, estudiantes y contenidos). Define los lineamientos del aula virtual.
            </p>
        </div>

        <!-- Dimensión Comunicativa -->
        <div class="card" style="border-left:5px solid #0A2540; padding:22px; transition:transform 0.3s; cursor:pointer;" onmouseover="this.style.transform='scale(1.02)';" onmouseout="this.style.transform='';">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
                <span style="font-size:1.8rem;">💬</span>
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin:0;">Dimensión Comunicativa</h4>
            </div>
            <p style="color:#4b5563; font-size:0.88rem; line-height:1.6; text-align:justify; margin:0;">
                Permite regular la **interacción real** entre docente y estudiante. Define la caracterización de herramientas de mensajería sincrónica/asincrónica, los tipos de recursos, derechos de autor, canales institucionales de comunicación, tiempos formales de respuesta y modos de propiciar el trabajo colaborativo.
            </p>
        </div>

        <!-- Dimensión Tecnológica -->
        <div class="card" style="border-left:5px solid #d97706; padding:22px; transition:transform 0.3s; cursor:pointer;" onmouseover="this.style.transform='scale(1.02)';" onmouseout="this.style.transform='';">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
                <span style="font-size:1.8rem;">💻</span>
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin:0;">Dimensión Tecnológica</h4>
            </div>
            <p style="color:#4b5563; font-size:0.88rem; line-height:1.6; text-align:justify; margin:0;">
                Permite definir las herramientas y servicios de **hardware, software y conectividad** bajo estrictos estándares de calidad. Abarca sistemas de información académica, la infraestructura de red, la plataforma virtual (LMS Moodle), la biblioteca virtual integrada, el soporte técnico y la seguridad integral de la información.
            </p>
        </div>

        <!-- Dimensión Organizacional -->
        <div class="card" style="border-left:5px solid #16a34a; padding:22px; transition:transform 0.3s; cursor:pointer;" onmouseover="this.style.transform='scale(1.02)';" onmouseout="this.style.transform='';">
            <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
                <span style="font-size:1.8rem;">🏛️</span>
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin:0;">Dimensión Organizacional</h4>
            </div>
            <p style="color:#4b5563; font-size:0.88rem; line-height:1.6; text-align:justify; margin:0;">
                Establece las **políticas institucionales y lineamientos formales** para la virtualidad. Estructura el organigrama y responsabilidades de la dependencia encargada de la modalidad virtual, y define los mecanismos para garantizar el **Bienestar Universitario Virtual** en cobertura, permanencia e inclusión.
            </p>
        </div>
    </div>

    <!-- Gráfico/Imagen de Dimensiones (Soporte real de la PPTX) -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; text-align:center;">
        <h4 style="color:#0A2540; font-weight:700; font-size:1.2rem; margin-top:0; margin-bottom:15px; text-align:left;">
            <i class="fas fa-project-diagram mr-2" style="color:#C8102E;"></i>Esquema de las Dimensiones (Fidelidad PPTX)
        </h4>
        <div style="background:#fafafa; border:1px solid #e5e7eb; border-radius:8px; padding:15px; display:inline-block; max-width:600px; width:100%;">
            <img src="assets/virtual_slides/virtual_slide_7_img_0.jpg" alt="Dimensión del Sistema de Educación Virtual" style="width:100%; border-radius:6px; display:block; margin:0 auto;" onerror="this.src='assets/virtual_slides/virtual_slide_20_img_0.jpg';">
        </div>
        <p style="color:#6b7280; font-size:0.82rem; margin:10px 0 0; font-style:italic;">Mapa visual de interacción de las cuatro dimensiones en el Sistema de Educación Virtual de la TO.</p>
    </div>
</div>

<!-- ==================== TAB: DIMENSIÓN PEDAGÓGICA Y CURRÍCULO ==================== -->
<div id="virtualTab_pedagogica" class="virtual-tab-content" style="display:none;">
    <!-- Sub-menú Interno para navegación interna de la pestaña -->
    <div style="display:grid; grid-template-columns:1fr 1fr 1.2fr 1fr; gap:8px; margin-bottom:20px; border-bottom:1px solid #ddd; padding-bottom:12px;">
        <button class="v-subtab-btn active" onclick="window.switchVirtualSubtab('actores', this)" style="padding:8px 12px; background:#0A2540; color:white; border:none; border-radius:6px; cursor:pointer; font-weight:700; font-size:0.8rem; transition:0.2s;"><i class="fas fa-users mr-1"></i> Actores & Roles</button>
        <button class="v-subtab-btn" onclick="window.switchVirtualSubtab('estructura', this)" style="padding:8px 12px; background:#f3f4f6; color:#374151; border:none; border-radius:6px; cursor:pointer; font-weight:700; font-size:0.8rem; transition:0.2s;"><i class="fas fa-sitemap mr-1"></i> Estructura Módulos</button>
        <button class="v-subtab-btn" onclick="window.switchVirtualSubtab('creditos', this)" style="padding:8px 12px; background:#f3f4f6; color:#374151; border:none; border-radius:6px; cursor:pointer; font-weight:700; font-size:0.8rem; transition:0.2s;"><i class="fas fa-clock mr-1"></i> Créditos & Actividades</button>
        <button class="v-subtab-btn" onclick="window.switchVirtualSubtab('evaluacion', this)" style="padding:8px 12px; background:#f3f4f6; color:#374151; border:none; border-radius:6px; cursor:pointer; font-weight:700; font-size:0.8rem; transition:0.2s;"><i class="fas fa-clipboard-check mr-1"></i> Eval. & Resultados</button>
    </div>

    <!-- SUB-TAB: ACTORES & ROLES -->
    <div id="v_subtab_actores" class="v-subtab-content" style="display:block;">
        <div style="display:grid; grid-template-columns:1fr 1.5fr; gap:25px; align-items:start;">
            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px;"><i class="fas fa-users-cog mr-2" style="color:#C8102E;"></i>Tríada Pedagógica</h4>
                <p style="color:#4b5563; font-size:0.85rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                    En la **Dimensión Pedagógica**, la acción educativa gira en torno al **ecosistema de educación virtual** como conjunto de herramientas, estrategias y recursos prácticos. Sus componentes clave son:
                </p>
                <div style="display:grid; gap:10px;">
                    <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:8px;">
                        <span style="font-weight:700; color:#0A2540; font-size:0.9rem;">👥 Actores Críticos</span>
                        <p style="margin:4px 0 0 0; font-size:0.8rem; color:#64748b;">Estudiantes, Docentes y Asesores.</p>
                    </div>
                    <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:8px;">
                        <span style="font-weight:700; color:#C8102E; font-size:0.9rem;">📝 Proceso Académico</span>
                        <p style="margin:4px 0 0 0; font-size:0.8rem; color:#64748b;">Metodologías, medios y mediaciones pedagógicas interactivas.</p>
                    </div>
                    <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:8px;">
                        <span style="font-weight:700; color:#d97706; font-size:0.9rem;">🌐 Ambientes de Aprendizaje</span>
                        <p style="margin:4px 0 0 0; font-size:0.8rem; color:#64748b;">Aulas virtuales y ecosistema digital facilitador del conocimiento.</p>
                    </div>
                </div>
                <!-- Imágenes de actores del PPTX -->
                <div style="display:flex; justify-content:center; gap:8px; margin-top:15px; background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px;">
                    <img src="assets/virtual_slides/virtual_slide_8_img_0.jpg" alt="Actores 1" style="height:60px; border-radius:4px;">
                    <img src="assets/virtual_slides/virtual_slide_8_img_1.jpg" alt="Actores 2" style="height:60px; border-radius:4px;" onerror="this.style.display='none';">
                    <img src="assets/virtual_slides/virtual_slide_8_img_2.jpg" alt="Actores 3" style="height:60px; border-radius:4px;" onerror="this.style.display='none';">
                </div>
            </div>

            <!-- Roles de Soporte y Acompañamiento -->
            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px;"><i class="fas fa-id-badge mr-2" style="color:#0A2540;"></i>Roles de Acompañamiento Académico y Extraclase</h4>
                <p style="color:#4b5563; font-size:0.85rem; line-height:1.5; margin-bottom:15px;">
                    Para evitar la deserción y garantizar el éxito estudiantil, la TO cuenta con un equipo estructurado de soporte de **siete perfiles** especializados:
                </p>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                    <div style="background:#eff6ff; border-radius:8px; padding:10px; border-left:3px solid #3b82f6;">
                        <span style="font-weight:700; color:#0A2540; font-size:0.82rem;">🎓 Experto Temático</span>
                        <p style="margin:2px 0 0 0; font-size:0.75rem; color:#475569;">Crea, actualiza y valida los contenidos teóricos y prácticos de cada asignatura.</p>
                    </div>
                    <div style="background:#eff6ff; border-radius:8px; padding:10px; border-left:3px solid #3b82f6;">
                        <span style="font-weight:700; color:#0A2540; font-size:0.82rem;">🗣️ Expositor</span>
                        <p style="margin:2px 0 0 0; font-size:0.75rem; color:#475569;">Docente que dinamiza los encuentros sincrónicos y explica los conceptos complejos.</p>
                    </div>
                    <div style="background:#eff6ff; border-radius:8px; padding:10px; border-left:3px solid #3b82f6;">
                        <span style="font-weight:700; color:#0A2540; font-size:0.82rem;">👔 Líder de Área</span>
                        <p style="margin:2px 0 0 0; font-size:0.75rem; color:#475569;">Coordina e integra las materias de un mismo componente de formación.</p>
                    </div>
                    <div style="background:#fef2f2; border-radius:8px; padding:10px; border-left:3px solid #C8102E;">
                        <span style="font-weight:700; color:#C8102E; font-size:0.82rem;">💡 Apoyo Extracurricular</span>
                        <p style="margin:2px 0 0 0; font-size:0.75rem; color:#475569;">Tutorías de refuerzo disciplinar para estudiantes con dificultades.</p>
                    </div>
                    <div style="background:#fef2f2; border-radius:8px; padding:10px; border-left:3px solid #C8102E;">
                        <span style="font-weight:700; color:#C8102E; font-size:0.82rem;">💙 Bienestar Virtual</span>
                        <p style="margin:2px 0 0 0; font-size:0.75rem; color:#475569;">Desarrollo humano, actividades culturales, psicológicas y de salud online.</p>
                    </div>
                    <div style="background:#fef2f2; border-radius:8px; padding:10px; border-left:3px solid #C8102E;">
                        <span style="font-weight:700; color:#C8102E; font-size:0.82rem;">🎯 Permanencia Estudiantil</span>
                        <p style="margin:2px 0 0 0; font-size:0.75rem; color:#475569;">Monitoreo preventivo del rendimiento y alerta temprana de deserción.</p>
                    </div>
                </div>
                <div style="background:#fafafa; border:1px solid #e5e7eb; border-radius:8px; padding:10px; margin-top:12px; display:flex; justify-content:space-around; align-items:center;">
                    <span style="font-weight:700; color:#d97706; font-size:0.82rem;">🛠️ Asesores Extraclase</span>
                    <div style="display:flex; gap:4px; max-height:40px; overflow:hidden;">
                        <!-- Img reales de la diapositiva 9 -->
                        <img src="assets/virtual_slides/virtual_slide_9_img_0.jpg" style="height:35px; border-radius:50%;" onerror="this.style.display='none';">
                        <img src="assets/virtual_slides/virtual_slide_9_img_1.jpg" style="height:35px; border-radius:50%;" onerror="this.style.display='none';">
                        <img src="assets/virtual_slides/virtual_slide_9_img_2.jpg" style="height:35px; border-radius:50%;" onerror="this.style.display='none';">
                        <img src="assets/virtual_slides/virtual_slide_9_img_3.png" style="height:35px; border-radius:50%;" onerror="this.style.display='none';">
                        <img src="assets/virtual_slides/virtual_slide_9_img_4.jpg" style="height:35px; border-radius:50%;" onerror="this.style.display='none';">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- SUB-TAB: ESTRUCTURA MÓDULOS -->
    <div id="v_subtab_estructura" class="v-subtab-content" style="display:none;">
        <div style="display:grid; grid-template-columns:1fr 1.2fr; gap:25px; align-items:start;">
            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px;"><i class="fas fa-sitemap mr-2" style="color:#C8102E;"></i>Estructura del Plan de Estudios</h4>
                <p style="color:#4b5563; font-size:0.85rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                    El plan de estudios del programa virtual está estrictamente mapeado para garantizar la navegabilidad y la coherencia curricular en el campus digital.
                </p>
                <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_10_img_0.png" alt="Estructura de los Planes de Estudio" style="max-width:100%; max-height:280px; border-radius:4px;">
                </div>
            </div>

            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px;"><i class="fas fa-laptop mr-2" style="color:#0A2540;"></i>Estructura de los Módulos Académicos</h4>
                <p style="color:#4b5563; font-size:0.85rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                    Cada asignatura o módulo cargado en la plataforma virtual cuenta con componentes estandarizados y plantillas institucionales de contenido temático:
                </p>
                <ul style="color:#374151; font-size:0.82rem; line-height:1.6; padding-left:20px; margin-bottom:15px; display:grid; gap:6px;">
                    <li><strong style="color:#0A2540;">Estructura de Presentación:</strong> Datos generales, presentación docente, justificación de la materia, competencias y resultados de aprendizaje a evaluar.</li>
                    <li><strong style="color:#C8102E;">Plantilla de Contenido Temático:</strong> Guía estructurada del módulo teórico, lecturas fundamentales y material multimedia de base.</li>
                </ul>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_11_img_0.png" alt="Estructura Módulos 1" style="max-width:100%; border-radius:4px;">
                    <img src="assets/virtual_slides/virtual_slide_11_img_1.png" alt="Estructura Módulos 2" style="max-width:100%; border-radius:4px;" onerror="this.style.display='none';">
                </div>
            </div>
        </div>
    </div>

    <!-- SUB-TAB: CRÉDITOS & ACTIVIDADES -->
    <div id="v_subtab_creditos" class="v-subtab-content" style="display:none;">
        <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:25px; align-items:start;">
            <!-- Distribución de Créditos -->
            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:22px;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px;"><i class="fas fa-clock mr-2" style="color:#C8102E;"></i>Distribución de Créditos Académicos (Relación Directa)</h4>
                <p style="color:#4b5563; font-size:0.88rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                    La TO aplica la normatividad nacional de créditos de forma estricta, traduciéndolo en una fórmula precisa de acompañamiento docente y trabajo autónomo:
                </p>
                <div style="background:linear-gradient(135deg, #0A2540, #173A66); color:white; border-radius:10px; padding:20px; text-align:center; margin-bottom:15px;">
                    <div style="font-size:1.5rem; font-weight:800; color:#fbbf24; margin-bottom:5px;">1 CRÉDITO ACADÉMICO = 48 HORAS</div>
                    <p style="font-size:0.82rem; color:#cbd5e1; margin:0;">Total de horas de esfuerzo estimadas para el estudiante</p>
                </div>
                
                <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:12px; margin-bottom:15px;">
                    <div style="background:#eff6ff; border-radius:8px; padding:12px; border-left:4px solid #3b82f6;">
                        <span style="font-weight:700; color:#1e40af; font-size:0.85rem;">👨‍🏫 Trabajo Directo</span>
                        <div style="font-size:1.4rem; font-weight:800; color:#0A2540; margin:5px 0;">12 Horas</div>
                        <p style="margin:0; font-size:0.75rem; color:#475569;">Acompañamiento directo, tutoría sincrónica o clase espejo del profesor.</p>
                    </div>
                    <div style="background:#f0fdf4; border-radius:8px; padding:12px; border-left:4px solid #16a34a;">
                        <span style="font-weight:700; color:#166534; font-size:0.85rem;">💻 Trabajo Autónomo</span>
                        <div style="font-size:1.4rem; font-weight:800; color:#0A2540; margin:5px 0;">36 Horas</div>
                        <p style="margin:0; font-size:0.75rem; color:#475569;">Estudio independiente, lecturas, laboratorios, talleres y foros.</p>
                    </div>
                </div>

                <div style="background:#fef3c7; border:1px solid #fde68a; border-radius:8px; padding:12px; border-left:4px solid #d97706; font-size:0.82rem; color:#78350f; font-weight:600;">
                    <i class="fas fa-balance-scale mr-1"></i> Relación Exacta: Por 1 hora de acompañamiento docente presencial/sincrónico, el estudiante invierte 2 horas de aprendizaje autónomo (Relación 1:2).
                </div>
            </div>

            <!-- Actividades de Aprendizaje -->
            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:22px; text-align:center;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px; text-align:left;"><i class="fas fa-tasks mr-2" style="color:#0A2540;"></i>Actividades de Aprendizaje Integradas</h4>
                <p style="color:#4b5563; font-size:0.85rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                    Las actividades se estructuran en el aula virtual de forma secuencial y por unidades para propiciar el autoaprendizaje controlado y la co-evaluación grupal.
                </p>
                <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px; display:inline-block; width:100%;">
                    <img src="assets/virtual_slides/virtual_slide_12_img_0.png" alt="Actividades de Aprendizaje" style="width:100%; border-radius:4px;">
                </div>
            </div>
        </div>
    </div>

    <!-- SUB-TAB: EVALUACIÓN & RESULTADOS -->
    <div id="v_subtab_evaluacion" class="v-subtab-content" style="display:none;">
        <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:25px; align-items:start;">
            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:22px;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px;"><i class="fas fa-clipboard-check mr-2" style="color:#C8102E;"></i>Modelo de Evaluación de Aprendizajes</h4>
                <p style="color:#4b5563; font-size:0.85rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                    El modelo de evaluación virtual de la TO está **centrado en competencias y resultados de aprendizaje (RAP)** y cuenta con pilares sólidos:
                </p>

                <!-- Finalidad -->
                <div style="margin-bottom:15px; border-left:3px solid #0A2540; padding-left:12px;">
                    <span style="font-weight:700; color:#0A2540; font-size:0.88rem; text-transform:uppercase; letter-spacing:0.5px;">🎯 Finalidad de la Evaluación</span>
                    <ul style="margin:5px 0 0 0; padding-left:18px; font-size:0.8rem; color:#475569; display:grid; gap:4px; list-style-type:circle;">
                        <li>Basado en la **mejora continua** del aprendizaje del estudiante.</li>
                        <li>Centrado en la **resolución de problemas** y proyectos reales.</li>
                        <li>Permite **múltiples formas de evaluación** (autoevaluación, coevaluación y heteroevaluación).</li>
                        <li>Incorpora herramientas digitales éticas e **Inteligencia Artificial**.</li>
                    </ul>
                </div>

                <!-- 3 Niveles -->
                <div style="margin-bottom:15px; border-left:3px solid #C8102E; padding-left:12px;">
                    <span style="font-weight:700; color:#C8102E; font-size:0.88rem; text-transform:uppercase; letter-spacing:0.5px;">📈 Tres Niveles de Medición</span>
                    <div style="display:flex; gap:8px; margin-top:6px;">
                        <span style="background:#eff6ff; color:#1e40af; font-size:0.75rem; font-weight:700; padding:4px 8px; border-radius:4px; border:1px solid #bfdbfe;"><strong style="color:#C8102E;">01</strong> Cognitivo</span>
                        <span style="background:#f0fdf4; color:#166534; font-size:0.75rem; font-weight:700; padding:4px 8px; border-radius:4px; border:1px solid #bbf7d0;"><strong style="color:#C8102E;">02</strong> Procedimental</span>
                        <span style="background:#fffbeb; color:#854d0e; font-size:0.75rem; font-weight:700; padding:4px 8px; border-radius:4px; border:1px solid #fde68a;"><strong style="color:#C8102E;">03</strong> Valorativo</span>
                    </div>
                </div>

                <!-- Estrategias -->
                <div style="border-left:3px solid #d97706; padding-left:12px;">
                    <span style="font-weight:700; color:#d97706; font-size:0.88rem; text-transform:uppercase; letter-spacing:0.5px;">🛠️ Estrategias de Evaluación</span>
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-top:6px; font-size:0.78rem; font-weight:700; color:#374151;">
                        <div style="background:#fafafa; border:1px solid #e5e7eb; padding:6px 10px; border-radius:4px;">📜 Rúbricas analíticas estandarizadas</div>
                        <div style="background:#fafafa; border:1px solid #e5e7eb; padding:6px 10px; border-radius:4px;">❓ Bancos de preguntas y test controlados</div>
                        <div style="background:#fafafa; border:1px solid #e5e7eb; padding:6px 10px; border-radius:4px;">💬 Foros temáticos de discusión guiada</div>
                        <div style="background:#fafafa; border:1px solid #e5e7eb; padding:6px 10px; border-radius:4px;">🧪 Laboratorios y simuladores virtuales</div>
                    </div>
                </div>
            </div>

            <!-- Gráfico/Imagen de Evaluación -->
            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:22px; text-align:center;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px; text-align:left;"><i class="fas fa-chart-line mr-2" style="color:#0A2540;"></i>Sistema & Métodos (PPTX)</h4>
                <p style="color:#4b5563; font-size:0.85rem; line-height:1.5; text-align:justify; margin-bottom:12px;">
                    La plataforma inyecta de forma integrada el sistema de evaluación en cada actividad interactiva calificada:
                </p>
                <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:8px; display:grid; gap:8px;">
                    <img src="assets/virtual_slides/virtual_slide_13_img_0.png" style="max-height:50px; object-fit:contain; margin:0 auto;" onerror="this.style.display='none';">
                    <img src="assets/virtual_slides/virtual_slide_14_img_0.png" alt="Sistema de Evaluación" style="width:100%; border-radius:4px;">
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ==================== TAB: DISEÑO INSTRUCCIONAL & PRODUCCIÓN ==================== -->
<div id="virtualTab_instruccional" class="virtual-tab-content" style="display:none;">
    <div style="display:grid; grid-template-columns:1fr 1.2fr; gap:25px; margin-bottom:25px; align-items:start;">
        <!-- Modelo ADDIE -->
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.02);">
            <h3 style="color:#0A2540; font-weight:800; font-size:1.3rem; margin-top:0; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:8px;">
                <i class="fas fa-pencil-ruler mr-2" style="color:#C8102E;"></i>Modelo Instruccional ADDIE
            </h3>
            <p style="color:#4b5563; font-size:0.92rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                La virtualización de contenidos se fundamenta en el internacional **Modelo de Diseño Instruccional ADDIE** y está regido por los *Lineamientos de Educación Virtual* y los *Lineamientos de Virtualización de Recursos Digitales* de la TO.
            </p>
            
            <div style="display:grid; gap:8px; margin-bottom:15px;">
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #3b82f6; padding:8px 12px; border-radius:6px; font-size:0.82rem;">
                    <strong>🇩 Análisis:</strong> Identificación del perfil estudiantil y necesidades temáticas reales del entorno laboral.
                </div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #10b981; padding:8px 12px; border-radius:6px; font-size:0.82rem;">
                    <strong>🇩 Diseño:</strong> Estructuración formal de la asignatura, objetivos y resultados de aprendizaje (RAP).
                </div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #fbbf24; padding:8px 12px; border-radius:6px; font-size:0.82rem;">
                    <strong>🇩 Desarrollo:</strong> Creación y producción pedagógica, visual y multimedia de los contenidos teóricos.
                </div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #f87171; padding:8px 12px; border-radius:6px; font-size:0.82rem;">
                    <strong>🇩 Implementación:</strong> Despliegue técnico y publicación formal del aula virtual en la plataforma Moodle.
                </div>
                <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:4px solid #8b5cf6; padding:8px 12px; border-radius:6px; font-size:0.82rem;">
                    <strong>🇩 Evaluación:</strong> Medición integral y auditoría de la efectividad y pertinencia en la transferencia del saber.
                </div>
            </div>

            <!-- Íconos ADDIE del PPTX -->
            <div style="display:flex; justify-content:center; gap:8px; background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px;">
                <img src="assets/virtual_slides/virtual_slide_16_img_0.png" style="height:35px;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_16_img_1.png" style="height:35px;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_16_img_2.png" style="height:35px;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_16_img_3.png" style="height:35px;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_16_img_4.png" style="height:35px;" onerror="this.style.display='none';">
            </div>
        </div>

        <!-- Modelo de Producción -->
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.02); text-align:center;">
            <h3 style="color:#0A2540; font-weight:700; font-size:1.15rem; margin-top:0; margin-bottom:15px; text-align:left;">
                <i class="fas fa-users-cog mr-2" style="color:#FF6600;"></i>Modelo de Producción (Fidelidad Visual)
            </h3>
            <p style="color:#4b5563; font-size:0.85rem; line-height:1.6; text-align:justify; margin-bottom:12px;">
                Enfoque altamente estructurado y centrado en el usuario (User-Centered Design) buscando mejorar la experiencia de aprendizaje estudiantil y asegurar la **relevancia inmediata** de las asignaturas en el sector laboral:
            </p>
            <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:8px;">
                <img src="assets/virtual_slides/virtual_slide_17_img_0.png" alt="Modelo de Producción" style="max-width:100%; max-height:220px; border-radius:4px; display:block; margin:0 auto;" onerror="this.src='assets/virtual_slides/virtual_slide_18_img_0.png';">
            </div>
            <p style="color:#6b7280; font-size:0.75rem; margin:8px 0 0; font-style:italic;">Esquema de virtualización con enfoque centrado en la usabilidad y experiencia.</p>
        </div>
    </div>

    <!-- Proceso de Producción de Materiales (Timeline Interactivo) -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.02);">
        <h3 style="color:#0A2540; font-weight:800; font-size:1.3rem; margin-top:0; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:8px;">
            <i class="fas fa-stream mr-2" style="color:#C8102E;"></i>Proceso de Producción y Virtualización de Materiales Académicos
        </h3>
        <p style="color:#374151; font-size:0.95rem; line-height:1.6; margin-bottom:20px;">
            El flujo de producción de cada recurso de aprendizaje virtual se organiza en **tres fases estrictas**, involucrando a un equipo de especialistas de forma secuencial y coordinada:
        </p>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:15px; margin-bottom:20px;">
            <!-- Preproducción -->
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:18px; border-top:4px solid #0A2540;">
                <span style="background:#0A2540; color:white; font-size:0.72rem; font-weight:700; padding:2px 8px; border-radius:4px; text-transform:uppercase;">FASE 1</span>
                <h4 style="color:#0A2540; font-weight:700; font-size:1.05rem; margin:8px 0 6px;">Preproducción</h4>
                <p style="font-size:0.8rem; color:#4b5563; line-height:1.5; margin-bottom:12px; min-height:48px;">
                    Planificación pedagógica, validación y diseño conceptual de las asignaturas.
                </p>
                <div style="border-top:1px solid #e2e8f0; padding-top:10px;">
                    <span style="font-weight:700; font-size:0.75rem; color:#0A2540; text-transform:uppercase;">👥 Roles Activos:</span>
                    <ul style="margin:5px 0 0 0; padding-left:15px; font-size:0.78rem; color:#374151; display:grid; gap:3px;">
                        <li>👨‍💼 Líder Pedagógico</li>
                        <li>🎓 Expertos Temáticos</li>
                        <li>🤝 Par Académico</li>
                        <li>✍️ Asesor Pedagógico</li>
                    </ul>
                </div>
            </div>

            <!-- Producción -->
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:18px; border-top:4px solid #C8102E;">
                <span style="background:#C8102E; color:white; font-size:0.72rem; font-weight:700; padding:2px 8px; border-radius:4px; text-transform:uppercase;">FASE 2</span>
                <h4 style="color:#C8102E; font-weight:700; font-size:1.05rem; margin:8px 0 6px;">Producción</h4>
                <p style="font-size:0.8rem; color:#4b5563; line-height:1.5; margin-bottom:12px; min-height:48px;">
                    Diseño instruccional, maquetación, producción multimedia, diseño visual y desarrollo de código.
                </p>
                <div style="border-top:1px solid #e2e8f0; padding-top:10px;">
                    <span style="font-weight:700; font-size:0.75rem; color:#C8102E; text-transform:uppercase;">👥 Roles Activos:</span>
                    <ul style="margin:5px 0 0 0; padding-left:15px; font-size:0.78rem; color:#374151; display:grid; gap:3px;">
                        <li>🎨 Diseñadores Gráficos</li>
                        <li>✍️ Diseñador Instruccional</li>
                        <li>📹 Productores de Audio y Video</li>
                        <li>💻 Maquetadores y Vinculadores</li>
                    </ul>
                </div>
            </div>

            <!-- Posproducción -->
            <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:10px; padding:18px; border-top:4px solid #16a34a;">
                <span style="background:#16a34a; color:white; font-size:0.72rem; font-weight:700; padding:2px 8px; border-radius:4px; text-transform:uppercase;">FASE 3</span>
                <h4 style="color:#16a34a; font-weight:700; font-size:1.05rem; margin:8px 0 6px;">Posproducción</h4>
                <p style="font-size:0.8rem; color:#4b5563; line-height:1.5; margin-bottom:12px; min-height:48px;">
                    Aseguramiento de la calidad, curaduría final, vinculación al LMS Moodle y retroalimentación académica.
                </p>
                <div style="border-top:1px solid #e2e8f0; padding-top:10px;">
                    <span style="font-weight:700; font-size:0.75rem; color:#16a34a; text-transform:uppercase;">👥 Roles Activos:</span>
                    <ul style="margin:5px 0 0 0; padding-left:15px; font-size:0.78rem; color:#374151; display:grid; gap:3px;">
                        <li>✍️ Asesor Pedagógico</li>
                        <li>🔍 Curador de Contenido</li>
                        <li>🎓 Expertos Temáticos</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Mapeo de caras del equipo de producción (Slide 19) -->
        <div style="background:#fafafa; border:1px solid #e5e7eb; border-radius:10px; padding:15px; text-align:center;">
            <h5 style="color:#0A2540; font-size:0.85rem; font-weight:700; margin-top:0; margin-bottom:10px; text-align:left;">
                <i class="fas fa-users mr-1" style="color:#FF6600;"></i>Equipo Real de Virtualización (Soporte Técnico de la TO)
            </h5>
            <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:8px;">
                <img src="assets/virtual_slides/virtual_slide_19_img_0.jpg" title="Líder Pedagógico" style="height:45px; width:45px; border-radius:50%; object-fit:cover; border:2px solid #0A2540;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_19_img_1.jpg" title="Experto Temático" style="height:45px; width:45px; border-radius:50%; object-fit:cover; border:2px solid #0A2540;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_19_img_2.jpg" title="Par Académico" style="height:45px; width:45px; border-radius:50%; object-fit:cover; border:2px solid #0A2540;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_19_img_3.jpg" title="Asesor Pedagógico" style="height:45px; width:45px; border-radius:50%; object-fit:cover; border:2px solid #0A2540;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_19_img_4.jpg" title="Diseñador Instruccional" style="height:45px; width:45px; border-radius:50%; object-fit:cover; border:2px solid #C8102E;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_19_img_5.jpg" title="Diseñador Gráfico" style="height:45px; width:45px; border-radius:50%; object-fit:cover; border:2px solid #C8102E;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_19_img_6.jpg" title="Productor de Audio/Video" style="height:45px; width:45px; border-radius:50%; object-fit:cover; border:2px solid #C8102E;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_19_img_7.jpg" title="Maquetador" style="height:45px; width:45px; border-radius:50%; object-fit:cover; border:2px solid #C8102E;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_19_img_9.jpg" title="Curador" style="height:45px; width:45px; border-radius:50%; object-fit:cover; border:2px solid #16a34a;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_19_img_10.jpg" title="Maquetador y Vinculador" style="height:45px; width:45px; border-radius:50%; object-fit:cover; border:2px solid #C8102E;" onerror="this.style.display='none';">
            </div>
            <p style="color:#6b7280; font-size:0.75rem; margin:8px 0 0 0; font-style:italic;">Alineación interdisciplinar que valida la calidad académica y técnica de cada recurso publicado.</p>
        </div>
    </div>
</div>

<!-- ==================== TAB: CAMPUS & ECOSISTEMA ==================== -->
<div id="virtualTab_campus" class="virtual-tab-content" style="display:none;">
    <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:25px; margin-bottom:25px; align-items:start;">
        <!-- Campus Virtual LMS -->
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.02);">
            <h3 style="color:#0A2540; font-weight:800; font-size:1.3rem; margin-top:0; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:8px;">
                <i class="fas fa-globe mr-2" style="color:#C8102E;"></i>El Campus Virtual de la TO
            </h3>
            <p style="color:#374151; font-size:0.95rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                El **Campus Virtual de la Corporación Escuela Tecnológica del Oriente** es un entorno digital de aprendizaje diseñado para ofrecer educación de calidad en la modalidad virtual. 
            </p>
            <div style="background:#eff6ff; border-left:4px solid #1e40af; border-radius:6px; padding:12px; margin-bottom:15px; font-size:0.88rem; color:#1e3a8a; line-height:1.5;">
                <i class="fas fa-check-circle mr-1"></i> Proporciona a estudiantes, docentes y administrativos un **ecosistema interactivo y flexible** que facilita el acceso al conocimiento y la formación académica desde cualquier lugar y en cualquier momento.
            </div>

            <!-- Carrusel de imágenes reales de la plataforma virtual y aulas (Slide 21, 22, 23) -->
            <h4 style="color:#0A2540; font-size:1rem; font-weight:700; margin-top:0; margin-bottom:10px;"><i class="fas fa-images mr-1" style="color:#FF6600;"></i>Galería del Ecosistema de Aulas e Interfaz LMS Moodle</h4>
            
            <div style="position:relative; width:100%; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden; background:#000;">
                <!-- Slides del carrusel -->
                <div class="virtual-slide-img" style="display:block; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_21_img_0.png" alt="Campus Virtual 1" style="width:100%; max-height:220px; object-fit:contain;">
                    <div style="background:rgba(0,0,0,0.8); color:white; font-size:0.75rem; padding:6px; font-weight:600;">Vista de Ingreso del Campus Virtual TO</div>
                </div>
                <div class="virtual-slide-img" style="display:none; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_22_img_0.png" alt="Campus Virtual 2" style="width:100%; max-height:220px; object-fit:contain;" onerror="this.src='assets/virtual_slides/virtual_slide_22_img_1.png';">
                    <div style="background:rgba(0,0,0,0.8); color:white; font-size:0.75rem; padding:6px; font-weight:600;">Estructura Intermitente del Campus</div>
                </div>
                <div class="virtual-slide-img" style="display:none; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_23_img_0.png" alt="Aula Virtual" style="width:100%; max-height:220px; object-fit:contain;">
                    <div style="background:rgba(0,0,0,0.8); color:white; font-size:0.75rem; padding:6px; font-weight:600;">Detalle del Aula Virtual Integrada</div>
                </div>

                <!-- Botones de Navegación del Carrusel -->
                <button onclick="window.moveVirtualSlide(-1)" style="position:absolute; left:10px; top:50%; transform:translateY(-50%); background:rgba(0,0,0,0.5); color:white; border:none; border-radius:50%; width:30px; height:30px; cursor:pointer; font-weight:bold; display:flex; align-items:center; justify-content:center;">&lt;</button>
                <button onclick="window.moveVirtualSlide(1)" style="position:absolute; right:10px; top:50%; transform:translateY(-50%); background:rgba(0,0,0,0.5); color:white; border:none; border-radius:50%; width:30px; height:30px; cursor:pointer; font-weight:bold; display:flex; align-items:center; justify-content:center;">&gt;</button>
            </div>
        </div>

        <!-- Infraestructura Tecnológica -->
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.02);">
            <h3 style="color:#0A2540; font-weight:800; font-size:1.3rem; margin-top:0; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:8px;">
                <i class="fas fa-server mr-2" style="color:#C8102E;"></i>Infraestructura Tecnológica
            </h3>
            <p style="color:#4b5563; font-size:0.92rem; line-height:1.5; text-align:justify; margin-bottom:15px;">
                El soporte de conectividad y servidores garantiza disponibilidad permanente del **99.9%** (alta redundancia) y almacenamiento seguro de datos históricos de los estudiantes.
            </p>
            <div style="background:#fafafa; border:1px solid #e5e7eb; border-radius:8px; padding:10px; text-align:center; margin-bottom:15px;">
                <img src="assets/virtual_slides/virtual_slide_25_img_0.png" alt="Infraestructura Tecnológica" style="width:100%; max-height:220px; object-fit:contain;" onerror="this.src='assets/virtual_slides/virtual_slide_25_img_3.png';">
            </div>

            <!-- Dimensión Organizacional (Pilares 01 a 05) -->
            <h4 style="color:#0A2540; font-size:0.95rem; font-weight:700; margin-top:0; margin-bottom:10px;"><i class="fas fa-building mr-1" style="color:#0A2540;"></i>Dimensión Organizacional (Estructura de Apoyo)</h4>
            <div style="display:flex; justify-content:center; gap:10px; background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:8px;">
                <img src="assets/virtual_slides/virtual_slide_27_img_0.png" title="Soporte 1" style="height:30px;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_27_img_1.png" title="Soporte 2" style="height:30px;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_27_img_2.png" title="Soporte 3" style="height:30px;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_27_img_3.png" title="Soporte 4" style="height:30px;" onerror="this.style.display='none';">
                <img src="assets/virtual_slides/virtual_slide_27_img_4.png" title="Soporte 5" style="height:30px;" onerror="this.style.display='none';">
            </div>
        </div>
    </div>

    <!-- Cierre Formal y Agradecimientos de la PPTX -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.02); text-align:center;">
        <div style="background:#0A2540; border-radius:10px; padding:15px; max-width:400px; margin:0 auto; box-shadow:0 4px 10px rgba(0,0,0,0.15);">
            <img src="assets/virtual_slides/virtual_slide_28_img_0.png" alt="Agradecimientos TO" style="width:100%; border-radius:6px; display:block; margin:0 auto;">
        </div>
        <p style="color:#6b7280; font-size:0.8rem; margin:10px 0 0; font-style:italic;">"El Sistema de Educación Virtual de la TO agradece su atención en esta sustentación técnica."</p>
    </div>
</div>
`;

// =====================================================
// NAVEGACIÓN POR PESTAÑAS (GLOBAL)
// =====================================================
window.switchVirtualTab = function(tabId) {
    document.querySelectorAll('.virtual-tab-content').forEach(function(el) {
        el.style.display = 'none';
    });
    document.querySelectorAll('.virtual-tab-btn').forEach(function(btn) {
        btn.style.background = '#e5e7eb';
        btn.style.color = '#374151';
    });
    var tab = document.getElementById('virtualTab_' + tabId);
    if (tab) tab.style.display = 'block';
    
    var buttons = document.querySelectorAll('.virtual-tab-btn');
    var tabNames = ['modelo', 'dimensiones', 'pedagogica', 'instruccional', 'campus'];
    var idx = tabNames.indexOf(tabId);
    if (idx >= 0 && buttons[idx]) {
        buttons[idx].style.background = '#0A2540';
        buttons[idx].style.color = 'white';
    }
};

// =====================================================
// NAVEGACIÓN SUB-PESTAÑAS INTERNAS DE LA D. PEDAGÓGICA
// =====================================================
window.switchVirtualSubtab = function(subtabId, btnEl) {
    document.querySelectorAll('.v-subtab-content').forEach(function(el) {
        el.style.display = 'none';
    });
    document.querySelectorAll('.v-subtab-btn').forEach(function(btn) {
        btn.style.background = '#f3f4f6';
        btn.style.color = '#374151';
    });
    
    var tab = document.getElementById('v_subtab_' + subtabId);
    if (tab) tab.style.display = 'block';
    
    if (btnEl) {
        btnEl.style.background = '#0A2540';
        btnEl.style.color = 'white';
    }
};

// =====================================================
// LÓGICA DE CARRUSEL (CAMPUS VIRTUAL)
// =====================================================
window._virtualSlideIdx = 0;

window.moveVirtualSlide = function(dir) {
    var slides = document.querySelectorAll('.virtual-slide-img');
    if (slides.length === 0) return;
    
    slides[window._virtualSlideIdx].style.display = 'none';
    window._virtualSlideIdx += dir;
    
    if (window._virtualSlideIdx >= slides.length) {
        window._virtualSlideIdx = 0;
    }
    if (window._virtualSlideIdx < 0) {
        window._virtualSlideIdx = slides.length - 1;
    }
    
    slides[window._virtualSlideIdx].style.display = 'block';
};

// =====================================================
// INICIALIZACIÓN
// =====================================================
window.virtualInit = function() {
    window.switchVirtualTab('modelo');
    window.switchVirtualSubtab('actores');
    window._virtualSlideIdx = 0;
    var slides = document.querySelectorAll('.virtual-slide-img');
    slides.forEach(function(s, idx) {
        s.style.display = (idx === 0) ? 'block' : 'none';
    });
};
