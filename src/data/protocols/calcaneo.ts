import type { Protocol } from "@/types/protocol";

export const calcaneoRAFI: Protocol = {
  id: "calcaneo-rafi",
  nombre:
    "Protocolo de Rehabilitación Post-RAFI de Fractura de Calcáneo",
  nombreCorto: "RAFI Calcáneo",
  descripcion:
    "Protocolo de rehabilitación basado en evidencia para el manejo postquirúrgico de fracturas intraarticulares de calcáneo tratadas mediante reducción abierta y fijación interna (RAFI) con placa y tornillos. Clasificación según Sanders (tipos I-IV). El protocolo contempla un periodo prolongado sin carga (8-10 semanas), recuperación de arcos de movimiento subtalar y del tobillo, y retorno funcional en 16 semanas. Se enfatiza la importancia de la movilización temprana de la articulación subtalar para prevenir rigidez.",
  region: "miembro-inferior",
  localizacion: "pie",
  abordajeQuirurgico: ["RAFI", "placa"],
  clasificaciones: [
    "Sanders I: Fractura no desplazada (generalmente tratamiento conservador)",
    "Sanders II: Fractura con 2 fragmentos articulares (IIA, IIB, IIC)",
    "Sanders III: Fractura con 3 fragmentos articulares (depresión central)",
    "Sanders IV: Fractura conminuta con >3 fragmentos articulares",
    "Essex-Lopresti: tipo lengua y tipo depresión articular",
  ],
  indicacionesQuirurgicas: [
    "Fractura intraarticular desplazada (Sanders II-IV)",
    "Desplazamiento articular >2 mm en la faceta posterior",
    "Pérdida de altura del calcáneo (ángulo de Böhler <20 grados)",
    "Ensanchamiento del calcáneo con impacto en peroné",
    "Fractura luxación calcáneo-cuboidea",
    "Fractura abierta que requiere fijación estable",
  ],
  duracionTotal: "16 semanas",
  semanasTotal: 16,
  fases: [
    // =====================================================================
    // FASE 1: PROTECCIÓN E INFLAMACIÓN CONTROLADA (Semanas 0-2)
    // =====================================================================
    {
      id: "calcaneo-rafi-fase-1",
      numero: 1,
      nombre: "Protección postquirúrgica e inflamación controlada",
      duracion: "Semanas 0-2",
      semanaInicio: 0,
      semanaFin: 2,
      objetivos: [
        "Control del dolor y edema postquirúrgico (prioridad crítica en calcáneo)",
        "Protección de la herida quirúrgica (abordaje lateral extenso con alto riesgo de dehiscencia)",
        "Inicio temprano de movilización de articulaciones adyacentes",
        "Prevención de TVP",
        "Educación sobre restricción estricta de carga",
      ],
      estadoCarga: "sin-carga",
      cargaPorcentaje: 0,
      cargaDetalle:
        "Sin apoyo absoluto del pie operado. Deambulación con muletas axilares o andadera. Férula posterior con pie en posición neutra. Elevación estricta del pie por encima del nivel del corazón.",
      romObjetivos: [
        {
          movimiento: "Flexión dorsal de tobillo",
          rangoObjetivo: "Posición neutra (0 grados en férula)",
          restriccion:
            "No movilizar tobillo activamente en las primeras 2 semanas si la herida no lo permite.",
        },
        {
          movimiento: "Flexión plantar de tobillo",
          rangoObjetivo: "Posición neutra en férula",
          restriccion:
            "Inmovilización en férula posterior.",
        },
        {
          movimiento: "Movilidad de dedos del pie",
          rangoObjetivo: "Rango completo activo",
        },
        {
          movimiento: "Flexión/extensión de rodilla",
          rangoObjetivo: "0-130 grados (rango completo)",
        },
      ],
      ejercicios: [
        {
          id: "calc-f1-e1",
          nombre: "Movilización activa de dedos del pie",
          descripcion:
            "Realizar flexión y extensión activa de todos los dedos del pie operado. Incluir separación (abducción) y aproximación (aducción) de los dedos. Este ejercicio mantiene la movilidad de las articulaciones metatarsofalángicas, favorece la circulación y previene adherencias de los tendones flexores y extensores.",
          repeticiones: "15 repeticiones x 3 series",
          frecuencia: "4-5 veces al día",
          precauciones: [
            "No generar movimiento en el retropié",
            "Suspender si causa dolor en la herida quirúrgica lateral",
          ],
          progresion:
            "Agregar ejercicios de agarre con toalla (towel scrunches) a partir de la semana 2 si la herida lo permite.",
        },
        {
          id: "calc-f1-e2",
          nombre: "Contracciones isométricas de cuádriceps y glúteos",
          descripcion:
            "En decúbito supino, contraer cuádriceps (presionando rodilla hacia la camilla) y glúteos de forma alternada. Mantener cada contracción 6 segundos. Estos ejercicios mantienen la activación neuromuscular del miembro inferior y previenen la atrofia por desuso.",
          repeticiones: "15 repeticiones x 3 series de cada grupo",
          frecuencia: "3-4 veces al día",
        },
        {
          id: "calc-f1-e3",
          nombre: "Elevación de pierna recta (SLR) en 4 planos",
          descripcion:
            "En decúbito supino, elevar la pierna operada con rodilla extendida hasta 45 grados de flexión de cadera. Mantener 5 segundos y descender. Realizar en flexión, abducción, aducción y extensión de cadera. Mantener el pie en posición neutra durante el ejercicio.",
          repeticiones: "10 repeticiones x 3 series por plano",
          frecuencia: "2 veces al día",
          precauciones: [
            "Mantener el pie en posición neutra (no forzar dorsiflexión ni plantiflexión)",
            "No apoyar el pie operado",
          ],
          progresion:
            "Agregar peso en tobillera (0.5-1 kg) a partir de la semana 2.",
        },
        {
          id: "calc-f1-e4",
          nombre: "Ejercicios de miembro superior y contralateral",
          descripcion:
            "Realizar ejercicios de fortalecimiento de miembros superiores (flexiones de bíceps, extensiones de tríceps con bandas) y del miembro inferior contralateral (sentadilla unipodal, elevación de talón) para mantener la condición física general y facilitar la deambulación con muletas.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "Diario",
        },
      ],
      precauciones: [
        "Elevación estricta del pie por encima del corazón: la tumefacción del calcáneo es intensa y prolongada",
        "No retirar la férula hasta indicación del cirujano",
        "Vigilar estrictamente la herida quirúrgica lateral: alto riesgo de necrosis cutánea y dehiscencia",
        "No aplicar hielo directamente sobre la herida (usar barrera)",
        "Crioterapia 15-20 minutos cada 2 horas durante los primeros días",
        "Profilaxis antitrombótica según indicación médica",
      ],
      banderasRojas: [
        "Necrosis cutánea o dehiscencia de herida quirúrgica lateral (complicación frecuente)",
        "Ampollas por tensión cutánea excesiva",
        "Signos de infección: eritema progresivo, secreción purulenta, fiebre",
        "Signos de síndrome compartimental del pie: dolor desproporcionado, parestesias",
        "Signos de TVP: edema unilateral de pantorrilla",
        "Dolor que no cede con analgesia habitual",
      ],
      criteriosAvance: [
        "Herida quirúrgica en adecuada cicatrización (sin dehiscencia ni necrosis)",
        "Edema controlado con elevación",
        "Control del dolor (EVA ≤3 en reposo)",
        "Movilidad activa completa de dedos del pie",
        "Capacidad de realizar SLR sin dificultad",
      ],
    },
    // =====================================================================
    // FASE 2: MOVILIDAD TEMPRANA SIN CARGA (Semanas 2-6)
    // =====================================================================
    {
      id: "calcaneo-rafi-fase-2",
      numero: 2,
      nombre: "Movilización temprana sin carga",
      duracion: "Semanas 2-6",
      semanaInicio: 2,
      semanaFin: 6,
      objetivos: [
        "Inicio de movilización activa asistida de tobillo y articulación subtalar",
        "Prevención de rigidez de la articulación subtalar (complicación frecuente)",
        "Mantener flexibilidad del tendón de Aquiles",
        "Continuar fortalecimiento de cadera y rodilla",
        "Control progresivo del edema",
      ],
      estadoCarga: "sin-carga",
      cargaPorcentaje: 0,
      cargaDetalle:
        "Sin carga absoluta. Continuar deambulación con muletas. Retiro de férula para ejercicios de movilización con autorización del cirujano. Uso de bota Walker para protección fuera de las sesiones de ejercicio.",
      romObjetivos: [
        {
          movimiento: "Flexión dorsal de tobillo",
          rangoObjetivo: "0-10 grados",
          restriccion:
            "Progresión gradual. No forzar si genera dolor en el sitio quirúrgico.",
        },
        {
          movimiento: "Flexión plantar de tobillo",
          rangoObjetivo: "0-30 grados",
        },
        {
          movimiento: "Inversión subtalar",
          rangoObjetivo: "0-15 grados",
          restriccion:
            "Movilización suave; la articulación subtalar es la más afectada por la fractura de calcáneo.",
        },
        {
          movimiento: "Eversión subtalar",
          rangoObjetivo: "0-10 grados",
        },
      ],
      ejercicios: [
        {
          id: "calc-f2-e1",
          nombre: "Movilización activa asistida de tobillo",
          descripcion:
            "Sentado con la pierna colgando del borde de la camilla, realizar movimientos de flexión dorsal y plantar del tobillo de forma lenta y controlada. Asistir el movimiento con las manos si es necesario. Realizar también circunducción del tobillo en ambas direcciones. El objetivo es restaurar la movilidad tibiotalar.",
          repeticiones: "15 repeticiones x 3 series en cada dirección",
          frecuencia: "3-4 veces al día",
          precauciones: [
            "No forzar el rango; progresar según tolerancia",
            "Suspender si genera dolor en la herida lateral",
          ],
          progresion:
            "Progresar a movilización activa sin asistencia y contra gravedad.",
        },
        {
          id: "calc-f2-e2",
          nombre: "Movilización subtalar (inversión/eversión)",
          descripcion:
            "Sentado con el pie fuera del borde de la camilla, realizar movimientos suaves de inversión y eversión del retropié. El terapeuta puede asistir el movimiento inicialmente. La movilización temprana de la articulación subtalar es fundamental para prevenir rigidez, que es la complicación más frecuente tras fractura de calcáneo.",
          repeticiones: "10 repeticiones x 3 series en cada dirección",
          frecuencia: "3-4 veces al día",
          precauciones: [
            "Movimiento suave y controlado; no forzar",
            "El rango subtalar puede estar muy limitado inicialmente por la fractura",
            "No realizar movilización pasiva agresiva",
          ],
          progresion:
            "Incrementar amplitud conforme la consolidación y tolerancia lo permitan.",
        },
        {
          id: "calc-f2-e3",
          nombre: "Estiramiento del tendón de Aquiles sin carga",
          descripcion:
            "Sentado con la pierna extendida, usar una banda elástica o toalla alrededor del antepié para realizar dorsiflexión pasiva del tobillo. Mantener el estiramiento 20-30 segundos. Este ejercicio previene la contractura del tendón de Aquiles por la inmovilización prolongada.",
          repeticiones: "5 repeticiones de 20-30 segundos",
          frecuencia: "3 veces al día",
          precauciones: [
            "Estiramiento suave; no forzar dorsalflexión máxima",
            "No realizar si genera dolor en el calcáneo",
          ],
          progresion:
            "Incrementar duración del estiramiento y amplitud de dorsiflexión.",
        },
        {
          id: "calc-f2-e4",
          nombre: "Ejercicios intrínsecos del pie (towel scrunches)",
          descripcion:
            "Sentado con el pie sobre una toalla en el suelo (sin cargar peso), intentar arrugar la toalla con los dedos del pie. Alternar con ejercicios de separación de dedos y agarre de canicas. Estos ejercicios fortalecen la musculatura intrínseca del pie y mejoran la propiocepción plantar.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "Sin carga de peso; realizar sentado",
            "No forzar si hay dolor en la planta del pie",
          ],
          progresion:
            "Progresar a ejercicios con resistencia (banda elástica) para los dedos.",
        },
      ],
      precauciones: [
        "Estrictamente sin carga durante toda esta fase",
        "Usar bota Walker para protección entre sesiones de ejercicio",
        "Continuar elevación del pie para control de edema",
        "Vigilar cicatrización de herida lateral",
        "No caminar descalzo ni apoyar el pie inadvertidamente",
      ],
      banderasRojas: [
        "Problemas de cicatrización de herida quirúrgica (dehiscencia tardía)",
        "Dolor creciente en el calcáneo con la movilización",
        "Edema progresivo que no responde a elevación",
        "Pérdida de movilidad de dedos (síndrome compartimental crónico)",
        "Signos de infección profunda",
      ],
      criteriosAvance: [
        "Herida quirúrgica completamente cicatrizada",
        "Dorsiflexión de tobillo ≥5 grados",
        "Movilidad subtalar en progresión (inversión/eversión activa presente)",
        "Edema controlado",
        "Evidencia radiográfica de consolidación incipiente",
      ],
    },
    // =====================================================================
    // FASE 3: CARGA PROGRESIVA (Semanas 6-10)
    // =====================================================================
    {
      id: "calcaneo-rafi-fase-3",
      numero: 3,
      nombre: "Inicio de carga progresiva",
      duracion: "Semanas 6-10",
      semanaInicio: 6,
      semanaFin: 10,
      objetivos: [
        "Inicio de carga parcial progresiva (según consolidación radiográfica)",
        "Mejorar rango de movimiento de tobillo y subtalar",
        "Fortalecimiento de musculatura peronea y tibial posterior",
        "Inicio de entrenamiento propioceptivo con carga",
        "Normalizar patrón de marcha progresivamente",
      ],
      estadoCarga: "carga-parcial",
      cargaPorcentaje: 25,
      cargaDetalle:
        "Inicio de carga parcial al 25% con bota Walker a partir de la semana 8-10, según consolidación radiográfica. Progresión gradual usando báscula para verificar carga. Muletas obligatorias. Algunos cirujanos difieren la carga hasta la semana 10-12.",
      romObjetivos: [
        {
          movimiento: "Flexión dorsal de tobillo",
          rangoObjetivo: "0-15 grados",
        },
        {
          movimiento: "Flexión plantar de tobillo",
          rangoObjetivo: "0-40 grados",
        },
        {
          movimiento: "Inversión subtalar",
          rangoObjetivo: "0-20 grados",
        },
        {
          movimiento: "Eversión subtalar",
          rangoObjetivo: "0-10 grados",
        },
      ],
      ejercicios: [
        {
          id: "calc-f3-e1",
          nombre: "Ejercicios de fortalecimiento con banda elástica",
          descripcion:
            "Sentado, colocar banda elástica alrededor del antepié. Realizar dorsiflexión, plantiflexión, inversión y eversión contra la resistencia de la banda. Mantener la contracción 3 segundos en cada dirección. Este ejercicio fortalece los peroneos, tibial anterior y tibial posterior, esenciales para la estabilidad del retropié.",
          repeticiones: "12 repeticiones x 3 series en cada dirección",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "Usar resistencia ligera inicialmente",
            "No forzar inversión si genera dolor en el calcáneo",
          ],
          progresion:
            "Incrementar resistencia de la banda cada 1-2 semanas.",
        },
        {
          id: "calc-f3-e2",
          nombre: "Transferencias de peso bipodal controladas",
          descripcion:
            "De pie con apoyo de barra paralela o andadera, transferir peso gradualmente del lado sano al lado operado. Usar báscula bajo el pie operado para cuantificar la carga. Iniciar con 25% del peso corporal y progresar según tolerancia y consolidación.",
          repeticiones: "10 transferencias x 3 series",
          frecuencia: "2 veces al día",
          precauciones: [
            "No exceder el porcentaje de carga indicado por el cirujano",
            "Usar bota Walker durante las transferencias de peso",
            "Suspender si genera dolor en el talón",
          ],
          progresion:
            "Incrementar porcentaje de carga en 10% semanal según tolerancia.",
        },
        {
          id: "calc-f3-e3",
          nombre: "Movilización activa de tobillo en piscina (hidroterapia)",
          descripcion:
            "En piscina terapéutica con agua a la altura del pecho, realizar marcha en el agua y ejercicios de movilización del tobillo. La flotabilidad reduce la carga sobre el calcáneo mientras permite movilización funcional. Realizar dorsiflexión, plantiflexión y circunducción del tobillo.",
          repeticiones: "15-20 minutos por sesión",
          frecuencia: "2-3 veces por semana",
          precauciones: [
            "Solo si la herida está completamente cicatrizada",
            "No realizar en piscina pública; usar piscina terapéutica con agua controlada",
          ],
          progresion:
            "Progresar a marcha en agua menos profunda para incrementar carga gradualmente.",
        },
        {
          id: "calc-f3-e4",
          nombre: "Estiramiento del tendón de Aquiles con carga parcial",
          descripcion:
            "De pie frente a la pared con el pie operado atrás, inclinar el cuerpo hacia adelante manteniendo el talón en el suelo. Mantener el estiramiento 20-30 segundos. Realizar con rodilla extendida (gastrocnemio) y flexionada (sóleo). Carga parcial según tolerancia.",
          repeticiones: "5 repeticiones de 30 segundos por posición",
          frecuencia: "3 veces al día",
          precauciones: [
            "Carga parcial solamente; no cargar peso completo sobre el talón",
            "No forzar la dorsiflexión máxima",
          ],
          progresion:
            "Incrementar duración e intensidad del estiramiento conforme la carga aumente.",
        },
      ],
      precauciones: [
        "La carga parcial solo se inicia con confirmación radiográfica de consolidación",
        "El inicio de carga varía entre cirujanos: 8-12 semanas postquirúrgicas",
        "Usar bota Walker para deambulación con carga",
        "Vigilar dolor en el talón con la carga: es normal sensibilidad, pero no dolor intenso",
        "Continuar con medias de compresión para control de edema",
      ],
      banderasRojas: [
        "Dolor intenso en el talón con la carga parcial",
        "Pérdida de consolidación radiográfica",
        "Edema severo que no responde a elevación y compresión",
        "Deformidad progresiva del retropié (varo o valgo)",
        "Dolor lateral persistente por impacto peroneal (calcaneal widening)",
      ],
      criteriosAvance: [
        "Tolerancia a carga parcial al 50% sin dolor significativo",
        "Dorsiflexión de tobillo ≥10 grados",
        "Movilidad subtalar en progresión",
        "Consolidación radiográfica adecuada",
        "Marcha con patrón aceptable en bota Walker con muletas",
      ],
    },
    // =====================================================================
    // FASE 4: FORTALECIMIENTO Y CARGA COMPLETA (Semanas 10-14)
    // =====================================================================
    {
      id: "calcaneo-rafi-fase-4",
      numero: 4,
      nombre: "Fortalecimiento progresivo y carga completa",
      duracion: "Semanas 10-14",
      semanaInicio: 10,
      semanaFin: 14,
      objetivos: [
        "Progresión a carga completa y retiro de bota Walker",
        "Transición a calzado con plantilla ortopédica",
        "Fortalecimiento avanzado de musculatura del tobillo y pie",
        "Mejorar propiocepción y equilibrio",
        "Restaurar patrón de marcha normal",
      ],
      estadoCarga: "carga-progresiva",
      cargaPorcentaje: 75,
      cargaDetalle:
        "Carga progresiva del 75-100%. Transición de bota Walker a calzado con plantilla de soporte de arco. Retiro progresivo de muletas. Marcha independiente como meta al final de la fase.",
      romObjetivos: [
        {
          movimiento: "Flexión dorsal de tobillo",
          rangoObjetivo: "0-20 grados",
        },
        {
          movimiento: "Flexión plantar de tobillo",
          rangoObjetivo: "0-45 grados",
        },
        {
          movimiento: "Inversión subtalar",
          rangoObjetivo: "0-25 grados",
          restriccion:
            "El rango subtalar puede quedar permanentemente limitado tras fractura de calcáneo.",
        },
        {
          movimiento: "Eversión subtalar",
          rangoObjetivo: "0-15 grados",
        },
      ],
      ejercicios: [
        {
          id: "calc-f4-e1",
          nombre: "Elevación de talón bilateral progresiva",
          descripcion:
            "De pie con apoyo bilateral, elevar ambos talones poniéndose de puntillas. Mantener 3 segundos y descender lentamente. Iniciar con apoyo en barra y progresar a ejercicio sin apoyo. Enfatizar el control excéntrico en el descenso para fortalecer el complejo gastrocnemio-sóleo.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "Diario",
          precauciones: [
            "Puede generar molestias en el talón inicialmente; progresar según tolerancia",
            "No realizar unipodal hasta tolerar bilateral sin dolor",
          ],
          progresion:
            "Progresar a elevación de talón unipodal sobre la pierna operada.",
        },
        {
          id: "calc-f4-e2",
          nombre: "Entrenamiento de marcha en terreno variado",
          descripcion:
            "Practicar marcha en diferentes superficies: piso liso, césped, arena, terreno inclinado. Enfatizar apoyo de talón, despegue con antepié y longitud de paso simétrica. Usar calzado con plantilla ortopédica de soporte. Este entrenamiento prepara al pie para las demandas funcionales reales.",
          repeticiones: "15-20 minutos por sesión",
          frecuencia: "Diario",
          precauciones: [
            "Iniciar en superficie lisa y progresar a irregular",
            "Usar calzado con soporte y amortiguación adecuada",
          ],
          progresion:
            "Incrementar distancia, velocidad y complejidad del terreno.",
        },
        {
          id: "calc-f4-e3",
          nombre: "Equilibrio unipodal sobre pierna operada",
          descripcion:
            "De pie sobre la pierna operada, mantener equilibrio 30 segundos. Iniciar con ojos abiertos y superficie estable. Progresar a ojos cerrados y superficie inestable (cojín propioceptivo). Tener apoyo cercano para seguridad.",
          repeticiones: "5 repeticiones de 30 segundos x 3 series",
          frecuencia: "Diario",
          precauciones: [
            "Tener punto de apoyo cercano",
            "Usar calzado durante el ejercicio",
          ],
          progresion:
            "Progresar a superficie inestable y perturbaciones externas.",
        },
        {
          id: "calc-f4-e4",
          nombre: "Ejercicios de fortalecimiento intrínseco del pie avanzados",
          descripcion:
            "Realizar ejercicios de short foot (acortamiento del arco plantar activo), agarre de canicas con los dedos, caminata de puntillas y talones, y ejercicios con banda elástica para inversores y eversores. Fortalecer la musculatura intrínseca es esencial para restaurar el arco plantar y la función del pie.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "Diario",
          precauciones: [
            "Realizar descalzo en superficie limpia",
            "No forzar si genera dolor en la planta del pie",
          ],
          progresion:
            "Incrementar complejidad y tiempo de los ejercicios.",
        },
      ],
      precauciones: [
        "Usar plantilla ortopédica con soporte de arco longitudinal en el calzado",
        "El edema vespertino es normal y puede persistir meses; usar medias de compresión",
        "Evitar calzado rígido o sin amortiguación",
        "No caminar descalzo en superficies duras",
        "La sensibilidad del talón a la carga es frecuente y puede ser prolongada",
      ],
      banderasRojas: [
        "Dolor intenso en talón que limita la marcha",
        "Deformidad progresiva del retropié",
        "Atrapamiento de nervio sural (dolor lateral del pie persistente)",
        "Falla del material de osteosíntesis",
        "Impacto subtalar doloroso con inversión/eversión",
      ],
      criteriosAvance: [
        "Carga completa sin dolor significativo",
        "Marcha independiente con patrón aceptable",
        "Dorsiflexión de tobillo ≥15 grados",
        "Capacidad de elevación de talón bilateral sin dolor",
        "Equilibrio unipodal ≥15 segundos",
      ],
    },
    // =====================================================================
    // FASE 5: RETORNO FUNCIONAL (Semanas 14-16+)
    // =====================================================================
    {
      id: "calcaneo-rafi-fase-5",
      numero: 5,
      nombre: "Retorno funcional y reintegración",
      duracion: "Semanas 14-16+",
      semanaInicio: 14,
      semanaFin: 16,
      objetivos: [
        "Retorno a actividades de la vida diaria sin restricciones",
        "Reintegración laboral (considerar demanda física del trabajo)",
        "Optimización de la movilidad subtalar residual",
        "Adaptación funcional a limitaciones residuales si las hay",
        "Evaluar necesidad de ortesis a largo plazo",
      ],
      estadoCarga: "carga-completa",
      cargaPorcentaje: 100,
      cargaDetalle:
        "Carga completa sin restricciones. Calzado con plantilla ortopédica recomendada. Actividades de bajo impacto permitidas.",
      romObjetivos: [
        {
          movimiento: "Flexión dorsal de tobillo",
          rangoObjetivo: "≥20 grados (o máximo alcanzable)",
        },
        {
          movimiento: "Flexión plantar de tobillo",
          rangoObjetivo: "0-45 grados",
        },
        {
          movimiento: "Inversión/eversión subtalar",
          rangoObjetivo: "Máximo alcanzable (frecuentemente limitado de forma permanente)",
        },
      ],
      ejercicios: [
        {
          id: "calc-f5-e1",
          nombre: "Elevación de talón unipodal",
          descripcion:
            "De pie sobre la pierna operada únicamente, elevar el talón poniéndose de puntillas. Mantener 3 segundos y descender controladamente. Este ejercicio evalúa y entrena la fuerza funcional del tríceps sural y es un marcador clave de recuperación tras fractura de calcáneo.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "Diario",
          precauciones: [
            "Solo realizar si tolera elevación bilateral sin dolor",
            "Tener apoyo disponible",
          ],
          progresion:
            "Incrementar repeticiones y agregar peso externo.",
        },
        {
          id: "calc-f5-e2",
          nombre: "Caminata en cinta con inclinación",
          descripcion:
            "Caminar en cinta rodante a velocidad cómoda. Progresar con inclinación ascendente (5-10%) para fortalecer la musculatura posterior de la pierna y estirar el tendón de Aquiles funcionalmente. Mantener patrón de marcha simétrico.",
          repeticiones: "20-30 minutos",
          frecuencia: "5 veces por semana",
          precauciones: [
            "No correr en esta fase",
            "Usar calzado con amortiguación adecuada",
          ],
          progresion:
            "Incrementar velocidad e inclinación progresivamente.",
        },
        {
          id: "calc-f5-e3",
          nombre: "Ejercicios pliométricos suaves bilaterales",
          descripcion:
            "Solo si la consolidación es completa: realizar saltos bilaterales suaves sobre superficie amortiguada. Aterrizar con rodillas y tobillos semiflexionados. Progresar con cautela dado el riesgo de artrosis subtalar postraumática.",
          repeticiones: "8-10 repeticiones x 3 series",
          frecuencia: "2 veces por semana",
          precauciones: [
            "Solo con consolidación completa confirmada",
            "Usar calzado con excelente amortiguación",
            "Superficie blanda obligatoria",
            "Suspender si genera dolor en el talón",
          ],
          progresion:
            "Progresar con extrema cautela. Muchos pacientes con fractura de calcáneo no recuperan capacidad pliométrica completa.",
        },
      ],
      precauciones: [
        "La recuperación completa tras fractura de calcáneo puede tomar 1-2 años",
        "Rigidez subtalar residual es frecuente y puede ser permanente",
        "Usar plantilla ortopédica a largo plazo si hay pérdida de arco plantar",
        "Evaluar necesidad de artrodesis subtalar si persiste dolor intratable",
        "El edema vespertino puede persistir 6-12 meses",
        "Deportes de impacto pueden estar contraindicados permanentemente",
      ],
      banderasRojas: [
        "Dolor crónico intratable del talón (posible artrosis subtalar)",
        "Deformidad en varo o valgo del retropié progresiva",
        "Atrapamiento del nervio sural persistente",
        "Tendinopatía de peroneos por impacto calcáneo-peroneal",
        "Fascitis plantar postraumática",
      ],
      criteriosAvance: [
        "Marcha independiente normalizada",
        "Capacidad de elevación de talón unipodal",
        "Independencia en actividades de la vida diaria",
        "Satisfacción funcional del paciente",
        "AOFAS Hindfoot Score ≥70 puntos",
      ],
    },
  ],
  criteriosRetornoActividad: [
    "Consolidación radiográfica completa de la fractura de calcáneo",
    "Marcha independiente con patrón normalizado",
    "Dorsiflexión de tobillo ≥15 grados",
    "Capacidad de elevación de talón unipodal (indicador clave)",
    "Sin dolor significativo con carga completa en actividades cotidianas",
    "AOFAS Hindfoot Score ≥70 puntos",
    "Uso de calzado convencional con plantilla ortopédica",
    "Equilibrio unipodal ≥20 segundos",
  ],
  complicacionesPotenciales: [
    "Artrosis subtalar postraumática (complicación más frecuente a largo plazo, 15-30%)",
    "Rigidez subtalar permanente",
    "Problemas de cicatrización de herida quirúrgica (necrosis cutánea, dehiscencia)",
    "Infección del sitio quirúrgico",
    "Pérdida de altura del calcáneo (ángulo de Böhler inadecuado)",
    "Ensanchamiento del calcáneo con impacto peroneal",
    "Atrapamiento del nervio sural",
    "Dolor crónico del talón (talalgia residual)",
    "Pérdida del arco plantar longitudinal",
    "Necesidad de artrodesis subtalar secundaria (5-15%)",
    "Síndrome de dolor regional complejo",
    "Tendinopatía peroneal por impacto",
  ],
  referencias: [
    "ref-buckley-2002",
    "ref-sanders-2000",
    "ref-bhandari-2017",
    "ref-rammelt-2004",
    "ref-agren-2013",
  ],
  fechaActualizacion: "2025-06-15",
  nivelEvidencia: "Nivel I-II: Ensayo clínico controlado (Buckley 2002) y revisiones sistemáticas",
};
