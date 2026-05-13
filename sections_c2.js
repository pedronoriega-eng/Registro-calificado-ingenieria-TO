window.SECTIONS=window.SECTIONS||{};
var _c2ds={nacional:[{name:'BOGOTA',value:100},{name:'ANTIOQUIA',value:70},{name:'VALLE DEL CAUCA',value:55},{name:'SANTANDER',value:30},{name:'ATLANTICO',value:45},{name:'CUNDINAMARCA',value:50},{name:'CALDAS',value:20},{name:'BOYACA',value:15},{name:'NORTE DE SANTANDER',value:10}],regional:[{name:'ANTIOQUIA',value:90},{name:'VALLE DEL CAUCA',value:85},{name:'ATLANTICO',value:80},{name:'SANTANDER',value:65}],local:[{name:'SANTANDER',value:100},{name:'NORTE DE SANTANDER',value:60},{name:'ATLANTICO',value:40}]};
var _c2chart=null;
window.c2Nav=function(id,btn){var titles={'view-contexto':'Contexto del Programa','view-factor':'Factor Diferenciador','view-tendencias':'Indicadores y Desempeño','view-mapa':'Oferta de Programas (Mapa)'};document.querySelectorAll('.c2pane').forEach(p=>{p.style.display='none'});document.querySelectorAll('.c2navbtn').forEach(b=>b.classList.remove('active'));var p=document.getElementById(id);if(p)p.style.display='block';if(btn)btn.classList.add('active');if(id==='view-mapa'&&!_c2chart)setTimeout(window.c2InitMap,200);};
window.c2Acc=function(cid,iid){var c=document.getElementById(cid),ic=document.getElementById(iid);if(!c)return;var o=c.classList.contains('c2open');document.querySelectorAll('.c2ac').forEach(el=>el.classList.remove('c2open'));document.querySelectorAll('.c2ai').forEach(el=>el.style.transform='');if(!o){c.classList.add('c2open');if(ic)ic.style.transform='rotate(180deg);}';};
window.c2MapFilter=function(nivel){document.querySelectorAll('.c2mfbtn').forEach(b=>{b.style.background='#f1f5f9';b.style.color='#374151'});var ab=document.getElementById('c2mb_'+nivel);if(ab){ab.style.background='#F39200';ab.style.color='white';}if(!_c2chart)return;var titles={nacional:'Nivel Nacional Completo',regional:'Polos de Desarrollo',local:'Santanderes y Caribe'};var lbl=document.getElementById('c2maplabel');if(lbl)lbl.innerText=titles[nivel]||nivel;_c2chart.setOption({series:[{data:_c2ds[nivel]}]});};
window.c2InitMap=function(){var dom=document.getElementById('c2echmap');if(!dom||typeof echarts==='undefined')return;_c2chart=echarts.init(dom);fetch('https://raw.githubusercontent.com/mural-co/datos-abiertos-colombia/master/geojson/departamentos.geojson').then(r=>r.json()).then(gj=>{echarts.registerMap('Colombia',gj);var ld=document.getElementById('c2mapload');if(ld)ld.style.display='none';_c2chart.setOption({tooltip:{trigger:'item',backgroundColor:'#1A1A1B',textStyle:{color:'#fff'},formatter:p=>'<b style="color:#F39200">'+p.name+'</b><br>Índice: '+( p.value||0)},visualMap:{left:'right',bottom:'5%',min:0,max:100,inRange:{color:['#F4F4F4','#FCD34D','#F97316','#C2410C']},text:['Alta','Baja'],calculable:true},series:[{name:'Ingeniería Industrial',type:'map',map:'Colombia',roam:true,itemStyle:{borderColor:'#fff',borderWidth:1.5,areaColor:'#E5E7EB'},emphasis:{itemStyle:{areaColor:'#F39200'}},data:_c2ds.nacional}]});window.c2MapFilter('nacional');}).catch(()=>{var ld=document.getElementById('c2mapload');if(ld)ld.innerHTML='<i class="fas fa-wifi-slash fa-3x" style="color:red"></i><p>Error cargando mapa</p>';});};
window.c2Init=function(){var b=document.querySelector('.c2navbtn');if(b)window.c2Nav('view-contexto',b);else setTimeout(window.c2Init,150);};
window.SECTIONS.c2=`
<style>
.c2navbtn{padding:10px 18px;border:none;background:#f1f5f9;border-radius:10px;cursor:pointer;font-weight:700;color:#64748b;transition:all .3s;font-size:.88rem;display:flex;align-items:center;gap:8px}
.c2navbtn.active{background:#0A2540;color:white}
.c2pane{display:none;animation:c2fi .4s ease}
@keyframes c2fi{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
.c2card{background:white;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.04);transition:box-shadow .3s}
.c2card:hover{box-shadow:0 8px 24px rgba(0,0,0,.08)}
.c2ac{overflow:hidden;max-height:0;transition:max-height .4s ease;padding:0 20px}
.c2ac.c2open{max-height:300px;padding:14px 20px}
.c2ai{transition:transform .3s;color:#94a3b8}
.c2mfbtn{padding:10px 18px;border-radius:10px;border:1px solid #e2e8f0;font-weight:700;cursor:pointer;font-size:.85rem;transition:all .3s;width:100%;text-align:left}
.c2kpi{background:white;border:1px solid #e2e8f0;border-radius:14px;padding:22px;box-shadow:0 2px 8px rgba(0,0,0,.04)}
.c2tbl th{background:#0A2540;color:white;padding:12px 16px;text-align:left;font-size:.82rem;text-transform:uppercase;letter-spacing:.5px}
.c2tbl td{padding:12px 16px;border-bottom:1px solid #f1f5f9;font-size:.88rem;color:#374151}
.c2tbl tr:hover td{background:#fff7ed}
</style>

<div style="border-bottom:3px solid #C8102E;padding-bottom:15px;margin-bottom:25px">
  <div style="color:#C8102E;font-weight:700;text-transform:uppercase;font-size:.85rem;letter-spacing:1px">Condición 2</div>
  <h1 style="color:#0A2540;font-size:2.2rem;margin:0;font-weight:800">Justificación del Programa</h1>
</div>

<div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:28px">
  <button class="c2navbtn active" onclick="c2Nav('view-contexto',this)"><i class="fas fa-globe"></i>Contexto</button>
  <button class="c2navbtn" onclick="c2Nav('view-factor',this)"><i class="fas fa-gem"></i>Factor Diferenciador</button>
  <button class="c2navbtn" onclick="c2Nav('view-tendencias',this)"><i class="fas fa-chart-bar"></i>Indicadores</button>
  <button class="c2navbtn" onclick="c2Nav('view-mapa',this)"><i class="fas fa-map-location-dot"></i>Mapa de Oferta</button>
</div>

<!-- VISTA 1: CONTEXTO -->
<div id="view-contexto" class="c2pane" style="display:block">
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px">
    <div class="c2card">
      <div style="height:160px;background:linear-gradient(135deg,#0A2540,#1e40af);display:flex;align-items:flex-end;padding:16px;position:relative;overflow:hidden">
        <div style="position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=60') center/cover;opacity:.3"></div>
        <h4 style="color:white;font-weight:800;font-size:1.15rem;position:relative"><i class="fas fa-earth-americas" style="color:#FF6600;margin-right:8px"></i>Internacional</h4>
      </div>
      <div style="padding:20px">
        <p style="font-size:.87rem;color:#475569;margin-bottom:14px">Análisis comparativo de 10 instituciones líderes (MIT, Stanford, Cambridge, UNED, VIU). La formación global exige:</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <div style="display:flex;gap:10px;align-items:flex-start"><i class="fas fa-check" style="color:#FF6600;margin-top:3px;flex-shrink:0"></i><span style="font-size:.87rem"><strong>Virtualidad Creciente:</strong> Adaptabilidad y democratización del acceso.</span></div>
          <div style="display:flex;gap:10px;align-items:flex-start"><i class="fas fa-check" style="color:#FF6600;margin-top:3px;flex-shrink:0"></i><span style="font-size:.87rem"><strong>Revolución 4.0:</strong> Integración fuerte de IA y Analítica de Datos.</span></div>
        </div>
      </div>
    </div>
    <div class="c2card">
      <div style="height:160px;background:linear-gradient(135deg,#14532d,#16a34a);display:flex;align-items:flex-end;padding:16px;position:relative;overflow:hidden">
        <div style="position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=600&q=60') center/cover;opacity:.3"></div>
        <h4 style="color:white;font-weight:800;font-size:1.15rem;position:relative"><i class="fas fa-map" style="color:#FF6600;margin-right:8px"></i>Nacional</h4>
      </div>
      <div style="padding:20px">
        <p style="font-size:.87rem;color:#475569;margin-bottom:14px">Alineación con Planes de Desarrollo Nacional y Departamentales (2024-2027) de Bogotá, Antioquia y Valle del Cauca.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <div style="display:flex;gap:10px;align-items:flex-start"><i class="fas fa-check" style="color:#FF6600;margin-top:3px;flex-shrink:0"></i><span style="font-size:.87rem"><strong>Reindustrialización:</strong> Modernización de cadenas logísticas.</span></div>
          <div style="display:flex;gap:10px;align-items:flex-start"><i class="fas fa-check" style="color:#FF6600;margin-top:3px;flex-shrink:0"></i><span style="font-size:.87rem"><strong>Sostenibilidad:</strong> Economía circular y eficiencia energética.</span></div>
        </div>
      </div>
    </div>
    <div class="c2card">
      <div style="height:160px;background:linear-gradient(135deg,#7c3aed,#a855f7);display:flex;align-items:flex-end;padding:16px;position:relative;overflow:hidden">
        <div style="position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=60') center/cover;opacity:.3"></div>
        <h4 style="color:white;font-weight:800;font-size:1.15rem;position:relative"><i class="fas fa-location-dot" style="color:#FF6600;margin-right:8px"></i>Regional / Local</h4>
      </div>
      <div style="padding:20px">
        <p style="font-size:.87rem;color:#475569;margin-bottom:14px">Impacto directo en la región Oriente (Santander, Atlántico), enfocado en la reactivación económica del tejido empresarial.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <div style="display:flex;gap:10px;align-items:flex-start"><i class="fas fa-check" style="color:#FF6600;margin-top:3px;flex-shrink:0"></i><span style="font-size:.87rem"><strong>Competitividad:</strong> "Bucaramanga avanza segura" requiere ingenieros en mejora continua.</span></div>
          <div style="display:flex;gap:10px;align-items:flex-start"><i class="fas fa-check" style="color:#FF6600;margin-top:3px;flex-shrink:0"></i><span style="font-size:.87rem"><strong>Gestión Portuaria:</strong> Optimización de la cadena de suministro global.</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- VISTA 2: FACTOR DIFERENCIADOR -->
<div id="view-factor" class="c2pane">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:start">
    <div style="display:flex;flex-direction:column;gap:14px">
      <div class="c2card" style="border-left:5px solid #FF6600;border-radius:0 14px 14px 0">
        <div onclick="c2Acc('ca_d1','ci_d1')" style="padding:18px 20px;display:flex;justify-content:space-between;align-items:center;cursor:pointer">
          <div style="display:flex;align-items:center;gap:14px"><div style="width:40px;height:40px;border-radius:50%;background:#0A2540;color:white;display:flex;align-items:center;justify-content:center"><i class="fas fa-robot"></i></div><h3 style="font-weight:700;color:#0A2540;font-size:1rem;margin:0">Herramientas de la Revolución 4.0</h3></div>
          <i id="ci_d1" class="fas fa-chevron-down c2ai"></i>
        </div>
        <div id="ca_d1" class="c2ac"><p style="font-size:.88rem;color:#475569;border-top:1px solid #fee2e2;padding-top:12px">Incorporación transversal de tecnologías de vanguardia (IA, Big Data, Analítica) superando las mallas tradicionales para liderar la transformación digital.</p></div>
      </div>
      <div class="c2card" style="border-left:5px solid #10b981;border-radius:0 14px 14px 0">
        <div onclick="c2Acc('ca_d2','ci_d2')" style="padding:18px 20px;display:flex;justify-content:space-between;align-items:center;cursor:pointer">
          <div style="display:flex;align-items:center;gap:14px"><div style="width:40px;height:40px;border-radius:50%;background:#0A2540;color:white;display:flex;align-items:center;justify-content:center"><i class="fas fa-leaf"></i></div><h3 style="font-weight:700;color:#0A2540;font-size:1rem;margin:0">Sostenibilidad y Responsabilidad Social</h3></div>
          <i id="ci_d2" class="fas fa-chevron-down c2ai"></i>
        </div>
        <div id="ca_d2" class="c2ac"><p style="font-size:.88rem;color:#475569;border-top:1px solid #d1fae5;padding-top:12px">Alineación directa con los ODS. Asignaturas diseñadas para minimizar impactos ambientales y sociales en respuesta al contexto colombiano.</p></div>
      </div>
      <div class="c2card" style="border-left:5px solid #3b82f6;border-radius:0 14px 14px 0">
        <div onclick="c2Acc('ca_d3','ci_d3')" style="padding:18px 20px;display:flex;justify-content:space-between;align-items:center;cursor:pointer">
          <div style="display:flex;align-items:center;gap:14px"><div style="width:40px;height:40px;border-radius:50%;background:#0A2540;color:white;display:flex;align-items:center;justify-content:center"><i class="fas fa-laptop-house"></i></div><h3 style="font-weight:700;color:#0A2540;font-size:1rem;margin:0">Flexibilidad y Accesibilidad Virtual</h3></div>
          <i id="ci_d3" class="fas fa-chevron-down c2ai"></i>
        </div>
        <div id="ca_d3" class="c2ac"><p style="font-size:.88rem;color:#475569;border-top:1px solid #dbeafe;padding-top:12px">Mitiga la brecha de acceso a la educación superior, llevando formación pertinente a regiones apartadas de las cabeceras municipales.</p></div>
      </div>
    </div>
    <div style="background:#0A2540;border-radius:20px;padding:28px;color:white">
      <h3 style="font-weight:800;font-size:1.3rem;margin:0 0 18px">Cierre de Brechas de Capital Humano</h3>
      <p style="color:#94a3b8;font-size:.88rem;margin-bottom:20px">El programa atiende carencias identificadas en el mercado laboral actual (OLE y Clústeres):</p>
      <div style="display:flex;flex-direction:column;gap:12px">
        <div style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:16px;display:flex;gap:14px"><i class="fas fa-triangle-exclamation" style="color:#FF6600;margin-top:2px;flex-shrink:0"></i><div><h4 style="font-weight:700;margin:0 0 4px;font-size:.9rem">Falta de Competencias Digitales</h4><p style="color:#94a3b8;font-size:.8rem;margin:0">Resuelto mediante modelación, simulación con IA y programación.</p></div></div>
        <div style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:16px;display:flex;gap:14px"><i class="fas fa-triangle-exclamation" style="color:#FF6600;margin-top:2px;flex-shrink:0"></i><div><h4 style="font-weight:700;margin:0 0 4px;font-size:.9rem">Habilidades Blandas</h4><p style="color:#94a3b8;font-size:.8rem;margin:0">Integración ABP (Aprendizaje Basado en Proyectos) y liderazgo organizacional.</p></div></div>
        <div style="background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:16px;display:flex;gap:14px"><i class="fas fa-triangle-exclamation" style="color:#FF6600;margin-top:2px;flex-shrink:0"></i><div><h4 style="font-weight:700;margin:0 0 4px;font-size:.9rem">Desconexión Empresarial</h4><p style="color:#94a3b8;font-size:.8rem;margin:0">Fomento del emprendimiento y soluciones a problemas reales del entorno productivo.</p></div></div>
      </div>
    </div>
  </div>
</div>

<!-- VISTA 3: INDICADORES -->
<div id="view-tendencias" class="c2pane">
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-bottom:28px">
    <div style="background:#FF6600;color:white;padding:24px;border-radius:16px;box-shadow:0 8px 20px rgba(255,102,0,.25)"><div style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Empleabilidad (OLE)</div><div style="font-size:2.8rem;font-weight:800">&gt; 85%</div><div style="font-size:.85rem;margin-top:8px;opacity:.9">Ingenieros empleados en su área</div></div>
    <div class="c2kpi"><div style="font-size:.75rem;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px">Salario Inicial</div><div style="font-size:2.8rem;font-weight:800;color:#0A2540">2.5 - 3.5</div><div style="font-size:.85rem;color:#64748b;margin-top:8px;font-weight:600">Salarios Mínimos Legales Vigentes</div></div>
    <div style="background:#0A2540;color:white;padding:24px;border-radius:16px;box-shadow:0 8px 20px rgba(10,37,64,.2)"><div style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;opacity:.7">Tiempo Inserción</div><div style="font-size:2.8rem;font-weight:800">70%</div><div style="font-size:.85rem;margin-top:8px;opacity:.8">Logran empleo en los primeros 6 meses</div></div>
  </div>
  <div class="c2card">
    <div style="background:#f8fafc;padding:16px 20px;border-bottom:1px solid #e2e8f0;font-weight:700;color:#0A2540"><i class="fas fa-table" style="color:#FF6600;margin-right:8px"></i>Dinámica de Demanda — Programas Virtuales (SNIES)</div>
    <div style="overflow-x:auto">
      <table class="c2tbl" style="width:100%;border-collapse:collapse">
        <thead><tr><th>Institución</th><th style="text-align:right">Inscritos</th><th style="text-align:right">Admitidos</th><th style="text-align:right">Mat. 1er Curso</th><th style="text-align:right;color:#FF6600">Total Mat.</th></tr></thead>
        <tbody>
          <tr><td style="font-weight:600">UNAD</td><td style="text-align:right">7,136</td><td style="text-align:right">5,705</td><td style="text-align:right">4,811</td><td style="text-align:right;font-weight:700">25,599</td></tr>
          <tr><td style="font-weight:600">Politécnico Grancolombiano</td><td style="text-align:right">2,650</td><td style="text-align:right">2,557</td><td style="text-align:right">1,998</td><td style="text-align:right;font-weight:700">9,037</td></tr>
          <tr><td style="font-weight:600">Corp. Universitaria Iberoamericana</td><td style="text-align:right">1,917</td><td style="text-align:right">1,585</td><td style="text-align:right">984</td><td style="text-align:right;font-weight:700">3,271</td></tr>
          <tr><td style="font-weight:600">Fundación Univ. Área Andina</td><td style="text-align:right">806</td><td style="text-align:right">807</td><td style="text-align:right">587</td><td style="text-align:right;font-weight:700">2,116</td></tr>
          <tr><td style="font-weight:600">Corp. Universitaria Minuto de Dios</td><td style="text-align:right">1,361</td><td style="text-align:right">1,360</td><td style="text-align:right">676</td><td style="text-align:right;font-weight:700">760</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<!-- VISTA 4: MAPA -->
<div id="view-mapa" class="c2pane">
  <div style="display:grid;grid-template-columns:280px 1fr;gap:20px;height:520px">
    <div style="display:flex;flex-direction:column;gap:14px">
      <div style="background:white;border:1px solid #e2e8f0;border-radius:14px;padding:18px">
        <div style="font-size:.75rem;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:1px;margin-bottom:14px"><i class="fas fa-filter" style="color:#FF6600;margin-right:6px"></i>Filtros Geográficos</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <button id="c2mb_nacional" class="c2mfbtn" onclick="c2MapFilter('nacional')" style="background:#FF6600;color:white"><i class="fas fa-earth-americas mr-2"></i>Nivel Nacional</button>
          <button id="c2mb_regional" class="c2mfbtn" onclick="c2MapFilter('regional')"><i class="fas fa-map mr-2"></i>Polos de Desarrollo</button>
          <button id="c2mb_local" class="c2mfbtn" onclick="c2MapFilter('local')"><i class="fas fa-location-dot mr-2"></i>Santanderes / Caribe</button>
        </div>
      </div>
      <div style="background:#0A2540;border-radius:14px;padding:18px;color:white;flex:1;border-top:4px solid #FF6600">
        <div style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px">Distribución General (SNIES — 187 Prog.)</div>
        <div style="display:flex;flex-direction:column;gap:14px">
          <div><div style="display:flex;justify-content:space-between;font-size:.85rem;margin-bottom:6px"><span>Presencial</span><span style="font-weight:700">155</span></div><div style="background:rgba(255,255,255,.15);border-radius:4px;height:6px"><div style="background:white;width:82%;height:6px;border-radius:4px"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:.85rem;margin-bottom:6px"><span style="color:#FF6600;font-weight:700">Virtual</span><span style="font-weight:700;color:#FF6600;font-size:1rem">20</span></div><div style="background:rgba(255,255,255,.15);border-radius:4px;height:6px"><div style="background:#FF6600;width:10%;height:6px;border-radius:4px"></div></div></div>
          <div><div style="display:flex;justify-content:space-between;font-size:.85rem;margin-bottom:6px"><span>Distancia</span><span style="font-weight:700">7</span></div><div style="background:rgba(255,255,255,.15);border-radius:4px;height:6px"><div style="background:#94a3b8;width:4%;height:6px;border-radius:4px"></div></div></div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,.15)">
          <div style="background:rgba(255,255,255,.07);border-radius:10px;padding:14px;text-align:center"><div style="font-size:1.5rem;font-weight:800">156</div><div style="font-size:.7rem;color:#94a3b8;font-weight:700;text-transform:uppercase;letter-spacing:1px">Privado</div></div>
          <div style="background:rgba(255,255,255,.07);border-radius:10px;padding:14px;text-align:center"><div style="font-size:1.5rem;font-weight:800">31</div><div style="font-size:.7rem;color:#94a3b8;font-weight:700;text-transform:uppercase;letter-spacing:1px">Oficial</div></div>
        </div>
      </div>
    </div>
    <div style="background:white;border:1px solid #e2e8f0;border-radius:14px;position:relative;overflow:hidden">
      <div id="c2maplabel" style="position:absolute;top:12px;left:12px;z-index:10;background:rgba(10,37,64,.9);color:white;padding:8px 16px;border-radius:8px;font-size:.82rem;font-weight:700"><i class="fas fa-layer-group" style="color:#FF6600;margin-right:8px"></i>Nivel Nacional Completo</div>
      <div id="c2echmap" style="width:100%;height:100%"></div>
      <div id="c2mapload" style="position:absolute;inset:0;background:rgba(255,255,255,.9);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:20">
        <i class="fas fa-spinner fa-spin fa-3x" style="color:#FF6600;margin-bottom:16px"></i>
        <p style="font-weight:700;color:#0A2540">Cargando Cartografía Dinámica...</p>
      </div>
    </div>
  </div>
</div>
`;
window.c2Init();
