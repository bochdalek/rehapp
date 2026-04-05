import type { Protocol } from "@/types/protocol";

export const acetabuloRAFI: Protocol = {
  id: "acetabulo-rafi",
  nombre:
    "Protocolo de Rehabilitación Post-RAFI de Fractura de Acetábulo",
  nombreCorto: "RAFI Acetábulo",
  descripcion:
    "Protocolo de rehabilitación basado en evidencia para el manejo postquirúrgico de fracturas de acetábulo tratadas mediante reducción abierta y fijación interna (RAFI) con placas y tornillos. Clasificación según Judet-Letournel. El protocolo contempla un periodo prolongado sin carga (6-8 semanas), precauciones de cadera según abordaje posterior (restricciones de flexión, aducción y rotación interna), recuperación de arcos de movimiento de cadera y retorno funcional en 16 semanas. Se enfatiza la protección de la superficie articular acetabular y la prevención de artrosis postraumática.",
  region: "pelvis",
  localizacion: "acetabulo",
  abordajeQuirurgico: ["RAFI", "placa", "tornillos"],
  clasificaciones: [
    "Judet-Letournel - Patrones elementales:",
    "  Pared posterior (tipo más frecuente, ~25%)",
    "  Columna posterior",
    "  Pared anterior",
    "  Columna anterior",
    "  Fractura transversa",
    "Judet-Letournel - Patrones asociados:",
    "  Columna posterior + pared posterior",
    "  Transversa + pared posterior",
    "  Fractura en T",
    "  Columna anterior + hemitransversa posterior",
    "  Ambas columnas (doble columna)",
  ],
  indicacionesQuirurgicas: [
    "Desplazamiento articular >2 mm (incongruencia articular)",
    "Inestabilidad de cadera (subluxación o luxación asociada)",
    "Fractura de pared posterior con >40% de superficie articular comprometida",
    "Fragmento intraarticular libre (cuerpo libre)",
    "Fractura de ambas columnas desplazada",
    "Lesión de nervio ciático asociada con fragmento compresivo",
    "Fractura-luxación posterior de cadera que requiere fijación",
  ],
  duracionTotal: "16 semanas",
  semanasTotal: 16,
  fases: [
    // =====================================================================
    // FASE 1: PROTECCIÓN POSTQUIRÚRGICA (Semanas 0-4)
    // =====================================================================
    {
      id: "acetabulo-rafi-fase-1",
      numero: 1,
      nombre: "Protección postquirúrgica y precauciones de cadera",
      duracion: "Semanas 0-4",
      semanaInicio: 0,
      semanaFin: 4,
      objetivos: [
        "Protección del material de osteosíntesis y la superficie articular acetabular",
        "Cumplimiento estricto de precauciones de cadera (abordaje posterior)",
        "Control del dolor y edema postquirúrgico",
        "Prevención de luxación protésica/articular",
        "Movilización temprana con restricciones específicas",
        "Prevención de TVP y complicaciones tromboembólicas",
        "Evaluación y monitorización de función del nervio ciático",
      ],
      estadoCarga: "sin-carga",
      cargaPorcentaje: 0,
      cargaDetalle:
        "Sin carga absoluta del lado operado. Deambulación con muletas o andadera sin apoyo. Uso de cojín abductor entre las piernas al dormir. Sin carga por 6-8 semanas (varía según fractura y calidad de fijación).",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-70 grados",
          restriccion:
            "PRECAUCIÓN DE ABORDAJE POSTERIOR: No sobrepasar 70-90 grados de flexión de cadera. Riesgo de luxación posterior si se combina flexión + aducción + rotación interna.",
        },
        {
          movimiento: "Extensión de cadera",
          rangoObjetivo: "0 grados (posición neutra)",
        },
        {
          movimiento: "Abducción de cadera",
          rangoObjetivo: "0-30 grados",
          restriccion:
            "La abducción es segura y recomendada. Usar cojín abductor al dormir.",
        },
        {
          movimiento: "Aducción de cadera",
          rangoObjetivo: "No cruzar línea media",
          restriccion:
            "PRECAUCIÓN: No aducir más allá de la línea media. Riesgo de luxación posterior.",
        },
        {
          movimiento: "Rotación interna de cadera",
          rangoObjetivo: "0 grados (evitar)",
          restriccion:
            "PRECAUCIÓN: No realizar rotación interna de cadera. Riesgo de luxación posterior.",
        },
        {
          movimiento: "Rotación externa de cadera",
          rangoObjetivo: "0-20 grados (suave)",
        },
      ],
      ejercicios: [
        {
          id: "acet-f1-e1",
          nombre: "Contracciones isométricas de glúteos y cuádriceps",
          descripcion:
            "En decúbito supino con la cadera en posición neutra, contraer glúteos (apretar nalgas) manteniendo 6 segundos, luego relajar. Alternar con contracciones isométricas de cuádriceps. Estos ejercicios son seguros porque no generan movimiento de la articulación de cadera y previenen la atrofia muscular severa que ocurre tras fracturas de acetábulo.",
          repeticiones: "15 repeticiones x 3 series de cada grupo",
          frecuencia: "4-5 veces al día",
          precauciones: [
            "Mantener cadera en posición neutra durante las contracciones",
            "No generar dolor en la región inguinal o glútea",
          ],
          progresion:
            "Incrementar intensidad de contracción progresivamente hasta contracción máxima.",
        },
        {
          id: "acet-f1-e2",
          nombre: "Abducción de cadera asistida en decúbito supino",
          descripcion:
            "En decúbito supino, deslizar la pierna operada hacia el lateral (abducción) sobre una superficie lisa. La abducción es un movimiento seguro en abordaje posterior y ayuda a fortalecer el glúteo medio. No cruzar la línea media al regresar (evitar aducción pasiva de línea media).",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "No cruzar la línea media al regresar la pierna",
            "Mantener la rodilla extendida o ligeramente flexionada",
            "Usar superficie lisa para facilitar el deslizamiento",
          ],
          progresion:
            "Progresar a abducción activa contra gravedad en decúbito lateral a partir de la semana 3.",
        },
        {
          id: "acet-f1-e3",
          nombre: "Flexión asistida de cadera en decúbito supino (con límite)",
          descripcion:
            "En decúbito supino, flexionar la cadera operada deslizando el talón hacia los glúteos. Limitar la flexión a 70 grados máximo (usar tope o guía). Asistir con las manos si es necesario. Regresar lentamente a extensión. Este movimiento debe realizarse SIN aducción ni rotación interna simultánea.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "NUNCA combinar flexión + aducción + rotación interna",
            "No sobrepasar 70 grados de flexión",
            "Mantener la pierna en abducción ligera durante la flexión",
          ],
          progresion:
            "Incrementar el rango a 90 grados a partir de la semana 4-6 según indicación del cirujano.",
        },
        {
          id: "acet-f1-e4",
          nombre: "Bombeos de tobillo y movilización de rodilla",
          descripcion:
            "Realizar flexión dorsal y plantar rítmica del tobillo bilateral cada hora. Complementar con flexoextensión activa de rodilla. Estos ejercicios son fundamentales para la prevención de TVP, cuyo riesgo es muy elevado en fracturas de acetábulo (especialmente con luxación posterior asociada).",
          repeticiones: "20 repeticiones cada hora",
          frecuencia: "Cada hora durante vigilia",
        },
        {
          id: "acet-f1-e5",
          nombre: "Transferencias con precauciones de cadera",
          descripcion:
            "Practicar transferencias de cama a silla y viceversa respetando las precauciones de cadera posterior: no flexionar >70 grados, no cruzar las piernas, no rotar internamente. Usar silla alta con brazos. Sentarse con la pierna operada extendida hacia adelante. Usar cojín elevador en el inodoro.",
          repeticiones: "Según necesidad funcional",
          frecuencia: "Diario",
          precauciones: [
            "Usar asiento elevado (silla alta, elevador de inodoro)",
            "No sentarse en superficies bajas (sofá, silla baja)",
            "No cruzar las piernas en ningún momento",
            "Pivotar sobre la pierna sana durante las transferencias",
          ],
          progresion:
            "Incrementar independencia en transferencias conforme mejore la fuerza y confianza.",
        },
      ],
      precauciones: [
        "PRECAUCIONES DE ABORDAJE POSTERIOR (estrictas hasta semana 6-8):",
        "  - No flexionar cadera más de 70-90 grados",
        "  - No aducir más allá de la línea media",
        "  - No realizar rotación interna de cadera",
        "  - No combinar flexión + aducción + rotación interna (posición de luxación)",
        "  - Dormir con cojín abductor entre las piernas",
        "  - Usar asiento elevado para todas las actividades de sedestación",
        "Profilaxis antitrombótica estricta (riesgo muy elevado de TVP/TEP)",
        "Monitorizar función del nervio ciático: dorsiflexión de tobillo, sensibilidad de pie",
        "Crioterapia 15-20 minutos después de ejercicios",
      ],
      banderasRojas: [
        "Luxación de cadera: dolor agudo intenso, acortamiento del miembro, rotación interna fija",
        "Déficit neurológico nuevo del nervio ciático (pie caído, parestesias de pie)",
        "Signos de TEP: disnea súbita, dolor torácico, taquicardia",
        "Signos de TVP: edema unilateral de pantorrilla",
        "Infección profunda: fiebre persistente, dolor creciente, secreción",
        "Osificación heterotópica sintomática (pérdida progresiva de movilidad)",
        "Necrosis avascular de cabeza femoral (dolor inguinal progresivo)",
      ],
      criteriosAvance: [
        "Flexión de cadera ≥70 grados sin dolor",
        "Contracción isométrica de glúteos adecuada",
        "Control del dolor (EVA ≤4)",
        "Sin signos de complicaciones (luxación, lesión nerviosa, TVP)",
        "Independencia en transferencias con precauciones",
        "Heridas quirúrgicas en adecuada cicatrización",
      ],
      notas: "Nota clínica: Braun et al. (2022) demostraron que solo 1/10 pacientes cumplió las restricciones de carga post-RAFI de acetábulo, sin pérdida de reducción radiográfica. Sin embargo, la muestra es pequeña y no permite generalizar. Se recomienda mantener las restricciones pero ser consciente de la baja compliance real.",
    },
    // =====================================================================
    // FASE 2: MOVILIDAD PROGRESIVA SIN CARGA (Semanas 4-8)
    // =====================================================================
    {
      id: "acetabulo-rafi-fase-2",
      numero: 2,
      nombre: "Movilidad progresiva y fortalecimiento sin carga",
      duracion: "Semanas 4-8",
      semanaInicio: 4,
      semanaFin: 8,
      objetivos: [
        "Incrementar rango de movimiento de cadera (relajar precauciones gradualmente)",
        "Fortalecer musculatura periarticular de cadera",
        "Preparación para inicio de carga parcial",
        "Mejorar control neuromuscular y propiocepción",
        "Mantener condición cardiovascular con ejercicio de bajo impacto",
      ],
      estadoCarga: "sin-carga",
      cargaPorcentaje: 0,
      cargaDetalle:
        "Sin carga hasta la semana 6-8 según indicación del cirujano y consolidación radiográfica. Continuar con muletas sin apoyo. A partir de la semana 6-8, iniciar carga por contacto (toe-touch) según tolerancia y evolución radiográfica.",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-90 grados",
          restriccion:
            "Relajar restricción de flexión gradualmente. Consultar con cirujano antes de permitir >90 grados.",
        },
        {
          movimiento: "Abducción de cadera",
          rangoObjetivo: "0-35 grados",
        },
        {
          movimiento: "Extensión de cadera",
          rangoObjetivo: "0-10 grados",
        },
        {
          movimiento: "Rotación externa de cadera",
          rangoObjetivo: "0-25 grados",
        },
        {
          movimiento: "Rotación interna de cadera",
          rangoObjetivo: "0-10 grados (iniciar gradualmente)",
          restriccion:
            "Iniciar rotación interna suave a partir de la semana 6 con autorización del cirujano.",
        },
      ],
      ejercicios: [
        {
          id: "acet-f2-e1",
          nombre: "Flexión activa de cadera en decúbito supino progresiva",
          descripcion:
            "En decúbito supino, flexionar la cadera del lado operado llevando la rodilla hacia el pecho. Progresar gradualmente de 70 a 90 grados según autorización del cirujano (generalmente semana 6). Mantener ligera abducción durante la flexión para evitar la posición de luxación.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "3 veces al día",
          precauciones: [
            "Mantener ligera abducción durante la flexión",
            "No combinar flexión con aducción y rotación interna",
            "Progresar rango solo con autorización del cirujano",
          ],
          progresion:
            "Progresar a flexión >90 grados a partir de la semana 6-8.",
        },
        {
          id: "acet-f2-e2",
          nombre: "Abducción activa en decúbito lateral",
          descripcion:
            "En decúbito lateral sobre el lado sano, realizar abducción activa de la cadera operada. Elevar la pierna hasta 30-35 grados, mantener 5 segundos y descender controladamente. Mantener pelvis estable sin rotación. La abducción activa fortalece el glúteo medio, crucial para la estabilidad de la marcha.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "2 veces al día",
          precauciones: [
            "No compensar con rotación de pelvis",
            "Mantener rodilla extendida durante el ejercicio",
          ],
          progresion:
            "Agregar tobillera con peso (0.5-1 kg) a partir de la semana 6.",
        },
        {
          id: "acet-f2-e3",
          nombre: "Puente de glúteos bilateral",
          descripcion:
            "En decúbito supino con rodillas flexionadas a 45 grados y pies apoyados, elevar la pelvis contrayendo glúteos. Mantener 5-8 segundos y descender controladamente. Mantener cojín abductor entre las rodillas durante el ejercicio para evitar aducción. Este ejercicio es seguro y efectivo para fortalecer los extensores de cadera.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "Diario",
          precauciones: [
            "Usar cojín abductor entre rodillas",
            "No generar dolor inguinal durante el ejercicio",
          ],
          progresion:
            "Progresar a puente unipodal a partir de la semana 7-8.",
        },
        {
          id: "acet-f2-e4",
          nombre: "Bicicleta estática con asiento alto (sin resistencia)",
          descripcion:
            "Usar bicicleta estática con asiento en posición alta para limitar la flexión de cadera a <90 grados. Pedalear sin resistencia durante 10-15 minutos. Este ejercicio mantiene la condición cardiovascular, mejora la movilidad de cadera de forma cíclica y es seguro si se respeta el límite de flexión.",
          repeticiones: "10-15 minutos",
          frecuencia: "1-2 veces al día",
          precauciones: [
            "Asiento alto para limitar flexión de cadera",
            "Sin resistencia en esta fase",
            "Suspender si genera dolor inguinal",
          ],
          progresion:
            "Bajar asiento gradualmente y agregar resistencia mínima a partir de la semana 7.",
        },
        {
          id: "acet-f2-e5",
          nombre: "Ejercicios de rotación externa suave en sedestación",
          descripcion:
            "Sentado en silla alta con los pies apoyados, realizar rotación externa suave de la cadera operada deslizando el pie hacia adentro (rotación externa del fémur). La rotación externa es segura en abordaje posterior. Mantener 5 segundos y regresar.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "2 veces al día",
          precauciones: [
            "No realizar rotación interna hasta autorización",
            "Movimiento suave y controlado",
          ],
          progresion:
            "Iniciar rotación interna suave a partir de la semana 6-8 con autorización.",
        },
      ],
      precauciones: [
        "Mantener precauciones de abordaje posterior hasta la semana 6-8 (o según indicación del cirujano)",
        "No iniciar carga hasta confirmación radiográfica de consolidación",
        "Vigilar signos de osificación heterotópica: pérdida progresiva de rango de movimiento",
        "Monitorizar función del nervio ciático en cada sesión",
        "Continuar con asiento elevado y cojín abductor para dormir",
      ],
      banderasRojas: [
        "Pérdida progresiva de rango de movimiento (posible osificación heterotópica)",
        "Dolor inguinal creciente con la movilización (posible necrosis avascular)",
        "Luxación tardía de cadera",
        "Empeoramiento de función del nervio ciático",
        "Signos de infección profunda",
      ],
      criteriosAvance: [
        "Flexión de cadera ≥90 grados",
        "Abducción activa de cadera contra gravedad",
        "Puente de glúteos bilateral sin dolor",
        "Pedaleo completo en bicicleta estática",
        "Sin signos de complicaciones",
        "Consolidación radiográfica progresiva",
      ],
    },
    // =====================================================================
    // FASE 3: CARGA PROGRESIVA Y FORTALECIMIENTO (Semanas 8-12)
    // =====================================================================
    {
      id: "acetabulo-rafi-fase-3",
      numero: 3,
      nombre: "Carga progresiva y fortalecimiento avanzado",
      duracion: "Semanas 8-12",
      semanaInicio: 8,
      semanaFin: 12,
      objetivos: [
        "Inicio y progresión de carga (parcial a completa)",
        "Relajación completa de precauciones de cadera",
        "Fortalecimiento avanzado de musculatura de cadera",
        "Restaurar patrón de marcha normalizado",
        "Mejorar equilibrio y propiocepción",
        "Entrenamiento funcional para actividades cotidianas",
      ],
      estadoCarga: "carga-progresiva",
      cargaPorcentaje: 50,
      cargaDetalle:
        "Carga progresiva del 25-75%. Iniciar con carga parcial al 25% y progresar según tolerancia y consolidación. Transición de muletas a bastón. Meta: carga al 75-100% al final de la fase. Las precauciones de abordaje posterior pueden relajarse según indicación del cirujano.",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-110 grados",
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
          movimiento: "Rotación interna de cadera",
          rangoObjetivo: "0-20 grados",
        },
        {
          movimiento: "Rotación externa de cadera",
          rangoObjetivo: "0-30 grados",
        },
      ],
      ejercicios: [
        {
          id: "acet-f3-e1",
          nombre: "Entrenamiento de marcha con carga progresiva",
          descripcion:
            "Practicar marcha con muletas con carga parcial progresiva. Iniciar al 25% e incrementar 10-15% semanal. Enfatizar apoyo de talón, fase de despegue y longitud de paso simétrica. Usar báscula para verificar carga. Progresar de muletas a bastón cuando tolere >50% del peso corporal.",
          repeticiones: "15-20 minutos por sesión",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "Progresión según consolidación radiográfica",
            "Vigilar Trendelenburg (debilidad de abductores)",
            "No forzar velocidad de marcha",
          ],
          progresion:
            "Incrementar distancia, velocidad y carga semanalmente.",
        },
        {
          id: "acet-f3-e2",
          nombre: "Sentadillas bilaterales progresivas",
          descripcion:
            "De pie con apoyo bilateral, realizar sentadillas hasta 60-70 grados de flexión. Mantener pelvis nivelada y peso distribuido equitativamente. Enfatizar activación de glúteos en la fase concéntrica. Con las precauciones relajadas, ya se permite mayor rango de flexión de cadera.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "3 veces por semana",
          precauciones: [
            "Mantener alineación pélvica simétrica",
            "No generar dolor inguinal",
          ],
          progresion:
            "Incrementar profundidad y agregar peso externo.",
        },
        {
          id: "acet-f3-e3",
          nombre: "Step-ups frontales y laterales",
          descripcion:
            "Subir un escalón de 10-15 cm liderando con la pierna operada al ascender. Controlar el descenso con la pierna operada (fase excéntrica). Realizar en dirección frontal y lateral. Enfatizar control de pelvis (evitar Trendelenburg dinámico).",
          repeticiones: "10 repeticiones x 3 series por dirección",
          frecuencia: "Diario",
          precauciones: [
            "Iniciar con escalón bajo (10 cm)",
            "Vigilar Trendelenburg dinámico",
            "Tener apoyo disponible",
          ],
          progresion:
            "Incrementar altura del escalón y agregar peso externo.",
        },
        {
          id: "acet-f3-e4",
          nombre: "Abducción de cadera con banda elástica",
          descripcion:
            "De pie con banda elástica alrededor de los tobillos, realizar abducción de cadera contra resistencia. Mantener pelvis estable y tronco erguido. Complementar con pasos laterales (lateral walks) con banda. Ejercicio clave para fortalecer glúteo medio y eliminar marcha de Trendelenburg.",
          repeticiones: "12 repeticiones x 3 series por lado",
          frecuencia: "Diario",
          precauciones: [
            "Iniciar con resistencia ligera",
            "No compensar con inclinación lateral del tronco",
          ],
          progresion:
            "Incrementar resistencia de la banda progresivamente.",
        },
        {
          id: "acet-f3-e5",
          nombre: "Equilibrio unipodal y propiocepción",
          descripcion:
            "De pie sobre la pierna operada, mantener equilibrio durante 20-30 segundos. Iniciar con apoyo cercano disponible. Progresar a ojos cerrados y superficie inestable. La propiocepción articular del acetábulo se ve afectada por la fractura y requiere reentrenamiento específico.",
          repeticiones: "5 repeticiones de 30 segundos x 3 series",
          frecuencia: "Diario",
          precauciones: [
            "Tener punto de apoyo cercano",
            "No realizar unipodal hasta tolerar carga >75%",
          ],
          progresion:
            "Progresar a superficie inestable y perturbaciones externas.",
        },
      ],
      precauciones: [
        "Confirmar relajación de precauciones de cadera con el cirujano",
        "Vigilar signos de necrosis avascular de cabeza femoral (incidencia 5-15%)",
        "Monitorizar dolor inguinal persistente (posible artrosis precoz)",
        "La osificación heterotópica puede limitar el rango de movimiento de forma permanente",
        "Continuar vigilancia de función del nervio ciático",
      ],
      banderasRojas: [
        "Dolor inguinal progresivo con la carga (posible necrosis avascular o artrosis)",
        "Pérdida de rango de movimiento previamente alcanzado (osificación heterotópica)",
        "Marcha de Trendelenburg que no mejora",
        "Aflojamiento o falla del material de osteosíntesis",
        "Dolor con chasquido (posible fragmento libre intraarticular)",
      ],
      criteriosAvance: [
        "Carga al 75% o más tolerada sin dolor",
        "Flexión de cadera ≥100 grados",
        "Sin Trendelenburg significativo",
        "Fuerza de abductores de cadera ≥4/5",
        "Marcha con bastón o independiente",
        "Consolidación radiográfica adecuada",
      ],
    },
    // =====================================================================
    // FASE 4: RETORNO FUNCIONAL (Semanas 12-16)
    // =====================================================================
    {
      id: "acetabulo-rafi-fase-4",
      numero: 4,
      nombre: "Retorno funcional y actividad plena",
      duracion: "Semanas 12-16",
      semanaInicio: 12,
      semanaFin: 16,
      objetivos: [
        "Carga completa sin restricciones",
        "Rango de movimiento funcional de cadera",
        "Fuerza muscular simétrica bilateral",
        "Retorno a actividades de la vida diaria y laborales",
        "Inicio de actividades deportivas de bajo impacto",
        "Vigilancia a largo plazo de artrosis postraumática",
      ],
      estadoCarga: "carga-completa",
      cargaPorcentaje: 100,
      cargaDetalle:
        "Carga completa sin restricciones. Marcha independiente normalizada. Actividades de bajo impacto permitidas. Sin precauciones de cadera residuales.",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-120 grados (o máximo alcanzable)",
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
          movimiento: "Rotación interna/externa de cadera",
          rangoObjetivo: "Funcional (25-35 grados cada una)",
        },
      ],
      ejercicios: [
        {
          id: "acet-f4-e1",
          nombre: "Sentadillas unipodales y lunges multidireccionales",
          descripcion:
            "Realizar sentadillas unipodales parciales sobre la pierna operada, lunges frontales, laterales y reversos. Mantener control pélvico y alineación de rodilla. Estos ejercicios evalúan y entrenan la fuerza funcional avanzada de la articulación coxofemoral.",
          repeticiones: "10 repeticiones x 3 series cada variante",
          frecuencia: "3 veces por semana",
          precauciones: [
            "No generar dolor inguinal",
            "Mantener control pélvico durante todo el movimiento",
          ],
          progresion:
            "Agregar peso externo y aumentar complejidad del movimiento.",
        },
        {
          id: "acet-f4-e2",
          nombre: "Ejercicios de agilidad y cambios de dirección",
          descripcion:
            "Realizar caminata lateral rápida, cariocas, pasos cruzados y cambios de dirección controlados. Estos ejercicios entrenan la estabilidad dinámica de la cadera y preparan al paciente para actividades funcionales avanzadas y deportivas.",
          repeticiones: "3 series de 30 segundos cada ejercicio",
          frecuencia: "3 veces por semana",
          precauciones: [
            "Solo con consolidación completa y fuerza adecuada",
            "Superficie plana y antideslizante",
          ],
          progresion:
            "Incrementar velocidad y agregar obstáculos.",
        },
        {
          id: "acet-f4-e3",
          nombre: "Caminata progresiva y trote ligero",
          descripcion:
            "Programa de caminata progresiva incrementando distancia y velocidad. Iniciar trote ligero en cinta con intervalos cortos (30 segundos de trote, 2 minutos de caminata). Solo con consolidación completa confirmada y sin dolor inguinal.",
          repeticiones: "20-30 minutos por sesión",
          frecuencia: "5 veces por semana",
          precauciones: [
            "Solo con consolidación completa",
            "Suspender si genera dolor inguinal",
            "Usar calzado con amortiguación",
          ],
          progresion:
            "Incrementar duración de intervalos de trote gradualmente.",
        },
        {
          id: "acet-f4-e4",
          nombre: "Entrenamiento funcional específico por actividad",
          descripcion:
            "Simular actividades específicas de la vida diaria y laboral: agacharse, levantarse del suelo, subir y bajar escaleras con carga, transferencias de peso, cambios de dirección. Adaptar los ejercicios a la ocupación y actividades recreativas del paciente.",
          repeticiones: "Según actividad específica",
          frecuencia: "Diario",
          precauciones: [
            "Adaptar a la demanda funcional real del paciente",
            "Deportes de contacto diferidos hasta 6 meses mínimo",
          ],
          progresion:
            "Incrementar demanda funcional según objetivos individuales.",
        },
      ],
      precauciones: [
        "Vigilar síntomas de artrosis postraumática: dolor inguinal con la actividad, rigidez matutina, crepitación",
        "La artrosis postraumática del acetábulo puede desarrollarse años después de la fractura (12-57% de los casos)",
        "Deportes de alto impacto pueden estar contraindicados a largo plazo",
        "Considerar retiro de material si genera molestias",
        "Seguimiento radiográfico a largo plazo recomendado (anual durante 5 años)",
      ],
      banderasRojas: [
        "Dolor inguinal progresivo (posible artrosis postraumática o necrosis avascular)",
        "Limitación de movilidad que empeora (osificación heterotópica tardía)",
        "Claudicación persistente de la marcha",
        "Falla del material de osteosíntesis",
        "Necesidad de artroplastia total de cadera (conversión)",
      ],
      criteriosAvance: [
        "Marcha normalizada sin claudicación ni Trendelenburg",
        "Fuerza muscular de cadera ≥85% del lado contralateral",
        "Rango de movimiento funcional de cadera (flexión ≥110 grados)",
        "Independencia completa en actividades de la vida diaria",
        "Capacidad de trote sin dolor inguinal",
        "Harris Hip Score ≥80 puntos",
      ],
    },
  ],
  criteriosRetornoActividad: [
    "Consolidación radiográfica completa de la fractura de acetábulo",
    "Marcha independiente normalizada sin claudicación ni Trendelenburg",
    "Fuerza de abductores y extensores de cadera ≥85% del contralateral",
    "Flexión de cadera ≥110 grados con rango rotacional funcional",
    "Sin dolor inguinal con actividades cotidianas",
    "Equilibrio unipodal ≥30 segundos",
    "Harris Hip Score ≥80 puntos",
    "Sin signos radiográficos de necrosis avascular o artrosis progresiva",
    "Función neurológica estable (nervio ciático)",
  ],
  complicacionesPotenciales: [
    "Artrosis postraumática de cadera (complicación más frecuente a largo plazo, 12-57%)",
    "Necrosis avascular de la cabeza femoral (5-15%)",
    "Osificación heterotópica (especialmente con abordaje posterior extendido)",
    "Lesión del nervio ciático (10-15% en fracturas de pared posterior)",
    "Luxación recurrente de cadera",
    "Infección del sitio quirúrgico (superficial o profunda)",
    "Trombosis venosa profunda y tromboembolismo pulmonar",
    "Falla del material de osteosíntesis",
    "Necesidad de conversión a artroplastia total de cadera (16.5-45% tras RAFI aislado según Ivanova et al., 2025)",
    "Dolor crónico de cadera o inguinal",
    "Debilidad persistente de abductores (marcha de Trendelenburg)",
    "Discrepancia de longitud de miembros inferiores",
  ],
  referencias: [
    "ref-letournel-1993",
    "ref-matta-1996",
    "ref-tile-2003",
    "ref-ivanova-2025",
    "ref-braun-2022",
    "ref-kubiak-2013",
    "ref-magu-2014",
    "ref-gaensslen-2009",
  ],
  fechaActualizacion: "2026-03-31",
  nivelEvidencia: "Nivel III-IV: No hay ensayos aleatorizados sobre protocolos de rehabilitación post-RAFI de acetábulo (Ivanova et al., 2025). Carga parcial 6-12 semanas recomendada por 62% de los estudios. Baja compliance documentada (Braun et al., 2022). Artrosis postraumática en 31-57% a largo plazo.",
};
