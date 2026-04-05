import type { Protocol } from "@/types/protocol";

/**
 * Protocolo de rehabilitación para fractura diafisaria de fémur
 * tratada con clavo endomedular anterógrado.
 *
 * Basado en:
 * - Winquist RA, Hansen ST (1984) - Clasificación de fracturas diafisarias
 * - Bong MR et al. (2006) - Enclavado endomedular de fracturas femorales
 * - Wolinsky PR et al. (2001) - Enclavado endomedular anterógrado del fémur
 * - Ricci WM et al. (2009) - Rehabilitación tras fijación de fracturas diafisarias de fémur
 */
export const diafisisFemoralClavo: Protocol = {
  id: "diafisis-femoral-clavo",
  nombre:
    "Fractura Diafisaria de Fémur - Clavo Endomedular Anterógrado",
  nombreCorto: "Fx Diáfisis Fémur Clavo",
  descripcion:
    "Protocolo de rehabilitación postoperatoria para fracturas diafisarias de fémur tratadas mediante clavo endomedular anterógrado bloqueado. El enclavado endomedular permite una carga precoz progresiva. La rehabilitación se centra en la recuperación del rango de movimiento de rodilla y cadera, el fortalecimiento del cuádriceps y la marcha progresiva. La progresión debe individualizarse según el patrón de fractura, la estabilidad de la fijación y la evidencia radiográfica de consolidación.",
  region: "miembro-inferior",
  localizacion: "muslo",
  abordajeQuirurgico: ["clavo-endomedular"],
  clasificaciones: [
    "AO/OTA 32-A (fractura simple: espiral, oblicua, transversa)",
    "AO/OTA 32-B (fractura en cuña: cuña espiral, cuña por flexión, cuña fragmentada)",
    "AO/OTA 32-C (fractura compleja: espiral compleja, segmentaria, irregular compleja)",
    "Winquist-Hansen tipo I - Conminución mínima",
    "Winquist-Hansen tipo II - Conminución < 50% del diámetro cortical",
    "Winquist-Hansen tipo III - Conminución > 50% del diámetro cortical",
    "Winquist-Hansen tipo IV - Conminución circunferencial sin contacto cortical",
  ],
  indicacionesQuirurgicas: [
    "Fractura diafisaria de fémur en adultos (indicación estándar de enclavado endomedular)",
    "Fracturas desplazadas y anguladas que no mantienen reducción conservadora",
    "Politraumatismo con necesidad de fijación temprana",
    "Fractura patológica de la diáfisis femoral",
    "Fractura bilateral de fémur",
    "Fractura ipsilateral de fémur y tibia (rodilla flotante)",
  ],
  duracionTotal: "14-16 semanas",
  semanasTotal: 16,
  fases: [
    // =========================================================================
    // FASE 1: PROTECCIÓN Y MOVILIDAD PRECOZ (Semanas 0-4)
    // =========================================================================
    {
      id: "df-clavo-fase-1",
      numero: 1,
      nombre: "Protección, movilidad precoz y carga por contacto",
      duracion: "Semanas 0-4",
      semanaInicio: 0,
      semanaFin: 4,
      objetivos: [
        "Proteger la fijación interna y favorecer la consolidación inicial",
        "Control del dolor y del edema del miembro inferior",
        "Iniciar carga por contacto con muletas o andador",
        "Recuperar rango de movimiento pasivo y activo asistido de rodilla y cadera",
        "Prevenir trombosis venosa profunda y complicaciones por inmovilidad",
        "Activación precoz del cuádriceps",
      ],
      estadoCarga: "carga-contacto",
      cargaPorcentaje: 15,
      cargaDetalle:
        "Carga por contacto (aproximadamente 15% del peso corporal) con andador o dos muletas. El pie toca el suelo sin transferir peso significativo. Progresión según tolerancia y patrón de fractura.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-90°",
          restriccion:
            "Progresión gradual. El edema del muslo puede limitar la flexión inicial. No forzar.",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0° (extensión completa)",
          restriccion:
            "Prioridad absoluta. La pérdida de extensión de rodilla es la complicación funcional más incapacitante.",
        },
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-90°",
          restriccion:
            "Movilidad activa asistida. Evitar flexión forzada que genere dolor en el muslo.",
        },
        {
          movimiento: "Extensión de cadera",
          rangoObjetivo: "0° (neutra)",
          restriccion: "Evitar contractura en flexión. Decúbito prono si tolera.",
        },
      ],
      ejercicios: [
        {
          id: "df-clavo-ej-1-1",
          nombre: "Contracciones isométricas del cuádriceps",
          descripcion:
            "En decúbito supino o sentado con la pierna extendida, contraer el cuádriceps empujando la rodilla hacia abajo contra la cama o el suelo. Mantener la contracción 10 segundos. Este ejercicio es fundamental para prevenir la atrofia del cuádriceps y mantener la extensión completa de la rodilla.",
          repeticiones: "10 segundos de contracción, 20 repeticiones",
          frecuencia: "Cada hora mientras esté despierto",
        },
        {
          id: "df-clavo-ej-1-2",
          nombre: "Elevación de la pierna recta (EPR)",
          descripcion:
            "En decúbito supino, contraer firmemente el cuádriceps para bloquear la rodilla en extensión, luego elevar la pierna recta hasta 30-45° del plano de la cama. Mantener 5 segundos y descender lentamente. Si presenta lag de extensión, no realizar hasta que logre extensión activa completa.",
          repeticiones: "10-15 repeticiones, 3 series",
          frecuencia: "3-4 veces al día",
        },
        {
          id: "df-clavo-ej-1-3",
          nombre: "Flexo-extensión de rodilla en sedestación (asistida por gravedad)",
          descripcion:
            "Sentado al borde de la cama o silla con las piernas colgando, realizar flexión y extensión de rodilla utilizando la gravedad como asistencia para la flexión. Puede usar el pie contralateral como apoyo para asistir el movimiento. El objetivo es recuperar progresivamente el rango de flexión.",
          repeticiones: "15-20 repeticiones, 2-3 series",
          frecuencia: "3-4 veces al día",
        },
        {
          id: "df-clavo-ej-1-4",
          nombre: "Bombeo de tobillo y circunducción",
          descripcion:
            "Dorsiflexión y flexión plantar activa del tobillo de forma rítmica y enérgica junto con movimientos circulares del tobillo. Este ejercicio es esencial para la prevención de trombosis venosa profunda, reducción del edema y mantenimiento de la movilidad del tobillo.",
          repeticiones: "20-30 repeticiones de cada movimiento",
          frecuencia: "Cada hora mientras esté despierto",
        },
        {
          id: "df-clavo-ej-1-5",
          nombre: "Deslizamiento del talón para flexión de rodilla",
          descripcion:
            "En decúbito supino, deslizar el talón sobre la cama acercando el pie al glúteo para flexionar la rodilla. Puede asistir el movimiento con una toalla o banda colocada alrededor del pie. El movimiento debe ser lento y controlado, progresando el rango cada sesión.",
          repeticiones: "15 repeticiones, mantener 5 segundos en máxima flexión, 3 series",
          frecuencia: "3-4 veces al día",
        },
      ],
      precauciones: [
        "Respetar estrictamente la carga por contacto indicada con uso de auxiliares de marcha",
        "No realizar flexión forzada de rodilla contra resistencia",
        "Priorizar la extensión completa de rodilla sobre la flexión",
        "Mantener profilaxis tromboembólica según indicación médica",
        "Vigilar signos de síndrome compartimental en las primeras 24-48 horas",
        "No permitir rotaciones del miembro inferior durante transferencias",
      ],
      banderasRojas: [
        "Dolor desproporcionado en el muslo con aumento progresivo",
        "Tensión excesiva del compartimento del muslo (síndrome compartimental)",
        "Signos de trombosis venosa profunda: edema asimétrico, dolor en la pantorrilla, signo de Homans",
        "Incapacidad para contraer el cuádriceps (posible lesión del nervio femoral)",
        "Signos de infección en heridas quirúrgicas (eritema, secreción, fiebre)",
        "Acortamiento o rotación del miembro (pérdida de reducción)",
      ],
      criteriosAvance: [
        "Dolor controlado (EVA ≤ 4/10) con carga por contacto",
        "Flexión de rodilla ≥ 90°",
        "Extensión completa de rodilla (0°) activa",
        "Elevación de la pierna recta sin lag de extensión",
        "Herida quirúrgica en proceso de cicatrización sin signos de infección",
        "Radiografía sin signos de pérdida de reducción",
      ],
    },
    // =========================================================================
    // FASE 2: CARGA PARCIAL Y FORTALECIMIENTO INICIAL (Semanas 4-8)
    // =========================================================================
    {
      id: "df-clavo-fase-2",
      numero: 2,
      nombre: "Carga parcial progresiva y fortalecimiento",
      duracion: "Semanas 4-8",
      semanaInicio: 4,
      semanaFin: 8,
      objetivos: [
        "Progresar la carga de contacto a carga parcial (25-50% del peso corporal)",
        "Mejorar rango de movimiento de rodilla hacia flexión completa",
        "Fortalecer cuádriceps, isquiotibiales y musculatura de la cadera",
        "Mejorar el patrón de marcha con auxiliares de marcha",
        "Entrenamiento del equilibrio en bipedestación",
      ],
      estadoCarga: "carga-parcial",
      cargaPorcentaje: 50,
      cargaDetalle:
        "Carga parcial progresiva del 25% al 50% del peso corporal con dos muletas. Progresar según tolerancia al dolor y evidencia radiográfica de formación de callo óseo. Utilizar báscula para educar al paciente sobre la carga adecuada.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-120°",
          restriccion: "Progresar activamente. Utilizar bicicleta estática si alcanza 110° de flexión.",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0° (completa)",
          restriccion: "Mantener extensión completa. No debe haber déficit de extensión.",
        },
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-110°",
          restriccion: "Movilidad activa sin restricción significativa.",
        },
        {
          movimiento: "Abducción de cadera",
          rangoObjetivo: "0-30°",
          restriccion: "Iniciar fortalecimiento activo de abductores.",
        },
      ],
      ejercicios: [
        {
          id: "df-clavo-ej-2-1",
          nombre: "Sentadilla parcial en pared (wall slide)",
          descripcion:
            "Con la espalda apoyada contra la pared, deslizarse hacia abajo flexionando las rodillas hasta 45-60°. Mantener la posición 10 segundos y regresar a la posición inicial. La pared proporciona soporte y permite controlar la carga sobre el miembro afectado. Progresar la profundidad gradualmente.",
          repeticiones: "10 repeticiones con 10 segundos de mantenimiento, 3 series",
          frecuencia: "2 veces al día",
        },
        {
          id: "df-clavo-ej-2-2",
          nombre: "Bicicleta estática sin resistencia",
          descripcion:
            "Pedaleo en bicicleta estática comenzando con el asiento alto para reducir la demanda de flexión de rodilla. Iniciar con períodos cortos de 5-10 minutos sin resistencia e incrementar progresivamente la duración. La bicicleta mejora la flexión de rodilla y la resistencia cardiovascular.",
          repeticiones: "10-20 minutos de pedaleo continuo",
          frecuencia: "1-2 veces al día",
        },
        {
          id: "df-clavo-ej-2-3",
          nombre: "Extensión de rodilla en sedestación contra gravedad",
          descripcion:
            "Sentado con las piernas colgando, extender la rodilla activamente hasta extensión completa. Mantener 5 segundos con contracción firme del cuádriceps. Comenzar sin peso y progresar con tobillera de peso (0,5-1 kg) según la fuerza del cuádriceps y la tolerancia.",
          repeticiones: "15 repeticiones, 3 series",
          frecuencia: "2 veces al día",
        },
        {
          id: "df-clavo-ej-2-4",
          nombre: "Abducción de cadera en decúbito lateral",
          descripcion:
            "En decúbito lateral sobre el lado sano, elevar la pierna afectada en abducción manteniendo la rodilla extendida y el pie en posición neutra. Elevar hasta 30° y descender lentamente. Fortalece el glúteo medio, esencial para la estabilidad de la marcha y la pelvis.",
          repeticiones: "15 repeticiones, 3 series",
          frecuencia: "1 vez al día",
        },
        {
          id: "df-clavo-ej-2-5",
          nombre: "Puente glúteo bilateral",
          descripcion:
            "En decúbito supino con ambas rodillas flexionadas y pies apoyados en el suelo, elevar la pelvis despegando los glúteos de la superficie hasta formar una línea recta desde los hombros hasta las rodillas. Mantener 5-10 segundos. Fortalece glúteo mayor, isquiotibiales y estabilizadores del tronco.",
          repeticiones: "15 repeticiones con 5-10 segundos de mantenimiento, 3 series",
          frecuencia: "1-2 veces al día",
        },
      ],
      precauciones: [
        "No exceder la carga parcial indicada hasta verificación radiográfica",
        "Evitar torsión del miembro inferior durante cambios de dirección en la marcha",
        "No realizar ejercicios de impacto (saltos, carrera)",
        "Vigilar la aparición de dolor en la zona del tornillo de bloqueo proximal (cadera)",
        "No abandonar las muletas prematuramente",
      ],
      banderasRojas: [
        "Dolor que aumenta con la carga progresiva en lugar de disminuir",
        "Acortamiento progresivo del miembro (pérdida de longitud femoral)",
        "Dolor persistente en la cadera o rodilla que no mejora con reposo",
        "Signos radiográficos de retardo de consolidación a las 6-8 semanas",
        "Bloqueo mecánico de la rodilla (lesión meniscal o cuerpo libre asociados)",
      ],
      criteriosAvance: [
        "Carga parcial al 50% tolerada sin aumento del dolor",
        "Flexión de rodilla ≥ 120°",
        "Evidencia radiográfica de callo óseo en formación",
        "Fuerza del cuádriceps ≥ 3+/5 en la escala MRC",
        "Patrón de marcha aceptable con dos muletas",
      ],
    },
    // =========================================================================
    // FASE 3: CARGA PROGRESIVA Y FORTALECIMIENTO AVANZADO (Semanas 8-12)
    // =========================================================================
    {
      id: "df-clavo-fase-3",
      numero: 3,
      nombre: "Carga progresiva y fortalecimiento avanzado",
      duracion: "Semanas 8-12",
      semanaInicio: 8,
      semanaFin: 12,
      objetivos: [
        "Progresar a carga progresiva (50-100% del peso corporal)",
        "Transición de dos muletas a una muleta y luego a marcha independiente",
        "Alcanzar rango de movimiento completo de rodilla y cadera",
        "Fortalecimiento avanzado del cuádriceps y cadena posterior",
        "Mejorar resistencia cardiovascular y equilibrio dinámico",
      ],
      estadoCarga: "carga-progresiva",
      cargaPorcentaje: 75,
      cargaDetalle:
        "Progresión de carga del 50% al 100% del peso corporal. Transición de dos muletas a una muleta contralateral, y posteriormente a marcha sin auxiliares según consolidación radiográfica y tolerancia clínica.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-135°",
          restriccion: "Alcanzar rango funcional completo. Considerar movilización si no progresa.",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0° (completa)",
          restriccion: "Debe ser completa. Cualquier déficit requiere intervención específica.",
        },
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-120°",
          restriccion: "Rango funcional completo.",
        },
        {
          movimiento: "Extensión de cadera",
          rangoObjetivo: "0-15° (hiperextensión)",
          restriccion: "Necesaria para fase de despegue normal de la marcha.",
        },
      ],
      ejercicios: [
        {
          id: "df-clavo-ej-3-1",
          nombre: "Sentadilla progresiva libre",
          descripcion:
            "Sentadilla bipodal progresando la profundidad desde 45° hasta 90° de flexión de rodilla. Mantener el peso distribuido simétricamente entre ambos miembros. Puede utilizar soporte (barra, TRX) para asistencia. Progresar a sentadilla unipodal parcial cuando la fuerza lo permita.",
          repeticiones: "12-15 repeticiones, 3 series",
          frecuencia: "1 vez al día, 5 días por semana",
        },
        {
          id: "df-clavo-ej-3-2",
          nombre: "Prensa de pierna (leg press) con carga progresiva",
          descripcion:
            "En máquina de prensa de pierna, realizar extensión de rodilla y cadera con carga progresiva. Comenzar con el 25% del peso corporal e incrementar 5 kg por semana según tolerancia. El rango de movimiento debe incluir 0-90° de flexión de rodilla como mínimo.",
          repeticiones: "12-15 repeticiones, 3 series",
          frecuencia: "3 veces por semana",
        },
        {
          id: "df-clavo-ej-3-3",
          nombre: "Subida y bajada de escalón (step-up/step-down)",
          descripcion:
            "Subir y bajar un escalón de 15-20 cm de altura con la pierna afectada como pierna líder en la subida. Progresar la altura del escalón gradualmente. Este ejercicio trabaja fuerza excéntrica y concéntrica del cuádriceps y glúteo mayor, y simula una actividad funcional esencial.",
          repeticiones: "10-15 repeticiones cada pierna, 3 series",
          frecuencia: "1 vez al día",
        },
        {
          id: "df-clavo-ej-3-4",
          nombre: "Entrenamiento del equilibrio en apoyo monopodal",
          descripcion:
            "Bipedestación monopodal sobre el miembro afectado manteniendo el equilibrio durante 30 segundos. Progresar desde superficie estable con apoyo manual, a sin apoyo, y finalmente sobre superficie inestable (colchoneta, plato de equilibrio). Fortalecer propioceptores y mejorar estabilidad dinámica.",
          repeticiones: "30 segundos, 5-8 repeticiones",
          frecuencia: "2 veces al día",
        },
        {
          id: "df-clavo-ej-3-5",
          nombre: "Marcha en cinta rodante",
          descripcion:
            "Caminata en cinta rodante a velocidad cómoda comenzando con apoyo en pasamanos. Progresar velocidad y duración gradualmente. Este ejercicio mejora el patrón de marcha, la resistencia cardiovascular y la confianza del paciente para caminar sin auxiliares de marcha.",
          repeticiones: "15-30 minutos de caminata continua",
          frecuencia: "1 vez al día",
        },
      ],
      precauciones: [
        "Confirmar progresión del callo óseo radiográficamente antes de aumentar carga significativamente",
        "No iniciar actividades de impacto (trotar, saltar) hasta consolidación firme",
        "Vigilar asimetría de la marcha y compensaciones (Trendelenburg)",
        "No abandonar la última muleta hasta marcha normalizada y sin dolor",
        "Evitar torsión del fémur en ejercicios de pivote o cambios de dirección bruscos",
      ],
      banderasRojas: [
        "Dolor en el foco de fractura con la carga progresiva",
        "Falta de progresión radiográfica del callo óseo (posible pseudoartrosis)",
        "Dolor persistente en la cadera (zona del tornillo proximal de bloqueo)",
        "Dolor anterior de rodilla que limita la función del cuádriceps",
        "Claudicación persistente que no mejora con la rehabilitación",
      ],
      criteriosAvance: [
        "Marcha independiente sin auxiliares de marcha con patrón normalizado",
        "Carga completa tolerada sin dolor en el foco de fractura",
        "Flexión de rodilla ≥ 135°",
        "Consolidación radiográfica evidente con callo maduro",
        "Fuerza del cuádriceps ≥ 4/5 en la escala MRC",
      ],
    },
    // =========================================================================
    // FASE 4: RETORNO FUNCIONAL COMPLETO (Semanas 12-16)
    // =========================================================================
    {
      id: "df-clavo-fase-4",
      numero: 4,
      nombre: "Retorno funcional y actividad completa",
      duracion: "Semanas 12-16",
      semanaInicio: 12,
      semanaFin: 16,
      objetivos: [
        "Carga completa sin restricciones",
        "Alcanzar fuerza simétrica respecto al lado contralateral",
        "Retorno progresivo a actividades deportivas y laborales",
        "Entrenamiento funcional avanzado y específico por deporte/actividad",
        "Alta del protocolo de rehabilitación",
      ],
      estadoCarga: "carga-completa",
      cargaPorcentaje: 100,
      cargaDetalle:
        "Carga completa sin restricciones tras confirmación de consolidación radiográfica. Progresión a actividades de impacto según tolerancia.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-140°",
          restriccion: "Rango funcional completo simétrico al lado contralateral.",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0° (completa)",
          restriccion: "Extensión completa obligatoria para función normal.",
        },
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-125°",
          restriccion: "Rango completo sin restricción.",
        },
        {
          movimiento: "Rotación interna y externa de cadera",
          rangoObjetivo: "RI: 0-35°, RE: 0-45°",
          restriccion: "Simetría con el lado contralateral.",
        },
      ],
      ejercicios: [
        {
          id: "df-clavo-ej-4-1",
          nombre: "Sentadilla unipodal y estocadas (lunges)",
          descripcion:
            "Sentadilla unipodal progresiva y estocadas hacia adelante, laterales y posteriores. Estos ejercicios avanzados trabajan fuerza, equilibrio y control neuromuscular de toda la cadena cinética del miembro inferior. Progresar con carga externa (mancuernas, barra) según tolerancia.",
          repeticiones: "10-12 repeticiones cada pierna, 3 series",
          frecuencia: "3-4 veces por semana",
        },
        {
          id: "df-clavo-ej-4-2",
          nombre: "Programa de carrera progresiva (return to run)",
          descripcion:
            "Protocolo de retorno a carrera comenzando con caminata rápida alternada con trote suave (intervalos de 1 minuto de trote por 2 minutos de caminata). Progresar la proporción de trote gradualmente sobre 4-6 semanas hasta alcanzar carrera continua. Solo iniciar tras consolidación completa confirmada.",
          repeticiones: "20-30 minutos totales por sesión",
          frecuencia: "3 veces por semana en días alternos",
        },
        {
          id: "df-clavo-ej-4-3",
          nombre: "Ejercicios pliométricos progresivos",
          descripcion:
            "Saltos bipodales sobre el sitio, saltos al cajón (box jumps), saltos laterales y saltos unipodales progresivos. Iniciar con saltos bipodales en superficie blanda y progresar hacia saltos más demandantes. Estos ejercicios preparan el hueso y la musculatura para actividades deportivas de alto impacto.",
          repeticiones: "8-10 repeticiones, 3 series",
          frecuencia: "2-3 veces por semana",
        },
        {
          id: "df-clavo-ej-4-4",
          nombre: "Entrenamiento funcional específico por deporte",
          descripcion:
            "Ejercicios que simulan las demandas específicas del deporte o la actividad laboral del paciente. Incluye cambios de dirección, aceleración y desaceleración, gestos deportivos específicos y actividades que reproduzcan la demanda funcional completa del individuo.",
          repeticiones: "Según la actividad específica, 20-30 minutos",
          frecuencia: "3-4 veces por semana",
        },
      ],
      precauciones: [
        "No iniciar carrera ni saltos sin consolidación radiográfica completa confirmada",
        "Progresión gradual de impacto sobre 4-6 semanas",
        "Valorar retiro de tornillos de bloqueo si producen molestias persistentes",
        "Continuar programa de mantenimiento de fuerza y flexibilidad tras el alta",
        "Retorno a deportes de contacto solo tras aprobación del cirujano",
      ],
      banderasRojas: [
        "Dolor en el foco de fractura con actividades de impacto (posible fractura por estrés o pseudoartrosis)",
        "Dolor persistente en la cadera ipsilateral (necrosis avascular, lesión labral)",
        "Refractura o fractura periimplante",
        "Limitación de la rodilla que no resuelve con rehabilitación (adherencias, fibrosis)",
      ],
      criteriosAvance: [
        "Consolidación radiográfica completa",
        "Fuerza del cuádriceps ≥ 90% del lado contralateral (medida isocinéticamente)",
        "Rango de movimiento completo y simétrico de rodilla y cadera",
        "Capacidad de correr sin dolor ni claudicación",
        "Test funcionales superados (single leg hop test ≥ 90% del lado sano)",
      ],
    },
  ],
  criteriosRetornoActividad: [
    "Consolidación radiográfica completa de la fractura",
    "Rango de movimiento completo de rodilla (0-140°) y cadera",
    "Fuerza del cuádriceps e isquiotibiales ≥ 90% comparado con el lado contralateral",
    "Marcha normalizada sin claudicación",
    "Capacidad de trotar y subir/bajar escaleras sin dolor",
    "Test de salto monopodal (single leg hop) ≥ 90% del lado contralateral",
    "Ausencia de dolor en el foco de fractura con actividades de impacto",
    "Aprobación del cirujano tratante para retorno a actividades de alto impacto",
  ],
  complicacionesPotenciales: [
    "Pseudoartrosis (más frecuente en fracturas abiertas y conminutas)",
    "Retardo de consolidación",
    "Rigidez de rodilla (especialmente pérdida de flexión)",
    "Atrofia y debilidad persistente del cuádriceps",
    "Dolor en la zona de entrada del clavo (cadera/trocánter mayor)",
    "Dolor por tornillos de bloqueo distales (rodilla)",
    "Acortamiento femoral (en fracturas conminutas)",
    "Malrotación femoral",
    "Trombosis venosa profunda y embolia pulmonar",
    "Síndrome de embolia grasa (raro, postoperatorio inmediato)",
    "Infección del sitio quirúrgico",
    "Fractura periimplante en el extremo del clavo",
  ],
  referencias: ["ref-winquist-1984", "ref-bong-2006"],
  fechaActualizacion: "2025-03-15",
};
