import type { Protocol } from "@/types/protocol";

/**
 * Protocolo de rehabilitación para fractura diafisaria de húmero
 * tratada con clavo endomedular anterógrado.
 *
 * Basado en:
 * - Winquist RA, Hansen ST (1984) - Clasificación de fracturas diafisarias
 * - Bong MR et al. (2006) - Enclavado endomedular de fracturas humerales
 * - Denard A et al. (2010) - Resultados funcionales del hombro tras clavo anterógrado
 * - Updegrove GF et al. (2018) - Enclavado endomedular humeral: técnica y rehabilitación
 */
export const diafisisHumeralClavo: Protocol = {
  id: "diafisis-humeral-clavo",
  nombre:
    "Fractura Diafisaria de Húmero - Clavo Endomedular Anterógrado",
  nombreCorto: "Fx Diáfisis Húmero Clavo",
  descripcion:
    "Protocolo de rehabilitación postoperatoria para fracturas diafisarias de húmero tratadas mediante clavo endomedular anterógrado. El punto de entrada del clavo a través del manguito rotador (supraespinoso) requiere una consideración especial para la recuperación del rango de movimiento del hombro. La progresión debe individualizarse según la estabilidad de la fractura, la calidad ósea y la evidencia radiográfica de consolidación.",
  region: "miembro-superior",
  localizacion: "brazo",
  abordajeQuirurgico: ["clavo-endomedular"],
  clasificaciones: [
    "AO/OTA 12-A (fractura simple: espiral, oblicua, transversa)",
    "AO/OTA 12-B (fractura en cuña: cuña espiral, cuña por flexión, cuña fragmentada)",
    "AO/OTA 12-C (fractura compleja: espiral compleja, segmentaria, irregular compleja)",
    "Winquist-Hansen tipo I - Conminución mínima",
    "Winquist-Hansen tipo II - Conminución < 50% del diámetro",
    "Winquist-Hansen tipo III - Conminución > 50% del diámetro",
    "Winquist-Hansen tipo IV - Conminución circunferencial",
  ],
  indicacionesQuirurgicas: [
    "Fractura diafisaria de húmero con fallo del tratamiento conservador",
    "Fractura patológica o hueso patológico",
    "Politraumatismo con necesidad de fijación temprana",
    "Fractura bilateral de húmero",
    "Fractura con extensión proximal favorable para clavo anterógrado",
    "Paciente que no tolera inmovilización prolongada con férula funcional",
  ],
  duracionTotal: "12-14 semanas",
  semanasTotal: 14,
  fases: [
    // =========================================================================
    // FASE 1: PROTECCIÓN Y MOVILIDAD PRECOZ (Semanas 0-3)
    // =========================================================================
    {
      id: "dh-clavo-fase-1",
      numero: 1,
      nombre: "Protección y movilidad pasiva precoz",
      duracion: "Semanas 0-3",
      semanaInicio: 0,
      semanaFin: 3,
      objetivos: [
        "Proteger el sitio de fractura y la fijación interna",
        "Control del dolor y del edema postoperatorio",
        "Iniciar movilidad pasiva suave del hombro respetando la zona de entrada del clavo",
        "Mantener movilidad activa completa de codo, muñeca y mano",
        "Prevenir rigidez del hombro sin comprometer la consolidación",
        "Educación del paciente sobre cuidados y restricciones",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "Uso de cabestrillo. No cargar peso con la extremidad afectada. Se permite uso funcional de la mano para actividades ligeras manteniendo el brazo cerca del cuerpo.",
      romObjetivos: [
        {
          movimiento: "Flexión pasiva del hombro",
          rangoObjetivo: "0-90°",
          restriccion:
            "Solo movimiento pasivo o asistido. Progresión cuidadosa por la lesión del manguito rotador en el punto de entrada del clavo.",
        },
        {
          movimiento: "Abducción pasiva en plano escapular",
          rangoObjetivo: "0-70°",
          restriccion:
            "Exclusivamente en plano escapular. Evitar abducción pura y rotación externa forzada.",
        },
        {
          movimiento: "Rotación externa pasiva",
          rangoObjetivo: "0-20°",
          restriccion:
            "Con el brazo al costado del cuerpo. Limitar por protección del sitio de entrada en el supraespinoso.",
        },
        {
          movimiento: "Flexo-extensión del codo",
          rangoObjetivo: "0-145°",
          restriccion: "Movilidad activa libre del codo sin restricción.",
        },
      ],
      ejercicios: [
        {
          id: "dh-clavo-ej-1-1",
          nombre: "Ejercicios pendulares de Codman",
          descripcion:
            "Paciente inclinado hacia adelante con el brazo afectado colgando libremente. Realizar movimientos circulares suaves en sentido horario y antihorario, aprovechando la gravedad para generar tracción gentil y movilidad glenohumeral sin contracción muscular activa del hombro.",
          repeticiones: "10 círculos en cada dirección, 2-3 series",
          frecuencia: "3-4 veces al día",
        },
        {
          id: "dh-clavo-ej-1-2",
          nombre: "Movilización activa de codo, muñeca y mano",
          descripcion:
            "Flexo-extensión completa del codo, pronación y supinación del antebrazo, flexo-extensión de muñeca, y apertura-cierre de puño. Estos ejercicios mantienen la movilidad articular distal y favorecen el retorno venoso para reducir el edema.",
          repeticiones: "15 repeticiones de cada movimiento, 2-3 series",
          frecuencia: "4-5 veces al día",
        },
        {
          id: "dh-clavo-ej-1-3",
          nombre: "Flexión pasiva asistida del hombro en supino",
          descripcion:
            "En decúbito supino, utilizar la mano contralateral o una vara para elevar el brazo afectado en flexión hasta el límite permitido. El movimiento debe ser suave, sin dolor, y controlado por el paciente para evitar estrés excesivo en el sitio de fractura.",
          repeticiones: "10 repeticiones, 2-3 series",
          frecuencia: "2-3 veces al día",
        },
        {
          id: "dh-clavo-ej-1-4",
          nombre: "Retracción y protracción escapular",
          descripcion:
            "Sentado o de pie con el brazo en cabestrillo, realizar movimientos de retracción (juntar escápulas) y protracción (separar escápulas) de forma controlada. Favorece la activación de la musculatura estabilizadora escapular sin movilizar el foco de fractura.",
          repeticiones: "10 repeticiones de cada movimiento, 2 series",
          frecuencia: "3 veces al día",
        },
        {
          id: "dh-clavo-ej-1-5",
          nombre: "Isométricos suaves de deltoides con brazo al costado",
          descripcion:
            "Con el brazo pegado al cuerpo y el codo flexionado a 90°, realizar contracciones isométricas suaves contra una pared o la mano contralateral en flexión, extensión y abducción. La contracción debe ser submáxima (20-30% de la fuerza máxima) y sin dolor.",
          repeticiones: "5-10 segundos de contracción, 5 repeticiones cada dirección",
          frecuencia: "2-3 veces al día",
        },
      ],
      precauciones: [
        "No realizar movimientos activos del hombro por encima de 90° de flexión",
        "Evitar rotación externa forzada por riesgo de estrés en el sitio de entrada del clavo",
        "No levantar objetos con la extremidad afectada",
        "Usar cabestrillo en todo momento excepto durante ejercicios y aseo",
        "Evitar la abducción activa resistida (proteger manguito rotador)",
        "No realizar movimientos bruscos ni balísticos con el brazo afectado",
      ],
      banderasRojas: [
        "Dolor que aumenta progresivamente en lugar de disminuir",
        "Deformidad nueva o crepitación en el brazo",
        "Pérdida de movilidad del codo, muñeca o dedos (posible lesión del nervio radial)",
        "Inflamación excesiva o signos de infección en heridas quirúrgicas",
        "Caída de la muñeca o incapacidad para extender los dedos (parálisis del nervio radial)",
        "Parestesias persistentes en territorio del nervio radial",
      ],
      criteriosAvance: [
        "Dolor controlado (EVA ≤ 3/10) en reposo",
        "Herida quirúrgica sin signos de infección",
        "Evidencia radiográfica de alineación mantenida",
        "Movilidad pasiva del hombro alcanzando los objetivos de esta fase",
        "Movilidad activa completa del codo, muñeca y mano",
      ],
    },
    // =========================================================================
    // FASE 2: MOVILIDAD ACTIVA ASISTIDA (Semanas 3-6)
    // =========================================================================
    {
      id: "dh-clavo-fase-2",
      numero: 2,
      nombre: "Movilidad activa asistida y fortalecimiento inicial",
      duracion: "Semanas 3-6",
      semanaInicio: 3,
      semanaFin: 6,
      objetivos: [
        "Progresar de movilidad pasiva a activa asistida del hombro",
        "Iniciar activación muscular suave del deltoides y manguito rotador",
        "Restaurar rango de movimiento funcional del hombro",
        "Suspender gradualmente el uso del cabestrillo",
        "Mejorar control neuromuscular del hombro",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "Retirada progresiva del cabestrillo. Se permite cargar objetos ligeros (< 1 kg) con el brazo al costado del cuerpo. No cargar peso por encima del hombro.",
      romObjetivos: [
        {
          movimiento: "Flexión activa asistida del hombro",
          rangoObjetivo: "0-120°",
          restriccion:
            "Progresar gradualmente. Si el paciente tiene dolor significativo en el hombro por la lesión del manguito, limitar y avanzar más lentamente.",
        },
        {
          movimiento: "Abducción activa asistida en plano escapular",
          rangoObjetivo: "0-100°",
          restriccion: "Siempre en plano escapular para proteger el manguito rotador.",
        },
        {
          movimiento: "Rotación externa activa asistida",
          rangoObjetivo: "0-35°",
          restriccion: "Con el brazo al costado del cuerpo. Progresar de forma gradual.",
        },
        {
          movimiento: "Rotación interna activa",
          rangoObjetivo: "Mano a glúteo",
          restriccion: "No forzar. Movilización suave y progresiva.",
        },
      ],
      ejercicios: [
        {
          id: "dh-clavo-ej-2-1",
          nombre: "Flexión activa asistida con polea",
          descripcion:
            "Utilizar sistema de polea fijado al marco de una puerta. El brazo sano tira de la cuerda para elevar el brazo afectado en flexión de forma controlada. El brazo afectado realiza contracción concéntrica asistida durante la subida y excéntrica controlada durante el descenso.",
          repeticiones: "15 repeticiones, 3 series",
          frecuencia: "2-3 veces al día",
        },
        {
          id: "dh-clavo-ej-2-2",
          nombre: "Deslizamiento en pared para flexión y abducción",
          descripcion:
            "De pie frente a la pared, deslizar la mano del brazo afectado sobre la superficie ascendiendo progresivamente en flexión. Repetir en abducción en el plano escapular. La pared proporciona soporte y reduce la carga sobre el hombro durante el movimiento activo.",
          repeticiones: "10 repeticiones en cada plano, 2-3 series",
          frecuencia: "2-3 veces al día",
        },
        {
          id: "dh-clavo-ej-2-3",
          nombre: "Rotación externa con bastón en supino",
          descripcion:
            "En decúbito supino con el codo flexionado a 90° y pegado al cuerpo, utilizar un bastón o vara sostenida con ambas manos para empujar suavemente el brazo afectado hacia rotación externa. El brazo sano controla la velocidad y el rango del movimiento.",
          repeticiones: "10 repeticiones, mantener 5 segundos al final del rango, 2 series",
          frecuencia: "2 veces al día",
        },
        {
          id: "dh-clavo-ej-2-4",
          nombre: "Isométricos submáximos del manguito rotador",
          descripcion:
            "Con el codo flexionado a 90° y pegado al cuerpo, realizar contracciones isométricas contra resistencia manual o una toalla enrollada en rotación interna y externa. La contracción debe ser al 30-50% de la fuerza máxima sin provocar dolor en el hombro.",
          repeticiones: "10 segundos de contracción, 10 repeticiones cada dirección",
          frecuencia: "2 veces al día",
        },
        {
          id: "dh-clavo-ej-2-5",
          nombre: "Ejercicio de cadena cinética cerrada en mesa",
          descripcion:
            "Apoyar la mano del brazo afectado sobre una mesa a la altura de la cintura. Realizar oscilaciones suaves del cuerpo hacia adelante, atrás y lateralmente manteniendo la mano fija. Esto activa la musculatura estabilizadora del hombro en un entorno protegido.",
          repeticiones: "30 segundos de oscilación, 3-5 series",
          frecuencia: "2 veces al día",
        },
      ],
      precauciones: [
        "Respetar el dolor como guía: no forzar rangos que provoquen dolor agudo",
        "No levantar objetos pesados (> 1 kg) con el brazo afectado",
        "Evitar movimientos resistidos del hombro por encima de 90°",
        "Vigilar signos de irritación del manguito rotador (dolor anterolateral del hombro)",
        "No realizar actividades que requieran fuerza de prensión máxima",
      ],
      banderasRojas: [
        "Dolor que empeora con los ejercicios activos en lugar de mejorar progresivamente",
        "Pérdida súbita de rango de movimiento previamente alcanzado",
        "Aparición de signos neurológicos nuevos (debilidad, parestesias)",
        "Signos radiográficos de pérdida de reducción o fallo del implante",
        "Dolor nocturno persistente e intenso no controlado con analgesia habitual",
      ],
      criteriosAvance: [
        "Radiografía con signos de callo óseo en formación",
        "Flexión activa asistida del hombro ≥ 120°",
        "Dolor controlado con actividades de la vida diaria ligeras",
        "Ausencia de signos clínicos de pseudoartrosis",
        "Tolerancia a la retirada del cabestrillo durante el día",
      ],
    },
    // =========================================================================
    // FASE 3: FORTALECIMIENTO PROGRESIVO (Semanas 6-10)
    // =========================================================================
    {
      id: "dh-clavo-fase-3",
      numero: 3,
      nombre: "Fortalecimiento progresivo y restauración funcional",
      duracion: "Semanas 6-10",
      semanaInicio: 6,
      semanaFin: 10,
      objetivos: [
        "Alcanzar rango de movimiento activo completo del hombro",
        "Iniciar fortalecimiento isotónico progresivo del hombro y brazo",
        "Restaurar fuerza del manguito rotador y deltoides",
        "Recuperar la funcionalidad para actividades de la vida diaria",
        "Mejorar la resistencia muscular de la extremidad superior",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "Se permite cargar objetos de peso moderado (hasta 3-5 kg). Evitar cargas de impacto o levantamiento pesado hasta confirmar consolidación.",
      romObjetivos: [
        {
          movimiento: "Flexión activa del hombro",
          rangoObjetivo: "0-150°",
          restriccion: "Progresar hacia rango completo según tolerancia.",
        },
        {
          movimiento: "Abducción activa",
          rangoObjetivo: "0-140°",
          restriccion: "Iniciar en plano escapular y progresar al plano coronal.",
        },
        {
          movimiento: "Rotación externa activa a 0° de abducción",
          rangoObjetivo: "0-45°",
          restriccion: "Avanzar progresivamente sin forzar.",
        },
        {
          movimiento: "Rotación interna activa",
          rangoObjetivo: "Mano a L3-L1",
          restriccion: "Progresar gradualmente alcanzando niveles vertebrales superiores.",
        },
      ],
      ejercicios: [
        {
          id: "dh-clavo-ej-3-1",
          nombre: "Fortalecimiento isotónico del deltoides con mancuernas",
          descripcion:
            "Flexión, abducción en plano escapular y extensión del hombro con mancuernas ligeras. Comenzar con 0,5-1 kg e incrementar 0,5 kg cada 1-2 semanas según tolerancia. El movimiento debe ser controlado, con fase concéntrica de 2 segundos y excéntrica de 3 segundos.",
          repeticiones: "12-15 repeticiones, 3 series",
          frecuencia: "1 vez al día, 5 días por semana",
        },
        {
          id: "dh-clavo-ej-3-2",
          nombre: "Rotaciones del manguito rotador con banda elástica",
          descripcion:
            "Con el codo a 90° y pegado al cuerpo, realizar rotación interna y externa contra la resistencia de una banda elástica de intensidad ligera a moderada. Mantener la escápula estabilizada y el movimiento controlado. Progresar la resistencia de la banda según tolerancia.",
          repeticiones: "15 repeticiones cada dirección, 3 series",
          frecuencia: "1 vez al día, 5 días por semana",
        },
        {
          id: "dh-clavo-ej-3-3",
          nombre: "Flexiones de bíceps y extensiones de tríceps",
          descripcion:
            "Fortalecimiento de la musculatura del brazo con mancuernas. Flexión de bíceps y extensión de tríceps con peso progresivo. Estos ejercicios mejoran la funcionalidad del miembro superior y favorecen la consolidación ósea mediante carga axial controlada a través del húmero.",
          repeticiones: "12-15 repeticiones, 3 series",
          frecuencia: "1 vez al día, 5 días por semana",
        },
        {
          id: "dh-clavo-ej-3-4",
          nombre: "Estabilización escapular en prono (Y-T-W)",
          descripcion:
            "En decúbito prono sobre camilla con el brazo colgando, realizar elevaciones formando las letras Y (flexión con pulgar arriba), T (abducción horizontal) y W (retracción con rotación externa). Iniciar sin peso y progresar con mancuernas ligeras. Estos ejercicios fortalecen los estabilizadores escapulares.",
          repeticiones: "10 repeticiones de cada letra, 2-3 series",
          frecuencia: "1 vez al día, 4-5 días por semana",
        },
      ],
      precauciones: [
        "Confirmar radiográficamente la progresión del callo antes de aumentar cargas",
        "Evitar ejercicios pliométricos o de impacto en el hombro",
        "No realizar press por encima de la cabeza hasta consolidación confirmada",
        "Monitorizar la respuesta del hombro al fortalecimiento (dolor del manguito rotador)",
        "Evitar deportes de contacto y actividades de alto riesgo de caída",
      ],
      banderasRojas: [
        "Dolor persistente en el foco de fractura con la carga progresiva",
        "Falta de progreso radiográfico del callo óseo a las 8 semanas (riesgo de pseudoartrosis)",
        "Dolor mecánico en el hombro sugestivo de protrusión del clavo o conflicto subacromial",
        "Pérdida de fuerza o rango de movimiento previamente alcanzado",
        "Dolor referido al hombro que limita la elevación activa (lesión del manguito por el clavo)",
      ],
      criteriosAvance: [
        "Consolidación radiográfica evidente con callo óseo maduro",
        "Flexión activa del hombro ≥ 150°",
        "Fuerza del hombro ≥ 4/5 en la escala MRC",
        "Capacidad de realizar actividades de la vida diaria sin dolor significativo",
        "Ausencia de dolor en el foco de fractura con actividades funcionales",
      ],
    },
    // =========================================================================
    // FASE 4: RETORNO FUNCIONAL COMPLETO (Semanas 10-14)
    // =========================================================================
    {
      id: "dh-clavo-fase-4",
      numero: 4,
      nombre: "Retorno funcional y actividad completa",
      duracion: "Semanas 10-14",
      semanaInicio: 10,
      semanaFin: 14,
      objetivos: [
        "Recuperar rango de movimiento completo del hombro",
        "Alcanzar fuerza simétrica respecto al lado contralateral",
        "Retorno progresivo a actividades deportivas y laborales",
        "Entrenamiento funcional y propioceptivo avanzado",
        "Alta del protocolo de rehabilitación",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "Sin restricciones de carga tras confirmación de consolidación radiográfica completa.",
      romObjetivos: [
        {
          movimiento: "Flexión activa del hombro",
          rangoObjetivo: "0-170°",
          restriccion: "Objetivo de rango funcional completo o simétrico al lado sano.",
        },
        {
          movimiento: "Abducción activa",
          rangoObjetivo: "0-170°",
          restriccion: "Rango completo.",
        },
        {
          movimiento: "Rotación externa a 90° de abducción",
          rangoObjetivo: "0-80°",
          restriccion: "Progresar hacia simetría con el lado contralateral.",
        },
        {
          movimiento: "Rotación interna activa",
          rangoObjetivo: "Mano a T12-T8",
          restriccion: "Alcanzar simetría con el lado contralateral.",
        },
      ],
      ejercicios: [
        {
          id: "dh-clavo-ej-4-1",
          nombre: "Fortalecimiento avanzado con mancuernas y bandas elásticas",
          descripcion:
            "Programa completo de fortalecimiento del hombro incluyendo press militar, elevaciones laterales, remo con mancuerna y rotaciones del manguito con resistencia progresiva. Trabajar en rangos completos de movimiento con cargas que permitan 10-12 repeticiones.",
          repeticiones: "10-12 repeticiones, 3-4 series",
          frecuencia: "3-4 veces por semana",
        },
        {
          id: "dh-clavo-ej-4-2",
          nombre: "Ejercicios propioceptivos y de cadena cinética cerrada",
          descripcion:
            "Apoyos en pared y mesa con el brazo extendido, plancha modificada en pared, y ejercicios con balón sobre superficie inestable. Estos ejercicios mejoran la estabilidad dinámica del hombro y la coordinación neuromuscular necesaria para actividades funcionales.",
          repeticiones: "30-45 segundos cada ejercicio, 3 series",
          frecuencia: "3-4 veces por semana",
        },
        {
          id: "dh-clavo-ej-4-3",
          nombre: "Entrenamiento funcional específico por actividad",
          descripcion:
            "Simulación de gestos deportivos o laborales específicos del paciente. Incluye lanzamientos suaves con pelota, movimientos de alcance a diferentes alturas y direcciones, y ejercicios que reproduzcan las demandas funcionales del paciente según su ocupación y nivel de actividad.",
          repeticiones: "Según la actividad específica, 15-20 minutos",
          frecuencia: "3 veces por semana",
        },
        {
          id: "dh-clavo-ej-4-4",
          nombre: "Ejercicios de resistencia muscular del miembro superior",
          descripcion:
            "Circuito de ejercicios del miembro superior completo con bandas elásticas o mancuernas ligeras con alto número de repeticiones. Incluye flexión de bíceps, extensión de tríceps, elevaciones del hombro y ejercicios de prensión. El objetivo es mejorar la resistencia para actividades prolongadas.",
          repeticiones: "20-25 repeticiones, 2-3 series en circuito",
          frecuencia: "2-3 veces por semana",
        },
      ],
      precauciones: [
        "No retornar a deportes de contacto hasta consolidación completa confirmada",
        "Progresión gradual en actividades de impacto y carga máxima",
        "Valorar la necesidad de retiro del clavo si produce conflicto subacromial sintomático",
        "Continuar ejercicios de mantenimiento tras el alta del protocolo",
      ],
      banderasRojas: [
        "Dolor mecánico del hombro persistente (posible protrusión proximal del clavo)",
        "Dolor en el foco de fractura con actividades de alta demanda",
        "Refractura o fractura periimplante ante trauma o carga excesiva",
        "Limitación funcional del hombro no resuelta (posible lesión del manguito rotador)",
      ],
      criteriosAvance: [
        "Consolidación radiográfica completa",
        "Rango de movimiento del hombro ≥ 90% del lado contralateral",
        "Fuerza simétrica respecto al lado sano (≥ 90%)",
        "Capacidad de realizar todas las actividades de la vida diaria sin limitación",
        "Puntuación DASH ≤ 15 o resultado satisfactorio en escala funcional equivalente",
      ],
    },
  ],
  criteriosRetornoActividad: [
    "Consolidación radiográfica completa de la fractura",
    "Rango de movimiento del hombro ≥ 90% del lado contralateral",
    "Fuerza del miembro superior ≥ 90% comparado con el lado sano",
    "Ausencia de dolor en el foco de fractura con actividades funcionales",
    "Capacidad de realizar actividades laborales o deportivas específicas sin limitación",
    "Puntuación funcional satisfactoria (DASH ≤ 15)",
    "Aprobación del cirujano tratante para retorno a actividades de alto impacto",
  ],
  complicacionesPotenciales: [
    "Pseudoartrosis (más frecuente en fracturas transversales y conminutas)",
    "Lesión del nervio radial (iatrogénica o por la fractura inicial)",
    "Dolor del hombro por la entrada del clavo a través del manguito rotador",
    "Conflicto subacromial por protrusión proximal del clavo",
    "Rigidez del hombro secundaria a la lesión del manguito rotador",
    "Retardo de consolidación",
    "Infección del sitio quirúrgico",
    "Síndrome compartimental (raro en el brazo)",
    "Fractura periimplante en el extremo del clavo",
  ],
  referencias: ["ref-winquist-1984", "ref-bong-2006"],
  fechaActualizacion: "2025-03-15",
};
