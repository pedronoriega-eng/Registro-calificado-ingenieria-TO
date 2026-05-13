// Charts initialization - called after slides are rendered
let ci={};
function initCharts(){
  // Areas de formacion (bar horizontal)
  const a=document.getElementById('areasChart');
  if(a&&!ci.a){ci.a=new Chart(a,{type:'bar',data:{labels:['Ciencias Basicas','Ingenieria Aplicada','Gestion Empresarial','Tecnologia 4.0','Investigacion','Humanistica'],datasets:[{data:[30,42,28,18,12,14],backgroundColor:['#000','#FF4500','#000','#FF4500','#000','#FF4500'],barThickness:20}]},options:{responsive:true,indexAxis:'y',plugins:{legend:{display:false}},scales:{x:{grid:{color:'#E0E0E0'},ticks:{color:'#000'}},y:{grid:{display:false},ticks:{color:'#000',font:{size:11,family:'Inter'}}}}}});}

  // Horas por credito
  const h=document.getElementById('horasChart');
  if(h&&!ci.h){ci.h=new Chart(h,{type:'bar',data:{labels:['Acompanamiento Directo','Trabajo Autonomo'],datasets:[{data:[16,32],backgroundColor:['#FF4500','#000'],barThickness:35}]},options:{responsive:true,indexAxis:'y',plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>c.raw+' horas por credito'}}},scales:{x:{grid:{color:'#E0E0E0'},ticks:{color:'#000'}},y:{grid:{display:false},ticks:{color:'#000',font:{size:12,family:'Inter'}}}}}});}

  // Demanda por ciudad
  const d=document.getElementById('demandaChart');
  if(d&&!ci.d){ci.d=new Chart(d,{type:'bar',data:{labels:['Bogota','Medellin','B/quilla','Cali','Manizales','B/manga'],datasets:[{data:[4,1,1,1,1,0],backgroundColor:['#000','#000','#000','#000','#000','#FF4500'],barThickness:25}]},options:{responsive:true,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,ticks:{color:'#000',stepSize:1}},x:{ticks:{color:'#000',font:{size:10}}}}}});}

  // Formacion docente (horizontal bar)
  const f=document.getElementById('formacionChart');
  if(f&&!ci.f){ci.f=new Chart(f,{type:'bar',data:{labels:['Doctorado (curso)','Maestria','Especializacion'],datasets:[{data:[2,6,8],backgroundColor:['#FF4500','#000','#555'],barThickness:25}]},options:{responsive:true,indexAxis:'y',plugins:{legend:{display:false}},scales:{x:{grid:{color:'#E0E0E0'},ticks:{color:'#000',stepSize:1}},y:{grid:{display:false},ticks:{color:'#000',font:{size:12}}}}}});}

  // Proyeccion docente por ano
  const p=document.getElementById('proyeccionChart');
  if(p&&!ci.p){ci.p=new Chart(p,{type:'line',data:{labels:['Ano 1','Ano 2','Ano 3','Ano 4','Ano 5','Ano 6','Ano 7'],datasets:[{label:'Docentes TC',data:[5,6,8,10,12,14,16],borderColor:'#FF4500',backgroundColor:'#FF4500',pointRadius:4,tension:0.3},{label:'Docentes MT',data:[3,4,5,6,7,8,9],borderColor:'#000',backgroundColor:'#000',pointRadius:4,tension:0.3}]},options:{responsive:true,plugins:{legend:{labels:{color:'#000',font:{size:11}}}},scales:{y:{beginAtZero:true,ticks:{color:'#000'}},x:{ticks:{color:'#000'}}}}});}

  // Tech dimensionamiento
  const t=document.getElementById('techChart');
  if(t&&!ci.t){ci.t=new Chart(t,{type:'bar',data:{labels:['LMS','Sincronica','E-Libro','Antiplagio','Correo','Creacion'],datasets:[{label:'Capacidad (%)',data:[95,90,100,85,100,80],backgroundColor:['#FF4500','#000','#FF4500','#000','#FF4500','#000'],barThickness:20}]},options:{responsive:true,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,max:100,ticks:{color:'#000',callback:v=>v+'%'}},x:{ticks:{color:'#000',font:{size:10}}}}}});}
}
