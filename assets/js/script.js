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
        <p> - Dispones de 30 minutos para completar la evaluación.<p>
        <p> - La nota mínima para aprobar este cuestionario es 11.<p>
        <p>✨ ¡Éxitos! Recuerda que esta es una oportunidad para reflexionar sobre tu forma de pensar, analizar y resolver problemas.<p>
        <div style="text-align: center; margin: 30px 0;">
            <a href="https://form-timer.com/start/92fc7bfb" target="_blank" 
             style="display: inline-block; background-color: #007bff; color: white; 
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
  A diferencia de la estructura secuencial —donde todas las instrucciones se ejecutan en orden—, las condicionales dirigen el flujo del programa 
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
      { nombre: "💻 Tema 5 – Pseudocódigo  💻", id: "dia5", recursos: ["Teoría", "Ejemplos", "Quiz final"] }
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
