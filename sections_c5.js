// Condición 5 - Investigación (PPTX-style slide viewer)
window.SECTIONS.c5 = `
<div class="slide-header" style="border-bottom:2px solid #FF6600; padding-bottom:15px; margin-bottom:25px;">
    <div class="slide-subtitle" style="color:#FF6600; font-weight:bold; text-transform:uppercase; font-size:1.1rem;">Condición 05</div>
    <h1 style="color:#0A2540; font-size:2.2rem; margin:0; font-weight:bold;">Investigación e Innovación</h1>
</div>

<div style="background:#f9fafb; border:2px solid #e5e7eb; border-radius:12px; padding:20px; text-align:center;">
    <div style="margin-bottom:15px; display:flex; justify-content:space-between; align-items:center;">
        <button onclick="window.prevInvSlide()" style="background:#0A2540; color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:bold; font-size:1.1rem;"><i class="fas fa-arrow-left mr-2"></i> Anterior</button>
        <span id="invSlideCounter" style="font-weight:bold; color:#0A2540; font-size:1.2rem;">1 / 19</span>
        <button onclick="window.nextInvSlide()" style="background:#FF6600; color:white; border:none; padding:12px 24px; border-radius:8px; cursor:pointer; font-weight:bold; font-size:1.1rem;">Siguiente <i class="fas fa-arrow-right ml-2"></i></button>
    </div>
    <img id="invSlideImg" src="assets/slide_2.png" style="max-width:100%; border-radius:8px; border:2px solid #d1d5db; box-shadow:0 4px 12px rgba(0,0,0,0.15);" alt="Slide de Investigación">
    <div style="margin-top:10px; color:#6b7280; font-size:0.95rem;" id="invSlideTitle">Modelo de Investigación, Innovación y Desarrollo</div>
</div>
`;

// Slide navigation for Condición 5
window._invSlides = [
    {img:'assets/slide_2.png', title:'Modelo de Investigación, Innovación y Desarrollo'},
    {img:'assets/slide_3.png', title:'Transferencia de Conocimiento'},
    {img:'assets/slide_4.png', title:'Elementos para Definir Líneas de Investigación'},
    {img:'assets/slide_5.png', title:'Conceptualización Teórica del Programa'},
    {img:'assets/slide_6.png', title:'Tendencias del Conocimiento'},
    {img:'assets/slide_7.png', title:'Estrategias Institucionales de Investigación'},
    {img:'assets/slide_8.png', title:'Convocatorias y Redes'},
    {img:'assets/slide_9.png', title:'Semilleros de Investigación'},
    {img:'assets/slide_10.png', title:'Redes de Investigación Proyectadas (1)'},
    {img:'assets/slide_11.png', title:'Redes de Investigación Proyectadas (2)'},
    {img:'assets/slide_12.png', title:'Grupo de Investigación'},
    {img:'assets/slide_13.png', title:'Acciones Consolidadas de Investigación'},
    {img:'assets/slide_14.png', title:'Líneas de Investigación del Programa'},
    {img:'assets/slide_15.png', title:'Sublíneas y Articulación'},
    {img:'assets/slide_16.png', title:'Estrategias Pedagógicas de Aula'},
    {img:'assets/slide_17.png', title:'Asignaturas del Componente Investigativo'},
    {img:'assets/slide_18.png', title:'Aportes al Sector Productivo'},
    {img:'assets/slide_19.png', title:'Proyección de Investigación a 7 Años'},
    {img:'assets/slide_20.png', title:'Síntesis de Investigación e Innovación'}
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
