// Sección Documentos Anexos - Radicado No. 1 (NOMBRES EXACTOS)
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS.anexos = `
<div class="slide-header" style="border-bottom:2px solid #FF6600; padding-bottom:15px; margin-bottom:25px;">
    <div class="slide-subtitle" style="color:#FF6600; font-weight:bold; text-transform:uppercase; font-size:1.1rem;">Soporte Documental</div>
    <h1 style="color:#0A2540; font-size:2.2rem; margin:0; font-weight:bold;">Documentos Anexos — Radicado No. 1</h1>
</div>
<div style="background:#eff6ff; border:1px solid #bfdbfe; padding:15px; border-radius:10px; margin-bottom:20px; color:#1e40af; font-size:1rem;">
    <i class="fas fa-info-circle mr-2"></i> <strong>25 documentos verificables.</strong> Haga clic en cada anexo para desplegar su descripción y acceder al documento original.
</div>

<style>
.anexo-item{background:white;border:1px solid #e5e7eb;border-radius:10px;margin-bottom:8px;overflow:hidden;transition:all .3s}
.anexo-item:hover{box-shadow:0 4px 12px rgba(0,0,0,.08)}
.anexo-header{display:flex;align-items:center;padding:14px 18px;cursor:pointer;gap:12px;user-select:none}
.anexo-header:hover{background:#f9fafb}
.anexo-num{background:#0A2540;color:white;font-weight:bold;font-size:.8rem;padding:4px 10px;border-radius:6px;min-width:70px;text-align:center}
.anexo-num.doc{background:#C8102E}.anexo-num.inst{background:#0A2540}.anexo-num.inv{background:#8b5cf6}.anexo-num.ext{background:#f59e0b;color:#111}.anexo-num.infra{background:#06b6d4}.anexo-num.prof{background:#FF6600}
.anexo-title{flex:1;font-weight:bold;color:#0A2540;font-size:1rem}
.anexo-toggle{color:#6b7280;font-size:1.2rem;transition:transform .3s}
.anexo-body{display:none;padding:15px 18px 15px 100px;color:#374151;font-size:.95rem;line-height:1.7;border-top:1px dashed #e5e7eb;background:#fcfcfc}
.anexo-body.open{display:block}
.anexo-link{display:inline-flex;align-items:center;gap:8px;background:#C8102E;color:white;padding:10px 18px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:.9rem;margin-top:10px;transition:all .2s;box-shadow:0 2px 4px rgba(200,16,46,0.3)}
.anexo-link:hover{background:#9a0a1e;transform:translateY(-1px);box-shadow:0 4px 8px rgba(200,16,46,0.4)}
</style>

<div id="anexosList"></div>

<script>
(function(){
var anexos=[
{n:"Anexo 1", f:"Anexo 1. Acuerdo de creación.pdf", t:"Acuerdo de Creación del Programa", cat:"doc"},
{n:"Anexo 2", f:"Anexo 2. Acuerdo de aprobación.pdf", t:"Acuerdo de Aprobación ante el MEN", cat:"doc"},
{n:"Anexo 3", f:"Anexo 3. Doc. Ingenieria Industrial.pdf", t:"Documento Maestro Industrial", cat:"doc"},
{n:"Anexo 4", f:"Anexo 4. Estudio de Pertinencia.pdf", t:"Estudio de Pertinencia", cat:"doc"},
{n:"Anexo 5", f:"Anexo 5. Proyecto Educativo Institucional.pdf", t:"PEI - Proyecto Educativo Institucional", cat:"inst"},
{n:"Anexo 6", f:"Anexo 6. Modelo Pedagógico.pdf", t:"Modelo Pedagógico Institucional", cat:"inst"},
{n:"Anexo 7", f:"Anexo 7.. Política de Resultados de Aprendizaje Int.pdf", t:"Política de Resultados de Aprendizaje", cat:"inst"},
{n:"Anexo 8", f:"Anexo 8. Lin. Programas Academicos Virtual.pdf", t:"Lineamiento Programas Virtuales", cat:"inst"},
{n:"Anexo 9", f:"Anexo 9. Lineamiento Educación Virtual_ Ins.pdf", t:"Lineamiento Educación Virtual", cat:"inst"},
{n:"Anexo 10", f:"Anexo 10. Reglamento Estudiantil.pdf", t:"Reglamento Estudiantil", cat:"inst"},
{n:"Anexo 11", f:"Anexo 11. Syllabus.xlsx", t:"Syllabus del Programa (Excel)", cat:"doc"},
{n:"Anexo 12", f:"Anexo 12. Reglamento de Opción de Grado.pdf", t:"Reglamento de Opción de Grado", cat:"inst"},
{n:"Anexo 13", f:"Anexo 13. Instructivo de ingreso a Campus Virtual.pdf", t:"Instructivo Campus Virtual", cat:"inst"},
{n:"Anexo 14", f:"Anexo 14. Política de Investigación.pdf", t:"Política de Investigación", cat:"inv"},
{n:"Anexo 15", f:"Anexo 15. Lineamientos generales de investigación.pdf", t:"Lineamientos de Investigación", cat:"inv"},
{n:"Anexo 16", f:"Anexo 16. Lineamiento Relacionamiento-Externo.pdf", t:"Relacionamiento Sector Externo", cat:"ext"},
{n:"Anexo 17", f:"Anexo 17. Estatuto Docente (1).pdf", t:"Estatuto Docente", cat:"prof"},
{n:"Anexo 18", f:"Anexo 18. Lineamiento de Distribución de Planes de Trabajo.pdf", t:"Planes de Trabajo Docente", cat:"prof"},
{n:"Anexo 19", f:"Anexo 19. Hojas de vida.pdf", t:"Hojas de Vida Cuerpo Docente", cat:"prof"},
{n:"Anexo 20", f:"Anexo 20.  Lineamiento de Virtualización de Recursos Digitales.pdf", t:"Virtualización de Recursos", cat:"infra"},
{n:"Anexo 21", f:"Anexo 21. Contrato E-Libro.pdf", t:"Contrato Biblioteca E-Libro", cat:"infra"},
{n:"Anexo 22", f:"Anexo 22. Contrato SEDE A.pdf", t:"Contrato SEDE A", cat:"infra"},
{n:"Anexo 23", f:"Anexo 23. Uso de suelo y Lic. de Construcicón.pdf", t:"Uso de Suelo y Licencias", cat:"infra"},
{n:"Anexo 24", f:"Anexo 24. Contrato sede C.pdf", t:"Contrato Sede C", cat:"infra"},
{n:"Anexo 25", f:"Anexo 25.  ConvenioSEDE B.pdf", t:"Convenio Sede B", cat:"infra"}
];
var html='';
anexos.forEach(function(a,i){
html+='<div class="anexo-item">';
html+='<div class="anexo-header" onclick="var b=document.getElementById(\\'ab_'+i+'\\');b.classList.toggle(\\'open\\');this.querySelector(\\'.anexo-toggle\\').style.transform=b.classList.contains(\\'open\\')?\\'rotate(180deg)\\':\\'\\'">';
html+='<span class="anexo-num '+a.cat+'">'+a.n+'</span>';
html+='<span class="anexo-title">'+a.t+'</span>';
html+='<i class="fas fa-chevron-down anexo-toggle"></i>';
html+='</div>';
html+='<div class="anexo-body" id="ab_'+i+'">';
html+='<p style="margin-bottom:10px;">Documento oficial correspondiente al '+a.n+' del Radicado No. 1 para la acreditación del programa de Ingeniería Industrial.</p>';
html+='<a class="anexo-link" href="../'+encodeURIComponent(a.f)+'" target="_blank"><i class="fas fa-file-pdf"></i> Ver Documento Original</a>';
html+='</div></div>';
});
document.getElementById('anexosList').innerHTML=html;
})();
</script>
`;
