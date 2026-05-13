// =====================================================
// SECCIÓN ANEXOS - Funciones definidas GLOBALMENTE
// =====================================================
window.SECTIONS = window.SECTIONS || {};

// Datos de los 25 anexos con rutas EXACTAS
window._anexosData = [
    {n:"Anexo 1",  f:"Anexo 1. Acuerdo de creación.pdf",                                    t:"Acuerdo de Creación del Programa",          cat:"doc", cond:"C1"},
    {n:"Anexo 2",  f:"Anexo 2. Acuerdo de aprobación.pdf",                                  t:"Acuerdo de Aprobación ante el MEN",          cat:"doc", cond:"C1"},
    {n:"Anexo 3",  f:"Anexo 3. Doc. Ingenieria Industrial.pdf",                             t:"Documento Maestro — Ingeniería Industrial",  cat:"doc", cond:"Todas"},
    {n:"Anexo 4",  f:"Anexo 4. Estudio de Pertinencia.pdf",                                 t:"Estudio de Pertinencia",                     cat:"doc", cond:"C2"},
    {n:"Anexo 5",  f:"Anexo 5. Proyecto Educativo Institucional.pdf",                       t:"Proyecto Educativo Institucional (PEI)",     cat:"inst", cond:"C1, C3, C4"},
    {n:"Anexo 6",  f:"Anexo 6. Modelo Pedagógico.pdf",                                      t:"Modelo Pedagógico Institucional",            cat:"inst", cond:"C3, C4"},
    {n:"Anexo 7",  f:"Anexo 7.. Política de Resultados de Aprendizaje Int.pdf",             t:"Política de Resultados de Aprendizaje",      cat:"inst", cond:"C3"},
    {n:"Anexo 8",  f:"Anexo 8. Lin. Programas Academicos Virtual.pdf",                     t:"Lineamiento Programas Virtuales — Parte I",  cat:"inst", cond:"C4, C8"},
    {n:"Anexo 9",  f:"Anexo 9. Lineamiento Educación Virtual_ Ins.pdf",                    t:"Lineamiento Educación Virtual — Parte II",   cat:"inst", cond:"C4, C8"},
    {n:"Anexo 10", f:"Anexo 10. Reglamento Estudiantil.pdf",                                t:"Reglamento Estudiantil",                     cat:"inst", cond:"C4"},
    {n:"Anexo 11", f:"Anexo 11. Syllabus.xlsx",                                             t:"Syllabus del Programa (48 Microcurrículos)", cat:"doc",  cond:"C3"},
    {n:"Anexo 12", f:"Anexo 12. Reglamento de Opción de Grado.pdf",                        t:"Reglamento de Opción de Grado",              cat:"inst", cond:"C4, C5"},
    {n:"Anexo 13", f:"Anexo 13. Instructivo de ingreso a Campus Virtual.pdf",              t:"Instructivo de Ingreso al Campus Virtual",   cat:"inst", cond:"C8"},
    {n:"Anexo 14", f:"Anexo 14. Política de Investigación.pdf",                             t:"Política de Investigación Institucional",    cat:"inv",  cond:"C5"},
    {n:"Anexo 15", f:"Anexo 15. Lineamientos generales de investigación.pdf",              t:"Lineamientos Generales de Investigación",    cat:"inv",  cond:"C5"},
    {n:"Anexo 16", f:"Anexo 16. Lineamiento Relacionamiento-Externo.pdf",                  t:"Lineamiento Relacionamiento con Sector Externo", cat:"ext", cond:"C6"},
    {n:"Anexo 17", f:"Anexo 17. Estatuto Docente (1).pdf",                                 t:"Estatuto Docente",                           cat:"prof", cond:"C7"},
    {n:"Anexo 18", f:"Anexo 18. Lineamiento de Distribución de Planes de Trabajo.pdf",    t:"Distribución de Planes de Trabajo Docente",  cat:"prof", cond:"C7"},
    {n:"Anexo 19", f:"Anexo 19. Hojas de vida.pdf",                                        t:"Hojas de Vida — Cuerpo Docente",             cat:"prof", cond:"C7"},
    {n:"Anexo 20", f:"Anexo 20.  Lineamiento de Virtualización de Recursos Digitales.pdf", t:"Virtualización de Recursos Educativos",      cat:"infra", cond:"C8"},
    {n:"Anexo 21", f:"Anexo 21. Contrato E-Libro.pdf",                                     t:"Contrato Biblioteca Digital E-Libro",        cat:"infra", cond:"C8"},
    {n:"Anexo 22", f:"Anexo 22. Contrato SEDE A.pdf",                                      t:"Contrato de Arrendamiento — Sede A",         cat:"infra", cond:"C9"},
    {n:"Anexo 23", f:"Anexo 23. Uso de suelo y Lic. de Construcicón.pdf",                 t:"Certificado Uso de Suelo y Licencia",        cat:"infra", cond:"C9"},
    {n:"Anexo 24", f:"Anexo 24. Contrato sede C.pdf",                                      t:"Contrato de Arrendamiento — Sede C",         cat:"infra", cond:"C9"},
    {n:"Anexo 25", f:"Anexo 25.  ConvenioSEDE B.pdf",                                      t:"Convenio de Uso — Sede B",                   cat:"infra", cond:"C9"}
];

var catColors = {
    doc:   {bg:"#C8102E", label:"Programa"},
    inst:  {bg:"#0A2540", label:"Institucional"},
    inv:   {bg:"#8B5CF6", label:"Investigación"},
    ext:   {bg:"#F59E0B", label:"Externo"},
    prof:  {bg:"#FF6600", label:"Profesores"},
    infra: {bg:"#06B6D4", label:"Infraestructura"}
};

// Función global para toggle del accordion
window.anexoToggle = function(i) {
    var body = document.getElementById('axb_' + i);
    var icon = document.getElementById('axi_' + i);
    if (!body) return;
    var isOpen = body.style.display === 'block';
    body.style.display = isOpen ? 'none' : 'block';
    if (icon) icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
};

// Función que renderiza la lista de anexos
window.renderAnexos = function() {
    var el = document.getElementById('anexosList');
    if (!el) return;
    var html = '';
    window._anexosData.forEach(function(a, i) {
        var cc = catColors[a.cat] || {bg:"#64748b", label:a.cat};
        // URL relativa: los PDFs están en la raíz del repo, la página está en /presentacion/
        var url = encodeURIComponent(a.f);
        html += '<div style="background:white;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:10px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,0.04);transition:box-shadow .3s" onmouseenter="this.style.boxShadow=\'0 6px 20px rgba(0,0,0,0.1)\'" onmouseleave="this.style.boxShadow=\'0 2px 6px rgba(0,0,0,0.04)\'">';
        html += '<div onclick="anexoToggle(' + i + ')" style="display:flex;align-items:center;padding:16px 20px;cursor:pointer;gap:14px;user-select:none">';
        html += '<span style="background:'+cc.bg+';color:white;font-weight:700;font-size:.75rem;padding:5px 11px;border-radius:8px;min-width:72px;text-align:center;flex-shrink:0">'+a.n+'</span>';
        html += '<span style="flex:1;font-weight:600;color:#0A2540;font-size:.97rem">'+a.t+'</span>';
        html += '<span style="background:#f1f5f9;color:#64748b;font-size:.7rem;padding:3px 8px;border-radius:6px;margin-right:8px">'+cc.label+'</span>';
        html += '<span style="font-size:.75rem;background:#eff6ff;color:#1e40af;padding:3px 8px;border-radius:6px;margin-right:10px">'+a.cond+'</span>';
        html += '<i id="axi_'+i+'" class="fas fa-chevron-down" style="color:#94a3b8;transition:transform .3s;flex-shrink:0"></i>';
        html += '</div>';
        html += '<div id="axb_'+i+'" style="display:none;padding:0 20px 18px 106px;border-top:1px dashed #e2e8f0;padding-top:16px">';
        html += '<p style="color:#475569;font-size:.95rem;line-height:1.7;margin:0 0 14px 0">Documento oficial del Radicado No. 1 que soporta la condición <strong>'+a.cond+'</strong> del programa de Ingeniería Industrial ante el Ministerio de Educación Nacional.</p>';
        html += '<a href="'+url+'" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:8px;background:#C8102E;color:white;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:700;font-size:.9rem;box-shadow:0 4px 10px rgba(200,16,46,.25);transition:all .2s" onmouseenter="this.style.background=\'#9a0a1e\'" onmouseleave="this.style.background=\'#C8102E\'">';
        html += '<i class="fas fa-file-pdf"></i> Ver / Descargar Documento</a>';
        html += '</div></div>';
    });
    el.innerHTML = html;
};

// Inicialización: llama a renderAnexos cuando el contenedor esté en el DOM
window._anexosInit = function() {
    if (document.getElementById('anexosList')) {
        window.renderAnexos();
    } else {
        setTimeout(window._anexosInit, 150);
    }
};

// HTML de la sección (solo estructura, sin lógica inline)
window.SECTIONS.anexos = `
<style>
.ax-header { border-bottom:2px solid #FF6600; padding-bottom:15px; margin-bottom:25px; }
</style>
<div class="ax-header">
    <div style="color:#FF6600;font-weight:700;text-transform:uppercase;font-size:.9rem;letter-spacing:1px">Soporte Documental Oficial</div>
    <h1 style="color:#0A2540;font-size:2.2rem;margin:0;font-weight:800">Documentos Anexos — Radicado No. 1</h1>
</div>

<div style="background:#eff6ff;border:1px solid #bfdbfe;padding:16px 20px;border-radius:12px;margin-bottom:28px;color:#1e40af;font-size:1rem;display:flex;gap:12px;align-items:center">
    <i class="fas fa-info-circle fa-lg"></i>
    <span><strong>25 documentos verificables</strong> que soportan las 9 condiciones del Decreto 1330/2019. Haga clic en cada anexo para desplegar su descripción y acceder al documento original.</span>
</div>

<!-- Leyenda de categorías -->
<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:24px">
    <span style="background:#C8102E;color:white;padding:5px 12px;border-radius:8px;font-size:.78rem;font-weight:700">Programa</span>
    <span style="background:#0A2540;color:white;padding:5px 12px;border-radius:8px;font-size:.78rem;font-weight:700">Institucional</span>
    <span style="background:#8B5CF6;color:white;padding:5px 12px;border-radius:8px;font-size:.78rem;font-weight:700">Investigación</span>
    <span style="background:#FF6600;color:white;padding:5px 12px;border-radius:8px;font-size:.78rem;font-weight:700">Profesores</span>
    <span style="background:#06B6D4;color:white;padding:5px 12px;border-radius:8px;font-size:.78rem;font-weight:700">Infraestructura</span>
</div>

<!-- Contenedor que se llenará con JavaScript -->
<div id="anexosList">
    <div style="text-align:center;padding:40px;color:#94a3b8">
        <i class="fas fa-spinner fa-spin fa-2x"></i>
        <p>Cargando documentos...</p>
    </div>
</div>

<div style="background:#0A2540;color:white;padding:22px;border-radius:15px;margin-top:25px;text-align:center">
    <i class="fas fa-check-double fa-lg" style="color:#10b981;margin-right:10px"></i>
    <strong>9 Condiciones — 25 Anexos Verificables — Decreto 1330/2019</strong>
</div>
`;

// Arrancar inicialización
window._anexosInit();
