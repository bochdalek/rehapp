import type { Protocol } from "@/types/protocol";

export const claviculaRAFI: Protocol = {
  id: "clavicula-rafi",
  nombre:
    "Protocolo de Rehabilitación Post-RAFI de Fractura de Clavícula con Placa",
  nombreCorto: "RAFI Clavícula",
  descripcion:
    "Protocolo de rehabilitación basado en evidencia para el manejo postquirúrgico de fracturas de clavícula tratadas mediante reducción abierta y fijación interna (RAFI) con placa anatómica precontorneada. Aplicable principalmente a fracturas del tercio medio desplazadas. El protocolo contempla movilización temprana protegida del hombro y retorno funcional en 12 semanas.",
  region: "miembro-superior",
  localizacion: "clavicula",
  abordajeQuirurgico: ["RAFI", "placa"],
  clasificaciones: [
    "Allman Grupo I (tercio medio) - más frecuente (80%)",
    "Allman Grupo II (tercio distal) - mayor riesgo de pseudoartrosis",
    "Allman Grupo III (tercio medial) - menos frecuente",
    "Robinson tipo 2B1 y 2B2 (tercio medio desplazada/conminuta)",
  ],
  indicacionesQuirurgicas: [
    "Fractura desplazada del tercio medio con acortamiento >2 cm",
    "Fractura con compromiso neurovascular (plexo braquial o vasos subclavios)",
    "Fractura abierta de clavícula",
    "Fractura con amenaza cutánea por fragmento prominente",
    "Politraumatismo con fractura de clavícula bilateral",
    "Fractura del tercio distal tipo Neer II (inestable)",
    "No unión o pseudoartrosis tras tratamiento conservador",
  ],
  duracionTotal: "12 semanas",
  semanasTotal: 12,
  fases: [
    // =====================================================================
    // FASE 1: PROTECCIÓN Y MOVILIZACIÓN PASIVA (Semanas 0-2)
    // =====================================================================
    {
      id: "clavicula-rafi-fase-1",
      numero: 1,
      nombre: "Protección y movilización pasiva temprana",
      duracion: "Semanas 0-2",
      semanaInicio: 0,
      semanaFin: 2,
      objetivos: [
        "Control del dolor y edema postquirúrgico",
        "Protección del sitio quirúrgico y material de osteosíntesis",
        "Iniciar movilización pasiva y pendular del hombro",
        "Mantener movilidad de codo, muñeca y mano",
        "Educación postural y prevención de rigidez de hombro",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "No aplica (miembro superior). Uso de cabestrillo durante 2-3 semanas con retiro progresivo para ejercicios.",
      romObjetivos: [
        {
          movimiento: "Flexión de hombro (pasiva)",
          rangoObjetivo: "0-90 grados",
          restriccion: "Solo movilización pasiva o péndulos de Codman",
        },
        {
          movimiento: "Abducción de hombro (pasiva)",
          rangoObjetivo: "0-80 grados",
          restriccion: "No abducción activa. Solo movimiento pasivo guiado.",
        },
        {
          movimiento: "Rotación externa de hombro",
          rangoObjetivo: "0-30 grados",
          restriccion: "Solo pasiva con el brazo al costado",
        },
        {
          movimiento: "Flexión/extensión de codo",
          rangoObjetivo: "0-145 grados",
        },
      ],
      ejercicios: [
        {
          id: "clav-f1-e1",
          nombre: "Ejercicios pendulares de Codman",
          descripcion:
            "Con el tronco inclinado hacia adelante y el brazo operado colgando libremente por gravedad, realizar movimientos pendulares suaves en forma circular, de lado a lado y de adelante hacia atrás. El movimiento debe originarse desde el tronco, no desde el hombro. Este ejercicio provee movilización articular pasiva sin contracción muscular activa del deltoides.",
          repeticiones: "10-15 oscilaciones en cada dirección x 3 series",
          frecuencia: "4-5 veces al día",
          precauciones: [
            "No usar peso en la mano durante las primeras 2 semanas",
            "Mantener movimientos suaves y controlados",
            "Suspender si genera dolor en el sitio quirúrgico",
          ],
          progresion:
            "Aumentar la amplitud del arco pendular progresivamente según tolerancia.",
        },
        {
          id: "clav-f1-e2",
          nombre: "Retracción y protracción escapular suave",
          descripcion:
            "En bipedestación o sedestación con buena postura, realizar retracción escapular (juntar los omóplatos) y protracción (separar los omóplatos) de forma suave y controlada. Mantener cada posición 5 segundos. Este ejercicio activa la musculatura estabilizadora escapular sin estrés directo sobre la clavícula.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "3-4 veces al día",
          precauciones: [
            "No elevar los hombros durante el ejercicio",
            "Realizar movimiento suave sin contracción forzada",
          ],
        },
        {
          id: "clav-f1-e3",
          nombre: "Movilización activa de codo, muñeca y mano",
          descripcion:
            "Con el cabestrillo retirado temporalmente, realizar flexión y extensión completa de codo, pronosupinación del antebrazo, y movimientos de muñeca y dedos. Mantener la función de las articulaciones distales para prevenir rigidez y síndrome hombro-mano.",
          repeticiones: "10 repeticiones x 3 series por articulación",
          frecuencia: "3 veces al día",
        },
        {
          id: "clav-f1-e4",
          nombre: "Contracción isométrica suave del deltoides",
          descripcion:
            "Con el brazo al costado del cuerpo y el codo flexionado a 90 grados, presionar suavemente contra una pared o con la mano contralateral en flexión, abducción y rotación externa. Mantener la contracción 5 segundos al 25% del esfuerzo máximo. Este ejercicio mantiene el tono muscular sin estrés significativo sobre el foco de fractura.",
          repeticiones: "5-8 repeticiones x 3 series por dirección",
          frecuencia: "2 veces al día",
          precauciones: [
            "Contracción al 25% del esfuerzo máximo solamente",
            "No realizar si genera dolor en la clavícula",
          ],
        },
      ],
      precauciones: [
        "No levantar el brazo activamente por encima de 90 grados",
        "No cargar peso con la extremidad operada (>0.5 kg)",
        "Uso obligatorio de cabestrillo para descanso y deambulación",
        "Dormir en posición semisentada o en decúbito supino con almohada bajo el codo",
        "No conducir vehículos durante las primeras 2-3 semanas",
      ],
      banderasRojas: [
        "Dolor severo que no responde a analgésicos prescritos",
        "Prominencia ósea nueva o crepitación en el sitio quirúrgico (posible falla del material)",
        "Parestesias o debilidad en el miembro superior ipsilateral (lesión de plexo braquial)",
        "Disnea o dolor torácico (posible neumotórax asociado)",
        "Signos de infección: eritema progresivo, drenaje purulento, fiebre",
      ],
      criteriosAvance: [
        "Herida quirúrgica sin signos de infección",
        "Dolor controlado (EVA <4/10 en reposo)",
        "Movilidad pasiva de hombro según objetivos sin dolor significativo",
        "Movilidad activa completa de codo, muñeca y mano",
        "Radiografía de control satisfactoria",
      ],
    },
    // =====================================================================
    // FASE 2: MOVILIDAD ACTIVA ASISTIDA (Semanas 2-6)
    // =====================================================================
    {
      id: "clavicula-rafi-fase-2",
      numero: 2,
      nombre: "Movilidad activa asistida y activa temprana",
      duracion: "Semanas 2-6",
      semanaInicio: 2,
      semanaFin: 6,
      objetivos: [
        "Progresar a movilización activa-asistida y activa del hombro",
        "Aumentar rango de movimiento en todos los planos",
        "Discontinuar el cabestrillo progresivamente",
        "Fortalecer estabilizadores escapulares",
        "Restaurar patrones de movimiento escapulotorácicos normales",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "No aplica (miembro superior). Retiro progresivo de cabestrillo entre semanas 2-4.",
      romObjetivos: [
        {
          movimiento: "Flexión de hombro (activa-asistida)",
          rangoObjetivo: "120-140 grados",
        },
        {
          movimiento: "Abducción de hombro",
          rangoObjetivo: "100-120 grados",
        },
        {
          movimiento: "Rotación externa (brazo al costado)",
          rangoObjetivo: "30-45 grados",
        },
        {
          movimiento: "Rotación interna",
          rangoObjetivo: "Mano a nivel de L5-L2",
        },
      ],
      ejercicios: [
        {
          id: "clav-f2-e1",
          nombre: "Flexión activa-asistida con bastón",
          descripcion:
            "En decúbito supino, sostener un bastón con ambas manos a la anchura de los hombros. El brazo sano guía el movimiento llevando ambos brazos hacia arriba en flexión de hombro. Progresar de decúbito supino a sedestación y luego bipedestación. Este ejercicio permite ganar rango de flexión con asistencia del brazo contralateral.",
          repeticiones: "10-15 repeticiones x 3 series",
          frecuencia: "3-4 veces al día",
          precauciones: [
            "El brazo sano debe guiar el movimiento",
            "No forzar rango que genere dolor en la clavícula",
          ],
          progresion:
            "Progresar a flexión activa sin bastón cuando alcance 120 grados asistido.",
        },
        {
          id: "clav-f2-e2",
          nombre: "Rotación externa activa-asistida con bastón",
          descripcion:
            "En bipedestación con el codo flexionado a 90 grados y pegado al costado, sostener un bastón con ambas manos. El brazo sano empuja el bastón lateralmente llevando el brazo operado en rotación externa. Mantener la posición final 5 segundos. Este ejercicio restaura la rotación externa necesaria para actividades funcionales.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "3-4 veces al día",
          precauciones: [
            "Mantener el codo pegado al costado",
            "No forzar más allá del rango tolerado",
          ],
        },
        {
          id: "clav-f2-e3",
          nombre: "Ejercicios de estabilización escapular en cadena cerrada",
          descripcion:
            "De pie frente a una pared con las manos apoyadas a la altura de los hombros, realizar protracción y retracción escapular (push-up de pared). Mantener los codos ligeramente flexionados. Progresar a deslizamiento en pared (wall slides). Estos ejercicios fortalecen los estabilizadores escapulares en un ambiente controlado.",
          repeticiones: "10-12 repeticiones x 3 series",
          frecuencia: "2 veces al día",
          progresion:
            "Progresar de push-up de pared a push-up en superficie inclinada.",
        },
        {
          id: "clav-f2-e4",
          nombre: "Elevación activa del brazo asistida con polea",
          descripcion:
            "Utilizando un sistema de polea sobre una puerta, realizar elevación del brazo operado con asistencia del brazo contralateral que tira de la cuerda. Controlar el descenso de forma lenta (excéntrico). Este ejercicio permite ganar flexión y abducción con asistencia mecánica.",
          repeticiones: "10-15 repeticiones x 3 series",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "El movimiento debe ser fluido y sin tirones",
            "Controlar el descenso para evitar contracción excéntrica brusca",
          ],
        },
      ],
      precauciones: [
        "No cargar objetos pesados (>1 kg) hasta la semana 6",
        "No realizar movimientos balísticos o por encima de la cabeza contra resistencia",
        "Evitar actividades que generen estrés de cizallamiento sobre la clavícula",
        "No practicar deportes de contacto ni actividades con riesgo de caída",
      ],
      banderasRojas: [
        "Dolor creciente en el sitio de la placa durante la movilización",
        "Crepitación nueva sobre la clavícula",
        "Pérdida de rango de movimiento previamente alcanzado",
        "Debilidad progresiva del deltoides o del manguito rotador",
        "Prominencia del material de osteosíntesis bajo la piel",
      ],
      criteriosAvance: [
        "Flexión activa de hombro >120 grados",
        "Abducción activa >100 grados",
        "Dolor EVA <3/10 durante movilización activa",
        "Patrón escapulotorácico adecuado sin discinesia significativa",
        "Radiografías con consolidación ósea progresiva",
      ],
    },
    // =====================================================================
    // FASE 3: FORTALECIMIENTO PROGRESIVO (Semanas 6-10)
    // =====================================================================
    {
      id: "clavicula-rafi-fase-3",
      numero: 3,
      nombre: "Fortalecimiento progresivo",
      duracion: "Semanas 6-10",
      semanaInicio: 6,
      semanaFin: 10,
      objetivos: [
        "Recuperar rango de movimiento completo del hombro",
        "Iniciar fortalecimiento isotónico del manguito rotador y deltoides",
        "Fortalecer la musculatura escapulotorácica",
        "Mejorar control neuromuscular y propiocepción del hombro",
        "Reintegrar actividades funcionales de la vida diaria",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "No aplica (miembro superior). Se permite carga funcional progresiva.",
      romObjetivos: [
        {
          movimiento: "Flexión de hombro",
          rangoObjetivo: "160-170 grados",
        },
        {
          movimiento: "Abducción de hombro",
          rangoObjetivo: "150-160 grados",
        },
        {
          movimiento: "Rotación externa (brazo a 90° de abducción)",
          rangoObjetivo: "70-80 grados",
        },
        {
          movimiento: "Rotación interna",
          rangoObjetivo: "Mano a nivel de T12-T8",
        },
      ],
      ejercicios: [
        {
          id: "clav-f3-e1",
          nombre: "Fortalecimiento del manguito rotador con banda elástica",
          descripcion:
            "Con el codo flexionado a 90 grados y pegado al costado, realizar rotación externa e interna contra la resistencia de una banda elástica fijada a una puerta. Iniciar con banda de resistencia ligera y progresar a media. Mantener la contracción excéntrica controlada (4 segundos de retorno).",
          repeticiones: "12-15 repeticiones x 3 series por movimiento",
          frecuencia: "1 vez al día",
          precauciones: [
            "No permitir compensación con elevación del hombro",
            "Mantener el codo pegado al cuerpo durante el ejercicio",
          ],
          progresion:
            "Progresar resistencia de banda cada 2 semanas. Luego progresar a posición de 90° de abducción.",
        },
        {
          id: "clav-f3-e2",
          nombre: "Fortalecimiento del deltoides con mancuernas",
          descripcion:
            "Realizar elevación frontal, lateral y posterolateral del brazo con mancuernas ligeras (0.5-2 kg). Controlar tanto la fase concéntrica (3 segundos) como la excéntrica (4 segundos). Este ejercicio fortalece los tres fascículos del deltoides necesarios para la función del hombro.",
          repeticiones: "10-12 repeticiones x 3 series",
          frecuencia: "1 vez al día, 5 días por semana",
          precauciones: [
            "No elevar más allá de 90° con peso hasta la semana 8",
            "No usar peso excesivo que comprometa la técnica",
          ],
          progresion:
            "Aumentar peso progresivamente (0.5 kg cada 1-2 semanas).",
        },
        {
          id: "clav-f3-e3",
          nombre: "Remo con banda elástica (fortalecimiento escapular)",
          descripcion:
            "Con la banda elástica fijada a una puerta a la altura del pecho, realizar tracción horizontal con ambos brazos llevando los codos hacia atrás y juntando los omóplatos. Mantener la contracción final 3 segundos. Este ejercicio fortalece romboides, trapecio medio e infraespinoso.",
          repeticiones: "12-15 repeticiones x 3 series",
          frecuencia: "1 vez al día",
          progresion:
            "Progresar a remo unilateral y luego a remo con mancuerna.",
        },
        {
          id: "clav-f3-e4",
          nombre: "Propiocepción del hombro en cadena cerrada",
          descripcion:
            "Apoyar la mano del brazo operado sobre una pelota de estabilidad colocada contra una pared. Mantener la posición estable y realizar pequeños círculos con la pelota. Progresar a cuadrupedia con apoyo sobre superficie inestable (bosu). Estos ejercicios restauran el control articular del hombro.",
          repeticiones: "30-60 segundos x 3 series",
          frecuencia: "2 veces al día",
          progresion:
            "Progresar de pared a mesa, y luego a suelo (cuadrupedia).",
        },
      ],
      precauciones: [
        "No realizar press militar ni ejercicios de empuje pesados hasta consolidación completa",
        "No practicar deportes de contacto hasta la semana 12",
        "Progresar cargas solo si no hay dolor durante ni después del ejercicio",
        "Evitar movimientos balísticos sobre la cabeza",
      ],
      banderasRojas: [
        "Dolor en el sitio de la placa durante ejercicios resistidos",
        "Crepitación o movilidad anormal del fragmento",
        "Debilidad persistente del manguito rotador",
        "Discinesia escapular que no mejora con la rehabilitación",
        "Irritación cutánea sobre la placa (prominencia, enrojecimiento)",
      ],
      criteriosAvance: [
        "Rango de movimiento activo >90% del lado contralateral",
        "Fuerza del manguito rotador 4/5 en escala de Daniels",
        "Sin dolor durante ejercicios de fortalecimiento (EVA <2/10)",
        "Consolidación radiográfica adecuada confirmada",
        "Patrón escapulotorácico normal",
      ],
    },
    // =====================================================================
    // FASE 4: RETORNO FUNCIONAL (Semanas 10-12)
    // =====================================================================
    {
      id: "clavicula-rafi-fase-4",
      numero: 4,
      nombre: "Retorno funcional y alta",
      duracion: "Semanas 10-12",
      semanaInicio: 10,
      semanaFin: 12,
      objetivos: [
        "Rango de movimiento completo e indoloro del hombro",
        "Fuerza >85% del lado contralateral",
        "Retorno a actividades laborales y deportivas",
        "Independencia en programa de mantenimiento domiciliario",
        "Evaluar necesidad de retiro de material sintomático",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "No aplica (miembro superior). Actividad funcional sin restricciones.",
      romObjetivos: [
        {
          movimiento: "Flexión de hombro",
          rangoObjetivo: "170-180 grados",
        },
        {
          movimiento: "Abducción de hombro",
          rangoObjetivo: "170-180 grados",
        },
        {
          movimiento: "Rotación externa",
          rangoObjetivo: "80-90 grados",
        },
        {
          movimiento: "Rotación interna",
          rangoObjetivo: "Mano a nivel de T8-T6",
        },
      ],
      ejercicios: [
        {
          id: "clav-f4-e1",
          nombre: "Programa de fortalecimiento avanzado del hombro",
          descripcion:
            "Realizar press de hombro, press de banca, remo y pulldowns con pesos moderados. Incluir ejercicios de cadena cinética completa que integren tronco y extremidad superior. Progresar cargas basándose en la prueba de 10RM (repetición máxima). Entrenar al 60-80% del 10RM.",
          repeticiones: "8-12 repeticiones x 3 series",
          frecuencia: "3-4 veces por semana",
          progresion:
            "Aumentar carga 5-10% cada 1-2 semanas según tolerancia.",
        },
        {
          id: "clav-f4-e2",
          nombre: "Ejercicios pliométricos del miembro superior",
          descripcion:
            "Lanzamientos de pelota medicinal (1-3 kg) en diferentes patrones: pase de pecho, lanzamiento sobre la cabeza, lanzamiento rotacional. Realizar atrapar y lanzar contra pared o con compañero. Estos ejercicios restauran la potencia y capacidad reactiva del hombro.",
          repeticiones: "10-15 lanzamientos x 3 series",
          frecuencia: "2-3 veces por semana",
          precauciones: [
            "Iniciar con peso ligero (1 kg) y progresar",
            "Calentar adecuadamente antes de pliométricos",
          ],
        },
        {
          id: "clav-f4-e3",
          nombre: "Entrenamiento funcional deportivo específico",
          descripcion:
            "Simulación progresiva de gestos deportivos específicos del paciente: natación (brazadas simuladas), tenis (golpes con raqueta sin pelota, luego con pelota), ciclismo (posición de agarre), escalada (presas fáciles). Adaptar según la actividad deportiva del paciente.",
          repeticiones: "20-30 minutos por sesión",
          frecuencia: "3-4 veces por semana",
          progresion:
            "Progresar a intensidad deportiva completa hacia la semana 12.",
        },
      ],
      precauciones: [
        "Los deportes de contacto requieren autorización expresa del cirujano",
        "Considerar uso de protección para la clavícula en deportes de colisión durante 3-6 meses adicionales",
        "Vigilar síntomas de irritación por el material de osteosíntesis",
        "Programar consulta para evaluación de retiro de material si es sintomático",
      ],
      banderasRojas: [
        "Dolor persistente sobre la placa durante la actividad deportiva",
        "Fractura por estrés o falla tardía del material",
        "Limitación funcional que no progresa a pesar de la rehabilitación",
        "Prominencia del material que interfiere con actividades",
        "Recidiva de fractura o refractura tras retiro de material",
      ],
      criteriosAvance: [
        "Rango de movimiento completo e indoloro del hombro",
        "Fuerza >85% del lado contralateral en todos los grupos musculares",
        "Retorno exitoso a actividades de la vida diaria",
        "DASH score <10 puntos",
        "Paciente independiente en programa de mantenimiento",
      ],
    },
  ],
  criteriosRetornoActividad: [
    "Consolidación radiográfica completa confirmada",
    "Rango de movimiento completo del hombro sin dolor",
    "Fuerza >85% del lado contralateral",
    "DASH score <10 puntos",
    "Sin dolor durante actividades deportivas específicas",
    "Patrón escapulotorácico normal sin discinesia",
    "Aprobación del cirujano para retorno a actividad de contacto",
  ],
  complicacionesPotenciales: [
    "Prominencia del material de osteosíntesis (queja más frecuente, 20-30%)",
    "Irritación cutánea sobre la placa",
    "Pseudoartrosis (3-5% con placa)",
    "Consolidación viciosa con acortamiento residual",
    "Lesión del nervio supraclavicular (hipoestesia en región deltoidea)",
    "Infección del sitio quirúrgico",
    "Refractura tras retiro de material",
    "Rigidez de hombro (capsulitis adhesiva secundaria)",
    "Osificación heterotópica periarticular",
  ],
  referencias: [
    "ref-mckee-2012",
    "ref-valdes-2014",
    "ref-prat-2009",
    "ref-thewlis-2015",
  ],
  fechaActualizacion: "2025-06-01",
  nivelEvidencia: "Alto (ensayo clínico aleatorizado multicéntrico COTS)",
};
