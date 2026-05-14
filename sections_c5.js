// Condición 5 - Investigación (PPTX-style slide viewer)
window.SECTIONS.c5 = `
<div class="slide-header" style="border-bottom:2px solid #FF6600; padding-bottom:15px; margin-bottom:25px;">
    <div class="slide-subtitle" style="color:#FF6600; font-weight:bold; text-transform:uppercase; font-size:1.1rem;">Condición 05</div>
    <h1 style="color:#0A2540; font-size:2.2rem; margin:0; font-weight:bold;">Investigación e Innovación</h1>
</div>

<div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:12px; padding:20px; text-align:center;">
    <div style="margin-bottom:15px; display:flex; justify-content:space-between; align-items:center;">
        <button onclick="window.prevInvSlide()" style="background:#0A2540; color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:bold; font-size:1.1rem;"><i class="fas fa-arrow-left mr-2"></i> Anterior</button>
        <span id="invSlideCounter" style="font-weight:bold; color:#0A2540; font-size:1.2rem;">1 / 20</span>
        <button onclick="window.nextInvSlide()" style="background:#FF6600; color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:bold; font-size:1.1rem;">Siguiente <i class="fas fa-arrow-right ml-2"></i></button>
    </div>
    <img id="invSlideImg" src="slide_1.jpg" style="max-width:100%; border-radius:8px; border:2px solid #d1d5db; box-shadow:0 4px 12px rgba(0,0,0,0.15);" alt="Slide de Investigación">
    <div style="margin-top:10px; color:#6b7280; font-size:0.95rem;" id="invSlideTitle">Portada - Condición 5: Investigación</div>
</div>
`;

// Slide navigation - 20 slides from "ppt condicion 5 INDUSTRIAL.pptx"
// Paths are ROOT-relative (all files deployed to GitHub root, NOT inside presentacion/)
window._invSlides = [
    {img:'slide_1.jpg', title:'Portada - Condición 5: Investigación'},
    {img:'slide_2.jpg', title:'Modelo de Investigación, Innovación y Desarrollo'},
    {img:'slide_3.jpg', title:'Transferencia de Conocimiento'},
    {img:'slide_4.jpg', title:'Elementos para Definir Líneas de Investigación'},
    {img:'slide_5.jpg', title:'Conceptualización Teórica del Programa'},
    {img:'slide_6.jpg', title:'Tendencias del Conocimiento'},
    {img:'slide_7.jpg', title:'Estrategias Institucionales de Investigación'},
    {img:'slide_8.jpg', title:'Convocatorias y Redes'},
    {img:'slide_9.jpg', title:'Semilleros de Investigación'},
    {img:'slide_10.jpg', title:'Redes de Investigación Proyectadas (1)'},
    {img:'slide_11.jpg', title:'Redes de Investigación Proyectadas (2)'},
    {img:'slide_12.jpg', title:'Grupo de Investigación'},
    {img:'slide_13.jpg', title:'Acciones Consolidadas de Investigación'},
    {img:'slide_14.jpg', title:'Líneas de Investigación del Programa'},
    {img:'slide_15.jpg', title:'Sublíneas y Articulación'},
    {img:'slide_16.jpg', title:'Estrategias Pedagógicas de Aula'},
    {img:'slide_17.jpg', title:'Asignaturas del Componente Investigativo'},
    {img:'slide_18.jpg', title:'Aportes al Sector Productivo'},
    {img:'slide_19.jpg', title:'Proyección de Investigación a 7 Años'},
    {img:'slide_20.jpg', title:'Síntesis de Investigación e Innovación'}
];
window._invIdx = 0;

window.nextInvSlide = function() {
    if(window._invIdx < window._invSlides.length - 1) {
        window._invIdx++;
        window._updateInvSlide();
    }
};
window.prevInvSlide = function() {
    if(window._invIdx > 0) {
        window._invIdx--;
        window._updateInvSlide();
    }
};
window._updateInvSlide = function() {
    var s = window._invSlides[window._invIdx];
    var img = document.getElementById('invSlideImg');
    var counter = document.getElementById('invSlideCounter');
    var title = document.getElementById('invSlideTitle');
    if(img) img.src = s.img;
    if(counter) counter.textContent = (window._invIdx + 1) + ' / ' + window._invSlides.length;
    if(title) title.textContent = s.title;
};
