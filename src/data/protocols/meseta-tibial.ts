import type { Protocol } from "@/types/protocol";

export const mesetaTibialRAFI: Protocol = {
  id: "meseta-tibial-rafi",
  nombre:
    "Protocolo de Rehabilitación Post-RAFI de Fractura de Meseta Tibial",
  nombreCorto: "RAFI Meseta Tibial",
  descripcion:
    "Protocolo de rehabilitación basado en evidencia para el manejo postquirúrgico de fracturas de meseta tibial tratadas mediante reducción abierta y fijación interna (RAFI) con placa y tornillos. Aplicable a fracturas clasificadas según Schatzker I-VI. El protocolo contempla un período prolongado sin carga para proteger la superficie articular, seguido de progresión gradual de carga y retorno funcional en 16 semanas.",
  region: "miembro-inferior",
  localizacion: "rodilla",
  abordajeQuirurgico: ["RAFI", "placa", "tornillos"],
  clasificaciones: [
    "Schatzker I - Cizallamiento lateral puro (cuña lateral)",
    "Schatzker II - Cizallamiento lateral con hundimiento",
    "Schatzker III - Hundimiento puro del platillo lateral",
    "Schatzker IV - Fractura del platillo medial",
    "Schatzker V - Fractura bicondílea",
    "Schatzker VI - Fractura con disociación metafiso-diafisaria",
  ],
  indicacionesQuirurgicas: [
    "Hundimiento articular >2-3 mm",
    "Ensanchamiento del platillo tibial >5 mm",
    "Inestabilidad en valgo o varo >10 grados",
    "Fractura del platillo medial (Schatzker IV) desplazada",
    "Fractura bicondílea (Schatzker V y VI)",
    "Fractura con lesión ligamentaria asociada (LCA, LCM)",
    "Fractura con lesión meniscal concomitante",
    "Bloqueo articular por fragmento intraarticular",
  ],
  duracionTotal: "16 semanas",
  semanasTotal: 16,
  fases: [
    // =====================================================================
    // FASE 1: PROTECCIÓN Y MOVILIDAD TEMPRANA (Semanas 0-2)
    // =====================================================================
    {
      id: "meseta-tibial-fase-1",
      numero: 1,
      nombre: "Protección articular y movilidad temprana",
      duracion: "Semanas 0-2",
      semanaInicio: 0,
      semanaFin: 2,
      objetivos: [
        "Control del dolor y edema postquirúrgico severo",
        "Protección de la reducción articular y el material de osteosíntesis",
        "Iniciar movilización pasiva continua (CPM) o activa-asistida temprana de rodilla",
        "Prevenir rigidez articular de rodilla",
        "Activación muscular del cuádriceps (prevenir inhibición artrogénica)",
        "Prevención de TVP",
      ],
      estadoCarga: "sin-carga",
      cargaPorcentaje: 0,
      cargaDetalle:
        "Sin carga absoluta sobre la extremidad operada durante las primeras 6 semanas. Deambulación con muletas axilares o andadera sin apoyar el pie. Uso de férula articulada de rodilla (hinged knee brace) según indicación.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-90 grados (pasiva o activa-asistida)",
          restriccion:
            "Iniciar con CPM o movilización pasiva. No flexión forzada.",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0 grados (extensión completa)",
          restriccion: "Priorizar extensión completa desde el inicio",
        },
        {
          movimiento: "Flexión dorsal/plantar de tobillo",
          rangoObjetivo: "Rango completo activo",
        },
        {
          movimiento: "Flexión/extensión de cadera",
          rangoObjetivo: "Rango completo según tolerancia",
        },
      ],
      ejercicios: [
        {
          id: "mt-f1-e1",
          nombre: "Movilización pasiva continua (CPM) de rodilla",
          descripcion:
            "Utilizar máquina de movilización pasiva continua (CPM) iniciando con rango de 0-30 grados e incrementando 10 grados por día según tolerancia. El CPM previene adherencias intraarticulares, promueve la nutrición del cartílago articular y reduce el edema. Si no se dispone de CPM, realizar movilización pasiva manual por el fisioterapeuta.",
          repeticiones: "2-4 horas al día en sesiones de 30-60 minutos",
          frecuencia: "Continuo o en sesiones fraccionadas diarias",
          precauciones: [
            "No forzar rango que genere dolor significativo",
            "Aumentar rango 10° por día según tolerancia",
            "Vigilar estado de la herida quirúrgica",
          ],
          progresion:
            "Progresar rango de CPM hasta alcanzar 90° al final de la semana 2.",
        },
        {
          id: "mt-f1-e2",
          nombre: "Contracción isométrica de cuádriceps (quad sets)",
          descripcion:
            "En decúbito supino con la pierna extendida, contraer el cuádriceps presionando la rodilla hacia la superficie de apoyo. Mantener la contracción 6-10 segundos y relajar. La inhibición artrogénica del cuádriceps es uno de los principales problemas tras cirugía de rodilla. Este ejercicio combate la atrofia temprana y mantiene la activación neuromuscular.",
          repeticiones: "10 repeticiones x 5 series",
          frecuencia: "Cada 2 horas durante vigilia",
          precauciones: [
            "Puede requerirse electroestimulación neuromuscular (NMES) si la contracción es deficiente",
          ],
          progresion:
            "Si la activación es pobre, agregar NMES del cuádriceps para facilitar la contracción.",
        },
        {
          id: "mt-f1-e3",
          nombre: "Elevación de pierna recta (SLR)",
          descripcion:
            "En decúbito supino, con la rodilla en extensión completa (contrayendo cuádriceps primero), elevar la pierna 30-45 grados. Mantener 3-5 segundos y descender lentamente. Si existe lag del cuádriceps (incapacidad para mantener extensión completa durante SLR), bloquear la rodilla con la férula y trabajar sobre la eliminación del lag antes de progresar.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "3-4 veces al día",
          precauciones: [
            "Asegurar extensión completa de rodilla antes de elevar",
            "Si hay lag del cuádriceps, usar férula bloqueada en extensión",
          ],
          progresion:
            "Eliminar el lag del cuádriceps como prioridad. Agregar peso en tobillera cuando SLR sea sin lag.",
        },
        {
          id: "mt-f1-e4",
          nombre: "Bombeos de tobillo y movilización de cadera",
          descripcion:
            "Realizar flexión dorsal y plantar rítmica del tobillo para prevención de TVP (cada hora). Complementar con flexión de cadera activa (SLR en flexión), abducción de cadera en decúbito lateral (si es tolerado), y contracción isométrica de glúteos. Mantener la función de las articulaciones adyacentes.",
          repeticiones: "15-20 repeticiones de ankle pumps cada hora; 10 rep x 3 series de SLR y glúteos",
          frecuencia: "Ankle pumps cada hora; otros ejercicios 3 veces al día",
        },
      ],
      precauciones: [
        "SIN CARGA ABSOLUTA sobre la extremidad operada (0% del peso corporal)",
        "Uso de férula articulada o inmovilizador de rodilla entre sesiones de ejercicio",
        "Tromboprofilaxis farmacológica según protocolo",
        "Mantener la pierna elevada con hielo para control del edema",
        "No realizar movilizaciones pasivas forzadas de la rodilla",
        "Vigilar tensión de la piel y estado de la herida (alto riesgo de complicaciones de herida en meseta tibial)",
      ],
      banderasRojas: [
        "Edema severo de la pierna con síndrome compartimental (dolor desproporcionado, dolor con extensión pasiva de dedos)",
        "Dehiscencia de la herida o necrosis cutánea (frecuente en fracturas de alta energía)",
        "Infección profunda: fiebre, drenaje purulento, eritema progresivo",
        "Lesión vascular (arteria poplítea): ausencia de pulsos distales, pie frío, palidez",
        "Lesión neurológica: pie caído (nervio peroneo), hipoestesia",
        "TVP: dolor de pantorrilla, edema unilateral",
      ],
      criteriosAvance: [
        "Herida quirúrgica en buenas condiciones sin dehiscencia",
        "Flexión de rodilla pasiva >80 grados",
        "Extensión de rodilla completa (0 grados)",
        "SLR sin lag del cuádriceps significativo",
        "Edema en disminución progresiva",
        "Dolor controlado (EVA <5/10 en reposo)",
      ],
    },
    // =====================================================================
    // FASE 2: MOVILIDAD PROGRESIVA SIN CARGA (Semanas 2-6)
    // =====================================================================
    {
      id: "meseta-tibial-fase-2",
      numero: 2,
      nombre: "Movilidad progresiva sin carga",
      duracion: "Semanas 2-6",
      semanaInicio: 2,
      semanaFin: 6,
      objetivos: [
        "Aumentar rango de movimiento activo de rodilla",
        "Mantener restricción de carga (sin carga) hasta las 6 semanas",
        "Fortalecer cuádriceps y musculatura periarticular",
        "Mejorar control neuromuscular y propiocepción",
        "Lograr extensión completa activa de rodilla",
        "Preparar para inicio de carga parcial",
      ],
      estadoCarga: "sin-carga",
      cargaPorcentaje: 0,
      cargaDetalle:
        "Sin carga hasta la semana 6 (estricto). Deambulación con muletas axilares sin apoyar el pie. Ejercicios en cadena abierta y cerrada sin carga corporal.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-110 grados (activa)",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0 grados (extensión completa activa)",
        },
      ],
      ejercicios: [
        {
          id: "mt-f2-e1",
          nombre: "Flexión y extensión activa de rodilla (arc quads)",
          descripcion:
            "Sentado al borde de la cama o silla con las piernas colgando, realizar extensión activa de rodilla (arco corto de cuádriceps) desde 90° de flexión hasta extensión completa. Mantener extensión 5 segundos. Luego realizar flexión activa dejando que la gravedad asista. Este ejercicio fortalece el cuádriceps y mejora el rango de movimiento activo.",
          repeticiones: "15 repeticiones x 3 series",
          frecuencia: "3-4 veces al día",
          progresion:
            "Agregar peso en tobillera (0.5-1 kg) a partir de la semana 4.",
        },
        {
          id: "mt-f2-e2",
          nombre: "Deslizamiento de talón en pared (wall slides para flexión)",
          descripcion:
            "En decúbito supino con los pies apoyados en la pared, deslizar el talón de la pierna operada hacia abajo por la pared, flexionando la rodilla gradualmente. La pared proporciona soporte y control del movimiento. Mantener la flexión máxima tolerada 10-15 segundos. Este ejercicio es efectivo para ganar flexión de rodilla de forma controlada.",
          repeticiones: "10 repeticiones x 3 series, con mantención de 10-15 segundos",
          frecuencia: "3-4 veces al día",
          precauciones: [
            "No forzar la flexión más allá del rango tolerado",
            "El movimiento debe ser gradual y controlado",
          ],
        },
        {
          id: "mt-f2-e3",
          nombre: "Fortalecimiento isométrico en múltiples ángulos",
          descripcion:
            "Realizar contracciones isométricas del cuádriceps con la rodilla en diferentes posiciones: 0°, 30°, 60° y 90° de flexión. Presionar contra una superficie fija (almohada, toalla enrollada) manteniendo 6-10 segundos. Incluir isométricos de isquiotibiales. Trabajar en múltiples ángulos previene la inhibición selectiva del cuádriceps.",
          repeticiones: "10 repeticiones x 3 series por ángulo",
          frecuencia: "2 veces al día",
          progresion:
            "Aumentar intensidad de la contracción (50% → 75% → máxima).",
        },
        {
          id: "mt-f2-e4",
          nombre: "Bicicleta estacionaria sin resistencia (ROM)",
          descripcion:
            "Utilizar bicicleta estacionaria sin resistencia, con asiento alto, realizando pedaleo parcial o completo según el rango de flexión disponible. Si no alcanza la flexión suficiente para pedaleo completo, realizar medio giro (rocking). La bicicleta es excelente para ganar flexión de rodilla y proporciona movilización activa en un ambiente controlado.",
          repeticiones: "10-15 minutos por sesión",
          frecuencia: "1-2 veces al día",
          precauciones: [
            "SIN resistencia (el objetivo es ROM, no fortalecimiento)",
            "Ajustar altura del asiento para el rango disponible",
            "No apoyar peso a través de los pedales (pie operado apoyado suavemente)",
          ],
          progresion:
            "Progresar de medio giro (rocking) a pedaleo completo. Reducir altura del asiento gradualmente para ganar flexión.",
        },
        {
          id: "mt-f2-e5",
          nombre: "Propiocepción en sedestación y ejercicios de cadera",
          descripcion:
            "En sedestación, realizar contracciones coordinadas de cuádriceps e isquiotibiales (cocontracción) manteniendo 10 segundos. Complementar con ejercicios de cadera sin carga: SLR en 4 planos, abducción de cadera con banda elástica, puentes de glúteos bilaterales (si no genera dolor en rodilla).",
          repeticiones: "10 repeticiones x 3 series por ejercicio",
          frecuencia: "1-2 veces al día",
        },
      ],
      precauciones: [
        "SIN CARGA ABSOLUTA hasta la semana 6 (mantener estrictamente)",
        "No realizar movilizaciones pasivas forzadas de la rodilla",
        "Vigilar estado de la herida y del edema",
        "Continuar tromboprofilaxis según indicación",
        "No realizar ejercicios en cadena cerrada con carga corporal",
        "Evitar posiciones de valgo forzado de la rodilla",
      ],
      banderasRojas: [
        "Pérdida de extensión activa de rodilla (lag del cuádriceps que no mejora)",
        "Derrame articular recurrente o severo",
        "Dolor creciente no proporcional al nivel de actividad",
        "Inestabilidad ligamentaria nueva (posible lesión no diagnosticada inicialmente)",
        "Signos de infección profunda tardía",
        "Bloqueo mecánico articular (cuerpo libre)",
      ],
      criteriosAvance: [
        "Flexión activa de rodilla >100 grados",
        "Extensión completa activa (0 grados) sin lag del cuádriceps",
        "SLR sin lag del cuádriceps",
        "Herida completamente cicatrizada",
        "Radiografías a las 6 semanas con consolidación progresiva y reducción articular mantenida",
        "Dolor EVA <4/10 durante ejercicios",
        "Autorización del cirujano para iniciar carga parcial",
      ],
    },
    // =====================================================================
    // FASE 3: CARGA PARCIAL Y FORTALECIMIENTO (Semanas 6-12)
    // =====================================================================
    {
      id: "meseta-tibial-fase-3",
      numero: 3,
      nombre: "Carga parcial progresiva y fortalecimiento",
      duracion: "Semanas 6-12",
      semanaInicio: 6,
      semanaFin: 12,
      objetivos: [
        "Iniciar carga parcial progresiva (25% → 75% del peso corporal)",
        "Recuperar rango de movimiento completo de rodilla",
        "Fortalecer cuádriceps, isquiotibiales y musculatura de cadera",
        "Mejorar patrón de marcha con auxiliares de marcha",
        "Restaurar propiocepción y equilibrio",
        "Preparar para carga completa",
      ],
      estadoCarga: "carga-parcial",
      cargaPorcentaje: 50,
      cargaDetalle:
        "Carga parcial progresiva: semana 6-8 al 25%, semana 8-10 al 50%, semana 10-12 al 75% del peso corporal. Deambulación con muletas axilares o canadienses. Uso de báscula para entrenamiento de carga.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-125 grados",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0 grados (extensión completa)",
        },
      ],
      ejercicios: [
        {
          id: "mt-f3-e1",
          nombre: "Entrenamiento de marcha con carga parcial progresiva",
          descripcion:
            "Deambulación con muletas con carga parcial progresiva. Utilizar báscula para calibrar el porcentaje de carga. Iniciar con 25% e incrementar 25% cada 2 semanas según consolidación radiográfica. Enfocarse en patrón de marcha adecuado: longitud de paso simétrica, cadencia normal, fase de apoyo progresiva.",
          repeticiones: "Sesiones de 15-20 minutos",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "No exceder el porcentaje de carga autorizado",
            "Progresión de carga depende de la consolidación radiográfica",
          ],
          progresion:
            "Aumentar porcentaje de carga cada 2 semanas. Aumentar distancia y velocidad.",
        },
        {
          id: "mt-f3-e2",
          nombre: "Sentadillas parciales y mini-lunges",
          descripcion:
            "Realizar sentadillas parciales (30-60°) con apoyo de manos en una superficie estable. La carga a través de la rodilla debe ser progresiva y tolerada. Progresar a mini-lunges (zancadas cortas) con apoyo. Estos ejercicios fortalecen cuádriceps y glúteos en patrones funcionales de cadena cerrada.",
          repeticiones: "10-12 repeticiones x 3 series",
          frecuencia: "1 vez al día",
          precauciones: [
            "No sentadillas profundas (>90°) hasta consolidación confirmada",
            "Mantener apoyo de manos",
            "No permitir valgo de rodilla durante el ejercicio",
          ],
          progresion:
            "Aumentar profundidad y reducir apoyo de manos progresivamente.",
        },
        {
          id: "mt-f3-e3",
          nombre: "Fortalecimiento excéntrico de cuádriceps",
          descripcion:
            "Sentado en silla con peso en tobillera (1-3 kg), realizar extensión de rodilla y descenso lento (excéntrico en 5 segundos). El fortalecimiento excéntrico es más efectivo que el concéntrico para la hipertrofia y recuperación funcional del cuádriceps. También realizar leg press en máquina con carga ligera si está disponible.",
          repeticiones: "10-12 repeticiones x 3 series",
          frecuencia: "1 vez al día, 5 días por semana",
          progresion:
            "Aumentar peso cada 1-2 semanas. Progresar a leg press y sentadilla con mayor profundidad.",
        },
        {
          id: "mt-f3-e4",
          nombre: "Bicicleta estacionaria con resistencia progresiva",
          descripcion:
            "Pedaleo en bicicleta estacionaria con resistencia ligera a moderada durante 15-20 minutos. Ajustar la altura del asiento para trabajar en el rango de flexión completo disponible. La bicicleta proporciona fortalecimiento de bajo impacto, mejora el ROM y la resistencia cardiovascular.",
          repeticiones: "15-20 minutos por sesión",
          frecuencia: "1 vez al día",
          progresion:
            "Aumentar resistencia y duración progresivamente (hasta 30 minutos).",
        },
        {
          id: "mt-f3-e5",
          nombre: "Entrenamiento de equilibrio y propiocepción",
          descripcion:
            "Transferencias de peso en bipedestación. Progresar a apoyo unipodal sobre la pierna operada con apoyo de manos. Agregar superficie inestable (foam) y perturbaciones. Estos ejercicios restauran la propiocepción articular y reducen el riesgo de inestabilidad funcional y caídas.",
          repeticiones: "5-10 repeticiones x 3 series; apoyo unipodal 15-30 segundos",
          frecuencia: "2 veces al día",
          precauciones: [
            "Siempre con superficie de apoyo al alcance",
            "Respetar la carga parcial permitida",
          ],
          progresion:
            "Progresar duración de apoyo unipodal. Agregar perturbaciones y doble tarea.",
        },
      ],
      precauciones: [
        "La progresión de carga depende de la consolidación radiográfica (control cada 4 semanas)",
        "No actividades de impacto (correr, saltar)",
        "Evitar posiciones de valgo forzado de la rodilla",
        "No sentadillas profundas ni actividades de carga máxima",
        "Vigilar signos de sobrecarga articular: derrame, dolor creciente, bloqueo",
      ],
      banderasRojas: [
        "Dolor articular creciente con la progresión de carga (posible pérdida de reducción)",
        "Derrame articular recurrente tras inicio de carga",
        "Inestabilidad articular que no mejora (posible lesión ligamentaria no diagnosticada)",
        "Pérdida de reducción articular en radiografías de control",
        "Bloqueo mecánico articular",
        "Colapso del platillo tibial (hundimiento secundario)",
      ],
      criteriosAvance: [
        "Deambulación con carga parcial al 75% por >100 metros",
        "Flexión de rodilla >120 grados",
        "Extensión completa activa sin lag",
        "Fuerza de cuádriceps >60% del lado contralateral",
        "Consolidación radiográfica adecuada con reducción articular mantenida",
        "Dolor EVA <3/10 durante la deambulación con carga parcial",
      ],
    },
    // =====================================================================
    // FASE 4: CARGA COMPLETA PROGRESIVA (Semanas 12-14)
    // =====================================================================
    {
      id: "meseta-tibial-fase-4",
      numero: 4,
      nombre: "Carga completa progresiva",
      duracion: "Semanas 12-14",
      semanaInicio: 12,
      semanaFin: 14,
      objetivos: [
        "Progresar a carga completa (100% del peso corporal)",
        "Transicionar de muletas a bastón y luego a marcha independiente",
        "Maximizar fuerza muscular del miembro inferior",
        "Normalizar patrón de marcha",
        "Mejorar resistencia cardiovascular y funcional",
      ],
      estadoCarga: "carga-progresiva",
      cargaPorcentaje: 100,
      cargaDetalle:
        "Carga progresiva a completa: 75-100% del peso corporal. Transición de muletas a bastón contralateral y luego a marcha independiente según tolerancia y consolidación.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-130 grados",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0 grados",
        },
      ],
      ejercicios: [
        {
          id: "mt-f4-e1",
          nombre: "Entrenamiento de marcha independiente",
          descripcion:
            "Deambulación con carga completa, primero con bastón contralateral y luego sin auxiliares. Trabajar cadencia, longitud de paso, fase de apoyo completa. Entrenar subir y bajar escaleras alternando pies. Practicar marcha en superficies irregulares y exteriores.",
          repeticiones: "Sesiones de 20-30 minutos",
          frecuencia: "2-3 veces al día",
          progresion:
            "Retirar bastón progresivamente. Aumentar distancia y velocidad de marcha.",
        },
        {
          id: "mt-f4-e2",
          nombre: "Fortalecimiento avanzado en cadena cerrada",
          descripcion:
            "Sentadillas progresivas (hasta 90°), step-ups en escalón de 15-20 cm, lunges (zancadas) con control. Leg press en máquina con carga progresiva. Peso muerto rumano con mancuernas para fortalecimiento de isquiotibiales y glúteos. Trabajar al 60-80% de la capacidad estimada.",
          repeticiones: "10-12 repeticiones x 3 series",
          frecuencia: "3-4 veces por semana",
          precauciones: [
            "Mantener alineación adecuada (evitar valgo de rodilla)",
            "No cargas máximas hasta consolidación completa",
          ],
          progresion:
            "Aumentar carga 5-10% cada semana según tolerancia.",
        },
        {
          id: "mt-f4-e3",
          nombre: "Entrenamiento de equilibrio avanzado",
          descripcion:
            "Apoyo unipodal progresivo: superficie firme → foam → bosu. Agregar perturbaciones, movimientos de brazos, ojos cerrados. Entrenamiento de reacciones posturales rápidas. Marcha en tándem. Estos ejercicios previenen caídas y restauran la confianza en la extremidad operada.",
          repeticiones: "30-60 segundos x 3 series por superficie",
          frecuencia: "Diario",
          progresion:
            "Progresar superficie, agregar doble tarea y perturbaciones.",
        },
      ],
      precauciones: [
        "Vigilar aparición de derrame articular con el aumento de carga",
        "No actividades de alto impacto (correr, saltar) hasta consolidación completa",
        "Monitorear alineación articular en radiografías de control",
        "Usar rodillera funcional si hay inestabilidad residual",
      ],
      banderasRojas: [
        "Dolor articular significativo con la carga completa",
        "Derrame articular recurrente",
        "Inestabilidad articular funcional",
        "Crepitación significativa femorotibial (artrosis temprana)",
        "Pérdida de reducción tardía en radiografías",
      ],
      criteriosAvance: [
        "Deambulación independiente sin auxiliares de marcha",
        "Capacidad de subir y bajar escaleras alternando pies",
        "Fuerza de cuádriceps >70% del lado contralateral",
        "Sin derrame articular con la actividad",
        "Dolor EVA <2/10 durante la deambulación",
      ],
    },
    // =====================================================================
    // FASE 5: RETORNO FUNCIONAL Y DEPORTIVO (Semanas 14-16)
    // =====================================================================
    {
      id: "meseta-tibial-fase-5",
      numero: 5,
      nombre: "Retorno funcional y alta",
      duracion: "Semanas 14-16",
      semanaInicio: 14,
      semanaFin: 16,
      objetivos: [
        "Alcanzar máxima recuperación funcional",
        "Fuerza >80% del lado contralateral",
        "Retorno a actividades laborales y recreativas",
        "Establecer programa de mantenimiento a largo plazo",
        "Educación sobre protección articular y prevención de artrosis",
      ],
      estadoCarga: "carga-completa",
      cargaPorcentaje: 100,
      cargaDetalle:
        "Carga completa sin restricciones. Actividad funcional según tolerancia.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-135 grados (o >90% del lado contralateral)",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0 grados (extensión completa simétrica)",
        },
      ],
      ejercicios: [
        {
          id: "mt-f5-e1",
          nombre: "Programa de fortalecimiento funcional avanzado",
          descripcion:
            "Entrenamiento de fuerza con enfoque en cadena cinética completa: sentadillas con peso, prensa de piernas, lunges con mancuernas, peso muerto, curl de isquiotibiales. Entrenar al 70-85% del 1RM. Incluir ejercicios unilaterales para corregir asimetrías de fuerza entre las extremidades.",
          repeticiones: "8-12 repeticiones x 3-4 series",
          frecuencia: "3-4 veces por semana",
          progresion:
            "Aumentar carga hasta alcanzar simetría de fuerza con el lado contralateral.",
        },
        {
          id: "mt-f5-e2",
          nombre: "Entrenamiento cardiovascular progresivo",
          descripcion:
            "Bicicleta estacionaria con resistencia moderada a alta (20-30 minutos), natación, elíptica. Progresar a caminata rápida en exteriores. No se recomienda trote/carrera hasta los 4-6 meses post-cirugía y consolidación completa confirmada. El ejercicio aeróbico mejora la resistencia, el metabolismo óseo y la salud articular.",
          repeticiones: "20-30 minutos por sesión",
          frecuencia: "4-5 veces por semana",
          precauciones: [
            "No correr hasta los 4-6 meses y con aprobación del cirujano",
            "Actividades de bajo impacto preferidas para protección articular",
          ],
        },
        {
          id: "mt-f5-e3",
          nombre: "Reintegración funcional específica",
          descripcion:
            "Entrenamiento específico según demandas del paciente: actividades laborales (agacharse, cargar, caminar largas distancias), recreativas (senderismo, ciclismo, natación), o deportivas de bajo impacto. Evaluar necesidad de rodillera funcional para actividades deportivas. Educar sobre actividades de alto impacto que podrían acelerar la artrosis postraumática.",
          repeticiones: "30-45 minutos por sesión",
          frecuencia: "3-5 veces por semana",
          progresion:
            "Progresar intensidad hasta alcanzar las demandas funcionales del paciente.",
        },
      ],
      precauciones: [
        "Las fracturas de meseta tibial tienen alto riesgo de artrosis postraumática a largo plazo (30-50%)",
        "Se recomienda evitar deportes de alto impacto (correr, fútbol, básquetbol) de forma permanente",
        "Preferir actividades de bajo impacto: natación, bicicleta, elíptica, caminata",
        "Control radiográfico anual para monitorear signos de artrosis",
        "Mantener peso corporal saludable para reducir la carga articular",
      ],
      banderasRojas: [
        "Dolor articular persistente con la actividad (artrosis postraumática temprana)",
        "Derrame articular recurrente que no cede",
        "Inestabilidad articular funcional que requiere rodillera permanente",
        "Deformidad angular progresiva (valgo o varo)",
        "Bloqueo articular mecánico (menisco o cuerpo libre)",
      ],
      criteriosAvance: [
        "Deambulación independiente sin dolor",
        "Flexión de rodilla >125 grados",
        "Extensión completa simétrica",
        "Fuerza de cuádriceps >80% del lado contralateral",
        "KOOS o Lysholm score satisfactorio",
        "Retorno exitoso a actividades funcionales deseadas",
        "Paciente independiente en programa de mantenimiento",
      ],
    },
  ],
  criteriosRetornoActividad: [
    "Consolidación radiográfica completa confirmada con reducción articular mantenida",
    "Deambulación independiente sin auxiliares de marcha ni claudicación",
    "Rango de movimiento funcional de rodilla (0-125° mínimo)",
    "Fuerza de cuádriceps >80% del lado contralateral",
    "Sin derrame articular con la actividad",
    "Prueba de hop test >85% del lado contralateral (si aplica)",
    "KOOS o Lysholm score satisfactorio",
    "Sin dolor durante actividades funcionales (EVA <2/10)",
    "Aprobación del cirujano para retorno a actividad específica",
    "Educación sobre protección articular a largo plazo completada",
  ],
  complicacionesPotenciales: [
    "Artrosis postraumática de rodilla (30-50% a largo plazo)",
    "Rigidez articular (pérdida de flexión o extensión)",
    "Inestabilidad ligamentaria residual (especialmente LCM, LCA)",
    "Lesión meniscal concomitante no diagnosticada",
    "Pérdida de reducción articular (hundimiento secundario)",
    "Consolidación viciosa con deformidad angular (valgo/varo)",
    "Pseudoartrosis (rara con fijación adecuada)",
    "Infección profunda del sitio quirúrgico",
    "Complicaciones de la herida (dehiscencia, necrosis cutánea - 5-10%)",
    "Síndrome compartimental (fracturas de alta energía)",
    "Lesión de la arteria poplítea (fracturas posteriores o de alta energía)",
    "Lesión del nervio peroneo (pie caído)",
    "Trombosis venosa profunda",
    "Prominencia o irritación del material de osteosíntesis",
  ],
  referencias: [
    "ref-prat-2009",
    "ref-thewlis-2015",
    "ref-valdes-2014",
    "ref-koval-1998",
    "ref-handoll-2015-dr",
  ],
  fechaActualizacion: "2025-06-01",
  nivelEvidencia: "Moderado (revisiones sistemáticas y series de casos grandes)",
};
