import type { Protocol } from "@/types/protocol";

export const tobilloRAFI: Protocol = {
  id: "tobillo-rafi",
  nombre:
    "Protocolo de Rehabilitación Post-RAFI de Fractura de Tobillo (Bimaleolar/Trimaleolar)",
  nombreCorto: "RAFI Tobillo",
  descripcion:
    "Protocolo de rehabilitación basado en evidencia para el manejo postquirurgico de fracturas bimaleolares y trimaleolares de tobillo tratadas mediante reducción abierta y fijación interna (RAFI) con placa y tornillos. Aplicable a fracturas clasificadas como Weber B y C (Danis-Weber). El protocolo contempla progresión gradual de carga, recuperacion de arcos de movimiento y retorno funciónal en 14 semanas.",
  region: "miembro-inferior",
  localizacion: "tobillo",
  abordajeQuirurgico: ["RAFI", "placa", "tornillos"],
  clasificaciones: [
    "Weber A (infrasindesmosis) - generalmente tratamiento conservador",
    "Weber B (transsindesmosis) - RAFI si hay desplazamiento o inestabilidad",
    "Weber C (suprasindesmosis) - RAFI indicada, posible reparacion de sindesmosis",
    "Lauge-Hansen: supinación-eversión (SER)",
    "Lauge-Hansen: pronación-abducción (PAB)",
    "Lauge-Hansen: pronación-eversión (PER)",
    "Lauge-Hansen: supinación-aducción (SAD)",
  ],
  indicacionesQuirurgicas: [
    "Fractura bimaleolar desplazada (>2 mm)",
    "Fractura trimaleolar con fragmento posterior >25% de la superficie articular",
    "Fractura de perone tipo Weber B con inestabilidad medial asociada",
    "Fractura tipo Weber C con lesión de sindesmosis",
    "Subluxacion talar persistente tras reducción cerrada",
    "Fractura de maleolo medial desplazada con interposición de periostio",
    "Inestabilidad articular documentada en radiografias de estres",
  ],
  duracionTotal: "14 semanas",
  semanasTotal: 14,
  fases: [
    // =====================================================================
    // FASE 1: PROTECCION E INFLAMACION CONTROLADA (Semanas 0-2)
    // =====================================================================
    {
      id: "tobillo-rafi-fase-1",
      numero: 1,
      nombre: "Protección e inflamación controlada",
      duracion: "Semanas 0-2",
      semanaInicio: 0,
      semanaFin: 2,
      objetivos: [
        "Control del dolor y edema postquirurgico",
        "Protección del sitio quirurgico y del material de osteosintesis",
        "Mantener movilidad de articulaciónes adyacentes (rodilla, cadera, dedos del pie)",
        "Prevencion de trombosis venosa profunda (TVP)",
        "Educacion del paciente sobre cuidados de herida y posiciónamiento",
      ],
      estadoCarga: "sin-carga",
      cargaPorcentaje: 0,
      cargaDetalle:
        "Sin apoyo del miembro operado. Deambulación con muletas axilares o andadera. Ferula posterior o bota Walker según indicación del cirujano.",
      romObjetivos: [
        {
          movimiento: "Flexión dorsal de tobillo",
          rangoObjetivo: "0 grados (posición neutra en ferula)",
          restriccion:
            "Inmovilización en ferula posterior. No movilizar tobillo activamente.",
        },
        {
          movimiento: "Flexión plantar de tobillo",
          rangoObjetivo: "0 grados (posición neutra en ferula)",
          restriccion:
            "Inmovilización en ferula posterior. No movilizar tobillo activamente.",
        },
        {
          movimiento: "Flexión/extensión de dedos del pie",
          rangoObjetivo: "Rango completo",
        },
        {
          movimiento: "Flexión/extensión de rodilla ipsilateral",
          rangoObjetivo: "0-130 grados",
        },
      ],
      ejercicios: [
        {
          id: "tob-f1-e1",
          nombre: "Bombeos de tobillo (ankle pumps) - si la ferula lo permite",
          descripcion:
            "Con el paciente en decubito supino y la extremidad elevada, realizar movimientos suaves de flexión dorsal y plantar de los dedos del pie dentro de la ferula, sin movilizar la articulación del tobillo directamente. El objetivo es favorecer el retorno venoso y prevenir TVP. Si la ferula no permite ningun movimiento, se omite este ejercicio y se prioriza la contracción isométrica.",
          repeticiones: "10-15 repeticiones cada hora durante vigilia",
          frecuencia: "Cada hora",
          precauciones: [
            "No retirar la ferula",
            "Suspender si genera dolor en el sitio quirurgico",
          ],
          progresion:
            "Aumentar repeticiones a 20 conforme tolere. Progresar a movimientos más amplios solo con autorizacion del cirujano.",
        },
        {
          id: "tob-f1-e2",
          nombre: "Contracción isométrica de cuadriceps",
          descripcion:
            "En decubito supino con la pierna extendida, contraer el cuadriceps presionando la rodilla hacia la superficie de apoyo. Mantener la contracción 5-6 segúndos y relajar. Este ejercicio previene la atrofia del cuadriceps y mantiene la activacion neuromuscular del miembro inferior.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "3 veces al día",
          precauciones: [
            "No levantar la pierna (evitar SLR activo las primeras 48-72 horas si hay dolor significativo)",
          ],
          progresion:
            "Progresar a elevación de pierna recta (SLR) cuando el dolor lo permita.",
        },
        {
          id: "tob-f1-e3",
          nombre: "Elevación de pierna recta (SLR) en 4 planos",
          descripcion:
            "En decubito supino, realizar elevación de la pierna operada con la rodilla extendida en flexión de cadera (0-45 grados). Mantener 3-5 segúndos arriba y descender lentamente. Progresar a abducción, aducción y extensión de cadera en decubito lateral y prono respectivamente.",
          repeticiones: "10 repeticiones x 3 series por plano",
          frecuencia: "2 veces al día",
          precauciones: [
            "No apoyar el pie al realizar el ejercicio",
            "Mantener la ferula colocada durante todo el ejercicio",
          ],
          progresion:
            "Agregar peso en tobillera (0.5-1 kg) a partir de la semana 2 si no hay dolor.",
        },
        {
          id: "tob-f1-e4",
          nombre: "Movilización activa de dedos del pie",
          descripcion:
            "Realizar flexión y extensión activa de los dedos del pie (metatarsofalangicas e interfalangicas). Incluir movimientos de separacion (abducción) y aproximacion (aducción) de los dedos. Este ejercicio previene rigidez de las articulaciónes del pie y favorece la circulacion distal.",
          repeticiones: "15-20 repeticiones x 3 series",
          frecuencia: "4-5 veces al día",
          progresion:
            "Agregar ejercicios de agarre con los dedos (towel curls) cuando se retire la ferula.",
        },
        {
          id: "tob-f1-e5",
          nombre: "Crioterapia y elevación",
          descripcion:
            "Aplicar hielo envuelto en tela sobre la zona del tobillo (por encima de la ferula o en los bordes accesibles) durante 15-20 minutos. Simultaneamente, elevar la extremidad por encima del nivel del corazon con almohadas. La combinacion de crioterapia y elevación es la medida más eficaz para el control del edema postquirurgico en las primeras 2 semanas.",
          repeticiones: "15-20 minutos por sesion",
          frecuencia: "4-6 veces al día (cada 3-4 horas)",
          precauciones: [
            "No aplicar hielo directamente sobre la piel",
            "Vigilar signos de lesión por frio (palidez, entumecimiento excesivo)",
          ],
        },
      ],
      precauciones: [
        "Mantener ferula posterior en todo momento, incluyendo durante el sueno",
        "Elevación constante del miembro por encima del nivel del corazon",
        "No sumergir la herida quirúrgica en agua",
        "Vigilar signos de infección: eritema progresivo, calor local, secreción purulenta, fiebre >38.5 C",
        "Profilaxis antitrombotica según protocolo institucional (heparina de bajo peso molecular o anticoagulantes orales)",
        "Revisar estado neurovascular distal: llenado capilar, sensibilidad, temperatura de los dedos",
      ],
      banderasRojas: [
        "Dolor desproporcionado no controlado con analgesia habitual (posible sindrome compartimental)",
        "Entumecimiento o parestesias progresivas en el pie (compromiso nervioso)",
        "Cambio de coloracion de los dedos (cianosis o palidez) - compromiso vascular",
        "Fiebre >38.5 C con eritema y secreción en herida - infección del sitio quirurgico",
        "Edema tenso de la pantorrilla con dolor a la dorsiflexión pasiva (signo de Homan) - sospecha de TVP",
        "Apertura espontanea de la herida quirúrgica (dehiscencia)",
      ],
      criteriosAvance: [
        "Herida quirúrgica con adecuada cicatrizacion, sin signos de infección",
        "Edema controlado y en disminución progresiva",
        "Dolor en reposo <3/10 en escala visual analogica (EVA)",
        "Confirmacion radiografica de posición adecuada del material de osteosintesis (radiografia de control semana 2)",
        "Aprobacion del cirujano para iniciar movilización del tobillo",
      ],
      notas:
        "En fracturas trimaleolares con reparacion del fragmento posterior, el cirujano puede solicitar mayor periodo de inmovilización (hasta 3 semanas). En casos con reparacion de sindesmosis con tornillo transindesmal, no se permitirá dorsiflexión forzada hasta el retiro del tornillo o hasta confirmacion de consolidación de la sindesmosis.",
    },

    // =====================================================================
    // FASE 2: MOVILIDAD TEMPRANA Y CARGA POR CONTACTO (Semanas 2-6)
    // =====================================================================
    {
      id: "tobillo-rafi-fase-2",
      numero: 2,
      nombre: "Movilidad temprana y carga por contacto progresiva",
      duracion: "Semanas 2-6",
      semanaInicio: 2,
      semanaFin: 6,
      objetivos: [
        "Iniciar movilización activa asistida del tobillo protegida",
        "Recuperar arcos de movimiento funciónales de flexión dorsal y plantar",
        "Progresar de sin carga a carga por contacto (touch-down weight bearing)",
        "Control del edema residual con medidas compresivas",
        "Mantener y mejorar fuerza muscular del miembro inferior",
      ],
      estadoCarga: "carga-contacto",
      cargaPorcentaje: 15,
      cargaDetalle:
        "Carga por contacto (touch-down weight bearing, ~10-15% del peso corporal). Uso de bota Walker removible. Muletas o andadera para deambulación. Progresar a carga parcial (~25%) hacia la semana 5-6 según tolerancia y aprobacion del cirujano.",
      romObjetivos: [
        {
          movimiento: "Flexión dorsal de tobillo",
          rangoObjetivo: "5-10 grados",
          restriccion:
            "Evitar dorsiflexión forzada si hay reparacion de sindesmosis. No forzar al final del rango.",
        },
        {
          movimiento: "Flexión plantar de tobillo",
          rangoObjetivo: "20-30 grados",
        },
        {
          movimiento: "Inversión de tobillo",
          rangoObjetivo: "10-15 grados",
          restriccion:
            "Iniciar inversión activa suave desde semana 4. Evitar inversión forzada o pasiva.",
        },
        {
          movimiento: "Eversión de tobillo",
          rangoObjetivo: "5-10 grados",
          restriccion:
            "Iniciar eversión activa suave desde semana 4.",
        },
      ],
      ejercicios: [
        {
          id: "tob-f2-e1",
          nombre: "Movilización activa asistida de tobillo (dorsiflexión/plantiflexión)",
          descripcion:
            "Con el paciente sentado y la pierna apoyada sobre una superficie con el pie libre (borde de la cama o silla), realizar movimientos de dorsiflexión y plantiflexión activa del tobillo. Iniciar con rango indoloro y progresar gradualmente. El terapeuta puede asistir el movimiento con sus manos para ganar los últimos grados al final del rango. Utilizar una toalla o banda elastica bajo el antepie para asistir la dorsiflexión si es necesario.",
          repeticiones: "15 repeticiones x 3 series",
          frecuencia: "3 veces al día",
          precauciones: [
            "No forzar más alla del rango indoloro",
            "Detener si aparece dolor agudo en zona de la placa o tornillos",
          ],
          progresion:
            "Progresar de activo asistido a activo libre. Aumentar rango gradualmente 5 grados por semana.",
        },
        {
          id: "tob-f2-e2",
          nombre: "Alfabeto con el pie",
          descripcion:
            "Sentado con el muslo apoyado y el pie libre en el aire, dibujar las letras del alfabeto con la punta del pie. Este ejercicio combina todos los planos de movimiento del tobillo (dorsiflexión, plantiflexión, inversión, eversión y circunduccion) de forma activa y controlada. Es excelente para recuperar la coordinacion motora fina del tobillo.",
          repeticiones: "1-2 repeticiones completas del alfabeto",
          frecuencia: "3-4 veces al día",
          precauciones: [
            "Mantener los movimientos dentro del rango indoloro",
            "Evitar letras que requieran inversión/eversión extrema las primeras 2 semanas de esta fase",
          ],
          progresion:
            "Aumentar velocidad y amplitud del trazo progresivamente.",
        },
        {
          id: "tob-f2-e3",
          nombre: "Deslizamiento del pie sobre superficie lisa",
          descripcion:
            "Sentado en silla con el pie descalzo sobre una superficie lisa (piso pulido o toalla sobre piso). Deslizar el pie hacia adelante (flexión plantar) y hacia atras (dorsiflexión) de forma controlada, permitiendo que la planta del pie se deslice sin generar carga significativa. Este ejercicio facilita la ganancia de rango de movimiento en un entorno de baja resistencia.",
          repeticiones: "15-20 repeticiones x 3 series",
          frecuencia: "3 veces al día",
          precauciones: [
            "No aplicar carga vertical significativa a traves del pie",
          ],
          progresion:
            "Aumentar rango de deslizamiento. Progresar a ejercicio con rodillo de espuma bajo el pie.",
        },
        {
          id: "tob-f2-e4",
          nombre: "Ejercicios de fortalecimiento con banda elastica (Theraband)",
          descripcion:
            "Sentado con la pierna extendida, colocar una banda elastica de resistencia ligera (amarilla o roja) alrededor del antepie. Realizar movimientos resistidos de: 1) Plantiflexión: empujar contra la banda hacia abajo. 2) Dorsiflexión: con la banda anclada al frente, tirar el pie hacia arriba. 3) Eversión: con la banda anclada medialmente, empujar el pie hacia fuera. Iniciar desde semana 4.",
          repeticiones: "12-15 repeticiones x 3 series por direccion",
          frecuencia: "2 veces al día",
          precauciones: [
            "Iniciar solo desde semana 4",
            "Usar banda de resistencia ligera (amarilla/roja) inicialmente",
            "Evitar inversión resistida hasta semana 5-6",
          ],
          progresion:
            "Progresar color de banda (amarilla -> roja -> verde) cada 1-2 semanas según tolerancia. Agregar inversión resistida desde semana 5-6.",
        },
        {
          id: "tob-f2-e5",
          nombre: "Contracción isométrica de peroneos y tibial posterior",
          descripcion:
            "Sentado con el pie apoyado sobre el piso (sin carga). Intentar evertir el pie contra una resistencia fija (pared o mano del terapeuta) sin que ocurra movimiento (contracción isométrica). Mantener 6-8 segúndos y relajar. Repetir para inversión. Este ejercicio activa de forma segura los estabilizadores laterales y mediales del tobillo sin estresar la osteosintesis.",
          repeticiones: "10 repeticiones x 3 series por direccion",
          frecuencia: "2 veces al día",
          precauciones: [
            "Mantener contracciónes submaximales (50-70% de esfuerzo maximo)",
            "No generar movimiento, solo contracción estatica",
          ],
          progresion:
            "Aumentar tiempo de mantenimiento a 10 segúndos. Progresar a contracciónes contra banda elastica.",
        },
      ],
      precauciones: [
        "Usar bota Walker para deambulación; retirar solo para ejercicios y bano",
        "Continuar elevación y crioterapia después de sesiones de ejercicio",
        "Usar media de compresion elastica para control de edema",
        "No caminar descalzo; usar calzado de suela rigida cuando no tenga la bota",
        "Evitar maniobras de inversión/eversión forzadas en las primeras 4 semanas",
        "Si se reparo la sindesmosis con tornillo: evitar dorsiflexión más alla de 5 grados hasta indicación del cirujano o retiro del tornillo",
      ],
      banderasRojas: [
        "Aumento subito del dolor o edema después de una sesion de rehabilitación",
        "Crepitacion palpable en zona de la osteosintesis",
        "Pérdida de rango de movimiento previamente ganado sin causa aparente",
        "Enrojecimiento o secreción tardia en herida quirúrgica (infección tardia)",
        "Dolor lateral persistente con inestabilidad percibida (falla del material de sindesmosis)",
        "Intolerancia a la carga por contacto con dolor >5/10",
      ],
      criteriosAvance: [
        "Dorsiflexión activa de al menos 5 grados",
        "Plantiflexión activa de al menos 20 grados",
        "Edema controlado (<2 cm de diferencia con el lado contralateral)",
        "Tolerancia a carga por contacto/parcial sin dolor significativo (<3/10)",
        "Radiografia de control (semana 6) con evidencia de consolidación ósea incipiente",
        "Herida completamente cerrada y sin signos de infección",
      ],
      notas:
        "La transicion de ferula a bota Walker removible se realiza según criterio del cirujano, generalmente entre semana 2-3. En fracturas Weber C con reparacion de sindesmosis, la progresión de arcos de movimiento puede ser más lenta y debe coordinarse con el cirujano.",
    },

    // =====================================================================
    // FASE 3: FORTALECIMIENTO Y CARGA PARCIAL-PROGRESIVA (Semanas 6-10)
    // =====================================================================
    {
      id: "tobillo-rafi-fase-3",
      numero: 3,
      nombre: "Fortalecimiento y carga parcial progresiva",
      duracion: "Semanas 6-10",
      semanaInicio: 6,
      semanaFin: 10,
      objetivos: [
        "Progresar carga de parcial (50%) a progresiva (75%)",
        "Recuperar rango de movimiento funciónal completo del tobillo",
        "Iniciar fortalecimiento progresivo de musculatura del tobillo y pierna",
        "Restablecer patrón de marcha normalizado con dispositivos de asistencia",
        "Iniciar entrenamiento propioceptivo basico",
      ],
      estadoCarga: "carga-parcial",
      cargaPorcentaje: 50,
      cargaDetalle:
        "Carga parcial progresiva: iniciar con 50% del peso corporal y progresar a 75% hacia la semana 8. Transicion de muletas a baston a partir de semana 8. Se puede iniciar retiro progresivo de la bota Walker hacia la semana 7-8 con zapato rigido. Progresar según tolerancia y evidencia radiografica de consolidación.",
      romObjetivos: [
        {
          movimiento: "Flexión dorsal de tobillo",
          rangoObjetivo: "10-15 grados",
          restriccion:
            "Progresar gradualmente. Iniciar estiramiento sostenido de gastrocnemio-soleo con rodilla extendida y flexiónada.",
        },
        {
          movimiento: "Flexión plantar de tobillo",
          rangoObjetivo: "35-40 grados",
        },
        {
          movimiento: "Inversión de tobillo",
          rangoObjetivo: "20-25 grados",
        },
        {
          movimiento: "Eversión de tobillo",
          rangoObjetivo: "10-15 grados",
        },
      ],
      ejercicios: [
        {
          id: "tob-f3-e1",
          nombre: "Elevación de talon bilateral (heel raises) en bipedestacion",
          descripcion:
            "De pie frente a una pared o barra de apoyo, con ambos pies apoyados en el piso, elevar ambos talones simultaneamente realizando flexión plantar. Mantener 2-3 segúndos arriba y descender lentamente. Distribuir el peso progresivamente de forma equitativa entre ambos pies (iniciar con mayor carga en el pie sano). Este ejercicio fortalece el complejo gastrocnemio-soleo de forma segura y controlada.",
          repeticiones: "12-15 repeticiones x 3 series",
          frecuencia: "2 veces al día",
          precauciones: [
            "Mantener apoyo manual en barra o pared",
            "Iniciar con mayor carga en pie no operado (70-30) y progresar a 50-50",
            "No realizar unilateral en esta fase",
          ],
          progresion:
            "Aumentar tiempo de mantenimiento arriba a 5 segúndos. Progresar a mayor carga en pie operado. A partir de semana 9, intentar unilateral asistido.",
        },
        {
          id: "tob-f3-e2",
          nombre: "Estiramiento del complejo gastrocnemio-soleo (gemelos)",
          descripcion:
            "De pie frente a una pared con las manos apoyadas. Colocar el pie operado atras con la rodilla extendida (estira gastrocnemio) y flexiónar la rodilla del pie adelantado. Inclinar el cuerpo hacia adelante hasta sentir estiramiento en la pantorrilla. Mantener 30 segúndos. Repetir con la rodilla del pie operado ligeramente flexiónada (estira soleo). Es fundamental recuperar la dorsiflexión completa para normalizar la marcha.",
          repeticiones: "3-4 repeticiones x 30 segúndos por posición",
          frecuencia: "3-4 veces al día",
          precauciones: [
            "No forzar la dorsiflexión si produce dolor en la zona de la placa",
            "Mantener el talon pegado al piso durante el estiramiento",
          ],
          progresion:
            "Progresar a estiramiento en escalon (drop-off stretch) a partir de semana 9.",
        },
        {
          id: "tob-f3-e3",
          nombre: "Entrenamiento propioceptivo basico: apoyo unipodal",
          descripcion:
            "De pie junto a una barra o pared de apoyo, transferir el peso al pie operado y levantar ligeramente el pie contralateral. Mantener el equilibrio 10-15 segúndos. Iniciar con los ojos abiertos y con soporte manual disponible. Este ejercicio rehabilita los mecanorreceptores articulares danados durante la fractura y cirugia, esenciales para la estabilidad dinamica del tobillo.",
          repeticiones: "5-8 repeticiones x 15 segúndos",
          frecuencia: "2 veces al día",
          precauciones: [
            "Mantener apoyo manual accesible en todo momento",
            "No realizar sobre superficies inestables en esta fase",
            "Suspender si aparece dolor o sensacion de inestabilidad",
          ],
          progresion:
            "Aumentar tiempo a 30 segúndos. Progresar a ojos cerrados (semana 9). Agregar superficie inestable (cojin) en fase 4.",
        },
        {
          id: "tob-f3-e4",
          nombre: "Reeducacion de la marcha",
          descripcion:
            "Practica de patrón de marcha normalizado en barras paralelas o pasillo con apoyo de baston. Enfocarse en: apoyo de talon, fase de despegue con empuje plantar, balanceo simetrico y longitud de paso igual bilateral. Utilizar espejo para retroalimentacion visual. El terapeuta debe corregir compensaciónes como marcha en Trendelenburg, circunduccion o marcha antalgica.",
          repeticiones: "10-15 minutos por sesion",
          frecuencia: "Diario (en sesion de terapia y en domicilio)",
          precauciones: [
            "No forzar la velocidad de marcha",
            "Usar calzado deportivo cerrado con buen soporte",
            "Mantener un dispositivo de asistencia (baston) hasta que el patrón sea simetrico",
          ],
          progresion:
            "Aumentar distancia y velocidad gradualmente. Retirar baston cuando la marcha sea simetrica y sin dolor.",
        },
        {
          id: "tob-f3-e5",
          nombre: "Fortalecimiento con banda elastica en 4 direcciones",
          descripcion:
            "Sentado con banda elastica de resistencia moderada (verde o azul) alrededor del antepie. Realizar secuencia de: dorsiflexión resistida, plantiflexión resistida, eversión resistida e inversión resistida. Completar el circuito de las 4 direcciones como una serie. Mantener 2 segúndos al final del rango y retornar lentamente (fase excéntrica controlada).",
          repeticiones: "12-15 repeticiones x 3 series por direccion",
          frecuencia: "Diario",
          precauciones: [
            "Progresar resistencia de la banda cada 2 semanas",
            "Evitar movimientos bruscos o balisticos",
          ],
          progresion:
            "Progresar a banda azul y luego negra. Agregar fortalecimiento con maquina (leg press, seated calf raise) a partir de semana 9.",
        },
      ],
      precauciones: [
        "Progresión de carga guiada por dolor: si el dolor supera 4/10, reducir nivel de carga",
        "Continuar crioterapia después de sesiones de ejercicio intenso",
        "Vigilar edema de rebote con la progresión de carga y actividad",
        "Si hay tornillo de sindesmosis, verificar con el cirujano si ya se puede realizar dorsiflexión completa",
        "No correr, saltar ni realizar actividades de impacto en esta fase",
        "Controlar radiograficamente la consolidación antes de progresar a carga completa",
      ],
      banderasRojas: [
        "Dolor progresivo en zona de osteosintesis con la carga (posible fallo del material)",
        "Sensacion de chasquido o inestabilidad durante la marcha",
        "Edema que no cede con elevación y crioterapia",
        "Bloqueo articular o limitacion súbita del rango de movimiento",
        "Dolor nocturno persistente que interrumpe el sueno",
        "Deformidad visible o cambio en el contorno del tobillo",
      ],
      criteriosAvance: [
        "Dorsiflexión activa >=10 grados",
        "Plantiflexión activa >=35 grados",
        "Tolerancia a carga del 75% del peso corporal sin dolor",
        "Marcha con baston con patrón aceptable (simetria >80%)",
        "Consolidación radiografica en progreso (callo óseo visible)",
        "Capacidad de realizar heel raise bilateral sin dolor",
        "Apoyo unipodal mantenido >10 segúndos",
      ],
      notas:
        "La transicion de bota Walker a calzado se realiza generalmente entre la semana 7 y 8. El paciente debe usar zapato deportivo con buen soporte de tobillo. Si la consolidación radiografica es lenta, retrasar la progresión de carga.",
    },

    // =====================================================================
    // FASE 4: CARGA COMPLETA Y RETORNO FUNCIONAL (Semanas 10-14)
    // =====================================================================
    {
      id: "tobillo-rafi-fase-4",
      numero: 4,
      nombre: "Carga completa, propiocepción avanzada y retorno funciónal",
      duracion: "Semanas 10-14",
      semanaInicio: 10,
      semanaFin: 14,
      objetivos: [
        "Alcanzar carga completa sin dispositivos de asistencia",
        "Recuperar rango de movimiento completo o funciónal del tobillo",
        "Fortalecimiento avanzado del complejo muscular del tobillo y pierna",
        "Entrenamiento propioceptivo avanzado y estabilidad dinamica",
        "Retorno progresivo a actividades de la vida diaria y laborales",
        "Iniciar reacondicionamiento cardiovascular de bajo impacto",
      ],
      estadoCarga: "carga-completa",
      cargaPorcentaje: 100,
      cargaDetalle:
        "Carga completa (100% del peso corporal). Deambulación sin dispositivos de asistencia. Marcha en terrenos variados. Inicio de actividades de bajo impacto (bicicleta estatica, natacion). No se permiten actividades de alto impacto (correr, saltar) hasta la semana 14 minimo y con aprobacion del cirujano.",
      romObjetivos: [
        {
          movimiento: "Flexión dorsal de tobillo",
          rangoObjetivo: "15-20 grados (objetivo: >=10 grados funciónales)",
          restriccion:
            "Si no se alcanzan 10 grados de dorsiflexión, considerar movilización articular manual o consultar con cirujano.",
        },
        {
          movimiento: "Flexión plantar de tobillo",
          rangoObjetivo: "40-50 grados",
        },
        {
          movimiento: "Inversión de tobillo",
          rangoObjetivo: "30-35 grados",
        },
        {
          movimiento: "Eversión de tobillo",
          rangoObjetivo: "15-20 grados",
        },
      ],
      ejercicios: [
        {
          id: "tob-f4-e1",
          nombre: "Elevación de talon unilateral (single leg heel raise)",
          descripcion:
            "De pie sobre el pie operado unicamente, elevar el talon realizando flexión plantar maxima. Mantener 3-5 segúndos en la posición alta y descender lentamente (3 segúndos de fase excéntrica). Iniciar con apoyo de la mano en pared y progresar a sin apoyo. Este ejercicio es el gold standard para evaluar y fortalecer el complejo gastrocnemio-soleo y es un criterio clave para el retorno funciónal.",
          repeticiones: "10-15 repeticiones x 3 series",
          frecuencia: "Diario",
          precauciones: [
            "Iniciar con apoyo manual y progresar",
            "Descender lentamente para maximizar componente excéntrico",
          ],
          progresion:
            "Progresar a realizacion en escalon (mayor rango excéntrico). Agregar peso (mochila, mancuerna) cuando complete 15 repeticiones sin dolor. Objetivo: 25 repeticiones unilateral consecutivas para considerar retorno a actividad deportiva.",
        },
        {
          id: "tob-f4-e2",
          nombre: "Entrenamiento propioceptivo en superficie inestable",
          descripcion:
            "Apoyo unipodal sobre superficie inestable: cojin propioceptivo (Airex), disco de equilibrio o plataforma BOSU (lado inestable hacia arriba). Mantener equilibrio 30 segúndos. Progresar a: ojos cerrados, lanzar y atrapar pelota, perturbaciones externas controladas por el terapeuta. Este entrenamiento es esencial para la prevención de re-lesiónes y esguinces recurrentes post-fractura.",
          repeticiones: "5-8 repeticiones x 30 segúndos",
          frecuencia: "Diario",
          precauciones: [
            "Realizar cerca de una pared o barra para seguridad",
            "No iniciar sobre BOSU hasta que el apoyo en cojin sea estable >30 segúndos",
          ],
          progresion:
            "Ojos cerrados -> perturbaciones externas -> superficie más inestable -> movimientos de miembro superior simultaneos -> salto y aterrizaje controlado.",
        },
        {
          id: "tob-f4-e3",
          nombre: "Sentadilla bilateral y progresión a unilateral",
          descripcion:
            "Sentadilla bilateral con los pies separados a la anchura de los hombros, descender hasta 60-90 grados de flexión de rodilla manteniendo los talones en el piso. Enfocarse en que el peso se distribuya equitativamente (usar bascula bilateral si esta disponible). La dorsiflexión adecuada de tobillo es prerequisito para este ejercicio. Progresar a sentadilla unilateral asistida sobre el pie operado.",
          repeticiones: "12-15 repeticiones x 3 series",
          frecuencia: "Diario",
          precauciones: [
            "Mantener los talones en contacto con el piso",
            "No descender más alla de lo que la dorsiflexión permita",
            "Evitar valgo dinamico de rodilla",
          ],
          progresion:
            "Aumentar profundidad progresivamente. Agregar peso (mancuernas, barra). Progresar a sentadilla unilateral (pistol squat asistido) hacia semana 13-14.",
        },
        {
          id: "tob-f4-e4",
          nombre: "Marcha lateral y cariocas (crossover steps)",
          descripcion:
            "En un espacio amplio, realizar marcha lateral (side stepping) de forma controlada, manteniendo las rodillas ligeramente flexiónadas y el centro de gravedad bajo. Progresar a cariocas (pasos cruzados alternando por delante y por detras). Estos ejercicios trabajan estabilidad en el plano frontal y transversal, esenciales para actividades funciónales y deportivas.",
          repeticiones: "3 series de 10 metros en cada direccion",
          frecuencia: "3-4 veces por semana",
          precauciones: [
            "Iniciar a velocidad lenta y controlada",
            "Usar superficie plana y uniforme",
            "Calzado deportivo con buen soporte lateral",
          ],
          progresion:
            "Aumentar velocidad. Progresar a desplazamientos con cambio de direccion rápido. Agregar ejercicios de agilidad con escalera de coordinacion.",
        },
        {
          id: "tob-f4-e5",
          nombre: "Reacondicionamiento cardiovascular: bicicleta estatica y eliptica",
          descripcion:
            "Iniciar con bicicleta estatica con asiento alto (minima dorsiflexión requerida) y resistencia baja durante 10-15 minutos. Progresar a bicicleta con asiento normal y mayor resistencia. A partir de la semana 12, puede utilizar eliptica que agrega componente de carga en cadena cerrada con bajo impacto. Estos ejercicios mejoran la resistencia cardiovascular sin el impacto de la carrera.",
          repeticiones: "15-30 minutos por sesion",
          frecuencia: "3-5 veces por semana",
          precauciones: [
            "Ajustar asiento de bicicleta para que no requiera dorsiflexión extrema",
            "Iniciar con resistencia baja y progresar semanalmente",
            "Vigilar edema post-actividad",
          ],
          progresion:
            "Aumentar duracion a 30-45 minutos. Aumentar resistencia. Progresar a natacion o caminata en banda sin fin (treadmill). No trotar hasta semana 14 minimo y con aprobacion medica.",
        },
      ],
      precauciones: [
        "No correr ni saltar hasta completar criterios de retorno a actividad deportiva",
        "Evitar terrenos irregulares sin calzado deportivo adecuado",
        "Continuar con medias de compresion si persiste edema vespertino",
        "Si persiste limitacion de dorsiflexión <10 grados, derivar a movilización articular manual específica (terapia manual de la articulación talocrural posterior)",
        "Vigilar signos de artrosis postraumatica temprana: dolor con actividad prolongada, rigidez matutina, crepitacion articular",
      ],
      banderasRojas: [
        "Dolor persistente en el tobillo con actividades de la vida diaria (posible artrosis postraumatica o no-union)",
        "Prominencia o molestia sobre el material de osteosintesis (posible necesidad de retiro de material)",
        "Inestabilidad recurrente con esguinces de repeticion",
        "Limitacion de dorsiflexión <5 grados que no mejora con rehabilitación (posible pinzamiento anterior o adherencias)",
        "Dolor y edema en maleolo medial (posible lesión del cartilago talar - lesión osteocondral)",
      ],
      criteriosAvance: [
        "Marcha independiente sin dolor y con patrón simetrico normalizado",
        "Dorsiflexión >=10 grados (funciónal para marcha y escaleras)",
        "Fuerza de plantiflexión >=4+/5 en escala de Daniels",
        "Heel raise unilateral >=15 repeticiones sin dolor",
        "Apoyo unipodal >=30 segúndos con ojos abiertos, >=15 segúndos con ojos cerrados",
        "Sentadilla bilateral completa con talones en el piso",
        "Sin edema significativo al final del día (<1 cm vs contralateral)",
        "Radiografia con consolidación ósea completa",
      ],
      notas:
        "El retiro de material de osteosintesis (placa y tornillos) se considera generalmente entre los 12-18 meses postoperatorios, solo si genera sintomás (molestia, prominencia, dolor). El tornillo de sindesmosis, si es metalico, puede retirarse entre las semanas 12-16 según protocolo del cirujano. Los tornillos bioabsorbibles no requieren retiro.",
    },
  ],

  criteriosRetornoActividad: [
    "Consolidación radiografica completa confirmada por el cirujano tratante",
    "Rango de movimiento funciónal: dorsiflexión >=10 grados, plantiflexión >=40 grados",
    "Fuerza de tobillo >=80% del lado contralateral (medida con dinamometro isocinetico si esta disponible)",
    "Heel raise unilateral: >=25 repeticiones consecutivas",
    "Prueba de equilibrio unipodal: >=30 segúndos ojos abiertos, >=15 segúndos ojos cerrados",
    "Marcha normalizada sin claudicacion ni uso de dispositivos",
    "AOFAS Ankle-Hindfoot Score >=80/100",
    "Prueba de hop test (salto unipodal) >=80% del lado contralateral (para retorno deportivo)",
    "Sin dolor con actividades de la vida diaria (EVA <2/10)",
    "Sin edema significativo tras actividad fisica prolongada",
    "Para retorno deportivo: completar programa de reacondicionamiento específico del deporte (correr, saltar, cambios de direccion) sin dolor",
  ],
  complicacionesPotenciales: [
    "Artrosis postraumatica de tobillo (incidencia 10-40% según gravedad de la fractura)",
    "Rigidez articular persistente con deficit de dorsiflexión",
    "Sindrome de dolor regional complejo (SDRC / distrofia simpatico refleja)",
    "Infección del sitio quirurgico (superficial o profunda)",
    "No-union o retraso de consolidación (más frecuente en fumadores y diabeticos)",
    "Mal-union con incongruencia articular residual",
    "Fallo del material de osteosintesis (rotura de placa o tornillos)",
    "Lesión osteocondral del domo talar (lesión asociada no diagnosticada inicialmente)",
    "Sindrome del tunel tarsiano por edema o fibrosis postquirúrgica",
    "Inestabilidad cronica de tobillo si hay lesión ligamentaria lateral asociada no tratada",
    "Molestias por prominencia del material de osteosintesis (requiere retiro)",
    "Trombosis venosa profunda o tromboembolismo pulmonar",
    "Heterotopia osificante (rara en tobillo)",
  ],
  referencias: [
    "Egol KA, Dolan R, Koval KJ. Functional Outcome of Surgery for Fractures of the Ankle. A Prospective, Randomised Comparison of Management in a Cast or a Functional Brace. J Bone Joint Surg Br. 2000;82(2):246-249.",
    "Lin CW, Donkers NA, Refshauge KM, Beckenkamp PR, Khera K, Moseley AM. Rehabilitation for ankle fractures in adults. Cochrane Database Syst Rev. 2012;11:CD005595.",
    "Simanski CJ, Maegele MG, Lefering R, et al. Functional treatment and early weightbearing after an ankle fracture: a prospective study. J Orthop Trauma. 2006;20(2):108-114.",
    "Dehghan N, McKee MD, Jenkinson RJ, et al. Early Weightbearing and Range of Motion Versus Non-Weightbearing and Immobilization After Open Reduction and Internal Fixation of Unstable Ankle Fractures: A Randomized Controlled Trial. J Orthop Trauma. 2016;30(7):345-352.",
    "AAOS Clínical Practice Guideline: The Diagnosis and Treatment of Ankle Fractures in Adults. American Academy of Orthopaedic Surgeons. 2014.",
    "Thomás G, Whalley H, Modi C. Early mobilization of operatively fixed ankle fractures: a systematic review. Foot Ankle Int. 2009;30(7):666-674.",
    "Lehtonen H, Jarvinen TL, Honkonen S, Nyman M, Vihtonen K, Jarvinen M. Use of a cast compared with a functional ankle brace after operative treatment of an ankle fracture. A prospective, randomized study. J Bone Joint Surg Am. 2003;85(2):205-211.",
    "Keene DJ, Williamson E, Bruce J, et al. Early Ankle Movement versus Immobilization in the Postoperative Management of Ankle Fracture in Adults: A Systematic Review and Meta-analysis. J Orthop Sports Phys Ther. 2014;44(9):690-701.",
  ],
  fechaActualizacion: "2025-03-31",
  nivelEvidencia:
    "Nivel I-II: Basado en ensayos clínicos aleatorizados (Dehghan 2016, Lin 2012) y revision sistematica Cochrane. Guia de practica clínica AAOS 2014. Recomendaciones con grado de evidencia moderado-alto para movilización temprana y carga precoz tras RAFI de tobillo.",
};
