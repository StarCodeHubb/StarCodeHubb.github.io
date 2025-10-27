console.log("Curso dinámico cargado correctamente 🚀");

// Obtener el número de curso desde la URL
const params = new URLSearchParams(window.location.search);
const cursoSeleccionado = params.get("curso") || "1";

// === Datos de los cursos ===
const cursos = {
  1: {
    titulo: "Curso 1: Lógica de Programación",
    descripcion: "Desarrolla el pensamiento computacional y aprende a representar algoritmos paso a paso.",
    imagen: "assets/img/C+.png",
    modulos: [
      {
        nombre: "Pensamiento computacional",
        id: "pensamiento",
        recursos: ["Teoría", "Ejemplos", "Quiz"]
      },
      {
        nombre: "Diagramas de flujo",
        id: "diagramas",
        recursos: ["Teoría", "Ejemplos", "Quiz"]
      },
      {
        nombre: "Estructuras de control",
        id: "estructuras",
        recursos: ["Teoría", "Ejemplos", "Quiz"]
      }
    ]
  },
  2: {
    titulo: "Curso 2: Introducción a PSeInt",
    descripcion: "Aprende los fundamentos de la programación usando PSeInt.",
    imagen: "assets/img/pseint1.png",
    modulos: [
      { nombre: "Sintaxis básica en PSeInt", id: "pseint1", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Condicionales y bucles", id: "pseint2", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Ejercicios prácticos", id: "pseint3", recursos: ["Teoría", "Ejemplos", "Quiz"] }
    ]
  },
  3: {
    titulo: "Curso 3: Fundamentos de Python",
    descripcion: "Aprende a programar con Python desde cero con un mini-proyecto final.",
    imagen: "assets/img/python1.png",
    modulos: [
      { nombre: "Variables y tipos de datos", id: "py1", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Condicionales y bucles", id: "py2", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Funciones y módulos", id: "py3", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Proyecto final", id: "py4", recursos: ["Teoría", "Ejemplos", "Quiz"] }
    ]
  },
  4: {
    titulo: "Curso 4: Programación Modular",
    descripcion: "Organiza tus programas en funciones reutilizables y desarrolla un mini-reto.",
    imagen: "assets/img/modular1.png",
    modulos: [
      { nombre: "Concepto de modularización", id: "mod1", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Funciones en pseudocódigo", id: "mod2", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Mini reto final", id: "mod3", recursos: ["Teoría", "Ejemplos", "Quiz"] }
    ]
  }
};

// === Función principal ===
function cargarCurso() {
  const params = new URLSearchParams(window.location.search);
  const idCurso = params.get("curso");
  const curso = cursos[idCurso];

  if (!curso) {
    document.getElementById("titulo-curso").textContent = "Curso no encontrado";
    document.getElementById("descripcion-curso").textContent = "Verifica el enlace o selecciona un curso válido.";
    return;
  }

  // === HERO ===
  const hero = document.querySelector(".hero-curso");
  document.getElementById("titulo-curso").textContent = curso.titulo;
  document.getElementById("descripcion-curso").textContent = curso.descripcion;

  // Aplicar imagen de fondo si existe
  if (curso.imagen) {
    hero.style.backgroundImage = `linear-gradient(rgba(5,11,18,0.85), rgba(5,11,18,0.9)), url('${curso.imagen}')`;
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
    hero.style.backgroundRepeat = "no-repeat";
    hero.style.backgroundAttachment = "fixed";
  }

  // === MÓDULOS ===
  const contenedor = document.getElementById("contenido-curso");
  contenedor.innerHTML = "";

  curso.modulos.forEach(mod => {
    const moduloHTML = `
      <section class="modulo">
        <h2>${mod.nombre}</h2>
        <div class="recursos">
          ${mod.recursos
            .map(r => `<a href="#${r.toLowerCase()}-${mod.id}" class="btn-recurso">${r}</a>`)
            .join("")}
        </div>
        ${mod.recursos
          .map(
            r => `
          <div id="${r.toLowerCase()}-${mod.id}" class="subseccion">
            <h3>${r} — ${mod.nombre}</h3>
            <p>Aquí puedes colocar el contenido de "${r}".</p>
          </div>`
          )
          .join("")}
      </section>
    `;
    contenedor.insertAdjacentHTML("beforeend", moduloHTML);
  });
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", cargarCurso);
