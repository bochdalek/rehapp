import type { Protocol } from "@/types/protocol";

export const pelvisRAFI: Protocol = {
  id: "pelvis-rafi",
  nombre:
    "Protocolo de Rehabilitación Post-RAFI de Fractura de Pelvis (Anillo Pélvico)",
  nombreCorto: "RAFI Pelvis",
  descripcion:
    "Protocolo de rehabilitación basado en evidencia para el manejo postquirúrgico de fracturas del anillo pélvico tratadas mediante reducción abierta y fijación interna (RAFI) con placas y tornillos. Clasificación según Young-Burgess y Tile (AO). El protocolo contempla progresión de carga según la estabilidad de la fijación y el patrón de lesión, recuperación de la función de cadera y marcha, y retorno funcional en 16 semanas. Se enfatiza la importancia de evaluar lesiones asociadas (urológicas, vasculares, neurológicas).",
  region: "pelvis",
  localizacion: "pelvis",
  abordajeQuirurgico: ["RAFI", "placa", "tornillos"],
  clasificaciones: [
    "Young-Burgess: Compresión lateral (LC) tipos I, II, III",
    "Young-Burgess: Compresión anteroposterior (APC) tipos I, II, III",
    "Young-Burgess: Cizallamiento vertical (VS)",
    "Young-Burgess: Mecanismo combinado (CM)",
    "Tile A: Estable (rotacionalmente y verticalmente)",
    "Tile B: Rotacionalmente inestable, verticalmente estable (libro abierto, compresión lateral)",
    "Tile C: Rotacionalmente y verticalmente inestable",
  ],
  indicacionesQuirurgicas: [
    "Inestabilidad rotacional del anillo pélvico (Tile B, APC II-III)",
    "Inestabilidad vertical del anillo pélvico (Tile C, VS)",
    "Diástasis de sínfisis púbica >2.5 cm",
    "Desplazamiento del anillo posterior >1 cm",
    "Fractura de sacro con desplazamiento y lesión neurológica",
    "Fractura en libro abierto con inestabilidad hemodinámica controlada",
    "Lesión combinada anterior y posterior del anillo pélvico",
  ],
  duracionTotal: "16 semanas",
  semanasTotal: 16,
  fases: [
    // =====================================================================
    // FASE 1: PROTECCIÓN Y ESTABILIZACIÓN (Semanas 0-4)
    // =====================================================================
    {
      id: "pelvis-rafi-fase-1",
      numero: 1,
      nombre: "Protección postquirúrgica y movilización temprana",
      duracion: "Semanas 0-4",
      semanaInicio: 0,
      semanaFin: 4,
      objetivos: [
        "Control del dolor y edema postquirúrgico",
        "Protección del material de osteosíntesis del anillo pélvico",
        "Movilización temprana en cama y sedestación progresiva",
        "Prevención de complicaciones tromboembólicas (riesgo muy elevado)",
        "Mantener movilidad de caderas, rodillas y tobillos",
        "Evaluación y manejo de lesiones asociadas",
        "Educación sobre restricciones de movimiento y carga",
      ],
      estadoCarga: "sin-carga",
      cargaPorcentaje: 0,
      cargaDetalle:
        "Sin carga del lado afectado. En lesiones bilaterales, sin carga bilateral. Deambulación con andadera o muletas sin apoyo. Sedestación progresiva con precauciones para evitar estrés sobre el anillo pélvico. La bipedestación temprana con soporte es deseable para prevenir complicaciones.",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-60 grados",
          restriccion:
            "Limitar flexión de cadera según estabilidad de fijación. No sobrepasar 60 grados en fracturas inestables.",
        },
        {
          movimiento: "Extensión de cadera",
          rangoObjetivo: "0 grados (posición neutra)",
          restriccion:
            "No realizar extensión activa contra resistencia.",
        },
        {
          movimiento: "Abducción de cadera",
          rangoObjetivo: "0-20 grados",
          restriccion:
            "Limitar abducción en lesiones tipo APC (libro abierto). Puede estar contraindicada según patrón de lesión.",
        },
        {
          movimiento: "Flexión/extensión de rodilla",
          rangoObjetivo: "0-130 grados (rango completo)",
        },
        {
          movimiento: "Flexión/extensión de tobillo",
          rangoObjetivo: "Rango completo",
        },
      ],
      ejercicios: [
        {
          id: "pelv-f1-e1",
          nombre: "Movilización activa de tobillo y rodilla en cama",
          descripcion:
            "En decúbito supino, realizar bombeos de tobillo (dorsiflexión/plantiflexión rítmica) y flexoextensión activa de rodilla bilateral. Estos ejercicios son prioritarios para prevenir TVP, que tiene una incidencia muy alta en fracturas de pelvis (hasta 35% sin profilaxis). Realizar frecuentemente durante todo el día.",
          repeticiones: "20 repeticiones por articulación cada hora",
          frecuencia: "Cada hora durante vigilia",
        },
        {
          id: "pelv-f1-e2",
          nombre: "Contracciones isométricas de glúteos y cuádriceps",
          descripcion:
            "En decúbito supino, contraer glúteos (apretar nalgas) manteniendo 6 segundos. Alternar con contracción de cuádriceps bilateral. Estos ejercicios mantienen la activación neuromuscular sin generar estrés sobre el anillo pélvico y previenen la atrofia significativa que ocurre en la inmovilización prolongada.",
          repeticiones: "15 repeticiones x 3 series de cada grupo",
          frecuencia: "4 veces al día",
          precauciones: [
            "No generar dolor en la región pélvica con las contracciones",
            "Evitar contracción máxima de aductores en lesiones tipo APC",
          ],
          progresion:
            "Incrementar intensidad de la contracción gradualmente según tolerancia.",
        },
        {
          id: "pelv-f1-e3",
          nombre: "Elevación de pierna recta (SLR) - lado no afectado",
          descripcion:
            "Iniciar SLR únicamente con la pierna no afectada para mantener fuerza global. En el lado operado, realizar solo contracciones isométricas de cuádriceps sin elevación. El SLR del lado operado genera tracción sobre el psoas iliaco y puede comprometer la fijación pélvica.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "No realizar SLR del lado operado hasta autorización del cirujano (generalmente semana 3-4)",
            "No realizar en lesiones bilaterales hasta indicación",
          ],
          progresion:
            "Iniciar SLR del lado operado a partir de la semana 3-4 con autorización.",
        },
        {
          id: "pelv-f1-e4",
          nombre: "Sedestación progresiva y transferencias",
          descripcion:
            "Progresar de decúbito supino a sedestación en cama (30, 45, 60 grados progresivamente). Practicar transferencias de cama a silla con apoyo. Iniciar bipedestación con andadera sin carga del lado afectado. Las transferencias deben realizarse minimizando la rotación del tronco para proteger el anillo pélvico.",
          repeticiones: "3-5 transferencias por sesión",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "Evitar rotación del tronco durante transferencias",
            "No sentarse en superficies blandas que generen aducción de caderas",
            "Usar silla firme con brazos para asistir la transferencia",
          ],
          progresion:
            "Incrementar tiempo en sedestación y progresar a bipedestación.",
        },
      ],
      precauciones: [
        "Profilaxis antitrombótica estricta: el riesgo de TVP/TEP es muy elevado en fracturas de pelvis",
        "Evaluar y manejar lesiones asociadas: urológicas (lesión vesical, uretral), vasculares, neurológicas (plexo lumbosacro)",
        "Evitar abducción de caderas en lesiones APC (libro abierto)",
        "No permitir flexión de cadera >60 grados en las primeras semanas",
        "Vigilar función vesical e intestinal (posible lesión neurológica asociada)",
        "Usar cojín de asiento firme; evitar superficies blandas",
      ],
      banderasRojas: [
        "Signos de TEP: disnea súbita, dolor torácico, taquicardia",
        "Signos de TVP: edema unilateral de miembro inferior, dolor en pantorrilla",
        "Retención urinaria o hematuria (lesión urológica asociada)",
        "Déficit neurológico nuevo o progresivo en miembros inferiores",
        "Inestabilidad hemodinámica (sangrado pélvico tardío)",
        "Dolor pélvico creciente que sugiere pérdida de reducción",
        "Infección del sitio quirúrgico",
      ],
      criteriosAvance: [
        "Estabilidad hemodinámica sostenida",
        "Control del dolor (EVA ≤4 en reposo)",
        "Capacidad de sedestación ≥30 minutos sin dolor significativo",
        "Sin signos de complicaciones tromboembólicas",
        "Heridas quirúrgicas en adecuada cicatrización",
        "Evidencia radiográfica de mantenimiento de la reducción",
      ],
    },
    // =====================================================================
    // FASE 2: MOVILIDAD Y CARGA PARCIAL (Semanas 4-8)
    // =====================================================================
    {
      id: "pelvis-rafi-fase-2",
      numero: 2,
      nombre: "Movilidad progresiva y carga parcial",
      duracion: "Semanas 4-8",
      semanaInicio: 4,
      semanaFin: 8,
      objetivos: [
        "Inicio de carga parcial progresiva según estabilidad y consolidación",
        "Incrementar rango de movimiento de cadera",
        "Fortalecimiento progresivo de musculatura periarticular de cadera",
        "Mejorar patrón de marcha con auxiliar",
        "Recuperar independencia en actividades básicas de la vida diaria",
      ],
      estadoCarga: "carga-parcial",
      cargaPorcentaje: 25,
      cargaDetalle:
        "Carga parcial al 25-50% con muletas o andadera. La progresión depende del patrón de lesión: fracturas Tile B pueden cargar más tempranamente que Tile C. Usar báscula para verificar porcentaje de carga. Nota: no existe evidencia de alto nivel para recomendar protocolos de carga específicos post-RAFI de pelvis (Rickman 2019). La progresión se basa en consenso de expertos, patrón de fractura y estabilidad de fijación.",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-90 grados",
        },
        {
          movimiento: "Extensión de cadera",
          rangoObjetivo: "0-10 grados",
        },
        {
          movimiento: "Abducción de cadera",
          rangoObjetivo: "0-30 grados",
          restriccion:
            "Precaución en lesiones tipo APC; consultar con cirujano.",
        },
        {
          movimiento: "Rotación externa de cadera",
          rangoObjetivo: "0-20 grados",
        },
      ],
      ejercicios: [
        {
          id: "pelv-f2-e1",
          nombre: "Flexión activa de cadera en decúbito supino",
          descripcion:
            "En decúbito supino, flexionar la cadera del lado operado llevando la rodilla hacia el pecho. Progresar de asistido a activo. Meta de 90 grados al final de la fase. Mantener la flexión 5 segundos y regresar controladamente. Este ejercicio restaura la movilidad funcional de cadera necesaria para sentarse y caminar.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "No forzar más allá del rango tolerado",
            "Evitar compensaciones con rotación lumbar",
          ],
          progresion:
            "Progresar a flexión activa contra gravedad (sentado) y luego contra resistencia.",
        },
        {
          id: "pelv-f2-e2",
          nombre: "Abducción de cadera en decúbito lateral",
          descripcion:
            "En decúbito lateral sobre el lado sano, realizar abducción activa de la cadera operada. Elevar la pierna hasta 30 grados, mantener 5 segundos y descender controladamente. Mantener pelvis estable sin rotación. Este ejercicio fortalece el glúteo medio, esencial para la estabilidad de la marcha.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "2 veces al día",
          precauciones: [
            "Verificar con cirujano si la abducción está permitida según el tipo de lesión",
            "No realizar en lesiones APC no consolidadas si genera dolor en la sínfisis",
          ],
          progresion:
            "Agregar tobillera con peso (0.5-1 kg) a partir de la semana 6.",
        },
        {
          id: "pelv-f2-e3",
          nombre: "Puente de glúteos (bridging) bilateral",
          descripcion:
            "En decúbito supino con rodillas flexionadas a 45 grados y pies apoyados, elevar la pelvis contrayendo glúteos hasta formar línea recta de hombros a rodillas. Mantener 5 segundos y descender. Este ejercicio fortalece glúteos, isquiotibiales y musculatura del tronco sin generar estrés excesivo sobre el anillo pélvico.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "Diario",
          precauciones: [
            "Mantener pelvis nivelada (evitar inclinación lateral)",
            "No realizar si genera dolor en el sitio de fijación",
          ],
          progresion:
            "Progresar a puente unipodal a partir de la semana 6-7.",
        },
        {
          id: "pelv-f2-e4",
          nombre: "Entrenamiento de marcha con carga parcial",
          descripcion:
            "Practicar marcha con muletas o andadera con carga parcial progresiva. Enfatizar patrón de marcha recíproco, longitud de paso simétrica y apoyo adecuado del pie. Usar báscula para verificar porcentaje de carga. Iniciar en terreno plano y controlado.",
          repeticiones: "10-15 minutos por sesión",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "No exceder porcentaje de carga indicado",
            "Vigilar Trendelenburg (debilidad de glúteo medio)",
            "Evitar terrenos irregulares",
          ],
          progresion:
            "Incrementar distancia, velocidad y porcentaje de carga semanalmente.",
        },
      ],
      precauciones: [
        "La progresión de carga depende del tipo de fractura y estabilidad de fijación",
        "Fracturas Tile C requieren mayor tiempo sin carga que Tile B",
        "Continuar profilaxis antitrombótica según indicación",
        "Vigilar función neurológica de miembros inferiores",
        "Evitar posiciones extremas de cadera que estresen el anillo pélvico",
      ],
      banderasRojas: [
        "Dolor pélvico creciente con la carga",
        "Asimetría pélvica progresiva palpable o radiográfica",
        "Nuevo déficit neurológico en miembros inferiores",
        "Disfunción vesical o intestinal nueva",
        "Signos de infección profunda",
        "Signos de TEP/TVP",
      ],
      criteriosAvance: [
        "Carga parcial al 50% tolerada sin dolor",
        "Flexión de cadera ≥90 grados",
        "Puente de glúteos bilateral sin dolor",
        "Consolidación radiográfica progresiva",
        "Marcha con muletas con patrón aceptable",
        "Independencia en actividades básicas de la vida diaria",
      ],
    },
    // =====================================================================
    // FASE 3: FORTALECIMIENTO Y CARGA PROGRESIVA (Semanas 8-12)
    // =====================================================================
    {
      id: "pelvis-rafi-fase-3",
      numero: 3,
      nombre: "Fortalecimiento avanzado y carga progresiva",
      duracion: "Semanas 8-12",
      semanaInicio: 8,
      semanaFin: 12,
      objetivos: [
        "Progresión a carga completa",
        "Fortalecimiento avanzado de musculatura de cadera y tronco",
        "Mejorar equilibrio dinámico y propiocepción",
        "Restaurar patrón de marcha normalizado",
        "Reentrenamiento de actividades funcionales avanzadas",
      ],
      estadoCarga: "carga-progresiva",
      cargaPorcentaje: 75,
      cargaDetalle:
        "Carga progresiva del 75-100%. Transición de muletas a bastón y luego marcha independiente según consolidación y fuerza muscular. Meta: marcha independiente al final de esta fase.",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-120 grados",
        },
        {
          movimiento: "Extensión de cadera",
          rangoObjetivo: "0-15 grados",
        },
        {
          movimiento: "Abducción de cadera",
          rangoObjetivo: "0-40 grados",
        },
        {
          movimiento: "Rotación interna/externa de cadera",
          rangoObjetivo: "Rango funcional (20-30 grados cada una)",
        },
      ],
      ejercicios: [
        {
          id: "pelv-f3-e1",
          nombre: "Sentadillas bilaterales progresivas",
          descripcion:
            "De pie con pies a la anchura de los hombros, realizar sentadillas hasta 60-90 grados de flexión. Mantener espalda recta y peso distribuido. Usar peso corporal inicialmente. Enfatizar activación de glúteos en la fase de ascenso.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "3 veces por semana",
          precauciones: [
            "Mantener pelvis nivelada y simétrica",
            "No generar dolor en la región pélvica",
          ],
          progresion:
            "Agregar peso externo (mancuernas, barra) progresivamente.",
        },
        {
          id: "pelv-f3-e2",
          nombre: "Abducción de cadera de pie con banda elástica",
          descripcion:
            "De pie con banda elástica alrededor de los tobillos, realizar abducción de cadera del lado operado contra la resistencia de la banda. Mantener pelvis estable y tronco erguido. Este ejercicio fortalece selectivamente el glúteo medio, crucial para eliminar la marcha de Trendelenburg.",
          repeticiones: "12 repeticiones x 3 series por lado",
          frecuencia: "Diario",
          precauciones: [
            "Iniciar con banda de resistencia ligera",
            "No compensar con inclinación lateral del tronco",
          ],
          progresion:
            "Incrementar resistencia de la banda y agregar pasos laterales (lateral walks).",
        },
        {
          id: "pelv-f3-e3",
          nombre: "Step-ups y step-downs con control de pelvis",
          descripcion:
            "Subir y bajar de un escalón de 10-15 cm liderando con la pierna operada al subir y con la pierna sana al bajar. Enfatizar el control de la pelvis (evitar caída contralateral del lado sano = Trendelenburg dinámico). Usar espejo para retroalimentación visual.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "Diario",
          precauciones: [
            "Iniciar con escalón bajo (10 cm)",
            "Vigilar control pélvico en el plano frontal",
          ],
          progresion:
            "Incrementar altura del escalón a 20 cm y agregar peso externo.",
        },
        {
          id: "pelv-f3-e4",
          nombre: "Entrenamiento de equilibrio y estabilidad de tronco",
          descripcion:
            "Realizar ejercicios de equilibrio unipodal progresivo, planchas frontales y laterales, y ejercicios de estabilización del core. La estabilidad del tronco y la pelvis son fundamentales para una marcha normalizada tras fractura del anillo pélvico.",
          repeticiones: "3 series de 20-30 segundos cada ejercicio",
          frecuencia: "Diario",
          precauciones: [
            "No generar dolor en el sitio de fijación con las planchas",
            "Tener apoyo disponible para ejercicios de equilibrio",
          ],
          progresion:
            "Incrementar duración y complejidad de los ejercicios de estabilización.",
        },
      ],
      precauciones: [
        "Confirmar consolidación radiográfica antes de carga completa",
        "Continuar vigilancia de función neurológica (especialmente en fracturas de sacro)",
        "Evaluar disfunción sexual persistente si hubo lesión de anillo posterior",
        "Evitar deportes de contacto o actividades de alto impacto",
      ],
      banderasRojas: [
        "Dolor pélvico que empeora con la actividad",
        "Marcha de Trendelenburg persistente que no mejora",
        "Nuevo déficit neurológico (lesión tardía del plexo lumbosacro)",
        "Aflojamiento o falla del material de osteosíntesis",
        "Dolor sacroilíaco persistente e incapacitante",
      ],
      criteriosAvance: [
        "Marcha independiente sin auxiliar",
        "Sin Trendelenburg significativo",
        "Flexión de cadera ≥110 grados",
        "Fuerza de abductores de cadera ≥4/5",
        "Consolidación radiográfica adecuada",
        "Equilibrio unipodal ≥15 segundos",
      ],
    },
    // =====================================================================
    // FASE 4: RETORNO FUNCIONAL (Semanas 12-16)
    // =====================================================================
    {
      id: "pelvis-rafi-fase-4",
      numero: 4,
      nombre: "Retorno funcional y reintegración",
      duracion: "Semanas 12-16",
      semanaInicio: 12,
      semanaFin: 16,
      objetivos: [
        "Retorno a actividades de la vida diaria sin restricciones",
        "Reintegración laboral según demanda física",
        "Optimización de fuerza y resistencia muscular",
        "Retorno a actividades deportivas de bajo impacto",
        "Manejo de secuelas funcionales residuales",
      ],
      estadoCarga: "carga-completa",
      cargaPorcentaje: 100,
      cargaDetalle:
        "Carga completa sin restricciones. Marcha independiente normalizada. Actividades de bajo impacto permitidas.",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-125 grados (o simétrico al contralateral)",
        },
        {
          movimiento: "Extensión de cadera",
          rangoObjetivo: "0-20 grados",
        },
        {
          movimiento: "Abducción de cadera",
          rangoObjetivo: "0-45 grados",
        },
        {
          movimiento: "Rotaciones de cadera",
          rangoObjetivo: "Simétrico al contralateral",
        },
      ],
      ejercicios: [
        {
          id: "pelv-f4-e1",
          nombre: "Sentadillas unipodales y lunges",
          descripcion:
            "Realizar sentadillas unipodales parciales sobre la pierna operada y lunges frontales y laterales. Mantener control pélvico y alineación de rodilla. Estos ejercicios exigen fuerza y estabilidad avanzada de la cintura pélvica.",
          repeticiones: "10 repeticiones x 3 series cada ejercicio",
          frecuencia: "3 veces por semana",
          precauciones: [
            "No realizar si hay dolor pélvico persistente",
            "Mantener control de pelvis en plano frontal",
          ],
          progresion:
            "Agregar peso externo y aumentar profundidad.",
        },
        {
          id: "pelv-f4-e2",
          nombre: "Carrera progresiva en cinta",
          descripcion:
            "Iniciar con caminata rápida en cinta y progresar a trote ligero. Comenzar con intervalos cortos de 30 segundos de trote alternados con 2 minutos de caminata. Monitorizar síntomas pélvicos durante y después. Solo con consolidación completa confirmada.",
          repeticiones: "15-20 minutos por sesión",
          frecuencia: "3 veces por semana",
          precauciones: [
            "Solo con consolidación completa confirmada radiográficamente",
            "Suspender si genera dolor pélvico",
            "Usar calzado con amortiguación adecuada",
          ],
          progresion:
            "Incrementar duración de intervalos de trote progresivamente.",
        },
        {
          id: "pelv-f4-e3",
          nombre: "Entrenamiento funcional y deportivo específico",
          descripcion:
            "Realizar ejercicios que simulen las actividades laborales y recreativas del paciente: cambios de dirección, agacharse, levantarse del suelo, cargar objetos, subir y bajar escaleras con carga. Adaptar según la demanda funcional individual.",
          repeticiones: "Según actividad específica",
          frecuencia: "Diario",
          precauciones: [
            "Adaptar intensidad a la demanda real",
            "Deportes de contacto diferidos hasta 6 meses postquirúrgicos mínimo",
          ],
          progresion:
            "Incrementar complejidad y carga según objetivos individuales.",
        },
      ],
      precauciones: [
        "Deportes de contacto diferidos hasta al menos 6 meses postquirúrgicos",
        "Evaluar disfunción sexual residual y referir a especialista si es necesario",
        "Monitorizar dolor sacroilíaco crónico (puede requerir manejo multidisciplinario)",
        "Considerar retiro de material si genera molestias (especialmente tornillos iliosacros)",
        "Evaluar y manejar dolor crónico pélvico si persiste",
      ],
      banderasRojas: [
        "Dolor pélvico crónico incapacitante",
        "Disfunción neurológica persistente (vesical, intestinal, sexual)",
        "Falla del material de osteosíntesis",
        "Asimetría pélvica progresiva con discrepancia de longitud de miembros",
        "Artrosis sacroilíaca sintomática postraumática",
      ],
      criteriosAvance: [
        "Marcha normalizada sin claudicación",
        "Fuerza muscular simétrica bilateral (≥85% del contralateral)",
        "Independencia completa en actividades de la vida diaria",
        "Capacidad de trote sin dolor pélvico",
        "Satisfacción funcional del paciente",
      ],
    },
  ],
  criteriosRetornoActividad: [
    "Consolidación radiográfica completa del anillo pélvico",
    "Marcha independiente normalizada sin Trendelenburg",
    "Fuerza de abductores y extensores de cadera ≥85% del contralateral",
    "Flexión de cadera ≥120 grados, extensión y abducción funcionales",
    "Capacidad de realizar sentadilla unipodal sin dolor",
    "Equilibrio unipodal ≥30 segundos",
    "Sin dolor pélvico significativo con actividades cotidianas",
    "Resolución de lesiones asociadas (urológicas, neurológicas)",
  ],
  complicacionesPotenciales: [
    "Trombosis venosa profunda y tromboembolismo pulmonar (riesgo muy elevado)",
    "Lesión neurológica del plexo lumbosacro (especialmente en fracturas de sacro)",
    "Disfunción urológica (lesión vesical o uretral)",
    "Disfunción sexual (especialmente en lesiones posteriores del anillo)",
    "Dolor crónico pélvico y sacroilíaco",
    "Mala unión o no unión del anillo pélvico",
    "Asimetría pélvica residual con discrepancia de longitud de miembros",
    "Artrosis sacroilíaca postraumática",
    "Infección del sitio quirúrgico",
    "Dolor por material de osteosíntesis prominente",
    "Marcha de Trendelenburg persistente",
    "Osificación heterotópica",
  ],
  referencias: [
    "ref-tile-2003",
    "ref-rickman-2019",
    "ref-kalmet-2018",
    "ref-kubiak-2013",
    "ref-lefaivre-2014",
  ],
  fechaActualizacion: "2026-03-31",
  nivelEvidencia: "Nivel III-IV: No existen ensayos aleatorizados sobre protocolos de carga post-cirugía de anillo pélvico (Rickman et al., 2019). Protocolos basados en consenso de expertos y series retrospectivas.",
};
