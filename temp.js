
        const PWD_HASH = "TO2026"; 
        const condInfo = [
            { id: 'c1', title: '1. Denominación del Programa', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80', fileCount: 15 },
            { id: 'c2', title: '2. Justificación', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', fileCount: 12 },
            { id: 'c3', title: '3. Contenidos Curriculares', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80', fileCount: 10 },
            { id: 'c4', title: '4. Organización Académica', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80', fileCount: 8 },
            { id: 'c5', title: '5. Investigación', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80', fileCount: 19 },
            { id: 'c6', title: '6. Sector Externo', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=600&q=80', fileCount: 6 },
            { id: 'c7', title: '7. Profesores', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80', fileCount: 5 },
            { id: 'c8', title: '8. Medios Educativos', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80', fileCount: 8 },
            { id: 'c9', title: '9. Infraestructura', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80', fileCount: 5 }
        ];

        document.addEventListener("DOMContentLoaded", () => {
            const grid = document.getElementById('gridCards');
            grid.innerHTML = condInfo.map(c => `
                <div onclick="openPresentation('${c.id}', '${c.title}')" class="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:border-toBlue cursor-pointer group flex flex-col transform transition hover:-translate-y-2">
                    <div class="h-40 relative"><img src="${c.img}" class="w-full h-full object-cover"></div>
                    <div class="p-5 flex-1 flex flex-col">
                        <h3 class="text-lg font-bold text-toBlue font-heading">${c.title}</h3>
                        <div class="mt-auto pt-4 text-toRed font-bold text-sm"><i class="fas fa-play-circle mr-1"></i> 20 Slides</div>
                    </div>
                </div>
            `).join('');
        });

        let currentSlides = [], currentIndex = 0;

        function openPresentation(id, title) {
            document.getElementById('viewerTitle').innerText = title;
            currentSlides = window.PRESENTATION_SLIDES || [];
            
            if(currentSlides.length === 0) {
                alert("Error: No se han cargado los slides (sections.js)");
                return;
            }

            // Buscar el primer slide que corresponde a esta condicion
            let targetIndex = 0;
            if(id) {
                const foundIdx = currentSlides.findIndex(s => s.cond === id);
                if(foundIdx !== -1) targetIndex = foundIdx;
            }

            // Render UI Sidebar
            document.getElementById('slideList').innerHTML = currentSlides.map((s, i) => `
                <div onclick="goToSlide(${i})" id="btnSlide${i}" class="slide-nav-item p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50">
                    <div class="text-xs font-bold mb-1 ${s.cond===id?'text-toRed':'text-gray-400'}">${s.cat}</div>
                    <div class="text-sm font-semibold truncate ${s.cond===id?'text-toBlue':'text-gray-700'}">${s.title}</div>
                </div>
            `).join('');

            currentIndex = targetIndex;
            renderSlide();
            
            const viewer = document.getElementById('presentationViewer');
            viewer.classList.remove('hidden');
            setTimeout(() => viewer.classList.remove('opacity-0', 'scale-95'), 10);
            document.body.style.overflow = 'hidden';

            // Reiniciar scripts especificos de la diapositiva actual
            runSlideScripts();
        }

        function runSlideScripts() {
            setTimeout(() => {
                const s = currentSlides[currentIndex];
                // Graficos ChartJS de Condicion 2 y 3
                if(s.cond === 'c2' && document.getElementById('chartDemandaC2')) {
                    if(window.chartC2) window.chartC2.destroy();
                    window.chartC2 = new Chart(document.getElementById('chartDemandaC2'), {
                        type: 'bar',
                        data: { labels: ['Bogotá', 'Medellín', 'Santander', 'Resto País'], datasets: [{ label: 'Oferta Virtual', data: [15, 8, 1, 5], backgroundColor: '#C8102E' }] },
                        options: { responsive: true, maintainAspectRatio: false }
                    });
                }
                if(s.cond === 'c3' && document.getElementById('chartAreasC3')) {
                    if(window.chartC3) window.chartC3.destroy();
                    window.chartC3 = new Chart(document.getElementById('chartAreasC3'), {
                        type: 'doughnut',
                        data: { labels: ['C. Básicas', 'Ing. Aplicada', 'Gestión', 'Investigación', 'Humanística', 'Complementaria'], datasets: [{ data: [15, 30, 20, 15, 10, 10], backgroundColor: ['#3b82f6', '#ef4444', '#eab308', '#22c55e', '#a855f7', '#6b7280'] }] },
                        options: { responsive: true, maintainAspectRatio: false }
                    });
                }
                // Mapa Leaflet
                if(s.cond === 'c2' && document.getElementById('mapaColombiaSlide')) {
                    if(!window.myMap) {
                        window.myMap = L.map('mapaColombiaSlide').setView([4.5709, -74.2973], 5);
                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap' }).addTo(window.myMap);
                        L.marker([4.7110, -74.0721]).addTo(window.myMap).bindPopup("<b>Bogotá</b><br>15 programas virtuales.");
                        L.marker([7.1254, -73.1198]).addTo(window.myMap).bindPopup("<b>Bucaramanga</b><br>Sede TO. Gran oportunidad de expansión.");
                    } else {
                        window.myMap.invalidateSize();
                    }
                }
            }, 300);
        }

        function renderSlide() {
            const s = currentSlides[currentIndex];
            document.getElementById('slideCategory').innerText = s.cat;
            document.getElementById('slideTitle').innerText = s.title;
            document.getElementById('slideBody').innerHTML = s.html;
            document.getElementById('slideCounter').innerText = currentIndex + 1;

            // Actualizar numero total en UI
            document.getElementById('slideCounter').parentElement.innerHTML = \`<span id="slideCounter">\${currentIndex + 1}</span> / \${currentSlides.length}\`;

            document.querySelectorAll('.slide-nav-item').forEach(el => el.classList.remove('active', 'text-white'));
            const activeBtn = document.getElementById(`btnSlide${currentIndex}`);
            if(activeBtn) {
                activeBtn.classList.add('active');
                activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            
            runSlideScripts();
        }

        function nextSlide() { if(currentIndex < currentSlides.length - 1) { currentIndex++; renderSlide(); } }
        function prevSlide() { if(currentIndex > 0) { currentIndex--; renderSlide(); } }
        function goToSlide(idx) { currentIndex = idx; renderSlide(); }
        function closePresentation() {
            const v = document.getElementById('presentationViewer');
            v.classList.add('opacity-0', 'scale-95');
            setTimeout(() => { v.classList.add('hidden'); document.body.style.overflow = 'auto'; }, 300);
        }

        window.zoomMap = function(zona) {
            if(!window.myMap) return;
            if(zona === 'nacional') window.myMap.flyTo([4.5709, -74.2973], 5);
            if(zona === 'regional') window.myMap.flyTo([7.1254, -73.1198], 8);
            if(zona === 'local') window.myMap.flyTo([7.1139, -73.1198], 12);
        };

        document.addEventListener('keydown', e => {
            if(!document.getElementById('presentationViewer').classList.contains('hidden')) {
                if(e.key === "ArrowRight") nextSlide();
                if(e.key === "ArrowLeft") prevSlide();
                if(e.key === "Escape") closePresentation();
            }
        });

        // Intercept openModal de Condicion 5 original para que funcione como goToSlide
        window.openModal = function(imgSrc, title) {
            // Ir a un slide de anexo aleatorio o especifico para simularlo
            nextSlide();
        };
    