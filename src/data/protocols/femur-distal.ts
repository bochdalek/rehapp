import type { Protocol } from "@/types/protocol";

export const femurDistalRAFI: Protocol = {
  id: "femur-distal-rafi",
  nombre:
    "Protocolo de Rehabilitación Post-RAFI de Fractura de Fémur Distal con Placa Bloqueada",
  nombreCorto: "RAFI Fémur Distal",
  descripcion:
    "Protocolo de rehabilitación basado en evidencia para el manejo postquirúrgico de fracturas de fémur distal (supracondíleas e intercondíleas) tratadas mediante reducción abierta y fijación interna (RAFI) con placa bloqueada. Incluye fracturas clasificadas según la AO/OTA como 33-A, 33-B y 33-C. El protocolo contempla progresión gradual de carga, recuperación de arcos de movimiento de rodilla y retorno funcional en 16 semanas.",
  region: "miembro-inferior",
  localizacion: "rodilla",
  abordajeQuirurgico: ["RAFI", "placa"],
  clasificaciones: [
    "AO/OTA 33-A: Fractura extraarticular del fémur distal",
    "AO/OTA 33-B: Fractura parcialmente articular (unicondilar)",
    "AO/OTA 33-C: Fractura articular completa (bicondílea)",
    "Müller tipo A1-A3: Fracturas simples a conminutas extraarticulares",
    "Müller tipo C1-C3: Fracturas articulares simples a conminutas",
  ],
  indicacionesQuirurgicas: [
    "Fractura desplazada del fémur distal con compromiso articular",
    "Fractura supracondílea inestable con acortamiento >2 cm",
    "Fractura intercondílea desplazada (tipo C de AO/OTA)",
    "Fractura periprotésica distal al componente femoral",
    "Falla del tratamiento conservador con pérdida de reducción",
    "Fractura abierta que requiere fijación estable",
  ],
  duracionTotal: "16 semanas",
  semanasTotal: 16,
  fases: [
    // =====================================================================
    // FASE 1: PROTECCIÓN POSTQUIRÚRGICA (Semanas 0-4)
    // =====================================================================
    {
      id: "femur-distal-rafi-fase-1",
      numero: 1,
      nombre: "Protección postquirúrgica e inflamación controlada",
      duracion: "Semanas 0-4",
      semanaInicio: 0,
      semanaFin: 4,
      objetivos: [
        "Control del dolor y edema postquirúrgico",
        "Protección del material de osteosíntesis (placa bloqueada)",
        "Inicio temprano de movilidad pasiva de rodilla",
        "Prevención de rigidez articular de rodilla",
        "Mantener fuerza de cadera y tobillo ipsilateral",
        "Prevención de trombosis venosa profunda (TVP)",
      ],
      estadoCarga: "sin-carga",
      cargaPorcentaje: 0,
      cargaDetalle:
        "Sin apoyo del miembro operado. Deambulación con muletas axilares o andadera. Uso de férula articulada de rodilla bloqueada en extensión para traslados.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-90 grados",
          restriccion:
            "Progresión gradual. Iniciar movilización pasiva continua (CPM) a las 24-48 horas postquirúrgicas si el cirujano lo autoriza.",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0 grados (extensión completa)",
          restriccion:
            "Priorizar extensión completa. Evitar déficit de extensión.",
        },
        {
          movimiento: "Flexión/extensión de tobillo",
          rangoObjetivo: "Rango completo",
        },
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-90 grados",
        },
      ],
      ejercicios: [
        {
          id: "fd-f1-e1",
          nombre: "Movilización pasiva continua (CPM) de rodilla",
          descripcion:
            "Colocar la extremidad operada en el dispositivo de CPM. Iniciar con rango de 0-30 grados e incrementar 10 grados por día según tolerancia del paciente. El objetivo es alcanzar 90 grados de flexión al final de la fase 1. Sesiones de 1-2 horas, varias veces al día. Vigilar signos de excesiva inflamación o dolor.",
          repeticiones: "Sesiones de 1-2 horas",
          frecuencia: "3-4 sesiones al día",
          precauciones: [
            "No forzar el rango si genera dolor significativo (EVA >6)",
            "Suspender si aparece derrame articular importante",
          ],
          progresion:
            "Incrementar 10 grados por día hasta alcanzar 90 grados. Transicionar a movilización activa asistida al final de la fase.",
        },
        {
          id: "fd-f1-e2",
          nombre: "Contracciones isométricas de cuádriceps",
          descripcion:
            "En decúbito supino con la pierna extendida, contraer el cuádriceps presionando la rodilla hacia la superficie de apoyo. Mantener la contracción 6 segundos y relajar. Este ejercicio previene la atrofia del cuádriceps y mantiene la activación neuromuscular, esencial para la estabilidad de la rodilla.",
          repeticiones: "15 repeticiones x 3 series",
          frecuencia: "3-4 veces al día",
          precauciones: [
            "No realizar si causa dolor en el sitio de la placa",
          ],
          progresion:
            "Progresar a elevación de pierna recta (SLR) cuando tolere sin dolor.",
        },
        {
          id: "fd-f1-e3",
          nombre: "Elevación de pierna recta (SLR) en 4 planos",
          descripcion:
            "En decúbito supino, contraer cuádriceps y elevar la pierna operada con rodilla en extensión hasta 30-45 grados de flexión de cadera. Mantener 5 segundos y descender controladamente. Progresar a abducción, aducción y extensión de cadera en posiciones lateral y prona.",
          repeticiones: "10 repeticiones x 3 series por plano",
          frecuencia: "2 veces al día",
          precauciones: [
            "Mantener rodilla en extensión completa durante el ejercicio",
            "No apoyar el pie operado en el suelo",
          ],
          progresion:
            "Agregar tobillera con peso (0.5-1 kg) a partir de la semana 3.",
        },
        {
          id: "fd-f1-e4",
          nombre: "Deslizamientos de talón (heel slides)",
          descripcion:
            "En decúbito supino, deslizar el talón sobre la superficie hacia los glúteos, flexionando la rodilla activamente asistida. Usar una toalla o banda bajo el pie para asistir el movimiento. Mantener la flexión máxima tolerada 5 segundos y regresar lentamente a extensión.",
          repeticiones: "15 repeticiones x 3 series",
          frecuencia: "3 veces al día",
          precauciones: [
            "No forzar la flexión más allá de lo tolerado",
            "Detener si aparece crepitación o dolor articular agudo",
          ],
          progresion:
            "Progresar a flexión activa sin asistencia conforme mejore el rango.",
        },
        {
          id: "fd-f1-e5",
          nombre: "Bombeos de tobillo (ankle pumps)",
          descripcion:
            "Con la extremidad elevada, realizar movimientos rítmicos de flexión dorsal y plantar del tobillo. Cada ciclo debe ser lento y controlado. Este ejercicio favorece el retorno venoso y previene la TVP.",
          repeticiones: "20 repeticiones cada hora durante vigilia",
          frecuencia: "Cada hora",
        },
      ],
      precauciones: [
        "No apoyar peso sobre el miembro operado",
        "Mantener la férula articulada bloqueada en extensión para traslados",
        "Crioterapia 15-20 minutos después de cada sesión de ejercicios",
        "Elevar la extremidad por encima del nivel del corazón para control de edema",
        "Vigilar signos de infección en herida quirúrgica",
      ],
      banderasRojas: [
        "Dolor progresivo que no cede con analgesia habitual",
        "Derrame articular importante con aumento de temperatura local",
        "Signos de TVP: edema unilateral, dolor en pantorrilla, signo de Homans positivo",
        "Dehiscencia de herida quirúrgica o secreción purulenta",
        "Pérdida súbita de rango de movimiento previamente alcanzado",
        "Inestabilidad o crepitación anormal en el foco de fractura",
      ],
      criteriosAvance: [
        "Flexión de rodilla ≥90 grados",
        "Extensión completa de rodilla (0 grados)",
        "Control del dolor (EVA ≤3 en reposo)",
        "Herida quirúrgica en proceso de cicatrización adecuado",
        "Evidencia radiográfica de callo óseo incipiente",
        "Capacidad de realizar SLR sin lag de extensión",
      ],
    },
    // =====================================================================
    // FASE 2: MOVILIDAD Y CARGA PARCIAL (Semanas 4-8)
    // =====================================================================
    {
      id: "femur-distal-rafi-fase-2",
      numero: 2,
      nombre: "Movilidad progresiva y carga parcial",
      duracion: "Semanas 4-8",
      semanaInicio: 4,
      semanaFin: 8,
      objetivos: [
        "Incrementar rango de movimiento de rodilla (meta: 120 grados de flexión)",
        "Inicio de carga parcial progresiva según tolerancia y evidencia radiográfica",
        "Fortalecimiento muscular progresivo de cuádriceps e isquiotibiales",
        "Mejorar control neuromuscular y propiocepción",
        "Restaurar patrón de marcha simétrico con auxiliar",
      ],
      estadoCarga: "carga-parcial",
      cargaPorcentaje: 25,
      cargaDetalle:
        "Carga parcial al 25-50% del peso corporal con muletas. Progresión según tolerancia y consolidación radiográfica. Uso de férula articulada desbloqueada para marcha.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-120 grados",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0 grados (extensión completa)",
        },
        {
          movimiento: "Flexión/extensión de tobillo",
          rangoObjetivo: "Rango completo",
        },
      ],
      ejercicios: [
        {
          id: "fd-f2-e1",
          nombre: "Bicicleta estática sin resistencia",
          descripcion:
            "Utilizar bicicleta estática con asiento alto para permitir pedaleo cómodo. Iniciar con pedaleo parcial (balanceo) y progresar a pedaleo completo. Sin resistencia las primeras 2 semanas de esta fase. El objetivo es mejorar la flexión de rodilla de forma cíclica y no traumática.",
          repeticiones: "10-15 minutos por sesión",
          frecuencia: "1-2 veces al día",
          precauciones: [
            "No agregar resistencia hasta la semana 6",
            "Ajustar altura del asiento para evitar flexión forzada",
          ],
          progresion:
            "Incrementar duración a 20 minutos y agregar resistencia mínima a partir de la semana 6.",
        },
        {
          id: "fd-f2-e2",
          nombre: "Sentadillas parciales en pared (wall squats)",
          descripcion:
            "De pie con la espalda apoyada en la pared y los pies separados a la anchura de los hombros. Descender lentamente flexionando rodillas hasta 45 grados. Mantener la posición 5-10 segundos y regresar a la posición inicial. Distribuir el peso de forma bilateral.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "1 vez al día",
          precauciones: [
            "No sobrepasar 45 grados de flexión de rodilla",
            "Mantener apoyo bilateral durante todo el ejercicio",
          ],
          progresion:
            "Incrementar profundidad de sentadilla a 60 grados y mantener mayor tiempo.",
        },
        {
          id: "fd-f2-e3",
          nombre: "Extensión terminal de rodilla (short arc quads)",
          descripcion:
            "En decúbito supino con un rodillo bajo la rodilla operada (manteniendo 30 grados de flexión), extender la rodilla completamente contrayendo el cuádriceps. Mantener la extensión 5 segundos y regresar lentamente. Este ejercicio fortalece selectivamente el vasto medial oblicuo.",
          repeticiones: "15 repeticiones x 3 series",
          frecuencia: "2 veces al día",
          precauciones: [
            "Evitar hiperextensión de rodilla",
          ],
          progresion:
            "Agregar tobillera con peso progresivo (1-2 kg).",
        },
        {
          id: "fd-f2-e4",
          nombre: "Flexión activa de rodilla en decúbito prono",
          descripcion:
            "En decúbito prono con las piernas extendidas, flexionar la rodilla operada activamente llevando el talón hacia el glúteo. Mantener la flexión máxima 5 segundos y descender controladamente. Utilizar la gravedad como resistencia suave.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "2 veces al día",
          precauciones: [
            "No forzar flexión más allá de lo tolerado",
            "Evitar compensaciones con rotación de cadera",
          ],
          progresion:
            "Agregar resistencia con banda elástica ligera a partir de la semana 7.",
        },
        {
          id: "fd-f2-e5",
          nombre: "Entrenamiento de marcha con muletas",
          descripcion:
            "Practicar patrón de marcha con carga parcial progresiva usando muletas. Enfatizar apoyo de talón, fase de despegue y longitud de paso simétrica. Iniciar con 25% del peso corporal y progresar a 50% según tolerancia.",
          repeticiones: "10-15 minutos por sesión",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "No exceder el porcentaje de carga indicado",
            "Utilizar báscula para verificar carga",
          ],
          progresion:
            "Incrementar distancia y velocidad conforme mejore la tolerancia y la consolidación.",
        },
      ],
      precauciones: [
        "Progresar carga solo con confirmación radiográfica de consolidación",
        "Evitar actividades de impacto o torsión de rodilla",
        "Continuar con crioterapia después de los ejercicios si persiste edema",
        "No realizar ejercicios de cadena cinética abierta con peso excesivo",
      ],
      banderasRojas: [
        "Dolor creciente con la carga parcial",
        "Crepitación dolorosa en el sitio de fractura",
        "Pérdida de rango de movimiento previamente alcanzado",
        "Edema progresivo que no cede con elevación y crioterapia",
        "Signos de falla del material de osteosíntesis en radiografía",
      ],
      criteriosAvance: [
        "Flexión de rodilla ≥120 grados",
        "Extensión completa sin déficit",
        "Tolerancia a carga parcial al 50% sin dolor",
        "Consolidación radiográfica progresiva del foco de fractura",
        "Fuerza de cuádriceps ≥3+/5 en escala de Daniels",
      ],
    },
    // =====================================================================
    // FASE 3: FORTALECIMIENTO Y CARGA PROGRESIVA (Semanas 8-12)
    // =====================================================================
    {
      id: "femur-distal-rafi-fase-3",
      numero: 3,
      nombre: "Fortalecimiento avanzado y carga progresiva",
      duracion: "Semanas 8-12",
      semanaInicio: 8,
      semanaFin: 12,
      objetivos: [
        "Lograr rango de movimiento funcional completo de rodilla",
        "Progresión a carga completa según consolidación",
        "Fortalecimiento muscular avanzado del miembro inferior",
        "Mejorar equilibrio dinámico y propiocepción avanzada",
        "Iniciar entrenamiento funcional y de resistencia",
      ],
      estadoCarga: "carga-progresiva",
      cargaPorcentaje: 75,
      cargaDetalle:
        "Carga progresiva del 50-100% del peso corporal. Transición de muletas a bastón y luego marcha independiente según consolidación radiográfica y tolerancia.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-135 grados",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0 grados",
        },
      ],
      ejercicios: [
        {
          id: "fd-f3-e1",
          nombre: "Sentadillas bilaterales progresivas",
          descripcion:
            "De pie con los pies separados a la anchura de los hombros, realizar sentadillas controladas descendiendo hasta 60-90 grados de flexión de rodilla. Mantener la espalda recta y las rodillas alineadas con los pies. Usar peso corporal inicialmente y progresar con mancuernas.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "3 veces por semana",
          precauciones: [
            "No realizar sentadillas profundas (>90 grados) hasta la semana 10",
            "Vigilar alineación de rodilla (evitar valgo dinámico)",
          ],
          progresion:
            "Progresar a sentadilla unipodal parcial a partir de la semana 11.",
        },
        {
          id: "fd-f3-e2",
          nombre: "Prensa de piernas (leg press)",
          descripcion:
            "En máquina de prensa de piernas, colocar los pies separados a la anchura de los hombros en la plataforma. Flexionar rodillas a 90 grados y extender controladamente. Iniciar con carga ligera (30-40% del peso corporal) y progresar gradualmente.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "3 veces por semana",
          precauciones: [
            "No bloquear rodillas en extensión completa",
            "Evitar carga excesiva antes de consolidación completa",
          ],
          progresion:
            "Incrementar carga progresivamente según tolerancia (5-10% semanal).",
        },
        {
          id: "fd-f3-e3",
          nombre: "Step-ups laterales y frontales",
          descripcion:
            "Subir y bajar de un escalón de 10-15 cm de altura con la pierna operada liderando el ascenso. Controlar la fase excéntrica de descenso. Realizar en dirección frontal y lateral para trabajar diferentes grupos musculares.",
          repeticiones: "10 repeticiones x 3 series por dirección",
          frecuencia: "Diario",
          precauciones: [
            "Iniciar con escalón bajo (10 cm) y progresar a 20 cm",
            "Mantener alineación de rodilla durante todo el movimiento",
          ],
          progresion:
            "Incrementar altura del escalón y agregar peso externo.",
        },
        {
          id: "fd-f3-e4",
          nombre: "Ejercicios de equilibrio en superficie inestable",
          descripcion:
            "De pie sobre tabla de equilibrio o cojín propioceptivo con apoyo bipodal inicial. Mantener el equilibrio 30 segundos. Progresar a apoyo unipodal sobre la pierna operada con ojos abiertos y luego cerrados.",
          repeticiones: "5 repeticiones de 30 segundos x 3 series",
          frecuencia: "Diario",
          precauciones: [
            "Tener un punto de apoyo cercano para seguridad",
            "No realizar unipodal hasta consolidación confirmada",
          ],
          progresion:
            "Progresar a superficie más inestable y perturbaciones externas.",
        },
      ],
      precauciones: [
        "Confirmar consolidación radiográfica antes de permitir carga completa",
        "Evitar actividades de impacto (correr, saltar) hasta la fase 4",
        "Vigilar signos de fatiga del material de osteosíntesis",
        "Monitorizar simetría de marcha y patrón de carga",
      ],
      banderasRojas: [
        "Dolor persistente en el sitio de fractura con la carga",
        "Deformidad angular progresiva (valgo o varo)",
        "Bloqueo articular o sensación de inestabilidad",
        "Falla o aflojamiento del material de osteosíntesis",
        "Derrame articular recurrente",
      ],
      criteriosAvance: [
        "Flexión de rodilla ≥130 grados",
        "Marcha independiente sin auxiliar de marcha",
        "Consolidación radiográfica satisfactoria",
        "Fuerza de cuádriceps e isquiotibiales ≥4/5",
        "Equilibrio unipodal ≥15 segundos",
      ],
    },
    // =====================================================================
    // FASE 4: RETORNO FUNCIONAL (Semanas 12-16)
    // =====================================================================
    {
      id: "femur-distal-rafi-fase-4",
      numero: 4,
      nombre: "Retorno funcional y actividad plena",
      duracion: "Semanas 12-16",
      semanaInicio: 12,
      semanaFin: 16,
      objetivos: [
        "Rango de movimiento completo funcional de rodilla",
        "Fuerza muscular simétrica bilateral (≥85% del lado contralateral)",
        "Retorno a actividades de la vida diaria sin restricciones",
        "Reintegración laboral según demanda física del trabajo",
        "Inicio de actividades deportivas de bajo impacto si aplica",
      ],
      estadoCarga: "carga-completa",
      cargaPorcentaje: 100,
      cargaDetalle:
        "Carga completa sin restricciones. Marcha independiente con patrón normalizado. Se permiten actividades de bajo impacto.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-140 grados (o simétrico al contralateral)",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0 grados",
        },
      ],
      ejercicios: [
        {
          id: "fd-f4-e1",
          nombre: "Sentadillas unipodales parciales",
          descripcion:
            "De pie sobre la pierna operada, realizar sentadilla controlada hasta 45-60 grados de flexión de rodilla. Mantener la alineación de rodilla sobre el pie y la pelvis nivelada. Utilizar soporte si es necesario inicialmente.",
          repeticiones: "8 repeticiones x 3 series",
          frecuencia: "3 veces por semana",
          precauciones: [
            "No realizar si hay dolor en el sitio de la placa",
            "Mantener control excéntrico durante todo el movimiento",
          ],
          progresion:
            "Incrementar profundidad y agregar peso externo progresivamente.",
        },
        {
          id: "fd-f4-e2",
          nombre: "Caminata en cinta con inclinación progresiva",
          descripcion:
            "Caminar en cinta rodante iniciando en terreno plano a velocidad cómoda. Progresar inclinación al 5-10% para fortalecer cuádriceps y glúteos. Mantener patrón de marcha simétrico y cadencia regular.",
          repeticiones: "20-30 minutos por sesión",
          frecuencia: "5 veces por semana",
          precauciones: [
            "No correr en esta fase",
            "Vigilar simetría de paso",
          ],
          progresion:
            "Incrementar velocidad e inclinación según tolerancia.",
        },
        {
          id: "fd-f4-e3",
          nombre: "Ejercicios pliométricos suaves",
          descripcion:
            "Iniciar con saltos bilaterales suaves sobre superficie blanda (colchoneta). Aterrizar con rodillas semiflexionadas absorbiendo el impacto. Progresar a saltos unipodales solo si la consolidación es completa y la fuerza es simétrica.",
          repeticiones: "8-10 repeticiones x 3 series",
          frecuencia: "2-3 veces por semana",
          precauciones: [
            "Solo iniciar con confirmación de consolidación completa",
            "Aterrizar suavemente con absorción de impacto",
            "Suspender inmediatamente si aparece dolor",
          ],
          progresion:
            "Progresar de saltos bilaterales a unipodales y de superficie blanda a firme.",
        },
        {
          id: "fd-f4-e4",
          nombre: "Entrenamiento funcional específico por actividad",
          descripcion:
            "Realizar simulaciones de actividades específicas del paciente: subir escaleras con carga, agacharse a recoger objetos, transferencias de peso, cambios de dirección controlados. Adaptar los ejercicios según la ocupación y actividades recreativas del paciente.",
          repeticiones: "Según actividad específica",
          frecuencia: "Diario",
          precauciones: [
            "Adaptar intensidad a la demanda funcional real",
            "Evitar deportes de contacto hasta 6 meses postquirúrgicos",
          ],
          progresion:
            "Incrementar complejidad y demanda según objetivos individuales.",
        },
      ],
      precauciones: [
        "Evaluar consolidación completa antes de permitir actividades de impacto",
        "Deportes de contacto diferidos hasta al menos 6 meses postquirúrgicos",
        "Monitorizar síntomas mecánicos (crepitación, bloqueo) que sugieran lesión condral",
        "Considerar retiro de material de osteosíntesis si causa molestias",
      ],
      banderasRojas: [
        "Dolor persistente en el sitio de la placa con actividad",
        "Bloqueo mecánico de rodilla (posible cuerpo libre intraarticular)",
        "Inestabilidad articular o sensación de fallo",
        "Refractura o fractura periimplante",
        "Limitación funcional que no mejora con rehabilitación",
      ],
      criteriosAvance: [
        "Rango de movimiento funcional completo de rodilla",
        "Fuerza muscular simétrica (≥85% del lado contralateral)",
        "Marcha normalizada sin claudicación",
        "Capaz de subir y bajar escaleras sin dolor ni auxiliar",
        "Independencia completa en actividades de la vida diaria",
      ],
    },
  ],
  criteriosRetornoActividad: [
    "Consolidación radiográfica completa del foco de fractura",
    "Rango de movimiento de rodilla funcional (≥130 grados de flexión, extensión completa)",
    "Fuerza de cuádriceps e isquiotibiales ≥85% comparado con lado contralateral",
    "Marcha independiente con patrón normalizado",
    "Capacidad de subir y bajar escaleras alternando pies sin dolor",
    "Equilibrio unipodal ≥30 segundos",
    "Sin dolor en el sitio de fractura con actividades cotidianas",
    "Prueba funcional de salto unipodal ≥80% del lado contralateral (para deportistas)",
  ],
  complicacionesPotenciales: [
    "Rigidez de rodilla (artrofibrosis) - complicación más frecuente",
    "No unión o retardo de consolidación",
    "Mala alineación (valgo o varo residual)",
    "Falla del material de osteosíntesis (aflojamiento o rotura de placa)",
    "Infección del sitio quirúrgico superficial o profunda",
    "Artrosis postraumática de rodilla (especialmente en fracturas articulares)",
    "Síndrome de dolor regional complejo (distrofia simpática refleja)",
    "Trombosis venosa profunda y tromboembolismo pulmonar",
    "Refractura tras retiro de material de osteosíntesis",
  ],
  referencias: [
    "ref-ehlinger-2013",
    "ref-bhandari-2017",
    "ref-ricci-2014",
    "ref-zlowodzki-2006",
    "ref-herrera-2008",
  ],
  fechaActualizacion: "2025-06-15",
  nivelEvidencia: "Nivel II-III: Estudios prospectivos y revisiones sistemáticas",
};
