console.log("Curso dinámico cargado correctamente 🚀");

// Obtener el número de curso desde la URL
const params = new URLSearchParams(window.location.search);
const cursoSeleccionado = params.get("curso") || "1";

// === Contenido de los módulos por recurso ===
const contenidoModulos = {
  // Curso 1 – Lógica de programación
  dia1: {
    objetivo: `<p><strong>Objetivo:</strong> Comprender cómo se descompone un problema en pasos lógicos.</p>`,
    teoria: `
      <p><strong>Temas:</strong></p>
      <ul>
        <p>¿Qué es el pensamiento computacional?<p>
        <p>Descomposición, abstracción, reconocimiento de patrones.<p>
        <p>Qué es un algoritmo y sus características.<p>
      </ul>
    `,
    ejemplos: `
      <p><strong>Ejemplos:</strong> Hacer un sándwich, preparar té, crear un algoritmo simple en lenguaje natural.</p>
    `,
    prueba_diagnostica: `
      <p><strong>Prueba diagnóstica:</strong> Preguntas sobre descomposición de problemas y pasos de algoritmos.</p>
    `
  },
  dia2: {
    objetivo: `<p><strong>Objetivo:</strong> Aprender a crear diagramas de flujo para representar algoritmos.</p>`,
    teoria: `<p><strong>Teoría:</strong> Diagramas de flujo, símbolos y reglas de construcción.</p>`,
    ejemplos: `<p><strong>Ejemplos:</strong> Crear diagramas de flujo en papel o herramientas digitales.</p>`
  },
  dia3: {
    objetivo: `<p><strong>Objetivo:</strong> Conocer variables y tipos de datos, y cómo manipularlos correctamente.</p>`,
    teoria: `<p><strong>Teoría:</strong> Concepto de variable, tipos de datos y buenas prácticas para nombrarlas.</p>`,
    ejemplos: `<p><strong>Ejemplos:</strong> Crear ejercicios de asignación paso a paso con entrada y salida de datos.</p>`,
    quiz_intermedio: `<p><strong>Quiz:</strong> Preguntas para reforzar comprensión de variables y tipos de datos.</p>`
  },
  dia4: {
    objetivo: `<p><strong>Objetivo:</strong> Aplicar estructuras secuenciales y condicionales para resolver problemas.</p>`,
    teoria: `<p><strong>Teoría:</strong> Estructuras secuenciales y condicionales (if / if-else).</p>`,
    ejemplos: `<p><strong>Ejemplos:</strong> Construir diagramas y pseudocódigo con decisiones (ej: edad ≥ 18 → mostrar "adulto").</p>`
  },
  dia5: {
    objetivo: `<p><strong>Objetivo:</strong> Integrar todo lo aprendido en pseudocódigo completo.</p>`,
    teoria: `<p><strong>Teoría:</strong> Estructura general de un programa en pseudocódigo.</p>`,
    ejemplos: `<p><strong>Ejemplos:</strong> Resolver ejercicios completos paso a paso.</p>`,
    quiz_final: `<p><strong>Quiz final:</strong> Evaluación de todo lo aprendido en pseudocódigo.</p>`
  },

  // Curso 2 – PSeInt
  pseint1: {
    objetivo: `<p><strong>Objetivo:</strong> Familiarizarse con la sintaxis básica de PSeInt.</p>`,
    teoria: `<p><strong>Teoría:</strong> Sintaxis básica de PSeInt.</p>`,
    ejemplos: `<p><strong>Ejemplos:</strong> Crear programas simples en PSeInt.</p>`,
    quiz: `<p><strong>Quiz:</strong> Preguntas de sintaxis básica.</p>`
  },
  pseint2: {
    objetivo: `<p><strong>Objetivo:</strong> Aprender condicionales y bucles en PSeInt.</p>`,
    teoria: `<p><strong>Teoría:</strong> Condicionales y bucles en PSeInt.</p>`,
    ejemplos: `<p><strong>Ejemplos:</strong> Crear ejercicios con if, while, for.</p>`,
    quiz: `<p><strong>Quiz:</strong> Preguntas de condicionales y bucles.</p>`
  },
  pseint3: {
    objetivo: `<p><strong>Objetivo:</strong> Resolver problemas prácticos usando PSeInt.</p>`,
    teoria: `<p><strong>Teoría:</strong> Resolución de problemas prácticos en PSeInt.</p>`,
    ejemplos: `<p><strong>Ejemplos:</strong> Programas completos con entradas y salidas.</p>`,
    quiz: `<p><strong>Quiz:</strong> Evaluación de ejercicios prácticos.</p>`
  },

  // Curso 3 – Python
  py1: {
    objetivo: `<p><strong>Objetivo:</strong> Comprender variables y tipos de datos en Python.</p>`,
    teoria: `<p><strong>Teoría:</strong> Variables y tipos de datos en Python.</p>`,
    ejemplos: `<p><strong>Ejemplos:</strong> Crear variables y operaciones básicas.</p>`,
    quiz: `<p><strong>Quiz:</strong> Preguntas de variables y tipos de datos.</p>`
  },
  py2: {
    objetivo: `<p><strong>Objetivo:</strong> Aplicar condicionales y bucles en Python.</p>`,
    teoria: `<p><strong>Teoría:</strong> Condicionales y bucles en Python.</p>`,
    ejemplos: `<p><strong>Ejemplos:</strong> Estructuras if, while y for.</p>`,
    quiz: `<p><strong>Quiz:</strong> Preguntas de control de flujo.</p>`
  },
  py3: {
    objetivo: `<p><strong>Objetivo:</strong> Crear funciones y módulos reutilizables en Python.</p>`,
    teoria: `<p><strong>Teoría:</strong> Funciones y módulos en Python.</p>`,
    ejemplos: `<p><strong>Ejemplos:</strong> Crear funciones y reutilizar código.</p>`,
    quiz: `<p><strong>Quiz:</strong> Preguntas sobre funciones y modularización.</p>`
  },
  py4: {
    objetivo: `<p><strong>Objetivo:</strong> Integrar todo lo aprendido en un proyecto final.</p>`,
    teoria: `<p><strong>Teoría:</strong> Proyecto final integrando todo lo aprendido.</p>`,
    ejemplos: `<p><strong>Ejemplos:</strong> Mini-proyecto completo.</p>`,
    quiz: `<p><strong>Quiz:</strong> Evaluación final del proyecto.</p>`
  },

  // Curso 4 – Modular
  mod1: {
    objetivo: `<p><strong>Objetivo:</strong> Entender el concepto de modularización.</p>`,
    teoria: `<p><strong>Teoría:</strong> Concepto de modularización.</p>`,
    ejemplos: `<p><strong>Ejemplos:</strong> Separar un programa en funciones.</p>`,
    quiz: `<p><strong>Quiz:</strong> Preguntas de modularización.</p>`
  },
  mod2: {
    objetivo: `<p><strong>Objetivo:</strong> Aprender a crear funciones en pseudocódigo.</p>`,
    teoria: `<p><strong>Teoría:</strong> Funciones en pseudocódigo.</p>`,
    ejemplos: `<p><strong>Ejemplos:</strong> Crear funciones y llamarlas en pseudocódigo.</p>`,
    quiz: `<p><strong>Quiz:</strong> Preguntas sobre funciones.</p>`
  },
  mod3: {
    objetivo: `<p><strong>Objetivo:</strong> Aplicar modularización en un mini-reto.</p>`,
    teoria: `<p><strong>Teoría:</strong> Mini-reto aplicando modularización.</p>`,
    ejemplos: `<p><strong>Ejemplos:</strong> Resolver mini-reto paso a paso.</p>`,
    quiz: `<p><strong>Quiz:</strong> Evaluación del mini-reto.</p>`
  }
};

// === Datos de los cursos ===
const cursos = {
  1: {
    titulo: "Curso 1: Lógica de Programación",
    descripcion: "Desarrolla el pensamiento computacional y aprende a representar algoritmos paso a paso.",
    imagen: "assets/img/C+.png",
    modulos: [
      { nombre: "🧩 Tema 1 – Pensamiento computacional y algoritmos 🧩", id: "dia1", recursos: ["Teoría", "Ejemplos", "Prueba diagnóstica"] },
      { nombre: "🔄 Tema 2 – Diagramas de flujo 🔄", id: "dia2", recursos: ["Teoría", "Ejemplos"] },
      { nombre: "🔢 Tema 3 – Variables y tipos de datos 🔢", id: "dia3", recursos: ["Teoría", "Ejemplos", "Quiz intermedio"] },
      { nombre: "⚙️ Tema 4 – Estructuras secuenciales y condicionales ⚙️", id: "dia4", recursos: ["Teoría", "Ejemplos"] },
      { nombre: "💻 Tema 5 – Pseudocódigo completo y práctica guiada 💻", id: "dia5", recursos: ["Teoría", "Ejemplos", "Quiz final"] }
    ]
  },
  2: {
    titulo: "Curso 2: Introducción a PSeInt",
    descripcion: "Aprende los fundamentos de la programación usando PSeInt.",
    imagen: "assets/img/pseint1.png",
    modulos: [
      { nombre: "Día 1 – Sintaxis básica en PSeInt", id: "pseint1", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Día 2 – Condicionales y bucles", id: "pseint2", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Día 3 – Ejercicios prácticos", id: "pseint3", recursos: ["Teoría", "Ejemplos", "Quiz"] }
    ]
  },
  3: {
    titulo: "Curso 3: Fundamentos de Python",
    descripcion: "Aprende a programar con Python desde cero con un mini-proyecto final.",
    imagen: "assets/img/python1.png",
    modulos: [
      { nombre: "Día 1 – Variables y tipos de datos", id: "py1", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Día 2 – Condicionales y bucles", id: "py2", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Día 3 – Funciones y módulos", id: "py3", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Día 4 – Proyecto final", id: "py4", recursos: ["Teoría", "Ejemplos", "Quiz"] }
    ]
  },
  4: {
    titulo: "Curso 4: Programación Modular",
    descripcion: "Organiza tus programas en funciones reutilizables y desarrolla un mini-reto.",
    imagen: "assets/img/modular1.png",
    modulos: [
      { nombre: "Día 1 – Concepto de modularización", id: "mod1", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Día 2 – Funciones en pseudocódigo", id: "mod2", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Día 3 – Mini reto final", id: "mod3", recursos: ["Teoría", "Ejemplos", "Quiz"] }
    ]
  }
};

// === Función principal ===
function cargarCurso() {
  const curso = cursos[cursoSeleccionado];

  if (!curso) {
    document.getElementById("titulo-curso").textContent = "Curso no encontrado";
    document.getElementById("descripcion-curso").textContent = "Verifica el enlace o selecciona un curso válido.";
    return;
  }

  // Hero
  const hero = document.querySelector(".hero-curso");
  document.getElementById("titulo-curso").textContent = curso.titulo;
  document.getElementById("descripcion-curso").textContent = curso.descripcion;

  if (curso.imagen) {
    hero.style.backgroundImage = `linear-gradient(rgba(5,11,18,0.85), rgba(5,11,18,0.9)), url('${curso.imagen}')`;
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
    hero.style.backgroundRepeat = "no-repeat";
    hero.style.backgroundAttachment = "fixed";
  }

  // Contenedor de módulos
  const contenedor = document.getElementById("contenido-curso");
  contenedor.innerHTML = "";

  curso.modulos.forEach(mod => {
    const moduloHTML = `
      <section class="modulo">
        <h2>${mod.nombre}</h2>
        <div class="recursos">
          ${mod.recursos.map(r => `<button class="btn-recurso" data-target="${r.toLowerCase().replace(/\s/g,'-')}-${mod.id}">${r}</button>`).join("")}
        </div>
        ${mod.recursos.map(r => {
          const key = r.toLowerCase()
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "") // quitar tildes
                        .replace(/\s/g, "_");

          const contenido = contenidoModulos[mod.id]?.[key] || `<p>Aquí puedes colocar el contenido de "${r}".</p>`;
          const objetivoHTML = (key === "teoria" && contenidoModulos[mod.id]?.objetivo)
            ? contenidoModulos[mod.id].objetivo
            : "";

          return `
            <div id="${r.toLowerCase().replace(/\s/g,'-')}-${mod.id}" class="subseccion">
              <h3>${r}</h3>
              ${objetivoHTML}
              ${contenido}
            </div>
          `;
        }).join("")}
      </section>
    `;
    contenedor.insertAdjacentHTML("beforeend", moduloHTML);
  });

  // Scroll suave
  document.querySelectorAll(".btn-recurso").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(btn.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", cargarCurso);
