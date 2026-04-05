import type { Protocol } from "@/types/protocol";

export const caderaIntertrocantericaClavo: Protocol = {
  id: "cadera-intertrocanterica-clavo",
  nombre:
    "Protocolo de Rehabilitación Post-Osteosíntesis de Fractura Intertrocantérica con Clavo Endomedular Cefalomedular",
  nombreCorto: "Clavo Cefalomedular Intertrocantérica",
  descripcion:
    "Protocolo de rehabilitación basado en evidencia para el manejo postquirúrgico de fracturas intertrocantéricas de fémur proximal tratadas mediante clavo endomedular cefalomedular (tipo Gamma, PFNA, TFN o InterTAN). El protocolo contempla movilización temprana, progresión gradual de carga y retorno a la deambulación independiente en 16 semanas. Población frecuente: pacientes adultos mayores con comorbilidades.",
  region: "miembro-inferior",
  localizacion: "cadera",
  abordajeQuirurgico: ["clavo-endomedular"],
  clasificaciones: [
    "AO/OTA 31-A1 (pertrocantérica simple, 2 fragmentos)",
    "AO/OTA 31-A2 (pertrocantérica multifragmentaria)",
    "AO/OTA 31-A3 (intertrocantérica, trazo invertido)",
    "Boyd y Griffin tipo I-IV",
    "Evans estable vs. inestable",
  ],
  indicacionesQuirurgicas: [
    "Fractura intertrocantérica desplazada en paciente ambulatorio",
    "Fractura intertrocantérica estable o inestable con indicación quirúrgica",
    "Fractura subtrocantérica o con extensión subtrocantérica",
    "Fractura con trazo invertido (AO 31-A3)",
    "Paciente con necesidad de movilización temprana por comorbilidades",
  ],
  duracionTotal: "16 semanas",
  semanasTotal: 16,
  fases: [
    // =====================================================================
    // FASE 1: PROTECCIÓN Y MOVILIZACIÓN TEMPRANA (Semanas 0-3)
    // =====================================================================
    {
      id: "cadera-inter-fase-1",
      numero: 1,
      nombre: "Protección y movilización temprana en cama",
      duracion: "Semanas 0-3",
      semanaInicio: 0,
      semanaFin: 3,
      objetivos: [
        "Movilización temprana del paciente (sedestación y bipedestación asistida desde las primeras 24-48 horas)",
        "Control del dolor para permitir la movilización",
        "Prevención de complicaciones del decúbito (TVP, neumonía, úlceras por presión)",
        "Iniciar deambulación con carga por contacto con andadera",
        "Mantener movilidad de tobillo, rodilla y cadera en rango tolerado",
        "Educación del paciente y cuidadores sobre precauciones y programa de ejercicios",
      ],
      estadoCarga: "carga-contacto",
      cargaPorcentaje: 10,
      cargaDetalle:
        "Carga por contacto (toe-touch weight bearing): solo el peso del pie apoya en el suelo. Deambulación con andadera o marco de marcha. Máximo 10-15% del peso corporal.",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-60 grados (activa asistida)",
          restriccion: "No flexión forzada >90 grados",
        },
        {
          movimiento: "Abducción de cadera",
          rangoObjetivo: "0-20 grados",
          restriccion: "No aducción más allá de la línea media",
        },
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-90 grados",
        },
        {
          movimiento: "Flexión dorsal/plantar de tobillo",
          rangoObjetivo: "Rango completo activo",
        },
      ],
      ejercicios: [
        {
          id: "cad-int-f1-e1",
          nombre: "Bombeos de tobillo (ankle pumps) y circunducciones",
          descripcion:
            "En decúbito supino, realizar flexión dorsal y plantar activa del tobillo de forma rítmica. Agregar circunducciones en ambos sentidos. Este ejercicio es fundamental para la prevención de trombosis venosa profunda y debe iniciarse inmediatamente en el postoperatorio. Realizarlo en ambas extremidades.",
          repeticiones: "15-20 repeticiones cada hora durante vigilia",
          frecuencia: "Cada hora",
          precauciones: [
            "Realizar incluso con dolor controlado, es prioritario para prevención de TVP",
          ],
          progresion:
            "Mantener frecuencia alta durante toda la hospitalización.",
        },
        {
          id: "cad-int-f1-e2",
          nombre: "Contracciones isométricas de cuádriceps y glúteos",
          descripcion:
            "En decúbito supino, contraer el cuádriceps presionando la rodilla hacia la cama durante 5-6 segundos. Alternar con contracción de glúteos (apretar las nalgas) manteniendo 5-6 segundos. Estos ejercicios previenen la atrofia muscular temprana y mantienen la activación neuromuscular sin movimiento articular significativo.",
          repeticiones: "10 repeticiones x 3 series de cada músculo",
          frecuencia: "3-4 veces al día",
        },
        {
          id: "cad-int-f1-e3",
          nombre: "Deslizamiento de talón en cama (heel slides)",
          descripcion:
            "En decúbito supino, deslizar el talón de la pierna operada hacia los glúteos flexionando la cadera y rodilla simultáneamente. Puede asistirse con una sábana colocada bajo el pie para reducir la fricción. El rango debe ser tolerado y sin dolor agudo. Mantener la flexión final 3-5 segundos y regresar lentamente.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "3-4 veces al día",
          precauciones: [
            "No forzar flexión de cadera más allá de 60-70 grados inicialmente",
            "Puede asistirse con una sábana para reducir fricción",
          ],
          progresion:
            "Aumentar rango de flexión progresivamente hasta 90° según tolerancia.",
        },
        {
          id: "cad-int-f1-e4",
          nombre: "Sedestación al borde de la cama y bipedestación asistida",
          descripcion:
            "Con asistencia del personal de rehabilitación, pasar de decúbito supino a sedestación al borde de la cama. Mantener la posición sentada durante 5-10 minutos inicialmente. Progresar a bipedestación con apoyo de andadera. Realizar transferencias cama-silla. Este ejercicio es clave para la prevención de complicaciones del decúbito.",
          repeticiones: "2-3 veces al día",
          frecuencia: "Diario desde las primeras 24-48 horas",
          precauciones: [
            "Monitorear signos vitales durante la verticalización (hipotensión ortostática)",
            "Siempre con supervisión y asistencia",
            "Usar andadera o marco de marcha para bipedestación",
          ],
          progresion:
            "Aumentar tiempo en sedestación y bipedestación progresivamente. Iniciar marcha asistida con andadera.",
        },
        {
          id: "cad-int-f1-e5",
          nombre: "Deambulación asistida con andadera (carga por contacto)",
          descripcion:
            "Con andadera y asistencia del fisioterapeuta, iniciar marcha corta (5-10 metros) con carga por contacto del pie operado. El paciente debe apoyar solo el peso del pie en el suelo sin transferir peso corporal a la extremidad operada. Progresar distancia según tolerancia cardiovascular y al dolor.",
          repeticiones: "2-3 sesiones de 5-10 metros",
          frecuencia: "2 veces al día",
          precauciones: [
            "Respetar estrictamente la carga por contacto",
            "Supervisión continua durante la deambulación",
            "Monitorear frecuencia cardíaca y presión arterial",
          ],
          progresion:
            "Aumentar distancia de marcha progresivamente (5 m → 10 m → 20 m).",
        },
      ],
      precauciones: [
        "Tromboprofilaxis farmacológica según protocolo hospitalario (HBPM)",
        "Monitorear signos de TVP/TEP: dolor en pantorrilla, edema unilateral, disnea",
        "No cruzar las piernas ni aducir más allá de la línea media",
        "No sentarse en asientos bajos (<45 cm) ni sillas sin brazos",
        "Prevenir caídas: supervisión constante, iluminación adecuada, calzado antideslizante",
        "Valorar riesgo de delirium en pacientes adultos mayores",
      ],
      banderasRojas: [
        "Dolor de pantorrilla, edema unilateral o signo de Homans positivo (sospecha de TVP)",
        "Disnea súbita, dolor torácico o taquicardia (sospecha de TEP)",
        "Confusión aguda o delirium (frecuente en adultos mayores postoperados)",
        "Incapacidad total para la bipedestación o marcha asistida a las 48 horas",
        "Acortamiento o rotación externa excesiva de la extremidad (sospecha de pérdida de reducción)",
        "Drenaje purulento o eritema progresivo de la herida",
        "Caída del paciente con traumatismo sobre la cadera operada",
      ],
      criteriosAvance: [
        "Paciente capaz de deambular con andadera y carga por contacto >20 metros",
        "Transferencias cama-silla independientes o con mínima asistencia",
        "Dolor controlado (EVA <5/10 durante la deambulación)",
        "Sin signos de complicaciones tromboembólicas",
        "Herida quirúrgica sin signos de infección",
        "Radiografías de control con posición adecuada del implante",
      ],
    },
    // =====================================================================
    // FASE 2: CARGA PARCIAL Y FORTALECIMIENTO TEMPRANO (Semanas 3-8)
    // =====================================================================
    {
      id: "cadera-inter-fase-2",
      numero: 2,
      nombre: "Carga parcial y fortalecimiento temprano",
      duracion: "Semanas 3-8",
      semanaInicio: 3,
      semanaFin: 8,
      objetivos: [
        "Progresar a carga parcial (25-50% del peso corporal)",
        "Aumentar distancia y duración de la deambulación",
        "Mejorar rango de movimiento activo de cadera y rodilla",
        "Iniciar fortalecimiento muscular progresivo",
        "Mejorar equilibrio y control postural en bipedestación",
        "Avanzar hacia independencia en actividades de la vida diaria",
      ],
      estadoCarga: "carga-parcial",
      cargaPorcentaje: 50,
      cargaDetalle:
        "Carga parcial progresiva: 25% del peso corporal en semana 3-4, progresar a 50% en semana 5-8. Deambulación con andadera o muletas axilarles. Uso de báscula para entrenamiento de carga.",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-90 grados",
        },
        {
          movimiento: "Extensión de cadera",
          rangoObjetivo: "0 a -10 grados",
        },
        {
          movimiento: "Abducción de cadera",
          rangoObjetivo: "0-30 grados",
        },
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-120 grados",
        },
      ],
      ejercicios: [
        {
          id: "cad-int-f2-e1",
          nombre: "Entrenamiento de marcha con carga parcial",
          descripcion:
            "Deambulación con andadera o muletas axilares con carga parcial progresiva. Utilizar báscula bajo el pie operado para entrenar al paciente a aplicar el porcentaje correcto de peso. Iniciar con 25% del peso corporal y progresar a 50%. Enfocarse en patrón de marcha simétrico y longitud de paso adecuada.",
          repeticiones: "Sesiones de 10-20 minutos",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "No exceder el porcentaje de carga indicado por el cirujano",
            "Supervisar patrón de marcha para evitar compensaciones",
          ],
          progresion:
            "Aumentar distancia y duración. Progresar porcentaje de carga cada 2 semanas.",
        },
        {
          id: "cad-int-f2-e2",
          nombre: "Elevación de pierna recta (SLR) en 4 planos",
          descripcion:
            "En decúbito supino, elevar la pierna operada con rodilla extendida hasta 30-45 grados de flexión de cadera. Mantener 3-5 segundos y descender lentamente. Progresar a SLR en decúbito lateral (abducción), prono (extensión) y lateral contralateral (aducción). Este ejercicio fortalece la musculatura periarticular de la cadera.",
          repeticiones: "10 repeticiones x 3 series por plano",
          frecuencia: "1-2 veces al día",
          precauciones: [
            "No agregar peso en tobillera hasta la semana 6",
            "Realizar en superficie firme",
          ],
          progresion:
            "Agregar peso en tobillera (0.5-1 kg) a partir de la semana 6.",
        },
        {
          id: "cad-int-f2-e3",
          nombre: "Sentadillas parciales con apoyo (mini-squats)",
          descripcion:
            "De pie apoyando las manos en una superficie estable (andadera, barra de apoyo), realizar flexión de rodillas y cadera hasta 30-45 grados. Mantener la posición 3-5 segundos y regresar a bipedestación. Distribuir el peso progresivamente más hacia la extremidad operada. Este ejercicio fortalece cuádriceps y glúteos en cadena cerrada.",
          repeticiones: "8-10 repeticiones x 3 series",
          frecuencia: "1-2 veces al día",
          precauciones: [
            "Mantener apoyo de manos en todo momento",
            "No flexionar más allá de 45 grados inicialmente",
            "Respetar la carga parcial permitida",
          ],
          progresion:
            "Aumentar profundidad de la sentadilla y reducir apoyo de manos progresivamente.",
        },
        {
          id: "cad-int-f2-e4",
          nombre: "Ejercicios de equilibrio en bipedestación",
          descripcion:
            "De pie con apoyo de manos en una superficie estable, realizar transferencias de peso de un pie al otro. Progresar a apoyo unipodal de la extremidad sana (cargando peso en la operada) durante 10-15 segundos. Agregar perturbaciones suaves. Estos ejercicios mejoran el control postural y reducen el riesgo de caídas.",
          repeticiones: "5-10 repeticiones de transferencia x 3 series",
          frecuencia: "2 veces al día",
          precauciones: [
            "Siempre con superficie de apoyo al alcance",
            "Supervisar para prevenir caídas",
          ],
          progresion:
            "Progresar de apoyo bilateral a unipodal. Agregar superficie inestable (foam).",
        },
      ],
      precauciones: [
        "Continuar tromboprofilaxis según indicación médica",
        "No sentarse en asientos bajos sin ayuda",
        "Usar calzado adecuado con suela antideslizante",
        "Prevenir caídas: barras de apoyo en baño, buena iluminación",
        "No cargar objetos pesados ni realizar actividades que comprometan el equilibrio",
        "Monitorear estado nutricional (proteínas, calcio, vitamina D)",
      ],
      banderasRojas: [
        "Dolor inguinal creciente con la carga (posible cut-out del tornillo cefálico)",
        "Acortamiento progresivo de la extremidad",
        "Incapacidad para progresar en la carga según lo programado",
        "Caída del paciente con traumatismo sobre la cadera",
        "Síntomas de TVP tardía",
        "Deterioro del estado general o del nivel de independencia funcional",
      ],
      criteriosAvance: [
        "Deambulación con carga parcial al 50% por >50 metros sin asistencia",
        "Flexión de cadera activa >80 grados",
        "Flexión de rodilla >100 grados",
        "SLR activa sin lag del cuádriceps",
        "Dolor EVA <4/10 durante la deambulación",
        "Radiografías con consolidación ósea progresiva y posición adecuada del implante",
      ],
    },
    // =====================================================================
    // FASE 3: CARGA PROGRESIVA Y FORTALECIMIENTO (Semanas 8-12)
    // =====================================================================
    {
      id: "cadera-inter-fase-3",
      numero: 3,
      nombre: "Carga progresiva y fortalecimiento avanzado",
      duracion: "Semanas 8-12",
      semanaInicio: 8,
      semanaFin: 12,
      objetivos: [
        "Progresar a carga progresiva (50-100% del peso corporal)",
        "Transicionar de andadera a muletas y luego a bastón",
        "Fortalecer musculatura de cadera, rodilla y tronco",
        "Mejorar patrón de marcha y reducir claudicación",
        "Aumentar resistencia cardiovascular",
        "Progresar independencia en actividades de la vida diaria",
      ],
      estadoCarga: "carga-progresiva",
      cargaPorcentaje: 75,
      cargaDetalle:
        "Carga progresiva: 50-75% del peso corporal semana 8-10, progresar a 75-100% semana 10-12. Transición de andadera a muletas canadienses y luego a bastón contralateral.",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-110 grados",
        },
        {
          movimiento: "Extensión de cadera",
          rangoObjetivo: "0 a -15 grados",
        },
        {
          movimiento: "Abducción de cadera",
          rangoObjetivo: "0-35 grados",
        },
        {
          movimiento: "Rotación interna/externa de cadera",
          rangoObjetivo: "20/30 grados",
        },
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-130 grados",
        },
      ],
      ejercicios: [
        {
          id: "cad-int-f3-e1",
          nombre: "Entrenamiento de marcha con carga progresiva",
          descripcion:
            "Deambulación con muletas canadienses o bastón contralateral con carga progresiva. Enfocarse en normalización del patrón de marcha: longitud de paso simétrica, cadencia adecuada, fase de apoyo completa. Entrenar subir y bajar escaleras con apoyo. Progresar distancia hasta 200-500 metros por sesión.",
          repeticiones: "Sesiones de 15-30 minutos",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "Respetar progresión de carga indicada por el cirujano",
            "Usar bastón contralateral hasta normalizar patrón de marcha",
          ],
          progresion:
            "Transicionar de muletas a bastón. Aumentar distancia y velocidad. Practicar marcha en terrenos irregulares.",
        },
        {
          id: "cad-int-f3-e2",
          nombre: "Fortalecimiento de abductores de cadera (glúteo medio)",
          descripcion:
            "En decúbito lateral con la pierna operada arriba, realizar abducción activa de cadera contra gravedad. Mantener 3-5 segundos arriba y descender lentamente. El glúteo medio es fundamental para la estabilización pélvica durante la marcha. Su debilidad causa signo de Trendelenburg y marcha en Trendelenburg.",
          repeticiones: "12-15 repeticiones x 3 series",
          frecuencia: "1 vez al día",
          precauciones: [
            "No rotar la cadera durante la abducción",
            "Mantener la pelvis estable",
          ],
          progresion:
            "Agregar peso en tobillera (1-2 kg). Progresar a abducción en bipedestación con banda elástica.",
        },
        {
          id: "cad-int-f3-e3",
          nombre: "Sentadillas progresivas y step-ups",
          descripcion:
            "Realizar sentadillas a 60-90 grados con apoyo bilateral. Progresar a step-ups (subir escalón de 10-15 cm con la pierna operada). Estos ejercicios fortalecen la cadena extensora (cuádriceps, glúteo mayor) en patrones funcionales que replican las demandas de la marcha y escaleras.",
          repeticiones: "10-12 repeticiones x 3 series",
          frecuencia: "1 vez al día",
          precauciones: [
            "Iniciar con escalón bajo (10 cm) y progresar",
            "Mantener apoyo de manos disponible",
          ],
          progresion:
            "Aumentar altura del escalón (10 → 15 → 20 cm). Reducir apoyo de manos.",
        },
        {
          id: "cad-int-f3-e4",
          nombre: "Entrenamiento de equilibrio avanzado",
          descripcion:
            "Apoyo unipodal sobre la pierna operada con progresión de duración (15 → 30 → 60 segundos). Agregar perturbaciones (empujes suaves del terapeuta), movimientos de brazos, y ojos cerrados. Utilizar superficies inestables (foam, bosu) según tolerancia. Estos ejercicios son fundamentales para la prevención de caídas.",
          repeticiones: "3-5 repeticiones de 15-60 segundos",
          frecuencia: "2 veces al día",
          precauciones: [
            "Siempre con superficie de apoyo cercana para prevenir caídas",
            "No cerrar ojos sin supervisión",
          ],
          progresion:
            "Progresar duración, agregar perturbaciones y superficie inestable.",
        },
      ],
      precauciones: [
        "Vigilar signos de cut-out del tornillo cefálico (dolor inguinal con la carga)",
        "No realizar actividades de alto impacto (correr, saltar)",
        "Continuar medidas de prevención de caídas",
        "Valorar estado óseo: densitometría ósea, suplementación de calcio y vitamina D",
        "Ajustar programa según comorbilidades del paciente",
      ],
      banderasRojas: [
        "Dolor inguinal o en cara lateral del muslo que aumenta con la carga",
        "Claudicación que no mejora a pesar de fortalecimiento",
        "Acortamiento progresivo de la extremidad (colapso del foco)",
        "Falla del material: dolor agudo, incapacidad súbita para cargar peso",
        "Caída con traumatismo sobre la cadera operada",
      ],
      criteriosAvance: [
        "Deambulación con bastón contralateral por >200 metros",
        "Capacidad de subir y bajar escaleras con apoyo",
        "Fuerza de abductores de cadera 4/5 en escala de Daniels",
        "Apoyo unipodal >15 segundos",
        "Dolor EVA <3/10 durante la deambulación",
        "Consolidación radiográfica progresiva adecuada",
      ],
    },
    // =====================================================================
    // FASE 4: CARGA COMPLETA Y RETORNO FUNCIONAL (Semanas 12-16)
    // =====================================================================
    {
      id: "cadera-inter-fase-4",
      numero: 4,
      nombre: "Carga completa y retorno funcional",
      duracion: "Semanas 12-16",
      semanaInicio: 12,
      semanaFin: 16,
      objetivos: [
        "Alcanzar carga completa y deambulación independiente sin auxiliares",
        "Normalizar patrón de marcha (sin claudicación ni Trendelenburg)",
        "Maximizar fuerza muscular e independencia funcional",
        "Prevenir caídas futuras mediante entrenamiento de equilibrio",
        "Retorno a actividades previas al nivel previo a la fractura",
        "Establecer programa de mantenimiento a largo plazo",
      ],
      estadoCarga: "carga-completa",
      cargaPorcentaje: 100,
      cargaDetalle:
        "Carga completa (100% del peso corporal). Deambulación sin auxiliares o con bastón como medida de seguridad en exteriores. Retiro progresivo del bastón.",
      romObjetivos: [
        {
          movimiento: "Flexión de cadera",
          rangoObjetivo: "0-120 grados",
        },
        {
          movimiento: "Extensión de cadera",
          rangoObjetivo: "0 a -15 grados",
        },
        {
          movimiento: "Abducción de cadera",
          rangoObjetivo: "0-40 grados",
        },
        {
          movimiento: "Rotación interna/externa de cadera",
          rangoObjetivo: "30/40 grados",
        },
      ],
      ejercicios: [
        {
          id: "cad-int-f4-e1",
          nombre: "Entrenamiento de marcha independiente y en exteriores",
          descripcion:
            "Deambulación sin auxiliares de marcha en superficies planas. Progresar a marcha en exteriores: terreno irregular, rampas, bordillos. Entrenar cruce de calles con semáforo (marcha con velocidad mínima requerida). Objetivo: velocidad de marcha >0.8 m/s para deambulación comunitaria segura.",
          repeticiones: "Sesiones de 20-30 minutos",
          frecuencia: "2-3 veces al día",
          progresion:
            "Aumentar velocidad y distancia. Practicar en diferentes tipos de terreno.",
        },
        {
          id: "cad-int-f4-e2",
          nombre: "Programa de fortalecimiento funcional avanzado",
          descripcion:
            "Realizar sentadillas profundas, peso muerto con barra o mancuernas, step-ups en escalón de 20 cm, lunges (zancadas), extensión de cadera con banda elástica. Entrenar al 60-80% del 1RM estimado. Estos ejercicios fortalecen la cadena cinética del miembro inferior de forma funcional.",
          repeticiones: "10-12 repeticiones x 3 series",
          frecuencia: "3-4 veces por semana",
          precauciones: [
            "Adaptar intensidad a la capacidad del paciente (especialmente en adultos mayores)",
            "Supervisar técnica para prevenir caídas",
          ],
          progresion:
            "Aumentar carga progresivamente según tolerancia y capacidad funcional.",
        },
        {
          id: "cad-int-f4-e3",
          nombre: "Programa de prevención de caídas",
          descripcion:
            "Entrenamiento integral de equilibrio: apoyo unipodal con ojos cerrados, marcha en tándem, giros rápidos, cambios de dirección, reacciones posturales ante perturbaciones. Incluir componente educativo: adaptaciones ambientales del hogar, calzado adecuado, revisión de medicamentos que afectan el equilibrio.",
          repeticiones: "20-30 minutos por sesión",
          frecuencia: "3-4 veces por semana",
          progresion:
            "Progresar complejidad de tareas de equilibrio. Incluir doble tarea (cognitiva + motora).",
        },
        {
          id: "cad-int-f4-e4",
          nombre: "Actividad aeróbica de bajo impacto",
          descripcion:
            "Bicicleta estacionaria, caminadora, natación o aqua-aeróbic. Iniciar con 10-15 minutos y progresar a 30 minutos de actividad cardiovascular. Mantener intensidad moderada (60-70% de frecuencia cardíaca máxima). El ejercicio aeróbico mejora la resistencia cardiovascular y la salud ósea.",
          repeticiones: "15-30 minutos por sesión",
          frecuencia: "3-5 veces por semana",
          precauciones: [
            "Adaptar intensidad a la capacidad cardiovascular del paciente",
            "Monitorear frecuencia cardíaca en pacientes con patología cardíaca",
          ],
        },
      ],
      precauciones: [
        "Continuar medidas de prevención de caídas de forma permanente",
        "Valorar y tratar osteoporosis subyacente (densitometría, tratamiento farmacológico)",
        "Suplementación de calcio (1000-1200 mg/día) y vitamina D (800-1000 UI/día)",
        "Revisión oftalmológica y audiológica para factores de riesgo de caídas",
        "No realizar actividades de alto impacto (correr, saltar) si hay osteoporosis",
      ],
      banderasRojas: [
        "Claudicación persistente a pesar de rehabilitación completa",
        "Dolor inguinal con la carga completa (posible necrosis avascular o cut-out)",
        "Caída recurrente (evaluar programa de prevención y medicamentos)",
        "Pérdida de la independencia funcional previamente alcanzada",
        "Fractura por fragilidad en otra localización",
      ],
      criteriosAvance: [
        "Deambulación independiente sin auxiliares de marcha",
        "Velocidad de marcha >0.8 m/s",
        "Capacidad de subir y bajar escaleras sin apoyo de barandal",
        "Apoyo unipodal >30 segundos",
        "Timed Up and Go (TUG) <12 segundos",
        "Independencia en todas las actividades de la vida diaria",
        "Sin dolor durante la deambulación (EVA <2/10)",
      ],
    },
  ],
  criteriosRetornoActividad: [
    "Consolidación radiográfica completa confirmada",
    "Deambulación independiente sin auxiliares de marcha",
    "Velocidad de marcha >0.8 m/s (deambulación comunitaria segura)",
    "Timed Up and Go (TUG) <12 segundos",
    "Fuerza de abductores de cadera >4/5 en escala de Daniels",
    "Sin Trendelenburg ni claudicación significativa",
    "Independencia en actividades de la vida diaria",
    "Programa de prevención de caídas establecido",
    "Tratamiento de osteoporosis instaurado si aplica",
  ],
  complicacionesPotenciales: [
    "Cut-out del tornillo cefálico (4-12%)",
    "Colapso del foco de fractura (telescopaje excesivo)",
    "Fractura periimplante (en punta del clavo)",
    "Pseudoartrosis (rara con clavo cefalomedular, <2%)",
    "Consolidación viciosa en varo o acortamiento",
    "Necrosis avascular de la cabeza femoral (rara en fracturas extracapsulares)",
    "Trombosis venosa profunda y tromboembolia pulmonar",
    "Infección del sitio quirúrgico superficial o profunda",
    "Delirium postoperatorio (especialmente en adultos mayores)",
    "Mortalidad al año (15-25% en adultos mayores con fractura de cadera)",
    "Pérdida de independencia funcional previa",
    "Dolor lateral del muslo por irritación del clavo",
  ],
  referencias: [
    "ref-koval-1998",
    "ref-handoll-2015-dr",
    "ref-prat-2009",
    "ref-thewlis-2015",
    "ref-valdes-2014",
  ],
  fechaActualizacion: "2025-06-01",
  nivelEvidencia: "Alto (guías clínicas AAOS, NICE y revisiones Cochrane)",
};
