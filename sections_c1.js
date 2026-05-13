window.SECTIONS=window.SECTIONS||{};
window.c1OpenTab=function(id,btn){document.querySelectorAll('.c1pane').forEach(p=>{p.style.display='none'});document.querySelectorAll('.c1tab').forEach(b=>{b.classList.remove('active')});var p=document.getElementById(id);if(p)p.style.display='block';if(btn)btn.classList.add('active');};
window.c1Accordion=function(id,ico){var c=document.getElementById(id),i=document.getElementById(ico);if(!c)return;var o=c.style.maxHeight&&c.style.maxHeight!='0px';document.querySelectorAll('.c1acc').forEach(el=>el.style.maxHeight='0px');document.querySelectorAll('.c1aco').forEach(el=>el.style.transform='');if(!o){c.style.maxHeight='400px';if(i)i.style.transform='rotate(180deg)';}};
window.c1Init=function(){var b=document.querySelector('.c1tab');if(b)window.c1OpenTab('c1t1',b);else setTimeout(window.c1Init,150);};
window.SECTIONS.c1=`
<style>
.c1tab{padding:10px 20px;border:none;background:#f1f5f9;border-radius:10px;cursor:pointer;font-weight:700;color:#64748b;transition:all .3s;font-size:.9rem}
.c1tab.active{background:#0A2540;color:white}
.c1pane{display:none;animation:c1fi .4s ease}
@keyframes c1fi{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
.c1card{background:white;border:1px solid #e2e8f0;border-radius:14px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,.04)}
.c1kpi{display:flex;align-items:center;gap:16px;background:white;border:1px solid #e2e8f0;border-radius:14px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,.04)}
.c1icon{width:48px;height:48px;border-radius:10px;background:#fff7ed;display:flex;align-items:center;justify-content:center;color:#FF6600;font-size:1.2rem;flex-shrink:0}
.c1acc{overflow:hidden;max-height:0;transition:max-height .4s ease;background:#f8fafc;border-radius:0 0 10px 10px;padding:0 20px}
.c1arow{background:white;border:1px solid #e2e8f0;border-radius:10px;margin-bottom:8px;overflow:hidden}
.c1arow button{width:100%;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;border:none;background:transparent;cursor:pointer;font-weight:700;color:#0A2540;text-align:left}
.c1aco{transition:transform .3s;color:#94a3b8}
.c1trend{background:white;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;transition:transform .3s}
.c1trend:hover{transform:translateY(-4px)}
.c1cuoc{display:flex;align-items:center;gap:12px;padding:10px;border-radius:8px;transition:background .2s}
.c1cuoc:hover{background:#f8fafc}
</style>

<div style="border-bottom:3px solid #C8102E;padding-bottom:15px;margin-bottom:25px">
  <div style="color:#C8102E;font-weight:700;text-transform:uppercase;font-size:.85rem;letter-spacing:1px">Condición 1</div>
  <h1 style="color:#0A2540;font-size:2.2rem;margin:0;font-weight:800">Denominación del Programa</h1>
</div>

<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:28px">
  <button class="c1tab active" onclick="c1OpenTab('c1t1',this)"><i class="fas fa-list-check mr-2"></i>Ficha Técnica</button>
  <button class="c1tab" onclick="c1OpenTab('c1t2',this)"><i class="fas fa-bullseye mr-2"></i>Correspondencia</button>
  <button class="c1tab" onclick="c1OpenTab('c1t3',this)"><i class="fas fa-chart-line mr-2"></i>Tendencias</button>
  <button class="c1tab" onclick="c1OpenTab('c1t4',this)"><i class="fas fa-scale-balanced mr-2"></i>Marco Normativo</button>
</div>

<!-- TAB 1: FICHA TÉCNICA -->
<div id="c1t1" class="c1pane" style="display:block">
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px">
    <div class="c1kpi"><div class="c1icon"><i class="fas fa-graduation-cap"></i></div><div><div style="font-size:.7rem;color:#94a3b8;font-weight:700;text-transform:uppercase">Título</div><div style="font-weight:800;color:#0A2540">Ingeniero Industrial</div></div></div>
    <div class="c1kpi"><div class="c1icon"><i class="fas fa-laptop-code"></i></div><div><div style="font-size:.7rem;color:#94a3b8;font-weight:700;text-transform:uppercase">Modalidad</div><div style="font-weight:800;color:#0A2540">Virtual</div></div></div>
    <div class="c1kpi"><div class="c1icon"><i class="fas fa-clock"></i></div><div><div style="font-size:.7rem;color:#94a3b8;font-weight:700;text-transform:uppercase">Créditos / Duración</div><div style="font-weight:800;color:#0A2540">144 Cr / 8 Sem.</div></div></div>
    <div class="c1kpi"><div class="c1icon"><i class="fas fa-users"></i></div><div><div style="font-size:.7rem;color:#94a3b8;font-weight:700;text-transform:uppercase">Admisión Semestral</div><div style="font-weight:800;color:#0A2540">140 Estudiantes</div></div></div>
  </div>
  <div class="c1card">
    <div style="background:#0A2540;color:white;margin:-20px -20px 20px;padding:16px 20px;border-radius:14px 14px 0 0;border-bottom:4px solid #FF6600;font-weight:700;font-size:1.05rem"><i class="fas fa-network-wired mr-2"></i>Clasificación y Normatividad</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;divide-x:1px solid #e2e8f0">
      <div style="padding-right:30px;display:flex;flex-direction:column;gap:18px">
        <div><div style="color:#FF6600;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:1px">Nivel de Formación</div><div style="font-weight:600">Pregrado Universitario</div></div>
        <div><div style="color:#FF6600;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:1px">Campo Amplio</div><div style="font-weight:600">Ingeniería, Industria y Construcción</div></div>
        <div><div style="color:#FF6600;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:1px">Campo Específico</div><div style="font-weight:600">Ingeniería y profesiones afines</div></div>
        <div><div style="color:#FF6600;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:1px">Campo Detallado</div><div style="font-weight:600">Ingeniería y profesiones afines n.c.o.p.</div></div>
      </div>
      <div style="padding-left:30px;border-left:1px solid #e2e8f0;display:flex;flex-direction:column;gap:18px">
        <div><div style="color:#FF6600;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:1px">Área de Conocimiento</div><div style="font-weight:600">Ingeniería, arquitectura, urbanismo y afines</div></div>
        <div><div style="color:#FF6600;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:1px">Núcleo Básico del Conocimiento</div><div style="font-weight:600">Ingeniería industrial y afines</div></div>
        <div><div style="color:#FF6600;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:1px">Adscripción / Periodicidad</div><div style="font-weight:600">Escuela de Ingenierías | Admisión Semestral</div></div>
        <div><div style="color:#FF6600;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:1px">Norma Interna</div><div style="font-weight:600">Acuerdos 011, 021, 03 — Consejo Superior</div></div>
      </div>
    </div>
  </div>
</div>

<!-- TAB 2: CORRESPONDENCIA -->
<div id="c1t2" class="c1pane">
  <div style="display:grid;grid-template-columns:1fr 2fr;gap:20px">
    <div style="background:#0A2540;color:white;padding:25px;border-radius:16px">
      <h3 style="color:#FF6600;font-weight:800;margin:0 0 15px">El Enfoque Principal</h3>
      <p style="font-size:.9rem;line-height:1.7;color:#cbd5e1">La modalidad virtual y el diseño curricular enfatizan la <strong style="color:white">optimización de procesos, gestión de recursos, productividad y eficiencia</strong>, integrando la <strong style="color:white">Revolución 4.0</strong> (IA, Big Data, Simulación).</p>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
      <div class="c1card" style="border-left:4px solid #FF6600"><i class="fas fa-diagram-project" style="color:#FF6600;font-size:1.3rem"></i><h4 style="margin:10px 0 5px;color:#0A2540;font-weight:700">Diseño y Optimización</h4><div style="background:#f1f5f9;border-radius:6px;padding:6px;font-size:.75rem;margin-bottom:8px">Procesos Ind., Distribución Planta, Inv. Operaciones</div><p style="font-size:.85rem;color:#475569">Herramientas para analizar, modelar y mejorar sistemas productivos y logísticos.</p></div>
      <div class="c1card" style="border-left:4px solid #0A2540"><i class="fas fa-microchip" style="color:#0A2540;font-size:1.3rem"></i><h4 style="margin:10px 0 5px;color:#0A2540;font-weight:700">Gestión Tecnológica</h4><div style="background:#f1f5f9;border-radius:6px;padding:6px;font-size:.75rem;margin-bottom:8px">Big Data, Inteligencia Artificial, Simulación</div><p style="font-size:.85rem;color:#475569">Competencias para aplicar tecnologías avanzadas en toma de decisiones.</p></div>
      <div class="c1card" style="border-left:4px solid #10b981"><i class="fas fa-leaf" style="color:#10b981;font-size:1.3rem"></i><h4 style="margin:10px 0 5px;color:#0A2540;font-weight:700">Sostenibilidad & RSE</h4><div style="background:#f1f5f9;border-radius:6px;padding:6px;font-size:.75rem;margin-bottom:8px">Desarrollo Sostenible, Gestión Proyectos, Bioética</div><p style="font-size:.85rem;color:#475569">Soluciones industriales con impacto social y ambiental positivo.</p></div>
      <div class="c1card" style="border-left:4px solid #8B5CF6"><i class="fas fa-lightbulb" style="color:#8B5CF6;font-size:1.3rem"></i><h4 style="margin:10px 0 5px;color:#0A2540;font-weight:700">Innovación</h4><div style="background:#f1f5f9;border-radius:6px;padding:6px;font-size:.75rem;margin-bottom:8px">Lab. Innovación, Emprendimiento, Formulación Proyectos</div><p style="font-size:.85rem;color:#475569">Pensamiento creativo y capacidad de liderar proyectos disruptivos.</p></div>
    </div>
  </div>
</div>

<!-- TAB 3: TENDENCIAS -->
<div id="c1t3" class="c1pane">
  <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-bottom:28px">
    <div class="c1trend"><div style="height:110px;background:linear-gradient(135deg,#0A2540,#1e40af);display:flex;align-items:center;justify-content:center;font-size:2rem;color:white"><i class="fas fa-robot"></i></div><div style="padding:14px"><h4 style="font-weight:700;font-size:.9rem;color:#0A2540;margin:0 0 6px">1. Industria 4.0</h4><p style="font-size:.78rem;color:#64748b">IoT, automatización e IA aplicados a sistemas productivos.</p></div></div>
    <div class="c1trend"><div style="height:110px;background:linear-gradient(135deg,#065f46,#059669);display:flex;align-items:center;justify-content:center;font-size:2rem;color:white"><i class="fas fa-recycle"></i></div><div style="padding:14px"><h4 style="font-weight:700;font-size:.9rem;color:#0A2540;margin:0 0 6px">2. Sostenibilidad</h4><p style="font-size:.78rem;color:#64748b">Diseño de procesos sostenibles y minimización de huella ecológica.</p></div></div>
    <div class="c1trend"><div style="height:110px;background:linear-gradient(135deg,#1e3a8a,#3b82f6);display:flex;align-items:center;justify-content:center;font-size:2rem;color:white"><i class="fas fa-chart-line"></i></div><div style="padding:14px"><h4 style="font-weight:700;font-size:.9rem;color:#0A2540;margin:0 0 6px">3. Optimización</h4><p style="font-size:.78rem;color:#64748b">Lean Manufacturing, Six Sigma y simulación operativa.</p></div></div>
    <div class="c1trend"><div style="height:110px;background:linear-gradient(135deg,#4c1d95,#8B5CF6);display:flex;align-items:center;justify-content:center;font-size:2rem;color:white"><i class="fas fa-truck-fast"></i></div><div style="padding:14px"><h4 style="font-weight:700;font-size:.9rem;color:#0A2540;margin:0 0 6px">4. Supply Chain</h4><p style="font-size:.78rem;color:#64748b">Logística e inventarios con tecnologías digitales.</p></div></div>
    <div class="c1trend"><div style="height:110px;background:linear-gradient(135deg,#9a3412,#FF6600);display:flex;align-items:center;justify-content:center;font-size:2rem;color:white"><i class="fas fa-lightbulb"></i></div><div style="padding:14px"><h4 style="font-weight:700;font-size:.9rem;color:#0A2540;margin:0 0 6px">5. Innovación</h4><p style="font-size:.78rem;color:#64748b">Emprendimiento y pensamiento disruptivo.</p></div></div>
  </div>
  <div style="background:#0A2540;color:white;border-radius:16px;padding:28px">
    <h3 style="color:#FF6600;font-weight:800;margin:0 0 20px"><i class="fas fa-map-location-dot mr-2"></i>Alineación con Planes de Desarrollo 2024-2027</h3>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
      <div style="display:flex;gap:14px"><div style="background:rgba(255,255,255,.1);width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fas fa-building" style="color:#FF6600"></i></div><div><h4 style="font-weight:700;margin:0 0 4px">Bogotá D.C.</h4><p style="color:#94a3b8;font-size:.85rem;margin:0">"Bogotá Camina Segura": Hub de tecnología, digitalización y automatización industrial sostenible.</p></div></div>
      <div style="display:flex;gap:14px"><div style="background:rgba(255,255,255,.1);width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fas fa-industry" style="color:#FF6600"></i></div><div><h4 style="font-weight:700;margin:0 0 4px">Antioquia</h4><p style="color:#94a3b8;font-size:.85rem;margin:0">"Por Antioquia Firme": Competitividad e integración de tecnologías avanzadas en manufactura local.</p></div></div>
      <div style="display:flex;gap:14px"><div style="background:rgba(255,255,255,.1);width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fas fa-boxes-stacked" style="color:#FF6600"></i></div><div><h4 style="font-weight:700;margin:0 0 4px">Valle del Cauca</h4><p style="color:#94a3b8;font-size:.85rem;margin:0">Reindustrialización y modernización de cadenas de suministro con enfoque sostenible.</p></div></div>
      <div style="display:flex;gap:14px"><div style="background:rgba(255,255,255,.1);width:36px;height:36px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0"><i class="fas fa-anchor" style="color:#FF6600"></i></div><div><h4 style="font-weight:700;margin:0 0 4px">Atlántico / Bucaramanga</h4><p style="color:#94a3b8;font-size:.85rem;margin:0">Fortalecimiento logístico-portuario e innovación tecnológica para la mejora continua.</p></div></div>
    </div>
  </div>
</div>

<!-- TAB 4: MARCO NORMATIVO -->
<div id="c1t4" class="c1pane">
  <div style="display:grid;grid-template-columns:2fr 1fr;gap:24px">
    <div>
      <div class="c1arow"><button onclick="c1Accordion('ca1','ci1')"><span><i class="fas fa-book-open" style="color:#FF6600;margin-right:10px"></i>Ley 30 de 1992 & Ley 115 de 1994</span><i id="ci1" class="fas fa-chevron-down c1aco"></i></button><div id="ca1" class="c1acc"><p style="padding:15px 0;font-size:.9rem;color:#475569;line-height:1.7">Organizan el servicio público de la Educación Superior. Establecen principios, objetivos y tipos de instituciones, garantizando el pleno desarrollo del estudiante.</p></div></div>
      <div class="c1arow"><button onclick="c1Accordion('ca2','ci2')"><span><i class="fas fa-hard-hat" style="color:#FF6600;margin-right:10px"></i>Ley 842 de 2003 — Ley de los Ingenieros</span><i id="ci2" class="fas fa-chevron-down c1aco"></i></button><div id="ca2" class="c1acc"><p style="padding:15px 0;font-size:.9rem;color:#475569;line-height:1.7">Regula el ejercicio de la ingeniería en Colombia. Establece requisitos para la titulación y condiciones técnicas, éticas y legales para el ejercicio profesional (vigilado por COPNIA).</p></div></div>
      <div class="c1arow"><button onclick="c1Accordion('ca3','ci3')"><span><i class="fas fa-file-signature" style="color:#FF6600;margin-right:10px"></i>Decreto 1330 de 2019 & Ley 1188 de 2008</span><i id="ci3" class="fas fa-chevron-down c1aco"></i></button><div id="ca3" class="c1acc"><p style="padding:15px 0;font-size:.9rem;color:#475569;line-height:1.7">Establece los criterios para la obtención del Registro Calificado. Exige estándares básicos de calidad, resultados de aprendizaje medibles y coherencia curricular.</p></div></div>
      <div class="c1arow"><button onclick="c1Accordion('ca4','ci4')"><span><i class="fas fa-gear" style="color:#FF6600;margin-right:10px"></i>Resoluciones 12535 (2020) & 2265 (2023)</span><i id="ci4" class="fas fa-chevron-down c1aco"></i></button><div id="ca4" class="c1acc"><p style="padding:15px 0;font-size:.9rem;color:#475569;line-height:1.7"><strong>Res 12535:</strong> Lineamientos para Ingeniería (competencias básicas, ética, RSE, innovación).<br><strong>Res 2265:</strong> Nuevos lineamientos para Registros Calificados en modalidades presenciales y <strong>virtuales</strong>.</p></div></div>
    </div>
    <div class="c1card">
      <div style="background:#0A2540;color:white;margin:-20px -20px 18px;padding:16px 20px;border-radius:14px 14px 0 0;font-weight:700"><i class="fas fa-briefcase mr-2" style="color:#FF6600"></i>Perfil CUOC</div>
      <p style="font-size:.75rem;color:#64748b;margin:0 0 14px">Clasificación Única de Ocupaciones (Alineado CIUO/UNESCO)</p>
      <div class="c1cuoc"><span style="background:#0A2540;color:white;font-size:.72rem;font-weight:700;padding:3px 8px;border-radius:5px;flex-shrink:0">2141</span><span style="font-size:.85rem;font-weight:600">Ingenieros Industriales y de Producción</span></div>
      <div class="c1cuoc"><span style="background:#e2e8f0;color:#0A2540;font-size:.72rem;font-weight:700;padding:3px 8px;border-radius:5px;flex-shrink:0">2141.01</span><span style="font-size:.85rem">Ingeniero de Producción</span></div>
      <div class="c1cuoc"><span style="background:#e2e8f0;color:#0A2540;font-size:.72rem;font-weight:700;padding:3px 8px;border-radius:5px;flex-shrink:0">2141.02</span><span style="font-size:.85rem">Ingeniero de Procesos</span></div>
      <div class="c1cuoc"><span style="background:#e2e8f0;color:#0A2540;font-size:.72rem;font-weight:700;padding:3px 8px;border-radius:5px;flex-shrink:0">2141.03</span><span style="font-size:.85rem">Ingeniero de Calidad</span></div>
      <div class="c1cuoc"><span style="background:#e2e8f0;color:#0A2540;font-size:.72rem;font-weight:700;padding:3px 8px;border-radius:5px;flex-shrink:0">2141.04</span><span style="font-size:.85rem">Ingeniero en Logística</span></div>
      <div style="border-top:1px solid #e2e8f0;margin:10px 0 10px"></div>
      <div class="c1cuoc"><span style="background:#0A2540;color:white;font-size:.72rem;font-weight:700;padding:3px 8px;border-radius:5px;flex-shrink:0">2149</span><span style="font-size:.85rem;font-weight:600">Otros Ingenieros (Func. técnicas)</span></div>
      <div class="c1cuoc"><span style="background:#e2e8f0;color:#0A2540;font-size:.72rem;font-weight:700;padding:3px 8px;border-radius:5px;flex-shrink:0">2149.02</span><span style="font-size:.85rem">Consultor en Org. Industrial</span></div>
      <div class="c1cuoc"><span style="background:#0A2540;color:white;font-size:.72rem;font-weight:700;padding:3px 8px;border-radius:5px;flex-shrink:0">1211</span><span style="font-size:.85rem;font-weight:600">Directores de Empresas de Producción</span></div>
    </div>
  </div>
</div>
`;
window.c1Init();
