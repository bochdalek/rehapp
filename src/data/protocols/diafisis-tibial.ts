import type { Protocol } from "@/types/protocol";

/**
 * Protocolo de rehabilitación para fractura diafisaria de tibia
 * tratada con clavo endomedular.
 *
 * Basado en:
 * - Winquist RA, Hansen ST (1984) - Clasificación de fracturas diafisarias
 * - Bong MR et al. (2006) - Principios de enclavado endomedular
 * - Karladani AH et al. (2000) - Carga precoz tras enclavado endomedular de tibia
 * - Joveniaux P et al. (2011) - Enclavado endomedular de fracturas diafisarias de tibia
 */
export const diafisisTibialClavo: Protocol = {
  id: "diafisis-tibial-clavo",
  nombre:
    "Fractura Diafisaria de Tibia - Clavo Endomedular",
  nombreCorto: "Fx Diáfisis Tibia Clavo",
  descripcion:
    "Protocolo de rehabilitación postoperatoria para fracturas diafisarias de tibia tratadas mediante clavo endomedular bloqueado. La tibia es el hueso largo que más frecuentemente sufre fracturas diafisarias. El enclavado endomedular permite una movilización y carga precoz. La rehabilitación se centra en la recuperación del rango de movimiento de rodilla y tobillo, el control del edema, el fortalecimiento muscular progresivo y la normalización de la marcha.",
  region: "miembro-inferior",
  localizacion: "pierna",
  abordajeQuirurgico: ["clavo-endomedular"],
  clasificaciones: [
    "AO/OTA 42-A (fractura simple: espiral, oblicua, transversa)",
    "AO/OTA 42-B (fractura en cuña: cuña espiral, cuña por flexión, cuña fragmentada)",
    "AO/OTA 42-C (fractura compleja: espiral compleja, segmentaria, irregular compleja)",
    "Winquist-Hansen tipo I - Conminución mínima",
    "Winquist-Hansen tipo II - Conminución < 50% del diámetro cortical",
    "Winquist-Hansen tipo III - Conminución > 50% del diámetro cortical",
    "Winquist-Hansen tipo IV - Conminución circunferencial",
    "Gustilo-Anderson I - Herida < 1 cm (fractura abierta)",
    "Gustilo-Anderson II - Herida 1-10 cm (fractura abierta)",
    "Gustilo-Anderson IIIA/B/C - Contaminación severa (fractura abierta)",
  ],
  indicacionesQuirurgicas: [
    "Fractura diafisaria de tibia desplazada en adultos",
    "Fractura abierta de tibia (Gustilo I-IIIA tras desbridamiento)",
    "Fractura con acortamiento > 1 cm o angulación > 5° en cualquier plano",
    "Fractura segmentaria de tibia",
    "Fractura bilateral de tibia",
    "Politraumatismo con necesidad de fijación temprana",
    "Fallo del tratamiento conservador con pérdida de reducción",
  ],
  duracionTotal: "14-16 semanas",
  semanasTotal: 16,
  fases: [
    // =========================================================================
    // FASE 1: PROTECCIÓN Y MOVILIDAD PRECOZ (Semanas 0-4)
    // =========================================================================
    {
      id: "dt-clavo-fase-1",
      numero: 1,
      nombre: "Protección, movilidad precoz y carga por contacto",
      duracion: "Semanas 0-4",
      semanaInicio: 0,
      semanaFin: 4,
      objetivos: [
        "Proteger la fijación y favorecer la consolidación inicial",
        "Control del dolor, edema y respuesta inflamatoria",
        "Iniciar carga por contacto con muletas",
        "Recuperar rango de movimiento de rodilla y tobillo",
        "Prevenir trombosis venosa profunda",
        "Mantener fuerza del cuádriceps y activación muscular proximal",
      ],
      estadoCarga: "carga-contacto",
      cargaPorcentaje: 15,
      cargaDetalle:
        "Carga por contacto (aproximadamente 15% del peso corporal) con dos muletas. En fracturas estables con buen contacto cortical, puede iniciarse carga parcial precoz al 25% según indicación del cirujano. El pie toca el suelo manteniendo el patrón de marcha.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-90°",
          restriccion:
            "La vía de entrada del clavo por tendón rotuliano puede generar dolor anterior de rodilla que limite la flexión. No forzar.",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0° (extensión completa)",
          restriccion:
            "Prioridad. La pérdida de extensión es funcionalmente incapacitante. Isométricos de cuádriceps desde el día 1.",
        },
        {
          movimiento: "Dorsiflexión de tobillo",
          rangoObjetivo: "0-10°",
          restriccion:
            "El edema de la pierna y la inmovilización pueden generar rigidez precoz del tobillo. Iniciar movilización activa temprana.",
        },
        {
          movimiento: "Flexión plantar de tobillo",
          rangoObjetivo: "0-35°",
          restriccion: "Movilidad activa libre según tolerancia.",
        },
      ],
      ejercicios: [
        {
          id: "dt-clavo-ej-1-1",
          nombre: "Contracciones isométricas del cuádriceps",
          descripcion:
            "En decúbito supino con la pierna extendida, contraer firmemente el cuádriceps empujando la rodilla hacia abajo contra la superficie. Mantener la contracción 10 segundos. Colocar una toalla enrollada bajo la rodilla puede facilitar la activación muscular. Este ejercicio es fundamental para prevenir la atrofia del cuádriceps.",
          repeticiones: "10 segundos de contracción, 20 repeticiones",
          frecuencia: "Cada hora mientras esté despierto",
        },
        {
          id: "dt-clavo-ej-1-2",
          nombre: "Bombeo activo de tobillo (dorsiflexión y flexión plantar)",
          descripcion:
            "Dorsiflexión y flexión plantar activa y enérgica del tobillo de forma rítmica. Este ejercicio es esencial para la profilaxis de trombosis venosa profunda, la reducción del edema de la pierna y el mantenimiento de la movilidad del tobillo. Realizar con el miembro elevado para potenciar el drenaje venoso.",
          repeticiones: "30 repeticiones",
          frecuencia: "Cada hora mientras esté despierto",
        },
        {
          id: "dt-clavo-ej-1-3",
          nombre: "Elevación de la pierna recta (EPR)",
          descripcion:
            "En decúbito supino, contraer el cuádriceps bloqueando la rodilla en extensión completa y elevar la pierna recta hasta 30-45° del plano de la cama. Mantener 5 segundos y descender lentamente. Si existe lag de extensión, trabajar primero la extensión activa completa antes de iniciar la EPR.",
          repeticiones: "10-15 repeticiones, 3 series",
          frecuencia: "3-4 veces al día",
        },
        {
          id: "dt-clavo-ej-1-4",
          nombre: "Deslizamiento del talón para flexión de rodilla",
          descripcion:
            "En decúbito supino, deslizar el talón sobre la cama flexionando la rodilla progresivamente. Puede asistir con una toalla o banda alrededor del pie. El objetivo es recuperar la flexión de rodilla que puede verse limitada por el edema del muslo y la pierna, así como por dolor en la zona de entrada del clavo.",
          repeticiones: "15 repeticiones, mantener 5 segundos en flexión máxima, 3 series",
          frecuencia: "3-4 veces al día",
        },
        {
          id: "dt-clavo-ej-1-5",
          nombre: "Inversión y eversión activa del tobillo",
          descripcion:
            "Con el pie libre (sin apoyar), realizar movimientos de inversión (planta hacia adentro) y eversión (planta hacia afuera) del tobillo de forma activa y controlada. Este ejercicio mantiene la movilidad del complejo articular del tobillo y activa los músculos peroneos y tibial posterior.",
          repeticiones: "15 repeticiones en cada dirección, 2 series",
          frecuencia: "3 veces al día",
        },
      ],
      precauciones: [
        "Respetar carga por contacto con uso estricto de dos muletas",
        "Mantener el miembro inferior elevado cuando esté en reposo para control del edema",
        "Aplicar crioterapia sobre la pierna (no directamente sobre heridas) para control del edema",
        "Mantener profilaxis tromboembólica según indicación médica",
        "No retirar vendaje compresivo sin indicación del cirujano",
        "Vigilar el estado de las heridas, especialmente en fracturas abiertas",
        "Evitar rotación de la pierna durante transferencias y movilizaciones",
      ],
      banderasRojas: [
        "Dolor desproporcionado en la pierna con tensión de compartimentos (síndrome compartimental)",
        "Pérdida de pulsos distales o frialdad y palidez del pie",
        "Parestesias o anestesia del pie (lesión del nervio peroneo)",
        "Caída del pie (pie equino) por parálisis del nervio peroneo",
        "Signos de trombosis venosa profunda: edema asimétrico, dolor en la pantorrilla",
        "Signos de infección: eritema, secreción purulenta, fiebre (especialmente en fracturas abiertas)",
        "Deformidad progresiva de la pierna (pérdida de reducción)",
      ],
      criteriosAvance: [
        "Dolor controlado (EVA ≤ 4/10) con carga por contacto",
        "Flexión de rodilla ≥ 90°",
        "Extensión completa de rodilla (0°) activa",
        "Dorsiflexión de tobillo ≥ 10°",
        "Edema de la pierna en disminución progresiva",
        "Heridas quirúrgicas sin signos de infección",
        "Radiografía sin pérdida de reducción",
      ],
    },
    // =========================================================================
    // FASE 2: CARGA PARCIAL Y FORTALECIMIENTO INICIAL (Semanas 4-8)
    // =========================================================================
    {
      id: "dt-clavo-fase-2",
      numero: 2,
      nombre: "Carga parcial progresiva y fortalecimiento",
      duracion: "Semanas 4-8",
      semanaInicio: 4,
      semanaFin: 8,
      objetivos: [
        "Progresar de carga por contacto a carga parcial (25-50% del peso corporal)",
        "Mejorar rango de movimiento de rodilla y tobillo",
        "Fortalecer cuádriceps, tríceps sural y musculatura de la cadera",
        "Mejorar el patrón de marcha con auxiliares de marcha",
        "Controlar el edema residual de la pierna",
      ],
      estadoCarga: "carga-parcial",
      cargaPorcentaje: 50,
      cargaDetalle:
        "Carga parcial progresiva del 25% al 50% del peso corporal con dos muletas. Progresar según la evidencia radiográfica de formación de callo óseo y la tolerancia clínica. Educar al paciente con báscula sobre la carga adecuada.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-120°",
          restriccion: "Progresar activamente. Bicicleta estática cuando alcance 100-110°.",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0° (completa)",
          restriccion: "Mantener extensión completa. Cualquier déficit debe abordarse.",
        },
        {
          movimiento: "Dorsiflexión de tobillo",
          rangoObjetivo: "0-15°",
          restriccion:
            "Esencial para la marcha normal. Si hay restricción, intensificar movilización y estiramiento del tríceps sural.",
        },
        {
          movimiento: "Flexión plantar de tobillo",
          rangoObjetivo: "0-40°",
          restriccion: "Rango funcional. Progresar fortalecimiento del tríceps sural.",
        },
      ],
      ejercicios: [
        {
          id: "dt-clavo-ej-2-1",
          nombre: "Bicicleta estática sin resistencia",
          descripcion:
            "Pedaleo en bicicleta estática con el asiento a altura adecuada. Iniciar con períodos cortos de 5-10 minutos sin resistencia e incrementar la duración progresivamente. La bicicleta favorece la recuperación de la flexión de rodilla y la movilidad del tobillo de forma cíclica y sin impacto.",
          repeticiones: "10-20 minutos de pedaleo continuo",
          frecuencia: "1-2 veces al día",
        },
        {
          id: "dt-clavo-ej-2-2",
          nombre: "Extensión de rodilla en sedestación contra gravedad",
          descripcion:
            "Sentado al borde de la silla con las piernas colgando, extender activamente la rodilla hasta extensión completa. Mantener 5 segundos con contracción firme del cuádriceps. Progresar con tobillera de peso (0,5-1 kg) según tolerancia. Vigilar dolor anterior de rodilla por la zona de entrada del clavo.",
          repeticiones: "15 repeticiones, 3 series",
          frecuencia: "2 veces al día",
        },
        {
          id: "dt-clavo-ej-2-3",
          nombre: "Elevación de talones bilateral (calf raises) asistida",
          descripcion:
            "De pie con apoyo en una barra o pared, elevarse sobre las puntas de ambos pies distribuyendo peso equitativamente. Mantener 3-5 segundos arriba y descender lentamente. Este ejercicio fortalece el tríceps sural y mejora la estabilidad del tobillo. Comenzar bilateralmente y progresar a mayor carga en el lado afectado.",
          repeticiones: "15 repeticiones, 3 series",
          frecuencia: "1-2 veces al día",
        },
        {
          id: "dt-clavo-ej-2-4",
          nombre: "Estiramiento del tríceps sural en escalón",
          descripcion:
            "De pie en el borde de un escalón con el antepié apoyado, descender el talón por debajo del nivel del escalón manteniendo la rodilla extendida para estirar el gastrocnemio, y luego con la rodilla ligeramente flexionada para el sóleo. Mantener cada estiramiento 30 segundos. La dorsiflexión del tobillo es clave para la marcha normal.",
          repeticiones: "3 repeticiones de 30 segundos cada posición",
          frecuencia: "3 veces al día",
        },
        {
          id: "dt-clavo-ej-2-5",
          nombre: "Puente glúteo bilateral",
          descripcion:
            "En decúbito supino con ambas rodillas flexionadas y pies apoyados en el suelo, elevar la pelvis formando una línea recta desde los hombros hasta las rodillas. Mantener 5-10 segundos. Fortalece el glúteo mayor, los isquiotibiales y los estabilizadores del tronco, necesarios para normalizar el patrón de marcha.",
          repeticiones: "15 repeticiones con mantenimiento de 5-10 segundos, 3 series",
          frecuencia: "1-2 veces al día",
        },
      ],
      precauciones: [
        "No exceder la carga parcial indicada hasta verificación radiográfica del callo",
        "Vigilar y tratar el edema residual de la pierna con elevación y compresión",
        "Evitar ejercicios de impacto (saltos, carrera)",
        "Monitorizar el dolor anterior de rodilla (frecuente tras clavo tibial por entrada infrapatelar)",
        "No abandonar muletas prematuramente",
      ],
      banderasRojas: [
        "Aumento del dolor con la progresión de carga",
        "Edema de la pierna que no disminuye o aumenta progresivamente",
        "Signos radiográficos de retardo de consolidación a las 6-8 semanas",
        "Dolor anterior de rodilla severo que impide la rehabilitación",
        "Deformidad angular progresiva de la pierna (fallo del clavo o pérdida de fijación)",
      ],
      criteriosAvance: [
        "Carga parcial al 50% tolerada sin aumento del dolor",
        "Flexión de rodilla ≥ 120°",
        "Dorsiflexión de tobillo ≥ 15°",
        "Evidencia radiográfica de callo óseo en formación",
        "Fuerza del cuádriceps ≥ 3+/5 en la escala MRC",
        "Edema controlado de la pierna",
      ],
    },
    // =========================================================================
    // FASE 3: CARGA PROGRESIVA Y FORTALECIMIENTO AVANZADO (Semanas 8-12)
    // =========================================================================
    {
      id: "dt-clavo-fase-3",
      numero: 3,
      nombre: "Carga progresiva y fortalecimiento avanzado",
      duracion: "Semanas 8-12",
      semanaInicio: 8,
      semanaFin: 12,
      objetivos: [
        "Progresar a carga progresiva (50-100% del peso corporal)",
        "Transición a marcha independiente sin auxiliares de marcha",
        "Alcanzar rango de movimiento funcional completo de rodilla y tobillo",
        "Fortalecimiento avanzado del miembro inferior completo",
        "Mejorar equilibrio, propiocepción y resistencia cardiovascular",
      ],
      estadoCarga: "carga-progresiva",
      cargaPorcentaje: 75,
      cargaDetalle:
        "Progresión de carga del 50% al 100% del peso corporal. Transición de dos muletas a una muleta contralateral, y luego a marcha sin auxiliares según consolidación y tolerancia. Usar báscula para verificar progresión de carga.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-135°",
          restriccion: "Rango funcional completo. Considerar movilización bajo anestesia si hay bloqueo.",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0° (completa)",
          restriccion: "Extensión completa obligatoria para marcha normal.",
        },
        {
          movimiento: "Dorsiflexión de tobillo",
          rangoObjetivo: "0-20°",
          restriccion: "Esencial para fase de apoyo medio y despegue de la marcha.",
        },
        {
          movimiento: "Flexión plantar de tobillo",
          rangoObjetivo: "0-45°",
          restriccion: "Rango completo necesario para despegue normal y propulsión en la marcha.",
        },
      ],
      ejercicios: [
        {
          id: "dt-clavo-ej-3-1",
          nombre: "Sentadilla progresiva libre",
          descripcion:
            "Sentadilla bipodal progresando la profundidad de 45° a 90° de flexión de rodilla. Mantener distribución simétrica del peso. Puede usar soporte (barra, TRX) inicialmente. El ejercicio trabaja la cadena cinética completa del miembro inferior y simula actividades funcionales como sentarse y levantarse.",
          repeticiones: "12-15 repeticiones, 3 series",
          frecuencia: "1 vez al día, 5 días por semana",
        },
        {
          id: "dt-clavo-ej-3-2",
          nombre: "Elevación de talones unipodal (single leg calf raise)",
          descripcion:
            "De pie sobre el miembro afectado con apoyo en pared o barra, elevarse sobre la punta del pie. Descender lentamente (fase excéntrica controlada en 3-4 segundos). Este ejercicio fortalece el tríceps sural de forma específica y es fundamental para recuperar la potencia del despegue en la marcha.",
          repeticiones: "10-15 repeticiones, 3 series",
          frecuencia: "1 vez al día, 5 días por semana",
        },
        {
          id: "dt-clavo-ej-3-3",
          nombre: "Subida y bajada de escalón (step-up/step-down)",
          descripcion:
            "Subir y bajar un escalón de 15-20 cm con la pierna afectada como pierna líder en la subida. Progresar la altura del escalón gradualmente hasta 25 cm. Trabaja la fuerza concéntrica y excéntrica del cuádriceps y glúteo mayor. Controlar la alineación de rodilla (evitar valgo dinámico).",
          repeticiones: "10-15 repeticiones cada pierna, 3 series",
          frecuencia: "1 vez al día",
        },
        {
          id: "dt-clavo-ej-3-4",
          nombre: "Entrenamiento propioceptivo en plato de equilibrio",
          descripcion:
            "Apoyo monopodal sobre el miembro afectado en plato de equilibrio o superficie inestable. Comenzar con apoyo en barra y progresar a sin apoyo. Agregar perturbaciones externas (lanzar y atrapar una pelota) para aumentar la demanda propioceptiva. Esencial para prevenir esguinces de tobillo recurrentes.",
          repeticiones: "30-45 segundos, 5-8 repeticiones",
          frecuencia: "2 veces al día",
        },
        {
          id: "dt-clavo-ej-3-5",
          nombre: "Marcha en cinta rodante",
          descripcion:
            "Caminata en cinta rodante a velocidad progresiva. Comenzar con apoyo en pasamanos e incrementar velocidad y duración. Enfocarse en normalizar el patrón de marcha, la longitud de paso simétrica y el tiempo de apoyo bilateral equitativo. Progresar hasta caminar a velocidad normal sin apoyo.",
          repeticiones: "15-30 minutos de caminata continua",
          frecuencia: "1 vez al día",
        },
      ],
      precauciones: [
        "Confirmar progresión del callo óseo antes de aumentar carga significativamente",
        "No iniciar trote hasta consolidación radiográfica firme",
        "Vigilar y tratar dolor anterior de rodilla persistente (muy frecuente con clavo tibial)",
        "Mantener control del edema con medias de compresión si persiste",
        "Evitar actividades en terreno irregular hasta marcha normalizada en superficie plana",
      ],
      banderasRojas: [
        "Dolor en el foco de fractura con la carga progresiva (posible pseudoartrosis)",
        "Falta de progresión radiográfica del callo óseo a las 10-12 semanas",
        "Dolor severo en la zona anterior de la rodilla que limita la rehabilitación",
        "Deformidad angular de la pierna (valgo, varo, recurvatum)",
        "Claudicación persistente que no mejora con la rehabilitación",
      ],
      criteriosAvance: [
        "Marcha independiente sin auxiliares de marcha y sin claudicación",
        "Carga completa tolerada sin dolor en el foco de fractura",
        "Flexión de rodilla ≥ 135°",
        "Dorsiflexión de tobillo ≥ 20°",
        "Consolidación radiográfica evidente con callo maduro",
        "Fuerza del cuádriceps y tríceps sural ≥ 4/5 en la escala MRC",
      ],
    },
    // =========================================================================
    // FASE 4: RETORNO FUNCIONAL COMPLETO (Semanas 12-16)
    // =========================================================================
    {
      id: "dt-clavo-fase-4",
      numero: 4,
      nombre: "Retorno funcional y actividad completa",
      duracion: "Semanas 12-16",
      semanaInicio: 12,
      semanaFin: 16,
      objetivos: [
        "Carga completa sin restricciones",
        "Alcanzar fuerza simétrica respecto al lado contralateral",
        "Retorno progresivo a actividades deportivas y laborales",
        "Entrenamiento funcional avanzado, pliometría y agilidad",
        "Alta del protocolo de rehabilitación",
      ],
      estadoCarga: "carga-completa",
      cargaPorcentaje: 100,
      cargaDetalle:
        "Carga completa sin restricciones tras confirmación de consolidación radiográfica. Progresión a actividades de impacto y deportes según tolerancia.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-140°",
          restriccion: "Rango funcional completo simétrico al lado contralateral.",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0° (completa)",
          restriccion: "Extensión completa obligatoria.",
        },
        {
          movimiento: "Dorsiflexión de tobillo",
          rangoObjetivo: "0-20°",
          restriccion: "Simétrica al lado contralateral.",
        },
        {
          movimiento: "Flexión plantar de tobillo",
          rangoObjetivo: "0-50°",
          restriccion: "Rango completo para actividades deportivas.",
        },
      ],
      ejercicios: [
        {
          id: "dt-clavo-ej-4-1",
          nombre: "Programa de carrera progresiva (return to run)",
          descripcion:
            "Protocolo de retorno a carrera: comenzar con caminata rápida alternada con trote suave (intervalos de 1 minuto de trote por 2 minutos de caminata). Progresar la proporción de trote gradualmente sobre 4-6 semanas. Solo iniciar tras consolidación radiográfica completa confirmada y marcha normalizada sin dolor.",
          repeticiones: "20-30 minutos por sesión",
          frecuencia: "3 veces por semana en días alternos",
        },
        {
          id: "dt-clavo-ej-4-2",
          nombre: "Ejercicios pliométricos progresivos",
          descripcion:
            "Saltos bipodales sobre el sitio, saltos al cajón, saltos laterales y saltos de tijera. Progresar de bipodal a unipodal y de superficie blanda a dura. Estos ejercicios preparan el hueso consolidado y la musculatura para las demandas de actividades deportivas de impacto.",
          repeticiones: "8-10 repeticiones, 3 series",
          frecuencia: "2-3 veces por semana",
        },
        {
          id: "dt-clavo-ej-4-3",
          nombre: "Entrenamiento de agilidad y cambios de dirección",
          descripcion:
            "Ejercicios de agilidad: desplazamientos laterales, cariocas, zigzag entre conos, y cambios de dirección rápidos. Progresar la velocidad gradualmente. Estos ejercicios son esenciales para deportistas que necesitan retorno a deportes con demandas multidireccionales.",
          repeticiones: "5-8 repeticiones de cada ejercicio, 2-3 series",
          frecuencia: "2-3 veces por semana",
        },
        {
          id: "dt-clavo-ej-4-4",
          nombre: "Fortalecimiento avanzado en prensa y sentadilla con carga",
          descripcion:
            "Prensa de pierna con carga progresiva y sentadilla con barra. Trabajar con cargas que permitan 10-12 repeticiones con buena técnica. El fortalecimiento avanzado restaura la simetría de fuerza entre ambos miembros inferiores, requisito para el retorno seguro al deporte.",
          repeticiones: "10-12 repeticiones, 3-4 series",
          frecuencia: "3 veces por semana",
        },
        {
          id: "dt-clavo-ej-4-5",
          nombre: "Entrenamiento funcional específico por deporte",
          descripcion:
            "Ejercicios que simulan las demandas del deporte o actividad laboral del paciente. Incluye sprints progresivos, saltos específicos, gestos deportivos y actividades que reproduzcan la demanda funcional completa. Individualizar según las necesidades del paciente.",
          repeticiones: "Según la actividad, 20-30 minutos",
          frecuencia: "3-4 veces por semana",
        },
      ],
      precauciones: [
        "No iniciar carrera ni saltos sin consolidación radiográfica completa confirmada",
        "Progresión gradual de impacto sobre 4-6 semanas",
        "Valorar retiro de tornillos de bloqueo si producen molestias (especialmente los distales cerca del tobillo)",
        "Valorar retiro del clavo si el dolor anterior de rodilla es persistente y limitante",
        "Continuar programa de mantenimiento de fuerza y flexibilidad tras el alta",
      ],
      banderasRojas: [
        "Dolor en el foco de fractura con actividades de impacto",
        "Fractura por estrés o refractura (especialmente tras retiro del clavo)",
        "Dolor anterior de rodilla severo que no resuelve (puede requerir retiro de tornillos proximales)",
        "Dolor persistente en el tobillo por tornillos de bloqueo distales",
        "Limitación funcional de rodilla o tobillo que no mejora con rehabilitación",
      ],
      criteriosAvance: [
        "Consolidación radiográfica completa",
        "Fuerza del cuádriceps y tríceps sural ≥ 90% del lado contralateral",
        "Rango de movimiento completo y simétrico de rodilla y tobillo",
        "Capacidad de correr sin dolor ni claudicación",
        "Test funcionales superados (single leg hop test ≥ 90% del lado sano)",
      ],
    },
  ],
  criteriosRetornoActividad: [
    "Consolidación radiográfica completa de la fractura",
    "Rango de movimiento completo de rodilla (0-140°) y tobillo (dorsiflexión ≥ 20°)",
    "Fuerza del cuádriceps y tríceps sural ≥ 90% comparado con el lado contralateral",
    "Marcha normalizada sin claudicación ni auxiliares de marcha",
    "Capacidad de trotar, subir/bajar escaleras y ponerse de puntillas sin dolor",
    "Test de salto monopodal (single leg hop) ≥ 90% del lado contralateral",
    "Ausencia de dolor en el foco de fractura con actividades de impacto",
    "Aprobación del cirujano tratante para retorno a actividades de alto impacto",
  ],
  complicacionesPotenciales: [
    "Dolor anterior de rodilla (complicación más frecuente, 10-70% según series)",
    "Pseudoartrosis (más frecuente en tercio medio y distal)",
    "Retardo de consolidación",
    "Síndrome compartimental (urgencia en postoperatorio inmediato)",
    "Lesión del nervio peroneo (especialmente con abordaje suprapatelar)",
    "Malunión angular (valgo, varo, procurvatum, recurvatum)",
    "Malrotación tibial",
    "Acortamiento tibial en fracturas conminutas",
    "Trombosis venosa profunda",
    "Infección (mayor riesgo en fracturas abiertas)",
    "Rigidez de rodilla y tobillo",
    "Dolor por tornillos de bloqueo (proximal o distal)",
    "Fractura periimplante en el extremo del clavo",
  ],
  referencias: ["ref-winquist-1984", "ref-bong-2006"],
  fechaActualizacion: "2025-03-15",
};
