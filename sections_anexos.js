// Sección Documentos Anexos - Radicado No. 1 (Desplegables)
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
.anexo-body{display:none;padding:0 18px 16px 100px;color:#374151;font-size:.95rem;line-height:1.7;border-top:1px dashed #e5e7eb;margin-top:0;padding-top:12px}
.anexo-body.open{display:block}
.anexo-link{display:inline-flex;align-items:center;gap:6px;background:#C8102E;color:white;padding:6px 14px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:.85rem;margin-top:8px;transition:background .2s}
.anexo-link:hover{background:#9a0a1e}
</style>

<div id="anexosList">
</div>

<div style="background:#0A2540;color:white;padding:20px;border-radius:12px;margin-top:20px;text-align:center;">
    <h3 style="font-weight:bold;font-size:1.3rem;margin-bottom:8px;"><i class="fas fa-check-double mr-2" style="color:#10b981;"></i> 9 Condiciones — 25 Anexos Verificables</h3>
    <p style="color:#94a3b8;font-size:1rem;">Documentación completa para la sustentación ante pares académicos del MEN.</p>
</div>

<script>
(function(){
var anexos=[
{n:"Anexo 1",t:"Acuerdo de Creación del Programa",cat:"doc",desc:"Acuerdo 011 del 12 de noviembre de 2024 del Consejo Superior, mediante el cual se crea el programa de Ingeniería Industrial en modalidad virtual, adscrito a la Escuela de Ingenierías de la Corporación Escuela Tecnológica del Oriente.",cond:"C1"},
{n:"Anexo 2",t:"Acuerdo de Aprobación de Presentación ante el MEN",cat:"doc",desc:"Acuerdo del Consejo Superior que autoriza la presentación formal del programa ante el Ministerio de Educación Nacional para la obtención del Registro Calificado.",cond:"C1"},
{n:"Anexo 3",t:"Documento Maestro del Programa",cat:"doc",desc:"Documento integral que sustenta las 9 condiciones de calidad del Decreto 1330/2019. Contiene la justificación, aspectos curriculares, organización académica, investigación, sector externo, profesores, medios educativos e infraestructura. 400+ páginas.",cond:"Todas"},
{n:"Anexo 4",t:"Estudio de Pertinencia",cat:"doc",desc:"Análisis de demanda regional y nacional, estado del arte de la oferta académica, brechas de capital humano, análisis PESTEL y DOFA, y oportunidades de desarrollo socioeconómico que justifican la creación del programa.",cond:"C2"},
{n:"Anexo 5",t:"Proyecto Educativo Institucional (PEI)",cat:"inst",desc:"Documento rector que define la misión, visión, principios, modelo pedagógico 'Formación en Contextos de Aplicación', estructura organizacional y lineamientos académicos de la Corporación Escuela Tecnológica del Oriente.",cond:"C1, C3, C4"},
{n:"Anexo 6",t:"Modelo Pedagógico Institucional",cat:"inst",desc:"Detalla el modelo 'Formación en Contextos de Aplicación' fundamentado en constructivismo social, escuela nueva y aprendizaje significativo. Define la interacción estudiante-docente-contexto y las estrategias de enseñanza-aprendizaje.",cond:"C3, C4"},
{n:"Anexo 7",t:"Política de Resultados de Aprendizaje",cat:"inst",desc:"Lineamiento institucional para la definición, implementación y evaluación de Resultados de Aprendizaje (RA) alineados con el Marco Nacional de Cualificaciones y las competencias del perfil de egreso.",cond:"C3"},
{n:"Anexo 8",t:"Lineamiento de Educación Virtual — Parte I",cat:"inst",desc:"Primer documento del marco normativo institucional para programas en modalidad virtual: diseño instruccional, roles del tutor virtual, estrategias de acompañamiento y evaluación en entornos LMS.",cond:"C4, C8"},
{n:"Anexo 9",t:"Lineamiento de Educación Virtual — Parte II",cat:"inst",desc:"Complemento del lineamiento virtual: estándares de calidad de Objetos Virtuales de Aprendizaje (OVA), diseño de actividades sincrónicas/asincrónicas, y criterios de accesibilidad digital.",cond:"C4, C8"},
{n:"Anexo 10",t:"Reglamento Estudiantil",cat:"inst",desc:"Normativa que regula los derechos, deberes, régimen disciplinario, procesos de matrícula, evaluación, homologación, opciones de grado y demás aspectos de la vida académica del estudiante.",cond:"C4"},
{n:"Anexo 11",t:"Syllabus del Programa (48 Microcurrículos)",cat:"doc",desc:"Compendio de los 48 microcurrículos del plan de estudios: justificación, competencias, resultados de aprendizaje, contenidos temáticos, estrategias pedagógicas, evaluación y bibliografía de cada asignatura. 144 créditos distribuidos en 8 semestres.",cond:"C3"},
{n:"Anexo 12",t:"Reglamento de Opción de Grado",cat:"inst",desc:"Normativa que establece las modalidades de trabajo de grado: proyecto de investigación, pasantía empresarial, emprendimiento. Define requisitos, procedimientos de evaluación y criterios de aprobación.",cond:"C4, C5"},
{n:"Anexo 13",t:"Instructivo de Ingreso a Campus Virtual",cat:"inst",desc:"Guía paso a paso para estudiantes y docentes sobre el acceso al Campus Virtual Moodle, configuración de perfil, navegación por cursos y uso de herramientas de comunicación.",cond:"C8"},
{n:"Anexo 14",t:"Política de Investigación Institucional",cat:"inv",desc:"Marco estratégico que define las líneas de investigación institucional, los mecanismos de fomento, financiación de proyectos, divulgación de resultados y articulación con el SNCTI (MinCiencias).",cond:"C5"},
{n:"Anexo 15",t:"Lineamientos Generales de Investigación",cat:"inv",desc:"Documento operativo que reglamenta la creación de grupos y semilleros de investigación, la producción académica, la participación en redes científicas y los incentivos para investigadores.",cond:"C5"},
{n:"Anexo 16",t:"Lineamiento de Relacionamiento con el Sector Externo",cat:"ext",desc:"Estrategia institucional de extensión, proyección social, vinculación empresarial e internacionalización. Define convenios, movilidad académica, educación continua y seguimiento a egresados.",cond:"C6"},
{n:"Anexo 17",t:"Estatuto Docente",cat:"prof",desc:"Normativa que regula la vinculación, categorización, evaluación del desempeño, régimen salarial, derechos, deberes y desarrollo profesoral en la Corporación.",cond:"C7"},
{n:"Anexo 18",t:"Lineamiento de Distribución de Planes de Trabajo Docente",cat:"prof",desc:"Criterios para la asignación de carga académica, investigativa, de extensión y administrativa de los profesores. Define las horas de acompañamiento directo e independiente.",cond:"C7"},
{n:"Anexo 19",t:"Hojas de Vida del Cuerpo Docente (8 profesores)",cat:"prof",desc:"Compilación de las hojas de vida de los 8 profesores vinculados al programa: 2 con doctorado (en curso), 6 con maestría. Incluye experiencia académica, investigativa y profesional.",cond:"C7"},
{n:"Anexo 20",t:"Lineamiento de Virtualización de Recursos Educativos",cat:"infra",desc:"Protocolo para el diseño, producción y publicación de recursos educativos digitales: videos, infografías, simuladores, laboratorios virtuales y material interactivo en el LMS.",cond:"C8"},
{n:"Anexo 21",t:"Contrato de Biblioteca Digital E-Libro",cat:"infra",desc:"Convenio vigente con la plataforma E-Libro que garantiza acceso a más de 100,000 títulos académicos en formato digital para estudiantes y docentes del programa.",cond:"C8"},
{n:"Anexo 22",t:"Contrato de Arrendamiento — Sede A (Principal)",cat:"infra",desc:"Contrato que acredita la disponibilidad de la sede principal ubicada en Calle 41 Nro. 10-30, Bucaramanga. Incluye aulas, laboratorios de cómputo, biblioteca y áreas administrativas.",cond:"C9"},
{n:"Anexo 23",t:"Certificado de Uso de Suelo y Licencia de Construcción",cat:"infra",desc:"Documentos legales que certifican el uso educativo del suelo y el cumplimiento de normativas urbanísticas y de construcción para la operación de la sede principal.",cond:"C9"},
{n:"Anexo 24",t:"Contrato de Arrendamiento — Sede C",cat:"infra",desc:"Contrato que acredita la disponibilidad de la Sede C, utilizada como espacio complementario para actividades presenciales opcionales y eventos académicos.",cond:"C9"},
{n:"Anexo 25",t:"Convenio de Uso — Sede B",cat:"infra",desc:"Convenio interinstitucional que permite el uso de instalaciones de la Sede B para prácticas, encuentros presenciales y actividades de bienestar universitario.",cond:"C9"}
];
var html='';
anexos.forEach(function(a,i){
html+='<div class="anexo-item" id="anexo_'+i+'">';
html+='<div class="anexo-header" onclick="var b=document.getElementById(\\'ab_'+i+'\\');b.classList.toggle(\\'open\\');this.querySelector(\\'.anexo-toggle\\').style.transform=b.classList.contains(\\'open\\')?\\' rotate(180deg)\\':\\'\\'">';
html+='<span class="anexo-num '+a.cat+'">'+a.n+'</span>';
html+='<span class="anexo-title">'+a.t+'</span>';
html+='<i class="fas fa-chevron-down anexo-toggle"></i>';
html+='</div>';
html+='<div class="anexo-body" id="ab_'+i+'">';
html+='<p>'+a.desc+'</p>';
html+='<span style="display:inline-block;background:#eff6ff;color:#1e40af;padding:3px 10px;border-radius:4px;font-size:.8rem;font-weight:bold;margin-top:4px;"><i class="fas fa-link mr-1"></i> Condición: '+a.cond+'</span>';
html+='<br><a class="anexo-link" href="docs/'+a.n.replace(/ /g,'_')+'.pdf" target="_blank"><i class="fas fa-file-pdf"></i> Consultar Documento</a>';
html+='</div></div>';
});
setTimeout(function(){var el=document.getElementById('anexosList');if(el)el.innerHTML=html;},200);
})();
</script>
`;
