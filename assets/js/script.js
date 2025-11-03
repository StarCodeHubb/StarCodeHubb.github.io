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
        <p>Para comprender mejor cómo aplicar el pensamiento computacional en distintas situaciones, a continuación exploraremos algunos ejemplos cotidianos.
        Cada uno de ellos mostrará cómo se ponen en práctica sus principales pilares: descomposición, reconocimiento de patrones, abstracción y diseño de algoritmos así como la estructura entrada, proceso y salida, que nos ayuda a entender cómo transformamos una idea o información en un resultado concreto. <p>
        <p><strong>🧩 Ejemplos del Pensamiento Computacional </strong></p>
        <p style="margin-top: 30px;">
        <p><strong>🧠 Ejemplo 1: Reunión con los amigos en un lugar nuevo</strong></p>
        <p>Situación: <p>
        <p>Queremos organizar una salida con amigos, pero cada uno tiene gustos, presupuestos y horarios diferentes. <p>
        <p>Aplicación del pensamiento computacional: <p>
        <img src="assets/img/reua.png" alt="Algoritmo" 
        style="float: right; width: 280px; margin: 10px 0 10px 15px; border-radius: 10px;">
        <p> - Descomposición: Dividimos el problema en partes: elegir actividad, decidir lugar, calcular gastos y coordinar horarios.<p>
        <p> - Reconocimiento de patrones: Analizamos experiencias anteriores para ver qué actividades funcionaron bien.<p>
        <p> - Abstracción: Dejamos de lado detalles irrelevantes (como el color de las sillas del restaurante) y nos enfocamos en lo esencial: disponibilidad, precio y transporte.<p>
        <p> - Algoritmo: <p>
        <p>   Paso a paso: crear una lista de opciones → verificar disponibilidad → calcular costos → confirmar el plan.<p>
        <p>Resultado: <p>
        <p>Se obtiene una planificación más clara y rápida, donde todos pueden participar y decidir con base en información concreta. <p>
        <p style="margin-top: 30px;">
        <p><strong>🍳 Ejemplo 2: Cocinemos</strong></p>
        <p>Descomposición: <p>
        <p>Dividir la tarea en pasos: seleccionar ingredientes, preparar utensilios, cocinar, servir. <p>
        <p>Ejemplo: <p>
        <p> - Entrada → lista de ingredientes.<p>
        <p> - Proceso → mezclar, batir, cocinar.<p>
        <p> - Salida → plato terminado.<p>
        <p> Referencia visual sugerida: Cooking and Decomposition of Food. (2023, marzo 14). YouTube. https://www.youtube.com/watch?v=SR9SWaN-cOY<p>
        <p style="margin-top: 30px;">
        <p><strong>🎮 Ejemplo 3: Videojuegos </strong></p>
        <p>Situación: <p>
        <p>En un videojuego, el jugador debe completar un nivel recolectando objetos, evitando enemigos y encontrando la salida antes de que acabe el tiempo. <p>
         <img src="assets/img/mario.png" alt="Algoritmo" 
        style="float: right; width: 280px; margin: 10px 0 10px 15px; border-radius: 10px;">
        <p>Aplicación del pensamiento computacional: <p>
        <p> - Descomposición: Identificar subproblemas: qué objetos recolectar, cómo evitarlos enemigos, cómo salir del nivel. <p>
        <p> - Reconocimiento de patrones: Usar estrategias que funcionaron en niveles anteriores.<p>
        <p> - Abstracción: Ignorar los elementos decorativos del entorno y centrarse solo en los objetivos necesarios para ganar.<p>
        <p> - Algoritmo:<p>
        <p>   Planificacion de secuencia de acciones: recolectar objetos → evitar obstáculos → dirigirse a la salida → completar el nivel.<p>
        <p>   Resultado: <p>
        <p>   El jugador optimiza sus decisiones, mejora su desempeño y puede aplicar estrategias similares en otros niveles.<p>
        <p style="margin-top: 30px;">
        <p><strong>📿 Ejemplo 4: El collar</strong></p>
        <p>Situación: <p>
        <p> Construir un collar de 24 cm. <p>
        <img src="assets/img/collar.png" alt="Algoritmo" 
        style="float: right; width: 280px; margin: 10px 0 10px 15px; border-radius: 10px;">
        <p>Preguntas clave: <p>
        <p> - ¿Cuál será el costo total? <p>
        <p> - ¿Qué materiales necesito? <p>
        <p> - ¿Qué materiales necesito? <p>
        <p> - ¿Cuántas piezas debe tener?<p>
        <p>Pensamiento computacional aplicado: <p>
        <p> - Descomponer el problema (materiales, medidas, costo).<p>
        <p> - Reconocer patrones (si cada cuenta mide 2 cm, se necesitan 12 piezas).<p>
        <p> - Abstraer detalles irrelevantes (colores o formas no afectan el cálculo).<p>
        <p> - Diseñar un algoritmo:<p>
        <p>   calcular cantidad de piezas × costo por unidad = costo total.<p>
        <p style="margin-top: 30px;">
        <p><strong>⚙️ Algoritmos</strong></p>
        <p style="margin-top: 30px;">
        <p><strong>🪥 Ejemplo 5: Lavarnos los dientess </strong></p>
        <p> Descomposición:<p>
        <p> - Elegir el cepillo y la pasta de dientes.<p>
        <p> - Colocar la pasta.<p>
        <p> - Cepillar los dientes por al menos 2 minutos.<p>
        <p> - Enjuagar.<p>
        <p>   Algoritmo:<p>
        <p>   1️⃣ Tomar el cepillo.<p>
        <p>   2️⃣ Aplicar la pasta.<p>
        <p>   3️⃣ Cepillar los dientes en movimientos circulares.<p>
        <p>   4️⃣ Enjuagar con agua.<p>
        <p>   5️⃣ Guardar el cepillo.<p>
        <p style="margin-top: 30px;">
        <p><strong>🧩 Ejemplo 6: Hacer un sándwich</strong></p>
        <p>Entrada: Pan, jamón, queso, lechuga, tomate. <p>
        <p>Proceso: <p>
        <p>1️⃣ Tomar una rebanada de pan.
           2️⃣ Colocar los ingredientes en orden.
           3️⃣ Tapar con la otra rebanada. <p>
        <p>Salida: Un sándwich listo para comer. <p>
        <p>Este ejemplo muestra la estructura Entrada → Proceso → Salida, que representa el funcionamiento básico de cualquier algoritmo. <p>
        <p style="margin-top: 30px;">
        <p><strong>🧩 Ejemplo 7: Encendido de una computadora</strong></p>
        <p>Entrada: Presionar el botón de encendido. <p>
        <img src="assets/img/encecompu.png" alt="Algoritmo" 
        style="float: right; width: 280px; margin: 10px 0 10px 15px; border-radius: 10px;">
        <p>Proceso: <p>
        <p>El sistema verifica los componentes, carga el sistema operativo y prepara el entorno de trabajo.<p>
        <p>Salida: Computadora lista para usar.<p>
        <p>Este ejemplo muestra la estructura Entrada → Proceso → Salida, que representa el funcionamiento básico de cualquier algoritmo. <p>
        <p style="margin-top: 30px;">
        <p><strong>🧩 Ejemplo 8: Cálculo del promedio de notas</strong></p>
        <p>Entrada: Conjunto de notas (por ejemplo, 15, 17, 19).<p>
        <p>Proceso: <p>
        <p>Sumar las notas y dividir entre la cantidad de valores.<p>
        <p>Salida: Promedio final del estudiante (por ejemplo, 17). <p>
        <p style="margin-top: 30px;">

    `,
    prueba_diagnostica: `
      <p><strong>Prueba diagnóstica:</strong> </p>
      <p><strong>👋 ¡Bienvenido(a) a la Evaluación Diagnóstica del Tema 1: Pensamiento Computacional y Algoritmos!</strong></p>
        <p>Esta evaluación tiene como propósito conocer tu comprensión sobre los temas abordados: pensamiento computacional, sus pilares (descomposición, reconocimiento de patrones, abstracción y diseño de algoritmos), así como el concepto, la estructura y las características de un algoritmo. <p>
        <p> 📊 Importante:
        Esta evaluación forma parte de la entrada del minicurso y equivale al 25 % de la nota total de este primer minicurso<p>
        <p>🕒 Instrucciones:<p>
        <p> - Lee cuidadosamente cada pregunta antes de responder.<p>
        <p> - Marca la alternativa correcta o desarrolla tu respuesta según se indique.<p>
        <p> - Solo se permite una respuesta por pregunta.<p>
        <p> - La nota mínima para aprobar este cuestionario es 11.<p>
        <p>✨ ¡Éxitos! Recuerda que esta es una oportunidad para reflexionar sobre tu forma de pensar, analizar y resolver problemas.<p>
        <div style="text-align: center; margin: 30px 0;">
            <a href="https://form-timer.com/start/92fc7bfb" target="_blank" 
             style="display: inline-block; background-color: #2a5e95ff; color: white; 
            padding: 12px 24px; text-decoration: none; border-radius: 8px; 
            font-weight: bold; font-size: 16px; transition: 0.3s;">
           📝 Ir al cuestionario
            </a>
           </div>

    `   
  },
  dia2: {
    objetivo: `<p><strong>Objetivo:</strong></p>
    <p>
    ✔️ Comprender el concepto y la utilidad de los diagramas de flujo.<br>
    ✔️ Aplicar correctamente los elementos y reglas de construcción de diagramas de flujo.<br>
    ✔️ Desarrollar habilidades de análisis, planificación y comunicación de procesos mediante diagramas de flujo.<br>
     </p>
    
    `,
    teoria: `<p><strong>Teoría:</strong> Diagramas de flujo, símbolos y reglas de construcción.</p>
    <p> <p>
  <p style="margin-top: 25px;">
        <img src="assets/img/esquemap.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
         <p><strong>Los cuatro pilares del pensamiento computacional:</strong></p>
      <p style="margin-top: 25px;">
    <p><strong>¿Qué es un diagrama de flujo?</strong></p>
    <p>Los diagramas de flujo son herramientas visuales fundamentales en el ámbito del pensamiento computacional, ya que permiten representar de manera gráfica y ordenada los pasos de un proceso o algoritmo. Estos diagramas utilizan símbolos estandarizados, como rectángulos para procesos, rombos para decisiones, óvalos para inicio y fin, y flechas para indicar la secuencia de ejecución. Su principal ventaja es que facilitan la comprensión y análisis de soluciones a problemas complejos, haciendo visible la lógica que subyace en un proceso o algoritmo (Mendiolaza, 2022). <p>
    <p>En el contexto educativo, los diagramas de flujo cumplen un papel esencial para desarrollar habilidades de resolución de problemas. Los estudiantes pueden descomponer situaciones complejas en pasos más simples y manejables, promoviendo un enfoque lógico y estructurado. Además, les permite planificar soluciones antes de ejecutarlas, identificando posibles errores o redundancias, lo que fortalece el pensamiento analítico y la capacidad de tomar decisiones de manera ordenada (García, 2024). <p>
    <p>El uso de diagramas de flujo en la enseñanza de la programación aporta ventajas adicionales, ya que los estudiantes pueden visualizar la lógica de un algoritmo antes de implementarlo en código. Esta visualización previa ayuda a anticipar problemas, optimizar los pasos del proceso y mejorar la eficiencia en la resolución de tareas. También facilita la comunicación de ideas, permitiendo que otras personas comprendan el algoritmo de manera rápida y precisa, independientemente de su experiencia previa en programación (De Rivero Manrique, 2022). <p>
    <p>En síntesis, los diagramas de flujo no solo son representaciones gráficas de algoritmos o procesos, sino que fomentan competencias críticas en los estudiantes, como la descomposición de problemas, el pensamiento lógico y la capacidad de analizar y optimizar soluciones. Su uso continuo contribuye a la formación de un pensamiento computacional sólido, aplicable no solo en programación, sino también en la vida cotidiana y en diversas disciplinas académicas (Mendiolaza et al., 2022). <p>
    <p style="margin-top: 25px;">
    <img src="assets/img/diagram.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
    <p><strong>Para qué sirve:</strong></p>
    <p>Los diagramas de flujo son herramientas fundamentales para representar procesos de manera clara y ordenada. Permiten visualizar cada paso de un procedimiento, decisión o actividad, mostrando cómo se relacionan entre sí y en qué secuencia ocurren. Esto facilita la comprensión de procesos complejos, ya que convierte información abstracta o extensa en un formato gráfico fácil de interpretar. Al observar un diagrama de flujo, cualquier persona puede entender rápidamente cómo se desarrolla un proceso completo, desde el inicio hasta el final, sin necesidad de leer largos textos o instrucciones confusas.<p>
    <p>Otra función importante de los diagramas de flujo es planificar soluciones antes de implementarlas. Antes de ejecutar un procedimiento, los diagramas permiten identificar pasos innecesarios, posibles errores o redundancias en el proceso. Esto es especialmente útil en la programación, la gestión de proyectos o en cualquier actividad que requiera varios pasos coordinados. Planificar mediante un diagrama ayuda a ahorrar tiempo, recursos y esfuerzo, ya que se pueden realizar ajustes y mejoras antes de que el proceso real comience. <p>
    <p>Además, los diagramas de flujo sirven para comunicar ideas de manera efectiva. Cuando se trabaja en equipo, un diagrama gráfico es mucho más claro que explicaciones verbales o instrucciones escritas largas. Todos los miembros del equipo pueden entender el procedimiento, las decisiones y la secuencia de acciones de forma rápida y uniforme. Esto reduce errores de interpretación y mejora la coordinación entre las personas que participan en un proyecto, facilitando la colaboración y la toma de decisiones. <p>
    <p>Finalmente, los diagramas de flujo no solo son útiles en entornos técnicos o educativos, sino que también se aplican en la vida cotidiana. Por ejemplo, se pueden usar para planificar tareas diarias, organizar proyectos personales o describir cualquier proceso que requiera pasos secuenciales. Gracias a su capacidad de simplificar la información y hacerla visual, los diagramas de flujo se convierten en una herramienta versátil para analizar, optimizar y comunicar procesos en cualquier ámbito. <p>
      <p style="margin-top: 25px;">
    <img src="assets/img/digram.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
    <p><strong>Elementos básicos de un diagrama de flujo</strong></p>
    <p>Los diagramas de flujo son herramientas visuales fundamentales que permiten representar de manera gráfica los pasos de un proceso o algoritmo. Utilizan símbolos estandarizados, como óvalos, rectángulos, rombos y paralelogramos, para ilustrar acciones, decisiones y flujos de información. Esta estandarización facilita la interpretación, comunicación y análisis de procesos complejos, asegurando que cualquier persona pueda comprender la secuencia de acciones sin ambigüedades (Herrera, 2020).<p>
    <p>Además, los diagramas de flujo no solo ayudan a comprender los procesos existentes, sino que también sirven como herramienta de planificación y optimización. Al construir un diagrama, se pueden identificar errores, redundancias o pasos innecesarios antes de implementar el proceso en la práctica. Esto es especialmente útil en programación, administración de proyectos y diseño de sistemas, ya que permite mejorar la eficiencia y claridad del procedimiento. <p>
    <p><strong>Óvalo (Inicio/Fin): </strong></p>
    <p>El óvalo marca los límites de un proceso, señalando el punto de partida y el final de la secuencia. Además de indicar dónde comienza y termina, este símbolo ayuda a diferenciar el flujo principal de subprocesos o bucles dentro del diagrama. En procesos más complejos, puede utilizarse para representar eventos externos que inician o concluyen un procedimiento, asegurando que los lectores del diagrama identifiquen claramente los puntos críticos del proceso. <p>
     <p style="margin-top: 25px;">
    <img src="assets/img/oval.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
    <p><strong>Rectángulo (Proceso): </strong></p>
    <p>El rectángulo representa cualquier acción, tarea o actividad dentro de la secuencia. Más allá de ser un simple paso, este símbolo permite identificar transformaciones de datos, operaciones de cálculo o tareas específicas que modifican la información. Cada rectángulo debe ser breve, descriptivo y contener instrucciones claras para que el flujo sea comprensible, incluso para personas que no estén familiarizadas con el proceso. Además, los rectángulos se pueden combinar con otros símbolos para mostrar subprocesos o rutinas repetitivas. <p>
        <p style="margin-top: 25px;">
    <img src="assets/img/rectangulo.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
    <p><strong>Rombo (Decisión): </strong></p>
    <p>El rombo indica un punto de decisión en el proceso, donde se evalúa una condición o se elige entre varias alternativas. Este símbolo no solo representa bifurcaciones “sí/no”, sino que también puede emplearse para decisiones múltiples o condiciones lógicas más complejas. Su correcta utilización permite visualizar cómo los resultados de una decisión afectan el flujo del proceso y facilita la identificación de caminos críticos o posibles errores en la secuencia. <p>
    <p style="margin-top: 25px;">
    <img src="assets/img/des.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
    <p><strong>Paralelogramo (Entrada/Salida):</strong></p>
    <p>El paralelogramo se utiliza para representar la entrada o salida de datos. Esto incluye información recibida del usuario, de sistemas externos o de sensores, así como resultados que deben mostrarse o registrarse. Su función es destacar los puntos donde el proceso interactúa con el entorno, permitiendo diferenciar entre operaciones internas y comunicación con factores externos. Es esencial para procesos que requieren interacción constante con el usuario o sistemas externos. <p>
    <p style="margin-top: 25px;">
    <img src="assets/img/paralelogramo .jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
    <p><strong>Conector: </strong></p>
    <p>El conector, representado como un círculo pequeño con una letra o número dentro, se utiliza en los diagramas de flujo para unir diferentes partes del proceso cuando el flujo es demasiado largo o se distribuye en varias páginas. Su función principal es evitar que las flechas crucen todo el diagrama, manteniendo el esquema más limpio y fácil de seguir. A diferencia del óvalo de inicio o fin, este círculo no indica el comienzo ni la conclusión del proceso, sino que actúa únicamente como un punto de enlace entre pasos que están separados visualmente, facilitando la lectura y organización del diagrama. <p>
    <p style="margin-top: 25px;">
    <img src="assets/img/circulo.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
    <p><strong>Flechas (Conexión/Flujo):</strong></p>
    <p>Las flechas indican la dirección en que se ejecutan los pasos del diagrama, conectando símbolos y mostrando la secuencia lógica de acciones. Además de guiar al lector, permiten visualizar ramificaciones, bucles y rutas alternativas dentro del proceso. Su correcta orientación asegura que el diagrama sea fácil de seguir y que no se pierda la coherencia entre los distintos pasos, facilitando la comprensión del flujo completo del proceso. <p>
    <p style="margin-top: 25px;">
    <img src="assets/img/flecha.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
    <p><strong>Reglas y buenas prácticas: </strong></p>
     <p>Antes de profundizar en las reglas específicas, es importante señalar que existen diversas buenas prácticas para la elaboración de diagramas de flujo, cada una diseñada para mejorar la claridad, comprensión y eficiencia de los procesos representados. Aunque hay muchas recomendaciones posibles, las que se presentan a continuación son consideradas las más comunes y esenciales, ya que su aplicación garantiza que el diagrama sea comprensible para cualquier persona, facilite el análisis de los procesos y permita una correcta comunicación de la información. Aplicar estas reglas básicas ayuda no solo a representar procesos de manera ordenada, sino también a identificar errores, optimizar procedimientos y mantener la coherencia visual en diagramas de flujo complejos, especialmente en entornos educativos y profesionales. <p>
    <p style="margin-top: 25px;">
    <img src="assets/img/diasa.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
    <p><strong>1. Orden lógico y coherente: </strong></p>
    <p>Es fundamental que los diagramas de flujo sigan una secuencia lógica y coherente, generalmente de arriba hacia abajo o de izquierda a derecha, dependiendo del formato que se utilice. Mantener un orden claro permite que cualquier persona que observe el diagrama pueda seguir los pasos sin confundirse ni perder información importante. Un flujo ordenado facilita identificar rápidamente los procesos críticos, los puntos de decisión y las entradas o salidas de información, evitando errores en la interpretación. Además, un diagrama bien estructurado ayuda a planificar y optimizar procesos, ya que permite visualizar de manera clara la relación entre cada acción y su consecuencia, haciendo más sencillo detectar redundancias o pasos innecesarios dentro del proceso general. <p>
    <p>Según Asana (2025), "poner las tareas en orden cronológico es esencial para crear diagramas de flujo efectivos", ya que este orden permite representar los procesos de manera clara y estructurada, facilitando su análisis y comprensión. Esto es particularmente importante en entornos educativos y profesionales, donde los diagramas se utilizan no solo para mostrar cómo se realizan los pasos, sino también para enseñar la lógica detrás de un proceso o para comunicarla a un equipo de trabajo, asegurando que todos los involucrados comprendan la secuencia completa de manera uniforme. <p>
    <p style="margin-top: 25px;">
    <p><strong>2. Evitar cruces de flechas innecesarios: </strong></p>
    <p>Los cruces de flechas pueden generar confusión y dificultar la lectura del diagrama de flujo, sobre todo cuando el diagrama es extenso o incluye múltiples decisiones y procesos paralelos. Mantener un diseño limpio es esencial para que el diagrama sea funcional y estéticamente claro. Para lograrlo, se recomienda organizar los símbolos de manera estratégica y, si es necesario, dividir el diagrama en secciones o utilizar conectores que unan partes separadas, evitando que las flechas se crucen o se superpongan. Un diagrama con flechas claras y sin cruces innecesarios no solo mejora la comprensión, sino que también permite detectar errores de manera más rápida, facilita la revisión de procesos y ayuda a mantener la consistencia en la documentación de procedimientos. <p>
    <p>Creately (2025) sugiere que se debe "evitar cruzar o superponer líneas", ya que "si las flechas se cruzan o se enredan, el diagrama se verá desordenado y será difícil de seguir". Esta recomendación resalta la importancia de mantener un flujo visualmente claro y ordenado, lo que es esencial tanto en la enseñanza de programación y procesos administrativos, como en la documentación de sistemas complejos, ya que facilita que cualquier observador pueda comprender rápidamente la lógica del procedimiento representado. <p>
    <p style="margin-top: 25px;">
    <p><strong>3. Claridad en nombres y pasos: </strong></p>
    <p>La claridad en los nombres y pasos de un diagrama de flujo es esencial para garantizar que cualquier persona pueda entender fácilmente el proceso, incluso si no tiene experiencia previa con él. Cada símbolo debe contener descripciones precisas, cortas y directas que indiquen exactamente qué acción, decisión o entrada/salida representa. Evitar términos ambiguos o abreviaciones poco claras ayuda a reducir la confusión y asegura que los diagramas cumplan su función como herramientas de comunicación y análisis. Además, un etiquetado claro permite que los diagramas sean reutilizables, sirviendo como guía de procesos estandarizados, material educativo o documentación para equipos de trabajo en diferentes contextos. <p>
    <p>Nulab (2024) enfatiza la importancia de "etiquetar claramente cada símbolo y conector para indicar su propósito o función dentro del diagrama de flujo". Esta práctica asegura que la información se comunique de manera efectiva y sin ambigüedades, lo que contribuye a mejorar la comprensión, la eficiencia en la ejecución de los procesos y la capacidad de análisis crítico. Una correcta nomenclatura también facilita la identificación de problemas o la implementación de mejoras en los procesos, haciendo que los diagramas sean herramientas dinámicas y funcionales en cualquier entorno académico o profesional. <p>
    <p style="margin-top: 25px;">

    <p><strong>Relación con los algoritmos </strong></p> 
    <p>Los algoritmos son secuencias de pasos definidos que permiten resolver un problema o realizar una tarea específica. Sin embargo, comprender estos pasos únicamente de manera textual puede resultar complicado, especialmente en procesos extensos o con decisiones múltiples. En este contexto, los diagramas de flujo se convierten en una representación gráfica fundamental, ya que muestran visualmente la lógica del algoritmo y la conexión entre sus diferentes etapas. Cada símbolo dentro del diagrama representa una acción o decisión, lo que facilita seguir la secuencia de operaciones y detectar posibles errores o redundancias. <p>
    <p>Según Cormen et al. (2022), “algorithmic representations provide a structured way to model computational processes, ensuring clarity before implementation” (p. 45). Esto significa que los diagramas de flujo actúan como un puente entre la idea abstracta del algoritmo y su implementación práctica, ayudando a los programadores y estudiantes a visualizar el razonamiento detrás de cada instrucción y a construir soluciones más eficientes y comprensibles. <p>
        <p style="margin-top: 25px;">
    <img src="assets/img/algrtimo.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
    <p><strong>Cómo los diagramas de flujo representan gráficamente los pasos de un algoritmo </strong></p> 
    <p>Los diagramas de flujo representan los pasos de un algoritmo mediante una combinación de símbolos gráficos estandarizados y flechas que indican la dirección del flujo de control. Cada símbolo tiene una función específica: los óvalos señalan el inicio y el fin del proceso, los rectángulos representan operaciones o cálculos, los rombos indican decisiones y los paralelogramos muestran las entradas o salidas de datos. Esta estructura facilita la lectura y el análisis del algoritmo, permitiendo entender su funcionamiento sin necesidad de interpretar código. <p>
     <p style="margin-top: 25px;">
    <img src="assets/img/paqued.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
    <p><strong>Conceptos de entrada, proceso y salida aplicados a diagramas de flujo </strong></p> 
    <p>En el diseño de diagramas de flujo, los conceptos de entrada, proceso y salida (E-P-S) representan la estructura básica de cualquier algoritmo. La entrada hace referencia a los datos o información inicial que se introduce en el sistema; el proceso comprende las operaciones que transforman o manipulan esa información; y la salida corresponde a los resultados finales generados por el algoritmo. Esta secuencia asegura que el flujo lógico de la información sea coherente y ordenado. <p>
    <p>Brookshear y Brylow (2023) señalan que “the input-process-output model remains a cornerstone of computational systems, providing a conceptual foundation for data transformation and algorithmic logic” (p. 78). Así, los diagramas de flujo permiten visualizar cómo los datos ingresan, se procesan y finalmente se convierten en resultados útiles, facilitando la comprensión y el análisis de sistemas informáticos y procesos administrativos. <p>
    <p style="margin-top: 25px;">

    <p><strong>Tipos de diagramas de flujo:</strong></p> 
    <p><strong> - Lineales:</strong></p> 
    <p>Los diagramas de flujo lineales muestran procesos que siguen una secuencia estrictamente ordenada, sin ramificaciones ni decisiones condicionales. Cada paso se ejecuta de manera consecutiva, lo que los hace ideales para representar algoritmos simples o deterministas, como cálculos matemáticos o transformaciones directas de datos. Su estructura clara y directa permite comprender fácilmente el flujo de ejecución. <p>
         <p style="margin-top: 25px;">
    <img src="assets/img/lineales.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
    <p><strong> - Con decisiones:</strong></p> 
    <p>Los diagramas de flujo con decisiones incorporan bifurcaciones lógicas que permiten elegir entre diferentes caminos dentro del proceso, dependiendo del resultado de una condición. Estas decisiones, representadas mediante el rombo, posibilitan que el algoritmo sea adaptable y responda a distintas circunstancias. Este tipo de diagrama es común en procesos donde se deben evaluar opciones o verificar condiciones antes de continuar con una acción determinada. <p>
         <p style="margin-top: 25px;">
    <img src="assets/img/bucles.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
    <p><strong> - Con bucles o ciclos:</strong></p> 
    <p>Los diagramas de flujo con bucles o ciclos representan procesos que se repiten hasta que se cumple una determinada condición. Estos bucles son esenciales para modelar algoritmos iterativos, como aquellos que procesan listas, realizan cálculos repetitivos o evalúan condiciones en forma continua. La representación gráfica de los ciclos ayuda a visualizar la naturaleza repetitiva de muchas tareas computacionales y a comprender la lógica de la iteración. <p>
         <p style="margin-top: 25px;">
    <img src="assets/img/bucless.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">

    <p><strong> Videos a Conultar: :</strong></p> 
    <p>•Video de diagrma de flujo: Astraway. (2022, marzo 10). El diagrama de flujo explicado: para qué sirve, cómo se hace, tipos, ejemplos, características [Video]. YouTube. https://www.youtube.com/watch?v=pWVFKfTUeYQ.</p>
    <p><strong> Programas que te pueden servir para practicar :</strong></p> 
    <p>• Raptor: RAPTOR es un programa educativo que permite crear y ejecutar algoritmos mediante diagramas de flujo.</p>
    <p>• Miro: Miro es una pizarra digital en línea que permite crear diagramas de flujo, mapas mentales y esquemas colaborativos.</p>
    <p>• Flowgorithm: Flowgorithm es una herramienta gratuita diseñada para aprender algoritmos de manera visual.</p>
           <p style="margin-top: 25px;">
    <img src="assets/img/Raptor.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
    
    `,

    ejemplos: `<p><strong>Ejemplos:</strong> </p>
    
      <p><strong> Caso 1: Determinar si una empresa obtiene ganancias o pérdidas</strong></p> 
      <p>En una empresa, es fundamental conocer si las operaciones realizadas durante un periodo generan ganancias o pérdidas. Para ello, se necesita un procedimiento lógico que permita comparar los ingresos totales con los costos totales.  </p> 
            <p style="margin-top: 25px;">
    <img src="assets/img/digrameje1.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p>Fuente: Jorge Cogollo. (2020, abril 15). ¿Qué es un diagrama de flujo? Cómo hacer diagramas de flujo paso a paso + ejemplos [Video]. YouTube. https://www.youtube.com/watch?v=Kucgc6NpGwc  </p>
    <p style="margin-top: 25px;">  
      <p>El siguiente caso plantea un algoritmo de decisión que evalúa la situación económica de la empresa: primero se ingresan los valores correspondientes a los ingresos y los costos. Luego, mediante una condición, se determina si los ingresos son mayores o iguales a los costos. Si esta condición se cumple, el sistema calcula la ganancia, restando los costos de los ingresos. En caso contrario, calcula la pérdida, restando los ingresos de los costos.  </p> 
          <p>Este proceso permite representar de manera clara y estructurada la lógica de decisión financiera, siendo útil para cualquier organización que desee automatizar la evaluación de sus resultados económicos. Además, el diagrama de flujo facilita la comprensión del procedimiento, mostrando visualmente las posibles rutas según la condición establecida.  </p> 
            <p><strong> Caso 2: roceso de solicitud y recepción de compra en una empresa</strong></p> 
          <p>Toda organización necesita un procedimiento ordenado para realizar compras y gestionar proveedores, garantizando que los productos o servicios adquiridos cumplan con los estándares de calidad. Este caso describe un algoritmo con decisión que representa el flujo del proceso de solicitud de compra dentro de una empresa.  </p> 
               <p style="margin-top: 25px;">
    <img src="assets/img/digrmamej2.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p>LIZARD. (2023, agosto 15). Guía para realizar diagramas de flujo y ejemplos [Video]. YouTube. https://www.youtube.com/watch?v=HsMgOuOwnFs </p>
    <p style="margin-top: 25px;">     
          <p>El proceso se inicia con la solicitud de compra, que da paso a la búsqueda y evaluación del proveedor más adecuado. Una vez identificado, se establece la comunicación para negociar condiciones, precios y plazos de entrega. Posteriormente, se emite la orden de compra y se procede con la recepción del producto solicitado.  </p> 
            <p>En este punto, el algoritmo incluye una decisión clave: verificar si el producto recibido cumple con las especificaciones y estándares requeridos (¿Conforme?).  </p> 
            <p>• Si la respuesta es “Sí”, el producto es aceptado e ingresado a las instalaciones, completando el proceso.  </p> 
            <p>• Si la respuesta es “No”, se activa la gestión de garantía o devolución, hasta que se resuelva la no conformidad.</p> 
            <p>Finalmente, el proceso concluye con el registro del ingreso del producto conforme y el fin del procedimiento. </p> 

    
    `

  },
  dia3: {
    objetivo: `<p><strong>Objetivo:</strong> </p>
    <p>
    ✔️ Comprender el concepto y la función de las variables y los tipos de datos en la construcción de algoritmos<br>
    ✔️ Aplicar correctamente las reglas de declaración, asignación y uso de variables en ejercicios prácticos de pseudocódigo<br>
    ✔️ Reconocer y diferenciar los principales tipos de datos (numéricos, lógicos y de texto)<br>
     </p>
    
    
    `,
    teoria: `<p><strong>Teoría:</strong> </p>
    
    <p><strong> 1. Concepto de variable </strong></p> 
    <p>Una variable es un elemento fundamental en la programación y en el diseño de algoritmos. Se define como un espacio de memoria identificado por un nombre, que permite almacenar, modificar y recuperar datos durante la ejecución de un programa. Su principal función es guardar valores que pueden cambiar según las condiciones o las operaciones realizadas dentro del proceso. Gracias a las variables, los algoritmos pueden adaptarse a diferentes situaciones, recibir datos externos, procesarlos y generar resultados dinámicos. <p>
    <p>En términos prácticos, las variables funcionan como “contenedores” de información. Por ejemplo, en un algoritmo que calcula el área de un triángulo, se pueden usar tres variables: base, altura y área. Estas almacenan los valores necesarios y permiten realizar el cálculo correspondiente. De esta forma, las variables son esenciales para representar datos temporales, facilitar el manejo de la información y hacer que los algoritmos sean reutilizables y flexibles en diferentes contextos. </p>
    <p>Según Valacich y Schneider (2023), “las variables son nombres simbólicos que representan valores de datos en la memoria, lo que permite que los programas manipulen y reutilicen la información de manera eficiente”, lo que evidencia su papel como herramientas clave en el razonamiento lógico y la resolución de problemas mediante programación. En consecuencia, comprender el concepto de variable es un paso esencial para desarrollar habilidades en pensamiento computacional, ya que constituye la base sobre la cual se construyen estructuras más complejas como las condicionales, los bucles y las funciones. </p>
    <p style="margin-top: 25px;">
    <img src="assets/img/concep.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">

    <p><strong> 2. Reglas para nombrar variables:  </strong></p> 
      <p>Nombrar adecuadamente las variables es un aspecto esencial dentro de la programación y del diseño de algoritmos, ya que influye directamente en la claridad, comprensión y mantenimiento del código. Una variable debe tener un nombre que describa claramente el tipo de dato o función que representa, permitiendo que tanto el programador como otras personas que revisen el código comprendan su propósito de manera inmediata. </p>
      <p> Las reglas para nombrar variables suelen ser comunes en la mayoría de los lenguajes de programación. Estas normas aseguran que el código sea claro, legible y libre de errores. A continuación, se presentan las principales: </p>
      <p> • No usar espacios en los nombres de las variables: </p>
      <p> En lugar de espacios, se deben emplear guiones bajos (_) o el formato camelCase.</p>
      <p> Ejemplos: </p>
    <p style="margin-top: 25px;">
    <img src="assets/img/coryI.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">

      <p> • No comenzar el nombre con números: </p>
      <p>   Los nombres de variables deben iniciar con una letra o un guion bajo</p>
      <p> Ejemplos: </p>
       <p style="margin-top: 25px;">
    <img src="assets/img/c2.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
      <p> • Evitar el uso de palabras reservadas del lenguaje: </p>
      <p> Las palabras clave del lenguaje (como if, for, while, print, entre otras) no pueden usarse como nombres de variables, ya que tienen un significado especial dentro de la sintaxis del programa.</p>
      <p> Ejemplos: </p>
        <p style="margin-top: 25px;">
    <img src="assets/img/c3.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
      <p> • Usar nombres descriptivos y coherentes.</p>
      <p> Es recomendable emplear nombres que representen con claridad el propósito de la variable. Esto mejora la comprensión del código, especialmente cuando se trabaja en equipo o se revisa un programa con el tiempo.</p>
      <p> Ejemplos: </p>
        <p style="margin-top: 25px;">
    <img src="assets/img/c4.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
     <p><strong> 3. Tipos de datos: </strong></p> 
      <p>Los tipos de datos primitivos constituyen la base de la programación, ya que permiten definir el tipo de información que una variable puede almacenar. Cada tipo de dato tiene características propias y se utiliza según la naturaleza de la información que se necesite manipular en un algoritmo. Comprender estos tipos es fundamental para escribir programas correctos y eficientes, pues determina cómo se procesan, comparan y almacenan los valores en memoria. </p>
      <p>Según Savitch (2021), “los tipos de datos primitivos son los bloques de construcción fundamentales de los lenguajes de programación, ya que proporcionan las formas más simples de almacenamiento y manipulación de datos” (p. 52). Esto significa que los tipos de datos primitivos son los elementos esenciales sobre los cuales se construyen estructuras más complejas, como los arreglos, las listas o los objetos. </p>
      <p>A continuación, se describen los principales tipos de datos primitivos y su función dentro de los algoritmos: </p>
      
      <p>• <strong>Enteros (int):</strong></p>
      <p>Tamaño aproximado: 4 bytes (32 bits)  </p>
     <p>Representan números sin parte decimal, tanto positivos como negativos. Se utilizan para contar, iterar o realizar operaciones que no requieren precisión decimal.</p>
     <p><strong>Ejemplos:</strong></p>
        <p style="margin-top: 25px;">
    <img src="assets/img/int.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">

     <hr style="margin: 15px 0;">

     <p>• <strong>Reales o decimales (float):</strong></p>
     <p>Se emplean para representar números con punto decimal o fracciones. Son útiles en cálculos científicos, financieros o de medición donde la precisión es importante.</p>
     <p>Tamaño aproximado: 4 a 8 bytes  </p>
     <p><strong>Ejemplos:</strong></p>
   <p style="margin-top: 25px;">
  <img src="assets/img/float.png" alt="Pensamiento computacional" style="width: 180px; display: block; margin: 10px auto; border-radius: 8px;">
  <hr style="margin: 10px auto; width: 50%; height: 1px; background-color: #ccc; border: none;">
</p>

     <p>• <strong>Carácter (char):</strong></p>
      <p>Representa un solo símbolo o letra, ya sea una letra, número o signo.</p>
      <p>Tamaño aproximado: 1 byte  </p>
     <p><strong>Ejemplo:</strong></p>
 <p style="margin-top: 25px;">
  <img src="assets/img/caracter.png" alt="Pensamiento computacional" style="width: 180px; display: block; margin: 10px auto; border-radius: 8px;">
  <hr style="margin: 10px auto; width: 50%; height: 1px; background-color: #ccc; border: none;">
</p>


     <p>• <strong>Cadena (string):</strong></p>
     <p>Una cadena es una secuencia de caracteres (letras, números o símbolos) encerrada entre comillas. Se utiliza para almacenar y procesar texto.</p>
     <p>Tamaño aproximado: 1 byte por carácter </p>
     <p><strong>Ejemplos:</strong></p>
     <p style="margin-top: 25px;">
    <img src="assets/img/cadena1.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">


     <hr style="margin: 15px 0;">

     <p>• <strong>Booleanos (bool):</strong></p>
    <p>Este tipo de dato representa valores verdadero o falso (True o False). Se usa principalmente en expresiones lógicas y estructuras de decisión.</p>
     <p>Tamaño aproximado: 1 byte </p>
    <p><strong>Ejemplo:</strong></p>
    <p style="margin-top: 25px;">
    <img src="assets/img/bool.jpg" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
      <hr style="margin: 15px 0;">
    <p>4. Declaración y asignación de variables:  </strong></p>


<p>
  La declaración de una variable consiste en indicar su nombre y el tipo de dato que almacenará, 
  mientras que la asignación implica darle un valor específico. En términos generales, declarar una 
  variable significa reservar un espacio en la memoria del computador para guardar información que podrá 
  cambiar durante la ejecución del programa. Según Gaddis (2022), 
  “declaring and initializing variables properly is essential for writing clear and error-free programs, 
  as it defines how data will be stored and manipulated throughout execution” (p. 47). 
  Esto resalta la importancia de comprender que toda variable debe tener un propósito claro y un valor 
  que pueda modificarse conforme avanza el algoritmo.
</p>

<p>
  En pseudocódigo, la declaración y asignación suelen escribirse de manera explícita, 
  definiendo el tipo y el valor inicial. Por ejemplo:
</p>

<div style="background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #00aaff; padding: 12px; border-radius: 8px; font-family: 'Courier New', monospace; width: fit-content; margin: 10px auto; box-shadow: 0 0 8px rgba(0,0,0,0.4);">
  Definir edad Como Entero <br>
  edad ← 20
</div>
<div style="background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #00aaff; padding: 12px; border-radius: 8px; font-family: 'Courier New', monospace; width: fit-content; margin: 10px auto; box-shadow: 0 0 8px rgba(0,0,0,0.4);">
  Definir nombre Como Cadena <br>
  nombre ← "Ana"
</div>
<p>
 En este caso, se declara la variable edad como un número entero y la variable nombre como una cadena de texto, asignándoles valores iniciales.
</p>

<p>
En cambio, en Python, la sintaxis es más simple, ya que no es necesario especificar el tipo de dato al declarar una variable. El tipo se infiere automáticamente según el valor asignado:</p>
</p>
<div style="background-color: #007bff; color: #f5f5f5; border-left: 4px solid #00aaff; padding: 12px; border-radius: 8px; font-family: 'Courier New', monospace; width: fit-content; margin: 10px auto; box-shadow: 0 0 8px rgba(0,0,0,0.4);">
  
  edad = 20<br>
nombre = "Ana"
</div>
<p style="margin-top: 30px;">
<p>
Esta característica convierte a Python en un lenguaje de tipado dinámico, lo que facilita el aprendizaje inicial de la programación. Sin embargo, también requiere que el programador sea cuidadoso al manipular los valores, ya que el tipo de dato puede cambiar durante la ejecución si no se controla adecuadamente.
</p>

<p><strong> 5. Operaciones con variable</strong></p>
<p>
Las operaciones con variables permiten realizar cálculos y comparaciones dentro de un algoritmo, siendo fundamentales para el procesamiento de datos y la toma de decisiones. Estas operaciones se dividen principalmente en <strong>aritméticas</strong> y <strong>lógicas</strong>. 
Según Lambert (2023), <em>“operators act as symbols that instruct the computer to perform specific computations or evaluations on data values stored in variables”</em> (p. 65). 
Esto significa que los operadores son mecanismos mediante los cuales un programa puede transformar, combinar o analizar información durante su ejecución.
</p>

<p> 🔹 Operadores aritméticos</p>
<p>  Se utilizan para realizar cálculos matemáticos básicos:</p>

<ul style="list-style-type: none; padding-left: 0; text-align: left; margin-left: 20px;">
 <li>➕ <strong>Suma (+)</strong> → combina dos valores: <em>a + b</em>.</li>
  <li>➖ <strong>Resta (-)</strong> → calcula la diferencia: <em>a - b</em>.</li>
  <li>✖️ <strong>Multiplicación (*)</strong> → obtiene el producto: <em>a * b</em>.</li>
  <li>➗ <strong>División (/)</strong> → devuelve el cociente: <em>a / b</em>.</li>
  <li>🔢 <strong>Módulo (%)</strong> → obtiene el residuo de una división: <em>a % b</em>.</li>
<p> Antes de analizar los ejemplos prácticos, es importante visualizar de manera gráfica los principales operadores que intervienen en el manejo de variables</p>
    <p style="margin-top: 25px;">
    <img src="assets/img/opera.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">


     <hr style="margin: 15px 0;">


</ul>

<p><strong>Por ejemplo, en pseudocódigo:</strong></p>

<div style="background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #00aaff; padding: 12px; border-radius: 8px; font-family: 'Courier New', monospace; width: fit-content; margin: 10px auto; box-shadow: 0 0 8px rgba(0,0,0,0.4);">
  Definir a, b, suma Como Entero <br>
  a ← 10 <br>
  b ← 3 <br>
  suma ← a + b
</div>

<p><strong>Y en Python:</strong></p>

<div style="background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #00aaff; padding: 12px; border-radius: 8px; font-family: 'Courier New', monospace; width: fit-content; margin: 10px auto; box-shadow: 0 0 8px rgba(0,0,0,0.4);">
  a = 10 <br>
  b = 3 <br>
  suma = a + b
</div>

<p> 🔹 Operadores lógicos o relacionales</p>
<p>Permiten comparar valores o expresar condiciones. Los más comunes son:</p>

<ul style="list-style-type: none; padding-left: 0; text-align: left; margin-left: 20px;">
  <li>• <strong>&gt;</strong> (mayor que)</li>
  <li>• <strong>&lt;</strong> (menor que)</li>
  <li>• <strong>==</strong> (igual a)</li>
  <li>• <strong>!=</strong> (distinto de)</li>
  <li>• <strong>and</strong>, <strong>or</strong>, <strong>not</strong> → combinan o niegan expresiones lógicas.</li>
</ul>

<p><strong>Por ejemplo, en Python:</strong></p>

<div style="background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #00aaff; padding: 12px; border-radius: 8px; font-family: 'Courier New', monospace; width: fit-content; margin: 10px auto; box-shadow: 0 0 8px rgba(0,0,0,0.4);">
  x = 5 <br>
  y = 8 <br>
  resultado = (x &lt; y) and (y != 10)
  <p style="margin-top: 30px;">
</div>

<p>
En este caso, <strong>resultado</strong> será <em>True</em> porque ambas condiciones se cumplen. Estas operaciones son esenciales en estructuras de control como los condicionales (<em>if</em>) y los bucles (<em>while</em> o <em>for</em>), ya que permiten determinar el flujo lógico de ejecución del algoritmo.
</p>

<!-- === 3.6. Entrada y salida de datos === -->

<p><strong>6. Entrada y salida de datos :  </strong></p>
<p>
  En todo algoritmo o programa informático, los procesos de entrada y salida de datos son esenciales para permitir la comunicación entre el usuario y el sistema. 
  La <strong>entrada</strong> se refiere a la información que el programa recibe para ejecutar sus operaciones, mientras que la <strong>salida</strong> corresponde 
  a los resultados que el programa muestra. Según <em>Dale y Weems (2023)</em>, 
  “<em>input and output operations enable communication between the program and the user, forming the basis of interactive computing</em>” (p. 33). 
  Esto significa que sin estos mecanismos, el algoritmo no podría interactuar con su entorno.
</p>

<p>
  En pseudocódigo, la instrucción <strong>Leer</strong> permite capturar datos, mientras que <strong>Mostrar</strong> presenta los resultados:
</p>

<div style="background-color: #222; color: #f1f1f1; border-left: 4px solid #007bff; padding: 12px; border-radius: 8px; font-family: 'Courier New', monospace; width: fit-content; margin: 10px auto;">
  Leer nombre <br>
  Mostrar "Bienvenido, ", nombre
</div>

<p>
  En <strong>Python</strong>, se utilizan las funciones <strong>input()</strong> y <strong>print()</strong>:
</p>

<div style="background-color: #222; color: #f1f1f1; border-left: 4px solid #28a745; padding: 12px; border-radius: 8px; font-family: 'Courier New', monospace; width: fit-content; margin: 10px auto;">
  nombre = input("Ingresa tu nombre: ") <br>
  print("Bienvenido,", nombre)
</div>

<hr style="margin: 30px 0; border: 0; border-top: 1px solid #ccc;">


<!-- === 3.7. Conversión de tipos (Casting) === -->

<p><strong>7. Conversión de tipos :  </strong></p>
<p>
  En programación, la conversión de tipos o <em>casting</em> permite transformar datos de un tipo a otro, como texto a número o número a cadena. 
  Según <em>Liang (2022)</em>, “<em>type casting allows programmers to control how data is interpreted and manipulated, ensuring valid results</em>” (p. 59).
</p>

<p>Ejemplo en pseudocódigo:</p>
<div style="background-color: #222; color: #f1f1f1; border-left: 4px solid #ffc107; padding: 12px; border-radius: 8px; font-family: 'Courier New', monospace; width: fit-content; margin: 10px auto;">
  Definir edad Como Cadena <br>
  edad ← ConvertirAEntero("25")
</div>

<p>Y en Python:</p>
<div style="background-color: #222; color: #f1f1f1; border-left: 4px solid #ffc107; padding: 12px; border-radius: 8px; font-family: 'Courier New', monospace; width: fit-content; margin: 10px auto;">
  edad = "25" <br>
  edad = int(edad) <br>
  print(edad + 5)
</div>

<p>
  La correcta aplicación del casting garantiza que los programas sean más estables y eviten errores por incompatibilidad de tipos.
</p>

<hr style="margin: 30px 0; border: 0; border-top: 1px solid #ccc;">


<!-- === 3.8. Constantes === -->

<p><strong>8. Constantes :  </strong></p>
<p>
  Las <strong>constantes</strong> representan valores fijos que no cambian durante la ejecución del programa. 
  Según <em>Gaddis (2022)</em>, “<em>constants improve program readability and reliability by preventing accidental modification</em>” (p. 72). 
  Esto mejora la claridad y estabilidad del código.
</p>

<p>Ejemplo en pseudocódigo:</p>
<div style="background-color: #222; color: #f1f1f1; border-left: 4px solid #17a2b8; padding: 12px; border-radius: 8px; font-family: 'Courier New', monospace; width: fit-content; margin: 10px auto;">
  Constante PI ← 3.1416
</div>

<p>Ejemplo en Python:</p>
<div style="background-color: #222; color: #f1f1f1; border-left: 4px solid #17a2b8; padding: 12px; border-radius: 8px; font-family: 'Courier New', monospace; width: fit-content; margin: 10px auto;">
  PI = 3.1416 <br>
  radio = 5 <br>
  area = PI * radio ** 2 <br>
  print(area)
</div>

<p>
  El uso adecuado de constantes permite mantener los programas organizados, claros y menos propensos a errores.
</p>
<!-- 3.10 Errores comunes al usar variables -->
<p><strong>9. Errores comunes al usar variables: </strong></p>
<p>
En la programación, los errores relacionados con las variables son una de las causas más frecuentes de fallos en la ejecución de un algoritmo. Comprender su origen y saber cómo prevenirlos es esencial para desarrollar programas correctos, legibles y eficientes. Estos errores suelen deberse a una mala gestión de los valores, a la confusión entre tipos de datos o al uso incorrecto de la sintaxis del lenguaje.
</p>
<p style="margin-top: 30px;">
<table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-family: Arial, sans-serif; color: #f1f1f1;">
  <thead style="background-color: #00bfff;">
    <tr>
      <th style="padding: 10px; text-align: left;">Tipo de error</th>
      <th style="padding: 10px; text-align: left;">Descripción</th>
      <th style="padding: 10px; text-align: left;">Ejemplo</th>
      <th style="padding: 10px; text-align: left;">Consecuencia o efecto</th>
    </tr>
  </thead>
  <tbody style="background-color: #1e1e1e;">
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #333;">Variable no inicializada</td>
      <td style="padding: 10px; border-bottom: 1px solid #333;">Ocurre cuando se utiliza una variable antes de asignarle un valor inicial.</td>
      <td style="padding: 10px; border-bottom: 1px solid #333; font-family: 'Courier New', monospace; background-color: #2a2a2a; color: #9cdcfe;">
        print(total)
      </td>
      <td style="padding: 10px; border-bottom: 1px solid #333;">El programa genera un error en tiempo de ejecución, ya que la variable no existe en memoria.</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #333;">Incompatibilidad de tipos</td>
      <td style="padding: 10px; border-bottom: 1px solid #333;">Se intenta operar con datos de distintos tipos sin conversión previa.</td>
      <td style="padding: 10px; border-bottom: 1px solid #333; font-family: 'Courier New', monospace; background-color: #2a2a2a; color: #9cdcfe;">
        suma = "10" + 5
      </td>
      <td style="padding: 10px; border-bottom: 1px solid #333;">Error de tipo (<em>TypeError</em>); el programa no puede sumar una cadena y un número.</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #333;">Sobrescritura de valores</td>
      <td style="padding: 10px; border-bottom: 1px solid #333;">Una variable cambia de valor de forma no intencionada durante la ejecución del programa.</td>
      <td style="padding: 10px; border-bottom: 1px solid #333; font-family: 'Courier New', monospace; background-color: #2a2a2a; color: #9cdcfe;">
        precio = 50<br>precio = 0  # Se pierde el valor anterior
      </td>
      <td style="padding: 10px; border-bottom: 1px solid #333;">Los resultados finales del algoritmo se alteran al perderse información previa.</td>
    </tr>
    <tr>
      <td style="padding: 10px;">Errores de sintaxis</td>
      <td style="padding: 10px;">Se emplean nombres inválidos, signos incorrectos o se omiten elementos del lenguaje.</td>
      <td style="padding: 10px; font-family: 'Courier New', monospace; background-color: #2a2a2a; color: #9cdcfe;">
        1dato = 10<br>precio total = 20
      </td>
      <td style="padding: 10px;">El programa no se ejecuta; el intérprete muestra errores de sintaxis.</td>
    </tr>
  </tbody>
</table>
<p style="margin-top: 30px;">
<p style="margin-top: 18px; text-align: justify;">
  Identificar y prevenir estos errores permite mejorar la calidad del código y fortalecer el pensamiento lógico del programador. 
  Según <strong>Lambert (2022)</strong>, 
  <em>“type and initialization errors are among the most frequent sources of bugs in introductory programming, as they reflect misunderstandings about how variables store and manage data”</em> 
  (p. 61). 
  Por ello, la práctica constante y la revisión sistemática del código son estrategias clave para lograr algoritmos funcionales y eficientes.
</p>

  
    `,
    ejemplos: `<p><strong>Ejemplos:</strong> </p>
    
    <p>Después de comprender los conceptos teóricos sobre variables, tipos de datos, operadores, constantes y manejo de errores, es fundamental observar su aplicación práctica dentro de algoritmos y programas. Los siguientes ejemplos ilustran cómo se declaran, asignan y manipulan variables, cómo se realizan operaciones aritméticas y lógicas, y de qué manera se ejecutan procesos de entrada, salida y conversión de datos. </p>
    
    <p>A través de estos ejercicios, se busca consolidar el aprendizaje teórico mediante la práctica, fortaleciendo las habilidades de pensamiento lógico y computacional necesarias para el diseño y desarrollo de programas.     </p>

<p style="text-align: justify;">
A continuación, se presentan ejemplos que integran los conceptos vistos sobre variables, tipos de datos, operaciones, conversión, constantes y manejo de errores.
</p>

<!-- Ejemplo 1 -->

<p><strong>🔹 Ejemplo 1: Declaración y asignación de variables</strong></p>
<p><strong> - Pseudocódigo:</strong></p>
<div style="text-align: center;">
  <div style="display: inline-block; background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #007bff; padding: 10px; border-radius: 8px; font-family: 'Courier New', monospace;">
    Definir nombre Como Cadena<br>
    Definir edad Como Entero<br><br>
    nombre ← "Lucía"<br>
    edad ← 22<br><br>
    Mostrar "Nombre:", nombre<br>
    Mostrar "Edad:", edad
  </div>
</div>

<p><strong> - Python:</strong></p>
<div style="text-align: center;">
  <div style="display: inline-block; background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #28a745; padding: 10px; border-radius: 8px; font-family: 'Courier New', monospace;">
    nombre = "Lucía"<br>
    edad = 22<br><br>
    print("Nombre:", nombre)<br>
    print("Edad:", edad)
  </div>
</div>

<p><strong>Resultado:</strong><br>Nombre: Lucía<br>Edad: 22</p>

<hr style="margin: 25px 0;">

<!-- Ejemplo 2 -->
<p><strong>🔹 Ejemplo 2: Operaciones aritméticas</strong></p>
<p><strong> - Pseudocódigo:</strong></p>
<div style="text-align: center;">
  <div style="display: inline-block; background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #007bff; padding: 10px; border-radius: 8px; font-family: 'Courier New', monospace;">
    Definir a, b, suma, promedio Como Real<br>
    a ← 10<br>
    b ← 8<br>
    suma ← a + b<br>
    promedio ← suma / 2<br><br>
    Mostrar "Suma:", suma<br>
    Mostrar "Promedio:", promedio
  </div>
</div>

<p><strong> - Python:</strong></p>
<div style="text-align: center;">
  <div style="display: inline-block; background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #28a745; padding: 10px; border-radius: 8px; font-family: 'Courier New', monospace;">
    a = 10<br>
    b = 8<br>
    suma = a + b<br>
    promedio = suma / 2<br><br>
    print("Suma:", suma)<br>
    print("Promedio:", promedio)
  </div>
</div>

<p><strong>Resultado:</strong><br>Suma: 18<br>Promedio: 9.0</p>

<hr style="margin: 25px 0;">

<!-- Ejemplo 3 -->

<p><strong>🔹 Ejemplo 3: Operadores lógicos</strong></p>
<p><strong> - Pseudocódigo:</strong></p>
<div style="text-align: center;">
  <div style="display: inline-block; background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #007bff; padding: 10px; border-radius: 8px; font-family: 'Courier New', monospace;">
    Definir edad Como Entero<br>
    edad ← 17<br><br>
    Si edad >= 18 Entonces<br>
    &nbsp;&nbsp;Mostrar "Eres mayor de edad"<br>
    Sino<br>
    &nbsp;&nbsp;Mostrar "Eres menor de edad"<br>
    FinSi
  </div>
</div>

<p><strong> - Python:</strong></p>
<div style="text-align: center;">
  <div style="display: inline-block; background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #28a745; padding: 10px; border-radius: 8px; font-family: 'Courier New', monospace;">
    edad = 17<br><br>
    if edad >= 18:<br>
    &nbsp;&nbsp;print("Eres mayor de edad")<br>
    else:<br>
    &nbsp;&nbsp;print("Eres menor de edad")
  </div>
</div>

<p><strong>Resultado:</strong><br>Eres menor de edad</p>

<hr style="margin: 25px 0;">

<!-- Ejemplo 4 -->

<p><strong>🔹 Ejemplo 4: Entrada y salida de datos</strong></p>
<p><strong> - Pseudocódigo:</strong></p>
<div style="text-align: center;">
  <div style="display: inline-block; background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #007bff; padding: 10px; border-radius: 8px; font-family: 'Courier New', monospace;">
    Leer nombre<br>
    Leer edad<br>
    Mostrar "Hola ", nombre, ", tienes ", edad, " años."
  </div>
</div>

<p><strong> - Python:</strong></p>
<div style="text-align: center;">
  <div style="display: inline-block; background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #28a745; padding: 10px; border-radius: 8px; font-family: 'Courier New', monospace;">
    nombre = input("Ingresa tu nombre: ")<br>
    edad = input("Ingresa tu edad: ")<br><br>
    print("Hola", nombre + ", tienes " + edad + " años.")
  </div>
</div>

<p><strong>Resultado:</strong><br>Hola Sofía, tienes 21 años.</p>

<hr style="margin: 25px 0;">

<!-- Ejemplo 5 -->
<p><strong>🔹 Ejemplo 5: Conversión de tipos (Casting)</strong></p>
<p><strong> - Pseudocódigo:</strong></p>
<div style="text-align: center;">
  <div style="display: inline-block; background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #007bff; padding: 10px; border-radius: 8px; font-family: 'Courier New', monospace;">
    Definir texto Como Cadena<br>
    texto ← "100"<br>
    numero ← ConvertirAEntero(texto)<br>
    resultado ← numero + 20<br>
    Mostrar "Resultado:", resultado
  </div>
</div>

<p><strong> - Python:</strong></p>
<div style="text-align: center;">
  <div style="display: inline-block; background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #28a745; padding: 10px; border-radius: 8px; font-family: 'Courier New', monospace;">
    texto = "100"<br>
    numero = int(texto)<br>
    resultado = numero + 20<br><br>
    print("Resultado:", resultado)
  </div>
</div>

<p><strong>Resultado:</strong><br>Resultado: 120</p>

<hr style="margin: 25px 0;">

<!-- Ejemplo 6 -->

<p><strong>🔹 Ejemplo 6: Uso de constantes</strong></p>
<p><strong> - Pseudocódigo:</strong></p>
<div style="text-align: center;">
  <div style="display: inline-block; background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #007bff; padding: 10px; border-radius: 8px; font-family: 'Courier New', monospace;">
    Constante PI ← 3.1416<br>
    Definir radio, area Como Real<br>
    radio ← 5<br>
    area ← PI * radio * radio<br>
    Mostrar "El área del círculo es:", area
  </div>
</div>

<p><strong> - Python:</strong></p>
<div style="text-align: center;">
  <div style="display: inline-block; background-color: #1e1e1e; color: #f5f5f5; border-left: 4px solid #28a745; padding: 10px; border-radius: 8px; font-family: 'Courier New', monospace;">
    PI = 3.1416<br>
    radio = 5<br>
    area = PI * radio ** 2<br><br>
    print("El área del círculo es:", area)
  </div>
</div>

<p><strong>Resultado:</strong><br>El área del círculo es: 78.54</p>


    `,
    quiz_intermedio: `<p><strong>Quiz:</strong></p>
<section id="quiz_intermedio" class="quiz-section" style="font-family: 'Segoe UI', Tahoma, sans-serif; color: #222; line-height: 1.6; margin-top: 30px;">

  <p><strong>🧩 Planteamiento:</strong> Este cuestionario tiene como finalidad reforzar tu comprensión sobre el uso de variables, tipos de datos y errores comunes al programar. A través de preguntas prácticas, podrás identificar conceptos clave y evaluar tu progreso en el manejo de la lógica computacional.</p>

  <p><strong></strong> <br>
  <strong> Condición de aprobación:</strong> Nota mínima 11.<br>
  <strong> Peso en la evaluación:</strong> 25% de la nota final.</p>

   <p><strong> Indicaciones:</strong></p>
 <ul style="margin: 12px 0 18px 20px; line-height: 1.7; text-align: left; color: #f3f4f6; font-family: 'Segoe UI', Tahoma, sans-serif;">
  <li>Lee atentamente cada pregunta antes de responder. Asegúrate de comprender bien el enunciado antes de elegir una opción.</li>
  <li>Selecciona la opción que consideres correcta según los conceptos aprendidos. Piensa en la respuesta más lógica basada en lo visto en clase.</li>
  <li>Verifica tus respuestas antes de enviar el formulario. Revisa consistencia y que no hayas marcado opciones por error.</li>
  <li>Recuerda que la práctica constante mejora tu razonamiento lógico; intenta razonar cada ejercicio y aprende de los errores.</li>
</ul>


  <p><strong>📊 BONUS:</strong> Se incluye un pequeño caso  opcional para aplicar los conceptos vistos. Su desarrollo no es obligatorio, pero puede otorgar puntos adicionales y fortalecer tus habilidades prácticas.</p>
<p style="margin-top: 30px;">
  <div style="text-align:center; margin-top:25px;">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeivVtuBxYdjlADkDpjTQRWxMoLGeBKrpp-YkqA1tVbIpz_tg/viewform?usp=dialog" 
       target="_blank" 
       style="background-color:#007BFF; color:white; padding:12px 26px; border-radius:8px; text-decoration:none; font-weight:bold; box-shadow: 0 3px 6px rgba(0,0,0,0.15); transition: background-color 0.3s;">
       📋 Iniciar Quiz
    </a>
  </div>

</section>

    `
  },
  dia4: {
    objetivo: `<p><strong>Objetivo:</strong> Aplicar estructuras secuenciales y condicionales para resolver problemas.</p>
    <p>
    ✔️ Comprender el funcionamiento de las estructuras secuenciales y condicionales en la programación.<br>
    ✔️ Aplicar correctamente estructuras de control.<br>
    ✔️ Aplicar estas ideas tanto en el aula como en la vida diaria.
     </p>
    
    
    
    `,
    teoria: `
<section style="color: white; font-family: 'Poppins', sans-serif; line-height: 1.6; text-align: left; padding: 20px;">

  <h2 style="color: #e0edf2ff; font-size: 1.0em; margin-bottom: 8px;">1. Concepto de estructura secuencial</h2>

  <h3 style="color: #d8d4c2ff; font-size: 1.0em; margin-top: 15px;"> Definición y funcionamiento</h3>
  <p>
    La estructura secuencial constituye la base de toda lógica algorítmica. Se refiere a la ejecución ordenada y lineal de las instrucciones de un programa, donde cada paso se cumple exactamente en el orden en que se escribe, sin saltos, bifurcaciones ni repeticiones.
    <br><br>
    Joyanes Aguilar (2022) explica que “una estructura secuencial es aquella en la que las acciones se ejecutan en el mismo orden en que se definen, sin alteraciones en el flujo de control” (p. 238). 
    Esto significa que el flujo sigue un camino único desde el inicio hasta el final, garantizando un resultado predecible siempre que las entradas sean las mismas.
    <br><br>
    En otras palabras, los programas secuenciales actúan como una receta: se deben seguir los pasos en orden para obtener el resultado correcto. 
    Si el orden cambia, el proceso pierde sentido. Por ejemplo, no se puede mostrar un resultado antes de realizar la operación correspondiente; esto rompería la secuencia lógica.
  </p>

  <h3 style="color: #d8d4c2ff; font-size: 1.0em; margin-top: 15px;"> Importancia dentro del flujo de un algoritmo</h3>
  <p>
    Dominar la estructura secuencial es esencial para comprender cómo piensa un programa. 
    Antes de introducir condiciones o ciclos, el estudiante debe internalizar que todo algoritmo tiene un flujo principal que avanza paso a paso.
    <br><br>
    Dale y Weems (2023) sostienen que “las estructuras secuenciales establecen la base lógica sobre la cual se construyen las demás estructuras de control” (p. 110). 
    En otras palabras, son el fundamento sobre el cual se edifica el resto de la lógica algorítmica.
    <br><br>
    La secuencia no solo organiza el código, sino que también desarrolla el pensamiento computacional, ayudando a los estudiantes a razonar de forma ordenada. 
    Cuando el flujo de un algoritmo se ejecuta secuencialmente, el programador puede predecir con facilidad el comportamiento del programa y detectar errores más rápido.
    <br><br>
    Además, en términos de diseño, las secuencias aseguran que los datos fluyan correctamente entre las etapas del proceso: <strong>entrada → procesamiento → salida</strong>. 
    Esta cadena es el modelo básico sobre el que se sustentan todos los programas informáticos, desde los más simples hasta los sistemas complejos.
  </p>

  <h3 style="color: #d8d4c2ff; font-size: 1.0em; margin-top: 15px;"> Ejemplo práctico de estructura secuencial</h3>
  <p>
    Un ejemplo clásico es el cálculo del área de un rectángulo. El algoritmo puede representarse de la siguiente manera:
  </p>

  <h4 style="color: #87cefa; font-size: 1.05em;">🧠 En pseudocódigo:</h4>
  <pre style="background-color: #f5f5f5; color: black; padding: 12px; border-radius: 8px; border-left: 4px solid #007bff;">
Inicio
    Definir base, altura, area Como Real
    Leer base
    Leer altura
    area ← base * altura
    Mostrar "El área del rectángulo es: ", area
Fin
  </pre>

  <h4 style="color: #87cefa; font-size: 1.05em;">🐍 En Python:</h4>
  <pre style="background-color: #f5f5f5; color: black; padding: 12px; border-radius: 8px; border-left: 4px solid #28a745;">
base = float(input("Ingrese la base: "))
altura = float(input("Ingrese la altura: "))
area = base * altura
print("El área del rectángulo es:", area)
  </pre>

  <p>
    En ambos casos, las instrucciones se ejecutan de manera secuencial: primero se leen los datos, luego se calcula el resultado y finalmente se muestra en pantalla.
    <br><br>
    Si se cambiara el orden, por ejemplo, intentando imprimir el resultado antes de calcularlo, el programa generaría un error o mostraría un valor incorrecto.
  </p>

  <h3 style="color: #d8d4c2ff; font-size: 1.0em; margin-top: 15px;"> Relación con los diagramas de flujo</h3>
  <p>
    En los diagramas de flujo, la estructura secuencial se representa mediante una línea continua de símbolos rectangulares (procesos) conectados por flechas que indican la dirección del flujo.
    <br><br>
    Deitel & Associates (2004) señalan que “la ejecución secuencial significa que las instrucciones se ejecutan una tras otra en el orden en que están escritas, formando la estructura de control más simple en la programación” (p. 6).
    <br><br>
    Esto facilita visualizar cómo los datos se transforman paso a paso, reforzando el pensamiento lógico del estudiante.
  </p>

  <p>
    Por ejemplo, un diagrama de flujo para el cálculo del área de una circunferencia incluiría:
  </p>

  <p style="margin-top: 25px;">
  <img src="assets/img/arci.png" 
       alt="Pensamiento computacional" 
       style="width: 230px; display: block; margin: 15px auto; border-radius: 10px;">
</p>


  <p>Todo conectado linealmente, sin condiciones ni repeticiones.</p>

  <h3 style="color: #d8d4c2ff; font-size: 1.0em; margin-top: 15px;">Ventajas de la estructura secuencial</h3>
  <ul>
    <li><strong>Simplicidad:</strong> su flujo lineal facilita la comprensión y el aprendizaje inicial.</li>
    <li><strong>Previsibilidad:</strong> el resultado depende directamente de las entradas.</li>
    <li><strong>Depuración sencilla:</strong> al no tener bifurcaciones, los errores se localizan fácilmente.</li>
    <li><strong>Base lógica:</strong> sirve de punto de partida para estructuras más avanzadas como condicionales o bucles.</li>
  </ul>

  <p>
        Sin embargo, su principal limitación es que no permite tomar decisiones ni repetir acciones, por lo que solo resulta útil para algoritmos simples o con un flujo fijo.
  </p>
<section id="tema-4-2" style="color: #ffffff; background: none; font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6;">

  <h3 style="font-size: 1.2em; font-weight: bold; margin-top: 20px; text-align: left;">
  2. Concepto de estructura condicional
  </h3>

  <h4 style="font-size: 1em; margin-top: 15px; text-align: left;"> Qué son las decisiones en programación</h4>
  <p>
  En programación, las estructuras condicionales permiten que un algoritmo tome decisiones según se cumpla o no una condición lógica. 
  A diferencia de la estructura secuencial donde todas las instrucciones se ejecutan en orden, las condicionales dirigen el flujo del programa 
  por distintos caminos, dependiendo de si una expresión es verdadera (<em>True</em>) o falsa (<em>False</em>).
  </p>
  <p>
  Según <strong>Joyanes Aguilar (2022)</strong>, “las estructuras de decisión introducen la posibilidad de seleccionar entre varias acciones, 
  en función del resultado de una condición” (p. 245). Es decir, el programa analiza una situación y, con base en ello, decide qué instrucción ejecutar.
  </p>
  <p>
    Por ejemplo, en la vida real: “si está lloviendo, llevo paraguas; si no, salgo sin él”. En programación ocurre lo mismo: 
    se evalúa una condición y se elige qué bloque de código ejecutar.
  </p>

  <h4 style="font-size: 1em; margin-top: 15px; text-align: left;">⚙️ Estructura if – else: condicional simple y doble</h4>
  <p>
    En los algoritmos, la instrucción condicional se expresa con la palabra clave <strong>if</strong> (si), que evalúa una condición lógica.
    En la condicional simple, se ejecuta un bloque de código solo si la condición es verdadera.
    En la condicional doble (<strong>if – else</strong>), se ejecuta un bloque si la condición es verdadera y otro si es falsa.
  </p>
  <p>
    Según <strong>Dale y Weems (2023)</strong>, “el control condicional es el mecanismo que otorga flexibilidad al programa, 
    al permitir adaptar su comportamiento a distintos escenarios” (p. 118).
  </p>

  <h4 style="font-size: 1em; margin-top: 15px; text-align: left;">Ejemplo de condicional simple en pseudocódigo</h4>
  <pre style="background-color: #1e1e1e; color: #e0edf2ff; padding: 10px; border-radius: 6px; font-size: 0.9em;">
Inicio
    Definir edad Como Entero
    Leer edad
    Si edad >= 18 Entonces
        Mostrar "Eres mayor de edad."
    FinSi
Fin
  </pre>
  <p>
    Aquí, la instrucción <strong>Mostrar</strong> se ejecuta solo si la condición <code>edad >= 18</code> se cumple. 
    Si no, el programa continúa sin mostrar nada.
  </p>

  <h4 style="font-size: 1em; margin-top: 15px; text-align: left;"> Ejemplo de condicional doble (if – else)</h4>
  <pre style="background-color: #1e1e1e; color: #ffffff; padding: 10px; border-radius: 6px; font-size: 0.9em;">
Inicio
    Definir nota Como Real
    Leer nota
    Si nota >= 11 Entonces
        Mostrar "Aprobado"
    Sino
        Mostrar "Desaprobado"
    FinSi
Fin
  </pre>
  <p>
    Si la nota es mayor o igual a 11, se muestra “Aprobado”; de lo contrario, “Desaprobado”. 
    Esta estructura controla decisiones y valida datos.
  </p>

  <h4 style="font-size: 1em; margin-top: 15px; text-align: left;">Representación en diagrama de flujo</h4>
  <p>
    En los diagramas de flujo, las estructuras condicionales se representan con un <strong>rombo de decisión</strong>, 
    donde se formula una pregunta o condición, como “¿nota ≥ 11?”. 
    Según <strong>Deitel & Associates (2004)</strong>, “el símbolo de decisión (rombo) indica el punto donde el programa debe elegir entre alternativas basadas en una condición” (p. 8).
  </p>
  <ul style="text-align: left; margin-left: 25px;">
    <li>Una flecha con la etiqueta “Sí” o “Verdadero”.</li>
    <li>Otra con la etiqueta “No” o “Falso”.</li>
  </ul>

  <h4 style="font-size: 1em; margin-top: 15px; text-align: left;"> Ejemplo en diagrama de flujo</h4>
  <ul style="text-align: left; margin-left: 25px;">
    <li>Inicio.</li>
    <li>Leer número.</li>
    <li>Condición: ¿número ≥ 0?</li>
    <li>Sí: Mostrar “Positivo”.</li>
    <li>No: Mostrar “Negativo”.</li>
    <li>Fin.</li>
  </ul>

  <h4 style="font-size: 1em; margin-top: 15px; text-align: left;"> Importancia de las estructuras condicionales</h4>
  <p>
    Las estructuras condicionales permiten que los programas reaccionen ante distintas entradas o situaciones. 
    Según <strong>Malvino (2021)</strong>, “sin estructuras condicionales, los programas se limitarían a ejecutar instrucciones fijas, 
    sin adaptarse a los cambios de contexto o datos” (p. 214).
  </p>
  <p>
    Toda aplicación —desde una calculadora hasta una red social— utiliza condiciones para tomar decisiones: validar contraseñas, mostrar mensajes, filtrar información o manejar errores. 
    Dominar su uso es esencial para desarrollar la lógica necesaria en la programación.
  </p>

<section id="tema-4-5-4-6" style="color: #ffffff; background: none; font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6;">

  <h3 style="font-size: 1.2em; font-weight: bold; margin-top: 20px; text-align: left;">
  3. Anidación de estructuras condicionales
  </h3>

  <p>
    La <strong>anidación de estructuras condicionales</strong> ocurre cuando una condición se encuentra dentro de otra, es decir, 
    cuando el resultado de una primera decisión determina si se evaluará o no una segunda. 
    Este tipo de estructuras permite representar procesos jerárquicos o dependientes, en los que cada paso requiere cumplir una condición anterior para continuar.
  </p>

  <p>
    Por ejemplo, al determinar si una persona puede conducir, primero se verifica si es mayor de edad; 
    si lo es, se revisa si posee una licencia vigente. Solo si ambas condiciones se cumplen, se permite la acción. 
    Esto refleja un razonamiento lógico secuencial, donde una decisión conduce a otra.
  </p>

  <p>
    La anidación es muy útil en algoritmos que requieren verificaciones sucesivas o múltiples niveles de decisión. 
    Sin embargo, debe utilizarse con prudencia, ya que un exceso de condicionales dentro de otras puede dificultar la lectura y el mantenimiento del código.
  </p>

  <p>
    Según <strong>Gaddis (2022)</strong>, “las estructuras de decisión anidadas permiten representar una lógica compleja de manera jerárquica, 
    pero su uso excesivo puede reducir la claridad del programa y aumentar las probabilidades de errores lógicos” (p. 113). 
    Por ello, se recomienda mantener las anidaciones simples y organizadas, o reemplazarlas por estructuras múltiples si es posible.
  </p>

  <h3 style="font-size: 1.2em; font-weight: bold; margin-top: 25px; text-align: left;">
     4. Errores comunes en estructuras condicionales
  </h3>

  <p>
    Durante la construcción de estructuras condicionales, los programadores principiantes suelen cometer errores de lógica o sintaxis 
    que impiden el correcto funcionamiento del algoritmo. Reconocerlos y prevenirlos es esencial para asegurar un código funcional y claro.
  </p>

  <p>Entre los errores más frecuentes se encuentran:</p>

  <ul style="text-align: left; margin-left: 25px;">
    <li><strong>Mal uso de operadores:</strong> </li>
   <p style="margin-top: 25px;">
  <img src="assets/img/41.jpg" alt="Pensamiento computacional" style="width: 500px; display: block; margin: 15px auto; border-radius: 10px;">
</p>

    <li><strong>Falta de sangría o indentación (en Python):</strong> </li>
   <p style="margin-top: 25px;">
  <img src="assets/img/4222.jpg" alt="Pensamiento computacional" style="width: 500px; display: block; margin: 15px auto; border-radius: 10px;">
</p>

    <li><strong>Condiciones mal planteadas o confusas:</strong> </li>
<p style="margin-top: 25px;">
  <img src="assets/img/433.jpg" alt="Pensamiento computacional" style="width: 500px; display: block; margin: 15px auto; border-radius: 10px;">
</p>

  </ul>

  <p>
    De acuerdo con <strong>Lambert (2022)</strong>, “los errores de sintaxis y de lógica en las estructuras de decisión son una de las causas más comunes de fallos en los programas, 
    especialmente cuando las condiciones no están bien organizadas o los operadores se utilizan incorrectamente” (p. 129).
  </p>

  <p>
    Una buena práctica es verificar las condiciones de forma individual antes de combinarlas y comentar el código 
    para mantener su comprensión a largo plazo.
  </p>

<section id="recursos_aprendizaje" style="color: #ffffff; font-family: 'Arial', sans-serif; line-height: 1.6; margin-top: 30px;">

  <h3 style="font-size: 1.0em; margin-bottom: 10px;">🎥 Videos a consultar</h3>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="margin-bottom: 18px;">
      <strong>Castaño Giraldo, S. A.</strong> (2021, marzo 17). <em>Condicionales en Python desde cero [IF, ELIF, ELSE] #009</em> [Video]. YouTube. <br>
      👉 <a href="https://www.youtube.com/watch?v=iFBcCDDDsms" target="_blank" style="color: #00bfff; text-decoration: none;">https://www.youtube.com/watch?v=iFBcCDDDsms</a><br>
      <span>Este video introduce las estructuras condicionales en Python de forma sencilla, mostrando el uso de <code>if</code>, <code>elif</code> y <code>else</code> con ejemplos claros y prácticos.</span>
    </li>

    <li style="margin-bottom: 18px;">
      <strong>Code JavaVu.</strong> (2020). <em>Estructura secuencial: ejemplos de algoritmos</em> [Video]. YouTube. <br>
      👉 <a href="https://www.youtube.com/watch?v=cY78qXjyyXU" target="_blank" style="color: #00bfff; text-decoration: none;">https://www.youtube.com/watch?v=cY78qXjyyXU</a><br>
      <span>Un recurso ideal para comprender cómo funcionan las estructuras secuenciales en los algoritmos, con ejemplos prácticos y explicaciones paso a paso.</span>
    </li>

    <li style="margin-bottom: 18px;">
      <strong>SnekCato.</strong> (2021, abril 25). <em>IF, ELIF, ELSE | Condicionales en Python</em> [Video]. YouTube. <br>
      👉 <a href="https://www.youtube.com/watch?v=S2gkQHGFiRE" target="_blank" style="color: #00bfff; text-decoration: none;">https://www.youtube.com/watch?v=S2gkQHGFiRE</a><br>
      <span>Explica de manera dinámica cómo aplicar correctamente las estructuras condicionales en Python, con ejemplos de código y ejercicios de práctica.</span>
    </li>
  </ul>

  <h3 style="font-size: 1.0em; margin-top: 25px;">💻 Programas que te pueden servir para practicar</h3>

  <ul style="list-style-type: none; padding-left: 0;">
    <li style="margin-bottom: 15px;">
      <strong>RAPTOR:</strong><br>
      Herramienta educativa para crear y ejecutar algoritmos mediante diagramas de flujo. Permite visualizar de forma clara cómo se ejecutan las estructuras secuenciales y condicionales paso a paso.
    </li>

    <li style="margin-bottom: 15px;">
      <strong>Flowgorithm:</strong><br>
      Programa gratuito diseñado para aprender programación a través de diagramas de flujo interactivos. Es ideal para practicar la lógica de decisiones (<code>if–else</code>, <code>if–elif–else</code>) antes de escribir código en Python.
    </li>

    <li style="margin-bottom: 15px;">
      <strong>Miro:</strong><br>
      Pizarra digital colaborativa que facilita la creación de diagramas de flujo, esquemas y mapas conceptuales. Muy útil para representar gráficamente el flujo de un algoritmo antes de implementarlo.
    </li>
  </ul>
  </section>
   <p style="margin-top: 25px;">
  <img src="assets/img/A1.png" alt="Pensamiento computacional" style="width: 500px; display: block; margin: 15px auto; border-radius: 10px;">
</p>

    `,
    ejemplos: `
    
<section id="ejemplos_estructuras" style="color: #ffffff; font-family: 'Arial', sans-serif; line-height: 1.5; margin-top: 10px; text-align: left;">

  <h3 style="font-size: 1.3em; margin-bottom: 8px;">Ejemplo 1: </h3>
  <p style="margin: 5px 0;">Un ejemplo clásico de estructura secuencial es el cálculo del promedio de tres notas. En este tipo de estructura, las instrucciones se ejecutan una tras otra, en el mismo orden en que fueron escritas.</p>

  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #ffffff; font-family: 'Courier New', monospace;">
Inicio
  Definir n1, n2, n3, promedio Como Real
  Leer n1, n2, n3
  promedio ← (n1 + n2 + n3) / 3
  Mostrar "El promedio es: ", promedio
Fin
  </pre>

  <p style="margin: 5px 0;">➡️ En este caso, el flujo es lineal y sin bifurcaciones: primero se leen los datos, luego se realiza el cálculo y finalmente se muestra el resultado.</p>

  <h4 style="font-size: 1.1em; margin-top: 10px; margin-bottom: 5px;">Ejemplo 2:</h4>
  <p style="margin: 5px 0;">Situación: calcular el área y el perímetro de un rectángulo.</p>

  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #ffffff; font-family: 'Courier New', monospace;">
Inicio
  Definir base, altura, area, perimetro Como Real
  Leer base
  Leer altura
  area ← base * altura
  perimetro ← 2 * (base + altura)
  Mostrar "El área es: ", area
  Mostrar "El perímetro es: ", perimetro
Fin
  </pre>

  <p style="margin: 5px 0;">➡️ Este ejemplo sigue un flujo lineal de lectura, cálculo y salida, sin condiciones ni repeticiones.</p>

  <h4 style="font-size: 1.1em; margin-top: 10px; margin-bottom: 5px;">Ejemplo 3:</h4>
  <p style="margin: 5px 0;">Situación: determinar si una persona puede votar.</p>

  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #ffffff; font-family: 'Courier New', monospace;">
Inicio
  Definir edad Como Entero
  Leer edad
  Si edad >= 18 Entonces
      Mostrar "Puede votar"
  Sino
      Mostrar "No puede votar"
  FinSi
Fin
  </pre>

  <p style="margin: 5px 0;">➡️ Aquí se utiliza la estructura if – else, que permite tomar una decisión según se cumpla o no la condición (edad ≥ 18).</p>

  <h4 style="font-size: 1.1em; margin-top: 10px; margin-bottom: 5px;">Ejemplo 4:</h4>

  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #ffffff; font-family: 'Courier New', monospace;">
Inicio
  Definir numero Como Entero
  Leer numero
  Si numero MOD 2 = 0 Entonces
      Mostrar "El número es par"
  Sino
      Mostrar "El número es impar"
  FinSi
Fin
  </pre>

  <p style="margin: 5px 0;">➡️ El operador MOD calcula el residuo. Si es cero, el número es par; de lo contrario, es impar.</p>

  <h4 style="font-size: 1.1em; margin-top: 10px; margin-bottom: 5px;">Ejemplo 5:</h4>
  <p style="margin: 5px 0;">Situación: verificar si una persona puede conducir.</p>

  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #ffffff; font-family: 'Courier New', monospace;">
Inicio
  Definir edad Como Entero
  Definir tiene_licencia Como Caracter
  Leer edad
  Si edad >= 18 Entonces
      Leer tiene_licencia
      Si tiene_licencia = "S" Entonces
          Mostrar "Puede conducir"
      Sino
          Mostrar "No tiene licencia"
      FinSi
  Sino
      Mostrar "No tiene la edad mínima"
  FinSi
Fin
  </pre>

  <p style="margin: 5px 0;">➡️ Este ejemplo muestra una anidación condicional, donde una decisión depende del resultado de otra.</p>

  <h4 style="font-size: 1.1em; margin-top: 10px; margin-bottom: 5px;">Ejemplo 5:</h4>
  <p style="margin: 5px 0;">Situación: clasificar una nota según el valor numérico.</p>

  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #ffffff; font-family: 'Courier New', monospace;">
Inicio
  Definir nota Como Real
  Leer nota
  Si nota >= 17 Entonces
      Mostrar "Calificación: A"
  Sino
      Si nota >= 14 Entonces
          Mostrar "Calificación: B"
      Sino
          Si nota >= 11 Entonces
              Mostrar "Calificación: C"
          Sino
              Mostrar "Calificación: D"
          FinSi
      FinSi
  FinSi
Fin
  </pre>

  <p style="margin: 5px 0;">➡️ Este tipo de condicional múltiple permite evaluar varias condiciones de forma ordenada, ejecutando solo la primera que sea verdadera.</p>

  <h4 style="font-size: 1.1em; margin-top: 10px; margin-bottom: 5px;">Ejemplo 6:</h4>
  <p style="margin: 5px 0;">Situación: determinar la etapa de vida según la edad.</p>

  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #ffffff; font-family: 'Courier New', monospace;">
Inicio
  Definir edad Como Entero
  Leer edad
  Si edad < 12 Entonces
      Mostrar "Niño"
  Sino
      Si edad < 18 Entonces
          Mostrar "Adolescente"
      Sino
          Si edad < 60 Entonces
              Mostrar "Adulto"
          Sino
              Mostrar "Adulto mayor"
          FinSi
      FinSi
  FinSi
Fin
  </pre>

  <p style="margin: 5px 0;">➡️ Este ejemplo permite clasificar rangos de edad usando condiciones jerárquicas.</p>

</section>

    
    `
  },
  dia5: {
    objetivo: `<p><strong>Objetivo:</strong></p>
    
     <p>
    ✔️ Comprender la función del pseudocódigo como herramienta intermedia entre el razonamiento lógico y la programación estructurada.<br>
    ✔️ Aplicar las reglas y estructuras básicas del pseudocódigo para representar soluciones algorítmicas de forma clara y ordenada.<br>
    ✔️ Desarrollar habilidades de análisis y planificación mediante la escritura de algoritmos en pseudocódigo.
     </p>
    
    
    `,
    teoria: `<p><strong>Teoría:</strong></p>

    <section id="pseudocodigo" style="color: #ffffff; font-family: 'Arial', sans-serif; line-height: 1.5; margin-top: 30px; text-align: left;">

  <h3 style="font-size: 1.0em; margin-bottom: 8px;">1. Definición y función del pseudocódigo</h3>
  <p>El pseudocódigo es una herramienta utilizada para describir el funcionamiento de un algoritmo mediante una notación estructurada, que combina el lenguaje natural con ciertos elementos de la programación formal. Su objetivo principal es expresar la lógica de un proceso sin preocuparse por la sintaxis rígida de un lenguaje de programación. Esto permite que el analista o el estudiante se concentre en el razonamiento lógico antes de escribir código ejecutable.</p>

  <p>El pseudocódigo no es interpretado por una computadora, sino que actúa como guía previa para el desarrollo del software. Gracias a su carácter universal, puede ser comprendido por programadores de distintos lenguajes y niveles de experiencia. Además, se considera una fase intermedia esencial en el diseño de programas, ya que evita errores conceptuales en etapas posteriores.</p>

  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #00ffcc; font-family: 'Courier New', monospace;">
Inicio
   Leer número1, número2
   Sumar ← número1 + número2
   Mostrar Sumar
Fin
  </pre>

  <h3 style="font-size: 1.0em; margin-bottom: 8px; margin-top: 20px;">2. Importancia en la programación</h3>
  <p>El uso del pseudocódigo es fundamental para el desarrollo del pensamiento lógico y computacional. Permite que los estudiantes y programadores organicen sus ideas antes de pasar al código fuente, reduciendo la posibilidad de errores y mejorando la eficiencia del proceso de programación. En la enseñanza de la informática, el pseudocódigo se utiliza como una herramienta pedagógica para introducir los conceptos de algoritmia sin necesidad de aprender un lenguaje específico.</p>

  <p>Asimismo, fomenta la comprensión estructurada del flujo de información, lo que facilita la detección de errores lógicos, la optimización de procesos y la comunicación entre miembros de un equipo de desarrollo. Gracias a su lenguaje neutro, el pseudocódigo puede emplearse en diferentes contextos técnicos y educativos, siendo un recurso ideal para documentar procedimientos o diseñar prototipos de programas.</p>

  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #00ffcc; font-family: 'Courier New', monospace;">
Inicio
   Leer temperatura
   Si temperatura > 37 Entonces
        Mostrar "Tiene fiebre"
   Sino
        Mostrar "Temperatura normal"
Fin
  </pre>

  <h3 style="font-size: 1.0em; margin-bottom: 8px; margin-top: 20px;">3. Reglas de escritura del pseudocódigo</h3>
  <p>La correcta redacción del pseudocódigo garantiza la claridad y la comprensión del algoritmo. Generalmente, todo pseudocódigo inicia con la palabra “Inicio” y finaliza con “Fin”, lo que delimita el cuerpo del algoritmo. Cada instrucción debe escribirse en líneas separadas y con una sangría o indentación que refleje la jerarquía de las estructuras utilizadas.</p>

  <p>Es recomendable emplear verbos de acción como Leer, Escribir, Calcular o Mostrar, los cuales indican las operaciones que realiza el algoritmo. Los nombres de las variables deben ser claros y representativos del contenido que almacenan. Además, deben evitarse ambigüedades, repeticiones innecesarias y estructuras poco legibles.</p>

  <p><strong>Ejemplo correcto:</strong></p>
  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #00ffcc; font-family: 'Courier New', monospace;">
Inicio
   Leer nota
   Si nota >= 11 Entonces
        Mostrar "Aprobado"
   Sino
        Mostrar "Desaprobado"
Fin
  </pre>

  <p><strong>Ejemplo incorrecto:</strong></p>
  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #ff8080; font-family: 'Courier New', monospace;">
Leer nota
Si nota>=11
Mostrar Aprobado
Sino
Mostrar Desaprobado
  </pre>

  <h3 style="font-size: 1.0em; margin-bottom: 8px; margin-top: 20px;">4. Estructuras básicas del pseudocódigo</h3>
  <p>Los algoritmos representados mediante pseudocódigo se organizan en tres estructuras fundamentales: secuencial, condicional y repetitiva.</p>

  <p><strong>Estructura secuencial:</strong></p>
  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #00ffcc; font-family: 'Courier New', monospace;">
Inicio
   Leer A, B
   C ← A + B
   Mostrar C
Fin
  </pre>

  <p><strong>Estructura condicional:</strong></p>
  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #00ffcc; font-family: 'Courier New', monospace;">
Inicio
   Leer edad
   Si edad >= 18 Entonces
        Mostrar "Mayor de edad"
   Sino
        Mostrar "Menor de edad"
Fin
  </pre>

  <p><strong>Estructura repetitiva:</strong></p>
  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #00ffcc; font-family: 'Courier New', monospace;">
Inicio
   Contador ← 1
   Mientras Contador <= 5 Hacer
         Mostrar Contador
         Contador ← Contador + 1
   FinMientras
Fin
  </pre>

  <h3 style="font-size: 1.0em; margin-bottom: 8px; margin-top: 20px;">5. Ventajas del pseudocódigo</h3>
  <p>El pseudocódigo presenta múltiples ventajas en el proceso de diseño de algoritmos. En primer lugar, facilita la comprensión de los procedimientos lógicos gracias a su lenguaje simple y estructurado. En segundo lugar, permite planificar y documentar soluciones antes de implementarlas, lo que disminuye la probabilidad de cometer errores durante la codificación. Finalmente, favorece el aprendizaje de la programación al centrarse en la lógica más que en la sintaxis.</p>

  <p>Estas características convierten al pseudocódigo en una herramienta indispensable para quienes se inician en la programación y para los equipos que buscan estandarizar la comunicación técnica entre analistas, diseñadores y desarrolladores.</p>

  <h3 style="font-size: 1.0em; margin-bottom: 8px; margin-top: 20px;">6. Ejemplos aplicados</h3>


  <p><strong>Ejemplo 1: Calcular el promedio de tres números</strong></p>
  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #00ffcc; font-family: 'Courier New', monospace;">
Inicio
   Leer n1, n2, n3
   promedio ← (n1 + n2 + n3) / 3
   Mostrar promedio
Fin
  </pre>

  <p><strong>Ejemplo 2: Determinar si una persona es mayor de edad</strong></p>
  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #00ffcc; font-family: 'Courier New', monospace;">
Inicio
   Leer edad
   Si edad >= 18 Entonces
        Mostrar "Mayor de edad"
   Sino
        Mostrar "Menor de edad"
Fin
  </pre>

  <p><strong>Ejemplo 3: Clasificar una nota según su valor numérico</strong></p>
  <pre style="background-color: #2a2a2a; padding: 10px; border-radius: 8px; color: #00ffcc; font-family: 'Courier New', monospace;">
Inicio
   Leer nota
   Si nota >= 17 Entonces
        Mostrar "Excelente"
   Sino Si nota >= 14 Entonces
        Mostrar "Bueno"
   Sino Si nota >= 11 Entonces
        Mostrar "Regular"
   Sino
        Mostrar "Desaprobado"
Fin
  </pre>

</section>


    `,
    ejemplos: `<p><strong>Ejemplos:</strong>
    
  <section style="color: white; font-family: 'Poppins', sans-serif; line-height: 1.5; padding: 20px; text-align: left;">

  <p style="margin-bottom: 10px;">
    A continuación se presentan ejercicios prácticos para aplicar las estructuras fundamentales del pseudocódigo:
    secuencial, condicional y repetitiva. Cada ejercicio incluye la descripción del problema, las entradas, los procesos y las salidas esperadas.
  </p>

  <!-- Ejercicio 1 -->
  <h3 style="color: #ffcc00; margin-top: 20px; font-size: 18px;"> Ejercicio 1: Cálculo del promedio final de un estudiante</h3>
  <p><strong>Descripción:</strong> Desarrollar un algoritmo que calcule el promedio final de un estudiante a partir de tres notas. Si el promedio es mayor o igual a 11, se mostrará “Aprobado”; de lo contrario, “Desaprobado”.</p>
  <p><strong>Entradas:</strong> n1, n2, n3 (notas del estudiante)</p>
  <p><strong>Proceso:</strong> Leer las tres notas. Calcular el promedio = (n1 + n2 + n3) / 3. Evaluar si el promedio ≥ 11.</p>
  <p><strong>Salidas:</strong> Promedio del estudiante y mensaje correspondiente.</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; font-family: 'Courier New', monospace; overflow-x: auto;">
Inicio
    Definir n1, n2, n3, promedio Como Real
    Leer n1, n2, n3
    promedio ← (n1 + n2 + n3) / 3
    Si promedio >= 11 Entonces
        Mostrar "Aprobado con promedio de: ", promedio
    Sino
        Mostrar "Desaprobado con promedio de: ", promedio
    FinSi
Fin
  </pre>

  <!-- Ejercicio 2 -->
  <h3 style="color: #ffcc00; margin-top: 25px; font-size: 18px;"> Ejercicio 2: Descuento según monto de compra</h3>
  <p><strong>Descripción:</strong> Calcular el total a pagar considerando un descuento del 10% si el monto es mayor o igual a 500 soles.</p>
  <p><strong>Entradas:</strong> monto (importe total de la compra)</p>
  <p><strong>Proceso:</strong> Leer monto. Si monto ≥ 500, aplicar descuento = monto * 0.10. Calcular total = monto - descuento.</p>
  <p><strong>Salidas:</strong> Descuento aplicado y total a pagar.</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; font-family: 'Courier New', monospace; overflow-x: auto;">
Inicio
    Definir monto, descuento, total Como Real
    Leer monto
    Si monto >= 500 Entonces
        descuento ← monto * 0.10
    Sino
        descuento ← 0
    FinSi
    total ← monto - descuento
    Mostrar "Descuento aplicado: ", descuento
    Mostrar "Total a pagar: ", total
Fin
  </pre>

  <!-- Ejercicio 3 -->
  <h3 style="color: #ffcc00; margin-top: 25px; font-size: 18px;"> Ejercicio 3: Clasificación de edades</h3>
  <p><strong>Descripción:</strong> Determinar la etapa de vida de una persona según su edad.</p>
  <p><strong>Entradas:</strong> edad (años)</p>
  <p><strong>Proceso:</strong> Leer edad y evaluar rangos: &lt;12 “Niño(a)”, 12–17 “Adolescente”, 18–59 “Adulto(a)”, ≥60 “Adulto mayor”.</p>
  <p><strong>Salidas:</strong> Mensaje con la etapa de vida.</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; font-family: 'Courier New', monospace; overflow-x: auto;">
Inicio
    Definir edad Como Entero
    Leer edad
    Si edad < 12 Entonces
        Mostrar "Niño(a)"
    Sino
        Si edad < 18 Entonces
            Mostrar "Adolescente"
        Sino
            Si edad < 60 Entonces
                Mostrar "Adulto(a)"
            Sino
                Mostrar "Adulto mayor"
            FinSi
        FinSi
    FinSi
Fin
  </pre>

  <!-- Ejercicio 4 -->
  <h3 style="color: #ffcc00; margin-top: 25px; font-size: 18px;"> Ejercicio 4: Cálculo del salario semanal</h3>
  <p><strong>Descripción:</strong> Calcular el salario semanal de un trabajador. Si trabaja más de 40 horas, las horas extra se pagan al 150% del valor normal.</p>
  <p><strong>Entradas:</strong> horas trabajadas, tarifa por hora.</p>
  <p><strong>Proceso:</strong> Leer horas y tarifa. Si horas ≤ 40, salario = horas * tarifa; si &gt;40, salario = (40 * tarifa) + ((horas - 40) * tarifa * 1.5).</p>
  <p><strong>Salidas:</strong> Salario semanal total.</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; font-family: 'Courier New', monospace; overflow-x: auto;">
Inicio
    Definir horas, tarifa, salario Como Real
    Leer horas, tarifa
    Si horas <= 40 Entonces
        salario ← horas * tarifa
    Sino
        salario ← (40 * tarifa) + ((horas - 40) * tarifa * 1.5)
    FinSi
    Mostrar "El salario semanal es: ", salario
Fin
  </pre>

  <!-- Ejercicio 5 -->
  <h3 style="color: #ffcc00; margin-top: 25px; font-size: 18px;"> Ejercicio 5: Suma de números positivos</h3>
  <p><strong>Descripción:</strong> Leer 10 números e indicar la suma total solo de los valores positivos.</p>
  <p><strong>Entradas:</strong> 10 números enteros (num).</p>
  <p><strong>Proceso:</strong> Inicializar suma ← 0. Repetir 10 veces: leer num. Si num > 0, sumar a suma.</p>
  <p><strong>Salidas:</strong> Suma total de los números positivos.</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; font-family: 'Courier New', monospace; overflow-x: auto;">
Inicio
    Definir num, suma, contador Como Entero
    suma ← 0
    contador ← 1
    Mientras contador <= 10 Hacer
        Leer num
        Si num > 0 Entonces
            suma ← suma + num
        FinSi
        contador ← contador + 1
    FinMientras
    Mostrar "La suma de los números positivos es: ", suma
Fin
  </pre>

  <!-- Ejercicio 6 -->
  <h3 style="color: #ffcc00; margin-top: 25px; font-size: 18px;"> Ejercicio 6: Determinar el mayor de tres números</h3>
  <p><strong>Descripción:</strong> Leer tres números y determinar cuál es el mayor o si todos son iguales.</p>
  <p><strong>Entradas:</strong> a, b, c (números reales).</p>
  <p><strong>Proceso:</strong> Leer los tres números, compararlos y mostrar el mayor o mensaje de igualdad.</p>
  <p><strong>Salidas:</strong> El número mayor o mensaje de igualdad.</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; font-family: 'Courier New', monospace; overflow-x: auto;">
Inicio
    Definir a, b, c Como Real
    Leer a, b, c
    Si a > b Y a > c Entonces
        Mostrar "El mayor es: ", a
    Sino
        Si b > c Entonces
            Mostrar "El mayor es: ", b
        Sino
            Si c > a Y c > b Entonces
                Mostrar "El mayor es: ", c
            Sino
                Mostrar "Todos los números son iguales"
            FinSi
        FinSi
    FinSi
Fin
  </pre>

  <!-- Ejercicio 7 -->
  <h3 style="color: #ffcc00; margin-top: 25px; font-size: 18px;"> Ejercicio 7: Validación de fecha</h3>
  <p><strong>Descripción:</strong> Leer una fecha (día, mes, año) y validar si es correcta (sin considerar años bisiestos).</p>
  <p><strong>Entradas:</strong> día, mes, año (valores enteros).</p>
  <p><strong>Proceso:</strong> Verificar rangos de mes y día según el mes correspondiente.</p>
  <p><strong>Salidas:</strong> Mensaje indicando si la fecha es válida o no.</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; font-family: 'Courier New', monospace; overflow-x: auto;">
Inicio
    Definir dia, mes, año Como Entero
    Leer dia, mes, año
    Si mes < 1 O mes > 12 Entonces
        Mostrar "Mes inválido"
    Sino
        Si dia < 1 O dia > 31 Entonces
            Mostrar "Día inválido"
        Sino
            Si (mes = 4 O mes = 6 O mes = 9 O mes = 11) Y dia > 30 Entonces
                Mostrar "Día inválido para este mes"
            Sino
                Si mes = 2 Y dia > 28 Entonces
                    Mostrar "Día inválido para febrero"
                Sino
                    Mostrar "Fecha válida"
                FinSi
            FinSi
        FinSi
    FinSi
Fin
  </pre>

  <!-- Ejercicio 8 -->
  <h3 style="color: #ffcc00; margin-top: 25px; font-size: 18px;"> Ejercicio 8: Clasificación de notas con promedio general</h3>
  <p><strong>Descripción:</strong> Leer las notas de cinco estudiantes, calcular el promedio general del grupo y mostrar cuántos aprobaron y desaprobaron.</p>
  <p><strong>Entradas:</strong> nota (5 valores reales).</p>
  <p><strong>Proceso:</strong> Acumular notas, contar aprobados y desaprobados, calcular promedio.</p>
  <p><strong>Salidas:</strong> Promedio general, cantidad de aprobados y desaprobados.</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; font-family: 'Courier New', monospace; overflow-x: auto;">
Inicio
    Definir nota, suma, promedio Como Real
    Definir contador, aprobados, desaprobados Como Entero
    suma ← 0
    aprobados ← 0
    desaprobados ← 0
    Para contador ← 1 Hasta 5 Con Paso 1 Hacer
        Leer nota
        suma ← suma + nota
        Si nota >= 11 Entonces
            aprobados ← aprobados + 1
        Sino
            desaprobados ← desaprobados + 1
        FinSi
    FinPara
    promedio ← suma / 5
    Mostrar "Promedio general: ", promedio
    Mostrar "Aprobados: ", aprobados
    Mostrar "Desaprobados: ", desaprobados
Fin
  </pre>

  <p style="margin-top: 20px;">
    Estos ejercicios te permitirán aplicar de forma práctica las estructuras básicas del pseudocódigo, desarrollando el pensamiento lógico, la secuencia de pasos y la capacidad de traducir problemas reales a soluciones algorítmicas.
  </p>

</section>

    
    `,
    quiz_final: `
    <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 17px; line-height: 1.6;">

  <p><strong>📚 Indicaciones generales:</strong><br>
  Esta evaluación corresponde al cierre del módulo y representa el <strong>50% de la nota total.</strong><br>
  <strong>Preguntas:</strong> 30 en total (parte teórica + caso práctico)<br>
  <strong>Nota máxima:</strong> Para aporbar el minicurso 1 se requiere minimo una nota de 11 <br>
  Solo se permite <strong>un envío por estudiante.</strong></p>

  <p><strong>Instrucciones del caso práctico:</strong><br>
  Lee la situación del problema y redacta el pseudocódigo completo con entradas, procesos y salidas.<br>
  Considera condiciones de nota, asistencia y bonificación.<br>
  Sube tu archivo en formato <strong>PDF o Word (.docx)</strong> con tu nombre y sección.<br>
  Se evaluará la claridad, estructura y lógica del pseudocódigo.</p>

  <p><strong>Formato de archivo:</strong><br>
  <code style="background-color: #222; padding: 5px 8px; border-radius: 5px; color: #aef;">Apellido_Nombre_CasosFinales</code><br>
  Ejemplo: <code style="background-color: #222; padding: 5px 8px; border-radius: 5px; color: #aef;">Pérez_Luisa_CasosFinales.pdf</code></p>

  <p><strong>⚠️ Reglas:</strong><br>

  Solo se aceptará un intento.<br>
  Revisa antes de enviar; los duplicados serán observados.</p>

  <div style="margin-top: 25px;">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScZ2RE99mQocj0h4IOZMZiL5bc26YZyqGJdbj68P9PRUREG9w/viewform?usp=dialog" 
       target="_blank" 
       style="display: inline-block; background-color: #0078ff; color: white; text-decoration: none; font-weight: bold; padding: 10px 25px; border-radius: 10px; transition: 0.3s;">
       🧾 Ir al formulario
    </a>
  </div>
</section>

  
    
    `
  },

  
  // Curso 2 – PSeInt
    pseint1: {
    objetivo: `<p><strong>Objetivo:</strong> </p>
    <p>

    ✔️ Comprender qué es la programación y su papel en la resolución de problemas. <br>
    ✔️ Diseñar algoritmos básicos usando pseudocódigo en PSeInt.<br>
    ✔️ Ejecutar y depurar programas en PSeInt para analizar su funcionamiento.<br>
     </p>
    
    
    
    `,
    teoria: `<p><strong>Teoría:</strong>  </p>
    
    
 <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 17px; line-height: 1.6;">

  <style>
    strong {
      color: #00e6ff; /* 💎 Celeste más suave */
      text-shadow: 0 0 2px #00e6ff, 0 0 4px #00e6ff; /* Brillo bajo */
    }
  </style>

  </style>
  </style>
  <p><strong>1. Concepto de programación y su importancia en la resolución de problemas</strong></p>
  <p>
    La programación, en su sentido más amplio, implica el diseño y la ejecución de una serie de instrucciones que una máquina o un sistema informático puede llevar a cabo para transformar información, producir resultados o automatizar procesos. En este sentido, la programación se presenta como una herramienta fundamental para la resolución de problemas, ya que permite modelar situaciones, descomponerlas en pasos lógicos y generar soluciones sistemáticas. Por ejemplo, a través de algoritmos programados se puede optimizar la gestión de inventarios, automatizar cálculos o construir interfaces que interactúan con usuarios.
  </p>
  <p>
    La importancia de la programación como habilidad cognitiva se ha incrementado en los últimos años: según Saa-Saltos (2024), la enseñanza de fundamentos de programación mostró una correlación positiva con la mejora del pensamiento abstracto, la creatividad y la resolución de problemas en estudiantes universitarios. 
  </p>
  <p>
    Esto evidencia que más allá de la mera escritura de código, la programación favorece competencias de orden superior. Además, Almaguer (2023) evidenció que muchas personas encuentran compleja la adquisición de conceptos básicos de programación, lo que resalta la necesidad de un enfoque pedagógico adecuado que vincule la programación con la resolución de problemas reales y concretos. 
  </p>
  <p>
    En el contexto de PSeInt (y del curso de introducción al pseudocódigo), este sub-tema invita al estudiante a reconocer la programación como un mecanismo de transformación de la lógica humana en procesos automáticos: se aprende a plantear preguntas, analizar datos de entrada, definir salidas esperadas y construir pasos intermedios. Así, la programación se convierte en un puente entre la lógica del problema y la ejecución computacional. Por ejemplo, si se plantea el problema “¿cómo calcular el promedio de calificaciones?”, se deberá identificar datos (las calificaciones), pasos (sumar, dividir por cantidad) y resultado (promedio). La programación formaliza ese flujo.
  </p>

  <p><strong>2. Algoritmos: definición, características y representación</strong></p>
  <p>
    Un algoritmo puede definirse como un conjunto de instrucciones finitas, bien definidas, ordenadas y acotadas, cuyo propósito es resolver un problema o realizar una tarea específica. En palabras de un recurso especializado: «un algoritmo informático es un conjunto de instrucciones definidas, ordenadas y acotadas para resolver un problema, realizar un cálculo o desarrollar una tarea». 
  </p>
  <p>
    Las características esenciales de un algoritmo incluyen: inicio explícito, fin explícito, pasos claros y no ambiguos, finitud y corrección (es decir, que al final produzca el resultado esperado). Por ejemplo, Newman (2022) describe que el algoritmo debe contar con entrada, proceso y salida (input – process – output). 
  </p>
  <p>
    En cuanto a la representación, los algoritmos pueden mostrarse mediante diagramas de flujo, pseudocódigo o estructuración textual; estos medios facilitan la comprensión de la lógica antes de implementarla en un lenguaje de programación. 
         <p style="margin-top: 25px;">
        <img src="assets/img/pp1.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
  <p>
    Este ejemplo muestra un algoritmo simple que define datos de entrada, una decisión y una salida. La correcta comprensión y diseño de algoritmos es clave para que la programación no sea un ejercicio mecánico de codificación, sino una actividad estructurada de resolución de problemas, cómoda de trasponer al entorno del pseudocódigo (como el de PSeInt) y al posterior desarrollo en lenguajes de programación.
  </p>

  <p><strong>3. Lógica computacional y pensamiento algorítmico</strong></p>
  <p>
    La lógica computacional se refiere al conjunto de principios de razonamiento lógico que permiten a una persona formular operaciones, decisiones y procedimientos de modo estructurado, para luego codificarlos o automatizarlos en un sistema informático. Aunque el término “lógica computacional” tiene usos técnicos en ciencias de la computación (véase la lógica booleana y formal), en el contexto educativo de programación se relaciona estrechamente con el desarrollo del pensamiento algorítmico. 
  </p>
  <p>
    El pensamiento algorítmico consiste, en palabras de Osorio (2023), en la capacidad de construir modelos mentales de resolución de problemas mediante estructuras algorítmicas: «El presente artículo analiza la asociación entre la tipología de estructuras algorítmicas de programación y los modelos mentales construidos para su resolución». 
  </p>
  <p>
    Asimismo, el desarrollo del pensamiento computacional al que el pensamiento algorítmico contribuye significativamente es indispensable en la enseñanza de programación. Cervera-Manjarrez (2023) señala que mediante estrategias de pensamiento computacional las personas adquieren habilidades como la abstracción, la automatización y la identificación de patrones para resolver problemas complejos. 
  </p>
  <p>
    Por ejemplo, al plantear un problema como “determinar cuántos números pares hay en una lista de diez”, el estudiante debe abstraer el conjunto de datos (lista), reconocer el patrón (paridad), diseñar un algoritmo (recorrer lista, contar pares) y aplicarlo. Esa secuencia de pensamiento algorítmico es lo que subyace a la programación. De este modo, en el uso de PSeInt, la lógica computacional se traduce en operaciones de flujo: lectura, decisión, repetición, acumulador, etc.
  </p>

  <p><strong>4. Introducción al pseudocódigo y su utilidad</strong></p>
  <p>
    El pseudocódigo es una herramienta de representación de algoritmos escrita en un lenguaje cercano al humano, que imita la lógica de programación pero sin adoptar la sintaxis estricta de un lenguaje de código. Su función primordial es servir como puente entre la idea algorítmica y el desarrollo en un lenguaje real. Por ejemplo, un recurso en español define: “un pseudocódigo es una forma de representar la solución a un algoritmo de la forma más detallada posible, y a su vez lo más parecida posible al lenguaje que posteriormente se utilizará para la codificación del mismo”. 
  </p>


   <p style="margin-top: 25px;">
        <img src="assets/img/pp2.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
    Este pseudocódigo refleja las instrucciones esenciales. Por tal motivo, para los estudiantes que se introducen en programación con PSeInt, el pseudocódigo será un aliado que mejora la comprensión, agiliza el aprendizaje y reduce la barrera que representa conocer la sintaxis de un lenguaje formal y finalmente la traducen al entorno de programación.
  </p>

</section>

  <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.6;">

  <h4 style="color: #00ffff; font-size: 18px;">5. ¿Qué es PSeInt y para qué se utiliza?</h4>
  <p>
    El programa <strong>PSeInt</strong> (acrónimo de <i>Pseudocode Interpreter</i>) es un entorno educativo diseñado para enseñar los fundamentos de la programación mediante el uso de pseudocódigo estructurado en idioma español. Su propósito principal es que los estudiantes desarrollen el pensamiento algorítmico sin enfrentarse todavía a la complejidad sintáctica de los lenguajes de programación formales.
  </p>
  <p>
    En palabras de Morán (2023), PSeInt constituye una herramienta idónea para los cursos de introducción a la programación, ya que “permite centrarse en la lógica algorítmica antes que en los aspectos técnicos del lenguaje”.
  </p>
  <p>
    Desde un punto de vista pedagógico, el uso de PSeInt se fundamenta en tres principios esenciales:
  </p>
  <ul>
    <li><strong>Aprendizaje progresivo:</strong> los estudiantes comienzan creando algoritmos simples y comprenden el flujo lógico antes de enfrentarse a un compilador real.</li>
    <li><strong>Ambiente accesible:</strong> la interfaz en español reduce la carga cognitiva y permite enfocarse en comprender estructuras de control y manejo de variables.</li>
    <li><strong>Retroalimentación inmediata:</strong> el entorno ofrece ejecución paso a paso, ayudando a identificar errores y analizar el comportamiento del algoritmo.</li>
  </ul>
  <p>Por ejemplo, un estudiante puede escribir el siguiente pseudocódigo:</p>

<p style="margin-top: 25px;">
        <img src="assets/img/pp3.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">

  <p>
    Al ejecutarlo, el programa imprimirá el mensaje <i>Hola, mundo!</i>, ejemplificando la relación entre las instrucciones escritas y la salida del sistema. De este modo, el aprendizaje de la programación se vuelve tangible desde el primer contacto con la herramienta.
  </p>

  <h4 style="color: #00ffff; font-size: 18px;">6. Instalación y configuración del entorno</h4>
  <p>
    La instalación de PSeInt es un proceso sencillo que busca familiarizar al estudiante con su entorno de trabajo. De acuerdo con el Manual de PSeInt (s. f.), los pasos principales son los siguientes:
  </p>
  <ul>
    <li>Descargar el instalador correspondiente al sistema operativo desde el sitio oficial del proyecto.</li>
    <li>Ejecutar el asistente de instalación y aceptar las opciones predeterminadas.</li>
    <li>Configurar el idioma, el tema visual y el directorio de trabajo.</li>
    <li>Verificar la correcta instalación mediante la ejecución de un algoritmo de prueba.</li>
  </ul>
  <p>Por ejemplo, se puede probar el siguiente código:</p>

  <p style="margin-top: 25px;">
        <img src="assets/img/pp4.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">

  <p>
    Si el mensaje se muestra correctamente en pantalla, el entorno está listo para ser utilizado.
  </p>
  <p>
    Asimismo, se proporciona un manual en formato PDF con las instrucciones detalladas de instalación paso a paso que incluye capturas de pantalla y recomendaciones de configuración inicial, además del siguiente recurso audiovisual de apoyo:
  </p>
  <p>
    <i>Instalación y uso de PSeInt – guía paso a paso.</i> (2025, octubre). [Video]. YouTube. 
    <a href="https://www.youtube.com/watch?v=GqkTm0_K6Kc" target="_blank" style="color: #00ffff;">https://www.youtube.com/watch?v=GqkTm0_K6Kc</a>
  </p>
  <p>
    Este video complementa el aprendizaje visual de los estudiantes y facilita la verificación práctica del proceso  "Controlar el uso de ; al final de sentencias secuenciales (OJO ESA OPCIÓN NO SE MARCA)".
  </p>

  <div style="margin-top: 15px;">
    <a href="https://docs.google.com/document/d/1z3NcIsgtF0tZzhx-0xDjMqVzjkMSXux902INN05Sx54/export?format=pdf"
    
       download="Manual_de_Instalacion_PSeInt.pdf"
       style="display: inline-block; background-color: #007bff; color: white; text-decoration: none; 
              font-weight: bold; padding: 10px 25px; border-radius: 8px; transition: 0.3s;">
       📥 Descargar Manual PDF
    </a>
  </div>

  <h4 style="color: #00ffff; font-size: 18px;">7. Interfaz de usuario y componentes principales</h4>
  <p>
    La interfaz de PSeInt está diseñada para ser intuitiva, clara y funcional, con el objetivo de que los principiantes comprendan fácilmente cada uno de sus componentes. Entre los elementos más importantes destacan:
  </p>
  <ul>
    <li><strong>Barra de menús y herramientas:</strong> contiene funciones como Archivo, Editar, Ejecutar, Diagrama y Ayuda, desde donde se crean y gestionan los algoritmos.</li>
    <li><strong>Área de edición:</strong> es el espacio donde el usuario escribe las instrucciones en pseudocódigo. Incluye resaltado de sintaxis y sangrías automáticas.</li>
    <li><strong>Consola de salida:</strong> muestra los resultados de la ejecución del algoritmo y posibles mensajes de error.</li>
    <li><strong>Panel de variables:</strong> permite observar los valores almacenados en cada variable durante la ejecución, ayudando al estudiante a comprender el flujo de datos.</li>
    <li><strong>Generador de diagramas de flujo:</strong> traduce automáticamente el pseudocódigo a un diagrama visual, reforzando el aprendizaje de las estructuras lógicas.</li>
  </ul>

  <p>Por ejemplo:</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo ErrorEjemplo
    Escribir x
FinAlgoritmo
  </pre>

  <p>
    El programa devolverá un error indicando que la variable <i>x</i> no está definida, evidenciando cómo PSeInt ayuda a identificar y corregir errores de manera inmediata.
    Como indica Menchón et al. (2025), el uso de entornos visuales y de retroalimentación directa como PSeInt incrementa la comprensión de la relación entre la estructura del algoritmo y su comportamiento lógico durante la ejecución.
  </p>

  <h4 style="color: #00ffff; font-size: 18px;">8. Ejecución, depuración y análisis de errores</h4>
  <p>
    El dominio de la ejecución y depuración de programas en PSeInt constituye una competencia esencial en el aprendizaje de la programación. Según Marcelo (2023), la depuración paso a paso fomenta la reflexión metacognitiva, pues el estudiante analiza la secuencia de operaciones y anticipa resultados lógicos.
  </p>
  <p>
    En PSeInt, la ejecución directa (tecla F9) interpreta el algoritmo y muestra los resultados en consola. Por ejemplo:
  </p>

<p style="margin-top: 25px;">
        <img src="assets/img/pp5.png" alt="Pensamiento computacional" style="width: 350px; display: block; margin: 15px auto; border-radius: 10px;">
        <p style="margin-top: 25px;">
  <p>
    Si el usuario ingresa <strong>a = 3</strong> y <strong>b = 5</strong>, el programa imprimirá <i>La suma es: 8</i>.
    La depuración paso a paso (tecla F8) permite seguir la ejecución línea por línea, observando cómo cambian los valores de las variables.
  </p>
  <p>
    Los errores más comunes se clasifican en tres tipos:
  </p>
  <ul>
    <li><strong>Errores de sintaxis:</strong> por ejemplo, omitir la palabra <i>FinAlgoritmo</i>.</li>
    <li><strong>Errores de lógica:</strong> como calcular incorrectamente un promedio.</li>
    <li><strong>Errores de ejecución:</strong> dividir entre cero o usar variables sin inicializar.</li>
  </ul>
  <p>
    El proceso de corrección es fundamental para consolidar el aprendizaje. De acuerdo con Tinedo-Rodríguez (2023), el uso de PSeInt fomenta la autorregulación y el aprendizaje autónomo, al permitir que los estudiantes localicen y reparen sus propios errores mediante retroalimentación inmediata.
  </p>

</section>





    
    `,
    ejemplos: `
    
   <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.6;">



  <p>El aprendizaje de la programación requiere no solo comprender la teoría de las estructuras y comandos, sino también practicar la ejecución, depuración y análisis de errores en situaciones reales. A través de ejemplos sencillos, el estudiante puede observar cómo se comportan los algoritmos, identificar los tipos de errores más comunes (de sintaxis, lógica o ejecución) y aplicar estrategias para resolverlos.</p>

  <p>A continuación, se presentan cinco ejemplos prácticos que integran el planteamiento del problema, el pseudocódigo correspondiente y la identificación de posibles errores con sus soluciones, utilizando el entorno educativo <strong>PSeInt</strong>.</p>

  <h3 style="color: #00ffff;">Ejemplo 1: Suma de dos números</h3>
  <p><strong>Objetivo:</strong> practicar lectura de datos y operaciones básicas.</p>

  <pre style="background-color: #111; color: #00ffff; padding: 12px; border-radius: 10px; font-family: monospace;">
Algoritmo SumaDosNumeros
    Definir a, b, suma Como Entero
    Escribir "Ingrese el primer número:"
    Leer a
    Escribir "Ingrese el segundo número:"
    Leer b
    suma ← a + b
    Escribir "La suma es: ", suma
FinAlgoritmo
  </pre>

  <p><strong>Error común:</strong> olvidar declarar las variables o escribir <code>=</code> en lugar de <code>←</code>.</p>

  <h3 style="color: #00ffff;">Ejemplo 2: Cálculo de promedio</h3>
  <p><strong>Objetivo:</strong> practicar el uso de variables y operaciones aritméticas.</p>

  <pre style="background-color: #111; color: #00ffff; padding: 12px; border-radius: 10px; font-family: monospace;">
Algoritmo CalcularPromedio
    Definir n1, n2, n3, promedio Como Real
    Escribir "Ingrese tres notas:"
    Leer n1, n2, n3
    promedio ← (n1 + n2 + n3) / 3
    Escribir "El promedio es: ", promedio
FinAlgoritmo
  </pre>

  <p><strong>Error común:</strong> dividir entre un número incorrecto o no usar paréntesis al calcular el promedio.</p>

  <h3 style="color: #00ffff;">Ejemplo 3: Determinar si un número es par o impar</h3>
  <p><strong>Objetivo:</strong> practicar condicionales.</p>

  <pre style="background-color: #111; color: #00ffff; padding: 12px; border-radius: 10px; font-family: monospace;">
Algoritmo ParOImpar
    Definir numero Como Entero
    Escribir "Ingrese un número:"
    Leer numero
    Si numero MOD 2 = 0 Entonces
        Escribir "El número es par"
    Sino
        Escribir "El número es impar"
    FinSi
FinAlgoritmo
  </pre>

  <p><strong>Error común:</strong> usar <code>=</code> en lugar de <code>MOD</code> o confundir operadores lógicos.</p>

  <h3 style="color: #00ffff;">Ejemplo 4: Contador con bucle Mientras</h3>
  <p><strong>Objetivo:</strong> aplicar estructuras repetitivas.</p>

  <pre style="background-color: #111; color: #00ffff; padding: 12px; border-radius: 10px; font-family: monospace;">
Algoritmo ContadorHastaCinco
    Definir i Como Entero
    i ← 1
    Mientras i <= 5 Hacer
        Escribir "Contador: ", i
        i ← i + 1
    FinMientras
FinAlgoritmo
  </pre>

  <p><strong>Error común:</strong> olvidar incrementar <code>i</code>, lo que produce un bucle infinito.</p>

  <h3 style="color: #cee3e3ff;">Ejemplo 5: Validar división entre cero</h3>
  <p><strong>Objetivo:</strong> prevenir errores de ejecución.</p>

  <pre style="background-color: #111; color: #cdefefff; padding: 12px; border-radius: 10px; font-family: monospace;">
Algoritmo DivisionSegura
    Definir a, b, resultado Como Real
    Escribir "Ingrese el dividendo:"
    Leer a
    Escribir "Ingrese el divisor:"
    Leer b
    Si b <> 0 Entonces
        resultado ← a / b
        Escribir "El resultado es: ", resultado
    Sino
        Escribir "Error: no se puede dividir entre cero."
    FinSi
FinAlgoritmo
  </pre>

  <p><strong>Error común:</strong> no comprobar el divisor antes de realizar la operación.</p>

</section>

    
    
    
    
    `,
    quiz_de_entrada: `



<section id="quiz_entrada_pseint" class="quiz-section" 
style="font-family:'Segoe UI', Tahoma, sans-serif; color:#fff; line-height:1.6; margin-top:30px;">

  <p><strong style="color:#22c1dc;"> Planteamiento:</strong> 
  Este cuestionario tiene como objetivo diagnosticar tus conocimientos previos sobre la sintaxis básica y el entorno de trabajo en 
  <strong>PSeInt</strong>. A través de preguntas introductorias, podrás identificar tu punto de partida antes de iniciar el minicurso.</p>

  <p>
    <strong style="color:#22c1dc;"> Condición de aprobación:</strong> Nota mínima 11.<br>
    <strong style="color:#22c1dc;"> Peso en la evaluación:</strong> No calificable, sirve como diagnóstico inicial.
  </p>

  <p><strong style="color:#22c1dc;">📝 Indicaciones:</strong></p>
  <ul style="margin:12px 0 18px 20px; line-height:1.7; text-align:left; color:#fff; font-family:'Segoe UI', Tahoma, sans-serif;">
    <li>Lee cada pregunta cuidadosamente antes de responder.</li>
    <li>Selecciona la alternativa que consideres correcta de acuerdo con tu conocimiento previo sobre PSeInt.</li>
    <li>Este Examen pesará un 25% de la nota final; Asimismo, para aprobrar este minicurso 1 deberas tener minimo un 11 de nota </li>
  </ul>

  <p><strong style="color:#22c1dc;"> Objetivo:</strong> 
  Evaluar tu comprensión inicial de los conceptos básicos de programación y del entorno PSeInt para orientar el aprendizaje del minicurso.</p>

  <div style="text-align:center; margin-top:25px;">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe5TWglKqqFwuEm7rVO4cYq9Kq1zAj8TNytYnVCWI9WlEvG9A/viewform?usp=dialog" 
       target="_blank" 
       style="background-color:#22c1dc; color:white; padding:12px 26px; border-radius:8px; text-decoration:none; font-weight:bold; 
              box-shadow:0 3px 6px rgba(0,0,0,0.15); transition:background-color 0.3s;">
       🚀 Iniciar Evaluación de Entrada
    </a>
  </div>

</section>

`
  },
  pseint2: {
    objetivo: `<p><strong>Objetivo</strong> </p>
     <p>

    ✔️ Identificar las variables y tipos de datos utilizados en PSeInt. <br>
    ✔️ Aplicar operadores aritméticos, relacionales y lógicos en algoritmos. <br>
    ✔️ Utilizar instrucciones de entrada y salida para interactuar con el usuario. <br>
     </p>
    
    
    
    
    `,
    teoria: `<p><strong>Teoría:</strong></p>
    
    
    <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.6;">

  <h4 style="color: #00ffff; font-size: 18px;">1. Variables: definición, declaración y ámbito en PSeInt</h4>
  <p>
    En programación, las variables son espacios de memoria donde se almacenan datos que pueden cambiar durante la ejecución de un programa. Según Pérez y Cedeño (2022), una variable “actúa como un contenedor identificado por un nombre, en el que se guarda un valor o referencia que puede modificarse en tiempo de ejecución”.
  </p>
  <p>
    En PSeInt, la declaración de una variable consiste en indicar su nombre y tipo de dato. Esto se hace generalmente al inicio del algoritmo, antes de ejecutar cualquier instrucción. Por ejemplo:
  </p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo EjemploVariables
    Definir edad, año_actual Como Entero
    Definir nombre Como Cadena

    Escribir "Ingrese su nombre:"
    Leer nombre
    Escribir "Ingrese su edad:"
    Leer edad

    año_actual <- 2025
    Escribir nombre, " tiene ", edad, " años en el año ", año_actual
FinAlgoritmo
  </pre>

  <p>
    En este ejemplo, las variables <i>edad</i>, <i>año_actual</i> y <i>nombre</i> se declaran al inicio y se utilizan dentro del cuerpo del algoritmo.
  </p>
  <p>
    El ámbito de una variable define el conjunto de instrucciones donde esta puede ser utilizada. En PSeInt, las variables declaradas dentro de un algoritmo solo existen mientras se ejecuta dicho algoritmo, y no pueden ser usadas fuera de él. Como indican Ramírez y Ortega (2023), la correcta gestión del ámbito es fundamental para evitar errores de sobreescritura o uso indebido de datos.
  </p>
  <p>Un ejemplo de error común por mal uso del ámbito sería:</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo ErrorAmbito
    Definir a Como Entero
    Si Verdadero Entonces
        Definir b Como Entero
        b <- 10
    FinSi
    Escribir b  // Error: b no existe fuera del bloque Si
FinAlgoritmo
  </pre>

  <p>
    PSeInt mostrará un mensaje de error, indicando que la variable <i>b</i> no está definida en ese contexto. Esto permite reforzar el aprendizaje sobre visibilidad y duración de las variables.
  </p>

  <h4 style="color: #00ffff; font-size: 18px;">2. Tipos de datos en PSeInt</h4>
  <p>
    Los tipos de datos definen la naturaleza de la información que una variable puede almacenar. En PSeInt, los tipos más comunes son: <strong>Entero</strong>, <strong>Real</strong>, <strong>Cadena</strong>, <strong>Lógico</strong> y <strong>Carácter</strong>.
  </p>
  <p>
    De acuerdo con Gómez y Herrera (2021), comprender los tipos de datos es esencial para evitar errores de tipo, optimizar la memoria y garantizar la coherencia lógica del programa.
  </p>
  <p>A continuación, se muestra un ejemplo de uso de distintos tipos de datos:</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo TiposDeDatos
    Definir nombre Como Cadena
    Definir edad Como Entero
    Definir altura Como Real
    Definir estudiante Como Logico
    Definir inicial Como Caracter

    nombre <- "Laura"
    edad <- 20
    altura <- 1.65
    estudiante <- Verdadero
    inicial <- 'L'

    Escribir "Nombre: ", nombre
    Escribir "Edad: ", edad
    Escribir "Altura: ", altura
    Escribir "¿Es estudiante?: ", estudiante
    Escribir "Inicial del nombre: ", inicial
FinAlgoritmo
  </pre>

  <p>
    Al ejecutar el código, se observará cómo cada variable almacena un tipo diferente de información.
  </p>
  <p>
    <strong>Nota:</strong> PSeInt convierte automáticamente los datos introducidos por el usuario según el tipo de variable declarado. Sin embargo, si se ingresa un valor incompatible (por ejemplo, texto en una variable entera), el sistema mostrará un error.
  </p>
  <p>
    Un ejemplo de error sería intentar asignar "Hola" a una variable Entera, lo cual produce un mensaje de incompatibilidad de tipo.
  </p>

  <h4 style="color: #00ffff; font-size: 18px;">3. Operadores aritméticos, relacionales y lógicos</h4>
  <p>
    Los operadores son símbolos que permiten realizar operaciones matemáticas, comparaciones o evaluaciones lógicas. En PSeInt se agrupan en tres categorías:
  </p>

  <p><strong>a) Operadores aritméticos</strong></p>
  <p>Sirven para realizar cálculos numéricos: suma (+), resta (-), multiplicación (*), división (/) y módulo (%).</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo OperadoresAritmeticos
    Definir a, b, suma, resto Como Entero
    a <- 15
    b <- 4
    suma <- a + b
    resto <- a % b
    Escribir "La suma es: ", suma
    Escribir "El resto de la división es: ", resto
FinAlgoritmo
  </pre>

  <p><strong>b) Operadores relacionales</strong></p>
  <p>Comparan valores y devuelven un resultado lógico (<i>Verdadero</i> o <i>Falso</i>): igual (=), distinto (<>), mayor (>), menor (<), mayor o igual (>=), menor o igual (<=).</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo OperadoresRelacionales
    Definir x, y Como Entero
    x <- 10
    y <- 20
    Escribir "¿x es menor que y?: ", x < y
    Escribir "¿x es igual que y?: ", x = y
FinAlgoritmo
  </pre>

  <p><strong>c) Operadores lógicos</strong></p>
  <p>Permiten combinar expresiones relacionales mediante los operadores <strong>Y</strong>, <strong>O</strong> y <strong>NO</strong>.</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo OperadoresLogicos
    Definir edad Como Entero
    Leer edad
    Si edad >= 18 Y edad <= 65 Entonces
        Escribir "Edad válida para trabajar"
    SiNo
        Escribir "Edad fuera del rango laboral"
    FinSi
FinAlgoritmo
  </pre>

  <p>
    Según Villanueva y Contreras (2024), el uso correcto de operadores lógicos en ejercicios de decisión incrementa la capacidad del estudiante para modelar situaciones reales mediante condiciones computacionales.
  </p>

  <h4 style="color: #00ffff; font-size: 18px;">4. Entrada y salida de datos</h4>
  <p>
    La entrada de datos permite recibir información del usuario, mientras que la salida muestra resultados en pantalla. En PSeInt, se emplean las instrucciones <strong>Leer</strong> y <strong>Escribir</strong> para estos fines.
  </p>
  <p>
    Castro (2022) explica que la interacción con el usuario mediante estas operaciones es fundamental, ya que consolida el ciclo clásico de programación: entrada – proceso – salida (<i>input – process – output</i>).
  </p>

  <p>Ejemplo simple:</p>
  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo EntradaSalida
    Definir nombre Como Cadena
    Definir edad Como Entero

    Escribir "Ingrese su nombre:"
    Leer nombre
    Escribir "Ingrese su edad:"
    Leer edad

    Escribir "Hola ", nombre, ", tienes ", edad, " años."
FinAlgoritmo
  </pre>

  <p>Ejemplo con procesamiento intermedio:</p>
  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo CalculoSalario
    Definir horas, pagoHora, total Como Real
    Escribir "Ingrese horas trabajadas:"
    Leer horas
    Escribir "Ingrese pago por hora:"
    Leer pagoHora
    total <- horas * pagoHora
    Escribir "El salario total es: ", total
FinAlgoritmo
  </pre>

  <p>También pueden usarse lecturas múltiples para capturar varios datos en una sola línea:</p>
  <pre style="background-color: #1a1a1a; padding: 10px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace;">Leer nombre, edad, ciudad</pre>

  <p>
    En cuanto a la salida de datos, PSeInt permite concatenar texto y variables en una misma línea, lo que facilita la presentación de resultados claros y personalizados.
  </p>
  <pre style="background-color: #1a1a1a; padding: 10px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace;">Escribir "El resultado final es: ", resultado, " unidades."</pre>

  <p>
    Como afirman Hernández y Paredes (2023), la correcta estructuración de la entrada y salida “fortalece la comprensión del flujo de datos y mejora la interpretación del comportamiento lógico del algoritmo”.
  </p>

</section>

    
    
    
    `,
    ejemplos: `

<section style="font-family: Arial, sans-serif; color:#ffffff; line-height:1.8; padding:50px; text-align:left; max-width:1400px; margin:auto;">

  <h2 style="font-size:28px; text-align:center; margin-bottom:35px;">
    Ejemplos de PSeInt
  </h2>

  <!-- EJEMPLO 1 -->
  <h3 style="font-size:22px; margin-top:35px;">
    Ejemplo 1
  </h3>
  <p><strong>Enunciado:</strong> Pedir al usuario su nombre y saludarlo.</p>
  <pre style="padding:25px; border-radius:10px; font-size:16px; font-family:'Consolas','Courier New',monospace; color:#ffffff; overflow-x:auto; width:100%; white-space: pre;">
SubProceso Saludar
    Definir nombre Como Cadena
    Escribir "Ingrese su nombre: "
    Leer nombre
    Escribir "¡Hola ", nombre, ", bienvenido al curso de PSeInt!"
FinSubProceso
  </pre>

  <!-- EJEMPLO 2 -->
  <h3 style="font-size:22px; margin-top:35px;">
    Ejemplo 2
  </h3>
  <p><strong>Enunciado:</strong> Leer un número entero y determinar si es mayor, igual o menor que 10.</p>
  <pre style="padding:25px; border-radius:10px; font-size:16px; font-family:'Consolas','Courier New',monospace; color:#ffffff; overflow-x:auto; width:100%; white-space: pre;">
Definir n Como Entero
Escribir "Ingrese un número entero: "
Leer n

Si n > 10 Entonces
    Escribir "El número es mayor que 10."
Sino
    Si n = 10 Entonces
        Escribir "El número es igual a 10."
    Sino
        Escribir "El número es menor que 10."
    FinSi
FinSi
  </pre>

  <!-- EJEMPLO 3 -->
  <h3 style="font-size:22px; margin-top:35px;">
    Ejemplo 3
  </h3>
  <p><strong>Enunciado:</strong> Calcular la suma de los primeros n números positivos.</p>
  <pre style="padding:25px; border-radius:10px; font-size:16px; font-family:'Consolas','Courier New',monospace; color:#ffffff; overflow-x:auto; width:100%; white-space: pre;">
Definir n, suma, i Como Entero
suma <- 0

Escribir "¿Cuántos números sumaremos? "
Leer n

Para i <- 1 Hasta n Con Paso 1 Hacer
    suma <- suma + i
FinPara

Escribir "La suma de los primeros ", n, " números es: ", suma
  </pre>

  <!-- EJEMPLO 4 -->
  <h3 style="font-size:22px; margin-top:35px;">
    Ejemplo 4
  </h3>
  <p><strong>Enunciado:</strong> Leer 5 calificaciones y mostrar promedio, mayor y menor.</p>
  <pre style="padding:25px; border-radius:10px; font-size:16px; font-family:'Consolas','Courier New',monospace; color:#ffffff; overflow-x:auto; width:100%; white-space: pre;">
Definir suma, mayor, menor, nota, i Como Real
suma <- 0
mayor <- -1
menor <- 100

Para i <- 1 Hasta 5 Con Paso 1 Hacer
    Escribir "Ingrese la nota ", i, " (0-20): "
    Leer nota
    suma <- suma + nota

    Si nota > mayor Entonces
        mayor <- nota
    FinSi

    Si nota < menor Entonces
        menor <- nota
    FinSi
FinPara

Escribir "Promedio: ", suma/5
Escribir "Mayor nota: ", mayor
Escribir "Menor nota: ", menor
  </pre>

  <!-- EJEMPLO 5 -->
  <h3 style="font-size:22px; margin-top:35px;">
    Ejemplo 5
  </h3>
  <p><strong>Enunciado:</strong> Leer números hasta que se ingrese 0; contar positivos, su suma y promedio.</p>
  <pre style="padding:25px; border-radius:10px; font-size:16px; font-family:'Consolas','Courier New',monospace; color:#ffffff; overflow-x:auto; width:100%; white-space: pre;">
Definir n, contador Como Entero
Definir suma Como Real
contador <- 0
suma <- 0

Mientras Verdadero Hacer
    Escribir "Ingrese un número (0 para terminar): "
    Leer n
    Si n = 0 Entonces
        Salir
    FinSi
    Si n > 0 Entonces
        contador <- contador + 1
        suma <- suma + n
    FinSi
FinMientras

Si contador > 0 Entonces
    Escribir "Cantidad de positivos: ", contador
    Escribir "Suma de positivos: ", suma
    Escribir "Promedio de positivos: ", suma/contador
Sino
    Escribir "No se ingresaron números positivos."
FinSi
  </pre>

</section>


    
    `
  },
  pseint3: {
    objetivo: `<p><strong>Objetivo:</strong></p>
 <p>   
✔️ Comprender el uso de las estructuras condicionales simples y compuestas en PSeInt.<br>
✔️ Aplicar condicionales anidadas para resolver problemas con múltiples decisiones.<br>
✔️ Emplear operadores lógicos (Y, O, NO) para combinar condiciones en algoritmos.<br>
    
   </p> 
    
    `,
    teoria: `<p><strong>Teoría:</strong></p>
    
    <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.6;">

  <h4 style="color: #00ffff; font-size: 18px;">1. Sentencias condicionales simples y compuestas (Si…Entonces…Sino)</h4>

  <p>
    En la programación estructurada, las estructuras condicionales constituyen el mecanismo que permite a un algoritmo tomar decisiones según el cumplimiento o no de una determinada condición lógica.
    De acuerdo con López y Torres (2023), la capacidad de decisión dentro de un algoritmo convierte la secuencia de instrucciones en un proceso flexible, capaz de adaptarse a distintas circunstancias del entorno de ejecución.
  </p>

  <p>
    En PSeInt, el control condicional se implementa mediante la palabra reservada <strong>Si</strong>, que evalúa una expresión booleana (verdadera o falsa). Si el resultado es verdadero, el algoritmo ejecuta el bloque de instrucciones dentro del condicional.
  </p>

  <p>Sintaxis de una estructura condicional simple:</p>
  <pre style="background-color: #1a1a1a; padding: 10px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace;">
Si &lt;condición&gt; Entonces
    &lt;instrucciones&gt;
FinSi
  </pre>

  <p>Ejemplo:</p>
  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace;">
Algoritmo VerificarEdad
    Escribir "Ingrese su edad: "
    Leer edad
    Si edad >= 18 Entonces
        Escribir "Eres mayor de edad."
    FinSi
FinAlgoritmo
  </pre>

  <p>
    En este algoritmo, la condición <code>edad >= 18</code> determina si se ejecuta el mensaje. Si no se cumple, el programa simplemente continúa sin ejecutar el bloque.
  </p>

  <p>
    Cuando se necesita realizar una acción alternativa, se usa la estructura compuesta:
  </p>

  <pre style="background-color: #1a1a1a; padding: 10px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace;">
Si &lt;condición&gt; Entonces
    &lt;instrucciones si verdadero&gt;
Sino
    &lt;instrucciones si falso&gt;
FinSi
  </pre>

  <p>Ejemplo:</p>
  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace;">
Algoritmo ParOImpar
    Escribir "Ingrese un número: "
    Leer n
    Si n MOD 2 = 0 Entonces
        Escribir "El número es par."
    Sino
        Escribir "El número es impar."
    FinSi
FinAlgoritmo
  </pre>

  <p>
    Si el número ingresado es divisible por 2, se muestra que es par; de lo contrario, impar. Este tipo de estructura ilustra la bifurcación lógica, una base del pensamiento computacional.
  </p>

  <p>
    En el ámbito educativo, PSeInt facilita visualizar este flujo condicional de manera estructurada, permitiendo a los estudiantes comprender cómo la evaluación de condiciones afecta la ejecución del programa.
  </p>

  <h4 style="color: #00ffff; font-size: 18px;">2. Condicionales anidadas</h4>

  <p>
    Las condicionales anidadas son estructuras que contienen una o más decisiones dentro de otra. Esto permite evaluar múltiples condiciones jerárquicas en un mismo algoritmo.
  </p>

  <p>Sintaxis general:</p>
  <pre style="background-color: #1a1a1a; padding: 10px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace;">
Si &lt;condición 1&gt; Entonces
    &lt;instrucciones 1&gt;
Sino
    Si &lt;condición 2&gt; Entonces
        &lt;instrucciones 2&gt;
    Sino
        &lt;instrucciones 3&gt;
    FinSi
FinSi
  </pre>

  <p>Ejemplo básico:</p>
  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace;">
Algoritmo ClasificarNota
    Escribir "Ingrese la nota (0-20): "
    Leer nota
    Si nota >= 18 Entonces
        Escribir "Excelente"
    Sino
        Si nota >= 14 Entonces
            Escribir "Aprobado"
        Sino
            Escribir "Desaprobado"
        FinSi
    FinSi
FinAlgoritmo
  </pre>

  <p>
    Aquí se clasifican las notas en tres categorías: excelente, aprobado y desaprobado. Cada decisión conduce a otra según el resultado previo.
  </p>

  <p>Ejemplo con jerarquía más profunda:</p>
  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace;">
Algoritmo CategoriaEdad
    Escribir "Ingrese su edad: "
    Leer edad
    Si edad < 12 Entonces
        Escribir "Niño"
    Sino
        Si edad < 18 Entonces
            Escribir "Adolescente"
        Sino
            Si edad < 60 Entonces
                Escribir "Adulto"
            Sino
                Escribir "Adulto mayor"
            FinSi
        FinSi
    FinSi
FinAlgoritmo
  </pre>

  <p>
    Este tipo de estructura ayuda a representar decisiones secuenciales y jerárquicas. Menchón et al. (2025) recomiendan enseñar primero las condicionales simples antes de abordar las anidadas, para mejorar la comprensión del flujo lógico.
  </p>

  <h4 style="color: #00ffff; font-size: 18px;">3. Uso de operadores lógicos en decisiones</h4>

  <p>
    Las expresiones condicionales pueden combinarse mediante operadores lógicos para crear reglas más complejas. En PSeInt, los operadores más comunes son:
  </p>

  <table style="width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 16px; color: white;">
  <thead>
    <tr style="background-color: #0a0a0a; color: #00ffff; text-align: left;">
      <th style="border: 1px solid #00ffff; padding: 8px;">Operador</th>
      <th style="border: 1px solid #00ffff; padding: 8px;">Significado</th>
      <th style="border: 1px solid #00ffff; padding: 8px;">Ejemplo</th>
      <th style="border: 1px solid #00ffff; padding: 8px;">Resultado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #00ffff; padding: 8px;">Y (AND)</td>
      <td style="border: 1px solid #00ffff; padding: 8px;">Ambas condiciones deben ser verdaderas</td>
      <td style="border: 1px solid #00ffff; padding: 8px;">(edad >= 18 Y edad <= 65)</td>
      <td style="border: 1px solid #00ffff; padding: 8px;">Verdadero solo si se cumplen ambas</td>
    </tr>
    <tr>
      <td style="border: 1px solid #00ffff; padding: 8px;">O (OR)</td>
      <td style="border: 1px solid #00ffff; padding: 8px;">Al menos una condición es verdadera</td>
      <td style="border: 1px solid #00ffff; padding: 8px;">(nota &lt; 10 O nota &gt; 20)</td>
      <td style="border: 1px solid #00ffff; padding: 8px;">Verdadero si cualquiera se cumple</td>
    </tr>
    <tr>
      <td style="border: 1px solid #00ffff; padding: 8px;">NO (NOT)</td>
      <td style="border: 1px solid #00ffff; padding: 8px;">Niega o invierte el valor de una condición</td>
      <td style="border: 1px solid #00ffff; padding: 8px;">NO (activo = Verdadero)</td>
      <td style="border: 1px solid #00ffff; padding: 8px;">Verdadero si la condición es falsa</td>
    </tr>
  </tbody>
</table>


  <p>Ejemplo con el operador Y:</p>
  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace;">
Algoritmo AccesoSistema
    Escribir "Ingrese usuario: "
    Leer usuario
    Escribir "Ingrese contraseña: "
    Leer clave
    Si usuario = "admin" Y clave = "1234" Entonces
        Escribir "Acceso concedido."
    Sino
        Escribir "Acceso denegado."
    FinSi
FinAlgoritmo
  </pre>

  <p>Ejemplo con el operador O:</p>
  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace;">
Algoritmo DescuentoCliente
    Escribir "Ingrese tipo de cliente (VIP o Regular): "
    Leer tipo
    Si tipo = "VIP" O tipo = "Preferente" Entonces
        Escribir "Aplica descuento especial."
    Sino
        Escribir "Sin descuento adicional."
    FinSi
FinAlgoritmo
  </pre>

  <p>Ejemplo con el operador NO:</p>
  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace;">
Algoritmo VerificarEdad
    Leer edad
    Si NO (edad >= 18) Entonces
        Escribir "Acceso restringido a menores de edad."
    Sino
        Escribir "Acceso permitido."
    FinSi
FinAlgoritmo
  </pre>

  <p>
    Estos operadores son esenciales para el pensamiento lógico y el razonamiento computacional. Permiten combinar condiciones y construir sistemas más realistas y versátiles.
  </p>


  <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 18px; line-height: 1.6;">

  <h3 style="color: #00ffff; font-size: 18px;">🎥 Videos educativos</h3>

  <p>
    <strong>Charly Cimino.</strong> (2023, abril 13). 
    <i>SI-SINO (IF-ELSE) en PSeInt ⌨️</i> [Video]. YouTube. 
    <a href="https://www.youtube.com/watch?v=Kctup1Ynv3Y" target="_blank" style="color: #00ffff; text-decoration: none;">
      https://www.youtube.com/watch?v=Kctup1Ynv3Y
    </a>
  </p>

  <p>
    <strong>Charly Cimino.</strong> (2023, mayo 11). 
    <i>SEGÚN (SWITCH) en PSeInt ⌨️ Condicional múltiple</i> [Video]. YouTube. 
    <a href="https://www.youtube.com/watch?v=tluevpciHfo" target="_blank" style="color: #00ffff; text-decoration: none;">
      https://www.youtube.com/watch?v=tluevpciHfo
    </a>
  </p>

  <p>
    <strong>Coders Free.</strong> (2023, septiembre 8). 
    <i>Condicionales en PSeInt (Si Entonces | Sino) – Curso PSeInt desde cero</i> [Video]. YouTube. 
    <a href="https://www.youtube.com/watch?v=l6YY_F3FpJY" target="_blank" style="color: #00ffff; text-decoration: none;">
      https://www.youtube.com/watch?v=l6YY_F3FpJY
    </a>
  </p>

  <h3 style="color: #00ffff; font-size: 18px; margin-top: 20px;">📚 Guías interactivas y materiales en línea</h3>

  <p>
    <strong>STEAM Academy.</strong> (2024). 
    <i>PSeInt: Condicionales.</i> 
    <a href="https://www.steamacademy.com.co/post/pseint-condicionales" target="_blank" style="color: #00ffff; text-decoration: none;">
      https://www.steamacademy.com.co/post/pseint-condicionales
    </a>
  </p>

  <p>
    <strong>Coders Free.</strong> (2023). 
    <i>Dominando las estructuras condicionales en PSeInt: Si Entonces, Sino y Sino Si.</i> 
    <a href="https://codersfree.com/posts/condicionales-en-pseint" target="_blank" style="color: #00ffff; text-decoration: none;">
      https://codersfree.com/posts/condicionales-en-pseint
    </a>
  </p>

</section>
  
    
    
    
    `,
    ejemplos: `<section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 15px; line-height: 1.6;">

  <h2 style="color: #00ffff; font-size: 18px;">🧩 Ejercicios prácticos</h2>

  <p>Las estructuras condicionales permiten que un algoritmo tome decisiones en función del cumplimiento de una condición lógica. A través de las sentencias <strong>Si...Entonces...Sino</strong>, los programas pueden responder de forma diferente según los datos ingresados o los resultados obtenidos. Los siguientes ejercicios desarrollan progresivamente el uso de condicionales simples, compuestas y anidadas, así como el empleo de operadores lógicos en la toma de decisiones.</p>

  <h3 style="color: #b6d5d5ff; font-size: 16px;">Ejercicio 1: Verificar mayoría de edad (Nivel básico)</h3>
  <p><strong>Planteamiento del problema:</strong> Crear un programa que solicite la edad del usuario y determine si es mayor o menor de edad.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo VerificarEdad
    Definir edad Como Entero
    Escribir "Ingrese su edad:"
    Leer edad
    Si edad >= 18 Entonces
        Escribir "Eres mayor de edad."
    Sino
        Escribir "Eres menor de edad."
    FinSi
FinAlgoritmo
  </pre>
  <p><strong>Conceptos aplicados:</strong> condicional simple, operador relacional.</p>

  <h3 style="color: #b6d5d5ff; font-size: 16px;">Ejercicio 2: Determinar si un número es par o impar (Nivel básico-intermedio)</h3>
  <p><strong>Planteamiento del problema:</strong> Diseñar un algoritmo que lea un número entero y determine si es par o impar.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo ParOImpar
    Definir n Como Entero
    Escribir "Ingrese un número:"
    Leer n
    Si n MOD 2 = 0 Entonces
        Escribir "El número es par."
    Sino
        Escribir "El número es impar."
    FinSi
FinAlgoritmo
  </pre>
  <p><strong>Conceptos aplicados:</strong> operador aritmético (MOD), condicional compuesta.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 3: Clasificación de notas (Nivel intermedio)</h3>
  <p><strong>Planteamiento del problema:</strong> Realizar un programa que lea una nota (0–20) y muestre si el estudiante está Desaprobado, Aprobado o Excelente.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo ClasificarNota
    Definir nota Como Real
    Escribir "Ingrese la nota (0-20):"
    Leer nota
    Si nota >= 18 Entonces
        Escribir "Excelente"
    Sino
        Si nota >= 11 Entonces
            Escribir "Aprobado"
        Sino
            Escribir "Desaprobado"
        FinSi
    FinSi
FinAlgoritmo
  </pre>
  <p><strong>Conceptos aplicados:</strong> condicionales anidadas, operadores relacionales.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 4: Descuento por tipo de cliente (Nivel intermedio)</h3>
  <p><strong>Planteamiento del problema:</strong> Elaborar un algoritmo que solicite el tipo de cliente (VIP, Preferente o Regular) y muestre si tiene o no descuento especial.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo DescuentoCliente
    Definir tipo Como Cadena
    Escribir "Ingrese tipo de cliente (VIP, Preferente o Regular):"
    Leer tipo
    Si tipo = "VIP" O tipo = "Preferente" Entonces
        Escribir "Aplica descuento especial."
    Sino
        Escribir "Sin descuento adicional."
    FinSi
FinAlgoritmo
  </pre>
  <p><strong>Conceptos aplicados:</strong> operador lógico O, condicional compuesta.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 5: Validar acceso al sistema (Nivel intermedio-avanzado)</h3>
  <p><strong>Planteamiento del problema:</strong> Crear un algoritmo que solicite un nombre de usuario y contraseña. Si el usuario es “admin” y la clave “1234”, debe mostrar “Acceso concedido”; de lo contrario, “Acceso denegado”.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo AccesoSistema
    Definir usuario, clave Como Cadena
    Escribir "Ingrese usuario:"
    Leer usuario
    Escribir "Ingrese contraseña:"
    Leer clave
    Si usuario = "admin" Y clave = "1234" Entonces
        Escribir "Acceso concedido."
    Sino
        Escribir "Acceso denegado."
    FinSi
FinAlgoritmo
  </pre>
  <p><strong>Conceptos aplicados:</strong> operadores lógicos Y, condicional compuesta.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 6: Clasificación por edad (Nivel avanzado)</h3>
  <p><strong>Planteamiento del problema:</strong> Diseñar un programa que clasifique a una persona según su edad en: Niño (0–11), Adolescente (12–17), Adulto (18–59) o Adulto mayor (60 o más).</p>

  <pre style="background-color: #111; color: #cce4e4ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo CategoriaEdad
    Definir edad Como Entero
    Escribir "Ingrese su edad:"
    Leer edad
    Si edad < 12 Entonces
        Escribir "Niño"
    Sino
        Si edad < 18 Entonces
            Escribir "Adolescente"
        Sino
            Si edad < 60 Entonces
                Escribir "Adulto"
            Sino
                Escribir "Adulto mayor"
            FinSi
        FinSi
    FinSi
FinAlgoritmo
  </pre>
  <p><strong>Conceptos aplicados:</strong> condicionales anidadas, jerarquía de decisiones, operadores relacionales.</p>

</section>
`,
 quiz_intermedio: `
 
 <section id="quiz_intermedio_pseint" class="quiz-section" 
style="font-family:'Segoe UI', Tahoma, sans-serif; color:#fff; line-height:1.6; margin-top:30px; text-align:left;">

  <p><strong style="color:#22c1dc;">Quiz Intermedio:</strong></p>

  <p><strong style="color:#22c1dc;"> Planteamiento:</strong> 
  Este cuestionario tiene como objetivo reforzar tus conocimientos sobre el uso de estructuras condicionales y el control de flujo en 
  <strong>PSeInt</strong>. A través de ejercicios prácticos, podrás comprobar tu dominio en la toma de decisiones dentro de los algoritmos.</p>

  <p>
    <strong style="color:#22c1dc;"> Condición de aprobación:</strong> Nota mínima 11.<br>
    <strong style="color:#22c1dc;"> Peso en la evaluación:</strong> 25% de la nota final.
  </p>

  <p><strong style="color:#22c1dc;">📝 Indicaciones:</strong></p>
  <ul style="margin:12px 0 18px 20px; line-height:1.7; color:#fff;">
    <li>Lee atentamente cada pregunta antes de responder.</li>
    <li>Aplica correctamente las estructuras condicionales según los ejemplos vistos.</li>
    <li>Selecciona la opción correcta o desarrolla la respuesta indicada.</li>
    <li>Revisa tus respuestas antes de enviar el formulario.</li>
  </ul>

  <p><strong style="color:#22c1dc;"> Objetivo:</strong> 
  Evaluar tu capacidad para analizar y resolver problemas aplicando condiciones simples y compuestas en el entorno de <strong>PSeInt</strong>.</p>

  <div style="text-align:center; margin-top:25px;">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeOEbKwkz5ur8Lc7h1UKuHH62h25KEl8s-64V5T-bZucI-h1A/viewform?usp=dialog" 
       target="_blank" 
       style="display:inline-block; background-color:#22c1dc; color:white; padding:12px 26px; border-radius:8px; text-decoration:none; font-weight:bold; 
              box-shadow:0 3px 6px rgba(0,0,0,0.15); transition:background-color 0.3s;">
       📋 Iniciar Quiz Intermedio
    </a>
  </div>

</section>
 
 
 
 
 
 
 
 
 
 
 `
  },
  pseint4: {
    objetivo: `<p><strong>Objetivo:</strong></p>
    
     <p>   
✔️ Comprender el uso de bucles en PSeInt.<br>
✔️ Aplicar estructuras repetitivas en algoritmos.<br>
✔️ Identificar y corregir errores en iteraciones.<br>
    
   </p> 
    
    
    `,
    teoria: `<p><strong>Teoría:</strong></p>
    
    <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.6;">

  <h3 style="color: #00ffff; font-size: 18px;">1. ¿Qué son las Estructuras Repetitivas?</h3>

  <p>
    Las estructuras repetitivas, también denominadas <strong>bucles</strong> o <strong>iteraciones</strong>, constituyen uno de los componentes fundamentales de la programación estructurada, junto con las estructuras secuenciales y las estructuras condicionales. Su propósito es permitir que un conjunto de instrucciones se ejecute varias veces de manera controlada, lo que resulta indispensable para resolver problemas que implican procesos cíclicos o tareas reiterativas.
  </p>

  <p>
    En esencia, un bucle le indica al computador que repita una acción o secuencia de acciones mientras se cumpla una condición (controlada por una expresión lógica) o hasta alcanzar un número predefinido de repeticiones (controlado por un contador). Gracias a estas estructuras, los algoritmos pueden procesar grandes volúmenes de datos o realizar cálculos complejos sin necesidad de escribir el mismo bloque de código varias veces.
  </p>

  <p>
    Desde el punto de vista lógico, un bucle está compuesto por cuatro elementos esenciales:
  </p>
  <ul>
    <li><strong>Inicialización:</strong> punto de partida donde se establecen las variables necesarias para controlar el ciclo.</li>
    <li><strong>Condición de continuidad:</strong> expresión booleana que determina si el ciclo debe continuar o detenerse.</li>
    <li><strong>Cuerpo del bucle:</strong> conjunto de instrucciones que se repite en cada iteración.</li>
    <li><strong>Actualización:</strong> modificación de las variables de control para avanzar hacia el final del bucle y evitar repeticiones infinitas.</li>
  </ul>

  <p>
    Por ejemplo, en un proceso cotidiano como contar los pasos al subir una escalera, el cerebro ejecuta una estructura repetitiva: 
    <i>“Mientras no llegues al último escalón, da un paso más”</i>. En programación, esta misma lógica se traduce en un bucle que repite una acción hasta cumplir una condición final.
  </p>

  <h3 style="color: #00ffff; font-size: 18px;">2. Importancia en la programación estructurada</h3>

  <p>
    Las estructuras repetitivas son indispensables para la creación de algoritmos eficientes, modulares y escalables. Gracias a ellas, se puede:
  </p>

  <ul>
    <li>Automatizar tareas repetitivas, como imprimir una lista de datos o realizar cálculos sobre conjuntos extensos.</li>
    <li>Ahorrar código, ya que una sola estructura repetitiva puede reemplazar decenas o incluso cientos de líneas redundantes.</li>
    <li>Simplificar el mantenimiento y la comprensión del programa, al encapsular tareas repetitivas bajo una lógica clara y controlada.</li>
    <li>Aumentar la eficiencia algorítmica, permitiendo ejecutar operaciones de búsqueda, conteo o filtrado de manera sistemática.</li>
  </ul>

  <p>
    Además, el uso correcto de los bucles prepara al estudiante para comprender conceptos más avanzados, como la recursividad, los algoritmos iterativos, las estructuras de datos dinámicas (listas, colas, pilas) y la complejidad computacional.
  </p>

  <h3 style="color: #00ffff; font-size: 18px;">3. Estructuras repetitivas desde una perspectiva pedagógica y cognitiva</h3>

  <p>
    Desde la enseñanza del pensamiento computacional, las estructuras repetitivas representan un punto crítico en el aprendizaje, ya que su comprensión requiere un razonamiento abstracto más avanzado que el de las estructuras secuenciales o condicionales. No se trata solo de repetir instrucciones, sino de anticipar el comportamiento del algoritmo en el tiempo, comprendiendo cómo cambian las variables en cada iteración.
  </p>

  <p>Por ello, enseñar bucles implica desarrollar en el estudiante tres competencias intelectuales interrelacionadas:</p>

  <ul>
    <li><strong>Formulación de la condición de parada:</strong> el estudiante debe comprender cuándo y por qué el bucle debe detenerse, evitando errores como los bucles infinitos o las terminaciones prematuras.</li>
    <li><strong>Mantenimiento de invariantes y acumuladores:</strong> comprender la importancia de propiedades que permanecen constantes en cada iteración, y cómo variables como sumas o contadores acumulan resultados parciales.</li>
    <li><strong>Prevención de errores de control (“off–by–one”):</strong> errores que ocurren cuando la condición del bucle se formula incorrectamente y el ciclo se ejecuta una vez más o una vez menos de lo esperado.</li>
  </ul>

  <h3 style="color: #00ffff; font-size: 18px;">4. Dimensión conceptual del aprendizaje de bucles</h3>

  <p>
    A nivel cognitivo, el aprendizaje de las estructuras repetitivas supone internalizar la idea de iteración controlada. Esto significa que el estudiante debe imaginar cómo el algoritmo “viaja en el tiempo”, ejecutando los mismos pasos una y otra vez hasta que algo cambie.
  </p>

  <p>Por ello, se recomienda que los docentes:</p>

  <ul>
    <li>Representen gráficamente el flujo del bucle mediante diagramas de flujo o esquemas de iteración.</li>
    <li>Fomenten la simulación manual, pidiendo a los alumnos que ejecuten en papel las primeras iteraciones.</li>
    <li>Utilicen ejemplos cotidianos, como “mientras no suene el despertador, sigue durmiendo”.</li>
    <li>Enseñen el uso de herramientas visuales como la ejecución paso a paso en PSeInt.</li>
  </ul>

  <p>
    Este enfoque promueve un aprendizaje activo, en el cual el estudiante no solo memoriza la sintaxis, sino que comprende el funcionamiento interno del flujo repetitivo, fortaleciendo su pensamiento lógico y analítico.
  </p>

  <h3 style="color: #00ffff; font-size: 18px;">5. Aplicaciones prácticas</h3>

  <p>
    El dominio de las estructuras repetitivas permite modelar procesos reales, tales como:
  </p>

  <ul>
    <li>Calcular el promedio de calificaciones de un grupo grande de estudiantes.</li>
    <li>Recorrer una lista de productos en un inventario.</li>
    <li>Realizar búsquedas y conteos en arreglos o bases de datos.</li>
    <li>Simular fenómenos físicos o financieros con múltiples iteraciones.</li>
    <li>Automatizar tareas repetitivas en sistemas administrativos o científicos.</li>
  </ul>

  <p>
    En la práctica, casi cualquier programa informático contiene bucles, desde la actualización constante de una interfaz hasta la iteración de un algoritmo de aprendizaje automático.
  </p>

  <p>
    Así, los bucles no solo son una herramienta técnica, sino una manifestación del pensamiento repetitivo y sistemático, base de toda lógica computacional. Comprenderlos a fondo implica dominar el arte de controlar la repetición sin perder la coherencia del proceso, una habilidad esencial para cualquier programador o científico de datos.
  </p>

</section>
<section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.6;">

  <h3 style="color: #00ffff; font-size: 18px;">6. Concepto de bucle y su función en los algoritmos</h3>

  <h4 style="color: #00ffff; font-size: 17px;">Definición formal y propósito</h4>

  <p>
    Una <strong>estructura repetitiva</strong> o <strong>bucle</strong> es un bloque de instrucciones diseñado para ejecutarse repetidamente mientras se cumpla una determinada condición lógica o hasta que un contador alcance un valor prefijado. Formalmente, un bucle puede definirse como un mecanismo compuesto por cuatro elementos esenciales:
  </p>

  <table style="width: 100%; border-collapse: collapse; background-color: #1f1f1f; margin-top: 10px; margin-bottom: 15px;">
    <thead>
      <tr style="background-color: #2a2a2a;">
        <th style="padding: 8px; border: 1px solid #333;">Elemento</th>
        <th style="padding: 8px; border: 1px solid #333;">Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Inicialización</td>
        <td style="padding: 8px; border: 1px solid #333;">Establecimiento del estado inicial del bucle (variables de control, contadores, banderas).</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Condición de continuidad</td>
        <td style="padding: 8px; border: 1px solid #333;">Expresión booleana que determina si debe ejecutarse una nueva iteración del cuerpo del bucle.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Cuerpo del bucle</td>
        <td style="padding: 8px; border: 1px solid #333;">Conjunto de instrucciones que se repiten en cada iteración.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Actualización</td>
        <td style="padding: 8px; border: 1px solid #333;">Modificación de las variables de control (como incrementar un contador o cambiar una bandera) que conduce finalmente al cumplimiento de la condición de paro.</td>
      </tr>
    </tbody>
  </table>

  <p>
    Los bucles permiten:
  </p>
  <ul>
    <li>Repetir operaciones sobre colecciones (listas, vectores, arreglos).</li>
    <li>Realizar cálculos de acumulación, como sumas, máximos, mínimos o conteos.</li>
    <li>Implementar algoritmos de búsqueda, ordenamiento, simulación o procesamiento de flujos de datos.</li>
  </ul>

  <p>
    En la enseñanza y diseño de algoritmos, el bucle se entiende como un patrón central para procesos iterativos y cíclicos, que reemplazan lo que de otro modo serían múltiples repeticiones manuales del código. Así, se promueve la eficiencia, claridad y escalabilidad en la resolución de problemas.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;">Clasificación didáctica de bucles</h4>

  <p>
    Para efectos pedagógicos, es conveniente distinguir las siguientes categorías de bucles, cada una con su perfil y aplicación:
  </p>

  <table style="width: 100%; border-collapse: collapse; background-color: #1f1f1f; margin-top: 10px; margin-bottom: 15px;">
    <thead>
      <tr style="background-color: #2a2a2a;">
        <th style="padding: 8px; border: 1px solid #333;">Tipo de bucle</th>
        <th style="padding: 8px; border: 1px solid #333;">Control principal</th>
        <th style="padding: 8px; border: 1px solid #333;">Características principales</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Bucles controlados por condición (Mientras / While)</td>
        <td style="padding: 8px; border: 1px solid #333;">Evaluación de condición booleana</td>
        <td style="padding: 8px; border: 1px solid #333;">Número de repeticiones no fijo de antemano.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Bucles controlados por contador (Para / For)</td>
        <td style="padding: 8px; border: 1px solid #333;">Contador desde inicio hasta fin</td>
        <td style="padding: 8px; border: 1px solid #333;">Número de repeticiones conocido al inicio.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Bucles de comprobación posterior (Repetir…Hasta / Do…While)</td>
        <td style="padding: 8px; border: 1px solid #333;">Condición evaluada al final</td>
        <td style="padding: 8px; border: 1px solid #333;">Garantizan al menos una ejecución del cuerpo.</td>
      </tr>
    </tbody>
  </table>

  <p>
    Cada tipo tiene ventajas pedagógicas y aplicaciones prácticas distintas: los bucles condicionales introducen la dependencia lógica del entorno; los de contador refuerzan la noción de iteración cuantificada; y los de comprobación posterior son útiles para validaciones o procesos que deben ejecutarse al menos una vez.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;">Invariante de bucle y razonamiento formal</h4>

  <p>
    Un concepto avanzado pero enriquecedor para entender bucles es el de <strong>invariante de bucle</strong>. Una invariante es una propiedad lógica que se cumple al inicio de cada iteración del bucle y que se mantiene antes y después de cada ejecución del cuerpo. Aprender a identificar invariantes ayuda al estudiante a razonar de forma más rigurosa sobre la corrección del bucle: que al entrar cumple cierta condición, que al salir también lo hace, y que al terminar se ha alcanzado el estado deseado.
  </p>

  <p>
    Por ejemplo, en un bucle que suma elementos de una lista, una posible invariante es:
  </p>

  <p style="background-color: #1a1a1a; padding: 10px; border-left: 4px solid #00ffff; font-style: italic;">
    “La variable <strong>suma</strong> contiene la suma de los elementos procesados hasta el índice <strong>i−1</strong>”.
  </p>

  <p>
    Esta afirmación se cumple antes de cada iteración, se mantiene tras cada iteración, y al final junto con la condición de paro permite concluir que la suma total es correcta.
  </p>

  <p>
    El uso de invariantes se vincula con métodos formales de verificación de programas y, aunque no todos los cursos introductorios lo abordan, su introducción temprana fortalece la capacidad del estudiante de diseñar algoritmos correctos y evitar errores como “off-by-one” o bucles infinitos.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;">Implicaciones didácticas</h4>

  <p>
    Para la enseñanza de programación con bucles, es muy recomendable que el docente ayude a los estudiantes a:
  </p>

  <ul>
    <li>Formular explícitamente la condición de paro (¿cuándo debe detenerse el bucle?).</li>
    <li>Identificar una invariante sencilla (¿qué propiedad permanece verdadera cada vuelta?).</li>
    <li>Verificar que la actualización conduce a la condición de paro (¿la variable de control avanza hacia el fin?).</li>
    <li>Experimentar con bucles donde la invariante o la condición de paro estén mal planteadas, para observar fallos reales.</li>
  </ul>

  <p>
    Este enfoque fomenta un pensamiento algorítmico profundo, más allá de saber cómo escribir un bucle, sino comprender <strong>por qué y cuándo se detiene</strong>, <strong>qué se mantiene verdadero</strong> y <strong>cómo evitar errores de iteración</strong>.
  </p>

</section>
<section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.6;">

  <h3 style="color: #00ffff; font-size: 18px;">7. Estructura Mientras (While)</h3>

  <h4 style="color: #00ffff; font-size: 17px;"> Definición y semántica</h4>

  <p>
    La estructura repetitiva <strong>“Mientras”</strong> (equivalente a <i>While</i> en otros lenguajes) constituye uno de los mecanismos más esenciales de la programación estructurada, ya que permite ejecutar un bloque de instrucciones de manera reiterada mientras una condición lógica sea verdadera (Rojas, 2022).
  </p>

  <p>
    Su función principal es controlar la repetición condicional de instrucciones, evaluando la condición antes de cada iteración. Esto implica que si la condición inicial no se cumple, el cuerpo del bucle no se ejecutará en absoluto, característica que la diferencia de las estructuras “Repetir...Hasta” (Do...While).
  </p>

  <p>En PSeInt, la sintaxis básica es:</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Mientras &lt;condición&gt; Hacer
    &lt;instrucciones&gt;
FinMientras
  </pre>

  <p>
    Esta estructura traduce el razonamiento humano de “mientras algo siga siendo cierto, continúa realizando la acción” (Gómez &amp; Paredes, 2023).
  </p>

  <h4 style="color: #00ffff; font-size: 17px;"> Concepto lógico </h4>

  <p>
    Desde la lógica computacional, el bucle “Mientras” representa una <strong>repetición dependiente del estado</strong> (Brackmann et al., 2021). Esto significa que la ejecución se mantiene activa siempre que la condición booleana permanezca verdadera.
  </p>

  <p>
    A nivel cognitivo, comprender un bucle implica anticipar el comportamiento dinámico del algoritmo, imaginando cómo las variables cambian en cada ciclo.
  </p>

  <p>
    En la enseñanza de la programación, este tipo de estructuras ayuda a desarrollar el pensamiento iterativo y predictivo, promoviendo que los estudiantes comprendan la noción de “estado del sistema” y practiquen la depuración paso a paso (Universidad de Córdoba, 2024).
  </p>

  <h4 style="color: #00ffff; font-size: 17px;"> Ejemplo 1 — Contador ascendente simple</h4>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo Contador
    Definir i Como Entero
    i &lt;- 1
    Mientras i &lt;= 5 Hacer
        Escribir "Iteración: ", i
        i &lt;- i + 1
    FinMientras
FinAlgoritmo
  </pre>

  <p>
    Como señalan Gómez y Paredes (2023), este tipo de ejercicio es ideal para la enseñanza inicial de bucles, ya que ilustra de manera visual el ciclo completo: inicialización, evaluación de condición, ejecución del cuerpo y actualización de la variable de control.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;"> Ejemplo 2 — Lectura hasta valor centinela</h4>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo SumaHastaCero
    Definir n, suma Como Entero
    suma &lt;- 0
    Escribir "Ingrese números (0 para terminar):"
    Leer n
    Mientras n &lt;&gt; 0 Hacer
        suma &lt;- suma + n
        Leer n
    FinMientras
    Escribir "La suma total es: ", suma
FinAlgoritmo
  </pre>

  <p>
    Según Rojas (2022), este tipo de ejercicio introduce el concepto de <strong>valor centinela</strong>, una técnica clásica que permite controlar el final de un bucle a través de la entrada de un dato especial (en este caso, el número 0).
  </p>

  <p>
    De este modo, el alumno comprende que la repetición puede depender no solo de contadores, sino también de datos dinámicos introducidos por el usuario.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;"> Análisis de comportamiento</h4>

  <table style="width: 100%; border-collapse: collapse; background-color: #1f1f1f; margin-top: 10px; margin-bottom: 15px;">
    <thead>
      <tr style="background-color: #2a2a2a;">
        <th style="padding: 8px; border: 1px solid #333;">Aspecto</th>
        <th style="padding: 8px; border: 1px solid #333;">Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Tipo de control</td>
        <td style="padding: 8px; border: 1px solid #333;">Condicional (la evaluación se realiza antes del cuerpo del bucle).</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Número mínimo de ejecuciones</td>
        <td style="padding: 8px; border: 1px solid #333;">0 veces, si la condición inicial es falsa.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Ventajas</td>
        <td style="padding: 8px; border: 1px solid #333;">Permite iteraciones indeterminadas según una condición lógica.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Desventajas</td>
        <td style="padding: 8px; border: 1px solid #333;">Riesgo de bucles infinitos si la variable de control no se actualiza.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Aplicación típica</td>
        <td style="padding: 8px; border: 1px solid #333;">Procesos de lectura, validación de datos y sumatorias dinámicas.</td>
      </tr>
    </tbody>
  </table>

  <p>
    Brackmann et al. (2021) destacan que el uso de bucles controlados por condición estimula el razonamiento lógico y el control del flujo, competencias centrales del pensamiento computacional.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;">🚫 Errores comunes y estrategias de corrección</h4>

  <table style="width: 100%; border-collapse: collapse; background-color: #1f1f1f; margin-top: 10px; margin-bottom: 15px;">
    <thead>
      <tr style="background-color: #2a2a2a;">
        <th style="padding: 8px; border: 1px solid #333;">Error frecuente</th>
        <th style="padding: 8px; border: 1px solid #333;">Descripción</th>
        <th style="padding: 8px; border: 1px solid #333;">Consecuencia</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">No actualizar la variable de control</td>
        <td style="padding: 8px; border: 1px solid #333;">La condición nunca cambia.</td>
        <td style="padding: 8px; border: 1px solid #333;">Bucle infinito.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Condición incorrecta</td>
        <td style="padding: 8px; border: 1px solid #333;">Uso de &lt; en lugar de &lt;= o viceversa.</td>
        <td style="padding: 8px; border: 1px solid #333;">Error off-by-one.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Lectura mal colocada</td>
        <td style="padding: 8px; border: 1px solid #333;">No se inicializa fuera del bucle.</td>
        <td style="padding: 8px; border: 1px solid #333;">Comportamiento inesperado.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Falta de caso base</td>
        <td style="padding: 8px; border: 1px solid #333;">No se prevé cuándo detenerse.</td>
        <td style="padding: 8px; border: 1px solid #333;">Resultado erróneo o bucle infinito.</td>
      </tr>
    </tbody>
  </table>

  <p>
    Como indican Gómez y Paredes (2023), la depuración de estos errores puede abordarse mediante la ejecución paso a paso en PSeInt, observando la evolución de las variables en cada iteración.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;"> Ejercicio guiado — Suma de números hasta N</h4>

  <p><strong>Enunciado:</strong><br>
  Calcular la suma de los enteros desde 1 hasta un número N ingresado por el usuario.</p>

  <p><strong>Solución en PSeInt:</strong></p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo SumaN
    Definir N, i, suma Como Entero
    Escribir "Ingrese N (N &gt; 0):"
    Leer N
    i &lt;- 1
    suma &lt;- 0
    Mientras i &lt;= N Hacer
        suma &lt;- suma + i
        i &lt;- i + 1
    FinMientras
    Escribir "La suma de 1 a ", N, " es: ", suma
FinAlgoritmo
  </pre>

  <p>
    De acuerdo con Rojas (2022), este tipo de ejercicios ayudan al estudiante a identificar patrones de acumulación y actualización, dos principios fundamentales en la construcción de bucles.
  </p>

</section>

    
    <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.6;">

  <h3 style="color: #00ffff; font-size: 18px;">8. Estructura Para (For)</h3>

  <h4 style="color: #00ffff; font-size: 17px;">Definición y semántica</h4>

  <p>
    La estructura repetitiva <strong>Para</strong> (equivalente a <i>For</i> en muchos lenguajes) permite ejecutar un bloque de instrucciones un número determinado de veces, definido por un rango y, opcionalmente, por un paso o incremento. Es la forma más estructurada de iteración cuando se conoce con anticipación la cantidad de repeticiones necesarias (Rojas, 2022).
  </p>

  <p>En PSeInt, su sintaxis es la siguiente:</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Para i &lt;- inicio Hasta fin Con Paso paso Hacer
    &lt;instrucciones&gt;
FinPara
  </pre>

  <p>
    En la mayoría de los casos, el “Paso” es opcional y su valor por defecto es 1, aunque puede establecerse otro valor, positivo o negativo, según la dirección del recorrido. Este tipo de estructura se asocia al <strong>control por contador</strong>, donde la variable de iteración se incrementa o decrementa automáticamente (Gómez &amp; Paredes, 2023).
  </p>

  <h4 style="color: #00ffff; font-size: 17px;"> Ejemplo básico — Suma de números del 1 al 5</h4>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo SumarFor
    Definir i, suma Como Entero
    suma &lt;- 0
    Para i &lt;- 1 Hasta 5 Hacer
        suma &lt;- suma + i
    FinPara
    Escribir "Suma: ", suma
FinAlgoritmo
  </pre>

  <p>
    En este caso, la variable <strong>i</strong> se inicializa en 1, aumenta automáticamente hasta 5, y en cada paso se acumula su valor en <strong>suma</strong>.
  </p>

  <p>
    Según Brackmann et al. (2021), este tipo de bucles son ideales para introducir el concepto de iteración controlada, ayudando al estudiante a identificar la estructura cíclica fija del algoritmo.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;"> Concepto lógico</h4>

  <p>
    El bucle <strong>Para</strong> refleja un modelo de control determinista, donde el número de iteraciones está definido antes de comenzar. Desde una perspectiva didáctica, esta estructura es más accesible para principiantes, ya que reduce la posibilidad de errores lógicos, especialmente los relacionados con las condiciones de parada (Rojas, 2022).
  </p>

  <p>
    En términos cognitivos, el uso de la estructura <strong>Para</strong> promueve la abstracción y planificación del ciclo, facilitando el desarrollo de competencias de pensamiento computacional como la automatización y la generalización (Brackmann et al., 2021).
  </p>

  <h4 style="color: #00ffff; font-size: 17px;"> Ejemplo 1 — Suma de elementos de una lista</h4>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo SumaLista
    Definir n, i, suma, valor Como Entero
    suma &lt;- 0
    Escribir "¿Cuántos números ingresará?"
    Leer n
    Para i &lt;- 1 Hasta n Hacer
        Escribir "Ingrese número ", i, ":"
        Leer valor
        suma &lt;- suma + valor
    FinPara
    Escribir "La suma total es: ", suma
FinAlgoritmo
  </pre>

  <p>
    Este ejemplo permite reforzar la idea de repetición controlada por un valor dado (número de elementos). Según la Universidad de Córdoba (2024), este tipo de ejercicios ayuda a relacionar los bucles con procesos de acumulación y a fortalecer la comprensión de la secuencia de ejecución en estructuras iterativas.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;"> Ejemplo 2 — Cálculo del factorial</h4>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo Factorial
    Definir n, i, fact Como Entero
    Escribir "Ingrese n (&gt;=0):"
    Leer n
    fact &lt;- 1
    Para i &lt;- 1 Hasta n Hacer
        fact &lt;- fact * i
    FinPara
    Escribir "n! = ", fact
FinAlgoritmo
  </pre>

  <p>
    Aquí, la estructura <strong>Para</strong> controla un proceso acumulativo, donde cada iteración multiplica el valor actual del factorial por el índice <strong>i</strong>.
  </p>

  <p>
    Como puntualizan Gómez y Paredes (2023), este ejemplo favorece la comprensión de acumuladores dentro de bucles y permite abordar nociones de complejidad computacional lineal de forma intuitiva.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;"> Análisis comparativo: Mientras vs. Para</h4>

  <table style="width: 100%; border-collapse: collapse; background-color: #1f1f1f; margin-top: 10px; margin-bottom: 15px;">
    <thead>
      <tr style="background-color: #2a2a2a;">
        <th style="padding: 8px; border: 1px solid #333;">Aspecto</th>
        <th style="padding: 8px; border: 1px solid #333;">Mientras</th>
        <th style="padding: 8px; border: 1px solid #333;">Para</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Tipo de control</td>
        <td style="padding: 8px; border: 1px solid #333;">Condicional</td>
        <td style="padding: 8px; border: 1px solid #333;">Contador</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Número de repeticiones</td>
        <td style="padding: 8px; border: 1px solid #333;">Indeterminado</td>
        <td style="padding: 8px; border: 1px solid #333;">Determinado</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Evaluación de condición</td>
        <td style="padding: 8px; border: 1px solid #333;">Antes de cada iteración</td>
        <td style="padding: 8px; border: 1px solid #333;">Automática por rango</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Uso típico</td>
        <td style="padding: 8px; border: 1px solid #333;">Entrada de datos o validaciones</td>
        <td style="padding: 8px; border: 1px solid #333;">Recorridos numéricos o secuenciales</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Complejidad conceptual</td>
        <td style="padding: 8px; border: 1px solid #333;">Media–Alta</td>
        <td style="padding: 8px; border: 1px solid #333;">Baja–Media</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Error común</td>
        <td style="padding: 8px; border: 1px solid #333;">Olvidar actualizar variable de control</td>
        <td style="padding: 8px; border: 1px solid #333;">Confundir límites del rango</td>
      </tr>
    </tbody>
  </table>

  <p>
    Como señalan Rojas (2022) y Brackmann et al. (2021), comprender la diferencia entre estos dos tipos de bucles es fundamental para el desarrollo de la flexibilidad algorítmica, ya que cada uno resuelve problemas distintos según el tipo de control requerido.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;">⚠️ Errores comunes y buenas prácticas</h4>

  <table style="width: 100%; border-collapse: collapse; background-color: #1f1f1f; margin-top: 10px; margin-bottom: 15px;">
    <thead>
      <tr style="background-color: #2a2a2a;">
        <th style="padding: 8px; border: 1px solid #333;">Error</th>
        <th style="padding: 8px; border: 1px solid #333;">Descripción</th>
        <th style="padding: 8px; border: 1px solid #333;">Consecuencia</th>
        <th style="padding: 8px; border: 1px solid #333;">Recomendación</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Modificar la variable de control dentro del cuerpo</td>
        <td style="padding: 8px; border: 1px solid #333;">Alterar <strong>i</strong> manualmente dentro del bucle.</td>
        <td style="padding: 8px; border: 1px solid #333;">Resultados impredecibles.</td>
        <td style="padding: 8px; border: 1px solid #333;">No reasignar la variable de iteración.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Confundir límites o pasos</td>
        <td style="padding: 8px; border: 1px solid #333;">Usar “Hasta n-1” o “Paso incorrecto”.</td>
        <td style="padding: 8px; border: 1px solid #333;">Error off-by-one o salto de valores.</td>
        <td style="padding: 8px; border: 1px solid #333;">Revisar los valores de inicio y fin.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Usar “Para” en iteraciones indeterminadas</td>
        <td style="padding: 8px; border: 1px solid #333;">Aplicar “Para” sin conocer la cantidad de repeticiones.</td>
        <td style="padding: 8px; border: 1px solid #333;">Riesgo de resultados erróneos.</td>
        <td style="padding: 8px; border: 1px solid #333;">Preferir “Mientras” o “Repetir”.</td>
      </tr>
    </tbody>
  </table>

  <p>
    Estos errores son frecuentes en las primeras etapas de aprendizaje. La depuración en PSeInt puede realizarse visualizando el panel de variables paso a paso (<strong>F8</strong>) o mediante trazas con la instrucción <strong>Escribir</strong> para verificar el avance de la iteración (Universidad de Córdoba, 2024).
  </p>

  <h4 style="color: #00ffff; font-size: 17px;">Ejercicio guiado — Tabla de multiplicar</h4>

  <p><strong>Enunciado:</strong><br>
  Generar la tabla de multiplicar de un número entero <strong>m</strong> desde 1 hasta 12.</p>

  <p><strong>Solución en PSeInt:</strong></p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo TablaMultiplicar
    Definir m, i, prod Como Entero
    Escribir "Ingrese el número m:"
    Leer m
    Para i &lt;- 1 Hasta 12 Hacer
        prod &lt;- m * i
        Escribir m, " x ", i, " = ", prod
    FinPara
FinAlgoritmo
  </pre>

  <p>
    Este tipo de ejercicio es especialmente útil en el aula, ya que combina repetición, salida formateada y visualización de patrones. Según Gómez y Paredes (2023), este enfoque refuerza la lógica iterativa y promueve la transferencia del conocimiento a otros contextos, como el manejo de arreglos o estructuras de datos.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;"> Perspectiva didáctica</h4>

  <p>
    Desde una perspectiva didáctica, la estructura <strong>Para</strong> es una de las más efectivas para introducir los bucles, ya que ofrece un entorno predecible y controlado. Brackmann et al. (2021) sostienen que este tipo de estructuras fortalecen la comprensión del flujo algorítmico, permitiendo al estudiante visualizar el avance del contador y la evolución de las variables dependientes.
  </p>

  <p>
    Asimismo, Rojas (2022) destaca que el uso de ejemplos graduales, como sumatorias, tablas o factoriales, facilita la transición del pensamiento aritmético al pensamiento computacional, fomentando la autonomía en la formulación de algoritmos.
  </p>

</section>
<section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.6;">

  <h3 style="color: #00ffff; font-size: 18px;">9. Combinación de bucles y condicionales</h3>

  <h4 style="color: #00ffff; font-size: 17px;"> Principio general</h4>

  <p>
    En la programación estructurada, la interacción entre bucles y estructuras condicionales constituye la base del control de flujo dinámico. En la práctica, la mayoría de los algoritmos requieren repetir acciones mientras se toman decisiones dentro de esas repeticiones.
  </p>
  <p>
    De acuerdo con Ramírez y Gutiérrez (2023), esta combinación permite crear algoritmos adaptativos, capaces de modificar su comportamiento durante la ejecución, en función de los datos procesados o las condiciones del entorno.
  </p>

  <p>En términos de diseño algorítmico, el patrón general puede representarse así:</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Mientras &lt;condición del bucle&gt; Hacer
    Si &lt;condición interna&gt; Entonces
        &lt;acciones condicionadas&gt;
    FinSi
FinMientras
  </pre>

  <p>
    Este patrón ilustra la anidación de estructuras de control, en la cual las decisiones influyen directamente en la repetición. Según Villalobos y Ponce (2022), este tipo de estructuras ayudan a los estudiantes a comprender la idea de flujo jerárquico de decisiones, donde las condiciones actúan como filtros dentro de iteraciones.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;"> Importancia pedagógica y cognitiva</h4>

  <p>
    Desde la perspectiva del aprendizaje del pensamiento computacional, la combinación de bucles y condicionales desarrolla la flexibilidad cognitiva del estudiante. Mientras que un bucle implica la repetición sistemática, una condición introduce la variabilidad y el control selectivo.
  </p>
  <p>
    Ramos y López (2024) señalan que comprender esta interacción fortalece la capacidad de abstracción, pues el estudiante debe anticipar cómo cambian las variables y las rutas del algoritmo en cada iteración.
  </p>

  <p>Entre las principales competencias que se promueven están:</p>
  <ul>
    <li><strong>Razonamiento lógico condicional:</strong> aplicar decisiones dentro de procesos iterativos.</li>
    <li><strong>Gestión de estados y banderas:</strong> mantener información sobre el estado del proceso (por ejemplo, si se detectó un error o condición especial).</li>
    <li><strong>Control de flujo avanzado:</strong> usar correctamente instrucciones como <i>SalirMientras</i> o condiciones de corte (<i>short-circuit</i>).</li>
  </ul>

  <h4 style="color: #00ffff; font-size: 17px;"> Patrones comunes de combinación</h4>

  <table style="width: 100%; border-collapse: collapse; background-color: #1f1f1f; margin-top: 10px; margin-bottom: 15px;">
    <thead>
      <tr style="background-color: #2a2a2a;">
        <th style="padding: 8px; border: 1px solid #333;">Patrón</th>
        <th style="padding: 8px; border: 1px solid #333;">Descripción</th>
        <th style="padding: 8px; border: 1px solid #333;">Ejemplo típico</th>
        <th style="padding: 8px; border: 1px solid #333;">Uso pedagógico</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Filtro en bucle</td>
        <td style="padding: 8px; border: 1px solid #333;">Itera sobre una colección y procesa solo los elementos que cumplen una condición.</td>
        <td style="padding: 8px; border: 1px solid #333;">Contar valores impares, filtrar mayores que cierto valor.</td>
        <td style="padding: 8px; border: 1px solid #333;">Comprender el uso de <i>Si...Entonces</i> dentro de ciclos.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Acumulación condicional</td>
        <td style="padding: 8px; border: 1px solid #333;">Suma o cuenta elementos que cumplen un criterio.</td>
        <td style="padding: 8px; border: 1px solid #333;">Contar aprobados o acumular ventas mayores a un umbral.</td>
        <td style="padding: 8px; border: 1px solid #333;">Reforzar la idea de selectividad.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Búsqueda con corte</td>
        <td style="padding: 8px; border: 1px solid #333;">Detiene el bucle cuando se cumple una condición.</td>
        <td style="padding: 8px; border: 1px solid #333;">Buscar un número en una lista.</td>
        <td style="padding: 8px; border: 1px solid #333;">Introducir el control de salida.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Validación iterativa</td>
        <td style="padding: 8px; border: 1px solid #333;">Repite lecturas hasta recibir datos válidos.</td>
        <td style="padding: 8px; border: 1px solid #333;">Ingreso de edades o contraseñas.</td>
        <td style="padding: 8px; border: 1px solid #333;">Enseñar validación de datos y control de errores.</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color: #00ffff; font-size: 17px;">💻 Ejemplo A — Contar impares en una lista</h4>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo ContarImpares
    Definir n, i, valor, contador Como Entero
    Escribir "¿Cuántos valores ingresará?"
    Leer n
    contador &lt;- 0
    Para i &lt;- 1 Hasta n Hacer
        Escribir "Ingrese valor ", i, ":"
        Leer valor
        Si valor % 2 &lt;&gt; 0 Entonces
            contador &lt;- contador + 1
        FinSi
    FinPara
    Escribir "Cantidad de impares: ", contador
FinAlgoritmo
  </pre>

  <p>
    En este ejemplo se utiliza un bucle <strong>Para</strong> combinado con una condición interna para filtrar los números impares.
    Como explican Castillo y Vargas (2021), este tipo de combinaciones ayuda a los estudiantes a comprender cómo los criterios lógicos determinan el comportamiento de los algoritmos dentro de repeticiones controladas.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;"> Ejemplo B — Validar entrada dentro de un bucle</h4>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo LeerEdadValida
    Definir edad Como Entero
    Mientras Verdadero Hacer
        Escribir "Ingrese edad (0–120):"
        Leer edad
        Si edad &gt;= 0 Y edad &lt;= 120 Entonces
            SalirMientras
        SiNo
            Escribir "Entrada inválida. Intente de nuevo."
        FinSi
    FinMientras
    Escribir "Edad válida: ", edad
FinAlgoritmo
  </pre>

  <p>
    Este algoritmo combina iteración indefinida (<strong>Mientras Verdadero</strong>) con una condición de validación interna.
    El uso de una instrucción de salida controlada (<strong>SalirMientras</strong>) o de una bandera lógica previene los bucles infinitos.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;"> Ejercicio integrador — Análisis de calificaciones</h4>

  <p><strong>Enunciado:</strong><br>
  Dado un conjunto de <strong>n</strong> calificaciones (0–100), calcular:
  </p>
  <ul>
    <li>Promedio general.</li>
    <li>Número de aprobados (≥60).</li>
    <li>Número de sobresalientes (≥90).</li>
    <li>Detectar si existe alguna nota inválida (fuera de rango) y reportar el caso.</li>
  </ul>

  <p><strong>Estrategia:</strong><br>
  Usar un bucle <strong>Para</strong> para recorrer las calificaciones, emplear condicionales anidados para validar y contar, y una bandera lógica para detectar valores inválidos.</p>

  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo EstadisticaNotas
    Definir n, i, nota Como Entero
    Definir suma, promedio Como Real
    Definir aprobados, sobresalientes Como Entero
    Definir hayInvalidas Como Logico

    Escribir "Ingrese n:"
    Leer n
    suma &lt;- 0
    aprobados &lt;- 0
    sobresalientes &lt;- 0
    hayInvalidas &lt;- Falso

    Para i &lt;- 1 Hasta n Hacer
        Escribir "Ingrese nota ", i, ":"
        Leer nota
        Si nota &lt; 0 O nota &gt; 100 Entonces
            hayInvalidas &lt;- Verdadero
        SiNo
            suma &lt;- suma + nota
            Si nota &gt;= 60 Entonces
                aprobados &lt;- aprobados + 1
            FinSi
            Si nota &gt;= 90 Entonces
                sobresalientes &lt;- sobresalientes + 1
            FinSi
        FinSi
    FinPara

    Si hayInvalidas Entonces
        Escribir "Existen notas inválidas. Verifique con el docente."
    SiNo
        promedio &lt;- suma / n
        Escribir "Promedio: ", promedio
        Escribir "Aprobados: ", aprobados
        Escribir "Sobresalientes: ", sobresalientes
    FinSi
FinAlgoritmo
  </pre>

  <p>
    Este ejemplo ilustra la interacción de estructuras múltiples (bucle, condicionales y banderas), promoviendo la comprensión del flujo lógico completo de un programa.
    Según Ramos y López (2024), los ejercicios que combinan estructuras son clave para el desarrollo del pensamiento algorítmico avanzado, ya que exigen una planificación mental más profunda del proceso de ejecución.
  </p>

  <h4 style="color: #00ffff; font-size: 17px;"> Análisis pedagógico y buenas prácticas</h4>

  <table style="width: 100%; border-collapse: collapse; background-color: #1f1f1f; margin-top: 10px; margin-bottom: 15px;">
    <thead>
      <tr style="background-color: #2a2a2a;">
        <th style="padding: 8px; border: 1px solid #333;">Práctica recomendada</th>
        <th style="padding: 8px; border: 1px solid #333;">Descripción</th>
        <th style="padding: 8px; border: 1px solid #333;">Beneficio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Usar banderas lógicas</td>
        <td style="padding: 8px; border: 1px solid #333;">Facilita controlar eventos excepcionales dentro del bucle.</td>
        <td style="padding: 8px; border: 1px solid #333;">Mejora la claridad y evita bucles infinitos.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Introducir trazas con “Escribir”</td>
        <td style="padding: 8px; border: 1px solid #333;">Permite seguir la ejecución del ciclo.</td>
        <td style="padding: 8px; border: 1px solid #333;">Fomenta la depuración y autoevaluación.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Separar condiciones</td>
        <td style="padding: 8px; border: 1px solid #333;">Evaluar una condición por línea (evitar anidar en exceso).</td>
        <td style="padding: 8px; border: 1px solid #333;">Incrementa la legibilidad y comprensión.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Comentar los pasos del bucle</td>
        <td style="padding: 8px; border: 1px solid #333;">Documentar el propósito de cada condición.</td>
        <td style="padding: 8px; border: 1px solid #333;">Desarrolla buenas prácticas de programación.</td>
      </tr>
    </tbody>
  </table>

  <p>
    La combinación de bucles y condicionales constituye la columna vertebral del control de flujo en la programación estructurada. Enseñar su uso mediante ejemplos contextualizados y graduales permite a los estudiantes desarrollar un pensamiento lógico robusto y adaptable.
  </p>

  <p>
    Como destacan Villalobos y Ponce (2022), la enseñanza de estructuras anidadas fomenta la capacidad de “razonar dentro del tiempo del algoritmo”, es decir, prever el comportamiento del programa a lo largo de sus iteraciones y decisiones.
  </p>

</section>

    <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.6;">

  <h3 style="color: #00ffff; font-size: 18px;">10. Errores comunes, consejos de depuración y estrategias didácticas</h3>

  <h4 style="color: #00ffff; font-size: 17px;">1. Errores típicos (descripción y efectos)</h4>

  <table style="width: 100%; border-collapse: collapse; background-color: #1f1f1f; margin-top: 10px; margin-bottom: 15px;">
    <thead>
      <tr style="background-color: #2a2a2a;">
        <th style="padding: 8px; border: 1px solid #333;">Error</th>
        <th style="padding: 8px; border: 1px solid #333;">Qué ocurre</th>
        <th style="padding: 8px; border: 1px solid #333;">Consecuencia práctica</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Bucle infinito por falta de actualización de la variable de control</td>
        <td style="padding: 8px; border: 1px solid #333;">La condición de paro nunca cambia porque la variable que la afecta no se modifica.</td>
        <td style="padding: 8px; border: 1px solid #333;">El programa no termina; consume CPU; el alumno no obtiene salida.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Off-by-one (errores de límite)</td>
        <td style="padding: 8px; border: 1px solid #333;">Confusión entre &lt;= y &lt;, o entre índices que inician en 0 vs 1.</td>
        <td style="padding: 8px; border: 1px solid #333;">Se procesan una iteración de más o de menos, resultados incorrectos.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Modificar la variable de iteración dentro del cuerpo</td>
        <td style="padding: 8px; border: 1px solid #333;">Reasignar la variable de control manualmente dentro del bucle.</td>
        <td style="padding: 8px; border: 1px solid #333;">Comportamiento impredecible o salto de iteraciones; difícil de depurar.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">Lectura/escritura mal ubicadas (centinela)</td>
        <td style="padding: 8px; border: 1px solid #333;">Posicionar <i>Leer</i> sólo dentro del bucle sin inicialización previa (o viceversa).</td>
        <td style="padding: 8px; border: 1px solid #333;">Bucle infinito o pérdida de primer dato; flujo errático.</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #333;">No manejar caso vacío (n = 0) o contador = 0 antes de división</td>
        <td style="padding: 8px; border: 1px solid #333;">No validar que haya datos antes de dividir por el contador.</td>
        <td style="padding: 8px; border: 1px solid #333;">División por cero o resultados indefinidos.</td>
      </tr>
    </tbody>
  </table>

  <p>
    <strong>Comentario pedagógico:</strong> estos errores son frecuentes en cursos introductorios; explicarlos con ejemplos intencionalmente defectuosos produce aprendizaje más profundo (Gómez & Paredes, 2023).
  </p>

  <h4 style="color: #00ffff; font-size: 17px;">2. Demostraciones de errores en PSeInt (ejemplos y correcciones)</h4>

  <p><strong>A. Bucle infinito (error): olvido de la actualización</strong></p>
  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Algoritmo InfinitoError
    Definir i Como Entero
    i &lt;- 1
    Mientras i &lt;= 3 Hacer
        Escribir "Iteracion: ", i
        // i &lt;- i + 1  &lt;- olvidado provoca bucle infinito
    FinMientras
FinAlgoritmo
  </pre>
  <p><strong>Corrección:</strong> añadir <code>i &lt;- i + 1</code> dentro del cuerpo.</p>

  <p><strong>B. Off-by-one (error con límites)</strong></p>
  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
// Error: falta el '=' provoca que N no se incluya
Para i &lt;- 1 Hasta N-1 Hacer
    suma &lt;- suma + i
FinPara
  </pre>
  <p><strong>Corrección:</strong> usar <code>Para i &lt;- 1 Hasta N Hacer</code> o ajustar la condición en un <code>Mientras</code>.</p>

  <p><strong>C. Lectura mal ubicada (centinela)</strong></p>
  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
// Error: no hay lectura previa; condición depende de un valor no inicializado
Escribir "Ingrese números (0 termina):"
Mientras n &lt;&gt; 0 Hacer
    Leer n
    suma &lt;- suma + n
FinMientras
  </pre>
  <p><strong>Corrección (patrón seguro):</strong></p>
  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
Leer n
Mientras n &lt;&gt; 0 Hacer
    suma &lt;- suma + n
    Leer n
FinMientras
  </pre>

  <p><strong>D. División por cero (no manejar caso vacío)</strong></p>
  <pre style="background-color: #1a1a1a; padding: 12px; border-radius: 6px; text-align: center; font-family: 'Courier New', monospace; overflow-x: auto;">
// Error: si n=0, contador=0 → división por cero
promedio &lt;- suma / contador
  </pre>
  <p><strong>Corrección:</strong> verificar <code>Si contador = 0 Entonces</code> → avisar “no hay datos”.</p>

  <h4 style="color: #00ffff; font-size: 17px;">3. Técnicas de depuración eficaces</h4>
  <ul>
    <li><strong>Ejecución paso a paso (F8 en PSeInt):</strong> observar evaluación de condiciones y cambios de variables antes y después de cada instrucción (Rojas, 2022).</li>
    <li><strong>Trazas intermedias:</strong> insertar <code>Escribir</code> para imprimir variables clave dentro del bucle, por ejemplo: <code>Escribir "i=", i, " suma=", suma</code>.</li>
    <li><strong>Pruebas mínimas y escalonadas:</strong> probar con N = 1, N = 2, N = 3 antes de pruebas masivas; detectar off-by-one y condiciones límite.</li>
    <li><strong>Verificar invariantes:</strong> formular una invariante sencilla (p. ej., “suma = suma de elementos procesados hasta i−1”).</li>
    <li><strong>Pruebas límite:</strong> asegurar entradas 0, 1, máximos, negativos o vacíos.</li>
    <li><strong>Variables bandera (flags):</strong> usar banderas lógicas para controlar salidas y condiciones especiales.</li>
    <li><strong>Simulación manual:</strong> realizar 2–3 iteraciones en papel para predecir el resultado.</li>
    <li><strong>Comentarios y nombres claros:</strong> usar nombres descriptivos como <i>contador</i> o <i>suma</i> para facilitar el rastreo.</li>
  </ul>
  <p>
    Estas prácticas fomentan la autorregulación y la metacognición del estudiante (Brackmann et al., 2021).
  </p>

  <h4 style="color: #00ffff; font-size: 17px;">4. Estrategias didácticas (cómo enseñar y practicar)</h4>
  <ul>
    <li><strong>A. Modelado guiado:</strong> el docente escribe un bucle en la pizarra y ejecuta manualmente las primeras iteraciones mostrando las variables. También muestra una versión errónea para detectar la falla.</li>
    <li><strong>B. Paréntesis de comprensión:</strong> pedir a los estudiantes que describan en palabras qué hace el bucle y cuándo termina antes de codificarlo.</li>
    <li><strong>C. Errores deliberados:</strong> entregar códigos con errores intencionales y pedir a los alumnos corregirlos y justificar la corrección.</li>
    <li><strong>D. Refactorización guiada:</strong> transformar un <i>Mientras</i> en <i>Para</i> y viceversa; comparar legibilidad y robustez.</li>
    <li><strong>E. Evaluación por pares:</strong> los estudiantes intercambian códigos y los revisan con rúbricas (manejo de errores, documentación, lógica).</li>
    <li><strong>F. Actividades autoguiadas de trazado:</strong> completar tablas con valores de variables durante las primeras iteraciones.</li>
  </ul>

  <h4 style="color: #00ffff; font-size: 17px;">5. Plantilla de comprobación rápida (checklist)</h4>

  <ul>
    <li>¿Inicialicé todas las variables de control?</li>
    <li>¿La condición de paro está bien formulada (incluye casos límite)?</li>
    <li>¿Actualizo la variable de control dentro del bucle?</li>
    <li>¿He considerado el caso n = 0 o vacío?</li>
    <li>¿Hay trazas suficientes para depuración (temporales)?</li>
    <li>¿Puedo simular manualmente 2–3 iteraciones con valores de ejemplo?</li>
  </ul>

  <p>
    Usar esta lista reduce la incidencia de errores comunes en prácticas y proyectos (Gómez & Paredes, 2023).
  </p>

</section>

    
    <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.6;">

  <h3 style="color: #00ffff; font-size: 18px;">🎥 Videos educativos</h3>

  <p>
    <strong>Estructuras de Control: REPETITIVAS - Aprende a Usar …</strong> (n.d.). 
    <i>Estructuras de Control: REPETITIVAS – Aprende a Usar …</i> [Video]. 
    YouTube. 
    <a href="https://www.youtube.com/watch?v=-IULnVYa9dw" target="_blank" style="color: #66ccff; text-decoration: underline;">
      https://www.youtube.com/watch?v=-IULnVYa9dw
    </a>
  </p>

  <h3 style="color: #00ffff; font-size: 18px;">📘 Guías interactivas y materiales en línea</h3>

  <p>
    <strong>Estructuras de control iterativas — Guía de estudio (UNR)</strong>. (s. f.). 
    <i>Estructuras de control iterativas.</i> 
    Universidad Nacional de Rosario. 
    Recuperado de 
    <a href="https://mpru.github.io/introprog/estructuras-de-control.html" target="_blank" style="color: #66ccff; text-decoration: underline;">
      https://mpru.github.io/introprog/estructuras-de-control.html
    </a>
  </p>

  <p>
    <strong>Para: Estructura de control repetitiva (PSeIntLab)</strong>. (2024, noviembre 6). 
    <i>Para: Estructura de control repetitiva.</i> 
    Recuperado de 
    <a href="https://pseintlab.com/para-estructura-control-repetitiva/" target="_blank" style="color: #66ccff; text-decoration: underline;">
      https://pseintlab.com/para-estructura-control-repetitiva/
    </a>
  </p>

</section>

    
    
    `,
    ejemplos: `
    
    <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 15px; line-height: 1.6;">

  <h2 style="color: #00ffff; font-size: 18px;">🔁 Ejercicios</h2>

  <p>Las estructuras repetitivas permiten ejecutar un conjunto de instrucciones varias veces, ya sea hasta cumplir una condición o durante un número determinado de iteraciones. En <strong>PSeInt</strong>, los bucles más comunes son <strong>Mientras</strong>, <strong>Para</strong> y <strong>Repetir...Hasta Que</strong>, los cuales facilitan automatizar tareas y procesar grandes volúmenes de datos de manera sistemática.</p>

  <p>Dominar estas estructuras es esencial para comprender la lógica de control en programación, desarrollar pensamiento algorítmico y optimizar los procesos dentro de un programa.</p>

  <h3 style="color: #b6d5d5ff; font-size: 16px;">Ejercicio 1: Contador simple </h3>
  <p><strong>Planteamiento del problema:</strong> Diseñar un algoritmo que muestre los números del 1 al 5 en pantalla, uno por línea.</p>

  <pre style="background-color: #111; color:#b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo ContarHastaCinco
    Definir i Como Entero
    i <- 1
    Mientras i <= 5 Hacer
        Escribir "Número: ", i
        i <- i + 1
    FinMientras
FinAlgoritmo
  </pre>

  <p><em>Nota:</em> Se aplica una estructura <strong>Mientras</strong> para ejecutar el bloque repetidamente mientras la condición sea verdadera.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 2: Suma de los primeros N números</h3>
  <p><strong>Planteamiento del problema:</strong> Crear un algoritmo que lea un número N y calcule la suma de todos los números naturales desde 1 hasta N.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo SumaHastaN
    Definir N, i, suma Como Entero
    suma <- 0
    Escribir "Ingrese un número N:"
    Leer N
    Para i <- 1 Hasta N Hacer
        suma <- suma + i
    FinPara
    Escribir "La suma total es: ", suma
FinAlgoritmo
  </pre>

  <p><em>Nota:</em> Se utiliza el bucle <strong>Para</strong>, ideal cuando se conoce el número exacto de repeticiones.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 3: Tabla de multiplicar </h3>
  <p><strong>Planteamiento del problema:</strong> Diseñar un algoritmo que muestre la tabla de multiplicar de un número ingresado por el usuario (del 1 al 12).</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo TablaMultiplicar
    Definir n, i Como Entero
    Escribir "Ingrese un número:"
    Leer n
    Para i <- 1 Hasta 12 Hacer
        Escribir n, " x ", i, " = ", n * i
    FinPara
FinAlgoritmo
  </pre>

  <p><em>Nota:</em> El uso de un ciclo <strong>Para</strong> permite automatizar cálculos repetitivos, evitando escribir múltiples líneas similares.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 4: Promedio de notas </h3>
  <p><strong>Planteamiento del problema:</strong> Crear un algoritmo que permita ingresar una cantidad indefinida de notas y calcule el promedio. La lectura termina cuando el usuario ingresa un número negativo.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo PromedioNotas
    Definir nota, suma, contador Como Real
    suma <- 0
    contador <- 0
    Escribir "Ingrese notas (negativa para terminar):"
    Leer nota
    Mientras nota >= 0 Hacer
        suma <- suma + nota
        contador <- contador + 1
        Leer nota
    FinMientras
    Escribir "Promedio: ", suma / contador
FinAlgoritmo
  </pre>

  <p><em>Nota:</em> Se usa el patrón de <strong>bucle controlado por centinela</strong>, útil para procesar entradas indefinidas.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 5: Cálculo de factorial </h3>
  <p><strong>Planteamiento del problema:</strong> Diseñar un algoritmo que calcule el factorial de un número entero ingresado por el usuario.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo Factorial
    Definir n, i, fact Como Entero
    Escribir "Ingrese un número:"
    Leer n
    fact <- 1
    Para i <- 1 Hasta n Hacer
        fact <- fact * i
    FinPara
    Escribir "El factorial de ", n, " es ", fact
FinAlgoritmo
  </pre>

  <p><em>Nota:</em> El factorial se obtiene multiplicando todos los números enteros positivos hasta N. Este algoritmo combina <strong>acumuladores</strong> y bucles <strong>Para</strong>.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 6: Promedio y conteo de aprobados </h3>
  <p><strong>Planteamiento del problema:</strong> Crear un algoritmo que lea las calificaciones de varios estudiantes, calcule el promedio general y determine cuántos aprobaron (nota ≥ 11). Finaliza cuando el usuario ingrese 0 como número de estudiantes.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo AnalisisNotas
    Definir n, i, nota, aprobados, suma Como Real
    suma <- 0
    aprobados <- 0
    Escribir "Ingrese la cantidad de estudiantes:"
    Leer n
    Si n > 0 Entonces
        Para i <- 1 Hasta n Hacer
            Escribir "Nota del estudiante ", i, ":"
            Leer nota
            suma <- suma + nota
            Si nota >= 11 Entonces
                aprobados <- aprobados + 1
            FinSi
        FinPara
        Escribir "Promedio general: ", suma / n
        Escribir "Cantidad de aprobados: ", aprobados
    Sino
        Escribir "Cantidad inválida."
    FinSi
FinAlgoritmo
  </pre>

  <p><em>Nota:</em> Se combinan estructuras <strong>Para</strong> y <strong>Si...Entonces</strong>, demostrando el uso de <strong>control doble</strong> (repetición + decisión).</p>

</section>

    
    
    
    
    `,
    quiz: `<p><strong>Quiz:</strong> Preguntas sobre arreglos y vectores.</p>`
  },
  pseint5: {
    objetivo: `<p><strong>Objetivo:</strong> Implementar funciones y procedimientos en PSeInt.</p>`,
    teoria: `<p><strong>Teoría:</strong> </p>
    
    
    <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.6;">

  <h3 style="color: #00ffff; font-size: 20px;">1. ¿Qué es la programación estructurada?</h3>

  <p>
    En el contexto de la programación estructurada, uno de los pilares fundamentales es la <strong>modularidad</strong>, es decir, la capacidad de dividir un problema complejo en partes más pequeñas, independientes y comprensibles llamadas <em>módulos</em> o <em>subprogramas</em>. Dentro de este enfoque, los <strong>procedimientos</strong> y las <strong>funciones</strong> son las herramientas principales que permiten aplicar dicho principio de manera efectiva.
  </p>

  <h4 style="color: #00ffff;">- Definición y propósito</h4>
  <p>
    Una función o un procedimiento es un bloque de instrucciones que se define una sola vez y puede invocarse o llamarse múltiples veces desde diferentes puntos del programa. Su propósito principal es organizar el código, reducir la repetición, mejorar la claridad y facilitar el mantenimiento del software.
  </p>

  <p>
    De esta manera, el programador puede concentrarse en resolver problemas específicos dentro de subrutinas pequeñas, mientras que el programa principal se encarga de coordinar la ejecución general. Esto se alinea con el concepto de <em>divide y vencerás</em>, ampliamente utilizado en el diseño algorítmico.
  </p>

  <p>
    Según Pressman y Maxim (2020), “la modularidad permite gestionar la complejidad al dividir un sistema en componentes que pueden desarrollarse, probarse y entenderse de manera independiente” (p. 78).
  </p>

  <h4 style="color: #00ffff;">- Funciones y procedimientos en PSeInt</h4>
  <p>
    En el entorno educativo de <strong>PSeInt</strong>, las funciones y los procedimientos ayudan a los estudiantes a comprender de forma práctica cómo dividir un algoritmo en partes más manejables y con responsabilidades bien definidas.
  </p>

  <p>
    Un <strong>procedimiento</strong> (denominado en PSeInt como <code>SubProceso</code>) realiza una acción concreta, como mostrar un mensaje, leer un valor o ejecutar una serie de pasos, sin devolver un resultado directo.
  </p>

  <p>
    Una <strong>función</strong> (definida con la palabra reservada <code>Funcion</code>) realiza un cálculo o procesamiento de datos y devuelve un valor a la parte del programa que la llamó, utilizando la palabra clave <code>Retornar</code> o una asignación al nombre de la función.
  </p>

  <h4 style="color: #00ffff;">- Importancia pedagógica y conceptual</h4>
  <p>
    Desde el punto de vista didáctico, enseñar funciones y procedimientos en pseudocódigo promueve una comprensión progresiva del pensamiento computacional.
  </p>

  <blockquote style="border-left: 3px solid #00ffff; padding-left: 12px; margin-left: 0;">
    “La modularización del código, mediante funciones y procedimientos, permite que los estudiantes desarrollen habilidades cognitivas superiores como la planificación, la abstracción y la resolución jerárquica de problemas.”
    — (Rodríguez & Torres, 2023, p. 52)
  </blockquote>

  <h4 style="color: #00ffff;">- Ejemplo conceptual</h4>

  <div style="background-color: #111; border: 1px solid #333; border-radius: 8px; padding: 12px; font-family: monospace; white-space: pre-wrap; margin-top: 10px;">
Funcion area <- CalcularArea(base, altura)
    area <- base * altura
FinFuncion

SubProceso MostrarResultado(a)
    Escribir "El área del rectángulo es: ", a
FinSubProceso

Algoritmo Principal
    Definir b, h, resultado Como Real
    Escribir "Ingrese base:"
    Leer b
    Escribir "Ingrese altura:"
    Leer h
    resultado <- CalcularArea(b, h)
    Llamar MostrarResultado(resultado)
FinAlgoritmo
  </div>

  <p>
    Este ejemplo evidencia cómo los subprogramas permiten organizar el algoritmo en partes independientes:
    <br>• <strong>CalcularArea</strong> → realiza un cálculo matemático (función).
    <br>• <strong>MostrarResultado</strong> → presenta la información al usuario (procedimiento).
    <br>• <strong>Principal</strong> → coordina el flujo de ejecución.
  </p>

  <h4 style="color: #00ffff;">- Ventajas de usar funciones y procedimientos</h4>

  <table style="border-collapse: collapse; width: 100%; margin-top: 8px;">
    <tr style="background-color: #111;">
      <th style="border: 1px solid #333; padding: 6px;">Ventaja</th>
      <th style="border: 1px solid #333; padding: 6px;">Descripción</th>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Reutilización del código</td>
      <td style="border: 1px solid #333; padding: 6px;">Un subprograma puede usarse varias veces sin volver a escribir el mismo bloque.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Mantenimiento más simple</td>
      <td style="border: 1px solid #333; padding: 6px;">Si hay un error, solo se corrige en el subprograma, no en todo el programa.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Claridad y legibilidad</td>
      <td style="border: 1px solid #333; padding: 6px;">El programa principal se vuelve más corto y fácil de entender.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Trabajo en equipo</td>
      <td style="border: 1px solid #333; padding: 6px;">Cada integrante puede desarrollar una función o procedimiento distinto.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Pruebas unitarias</td>
      <td style="border: 1px solid #333; padding: 6px;">Se pueden probar funciones por separado antes de integrarlas.</td>
    </tr>
  </table>

  <h4 style="color: #00ffff;">- Analogía práctica</h4>
  <p>
    Podemos imaginar un programa como una <strong>fábrica</strong>:
    <br>• Cada procedimiento sería una máquina que realiza una tarea específica (por ejemplo, ensamblar una pieza).  
    <br>• Cada función sería una máquina que produce un resultado (por ejemplo, calcular el peso final del producto).  
    <br>• El programa principal sería el supervisor que coordina el trabajo de todas las máquinas para obtener el producto final.
  </p>

  <p>
    Las funciones y procedimientos constituyen un paso clave entre la programación lineal y la programación estructurada modular. Permiten diseñar algoritmos escalables, comprensibles y reutilizables, lo que se traduce en mejores prácticas de programación y en una comprensión más profunda de la lógica computacional.
  </p>

  <p>
    Según Sierra (2021), “la enseñanza de subprogramas en pseudocódigo representa un punto de inflexión en la formación de los programadores, pues introduce de forma temprana el pensamiento modular y el diseño estructurado de algoritmos”.
  </p>

</section>

<section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.6;">

  <h3 style="color: #00ffff; font-size: 20px;">2. Sintaxis en PSeInt</h3>

  <p>
    En <strong>PSeInt</strong>, tanto las funciones como los procedimientos se definen mediante una sintaxis sencilla y comprensible para los principiantes. Esto facilita al estudiante centrarse en la lógica algorítmica más que en la complejidad de la sintaxis propia de los lenguajes de programación reales.
  </p>

  <h4 style="color: #00ffff;">- Procedimiento</h4>
  <p>
    El procedimiento (<code>SubProceso</code>) ejecuta un conjunto de acciones, pero no devuelve un valor.  
    Su estructura general es la siguiente:
  </p>

  <div style="background-color: #111; border: 1px solid #333; border-radius: 8px; padding: 12px; font-family: monospace; white-space: pre-wrap;">
SubProceso &lt;nombre&gt; (&lt;parámetros&gt;)
    &lt;instrucciones&gt;
FinSubProceso
  </div>

  <p><strong>Ejemplo:</strong></p>
  <div style="background-color: #111; border: 1px solid #333; border-radius: 8px; padding: 12px; font-family: monospace; white-space: pre-wrap;">
SubProceso MostrarMensaje(nombre)
    Escribir "Bienvenido, ", nombre
FinSubProceso
  </div>

  <h4 style="color: #00ffff;">- Función</h4>
  <p>
    Una función realiza un cálculo y devuelve un valor.  
    En PSeInt, se declara indicando el tipo de valor que retornará y la palabra clave <code>Retornar</code> o asignando el valor a la variable con el mismo nombre que la función.
  </p>

  <div style="background-color: #111; border: 1px solid #333; border-radius: 8px; padding: 12px; font-family: monospace; white-space: pre-wrap;">
Funcion &lt;tipo&gt; &lt;- &lt;nombre&gt; (&lt;parámetros&gt;)
    &lt;instrucciones&gt;
    &lt;tipo&gt; &lt;- &lt;valor_a_devolver&gt;
FinFuncion
  </div>

  <p><strong>Ejemplo:</strong></p>
  <div style="background-color: #111; border: 1px solid #333; border-radius: 8px; padding: 12px; font-family: monospace; white-space: pre-wrap;">
Funcion area &lt;- CalcularArea(base, altura)
    area &lt;- base * altura
FinFuncion
  </div>

  <p> La variable <strong>area</strong> es el resultado que se devuelve al programa principal.</p>

  <h3 style="color: #00ffff; font-size: 20px;">3. Parámetros: paso por valor y paso por referencia</h3>

  <p>Los parámetros permiten enviar información a los subprogramas. En PSeInt, pueden transmitirse de dos maneras:</p>

  <h4 style="color: #00ffff;">- Paso por valor</h4>
  <p>
    Se envía una copia del valor original.  
    Las modificaciones dentro del subprograma no afectan la variable original.  
    Se usa cuando el subprograma solo necesita leer el valor.
  </p>

  <div style="background-color: #111; border: 1px solid #333; border-radius: 8px; padding: 12px; font-family: monospace; white-space: pre-wrap;">
SubProceso MostrarCuadrado(num)
    Escribir "El cuadrado es: ", num * num
FinSubProceso
  </div>

  <h4 style="color: #00ffff;">- Paso por referencia</h4>
  <p>
    Se envía la dirección de memoria de la variable.  
    Las modificaciones dentro del subprograma afectan el valor original.  
    En PSeInt se declara con la palabra clave <code>Ref</code>.
  </p>

  <div style="background-color: #111; border: 1px solid #333; border-radius: 8px; padding: 12px; font-family: monospace; white-space: pre-wrap;">
SubProceso Incrementar(Ref num)
    num &lt;- num + 1
FinSubProceso

Algoritmo EjemploRef
    Definir x Como Entero
    x &lt;- 10
    Llamar Incrementar(x)
    Escribir "El valor incrementado es: ", x
FinAlgoritmo
  </div>

  <p>
    <strong>Explicación:</strong>  
    El parámetro <code>Ref num</code> permite que el procedimiento modifique directamente la variable <strong>x</strong>.  
    Si no se usara <code>Ref</code>, el valor de <strong>x</strong> seguiría siendo 10.
  </p>

  <h4 style="color: #00ffff;">Resumen comparativo</h4>
  <table style="border-collapse: collapse; width: 100%;">
    <tr style="background-color: #111;">
      <th style="border: 1px solid #333; padding: 6px;">Tipo de paso</th>
      <th style="border: 1px solid #333; padding: 6px;">Qué envía</th>
      <th style="border: 1px solid #333; padding: 6px;">¿Modifica la variable original?</th>
      <th style="border: 1px solid #333; padding: 6px;">Uso típico</th>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Por valor</td>
      <td style="border: 1px solid #333; padding: 6px;">Copia del valor</td>
      <td style="border: 1px solid #333; padding: 6px;">❌ No</td>
      <td style="border: 1px solid #333; padding: 6px;">Lectura o cálculos temporales</td>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Por referencia</td>
      <td style="border: 1px solid #333; padding: 6px;">Dirección de memoria</td>
      <td style="border: 1px solid #333; padding: 6px;">✅ Sí</td>
      <td style="border: 1px solid #333; padding: 6px;">Actualización o intercambio de valores</td>
    </tr>
  </table>

  <h3 style="color: #00ffff; font-size: 20px;">4. Ventajas de modularizar</h3>

  <p>
    La modularización es una estrategia fundamental en la enseñanza de la programación, ya que permite descomponer un problema grande en partes más simples y comprensibles.
  </p>

  <h4 style="color: #00ffff;">- Principales beneficios</h4>
  <table style="border-collapse: collapse; width: 100%;">
    <tr style="background-color: #111;">
      <th style="border: 1px solid #333; padding: 6px;">Ventaja</th>
      <th style="border: 1px solid #333; padding: 6px;">Descripción</th>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Claridad</td>
      <td style="border: 1px solid #333; padding: 6px;">Divide el programa en secciones comprensibles y manejables.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Reutilización</td>
      <td style="border: 1px solid #333; padding: 6px;">Un subprograma puede usarse en múltiples algoritmos.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Facilita la depuración</td>
      <td style="border: 1px solid #333; padding: 6px;">Los errores se localizan más fácilmente en un módulo aislado.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Pensamiento algorítmico estructurado</td>
      <td style="border: 1px solid #333; padding: 6px;">Fomenta la planificación jerárquica del código.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Trabajo colaborativo</td>
      <td style="border: 1px solid #333; padding: 6px;">Permite dividir tareas entre diferentes miembros del equipo.</td>
    </tr>
  </table>

  <blockquote style="border-left: 3px solid #00ffff; padding-left: 12px; margin-top: 12px;">
    “La modularización en pseudocódigo facilita la comprensión del flujo lógico y promueve el desarrollo del pensamiento computacional, al enseñar a los estudiantes a planificar antes de codificar.”  
    — (Martínez & López, 2022)
  </blockquote>

  <h3 style="color: #00ffff; font-size: 20px;">5. Ejercicio</h3>
  <p>
    <strong>Enunciado:</strong>  
    Diseñar un programa que calcule el promedio de N notas usando una función, y determine si el estudiante aprueba o desaprueba usando un procedimiento.
  </p>

  <p><strong>Solución en PSeInt:</strong></p>

  <div style="background-color: #111; border: 1px solid #333; border-radius: 8px; padding: 12px; font-family: monospace; white-space: pre-wrap;">
Funcion prom &lt;- CalcularPromedio(n)
    Definir i, suma, nota Como Real
    suma &lt;- 0
    Para i &lt;- 1 Hasta n Hacer
        Escribir "Ingrese nota ", i, ":"
        Leer nota
        suma &lt;- suma + nota
    FinPara
    prom &lt;- suma / n
FinFuncion

SubProceso Evaluar(prom)
    Si prom &gt;= 60 Entonces
        Escribir "Aprobado con promedio: ", prom
    SiNo
        Escribir "Desaprobado con promedio: ", prom
    FinSi
FinSubProceso

Algoritmo Evaluacion
    Definir n Como Entero
    Definir promedio Como Real
    Escribir "¿Cuántas notas ingresará?"
    Leer n
    promedio &lt;- CalcularPromedio(n)
    Llamar Evaluar(promedio)
FinAlgoritmo
  </div>

  <h4 style="color: #00ffff;">Explicación paso a paso</h4>
  <ul>
    <li><strong>Función CalcularPromedio:</strong> Lee las notas, las suma y calcula el promedio.</li>
    <li><strong>Procedimiento Evaluar:</strong> Recibe el promedio y determina si el estudiante aprueba (≥ 60) o no.</li>
    <li><strong>Programa principal (Evaluacion):</strong> Pide el número de notas, llama a la función y luego al procedimiento.</li>
  </ul>

  <h4 style="color: #00ffff;">Salida esperada</h4>
  <div style="background-color: #111; border: 1px solid #333; border-radius: 8px; padding: 12px; font-family: monospace; white-space: pre-wrap;">
¿Cuántas notas ingresará?
3
Ingrese nota 1:
80
Ingrese nota 2:
70
Ingrese nota 3:
50
Aprobado con promedio: 66.67
  </div>

  <h3 style="color: #00ffff; font-size: 20px;">6. Errores comunes y estrategias didácticas</h3>
  <table style="border-collapse: collapse; width: 100%;">
    <tr style="background-color: #111;">
      <th style="border: 1px solid #333; padding: 6px;">Error común</th>
      <th style="border: 1px solid #333; padding: 6px;">Consejo pedagógico</th>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">No devolver valor en una función</td>
      <td style="border: 1px solid #333; padding: 6px;">Reforzar el uso de <code>Retornar</code> o asignar el valor a la variable de salida.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Llamar una función sin capturar su valor</td>
      <td style="border: 1px solid #333; padding: 6px;">Explicar la diferencia entre invocar y asignar el resultado.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Confundir función con procedimiento</td>
      <td style="border: 1px solid #333; padding: 6px;">Usar ejemplos comparativos y análisis en clase.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Parámetros no inicializados</td>
      <td style="border: 1px solid #333; padding: 6px;">Enseñar la importancia de inicializar variables antes de pasarlas.</td>
    </tr>
    <tr>
      <td style="border: 1px solid #333; padding: 6px;">Olvidar el tipo de retorno</td>
      <td style="border: 1px solid #333; padding: 6px;">Resaltar la sintaxis y el uso correcto de tipos de datos.</td>
    </tr>
  </table>

</section>

<section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.6;">

  <h3 style="color: #00ffff; font-size: 20px;">📘 Guías interactivas y materiales en línea</h3>

  <p>
    <strong>Codersfree.</strong> (s.f.). <em>Introducción a las funciones en PSeInt: Potenciando la modularidad y reutilización de código.</em>  
    Recuperado de  
    <a href="https://codersfree.com/posts/introduccion-a-las-funciones-en-pseint" target="_blank" style="color: #00ffff; text-decoration: none;">https://codersfree.com/posts/introduccion-a-las-funciones-en-pseint</a>
  </p>

  <p>
    <strong>Herrera, M.</strong> (s.f.). <em>Tutorial PSeInt: aprender a escribir pseudocódigo.</em>  
    Recuperado de  
    <a href="https://mcherrera.dev/tutoriales/programación/tutorial-pseint/" target="_blank" style="color: #00ffff; text-decoration: none;">https://mcherrera.dev/tutoriales/programación/tutorial-pseint/</a>
  </p>

  <p>
    <strong>PSeInt.</strong> (s.f.). <em>Ejemplos de algoritmos y prácticas guiadas.</em>  
    Recuperado de  
    <a href="https://pseint.sourceforge.net/index.php?page=ejemplos.php" target="_blank" style="color: #00ffff; text-decoration: none;">https://pseint.sourceforge.net/index.php?page=ejemplos.php</a>
  </p>

  <h3 style="color: #00ffff; font-size: 20px; margin-top: 30px;">🎥 Videos educativos</h3>

  <p>
    <strong>Programación Fácil.</strong> (2023). <em>Procedimientos y funciones en PSeInt – uso de parámetros por valor</em> [Video].  
    Recuperado de  
    <a href="https://www.youtube.com/watch?v=B-iuVThAgvA" target="_blank" style="color: #00ffff; text-decoration: none;">https://www.youtube.com/watch?v=B-iuVThAgvA</a>
  </p>

</section>


`,
    ejemplos: `<section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 15px; line-height: 1.6;">

  <h2 style="color: #00ffff; font-size: 18px;"> Ejercicios prácticos</h2>

  <p>El uso de funciones y procedimientos permite estructurar los algoritmos de forma modular, separando las tareas en partes más simples y reutilizables. En <strong>PSeInt</strong>, esta técnica ayuda a los estudiantes a comprender el flujo de ejecución entre subprogramas y el programa principal, fomentando la claridad y la reutilización del código.</p>

  <p>Los siguientes ejercicios muestran cómo aplicar funciones y procedimientos en distintos niveles de complejidad, desde cálculos simples hasta el uso combinado de parámetros y retorno de valores.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 1: Mostrar saludo personalizado </h3>
  <p><strong>Planteamiento del problema:</strong> Crear un procedimiento que reciba el nombre de un usuario y muestre un saludo personalizado.</p>

  <pre style="background-color: #111; color: #00ffff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
SubProceso Saludar(nombre)
    Escribir "¡Hola, ", nombre, "! Bienvenido al sistema."
FinSubProceso

Algoritmo Principal
    Definir nom Como Cadena
    Escribir "Ingrese su nombre:"
    Leer nom
    Llamar Saludar(nom)
FinAlgoritmo
  </pre>

  <p><em>Nota:</em> Se introduce el uso de un procedimiento simple con parámetro, reforzando el concepto de modularidad básica.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 2: Calcular el cuadrado de un número </h3>
  <p><strong>Planteamiento del problema:</strong> Diseñar una función que reciba un número y devuelva su cuadrado. El programa principal debe mostrar el resultado.</p>

  <pre style="background-color: #111; color: #00ffff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Funcion resultado <- Cuadrado(num)
    resultado <- num * num
FinFuncion

Algoritmo Principal
    Definir x, r Como Real
    Escribir "Ingrese un número:"
    Leer x
    r <- Cuadrado(x)
    Escribir "El cuadrado es: ", r
FinAlgoritmo
  </pre>

  <p><em>Nota:</em> Se aplica una función con retorno de valor, mostrando la diferencia entre función y procedimiento.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 3: Suma de dos números usando subprogramas </h3>
  <p><strong>Planteamiento del problema:</strong> Crear una función que sume dos números y un procedimiento que muestre el resultado.</p>

  <pre style="background-color: #111; color: #00ffff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Funcion suma <- Sumar(a, b)
    suma <- a + b
FinFuncion

SubProceso MostrarResultado(total)
    Escribir "La suma total es: ", total
FinSubProceso

Algoritmo Principal
    Definir n1, n2, res Como Real
    Escribir "Ingrese dos números:"
    Leer n1, n2
    res <- Sumar(n1, n2)
    Llamar MostrarResultado(res)
FinAlgoritmo
  </pre>

  <p><em>Nota:</em> Este ejercicio integra una función y un procedimiento, destacando cómo pueden interactuar dentro del flujo principal.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 4: Determinar si un número es par o impar </h3>
  <p><strong>Planteamiento del problema:</strong> Diseñar una función que verifique si un número es par y un procedimiento que muestre el resultado.</p>

  <pre style="background-color: #111; color: #00ffff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Funcion esPar <- VerificarPar(num)
    Si num MOD 2 = 0 Entonces
        esPar <- Verdadero
    Sino
        esPar <- Falso
    FinSi
FinFuncion

SubProceso MostrarResultado(num, esPar)
    Si esPar Entonces
        Escribir num, " es un número par."
    Sino
        Escribir num, " es un número impar."
    FinSi
FinSubProceso

Algoritmo Principal
    Definir n Como Entero
    Definir resultado Como Logico
    Escribir "Ingrese un número:"
    Leer n
    resultado <- VerificarPar(n)
    Llamar MostrarResultado(n, resultado)
FinAlgoritmo
  </pre>

  <p><em>Nota:</em> Combina retorno booleano con un procedimiento para la salida, aplicando lógica condicional y modularidad.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 5: Intercambio de valores con parámetros por referencia </h3>
  <p><strong>Planteamiento del problema:</strong> Crear un procedimiento que intercambie los valores de dos variables usando el paso por referencia.</p>

  <pre style="background-color: #111; color: #00ffff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
SubProceso Intercambiar(Ref a, Ref b)
    Definir temp Como Real
    temp <- a
    a <- b
    b <- temp
FinSubProceso

Algoritmo Principal
    Definir x, y Como Real
    Escribir "Ingrese dos valores:"
    Leer x, y
    Escribir "Antes del intercambio: x = ", x, ", y = ", y
    Llamar Intercambiar(x, y)
    Escribir "Después del intercambio: x = ", x, ", y = ", y
FinAlgoritmo
  </pre>

  <p><em>Nota:</em> Este ejemplo introduce el paso de parámetros por referencia (<strong>Ref</strong>), mostrando cómo un subprograma puede modificar variables externas.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 6: Cálculo de promedio y evaluación de notas </h3>
  <p><strong>Planteamiento del problema:</strong> Implementar una función que calcule el promedio de N notas y un procedimiento que determine si el estudiante aprueba (≥11) o desaprueba.</p>

  <pre style="background-color: #111; color: #00ffff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Funcion prom <- CalcularPromedio(n)
    Definir i, nota, suma Como Real
    suma <- 0
    Para i <- 1 Hasta n Hacer
        Escribir "Ingrese nota ", i, ":"
        Leer nota
        suma <- suma + nota
    FinPara
    prom <- suma / n
FinFuncion

SubProceso Evaluar(prom)
    Si prom >= 11 Entonces
        Escribir "Aprobado con promedio: ", prom
    Sino
        Escribir "Desaprobado con promedio: ", prom
    FinSi
FinSubProceso

Algoritmo Evaluacion
    Definir n Como Entero
    Definir promedio Como Real
    Escribir "¿Cuántas notas ingresará?"
    Leer n
    promedio <- CalcularPromedio(n)
    Llamar Evaluar(promedio)
FinAlgoritmo
  </pre>

  <p><em>Nota:</em> Se combinan funciones, procedimientos, bucles y condiciones, consolidando el uso modular y la interacción entre subprogramas.</p>

</section>
`,
    quiz: `<p><strong>Quiz:</strong> Evaluación sobre funciones y procedimientos.</p>`
  },
  pseint6: {
    objetivo: `<p><strong>Objetivo:</strong> </p>
    
    <p>   
✔️ Aplicar estructuras condicionales y repetitivas de manera combinada para resolver problemas prácticos en PSeInt.<br>
✔️ Analizar y procesar conjuntos de datos mediante ciclos controlados y decisiones lógicas.<br>
✔️ Desarrollar algoritmos eficientes que incluyan validaciones, cálculos y generación de resultados automáticos.<br>
    
   </p> 
    
    
    
    
    
    `,
    teoria: `<p><strong>Teoría:</strong></p>
    
    
    <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 15px; line-height: 1.6;">

  <h2 style="color: #00ffff; font-size: 18px;"> 1. Diseño de menús interactivos en PSeInt</h2>

  <p>Un menú interactivo es una estructura de control que permite al usuario seleccionar entre varias opciones y ejecutar diferentes acciones según su elección. Es una herramienta fundamental en la programación estructurada, ya que organiza las funcionalidades del programa y mejora la experiencia del usuario.</p>

  <p>En <strong>PSeInt</strong>, los menús se implementan combinando estructuras condicionales y repetitivas. Por ejemplo, se puede utilizar un bucle <strong>Repetir…Hasta Que</strong> o <strong>Mientras…Hacer</strong> para mantener activo el menú hasta que el usuario seleccione la opción de salir, y una estructura <strong>Segun…FinSegun</strong> o <strong>Si…Entonces…Sino</strong> para decidir qué acción realizar según la opción elegida.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ventajas</h3>
  <ul>
    <li>Mejora la interactividad y la organización del programa.</li>
    <li>Facilita la comprensión del flujo del algoritmo.</li>
    <li>Permite reutilizar código en diferentes partes del programa.</li>
    <li>Favorece la creación de programas modulares.</li>
  </ul>

  <h3 style="color: #00ffff; font-size: 16px;">Estructura general</h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo MenuInteractivo
    Definir opcion Como Entero
    Repetir
        Escribir "===== MENÚ PRINCIPAL ====="
        Escribir "1. Opción 1"
        Escribir "2. Opción 2"
        Escribir "3. Salir"
        Escribir "Seleccione una opción:"
        Leer opcion

        Segun opcion Hacer
            Caso 1:
                // Acción para la opción 1
            Caso 2:
                // Acción para la opción 2
            Caso 3:
                Escribir "Saliendo del programa..."
            De Otro Modo:
                Escribir "Opción no válida. Intente nuevamente."
        FinSegun

    Hasta Que opcion = 3
FinAlgoritmo
  </pre>

  <h3 style="color: #00ffff; font-size: 16px;">Ejemplo general</h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo MenuPrincipal
    Definir opcion, a, b Como Real
    Repetir
        Escribir "===== MENÚ PRINCIPAL ====="
        Escribir "1. Sumar"
        Escribir "2. Restar"
        Escribir "3. Salir"
        Escribir "Seleccione una opción:"
        Leer opcion

        Segun opcion Hacer
            Caso 1:
                Escribir "Ingrese dos números:"
                Leer a, b
                Escribir "Resultado: ", a + b
            Caso 2:
                Escribir "Ingrese dos números:"
                Leer a, b
                Escribir "Resultado: ", a - b
            Caso 3:
                Escribir "Saliendo del programa..."
            De Otro Modo:
                Escribir "Opción no válida. Intente nuevamente."
        FinSegun
    Hasta Que opcion = 3
FinAlgoritmo
  </pre>

  <p>En este ejemplo se utiliza un bucle <strong>Repetir…Hasta Que</strong> para mantener activo el menú, y la estructura <strong>Segun</strong> para ejecutar la acción correspondiente según la opción seleccionada.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 1: Menú básico de mensajes </h3>

  <p><strong>Planteamiento del problema:</strong> Crear un programa que muestre un menú con tres opciones: mostrar un mensaje de bienvenida, de despedida o salir.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo MenuMensajes
    Definir opcion Como Entero
    Repetir
        Escribir "1. Bienvenida"
        Escribir "2. Despedida"
        Escribir "3. Salir"
        Escribir "Seleccione una opción:"
        Leer opcion

        Segun opcion Hacer
            Caso 1:
                Escribir "Bienvenido al sistema."
            Caso 2:
                Escribir "Gracias por usar el programa."
            Caso 3:
                Escribir "Fin del programa."
            De Otro Modo:
                Escribir "Opción inválida."
        FinSegun
    Hasta Que opcion = 3
FinAlgoritmo
  </pre>

  <p><em>Conceptos aplicados:</em> repetición controlada, selección múltiple, salida condicional.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 2: Calculadora básica </h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo CalculadoraBasica
    Definir opcion Como Entero
    Definir a, b Como Real
    Repetir
        Escribir "===== CALCULADORA ====="
        Escribir "1. Sumar"
        Escribir "2. Restar"
        Escribir "3. Multiplicar"
        Escribir "4. Dividir"
        Escribir "5. Salir"
        Escribir "Seleccione una opción:"
        Leer opcion

        Segun opcion Hacer
            Caso 1:
                Escribir "Ingrese dos números:"
                Leer a, b
                Escribir "Suma = ", a + b
            Caso 2:
                Escribir "Ingrese dos números:"
                Leer a, b
                Escribir "Resta = ", a - b
            Caso 3:
                Escribir "Ingrese dos números:"
                Leer a, b
                Escribir "Multiplicación = ", a * b
            Caso 4:
                Escribir "Ingrese dos números:"
                Leer a, b
                Si b <> 0 Entonces
                    Escribir "División = ", a / b
                Sino
                    Escribir "Error: no se puede dividir entre cero."
                FinSi
            Caso 5:
                Escribir "Saliendo..."
            De Otro Modo:
                Escribir "Opción no válida."
        FinSegun
    Hasta Que opcion = 5
FinAlgoritmo
  </pre>

  <p><em>Conceptos aplicados:</em> condicionales, operadores aritméticos, control de flujo.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 3: Conversión de unidades </h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo ConversionUnidades
    Definir opcion Como Entero
    Definir c, k, f, m Como Real
    Repetir
        Escribir "1. Celsius a Fahrenheit"
        Escribir "2. Kilómetros a Millas"
        Escribir "3. Salir"
        Escribir "Seleccione una opción:"
        Leer opcion

        Segun opcion Hacer
            Caso 1:
                Escribir "Ingrese temperatura en °C:"
                Leer c
                f <- (c * 9/5) + 32
                Escribir "Temperatura en °F: ", f
            Caso 2:
                Escribir "Ingrese distancia en kilómetros:"
                Leer k
                m <- k * 0.621371
                Escribir "Distancia en millas: ", m
            Caso 3:
                Escribir "Fin del programa."
            De Otro Modo:
                Escribir "Opción inválida."
        FinSegun
    Hasta Que opcion = 3
FinAlgoritmo
  </pre>

  <p><em>Conceptos aplicados:</em> operaciones aritméticas, uso de variables reales.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 4: Menú con contador </h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo MenuContador
    Definir opcion, num, suma, contador Como Entero
    suma <- 0
    contador <- 0
    Repetir
        Escribir "1. Ingresar número"
        Escribir "2. Mostrar cantidad ingresada"
        Escribir "3. Mostrar suma acumulada"
        Escribir "4. Salir"
        Leer opcion

        Segun opcion Hacer
            Caso 1:
                Escribir "Ingrese un número:"
                Leer num
                suma <- suma + num
                contador <- contador + 1
            Caso 2:
                Escribir "Cantidad de números ingresados: ", contador
            Caso 3:
                Escribir "Suma acumulada: ", suma
            Caso 4:
                Escribir "Fin del programa."
            De Otro Modo:
                Escribir "Opción no válida."
        FinSegun
    Hasta Que opcion = 4
FinAlgoritmo
  </pre>

  <p><em>Conceptos aplicados:</em> acumuladores, contadores, repetición controlada.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 5: Sistema de notas </h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo SistemaNotas
    Definir opcion, contador, aprobados Como Entero
    Definir nota, suma, promedio Como Real
    suma <- 0
    contador <- 0
    aprobados <- 0

    Repetir
        Escribir "1. Registrar nota"
        Escribir "2. Mostrar promedio general"
        Escribir "3. Mostrar cantidad de aprobados"
        Escribir "4. Salir"
        Leer opcion

        Segun opcion Hacer
            Caso 1:
                Escribir "Ingrese nota:"
                Leer nota
                suma <- suma + nota
                contador <- contador + 1
                Si nota >= 11 Entonces
                    aprobados <- aprobados + 1
                FinSi
            Caso 2:
                Si contador > 0 Entonces
                    promedio <- suma / contador
                    Escribir "Promedio general: ", promedio
                Sino
                    Escribir "No hay notas registradas."
                FinSi
            Caso 3:
                Escribir "Cantidad de aprobados: ", aprobados
            Caso 4:
                Escribir "Saliendo del sistema..."
            De Otro Modo:
                Escribir "Opción inválida."
        FinSegun
    Hasta Que opcion = 4
FinAlgoritmo
  </pre>

  <p><em>Conceptos aplicados:</em> cálculos promedios, contadores, condicionales anidados.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 6: Sistema de inventario básico </h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo InventarioBasico
    Definir opcion, i, n Como Entero
    Definir nombre Como Cadena
    Definir precio, total Como Real
    total <- 0
    n <- 0
    Dimension productos[100], precios[100]

    Repetir
        Escribir "1. Registrar producto"
        Escribir "2. Mostrar lista de productos"
        Escribir "3. Calcular total"
        Escribir "4. Salir"
        Leer opcion

        Segun opcion Hacer
            Caso 1:
                Escribir "Ingrese nombre del producto:"
                Leer productos[n]
                Escribir "Ingrese precio:"
                Leer precios[n]
                total <- total + precios[n]
                n <- n + 1
            Caso 2:
                Si n > 0 Entonces
                    Para i <- 0 Hasta n-1 Hacer
                        Escribir productos[i], " - S/.", precios[i]
                    FinPara
                Sino
                    Escribir "No hay productos registrados."
                FinSi
            Caso 3:
                Escribir "Total acumulado: S/.", total
            Caso 4:
                Escribir "Fin del sistema."
            De Otro Modo:
                Escribir "Opción no válida."
        FinSegun
    Hasta Que opcion = 4
FinAlgoritmo
  </pre>

  <p>Los menús interactivos representan una de las aplicaciones más prácticas de la programación estructurada en <strong>PSeInt</strong>. Permiten integrar conocimientos de variables, operadores, estructuras condicionales y repetitivas, fomentando la organización modular y la reutilización del código.</p>

</section>
<section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 15px; line-height: 1.6;">

  <h2 style="color: #00ffff; font-size: 18px;"> 2. Resolución de problemas cotidianos con algoritmos</h2>

  <p>La resolución de problemas mediante algoritmos es una de las competencias fundamentales en la programación. Un algoritmo es una secuencia ordenada de pasos lógicos que permiten solucionar un problema determinado.</p>

  <p>En la vida cotidiana, muchos procesos pueden representarse algorítmicamente: calcular promedios, generar facturas, gestionar inventarios, determinar descuentos, calcular consumo de energía, entre otros.</p>

  <p>Para desarrollar un algoritmo que solucione un problema real, se siguen las siguientes etapas:</p>
  <ul>
    <li><strong>Análisis del problema:</strong> identificar qué se necesita resolver.</li>
    <li><strong>Definición de entradas y salidas:</strong> determinar qué datos se necesitan (entradas) y qué resultados se deben obtener (salidas).</li>
    <li><strong>Diseño del procedimiento:</strong> planificar los pasos o instrucciones que se seguirán para procesar los datos.</li>
    <li><strong>Implementación:</strong> traducir el algoritmo a pseudocódigo o a un lenguaje de programación, como PSeInt.</li>
    <li><strong>Prueba y validación:</strong> verificar que el algoritmo produce resultados correctos para distintos casos.</li>
  </ul>

  <p>Es esencial incluir validaciones de datos y mensajes claros que guíen al usuario y garanticen resultados confiables.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejemplo introductorio</h3>
  <p><strong>Problema:</strong> Calcular el monto total a pagar por artículos comprados.  
  Se debe ingresar la cantidad de artículos y el precio unitario, luego calcular el total = cantidad × precio.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo CalculoCompra
    Definir cantidad Como Entero
    Definir precio, total Como Real
    Escribir "Ingrese cantidad de artículos:"
    Leer cantidad
    Escribir "Ingrese precio unitario:"
    Leer precio
    total <- cantidad * precio
    Escribir "Total a pagar: S/ ", total
FinAlgoritmo
  </pre>

  <p><em>Explicación:</em> El algoritmo solicita los datos de entrada (cantidad y precio), realiza la operación aritmética correspondiente y presenta el resultado de salida.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 1. Cálculo de promedio de notas (Nivel básico)</h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo PromedioNotas
    Definir n1, n2, n3, promedio Como Real
    Escribir "Ingrese tres notas:"
    Leer n1, n2, n3
    promedio <- (n1 + n2 + n3) / 3
    Escribir "Promedio: ", promedio
    Si promedio >= 11 Entonces
        Escribir "Estado: Aprobado"
    Sino
        Escribir "Estado: Desaprobado"
    FinSi
FinAlgoritmo
  </pre>

  <p><em>Conceptos aplicados:</em> operaciones aritméticas, estructura condicional simple.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 2. Cálculo de descuento en una compra (Nivel básico-intermedio)</h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo DescuentoCompra
    Definir monto, total Como Real
    Escribir "Ingrese el monto de la compra:"
    Leer monto
    Si monto >= 100 Entonces
        total <- monto - (monto * 0.10)
    Sino
        total <- monto
    FinSi
    Escribir "Monto final a pagar: S/ ", total
FinAlgoritmo
  </pre>

  <p><em>Conceptos aplicados:</em> estructura condicional, operadores relacionales.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 3. Cálculo del consumo eléctrico </h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo ConsumoElectrico
    Definir consumo, monto Como Real
    Escribir "Ingrese consumo en kWh:"
    Leer consumo
    monto <- consumo * 0.85
    Escribir "Monto a pagar: S/ ", monto
FinAlgoritmo
  </pre>

  <p><em>Conceptos aplicados:</em> multiplicación directa, uso de constantes.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 4. Cálculo del índice de masa corporal (IMC) </h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo CalculoIMC
    Definir peso, altura, imc Como Real
    Escribir "Ingrese su peso (kg):"
    Leer peso
    Escribir "Ingrese su altura (m):"
    Leer altura
    imc <- peso / (altura ^ 2)
    Escribir "IMC: ", imc

    Si imc < 18.5 Entonces
        Escribir "Bajo peso"
    Sino
        Si imc < 25 Entonces
            Escribir "Normal"
        Sino
            Si imc < 30 Entonces
                Escribir "Sobrepeso"
            Sino
                Escribir "Obesidad"
            FinSi
        FinSi
    FinSi
FinAlgoritmo
  </pre>

  <p><em>Conceptos aplicados:</em> condicionales anidados, operadores de potencia, clasificación por rangos.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 5. Control de inventario </h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo ControlInventario
    Definir n, i Como Entero
    Definir nombre Como Cadena
    Definir precio, cantidad, total, valorTotal Como Real
    valorTotal <- 0
    Escribir "Ingrese número de productos:"
    Leer n
    Para i <- 1 Hasta n Hacer
        Escribir "Producto ", i, ":"
        Escribir "Nombre:"
        Leer nombre
        Escribir "Precio unitario:"
        Leer precio
        Escribir "Cantidad en stock:"
        Leer cantidad
        total <- precio * cantidad
        valorTotal <- valorTotal + total
    FinPara
    Escribir "Valor total del inventario: S/ ", valorTotal
FinAlgoritmo
  </pre>

  <p><em>Conceptos aplicados:</em> bucles, acumuladores, entrada múltiple de datos.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 6. Sistema de facturación simple </h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo FacturacionSimple
    Definir n, i Como Entero
    Definir precio, cantidad, subtotal, total, igv Como Real
    subtotal <- 0
    Escribir "Ingrese número de productos:"
    Leer n
    Para i <- 1 Hasta n Hacer
        Escribir "Ingrese precio del producto ", i, ":"
        Leer precio
        Escribir "Ingrese cantidad:"
        Leer cantidad
        subtotal <- subtotal + (precio * cantidad)
    FinPara
    igv <- subtotal * 0.18
    total <- subtotal + igv
    Escribir "Subtotal: S/ ", subtotal
    Escribir "IGV (18%): S/ ", igv
    Escribir "Total a pagar: S/ ", total
FinAlgoritmo
  </pre>

  <p>Resolver problemas cotidianos mediante algoritmos permite desarrollar el pensamiento lógico y aplicar la programación a situaciones reales. <strong>PSeInt</strong> facilita este proceso al permitir representar claramente los pasos, validar resultados y comprender cómo los datos fluyen desde la entrada hasta la salida del programa.</p>

</section>
<section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 15px; line-height: 1.6;">

  <h2 style="color: #00ffff; font-size: 18px;"> 3. Integración de estructuras condicionales y repetitivas</h2>

  <h3 style="color: #00ffff; font-size: 16px;">Teoría</h3>

  <p>En la programación estructurada, los algoritmos rara vez se limitan a ejecutar instrucciones de manera lineal. En la mayoría de los casos, los programas deben repetir acciones varias veces (estructuras repetitivas) y tomar decisiones en función de ciertas condiciones (estructuras condicionales).</p>

  <p>Cuando ambas estructuras se combinan dentro de un mismo algoritmo, se logra un control completo del flujo de ejecución, lo que permite procesar múltiples datos, validar información, generar estadísticas y realizar cálculos acumulativos o selectivos.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Conceptos clave</h3>

  <p><strong>Estructura condicional (decisión):</strong>  
  Permite que el programa elija un camino de ejecución dependiendo de si una condición es verdadera o falsa.</p>

  <pre style="background-color: #111; color: #00ffff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Si edad >= 18 Entonces
    Escribir "Mayor de edad"
Sino
    Escribir "Menor de edad"
FinSi
  </pre>

  <p><strong>Estructura repetitiva (bucle):</strong>  
  Permite ejecutar un conjunto de instrucciones varias veces, ya sea un número determinado de veces (Para) o mientras se cumpla una condición (Mientras o Repetir).</p>

  <pre style="background-color: #111; color: #00ffff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Para i <- 1 Hasta 5 Hacer
    Escribir "Número: ", i
FinPara
  </pre>

  <p><strong>Integración de ambas estructuras:</strong>  
  Dentro de un bucle se pueden incluir condiciones que afecten el flujo interno, permitiendo procesar selectivamente datos que cumplen determinados criterios.</p>

  <p>Esto es especialmente útil en:</p>
  <ul>
    <li>Procesamiento de listas de datos.</li>
    <li>Validación de entradas.</li>
    <li>Contadores y acumuladores condicionados.</li>
    <li>Estadísticas parciales o totales.</li>
  </ul>

  <h3 style="color: #00ffff; font-size: 16px;">Ejemplo introductorio</h3>

  <p><strong>Problema:</strong>  
  Se desea ingresar n calificaciones, calcular el promedio general y contar cuántas están aprobadas (nota mayor o igual a 11).</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo EstadisticaNotas
    Definir n, i, contador Como Entero
    Definir nota, suma Como Real
    Escribir "¿Cuántas notas ingresará?"
    Leer n
    suma <- 0
    contador <- 0
    Para i <- 1 Hasta n Hacer
        Escribir "Ingrese nota ", i, ":"
        Leer nota
        suma <- suma + nota
        Si nota >= 11 Entonces
            contador <- contador + 1
        FinSi
    FinPara
    Escribir "Promedio: ", suma / n
    Escribir "Cantidad de aprobados: ", contador
FinAlgoritmo
  </pre>

  <p><em>Explicación:</em>  
  El bucle permite ingresar varias notas, y dentro de él se utiliza una condición para determinar cuántas cumplen el criterio de aprobación.  
  El resultado final muestra tanto el promedio como la cantidad de estudiantes aprobados.</p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicios prácticos resueltos</h3>

  <h4 style="color: #00ffff; font-size: 15px;">Ejercicio 1. Contar números pares </h4>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo ContarPares
    Definir i, num, contador Como Entero
    contador <- 0
    Para i <- 1 Hasta 5 Hacer
        Escribir "Ingrese número ", i, ":"
        Leer num
        Si num MOD 2 = 0 Entonces
            contador <- contador + 1
        FinSi
    FinPara
    Escribir "Cantidad de números pares: ", contador
FinAlgoritmo
  </pre>

  <p><em>Conceptos aplicados:</em> bucle Para, operador módulo, condicional simple.</p>

  <h4 style="color: #00ffff; font-size: 15px;">Ejercicio 2. Suma de números positivos </h4>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo SumaPositivos
    Definir i, num Como Entero
    Definir suma Como Real
    suma <- 0
    Para i <- 1 Hasta 10 Hacer
        Escribir "Ingrese número ", i, ":"
        Leer num
        Si num > 0 Entonces
            suma <- suma + num
        FinSi
    FinPara
    Escribir "La suma de los números positivos es: ", suma
FinAlgoritmo
  </pre>

  <p><em>Conceptos aplicados:</em> acumulador condicionado, selección dentro del bucle.</p>

  <h4 style="color: #00ffff; font-size: 15px;">Ejercicio 3. Validación de entrada </h4>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo ValidarNota
    Definir nota Como Real
    Repetir
        Escribir "Ingrese una nota (0 - 20):"
        Leer nota
        Si nota < 0 O nota > 20 Entonces
            Escribir "Nota fuera de rango. Intente nuevamente."
        FinSi
    Hasta Que nota >= 0 Y nota <= 20
    Escribir "Nota registrada: ", nota
FinAlgoritmo
  </pre>

  <p><em>Conceptos aplicados:</em> bucle Repetir...Hasta Que, condición de salida, validación.</p>

  <h4 style="color: #00ffff; font-size: 15px;">Ejercicio 4. Contar aprobados y desaprobados /h4>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo ContarResultados
    Definir n, i, aprobados, desaprobados Como Entero
    Definir nota Como Real
    Escribir "¿Cuántas notas ingresará?"
    Leer n
    aprobados <- 0
    desaprobados <- 0
    Para i <- 1 Hasta n Hacer
        Escribir "Ingrese nota ", i, ":"
        Leer nota
        Si nota >= 11 Entonces
            aprobados <- aprobados + 1
        Sino
            desaprobados <- desaprobados + 1
        FinSi
    FinPara
    Escribir "Aprobados: ", aprobados
    Escribir "Desaprobados: ", desaprobados
FinAlgoritmo
  </pre>

  <p><em>Conceptos aplicados:</em> bucle con bifurcación doble (Si–Sino), contadores múltiples.</p>

  <h4 style="color: #00ffff; font-size: 15px;">Ejercicio 5. Número mayor y menor </h4>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo MayorYMenor
    Definir n, i, num, mayor, menor Como Entero
    Escribir "¿Cuántos números ingresará?"
    Leer n
    Escribir "Ingrese número 1:"
    Leer num
    mayor <- num
    menor <- num
    Para i <- 2 Hasta n Hacer
        Escribir "Ingrese número ", i, ":"
        Leer num
        Si num > mayor Entonces
            mayor <- num
        FinSi
        Si num < menor Entonces
            menor <- num
        FinSi
    FinPara
    Escribir "Número mayor: ", mayor
    Escribir "Número menor: ", menor
FinAlgoritmo
  </pre>

  <p><em>Conceptos aplicados:</em> condicionales anidadas dentro del bucle, inicialización de variables con el primer dato.</p>

  <h4 style="color: #00ffff; font-size: 15px;">Ejercicio 6. Control de ventas </h4>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 10px; font-family: monospace; font-size: 14px;">
Algoritmo ControlVentas
    Definir n, i, cantidad Como Entero
    Definir precio, totalVenta, totalGeneral Como Real
    totalGeneral <- 0
    Escribir "Ingrese número de ventas:"
    Leer n
    Para i <- 1 Hasta n Hacer
        Escribir "Venta ", i, ":"
        Escribir "Ingrese precio del producto:"
        Leer precio
        Escribir "Ingrese cantidad:"
        Leer cantidad
        totalVenta <- precio * cantidad
        Si totalVenta > 100 Entonces
            totalVenta <- totalVenta * 0.90
        FinSi
        Escribir "Total de esta venta: S/ ", totalVenta
        totalGeneral <- totalGeneral + totalVenta
    FinPara
    Escribir "Monto total de todas las ventas: S/ ", totalGeneral
FinAlgoritmo
  </pre>

  <p>La integración de estructuras condicionales y repetitivas permite construir programas más completos, capaces de adaptarse a distintos escenarios y procesar grandes volúmenes de datos con lógica selectiva.  
  Dominar esta combinación es un paso esencial hacia el desarrollo de algoritmos complejos, análisis de datos y automatización de procesos.</p>

</section>

    
  
    
    
    `,
    ejemplos: `
    <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 15px; line-height: 1.6;">

  <h2 style="color: #00ffff; font-size: 18px;"> Ejemplos</h2>

  <h3 style="color: #00ffff; font-size: 16px;">Ejemplo 1: Cálculo de aprobados</h3>
  <p><strong>Problema:</strong> Leer 5 notas, calcular el promedio y contar cuántas son mayores o iguales a 11.</p>

  <pre style="background-color:#111; color:#b6d5d5ff; padding:12px; border-radius:10px; font-family:monospace;">
Algoritmo Ejemplo1_Aprobados
    Definir i, contador Como Entero
    Definir nota, suma Como Real
    suma <- 0
    contador <- 0
    Para i <- 1 Hasta 5 Hacer
        Escribir "Ingrese nota ", i, ":"
        Leer nota
        suma <- suma + nota
        Si nota >= 11 Entonces
            contador <- contador + 1
        FinSi
    FinPara
    Escribir "Promedio: ", suma / 5
    Escribir "Cantidad de aprobados: ", contador
FinAlgoritmo
  </pre>

  <h3 style="color: #00ffff; font-size: 16px;">Ejemplo 2: Números positivos y negativos</h3>
  <p><strong>Problema:</strong> Ingresar 10 números y determinar cuántos son positivos, negativos o cero.</p>

  <pre style="background-color:#111; color:#b6d5d5ff; padding:12px; border-radius:10px; font-family:monospace;">
Algoritmo Ejemplo2_Signos
    Definir i, num, pos, neg, ceros Como Entero
    pos <- 0
    neg <- 0
    ceros <- 0
    Para i <- 1 Hasta 10 Hacer
        Escribir "Ingrese número ", i, ":"
        Leer num
        Si num > 0 Entonces
            pos <- pos + 1
        Sino
            Si num < 0 Entonces
                neg <- neg + 1
            Sino
                ceros <- ceros + 1
            FinSi
        FinSi
    FinPara
    Escribir "Positivos: ", pos
    Escribir "Negativos: ", neg
    Escribir "Ceros: ", ceros
FinAlgoritmo
  </pre>

  <h3 style="color: #00ffff; font-size: 16px;">Ejemplo 3: Control de ventas</h3>
  <p><strong>Problema:</strong> Registrar varias ventas y aplicar un 10% de descuento si el total supera S/100.</p>

  <pre style="background-color:#111; color:#b6d5d5ff; padding:12px; border-radius:10px; font-family:monospace;">
Algoritmo Ejemplo3_Ventas
    Definir n, i, cantidad Como Entero
    Definir precio, totalVenta, totalGeneral Como Real
    totalGeneral <- 0
    Escribir "Ingrese número de ventas:"
    Leer n
    Para i <- 1 Hasta n Hacer
        Escribir "Venta ", i, ":"
        Escribir "Ingrese precio del producto:"
        Leer precio
        Escribir "Ingrese cantidad:"
        Leer cantidad
        totalVenta <- precio * cantidad
        Si totalVenta > 100 Entonces
            totalVenta <- totalVenta * 0.9
        FinSi
        totalGeneral <- totalGeneral + totalVenta
    FinPara
    Escribir "Total general: S/ ", totalGeneral
FinAlgoritmo
  </pre>

  <h2 style="color: #00ffff; font-size: 16px;"> Ejercicios prácticos resueltos</h2>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 1 : Contar números pares</h3>
  <pre style="background-color:#111; color:#b6d5d5ff; padding:12px; border-radius:10px; font-family:monospace;">
Algoritmo Ej1_Pares
    Definir i, num, contador Como Entero
    contador <- 0
    Para i <- 1 Hasta 5 Hacer
        Escribir "Ingrese número ", i, ":"
        Leer num
        Si num MOD 2 = 0 Entonces
            contador <- contador + 1
        FinSi
    FinPara
    Escribir "Cantidad de pares: ", contador
FinAlgoritmo
  </pre>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 2 : Sumar solo los números positivos</h3>
  <pre style="background-color:#111; color:#b6d5d5ff; padding:12px; border-radius:10px; font-family:monospace;">
Algoritmo Ej2_SumaPositivos
    Definir i, num, suma Como Entero
    suma <- 0
    Para i <- 1 Hasta 8 Hacer
        Escribir "Ingrese número ", i, ":"
        Leer num
        Si num > 0 Entonces
            suma <- suma + num
        FinSi
    FinPara
    Escribir "Suma de positivos: ", suma
FinAlgoritmo
  </pre>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 3 : Validar edades</h3>
  <p><strong>Objetivo:</strong> Pedir edades hasta que se ingrese una edad válida (entre 0 y 120).</p>

  <pre style="background-color:#111; color:#b6d5d5ff; padding:12px; border-radius:10px; font-family:monospace;">
Algoritmo Ej3_ValidarEdad
    Definir edad Como Entero
    Repetir
        Escribir "Ingrese edad (0-120):"
        Leer edad
        Si edad < 0 O edad > 120 Entonces
            Escribir "Edad inválida. Intente nuevamente."
        FinSi
    Hasta Que edad >= 0 Y edad <= 120
    Escribir "Edad registrada: ", edad
FinAlgoritmo
  </pre>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 4 : Promedio hasta ingresar -1</h3>
  <p><strong>Objetivo:</strong> Calcular promedio de notas hasta que el usuario ingrese -1.</p>

  <pre style="background-color:#111; color:#b6d5d5ff; padding:12px; border-radius:10px; font-family:monospace;">
Algoritmo Ej4_PromedioIndeterminado
    Definir nota, suma Como Real
    Definir contador Como Entero
    suma <- 0
    contador <- 0
    Repetir
        Escribir "Ingrese nota (-1 para terminar):"
        Leer nota
        Si nota <> -1 Entonces
            suma <- suma + nota
            contador <- contador + 1
        FinSi
    Hasta Que nota = -1
    Si contador > 0 Entonces
        Escribir "Promedio: ", suma / contador
    Sino
        Escribir "No se ingresaron notas."
    FinSi
FinAlgoritmo
  </pre>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 5 : Contar múltiplos de 3</h3>
  <pre style="background-color:#111; color:#b6d5d5ff; padding:12px; border-radius:10px; font-family:monospace;">
Algoritmo Ej5_Multiplos3
    Definir i, num, contador Como Entero
    contador <- 0
    Para i <- 1 Hasta 7 Hacer
        Escribir "Ingrese número ", i, ":"
        Leer num
        Si num MOD 3 = 0 Entonces
            contador <- contador + 1
        FinSi
    FinPara
    Escribir "Cantidad de múltiplos de 3: ", contador
FinAlgoritmo
  </pre>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 6 : Control de temperaturas</h3>
  <p><strong>Objetivo:</strong> Leer 6 temperaturas y contar cuántas superan los 30 °C.</p>

  <pre style="background-color:#111; color:#b6d5d5ff; padding:12px; border-radius:10px; font-family:monospace;">
Algoritmo Ej6_TemperaturasAltas
    Definir i, contador Como Entero
    Definir temp Como Real
    contador <- 0
    Para i <- 1 Hasta 6 Hacer
        Escribir "Ingrese temperatura ", i, ":"
        Leer temp
        Si temp > 30 Entonces
            contador <- contador + 1
        FinSi
    FinPara
    Escribir "Temperaturas mayores a 30°C: ", contador
FinAlgoritmo
  </pre>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 7: Números mayores a un umbral</h3>
  <pre style="background-color:#111; color:#b6d5d5ff; padding:12px; border-radius:10px; font-family:monospace;">
Algoritmo Ej7_MayoresUmbral
    Definir n, i, num, contador Como Entero
    Definir umbral Como Real
    Escribir "¿Cuántos números ingresará?"
    Leer n
    Escribir "Ingrese valor umbral:"
    Leer umbral
    contador <- 0
    Para i <- 1 Hasta n Hacer
        Escribir "Ingrese número ", i, ":"
        Leer num
        Si num > umbral Entonces
            contador <- contador + 1
        FinSi
    FinPara
    Escribir "Cantidad mayores al umbral: ", contador
FinAlgoritmo
  </pre>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 8 : Control de inventario</h3>
  <pre style="background-color:#111; color:#b6d5d5ff; padding:12px; border-radius:10px; font-family:monospace;">
Algoritmo Ej8_Inventario
    Definir n, i, cantidad Como Entero
    Definir precio, total, totalGeneral Como Real
    totalGeneral <- 0
    Escribir "Ingrese cantidad de productos:"
    Leer n
    Para i <- 1 Hasta n Hacer
        Escribir "Producto ", i, ":"
        Escribir "Precio:"
        Leer precio
        Escribir "Cantidad:"
        Leer cantidad
        total <- precio * cantidad
        Si total > 500 Entonces
            total <- total * 0.95
        FinSi
        totalGeneral <- totalGeneral + total
    FinPara
    Escribir "Total inventario: S/ ", totalGeneral
FinAlgoritmo
  </pre>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 9 : Cálculo de salarios</h3>
  <pre style="background-color:#111; color:#b6d5d5ff; padding:12px; border-radius:10px; font-family:monospace;">
Algoritmo Ej9_Salarios
    Definir n, i Como Entero
    Definir salario, bono, totalPagar Como Real
    totalPagar <- 0
    Escribir "¿Cuántos empleados tiene?"
    Leer n
    Para i <- 1 Hasta n Hacer
        Escribir "Ingrese salario del empleado ", i, ":"
        Leer salario
        Si salario < 1200 Entonces
            bono <- salario * 0.15
        Sino
            bono <- salario * 0.05
        FinSi
        Escribir "Salario total (con bono): ", salario + bono
        totalPagar <- totalPagar + (salario + bono)
    FinPara
    Escribir "Total de planilla: S/ ", totalPagar
FinAlgoritmo
  </pre>

  <h3 style="color: #00ffff; font-size: 16px;">Ejercicio 10 : Evaluación de estudiantes</h3>
  <p><strong>Objetivo:</strong> Calcular promedio general y cantidad de aprobados y desaprobados de varios alumnos.</p>

  <pre style="background-color:#111; color:#b6d5d5ff; padding:12px; border-radius:10px; font-family:monospace;">
Algoritmo Ej10_Evaluacion
    Definir n, i, aprobados, desaprobados Como Entero
    Definir nota, suma, promedioGeneral Como Real
    aprobados <- 0
    desaprobados <- 0
    suma <- 0
    Escribir "Ingrese número de alumnos:"
    Leer n
    Para i <- 1 Hasta n Hacer
        Escribir "Ingrese nota del alumno ", i, ":"
        Leer nota
        suma <- suma + nota
        Si nota >= 11 Entonces
            aprobados <- aprobados + 1
        Sino
            desaprobados <- desaprobados + 1
        FinSi
    FinPara
    promedioGeneral <- suma / n
    Escribir "Promedio general: ", promedioGeneral
    Escribir "Aprobados: ", aprobados
    Escribir "Desaprobados: ", desaprobados
FinAlgoritmo
  </pre>

  <p>💬 <em>La práctica con estos ejercicios permite dominar el control del flujo en los algoritmos.  
  Integrar estructuras condicionales y repetitivas es la base para desarrollar programas capaces de analizar datos, validar entradas y generar resultados inteligentes.</em></p>

</section>

    
    
    
    
    
    
    `,
    quiz_final: `<section id="quiz_final_pseint" class="quiz-section" 
style="font-family:'Segoe UI', Tahoma, sans-serif; color:#fff; line-height:1.6; margin-top:30px; text-align:left;">

  <p><strong style="color:#22c1dc;">Examen Final – Minicurso 1:</strong></p>

  <p><strong style="color:#22c1dc;">📊 Planteamiento:</strong> 
  Este examen tiene como propósito evaluar tu dominio de los conceptos fundamentales de <strong>PSeInt</strong>, incluyendo el uso de variables, estructuras condicionales, ciclos y el diseño lógico de algoritmos. Es la etapa final para demostrar tu progreso en este minicurso.</p>

  <p>
    <strong style="color:#22c1dc;"> Condición de aprobación:</strong> Nota mínima 11.<br>
    <strong style="color:#22c1dc;"> Peso en la evaluación:</strong> 50 % de la nota total del Minicurso 1.
  </p>

  <p><strong style="color:#22c1dc;">📝 Indicaciones:</strong></p>
  <ul style="margin:12px 0 18px 20px; line-height:1.7; color:#fff;">
    <li>Lee con atención cada pregunta antes de responder.</li>
    <li>Aplica los conceptos aprendidos sobre estructuras secuenciales, condicionales y repetitivas.</li>
    <li>Responde de manera ordenada y clara.</li>
    <li>Verifica tus respuestas antes de enviar el formulario.</li>
  </ul>

  <p><strong style="color:#22c1dc;"> Objetivo:</strong> 
  Evaluar de forma integral tu comprensión sobre el desarrollo de algoritmos en <strong>PSeInt</strong> y tu capacidad para resolver problemas aplicando lógica computacional.</p>

  <div style="text-align:center; margin-top:25px;">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScA8M-pgIldv7ShwdaCPvy1tvTZgFN4fXPT5FClvExfNmUBXA/viewform?usp=dialog" 
       target="_blank" 
       style="display:inline-block; background-color:#22c1dc; color:white; padding:12px 26px; border-radius:8px; text-decoration:none; font-weight:bold; 
              box-shadow:0 3px 6px rgba(0,0,0,0.15); transition:background-color 0.3s;">
       🧾 Iniciar Examen Final
    </a>
  </div>

</section>
    
    `
  },


  // Curso 3 – Python
  py1: {
    objetivo: `<p><strong>Objetivo:</strong> </p>
    
    
     <p>   
✔️ Comprender los fundamentos y características del lenguaje Python<br>
✔️ Instalar, configurar y utilizar correctamente el entorno de desarrollo<br>
✔️ Aplicar los conceptos básicos de programación estructurada. <br>
    
   </p> 
    
    
    
    `,
    teoria: `<p><strong>Teoría:</strong> </p>
    
    
    <section style="color: white; text-align: justify; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.8;">

  <h2 style="color: #00ffff; font-size: 16px;">1. ¿Qué es Python?</h2>

  <p>
  El lenguaje <strong>Python</strong> fue concebido a finales de los años 80 por el programador <em>Guido van Rossum</em>, en el Centro de Matemática e Informática (CWI) en los Países Bajos. Su desarrollo comenzó como un proyecto personal, inspirado en el lenguaje <em>ABC</em>, con el propósito de crear un lenguaje más claro, legible y flexible para realizar tareas de programación tanto educativas como profesionales (<strong>Python Software Foundation, 2024</strong>).
  </p>

  <p>
  La primera versión pública, <strong>Python 0.9.0</strong>, se lanzó en 1991, incorporando ya características fundamentales como el manejo de excepciones, funciones y módulos. Más adelante, la versión <strong>1.0</strong>, publicada en 1994, consolidó su estructura y sentó las bases del lenguaje moderno (<strong>Codefinity, 2023</strong>). Con el paso de los años, Python se ha mantenido en constante evolución, introduciendo mejoras significativas en sus versiones <strong>2.x</strong> y <strong>3.x</strong>, esta última iniciada en 2008 y actualmente considerada el estándar oficial (<strong>Python Software Foundation, 2024</strong>).
  </p>

  <h3 style="color: #00ffff; font-size: 16px;">Características principales de Python</h3>

  <ul style="margin-left: 40px;">
    <li><strong>Sintaxis clara y legible:</strong> facilita la comprensión del código, reduciendo la complejidad y mejorando la productividad.</li>
    <li><strong>Lenguaje interpretado:</strong> no requiere compilación previa; el intérprete ejecuta el código línea por línea, permitiendo pruebas rápidas y aprendizaje ágil.</li>
    <li><strong>Tipado dinámico:</strong> las variables no necesitan declaración explícita de tipo, ya que el intérprete lo determina automáticamente durante la ejecución.</li>
    <li><strong>Multiparadigma:</strong> soporta programación estructurada, orientada a objetos y funcional, ofreciendo gran flexibilidad para diferentes estilos de desarrollo.</li>
    <li><strong>Amplia biblioteca estándar y comunidad activa:</strong> Python cuenta con una extensa colección de módulos integrados y una comunidad global que contribuye constantemente a su expansión (<strong>Python.org, 2024</strong>).</li>
  </ul>

  <p>
  Gracias a estas propiedades, <strong>Python</strong> se ha convertido en uno de los lenguajes más utilizados en <em>educación, ciencia de datos, inteligencia artificial, desarrollo web y automatización</em>, siendo considerado un lenguaje esencial para el <strong>pensamiento computacional</strong> y el <strong>aprendizaje inicial de la programación</strong> (<strong>Almaguer, 2023</strong>).
  </p>

</section>
<section style="color: white; text-align: justify; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.8;">

  <h2 style="color: #00ffff; font-size: 16px;">2. Instalación y configuración (VS Code)</h2>

  <p>
  Para empezar a programar en <strong>Python</strong>, lo primero que se necesita es instalar el programa principal llamado <strong>intérprete de Python</strong>, encargado de leer y ejecutar el código que se escribe. Actualmente, se recomienda usar la versión <strong>Python 3</strong>, ya que es la más reciente y cuenta con soporte oficial (<strong>Python Software Foundation, 2024</strong>).
  </p>

  <p>
  Al descargar e instalar Python desde su página oficial 
  (<a href="https://www.python.org" target="_blank" style="color: #00ffff;">https://www.python.org</a>),
  se incluye un programa llamado <strong>IDLE</strong> (Integrated Development and Learning Environment). Este entorno resulta muy útil para principiantes, pues permite escribir código, ejecutarlo y visualizar los resultados de forma sencilla, sin necesidad de configuraciones avanzadas.
  </p>

  <p>
  Para los estudiantes o usuarios que ya tienen algo de experiencia, también se puede utilizar 
  <strong>Visual Studio Code (VS Code)</strong>, un editor de texto más completo que permite agregar extensiones, aplicar color al código, usar la terminal integrada y trabajar con proyectos de mayor tamaño.
  </p>

  <h3 style="color: #00ffff; font-size: 18px;">Pasos básicos de instalación</h3>

  <ol style="margin-left: 40px;">
    <li>Descargar Python desde el sitio oficial: 
      <a href="https://www.python.org/downloads" target="_blank" style="color: #00ffff;">https://www.python.org/downloads</a>.
    </li>
    <li>Instalar el programa y marcar la opción <strong>“Add Python to PATH”</strong>, para poder ejecutarlo desde cualquier lugar del sistema.</li>
    <li>Verificar la instalación abriendo la terminal o símbolo del sistema y escribiendo:<br>
      <code style="background-color: #111; color: #00ffff; padding: 4px 8px; border-radius: 6px; display: inline-block;">python --version</code>
    </li>
    <li>Si aparece el número de versión, significa que la instalación fue exitosa.</li>
    <li>Elegir el entorno de trabajo: <strong>IDLE</strong> o <strong>VS Code</strong>.</li>
    <li>Crear una carpeta de trabajo donde se guardarán los programas y escribir el primer código, por ejemplo:</li>
  </ol>

  <pre style="background-color: #111; color: #00ffff; padding: 10px; border-radius: 8px; margin-left: 40px; margin-right: 40px;">
print("Hola, Python")
  </pre>

  <p>
  Con estos pasos, el estudiante puede comenzar a escribir y ejecutar sus primeros programas. 
  <strong>Python</strong> es un lenguaje muy accesible y no requiere configuraciones complicadas, 
  por lo que el inicio suele ser rápido, práctico y motivador para quienes recién comienzan en la programación.
  </p>

  <h3 style="color: #00ffff; font-size: 18px;">Referencia en video</h3>

  <p>
  <em>Importante:</em> Ve el siguiente video explicativo para realizar correctamente la instalación de Python:<br>
  <strong>Instalación de Python paso a paso (2024).</strong> Disponible en: 
  <a href="https://www.youtube.com/watch?v=i6j8jT_OdEU" target="_blank" style="color: #00ffff;">https://www.youtube.com/watch?v=i6j8jT_OdEU</a>
  </p>

</section>


<section style="color: white; text-align: justify; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.8;">

  <h2 style="color: #00ffff; font-size: 16px;">3. Estructura básica de un programa</h2>

  <p>
  Un programa en <strong>Python</strong> consiste, en esencia, en un archivo de texto con extensión <code>.py</code> que contiene instrucciones que el intérprete ejecuta de forma secuencial. Esta característica y su sintaxis sencilla permiten a los principiantes comprender fácilmente cómo fluye la ejecución del código (<strong>Severance, 2016</strong>). Además, su estructura modular y su cercanía al lenguaje natural lo convierten en un excelente recurso educativo para introducir los fundamentos de la programación (<strong>Moreno et al., 2020</strong>).
  </p>

  <p>En su forma más básica, un programa en Python puede incluir los siguientes componentes:</p>

  <h3 style="color: #00ffff; font-size: 15px;">3.1. Encabezado o comentario informativo (opcional)</h3>
  <p>
  El encabezado sirve para incluir información sobre el propósito del programa, el autor y la fecha. No afecta la ejecución, pero facilita la comprensión del código, especialmente cuando es revisado por otras personas o después de un tiempo.
  </p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
# Programa: Calculadora básica
# Autor: Ana Pérez
# Fecha: 31/10/2025
# Descripción: Este programa realiza operaciones aritméticas simples.
  </pre>

  <p>
  Los comentarios en Python comienzan con el símbolo <code>#</code> y son ignorados por el intérprete (<strong>Severance, 2016</strong>).
  </p>

  <h3 style="color: #00ffff; font-size: 15px;">3.2. Importación de módulos o bibliotecas</h3>
  <p>
  En algunos casos, es necesario usar funciones adicionales que no están incluidas en el núcleo de Python. Para eso se emplean las importaciones mediante la palabra clave <code>import</code>.
  </p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
import math  # Importa el módulo matemático

radio = 5
area = math.pi * radio ** 2
print("El área del círculo es:", area)
  </pre>

  <p>
  En este ejemplo, el programa importa el módulo <code>math</code> para utilizar la constante <code>pi</code> y realizar cálculos matemáticos más precisos. Esta práctica fomenta la reutilización del código y evita tener que escribir funciones desde cero (<strong>Lutz, 2021</strong>).
  </p>

  <h3 style="color: #00ffff; font-size: 15px;">3.3. Definición de funciones o clases (en programas más elaborados)</h3>

  <p>
  Las <strong>funciones</strong> agrupan un conjunto de instrucciones que pueden reutilizarse varias veces dentro de un programa.  
  Las <strong>clases</strong>, por su parte, se usan en programación orientada a objetos para definir comportamientos y atributos de entidades.
  </p>

  <p><em>Ejemplo (función):</em></p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
def sumar(a, b):
    resultado = a + b
    return resultado

print("La suma es:", sumar(3, 5))
  </pre>

  <p><em>Ejemplo (clase básica):</em></p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

    def saludar(self):
        print("Hola, soy", self.nombre)

persona1 = Persona("Carlos")
persona1.saludar()
  </pre>

  <p>
  Ambas estructuras permiten que el código sea modular, legible y reutilizable, lo cual es esencial para programas de mayor tamaño (<strong>Moreno et al., 2020</strong>).
  </p>

  <h3 style="color: #00ffff; font-size: 15px;">3.4. Bloque principal de ejecución</h3>

  <p>
  Es la parte donde se colocan las instrucciones que se ejecutan directamente al correr el programa. En Python, se acostumbra usar la condición <code>if __name__ == "__main__":</code> para indicar el punto de inicio del programa.
  </p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
def saludar():
    print("¡Bienvenido a Python!")

if __name__ == "__main__":
    saludar()
  </pre>

  <p>
  Esto garantiza que el bloque principal solo se ejecute cuando el archivo se ejecuta directamente, y no cuando es importado como módulo en otro programa (<strong>Lutz, 2021</strong>).
  </p>

  <h3 style="color: #b6d5d5ff; font-size: 15px;">3.5. Instrucciones de salida</h3>

  <p>
  Las instrucciones de salida son aquellas que muestran resultados al usuario o registran información.  
  La función más utilizada para ello es <code>print()</code>, que permite enviar texto o valores a la consola.
  </p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
nombre = input("Ingrese su nombre: ")
print("Hola,", nombre, "¡bienvenido al curso de Python!")
  </pre>

  <p>
  Este sencillo ejemplo ilustra el flujo clásico de un programa: <strong>entrada → procesamiento → salida (E–P–S)</strong>, considerado la base del pensamiento computacional (<strong>Moreno et al., 2020</strong>).
  </p>

  <h3 style="color: #00ffff; font-size: 15px;">Resumen gráfico de la estructura</h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
# Comentarios o encabezado
import módulos

def funciones():
    ...

class Clases:
    ...

if __name__ == "__main__":
    # Bloque principal
    # Lectura de datos
    # Procesamiento
    # Salida de resultados
  </pre>

  <p>
  Esta organización permite desarrollar programas claros, escalables y fáciles de mantener, siguiendo los principios de la programación estructurada (<strong>Severance, 2016</strong>).
  </p>

  <h3 style="color: #00ffff; font-size: 15px;">Ejemplo simple</h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
print("¡Hola, mundo!")
  </pre>

  <p>
  Este programa básico muestra un mensaje en pantalla, lo que permite comprobar que el entorno de desarrollo está funcionando correctamente. Es el punto de partida clásico en casi todos los cursos de programación (<strong>Severance, 2016</strong>).
  </p>

  <h3 style="color: #00ffff; font-size: 15px;">Ejemplo con entrada, procesamiento y salida</h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
nombre = input("Ingrese su nombre: ")
edad = int(input("Ingrese su edad: "))
edad_futura = edad + 5
print("Hola", nombre, ", dentro de 5 años tendrás", edad_futura, "años.")
  </pre>

  <ul style="margin-left: 40px;">
    <li>Se solicita información al usuario mediante <code>input()</code>.</li>
    <li>Se convierte la entrada de texto a número con <code>int()</code>.</li>
    <li>Se realiza un pequeño cálculo (<code>edad_futura = edad + 5</code>).</li>
    <li>Finalmente, se muestra el resultado con <code>print()</code>.</li>
  </ul>

  <p>
  Este tipo de programa refleja el ciclo <strong>entrada – proceso – salida (E–P–S)</strong>, un principio fundamental en la lógica de programación (<strong>Moreno et al., 2020</strong>).
  </p>

  <h3 style="color: #00ffff; font-size: 15px;">Consideraciones didácticas importantes</h3>

  <ul style="margin-left: 40px;">
    <li><strong>Indentación:</strong> Python define bloques de código mediante espacios, lo que favorece la legibilidad (<strong>Lutz, 2021</strong>).</li>
    <li><strong>Secuencialidad:</strong> las líneas se ejecutan de arriba hacia abajo, salvo que haya decisiones o repeticiones.</li>
    <li><strong>Comentarios:</strong> se indican con el símbolo <code>#</code> y ayudan a documentar el código.</li>
    <li><strong>Modularidad:</strong> aunque no se aborde desde el inicio, conviene introducir el concepto para fomentar buenas prácticas desde los primeros programas.</li>
  </ul>

</section>






<section style="color: white; text-align: justify; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.8;">

  <h2 style="color: #00ffff; font-size: 18px;">4. Uso de la función <code>print()</code> y entrada con <code>input()</code></h2>

  <p>
  La interacción con el usuario es una de las partes más esenciales en todo programa. En <strong>Python</strong>, este proceso se realiza principalmente a través de dos funciones básicas: 
  <code>print()</code>, que muestra información en pantalla, y <code>input()</code>, que permite recibir datos desde el teclado. 
  Comprender su funcionamiento es clave para desarrollar programas dinámicos, interactivos y fáciles de probar (<strong>Severance, 2016</strong>).
  </p>

  <h3 style="color: #b6d5d5ff; font-size: 16px;">La función <code>print()</code></h3>

  <p>
  La función <code>print()</code> es el mecanismo estándar de salida en Python. Su propósito es mostrar mensajes, resultados de operaciones, valores de variables o cualquier texto al usuario. 
  Por ejemplo:
  </p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
print("¡Hola, mundo!")
print("La suma de 2 + 3 es:", 2 + 3)
  </pre>

  <p>
  En este caso, la primera instrucción muestra un mensaje simple, mientras que la segunda imprime texto junto con el resultado de una operación. 
  Python permite combinar texto y valores separados por comas, lo que facilita la creación de mensajes informativos (<strong>Lutz, 2021</strong>).
  </p>

  <p>
  La función <code>print()</code> también acepta caracteres especiales para mejorar el formato de salida, como:
  </p>

  <ul style="margin-left: 40px;">
    <li><code>\n</code> para saltos de línea.</li>
    <li><code>\t</code> para tabulaciones.</li>
    <li><code>end</code> y <code>sep</code> como parámetros opcionales para modificar el comportamiento del texto.</li>
  </ul>

  <p><em>Ejemplo:</em></p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
print("Nombre:", "Ana", sep=" - ")
print("Gracias por usar el programa", end=" :)")
  </pre>

  <p>
  Estos parámetros permiten personalizar la forma en que la información se presenta al usuario, lo que es especialmente útil al mostrar reportes o resultados calculados.
  </p>

  <h3 style="color: #00ffff; font-size: 16px;">La función <code>input()</code></h3>

  <p>
  Por otro lado, la función <code>input()</code> se utiliza para leer información del usuario. Cada vez que se ejecuta, el programa se detiene y espera que el usuario escriba un dato y presione la tecla <em>Enter</em>.
  </p>

  <p><em>Ejemplo básico:</em></p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
nombre = input("Ingrese su nombre: ")
print("Hola,", nombre)
  </pre>

  <p>
  En este ejemplo, el texto entre paréntesis y comillas dentro de <code>input()</code> se muestra como un mensaje o <em>prompt</em>, y el valor que el usuario escribe se guarda en la variable 
  <code>nombre</code>. Es importante recordar que <code>input()</code> siempre devuelve una cadena de texto (<code>str</code>), incluso si el usuario escribe un número (<strong>Downey, 2020</strong>).
  </p>

  <p>
  Por ello, si se requiere trabajar con números, es necesario convertir el tipo de dato usando funciones como <code>int()</code> para enteros o <code>float()</code> para decimales.
  </p>

  <p><em>Ejemplo con conversión:</em></p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
edad = int(input("Ingrese su edad: "))
print("Tendrás", edad + 1, "años el próximo año.")
  </pre>

  <p>
  En este caso, el texto ingresado se convierte en número entero mediante <code>int()</code>, lo que permite hacer operaciones matemáticas con él.
  </p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejemplo completo: lectura, procesamiento y salida</h3>

  <p>
  Este pequeño programa combina ambas funciones para realizar un cálculo simple, siguiendo el ciclo 
  <strong>Entrada → Procesamiento → Salida (E–P–S)</strong>:
  </p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
# Programa: Cálculo del área de un rectángulo
base = float(input("Ingrese la base del rectángulo: "))
altura = float(input("Ingrese la altura del rectángulo: "))
area = base * altura
print("El área del rectángulo es:", area)
  </pre>

  <p>
  El usuario introduce los valores de base y altura, el programa los procesa multiplicándolos y finalmente muestra el resultado. 
  Este tipo de estructura es el fundamento de casi todos los programas interactivos, desde los más sencillos hasta los más avanzados 
  (<strong>Moreno, Robles, & Román, 2020</strong>).
  </p>

  <h3 style="color: #b6d5d5ff; font-size: 16px;">En resumen</h3>

  <ul style="margin-left: 40px;">
    <li><code>print()</code> muestra información al usuario.</li>
    <li><code>input()</code> recoge información del usuario.</li>
    <li>Los datos ingresados se tratan como texto y deben convertirse a números si se van a usar en operaciones.</li>
  </ul>

  <p>
  Juntas, estas funciones permiten la comunicación básica entre el usuario y el programa. 
  Su dominio es esencial para comprender cómo fluye la información en un programa, y sienta las bases del 
  <strong>pensamiento computacional</strong> y la <strong>programación estructurada</strong> 
  (<strong>Downey, 2020; Lutz, 2021</strong>).
  </p>

</section>


<section style="color: white; text-align: justify; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.8;">

  <h2 style="color: #00ffff; font-size: 18px;">5. Tipos de datos básicos: números, cadenas y booleanos</h2>

  <p>
  Comprender los tipos de datos es uno de los fundamentos más importantes en la programación, ya que cada valor que maneja un programa pertenece a una categoría específica que define qué operaciones son posibles y cómo se comportan los resultados (<strong>Python Software Foundation, 2024</strong>). En Python, el sistema de tipado dinámico permite que el tipo de una variable se determine automáticamente según el valor que se le asigne, sin necesidad de declararlo explícitamente.
  </p>

  <p>Por ejemplo:</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
x = 10      # entero
y = 3.14    # flotante
nombre = "Ana"  # cadena de texto
  </pre>

  <p>
  Aquí, Python asigna automáticamente los tipos <code>int</code>, <code>float</code> y <code>str</code> a las variables <code>x</code>, <code>y</code> y <code>nombre</code>, respectivamente.
  </p>

  <h3 style="color: #00ffff; font-size: 16px;">5.1. Números</h3>

  <p>
  Python utiliza tres tipos principales de datos numéricos:
  </p>

  <ul>
    <li><strong>Enteros (int)</strong>: representan números sin parte decimal. Ejemplo: 5, -12, 2025.</li>
    <li><strong>Flotantes (float)</strong>: incluyen una parte decimal. Ejemplo: 3.14, 0.5, -10.75.</li>
    <li><strong>Complejos (complex)</strong>: se expresan en la forma a + bj, donde j representa la unidad imaginaria. Ejemplo: 2 + 3j.</li>
  </ul>

  <p>Ejemplo de operaciones numéricas:</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
a = 5
b = 2
print("Suma:", a + b)
print("División:", a / b)
print("División entera:", a // b)
print("Potencia:", a ** b)
  </pre>

  <p>
  Los números son ampliamente utilizados en cálculos matemáticos, científicos y financieros. Python proporciona además el módulo <code>math</code>, que incluye funciones avanzadas como raíces, potencias, logaritmos y trigonometría (<strong>Python Software Foundation, 2024</strong>).
  </p>

  <h3 style="color: #b6d5d5ff; font-size: 16px;">5.2. Cadenas de caracteres (str)</h3>

  <p>
  Las cadenas representan texto y se escriben entre comillas simples o dobles. Python trata las cadenas como secuencias de caracteres, lo que permite acceder a cada posición o realizar transformaciones.
  </p>

  <p>Ejemplo:</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
mensaje = "Hola, Python"
nombre = "Ana"
saludo = "Hola " + nombre       # concatenación
eco = nombre * 3                # repetición
print(saludo)                   # salida: Hola Ana
print(eco)                      # salida: AnaAnaAna
  </pre>

  <p>Métodos útiles de cadenas:</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
texto = "Aprendiendo Python"
print(texto.upper())   # convierte a mayúsculas
print(texto.lower())   # convierte a minúsculas
print(len(texto))      # devuelve la longitud
  </pre>

  <h3 style="color: #00ffff; font-size: 16px;">5.3. Booleanos (bool)</h3>

  <p>
  El tipo booleano sólo tiene dos valores posibles: <code>True</code> y <code>False</code>. Se usan principalmente en estructuras de control como condicionales o bucles, donde las decisiones dependen del resultado de una evaluación lógica (<strong>GeeksforGeeks, 2023</strong>).
  </p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
activo = True
if activo:
    print("El sistema está activo")
else:
    print("El sistema está inactivo")

edad = 18
print(edad >= 18)  # True
print(edad < 0)    # False
  </pre>

  <h3 style="color: #00ffff; font-size: 16px;">5.4. Importancia de los tipos básicos</h3>

  <p>
  Dominar estos tres tipos —<code>números</code>, <code>cadenas</code> y <code>booleanos</code>— permite al estudiante comprender cómo se almacenan, transforman e interpretan los datos en un programa (<strong>Real Python, 2024</strong>). A partir de ellos se construyen estructuras más avanzadas como listas, tuplas y diccionarios, pero dominar los tipos básicos es indispensable para desarrollar programas correctos y eficientes.
  </p>

  <h3 style="color: #00ffff; font-size: 16px;">Ejemplo integrador</h3>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
nombre = input("Ingrese su nombre: ")
edad = int(input("Ingrese su edad: "))
mayor = edad >= 18

print("Hola,", nombre)
print("Tu edad es:", edad)
print("¿Eres mayor de edad?", mayor)
  </pre>

  <p>
  En este programa: <code>nombre</code> es una cadena (<code>str</code>), <code>edad</code> es un número entero (<code>int</code>) y <code>mayor</code> es un booleano (<code>bool</code>). Cada tipo cumple una función específica dentro del flujo lógico del programa.
  </p>

</section>



    
    `,
    ejemplos: `
    <section style="color: white; text-align: justify; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.8;">

  <h2 style="color: #00ffff; font-size: 16px;">Ejemplo 1. “¡Hola, mundo!” – Primer programa</h2>

  <p><strong>Planteamiento del problema:</strong> Comprobar que el entorno de Python está correctamente instalado y puede ejecutar un programa simple que muestre un mensaje en pantalla.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
# Programa 1: Primer mensaje en Python
print("¡Hola, mundo!")
  </pre>

  <p><strong>Explicación:</strong> Este es el clásico programa de inicio. Permite verificar que Python funciona correctamente y que el estudiante comprende cómo escribir y ejecutar un script básico.</p>

  <h2 style="color: #00ffff; font-size: 16px;">Ejemplo 2. Saludo personalizado</h2>

  <p><strong>Planteamiento del problema:</strong> Crear un programa que solicite el nombre del usuario y muestre un mensaje de saludo personalizado.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
# Programa 2: Saludo personalizado
nombre = input("Ingrese su nombre: ")
print("Hola,", nombre, "¡bienvenido a Python!")
  </pre>

  <p><strong>Explicación:</strong> Se introduce la función <code>input()</code> para la lectura de datos desde el teclado. El programa combina entrada y salida de datos de forma sencilla.</p>

  <h2 style="color: #00ffff; font-size: 16px;">Ejemplo 3. Operaciones aritméticas</h2>

  <p><strong>Planteamiento del problema:</strong> Realizar operaciones básicas entre dos números ingresados por teclado.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
# Programa 3: Operaciones con números
a = int(input("Ingrese el primer número: "))
b = int(input("Ingrese el segundo número: "))

print("Suma:", a + b)
print("Resta:", a - b)
print("Multiplicación:", a * b)
print("División:", a / b)
  </pre>

  <p><strong>Explicación:</strong> Introduce el uso de variables numéricas y operadores aritméticos. También muestra cómo convertir los datos ingresados a tipo entero (<code>int</code>).</p>

  <h2 style="color: #00ffff; font-size: 16px;">Ejemplo 4. Cálculo del área de un triángulo</h2>

  <p><strong>Planteamiento del problema:</strong> Calcular el área de un triángulo a partir de su base y altura ingresadas por el usuario.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
# Programa 4: Cálculo del área de un triángulo
base = float(input("Ingrese la base del triángulo: "))
altura = float(input("Ingrese la altura del triángulo: "))

area = (base * altura) / 2
print("El área del triángulo es:", area)
  </pre>

  <p><strong>Explicación:</strong> Aplica la fórmula geométrica del área de un triángulo. Requiere comprender operaciones matemáticas básicas y tipos de datos decimales (<code>float</code>).</p>

  <h2 style="color: #00ffff; font-size: 16px;">Ejemplo 5. Evaluación de edad (uso de condicional)</h2>

  <p><strong>Planteamiento del problema:</strong> Determinar si una persona es mayor o menor de edad según el valor ingresado.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
# Programa 5: Evaluar si el usuario es mayor de edad
edad = int(input("Ingrese su edad: "))
mayor = edad >= 18

if mayor:
    print("Eres mayor de edad.")
else:
    print("Eres menor de edad.")
  </pre>

  <p><strong>Explicación:</strong> Introduce el tipo booleano (<code>bool</code>) y la estructura condicional <code>if-else</code>. Permite comprender cómo tomar decisiones en un programa.</p>

  <h2 style="color: #00ffff; font-size: 16px;">Ejemplo 6. Cálculo del área de un círculo (uso de módulo math)</h2>

  <p><strong>Planteamiento del problema:</strong> Calcular el área de un círculo usando la constante π (<code>pi</code>). El radio será ingresado por el usuario.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
# Programa 6: Cálculo del área de un círculo
import math

radio = float(input("Ingrese el radio del círculo: "))
area = math.pi * radio ** 2
print("El área del círculo es:", area)
  </pre>

  <p><strong>Explicación:</strong> Introduce la importación de módulos (<code>import math</code>) y el uso de funciones matemáticas predefinidas. Refuerza el uso de variables y operadores.</p>

  <h2 style="color: #00ffff; font-size: 16px;">Ejemplo 7. Cálculo del promedio de notas (uso de funciones)</h2>

  <p><strong>Planteamiento del problema:</strong> Calcular el promedio de tres notas ingresadas por el usuario, utilizando una función personalizada.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
# Programa 7: Función para calcular el promedio de tres notas
def calcular_promedio(n1, n2, n3):
    return (n1 + n2 + n3) / 3

nota1 = float(input("Ingrese la primera nota: "))
nota2 = float(input("Ingrese la segunda nota: "))
nota3 = float(input("Ingrese la tercera nota: "))

promedio = calcular_promedio(nota1, nota2, nota3)
print("El promedio es:", promedio)
  </pre>

  <p><strong>Explicación:</strong> Introduce la definición y uso de funciones (<code>def</code>). Fomenta la reutilización del código y la organización modular.</p>

  <h2 style="color: #00ffff; font-size: 16px;">Ejemplo 8. Evaluación de rendimiento académico (programa completo)</h2>

  <p><strong>Planteamiento del problema:</strong> Evaluar si un estudiante ha aprobado o desaprobado según su nota final. Incluye funciones, entrada de datos y bloque principal.</p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
# Programa 8: Evaluación de rendimiento académico
def evaluar_estudiante(nombre, nota):
    if nota >= 11:
        print(nombre, "ha aprobado con nota", nota)
    else:
        print(nombre, "ha desaprobado con nota", nota)

if __name__ == "__main__":
    estudiante = input("Ingrese el nombre del estudiante: ")
    nota = float(input("Ingrese la nota obtenida: "))
    evaluar_estudiante(estudiante, nota)
  </pre>

  <p><strong>Explicación:</strong> Integra funciones, condicionales, tipos de datos y el bloque principal <code>if __name__ == "__main__":</code>. Es un ejemplo completo de lógica de decisión y modularidad.</p>

</section>

    
    
    
    
    `,
    quiz_de_entrada: `<section id="quiz_final_python" class="quiz-section" 
style="font-family:'Segoe UI', Tahoma, sans-serif; color:#fff; line-height:1.6; margin-top:30px; text-align:left;">

  <p><strong style="color:#22c1dc;">Examen  Entrada – Minicurso 3: Introducción a Python</strong></p>

  <p><strong style="color:#22c1dc;">🐍 Planteamiento:</strong> 
  Este examen tiene como objetivo evaluar tu comprensión general de los fundamentos de <strong>Python</strong>, incluyendo el uso de variables, tipos de datos, estructuras condicionales, bucles y funciones. Representa la fase final para consolidar tus aprendizajes del minicurso.</p>

  <p>
    <strong style="color:#22c1dc;"> Condición de aprobación:</strong> Nota mínima 11.<br>
    <strong style="color:#22c1dc;">Peso en la evaluación:</strong> 25 % de la nota total del Minicurso 3.
  </p>

  <p><strong style="color:#22c1dc;">📝 Indicaciones:</strong></p>
  <ul style="margin:12px 0 18px 20px; line-height:1.7; color:#fff;">
    <li>Lee con atención cada pregunta antes de responder.</li>
    <li>Aplica correctamente los conceptos aprendidos sobre la sintaxis y estructura de Python.</li>
    <li>Selecciona la alternativa correcta o desarrolla las respuestas solicitadas.</li>
    <li>Revisa tus respuestas antes de enviar el formulario.</li>
  </ul>

  <p><strong style="color:#22c1dc;"> Objetivo:</strong> 
  Evaluar tu capacidad para aplicar los principios básicos de programación en <strong>Python</strong>, demostrando tu comprensión del flujo lógico y la resolución de problemas.</p>

  <div style="text-align:center; margin-top:25px;">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfASvX147rZ6ba8WRwjqhv8hD36u9gk6MNigv5UO0UiH7eHvQ/viewform?usp=dialog" 
       target="_blank" 
       style="display:inline-block; background-color:#22c1dc; color:white; padding:12px 26px; border-radius:8px; text-decoration:none; font-weight:bold; 
              box-shadow:0 3px 6px rgba(0,0,0,0.15); transition:background-color 0.3s;">
       🧾 Iniciar Examen Final
    </a>
  </div>

</section>`
  },
  py2: {
    objetivo: `<p><strong>Objetivo:</strong> Aplicar condicionales y bucles en Python.</p>
    
    <p>   
✔️ Identificar y usar variables para almacenar y manipular distintos tipos de datos en Python. <br>
✔️ Aplicar operadores aritméticos, relacionales y lógicos para realizar cálculos y comparaciones en los programas.<br>
✔️ Diseñar estructuras condicionales y repetitivas <br>
    
   </p> 
    
    
    
    `,
    teoria: `<p><strong>Teoría:</strong></p>


<section style="color: white; text-align: justify; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.8;">

  <h2 style="color: #00ffff; font-size: 16px;">1. Variables y tipos dinámicos</h2>

  <p>
  En programación, una variable es un espacio en la memoria del computador donde se guarda un valor que puede cambiar durante la ejecución del programa. Las variables son fundamentales porque permiten almacenar información, manipularla y reutilizarla tantas veces como sea necesario sin tener que escribirla nuevamente. En Python, las variables se crean simplemente asignando un valor mediante el operador <code>=</code>. Por ejemplo:
  </p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
nombre = "Ana"
edad = 20
altura = 1.68
  </pre>

  <p>
  En este ejemplo, la variable <code>nombre</code> almacena una cadena de texto (<code>str</code>), <code>edad</code> almacena un número entero (<code>int</code>) y <code>altura</code> un número decimal (<code>float</code>). A diferencia de otros lenguajes como C o Java, donde es necesario declarar explícitamente el tipo de dato, Python utiliza un <strong>tipado dinámico</strong>. Esto significa que el intérprete detecta automáticamente el tipo de dato según el valor asignado (<strong>Python Software Foundation, 2024</strong>).
  </p>

  <p>
  El tipado dinámico ofrece gran flexibilidad, pues una misma variable puede cambiar de tipo en distintos momentos del programa. Por ejemplo:
  </p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
x = 10        # x es un entero
x = "diez"    # ahora x es una cadena
  </pre>

  <p>
  Aunque Python lo permite, no se recomienda cambiar el tipo de dato de una misma variable dentro de un programa, ya que puede generar confusión o errores lógicos difíciles de detectar (<strong>Zelle, 2022</strong>). Se aconseja mantener coherencia en el tipo de información que almacena cada variable.
  </p>

  <p>
  Las variables también pueden almacenar resultados de operaciones o expresiones. Por ejemplo:
  </p>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
suma = 4 + 5
mensaje = "El resultado es " + str(suma)
print(mensaje)
  </pre>

  <p>
  En este caso, se realiza una suma numérica y luego se convierte el resultado a texto con la función <code>str()</code> para poder concatenarlo con la cadena <code>"El resultado es"</code>. Esto ilustra cómo las variables pueden combinarse con funciones y operadores para crear salidas personalizadas.
  </p>

  <p>
  En cuanto a la nomenclatura, Python recomienda seguir el estilo <strong>snake_case</strong>, que consiste en escribir los nombres de variables en minúsculas y separar las palabras con guiones bajos (<code>_</code>). Por ejemplo: <code>nombre_estudiante</code>, <code>precio_total</code> o <code>nota_final</code>. Además, se deben evitar nombres genéricos como <code>x</code> o <code>dato</code>, ya que dificultan la comprensión del código (<strong>Pylint Guidelines, 2023</strong>).
  </p>

  <p>
  En resumen, las variables son uno de los pilares de la programación en Python. Gracias a su tipado dinámico y sintaxis simple, permiten trabajar de manera rápida y eficiente, favoreciendo la escritura de código claro y legible, especialmente en las etapas iniciales de aprendizaje.
  </p>

</section>

<section style="color: white; text-align: justify; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.8;">

  <h2 style="color: #00ffff; font-size: 16px;">2. Operadores aritméticos, relacionales y lógicos</h2>

  <p>
  En programación, los operadores son símbolos que permiten realizar operaciones sobre los datos. En Python, estos operadores se agrupan principalmente en tres categorías: aritméticos, relacionales y lógicos. Cada grupo cumple una función específica dentro de la construcción de algoritmos, ya sea para efectuar cálculos, comparar valores o establecer condiciones que determinen el flujo del programa.
  </p>

  <h3 style="color: #00ffff; font-size: 16px;">2.1. Operadores aritméticos</h3>

  <p>
  Los operadores aritméticos se utilizan para realizar cálculos matemáticos básicos, como sumas, restas, multiplicaciones o divisiones. Python incluye además operadores adicionales, como la división entera, el módulo y la potencia.
  </p>

  <table style="color: white; margin-left: 20px; margin-bottom: 10px; border-collapse: collapse;">
    <tr>
      <th style="padding: 4px 8px; text-align: left;">Operador</th>
      <th style="padding: 4px 8px; text-align: left;">Descripción</th>
      <th style="padding: 4px 8px; text-align: left;">Ejemplo</th>
      <th style="padding: 4px 8px; text-align: left;">Resultado</th>
    </tr>
    <tr><td>+</td><td>Suma</td><td>5 + 3</td><td>8</td></tr>
    <tr><td>-</td><td>Resta</td><td>7 - 2</td><td>5</td></tr>
    <tr><td>*</td><td>Multiplicación</td><td>4 * 2</td><td>8</td></tr>
    <tr><td>/</td><td>División</td><td>9 / 2</td><td>4.5</td></tr>
    <tr><td>//</td><td>División entera</td><td>9 // 2</td><td>4</td></tr>
    <tr><td>%</td><td>Módulo (resto)</td><td>9 % 2</td><td>1</td></tr>
    <tr><td>**</td><td>Potencia</td><td>2 ** 3</td><td>8</td></tr>
  </table>

  <pre style="background-color: #111; color: #00ffff; padding: 10px; border-radius: 8px;">
precio = 50
descuento = 10
total = precio - (precio * descuento / 100)
print("El total a pagar es:", total)
  </pre>

  <p>
  En este ejemplo se aplica un descuento porcentual al precio de un producto. Los operadores permiten combinar diferentes operaciones en una sola expresión, facilitando el cálculo automático de resultados.
  </p>

  <h3 style="color: #00ffff; font-size: 16px;">2.2. Operadores relacionales</h3>

  <p>
  Los operadores relacionales se utilizan para comparar valores y devuelven un resultado booleano (<code>True</code> o <code>False</code>). Son esenciales en estructuras condicionales como <code>if</code>, <code>elif</code> o <code>while</code>.
  </p>

  <table style="color: white; margin-left: 20px; margin-bottom: 10px; border-collapse: collapse;">
    <tr>
      <th style="padding: 4px 8px; text-align: left;">Operador</th>
      <th style="padding: 4px 8px; text-align: left;">Significado</th>
      <th style="padding: 4px 8px; text-align: left;">Ejemplo</th>
      <th style="padding: 4px 8px; text-align: left;">Resultado</th>
    </tr>
    <tr><td>==</td><td>Igualdad</td><td>5 == 5</td><td>True</td></tr>
    <tr><td>!=</td><td>Diferente</td><td>5 != 3</td><td>True</td></tr>
    <tr><td>></td><td>Mayor que</td><td>8 > 2</td><td>True</td></tr>
    <tr><td><</td><td>Menor que</td><td>3 < 7</td><td>True</td></tr>
    <tr><td>>=</td><td>Mayor o igual</td><td>5 >= 5</td><td>True</td></tr>
    <tr><td><=</td><td>Menor o igual</td><td>4 <= 2</td><td>False</td></tr>
  </table>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
nota = 15
if nota >= 11:
    print("Aprobado")
else:
    print("Desaprobado")
  </pre>

  <p>
  En este caso, el operador relacional <code>>=</code> compara la variable <code>nota</code> con el valor 11 para determinar si el estudiante aprobó.
  </p>

  <h3 style="color: #00ffff; font-size: 16px;">2.3. Operadores lógicos</h3>

  <p>
  Los operadores lógicos permiten combinar varias condiciones relacionales en una sola expresión. Se utilizan para crear decisiones más complejas dentro del flujo del programa.
  </p>

  <table style="color: white; margin-left: 20px; margin-bottom: 10px; border-collapse: collapse;">
    <tr>
      <th style="padding: 4px 8px; text-align: left;">Operador</th>
      <th style="padding: 4px 8px; text-align: left;">Descripción</th>
      <th style="padding: 4px 8px; text-align: left;">Ejemplo</th>
      <th style="padding: 4px 8px; text-align: left;">Resultado</th>
    </tr>
    <tr><td>and</td><td>Devuelve True si ambas condiciones son verdaderas</td><td>(5 > 2) and (3 < 4)</td><td>True</td></tr>
    <tr><td>or</td><td>Devuelve True si al menos una condición es verdadera</td><td>(5 > 10) or (4 == 4)</td><td>True</td></tr>
    <tr><td>not</td><td>Invierte el valor lógico</td><td>not (5 > 2)</td><td>False</td></tr>
  </table>

  <pre style="background-color: #111; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
edad = 18
if edad >= 18 and edad <= 65:
    print("Edad laboral activa")
  </pre>

  <p>
  En este ejemplo, la condición combina dos comparaciones con el operador lógico <code>and</code>, verificando que la edad esté dentro del rango laboral activo.
  </p>

  <p>
  Los operadores lógicos son esenciales para la toma de decisiones múltiples, el control de flujo y la validación de datos dentro de programas de cualquier nivel de complejidad (<strong>Lutz, 2021</strong>). El dominio de los operadores en Python permite construir programas más funcionales y precisos. Saber cómo y cuándo utilizar operadores aritméticos, relacionales y lógicos es fundamental para resolver problemas mediante código, ya que son la base de toda operación matemática, comparación y decisión condicional.
  </p>

</section>
<section style="color: white; text-align: justify; margin: 30px; font-size: 15px; line-height: 1.8;">

  <h3 style="color: #00ffff; font-size: 18px;">3. Condicionales if, elif, else</h3>

  <p>
    Las estructuras condicionales constituyen una de las herramientas más poderosas y fundamentales en la programación, ya que permiten controlar el flujo de ejecución del programa en función de decisiones lógicas. Dicho de otro modo, el programa puede “elegir” qué instrucciones ejecutar dependiendo de ciertas condiciones que se cumplan o no (<strong>Downey, 2020</strong>).
    En <strong>Python</strong>, estas decisiones se implementan mediante las palabras clave <code>if</code>, <code>elif</code> y <code>else</code>, las cuales se evalúan secuencialmente y determinan el camino que seguirá el programa durante su ejecución.
  </p>

  <p>
    A nivel conceptual, las condicionales permiten que un programa responda de manera dinámica ante distintas situaciones, como validar la edad de un usuario, calcular descuentos según el monto de compra o verificar contraseñas antes de conceder acceso. Sin ellas, los programas serían puramente secuenciales y no podrían adaptarse a condiciones cambiantes.
  </p>

  <h4 style="color: #b6d5d5ff; font-size: 16px;">3.1. Sintaxis y funcionamiento básico</h4>

  <p>La estructura general de una condicional en Python es la siguiente:</p>

  <pre style="background-color: #1a1a1a; color: #00ffcc; padding: 10px; border-radius: 8px;">
if condición:
    # código que se ejecuta si la condición es verdadera
elif otra_condición:
    # código que se ejecuta si la primera condición no se cumple pero esta sí
else:
    # código que se ejecuta si ninguna condición se cumple
  </pre>

  <p>
    <strong>Explicación:</strong>  
    La palabra clave <code>if</code> inicia la evaluación lógica. Si la condición es verdadera (<code>True</code>), se ejecuta el bloque de código que le sigue.  
    Si la condición no se cumple, se evalúa la siguiente mediante <code>elif</code> (abreviación de <em>else if</em>).  
    Si ninguna de las condiciones previas se cumple, el bloque <code>else</code> se ejecuta como alternativa final.  
    Cada bloque debe estar indentado (sangrado), generalmente con 4 espacios (<strong>Lutz, 2021</strong>).
  </p>

  <p><strong>Ejemplo práctico: Clasificación por edad</strong></p>

  <pre style="background-color: #1a1a1a; color: #00ffcc; padding: 10px; border-radius: 8px;">
edad = int(input("Ingrese su edad: "))

if edad < 18:
    print("Eres menor de edad")
elif edad >= 18 and edad < 65:
    print("Eres adulto")
else:
    print("Eres adulto mayor")
  </pre>

  <p>
    Este flujo de evaluación de condiciones es lineal y exclusivo: solo uno de los bloques se ejecuta, incluso si varias condiciones fueran verdaderas.
  </p>

  <h4 style="color: #b6d5d5ff; font-size: 16px;">3.2. Uso de operadores</h4>

  <p>
    Las condiciones pueden combinar operadores relacionales y lógicos para construir expresiones más complejas:
  </p>

  <ul>
    <li><strong>Relacionales:</strong> ==, !=, &lt;, &gt;, &lt;=, &gt;=</li>
    <li><strong>Lógicos:</strong> and, or, not</li>
  </ul>

  <p><strong>Ejemplo de aplicación combinada:</strong></p>

  <pre style="background-color: #1a1a1a; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
nota = float(input("Ingrese su nota final: "))

if nota >= 17:
    print("Excelente desempeño")
elif nota >= 13 and nota < 17:
    print("Aprobado")
elif nota >= 10 and nota < 13:
    print("En recuperación")
else:
    print("Desaprobado")
  </pre>

  <p>
    El operador <code>and</code> asegura que ambas condiciones sean verdaderas para ejecutar el bloque correspondiente.
    Si se introduce una nota menor que 10, el programa llega al <code>else</code> y muestra “Desaprobado”.
  </p>

  <h4 style="color: #00ffff; font-size: 16px;">3.3. Condicionales anidadas</h4>

  <p>
    En algunos casos, las decisiones pueden depender de múltiples niveles de verificación. Las condicionales anidadas permiten incluir un bloque <code>if</code> dentro de otro, creando estructuras jerárquicas de decisión.
  </p>

  <pre style="background-color: #1a1a1a; color: #00ffcc; padding: 10px; border-radius: 8px;">
usuario = input("Ingrese su rol (admin/usuario): ")
clave = input("Ingrese su clave: ")

if usuario == "admin":
    if clave == "1234":
        print("Acceso concedido al administrador")
    else:
        print("Clave incorrecta")
else:
    print("Acceso restringido a usuarios registrados")
  </pre>

  <p>
    Este tipo de estructura es común en sistemas de autenticación o control de acceso. No obstante, un exceso de anidamiento puede dificultar la lectura del código (<strong>Lutz, 2021</strong>).
  </p>

  <h4 style="color: #b6d5d5ff; font-size: 16px;">3.4. Condicionales abreviadas</h4>

  <p>
    Python ofrece una sintaxis más compacta para condicionales simples, conocida como <strong>expresión condicional o ternaria</strong>:
  </p>

  <pre style="background-color: #1a1a1a; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
edad = int(input("Ingrese su edad: "))
mensaje = "Mayor de edad" if edad >= 18 else "Menor de edad"
print(mensaje)
  </pre>

  <p>
    Esta forma resulta útil para asignar valores rápidamente sin tener que escribir múltiples líneas de <code>if</code> y <code>else</code>.
  </p>

  <p><strong>Evaluación booleana implícita</strong></p>

  <pre style="background-color: #1a1a1a; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
nombre = input("Ingrese su nombre: ")

if nombre:
    print("Hola,", nombre)
else:
    print("No ingresó ningún nombre")
  </pre>

  <p>
    Aquí, una cadena vacía (<code>""</code>) se considera falsa, mientras que cualquier texto no vacío se considera verdadero.
    Este comportamiento se aplica también a listas, tuplas y otros tipos de datos (<strong>Python Software Foundation, 2024</strong>).
  </p>

  <h4 style="color: #00ffff; font-size: 16px;">3.5. Importancia pedagógica y práctica</h4>

  <p>
    El aprendizaje de las estructuras condicionales introduce a los estudiantes en el razonamiento lógico algorítmico. Con ellas, los programas pueden:
  </p>

  <ul>
    <li>Tomar decisiones según datos introducidos por el usuario.</li>
    <li>Adaptarse a distintas situaciones o entradas.</li>
    <li>Evitar errores lógicos.</li>
    <li>Fomentar la abstracción lógica.</li>
  </ul>

  <p>
    Según <strong>Downey (2020)</strong>, dominar las estructuras condicionales es esencial para construir algoritmos robustos.  
    <strong>Lutz (2021)</strong> destaca que las decisiones condicionales son el núcleo de la “inteligencia” en los programas.
  </p>

  <p><strong>Ejemplo integrador: Clasificación de números</strong></p>

  <pre style="background-color: #1a1a1a; color: #b6d5d5ff; padding: 10px; border-radius: 8px;">
numero = float(input("Ingrese un número: "))

if numero > 0:
    print("El número es positivo")
elif numero == 0:
    print("El número es cero")
else:
    print("El número es negativo")
  </pre>

  <p>
    Este ejemplo resume el comportamiento condicional clásico y muestra cómo el programa selecciona la ruta correcta de ejecución.
  </p>

</section>
<section style="color: white; text-align: justify; margin: 30px; font-size: 15px; line-height: 1.8;">

  <h3 style="color:#b6d5d5ff; font-size: 18px;">4. Bucles <em>for</em> y <em>while</em></h3>

  <p>
    En programación, muchas tareas requieren repetir un conjunto de instrucciones varias veces. 
    Por ejemplo, mostrar una lista de nombres, calcular promedios o imprimir una tabla de multiplicar. 
    Escribir esas mismas instrucciones una por una sería ineficiente.  
    Por ello, los lenguajes de programación incorporan <strong>estructuras de repetición o bucles</strong>, 
    que permiten ejecutar automáticamente un bloque de código tantas veces como sea necesario 
    (<strong>Downey, 2020</strong>).
  </p>

  <p>
    En <strong>Python</strong>, los dos bucles más usados son <code>for</code> y <code>while</code>. 
    Aunque ambos repiten código, se diferencian por su control de repetición:
  </p>

  <table style="width:100%; border-collapse: collapse; text-align:center; color:white; margin: 10px 0;">
    <tr style="background-color:#00ffff33;">
      <th style="padding:6px; border:1px solid #00ffff;">Bucle</th>
      <th style="padding:6px; border:1px solid #00ffff;">Uso principal</th>
    </tr>
    <tr>
      <td style="padding:6px; border:1px solid #00ffff;"><code>for</code></td>
      <td style="padding:6px; border:1px solid #00ffff;">Cuando se conoce el número de iteraciones o se recorre una secuencia.</td>
    </tr>
    <tr>
      <td style="padding:6px; border:1px solid #00ffff;"><code>while</code></td>
      <td style="padding:6px; border:1px solid #00ffff;">Cuando la repetición depende de una condición lógica variable.</td>
    </tr>
  </table>

  <h4 style="color: #00ffff; font-size: 16px;">4.1. Bucle <em>for</em></h4>

  <p>
    El bucle <code>for</code> se utiliza para recorrer secuencias como listas, cadenas, rangos o tuplas.
  </p>

  <pre style="background-color:#1a1a1a; color:#00ffcc; padding:10px; border-radius:8px;">
for variable in secuencia:
    # Bloque de código a repetir
  </pre>

  <ul>
    <li><strong>variable:</strong> almacena temporalmente el valor actual del elemento.</li>
    <li><strong>secuencia:</strong> conjunto de elementos a recorrer.</li>
  </ul>

  <h5 style="color:#00ffff; font-size:15px;">Uso con <code>range()</code></h5>

  <p>
    La función <code>range()</code> genera una secuencia numérica:
  </p>

  <table style="width:100%; border-collapse:collapse; color:white; margin:10px 0;">
    <tr style="background-color:#00ffff33;">
      <th style="padding:6px; border:1px solid #00ffff;">Sintaxis</th>
      <th style="padding:6px; border:1px solid #00ffff;">Descripción</th>
    </tr>
    <tr>
      <td style="padding:6px; border:1px solid #00ffff;"><code>range(inicio, fin, paso)</code></td>
      <td style="padding:6px; border:1px solid #00ffff;">
        <strong>inicio:</strong> desde dónde empieza (por defecto 0).<br>
        <strong>fin:</strong> hasta dónde llega (no incluido).<br>
        <strong>paso:</strong> incremento entre números (por defecto 1).
      </td>
    </tr>
  </table>

  <pre style="background-color:#1a1a1a; color:#00ffcc; padding:10px; border-radius:8px;">
for i in range(1, 6):
    print("Iteración número:", i)
  </pre>

  <p><strong>Salida:</strong></p>
  <pre style="background-color:#0d0d0d; color:#b6d5d5ff; padding:10px; border-radius:8px;">
Iteración número: 1
Iteración número: 2
Iteración número: 3
Iteración número: 4
Iteración número: 5
  </pre>

  <p>
    Este tipo de bucle es ideal cuando sabemos cuántas veces queremos repetir algo.
  </p>

  <h5 style="color:#00ffff; font-size:15px;">Recorrido de listas</h5>

  <pre style="background-color:#1a1a1a; color:#b6d5d5ff; padding:10px; border-radius:8px;">
frutas = ["manzana", "pera", "uva"]
for fruta in frutas:
    print("Me gusta la", fruta)
  </pre>

  <h5 style="color:#00ffff; font-size:15px;">Iterar sobre cadenas de texto</h5>

  <pre style="background-color:#1a1a1a; color:#b6d5d5ff; padding:10px; border-radius:8px;">
palabra = "Python"
for letra in palabra:
    print(letra)
  </pre>

  <p>
    Cada carácter se procesa individualmente, útil en conteo o validación de texto.
  </p>

  <h5 style="color:#00ffff; font-size:15px;">Control de flujo dentro del <em>for</em></h5>

  <p><strong>Instrucciones especiales:</strong></p>

  <table style="width:100%; border-collapse:collapse; text-align:center; color:white;">
    <tr style="background-color:#00ffff33;">
      <th style="padding:6px; border:1px solid #00ffff;">Instrucción</th>
      <th style="padding:6px; border:1px solid #00ffff;">Función</th>
    </tr>
    <tr>
      <td style="padding:6px; border:1px solid #00ffff;"><code>break</code></td>
      <td style="padding:6px; border:1px solid #00ffff;">Termina el bucle antes de tiempo.</td>
    </tr>
    <tr>
      <td style="padding:6px; border:1px solid #00ffff;"><code>continue</code></td>
      <td style="padding:6px; border:1px solid #00ffff;">Salta a la siguiente iteración.</td>
    </tr>
  </table>

  <pre style="background-color:#1a1a1a; color:#00ffcc; padding:10px; border-radius:8px;">
for numero in range(1, 10):
    if numero == 5:
        break
    print("Número:", numero)
  </pre>

  <h4 style="color: #00ffff; font-size: 16px;">4.2. Bucle <em>while</em></h4>

  <p>
    El bucle <code>while</code> ejecuta un bloque mientras se cumpla una condición.
  </p>

  <pre style="background-color:#1a1a1a; color:#00ffcc; padding:10px; border-radius:8px;">
while condición:
    # Bloque de código
  </pre>

  <p><strong>Ejemplo básico:</strong></p>

  <pre style="background-color:#1a1a1a; color:#b6d5d5ff; padding:10px; border-radius:8px;">
contador = 1
while contador <= 5:
    print("Contando:", contador)
    contador += 1
  </pre>

  <p>
    Cuando la condición deja de cumplirse, el bucle termina.
  </p>

  <h5 style="color:#00ffff; font-size:15px;">Validación de entrada</h5>

  <pre style="background-color:#1a1a1a; color:#b6d5d5ff; padding:10px; border-radius:8px;">
clave = ""
while clave != "python123":
    clave = input("Ingrese la clave: ")
print("Acceso concedido")
  </pre>

  <p>
    El programa pedirá la contraseña hasta que se ingrese la correcta.
  </p>

  <h5 style="color:#00ffff; font-size:15px;">Evitar bucles infinitos</h5>

  <p>
    Si la variable de control no cambia, el programa no termina.
  </p>

  <pre style="background-color:#1a1a1a; color:#b6d5d5ff; padding:10px; border-radius:8px;">
contador = 1
while contador <= 5:
    print(contador)
# Falta contador += 1 → bucle infinito
  </pre>

  <p>
    Para evitarlo, siempre debe existir una condición de salida clara (<strong>Moreno et al., 2020</strong>).
  </p>

  <h4 style="color: #00ffff; font-size: 16px;">4.3. Combinación de bucles y condicionales</h4>

  <p><strong>Ejemplo: clasificación de números pares e impares</strong></p>

  <pre style="background-color:#1a1a1a; color:#b6d5d5ff; padding:10px; border-radius:8px;">
for i in range(1, 11):
    if i % 2 == 0:
        print(i, "es par")
    else:
        print(i, "es impar")
  </pre>

  <h5 style="color:#00ffff; font-size:15px;">Ejemplo: suma de precios</h5>

  <pre style="background-color:#1a1a1a; color:#b6d5d5ff; padding:10px; border-radius:8px;">
precios = [10, 20, 30, 40]
total = 0

for precio in precios:
    total += precio

print("El total de la compra es:", total)
  </pre>

  <p>
    Este programa demuestra el poder de los bucles para automatizar tareas repetitivas.
  </p>

  <h4 style="color: #00ffff; font-size: 16px;">4.4. Buenas prácticas</h4>

  <ul>
    <li>Definir siempre una condición de salida clara en los <code>while</code>.</li>
    <li>No modificar la secuencia mientras se recorre con <code>for</code>.</li>
    <li>Usar nombres descriptivos como <em>contador</em> o <em>precio</em>.</li>
    <li>Mantener indentación consistente (4 espacios).</li>
    <li>Comentar el código cuando la lógica sea compleja.</li>
  </ul>

  <h4 style="color: #00ffff; font-size: 16px;">4.5. Aplicaciones</h4>

  <ul>
    <li>Procesamiento de datos y estadísticas.</li>
    <li>Automatización de tareas administrativas.</li>
    <li>Análisis de archivos y lectura de registros.</li>
    <li>Creación de videojuegos (movimiento, turnos).</li>
    <li>Inteligencia artificial (entrenamiento iterativo de modelos).</li>
  </ul>

  <p>
    Los bucles <code>for</code> y <code>while</code> son pilares de la programación estructurada.  
    Permiten repetir, controlar y automatizar el código, haciendo los programas más eficientes.  
    Comprender sus diferencias y aplicarlos correctamente es clave para desarrollar pensamiento computacional avanzado 
    (<strong>Downey, 2020; Lutz, 2021; Moreno et al., 2020</strong>).
  </p>

</section>
<section style="color: white; text-align: justify; margin-left: 0px; margin-right: 10px; font-size: 15px; line-height: 1.8;">

  <h2 style="color: #00ffff; font-size: 15px;">🎥 Videos recomendados</h2>

  <p>
    Dimas. (2021, abril 12). <strong>¿Cómo hacer un BUCLE ♾️ en PYTHON? (Con EJEMPLOS incluidos) | Curso PYTHON desde CERO #5</strong> [Video]. YouTube.  
    <a href="https://www.youtube.com/watch?v=moUHTWl7QCQ" style="color: #66ccff;">https://www.youtube.com/watch?v=moUHTWl7QCQ</a>
  </p>

  <p>
    OMES. (2023, junio 26). <strong>Bucle for | Curso de Python desde cero 🐍</strong> [Video]. YouTube.  
    <a href="https://www.youtube.com/watch?v=AP8-5GRwPig" style="color: #66ccff;">https://www.youtube.com/watch?v=AP8-5GRwPig</a>
  </p>

  <p>
    Sergio A. Castaño Giraldo. (2021, abril 26). <strong>Bucle While en Python desde Cero ♻️ [Continue y Break]</strong> [Video]. YouTube.  
    <a href="https://www.youtube.com/watch?v=nQxWthR71PI" style="color: #66ccff;">https://www.youtube.com/watch?v=nQxWthR71PI</a>
  </p>

</section>

    
    `,
    ejemplos: `
<section style="background-color:#0a0a0a; color:#e6e6e6; font-family: Arial, sans-serif; line-height:1.7; padding:25px; border-radius:12px;">

  <h2 style="color:#00bfff; font-size:26px; text-align:left; margin-bottom:25px;">💡 Ejemplos prácticos en Python (niveles progresivos)</h2>

  <!-- Ejemplo 1 -->
  <h3 style="color:#00bfff; font-size:20px;">Ejemplo 1</h3>
  <p><strong>Enunciado:</strong> Pedir al usuario su nombre y saludarlo.</p>
  <div style="background-color:#161b22; color:#b6d5d5ff; padding:14px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
nombre = input("Ingrese su nombre: ")
print("Hola,", nombre, "- bienvenido al curso de Python.")
  </div>
  <p><em>Nota:</em> Uso de variable tipo cadena, función <code>input()</code>, y <code>print()</code>. No incluye condicionales ni bucles. Ideal para principiantes.</p>

  <!-- Ejemplo 2 -->
  <h3 style="color:#00bfff; font-size:20px;">Ejemplo 2</h3>
  <p><strong>Enunciado:</strong> Leer un número entero y determinar si es mayor, igual o menor que 10.</p>
  <div style="background-color:#161b22; color:#b6d5d5ff; padding:14px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
n = int(input("Ingrese un número entero: "))
if n > 10:
    print("El número es mayor que 10.")
elif n == 10:
    print("El número es igual a 10.")
else:
    print("El número es menor que 10.")
  </div>
  <p><em>Nota:</em> Introduce condicionales <code>if-elif-else</code> y operadores relacionales. No incluye bucles.</p>

  <!-- Ejemplo 3 -->
  <h3 style="color:#00bfff; font-size:20px;">Ejemplo 3</h3>
  <p><strong>Enunciado:</strong> Calcular la suma de los primeros n números positivos (donde n lo define el usuario).</p>
  <div style="background-color:#161b22; color:#b6d5d5ff; padding:14px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
n = int(input("¿Cuántos números sumaremos? "))
suma = 0
for i in range(1, n+1):
    suma += i
print("La suma de los primeros", n, "números es:", suma)
  </div>
  <p><em>Nota:</em> Introduce bucle <code>for</code>, acumulador (<code>suma</code>), uso de <code>range()</code>. Buen puente hacia estructuras repetitivas.</p>

  <!-- Ejemplo 4 -->
  <h3 style="color:#00bfff; font-size:20px;">Ejemplo 4</h3>
  <p><strong>Enunciado:</strong> Leer 5 calificaciones (0–20) y mostrar el promedio, el mayor y el menor valor ingresado.</p>
  <div style="background-color:#161b22; color:#b6d5d5ff; padding:14px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
suma = 0.0
mayor = -1
menor = 100
for i in range(5):
    nota = float(input(f"Ingrese la nota {i+1} (0-20): "))
    suma += nota
    if nota > mayor:
        mayor = nota
    if nota < menor:
        menor = nota
promedio = suma / 5
print("Promedio:", promedio)
print("Mayor nota:", mayor)
print("Menor nota:", menor)
  </div>
  <p><em>Nota:</em> Combina bucle y condicionales dentro del bucle. Introduce inicialización cuidadosa de variables límite.</p>

  <!-- Ejemplo 5 -->
  <h3 style="color:#00bfff; font-size:20px;">Ejemplo 5</h3>
  <p><strong>Enunciado:</strong> Leer números hasta que el usuario ingrese 0; contar cuántos positivos hay, su suma y promedio.</p>
  <div style="background-color:#161b22; color:#b6d5d5ff; padding:14px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
contador = 0
suma = 0.0
while True:
    n = float(input("Ingrese un número (0 para terminar): "))
    if n == 0:
        break
    if n > 0:
        contador += 1
        suma += n
if contador > 0:
    promedio = suma / contador
    print("Cantidad de positivos:", contador)
    print("Suma de positivos:", suma)
    print("Promedio de positivos:", promedio)
else:
    print("No se ingresaron números positivos.")
  </div>
  <p><em>Nota:</em> Usa bucle <code>while</code> infinito con <code>break</code> y condicional dentro del bucle. Ejercicio ideal de razonamiento algorítmico.</p>

  <!-- Ejemplo 6 -->
  <h3 style="color:#00bfff; font-size:20px;">Ejemplo 6 – Nivel avanzado</h3>
  <p><strong>Enunciado:</strong> Leer edades hasta que se introduzca una negativa; contar cuántas personas están entre 18 y 65 años.</p>
  <div style="background-color:#161b22; color:#b6d5d5ff; padding:14px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
contador_activa = 0
while True:
    edad = int(input("Ingrese edad (negativo para terminar): "))
    if edad < 0:
        break
    if edad >= 18 and edad <= 65:
        contador_activa += 1
print("Cantidad de personas en edad laboral activa:", contador_activa)
  </div>
  <p><em>Nota:</em> Incluye operadores lógicos <code>and</code>, bucle con condición de paro y conteo selectivo.</p>

  <!-- Ejemplo 7 -->
  <h3 style="color:#00bfff; font-size:20px;">Ejemplo 7 – Nivel difícil</h3>
  <p><strong>Enunciado:</strong> Calcular el total a pagar considerando descuentos del 10% si el precio supera 1000.</p>
  <div style="background-color:#161b22; color:#b6d5d5ff; padding:14px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
n = int(input("¿Cuántos precios ingresará? "))
total = 0.0
contador_desc = 0
for i in range(n):
    precio = float(input(f"Ingrese precio del producto {i+1}: "))
    if precio > 1000:
        precio = precio * 0.9
        contador_desc += 1
    total += precio
print("Total a pagar:", total)
print("Cantidad de productos con descuento:", contador_desc)
  </div>
  <p><em>Nota:</em> Requiere bucle, condicional, acumuladores y conteo. Muy útil para escenarios comerciales.</p>

  <!-- Ejemplo 8 -->
  <h3 style="color:#00bfff; font-size:20px;">Ejemplo 8 – Nivel muy difícil (Integrador)</h3>
  <p><strong>Enunciado:</strong> Juego donde el usuario intenta adivinar un número entre 1 y 50 (máximo 7 intentos).</p>
  <div style="background-color:#161b22; color:#e0e0e0; padding:14px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
import random
secreto = random.randint(1, 50)
intentos = 0
max_intentos = 7
while intentos < max_intentos:
    intentos += 1
    n = int(input(f"Intento {intentos} de {max_intentos}. Ingrese número (1-50): "))
    if n == secreto:
        print("¡Ganaste! Número correcto:", secreto)
        break
    elif n < secreto:
        print("El número secreto es mayor.")
    else:
        print("El número secreto es menor.")
else:
    print("Lo siento, agotaste los intentos. El número era:", secreto)
print("Usaste", intentos, "intentos.")
  </div>
  <p><em>Nota:</em> Incluye módulo <code>random</code>, bucle condicionado, condicionales anidados y control de flujo (<code>break</code>, <code>else</code> del <code>while</code>). Excelente para evaluación final.</p>

</section>

    
    `,
  },
  py3: {
    objetivo: `<p><strong>Objetivo:</strong></p>
    
  <p>   
✔️ Identificar y diferenciar claramente las estructuras de datos básicas en Python <br>
✔️ Aplicar operaciones esenciales sobre colecciones (como añadir, eliminar y buscar) para manipular datos de forma eficiente y segura en programas reales.<br>
✔️ Desarrollar algoritmos que utilicen listas, tuplas o diccionarios para almacenar, procesar y presentar conjuntos de datos, reforzando buenas prácticas de nombrado, tipo de datos y consistencia<br>
    
   </p> 




    `,
    teoria: `<p><strong>Teoría:</strong></p>
    
    <section style="color: white; text-align: justify; margin: 30px; font-size: 16px; line-height: 1.8;">

  <h4 style="color: #00ffff; font-size: 18px;">1. Estructuras de datos básicas en Python</h4>

  <p>
    Hasta este punto, los programas escritos en <strong>Python</strong> trabajaban con variables individuales, como 
    <em>edad</em>, <em>nombre</em> o <em>nota</em>, que almacenan un solo valor a la vez. Sin embargo, en la mayoría de 
    los problemas del mundo real, es necesario manejar <strong>conjuntos de datos relacionados</strong>: por ejemplo, 
    una lista de calificaciones de varios estudiantes, un conjunto de precios de productos o los nombres de los 
    asistentes a un evento.
  </p>

  <p>
    Para resolver estas necesidades, Python incorpora un conjunto de 
    <strong>estructuras de datos básicas</strong> que permiten almacenar y organizar múltiples valores dentro de una sola 
    variable. Estas estructuras no solo facilitan el almacenamiento, sino también el acceso, la modificación y el 
    análisis eficiente de la información.
  </p>

  <h5 style="color: #00ffff; font-size: 16px;">Principales estructuras de datos en Python</h5>

  <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%; text-align: center; color: white;">
    <thead style="background-color: #00ffff; color: black; font-weight: bold;">
      <tr>
        <th>Estructura</th>
        <th>Tipo</th>
        <th>Características</th>
        <th>Ejemplo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Lista</strong> (<em>list</em>)</td>
        <td>Ordenada y modificable</td>
        <td>Permite agregar, eliminar o cambiar elementos. Ideal para datos cambiantes.</td>
        <td><code>frutas = ["manzana", "pera", "uva"]</code></td>
      </tr>
      <tr>
        <td><strong>Tupla</strong> (<em>tuple</em>)</td>
        <td>Ordenada e inmutable</td>
        <td>No puede modificarse después de su creación. Útil para datos fijos o protegidos.</td>
        <td><code>coordenadas = (10, 20)</code></td>
      </tr>
      <tr>
        <td><strong>Diccionario</strong> (<em>dict</em>)</td>
        <td>No ordenado (pares clave–valor)</td>
        <td>Permite asociar valores con claves únicas, facilitando búsquedas rápidas.</td>
        <td><code>alumno = {"nombre": "Ana", "edad": 20}</code></td>
      </tr>
    </tbody>
  </table>

  <h5 style="color: #00ffff; font-size: 16px; margin-top: 25px;">Importancia práctica</h5>

  <p>
    Estas herramientas son fundamentales para el desarrollo de programas más estructurados, flexibles y escalables. 
    Comprender su funcionamiento permite al programador <strong>manipular datos de manera avanzada</strong>, resolver 
    problemas con mayor eficiencia y construir aplicaciones con una lógica más clara y organizada.
  </p>

  <p style="color: #b0ffff; font-size: 14px;">
    <em>(Lutz, 2021; Downey, 2020)</em>
  </p>

</section>
<section style="color: white; text-align: justify; margin: 30px; font-size: 16px; line-height: 1.8;">

  <h4 style="color: #00ffff; font-size: 18px;">2. Listas: creación, recorrido y métodos</h4>

  <p>
    Las <strong>listas</strong> son una de las estructuras de datos más versátiles y utilizadas en <strong>Python</strong>, 
    debido a su flexibilidad, facilidad de uso y capacidad para almacenar múltiples valores dentro de una sola variable. 
    Una lista permite guardar una colección ordenada de elementos, los cuales pueden ser modificados, eliminados o agregados 
    durante la ejecución del programa (Lutz, 2021).
  </p>

  <p>
    En la vida real, una lista puede compararse con una tabla de registro o un inventario, donde cada elemento ocupa una posición dentro de un orden.
  </p>

  <h5 style="color: #00ffff; font-size: 16px;">Creación de listas</h5>

  <p>
    Las listas se definen con corchetes <code>[ ]</code> y sus elementos se separan con comas. 
    Cada elemento puede ser de cualquier tipo de dato: números, cadenas, valores booleanos o incluso otras listas.
  </p>

  <pre style="background-color: #111; padding: 10px; border-radius: 8px; color: #b0ffff;">
frutas = ["manzana", "pera", "uva"]
edades = [18, 25, 30, 45]
mixta = ["Python", 3, True, 4.5]
  </pre>

  <p>
    Además, se puede crear una lista vacía e ir agregando elementos después:
  </p>

  <pre style="background-color: #111; padding: 10px; border-radius: 8px; color: #b0ffff;">
numeros = []
numeros.append(10)
numeros.append(20)
numeros.append(30)
print(numeros)  # [10, 20, 30]
  </pre>

  <h5 style="color: #00ffff; font-size: 16px;">2.1. Acceso a los elementos</h5>

  <p>
    Cada elemento dentro de una lista tiene un <strong>índice</strong> (posición) que comienza desde <code>0</code>.
  </p>

  <pre style="background-color: #111; padding: 10px; border-radius: 8px; color: #b0ffff;">
frutas = ["manzana", "pera", "uva"]
print(frutas[0])   # manzana
print(frutas[2])   # uva
print(frutas[-1])  # uva (último elemento)
print(frutas[0:2]) # ['manzana', 'pera']
  </pre>

  <h5 style="color: #00ffff; font-size: 16px;">2.2. Recorrido de una lista</h5>

  <p>
    El recorrido o iteración permite acceder a cada elemento de una lista, una operación muy común al analizar datos o generar reportes.
  </p>

  <pre style="background-color: #111; padding: 10px; border-radius: 8px; color: #b0ffff;">
for fruta in frutas:
    print("Me gusta la", fruta)
  </pre>

  <p><strong>Salida:</strong></p>
  <pre style="background-color: #111; padding: 10px; border-radius: 8px;">Me gusta la manzana
Me gusta la pera
Me gusta la uva</pre>

  <p>Con índices mediante <code>enumerate()</code>:</p>

  <pre style="background-color: #111; padding: 10px; border-radius: 8px; color: #b0ffff;">
for i, fruta in enumerate(frutas):
    print(f"Fruta {i+1}: {fruta}")
  </pre>

  <h5 style="color: #00ffff; font-size: 16px;">3. Métodos más utilizados en listas</h5>

  <table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%; text-align: center; color: white;">
    <thead style="background-color: #00ffff; color: black;">
      <tr>
        <th>Método</th>
        <th>Descripción</th>
        <th>Ejemplo</th>
        <th>Resultado</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>append(x)</code></td><td>Agrega un elemento al final</td><td><code>frutas.append("mango")</code></td><td>["manzana", "pera", "uva", "mango"]</td></tr>
      <tr><td><code>insert(i, x)</code></td><td>Inserta en una posición</td><td><code>frutas.insert(1, "kiwi")</code></td><td>["manzana", "kiwi", "pera", "uva"]</td></tr>
      <tr><td><code>remove(x)</code></td><td>Elimina el valor indicado</td><td><code>frutas.remove("pera")</code></td><td>["manzana", "uva"]</td></tr>
      <tr><td><code>pop(i)</code></td><td>Elimina y devuelve un elemento</td><td><code>frutas.pop()</code></td><td>["manzana", "pera"]</td></tr>
      <tr><td><code>sort()</code></td><td>Ordena los elementos</td><td><code>edades.sort()</code></td><td>[18, 25, 30, 45]</td></tr>
      <tr><td><code>reverse()</code></td><td>Invierte el orden</td><td><code>frutas.reverse()</code></td><td>["uva", "pera", "manzana"]</td></tr>
      <tr><td><code>len()</code></td><td>Devuelve el tamaño</td><td><code>len(frutas)</code></td><td>3</td></tr>
    </tbody>
  </table>

  <p>
    También se puede verificar si un elemento existe:
  </p>

  <pre style="background-color: #111; padding: 10px; border-radius: 8px; color: #b0ffff;">
if "pera" in frutas:
    print("La pera está en la lista")
  </pre>

  <h5 style="color: #00ffff; font-size: 16px;">Ejemplo: cálculo del promedio de notas</h5>

  <pre style="background-color: #111; padding: 10px; border-radius: 8px; color: #b0ffff;">
notas = [15, 18, 12, 20, 17]
promedio = sum(notas) / len(notas)
print("Promedio:", promedio)
  </pre>

  <p><strong>Salida:</strong> Promedio: 16.4</p>

  <h5 style="color: #00ffff; font-size: 16px;">Ejemplo adicional: lista dinámica</h5>

  <pre style="background-color: #111; padding: 10px; border-radius: 8px; color: #b0ffff;">
nombres = []
for i in range(3):
    nombre = input("Ingrese un nombre: ")
    nombres.append(nombre)

nombres.sort()
print("Nombres ordenados:", nombres)
  </pre>

  <h5 style="color: #00ffff; font-size: 16px;">4. Aplicaciones</h5>

  <ul>
    <li>Educación: almacenar notas o nombres de estudiantes.</li>
    <li>Negocios: registrar ventas diarias o precios.</li>
    <li>Ciencia de datos: guardar mediciones o resultados.</li>
    <li>Desarrollo web: manejar listas de usuarios o comentarios.</li>
  </ul>

  <h5 style="color: #00ffff; font-size: 16px;">5. Buenas prácticas</h5>

  <ul>
    <li>Usar nombres descriptivos (<code>ventas_mensuales</code> en lugar de <code>x</code>).</li>
    <li>Evitar mezclar tipos de datos innecesariamente.</li>
    <li>Usar métodos integrados como <code>append()</code> y <code>sort()</code>.</li>
    <li>Verificar límites de índice.</li>
    <li>Utilizar <strong>comprensiones de listas</strong> para crear listas nuevas rápidamente.</li>
  </ul>

  <pre style="background-color: #111; padding: 10px; border-radius: 8px; color: #b0ffff;">
cuadrados = [x**2 for x in range(1, 6)]
print(cuadrados)
# [1, 4, 9, 16, 25]
  </pre>

  <p style="color: #b0ffff; font-size: 14px;">
    <em>(Downey, 2020; Lutz, 2021)</em>
  </p>

</section>


<section style="color: white; text-align: justify; margin: 40px; font-size: 15px; line-height: 1.7;">

  <h3 style="color: #00ffff; font-size: 18px;">6. Tuplas y diferencias con listas</h3>

  <p>
    En <strong>Python</strong>, las <strong>tuplas</strong> son estructuras de datos muy similares a las listas, 
    pero con una diferencia fundamental: <strong>son inmutables</strong>, es decir, no se pueden modificar una vez creadas. 
    Esto significa que no es posible añadir, eliminar ni cambiar elementos dentro de una tupla después de su definición.
  </p>

  <h4 style="color: #00ffff; font-size: 16px;">Creación de tuplas</h4>

  <p>Las tuplas se definen utilizando paréntesis <code>( )</code> en lugar de corchetes <code>[ ]</code>:</p>

  <pre style="background-color: #111; padding: 10px; border-radius: 10px; color: #00ffcc;">
coordenadas = (10, 20)
dias_semana = ("Lunes", "Martes", "Miércoles")
  </pre>

  <p>
    A diferencia de las listas, si se intenta modificar una tupla, Python genera un error:
  </p>

  <pre style="background-color: #111; padding: 10px; border-radius: 10px; color: #ff7777;">
dias_semana[0] = "Domingo"   # ❌ Error: las tuplas son inmutables
  </pre>

  <h4 style="color: #00ffff; font-size: 16px;">Ventajas de usar tuplas</h4>

  <ul>
    <li><strong>Mayor seguridad:</strong> protegen los datos al no permitir modificaciones.</li>
    <li><strong>Mejor rendimiento:</strong> consumen menos memoria y se procesan más rápido que las listas.</li>
    <li><strong>Compatibilidad:</strong> pueden usarse como claves en diccionarios o elementos en conjuntos (<code>set</code>).</li>
  </ul>

  <h4 style="color: #00ffff; font-size: 16px;">Ejemplo comparativo entre lista y tupla</h4>

  <pre style="background-color: #111; padding: 10px; border-radius: 10px; color: #00ffcc;">
lista = [1, 2, 3]
tupla = (1, 2, 3)

lista.append(4)     # ✅ Se puede modificar la lista
# tupla.append(4)   # ❌ Error: las tuplas no se pueden modificar

print(lista)  # [1, 2, 3, 4]
print(tupla)  # (1, 2, 3)
  </pre>

  <p>En este ejemplo, se observa cómo la lista puede ampliarse agregando un nuevo elemento, mientras que la tupla permanece intacta.</p>

  <h4 style="color: #00ffff; font-size: 16px;">Conversión entre listas y tuplas</h4>

  <pre style="background-color: #111; padding: 10px; border-radius: 10px; color: #00ffcc;">
# De lista a tupla
lista = [10, 20, 30]
tupla = tuple(lista)

# De tupla a lista
tupla = (5, 6, 7)
lista = list(tupla)
  </pre>

  <p>
    Estas funciones son útiles cuando se necesita <strong>proteger temporalmente los datos</strong> 
    o permitir modificaciones en estructuras previamente inmutables.
  </p>

  <h4 style="color: #00ffff; font-size: 16px;">Resumen comparativo</h4>

  <table style="width: 100%; border-collapse: collapse; text-align: center; color: white; margin-top: 10px;">
    <thead style="background-color: #00ffff; color: black;">
      <tr>
        <th style="padding: 8px;">Característica</th>
        <th style="padding: 8px;">Lista (list)</th>
        <th style="padding: 8px;">Tupla (tuple)</th>
      </tr>
    </thead>
    <tbody style="background-color: #111;">
      <tr>
        <td style="padding: 8px;">Modificable</td>
        <td style="padding: 8px;">✅ Sí</td>
        <td style="padding: 8px;">❌ No</td>
      </tr>
      <tr>
        <td style="padding: 8px;">Sintaxis</td>
        <td style="padding: 8px;">[ ]</td>
        <td style="padding: 8px;">( )</td>
      </tr>
      <tr>
        <td style="padding: 8px;">Velocidad de ejecución</td>
        <td style="padding: 8px;">Más lenta</td>
        <td style="padding: 8px;">Más rápida</td>
      </tr>
      <tr>
        <td style="padding: 8px;">Uso típico</td>
        <td style="padding: 8px;">Datos cambiantes o dinámicos</td>
        <td style="padding: 8px;">Datos fijos o constantes</td>
      </tr>
      <tr>
        <td style="padding: 8px;">Memoria utilizada</td>
        <td style="padding: 8px;">Mayor</td>
        <td style="padding: 8px;">Menor</td>
      </tr>
      <tr>
        <td style="padding: 8px;">Puede ser clave en diccionario</td>
        <td style="padding: 8px;">No</td>
        <td style="padding: 8px;">Sí</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color: #00ffff; font-size: 16px; margin-top: 20px;">Representación gráfica</h4>

  <div style="display: flex; justify-content: center; gap: 30px; margin: 15px 0;">
    <div style="background-color: #111; border-radius: 10px; padding: 15px; text-align: center;">
      <h5 style="color: #00ffff;">Lista</h5>
      <p>[1, 2, 3, 4]</p>
      <p style="color: #888;">Modificable ➜ Se pueden añadir o eliminar elementos.</p>
    </div>
    <div style="background-color: #111; border-radius: 10px; padding: 15px; text-align: center;">
      <h5 style="color: #00ffff;">Tupla</h5>
      <p>(1, 2, 3)</p>
      <p style="color: #888;">Inmutable ➜ No se pueden modificar los elementos.</p>
    </div>
  </div>

  <p style="margin-top: 20px;">
    En conclusión, las <strong>tuplas</strong> son una alternativa eficiente y segura a las listas 
    cuando se necesita almacenar <strong>datos estáticos o invariables</strong>. 
    Su uso mejora el rendimiento del programa y mantiene una estructura más coherente y protegida, 
    especialmente útil en <em>configuraciones, bases de datos o datos sensibles</em> 
    (Downey, 2020; Lutz, 2021).
  </p>

</section>

    <section style="color: white; text-align: justify; margin: 40px; font-size: 15px; line-height: 1.7;">

  <h3 style="color: #00ffff; font-size: 18px;">7. Diccionarios: claves y valores</h3>

  <p>
    Los <strong>diccionarios</strong> son una de las estructuras de datos más potentes y versátiles de <strong>Python</strong>. 
    Permiten almacenar pares de elementos formados por una <strong>clave</strong> (<em>key</em>) y un <strong>valor</strong> (<em>value</em>), 
    lo que los convierte en una herramienta ideal para organizar y acceder rápidamente a información asociada.
  </p>

  <pre style="background-color: #111; padding: 10px; border-radius: 10px; color: #00ffcc;">
estudiante = {
    "nombre": "Ana",
    "edad": 20,
    "nota": 18
}
  </pre>

  <p>
    En este ejemplo, <code>"nombre"</code>, <code>"edad"</code> y <code>"nota"</code> son las claves, 
    mientras que <code>"Ana"</code>, <code>20</code> y <code>18</code> son los valores correspondientes.
  </p>

  <h4 style="color: #00ffff; font-size: 16px;">7.1. Características principales</h4>

  <ul>
    <li>🔹 <strong>Las claves son únicas:</strong> no pueden repetirse dentro del mismo diccionario.</li>
    <li>🔹 <strong>Los valores pueden ser de cualquier tipo:</strong> números, cadenas, listas u otros diccionarios.</li>
    <li>🔹 <strong>Acceso rápido y directo:</strong> mediante la clave, sin recorrer todos los elementos.</li>
    <li>🔹 <strong>Son mutables:</strong> se pueden modificar, agregar o eliminar elementos en cualquier momento.</li>
  </ul>

  <h4 style="color: #00ffff; font-size: 16px;">7.2. Acceso y modificación de valores</h4>

  <pre style="background-color: #111; padding: 10px; border-radius: 10px; color: #00ffcc;">
print(estudiante["nombre"])   # Ana

estudiante["nota"] = 19
print(estudiante)  # {"nombre": "Ana", "edad": 20, "nota": 19}
  </pre>

  <h4 style="color: #00ffff; font-size: 16px;">7.3. Agregar y eliminar datos</h4>

  <pre style="background-color: #111; padding: 10px; border-radius: 10px; color: #00ffcc;">
estudiante["curso"] = "Python"   # ✅ Agrega un nuevo par
del estudiante["edad"]           # ❌ Elimina una clave y su valor
  </pre>

  <p>Resultado final:</p>

  <pre style="background-color: #111; padding: 10px; border-radius: 10px; color: #00ffcc;">
{"nombre": "Ana", "nota": 19, "curso": "Python"}
  </pre>

  <h4 style="color: #00ffff; font-size: 16px;">7.4. Recorrido de un diccionario</h4>

  <pre style="background-color: #111; padding: 10px; border-radius: 10px; color: #00ffcc;">
for clave, valor in estudiante.items():
    print(clave, ":", valor)
  </pre>

  <p>Salida:</p>

  <pre style="background-color: #111; padding: 10px; border-radius: 10px; color: #00ffcc;">
nombre : Ana
nota : 19
curso : Python
  </pre>

  <p>También puedes recorrer solo las claves o los valores:</p>

  <pre style="background-color: #111; padding: 10px; border-radius: 10px; color: #00ffcc;">
print(estudiante.keys())    # dict_keys(['nombre', 'nota', 'curso'])
print(estudiante.values())  # dict_values(['Ana', 19, 'Python'])
  </pre>

  <h4 style="color: #00ffff; font-size: 16px;">7.5. Ejemplo práctico: registro de estudiantes</h4>

  <pre style="background-color: #111; padding: 10px; border-radius: 10px; color: #00ffcc;">
registro = {
    "Juan": 15,
    "María": 18,
    "Pedro": 17
}

# Acceder a una nota específica
print("Nota de María:", registro["María"])

# Agregar un nuevo estudiante
registro["Lucía"] = 20

# Mostrar todos los estudiantes y sus notas
for nombre, nota in registro.items():
    print(nombre, "tiene nota", nota)
  </pre>

  <p>Salida:</p>

  <pre style="background-color: #111; padding: 10px; border-radius: 10px; color: #00ffcc;">
Nota de María: 18
Juan tiene nota 15
María tiene nota 18
Pedro tiene nota 17
Lucía tiene nota 20
  </pre>

  <h4 style="color: #00ffff; font-size: 16px;">7.6. Métodos útiles de los diccionarios</h4>

  <table style="width: 100%; border-collapse: collapse; text-align: center; color: white; margin-top: 10px;">
    <thead style="background-color: #00ffff; color: black;">
      <tr>
        <th style="padding: 8px;">Método</th>
        <th style="padding: 8px;">Descripción</th>
        <th style="padding: 8px;">Ejemplo</th>
      </tr>
    </thead>
    <tbody style="background-color: #111;">
      <tr>
        <td style="padding: 8px;">.keys()</td>
        <td style="padding: 8px;">Devuelve todas las claves</td>
        <td style="padding: 8px;">registro.keys()</td>
      </tr>
      <tr>
        <td style="padding: 8px;">.values()</td>
        <td style="padding: 8px;">Devuelve todos los valores</td>
        <td style="padding: 8px;">registro.values()</td>
      </tr>
      <tr>
        <td style="padding: 8px;">.items()</td>
        <td style="padding: 8px;">Devuelve pares (clave, valor)</td>
        <td style="padding: 8px;">registro.items()</td>
      </tr>
      <tr>
        <td style="padding: 8px;">.get()</td>
        <td style="padding: 8px;">Devuelve el valor de una clave o un valor por defecto</td>
        <td style="padding: 8px;">registro.get("Luis", "No registrado")</td>
      </tr>
      <tr>
        <td style="padding: 8px;">.pop()</td>
        <td style="padding: 8px;">Elimina una clave y devuelve su valor</td>
        <td style="padding: 8px;">registro.pop("Pedro")</td>
      </tr>
      <tr>
        <td style="padding: 8px;">.clear()</td>
        <td style="padding: 8px;">Vacía todo el diccionario</td>
        <td style="padding: 8px;">registro.clear()</td>
      </tr>
    </tbody>
  </table>

  <h4 style="color: #00ffff; font-size: 16px;">7.7. Usos comunes</h4>

  <ul>
    <li> <strong>Gestión de datos:</strong> almacenar información de usuarios, productos o estudiantes.</li>
    <li><strong>Traducción o mapeo:</strong> relacionar códigos con nombres.</li>
    <li> <strong>Procesamiento de datos JSON:</strong> muy usados en desarrollo web.</li>
    <li> <strong>Contadores o estadísticas:</strong> contar frecuencias o clasificar datos.</li>
  </ul>

  <h4 style="color: #00ffff; font-size: 16px;">7.8. Comparación entre listas, tuplas y diccionarios</h4>

  <table style="width: 100%; border-collapse: collapse; text-align: center; color: white; margin-top: 10px;">
    <thead style="background-color: #00ffff; color: black;">
      <tr>
        <th style="padding: 8px;">Característica</th>
        <th style="padding: 8px;">Lista (list)</th>
        <th style="padding: 8px;">Tupla (tuple)</th>
        <th style="padding: 8px;">Diccionario (dict)</th>
      </tr>
    </thead>
    <tbody style="background-color: #111;">
      <tr>
        <td style="padding: 8px;">Estructura</td>
        <td style="padding: 8px;">Elementos ordenados</td>
        <td style="padding: 8px;">Elementos ordenados e inmutables</td>
        <td style="padding: 8px;">Pares clave–valor</td>
      </tr>
      <tr>
        <td style="padding: 8px;">Mutabilidad</td>
        <td style="padding: 8px;">Sí</td>
        <td style="padding: 8px;">No</td>
        <td style="padding: 8px;">Sí</td>
      </tr>
      <tr>
        <td style="padding: 8px;">Acceso</td>
        <td style="padding: 8px;">Por índice</td>
        <td style="padding: 8px;">Por índice</td>
        <td style="padding: 8px;">Por clave</td>
      </tr>
      <tr>
        <td style="padding: 8px;">Velocidad de acceso</td>
        <td style="padding: 8px;">Media</td>
        <td style="padding: 8px;">Alta</td>
        <td style="padding: 8px;">Muy alta</td>
      </tr>
      <tr>
        <td style="padding: 8px;">Uso típico</td>
        <td style="padding: 8px;">Colecciones dinámicas</td>
        <td style="padding: 8px;">Datos fijos</td>
        <td style="padding: 8px;">Datos asociados</td>
      </tr>
      <tr>
        <td style="padding: 8px;">Sintaxis</td>
        <td style="padding: 8px;">[ ]</td>
        <td style="padding: 8px;">( )</td>
        <td style="padding: 8px;">{ }</td>
      </tr>
    </tbody>
  </table>

  <p style="margin-top: 20px;">
    En conclusión, los <strong>diccionarios</strong> son estructuras esenciales para el manejo de información 
    compleja y relacional. Su capacidad para asociar claves únicas con valores específicos 
    los convierte en una herramienta indispensable para desarrollar programas eficientes, 
    organizados y fáciles de mantener (Downey, 2020; Lutz, 2021).
  </p>

</section>
<section style="color: white; text-align: justify; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.8;">

  <h3 style="color: #00ffff; font-size: 18px;">8. Operaciones comunes: añadir, eliminar y buscar</h3>

  <p>
    Las estructuras de datos en <strong>Python</strong> —listas, tuplas y diccionarios— permiten almacenar y organizar información de distintas maneras. 
    Aunque comparten algunas similitudes, cada una ofrece operaciones específicas según sus características 
    (<em>mutabilidad, orden y tipo de acceso</em>).
  </p>

  <p>A continuación, se describen las operaciones más comunes para <strong>añadir, eliminar y buscar</strong> elementos, junto con ejemplos prácticos de su uso.</p>

  <!-- Añadir elementos -->
  <h4 style="color: #00bfff;">8.1. Añadir elementos</h4>

  <table border="1" cellpadding="6" cellspacing="0" style="width: 100%; border-collapse: collapse; text-align: center;">
    <tr style="background-color: #003366; color: #00ffff;">
      <th>Estructura</th>
      <th>Método u operación</th>
      <th>Ejemplo</th>
      <th>Resultado</th>
    </tr>
    <tr>
      <td>Lista</td>
      <td><code>append()</code> agrega al final.<br><code>insert(pos, valor)</code> inserta en una posición.</td>
      <td><pre>frutas = ["pera", "manzana"]<br>frutas.append("uva")</pre></td>
      <td>["pera", "manzana", "uva"]</td>
    </tr>
    <tr>
      <td>Tupla</td>
      <td>❌ No aplica (inmutable)</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>Diccionario</td>
      <td><code>dicc[clave] = valor</code> crea o actualiza un par.</td>
      <td><pre>registro = {"Ana": 18}<br>registro["Luis"] = 20</pre></td>
      <td>{"Ana": 18, "Luis": 20}</td>
    </tr>
  </table>

  <p style="margin-top: 10px;"><strong>Nota:</strong> Si la clave ya existe en un diccionario, su valor se actualiza; si no, se agrega una nueva entrada.</p>

  <!-- Eliminar elementos -->
  <h4 style="color: #00bfff;">8.2. Eliminar elementos</h4>

  <table border="1" cellpadding="6" cellspacing="0" style="width: 100%; border-collapse: collapse; text-align: center;">
    <tr style="background-color: #003366; color: #00ffff;">
      <th>Estructura</th>
      <th>Método u operación</th>
      <th>Ejemplo</th>
      <th>Resultado</th>
    </tr>
    <tr>
      <td>Lista</td>
      <td><code>remove(valor)</code> elimina por contenido.<br><code>pop(pos)</code> elimina por índice.</td>
      <td><pre>frutas = ["pera", "uva", "manzana"]<br>frutas.remove("uva")</pre></td>
      <td>["pera", "manzana"]</td>
    </tr>
    <tr>
      <td>Tupla</td>
      <td>❌ No se puede modificar.<br>Solo eliminar completa con <code>del</code>.</td>
      <td><pre>del coordenadas</pre></td>
      <td>—</td>
    </tr>
    <tr>
      <td>Diccionario</td>
      <td><code>del dicc[clave]</code> o <code>pop(clave)</code></td>
      <td><pre>del registro["Ana"]</pre></td>
      <td>{"Luis": 20}</td>
    </tr>
  </table>

  <p>
     Si se intenta eliminar una clave inexistente, Python genera un <code>KeyError</code>. 
    Para evitarlo, se puede usar: <br>
    <code>registro.pop("Pedro", "No encontrado")</code>
  </p>

  <!-- Buscar elementos -->
  <h4 style="color: #00bfff;">8.3. Buscar elementos</h4>

  <table border="1" cellpadding="6" cellspacing="0" style="width: 100%; border-collapse: collapse; text-align: center;">
    <tr style="background-color: #003366; color: #00ffff;">
      <th>Estructura</th>
      <th>Forma de búsqueda</th>
      <th>Ejemplo</th>
      <th>Resultado</th>
    </tr>
    <tr>
      <td>Lista</td>
      <td>Busca si el valor está presente.</td>
      <td><pre>frutas = ["pera", "manzana", "uva"]<br>if "uva" in frutas:<br>    print("La uva está en la lista")</pre></td>
      <td>La uva está en la lista</td>
    </tr>
    <tr>
      <td>Tupla</td>
      <td>Igual que en listas.</td>
      <td><pre>dias = ("Lunes", "Martes", "Miércoles")<br>if "Martes" in dias:<br>    print("Día encontrado")</pre></td>
      <td>Día encontrado</td>
    </tr>
    <tr>
      <td>Diccionario</td>
      <td>Verifica claves, no valores.</td>
      <td><pre>registro = {"Ana": 18, "Luis": 20}<br>if "Ana" in registro:<br>    print("Estudiante encontrado")</pre></td>
      <td>Estudiante encontrado</td>
    </tr>
  </table>

  <p> Para buscar entre los <strong>valores</strong> de un diccionario:</p>
  <pre><code>if 20 in registro.values():
    print("Nota encontrada")</code></pre>

  <!-- Contar elementos -->
  <h4 style="color: #00bfff;">8.4. Contar elementos</h4>
  <p>La función <code>len()</code> devuelve el número de elementos de cualquier estructura:</p>

  <pre><code>len(frutas)      # 3
len(dias)        # 3
len(registro)    # 2</code></pre>

  <!-- Ejemplo completo -->
  <h4 style="color: #00bfff;">Ejemplo completo</h4>

  <pre style="background-color: #001f33; color: #00ffcc; padding: 10px; border-radius: 10px;">
# Lista
frutas = ["pera", "manzana", "uva"]
frutas.append("mango")
if "uva" in frutas:
    frutas.remove("uva")
print("Lista final:", frutas)

# Tupla
colores = ("rojo", "azul", "verde")
if "azul" in colores:
    print("Color encontrado:", "azul")

# Diccionario
registro = {"Ana": 18, "Luis": 20}
registro["María"] = 19
if "Ana" in registro:
    del registro["Ana"]
print("Diccionario final:", registro)
  </pre>

  <p><strong>Salida:</strong></p>
  <pre>
Lista final: ['pera', 'manzana', 'mango']
Color encontrado: azul
Diccionario final: {'Luis': 20, 'María': 19}
  </pre>

  <p>
    El dominio de estas operaciones básicas —añadir, eliminar y buscar— es fundamental para manipular colecciones de datos en Python de forma eficiente.
    Cada estructura tiene su propósito:
  </p>

  <ul>
    <li><strong>Listas:</strong> ideales para conjuntos dinámicos.</li>
    <li><strong>Tuplas:</strong> adecuadas para datos fijos.</li>
    <li><strong>Diccionarios:</strong> óptimos para información asociada mediante pares clave–valor.</li>
  </ul>

  <p style="margin-top: 10px;">
    En conjunto, estas herramientas forman la base para la manipulación de datos más compleja en etapas posteriores del aprendizaje de programación 
    (<em>Downey, 2020; Lutz, 2021</em>).
  </p>

</section>

    
    `,
    ejemplos: `<p><strong>Ejemplos:</strong></p>
    
    <section style="color: #ddd; text-align: left; margin-left: 20px; font-size: 15px; line-height: 1.8; font-family: 'Consolas', monospace;">

  <h3 style="color: #00ffff; font-size: 16px;"> Ejercicio 1: Mostrar nombres de estudiantes (Listas básicas)</h3>
  <div style="background-color: #111; padding: 12px; border-radius: 8px; margin-top: 5px;">
  <pre><code>estudiantes = ["Ana", "Luis", "María", "Pedro", "Lucía"]

for nombre in estudiantes:
    print(nombre)</code></pre>
  </div>
  <p><strong>Salida esperada:</strong><br>
  Ana<br> Luis<br> María<br> Pedro<br> Lucía</p>

  <h3 style="color: #00ffff; font-size: 16px;"> Ejercicio 2: Contar números mayores que 50</h3>
  <div style="background-color: #111; padding: 12px; border-radius: 8px;">
  <pre><code>numeros = [12, 55, 89, 43, 67, 100, 5, 22, 90, 51]
mayores = 0

for n in numeros:
    if n > 50:
        mayores += 1

print("Cantidad de números mayores que 50:", mayores)</code></pre>
  </div>
  <p><strong>Salida esperada:</strong> Cantidad de números mayores que 50: 6</p>

  <h3 style="color: #00ffff; font-size: 16px;"> Ejercicio 3: Diccionario de productos y precios</h3>
  <div style="background-color: #111; padding: 12px; border-radius: 8px;">
  <pre><code>productos = {
    "Manzana": 2.5,
    "Pan": 1.2,
    "Leche": 4.5,
    "Queso": 7.0
}

for producto, precio in productos.items():
    print(producto, "cuesta S/.", precio)</code></pre>
  </div>
  <p><strong>Salida esperada:</strong><br>
  Manzana cuesta S/. 2.5<br>
  Pan cuesta S/. 1.2<br>
  Leche cuesta S/. 4.5<br>
  Queso cuesta S/. 7.0</p>

  <h3 style="color: #00ffff; font-size: 16px;"> Ejercicio 4: Verificar día de la semana (Tuplas)</h3>
  <div style="background-color: #111; padding: 12px; border-radius: 8px;">
  <pre><code>dias = ("Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo")

dia = input("Ingresa un día: ")

if dia in dias:
    print("Sí, ese día existe.")
else:
    print("No es un día válido.")</code></pre>
  </div>
  <p><strong>Ejemplo de salida:</strong><br>
  Ingresa un día: Martes<br>
  Sí, ese día existe.</p>

  <h3 style="color: #00ffff; font-size: 16px;"> Ejercicio 5: Filtrar notas aprobadas</h3>
  <div style="background-color: #111; padding: 12px; border-radius: 8px;">
  <pre><code>notas = [10, 15, 8, 17, 12, 5, 18]
aprobadas = []

for nota in notas:
    if nota >= 11:
        aprobadas.append(nota)

promedio = sum(aprobadas) / len(aprobadas)

print("Notas aprobadas:", aprobadas)
print("Promedio de aprobadas:", round(promedio, 2))</code></pre>
  </div>
  <p><strong>Salida esperada:</strong><br>
  Notas aprobadas: [15, 17, 12, 18]<br>
  Promedio de aprobadas: 15.5</p>

  <h3 style="color: #00ffff; font-size: 16px;"> Ejercicio 6: Diccionario de estudiantes aprobados</h3>
  <div style="background-color: #111; padding: 12px; border-radius: 8px;">
  <pre><code>registro = {
    "Ana": 18,
    "Luis": 10,
    "María": 14,
    "Pedro": 8,
    "Lucía": 16
}

print("Estudiantes aprobados:")
for nombre, nota in registro.items():
    if nota >= 14:
        print(nombre, "con nota", nota)</code></pre>
  </div>
  <p><strong>Salida esperada:</strong><br>
  Estudiantes aprobados:<br>
  Ana con nota 18<br>
  María con nota 14<br>
  Lucía con nota 16</p>

  <h3 style="color: #00ffff; font-size: 16px;"> Ejercicio 7: Ingreso dinámico y conversión a tupla</h3>
  <div style="background-color: #111; padding: 12px; border-radius: 8px;">
  <pre><code>precios = []

while True:
    valor = float(input("Ingresa un precio (0 para terminar): "))
    if valor == 0:
        break
    precios.append(valor)

tupla_precios = tuple(precios)
print("Precios registrados:", tupla_precios)
print("Precios ordenados:", sorted(tupla_precios))</code></pre>
  </div>
  <p><strong>Salida esperada:</strong><br>
  Precios registrados: (5.0, 2.0, 9.0)<br>
  Precios ordenados: [2.0, 5.0, 9.0]</p>

  <h3 style="color: #00ffff; font-size: 16px;"> Ejercicio 8: Sistema de inventario con diccionario</h3>
  <div style="background-color: #111; padding: 12px; border-radius: 8px;">
  <pre><code>inventario = {}

while True:
    print("\n--- MENÚ ---")
    print("1. Agregar producto")
    print("2. Eliminar producto")
    print("3. Buscar producto")
    print("4. Mostrar inventario")
    print("5. Salir")
    opcion = input("Elige una opción: ")

    if opcion == "1":
        nombre = input("Nombre del producto: ")
        cantidad = int(input("Cantidad: "))
        inventario[nombre] = cantidad
        print("Producto agregado correctamente.")
    
    elif opcion == "2":
        nombre = input("Producto a eliminar: ")
        if nombre in inventario:
            del inventario[nombre]
            print("Producto eliminado.")
        else:
            print("No existe ese producto.")
    
    elif opcion == "3":
        nombre = input("Producto a buscar: ")
        if nombre in inventario:
            print(nombre, "=> cantidad:", inventario[nombre])
        else:
            print("Producto no encontrado.")
    
    elif opcion == "4":
        print("Inventario actual:")
        for prod, cant in inventario.items():
            print("-", prod, ":", cant)
    
    elif opcion == "5":
        print("Saliendo del programa...")
        break
    else:
        print("Opción inválida. Intenta nuevamente.")</code></pre>
  </div>
</section>

      
    
    `,
    quiz_intermedio: `

    <section id="quiz_intermedio_python" class="quiz-section" 
style="font-family:'Segoe UI', Tahoma, sans-serif; color:#fff; line-height:1.6; margin-top:30px; text-align:left;">

  <p><strong style="color:#22c1dc;">Quiz Intermedio – Minicurso 3: Fundamentos de Python</strong></p>

  <p><strong style="color:#22c1dc;"> Planteamiento:</strong> 
  Este cuestionario tiene como propósito reforzar tus conocimientos sobre el uso de estructuras de control, ciclos y manejo de datos en <strong>Python</strong>. Te permitirá comprobar tu dominio de los fundamentos antes de avanzar a los temas finales del curso.</p>

  <p>
    <strong style="color:#22c1dc;">Condición de aprobación:</strong> Nota mínima 11.<br>
    <strong style="color:#22c1dc;"> Peso en la evaluación:</strong> 25% de la nota total del Minicurso 3.
  </p>

  <p><strong style="color:#22c1dc;">📝 Indicaciones:</strong></p>
  <ul style="margin:12px 0 18px 20px; line-height:1.7; color:#fff;">
    <li>Lee con atención cada pregunta antes de responder.</li>
    <li>Aplica correctamente los conceptos de condicionales, bucles y tipos de datos.</li>
    <li>Selecciona la opción más adecuada o desarrolla la respuesta solicitada.</li>
    <li>Revisa tus respuestas antes de enviar el formulario.</li>
  </ul>

  <p><strong style="color:#22c1dc;"> Objetivo:</strong> 
  Evaluar tu comprensión intermedia de la lógica y sintaxis de Python mediante la resolución de ejercicios prácticos y preguntas de análisis.</p>

  <div style="text-align:center; margin-top:25px;">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOwXd7KDgeAnHxAXCk_LsqWyMt9Bfv7t5udInNkd5kWJlwpA/viewform?usp=dialog" 
       target="_blank" 
       style="display:inline-block; background-color:#22c1dc; color:white; padding:12px 26px; border-radius:8px; text-decoration:none; font-weight:bold; 
              box-shadow:0 3px 6px rgba(0,0,0,0.15); transition:background-color 0.3s;">
       📋 Iniciar Quiz Intermedio
    </a>
  </div>

</section>

    
    
    
    
    
    `
  },
  py4: {
    objetivo: `<p><strong>Objetivo:</strong></p>
    
    
    <p>   
✔️ Comprender y aplicar la definición de funciones en Python utilizando la palabra clave def, así como invocar estas funciones para modularizar el código y mejorar su legibilidad. <br>
✔️ Dominar el uso de parámetros, argumentos y valores de retorno (return) para diseñar funciones reutilizables y dinámicas<br>
✔️ Diferenciar adecuadamente entre variables locales y globales, gestionar el ámbito de las variables en funciones <br>
    
   </p> 
    
    
    
    `,
    teoria: `<p><strong>Teoría:</strong></p>


<section style="color: white; text-align: justify; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.8;">

  <h3 style="color: #00ffff; font-size: 18px;">1. Introducción a las funciones en Python</h3>

  <p>
    En los programas desarrollados hasta este punto, todas las instrucciones se ejecutaban de manera <strong>lineal</strong>, una después de otra. 
    Este enfoque resulta adecuado para programas pequeños, pero a medida que el código crece, se vuelve más difícil de leer, mantener y reutilizar.
  </p>

  <p>
    Para resolver este problema, <strong>Python</strong> permite dividir el código en <strong>funciones</strong>, es decir, bloques independientes 
    que realizan una tarea específica. Cada función puede ejecutarse cuando se necesite, evitando la repetición de código y mejorando 
    la organización general del programa.
  </p>

  <div style="background-color: #1e1e1e; padding: 10px; border-radius: 10px; color: #b6d5d5ff; margin-top: 10px;">
    <strong>Ejemplo básico:</strong>
    <pre style="margin-top: 5px;">
def saludar():
    print("¡Hola! Bienvenido al curso de Python")

# Llamada a la función
saludar()
    </pre>
  </div>

  <p>
    En este ejemplo, la función <code>saludar()</code> agrupa una acción específica dentro de un bloque reutilizable. 
    Cada vez que se llama la función, se ejecuta su contenido sin necesidad de escribir las mismas instrucciones repetidamente.
  </p>

  <h4 style="color: #00bfff;">Ventajas del uso de funciones</h4>

  <ul>
    <li><strong>Modularidad:</strong> divide el programa en partes más pequeñas y manejables.</li>
    <li><strong>Reutilización:</strong> permite emplear el mismo código en diferentes secciones del programa.</li>
    <li><strong>Legibilidad:</strong> facilita la comprensión y el mantenimiento del código.</li>
    <li><strong>Colaboración:</strong> varios programadores pueden trabajar en funciones distintas del mismo proyecto.</li>
  </ul>

  <p>
    El uso de funciones favorece la <strong>modularidad</strong>, ya que el programa se puede estructurar en componentes más pequeños, 
    comprensibles y reutilizables. Esta práctica es esencial en la programación moderna, ya que facilita el trabajo en equipo, 
    la depuración de errores y el mantenimiento del software 
    (<em>Lutz, 2021</em>).
  </p>

</section>



    
    <section style="color: white; text-align: justify; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.8;">

  <h3 style="color: #00ffff; font-size: 18px;">1. Definición de funciones con <code>def</code></h3>

  <p>
    En programación, una función es un bloque de código que realiza una tarea específica y que puede reutilizarse cada vez que sea necesario. 
    En lugar de repetir la misma secuencia de instrucciones varias veces, se agrupan dentro de una función y luego se invoca con una sola línea de código.
  </p>

  <p><strong>Ventajas de las funciones:</strong></p>
  <ul>
    <li>Dividen el programa en partes más pequeñas y comprensibles.</li>
    <li>Evitan la repetición del mismo código.</li>
    <li>Facilitan el mantenimiento y la lectura del programa.</li>
    <li>Promueven la reutilización, ahorrando tiempo y reduciendo errores.</li>
  </ul>

  <h4 style="color: #00bfff;">Sintaxis básica</h4>

  <p>Se definen con la palabra clave <code>def</code>, seguida del nombre de la función, paréntesis (opcionalmente con parámetros) y dos puntos. El bloque de código se indentará normalmente con cuatro espacios.</p>

  <div style="background-color: #001f33; padding: 10px; border-radius: 10px; color: #00ffcc; margin-top: 10px;">
    <strong>Ejemplo básico:</strong>
    <pre style="margin-top: 5px;">
def saludar():
    print("¡Hola! Bienvenido al curso de Python.")

# Llamada a la función
saludar()
    </pre>
  </div>

  <p><strong>Salida:</strong> ¡Hola! Bienvenido al curso de Python.</p>

  <h4 style="color: #00bfff;">Ejemplo con múltiples instrucciones</h4>

  <div style="background-color: #001f33; padding: 10px; border-radius: 10px; color: #00ffcc; margin-top: 10px;">
<pre>
def mostrar_mensaje():
    print("Aprender Python es divertido.")
    print("Las funciones hacen el código más claro y ordenado.")
    print("¡Practica creando tus propias funciones!")

mostrar_mensaje()
</pre>
  </div>

  <p><strong>Salida:</strong><br>
    Aprender Python es divertido.<br>
    Las funciones hacen el código más claro y ordenado.<br>
    ¡Practica creando tus propias funciones!
  </p>

  <h4 style="color: #00bfff;">Estructura general de una función</h4>

  <div style="background-color: #001f33; padding: 10px; border-radius: 10px; color: #00ffcc; margin-top: 10px;">
<pre>
def nombre_funcion(parámetros_opcionales):
    # Bloque de código
    # Instrucciones que realiza la función
    # Opcionalmente devuelve un valor con return
</pre>
  </div>

  <h4 style="color: #00bfff;">Funciones con lógica interna</h4>

  <div style="background-color: #001f33; padding: 10px; border-radius: 10px; color: #b6d5d5ff; margin-top: 10px;">
<pre>
def evaluar_edad():
    edad = int(input("Ingrese su edad: "))
    if edad >= 18:
        print("Eres mayor de edad.")
    else:
        print("Eres menor de edad.")
</pre>
  </div>

  <h4 style="color: #00bfff;">Buenas prácticas al definir funciones</h4>

  <ul>
    <li>Usar nombres descriptivos: <code>calcular_promedio()</code>, <code>mostrar_menu()</code>, <code>registrar_usuario()</code>.</li>
    <li>Seguir la convención <strong>snake_case</strong>: minúsculas con guiones bajos.</li>
    <li>Evitar funciones demasiado largas: una función, una tarea principal.</li>
    <li>Comentar el propósito de la función:</li>
  </ul>

  <div style="background-color: #001f33; padding: 10px; border-radius: 10px; color: #00ffcc; margin-top: 10px;">
<pre>
def mostrar_saludo():
    """Muestra un mensaje de bienvenida al usuario."""
    print("Bienvenido al sistema.")
</pre>
  </div>

  <h4 style="color: #00bfff;">Ejemplo aplicado: menú de opciones</h4>

  <div style="background-color: #001f33; padding: 10px; border-radius: 10px; color: #b6d5d5ff; margin-top: 10px;">
<pre>
def mostrar_menu():
    print("=== MENÚ PRINCIPAL ===")
    print("1. Saludar")
    print("2. Mostrar mensaje motivacional")
    print("3. Salir")

def saludar():
    print("¡Hola! Espero que estés teniendo un gran día.")

def motivar():
    print("Nunca dejes de aprender. ¡Cada línea de código te hace mejor!")

while True:
    mostrar_menu()
    opcion = input("Selecciona una opción: ")

    if opcion == "1":
        saludar()
    elif opcion == "2":
        motivar()
    elif opcion == "3":
        print("¡Hasta luego!")
        break
    else:
        print("Opción no válida. Intenta nuevamente.")
</pre>
  </div>

  <p>
    Este programa utiliza tres funciones distintas, cada una con una tarea clara. Mejora la organización, facilita la lectura y permite modificar o ampliar el código fácilmente.
  </p>

  <p>
    <strong>Resumen:</strong> Las funciones son esenciales para crear programas claros, ordenados y reutilizables. Constituyen el primer paso hacia la <strong>programación modular</strong>, donde cada componente tiene un propósito específico y puede integrarse con otros sin dificultad.
  </p>

</section>

    
    <section style="color: white; text-align: justify; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.8;">

  <h3 style="color: #00ffff; font-size: 18px;">2. Parámetros, argumentos y valores de retorno</h3>

  <p>
    Hasta ahora hemos visto funciones simples que ejecutan instrucciones sin recibir información externa ni devolver resultados. 
    Sin embargo, en la mayoría de los casos, las funciones necesitan recibir datos para trabajar con ellos y, en algunos casos, devolver un resultado.
  </p>

  <p>
    Python permite esto mediante el uso de <strong>parámetros</strong>, <strong>argumentos</strong> y la instrucción <code>return</code>.
    Estos elementos hacen que las funciones sean dinámicas, reutilizables y potentes.
  </p>

  <h4 style="color: #00bfff;"> Parámetros vs Argumentos</h4>

  <table style="width: 100%; border-collapse: collapse; margin-top: 10px; color: white; text-align: left;">
    <tr style="background-color: #003366;">
      <th style="padding: 10px;">Concepto</th>
      <th style="padding: 10px;">Descripción</th>
    </tr>
    <tr style="background-color: #001f33;">
      <td style="padding: 10px;"><strong>Parámetro</strong></td>
      <td style="padding: 10px;">Variable definida dentro de los paréntesis de la función. Actúa como espacio reservado para un valor.</td>
    </tr>
    <tr style="background-color: #002b4d;">
      <td style="padding: 10px;"><strong>Argumento</strong></td>
      <td style="padding: 10px;">Valor real que se pasa a la función al llamarla, sustituyendo a los parámetros.</td>
    </tr>
  </table>

  <div style="background-color: #001f33; padding: 10px; border-radius: 10px; color: #b6d5d5ff; margin-top: 15px;">
<pre>
def saludar(nombre):      # nombre es un parámetro
    print("Hola,", nombre, "¡bienvenido al curso!")

saludar("Ana")            # "Ana" es un argumento
saludar("Carlos")
</pre>
  </div>

  <p><strong>Salida:</strong><br>
    Hola, Ana ¡bienvenido al curso!<br>
    Hola, Carlos ¡bienvenido al curso!
  </p>

  <h4 style="color: #00bfff;">Funciones con múltiples parámetros</h4>

  <div style="background-color: #001f33; padding: 10px; border-radius: 10px; color: #00ffcc;">
<pre>
def presentar_persona(nombre, edad):
    print("Nombre:", nombre)
    print("Edad:", edad, "años")

presentar_persona("Lucía", 22)
</pre>
  </div>

  <p><strong>Salida:</strong><br>
    Nombre: Lucía<br>
    Edad: 22 años
  </p>

  <h4 style="color: #00bfff;">Valores de retorno con <code>return</code></h4>

  <p>
    La instrucción <code>return</code> permite que una función devuelva un resultado al lugar donde fue llamada. 
    El valor devuelto puede almacenarse o utilizarse en operaciones posteriores.
  </p>

  <div style="background-color: #001f33; padding: 10px; border-radius: 10px; color: #b6d5d5ff;">
<pre>
def sumar(a, b):
    resultado = a + b
    return resultado

total = sumar(5, 3)
print("La suma es:", total)
</pre>
  </div>

  <p><strong>Salida:</strong> La suma es: 8</p>

  <h4 style="color: #00bfff;"> Diferencia entre imprimir y retornar</h4>

  <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
    <tr style="background-color: #003366;">
      <th style="padding: 10px;">Con <code>print()</code></th>
      <th style="padding: 10px;">Con <code>return</code></th>
    </tr>
    <tr style="background-color: #001f33;">
      <td style="padding: 10px;">Solo muestra el resultado en pantalla, no se puede reutilizar.</td>
      <td style="padding: 10px;">Devuelve el valor, que puede usarse en otras operaciones.</td>
    </tr>
  </table>

  <div style="background-color: #001f33; padding: 10px; border-radius: 10px; color: #b6d5d5ff; margin-top: 10px;">
<pre>
def cuadrado_con_print(x):
    print(x * x)

def cuadrado_con_return(x):
    return x * x

cuadrado_con_print(4)          # Muestra 16
resultado = cuadrado_con_return(4)
print("El cuadrado es:", resultado)
print(resultado + 10)          # Se puede reutilizar (26)
</pre>
  </div>

  <h4 style="color: #00bfff;"> Tipos de argumentos en Python</h4>

  <ul>
    <li><strong>Argumentos posicionales:</strong> Se asignan según el orden.</li>
    <li><strong>Argumentos con nombre (keyword):</strong> Se especifica qué valor corresponde a cada parámetro.</li>
    <li><strong>Parámetros con valor por defecto:</strong> Tienen un valor asignado si no se pasa argumento.</li>
  </ul>

  <div style="background-color: #001f33; padding: 10px; border-radius: 10px; color: #b6d5d5ff;">
<pre>
def restar(a, b):
    return a - b

print(restar(10, 4))          # Posicional → 6
print(restar(b=4, a=10))      # Con nombre → 6

def saludar(nombre="invitado"):
    print("Hola,", nombre)

saludar()          # Hola, invitado
saludar("Luis")    # Hola, Luis
</pre>
  </div>

  <h4 style="color: #00bfff;"> Ejemplo : cálculo de promedio</h4>

  <div style="background-color: #001f33; padding: 10px; border-radius: 10px; color: #b6d5d5ff;">
<pre>
def calcular_promedio(n1, n2, n3):
    promedio = (n1 + n2 + n3) / 3
    return promedio

nota_final = calcular_promedio(15, 18, 20)
print("El promedio es:", nota_final)
</pre>
  </div>

  <p><strong>Salida:</strong> El promedio es: 17.67</p>

  <h4 style="color: #00bfff;"> Funciones que devuelven múltiples valores</h4>

  <p>Python permite retornar varios valores usando tuplas.</p>

  <div style="background-color: #001f33; padding: 10px; border-radius: 10px; color: #b6d5d5ff;">
<pre>
def operaciones(a, b):
    suma = a + b
    resta = a - b
    return suma, resta

resultado_suma, resultado_resta = operaciones(10, 4)
print("Suma:", resultado_suma)
print("Resta:", resultado_resta)
</pre>
  </div>

  <p><strong>Salida:</strong><br>
    Suma: 14<br>
    Resta: 6
  </p>

  <h4 style="color: #00bfff;"> Buenas prácticas</h4>

  <ul>
    <li>Usar nombres descriptivos para los parámetros (<code>precio</code>, <code>cantidad</code>, <code>edad</code>).</li>
    <li>Definir solo los parámetros necesarios.</li>
    <li>Documentar qué recibe y qué devuelve la función.</li>
    <li>Evitar variables globales; usar parámetros y <code>return</code>.</li>
    <li>Usar <code>return</code> para valores que se reutilizarán.</li>
  </ul>

  <h4 style="color: #00bfff;"> Ejemplo: </h4>

  <div style="background-color: #001f33; padding: 10px; border-radius: 10px; color: #b6d5d5ff;">
<pre>
def calcular_area_rectangulo(base, altura):
    """Calcula y devuelve el área de un rectángulo."""
    area = base * altura
    return area

b = float(input("Ingrese la base: "))
h = float(input("Ingrese la altura: "))

resultado = calcular_area_rectangulo(b, h)
print("El área del rectángulo es:", resultado)
</pre>
  </div>

  <p><strong>Salida esperada:</strong><br>
    Ingrese la base: 5<br>
    Ingrese la altura: 3<br>
    El área del rectángulo es: 15.0
  </p>

  <p>
    Con esta estructura, el programa es más claro, modular y fácil de mantener. 
    Cada parte del código cumple una función específica y puede reutilizarse en otros programas.
  </p>

</section>

   <section style="color: white; text-align: justify; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.8;">

  <h3 style="color: #00ffff;">3. Variables locales y globales</h3>

  <p>
  En <strong>Python</strong>, las variables tienen un <strong>ámbito o alcance</strong> (<em>scope</em>), que determina dónde pueden ser utilizadas o modificadas dentro del programa. 
  Comprender esta diferencia es fundamental para evitar errores o comportamientos inesperados.
  </p>

  <h4 style="color: #00cccc;">➤ Variables locales</h4>

  <p>
  Son aquellas que se declaran dentro de una función y solo existen mientras la función se ejecuta.
  Una vez que termina, desaparecen de la memoria.
  </p>

  <pre style="background-color:#111; color:#0f0; padding:10px; border-radius:10px;">
def saludar():
    mensaje = "Hola desde la función"
    print(mensaje)

saludar()
print(mensaje)  # ❌ Error: mensaje no está definida fuera de la función
  </pre>

  <p><strong>Salida:</strong></p>
  <pre style="background-color:#000; color:#0ff; padding:10px; border-radius:10px;">
Hola desde la función
NameError: name 'mensaje' is not defined
  </pre>

  <p>
  La variable <strong>mensaje</strong> solo existe dentro de la función <code>saludar()</code>.
  Cada vez que se llama, se crea de nuevo evitando conflictos con otras partes del código.
  </p>

  <h4 style="color: #00cccc;">➤ Variables globales</h4>

  <p>
  Son las que se declaran fuera de cualquier función. 
  Pueden ser leídas desde cualquier parte del código.
  </p>

  <pre style="background-color:#111; color:#b6d5d5ff; padding:10px; border-radius:10px;">
mensaje = "Python"

def mostrar():
    saludo = "Hola"
    print(saludo, mensaje)

mostrar()
print(mensaje)
  </pre>

  <p><strong>Salida:</strong></p>
  <pre style="background-color:#000; color:#0ff; padding:10px; border-radius:10px;">
Hola Python
Python
  </pre>

  <h4 style="color: #00cccc;">➤ Modificación de variables globales</h4>

  <p>
  Si se intenta cambiar una variable global dentro de una función sin declararla como <code>global</code>, Python genera un error.
  </p>

  <pre style="background-color:#111; color:#0f0; padding:10px; border-radius:10px;">
contador = 0

def incrementar():
    contador = contador + 1  # ❌ Error
    print("Contador:", contador)

incrementar()
  </pre>

  <p><strong>Error:</strong></p>
  <pre style="background-color:#000; color:#f33; padding:10px; border-radius:10px;">
UnboundLocalError: local variable 'contador' referenced before assignment
  </pre>

  <p>✅ Solución correcta:</p>

  <pre style="background-color:#111; color:#0f0; padding:10px; border-radius:10px;">
contador = 0

def incrementar():
    global contador
    contador = contador + 1
    print("Contador:", contador)

incrementar()
incrementar()
print("Valor final:", contador)
  </pre>

  <p><strong>Salida:</strong></p>
  <pre style="background-color:#000; color:#0ff; padding:10px; border-radius:10px;">
Contador: 1
Contador: 2
Valor final: 2
  </pre>

  <h4 style="color: #00cccc;">➤ Mejor práctica sin usar <code>global</code></h4>

  <pre style="background-color:#111; color:#0f0; padding:10px; border-radius:10px;">
def incrementar(valor):
    valor = valor + 1
    return valor

contador = 0
contador = incrementar(contador)
contador = incrementar(contador)
print("Valor final:", contador)
  </pre>

  <p><strong>Salida:</strong></p>
  <pre style="background-color:#000; color:#0ff; padding:10px; border-radius:10px;">
Valor final: 2
  </pre>

  <h4 style="color: #00cccc;">➤ Ámbito anidado (LEGB)</h4>

  <p>
  Python sigue el orden <strong>Local → Enclosing → Global → Built-in</strong> al buscar variables.
  </p>

  <pre style="background-color:#111; color:#0f0; padding:10px; border-radius:10px;">
x = "global"

def externa():
    x = "enclosing"
    
    def interna():
        x = "local"
        print("Dentro de interna:", x)
    
    interna()
    print("Dentro de externa:", x)

externa()
print("Fuera de todo:", x)
  </pre>

  <p><strong>Salida:</strong></p>
  <pre style="background-color:#000; color:#0ff; padding:10px; border-radius:10px;">
Dentro de interna: local
Dentro de externa: enclosing
Fuera de todo: global
  </pre>

  <h4 style="color: #00cccc;">➤ Buenas prácticas</h4>

  <ul>
    <li> Usa variables locales siempre que sea posible.</li>
    <li> Evita modificar variables globales.</li>
    <li> Usa nombres descriptivos y distintos en cada ámbito.</li>
    <li> Comparte datos entre funciones usando parámetros y retornos, no globales.</li>
  </ul>

  <h4 style="color: #00cccc;">➤ Ejemplo final integrador</h4>

  <pre style="background-color:#111; color:#b6d5d5ff; padding:10px; border-radius:10px;">
# Variable global
curso = "Python Básico"

def registrar_estudiante(nombre):
    mensaje = f"El estudiante {nombre} se ha inscrito en el curso {curso}."
    return mensaje

def mostrar_curso():
    print("Curso actual:", curso)

print(registrar_estudiante("Ana"))
mostrar_curso()
  </pre>

  <p><strong>Salida:</strong></p>
  <pre style="background-color:#000; color:#b6d5d5ff; padding:10px; border-radius:10px;">
El estudiante Ana se ha inscrito en el curso Python Básico.
Curso actual: Python Básico
  </pre>

</section>
 
<section style="color: white; text-align: justify; margin-left: 40px; margin-right: 40px; font-size: 16px; line-height: 1.8;">

  <h4 style="color: #00ffff;">4. Importación de módulos (<code>math</code>, <code>random</code>)</h4>

  <p>
  En <strong>Python</strong>, un <strong>módulo</strong> es un archivo que contiene funciones, clases y variables ya definidas y listas para reutilizar. 
  Su uso permite organizar mejor el código, reutilizar funciones comunes y ampliar las capacidades del lenguaje sin tener que escribirlas desde cero.
  </p>

  <p>
  Python incluye muchos módulos estándar (como <code>math</code> o <code>random</code>), y también puedes crear los tuyos o instalar otros mediante <code>pip</code>.
  </p>

  <h5 style="color: #00cccc;">➤ Importación básica</h5>

  <pre style="background-color:#b6d5d5ff; color:white; padding:10px; border-radius:10px;">
import nombre_del_modulo

resultado = nombre_del_modulo.funcion(argumentos)
  </pre>

  <h5 style="color: #00cccc;">➤ Ejemplo con el módulo <code>math</code></h5>

  <p>
  El módulo <code>math</code> ofrece funciones matemáticas avanzadas y constantes como <code>π</code> y <code>e</code>.
  </p>

  <pre style="background-color:#b6d5d5ff; color:white; padding:10px; border-radius:10px;">
import math

raiz = math.sqrt(25)
potencia = math.pow(2, 3)
angulo = math.radians(90)

print("Raíz cuadrada de 25:", raiz)
print("2 elevado a 3:", potencia)
print("90 grados en radianes:", angulo)
  </pre>

  <p><strong>Salida:</strong></p>
  <pre style="background-color:#000; color:#b6d5d5ff; padding:10px; border-radius:10px;">
Raíz cuadrada de 25: 5.0
2 elevado a 3: 8.0
90 grados en radianes: 1.5707963267948966
  </pre>

  <h5 style="color: #00cccc;">➤ Constantes útiles del módulo <code>math</code></h5>

  <ul>
    <li><code>math.pi</code> → π (3.14159…)</li>
    <li><code>math.e</code> → número e (2.71828…)</li>
    <li><code>math.ceil(x)</code> → redondea hacia arriba</li>
    <li><code>math.floor(x)</code> → redondea hacia abajo</li>
    <li><code>math.factorial(x)</code> → factorial de un número entero</li>
  </ul>

  <pre style="background-color:#111; color:white; padding:10px; border-radius:10px;">
import math

print("PI =", math.pi)
print("e =", math.e)
print("Factorial de 5 =", math.factorial(5))
print("Redondeo hacia arriba de 4.2:", math.ceil(4.2))
print("Redondeo hacia abajo de 4.8:", math.floor(4.8))
  </pre>

  <h5 style="color: #00cccc;">➤ Ejemplo con el módulo <code>random</code></h5>

  <p>
  El módulo <code>random</code> permite generar números pseudoaleatorios, seleccionar elementos al azar o mezclar listas.
  </p>

  <pre style="background-color:#111; color:white; padding:10px; border-radius:10px;">
import random

numero = random.randint(1, 10)
print("Número aleatorio:", numero)
  </pre>

  <p><strong>Salida posible:</strong></p>
  <pre style="background-color:#000; color:#b6d5d5ff; padding:10px; border-radius:10px;">
Número aleatorio: 7
  </pre>

  <h5 style="color: #00cccc;">➤ Otras funciones del módulo <code>random</code></h5>

  <table style="width:100%; border-collapse:collapse; color:white; font-size:15px; margin-top:10px;">
    <tr style="background-color:#003333;">
      <th style="padding:8px; border:1px solid #00cccc;">Función</th>
      <th style="padding:8px; border:1px solid #00cccc;">Descripción</th>
      <th style="padding:8px; border:1px solid #00cccc;">Ejemplo</th>
      <th style="padding:8px; border:1px solid #00cccc;">Resultado posible</th>
    </tr>
    <tr>
      <td style="border:1px solid #00cccc;">random.random()</td>
      <td style="border:1px solid #00cccc;">Genera un número entre 0.0 y 1.0</td>
      <td style="border:1px solid #00cccc;">random.random()</td>
      <td style="border:1px solid #00cccc;">0.5432</td>
    </tr>
    <tr>
      <td style="border:1px solid #00cccc;">random.randint(a, b)</td>
      <td style="border:1px solid #00cccc;">Entero entre a y b (incluidos)</td>
      <td style="border:1px solid #00cccc;">random.randint(1, 5)</td>
      <td style="border:1px solid #00cccc;">4</td>
    </tr>
    <tr>
      <td style="border:1px solid #00cccc;">random.choice(lista)</td>
      <td style="border:1px solid #00cccc;">Elemento aleatorio de una lista</td>
      <td style="border:1px solid #00cccc;">random.choice(["rojo","azul","verde"])</td>
      <td style="border:1px solid #00cccc;">"azul"</td>
    </tr>
    <tr>
      <td style="border:1px solid #00cccc;">random.shuffle(lista)</td>
      <td style="border:1px solid #00cccc;">Mezcla los elementos de una lista</td>
      <td style="border:1px solid #00cccc;">random.shuffle(cartas)</td>
      <td style="border:1px solid #00cccc;">lista desordenada</td>
    </tr>
    <tr>
      <td style="border:1px solid #00cccc;">random.uniform(a, b)</td>
      <td style="border:1px solid #00cccc;">Decimal entre a y b</td>
      <td style="border:1px solid #00cccc;">random.uniform(1, 5)</td>
      <td style="border:1px solid #00cccc;">3.276</td>
    </tr>
  </table>

  <h5 style="color: #00cccc;">➤ Ejemplo práctico</h5>

  <pre style="background-color:#111; color:white; padding:10px; border-radius:10px;">
import random

colores = ["rojo", "azul", "verde", "amarillo"]

print("Color elegido:", random.choice(colores))

numeros = [1, 2, 3, 4, 5]
random.shuffle(numeros)
print("Lista mezclada:", numeros)
  </pre>

  <h5 style="color: #00cccc;">➤ Importación parcial y alias</h5>

  <p>
  Puedes importar funciones específicas o usar alias para simplificar el código.
  </p>

  <pre style="background-color:#b6d5d5ff; color:white; padding:10px; border-radius:10px;">
from math import sqrt, pi

print("Raíz de 16:", sqrt(16))
print("Valor de PI:", pi)
  </pre>

  <pre style="background-color:#111; color:white; padding:10px; border-radius:10px;">
import math as m

print("Raíz de 36:", m.sqrt(36))
print("PI =", m.pi)
  </pre>

  <h5 style="color: #00cccc;">➤ Ejemplo integrador: uso combinado</h5>

  <pre style="background-color:#b6d5d5ff; color:white; padding:10px; border-radius:10px;">
import math
import random

num = random.randint(1, 100)
raiz = math.sqrt(num)
redondeado = math.ceil(raiz)

print(f"Número aleatorio: {num}")
print(f"Raíz cuadrada: {raiz}")
print(f"Redondeo hacia arriba: {redondeado}")
  </pre>

  <p><strong>Salida posible:</strong></p>
  <pre style="background-color:#b6d5d5ff; color:#0ff; padding:10px; border-radius:10px;">
Número aleatorio: 49
Raíz cuadrada: 7.0
Redondeo hacia arriba: 7
  </pre>

  <h5 style="color: #00cccc;">➤ Ventajas del uso de módulos</h5>

  <ul>
    <li> Reutilizan código probado y optimizado.</li>
    <li> Aumentan la organización y legibilidad.</li>
    <li> Facilitan mantenimiento y colaboración.</li>
    <li> Ahorra tiempo al no escribir funciones complejas.</li>
    <li> Permite combinar módulos para tareas avanzadas.</li>
  </ul>

  <h5 style="color: #00cccc;">➤ Ejemplo final</h5>

  <pre style="background-color:#111; color:white; padding:10px; border-radius:10px;">
import math
import random

print("=== Simulación matemática ===")
x = random.uniform(1, 50)
raiz = math.sqrt(x)
angulo = math.radians(random.randint(0, 180))
seno = math.sin(angulo)

print(f"Número generado: {x:.2f}")
print(f"Raíz cuadrada: {raiz:.2f}")
print(f"Seno del ángulo aleatorio: {seno:.3f}")
  </pre>

  <p><strong>Salida posible:</strong></p>
  <pre style="background-color:#000; color:#b6d5d5ff; padding:10px; border-radius:10px;">
=== Simulación matemática ===
Número generado: 23.47
Raíz cuadrada: 4.84
Seno del ángulo aleatorio: 0.866
  </pre>

  <p>
  El uso de módulos como <strong>math</strong> y <strong>random</strong> demuestra la potencia de Python para realizar cálculos y operaciones aleatorias de forma sencilla y eficiente.
  </p>

</section>

<section style="text-align:left; margin:0; font-family: Arial, sans-serif; color:#ffffff; background:none;">
  <h3 style="font-size:18px; margin:6px 0;">🎥 Vídeos recomendados: </h3>

  <p style="margin:8px 0;">
    <strong>Code Hive.</strong> (2022, julio 21). <em>Funciones en Python | Parámetros y Return (Ejemplos)</em> [Video]. YouTube.<br>
    <a href="https://www.youtube.com/watch?v=g78juF9pB_w" target="_blank" rel="noopener" style="color:#00ffff;">https://www.youtube.com/watch?v=g78juF9pB_w</a>
  </p>

  <p style="margin:8px 0;">
    <strong>Sergio A. Castaño Giraldo.</strong> (2021, marzo 29). <em>Funciones en Python desde Cero - Ejercicios Resueltos [DEF]</em> [Video]. YouTube.<br>
    <a href="https://www.youtube.com/watch?v=hrv1ruHxiQY" target="_blank" rel="noopener" style="color:#00ffff;">https://www.youtube.com/watch?v=hrv1ruHxiQY</a>
  </p>
</section>

    
    `,
    ejemplos: `<p><strong>Ejemplos:</strong></p>
    <section style="color: #ddd; text-align: left; margin-left: 20px; font-size: 15px; line-height: 1.8; font-family: 'Consolas', monospace;">

  <h3 style="color: #b6d5d5ff; font-size: 16px;"> Ejemplo 1: Función sin parámetros</h3>
  <p><strong>Enunciado:</strong> Crear una función <code>saludar()</code> que imprima un mensaje de bienvenida al usuario, luego llamarla.</p>
  <div style="background-color: #111; padding: 12px; border-radius: 8px;">
  <pre><code>def saludar():
    print("¡Hola! Bienvenido al curso de Python.")

saludar()</code></pre>
  </div>
  <p><strong>Observaciones:</strong> Introducción a funciones sin parámetros ni retorno. Permite ver la modularidad básica.</p>

  <h3 style="color: #b6d5d5ff; font-size: 16px;"> Ejemplo 2: Función con parámetros</h3>
  <p><strong>Enunciado:</strong> Crear una función <code>presentar_persona(nombre, edad)</code> que reciba dos parámetros y los muestre.</p>
  <div style="background-color: #111; padding: 12px; border-radius: 8px;">
  <pre><code>def presentar_persona(nombre, edad):
    print("Nombre:", nombre)
    print("Edad:", edad, "años")

presentar_persona("Lucía", 22)</code></pre>
  </div>
  <p><strong>Notas:</strong> Uso de parámetros posicionales. Ejemplo claro de entrada de datos en función.</p>

  <h3 style="color: #b6d5d5ff; font-size: 16px;"> Ejemplo 3: Función con retorno</h3>
  <p><strong>Enunciado:</strong> Crear una función <code>sumar(a, b)</code> que devuelva la suma de dos números y luego usar el resultado.</p>
  <div style="background-color: #111; padding: 12px; border-radius: 8px;">
  <pre><code>def sumar(a, b):
    resultado = a + b
    return resultado

total = sumar(5, 3)
print("La suma es:", total)</code></pre>
  </div>
  <p><strong>Observaciones:</strong> Introducción de <code>return</code>. Diferencia entre imprimir directamente y devolver valor.</p>

  <h3 style="color: #b6d5d5ff; font-size: 16px;"> Ejemplo 4: Promedio de tres notas</h3>
  <p><strong>Enunciado:</strong> Crear una función <code>calcular_promedio(n1, n2, n3)</code> que devuelva el promedio de tres notas.</p>
  <div style="background-color: #111; padding: 12px; border-radius: 8px;">
  <pre><code>def calcular_promedio(n1, n2, n3):
    promedio = (n1 + n2 + n3) / 3
    return promedio

nota_final = calcular_promedio(15, 18, 20)
print("El promedio es:", round(nota_final, 2))</code></pre>
  </div>
  <p><strong>Notas:</strong> Uso de múltiples parámetros, retorno y formateo de resultado.</p>

  <h3 style="color: #b6d5d5ff; font-size: 16px;"> Ejemplo 5: Incrementar contador</h3>
  <p><strong>Enunciado:</strong> Crear una función <code>incrementar(valor)</code> que reciba un número y devuelva el valor incrementado en uno.</p>
  <div style="background-color: #111; padding: 12px; border-radius: 8px;">
  <pre><code>def incrementar(valor):
    valor = valor + 1
    return valor

contador = 0
contador = incrementar(contador)
contador = incrementar(contador)
print("Valor final:", contador)</code></pre>
  </div>
  <p><strong>Observaciones:</strong> Ejemplo de retorno para modificar estado externo sin variables globales.</p>

  <h3 style="color: #b6d5d5ff; font-size: 16px;"> Ejemplo 6: Uso de variable global</h3>
  <p><strong>Enunciado:</strong> Crear una variable global y funciones que la usen para mostrar información.</p>
  <div style="background-color: #111; padding: 12px; border-radius: 8px;">
  <pre><code>curso = "Python Básico"

def registrar_estudiante(nombre):
    mensaje = f"El estudiante {nombre} se ha inscrito en el curso {curso}."
    return mensaje

def mostrar_curso():
    print("Curso actual:", curso)

print(registrar_estudiante("Ana"))
mostrar_curso()</code></pre>
  </div>
  <p><strong>Notas:</strong> Ejemplo de uso seguro de variable global sin modificarla dentro de la función.</p>

  <h3 style="color: #b6d5d5ff; font-size: 16px;"> Ejemplo 7: Retornar múltiples valores</h3>
  <p><strong>Enunciado:</strong> Crear una función <code>operaciones(a, b)</code> que devuelva la suma y la resta de dos números.</p>
  <div style="background-color: #111; padding: 12px; border-radius: 8px;">
  <pre><code>def operaciones(a, b):
    suma = a + b
    resta = a - b
    return suma, resta

resultado_suma, resultado_resta = operaciones(10, 4)
print("Suma:", resultado_suma)
print("Resta:", resultado_resta)</code></pre>
  </div>
  <p><strong>Observaciones:</strong> Retorno múltiple (tupla) y desempaquetado de resultados.</p>

  <h3 style="color: #b6d5d5ff; font-size: 16px;"> Ejemplo 8: Programa modular con menú</h3>
  <p><strong>Enunciado:</strong> Crear un programa con funciones <code>mostrar_menu()</code>, <code>saludar()</code> y <code>motivar()</code>, y un bucle principal que permita elegir opciones.</p>
  <div style="background-color: #111; padding: 12px; border-radius: 8px;">
  <pre><code>def mostrar_menu():
    print("=== MENÚ PRINCIPAL ===")
    print("1. Saludar")
    print("2. Mostrar mensaje motivacional")
    print("3. Salir")

def saludar():
    print("¡Hola! Espero que estés teniendo un gran día.")

def motivar():
    print("Nunca dejes de aprender. ¡Cada línea de código te hace mejor!")

while True:
    mostrar_menu()
    opcion = input("Selecciona una opción: ")

    if opcion == "1":
        saludar()
    elif opcion == "2":
        motivar()
    elif opcion == "3":
        print("¡Hasta luego!")
        break
    else:
        print("Opción no válida. Intenta nuevamente.")</code></pre>
  </div>
  <p><strong>Notas:</strong> Integra funciones, bucles, condicionales y modularidad. Ejemplo completo y práctico.</p>

</section>

    
    
    
    `,
  
  },

  py5: {
    objetivo: `<p><strong>Objetivo:</strong></p>
    
    
    <p>   
✔️ Comprender el concepto de bucle como estructura de control repetitiva y explicar sus componentes <br>
✔️ Diferenciar entre los tipos de bucles (while y for), saber cuándo usar cada uno y reconocer sus ventajas y limitaciones.<br>
✔️ Aplicar bucles junto con condicionales para procesar colecciones, filtrar datos y optimizar algoritmos mediante técnicas como break y continue. <br>
    
   </p> 
    
    
    
    
    
    `,
    teoria: `<p><strong>Teoría:</strong></p>
<section style="color: white; text-align: justify; margin-left: 40px; margin-right: 40px; font-size: 15px; line-height: 1.8;">

  <h2 style="color: #00ffff; font-size: 15px;">1. Concepto de bucle y su función en los algoritmos</h2>
  <p>
    Un <strong>bucle</strong> (o ciclo) es una estructura de control que permite repetir un conjunto de instrucciones de manera continua mientras se cumpla una condición lógica.
    Su función principal es automatizar tareas repetitivas, evitando la redundancia de código y permitiendo construir programas más compactos, eficientes y fáciles de mantener (Lutz, 2013).
  </p>

  <h3 style="color: #66ffff; font-size: 13px;">1.1. Importancia en los algoritmos</h3>
  <p>
    En lógica de programación, los bucles constituyen un pilar esencial del control de flujo, junto con las estructuras condicionales y secuenciales.
    Gracias a ellos, los algoritmos pueden:
  </p>
  <ul>
    <li>Repetir operaciones sin reescribir el mismo bloque de código.</li>
    <li>Procesar colecciones de datos (arrays, objetos).</li>
    <li>Modelar fenómenos o procesos iterativos (movimiento, conteo, simulaciones).</li>
    <li>Implementar cálculos acumulativos o progresivos (sumas, promedios, búsquedas).</li>
  </ul>
  <p>
    Según McKinney (2022), la repetición es una característica fundamental de los programas orientados a datos, pues la mayoría de los análisis computacionales implican recorrer series o matrices múltiples veces.
  </p>

  <h3 style="color: #66ffff; font-size: 13px;">1.2. Componentes básicos de un bucle</h3>
  <ul>
    <li><strong>Inicialización:</strong> define las variables de control.</li>
    <li><strong>Condición:</strong> determina si el ciclo continúa o termina.</li>
    <li><strong>Cuerpo:</strong> conjunto de instrucciones que se repiten.</li>
    <li><strong>Actualización:</strong> cambio que asegura la finalización del ciclo.</li>
  </ul>

  <h3 style="color: #66ffff; font-size: 13px;">1.3. Tipos de bucles en JavaScript</h3>
  <ul>
    <li><strong>Bucle while:</strong> repite mientras la condición sea verdadera.</li>
    <li><strong>Bucle for:</strong> repite un número determinado de veces o recorre colecciones.</li>
  </ul>

  <h2 style="color: #00ffff; font-size: 15px;">2. Estructura “Mientras” (while)</h2>
  <p>
    El bucle <strong>while</strong> ejecuta un bloque de código mientras se cumpla una condición lógica.
    Si la condición es falsa al inicio, el bucle no se ejecuta.
  </p>

  <h3 style="color: #66ffff; font-size: 13px;">2.1. Sintaxis general</h3>
  <pre style="background-color: #1a1a1a; color: white; padding: 10px; border-radius: 8px;">
while (condición) {
  // bloque de instrucciones
}
  </pre>

  <h3 style="color: #66ffff; font-size: 13px;">2.2. Ejemplo simple</h3>
  <pre style="background-color: #1a1a1a; color: white; padding: 10px; border-radius: 8px;">
let i = 1;
while (i &lt;= 3) {
  console.log("Iteración:", i);
  i++;
}
// Salida:
// Iteración: 1
// Iteración: 2
// Iteración: 3
  </pre>

  <h3 style="color: #66ffff; font-size: 13px;">2.3. Bucle infinito</h3>
  <pre style="background-color: #1a1a1a; color: white; padding: 10px; border-radius: 8px;">
let x = 1;
while (x &gt; 0) {
  console.log("Nunca termina...");
}
  </pre>

  <h3 style="color: #66ffff; font-size: 13px;">2.4. Ejemplo práctico: menú</h3>
  <pre style="background-color: #1a1a1a; color: white; padding: 10px; border-radius: 8px;">
let opcion = "";
while (opcion !== "salir") {
  opcion = prompt("Menú: [1] Sumar [2] Restar [salir]");
  console.log("Elegiste:", opcion);
}
console.log("Programa finalizado.");
  </pre>

  <h2 style="color: #00ffff; font-size: 15px;">3. Estructura “Para” (for)</h2>
  <p>
    El bucle <strong>for</strong> permite recorrer una secuencia o repetir un bloque de código un número determinado de veces.
  </p>

  <h3 style="color: #66ffff; font-size: 13px;">3.1. Sintaxis general</h3>
  <pre style="background-color: #1a1a1a; color: white; padding: 10px; border-radius: 8px;">
for (inicialización; condición; actualización) {
  // bloque de instrucciones
}
  </pre>

  <h3 style="color: #66ffff; font-size: 13px;">3.2. Ejemplo básico</h3>
  <pre style="background-color: #1a1a1a; color: white; padding: 10px; border-radius: 8px;">
for (let i = 1; i &lt;= 5; i++) {
  console.log("Número:", i);
}
  </pre>

  <h3 style="color: #66ffff; font-size: 13px;">3.3. Recorriendo arreglos</h3>
  <pre style="background-color: #1a1a1a; color: white; padding: 10px; border-radius: 8px;">
const colores = ["rojo", "verde", "azul"];
for (let color of colores) {
  console.log("Color:", color);
}
  </pre>

  <h3 style="color: #66ffff; font-size: 13px;">3.4. Recorriendo cadenas</h3>
  <pre style="background-color: #1a1a1a; color: white; padding: 10px; border-radius: 8px;">
for (let letra of "JavaScript") {
  console.log(letra);
}
  </pre>

  <h3 style="color: #66ffff; font-size: 13px;">3.5. Ejemplo con índice</h3>
  <pre style="background-color: #1a1a1a; color: white; padding: 10px; border-radius: 8px;">
const nombres = ["Ana", "Luis", "Carlos"];
for (let i = 0; i &lt; nombres.length; i++) {
  console.log("Posición", i, ":", nombres[i]);
}
  </pre>

  <section style="color: white; text-align: justify; margin-left: 0px; margin-right: 10px; font-size: 15px; line-height: 1.8;">

  <h2 style="color: #00ffff; font-size: 15px;">4. Combinación de bucles y condicionales</h2>
  <p>
    En programación, la combinación de bucles (repeticiones) y estructuras condicionales (decisiones) es una práctica fundamental para crear algoritmos dinámicos que puedan ejecutar acciones diferentes según las circunstancias que ocurren en cada iteración.
  </p>
  <p>
    Mientras que los bucles permiten repetir bloques de código múltiples veces, las condicionales (como <strong>if</strong>, <strong>else if</strong>, <strong>else</strong>) determinan qué acción realizar en cada repetición, dependiendo de una condición lógica.
  </p>
  <p>
    Esta integración permite procesar datos, filtrar información, controlar flujos y optimizar la ejecución de programas, especialmente en tareas que requieren analizar colecciones, listas o secuencias numéricas.
  </p>

  <h3 style="color: #66ffff; font-size: 13px;">4.1. Contar números pares</h3>
  <p><strong>Código</strong></p>
  <pre style="background-color: #1a1a1a; color: white; padding: 10px; border-radius: 8px;">
let pares = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    pares++;
  }
}
console.log("Cantidad de pares:", pares);
  </pre>

  <p><strong>Explicación paso a paso</strong></p>
  <ul>
    <li>Se inicializa una variable llamada <strong>pares</strong> con el valor 0. Esta variable servirá como contador para registrar cuántos números pares se encuentran.</li>
    <li>El bucle <strong>for</strong> recorre los números del 1 al 10, aumentando <strong>i</strong> en una unidad en cada iteración.</li>
    <li>Dentro del bucle, se utiliza una condicional <strong>if</strong> para verificar si el número actual (<strong>i</strong>) es par.</li>
    <li>La expresión <strong>i % 2 === 0</strong> usa el operador módulo (%), que devuelve el resto de una división.</li>
    <li>Si el resto de dividir <strong>i</strong> entre 2 es igual a 0, significa que el número es par.</li>
    <li>Si la condición es verdadera, se incrementa el contador <strong>pares</strong> en uno (<strong>pares++</strong>).</li>
    <li>Al finalizar el bucle, se muestra el total con <strong>console.log()</strong>.</li>
  </ul>

  <p><strong>Resultado</strong><br>Cantidad de pares: 5</p>

  <p><strong>Análisis</strong><br>
    Este ejemplo combina un bucle iterativo con una condicional de evaluación para realizar un conteo selectivo.
    Este tipo de estructura es fundamental en la analítica de datos, donde es necesario contar elementos que cumplen una condición específica, como números positivos, aprobados en un examen o registros válidos.
  </p>

  <h3 style="color: #66ffff; font-size: 13px;">4.2. Filtrar datos positivos</h3>
  <p><strong>Código</strong></p>
  <pre style="background-color: #1a1a1a; color: white; padding: 10px; border-radius: 8px;">
const datos = [5, -2, 7, -1, 0, 3];
const positivos = [];
for (let n of datos) {
  if (n > 0) {
    positivos.push(n);
  }
}
console.log("Números positivos:", positivos);
  </pre>

  <p><strong>Explicación paso a paso</strong></p>
  <ul>
    <li>Se declara un arreglo (<strong>array</strong>) llamado <strong>datos</strong> que contiene números positivos, negativos y cero.</li>
    <li>Se crea un arreglo vacío <strong>positivos</strong>, donde se almacenarán solo los valores que cumplan la condición.</li>
    <li>El bucle <strong>for...of</strong> recorre cada elemento del arreglo <strong>datos</strong>.</li>
    <li>En cada iteración, la condicional <strong>if</strong> evalúa si el número actual <strong>n</strong> es mayor que cero (<strong>n > 0</strong>).</li>
    <li>Si la condición se cumple, el número se agrega al nuevo arreglo <strong>positivos</strong> mediante el método <strong>.push()</strong>.</li>
    <li>Al finalizar, se imprime el arreglo con todos los valores positivos.</li>
  </ul>

  <p><strong>Salida</strong><br>Números positivos: [5, 7, 3]</p>

  <p><strong>Análisis</strong><br>
    Este tipo de estructura permite filtrar información de una colección según una regla específica.
    En la práctica, se usa en procesos de limpieza de datos, validaciones de entrada, o análisis estadístico, donde se deben conservar solo ciertos valores que cumplan condiciones de validez o calidad.
  </p>

  <h3 style="color: #66ffff; font-size: 13px;">4.3. Corte de ciclo (break)</h3>
  <p><strong>Código</strong></p>
  <pre style="background-color: #1a1a1a; color: white; padding: 10px; border-radius: 8px;">
for (let i = 1; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Se detiene al llegar a 5
  </pre>

  <p><strong>Explicación paso a paso</strong></p>
  <ul>
    <li>El bucle <strong>for</strong> inicia en 1 y se repite mientras <strong>i</strong> sea menor que 10.</li>
    <li>En cada iteración, se evalúa la condición <strong>if (i === 5)</strong>.</li>
    <li>Cuando <strong>i</strong> llega al valor 5, la condición se cumple y se ejecuta la instrucción <strong>break;</strong>.</li>
    <li>El <strong>break</strong> interrumpe inmediatamente la ejecución del bucle, sin importar si quedaban iteraciones pendientes.</li>
    <li>Por tanto, solo se imprimen los números del 1 al 4, y el bucle se detiene antes de llegar al 5.</li>
  </ul>

  <p><strong>Salida</strong><br>1<br>2<br>3<br>4</p>

  <p><strong>Análisis</strong><br>
    El comando <strong>break</strong> es útil cuando se desea detener un bucle bajo una condición particular.  
    Se emplea en casos como:
  </p>
  <ul>
    <li>Buscar un elemento dentro de una lista y detenerse al encontrarlo.</li>
    <li>Interrumpir procesos al detectar un error.</li>
    <li>Finalizar un ciclo anticipadamente por condiciones externas (por ejemplo, cuando el usuario cancela una operación).</li>
  </ul>
  <p>
    En algoritmos de búsqueda o exploración, <strong>break</strong> mejora el rendimiento, ya que evita realizar iteraciones innecesarias después de alcanzar el objetivo.
  </p>

  <h3 style="color: #66ffff; font-size: 13px;">4.4. Saltar iteraciones (continue)</h3>
  <p><strong>Código</strong></p>
  <pre style="background-color: #1a1a1a; color: white; padding: 10px; border-radius: 8px;">
for (let i = 1; i <= 6; i++) {
  if (i === 3) continue;
  console.log(i);
}

  </pre>

  <p><strong>Explicación paso a paso</strong></p>
  <ul>
    <li>El bucle recorre los números del 1 al 6.</li>
    <li>En cada iteración, se evalúa la condición <strong>if (i === 3)</strong>.</li>
    <li>Cuando <strong>i</strong> vale 3, se ejecuta la instrucción <strong>continue;</strong>.</li>
    <li><strong>continue</strong> no termina el bucle, sino que salta directamente a la siguiente iteración, omitiendo el resto del código dentro del bloque actual.</li>
    <li>Por lo tanto, el número 3 no se imprime, pero los demás sí.</li>
  </ul>

  <p><strong>Salida</strong><br>1<br>2<br>4<br>5<br>6</p>

  <p><strong>Análisis</strong><br>
    El uso de <strong>continue</strong> permite saltar casos específicos dentro de una repetición sin detener completamente el proceso.  
    Es útil cuando se desea ignorar temporalmente ciertos valores o condiciones, como:
  </p>
  <ul>
    <li>Saltar datos inválidos.</li>
    <li>Omitir elementos vacíos en una lista.</li>
    <li>Evitar cálculos cuando una condición no lo amerita.</li>
  </ul>
  <p>
    A diferencia de <strong>break</strong>, que finaliza el ciclo, <strong>continue</strong> solo omite una vuelta.
  </p>

</section>












  
// Se omite el número 3, pero el bucle continúa
  </pre>

  <h2 style="color: #00ffff; font-size: 15px;">5. Buenas prácticas</h2>
  <ul>
    <li>Inicializar correctamente las variables antes del bucle.</li>
    <li>Verificar que la condición de salida se cumpla.</li>
    <li>Evitar bucles infinitos no controlados.</li>
    <li>Nombrar las variables de forma clara y significativa.</li>
    <li>No modificar la colección que se recorre dentro del bucle.</li>
    <li>Comentar el propósito del ciclo.</li>
  </ul>

</section>

    
     <section style="text-align:left; margin:0; font-family: Arial, sans-serif; color:#ffffff; background:none;">
  <h3 style="font-size:18px; margin:6px 0;">🎥 Vídeos recomendados</h3>

  <p style="margin:8px 0;">
    <strong>Sergio A. Castaño Giraldo.</strong> (2021, abril 26). 
    <em>Bucle While en Python desde Cero ♻️ [Continue y Break]</em> [Video]. YouTube.<br>
    <a href="https://www.youtube.com/watch?v=nQxWthR71PI" target="_blank" rel="noopener" style="color:#00ffff;">
      https://www.youtube.com/watch?v=nQxWthR71PI
    </a>
  </p>

  <p style="margin:8px 0;">
    <strong>Charly Cimino.</strong> (2023, agosto 5). 
    <em>Ciclo WHILE en Python 🐍</em> [Video]. YouTube.<br>
    <a href="https://www.youtube.com/watch?v=IyI2ZuOq_xQ" target="_blank" rel="noopener" style="color:#00ffff;">
      https://www.youtube.com/watch?v=IyI2ZuOq_xQ
    </a>
  </p>

  <p style="margin:8px 0;">
    <strong>OMES.</strong> (2023, junio 26). 
    <em>Bucle for | Curso de Python desde cero 🐍</em> [Video]. YouTube.<br>
    <a href="https://www.youtube.com/watch?v=AP8-5GRwPig" target="_blank" rel="noopener" style="color:#00ffff;">
      https://www.youtube.com/watch?v=AP8-5GRwPig
    </a>
  </p>
</section>
 
    
    
    
    
    
    
    `,
    ejemplos: `<p><strong>Ejemplos:</strong> </p>
    
<section style="text-align:left; color:#ffffff; font-family: Arial, sans-serif; line-height:1.6;">

  <h3 style="font-size:18px; margin:8px 0;">Ejemplo 1: Imprimir los números del 1 al 10</h3>
  <pre style="background-color:#0d1117; color:#e6edf3; padding:15px; border-radius:10px; font-family:'Consolas','Courier New',monospace; overflow-x:auto;">
<code>for i in range(1, 11):
    print(i)
</code></pre>
  <p><strong>Observación:</strong> Ejemplo clásico para aprender la estructura <code>for</code>. <code>range(1, 11)</code> genera los números del 1 al 10.</p>

  <h3 style="font-size:18px; margin:8px 0;">Ejemplo 2: Leer 5 números y mostrar los mayores que 50</h3>
  <pre style="background-color:#0d1117; color:#e6edf3; padding:15px; border-radius:10px; font-family:'Consolas','Courier New',monospace; overflow-x:auto;">
<code>mayores = []

for i in range(5):
    num = int(input(f"Ingrese el número {i + 1}: "))
    if num > 50:
        mayores.append(num)

print("Números mayores que 50:", mayores)
</code></pre>
  <p><strong>Observación:</strong> Combina <code>for</code> e <code>if</code>. Se almacenan los números que cumplen la condición en una lista.</p>

  <h3 style="font-size:18px; margin:8px 0;">Ejemplo 3: Validar número mayor que 0</h3>
  <pre style="background-color:#0d1117; color:#e6edf3; padding:15px; border-radius:10px; font-family:'Consolas','Courier New',monospace; overflow-x:auto;">
<code>numero = 0

while numero <= 0:
    numero = int(input("Ingrese un número mayor que 0: "))

print("Número válido ingresado:", numero)
</code></pre>
  <p><strong>Observación:</strong> Uso del bucle <code>while</code> para validar entrada. Se repite hasta que el usuario cumpla la condición.</p>

  <h3 style="font-size:18px; margin:8px 0;">Ejemplo 4: Contar personas en rango de edad 18-65</h3>
  <pre style="background-color:#0d1117; color:#e6edf3; padding:15px; border-radius:10px; font-family:'Consolas','Courier New',monospace; overflow-x:auto;">
<code>edades = [15, 22, 35, 70, 18, 64, 10]
contador = 0

for edad in edades:
    if 18 <= edad <= 65:
        contador += 1

print("Personas entre 18 y 65 años:", contador)
</code></pre>
  <p><strong>Observación:</strong> El operador lógico compuesto <code>18 &lt;= edad &lt;= 65</code> permite verificar si el valor está dentro del rango.</p>

  <h3 style="font-size:18px; margin:8px 0;">Ejemplo 5: Contar vocales en un texto</h3>
  <pre style="background-color:#0d1117; color:#e6edf3; padding:15px; border-radius:10px; font-family:'Consolas','Courier New',monospace; overflow-x:auto;">
<code>texto = input("Ingrese un texto: ").lower()
vocales = "aeiou"
contador = 0

for letra in texto:
    if letra in vocales:
        contador += 1

print("Cantidad de vocales:", contador)
</code></pre>
  <p><strong>Observación:</strong> Combina bucles, condicionales e iteración sobre una cadena de texto.</p>

  <h3 style="font-size:18px; margin:8px 0;">Ejemplo 6: Calcular cuántos precios superan 1000 y aplicar descuento al total</h3>
  <pre style="background-color:#0d1117; color:#e6edf3; padding:15px; border-radius:10px; font-family:'Consolas','Courier New',monospace; overflow-x:auto;">
<code>precios = [500, 1200, 800, 1500, 2000]
contador = 0
total = 0

for precio in precios:
    total += precio
    if precio > 1000:
        contador += 1

# Aplicar descuento del 10% si hay más de 2 precios altos
if contador > 2:
    total *= 0.9

print("Productos mayores a 1000:", contador)
print("Total con posible descuento:", total)
</code></pre>
  <p><strong>Observación:</strong> Ejemplo típico de acumuladores y condicionales anidadas para cálculos más elaborados.</p>

  <h3 style="font-size:18px; margin:8px 0;">Ejemplo 7: Hallar el máximo de cada fila en una matriz</h3>
  <pre style="background-color:#0d1117; color:#e6edf3; padding:15px; border-radius:10px; font-family:'Consolas','Courier New',monospace; overflow-x:auto;">
<code>matriz = [
    [3, 8, 1],
    [12, 5, 7],
    [4, 9, 2]
]

for fila in matriz:
    maximo = fila[0]
    for num in fila:
        if num > maximo:
            maximo = num
    print("Máximo de la fila:", maximo)
</code></pre>
  <p><strong>Observación:</strong> Uso de bucles anidados (<code>for</code> dentro de <code>for</code>). Se analizan listas de listas.</p>

  <h3 style="font-size:18px; margin:8px 0;">Ejemplo 8: Juego de adivinar número con máximo 7 intentos</h3>
  <pre style="background-color:#0d1117; color:#e6edf3; padding:15px; border-radius:10px; font-family:'Consolas','Courier New',monospace; overflow-x:auto;">
<code>import random

secreto = random.randint(1, 100)
intentos = 0
adivinado = False

print(" Adivina el número (entre 1 y 100). Tienes 7 intentos.")

while intentos < 7:
    intento = int(input(f"Intento {intentos + 1}: "))
    intentos += 1

    if intento == secreto:
        print("¡Felicidades!  Adivinaste el número en", intentos, "intentos.")
        adivinado = True
        break
    elif intento < secreto:
        print("El número secreto es mayor.")
    else:
        print("El número secreto es menor.")

if not adivinado:
    print(" Has agotado tus intentos. El número era:", secreto)
</code></pre>
  <p><strong>Observación:</strong> Combina <code>while</code>, <code>if</code>, <code>break</code>, contadores y condiciones múltiples. Ejercicio clásico de control de flujo completo.</p>

</section>

    
    
    
    `,
   
  },

  py6: {
    objetivo: `<p><strong>Objetivo:</strong></p>
    
      <p>   
✔️ Aplicar las estructuras de control y repetición en el desarrollo de programas completos en Python.<br>
✔️ Desarrollar sistemas simples que integren entradas, cálculos, decisiones y salidas <br>
✔️ Fomentar la lógica algorítmica mediante la práctica y resolución de problemas reales. <br>
    
   </p> 
    
    
    
    `,
    teoria: `<p><strong>Teoría:</strong></p>
    
    <section style="text-align:left; color:#ffffff; font-family: Arial, sans-serif; line-height:1.8;">

  <h2 style="font-size:14px; margin-bottom:10px;"> Aplicación práctica de la programación en Python</h2>

  <p>
    En este tema se integran todos los conceptos aprendidos en el curso: variables, funciones, estructuras condicionales, bucles, manejo de listas y control de flujo.
    El objetivo es crear programas funcionales que resuelvan problemas reales mediante una lógica estructurada y modular.
  </p>

  <p>
    Python destaca por su claridad y simplicidad, lo que lo convierte en un lenguaje ideal para aplicar el pensamiento algorítmico en proyectos prácticos.
    Como menciona <strong>McKinney (2022)</strong>, el aprendizaje significativo en programación se logra cuando el estudiante es capaz de combinar estructuras básicas
    para construir soluciones completas, pasando del conocimiento teórico a la implementación efectiva.
  </p>

  <p>En esta etapa, el estudiante aprende a:</p>

  <ul style="margin-left:25px;">
    <li>Planificar un programa (entrada, proceso, salida).</li>
    <li>Aplicar estructuras de control según las necesidades del problema.</li>
    <li>Modularizar el código en funciones reutilizables.</li>
    <li>Validar datos y manejar errores.</li>
    <li>Mejorar la legibilidad del programa con comentarios y nombres descriptivos.</li>
  </ul>

</section>

    <section style="text-align:left; color:#ffffff; font-family: Arial, sans-serif; line-height:1.6;">

  <h2 style="font-size:18px; color:#58a6ff; margin-bottom:15px;"> Proyectos prácticos en Python</h2>

  <!-- Proyecto 1 -->
  <h3 style="font-size:16px; margin-top:15px;">1. Gestor de notas</h3>
  <p><strong>Objetivo:</strong> Registrar estudiantes, calcular sus promedios y guardar los resultados en un archivo.</p>

  <pre style="background-color:#0d1117; color:#e6edf3; padding:15px; border-radius:12px; font-family:'Consolas','Courier New',monospace; overflow-x:auto;">
<code># Gestor de notas - Python
estudiantes = []

cantidad = int(input("¿Cuántos estudiantes desea registrar? "))

for i in range(cantidad):
    nombre = input(f"\nIngrese el nombre del estudiante {i + 1}: ")
    notas = []
    for j in range(3):
        nota = float(input(f"Ingrese la nota {j + 1} de {nombre}: "))
        notas.append(nota)
    promedio = sum(notas) / len(notas)
    estudiantes.append((nombre, promedio))

print("\n Promedios finales:")
for est in estudiantes:
    estado = "Aprobado" if est[1] >= 11 else "Desaprobado"
    print(f"{est[0]}: {est[1]:.2f} ({estado})")

with open("promedios.txt", "w", encoding="utf-8") as archivo:
    for est in estudiantes:
        archivo.write(f"{est[0]}: {est[1]:.2f}\n")

print("\n Datos guardados en 'promedios.txt'")
</code></pre>
  <p><strong>Explicación:</strong> Se usan listas, bucles anidados y condicionales. Se calcula el promedio con <code>sum()</code> y <code>len()</code>. Se guarda la información en un archivo externo con <code>open()</code> y modo <code>w</code>.</p>

  <!-- Proyecto 2 -->
  <h3 style="font-size:16px; margin-top:15px;">2. Sistema de ventas simple (Nivel: Intermedio-Avanzado)</h3>
  <p><strong>Objetivo:</strong> Registrar productos, calcular subtotales, aplicar descuentos y mostrar recibo final.</p>

  <pre style="background-color:#0d1117; color:#e6edf3; padding:15px; border-radius:12px; font-family:'Consolas','Courier New',monospace; overflow-x:auto;">
<code># Sistema de ventas simple
productos = []
precios = []

print("===  Sistema de Ventas ===")
while True:
    nombre = input("\nIngrese el nombre del producto (o 'fin' para terminar): ")
    if nombre.lower() == "fin":
        break
    precio = float(input(f"Precio de {nombre}: S/. "))
    productos.append(nombre)
    precios.append(precio)

total = sum(precios)

print("\nRECIBO DE COMPRA")
for i in range(len(productos)):
    print(f"{productos[i]} - S/. {precios[i]:.2f}")

print(f"\nSubtotal: S/. {total:.2f}")

if total > 100:
    total *= 0.9
    print("Descuento aplicado (10%)")

print(f"Total final: S/. {total:.2f}")
</code></pre>
  <p><strong>Explicación:</strong> Usa listas paralelas (<code>productos</code>, <code>precios</code>) para almacenar pares de datos. Usa un acumulador total con <code>sum()</code>. Aplica condicional para calcular descuentos.</p>

  <!-- Proyecto 3 -->
  <h3 style="font-size:16px; margin-top:15px;">3. Calculadora mejorada (Nivel: Avanzado)</h3>
  <p><strong>Objetivo:</strong> Construir una calculadora modular con validación de errores y menú interactivo.</p>

  <pre style="background-color:#0d1117; color:#e6edf3; padding:15px; border-radius:12px; font-family:'Consolas','Courier New',monospace; overflow-x:auto;">
<code># Calculadora mejorada
def sumar(a, b): return a + b
def restar(a, b): return a - b
def multiplicar(a, b): return a * b
def dividir(a, b):
    if b == 0:
        return "Error: división entre cero"
    return a / b

while True:
    print("\n=== Calculadora ===")
    print("[1] Sumar")
    print("[2] Restar")
    print("[3] Multiplicar")
    print("[4] Dividir")
    print("[5] Salir")

    opcion = input("Seleccione una opción: ")

    if opcion == "5":
        print("Programa finalizado.")
        break

    try:
        x = float(input("Ingrese el primer número: "))
        y = float(input("Ingrese el segundo número: "))
    except ValueError:
        print("Error: debe ingresar números válidos.")
        continue

    if opcion == "1": print("Resultado:", sumar(x, y))
    elif opcion == "2": print("Resultado:", restar(x, y))
    elif opcion == "3": print("Resultado:", multiplicar(x, y))
    elif opcion == "4": print("Resultado:", dividir(x, y))
    else: print("Opción inválida.")
</code></pre>
  <p><strong>Explicación:</strong> Usa funciones para modularizar operaciones, manejo de errores con <code>try-except</code>, e integra bucles y validaciones.</p>

  <!-- Proyecto 4 -->
  <h3 style="font-size:16px; margin-top:15px;">4. Registro de empleados (Nivel: Avanzado)</h3>
  <p><strong>Objetivo:</strong> Registrar empleados con su salario, calcular el promedio salarial y mostrar quién gana más y menos.</p>

  <pre style="background-color:#0d1117; color:#e6edf3; padding:15px; border-radius:12px; font-family:'Consolas','Courier New',monospace; overflow-x:auto;">
<code># Registro de empleados
empleados = {}

while True:
    nombre = input("Ingrese nombre del empleado (o 'fin' para salir): ")
    if nombre.lower() == "fin":
        break
    try:
        salario = float(input(f"Ingrese el salario de {nombre}: "))
        empleados[nombre] = salario
    except ValueError:
        print("Ingrese un valor numérico válido.")

if empleados:
    promedio = sum(empleados.values()) / len(empleados)
    max_empleado = max(empleados, key=empleados.get)
    min_empleado = min(empleados, key=empleados.get)

    print(f"\nSalario promedio: S/. {promedio:.2f}")
    print(f"Empleado con mayor salario: {max_empleado} (S/. {empleados[max_empleado]:.2f})")
    print(f"Empleado con menor salario: {min_empleado} (S/. {empleados[min_empleado]:.2f})")
else:
    print("No se ingresaron empleados.")
</code></pre>
  <p><strong>Explicación:</strong> Uso de diccionarios (clave–valor), cálculo de promedio y búsqueda del máximo/mínimo con <code>key=</code>.</p>

  <!-- Proyecto 5 -->
  <h3 style="font-size:20px; margin-top:15px;">5. Inventario con búsqueda (Nivel: Difícil)</h3>
  <p><strong>Objetivo:</strong> Gestionar un inventario: agregar, buscar, eliminar y mostrar productos.</p>

  <pre style="background-color:#0d1117; color:#e6edf3; padding:15px; border-radius:12px; font-family:'Consolas','Courier New',monospace; overflow-x:auto;">
<code># Inventario con búsqueda
inventario = {}

while True:
    print("\n=== MENÚ DE INVENTARIO ===")
    print("1. Agregar producto")
    print("2. Buscar producto")
    print("3. Eliminar producto")
    print("4. Mostrar inventario")
    print("5. Salir")

    opcion = input("Seleccione una opción: ")

    if opcion == "1":
        nombre = input("Nombre del producto: ")
        precio = float(input("Precio: S/. "))
        inventario[nombre] = precio
    elif opcion == "2":
        buscar = input("Nombre a buscar: ")
        if buscar in inventario:
            print(f"{buscar}: S/. {inventario[buscar]:.2f}")
        else:
            print("Producto no encontrado.")
    elif opcion == "3":
        eliminar = input("Producto a eliminar: ")
        if eliminar in inventario:
            del inventario[eliminar]
            print("Eliminado.")
        else:
            print("No existe ese producto.")
    elif opcion == "4":
        if inventario:
            print("\nInventario actual:")
            for prod, precio in inventario.items():
                print(f"{prod}: S/. {precio:.2f}")
        else:
            print("Inventario vacío.")
    elif opcion == "5":
        print("Fin del programa.")
        break
    else:
        print("Opción inválida.")
</code></pre>
  <p><strong>Explicación:</strong> Diccionarios dinámicos para CRUD básico, menú interactivo con condicionales y bucles.</p>

  <!-- Proyecto 6 -->
  <h3 style="font-size:16px; margin-top:15px;">6. Juego de adivinanza avanzada (Nivel: Muy difícil)</h3>
  <p><strong>Objetivo:</strong> Crear un juego de adivinar número con pista, puntaje y límite de intentos.</p>

  <pre style="background-color:#0d1117; color:#e6edf3; padding:15px; border-radius:12px; font-family:'Consolas','Courier New',monospace; overflow-x:auto;">
<code># Juego de adivinanza avanzada
import random

numero_secreto = random.randint(1, 100)
intentos = 0
max_intentos = 7
puntos = 100

print("¡Adivina el número secreto (1 al 100)!")

while intentos < max_intentos:
    try:
        intento = int(input(f"Intento {intentos + 1}/{max_intentos}: "))
    except ValueError:
        print("Ingrese un número válido.")
        continue

    intentos += 1
    diferencia = abs(numero_secreto - intento)
    puntos -= 10

    if intento == numero_secreto:
        print(f"¡Correcto! Lo lograste en {intentos} intentos con {puntos} puntos.")
        break
    elif intento < numero_secreto:
        print(" El número secreto es mayor.")
    else:
        print(" El número secreto es menor.")

else:
    print(f"Perdiste. El número era {numero_secreto}. Puntaje final: {puntos}")
</code></pre>
  <p><strong>Explicación:</strong> Uso del módulo <code>random</code>, control de flujo con bucles y condicionales, y cálculo de puntaje dinámico.</p>

</section>

    
    
    `,
    ejemplos: `<p><strong>Ejemplos:</strong></p>
 
<section style="background-color:#0a0a0a; color:#e6e6e6; font-family:Arial, sans-serif; line-height:1.7; padding:25px; border-radius:12px; text-align:left;">



<!-- EJERCICIO 1 -->
<h3 style="color:#00bfff; font-size:20px;">1. Contador del 1 al 10</h3>
<p><strong>Planteamiento:</strong> Mostrar los números del 1 al 10 en pantalla usando un bucle for.</p>
<p><strong>Objetivo:</strong> Comprender la estructura básica de un bucle contado en Python.</p>
<div style="background-color:#161b22; color:#e0e0e0; padding:12px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
for i in range(1, 11):
    print(i)
</div>
<p><strong>Salida esperada:</strong><br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10</p>
<p><em>Nota:</em> <code>range(1, 11)</code> genera los números del 1 al 10 (el 11 no se incluye).</p>

<!-- EJERCICIO 2 -->
<h3 style="color:#00bfff; font-size:20px;">2. Suma de números naturales</h3>
<p><strong>Planteamiento:</strong> Calcular la suma de los primeros <code>n</code> números naturales.</p>
<p><strong>Objetivo:</strong> Usar acumuladores dentro de un bucle.</p>
<div style="background-color:#161b22; color:#e0e0e0; padding:12px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
n = int(input("Ingrese un número: "))<br>
suma = 0<br><br>
for i in range(1, n + 1):<br>
&nbsp;&nbsp;&nbsp;&nbsp;suma += i<br><br>
print(f"La suma de los primeros {n} números es: {suma}")
</div>
<p><strong>Ejemplo de salida:</strong><br>Ingrese un número: 5<br>La suma de los primeros 5 números es: 15</p>
<p><em>Nota:</em> Ejemplo de acumulador (<code>suma += i</code>). Fórmula: <code>S = n(n+1)/2</code></p>

<!-- EJERCICIO 3 -->
<h3 style="color:#00bfff; font-size:20px;">3. Mostrar solo los pares</h3>
<p><strong>Planteamiento:</strong> Pedir al usuario un número n y mostrar solo los números pares entre 1 y n.</p>
<p><strong>Objetivo:</strong> Aplicar condicionales dentro de un bucle.</p>
<div style="background-color:#161b22; color:#e0e0e0; padding:12px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
n = int(input("Ingrese un número: "))<br><br>
print(f"Números pares del 1 al {n}:")<br>
for i in range(1, n + 1):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if i % 2 == 0:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(i)
</div>
<p><em>Nota:</em> El operador módulo <code>%</code> permite identificar si un número es par.</p>

<!-- EJERCICIO 4 -->
<h3 style="color:#00bfff; font-size:20px;">4. Contador de vocales</h3>
<p><strong>Planteamiento:</strong> Solicitar una palabra o frase y contar cuántas vocales contiene.</p>
<p><strong>Objetivo:</strong> Practicar el recorrido de cadenas y condiciones lógicas múltiples.</p>
<div style="background-color:#161b22; color:#e0e0e0; padding:12px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
texto = input("Ingrese una frase: ")<br>
contador = 0<br><br>
for letra in texto:<br>
&nbsp;&nbsp;&nbsp;&nbsp;if letra.lower() in "aeiou":<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contador += 1<br><br>
print(f"La frase contiene {contador} vocales.")
</div>
<p><em>Nota:</em> <code>letra.lower()</code> evita distinguir mayúsculas/minúsculas.</p>

<!-- EJERCICIO 5 -->
<h3 style="color:#00bfff; font-size:20px;">5. Promedio de notas</h3>
<p><strong>Planteamiento:</strong> Solicitar 5 notas, calcular el promedio y mostrar si el alumno aprueba (≥11).</p>
<p><strong>Objetivo:</strong> Practicar listas, promedio y condicionales.</p>
<div style="background-color:#161b22; color:#e0e0e0; padding:12px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
notas = []<br><br>
for i in range(5):<br>
&nbsp;&nbsp;&nbsp;&nbsp;nota = float(input(f"Ingrese la nota {i + 1}: "))<br>
&nbsp;&nbsp;&nbsp;&nbsp;notas.append(nota)<br><br>
promedio = sum(notas) / len(notas)<br><br>
if promedio >= 11:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Promedio: {promedio:.2f} ✅ Aprobado")<br>
else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Promedio: {promedio:.2f} ❌ Desaprobado")
</div>
<p><em>Nota:</em> Usa <code>sum()</code> y <code>len()</code>. Muy útil para el proyecto “Gestor de notas”.</p>

<!-- EJERCICIO 6 -->
<h3 style="color:#00bfff; font-size:20px;">6. Múltiplos de un número</h3>
<p><strong>Planteamiento:</strong> Pedir un número e imprimir sus primeros 10 múltiplos.</p>
<p><strong>Objetivo:</strong> Reforzar aritmética e iteración controlada.</p>
<div style="background-color:#161b22; color:#e0e0e0; padding:12px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
num = int(input("Ingrese un número: "))<br><br>
print(f"Los 10 primeros múltiplos de {num} son:")<br>
for i in range(1, 11):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"{num} x {i} = {num * i}")
</div>
<p><em>Nota:</em> Ideal para afianzar bucles con <code>range()</code>.</p>

<!-- EJERCICIO 7 -->
<h3 style="color:#00bfff; font-size:20px;">7. Lista de precios: mayor, menor y promedio</h3>
<p><strong>Planteamiento:</strong> Ingresar varios precios hasta escribir “fin”. Calcular el mayor, el menor y el promedio.</p>
<p><strong>Objetivo:</strong> Aplicar listas, control de flujo y funciones integradas.</p>
<div style="background-color:#161b22; color:#e0e0e0; padding:12px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
precios = []<br><br>
while True:<br>
&nbsp;&nbsp;&nbsp;&nbsp;entrada = input("Ingrese precio (o 'fin' para terminar): ")<br>
&nbsp;&nbsp;&nbsp;&nbsp;if entrada.lower() == "fin":<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>
&nbsp;&nbsp;&nbsp;&nbsp;precios.append(float(entrada))<br><br>
if precios:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Precio mayor: {max(precios)}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Precio menor: {min(precios)}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print(f"Precio promedio: {sum(precios)/len(precios):.2f}")<br>
else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("No se ingresaron precios.")
</div>
<p><em>Nota:</em> Demuestra validaciones, acumuladores y control de flujo <code>while</code>.</p>

<!-- EJERCICIO 8 -->
<h3 style="color:#00bfff; font-size:20px;">8. Generador de contraseñas aleatorias</h3>
<p><strong>Planteamiento:</strong> Crear una contraseña con letras, números y símbolos.</p>
<p><strong>Objetivo:</strong> Introducir el módulo <code>random</code> y manipulación de cadenas.</p>
<div style="background-color:#161b22; color:#e0e0e0; padding:12px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
import random<br>
import string<br><br>
longitud = int(input("Longitud de la contraseña: "))<br>
caracteres = string.ascii_letters + string.digits + "!@#$%^&*()"<br><br>
contraseña = "".join(random.choice(caracteres) for _ in range(longitud))<br>
print("Contraseña generada:", contraseña)
</div>
<p><em>Nota:</em> Integra módulos externos, comprensión de listas y aleatoriedad.</p>

<!-- EJERCICIO 9 -->
<h3 style="color:#00bfff; font-size:20px;">9. Números primos en un rango</h3>
<p><strong>Planteamiento:</strong> Mostrar todos los números primos entre 1 y 100.</p>
<p><strong>Objetivo:</strong> Aplicar funciones y bucles anidados.</p>
<div style="background-color:#161b22; color:#e0e0e0; padding:12px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
def es_primo(num):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if num &lt; 2:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False<br>
&nbsp;&nbsp;&nbsp;&nbsp;for i in range(2, int(num**0.5) + 1):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if num % i == 0:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False<br>
&nbsp;&nbsp;&nbsp;&nbsp;return True<br><br>
print("Números primos del 1 al 100:")<br>
for n in range(1, 101):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if es_primo(n):<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(n, end=" ")
</div>
<p><em>Nota:</em> Ejemplo de funciones personalizadas y eficiencia algorítmica.</p>

<!-- EJERCICIO 10 -->
<h3 style="color:#00bfff; font-size:20px;">10. Simulación de cajero automático</h3>
<p><strong>Planteamiento:</strong> Crear un programa que simule un cajero automático con saldo, depósitos y retiros.</p>
<p><strong>Objetivo:</strong> Integrar todas las estructuras: bucles, condicionales, funciones y validaciones.</p>
<div style="background-color:#161b22; color:#e0e0e0; padding:12px; border-radius:8px; font-family:'Consolas','Courier New',monospace;">
saldo = 1000.0<br><br>
while True:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("\n=== Cajero Automático ===")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("1. Consultar saldo")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("2. Depositar dinero")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("3. Retirar dinero")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("4. Salir")<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;opcion = input("Seleccione una opción: ")<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;if opcion == "1":<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"Su saldo actual es: S/. {saldo:.2f}")<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif opcion == "2":<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;monto = float(input("Ingrese monto a depositar: "))<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;saldo += monto<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Depósito realizado con éxito.")<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif opcion == "3":<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;monto = float(input("Ingrese monto a retirar: "))<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if monto &lt;= saldo:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;saldo -= monto<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Retiro exitoso.")<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Saldo insuficiente.")<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif opcion == "4":<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Gracias por usar el cajero.")<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br>
&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Opción inválida.")
</div>
<p><em>Nota:</em> Simula un sistema real con control de flujo y validaciones.</p>

</section>



    `,
    quiz_final: `
    
    <section id="quiz_final_python" class="quiz-section" 
style="font-family:'Segoe UI', Tahoma, sans-serif; color:#fff; line-height:1.6; margin-top:30px; text-align:left;">

  <p><strong style="color:#22c1dc;">Examen Final – Minicurso 3: Fundamentos de Python</strong></p>

  <p><strong style="color:#22c1dc;"> Planteamiento:</strong> 
  Este examen tiene como propósito evaluar tu dominio integral de los conceptos fundamentales de <strong>Python</strong>, incluyendo variables, estructuras de control, funciones y manejo de datos. Es la etapa final para demostrar tu progreso en este minicurso.</p>

  <p>
    <strong style="color:#22c1dc;">Condición de aprobación para el minicurso 3:</strong> Nota mínima 11.<br>
    <strong style="color:#22c1dc;">Peso en la evaluación:</strong> 50% de la nota total del Minicurso 3.
  </p>

  <p><strong style="color:#22c1dc;">📝 Indicaciones:</strong></p>
  <ul style="margin:12px 0 18px 20px; line-height:1.7; color:#fff;">
    <li>Lee cada pregunta cuidadosamente antes de responder.</li>
    <li>Aplica los conocimientos adquiridos en todo el curso.</li>
    <li>Desarrolla tus respuestas con claridad y precisión.</li>
    <li>Revisa tus respuestas antes de enviar el formulario.</li>
  </ul>

  <p><strong style="color:#22c1dc;"> Objetivo:</strong> 
  Evaluar tu capacidad para aplicar los fundamentos de Python en la resolución de problemas mediante el diseño y análisis de algoritmos.</p>

  <div style="text-align:center; margin-top:25px;">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScA8M-pgIldv7ShwdaCPvy1tvTZgFN4fXPT5FClvExfNmUBXA/viewform?usp=dialog" 
       target="_blank" 
       style="display:inline-block; background-color:#22c1dc; color:white; padding:12px 26px; border-radius:8px; text-decoration:none; font-weight:bold; 
              box-shadow:0 3px 6px rgba(0,0,0,0.15); transition:background-color 0.3s;">
       🧾 Iniciar Examen Final
    </a>
  </div>

</section>
    
    
    
    
    
    `
  },

  // Curso 4 – Modular
  mod1: {
    objetivo: `<p><strong>Objetivo:</strong> </p>
    
   <p>   
✔️ Comprender qué es la modularización y sus principales ventajas.<br>
✔️ Aprender a usar subprocesos y funciones en PSeInt y Python.<br>
✔️ Aplicar funciones modulares en un programa práctico y reutilizable. <br>
    
   </p>  
    
    
    
    
    
    
    `,
    teoria: `<p><strong>Teoría:</strong></p>

<section style="font-family: Arial, sans-serif; color:#ffffff; line-height:1.6; padding:20px; text-align:left;">


  <p>En este minicurso aprenderás los fundamentos esenciales de la programación modular, una técnica que te ayudará a organizar mejor tu código dividiéndolo en partes más pequeñas llamadas funciones.</p>

  <p>La idea principal es separar un programa grande en módulos, donde cada uno cumple una tarea específica. Esto facilita la lectura, el mantenimiento y la reutilización del código.</p>

  <p>Durante el curso aprenderás:</p>
  <ul>
    <li>Qué es la modularización y por qué es importante.</li>
    <li>Cómo definir y usar funciones en pseudocódigo y Python.</li>
    <li>Aplicar lo aprendido en un mini reto final, desarrollando un programa sencillo usando funciones.</li>
  </ul>

  <p>Este minicurso está diseñado para principiantes, por lo que no necesitas experiencia avanzada, solo ganas de aprender paso a paso cómo crear programas más ordenados y eficientes.</p>

  <p>¡Empecemos a modularizar y a pensar como verdaderos programadores!</p>

</section>


<section style="font-family: Arial, sans-serif; color:#ffffff; line-height:1.6; padding:20px; text-align:left;">

  <h3 style="font-size:16px;">1. Definición de Modularización</h3>

  <p>La modularización es uno de los principios más importantes dentro de la programación estructurada y la ingeniería del software moderna. Consiste en dividir un programa en partes más pequeñas e independientes, llamadas módulos o funciones, que cumplen tareas específicas y colaboran entre sí para resolver un problema completo.</p>

  <p>En otras palabras, modularizar significa organizar el código en bloques lógicos y reutilizables, lo que favorece la claridad, el mantenimiento y la escalabilidad de los programas.</p>

  <p>Según Lutz (2021), la modularidad permite “organizar el código de manera que cada parte del programa sea independiente y reutilizable, reduciendo la complejidad general del sistema”. Esto significa que un programa modular no es una secuencia continua de instrucciones, sino un conjunto de componentes bien definidos que cooperan de forma ordenada.</p>

  <p>Por su parte, Python Software Foundation (2024), las funciones como forma de modularización son “bloques de código que se pueden reutilizar, llamados mediante su nombre, y que permiten recibir datos de entrada y devolver resultados de salida”. Este principio está en la base de todo lenguaje de programación moderno, incluyendo Python, C, Java o incluso el pseudocódigo educativo de PSeInt.</p>

  <p>La modularización también se relaciona con el concepto de abstracción, ya que permite centrarse en qué hace cada módulo, sin preocuparse por cómo lo hace internamente. Este enfoque fue introducido por los pioneros de la programación estructurada es un programa bien diseñado debía ser “una composición jerárquica de módulos claramente definidos y comprensibles” ( Zelle, 2022).</p>

  <p>En términos prácticos, un programa modular:</p>
  <ul>
    <li>Divide las tareas en bloques funcionales independientes.</li>
    <li>Permite reutilizar código en distintos contextos.</li>
    <li>Facilita la colaboración en equipo, asignando módulos diferentes a distintos programadores.</li>
    <li>Mejora la legibilidad, el mantenimiento y la prueba de errores (debugging).</li>
    <li>Hace posible la evolución del software, añadiendo o reemplazando módulos sin reescribir todo el sistema.</li>
  </ul>

  <p>Por tal motivo, la modularización no solo es una técnica de diseño, sino también una filosofía de desarrollo que promueve la claridad, la reutilización y la escalabilidad. Tal como afirma Zelle (2022), “el diseño modular permite que los programas crezcan en tamaño y complejidad sin perder su estructura lógica ni su comprensibilidad”.</p>

</section>

 <section style="font-family: Arial, sans-serif; color:#ffffff; line-height:1.6; padding:20px; text-align:left;">

  <h3 style="font-size:16px; font-weight:bold;">2. Ventajas de la modularización</h3>

  <p>La modularización en la programación ofrece diversos beneficios que contribuyen a mejorar la calidad, la eficiencia y la organización del código. A continuación, se presentan las principales ventajas:</p>

  <p><strong> - Facilita la lectura y el mantenimiento del código.</strong><br>
  Dividir un programa en secciones o módulos más pequeños permite que el desarrollador comprenda de forma más clara el funcionamiento de cada parte. Esto hace posible realizar modificaciones o actualizaciones sin afectar el resto del sistema. Según Moreno, Robles y Román (2020), la estructura modular simplifica la comprensión del programa y mejora la capacidad de mantenimiento del software.</p>

  <p><strong> - Promueve la reutilización del código.</strong><br>
  Uno de los beneficios más destacados de la modularización es la posibilidad de reutilizar las funciones o procedimientos en diferentes programas o proyectos. Esta práctica evita la duplicación de código y fomenta la eficiencia en el desarrollo. De acuerdo con Zelle (2022), el uso de funciones reutilizables reduce el tiempo de programación y garantiza mayor consistencia en los resultados.</p>

  <p><strong> - Permite el trabajo en equipo.</strong><br>
  Al dividir un programa en módulos independientes, es posible asignar cada parte a distintos miembros del equipo de desarrollo. Esto facilita el trabajo colaborativo y acelera el proceso de creación del software. Moreno et al. (2020) destacan que la modularización favorece la distribución de tareas y el desarrollo simultáneo de componentes del sistema.</p>

  <p><strong> - Reduce errores y mejora las pruebas.</strong><br>
  Cada módulo puede ser analizado y probado de forma independiente, lo que facilita la detección y corrección de errores. Este enfoque modular incrementa la confiabilidad del programa y reduce los costos asociados a la depuración. Según Zelle (2022), las pruebas unitarias en módulos individuales permiten identificar rápidamente los fallos y mejorar la calidad del producto final.</p>

</section>


    
    <section style="font-family: Arial, sans-serif; color:#ffffff; line-height:1.6; padding:20px; text-align:left;">

  <h3 style="font-size:16px; font-weight:bold;">3. Conceptos clave de la modularización</h3>

  <p>La modularización se basa en dividir un programa en partes más pequeñas llamadas funciones o módulos, cada una con una tarea específica. Este enfoque permite organizar mejor el código, hacerlo más comprensible y facilitar su mantenimiento.</p>

  <p>Comprender los conceptos fundamentales relacionados con las funciones es esencial para desarrollar programas eficientes y bien estructurados. A continuación, se presentan los principales términos vinculados a la modularización:</p>

  <table style="width:100%; border-collapse:collapse; color:#ffffff; margin-top:10px;">
    <thead>
      <tr style="border-bottom:1px solid #ffffff;">
        <th style="text-align:left; padding:6px;">Concepto</th>
        <th style="text-align:left; padding:6px;">Descripción</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:6px;">Función o módulo</td>
        <td style="padding:6px;">Bloque de código que realiza una tarea específica.</td>
      </tr>
      <tr>
        <td style="padding:6px;">Entrada</td>
        <td style="padding:6px;">Datos que la función recibe para procesar.</td>
      </tr>
      <tr>
        <td style="padding:6px;">Salida</td>
        <td style="padding:6px;">Resultado o acción que genera la función.</td>
      </tr>
      <tr>
        <td style="padding:6px;">Parámetros</td>
        <td style="padding:6px;">Variables que se pasan a la función al ser llamada.</td>
      </tr>
      <tr>
        <td style="padding:6px;">Retorno</td>
        <td style="padding:6px;">Valor que la función devuelve al terminar su ejecución.</td>
      </tr>
    </tbody>
  </table>

  <p>Según la Python Software Foundation (2024), las funciones son “uno de los mecanismos más potentes para estructurar programas, permitiendo definir comportamientos reutilizables y reducir la duplicación de código”.</p>

</section>

  <section style="font-family: Arial, sans-serif; color:#ffffff; line-height:1.7; text-align:left; padding:15px;">

<h4 style="font-size:14px; font-weight:bold;">Referencias</h4>

<p>Introducción a la programación modular con Python. Programación Fácil. (2024, 3 de julio). <em>Introducción a la programación modular con Python</em> [Video]. YouTube. <a href="https://www.youtube.com/watch?v=qfNCH9ajjOA" style="color:#00ffff;">https://www.youtube.com/watch?v=qfNCH9ajjOA</a></p>

<p>Cómo Crear e Importar Módulos en Python. Gutiérrez-García, J. O. [Código Máquina]. (2021, 6 de junio). <em>Cómo Crear e Importar Módulos en Python</em> [Video]. YouTube. <a href="https://www.youtube.com/watch?v=bf_698bfPDU" style="color:#00ffff;">https://www.youtube.com/watch?v=bf_698bfPDU</a></p>

<p>MÓDULOS en Python 🐍 Reutilizar FUNCIONES como un PRO. Charly Cimino. (2024, 23 de marzo). <em>MÓDULOS en Python 🐍 Reutilizar FUNCIONES como un PRO 😉</em> [Video]. YouTube. <a href="https://www.youtube.com/watch?v=kay0DfqVRb0" style="color:#00ffff;">https://www.youtube.com/watch?v=kay0DfqVRb0</a></p>

</section>
  
    
    
    `,
    ejemplos: `<p><strong>Ejemplos:</strong></p>
    
    
    <section style="font-family: Arial, sans-serif; color:#ffffff; line-height:1.6; padding:20px; text-align:left;">

  <h3 style="font-size:16px; font-weight:bold;">Ejercicios: Funciones y modularización</h3>

  <p>La práctica es esencial para comprender la utilidad de la modularización. Los ejercicios están organizados de menor a mayor dificultad, guiando desde funciones simples hasta el uso de parámetros, retornos y estructuras de control dentro de módulos funcionales.</p>

  <!-- Ejercicio 1 -->
  <h4 style="font-size:14px; font-weight:bold;">Ejercicio 1: Saludar</h4>
  <p><strong>Planteamiento:</strong> Crear una función llamada <code>saludar</code> que reciba un nombre y muestre un saludo personalizado.</p>
  <div style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px; font-family:'Consolas','Courier New',monospace;">
def saludar(nombre):<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("Hola,", nombre)<br><br>
saludar("Ana")
  </div>
  <p><strong>Salida esperada:</strong> Hola, Ana</p>
  <p><em>Explicación:</em> Ejercicio básico para comprender cómo se define y llama una función.</p>

  <!-- Ejercicio 2 -->
  <h4 style="font-size:14px; font-weight:bold;">Ejercicio 2: Mostrar menú</h4>
  <p><strong>Planteamiento:</strong> Diseñar una función <code>mostrar_menu</code> que imprima tres opciones del programa.</p>
  <div style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px; font-family:'Consolas','Courier New',monospace;">
def mostrar_menu():<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("=== MENÚ PRINCIPAL ===")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("1. Registrar usuario")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("2. Consultar datos")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("3. Salir")<br><br>
mostrar_menu()
  </div>
  <p><strong>Salida esperada:</strong><br>=== MENÚ PRINCIPAL ===<br>1. Registrar usuario<br>2. Consultar datos<br>3. Salir</p>

  <!-- Ejercicio 3 -->
  <h4 style="font-size:14px; font-weight:bold;">Ejercicio 3: Doble de un número</h4>
  <p><strong>Planteamiento:</strong> Crear una función <code>doble(numero)</code> que devuelva el doble del valor ingresado.</p>
  <div style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px; font-family:'Consolas','Courier New',monospace;">
def doble(numero):<br>
&nbsp;&nbsp;&nbsp;&nbsp;return numero * 2<br><br>
print("El doble de 5 es:", doble(5))
  </div>
  <p><strong>Salida esperada:</strong> El doble de 5 es: 10</p>

  <!-- Ejercicio 4 -->
  <h4 style="font-size:14px; font-weight:bold;">Ejercicio 4: Área de un rectángulo</h4>
  <p><strong>Planteamiento:</strong> Definir una función <code>area_rectangulo(base, altura)</code> que calcule y retorne el área.</p>
  <div style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px; font-family:'Consolas','Courier New',monospace;">
def area_rectangulo(base, altura):<br>
&nbsp;&nbsp;&nbsp;&nbsp;return base * altura<br><br>
print("Área:", area_rectangulo(5, 3))
  </div>
  <p><strong>Salida esperada:</strong> Área: 15</p>

  <!-- Ejercicio 5 -->
  <h4 style="font-size:14px; font-weight:bold;">Ejercicio 5: Número par o impar</h4>
  <p><strong>Planteamiento:</strong> Construir una función <code>es_par(numero)</code> que retorne True si el número es par y False en caso contrario.</p>
  <div style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px; font-family:'Consolas','Courier New',monospace;">
def es_par(numero):<br>
&nbsp;&nbsp;&nbsp;&nbsp;return numero % 2 == 0<br><br>
print(es_par(4))   # True<br>
print(es_par(7))   # False
  </div>

  <!-- Ejercicio 6 -->
  <h4 style="font-size:14px; font-weight:bold;">Ejercicio 6: Promedio de tres notas</h4>
  <p><strong>Planteamiento:</strong> Diseñar una función <code>promedio(n1, n2, n3)</code> que calcule y devuelva el promedio de tres calificaciones.</p>
  <div style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px; font-family:'Consolas','Courier New',monospace;">
def promedio(n1, n2, n3):<br>
&nbsp;&nbsp;&nbsp;&nbsp;return (n1 + n2 + n3) / 3<br><br>
print("Promedio:", promedio(15, 18, 20))
  </div>
  <p><strong>Salida esperada:</strong> Promedio: 17.6666666667</p>

  <!-- Ejercicio 7 -->
  <h4 style="font-size:14px; font-weight:bold;">Ejercicio 7: Conversión de temperatura</h4>
  <p><strong>Planteamiento:</strong> Crear una función <code>celsius_a_fahrenheit(c)</code> que convierta grados Celsius a Fahrenheit usando <code>F = (C * 9/5) + 32</code>.</p>
  <div style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px; font-family:'Consolas','Courier New',monospace;">
def celsius_a_fahrenheit(c):<br>
&nbsp;&nbsp;&nbsp;&nbsp;return (c * 9/5) + 32<br><br>
print("35 °C =", celsius_a_fahrenheit(35), "°F")
  </div>
  <p><strong>Salida esperada:</strong> 35 °C = 95.0 °F</p>

  <!-- Ejercicio 8 -->
  <h4 style="font-size:14px; font-weight:bold;">Ejercicio 8: Menú interactivo modular</h4>
  <p><strong>Planteamiento:</strong> Elaborar un pequeño sistema modular con tres funciones: <code>mostrar_menu()</code>, <code>opcion1()</code> y <code>opcion2()</code>.</p>
  <div style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px; font-family:'Consolas','Courier New',monospace;">
def mostrar_menu():<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("=== MENÚ PRINCIPAL ===")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("1. Registrar usuario")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("2. Consultar datos")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("3. Salir")<br><br>
def opcion1():<br>
&nbsp;&nbsp;&nbsp;&nbsp;nombre = input("Ingrese nombre de usuario: ")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("Usuario registrado:", nombre)<br><br>
def opcion2():<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("Consultando datos...")<br><br>
# Programa principal<br>
mostrar_menu()<br>
opcion = input("Seleccione una opción: ")<br><br>
if opcion == "1":<br>
&nbsp;&nbsp;&nbsp;&nbsp;opcion1()<br>
elif opcion == "2":<br>
&nbsp;&nbsp;&nbsp;&nbsp;opcion2()<br>
else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("Saliendo del programa...")
  </div>

  <p>Estos ejercicios permiten al estudiante pasar de funciones simples a programas estructurados, fortaleciendo su pensamiento lógico y comprensión del flujo de ejecución.</p>

<!-- Ejercicio 9 -->
<h4 style="font-size:14px; font-weight:bold;">Ejercicio 9: Calculadora modular</h4>
<p><strong>Planteamiento:</strong> Crear un programa que use funciones para realizar operaciones matemáticas básicas (suma, resta, multiplicación y división). 
El menú principal debe permitir al usuario elegir la operación que desea ejecutar.</p>

<div style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px; font-family:'Consolas','Courier New',monospace; text-align:left;">
def sumar(a, b):<br>
&nbsp;&nbsp;&nbsp;&nbsp;return a + b<br><br>

def restar(a, b):<br>
&nbsp;&nbsp;&nbsp;&nbsp;return a - b<br><br>

def multiplicar(a, b):<br>
&nbsp;&nbsp;&nbsp;&nbsp;return a * b<br><br>

def dividir(a, b):<br>
&nbsp;&nbsp;&nbsp;&nbsp;if b != 0:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return a / b<br>
&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Error: división entre cero"<br><br>

def mostrar_menu():<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("=== CALCULADORA MODULAR ===")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("1. Sumar")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("2. Restar")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("3. Multiplicar")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("4. Dividir")<br>
&nbsp;&nbsp;&nbsp;&nbsp;print("5. Salir")<br><br>

# Programa principal<br>
while True:<br>
&nbsp;&nbsp;&nbsp;&nbsp;mostrar_menu()<br>
&nbsp;&nbsp;&nbsp;&nbsp;opcion = input("Seleccione una opción: ")<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;if opcion == "5":<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Programa finalizado.")<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;a = float(input("Ingrese el primer número: "))<br>
&nbsp;&nbsp;&nbsp;&nbsp;b = float(input("Ingrese el segundo número: "))<br><br>
&nbsp;&nbsp;&nbsp;&nbsp;if opcion == "1":<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Resultado:", sumar(a, b))<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif opcion == "2":<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Resultado:", restar(a, b))<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif opcion == "3":<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Resultado:", multiplicar(a, b))<br>
&nbsp;&nbsp;&nbsp;&nbsp;elif opcion == "4":<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Resultado:", dividir(a, b))<br>
&nbsp;&nbsp;&nbsp;&nbsp;else:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Opción no válida. Intente nuevamente.")
</div>

<p><strong>Salida esperada (ejemplo):</strong><br>
=== CALCULADORA MODULAR ===<br>
1. Sumar<br>
2. Restar<br>
3. Multiplicar<br>
4. Dividir<br>
5. Salir<br>
Seleccione una opción: 1<br>
Ingrese el primer número: 8<br>
Ingrese el segundo número: 4<br>
Resultado: 12</p>

<p><em>Explicación:</em> Este ejercicio integra todo lo aprendido: funciones con retorno, manejo de errores, bucles y estructuras condicionales. 
Representa un ejemplo realista de cómo modularizar un programa completo.</p>

    
    
    
    
    
    
    `,
    quiz_de_entrada: `


    <section id="quiz_intermedio_modular" class="quiz-section" 
style="font-family:'Segoe UI', Tahoma, sans-serif; color:#fff; line-height:1.6; margin-top:30px; text-align:left;">

  <p><strong style="color:#22c1dc;">Quiz Intermedio – Minicurso 4: Programación Modular</strong></p>

  <p><strong style="color:#22c1dc;"> Planteamiento:</strong> 
  Este cuestionario busca reforzar tus conocimientos sobre el uso de funciones, parámetros, alcance de variables y la importancia de la modularización en el desarrollo de programas. Permite comprobar tu progreso antes del examen final.</p>

  <p>
    <strong style="color:#22c1dc;">Condición de aprobación:</strong> Nota mínima 11.<br>
    <strong style="color:#22c1dc;">Peso en la evaluación:</strong> 25% de la nota total del Minicurso 4.
  </p>

  <p><strong style="color:#22c1dc;">📝 Indicaciones:</strong></p>
  <ul style="margin:12px 0 18px 20px; line-height:1.7; color:#fff;">
    <li>Lee atentamente cada pregunta antes de responder.</li>
    <li>Aplica correctamente los conceptos de funciones y modularización.</li>
    <li>Selecciona o desarrolla las respuestas según se indique en cada caso.</li>
    <li>Verifica tus respuestas antes de enviar el formulario.</li>
  </ul>

  <p><strong style="color:#22c1dc;"> Objetivo:</strong> 
  Evaluar tu dominio intermedio en la aplicación de funciones y módulos dentro de programas estructurados.</p>

  <div style="text-align:center; margin-top:25px;">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSc08vI1O6APWwy7SavAQnMkVEDu9tBN562lC72A_EfZVDXiMQ/viewform?usp=dialog" 
       target="_blank" 
       style="display:inline-block; background-color:#22c1dc; color:white; padding:12px 26px; border-radius:8px; text-decoration:none; font-weight:bold; 
              box-shadow:0 3px 6px rgba(0,0,0,0.15); transition:background-color 0.3s;">
       📋 Iniciar Quiz Intermedio
    </a>
  </div>

</section>
    
    
    
    `
  },
  mod2: {
    objetivo: `<p><strong>Objetivo:</strong> </p>
    
    <p>   
✔️ Entender el concepto de modularización y reconocer sus ventajas principales. <br>
✔️ Aprender a definir y utilizar subprocesos y funciones en PSeInt y Python, identificando cuándo usar cada uno.<br>
✔️ Crear programas sencillo modularizado usando funciones, verificando su reutilización y facilidad de mantenimiento. <br>
    
   </p>  
    
    
    
    
    
    `,
    teoria: `<p><strong>Teoría:</strong> </p>


    <section style="font-family: Arial, sans-serif; color:#ffffff; line-height:1.7; text-align:left; padding:15px;">

<h4 style="font-size:14px; font-weight:bold;">1. Contenido teórico: Funciones y Subprocesos</h4>
<p>Las funciones y subprocesos constituyen los pilares de la programación modular, ya que permiten dividir un programa en partes más pequeñas, organizadas y reutilizables. Este enfoque facilita la comprensión, el mantenimiento y la depuración del código, además de fomentar el desarrollo colaborativo y la reutilización de componentes.</p>

<p>Como explican Zelle (2022) y Severance (2016), la modularización es una práctica esencial que ayuda a los programadores a estructurar sus ideas en piezas de código independientes, claras y fáciles de probar. En otras palabras, un programa modular está formado por distintos bloques que cooperan para resolver un problema mayor.</p>

<p>Cada bloque (función o subproceso) tiene un objetivo específico, lo que mejora la claridad y promueve la eficiencia en el diseño de programas. De esta forma, el desarrollador puede concentrarse en resolver tareas pequeñas y luego integrarlas en un sistema funcional completo.</p>

<h4 style="font-size:14px; font-weight:bold;">Tipos de módulos</h4>

<p><strong>Subproceso:</strong> Un subproceso es un bloque de código que no devuelve un valor, pero realiza una acción concreta dentro del programa. Su propósito principal es ejecutar instrucciones como mostrar mensajes, imprimir resultados o modificar variables globales.</p>

<p>De acuerdo con Moreno, Robles y Román (2020), los subprocesos facilitan la segmentación de tareas y mejoran la legibilidad del código, ya que cada acción se encapsula en una porción independiente.</p>

<p>Ejemplo (PSeInt):</p>
<pre style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px;">
SubProceso MostrarSaludo(nombre)
    Escribir "¡Hola ", nombre, ", bienvenido al sistema!"
FinSubProceso

MostrarSaludo("Ana")
</pre>

<p>Ejemplo (Python):</p>
<pre style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px;">
def mostrar_saludo(nombre):
    print("¡Hola", nombre, ", bienvenido al sistema!")

mostrar_saludo("Ana")
</pre>

<p>Este subproceso imprime un mensaje en pantalla, pero no devuelve un valor.</p>

<p><strong>Función:</strong> Una función es un bloque de código que devuelve un valor después de ejecutar sus instrucciones. Se utiliza cuando es necesario calcular un resultado que será usado más adelante, como un promedio o una operación matemática.</p>

<p>La Python Software Foundation (2024) define las funciones como “mecanismos que permiten agrupar instrucciones bajo un nombre y devolver un resultado reutilizable dentro de un programa”.</p>

<p>Ejemplo (PSeInt):</p>
<pre style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px;">
Funcion area <- CalcularArea(base, altura)
    area <- base * altura
FinFuncion

Escribir "El área del rectángulo es: ", CalcularArea(5, 3)
</pre>

<p>Ejemplo (Python):</p>
<pre style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px;">
def calcular_area(base, altura):
    return base * altura

print("El área del rectángulo es:", calcular_area(5, 3))
</pre>

<p>En este caso, la función devuelve un valor que puede ser utilizado o mostrado.</p>

<h4 style="font-size:14px; font-weight:bold;">Ventajas de usar módulos</h4>

<p>Diversos autores coinciden en que la modularización es una práctica clave del pensamiento computacional (Zelle, 2022; Severance, 2016). Entre sus principales ventajas se destacan:</p>
<ul>
<li>Reutilización: permite emplear el mismo código en diferentes programas.</li>
<li>Mantenimiento sencillo: facilita localizar y corregir errores.</li>
<li>Claridad: cada bloque tiene un propósito definido.</li>
<li>Trabajo colaborativo: distintos miembros pueden desarrollar módulos por separado.</li>
<li>Escalabilidad: facilita ampliar programas sin modificar todo el código.</li>
</ul>

<p>Las funciones y subprocesos son esenciales para crear programas estructurados, escalables y comprensibles. El subproceso se usa para acciones directas, mientras que la función se emplea para retornar resultados. Adoptar este enfoque modular fomenta la eficiencia, la legibilidad y la colaboración en el desarrollo de software.</p>

</section>

    
 <section style="font-family: Arial, sans-serif; color:#ffffff; line-height:1.7; text-align:left; padding:15px;">

<h4 style="font-size:14px; font-weight:bold;">2. Estructura general de funciones y subprocesos</h4>

<p>Comprender la estructura sintáctica de las funciones y subprocesos es esencial para escribir programas claros y bien organizados. Tanto en PSeInt como en Python, estas estructuras representan el corazón de la programación modular, ya que permiten dividir un problema grande en unidades pequeñas y manejables. Cada módulo tiene un propósito definido y puede recibir datos, procesarlos y, si es necesario, devolver un resultado al programa principal.</p>

<h4 style="font-size:14px; font-weight:bold;">Estructura general en PSeInt</h4>

<p>PSeInt, al ser una herramienta de pseudocódigo educativo, ofrece una sintaxis sencilla y fácil de leer para representar funciones y subprocesos.</p>

<pre style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px;">
SubProceso Nombre(parametros)
    // Instrucciones
FinSubProceso

Funcion resultado <- Nombre(parametros)
    // Instrucciones
    resultado <- ...
FinFuncion
</pre>

<h4 style="font-size:14px; font-weight:bold;">Explicación</h4>

<p><strong>SubProceso:</strong> Se utiliza cuando el bloque de código no necesita devolver un valor. Sirve principalmente para ejecutar una serie de instrucciones, como mostrar datos, realizar cálculos intermedios o imprimir mensajes en pantalla.</p>

<pre style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px;">
SubProceso MostrarSaludo(nombre)
    Escribir "Hola ", nombre
FinSubProceso
</pre>

<p>En este caso, el subproceso realiza una acción (mostrar un saludo), pero no retorna un valor.</p>

<p><strong>Función:</strong> Se emplea cuando el bloque debe devolver un resultado al programa principal. Es útil para operaciones matemáticas, cálculos o transformaciones de datos.</p>

<pre style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px;">
Funcion resultado <- Sumar(a, b)
    resultado <- a + b
FinFuncion
</pre>

<p>En este ejemplo, la función procesa los datos de entrada (a y b) y devuelve la suma como resultado.</p>

<p><strong>Parámetros:</strong> Son variables que permiten enviar información a una función o subproceso desde el programa principal. De esta forma, un mismo bloque puede ser reutilizado con distintos valores de entrada, evitando la duplicación de código.</p>

<h4 style="font-size:14px; font-weight:bold;">Estructura general en Python</h4>

<p>Python utiliza una sintaxis más compacta, basada en la palabra clave <code>def</code> para definir funciones. Su estructura básica es la siguiente:</p>

<pre style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px;">
def nombre(parametros):
    # Instrucciones
    return resultado
</pre>

<h4 style="font-size:14px; font-weight:bold;">Explicación</h4>

<ul>
<li>La palabra clave <code>def</code> indica el inicio de una función.</li>
<li>Los parámetros se escriben entre paréntesis y pueden ser opcionales.</li>
<li>Las instrucciones dentro de la función deben estar indentadas (sangradas), indicando su pertenencia al bloque.</li>
<li>La instrucción <code>return</code> se utiliza cuando se desea devolver un valor al lugar desde donde se llamó la función. Si no se usa, la función simplemente ejecuta acciones, similar a un SubProceso en PSeInt.</li>
</ul>

<p>Ejemplo 1 (función con retorno):</p>

<pre style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px;">
def sumar(a, b):
    return a + b

print("La suma es:", sumar(4, 3))
</pre>

<p>Ejemplo 2 (función sin retorno):</p>

<pre style="background-color:#1a1a1a; color:#ffffff; padding:10px; border-radius:5px;">
def mostrar_saludo(nombre):
    print("Hola,", nombre)

mostrar_saludo("Ana")
</pre>

<p>En el primer caso, la función devuelve un valor (resultado de la suma). En el segundo, solo ejecuta una acción (mostrar un saludo).</p>

<h4 style="font-size:14px; font-weight:bold;">Relación entre PSeInt y Python</h4>

<table style="border-collapse: collapse; width: 100%; color:#ffffff;">
<tr>
<th style="border: 1px solid #ffffff; padding:5px; text-align:left;">Concepto</th>
<th style="border: 1px solid #ffffff; padding:5px; text-align:left;">PSeInt</th>
<th style="border: 1px solid #ffffff; padding:5px; text-align:left;">Python</th>
</tr>
<tr>
<td style="border: 1px solid #ffffff; padding:5px;">Palabra clave para definir</td>
<td style="border: 1px solid #ffffff; padding:5px;">SubProceso / Funcion</td>
<td style="border: 1px solid #ffffff; padding:5px;">def</td>
</tr>
<tr>
<td style="border: 1px solid #ffffff; padding:5px;">Parámetros</td>
<td style="border: 1px solid #ffffff; padding:5px;">Entre paréntesis ( )</td>
<td style="border: 1px solid #ffffff; padding:5px;">Entre paréntesis ( )</td>
</tr>
<tr>
<td style="border: 1px solid #ffffff; padding:5px;">Retorno de valor</td>
<td style="border: 1px solid #ffffff; padding:5px;">Con el símbolo &lt;-</td>
<td style="border: 1px solid #ffffff; padding:5px;">Con return</td>
</tr>
<tr>
<td style="border: 1px solid #ffffff; padding:5px;">Finalización del bloque</td>
<td style="border: 1px solid #ffffff; padding:5px;">FinSubProceso / FinFuncion</td>
<td style="border: 1px solid #ffffff; padding:5px;">Por indentación</td>
</tr>
<tr>
<td style="border: 1px solid #ffffff; padding:5px;">Acción sin retorno</td>
<td style="border: 1px solid #ffffff; padding:5px;">SubProceso</td>
<td style="border: 1px solid #ffffff; padding:5px;">def sin return</td>
</tr>
<tr>
<td style="border: 1px solid #ffffff; padding:5px;">Acción con retorno</td>
<td style="border: 1px solid #ffffff; padding:5px;">Funcion</td>
<td style="border: 1px solid #ffffff; padding:5px;">def con return</td>
</tr>
</table>

<h4 style="font-size:14px; font-weight:bold;">Buenas prácticas al definir funciones</h4>

<ul>
<li>Usar nombres descriptivos: el nombre debe reflejar claramente lo que hace la función (por ejemplo, <code>calcular_promedio()</code> en lugar de <code>func1()</code>).</li>
<li>Evitar repeticiones: si un fragmento de código se repite varias veces, conviértelo en una función o subproceso.</li>
<li>Mantener la simplicidad: cada función debe tener un solo propósito.</li>
<li>Documentar con comentarios: indica qué hace la función, qué parámetros recibe y qué devuelve.</li>
<li>Probar por separado: cada módulo debe poder probarse de forma independiente antes de integrarse.</li>
</ul>

<p>Tanto en PSeInt como en Python, la estructura modular de funciones y subprocesos constituye una herramienta clave para diseñar programas claros, mantenibles y escalables. El dominio de estas estructuras permite a los programadores pensar de manera lógica y resolver problemas complejos dividiéndolos en partes simples.</p>

<p>Como afirma Severance (2016), “la modularización transforma el aprendizaje de la programación, pasando de escribir instrucciones lineales a construir sistemas organizados y reutilizables”. Dominar la estructura de las funciones es el paso previo indispensable antes de abordar ejercicios prácticos y proyectos más amplios.</p>

</section>
   
    <section style="font-family: Arial, sans-serif; color:#ffffff; line-height:1.7; text-align:left; padding:15px;">

<h4 style="font-size:14px; font-weight:bold;">Videos y contenidos adicionales: </h4>

<p>Charly Cimino. (2022, agosto). <em>PROGRAMACIÓN MODULAR – Te lo explico JUGANDO</em> [Video]. YouTube. <a href="https://www.youtube.com/watch?v=zBIG4D8KhJM" style="color:#00ffff;">https://www.youtube.com/watch?v=zBIG4D8KhJM</a></p>

<p>Programación Fácil. (2023). <em>[PYTHON] Introducción a la programación modular con Python</em> [Video]. YouTube. <a href="https://www.youtube.com/watch?v=qfNCH9ajjOA" style="color:#00ffff;">https://www.youtube.com/watch?v=qfNCH9ajjOA</a></p>

<p>W. Madrigal Chaves. (2020). <em>Procedimientos y funciones: la base de la programación modular</em> [Lectura]. Universidad de San María. <a href="https://repositorio.usam.ac.cr/xmlui/handle/11506/2043" style="color:#00ffff;">https://repositorio.usam.ac.cr/xmlui/handle/11506/2043</a></p>

</section>

    
    
    
    `,
    ejemplos: `<p><strong>Ejemplos: </strong> </p>

 <section style="font-family: Arial, sans-serif; color:#ffffff; line-height:1.7; text-align:left; padding:15px;">

<h4 style="font-size:14px; font-weight:bold;">Ejercicio 1 – Saludo personalizado</h4>
<p><strong>Objetivo:</strong> Comprender la estructura básica de un subproceso sin retorno.</p>

<p><strong>PSeInt</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
SubProceso MostrarSaludo(nombre)
    Escribir "¡Hola ", nombre, ", bienvenido al sistema!"
FinSubProceso

MostrarSaludo("Ana")
MostrarSaludo("Luis")
</pre>

<p><strong>Python</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
def mostrar_saludo(nombre):
    print(f"¡Hola {nombre}, bienvenido al sistema!")

mostrar_saludo("Ana")
mostrar_saludo("Luis")
</pre>

<p><strong>Concepto:</strong> Subproceso simple, sin retorno, que ejecuta una acción.</p>

<h4 style="font-size:14px; font-weight:bold;">Ejercicio 2 – Calcular el promedio de tres notas</h4>
<p><strong>Objetivo:</strong> Practicar el uso de funciones con parámetros y retorno.</p>

<p><strong>PSeInt</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
Funcion promedio <- CalcularPromedio(n1, n2, n3)
    promedio <- (n1 + n2 + n3) / 3
FinFuncion

Escribir "El promedio es: ", CalcularPromedio(15, 18, 20)
</pre>

<p><strong>Python</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
def calcular_promedio(n1, n2, n3):
    return (n1 + n2 + n3) / 3

print("El promedio es:", calcular_promedio(15, 18, 20))
</pre>

<p><strong>Concepto:</strong> Función con retorno, recibe varios parámetros.</p>

<h4 style="font-size:14px; font-weight:bold;">Ejercicio 3 – Determinar si un número es par o impar</h4>
<p><strong>Objetivo:</strong> Combinar estructura condicional dentro de una función.</p>

<p><strong>PSeInt</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
Funcion mensaje <- EsPar(numero)
    Si numero MOD 2 = 0 Entonces
        mensaje <- "El número es par"
    Sino
        mensaje <- "El número es impar"
    FinSi
FinFuncion

Escribir EsPar(8)
Escribir EsPar(7)
</pre>

<p><strong>Python</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
def es_par(numero):
    if numero % 2 == 0:
        return "El número es par"
    else:
        return "El número es impar"

print(es_par(8))
print(es_par(7))
</pre>

<p><strong>Concepto:</strong> Función con decisión condicional y retorno de texto.</p>

<h4 style="font-size:14px; font-weight:bold;">Ejercicio 4 – Calcular el área y perímetro de un rectángulo</h4>
<p><strong>Objetivo:</strong> Crear dos funciones distintas que colaboran entre sí.</p>

<p><strong>PSeInt</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
Funcion area <- CalcularArea(base, altura)
    area <- base * altura
FinFuncion

Funcion perimetro <- CalcularPerimetro(base, altura)
    perimetro <- 2 * (base + altura)
FinFuncion

Escribir "Área: ", CalcularArea(5, 3)
Escribir "Perímetro: ", CalcularPerimetro(5, 3)
</pre>

<p><strong>Python</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
def calcular_area(base, altura):
    return base * altura

def calcular_perimetro(base, altura):
    return 2 * (base + altura)

print("Área:", calcular_area(5, 3))
print("Perímetro:", calcular_perimetro(5, 3))
</pre>

<p><strong>Concepto:</strong> Uso combinado de funciones que resuelven distintas tareas.</p>

<h4 style="font-size:14px; font-weight:bold;">Ejercicio 5 – Calculadora básica modular</h4>
<p><strong>Objetivo:</strong> Implementar un menú con múltiples funciones independientes.</p>

<p><strong>PSeInt</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
SubProceso MostrarMenu()
    Escribir "1. Sumar"
    Escribir "2. Restar"
    Escribir "3. Multiplicar"
    Escribir "4. Dividir"
FinSubProceso

Funcion resultado <- Sumar(a, b)
    resultado <- a + b
FinFuncion

Funcion resultado <- Restar(a, b)
    resultado <- a - b
FinFuncion

Funcion resultado <- Multiplicar(a, b)
    resultado <- a * b
FinFuncion

Funcion resultado <- Dividir(a, b)
    Si b <> 0 Entonces
        resultado <- a / b
    Sino
        resultado <- "Error: división por cero"
    FinSi
FinFuncion

MostrarMenu()
Leer opcion, x, y

Segun opcion Hacer
    1: Escribir "Resultado: ", Sumar(x, y)
    2: Escribir "Resultado: ", Restar(x, y)
    3: Escribir "Resultado: ", Multiplicar(x, y)
    4: Escribir "Resultado: ", Dividir(x, y)
FinSegun
</pre>

<p><strong>Python</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
def sumar(a, b): return a + b
def restar(a, b): return a - b
def multiplicar(a, b): return a * b
def dividir(a, b): return a / b if b != 0 else "Error: división por cero"

def mostrar_menu():
    print("1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir")

mostrar_menu()
op = int(input("Elige una opción: "))
x = float(input("Ingresa el primer número: "))
y = float(input("Ingresa el segundo número: "))

if op == 1: print("Resultado:", sumar(x, y))
elif op == 2: print("Resultado:", restar(x, y))
elif op == 3: print("Resultado:", multiplicar(x, y))
elif op == 4: print("Resultado:", dividir(x, y))
else: print("Opción no válida.")
</pre>

<p><strong>Concepto:</strong> Modularización completa — menú, funciones y flujo principal.</p>

<h4 style="font-size:14px; font-weight:bold;">Ejercicio 6 – Sistema de calificaciones</h4>
<p><strong>Objetivo:</strong> Aplicar múltiples funciones con llamadas encadenadas y lógica compuesta.</p>

<p><strong>PSeInt</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
Funcion promedio <- CalcularPromedio(n1, n2, n3)
    promedio <- (n1 + n2 + n3) / 3
FinFuncion

Funcion estado <- EvaluarDesempeno(promedio)
    Si promedio >= 14 Entonces
        estado <- "Aprobado"
    Sino
        estado <- "Desaprobado"
    FinSi
FinFuncion

SubProceso MostrarResultado(nombre, n1, n2, n3)
    Definir prom Como Real
    prom <- CalcularPromedio(n1, n2, n3)
    Escribir nombre, ": Promedio = ", prom, " -> ", EvaluarDesempeno(prom)
FinSubProceso

MostrarResultado("Carlos", 18, 12, 15)
MostrarResultado("Ana", 11, 10, 13)
</pre>

<p><strong>Python</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
def calcular_promedio(n1, n2, n3):
    return (n1 + n2 + n3) / 3

def evaluar_desempeno(promedio):
    return "Aprobado" if promedio >= 14 else "Desaprobado"

def mostrar_resultado(nombre, n1, n2, n3):
    prom = calcular_promedio(n1, n2, n3)
    print(f"{nombre}: Promedio = {prom:.2f} → {evaluar_desempeno(prom)}")

mostrar_resultado("Carlos", 18, 12, 15)
mostrar_resultado("Ana", 11, 10, 13)
</pre>

<p><strong>Concepto:</strong> Uso avanzado de modularización, funciones que interactúan entre sí, lógica condicional y formato de salida.</p>

</section>

   

    
    
    `,
    quiz_intermedio: `<section id="evaluacion_intermedia_modular" class="quiz-section" 
style="font-family:'Segoe UI', Tahoma, sans-serif; color:#fff; line-height:1.6; margin-top:30px; text-align:left;">

  <p><strong style="color:#22c1dc;">Evaluación Intermedia – Minicurso 4: Programación Modular</strong></p>

  <p><strong style="color:#22c1dc;"> Planteamiento:</strong> 
  Esta evaluación busca medir tu comprensión sobre el uso de funciones, parámetros, modularización y organización del código en Python. Te permitirá identificar tu nivel de avance antes del examen final.</p>

  <p>
    <strong style="color:#22c1dc;">Condición de aprobación:</strong> Nota mínima 11.<br>
    <strong style="color:#22c1dc;">Peso en la evaluación:</strong> 25% de la nota total del Minicurso 4.
  </p>

  <p><strong style="color:#22c1dc;">📝 Indicaciones:</strong></p>
  <ul style="margin:12px 0 18px 20px; line-height:1.7; color:#fff;">
    <li>Lee cada pregunta con atención antes de responder.</li>
    <li>Aplica los principios de modularización y buenas prácticas de codificación.</li>
    <li>Responde con claridad y revisa antes de enviar.</li>
  </ul>

  <p><strong style="color:#22c1dc;"> Objetivo:</strong> 
  Evaluar tu dominio intermedio en la aplicación de funciones, parámetros y módulos en programas estructurados.</p>

  <div style="text-align:center; margin-top:25px;">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_9eE9O7zEwJAKDrnYAlmYPyHHE364yokYfeCQsVMjkxMS_g/viewform?usp=dialog" 
       target="_blank" 
       style="display:inline-block; background-color:#22c1dc; color:white; padding:12px 26px; border-radius:8px; text-decoration:none; font-weight:bold; 
              box-shadow:0 3px 6px rgba(0,0,0,0.15); transition:background-color 0.3s;">
       🧾 Iniciar Evaluación Intermedia
    </a>
  </div>

</section>
    
    `
  },
  mod3: {
    objetivo: `<p><strong>Objetivo:</strong> </p>
    
    <p>   
✔️ Identificar la diferencia entre paso por valor y paso por referencia en funciones y subprocesos, tanto en PSeInt como en Python.<br>
✔️ Aplicar correctamente el tipo de parámetro según la necesidad del programa (solo lectura o modificación de datos).<br>
✔️ Desarrollar programas modulares complejos que utilicen parámetros para comunicar y procesar información entre diferentes funciones. <br>
    
   </p>  
    
    
    `,
    teoria: `<p><strong>Teoría:</strong></p>
 <section style="font-family: Arial, sans-serif; color:#ffffff; line-height:1.7; text-align:left; padding:15px;">

<h4 style="font-size:14px; font-weight:bold;">1. Contenido teórico</h4>

<p>Los parámetros son variables que permiten transferir información a una función o subproceso desde el programa principal o desde otro módulo. Gracias a ellos, el código se vuelve más flexible, reutilizable y modular, evitando repetir las mismas instrucciones con diferentes valores.</p>

<p>De acuerdo con Zelle (2022), los parámetros son la base de la comunicación entre módulos, ya que permiten aislar responsabilidades y mantener el principio de “una función, una tarea”.</p>

<p>Existen dos formas principales de pasar parámetros: por valor y por referencia. Cada una define cómo se transmite la información y cómo afectan los cambios realizados dentro del módulo.</p>

<h4 style="font-size:14px; font-weight:bold;">Paso por valor</h4>

<p>El paso por valor consiste en enviar una copia del contenido de una variable a la función. Esto significa que cualquier cambio realizado dentro del módulo no altera el valor original. Es útil cuando se desea proteger los datos originales o garantizar que una función trabaje de forma aislada.</p>

<p>En PSeInt, esta es la forma predeterminada de pasar parámetros. Según Guttag (2016), este enfoque “favorece la predictibilidad del comportamiento del programa, evitando efectos secundarios indeseados”.</p>

<p><strong>Ejemplo en PSeInt</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
SubProceso DuplicarValor(num)
    num <- num * 2
FinSubProceso

Proceso Principal
    Definir x Como Entero
    x <- 5
    DuplicarValor(x)
    Escribir "x vale: ", x
FinProceso
</pre>
<p><strong>Salida:</strong> x vale: 5</p>

<p><strong>Ejemplo en Python</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
def duplicar_valor(num):
    num = num * 2

x = 5
duplicar_valor(x)
print("x vale:", x)
</pre>
<p><strong>Salida:</strong> x vale: 5</p>

<p>En Python, las variables de tipo entero, flotante o cadena se comportan por valor porque son inmutables. Los cambios dentro de la función no afectan la variable externa (Downey, 2015).</p>

<h4 style="font-size:14px; font-weight:bold;">Paso por referencia</h4>

<p>El paso por referencia consiste en enviar la dirección de memoria de la variable, no una copia. Esto significa que cualquier modificación dentro de la función sí afecta el valor original. Este tipo de paso se usa cuando se busca actualizar datos directamente o optimizar memoria, especialmente con listas o estructuras grandes (Moreno, Robles & Román, 2020).</p>

<p><strong>Ejemplo en PSeInt</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
SubProceso DuplicarValor(Por Referencia num)
    num <- num * 2
FinSubProceso

Proceso Principal
    Definir x Como Entero
    x <- 5
    DuplicarValor(x)
    Escribir "x vale: ", x
FinProceso
</pre>
<p><strong>Salida:</strong> x vale: 10</p>

<p><strong>Ejemplo en Python</strong></p>
<pre style="background-color:#f5f5f5; color:#000000; padding:8px;">
def duplicar_lista(lista):
    for i in range(len(lista)):
        lista[i] = lista[i] * 2

numeros = [1, 2, 3]
duplicar_lista(numeros)
print("Lista actualizada:", numeros)
</pre>
<p><strong>Salida:</strong> Lista actualizada: [2, 4, 6]</p>

<p>En Python, las listas y diccionarios son mutables, por lo que se comportan por referencia. Los cambios dentro de la función afectan directamente la variable externa (Zelle, 2022).</p>

<h4 style="font-size:14px; font-weight:bold;"> 2. Importancia</h4>

<p>Comprender la diferencia entre paso por valor y paso por referencia permite diseñar programas más seguros y eficientes. Cuando un módulo necesita solo usar los datos, se usa el paso por valor; cuando debe modificarlos o compartir resultados, se usa el paso por referencia.</p>

<p>Esta distinción también favorece la depuración, ya que ayuda a controlar qué partes del código pueden alterar los valores globales y cuáles no (Downey, 2015).</p>

<p>En programación modular, el manejo adecuado de parámetros asegura una comunicación clara entre funciones, mejora la reutilización de componentes y facilita la colaboración en proyectos grandes (Moreno et al., 2020).</p>

<h4 style="font-size:14px; font-weight:bold;">3. Síntesis </h4>

<table border="1" cellpadding="5" cellspacing="0" style="border-collapse:collapse; width:100%; text-align:left; color:#ffffff;">
<tr style="background-color:#f0f0f0; color:#000000;">
<th>Concepto</th>
<th>PSeInt</th>
<th>Python</th>
</tr>
<tr>
<td>Palabra clave</td>
<td>Por Referencia</td>
<td>Implícito (según tipo de dato)</td>
</tr>
<tr>
<td>Por defecto</td>
<td>Paso por valor</td>
<td>Paso por referencia (en objetos mutables)</td>
</tr>
<tr>
<td>Afecta variable original</td>
<td>Sólo si se usa Por Referencia</td>
<td>Sí, si es un objeto mutable</td>
</tr>
<tr>
<td>Retorno de valores</td>
<td>Con &lt;-</td>
<td>Con return</td>
</tr>
<tr>
<td>Ejemplo típico</td>
<td>DuplicarValor(Por Referencia x)</td>
<td>def modificar(lista): lista.append(x)</td>
</tr>
</table>

<h4 style="font-size:14px; font-weight:bold;">4. Buenas prácticas</h4>
<ul>
<li>Usar paso por valor para proteger los datos y evitar efectos colaterales.</li>
<li>Usar paso por referencia solo cuando sea necesario actualizar estructuras o devolver resultados múltiples.</li>
<li>En Python, para evitar modificar una lista original, se puede enviar una copia: <code style="color:#000000; background-color:#f5f5f5;">procesar(lista.copy())</code></li>
<li>Documentar claramente en los comentarios si una función altera los datos recibidos.</li>
<li>Mantener los parámetros limitados y significativos, para mejorar la legibilidad y el mantenimiento del código.</li>
</ul>

<p>Como concluye Severance (2016), “comprender cómo viajan los datos entre funciones es un paso esencial para dominar la programación estructurada y construir sistemas confiables y reutilizables”.</p>

</section>

<section style="font-family: Arial, sans-serif; color:#ffffff; line-height:1.7; text-align:left; padding:15px;">

<h4 style="font-size:14px; font-weight:bold;">🎥 Videos y materiales recomendados</h4>

<ul>
<li>
<strong>Funciones en Python | Parámetros y Return (Ejemplos) – Code Hive</strong><br>
Introducción breve y clara al uso de parámetros, argumentos y valores de retorno en Python.<br>
<a href="https://www.youtube.com/watch?v=g78juF9pB_w" style="color:#00ffff;">https://www.youtube.com/watch?v=g78juF9pB_w</a>
</li><br>

<li>
<strong>[PYTHON] Parámetros y argumentos en las funciones – Programación Fácil</strong><br>
Introducción breve y clara al uso de parámetros y argumentos dentro de funciones en Python.<br>
<a href="https://www.youtube.com/watch?v=Cc_vkwwTK5U" style="color:#00ffff;">https://www.youtube.com/watch?v=Cc_vkwwTK5U</a>
</li><br>

<li>
<strong>Funciones con varios parámetros y reutilización en Python – Charly Cimino</strong><br>
Introducción breve y clara a la definición de funciones con múltiples parámetros y su reutilización en Python.<br>
<a href="https://www.youtube.com/watch?v=tsgcc5E9zEg" style="color:#00ffff;">https://www.youtube.com/watch?v=tsgcc5E9zEg</a>
</li><br>

<li>
<strong>Parámetros y argumentos (Curso gratis de Python) – Arnau Camprubí</strong><br>
Introducción breve y clara al uso de parámetros en funciones y ejemplos básicos para principiantes.<br>
<a href="https://www.youtube.com/watch?v=7xTHov614ZA" style="color:#00ffff;">https://www.youtube.com/watch?v=7xTHov614ZA</a>
</li><br>

<li>
<strong>Fundamentos de funciones en Python (Paso por valor y referencia) – La Geekipedia De Ernesto</strong><br>
Introducción breve y clara al funcionamiento de las funciones y el paso por valor y referencia en Python.<br>
<a href="https://www.youtube.com/watch?v=Db43XBXlk7c" style="color:#00ffff;">https://www.youtube.com/watch?v=Db43XBXlk7c</a>
</li>
</ul>

</section>

    `,
    ejemplos: `<p><strong>Ejemplos:</strong> </p>
    
  <section style="font-family: Arial, sans-serif; color:#ffffff; line-height:1.7; text-align:left; padding:15px;">

<h4 style="font-size:14px; font-weight:bold;">Intercambio de variables</h4>
<p><strong>Objetivo:</strong> Aplicar el paso por referencia para modificar variables directamente.</p>

<pre style="background-color:#2d2d2d; color:#ffffff; padding:8px;">
SubProceso Intercambiar(Por Referencia a, Por Referencia b)
    Definir temp Como Entero
    temp <- a
    a <- b
    b <- temp
FinSubProceso

Proceso Principal
    Definir x, y Como Entero
    x <- 3
    y <- 7
    Escribir "Antes del intercambio: x=", x, " y=", y
    Intercambiar(x, y)
    Escribir "Después del intercambio: x=", x, " y=", y
FinProceso
</pre>

<p><strong>Salida esperada:</strong> Antes del intercambio: x=3 y=7<br>Después del intercambio: x=7 y=3</p>

<h4 style="font-size:14px; font-weight:bold;">Cálculo de estadísticas</h4>
<p><strong>Objetivo:</strong> Retornar múltiples valores (promedio, máximo, mínimo) con return.</p>

<pre style="background-color:#2d2d2d; color:#ffffff; padding:8px;">
def calcular_estadisticas(lista):
    promedio = sum(lista) / len(lista)
    maximo = max(lista)
    minimo = min(lista)
    return promedio, maximo, minimo

datos = [15, 22, 8, 19, 31]
prom, maximo, minimo = calcular_estadisticas(datos)

print(f"Promedio: {prom:.2f}")
print("Máximo:", maximo)
print("Mínimo:", minimo)
</pre>

<p><strong>Salida esperada:</strong><br>Promedio: 19.00<br>Máximo: 31<br>Mínimo: 8</p>

<h4 style="font-size:14px; font-weight:bold;">Gestión de inventario</h4>
<p><strong>Objetivo:</strong> Usar paso por referencia para actualizar valores de stock.</p>

<pre style="background-color:#2d2d2d; color:#ffffff; padding:8px;">
SubProceso ActualizarStock(Por Referencia stock, cantidad)
    stock <- stock - cantidad
FinSubProceso

Proceso Principal
    Definir stock, vendido Como Entero
    stock <- 50
    vendido <- 8
    Escribir "Stock inicial: ", stock
    ActualizarStock(stock, vendido)
    Escribir "Stock actualizado: ", stock
FinProceso
</pre>

<p><strong>Salida esperada:</strong><br>Stock inicial: 50<br>Stock actualizado: 42</p>

<h4 style="font-size:14px; font-weight:bold;">Duplicar elementos mutables</h4>
<p><strong>Objetivo:</strong> Aplicar paso por referencia con estructuras mutables (listas).</p>

<pre style="background-color:#2d2d2d; color:#ffffff; padding:8px;">
def duplicar_elementos(lista):
    for i in range(len(lista)):
        lista[i] = lista[i] * 2

numeros = [1, 3, 5, 7]
print("Lista original:", numeros)
duplicar_elementos(numeros)
print("Lista duplicada:", numeros)
</pre>

<p><strong>Salida esperada:</strong><br>Lista original: [1, 3, 5, 7]<br>Lista duplicada: [2, 6, 10, 14]</p>

<h4 style="font-size:14px; font-weight:bold;">Sumar listas</h4>
<p><strong>Objetivo:</strong> Usar paso por valor, retornando una nueva lista sin modificar las originales.</p>

<pre style="background-color:#2d2d2d; color:#ffffff; padding:8px;">
def sumar_listas(lista1, lista2):
    if len(lista1) != len(lista2):
        return "Error: Las listas deben tener el mismo tamaño."
    nueva = []
    for i in range(len(lista1)):
        nueva.append(lista1[i] + lista2[i])
    return nueva

a = [2, 4, 6]
b = [1, 3, 5]
resultado = sumar_listas(a, b)

print("Lista 1:", a)
print("Lista 2:", b)
print("Suma:", resultado)
</pre>

<p><strong>Salida esperada:</strong><br>Lista 1: [2, 4, 6]<br>Lista 2: [1, 3, 5]<br>Suma: [3, 7, 11]</p>

<h4 style="font-size:14px; font-weight:bold;">Calcular notas finales</h4>
<p><strong>Objetivo:</strong> Calcular un promedio y devolverlo usando paso por referencia.</p>

<pre style="background-color:#2d2d2d; color:#ffffff; padding:8px;">
SubProceso CalcularPromedio(Por Referencia notaFinal, n1, n2, n3)
    notaFinal <- (n1 + n2 + n3) / 3
FinSubProceso

Proceso Principal
    Definir n1, n2, n3, promedio Como Real
    n1 <- 15
    n2 <- 12
    n3 <- 18
    CalcularPromedio(promedio, n1, n2, n3)
    Escribir "El promedio final es: ", promedio
FinProceso
</pre>

<p><strong>Salida esperada:</strong><br>El promedio final es: 15</p>

<h4 style="font-size:14px; font-weight:bold;">Sistema de reservas</h4>
<p><strong>Objetivo:</strong> Aplicar parámetros por referencia con listas y validaciones.</p>

<pre style="background-color:#2d2d2d; color:#ffffff; padding:8px;">
def reservar_asiento(asientos, numero):
    if numero < 0 or numero >= len(asientos):
        return "Número de asiento inválido."
    if not asientos[numero]:
        return "El asiento ya está ocupado."
    asientos[numero] = False
    return f"Asiento {numero + 1} reservado correctamente."

asientos = [True, True, False, True]
print(reservar_asiento(asientos, 1))
print("Estado actual:", asientos)
</pre>

<p><strong>Salida esperada:</strong><br>Asiento 2 reservado correctamente.<br>Estado actual: [True, False, False, True]</p>

<h4 style="font-size:14px; font-weight:bold;">Control de inventario modular</h4>
<p><strong>Objetivo:</strong> Integrar todo lo aprendido: modularidad, parámetros, retorno y referencia.</p>

<pre style="background-color:#2d2d2d; color:#ffffff; padding:8px;">
def agregar_producto(inventario, nombre, cantidad):
    if nombre in inventario:
        return "El producto ya existe."
    inventario[nombre] = cantidad
    return f"Producto '{nombre}' agregado con éxito."

def actualizar_producto(inventario, nombre, cantidad):
    if nombre not in inventario:
        return "El producto no existe."
    inventario[nombre] += cantidad
    return f"Stock de '{nombre}' actualizado a {inventario[nombre]} unidades."

def mostrar_inventario(inventario):
    print("\nInventario actual:")
    for producto, cantidad in inventario.items():
        print(f"- {producto}: {cantidad} unidades")

inventario = {}
print(agregar_producto(inventario, "Lápiz", 20))
print(agregar_producto(inventario, "Cuaderno", 15))
print(actualizar_producto(inventario, "Lápiz", 10))
mostrar_inventario(inventario)
</pre>

<p><strong>Salida esperada:</strong><br>Producto 'Lápiz' agregado con éxito.<br>Producto 'Cuaderno' agregado con éxito.<br>Stock de 'Lápiz' actualizado a 30 unidades.<br><br>Inventario actual:<br>- Lápiz: 30 unidades<br>- Cuaderno: 15 unidades</p>

</section>
  
    
    `,
    quiz_final: `


    <section id="evaluacion_final_modular" class="quiz-section" 
style="font-family:'Segoe UI', Tahoma, sans-serif; color:#fff; line-height:1.6; margin-top:30px; text-align:left;">

  <p><strong style="color:#22c1dc;">Evaluación Final – Minicurso 4: Programación Modular</strong></p>

  <p><strong style="color:#22c1dc;">📘 Planteamiento:</strong> 
  Esta evaluación final tiene como propósito medir tu dominio completo sobre la <strong>programación modular en Python</strong>, incluyendo el diseño de funciones, la correcta organización del código y la aplicación de buenas prácticas de desarrollo. Es el paso final para completar este minicurso.</p>

  <p>
    <strong style="color:#22c1dc;">Condición de aprobación:</strong> Nota mínima 11.<br>
    <strong style="color:#22c1dc;">Peso en la evaluación:</strong> 50% de la nota total del Minicurso 4.
  </p>

  <p><strong style="color:#22c1dc;">📝 Indicaciones:</strong></p>
  <ul style="margin:12px 0 18px 20px; line-height:1.7; color:#fff;">
    <li>Lee atentamente cada pregunta antes de responder.</li>
    <li>Aplica correctamente los principios de modularización, reutilización y claridad del código.</li>
    <li>Responde con precisión y revisa antes de enviar el formulario.</li>
  </ul>

  <p><strong style="color:#22c1dc;">🎯 Objetivo:</strong> 
  Evaluar tu capacidad para aplicar la programación modular en la resolución de problemas reales mediante funciones bien estructuradas y código limpio.</p>

  <div style="text-align:center; margin-top:25px;">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdkbhzwpHdjLDJjSfdHZZUF_fJvb0JnS0XjcI-yqOaN_3eRCg/viewform?usp=dialog" 
       target="_blank" 
       style="display:inline-block; background-color:#22c1dc; color:white; padding:12px 26px; border-radius:8px; text-decoration:none; font-weight:bold; 
              box-shadow:0 3px 6px rgba(0,0,0,0.15); transition:background-color 0.3s;">
       🧾 Iniciar Evaluación Final
    </a>
  </div>

</section>
    
    
    
    
    
    
    
    `,



  },

   mod4: {
    formulario_de_satisfaccion: `
      <section style="text-align:center; background-color:transparent; color:#ffffff; padding:40px; border-radius:15px; margin:40px auto; width:80%; font-family:'Poppins', sans-serif;">
        
        <h2 style="color:#00ffff; font-size:22px; margin-bottom:20px; text-shadow:0 0 10px #00ffff;">
          ENCUESTA DE SATISFACCIÓN FINAL
        </h2>

        <p style="font-size:16px; line-height:1.6; margin-bottom:20px; color:#e0e0e0;">
          ¡Gracias por completar el <strong>Minicurso 4: Programación Modular</strong>!  
          Tu aprendizaje impulsa nuestra misión de ofrecer experiencias cada vez mejores.
        </p>

        <p style="font-size:16px; line-height:1.6; margin-bottom:30px; color:#e0e0e0;">
          💬 Completa la <strong>Encuesta de Satisfacción</strong> y ayúdanos a seguir mejorando juntos.
        </p>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdECeLcAfeeB0QXhLl8WU3XZrI_56fj2EfOArAs9ShgBe6rfQ/viewform?usp=publish-editor" 
           target="_blank" 
           style="display:inline-block; background-color:#00ffff; color:#0a0a0a; font-weight:bold; padding:12px 25px; border-radius:8px; text-decoration:none; font-size:16px; transition:0.3s;">
           👉 Participar en la encuesta
        </a>

      </section>
    `
  }



  
};

// === Datos de los cursos ===
const cursos = {
  1: {
    titulo: "Minicurso 1: Lógica de Programación",
    descripcion: "Desarrolla el pensamiento computacional y aprende a representar algoritmos paso a paso.",
    imagen: "assets/img/C+.png",
    modulos: [
      { nombre: "🧩 Tema 1 – Pensamiento computacional y algoritmos ", id: "dia1", recursos: ["Teoría", "Ejemplos", "Prueba diagnóstica"] },
      { nombre: "🔄 Tema 2 – Diagramas de flujo ", id: "dia2", recursos: ["Teoría", "Ejemplos"] },
      { nombre: "🔢 Tema 3 – Variables y tipos de datos ", id: "dia3", recursos: ["Teoría", "Ejemplos", "Quiz intermedio"] },
      { nombre: "⚙️ Tema 4 – Estructuras secuenciales y condicionales ", id: "dia4", recursos: ["Teoría", "Ejemplos"] },
      { nombre: "💻 Tema 5 – Pseudocódigo ", id: "dia5", recursos: ["Teoría", "Ejemplos", "Quiz final"] }
    ]
  },
  2: {
   titulo: "Minicurso 2: Introducción a PSeInt",
    descripcion: "Aprende los fundamentos de la programación usando PSeInt.",
    imagen: "assets/img/sub.jpg",
    modulos: [
      { nombre: "Tema 1 – Sintaxis básica en PSeInt", id: "pseint1", recursos: ["Teoría", "Ejemplos", "Quiz de entrada"] },
      { nombre: "Tema 2 – Estructuras básicas de programación en PSeInt", id: "pseint2", recursos: ["Teoría", "Ejemplos"] },
      { nombre: "Tema 3 – Control de flujo: estructuras condicionales en PSeInt.", id: "pseint3", recursos: ["Teoría", "Ejemplos", "Quiz intermedio"] },
      { nombre: "Tema 4 – Control de flujo: estructuras repetitivas en PSeInt.", id: "pseint4", recursos: ["Teoría", "Ejemplos"] },
      { nombre: "Tema 5 –  Implementar funciones y procedimientos en PSeInt.", id: "pseint5", recursos: ["Teoría", "Ejemplos"] },
      { nombre: "Tema 6 –  Aplicación práctica: creación de programas simples", id: "pseint6", recursos: ["Teoría", "Ejemplos", "Quiz final"] }
    ]
  },
  3: {
    titulo: "Minicurso 3: Fundamentos de Python",
    descripcion: "Aprende a programar con Python desde cero con un mini-proyecto final.",
    imagen: "assets/img/python1.png",
    modulos: [
      { nombre: "Tema 1– Introducción a Python y su entorno", id: "py1", recursos: ["Teoría", "Ejemplos", "Quiz de entrada"] },
      { nombre: "Tema 2 – Variables, operadores y estructuras de control en Python", id: "py2", recursos: ["Teoría", "Ejemplos"] },
      { nombre: "Tema 3 – Estructuras de datos básicas en Python ", id: "py3", recursos: ["Teoría", "Ejemplos", "quiz intermedio"] },
      { nombre: "Tema 4 – Funciones y modularidad en Python", id: "py4", recursos: ["Teoría", "Ejemplos"] },
      { nombre: "Tema 5 –  Entrada, salida y manejo de errores en Python", id: "py5", recursos: ["Teoría", "Ejemplos"] },
      { nombre: "Tema 6 –  Aplicación práctica", id: "py6", recursos: ["Teoría", "Ejemplos", "Quiz Final"] }
    ]
  },
  4: {
    titulo: "Minicurso 4: Programación Modular",
    descripcion: "Organiza tus programas en funciones reutilizables y desarrolla un mini-reto.",
    imagen: "assets/img/prograMod.png",
    modulos: [
      { nombre: "Tema 1 – Concepto de modularización", id: "mod1", recursos: ["Teoría", "Ejemplos", "Quiz de entrada"] },
      { nombre: "Tema 2 – Funciones en pseudocódigo", id: "mod2", recursos: ["Teoría", "Ejemplos", "quiz intermedio"] },
      { nombre: "Tema 3 – Parámetros en funciones y subprocesos", id: "mod3", recursos: ["Teoría", "Ejemplos", "Quiz final"] },
      { nombre: "Encuesta de satisfacción final", id: "mod4", recursos: ["Formulario de satisfacción"] }

    
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
    <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 17px; line-height: 1.6;">
  <h2 style="margin-bottom: 15px;">📚 Referencias bibliográficas</h2>
 <p style="margin-top: 25px;">
  <p>Asana. (2025). ¿Qué es un diagrama de flujo y cómo hacerlo? Recuperado de <a href="https://asana.com/es/resources/what-is-a-flowchart" style="color: #9cd3ff;">https://asana.com/es/resources/what-is-a-flowchart</a></p>

  <p>Brookshear, J. G., & Brylow, D. (2023). <i>Computer Science: An Overview</i> (14th ed.). Pearson Education.</p>

  <p>Cedeño, D., & Cedeño, F. (2021). <i>Algoritmos y estructuras de datos.</i> Editorial Universitaria.</p>

  <p>Cervera-Manjarrez, D., et al. (2023). Principios y estrategias para el desarrollo del pensamiento computacional. SciELO Venezuela.</p>

  <p>Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2022). <i>Introduction to Algorithms</i> (4th ed.). MIT Press.</p>

  <p>Creately. (2025). Aprende qué es un diagrama de flujo y cómo crearlo. Recuperado de <a href="https://creately.com/es/guides/diagramas/diagrama-de-flujo-guia/" style="color: #9cd3ff;">https://creately.com/es/guides/diagramas/diagrama-de-flujo-guia/</a></p>

  <p>Dale, N., & Weems, C. (2023). <i>Programming and Problem Solving with Python</i> (2nd ed.). Jones & Bartlett Learning.</p>

  <p>Dale, N., & Weems, C. (2023). <i>Programming Logic and Design: Comprehensive</i> (10ª ed.). Cengage Learning.</p>

  <p>De Rivero Manrique, E. R. (2022). <i>Desarrollo de un sistema de recomendación basado en inteligencia artificial.</i> Universidad Católica de Santa María. Recuperado de <a href="https://repositorio.ucsm.edu.pe/bitstream/20.500.12920/11825/1/71.0678.IS.pdf" style="color: #9cd3ff;">https://repositorio.ucsm.edu.pe/bitstream/20.500.12920/11825/1/71.0678.IS.pdf</a></p>

  <p>Deitel, P., & Associates, Inc. (2004). Control structures in programming: Sequence, selection, & iteration (pp. 5–7).</p>

  <p>Deitel, P., & Deitel, H. (2019). <i>Introduction to Programming Using Python</i> (3ª ed., pp. 100–103). Pearson Education.</p>

  <p>Gaddis, T. (2022). <i>Starting Out with Programming Logic and Design</i> (6th ed.). Pearson Education.</p>

  <p>Gaddis, T. (2022). <i>Introducción a la programación con Python</i> (6ª ed., pp. 110–115). Pearson Educación.</p>

  <p>García, H. M. (2024). Pensamiento computacional y resolución de problemas en matemáticas. Universidad Nacional de Educación. Recuperado de <a href="https://repositorio.une.edu.pe/server/api/core/bitstreams/5ff824af-837a-4cc4-89c8-dd2a00da34d4/content" style="color: #9cd3ff;">https://repositorio.une.edu.pe/server/api/core/bitstreams/5ff824af-837a-4cc4-89c8-dd2a00da34d4/content</a></p>

  <p>García-Molina, M., & Valverde, J. (2019). <i>Introducción a la lógica computacional.</i> Universidad Politécnica de Madrid.</p>

  <p>González, A., & Martínez, R. (2022). El pensamiento computacional como herramienta transversal en la educación básica. <i>Revista Iberoamericana de Educación a Distancia.</i></p>

  <p>Herrera, A. (2020). <i>Diagrama de flujo.</i> Universidad Autónoma de Nuevo León. Recuperado de <a href="https://www.uanl.mx/utilerias/chip/descarga/diagrama_de_flujo.pdf" style="color: #9cd3ff;">https://www.uanl.mx/utilerias/chip/descarga/diagrama_de_flujo.pdf</a></p>

  <p>Joyanes Aguilar, L. (2022). <i>Fundamentos de programación: Algoritmos, estructuras de datos y objetos</i> (4ª ed., pp. 236–240). McGraw-Hill.</p>

  <p>Joyanes Aguilar, L. (2022). <i>Fundamentos de programación: Algoritmos, estructuras de datos y objetos</i> (4ª ed., pp. 250–252). McGraw-Hill.</p>

  <p>Lambert, K. (2022). <i>Fundamentos de Python: Primeros programas</i> (3ª ed., pp. 127–130). Cengage Learning.</p>

  <p>Liang, Y. D. (2022). <i>Introduction to Programming Using Python</i> (2nd ed.). Pearson Education.</p>

  <p>Malvino, A. P. (2021). <i>Principios de electrónica</i> (8ª ed.). McGraw-Hill. (Referencia añadida por contexto de condicionales, si fue usada en texto)</p>

  <p>Mendiolaza Cornejo, E. D. (2022). Estrategia metodológica para el desarrollo del pensamiento computacional en estudiantes de programación de computadoras. Universidad de San Ignacio de Loyola. Recuperado de <a href="https://repositorio.usil.edu.pe/bitstreams/f1a7a53f-a445-4aae-be94-0cb2735b3a2c/download" style="color: #9cd3ff;">https://repositorio.usil.edu.pe/bitstreams/f1a7a53f-a445-4aae-be94-0cb2735b3a2c/download</a></p>

  <p>Nulab. (2024). Diagrama de procesos de negocio. Recuperado de <a href="https://nulab.com/es/cacoo/templates/business-process-diagram/" style="color: #9cd3ff;">https://nulab.com/es/cacoo/templates/business-process-diagram/</a></p>

  <p>Rodríguez Canfranc, P. (2023). Pensamiento computacional, una competencia más allá de la programación. Fundación Telefónica. Recuperado de <a href="https://www.fundaciontelefonica.com" style="color: #9cd3ff;">https://www.fundaciontelefonica.com</a></p>

  <p>Savitch, W. J. (2021). <i>Absolute C++</i> (7th ed.). Pearson Education.</p>

  <p>Valacich, J. S., & Schneider, C. (2023). <i>Information Systems Today: Managing the Digital World</i> (10th ed.). Pearson Education.</p>

  <p>Valacich, J., & Schneider, C. (2023). <i>Information Systems Today: Managing in the Digital World</i> (10ª ed., pp. 88–90). Pearson Education.</p>

  <p>Wing, J. M. (2006). Computational thinking. <i>Communications of the ACM, 49</i>(3), 33–35.</p>
</section>

    `,
    2: `
      <section class="modulo referencias" style="text-align: justify; margin-top: 40px; padding: 10px;">
        <h2 style="text-align: center; margin-bottom: 15px;">📚 Referencias bibliográficas</h2>
       <section style="color: white; text-align: left; margin-left: 40px; margin-right: 40px; font-size: 15px; line-height: 1.7;">


  <p style="text-indent: -25px; margin-left: 25px;">
  Almaguer, A. B. (2023). <em>Importancia de la disciplina Lenguajes y Técnicas de Programación</em> [PDF]. Recuperado de  
  <a href="https://dialnet.unirioja.es/descarga/articulo/9304810.pdf" target="_blank" style="color:#00ffff;">https://dialnet.unirioja.es/descarga/articulo/9304810.pdf</a>
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Brackmann, C., Román-González, M., & Moreno-León, J. (2021). Pensamiento computacional y enseñanza de la programación en entornos educativos.  
  <em>Revista Latinoamericana de Tecnología Educativa, 20</em>(1), 45–63.
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Cervera-Manjarrez, N. (2023). Principios y estrategias para el desarrollo del pensamiento computacional.  
  <em>Revista de Tecnología Educativa, 2</em>(1), 1–15. Recuperado de  
  <a href="https://ve.scielo.org/scielo.php?pid=S2542-" target="_blank" style="color:#00ffff;">https://ve.scielo.org/scielo.php?pid=S2542-</a>
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Dahl, O. J., Dijkstra, E. W., & Hoare, C. A. R. (2021). <em>Structured programming.</em> Academic Press.
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Gómez, A., & Paredes, D. (2023). Errores frecuentes en el aprendizaje de estructuras repetitivas en PSeInt.  
  <em>Revista de Educación Tecnológica, 15</em>(2), 58–74.
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Instituto de Educación Superior Privado Newman. (2022). <em>¿Qué es un algoritmo? Definición, tipos y ejemplos.</em>  
  Recuperado de  
  <a href="https://www.epnewman.edu.pe/revista/ingenieria/que-es-algoritmo/" target="_blank" style="color:#00ffff;">https://www.epnewman.edu.pe/revista/ingenieria/que-es-algoritmo/</a>
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Joyanes Aguilar, L. (2022). <em>Programación estructurada y modular: fundamentos y aplicaciones.</em> Alfaomega Grupo Editor.
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Martínez, P., & López, G. (2022). <em>Didáctica de la programación en pseudocódigo: estrategias para el desarrollo del pensamiento computacional.</em>  
  Editorial Académica Española.
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Osorio, Y. E. C. (2023). <em>Modelos mentales y algoritmos</em> [PDF]. Recuperado de  
  <a href="https://dialnet.unirioja.es/descarga/articulo/10222892.pdf" target="_blank" style="color:#00ffff;">https://dialnet.unirioja.es/descarga/articulo/10222892.pdf</a>
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Pressman, R. S., & Maxim, B. R. (2020). <em>Ingeniería del software: un enfoque práctico</em> (9.ª ed.). McGraw-Hill Education.
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  PSeInt. (2025). <em>Manual oficial de referencia de subprocesos y funciones.</em> Recuperado de  
  <a href="https://pseint.sourceforge.net" target="_blank" style="color:#00ffff;">https://pseint.sourceforge.net</a>
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Rodríguez, P., & Torres, M. (2023). Aprendizaje modular y funciones en entornos educativos de pseudocódigo.  
  <em>Revista Iberoamericana de Tecnología Educativa, 12</em>(3), 45–59.
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Rodríguez, M., & Torres, J. (2023). <em>Didáctica de la programación: pensamiento computacional y algoritmos.</em>  
  Editorial Académica Española.
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Rojas, L. (2022). <em>Didáctica de la programación estructurada: enfoques activos con PSeInt y Scratch.</em>  
  Universidad Nacional de Educación a Distancia.
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Saa-Saltos, J. (2024). Incidencia de fundamentos de programación en el desarrollo del pensamiento abstracto de estudiantes.  
  <em>REMCA, Revista de Matemática, Computación y Algoritmos, 8</em>(1). Recuperado de  
  <a href="https://remca.umet.edu.ec/index.php/REMCA/article/view/713" target="_blank" style="color:#00ffff;">https://remca.umet.edu.ec/index.php/REMCA/article/view/713</a>
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Sierra, C. (2021). <em>Aprendizaje de algoritmos y pseudocódigo con PSeInt.</em> Universidad Nacional Abierta y a Distancia (UNAD).
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Sierra, J. (2021). <em>Fundamentos de programación estructurada.</em> Alfaomega.
  </p>

  <p style="text-indent: -25px; margin-left: 25px;">
  Universidad de Córdoba. (2024). <em>Guía de laboratorio: estructuras condicionales y repetitivas en PSeInt.</em>  
  Facultad de Ingeniería Informática. Recuperado de  
  <a href="https://pseint.sourceforge.net" target="_blank" style="color:#00ffff;">https://pseint.sourceforge.net</a>
  </p>

</section>

      </section>
    `,
    3: `
      <section class="modulo referencias" style="text-align: justify; margin-top: 40px; padding: 10px;">
        <h2 style="text-align: center; margin-bottom: 15px;">📚 Referencias bibliográficas</h2>
       
<section style="background-color:#0a0a0a; color:#e6e6e6; font-family:Arial, sans-serif; line-height:1.8; padding:25px; border-radius:12px;">
  <h2 style="color:#00bfff; font-size:26px; text-align:left; margin-bottom:20px;">📚 Referencias</h2>

  <p>Almaguer, A. B. (2023). <em>Importancia de la disciplina Lenguajes y Técnicas de Programación.</em> Dialnet. Recuperado de 
  <a href="https://dialnet.unirioja.es/descarga/articulo/9304810.pdf" style="color:#66ccff;">https://dialnet.unirioja.es/descarga/articulo/9304810.pdf</a></p>

  <p>Codefinity. (2023). <em>The History of Python Programming Language.</em> Recuperado de 
  <a href="https://codefinity.com" style="color:#66ccff;">https://codefinity.com</a></p>

  <p>Downey, A. (2020). <em>Think Python: How to Think Like a Computer Scientist</em> (2.ª ed.). Green Tea Press.</p>

  <p>Downey, A. (2020). <em>Think Python: How to Think Like a Computer Scientist</em> (3.ª ed.). Green Tea Press.</p>

  <p>Fazt. (2021, noviembre 15). <em>Bucles y condiciones en JavaScript | for, while, if, break, continue</em> [Video]. YouTube. 
  <a href="https://www.youtube.com/watch?v=J8lQH9I7jVc" style="color:#66ccff;">https://www.youtube.com/watch?v=J8lQH9I7jVc</a></p>

  <p>GeeksforGeeks. (2023). <em>Python Booleans.</em> Recuperado de 
  <a href="https://www.geeksforgeeks.org/python-booleans" style="color:#66ccff;">https://www.geeksforgeeks.org/python-booleans</a></p>

  <p>Lutz, M. (2021). <em>Learning Python</em> (5.ª ed.). O’Reilly Media.</p>

  <p>Moreno, J., Robles, G., & Román, M. (2020). On the role of Python in programming-related courses for computer science and engineering academic education. <em>Education and Information Technologies, 25</em>(2), 927–940. 
  <a href="https://doi.org/10.1007/s10639-019-09992-4" style="color:#66ccff;">https://doi.org/10.1007/s10639-019-09992-4</a></p>

  <p>Moreno, R., Robles, J., & Román, A. (2020). <em>Introducción al pensamiento computacional con Python.</em> Universidad Nacional de Educación a Distancia (UNED).</p>

  <p>Pylint Guidelines. (2023). <em>Python variable naming conventions and best practices.</em> Recuperado de 
  <a href="https://pylint.pycqa.org/" style="color:#66ccff;">https://pylint.pycqa.org/</a></p>

  <p>Python Software Foundation. (2024). <em>History and Features of Python.</em> Recuperado de 
  <a href="https://www.python.org" style="color:#66ccff;">https://www.python.org</a></p>

  <p>Python Software Foundation. (2024). <em>Python documentation: Data types and variables.</em> Recuperado de 
  <a href="https://docs.python.org/3/" style="color:#66ccff;">https://docs.python.org/3/</a></p>

  <p>Python Software Foundation. (2024). <em>Python documentation: Expressions and operators.</em> Recuperado de 
  <a href="https://docs.python.org/3/reference/expressions.html" style="color:#66ccff;">https://docs.python.org/3/reference/expressions.html</a></p>

  <p>Python Software Foundation. (2024). <em>Python documentation: for and while statements.</em> Recuperado de 
  <a href="https://docs.python.org/3/tutorial/controlflow.html" style="color:#66ccff;">https://docs.python.org/3/tutorial/controlflow.html</a></p>

  <p>Python Software Foundation. (2024). <em>Python documentation: The if statement.</em> Recuperado de 
  <a href="https://docs.python.org/3/tutorial/controlflow.html" style="color:#66ccff;">https://docs.python.org/3/tutorial/controlflow.html</a></p>

  <p>Real Python. (2024). <em>Python Data Types (Numbers, Strings, and Booleans).</em> Recuperado de 
  <a href="https://realpython.com/python-data-types" style="color:#66ccff;">https://realpython.com/python-data-types</a></p>

  <p>Severance, C. (2016). <em>Python for Everybody: Exploring Data in Python 3.</em> CreateSpace Independent Publishing.</p>

  <p>Sweigart, A. (2023). <em>Automate the Boring Stuff with Python</em> (2.ª ed.). No Starch Press.</p>

  <p>Zelle, J. (2022). <em>Python Programming: An Introduction to Computer Science</em> (4.ª ed.). Franklin, Beedle & Associates.</p>
</section>

        
      </section>
    `,
    4: `
      <section class="modulo referencias" style="text-align: justify; margin-top: 40px; padding: 10px;">
        <h2 style="text-align: center; margin-bottom: 15px;">📚 Referencias bibliográficas</h2>
        <div style="text-align: left; margin-left: 30px;">
          

<section style="font-family: Arial, sans-serif; color:#ffffff; line-height:1.7; text-align:left; padding:15px;">



<p>Lutz, M. (2021) Learning Python (5th ed.) O’Reilly Media</p>

<p>Moreno, A., Robles, J., & Román, F. (2020) Programación estructurada y modular Editorial UOC</p>

<p>Moreno, J., Robles, M., & Román, C. (2020) Fundamentos de programación estructurada Editorial Alfaomega</p>

<p>Python Software Foundation. (2024) Python documentation: Control flow <a href="https://docs.python.org/3/tutorial/controlflow.html" style="color:#ffffff;">https://docs.python.org/3/tutorial/controlflow.html</a></p>

<p>Python Software Foundation. (2024) Python documentation <a href="https://docs.python.org/3/" style="color:#ffffff;">https://docs.python.org/3/</a></p>

<p>Severance, C. (2016) Python for Everybody: Exploring Data Using Python 3 CreateSpace Independent Publishing</p>

<p>Zelle, J. (2022) Python programming: An introduction to computer science (4th ed.) Franklin, Beedle & Associates Inc</p>

</section>



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