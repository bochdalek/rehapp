import type { Protocol } from "@/types/protocol";

export const caderaCuelloFemoralArtroplastia: Protocol = {
  id: "cadera-cuello-femoral-artroplastia",
  nombre: "Fractura de cuello femoral tratada con hemiartroplastia",
  nombreCorto: "Fx cuello femoral - Hemiartroplastia",
  descripcion:
    "Protocolo de rehabilitación para fractura de cuello femoral tratada mediante hemiartroplastia (abordaje posterior). Indicado en pacientes mayores con fracturas desplazadas (Garden III-IV). Carga tolerada desde el día 1 con precauciónes de abordaje posterior.",
  region: "miembro-inferior",
  localizacion: "cadera",
  abordajeQuirurgico: ["hemiartroplastia"],
  clasificaciones: [
    "Garden I: Fractura incompleta o impactada en valgo, sin desplazamiento",
    "Garden II: Fractura completa sin desplazamiento",
    "Garden III: Fractura completa con desplazamiento parcial, contacto parcial entre fragmentos",
    "Garden IV: Fractura completa con desplazamiento total, sin contacto entre fragmentos",
  ],
  indicacionesQuirurgicas: [
    "Pacientes mayores de 65 anios con fractura Garden III o IV",
    "Pacientes con baja demanda funciónal y fracturas desplazadas",
    "Fracturas con riesgo elevado de necrosis avascular de la cabeza femoral",
    "Pacientes con enfermedad articular degenerativa previa leve",
    "Pacientes con expectativa de vida limitada o comorbilidad significativa",
  ],
  duracionTotal: "12-16 semanas",
  semanasTotal: 16,
  fases: [
    // ──────────────────────────────────────────
    // FASE 1: Movilización temprana (0-2 semanas)
    // ──────────────────────────────────────────
    {
      id: "fase-1-movilizacion-temprana",
      numero: 1,
      nombre: "Movilización temprana y protección",
      duracion: "0-2 semanas",
      semanaInicio: 0,
      semanaFin: 2,
      objetivos: [
        "Controlar el dolor y el edema postquirurgico",
        "Prevenir complicaciónes tromboembolicas y respiratorias",
        "Iniciar la sedestacion y la bipedestacion precoz",
        "Lograr la marcha asistida con andador o bastones ingleses",
        "Educar al paciente en las precauciónes del abordaje posterior",
      ],
      estadoCarga: "carga-progresiva",
      cargaPorcentaje: 100,
      cargaDetalle:
        "Carga según tolerancia desde el día 1 postquirurgico. Uso obligatorio de andador o bastones ingleses para estabilidad.",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-70 grados",
          restriccion:
            "No sobrepasar 90 grados de flexión (precaución posterior)",
        },
        {
          movimiento: "Extensión de cadera",
          rangoObjetivo: "0 grados (neutra)",
          restriccion: "Evitar hiperextensión activa",
        },
        {
          movimiento: "Abducción de cadera",
          rangoObjetivo: "0-20 grados",
          restriccion:
            "Evitar aducción pasada la linea media (precaución posterior)",
        },
        {
          movimiento: "Rotación externa de cadera",
          rangoObjetivo: "0-15 grados",
          restriccion:
            "Evitar rotación interna (precaución posterior por riesgo de luxacion)",
        },
      ],
      ejercicios: [
        {
          id: "f1-bombeo-tobillo",
          nombre: "Bombeo de tobillo (dorsiflexión-plantiflexión)",
          descripcion:
            "En decubito supino, realizar movimientos de dorsiflexión y plantiflexión del tobillo de forma ritmica. Este ejercicio activa la bomba muscular del soleo y los gemelos, favoreciendo el retorno venoso y previniendo la trombosis venosa profunda.",
          repeticiones: "20 repeticiones cada 1-2 horas",
          frecuencia: "Cada 1-2 horas durante la vigilia",
          precauciones: [
            "Mantener la extremidad inferior en posición neutra de rotación",
          ],
          progresion:
            "Anadir circunduccion de tobillo cuando se tolere sin dolor",
        },
        {
          id: "f1-isometricos-cuadriceps",
          nombre: "Contracción isométrica de cuadriceps",
          descripcion:
            "En decubito supino con la rodilla en extensión, contraer el cuadriceps presionando la fosa poplitea contra la cama. Mantener la contracción 5-10 segúndos. Este ejercicio previene la atrofia muscular precoz y facilita el control del miembro inferior.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "3 veces al día",
          precauciones: [
            "No realizar elevación activa de la pierna recta en la primera semana si hay dolor significativo",
          ],
          progresion:
            "Progresar a elevación de pierna recta (straight leg raise) cuando sea tolerado",
        },
        {
          id: "f1-isometricos-gluteos",
          nombre: "Contracción isométrica de gluteos",
          descripcion:
            "En decubito supino, apretar ambos gluteos simultaneamente y mantener la contracción 5-10 segúndos. Relajar y repetir. Este ejercicio activa la musculatura periarticular de la cadera sin generar movimiento articular significativo.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "3 veces al día",
          precauciones: [
            "Evitar compensación con inclinacion pelvica excesiva",
          ],
          progresion:
            "Aumentar el tiempo de contracción a 10 segúndos a medida que se tolere",
        },
        {
          id: "f1-deslizamiento-talon",
          nombre: "Deslizamiento de talon en cama",
          descripcion:
            "En decubito supino, deslizar el talon sobre la cama flexiónando la cadera y la rodilla de forma controlada, sin superar los 70 grados de flexión de cadera. Regresar a la posición inicial lentamente. Este ejercicio trabaja el rango de movimiento activo dentro de limites seguros.",
          repeticiones: "10 repeticiones x 2 series",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "No superar 70 grados de flexión de cadera",
            "Mantener la extremidad en ligera abducción y rotación neutra",
          ],
          progresion:
            "Aumentar gradualmente el rango de flexión sin superar la restricción de 90 grados",
        },
        {
          id: "f1-sedestacion-bipedestacion",
          nombre: "Transferencia sedestacion-bipedestacion",
          descripcion:
            "Desde la cama o silla elevada, con ayuda de las extremidades superiores, pasar a bipedestacion manteniendo la cadera operada en ligera abducción y evitando la flexión excesiva. Utilizar andador para la estabilidad. La altura del asiento debe ser suficiente para no superar 90 grados de flexión de cadera.",
          repeticiones: "5-8 repeticiones",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "Usar asiento elevado (cojin o alza) para respetar la restricción de flexión",
            "No cruzar las piernas ni girar el tronco sobre la pierna operada",
            "Levantarse siempre por el lado de la pierna operada",
          ],
          progresion:
            "Reducir la asistencia de miembros superiores a medida que aumente la confianza",
        },
      ],
      precauciones: [
        "PRECAUCIONES DE ABORDAJE POSTERIOR: No flexiónar la cadera más de 90 grados",
        "No aducir la cadera pasada la linea media (no cruzar las piernas)",
        "No realizar rotación interna de la cadera",
        "Dormir en decubito supino con almohada abductora entre las piernas",
        "Usar asiento elevado en inodoro y sillas",
        "No agacharse a recoger objetos del suelo",
        "No sentarse en sillas bajas ni sofas hundidos",
        "Profilaxis tromboembolica según indicación medica",
        "Vigilancia del estado de la herida quirúrgica",
      ],
      banderasRojas: [
        "Dolor intenso subito en la ingle o region glutea (posible luxacion protesica)",
        "Acortamiento y rotación externa fija del miembro (signo de luxacion)",
        "Fiebre mayor a 38.5 grados con signos inflamatorios locales (infección protesica)",
        "Edema progresivo de pantorrilla con dolor a la dorsiflexión (trombosis venosa profunda)",
        "Disnea súbita o dolor toracico (embolia pulmonar)",
        "Imposibilidad para la carga o empeoramiento de la marcha",
      ],
      criteriosAvance: [
        "Dolor controlado con analgesia oral (EVA menor a 4 en reposo)",
        "Marcha con andador o bastones ingleses por al menos 20 metros",
        "Capacidad de realizar transferencias de forma independiente o con minima ayuda",
        "Herida quirúrgica sin signos de infección",
        "Flexión activa de cadera alcanzando 60-70 grados de forma segura",
      ],
      notas:
        "En hemiartroplastia por abordaje posterior, la carga completa se permite desde el día 1 según tolerancia del paciente (weight bearing as tolerated). Las precauciónes de luxacion se mantienen estrictamente durante las primeras 6-12 semanas.",
    },
    // ──────────────────────────────────────────
    // FASE 2: ROM progresivo y entrenamiento de marcha (2-6 semanas)
    // ──────────────────────────────────────────
    {
      id: "fase-2-rom-progresivo-marcha",
      numero: 2,
      nombre: "Rango de movimiento progresivo y entrenamiento de marcha",
      duracion: "2-6 semanas",
      semanaInicio: 2,
      semanaFin: 6,
      objetivos: [
        "Mejorar progresivamente el rango de movimiento activo de la cadera dentro de las precauciónes",
        "Progresar la marcha con bastones ingleses y mejorar la cadencia y la longitud de paso",
        "Iniciar fortalecimiento isotonico suave de la musculatura periarticular",
        "Independizar las actividades basicas de la vida diaria con ayudas técnicas",
        "Mantener estrictamente las precauciónes del abordaje posterior",
      ],
      estadoCarga: "carga-completa",
      cargaPorcentaje: 100,
      cargaDetalle:
        "Carga completa tolerada. Progresión de andador a bastones ingleses bilaterales. Retirada gradual de uno de los bastones si la marcha es estable y sin Trendelenburg.",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-80 grados",
          restriccion: "Mantener restricción de no superar 90 grados",
        },
        {
          movimiento: "Extensión de cadera",
          rangoObjetivo: "0-10 grados",
        },
        {
          movimiento: "Abducción de cadera",
          rangoObjetivo: "0-30 grados",
          restriccion: "Evitar aducción más alla de la linea media",
        },
        {
          movimiento: "Rotación externa de cadera",
          rangoObjetivo: "0-25 grados",
          restriccion: "Evitar rotación interna",
        },
      ],
      ejercicios: [
        {
          id: "f2-flexion-cadera-supino",
          nombre: "Flexión activa-asistida de cadera en supino",
          descripcion:
            "En decubito supino, flexiónar la cadera deslizando el talon o con ayuda de una banda o toalla colocada bajo el muslo. Controlar el movimiento para no superar los 80 grados de flexión. Mantener 5 segúndos en el rango maximo tolerado y regresar lentamente.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "2 veces al día",
          precauciones: [
            "No superar 80-85 grados de flexión de cadera",
            "Mantener ligera abducción durante el movimiento",
          ],
          progresion:
            "Pasar de activo-asistido a activo libre conforme el paciente gane fuerza y confianza",
        },
        {
          id: "f2-abduccion-lateral",
          nombre: "Abducción de cadera en decubito lateral",
          descripcion:
            "En decubito lateral sobre el lado sano, con una almohada entre las piernas para mantener la alineacion, elevar la pierna operada en abducción de 20-30 grados. Mantener 3 segúndos y descender lentamente. Este ejercicio fortalece el gluteo medio, fundamental para la estabilidad de la marcha.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "1-2 veces al día",
          precauciones: [
            "No retirar la almohada entre las piernas",
            "Evitar rotación interna durante la abducción",
            "Mantener la pelvis estable sin balanceo del tronco",
          ],
          progresion:
            "Anadir lastre en tobillo de 0.5-1 kg a partir de la semana 4",
        },
        {
          id: "f2-extension-cadera-prono",
          nombre: "Extensión de cadera en bipedestacion",
          descripcion:
            "De pie, apoyado en una superficie estable (encimera o respaldo de silla), llevar la pierna operada hacia atras manteniendo la rodilla en extensión. No inclinar el tronco hacia adelante. Mantener 3 segúndos y regresar. Este ejercicio trabaja el gluteo mayor y favorece la fase de impulso de la marcha.",
          repeticiones: "10 repeticiones x 2 series",
          frecuencia: "1-2 veces al día",
          precauciones: [
            "No inclinar el tronco hacia adelante",
            "Mantener la rodilla de la pierna de apoyo ligeramente flexiónada",
          ],
          progresion:
            "Aumentar la amplitud de extensión de cadera conforme se tolere",
        },
        {
          id: "f2-marcha-bastones",
          nombre: "Entrenamiento de marcha con bastones ingleses",
          descripcion:
            "Caminar con bastones ingleses bilaterales sobre superficie plana, enfocandose en la simetria del paso, la longitud del paso y el patrón talon-punta. Progresar la distancia de forma gradual. Si la marcha es estable y sin claudicacion, iniciar la retirada del baston contralateral (primero usar un solo baston en el lado contrario a la cirugia).",
          repeticiones: "Sesiones de 10-15 minutos",
          frecuencia: "3-4 veces al día",
          precauciones: [
            "Evitar superficies irregulares o resbaladizas",
            "No retirar los bastones prematuramente si persiste la claudicacion",
          ],
          progresion:
            "Progresar a un solo baston contralateral cuando la marcha sea simetrica y sin Trendelenburg",
        },
        {
          id: "f2-elevacion-pierna-recta",
          nombre: "Elevación de pierna recta (straight leg raise)",
          descripcion:
            "En decubito supino, con la pierna contralateral flexiónada y el pie apoyado, contraer el cuadriceps de la pierna operada y elevarla con la rodilla en extensión hasta 30-45 grados. Mantener 5 segúndos y descender lentamente. Este ejercicio fortalece el cuadriceps y el psoas iliaco.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "1-2 veces al día",
          precauciones: [
            "No realizar si causa dolor significativo en la ingle o zona quirúrgica",
            "Mantener la pierna en rotación neutra durante la elevación",
          ],
          progresion:
            "Anadir lastre en tobillo de 0.5 kg a partir de la semana 4 si se tolera",
        },
      ],
      precauciones: [
        "Mantener las precauciónes del abordaje posterior estrictamente",
        "No flexiónar la cadera más de 90 grados",
        "No cruzar las piernas ni aducir más alla de la linea media",
        "No realizar rotación interna",
        "Continuar uso de asiento elevado en inodoro",
        "No conducir vehiculos hasta autorizacion del cirujano (habitualmente 4-6 semanas)",
        "Evitar posiciónes de riesgo de luxacion al vestirse (usar calzador largo, no inclinarse)",
      ],
      banderasRojas: [
        "Chasquido audible o sensacion de subluxacion en la cadera",
        "Dolor subito severo con incapacidad funciónal (luxacion protesica)",
        "Aumento progresivo del dolor en la region trocanterea o inguinal",
        "Signos de infección de la herida: eritema creciente, drenaje purulento, fiebre",
        "Caida con imposibilidad de carga sobre el miembro operado",
        "Signo de Trendelenburg marcado sin mejoria después de 4 semanas",
      ],
      criteriosAvance: [
        "Flexión activa de cadera de al menos 80 grados sin dolor significativo",
        "Marcha con un baston contralateral con patrón simetrico",
        "Abducción activa contra gravedad (grado 3+/5 del gluteo medio)",
        "Independencia en actividades basicas de la vida diaria con ayudas técnicas",
        "Ausencia de signos inflamatorios en la herida",
      ],
      notas:
        "A las 6 semanas se realiza la consulta de seguimiento con el traumatologo con radiografia de control. En este punto se evalua la posición del implante y se decide sobre la reducción gradual de las precauciónes posteriores.",
    },
    // ──────────────────────────────────────────
    // FASE 3: Fortalecimiento y equilibrio (6-12 semanas)
    // ──────────────────────────────────────────
    {
      id: "fase-3-fortalecimiento-equilibrio",
      numero: 3,
      nombre: "Fortalecimiento, equilibrio y reducción de precauciónes",
      duracion: "6-12 semanas",
      semanaInicio: 6,
      semanaFin: 12,
      objetivos: [
        "Fortalecer la musculatura de cadera, especialmente gluteo medio, gluteo mayor y cuadriceps",
        "Mejorar el equilibrio estatico y dinamico",
        "Lograr la marcha independiente sin auxiliar de marcha",
        "Reducir gradualmente las precauciónes posteriores según autorizacion del cirujano",
        "Iniciar actividades funciónales como subir y bajar escaleras",
      ],
      estadoCarga: "carga-completa",
      cargaPorcentaje: 100,
      cargaDetalle:
        "Carga completa sin restricción. Retirada progresiva del baston. Marcha libre cuando la fuerza del gluteo medio sea adecuada (sin Trendelenburg).",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-90 grados",
          restriccion:
            "Flexión más alla de 90 grados puede permitirse gradualmente tras autorizacion del cirujano (semana 8-12)",
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
          movimiento: "Rotación externa de cadera",
          rangoObjetivo: "0-30 grados",
          restriccion:
            "Rotación interna puede introducirse suavemente a partir de la semana 8 bajo supervision",
        },
        {
          movimiento: "Rotación interna de cadera",
          rangoObjetivo: "0-15 grados",
          restriccion:
            "Introduccion cautelosa solo tras autorizacion del cirujano",
        },
      ],
      ejercicios: [
        {
          id: "f3-sentadilla-parcial",
          nombre: "Sentadilla parcial con apoyo",
          descripcion:
            "De pie frente a una encimera o barra estable, realizar una sentadilla parcial flexiónando caderas y rodillas hasta 45-60 grados. Mantener la espalda recta, las rodillas alineadas con los pies y el peso repartido en ambas extremidades. Regresar a la posición inicial. Este ejercicio fortalece cuadriceps, gluteos e isquiotibiales de forma funciónal.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "1 vez al día",
          precauciones: [
            "No superar la flexión de cadera autorizada",
            "Distribuir el peso de forma simetrica en ambas piernas",
          ],
          progresion:
            "Aumentar la profundidad gradualmente y reducir el apoyo en las manos",
        },
        {
          id: "f3-puente-gluteo",
          nombre: "Puente de gluteos (bridging)",
          descripcion:
            "En decubito supino con ambas rodillas flexiónadas y los pies apoyados en la cama, elevar la pelvis contrayendo los gluteos hasta alinear muslos y tronco. Mantener 5-10 segúndos y descender lentamente. Este ejercicio trabaja el gluteo mayor, los isquiotibiales y el core de forma sinergica.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "1 vez al día",
          precauciones: [
            "Mantener los pies separados al ancho de las caderas",
            "No permitir rotación interna de rodillas durante la elevación",
          ],
          progresion:
            "Progresar a puente unipodal (sobre la pierna operada) a partir de la semana 10 si se tolera",
        },
        {
          id: "f3-equilibrio-unipodal",
          nombre: "Equilibrio unipodal con apoyo",
          descripcion:
            "De pie junto a una superficie de apoyo, transferir el peso a la pierna operada y levantar la pierna sana del suelo. Mantener el equilibrio 10-30 segúndos. Este ejercicio trabaja la estabilidad de la cadera y fortalece el gluteo medio en carga, siendo fundamental para eliminar la claudicacion.",
          repeticiones: "5 repeticiones de 10-30 segúndos",
          frecuencia: "2 veces al día",
          precauciones: [
            "Mantener una superficie de apoyo al alcance en todo momento",
            "No realizar si existe dolor o inestabilidad significativa",
          ],
          progresion:
            "Reducir progresivamente el apoyo manual. Anadir superficie inestable (colchoneta) en la semana 10-12",
        },
        {
          id: "f3-escaleras",
          nombre: "Subir y bajar escaleras",
          descripcion:
            "Subir: pierna sana primero, luego la pierna operada, luego el baston. Bajar: baston primero, luego la pierna operada, luego la pierna sana. Recordar la regla: 'la buena sube, la mala baja'. Apoyarse en el pasamanos cuando este disponible.",
          repeticiones: "1-2 tramos de escalera",
          frecuencia: "1-2 veces al día",
          precauciones: [
            "Utilizar siempre el pasamanos",
            "No tener prisa, colocar bien el pie en cada escalon",
            "Evitar escaleras sin pasamanos o con escalones irregulares",
          ],
          progresion:
            "Progresar a escalon por escalon alternando pies cuando la fuerza lo permita",
        },
        {
          id: "f3-abduccion-resistencia",
          nombre: "Abducción de cadera con banda elastica",
          descripcion:
            "De pie, con una banda elastica colocada alrededor de los tobillos, realizar abducción de la pierna operada contra la resistencia de la banda. Mantener el tronco erguido y la pelvis estable. Retornar lentamente. Este ejercicio proporciona fortalecimiento progresivo del gluteo medio con resistencia variable.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "1 vez al día",
          precauciones: [
            "Iniciar con resistencia baja y progresar gradualmente",
            "Evitar compensación con inclinacion lateral del tronco",
          ],
          progresion:
            "Aumentar la resistencia de la banda elastica cada 2 semanas según tolerancia",
        },
      ],
      precauciones: [
        "Las precauciónes posteriores se mantienen al menos hasta la semana 6-8, y se reducen gradualmente según indicación del cirujano",
        "La flexión más alla de 90 grados solo se permite tras autorizacion explicita del traumatologo",
        "La rotación interna se introduce cautamente a partir de la semana 8-12",
        "Evitar actividades de impacto (correr, saltar)",
        "No levantar objetos pesados (más de 10 kg) desde el suelo",
        "Continuar evitando sillas bajas y superficies inestables hasta la semana 12",
      ],
      banderasRojas: [
        "Dolor persistente en la ingle que no mejora con la rehabilitación",
        "Claudicacion persistente después de la semana 8",
        "Sensacion de inestabilidad o chasquido articular",
        "Dolor nocturno que despierta al paciente",
        "Pérdida de rango de movimiento previamente alcanzado",
        "Fractura periprotesica tras una caida o traumatismo (dolor agudo con incapacidad funciónal)",
      ],
      criteriosAvance: [
        "Marcha independiente sin auxiliar de marcha y sin claudicacion",
        "Fuerza de gluteo medio grado 4/5 o superior (sin Trendelenburg)",
        "Flexión activa de cadera de 90 grados o más (según autorizacion)",
        "Equilibrio unipodal mayor a 15 segúndos sin apoyo",
        "Capacidad de subir y bajar un tramo de escaleras con pasamanos",
        "Independencia en actividades basicas e instrumentales de la vida diaria",
      ],
      notas:
        "La reducción de las precauciónes posteriores debe individualizarse. En pacientes con factores de riesgo de luxacion (edad avanzada, deterioro cognitivo, debilidad muscular marcada), las precauciónes pueden mantenerse indefinidamente.",
    },
    // ──────────────────────────────────────────
    // FASE 4: Fortalecimiento avanzado y retorno funciónal (12-16 semanas)
    // ──────────────────────────────────────────
    {
      id: "fase-4-retorno-funcional",
      numero: 4,
      nombre: "Fortalecimiento avanzado y retorno a la actividad",
      duracion: "12-16 semanas",
      semanaInicio: 12,
      semanaFin: 16,
      objetivos: [
        "Alcanzar la maxima capacidad funciónal posible según el perfil del paciente",
        "Normalizar el patrón de marcha en interiores y exteriores",
        "Restablecer la confianza en actividades recreativas de bajo impacto",
        "Optimizar la fuerza y resistencia muscular del miembro inferior",
        "Establecer un programa de mantenimiento a largo plazo para prevención de caidas",
      ],
      estadoCarga: "carga-completa",
      cargaPorcentaje: 100,
      cargaDetalle:
        "Carga completa sin restricción. Marcha libre en interiores y exteriores.",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-100 grados o mas",
          restriccion:
            "Segun tolerancia y tipo de implante. Evitar flexión forzada en carga",
        },
        {
          movimiento: "Extensión de cadera",
          rangoObjetivo: "0-20 grados",
        },
        {
          movimiento: "Abducción de cadera",
          rangoObjetivo: "0-40 grados",
        },
        {
          movimiento: "Rotación externa de cadera",
          rangoObjetivo: "0-35 grados",
        },
        {
          movimiento: "Rotación interna de cadera",
          rangoObjetivo: "0-20 grados",
        },
      ],
      ejercicios: [
        {
          id: "f4-sentadilla-sin-apoyo",
          nombre: "Sentadilla funciónal sin apoyo externo",
          descripcion:
            "De pie con los pies al ancho de los hombros, realizar sentadilla controlada hasta 70-90 grados de flexión de caderas y rodillas. Mantener la espalda recta y las rodillas alineadas con los dedos de los pies. Regresar a la posición inicial. Este ejercicio reproduce el patrón de movimiento de sentarse y levantarse de forma autonoma.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "3-4 veces por semana",
          precauciones: [
            "No realizar sentadilla profunda más alla del rango autorizado",
            "Mantener la alineacion de las rodillas (evitar valgo dinamico)",
          ],
          progresion:
            "Anadir peso ligero (mancuernas de 2-5 kg) cuando la técnica sea correcta",
        },
        {
          id: "f4-step-up-lateral",
          nombre: "Step-up lateral y frontal",
          descripcion:
            "Subir a un escalon de 10-15 cm de altura con la pierna operada, extendiendo completamente la cadera y la rodilla en la parte superior. Descender de forma controlada con la pierna sana. Realizar tanto en plano frontal como lateral. Este ejercicio integra fuerza y control motor funciónal.",
          repeticiones: "10 repeticiones x 3 series (cada direccion)",
          frecuencia: "3-4 veces por semana",
          precauciones: [
            "Iniciar con escalon bajo (10 cm) y progresar a 15-20 cm",
            "Asegurar buena alineacion de rodilla y cadera durante la subida",
          ],
          progresion:
            "Aumentar la altura del escalon progresivamente hasta 20 cm",
        },
        {
          id: "f4-marcha-exteriores",
          nombre: "Marcha en exteriores con terreno variado",
          descripcion:
            "Caminar en exteriores sobre diferentes superficies (acera, cesped, terreno ligeramente irregular). Progresar la distancia y el tiempo de marcha. El objetivo es alcanzar 20-30 minutos de caminata continua a ritmo confortable. Este ejercicio mejora la resistencia cardiovascular y la confianza funciónal.",
          repeticiones: "Sesiones de 20-30 minutos",
          frecuencia: "5-7 veces por semana",
          precauciones: [
            "Evitar superficies muy irregulares o resbaladizas",
            "Llevar calzado cerrado con buena suela",
            "Utilizar baston si la superficie genera inseguridad",
          ],
          progresion:
            "Aumentar la distancia gradualmente. Incorporar caminata en cuesta suave",
        },
        {
          id: "f4-equilibrio-dinamico",
          nombre: "Ejercicios de equilibrio dinamico y prevención de caidas",
          descripcion:
            "Realizar marcha en tandem (un pie delante del otro), giros controlados sobre el eje corporal, cambios de direccion durante la marcha y alcances funciónales en bipedestacion unipodal. Estos ejercicios mejoran las reacciones de equilibrio y reducen el riesgo de caidas, una prioridad en la poblacion con fractura de cuello femoral.",
          repeticiones: "10 minutos de ejercicios combinados",
          frecuencia: "3-4 veces por semana",
          precauciones: [
            "Realizar siempre en un entorno seguro, cerca de una pared o superficie de apoyo",
            "Supervisar en pacientes con antecedentes de caidas recurrentes",
          ],
          progresion:
            "Anadir superficies inestables (colchoneta, plataforma de equilibrio) y tareas duales (cognitivas y motoras)",
        },
        {
          id: "f4-bicicleta-estatica",
          nombre: "Bicicleta estatica",
          descripcion:
            "Pedalear en bicicleta estatica con el sillin ajustado a una altura que permita la extensión casi completa de la rodilla en el punto más bajo. Iniciar con resistencia minima y sesiones de 10 minutos. Este ejercicio mejora la movilidad de la cadera, la resistencia cardiovascular y la fuerza del cuadriceps sin impacto articular.",
          repeticiones: "Sesiones de 10-20 minutos",
          frecuencia: "3-5 veces por semana",
          precauciones: [
            "Ajustar el sillin a altura adecuada para no forzar la flexión de cadera",
            "Iniciar con resistencia baja",
            "Detenerse si aparece dolor en la ingle o la region trocanterea",
          ],
          progresion:
            "Aumentar la duracion a 20-30 minutos y la resistencia de forma gradual",
        },
      ],
      precauciones: [
        "Evitar deportes de impacto (correr, saltar, deportes de contacto) de forma indefinida en hemiartroplastia",
        "Evitar flexión forzada de cadera en carga (sentadilla profunda, cuclillas completas)",
        "Mantener la conciencia sobre la posición de la cadera en actividades diarias",
        "Prevencion de caidas: iluminacion adecuada, retirar alfombras sueltas, usar calzado apropiado",
        "Consultar con el traumatologo antes de realizar actividades fisicas nuevas",
      ],
      banderasRojas: [
        "Dolor en la ingle o region trocanterea que aparece con la actividad y no cede con reposo",
        "Dolor referido a la rodilla ipsilateral sin causa aparente",
        "Acortamiento progresivo del miembro operado",
        "Crepitacion o crujido articular doloroso",
        "Fractura periprotesica tras traumatismo o caida (dolor agudo, deformidad, impotencia funciónal)",
        "Luxacion tardia (poco frecuente, pero posible ante traumatismo o posición extrema)",
      ],
      criteriosAvance: [
        "Marcha independiente en interiores y exteriores sin claudicacion",
        "Fuerza del miembro inferior operado simetrica o con deficit menor al 20% respecto al contralateral",
        "Capacidad de subir y bajar escaleras de forma alternante sin apoyo de pasamanos",
        "Equilibrio unipodal mayor a 30 segúndos sin apoyo",
        "Independencia completa en actividades basicas e instrumentales de la vida diaria",
        "Capacidad de caminar 30 minutos continuos sin dolor",
      ],
      notas:
        "Al finalizar el protocolo, se recomienda un programa de mantenimiento indefinido con ejercicios de fuerza (2-3 veces/semana) y actividad aerobica de bajo impacto (caminar, bicicleta, natacion). El seguimiento por traumatologia continuara según el protocolo del centro (habitualmente al ano y bianualmente después). Se deben reforzar las medidas de prevención de caidas y valorar factores de riesgo de fragilidad.",
    },
  ],
  criteriosRetornoActividad: [
    "Marcha independiente sin claudicacion en interiores y exteriores",
    "Capacidad de subir y bajar escaleras sin auxiliar",
    "Independencia completa en actividades basicas e instrumentales de la vida diaria",
    "Fuerza del miembro inferior grado 4+/5 o superior en musculatura clave (gluteo medio, cuadriceps)",
    "Equilibrio unipodal mayor a 30 segúndos en la pierna operada",
    "Ausencia de dolor significativo en la cadera (EVA menor a 2 con actividad)",
    "Capacidad de caminar al menos 30 minutos continuos sin molestia",
    "Actividades permitidas: caminar, bicicleta estatica, natacion, golf, jardineria ligera",
    "Actividades contraindicadas de forma indefinida: correr, saltar, deportes de contacto, esqui alpino",
  ],
  complicacionesPotenciales: [
    "Luxacion protesica (riesgo mayor en abordaje posterior, 2-5%)",
    "Infección periprotesica (superficial o profunda)",
    "Trombosis venosa profunda y embolia pulmonar",
    "Fractura periprotesica (intraoperatoria o postoperatoria)",
    "Aflojamiento aseptico del vastago femoral",
    "Erosion acetabular por la cabeza protesica (complicación a largo plazo)",
    "Discrepancia de longitud de miembros inferiores",
    "Osificacion heterotopica",
    "Lesión del nervio ciatico (rara, más frecuente en abordaje posterior)",
    "Caidas recurrentes y refractura contralateral",
  ],
  referencias: [
    "NICE Guideline CG124: Hip fracture: management. National Institute for Health and Care Excellence, 2023 update.",
    "AAOS Clínical Practice Guideline: Management of Hip Fractures in Older Adults. American Academy of Orthopaedic Surgeons, 2021.",
    "Cochrane Review: Arthroplasties for hip fractures in adults. Parker MJ, Gurusamy KS, Cochrane Database Syst Rev, 2006; updated 2019.",
    "Scottish Intercollegiate Guidelines Network (SIGN): Management of Hip Fracture in Older People. SIGN 111, 2009; revised 2021.",
    "Garden RS. Low-angle fixation in fractures of the femoral neck. J Bone Joint Surg Br. 1961;43(4):647-663.",
    "Rogmark C, Leonardsson O. Hip arthroplasty for the treatment of displaced fractures of the femoral neck in elderly patients. Bone Joint J. 2016;98-B(3):291-297.",
    "Keating JF, Grant A, Masson M, et al. Randomized comparison of reduction and fixation, bipolar hemiarthroplasty, and total hip arthroplasty for displaced subcapital fractures in fit older patients. J Bone Joint Surg Am. 2006;88(2):249-260.",
    "Guia de Practica Clínica: Diagnostico y Tratamiento de Fracturas Intracapsulares del Extremo Proximal del Fémur. IMSS, Mexico, 2014.",
  ],
  fechaActualizacion: "2026-03-31",
  nivelEvidencia:
    "Basado en guias de practica clínica de alta calidad (NICE, AAOS, SIGN) y revisiones sistematicas Cochrane. Nivel de evidencia predominante: 1-2 para la indicación quirúrgica; 2-4 para los protocolos de rehabilitación.",
};
