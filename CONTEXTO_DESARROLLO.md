# 📘 Manual de Contexto y Conocimiento del Proyecto
## Sustentación Técnica — Ingeniería Industrial Virtual (TO)

Este documento ha sido creado para preservar el **contexto completo, decisiones arquitectónicas, reglas de marca y el historial de correcciones** de este proyecto. Su objetivo es que cualquier futuro agente o desarrollador pueda continuar los ajustes sin necesidad de comenzar desde cero a entender la base de código.

---

## 🏢 1. Identidad del Proyecto y Reglas de Marca (Branding)

El proyecto representa la sustentación de condiciones de calidad para el registro calificado del programa de **Ingeniería Industrial Virtual** de la **Corporación Escuela Tecnológica del Oriente**.

> [!IMPORTANT]
> **Reglas críticas de branding que deben respetarse en cualquier modificación visual:**
> * **Siglas de la Institución:** Siempre debe denominarse **TO** (nunca ETO, Corporación Escuela Tecnológica del Oriente).
> * **Paleta de Colores Institucionales:**
>   * **Azul Marino (Principal):** `#0A2540` (Usado para fondos oscuros, encabezados principales, botones activos).
>   * **Rojo TO (Acento):** `#C8102E` (Reemplaza cualquier color naranja previo. Usado para bordes destacados, estados hover activos, y botones de acción principal como "Siguiente").
>   * **Azul Claro:** `#173A66` (Usado para insignias secundarias o elementos destacados intermedios).
>   * **Gris Claro de Fondo:** `#F3F4F6` o `#F8FAFC`.
> * **Tipografía:**
>   * **Encabezados (h1, h2, h3, h4):** Montserrat (fuente premium de Google Fonts importada en el shell).
>   * **Cuerpo de texto / Tablas:** Open Sans o Roboto (para máxima legibilidad técnica).

---

## 🛠️ 2. Arquitectura del Sistema y Mapa de Archivos

El sistema es una aplicación interactiva modular SPA (Single Page Application) construida con HTML5, TailwindCSS (configurado de manera personalizada con los colores institucionales), Chart.js, ECharts y Leaflet.

### Estructura de Archivos Clave:
```
REG INGENIERIA INDUSTRIAL/
└── presentacion/
    ├── index.html           # Shell de la aplicación, control de acceso (login) y modal de presentación
    ├── app.css              # Estilos personalizados adicionales
    ├── app.js               # Enrutamiento, inyección de componentes y guards de inicialización
    ├── charts.js            # Inicializaciones de gráficos generales
    ├── sections.js          # Base de datos documental original (v6)
    ├── sections2.js         # Base de datos documental complementaria (v17)
    ├── sections_c1.js       # Condición 1 (Denominación)
    ├── sections_c2.js       # Condición 2 (Justificación - incluye mapa y gráficos ECharts)
    ├── sections_c3.js       # Condición 3 (Contenidos Curriculares - incluye malla de 48 asignaturas)
    ├── sections_c5.js       # Condición 5 (Investigación - incluye carrusel de slides)
    ├── sections_c6.js       # Condición 6 (Relación con el Sector Externo)
    ├── sections_c7.js       # Condición 7 (Profesores)
    ├── sections_c8.js       # Condición 8 (Medios Educativos - pestañas técnicas y carrusel de slides)
    ├── sections_c9.js       # Condición 9 (Infraestructura - contiene sedes y gráfico de radar)
    ├── sections_anexos.js   # Documentos anexos ordenados de forma interactiva y verificable
    └── assets/              # Diapositivas gráficas complementarias (c5_slide_*.png, c9_slide_*.png, etc.)
```

---

## ⚙️ 3. Componentes Críticos e Interactividad

### 🔒 Pasarela de Acceso (Login)
* Implementado directamente en `index.html`.
* El PIN de acceso institucional está hardcodeado en la constante `PWD_HASH` y es: **`TO2026`**.

### 📊 Gráficos Dinámicos y Mapas
* **Condición 2:** Utiliza un mapa de **Leaflet.js** para posicionar geográficamente el programa en Bucaramanga y realiza comparaciones nacionales usando **ECharts**.
* **Condición 9 (Dimensionamiento Tecnológico):** Utiliza **Chart.js** para renderizar un gráfico de radar ("telaraña").
  * **Problema histórico resuelto:** El canvas colapsaba o provocaba bucles infinitos de redimensionamiento. Se solucionó envolviendo el canvas en un contenedor relativo con dimensiones estrictas:
    ```html
    <div style="position: relative; height: 230px; width: 100%; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
        <canvas id="techChart" style="max-height: 100%; max-width: 100%; display: block;"></canvas>
    </div>
    ```

### 🗓️ Malla Curricular Interactiva (Condición 3)
* Muestra la estructura de **48 asignaturas** distribuidas por semestres y áreas de formación.
* Permite filtrado interactivo por componente (Ciencias Básicas, Ingeniería Aplicada, etc.) y áreas específicas con resaltado dinámico de prerrequisitos. **No se debe alterar este comportamiento.**

---

## 📈 4. Historial de Bugs Críticos Resueltos (Lecciones Aprendidas)

1. **Bucle Infinito de Redimensionamiento (Chart.js):**
   * *Síntoma:* El gráfico de radar se estiraba descontroladamente y flotaba por toda la hoja.
   * *Solución:* Chart.js requiere un padre con `position: relative` y una altura CSS definida para no entrar en bucle dinámico de resize. Se implementó un contenedor relativo estable en `sections_c9.js`.
2. **Excepciones de Elementos Nulos en Carga Inicial (`app.js`):**
   * *Síntoma:* `TypeError: Cannot read properties of null (reading 'appendChild')` al cargar la página de slides directamente.
   * *Solución:* Se agregaron guards de tipo `if (nm)` y `if (mc)` para validar el DOM antes de manipular barras de navegación, estabilizando la consola del navegador.
3. **Condición de Carrera (Race Condition) en Canvas de Gráficos:**
   * *Síntoma:* Al cambiar entre las pestañas "Resumen Técnico" y "Presentación Completa" en Condición 9, el gráfico no se renderizaba o daba errores de contexto duplicado.
   * *Solución:* Se programó una destrucción previa limpia con `window.ci.t.destroy()` y un retraso síncrono controlado de 50ms antes de instanciar un nuevo `Chart` para dar tiempo al contenedor a salir de display `none`.
4. **Problemas de Caché del Cliente:**
   * *Síntoma:* Los ajustes subidos a producción no se visualizaban de inmediato por persistencia de caché en los navegadores de los pares académicos.
   * *Solución:* Se implementaron parámetros de consulta numéricos en todas las llamadas de scripts en `index.html` (por ejemplo, `sections_c9.js?v=17`). **Cada vez que se suban cambios, se debe incrementar esta versión en el HTML.**

---

## 🚀 5. Flujo de Trabajo para el Próximo Desarrollador

Cuando necesites hacer ajustes:
1. Realiza tus modificaciones en los archivos JS correspondientes (`sections_cX.js`).
2. Si los cambios afectan la visualización, incrementa el parámetro de versión (`?v=XX`) de los scripts modificados en [index.html](file:///c:/Users/Estudiante%2008/Documents/Pedro_Noriega/Acreditaci%C3%B3n_Alta%20Calidad/Visitas_programas/REG%20INGENIERIA%20INDUSTRIAL/presentacion/index.html).
3. Sube los cambios al repositorio utilizando git de manera limpia:
   ```bash
   git add .
   git commit -m "Descripción clara de tu ajuste"
   git push origin main
   ```
4. Espera 1 minuto a que GitHub Pages procese la compilación y prueba utilizando recarga forzada (`Ctrl + F5` o `Cmd + Shift + R`).

---

## 📝 6. Últimos Avances y Estado Actual (Fase Mayo 2026)

Se ha consolidado con éxito la reestructuración académica y la interactividad curricular avanzada en la Condición 2 y Condición 3:

### A. Condición 2 (Justificación)
* **Perfil de Egreso Integrado**: Al final del timeline se añadió una sección interactiva para explorar las Competencias del Egresado (Específicas, Genéricas, Transversales y Digitales).
* **Duración Curricular Corrección**: Se ajustó la duración de la propuesta de la TO a **8 semestres** (144 créditos), unificándolo con la malla real.
* **UNAD y Competencia Bucaramanga**: Se reubicó la UNAD al ámbito nacional (registro en Bogotá), dejando el contador de competidores regionales virtuales locales en Santander en **0**, maximizando la justificación y pertinencia del programa de la TO.

### B. Condición 3 (Aspectos Curriculares)
* **Mapeo del Perfil (Puntos 9 al 16)**: Cada una de las 48 asignaturas de `window.trazabilidadData` cuenta con la propiedad `perfil` asignada, mapeada a su punto específico de egreso. El panel inferior de la malla interactiva renderiza este aporte de forma dinámica con resaltado naranja (`#FF6600`) al seleccionar cualquier materia.
* **6 Componentes PEP Oficiales**: Se reagruparon las 48 asignaturas bajo los componentes oficiales: *Ciencias Básicas de Ingeniería* (9), *Tecnología, Análisis y Transformación de Datos* (8), *Procesos y Sistemas Productivos* (10), *Gestión Organizacional, Económica y Financiera* (10), *Investigación, Innovación y Emprendimiento* (4), *Formación Humanística, Ética y Ciudadana* (4) y *Componente Electivo* (3).
* **Perfiles y RAP Rediseño**: Se refactorizó la pestaña "Perfiles y RA" a una interfaz interactiva de doble columna, detallando Perfil de Ingreso (Aspirante), Perfil de Egreso y los **9 Resultados de Aprendizaje del Programa (RAP)** en un listado auto-desplazable.
* **Modelo Tridimensional del Currículo (Ilustración 2 PEI)**:
  - Se implementó la nueva pestaña **"Modelo PEI (Tridimensional)"** con un gráfico vectorial SVG de alta definición de los ejes cartesianos interactivos (Longitudinal, Problémico y Transversal).
  - Incluye la representación vectorial exacta de la tabla "Plan de estudios, áreas, asignaturas" en el cuadrante superior izquierdo.
  - Al interactuar con el SVG (hover, clic o selector inferior), el panel derecho inyecta los conceptos pedagógicos institucionales del PEI y lista las asignaturas reales que materializan cada eje.

### C. Estado del Repositorio y Despliegue
* **Caché**: Archivo index.html configurado con script parametrizado como `sections_c3.js?v=23`.
* **Sincronización**: Cambios consolidados, probados y subidos de manera exitosa en `origin/main` en GitHub, listos para visualización en producción.
