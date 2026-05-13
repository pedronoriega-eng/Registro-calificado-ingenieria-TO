// Build navigation
const nm=document.getElementById('navMenu');
NAV.forEach((n,i)=>{const b=document.createElement('button');b.className='nav-btn'+(i===0?' active':'');b.innerHTML=`<i class="fas ${n.icon}"></i>${n.label}`;b.onclick=()=>showSection(n.id);nm.appendChild(b);});

// Build content sections
const mc=document.getElementById('mainContent');
Object.keys(SECTIONS).forEach(k=>{const d=document.createElement('div');d.className='content-section'+(k==='inicio'?' active':'');d.id='sec-'+k;d.innerHTML=SECTIONS[k];mc.appendChild(d);});

function showSection(id){
document.querySelectorAll('.content-section').forEach(s=>s.classList.remove('active'));
document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
const sec=document.getElementById('sec-'+id);
if(sec){sec.classList.add('active');mc.scrollTop=0;}
const idx=NAV.findIndex(n=>n.id===id);
if(idx>=0)nm.children[idx].classList.add('active');
setTimeout(initCharts,100);
}

// Charts
let ci={};
function initCharts(){
const d=document.getElementById('demandaChart');
if(d&&!ci.d){ci.d=new Chart(d,{type:'bar',data:{labels:['Bogota','Medellin','B/quilla','Cali','Manizales','B/manga'],datasets:[{label:'Programas Virtuales',data:[4,1,1,1,1,0],backgroundColor:['#111827','#111827','#111827','#111827','#111827','#FF6600'],borderRadius:6,barThickness:30}]},options:{responsive:true,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,ticks:{color:'#1f2937',stepSize:1},grid:{color:'#e5e7eb'}},x:{ticks:{color:'#1f2937',font:{size:11}},grid:{display:false}}}}});}

const a=document.getElementById('areasChart');
if(a&&!ci.a){ci.a=new Chart(a,{type:'bar',data:{labels:['Ciencias Basicas','Ing. Aplicada','Gestion','Tecnologia 4.0','Investigacion','Humanistica'],datasets:[{data:[30,42,28,18,12,14],backgroundColor:['#111827','#FF6600','#111827','#FF6600','#111827','#FF6600'],borderRadius:6,barThickness:22}]},options:{responsive:true,indexAxis:'y',plugins:{legend:{display:false}},scales:{x:{grid:{color:'#e5e7eb'},ticks:{color:'#1f2937'}},y:{grid:{display:false},ticks:{color:'#1f2937',font:{size:11,family:'Roboto'}}}}}});}

const h=document.getElementById('horasChart');
if(h&&!ci.h){ci.h=new Chart(h,{type:'doughnut',data:{labels:['Acompanamiento (16h)','Trabajo Autonomo (32h)'],datasets:[{data:[16,32],backgroundColor:['#FF6600','#111827'],borderWidth:0}]},options:{responsive:true,cutout:'60%',plugins:{legend:{position:'bottom',labels:{color:'#1f2937',font:{size:12}}}}}});}

const f=document.getElementById('formacionChart');
if(f&&!ci.f){ci.f=new Chart(f,{type:'bar',data:{labels:['Doctorado (curso)','Maestria','Especializacion'],datasets:[{data:[2,6,8],backgroundColor:['#FF6600','#111827','#6b7280'],borderRadius:6,barThickness:28}]},options:{responsive:true,indexAxis:'y',plugins:{legend:{display:false}},scales:{x:{grid:{color:'#e5e7eb'},ticks:{color:'#1f2937',stepSize:1}},y:{grid:{display:false},ticks:{color:'#1f2937',font:{size:12}}}}}});}

const p=document.getElementById('proyeccionChart');
if(p&&!ci.p){ci.p=new Chart(p,{type:'line',data:{labels:['Ano 1','Ano 2','Ano 3','Ano 4','Ano 5','Ano 6','Ano 7'],datasets:[{label:'Tiempo Completo',data:[5,6,8,10,12,14,16],borderColor:'#FF6600',backgroundColor:'rgba(255,102,0,0.1)',fill:true,pointRadius:5,tension:.3},{label:'Medio Tiempo',data:[3,4,5,6,7,8,9],borderColor:'#111827',backgroundColor:'rgba(17,24,39,0.1)',fill:true,pointRadius:5,tension:.3}]},options:{responsive:true,plugins:{legend:{labels:{color:'#1f2937',font:{size:11}}}},scales:{y:{beginAtZero:true,ticks:{color:'#1f2937'},grid:{color:'#e5e7eb'}},x:{ticks:{color:'#1f2937'},grid:{display:false}}}}});}

const t=document.getElementById('techChart');
if(t&&!ci.t){ci.t=new Chart(t,{type:'radar',data:{labels:['LMS','Sincronica','E-Libro','Antiplagio','Correo','Creacion'],datasets:[{label:'Capacidad (%)',data:[95,90,100,85,100,80],backgroundColor:'rgba(255,102,0,0.15)',borderColor:'#FF6600',borderWidth:2,pointBackgroundColor:'#FF6600'}]},options:{responsive:true,scales:{r:{beginAtZero:true,max:100,grid:{color:'#e5e7eb'},angleLines:{color:'#e5e7eb'},pointLabels:{color:'#1f2937',font:{size:11}},ticks:{display:false}}},plugins:{legend:{display:false}}}});}
}
// Init on load
setTimeout(initCharts,300);
