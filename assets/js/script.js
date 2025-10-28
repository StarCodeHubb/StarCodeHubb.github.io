console.log("Curso dinámico cargado correctamente 🚀");

// Obtener el número de curso desde la URL
const params = new URLSearchParams(window.location.search);
const cursoSeleccionado = params.get("curso") || "1";

// === Contenido de los módulos por recurso ===
const contenidoModulos = {
  // Curso 1 – Lógica de programación
  dia1: {
    objetivo: `<p><strong>Objetivos:</strong></p> 
    <p>
    ✔️ Comprender el significado y la utilidad del pensamiento computacional.<br>
    ✔️ Identificar sus pilares principales y su función.<br>
    ✔️ Aplicar estas ideas tanto en el aula como en la vida diaria.
     </p>`,
    teoria: `
      <p><strong>Temas:</strong></p>
      <ul>
        <p><strong>¿Qué es el pensamiento computacional?</strong></p>
        <p>En este primer tema se abordará el pensamiento computacional, una de las habilidades más importantes en la sociedad actual. No se trata únicamente de aprender a programar, sino de razonar y enfrentar los problemas de forma lógica, creativa y estructurada, de manera similar a como lo haría una computadora, pero aplicado a situaciones reales de la vida cotidiana.</p>
        <p>El pensamiento computacional es un proceso cognitivo que permite analizar un problema complejo, comprenderlo y diseñar soluciones efectivas. Para ello, requiere de una secuencia ordenada de acciones que ayudan a simplificar la situación, identificar lo esencial y organizar los pasos necesarios para resolverla. En otras palabras, implica pensar con precisión, planificar estrategias y tomar decisiones basadas en el análisis de la información disponible.</p>
        <p>Esta forma de pensamiento no se limita al ámbito de la tecnología o la informática. Por el contrario, puede aplicarse en cualquier contexto, desde planificar un viaje o un evento hasta resolver desafíos en el aula o en el trabajo. Por ejemplo, al decidir cómo llegar de un punto a otro en la ciudad, el pensamiento computacional nos ayuda a evaluar variables como la distancia, el tiempo, el tráfico o el clima, para luego elegir la mejor alternativa. Si alguna condición cambia, también somos capaces de replantear el proceso o ajustar la estrategia, tal como se hace en la programación al modificar un algoritmo.  <p>
        <p>De acuerdo con Cervera-Manjarrez et al. (2023), “el pensamiento computacional permite que el ser humano se adentre en un mundo rico y vasto de habilidades de abstracción y pragmatismo que le posibilitan un uso más consciente y adecuado de la tecnología”. Esta idea refuerza que el pensamiento computacional es una competencia clave en la formación moderna, pues impulsa el razonamiento lógico, la creatividad, la capacidad de análisis y la resolución efectiva de problemas.<p>
        <p>Asimismo, González y Martínez (2022) destacan que este tipo de pensamiento fomenta la autonomía, la reflexión y la transferencia del conocimiento, ya que al enfrentarse a una situación problemática, el estudiante aprende a formular hipótesis, analizar opciones y optimizar soluciones. En conjunto, ambas perspectivas subrayan que el desarrollo del pensamiento computacional no solo fortalece habilidades técnicas, sino también cognitivas y sociales, promoviendo un aprendizaje más crítico, colaborativo y adaptable a los retos del mundo digital. <p>
        <p>En síntesis, el pensamiento computacional no consiste en programar, sino en entender y estructurar el razonamiento humano de manera lógica y eficiente. Es una herramienta poderosa que permite transformar problemas complejos en soluciones claras, fomentando la creatividad, el pensamiento crítico y el trabajo en equipo. <p>
        <p> Antes de profundizar en sus componentes principales, es importante reconocer algunas ideas equivocadas y concepciones correctas que suelen presentarse al hablar de este concepto. A continuación, se muestra un cuadro comparativo que busca diferenciar los mitos y realidades sobre el pensamiento computacional, con el fin de comprender su verdadero alcance y relevancia. <p>
        <p style="margin-top: 25px;">
        <p style="margin-top: 25px;">
        <img src="assets/img/tema1siyno.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
        <p>  <p>
        <p><strong>Los cuatro pilares del pensamiento computacional:</strong></p>
        <p>  Descomposición, reconocimiento de patrones , abstracción y diseño de algoritmos<p>
        <img src="assets/img/Pcompu.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p>El pensamiento computacional se apoya en cuatro habilidades fundamentales que permiten comprender, analizar y resolver problemas de manera estructurada. Estas competencias no solo se aplican en el ámbito de la informática, sino también en la vida cotidiana, el trabajo y la educación, ayudando a desarrollar una mente analítica, creativa y lógica.  <p>
        <p>Según Rodríguez Canfranc (2023), el pensamiento computacional es una competencia clave en la era digital, pues permite adaptarse a un mundo cada vez más tecnológico. Esta afirmación resalta la importancia de desarrollar habilidades cognitivas que vayan más allá de la programación. Pensar de manera computacional implica analizar los problemas con lógica, creatividad y organización, cualidades indispensables para desenvolverse con éxito en entornos académicos, laborales y cotidianos cada vez más influenciados por la tecnología.  <p>
        <p>A diferencia de lo que muchos piensan, el pensamiento computacional no se limita al uso de ordenadores o la escritura de código; más bien, es un proceso mental que permite formular problemas y diseñar soluciones claras y efectivas, aplicables en cualquier ámbito. Como señala Jeannette Wing, una de las pioneras del concepto, esta disciplina consiste en “resolver problemas, diseñar sistemas y comprender el comportamiento humano utilizando los principios fundamentales de la informática”.  <p>
        <p>De esta forma, el pensamiento computacional se construye sobre cuatro pilares esenciales que orientan el análisis y la resolución de problemas: la descomposición, el reconocimiento de patrones, la abstracción y el diseño de algoritmos. Cada uno de ellos cumple un rol clave en la formación del razonamiento lógico y en la aplicación de estrategias eficientes tanto en contextos educativos como en situaciones reales de la vida diaria.  <p>
        <p>A continuación, se explican cada una de estas habilidades con más detalle:  <p>
        <p>📊1. Descomposición: <p>
        <p>La descomposición consiste en dividir un problema complejo en partes más pequeñas y manejables, lo que facilita su análisis y solución. Esta habilidad ayuda a comprender mejor la estructura del problema, identificar sus componentes principales y abordar cada parte de forma organizada. Al resolver paso a paso, se evita la confusión y se mejora la eficiencia del trabajo.  <p>
        <p>Ejemplo: Si queremos organizar una feria escolar, podemos dividir el proyecto en subtareas: elegir el lugar, definir los stands, asignar responsables y planificar la difusión. Cada etapa puede resolverse de manera independiente, logrando una gestión más clara y efectiva.  <p>
        <p style="margin-top: 25px;">
        <img src="assets/img/descomponer.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
        <p>⏺️2. Reconocimiento de patrones: <p>
        <p>El reconocimiento de patrones permite detectar similitudes, tendencias o repeticiones entre distintos problemas o situaciones. Esta habilidad es fundamental para reutilizar soluciones previas y optimizar el tiempo, ya que muchos desafíos comparten estructuras comunes. Reconocer patrones también fomenta la capacidad de predecir resultados y tomar decisiones más acertadas.  <p>
        <p>Ejemplo: Si un docente nota que sus estudiantes aprenden mejor con actividades visuales, puede aplicar esa misma estrategia en diferentes materias o temas, aprovechando un patrón de aprendizaje efectivo.  <p>
        <p style="margin-top: 25px;">
        <img src="assets/img/profe.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
        <p>🧊 3. Abstracción: <p>
        <p>La abstracción consiste en identificar los aspectos más importantes de un problema y eliminar los detalles que no son relevantes para su solución. De esta forma, se logra simplificar la información, concentrarse en lo esencial y diseñar modelos más claros y funcionales. Es una habilidad clave para priorizar, sintetizar y comprender la esencia de cualquier situación.  <p>
        <p>Ejemplo: Al diseñar una aplicación de recetas, no es necesario detallar el color o la textura de los ingredientes; lo esencial es definir los pasos del proceso de preparación, las cantidades y el tiempo de cocción.  <p>
        <p style="margin-top: 25px;">
        <img src="assets/img/recetaPro.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
        <p>💻 4. Diseño de algoritmos:  <p>
        <p>El diseño de algoritmos implica establecer una secuencia lógica y ordenada de pasos que conducen a la solución de un problema. Es la base de la programación, pero también se aplica en la organización de tareas diarias. Un buen algoritmo debe ser claro, preciso y repetible, de modo que cualquier persona pueda seguirlo y obtener el mismo resultado.  <p>
        <p>Ejemplo: Para preparar un sándwich, el algoritmo sería: tomar pan, colocar los ingredientes en orden, cerrar y servir. Este método garantiza coherencia y evita errores en el proceso.  <p>
        <p style="margin-top: 25px;">
        <img src="assets/img/prepararSand.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
        <p>Finalmente, estos cuatro pilares fortalecen el razonamiento lógico, la creatividad, la autonomía y la colaboración. Desarrollar el pensamiento computacional no solo prepara para comprender la tecnología, sino que también mejora la forma en que se analizan y resuelven los problemas cotidianos. En un mundo cada vez más digital, estas habilidades se convierten en herramientas esenciales para el aprendizaje significativo y la adaptación a los desafíos del siglo XXI.  <p>
        <p style="margin-top: 25px;">
        <img src="assets/img/esquemap.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
        
        <p><strong>Qué es un algoritmo y sus características:</strong></p>
        <p style="margin-top: 25px;">
        <img src="assets/img/Algotmos.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
        
        <p><strong>¿Qué es un algoritmo?</strong></p>
        <p style="margin-top: 30px;">
        <p style="text-align: center; font-style: italic; font-weight: bold;">
        "Un algoritmo es un conjunto de pasos que define cómo hay que realizar una tarea. 
        Para que una máquina como una computadora pueda llevar a cabo una tarea, 
        es preciso diseñar y representar un algoritmo en una forma que sea compatible con la máquina."
        </p>
        <p style="text-align: center; font-style: italic; font-weight: bold;">
        Brookshear, G. (2012), Introducción a la Computación (11a ed.). Pearson.
        </p>
        <p style="margin-top: 30px;">
        <p>En el ámbito del pensamiento computacional, un algoritmo se entiende como una secuencia finita y ordenada de pasos lógicos que permiten resolver un problema o realizar una tarea de manera sistemática. Según Cedeño y Cedeño (2021), los algoritmos representan “un conjunto de instrucciones bien definidas que, al ejecutarse paso a paso, conducen a la obtención de un resultado esperado.”
         Esto implica que su aplicación no se limita al campo de la programación, sino que puede observarse también en la vida cotidiana, como al seguir una receta, resolver una operación matemática o planificar una actividad. <p>
        <p>El pensamiento computacional utiliza los algoritmos como una herramienta esencial para estructurar el razonamiento y organizar las ideas de forma lógica, secuencial y coherente. En esta línea, Wing (2006) señala que el pensamiento computacional consiste en “la formulación de problemas y la representación de sus soluciones de manera que puedan ser ejecutadas eficazmente por un agente procesador de información.” Es decir, un algoritmo no solo define qué se debe hacer, sino también cómo debe hacerse. <p>
        <p style="margin-top: 25px;">
        <p>⚙️ Características de un algoritmo : <p>
        <p>De acuerdo con García-Molina y Valverde (2019), un algoritmo debe cumplir con una serie de características fundamentales que garantizan su eficacia y aplicabilidad. Estas propiedades permiten que un procedimiento sea comprendido, ejecutado y optimizado tanto por personas como por computadoras. <p>
        
        <p style="margin-top: 30px;">
        <img src="assets/img/finito.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
        <p> 1. Finito: <p>
        <p>Un algoritmo debe estar compuesto por un número limitado de pasos. Esto significa que el proceso debe tener un punto de inicio y un final claramente definidos. Si las instrucciones se ejecutaran de forma infinita, el problema nunca llegaría a resolverse.<p>
         <p>Ejemplo: Un algoritmo para calcular el promedio de notas termina una vez que obtiene el resultado final, no continúa calculando indefinidamente. <p>
         <p>2. Claridad: <p>
        <p> Cada paso o instrucción debe expresarse de forma precisa, sin ambigüedades o interpretaciones múltiples. La claridad garantiza que cualquier persona o máquina pueda seguir las instrucciones sin cometer errores por confusión.<p>
         <p> Ejemplo: En lugar de decir “procesar los datos”, una instrucción clara sería “sumar los valores numéricos de la columna A”.<p>
        <p>3. Secuencialidad: <p>
        <p>Las instrucciones de un algoritmo deben seguir un orden lógico y coherente. Cada paso depende del anterior y prepara el contexto para el siguiente, lo cual asegura que el resultado sea correcto.<p>
         <p> Ejemplo: Para preparar una receta, primero se reúnen los ingredientes, luego se mezclan y finalmente se cocinan; alterar el orden puede arruinar el resultado. <p>
        <p>4. Eficiencia: <p>
        <p>Un algoritmo debe poder aplicarse a una amplia variedad de casos similares, no únicamente a uno específico. Esta característica le otorga flexibilidad y reutilización.<p>
        <p>Ejemplo: Un algoritmo que calcula el promedio puede aplicarse tanto a notas escolares como a temperaturas o ingresos, siempre que los datos sean numéricos. <p>
        <p>Estas características aseguran que los algoritmos sean comprensibles, precisos y adaptables, permitiendo que cualquier proceso ya sea informático o cotidiano pueda ejecutarse de forma ordenada y eficiente. <p>
        <p style="margin-top: 30px;">
        <img src="assets/img/caraAlg.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
        <p>🧩 Estructura de un algoritmo: <p>
        <p>   Todo algoritmo se compone de tres partes fundamentales que determinan su funcionamiento: <p>
        <p>    - Entrada (input): <p>
        <p>      Corresponde a los datos iniciales o información necesaria para iniciar el proceso. <p>
        <p>      Ejemplo: los ingredientes de una receta o los números que se desean sumar. <p>
        <p>    - Proceso (processing): <p>
        <p>      Es el conjunto de pasos, operaciones o transformaciones que se realizan con los datos de entrada para llegar al resultado final.<p>
        <p>      Ejemplo: mezclar los ingredientes, realizar un cálculo o seguir un conjunto de reglas lógicas.<p>
        <p>    - Salida (output):<p>
        <p>      Es el resultado final que se obtiene después de ejecutar correctamente todos los pasos del proceso.<p>
        <p>      Ejemplo: el plato preparado, el resultado de una operación matemática o la generación de un reporte.<p>
        <p style="margin-top: 30px;">
        <img src="assets/img/eps.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
      
      </ul>
    `,
    ejemplos: `
      <p><strong>Ejemplos:</strong></p>
        <p><strong>🧠 Ejemplo 1: Reunión con los amigos en un lugar nuevo</strong></p>
        <p>Situación: <p>
        <p>Queremos organizar una salida con amigos, pero cada uno tiene gustos, presupuestos y horarios diferentes. <p>
        <p>Aplicación del pensamiento computacional: <p>
        <p> - Descomposición: Dividimos el problema en partes: elegir actividad, decidir lugar, calcular gastos y coordinar horarios.<p>
        <p> - Reconocimiento de patrones: Analizamos experiencias anteriores para ver qué actividades funcionaron bien.<p>
        <p> - Abstracción: Dejamos de lado detalles irrelevantes (como el color de las sillas del restaurante) y nos enfocamos en lo esencial: disponibilidad, precio y transporte.<p>
        <p> - Algoritmo: Paso a paso: crear una lista de opciones → verificar disponibilidad → calcular costos → confirmar el plan.<p>
        <p>Resultado: <p>
        <p>Se obtiene una planificación más clara y rápida, donde todos pueden participar y decidir con base en información concreta. <p>
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
    titulo: "Minicurso 1: Lógica de Programación",
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
    titulo: "Minicurso 2: Introducción a PSeInt",
    descripcion: "Aprende los fundamentos de la programación usando PSeInt.",
    imagen: "assets/img/pseint1.png",
    modulos: [
      { nombre: "Día 1 – Sintaxis básica en PSeInt", id: "pseint1", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Día 2 – Condicionales y bucles", id: "pseint2", recursos: ["Teoría", "Ejemplos", "Quiz"] },
      { nombre: "Día 3 – Ejercicios prácticos", id: "pseint3", recursos: ["Teoría", "Ejemplos", "Quiz"] }
    ]
  },
  3: {
    titulo: "Minicurso 3: Fundamentos de Python",
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
    titulo: "Minicurso 4: Programación Modular",
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

// === Agregar referencias bibliográficas por curso ===
function agregarReferencias(cursoId) {
  const contenedor = document.getElementById("contenido-curso");
  if (!contenedor) return;

  const referenciasPorCurso = {
    1: `
      <section class="modulo referencias" style="text-align: justify; margin-top: 40px; padding: 10px;">
        <h2 style="text-align: center; margin-bottom: 15px;">📚 Referencias bibliográficas</h2>
        <div style="text-align: left; margin-left: 30px;">
          <p>• Cervera-Manjarrez, J. et al. (2023). <em>El pensamiento computacional y la educación.</em> Revista Latinoamericana de Tecnología Educativa.</p>
          <p>• González, R. & Martínez, D. (2022). <em>Estrategias para fomentar el pensamiento lógico.</em> Editorial Académica Española.</p>
          <p>• Rodríguez Canfranc, M. (2023). <em>La importancia del pensamiento computacional en la era digital.</em> Fundación Telefónica.</p>
          <p>• Wing, J. (2006). <em>Computational Thinking.</em> Communications of the ACM, 49(3), 33–35.</p>
        </div>
      </section>
    `,
    2: `
      <section class="modulo referencias" style="text-align: justify; margin-top: 40px; padding: 10px;">
        <h2 style="text-align: center; margin-bottom: 15px;">📚 Referencias bibliográficas</h2>
        <div style="text-align: left; margin-left: 30px;">
          <p>• Castro, P. (2024). <em>Introducción práctica a PSeInt.</em> Universidad Nacional.</p>
          <p>• Mendoza, L. (2023). <em>Fundamentos de algoritmos con PSeInt.</em> Editorial Técnica.</p>
        </div>
      </section>
    `,
    3: `
      <section class="modulo referencias" style="text-align: justify; margin-top: 40px; padding: 10px;">
        <h2 style="text-align: center; margin-bottom: 15px;">📚 Referencias bibliográficas</h2>
        <div style="text-align: left; margin-left: 30px;">
          <p>• Sweigart, A. (2020). <em>Automate the Boring Stuff with Python.</em> No Starch Press.</p>
          <p>• Zelle, J. (2017). <em>Python Programming: An Introduction to Computer Science.</em> Franklin, Beedle & Associates.</p>
        </div>
      </section>
    `,
    4: `
      <section class="modulo referencias" style="text-align: justify; margin-top: 40px; padding: 10px;">
        <h2 style="text-align: center; margin-bottom: 15px;">📚 Referencias bibliográficas</h2>
        <div style="text-align: left; margin-left: 30px;">
          <p>• Gaddis, T. (2021). <em>Starting Out with Programming Logic and Design.</em> Pearson.</p>
          <p>• Malvino, A. (2019). <em>Programación modular aplicada.</em> McGraw-Hill.</p>
        </div>
      </section>
    `
  };

  if (referenciasPorCurso[cursoId]) {
    contenedor.insertAdjacentHTML("beforeend", referenciasPorCurso[cursoId]);
  }
}

// === Inicialización ===
document.addEventListener("DOMContentLoaded", () => {
  cargarCurso();
  agregarReferencias(cursoSeleccionado);
});
