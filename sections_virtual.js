// ===================================================================
// SECCIÓN: SISTEMA DE EDUCACIÓN VIRTUAL — PORTAL INTERACTIVO
// Fuente: Sistema de Educación Virtual.pptx (28 slides completos)
// ===================================================================
window.SECTIONS = window.SECTIONS || {};

window.SECTIONS.virtual = `
<div class="slide-header" style="border-bottom: 3px solid #C8102E; padding-bottom: 15px; margin-bottom: 25px;">
    <div style="display:flex; align-items:center; gap:15px; margin-bottom:10px;">
        <div style="background:white; padding:6px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.12); display:flex; align-items:center; justify-content:center; width:65px; height:65px;">
            <img src="https://campusvirtual.tecnologicadeloriente.edu.co/pluginfile.php/1/theme_edmo/mobile_logo/1772556380/logo%2Bvertical-1920w.jpg" alt="Logo TO" style="max-height:100%; max-width:100%; object-fit:contain;">
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
        <div style="position:absolute; top:0; right:0; width:40%; height:100%; opacity:0.15; background:url('assets/virtual_slides/virtual_slide_1.png') center/cover;"></div>
        <div style="position:relative; z-index:2; padding:35px 30px; color:white;">
            <div style="display:flex; align-items:center; gap:20px; margin-bottom:20px;">
                <div style="background:white; padding:8px; border-radius:10px; box-shadow:0 4px 15px rgba(0,0,0,0.3); width:80px; height:80px; display:flex; align-items:center; justify-content:center;">
                    <img src="https://campusvirtual.tecnologicadeloriente.edu.co/pluginfile.php/1/theme_edmo/mobile_logo/1772556380/logo%2Bvertical-1920w.jpg" alt="Logo" style="max-height:100%; max-width:100%; object-fit:contain;">
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
                <img src="assets/virtual_slides/virtual_slide_5.png" alt="Esquema Modelo Pedagógico" style="max-width:100%; max-height:280px; border-radius:4px; display:block; margin:0 auto;">
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
                <h4 style="color:#0A2540; font-size:0.95rem; font-weight:700; margin-top:0; margin-bottom:10px;">Sustentos del Modelo (Fidelidad Completa)</h4>
                <div style="display:flex; justify-content:center; gap:10px;">
                    <img src="assets/virtual_slides/virtual_slide_2.png" alt="Sustentos Slide 2" style="max-height:160px; max-width:100%; border-radius:6px; border:1px solid #ddd; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
                </div>
            </div>
            <div style="background:#fcfcfc; border:1px solid #e2e8f0; border-radius:10px; padding:15px; text-align:center;">
                <h4 style="color:#0A2540; font-size:0.95rem; font-weight:700; margin-top:0; margin-bottom:10px;">Referentes e Hitos Conceptuales</h4>
                <div style="display:flex; justify-content:center; gap:10px;">
                    <img src="assets/virtual_slides/virtual_slide_3.png" alt="Referentes Slide 3" style="max-height:160px; max-width:100%; border-radius:6px; border:1px solid #ddd; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ==================== TAB: LAS 4 DIMENSIONES ==================== -->
<div id="virtualTab_dimensiones" class="virtual-tab-content" style="display:none;">
    <div style="background:linear-gradient(135deg, #0A2540 0%, #173A66 100%); color:white; border-radius:16px; padding:30px; margin-bottom:25px;">
        <div style="display:flex; align-items:center; gap:15px; margin-bottom:15px;">
            <div style="width:50px; height:50px; background:rgba(200,16,46,0.2); border:2px solid #C8102E; border-radius:50%; display:flex; align-items:center; justify-content:center;"><i class="fas fa-cubes" style="color:#C8102E; font-size:1.3rem;"></i></div>
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
                Permite definir **qué tecnologías** pueden ser parte del proceso enseñanza - aprendizaje y **cómo** se establecerán las relaciones comunicativas entre los diferentes elements del acto educativo (docentes, estudiantes y contenidos). Define los lineamientos del aula virtual.
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
            <i class="fas fa-project-diagram mr-2" style="color:#C8102E;"></i>Esquema de las Dimensiones (Fidelidad Completa PPTX)
        </h4>
        <div style="background:#fafafa; border:1px solid #e5e7eb; border-radius:8px; padding:15px; display:inline-block; max-width:650px; width:100%;">
            <img src="assets/virtual_slides/virtual_slide_7.png" alt="Dimensión del Sistema de Educación Virtual" style="width:100%; border-radius:6px; display:block; margin:0 auto;">
        </div>
        <p style="color:#6b7280; font-size:0.82rem; margin:10px 0 0; font-style:italic;">Mapa visual completo del Sistema de Educación Virtual en sus cuatro dimensiones.</p>
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
        <div style="display:grid; grid-template-columns:1fr 1.2fr; gap:25px; align-items:start;">
            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px;"><i class="fas fa-users-cog mr-2" style="color:#C8102E;"></i>Tríada Pedagógica</h4>
                <p style="color:#4b5563; font-size:0.85rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                    En la **Dimensión Pedagógica**, la acción educativa gira en torno al **ecosistema de educación virtual** como conjunto de herramientas, estrategias y recursos prácticos. Sus componentes clave son:
                </p>
                <div style="display:grid; gap:10px; margin-bottom:15px;">
                    <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:8px;">
                        <span style="font-weight:700; color:#0A2540; font-size:0.9rem;">👥 Actores Críticos</span>
                        <p style="margin:4px 0 0 0; font-size:0.8rem; color:#64748b;">Estudiantes, Docentes y Asesores.</p>
                    </div>
                    <div style="background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:8px;">
                        <span style="font-weight:700; color:#C8102E; font-size:0.9rem;">📝 Proceso Académico</span>
                        <p style="margin:4px 0 0 0; font-size:0.8rem; color:#64748b;">Metodologías, medios y mediaciones pedagógicas interactivas.</p>
                    </div>
                </div>
                <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_8.png" alt="Dimensión Pedagógica Actores" style="width:100%; border-radius:4px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
                </div>
            </div>

            <!-- Roles de Soporte y Acompañamiento -->
            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px;"><i class="fas fa-id-badge mr-2" style="color:#0A2540;"></i>Roles de Acompañamiento Académico y Extraclase</h4>
                <p style="color:#4b5563; font-size:0.85rem; line-height:1.5; margin-bottom:15px;">
                    Para evitar la deserción y garantizar el éxito estudiantil, la TO cuenta con un equipo estructurado de soporte de **siete perfiles** especializados:
                </p>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:15px;">
                    <div style="background:#eff6ff; border-radius:8px; padding:10px; border-left:3px solid #3b82f6;">
                        <span style="font-weight:700; color:#0A2540; font-size:0.82rem;">🎓 Experto Temático</span>
                        <p style="margin:2px 0 0 0; font-size:0.75rem; color:#475569;">Crea y valida los contenidos teóricos.</p>
                    </div>
                    <div style="background:#eff6ff; border-radius:8px; padding:10px; border-left:3px solid #3b82f6;">
                        <span style="font-weight:700; color:#0A2540; font-size:0.82rem;">🗣️ Expositor</span>
                        <p style="margin:2px 0 0 0; font-size:0.75rem; color:#475569;">Dinamiza los encuentros sincrónicos.</p>
                    </div>
                    <div style="background:#fef2f2; border-radius:8px; padding:10px; border-left:3px solid #C8102E;">
                        <span style="font-weight:700; color:#C8102E; font-size:0.82rem;">💡 Apoyo Extracurricular</span>
                        <p style="margin:2px 0 0 0; font-size:0.75rem; color:#475569;">Refuerzo académico disciplinar.</p>
                    </div>
                    <div style="background:#fef2f2; border-radius:8px; padding:10px; border-left:3px solid #C8102E;">
                        <span style="font-weight:700; color:#C8102E; font-size:0.82rem;">🎯 Permanencia</span>
                        <p style="margin:2px 0 0 0; font-size:0.75rem; color:#475569;">Alertas tempranas de deserción.</p>
                    </div>
                </div>
                <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_9.png" alt="Roles y Apoyo" style="width:100%; border-radius:4px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
                </div>
            </div>
        </div>
    </div>

    <!-- SUB-TAB: ESTRUCTURA MÓDULOS -->
    <div id="v_subtab_estructura" class="v-subtab-content" style="display:none;">
        <div style="display:grid; grid-template-columns:1fr 1.1fr; gap:25px; align-items:start;">
            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px;"><i class="fas fa-sitemap mr-2" style="color:#C8102E;"></i>Estructura de los Planes de Estudio</h4>
                <p style="color:#4b5563; font-size:0.85rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                    El plan de estudios virtual se mapea bajo plantillas estructuradas que facilitan la navegación didáctica.
                </p>
                <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_10.png" alt="Estructura Planes de Estudio" style="width:100%; border-radius:4px;">
                </div>
            </div>

            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px;"><i class="fas fa-laptop mr-2" style="color:#0A2540;"></i>Estructura de Módulos (Plantillas)</h4>
                <p style="color:#4b5563; font-size:0.85rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                    Cada materia o módulo cuenta con elementos de presentación de asignatura y plantillas estructuradas de contenido:
                </p>
                <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_11.png" alt="Estructura Módulos Completa" style="width:100%; border-radius:4px;">
                </div>
            </div>
        </div>
    </div>

    <!-- SUB-TAB: CRÉDITOS & ACTIVIDADES -->
    <div id="v_subtab_creditos" class="v-subtab-content" style="display:none;">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:25px; align-items:start;">
            <!-- Distribución de Créditos -->
            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:22px;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px;"><i class="fas fa-clock mr-2" style="color:#C8102E;"></i>Distribución de Créditos Académicos (Relación Directa)</h4>
                <p style="color:#4b5563; font-size:0.88rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                    La TO aplica la normatividad nacional de créditos (1 crédito = 48 horas de esfuerzo del estudiante, con 12h de trabajo directo y 36h de aprendizaje autónomo):
                </p>
                <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_15.png" alt="Distribución de Créditos Académicos" style="width:100%; border-radius:4px;">
                </div>
            </div>

            <!-- Actividades de Aprendizaje -->
            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:22px; text-align:center;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px; text-align:left;"><i class="fas fa-tasks mr-2" style="color:#0A2540;"></i>Actividades de Aprendizaje Integradas</h4>
                <p style="color:#4b5563; font-size:0.85rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                    Estructuradas en el campus virtual de forma interactiva y secuencial para asegurar la asimilación del conocimiento:
                </p>
                <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_12.png" alt="Actividades de Aprendizaje" style="width:100%; border-radius:4px;">
                </div>
            </div>
        </div>
    </div>

    <!-- SUB-TAB: EVALUACIÓN & RESULTADOS -->
    <div id="v_subtab_evaluacion" class="v-subtab-content" style="display:none;">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:25px; align-items:start;">
            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:22px;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px;"><i class="fas fa-clipboard-check mr-2" style="color:#C8102E;"></i>Modelo de Evaluación y Rúbricas</h4>
                <p style="color:#4b5563; font-size:0.85rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                    El modelo evaluativo integra la mejora continua de forma interactiva en tres niveles formativos:
                </p>
                <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_13.png" alt="Modelo de Evaluación" style="width:100%; border-radius:4px;">
                </div>
            </div>

            <!-- Gráfico/Imagen de Evaluación -->
            <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:22px; text-align:center;">
                <h4 style="color:#0A2540; font-weight:800; font-size:1.15rem; margin-top:0; margin-bottom:12px; text-align:left;"><i class="fas fa-chart-line mr-2" style="color:#0A2540;"></i>Sistema y Ponderación Evaluativa (Fidelidad PPTX)</h4>
                <p style="color:#4b5563; font-size:0.85rem; line-height:1.5; text-align:justify; margin-bottom:15px;">
                    Ponderación, rúbricas analíticas e interactividad del sistema de evaluación de la TO:
                </p>
                <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_14.png" alt="Sistema de Evaluación" style="width:100%; border-radius:4px;">
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ==================== TAB: DISEÑO INSTRUCCIONAL & PRODUCCIÓN ==================== -->
<div id="virtualTab_instruccional" class="virtual-tab-content" style="display:none;">
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:25px; margin-bottom:25px; align-items:start;">
        <!-- Modelo ADDIE -->
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.02);">
            <h3 style="color:#0A2540; font-weight:800; font-size:1.3rem; margin-top:0; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:8px;">
                <i class="fas fa-pencil-ruler mr-2" style="color:#C8102E;"></i>Modelo Instruccional ADDIE (Fidelidad PPTX)
            </h3>
            <p style="color:#4b5563; font-size:0.92rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                La virtualización de contenidos se fundamenta en el **Modelo de Diseño Instruccional ADDIE** y está regido por los lineamientos institucionales:
            </p>
            <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                <img src="assets/virtual_slides/virtual_slide_16.png" alt="Modelo Instruccional ADDIE" style="width:100%; border-radius:4px;">
            </div>
        </div>

        <!-- Modelo de Producción -->
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.02); text-align:center;">
            <h3 style="color:#0A2540; font-weight:700; font-size:1.15rem; margin-top:0; margin-bottom:15px; text-align:left;">
                <i class="fas fa-users-cog mr-2" style="color:#FF6600;"></i>Modelo de Producción (Fidelidad Visual)
            </h3>
            <p style="color:#4b5563; font-size:0.85rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                Enfoque estructurado y centrado en el usuario (User-Centered Design) buscando mejorar la experiencia de aprendizaje estudiantil:
            </p>
            <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                <img src="assets/virtual_slides/virtual_slide_17.png" alt="Modelo de Producción Completo" style="width:100%; border-radius:4px;">
            </div>
        </div>
    </div>

    <!-- Proceso de Producción de Materiales (Timeline Interactivo) -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:25px; margin-bottom:25px; align-items:start;">
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.02);">
            <h3 style="color:#0A2540; font-weight:800; font-size:1.3rem; margin-top:0; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:8px;">
                <i class="fas fa-stream mr-2" style="color:#C8102E;"></i>Proceso de Producción (Fases Pre, Pro y Pos)
            </h3>
            <p style="color:#374151; font-size:0.95rem; line-height:1.6; margin-bottom:15px; text-align:justify;">
                Mapeo del proceso multidisciplinario de virtualización, curaduría de contenidos y maquetación interactiva en el LMS:
            </p>
            <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                <img src="assets/virtual_slides/virtual_slide_19.png" alt="Proceso de Producción de Materiales" style="width:100%; border-radius:4px;">
            </div>
        </div>

        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.02);">
            <h3 style="color:#0A2540; font-weight:800; font-size:1.3rem; margin-top:0; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:8px;">
                <i class="fas fa-search-plus mr-2" style="color:#C8102E;"></i>Etapa de Análisis del Diseño Instruccional
            </h3>
            <p style="color:#374151; font-size:0.95rem; line-height:1.6; margin-bottom:15px; text-align:justify;">
                Detalle específico de la fase de análisis del diseño instruccional del programa virtual:
            </p>
            <div style="background:#fafafa; border:1px solid #e2e8f0; border-radius:8px; padding:10px; text-align:center;">
                <img src="assets/virtual_slides/virtual_slide_18.png" alt="Análisis del Diseño Instruccional" style="width:100%; border-radius:4px;">
            </div>
        </div>
    </div>
</div>

<!-- ==================== TAB: CAMPUS & ECOSISTEMA ==================== -->
<div id="virtualTab_campus" class="virtual-tab-content" style="display:none;">
    <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:25px; margin-bottom:25px; align-items:start;">
        <!-- Campus Virtual LMS -->
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.02);">
            <h3 style="color:#0A2540; font-weight:800; font-size:1.3rem; margin-top:0; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:8px;">
                <i class="fas fa-globe mr-2" style="color:#C8102E;"></i>El Campus Virtual e Interfaces
            </h3>
            <p style="color:#374151; font-size:0.95rem; line-height:1.6; text-align:justify; margin-bottom:15px;">
                Ecosistema flexible, interactivo y adaptativo de la TO. Su diseño asegura navegabilidad intuitiva, soporte las 24 horas y accesibilidad total.
            </p>

            <!-- Carrusel de imágenes reales de la plataforma virtual y aulas (Slide 21, 22, 23) -->
            <h4 style="color:#0A2540; font-size:1rem; font-weight:700; margin-top:0; margin-bottom:12px;"><i class="fas fa-images mr-1" style="color:#FF6600;"></i>Galería Interactiva del Ecosistema de Aulas</h4>
            
            <div style="position:relative; width:100%; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden; background:#fafafa; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
                <!-- Slides del carrusel -->
                <div class="virtual-slide-img" style="display:block; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_21.png" alt="Campus Virtual 1" style="width:100%; max-height:280px; object-fit:contain;">
                    <div style="background:rgba(10,37,64,0.95); color:white; font-size:0.8rem; padding:8px; font-weight:700;">Ingreso al Campus Virtual - TO</div>
                </div>
                <div class="virtual-slide-img" style="display:none; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_22.png" alt="Campus Virtual 2" style="width:100%; max-height:280px; object-fit:contain;">
                    <div style="background:rgba(10,37,64,0.95); color:white; font-size:0.8rem; padding:8px; font-weight:700;">Navegabilidad e Interfaz del Ecosistema</div>
                </div>
                <div class="virtual-slide-img" style="display:none; text-align:center;">
                    <img src="assets/virtual_slides/virtual_slide_23.png" alt="Aula Virtual" style="width:100%; max-height:280px; object-fit:contain;">
                    <div style="background:rgba(10,37,64,0.95); color:white; font-size:0.8rem; padding:8px; font-weight:700;">Estructura del Aula Virtual y Recursos</div>
                </div>

                <!-- Botones de Navegación del Carrusel -->
                <button onclick="window.moveVirtualSlide(-1)" style="position:absolute; left:10px; top:50%; transform:translateY(-50%); background:#0A2540; color:white; border:none; border-radius:50%; width:32px; height:32px; cursor:pointer; font-weight:bold; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 6px rgba(0,0,0,0.3); transition:0.2s;" onmouseover="this.style.background='#C8102E'" onmouseout="this.style.background='#0A2540'">&lt;</button>
                <button onclick="window.moveVirtualSlide(1)" style="position:absolute; right:10px; top:50%; transform:translateY(-50%); background:#0A2540; color:white; border:none; border-radius:50%; width:32px; height:32px; cursor:pointer; font-weight:bold; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 6px rgba(0,0,0,0.3); transition:0.2s;" onmouseover="this.style.background='#C8102E'" onmouseout="this.style.background='#0A2540'">&gt;</button>
            </div>
        </div>

        <!-- Infraestructura Tecnológica -->
        <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:25px; box-shadow:0 4px 12px rgba(0,0,0,0.02);">
            <h3 style="color:#0A2540; font-weight:800; font-size:1.3rem; margin-top:0; margin-bottom:15px; border-bottom:2px solid #C8102E; padding-bottom:8px;">
                <i class="fas fa-server mr-2" style="color:#C8102E;"></i>Infraestructura Tecnológica (Fidelidad PPTX)
            </h3>
            <p style="color:#4b5563; font-size:0.92rem; line-height:1.5; text-align:justify; margin-bottom:15px;">
                Servidores en la nube, plataforma de videoconferencias, biblioteca digital y sistemas antiplagio garantizan un servicio del **99.9%** de disponibilidad:
            </p>
            <div style="background:#fafafa; border:1px solid #e5e7eb; border-radius:8px; padding:10px; text-align:center; margin-bottom:15px;">
                <img src="assets/virtual_slides/virtual_slide_25.png" alt="Infraestructura Tecnológica Completa" style="width:100%; max-height:220px; object-fit:contain;">
            </div>

            <!-- Dimensión Organizacional (Pilares 01 a 05) -->
            <h4 style="color:#0A2540; font-size:0.95rem; font-weight:700; margin-top:0; margin-bottom:10px;"><i class="fas fa-building mr-1" style="color:#0A2540;"></i>Dimensión Organizacional (Estructura de Apoyo)</h4>
            <div style="background:#fafafa; border:1px solid #e5e7eb; border-radius:8px; padding:10px; text-align:center;">
                <img src="assets/virtual_slides/virtual_slide_27.png" alt="Dimensión Organizacional Pilares" style="width:100%; max-height:120px; object-fit:contain;">
            </div>
        </div>
    </div>

    <!-- Cierre Formal y Agradecimientos de la PPTX -->
    <div style="background:white; border:2px solid #e5e7eb; border-radius:12px; padding:20px; box-shadow:0 4px 12px rgba(0,0,0,0.02); text-align:center;">
        <h4 style="color:#0A2540; font-size:1.1rem; font-weight:800; margin-top:0; margin-bottom:15px;"><i class="fas fa-award mr-1" style="color:#C8102E;"></i>Sustentación Técnica de Calidad (TO)</h4>
        <div style="background:#0A2540; border-radius:10px; padding:12px; max-width:400px; margin:0 auto; box-shadow:0 4px 15px rgba(10,37,64,0.15);">
            <img src="assets/virtual_slides/virtual_slide_28.png" alt="Agradecimientos Finales TO" style="width:100%; border-radius:6px; display:block; margin:0 auto;">
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
