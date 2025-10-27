console.log("CodeSpace Hub listo 🚀");

// ===== FUNCIONALIDAD PARA cursos.html (toggle de detalles) =====
if (document.querySelectorAll('.toggle-detalle').length > 0) {
  const botonesDetalle = document.querySelectorAll('.toggle-detalle');

  botonesDetalle.forEach(btn => {
    btn.addEventListener('click', () => {
      const curso = btn.closest('.curso');
      const detalle = curso.querySelector('.detalle-curso');

      // Cierra otros detalles si solo quieres uno abierto
      document.querySelectorAll('.detalle-curso').forEach(d => {
        if (d !== detalle) d.classList.remove('activo');
      });

      detalle.classList.toggle('activo');
      btn.textContent = detalle.classList.contains('activo') ? 'Ocultar detalles' : 'Ver detalles';
    });
  });
}

// ===== FUNCIONALIDAD PARA curso.html (carga dinámica de curso) =====
if (document.getElementById('titulo-curso')) {
  const params = new URLSearchParams(window.location.search);
  const cursoId = params.get('curso');

  const cursos = {
    1: {
      titulo: "Curso 1: Lógica de programación",
      descripcion: "Desarrolla el pensamiento computacional y aprende a representar algoritmos paso a paso.",
      fondo: "assets/img/C+.png",
      contenido: [
        "Pensamiento computacional",
        "Diagramas de flujo",
        "Estructuras de control",
        "Escritura de pseudocódigo",
        "Ejercicios prácticos guiados"
      ]
    },
    2: {
      titulo: "Curso 2: Introducción a PSeInt",
      descripcion: "Aprende los fundamentos de la programación usando PSeInt.",
      fondo: "assets/img/curso2-bg.jpg",
      contenido: [
        "Conceptos básicos de programación",
        "Uso del entorno de PSeInt",
        "Variables y tipos de datos",
        "Estructuras condicionales y repetitivas",
        "Ejercicios guiados"
      ]
    },
    3: {
      titulo: "Curso 3: Fundamentos de Python",
      descripcion: "Aprende a programar con Python desde cero con un mini-proyecto final.",
      fondo: "assets/img/curso3-bg.jpg",
      contenido: [
        "Instalación y configuración",
        "Variables y operadores",
        "Condicionales y bucles",
        "Funciones simples",
        "Mini-proyecto: calculadora básica"
      ]
    },
    4: {
      titulo: "Curso 4: Programación modular",
      descripcion: "Organiza tus programas en funciones reutilizables y desarrolla un mini-reto.",
      fondo: "assets/img/curso4-bg.jpg",
      contenido: [
        "Funciones y procedimientos",
        "Paso de parámetros",
        "Creación de menús de opciones",
        "Mini-reto práctico"
      ]
    }
  };

  const hero = document.querySelector(".hero-dinamico");

  if (cursoId && cursos[cursoId]) {
    const curso = cursos[cursoId];
    document.getElementById("titulo-curso").textContent = curso.titulo;
    document.getElementById("descripcion-curso").textContent = curso.descripcion;

    // Fondo dinámico
    hero.style.backgroundImage = `url('${curso.fondo}')`;

    // Rellenar temario
    const ul = document.getElementById("contenido-curso");
    curso.contenido.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  } else {
    document.getElementById("titulo-curso").textContent = "Curso no encontrado";
    document.getElementById("descripcion-curso").textContent = "Selecciona un curso válido desde la página de cursos.";
    hero.style.background = "#111";
  }
}
