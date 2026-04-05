import type { Protocol } from "@/types/protocol";

/**
 * Protocolo de rehabilitación para fractura de húmero proximal
 * tratada con reducción abierta y fijación interna (RAFI) con placa.
 *
 * Basado en:
 * - Hodgson SA et al. (2007) - Protocolo de rehabilitación post-RAFI húmero proximal
 * - Handoll HH, Brorson S (2015) - Cochrane: Intervenciones para fracturas de húmero proximal
 * - Launonen AP et al. (2015) - Tratamiento de fracturas de húmero proximal en adultos
 * - Longo UG et al. (2016) - Rehabilitación post-quirúrgica del hombro
 * - Murray IR et al. (2011) - Protocolo de rehabilitación acelerada vs conservadora
 * - Guias AAOS (2015) - Tratamiento de fracturas de húmero proximal
 */
export const humeroProximalRAFI: Protocol = {
  id: "humero-proximal-rafi",
  nombre:
    "Fractura de Húmero Proximal - Reducción Abierta y Fijación Interna (RAFI) con Placa",
  nombreCorto: "Fx Húmero Proximal RAFI",
  descripcion:
    "Protocolo de rehabilitación postoperatoria para fracturas de húmero proximal (clasificación de Neer 2, 3 y 4 partes) tratadas mediante reducción abierta y fijación interna con placa bloqueada. El protocolo se adapta según la calidad ósea, patrón de fractura, estabilidad de la fijación y participacion del paciente. La progresión debe ser individualizada y confirmada radiograficamente en cada fase.",
  region: "miembro-superior",
  localizacion: "hombro",
  abordajeQuirurgico: ["RAFI", "placa"],
  clasificaciones: [
    "Neer 2 partes - Fractura desplazada del cuello quirurgico",
    "Neer 2 partes - Fractura desplazada del troquiter",
    "Neer 2 partes - Fractura desplazada del troquin",
    "Neer 3 partes - Cuello quirurgico + troquiter",
    "Neer 3 partes - Cuello quirurgico + troquin",
    "Neer 4 partes - Cuello quirurgico + troquiter + troquin",
    "AO/OTA 11-A (extra-articular unifocal)",
    "AO/OTA 11-B (extra-articular bifocal)",
    "AO/OTA 11-C (articular)",
  ],
  indicacionesQuirurgicas: [
    "Desplazamiento del cuello quirurgico > 1 cm o angulacion > 45 grados",
    "Desplazamiento del troquiter > 5 mm (> 3 mm en pacientes deportistas o trabajadores que requieren elevación del brazo)",
    "Fracturas en 3 partes desplazadas en pacientes con buena calidad ósea",
    "Fracturas en 4 partes seleccionadas en pacientes jovenes con buena calidad ósea",
    "Fractura-luxacion del húmero proximal",
    "Pérdida de reducción tras tratamiento conservador",
  ],
  duracionTotal: "12-16 semanas",
  semanasTotal: 16,
  fases: [
    // =========================================================================
    // FASE 1: PROTECCION E INMOVILIZACION (Semanas 0-2)
    // =========================================================================
    {
      id: "hp-rafi-fase-1",
      numero: 1,
      nombre: "Protección y movilidad pasiva precoz",
      duracion: "Semanas 0-2",
      semanaInicio: 0,
      semanaFin: 2,
      objetivos: [
        "Proteger la fijación quirúrgica y favorecer la consolidación inicial",
        "Control del dolor y del edema postoperatorio",
        "Mantener la movilidad pasiva del hombro dentro de limites seguros",
        "Prevenir la rigidez articular glenohumeral y capsular",
        "Mantener la movilidad activa del codo, muneca y mano",
        "Educacion del paciente sobre el proceso de recuperacion",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "Uso de cabestrillo tipo Velpeau o inmovilizador de hombro. No levantar objetos con la extremidad afectada. Se permite el uso funciónal de la mano para actividades ligeras (comer, escribir) manteniendo el codo pegado al cuerpo.",
      romObjetivos: [
        {
          movimiento: "Flexión pasiva",
          rangoObjetivo: "0-90 grados",
          restriccion:
            "Solo movimiento pasivo asistido por el terapeuta o auto-asistido con polea. No superar 90 grados en las primeras 2 semanas.",
        },
        {
          movimiento: "Abducción pasiva en el plano escapular",
          rangoObjetivo: "0-75 grados",
          restriccion:
            "Abducción exclusivamente en el plano escapular (30 grados anterior al plano coronal). Evitar abducción pura en el plano coronal.",
        },
        {
          movimiento: "Rotación externa pasiva",
          rangoObjetivo: "0-20 grados",
          restriccion:
            "Rotación externa limitada a 20 grados con el brazo pegado al cuerpo. Precaucion si se reparo el subescapular (limitar a 0 grados las primeras 2 semanas).",
        },
        {
          movimiento: "Rotación interna pasiva",
          rangoObjetivo: "Mano al abdomen",
          restriccion:
            "Solo hasta llevar la mano al abdomen. Evitar rotación interna forzada, especialmente si se utilizo abordaje deltopectoral con desinsercion del subescapular.",
        },
      ],
      ejercicios: [
        {
          id: "hp-ej-pendulares",
          nombre: "Ejercicios pendulares de Codman",
          descripcion:
            "Paciente inclinado hacia adelante con el tronco a 60-90 grados, brazo colgando con efecto de gravedad. Realizar movimientos circulares suaves en sentido horario y antihorario, asi como movimientos de antepulsion-retropulsion y oscilaciones laterales. El movimiento debe originarse desde el tronco, no del hombro. Se puede agregar un peso ligero (0.5-1 kg) para incrementar la traccion y facilitar la distraccion articular.",
          repeticiones: "10-15 circulos en cada direccion, 3 series",
          frecuencia: "3-4 veces al día",
          precauciones: [
            "No realizar movimientos activos del hombro, solo dejar que la gravedad genere el movimiento",
            "Mantener la musculatura del hombro completamente relajada",
            "Detenerse si aparece dolor agudo o irradiacion al brazo",
          ],
        },
        {
          id: "hp-ej-flexion-pasiva-supino",
          nombre: "Flexión pasiva en supino (auto-asistida)",
          descripcion:
            "Paciente en decubito supino. Con la mano sana, tomar la muneca del brazo afectado y elevar ambos brazos lentamente en flexión anterior, utilizando el brazo sano como guia y soporte. Mantener la posición final 5 segúndos. Descender de forma controlada. El hombro afectado debe permanecer completamente relajado durante todo el movimiento.",
          repeticiones: "10-15 repeticiones, 3 series",
          frecuencia: "3 veces al día",
          precauciones: [
            "No superar los 90 grados de flexión en esta fase",
            "Detenerse ante cualquier dolor agudo o crepitacion",
            "Mantener el hombro afectado totalmente pasivo, sin contracción muscular",
          ],
        },
        {
          id: "hp-ej-rotacion-externa-pasiva",
          nombre: "Rotación externa pasiva con baston",
          descripcion:
            "Paciente en decubito supino con el codo del brazo afectado flexiónado a 90 grados y pegado al costado del cuerpo. Sostener un baston con ambas manos. La mano sana empuja el baston para rotar externamente el brazo afectado de forma suave y controlada. Mantener la posición final 5 segúndos. El codo debe permanecer en contacto con el cuerpo durante todo el ejercicio.",
          repeticiones: "10-12 repeticiones, 2-3 series",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "No superar 20 grados de rotación externa en esta fase",
            "Si se reparo el subescapular, consultar con el cirujano antes de iniciar rotación externa",
            "Mantener el codo pegado al tronco en todo momento",
          ],
        },
        {
          id: "hp-ej-movilidad-codo-mano",
          nombre: "Movilidad activa de codo, muneca y mano",
          descripcion:
            "Con el cabestrillo retirado temporalmente, realizar: 1) Flexo-extensión completa del codo. 2) Prono-supinación del antebrazo. 3) Flexo-extensión de la muneca. 4) Apertura y cierre de la mano con pelota de espuma suave. 5) Oposición del pulgar a cada dedo. Estos ejercicios previenen la rigidez articular distal y el edema de la mano.",
          repeticiones: "15-20 repeticiones de cada movimiento, 2 series",
          frecuencia: "4-5 veces al día",
          precauciones: [
            "No generar movimiento del hombro durante los ejercicios de codo",
            "Si hay edema significativo en la mano, realizar ejercicios de bombeo con la mano elevada",
          ],
        },
        {
          id: "hp-ej-retraccion-escapular",
          nombre: "Retraccion y protrusion escapular isométrica",
          descripcion:
            "Paciente sentado con buena postura. Realizar retraccion escapular suave (apretar las escapulas hacia la linea media) manteniendo 5 segúndos, luego relajar. Alternar con protrusion escapular suave (llevar los hombros ligeramente hacia adelante). El objetivo es mantener la activacion del serrato anterior y los estabilizadores escapulares sin movilizar la articulación glenohumeral.",
          repeticiones: "10 repeticiones de cada movimiento, manteniendo 5 segúndos",
          frecuencia: "3 veces al día",
          precauciones: [
            "Movimientos suaves y controlados, sin generar dolor en el sitio quirurgico",
            "No elevar los hombros (evitar contracción del trapecio superior excesiva)",
          ],
        },
      ],
      precauciones: [
        "Uso obligatorio de cabestrillo excepto durante los ejercicios y la higiene",
        "No elevar activamente el brazo afectado",
        "No cargar peso con la extremidad operada",
        "Dormir en posición semi-sentada o decubito supino con almohada bajo el brazo afectado",
        "Evitar movimientos bruscos o inesperados (cuidado con mascotas, niños, multitudes)",
        "Control de herida quirúrgica: vigilar signos de infección (eritema, calor, secreción purulenta, fiebre)",
        "Crioterapia 15-20 minutos cada 2-3 horas las primeras 72 horas, luego 3-4 veces al día",
      ],
      banderasRojas: [
        "Dolor severo no controlado con la analgesia prescrita",
        "Pérdida súbita de movilidad previamente alcanzada",
        "Parestesias o debilidad en la mano o el antebrazo (posible lesión del nervio axilar o plexo braquial)",
        "Signos de infección: fiebre > 38.5 C, eritema progresivo, secreción purulenta de la herida",
        "Edema severo o equimosis progresiva en el brazo o antebrazo",
        "Crepitacion palpable o deformidad nueva en el hombro",
      ],
      criteriosAvance: [
        "Dolor controlado (EVA < 4/10 en reposo)",
        "Herida quirúrgica en buen estado, sin signos de infección",
        "Radiografia de control a las 2 semanas sin pérdida de reducción ni desplazamiento del material de osteosintesis",
        "Logra al menos 70 grados de flexión pasiva sin dolor significativo",
        "Edema postoperatorio en disminución progresiva",
        "Buena adherencia del paciente al programa de ejercicios domiciliarios",
      ],
      notas:
        "En fracturas en 4 partes o con compromiso del troquin que requirieron reparacion del subescapular, la rotación externa debe restringirse a 0 grados las primeras 4 semanas. Ajustar el protocolo según indicación específica del cirujano. La calidad ósea (osteoporosis) puede requerir una progresión más lenta.",
    },

    // =========================================================================
    // FASE 2: MOVILIDAD ACTIVA ASISTIDA PROGRESIVA (Semanas 2-6)
    // =========================================================================
    {
      id: "hp-rafi-fase-2",
      numero: 2,
      nombre: "Movilidad activa asistida progresiva",
      duracion: "Semanas 2-6",
      semanaInicio: 2,
      semanaFin: 6,
      objetivos: [
        "Progresar de ROM pasivo a ROM activo-asistido del hombro",
        "Restaurar la flexión anterior a 120-140 grados",
        "Iniciar rotación externa progresiva hasta 30-40 grados",
        "Mejorar el control neuromuscular del manguito rotador con isométricos suaves",
        "Recuperar el ritmo escapulohumeral adecuado",
        "Retiro progresivo del cabestrillo (semana 3-4 según evolucion clínica)",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "Retiro gradual del cabestrillo entre semana 3-4 según tolerancia y evidencia radiografica de consolidación. No levantar objetos superiores a 1 kg con la extremidad afectada.",
      romObjetivos: [
        {
          movimiento: "Flexión activa asistida",
          rangoObjetivo: "120-140 grados",
          restriccion:
            "Progresión gradual: 90-100 grados semana 3, 120 grados semana 4, 140 grados semana 6. Pasar a flexión activa libre cuando tolere.",
        },
        {
          movimiento: "Abducción activa asistida en plano escapular",
          rangoObjetivo: "90-120 grados",
          restriccion:
            "Siempre en el plano escapular. No forzar abducción en el plano coronal puro hasta semana 6.",
        },
        {
          movimiento: "Rotación externa activa asistida",
          rangoObjetivo: "30-40 grados",
          restriccion:
            "Con el brazo al costado del cuerpo. Progresar 5-10 grados por semana según tolerancia. Si se reparo subescapular, no superar 20 grados hasta semana 6.",
        },
        {
          movimiento: "Rotación interna activa asistida",
          rangoObjetivo: "Mano a region lumbar (L3-L5)",
          restriccion:
            "Progresión gradual. No forzar con movimientos pasivos agresivos.",
        },
      ],
      ejercicios: [
        {
          id: "hp-ej-flexion-activa-asistida-polea",
          nombre: "Flexión activa asistida con polea sobre puerta",
          descripcion:
            "Paciente sentado frente a una polea fijada en el marco superior de una puerta. Sujetar la cuerda con ambas manos. El brazo sano tracciona la cuerda para elevar el brazo afectado de forma asistida. Realizar la elevación de forma lenta y controlada, manteniendo la posición maxima tolerada durante 3-5 segúndos. Descender lentamente. Progresar el rango semanalmente según tolerancia.",
          repeticiones: "15 repeticiones, 3 series",
          frecuencia: "3 veces al día",
          precauciones: [
            "El brazo afectado no debe hacer fuerza activa hasta que el terapeuta lo indique",
            "No compensar con elevación del hombro (trapecio superior)",
            "Progresar el rango de forma gradual, no forzar",
          ],
          progresion:
            "A partir de semana 4, comenzar a utilizar fuerza activa del brazo afectado con asistencia minima de la polea",
        },
        {
          id: "hp-ej-deslizamiento-mesa",
          nombre: "Deslizamiento sobre mesa (table slides)",
          descripcion:
            "Paciente sentado frente a una mesa. Colocar la mano del brazo afectado sobre una toalla en la superficie de la mesa. Deslizar la mano hacia adelante (flexión), hacia los lados (abducción) y en diagonal, permitiendo que el tronco acompane el movimiento. La mesa soporta el peso del brazo, reduciendo la demanda muscular. Mantener la posición final 3-5 segúndos.",
          repeticiones: "12-15 repeticiones en cada direccion, 2-3 series",
          frecuencia: "3 veces al día",
          precauciones: [
            "Superficie resbaladiza para minimizar la friccion",
            "No levantar el brazo de la mesa",
            "Detenerse si aparece dolor en el sitio de fractura",
          ],
          progresion:
            "Progresar incrementando la distancia de deslizamiento semanalmente",
        },
        {
          id: "hp-ej-isometricos-rotadores",
          nombre: "Isométricos submaximos del manguito rotador",
          descripcion:
            "Paciente de pie o sentado con el codo flexiónado a 90 grados y pegado al cuerpo. 1) Rotación externa isométrica: presionar el dorso de la mano contra el marco de una puerta o pared, mantener 5 segúndos al 25-50% de la fuerza maxima. 2) Rotación interna isométrica: presionar la palma de la mano contra la pared, mantener 5 segúndos. 3) Abducción isométrica: presionar el codo lateralmente contra la pared. Las contracciónes deben ser suaves y sin dolor.",
          repeticiones:
            "10 repeticiones de cada direccion, manteniendo 5 segúndos, 2-3 series",
          frecuencia: "2 veces al día",
          precauciones: [
            "Solo contracciónes submaximás (25-50% de la fuerza)",
            "No iniciar antes de la semana 3 post-quirúrgica",
            "Detenerse si genera dolor en el sitio de fractura",
            "Codo siempre pegado al cuerpo durante los isométricos",
          ],
          progresion:
            "Incrementar la intensidad de la contracción gradualmente hasta el 75% de la fuerza maxima en semana 5-6",
        },
        {
          id: "hp-ej-elevacion-supino-activa",
          nombre: "Elevación activa asistida en supino con progresión",
          descripcion:
            "Paciente en decubito supino. Iniciar con elevación auto-asistida con la mano sana como en Fase 1. Progresivamente, reducir la asistencia del brazo sano y permitir que el brazo afectado realice más trabajo activo. El objetivo es la transicion a elevación activa libre en supino al final de esta fase. Mantener posición final 3 segúndos.",
          repeticiones: "12-15 repeticiones, 3 series",
          frecuencia: "3 veces al día",
          precauciones: [
            "Asegurar que no haya lag (retraso) del supraespinoso antes de progresar a activo libre",
            "Si hay compensación con trapecio superior, reducir el rango y mantener asistencia",
          ],
          progresion:
            "Semana 4-5: reducir asistencia al 50%. Semana 5-6: intentar elevación activa libre en supino.",
        },
        {
          id: "hp-ej-ritmo-escapular",
          nombre: "Ejercicios de ritmo escapulohumeral",
          descripcion:
            "Paciente de pie frente a un espejo. Realizar elevación del brazo en el plano escapular con asistencia del brazo sano, observando el movimiento en el espejo. Enfocarse en mantener la escapula deprimida (sin elevar el hombro) durante los primeros 60 grados de elevación, luego permitir la rotación escapular armonica. Corregir patrónes compensatorios como el hiking del hombro o la protrusion de la escapula.",
          repeticiones: "10 repeticiones lentas y controladas, 2 series",
          frecuencia: "2 veces al día",
          precauciones: [
            "Realizar frente al espejo para retroalimentacion visual",
            "Si no logra un patrón adecuado, continuar con ejercicios asistidos sin enfasis en el ritmo",
          ],
        },
      ],
      precauciones: [
        "No realizar movimientos de carga ni resistencia con el brazo afectado",
        "Evitar movimientos balisiticos o de lanzamiento",
        "No dormir sobre el hombro operado",
        "Mantener precaución con actividades bimanuales que requieran fuerza (abrir frascos, cargar bolsas)",
        "Vigilar signos de impingement subacromial con la progresión de la movilidad",
        "Continuar crioterapia post-ejercicio si hay inflamación residual",
      ],
      banderasRojas: [
        "Dolor nocturno que no mejora con la progresión del protocolo",
        "Incapacidad de iniciar la elevación activa (lag sign positivo persistente: posible lesión del supraespinoso o fallo del troquiter)",
        "Pérdida de rango de movimiento previamente alcanzado",
        "Crepitacion dolorosa con los movimientos",
        "Signos de complicación de la herida: dehiscencia, seroma persistente",
        "Radiografia de control que muestra migracion del material o pérdida de reducción",
      ],
      criteriosAvance: [
        "Radiografia a las 6 semanas con signos de consolidación ósea sin desplazamiento",
        "Flexión activa asistida >= 120 grados sin dolor significativo",
        "Rotación externa pasiva >= 30 grados",
        "Capacidad de iniciar la elevación activa en supino (sin lag significativo)",
        "Dolor EVA < 3/10 durante los ejercicios",
        "Buena activacion del deltoides y manguito rotador en la exploracion clínica",
      ],
      notas:
        "La velocidad de progresión depende de la calidad de la fijación y la consolidación radiografica. En pacientes osteoporoticos o con fijaciónes marginalmente estables, considerar retrasar la progresión 1-2 semanas. El retiro del cabestrillo debe ser gradual: primero en casa, luego en exteriores.",
    },

    // =========================================================================
    // FASE 3: MOVILIDAD ACTIVA COMPLETA Y FORTALECIMIENTO INICIAL (Semanas 6-10)
    // =========================================================================
    {
      id: "hp-rafi-fase-3",
      numero: 3,
      nombre: "Movilidad activa completa y fortalecimiento inicial",
      duracion: "Semanas 6-10",
      semanaInicio: 6,
      semanaFin: 10,
      objetivos: [
        "Alcanzar ROM activo completo del hombro en todos los planos",
        "Iniciar fortalecimiento progresivo con resistencia ligera",
        "Normalizar el ritmo escapulohumeral",
        "Iniciar ejercicios de cadena cinetica cerrada",
        "Mejorar la propiocepción y el control neuromuscular del hombro",
        "Reintegrar actividades funciónales livianas de la vida diaria",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "Se permite levantar objetos livianos (hasta 2-3 kg) con la extremidad afectada. No actividades de impacto ni carga pesada. Puede conducir vehiculo si tiene ROM funciónal y fuerza adecuada.",
      romObjetivos: [
        {
          movimiento: "Flexión activa",
          rangoObjetivo: "150-170 grados",
          restriccion:
            "El objetivo es alcanzar al menos el 80% de la flexión del lado contralateral. Movimiento activo libre.",
        },
        {
          movimiento: "Abducción activa",
          rangoObjetivo: "140-160 grados",
          restriccion:
            "Ahora se permite abducción en el plano coronal además del plano escapular.",
        },
        {
          movimiento: "Rotación externa activa",
          rangoObjetivo: "40-55 grados",
          restriccion:
            "Con el brazo al costado y también a 90 grados de abducción. Si hubo reparacion del subescapular, progresar con más cautela.",
        },
        {
          movimiento: "Rotación interna activa",
          rangoObjetivo: "Mano a T12-L1",
          restriccion: "Progresar la mano por la espalda semanalmente.",
        },
      ],
      ejercicios: [
        {
          id: "hp-ej-elevacion-activa-pie",
          nombre: "Elevación activa libre en bipedestacion",
          descripcion:
            "Paciente de pie con buena postura. Elevar el brazo afectado en flexión anterior y en el plano escapular de forma activa sin asistencia. Realizar el movimiento de forma lenta y controlada, enfocandose en mantener un buen ritmo escapulohumeral (sin hiking del hombro). Mantener la posición final 2-3 segúndos. Descender lentamente. Progresar hasta alcanzar elevación completa.",
          repeticiones: "12-15 repeticiones, 3 series",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "Si persiste lag sign, continuar con asistencia parcial",
            "Controlar la compensación del trapecio superior frente al espejo",
          ],
          progresion:
            "Agregar peso ligero (0.5-1 kg) a partir de la semana 8 si la técnica es correcta",
        },
        {
          id: "hp-ej-rotadores-banda",
          nombre: "Rotación externa e interna con banda elastica",
          descripcion:
            "Paciente de pie con el codo flexiónado a 90 grados y pegado al cuerpo. Fijar una banda elastica (resistencia ligera, color amarillo o rojo) a la altura del codo. Para rotación externa: rotar la mano hacia afuera contra la resistencia de la banda. Para rotación interna: rotar la mano hacia adentro. Realizar el movimiento de forma lenta, con fase concéntrica de 2 segúndos y excéntrica de 3-4 segúndos. Mantener el codo pegado al costado en todo momento.",
          repeticiones: "12-15 repeticiones, 3 series de cada direccion",
          frecuencia: "1 vez al día (dia alterno para permitir recuperacion)",
          precauciones: [
            "Iniciar con banda de resistencia minima (amarilla o sin color)",
            "El codo debe permanecer junto al cuerpo",
            "No compensar con movimientos del tronco",
            "Detenerse si hay dolor en el sitio de fractura",
          ],
          progresion:
            "Progresar el color/resistencia de la banda cada 2 semanas según tolerancia",
        },
        {
          id: "hp-ej-cadena-cerrada-pared",
          nombre: "Ejercicios de cadena cinetica cerrada en pared",
          descripcion:
            "Paciente de pie frente a una pared, a la distancia de un brazo. Colocar la mano del brazo afectado en la pared a la altura del hombro. Realizar: 1) Compresiones isométricas contra la pared (empujar suavemente, mantener 10 segúndos). 2) Circulos pequenos con la mano en la pared (reloj). 3) Flexiónes de pared suaves con ambas manos. Estos ejercicios estimulan la co-contracción de los estabilizadores del hombro en un entorno seguro.",
          repeticiones: "10 repeticiones de cada variante, 2-3 series",
          frecuencia: "1 vez al día",
          precauciones: [
            "No realizar si genera dolor en el hombro",
            "Mantener la escapula estabilizada durante los ejercicios",
            "Comenzar con la mano a la altura del hombro, no por encima de la cabeza",
          ],
          progresion:
            "Progresar la posición de la mano en la pared de nivel del hombro a por encima de la cabeza",
        },
        {
          id: "hp-ej-propiocepcion",
          nombre: "Propiocepción y estabilización ritmmica",
          descripcion:
            "Paciente en posición cuadrupeda (cuatro puntos) con apoyo sobre manos y rodillas. Transferir peso suavemente hacia el lado afectado y regresar. Progresar a apoyo unilateral elevando la mano sana brevemente. Alternativa: paciente de pie con la mano en una pelota de Swiss ball contra la pared, realizando perturbaciones ritmicas suaves (el terapeuta aplica pequenas fuerzas de perturbacion que el paciente debe controlar).",
          repeticiones:
            "Transferencias de peso: 10-15 repeticiones. Estabilizacion ritmica: 3 series de 30 segúndos",
          frecuencia: "1 vez al día",
          precauciones: [
            "En cuadrupeda, no cargar todo el peso sobre el brazo afectado inicialmente",
            "Si hay dolor, realizar solo las transferencias de peso sin apoyo completo",
          ],
          progresion:
            "Progresar a apoyo en superficie inestable (bosu o pelota) en semana 9-10",
        },
        {
          id: "hp-ej-deltoides-lateral",
          nombre: "Elevación lateral con mancuerna ligera",
          descripcion:
            "Paciente de pie con buena postura. Sostener una mancuerna ligera (0.5-1 kg) en la mano del brazo afectado. Elevar el brazo lateralmente en el plano escapular (30 grados anterior al plano coronal) hasta 90 grados. Realizar el movimiento lentamente (2 segúndos de subida, 3-4 segúndos de bajada). Enfocarse en iniciar el movimiento con el deltoides medio sin elevar el hombro.",
          repeticiones: "10-12 repeticiones, 2-3 series",
          frecuencia: "Dias alternos (3 veces por semana)",
          precauciones: [
            "No superar 90 grados de abducción con peso en esta fase",
            "Iniciar sin peso si no tolera la mancuerna",
            "Vigilar la compensación con el trapecio superior",
          ],
          progresion:
            "Incrementar peso 0.5 kg cada 2 semanas si la técnica es correcta y no hay dolor",
        },
      ],
      precauciones: [
        "No realizar actividades de impacto ni deportes de contacto",
        "Evitar movimientos repetitivos sobre la cabeza por periodos prolongados",
        "No levantar objetos pesados (> 3 kg) con el brazo afectado",
        "Continuar con estiramientos suaves post-ejercicio",
        "Aplicar hielo 15 minutos si hay inflamación post-ejercicio",
        "Radiografia de control a la semana 8 para confirmar consolidación progresiva",
      ],
      banderasRojas: [
        "Dolor que aumenta con el fortalecimiento (posible aflojamiento del material o impingement por la placa)",
        "Limitacion de la rotación externa que no progresa (posible capsulitis adhesiva)",
        "Debilidad persistente del deltoides (posible lesión del nervio axilar)",
        "Dolor nocturno persistente después de la semana 8",
        "Radiografia con signos de necrosis avascular de la cabeza humeral",
      ],
      criteriosAvance: [
        "Radiografia con consolidación ósea evidente (callo óseo visible, lineas de fractura borrosas)",
        "Flexión activa >= 140 grados",
        "Abducción activa >= 120 grados",
        "Rotación externa activa >= 40 grados",
        "Fuerza 4/5 en abducción y rotación externa (escala MRC)",
        "Dolor EVA < 2/10 durante actividades funciónales de la vida diaria",
        "Capacidad de realizar actividades basicas de la vida diaria sin limitacion significativa",
      ],
      notas:
        "La consolidación radiografica es el principal factor limitante para la progresión del fortalecimiento. Si a la semana 8 no hay signos claros de consolidación, mantener al paciente en Fase 2 con movilidad activa libre pero sin resistencia. Considerar estudio de laboratorio (calcio, vitamina D, fosfatasa alcalina) si la consolidación se retrasa.",
    },

    // =========================================================================
    // FASE 4: FORTALECIMIENTO AVANZADO Y RETORNO FUNCIONAL (Semanas 10-16)
    // =========================================================================
    {
      id: "hp-rafi-fase-4",
      numero: 4,
      nombre: "Fortalecimiento avanzado y retorno funciónal",
      duracion: "Semanas 10-16",
      semanaInicio: 10,
      semanaFin: 16,
      objetivos: [
        "Alcanzar ROM activo completo y simetrico con el lado contralateral",
        "Restaurar la fuerza muscular al 80-90% del lado sano",
        "Integrar actividades funciónales de la vida diaria sin restricciónes",
        "Reintegrar actividades laborales según demanda fisica",
        "Iniciar preparacion para retorno deportivo si aplica",
        "Lograr la independencia completa del paciente en su programa de mantenimiento",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "Se permite carga progresiva sin limite estricto, guiada por la tolerancia al dolor y la confirmacion radiografica de consolidación. Se permite levantamiento de objetos de hasta 5-10 kg. Actividades de impacto se permiten a partir de la semana 12 si hay consolidación completa.",
      romObjetivos: [
        {
          movimiento: "Flexión activa",
          rangoObjetivo: "170-180 grados (simetrico)",
          restriccion:
            "Debe alcanzar el rango completo del lado contralateral. Si no lo logra, considerar movilización articular y estiramientos capsulares.",
        },
        {
          movimiento: "Abducción activa",
          rangoObjetivo: "170-180 grados (simetrico)",
          restriccion:
            "Rango completo en plano coronal y escapular.",
        },
        {
          movimiento: "Rotación externa activa",
          rangoObjetivo: "55-70 grados (simetrico)",
          restriccion:
            "Con el brazo al costado y a 90 grados de abducción. Se permite stretching capsular posterior si hay deficit.",
        },
        {
          movimiento: "Rotación interna activa",
          rangoObjetivo: "Mano a T7-T10 (simetrico)",
          restriccion: "Debe ser simetrica con el lado contralateral.",
        },
      ],
      ejercicios: [
        {
          id: "hp-ej-fortalecimiento-progresivo-mancuernas",
          nombre: "Fortalecimiento progresivo con mancuernas",
          descripcion:
            "Serie de ejercicios con mancuernas de peso progresivo: 1) Flexión anterior completa (elevación frontal). 2) Elevación lateral en plano escapular. 3) Remo inclinado (bent-over row) para romboides y trapecio medio. 4) Press de hombro sentado (iniciar con poco peso, solo si la consolidación es completa). Realizar cada ejercicio con fase concéntrica de 2 segúndos y excéntrica de 4 segúndos para maximizar la estimulacion muscular.",
          repeticiones: "10-12 repeticiones, 3 series de cada ejercicio",
          frecuencia: "3 veces por semana (dias alternos)",
          precauciones: [
            "No realizar press de hombro hasta confirmar consolidación completa radiografica",
            "Progresar peso de forma gradual (no más de 1 kg por semana)",
            "Detenerse si hay dolor en el sitio de la placa",
          ],
          progresion:
            "Semana 10-12: 1-2 kg. Semana 12-14: 2-3 kg. Semana 14-16: 3-5 kg. Ajustar según fuerza del lado contralateral.",
        },
        {
          id: "hp-ej-rotadores-90-abduccion",
          nombre: "Rotación externa e interna a 90 grados de abducción",
          descripcion:
            "Paciente de pie o en decubito lateral. Brazo afectado en abducción a 90 grados con codo flexiónado a 90 grados. Realizar rotación externa (posición de lanzamiento) e interna contra gravedad o con mancuerna ligera. Este ejercicio fortalece el manguito rotador en una posición funciónalmente relevante. Controlar el movimiento de forma lenta en ambas fases.",
          repeticiones: "10-12 repeticiones, 3 series en cada direccion",
          frecuencia: "3 veces por semana",
          precauciones: [
            "Solo iniciar si el paciente tiene abducción activa completa sin dolor",
            "Comenzar sin peso, progresando a 0.5-1 kg",
            "No forzar la posición de maxima rotación externa",
          ],
          progresion:
            "Progresar de decubito lateral a posición vertical con banda elastica de mayor resistencia",
        },
        {
          id: "hp-ej-pliometria-leve",
          nombre: "Ejercicios pliometricos leves de miembro superior",
          descripcion:
            "1) Lanzamiento y recepcion de pelota medicinal ligera (0.5-1 kg) contra la pared a corta distancia. 2) Push-ups en pared con fase de despegue suave. 3) Lanzamiento de pelota de tenis contra el piso y recepcion. Estos ejercicios desarrollan potencia y preparacion para actividades deportivas y laborales que requieren movimientos rápidos.",
          repeticiones: "8-10 repeticiones, 2-3 series",
          frecuencia: "2 veces por semana (a partir de semana 12)",
          precauciones: [
            "Solo iniciar si la consolidación radiografica es completa",
            "No realizar con dolor",
            "Progresar la velocidad y la distancia de lanzamiento de forma gradual",
            "Contraindicado en pacientes con osteoporosis severa",
          ],
          progresion:
            "Incrementar peso de pelota medicinal y distancia de lanzamiento semanalmente",
        },
        {
          id: "hp-ej-funcional-laboral",
          nombre: "Entrenamiento funciónal específico",
          descripcion:
            "Ejercicios simulando actividades laborales y de vida diaria del paciente: 1) Alcanzar estantes altos y colocar objetos. 2) Levantar objetos desde el suelo hasta por encima de la cabeza. 3) Actividades de empuje y traccion. 4) Simulacion de actividades laborales específicas (herramientas, movimientos repetitivos, carga). Personalizar según la ocupacion y demandas del paciente.",
          repeticiones: "Series de 5-10 repeticiones de cada tarea funciónal",
          frecuencia: "Diario como parte de las actividades cotidianas",
          precauciones: [
            "Incrementar la complejidad y carga de forma progresiva",
            "Si la actividad laboral implica vibracion o impacto, iniciar de forma gradual",
          ],
          progresion:
            "Progresar hasta simular al 100% las demandas laborales antes del alta",
        },
        {
          id: "hp-ej-estiramiento-capsular",
          nombre: "Estiramientos capsulares y de partes blandas",
          descripcion:
            "1) Cross-body stretch (estiramiento de capsula posterior): llevar el brazo afectado horizontalmente frente al pecho con la mano sana empujando el codo hacia el cuerpo. Mantener 30 segúndos. 2) Sleeper stretch: decubito lateral sobre el brazo afectado, codo a 90 grados, empujar la mano hacia la camilla (rotación interna). 3) Estiramiento del pectoral menor en esquina de pared. 4) Estiramiento del trapecio superior con inclinacion lateral de la cabeza.",
          repeticiones: "3-4 repeticiones de cada estiramiento, mantener 30 segúndos",
          frecuencia: "2 veces al día (al despertar y antes de dormir)",
          precauciones: [
            "Estiramientos suaves y sostenidos, nunca balisticos",
            "No forzar si genera dolor en el hombro",
            "El sleeper stretch esta contraindicado si genera dolor anterior del hombro",
          ],
        },
      ],
      precauciones: [
        "La progresión del fortalecimiento debe basarse en la consolidación radiografica confirmada",
        "Deportes de contacto no antes de la semana 14 y con consolidación completa",
        "Actividades overhead repetitivas (natacion, tenis, voleibol) no antes de semana 14-16",
        "Informar al paciente que la recuperacion funciónal completa puede tardar hasta 6-12 meses",
        "Considerar retiro de material de osteosintesis si la placa genera impingement subacromial sintomatico (habitual en troquiter)",
        "El fortalecimiento excéntrico debe progresar antes que el concéntrico de alta intensidad",
      ],
      banderasRojas: [
        "Dolor persistente en el sitio de la placa con las actividades (posible irritacion por el material)",
        "Limitacion de ROM que no progresa (posible capsulitis adhesiva establecida)",
        "Disminucion súbita de la fuerza (posible fallo tardio de la fijación o rotura del manguito)",
        "Dolor severo con los ejercicios pliometricos (posible fractura de estres o aflojamiento)",
        "Signos radiograficos de necrosis avascular (colapso de la cabeza humeral)",
      ],
      criteriosAvance: [
        "Consolidación radiografica completa confirmada",
        "ROM activo simetrico con el lado contralateral (o deficit < 10%)",
        "Fuerza >= 4+/5 en todos los grupos musculares del hombro (escala MRC)",
        "Capacidad de realizar todas las actividades de la vida diaria sin dolor",
        "DASH score < 15 puntos o mejora > 50% respecto al valor postoperatorio",
        "Satisfaccion del paciente con el resultado funciónal",
        "Capacidad de levantar 5 kg por encima de la cabeza sin dolor",
      ],
      notas:
        "A las 16 semanas, la mayoria de los pacientes logran un resultado funciónal satisfactorio, pero la recuperacion completa puede extenderse hasta 6-12 meses, particularmente en fracturas complejas de 3-4 partes. Considerar derivacion a programa deportivo específico si el paciente desea retornar a actividad deportiva competitiva. El seguimiento a largo plazo debe incluir evaluación para retiro de material si hay sintomás de impingement.",
    },
  ],

  criteriosRetornoActividad: [
    "Consolidación radiografica completa de la fractura",
    "ROM activo del hombro >= 90% del lado contralateral",
    "Fuerza muscular >= 80% del lado contralateral (medida con dinamometro si es posible)",
    "Capacidad de realizar actividades de la vida diaria sin dolor ni limitacion",
    "DASH score < 15 puntos",
    "Constant-Murley score > 75 puntos",
    "Para trabajo de oficina: semana 6-8 con restricción de carga",
    "Para trabajo fisico moderado: semana 10-12 con restricciónes",
    "Para trabajo fisico pesado: semana 14-16 con consolidación completa",
    "Para deportes sin contacto: semana 12-14",
    "Para deportes de contacto o overhead: semana 16+ con consolidación completa y fuerza simetrica",
    "Para conducir vehiculo: cuando tenga ROM funciónal (flexión > 90 grados, rotación suficiente) y no tome analgesicos opioides",
  ],

  complicacionesPotenciales: [
    "Rigidez articular glenohumeral (capsulitis adhesiva secundaria) - incidencia 5-15%",
    "Necrosis avascular de la cabeza humeral - incidencia 3-14% según patrón de fractura y compromiso vascular",
    "Impingement subacromial por la placa (especialmente fijación del troquiter) - incidencia 10-30%",
    "Aflojamiento o fallo del material de osteosintesis - incidencia 5-12%",
    "Pseudoartrosis (falta de consolidación) - incidencia 1-5%",
    "Consolidación viciosa (malunion) con limitacion funciónal",
    "Lesión del nervio axilar (iatrogena o por la fractura) - incidencia 5-10%",
    "Infección del sitio quirurgico - incidencia 1-3%",
    "Perforacion articular de tornillos con dano condral",
    "Sindrome de dolor regional complejo (distrofia simpatica refleja)",
    "Tendinopatia o rotura del manguito rotador secundaria",
    "Artrosis postraumatica glenohumeral a largo plazo",
  ],

  referencias: [
    "ref-hodgson-2007",
    "ref-handoll-brorson-2015",
    "ref-launonen-2015",
    "ref-longo-2016",
    "ref-murray-2011",
    "ref-aaos-proximal-humerus-2015",
    "ref-neer-1970",
    "ref-hertel-2005",
    "ref-constant-murley-1987",
    "ref-olerud-2011",
    "ref-sudkamp-2009",
    "ref-sproul-2011",
  ],

  fechaActualizacion: "2026-03-31",

  nivelEvidencia:
    "Nivel II-III. Basado en ensayos clínicos controlados (Murray 2011), revisiones sistematicas Cochrane (Handoll & Brorson 2015), guias de practica clínica AAOS (2015), y consenso de expertos. La evidencia de alta calidad sobre protocolos de rehabilitación específicos post-RAFI de húmero proximal es limitada; la mayoria de las recomendaciones se basan en series de casos, estudios comparativos y opinion de expertos.",
};
