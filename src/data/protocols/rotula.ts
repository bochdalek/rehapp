import type { Protocol } from "@/types/protocol";

export const rotulaRAFI: Protocol = {
  id: "rotula-rafi",
  nombre:
    "Protocolo de Rehabilitación Post-RAFI de Fractura de Rótula con Cerclaje y Tornillos",
  nombreCorto: "RAFI Rótula",
  descripcion:
    "Protocolo de rehabilitación basado en evidencia para el manejo postquirúrgico de fracturas de rótula (patela) tratadas mediante reducción abierta y fijación interna (RAFI) con cerclaje en banda de tensión y/o tornillos. Incluye fracturas transversas, conminutas y de polo inferior. El protocolo contempla protección del aparato extensor, recuperación gradual de flexión de rodilla y retorno funcional en 14 semanas.",
  region: "miembro-inferior",
  localizacion: "rodilla",
  abordajeQuirurgico: ["RAFI", "cerclaje", "tornillos"],
  clasificaciones: [
    "Fractura transversa simple de rótula (más frecuente)",
    "Fractura conminuta de rótula",
    "Fractura de polo inferior de rótula",
    "Fractura de polo superior de rótula",
    "Fractura longitudinal (vertical) de rótula",
    "Fractura osteocondral de rótula",
    "AO/OTA 34-A, 34-B, 34-C",
  ],
  indicacionesQuirurgicas: [
    "Desplazamiento de fragmentos >2-3 mm",
    "Escalón articular >2 mm en la superficie articular",
    "Pérdida del mecanismo extensor (incapacidad para extensión activa)",
    "Fractura abierta de rótula",
    "Fractura conminuta con desplazamiento significativo",
  ],
  duracionTotal: "14 semanas",
  semanasTotal: 14,
  fases: [
    // =====================================================================
    // FASE 1: PROTECCIÓN DEL APARATO EXTENSOR (Semanas 0-3)
    // =====================================================================
    {
      id: "rotula-rafi-fase-1",
      numero: 1,
      nombre: "Protección del aparato extensor",
      duracion: "Semanas 0-3",
      semanaInicio: 0,
      semanaFin: 3,
      objetivos: [
        "Protección de la fijación y del aparato extensor reparado",
        "Control del dolor y edema postquirúrgico",
        "Inicio temprano de movilidad pasiva controlada de rodilla",
        "Prevención de adherencias del tendón rotuliano y cuádriceps",
        "Mantener fuerza de cadera y tobillo",
        "Educación sobre restricciones de movimiento",
      ],
      estadoCarga: "carga-parcial",
      cargaPorcentaje: 25,
      cargaDetalle:
        "Carga parcial al contacto (25%) con rodilla en extensión completa usando férula articulada bloqueada en 0 grados para deambulación. Muletas axilares obligatorias.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-45 grados",
          restriccion:
            "Progresión gradual de flexión. No sobrepasar 45 grados en esta fase para proteger el cerclaje. Movilización pasiva únicamente.",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0 grados (extensión completa)",
          restriccion:
            "Prioridad absoluta mantener extensión completa. La férula debe estar bloqueada en 0 grados para traslados.",
        },
        {
          movimiento: "Flexión/extensión de tobillo",
          rangoObjetivo: "Rango completo",
        },
      ],
      ejercicios: [
        {
          id: "rot-f1-e1",
          nombre: "Contracciones isométricas suaves de cuádriceps",
          descripcion:
            "En decúbito supino con la rodilla en extensión completa, realizar contracciones isométricas suaves del cuádriceps presionando la rodilla hacia la camilla. Mantener 5 segundos y relajar. La intensidad debe ser submáxima (50% del esfuerzo máximo) para proteger el cerclaje y la superficie articular reparada.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "4 veces al día",
          precauciones: [
            "Contracción submáxima solamente (50% del esfuerzo máximo)",
            "No realizar si causa dolor en el sitio de fijación",
            "No intentar extensión contra resistencia",
          ],
          progresion:
            "Incrementar gradualmente la intensidad de la contracción conforme el dolor lo permita.",
        },
        {
          id: "rot-f1-e2",
          nombre: "Movilización pasiva de rótula (patellar glides)",
          descripcion:
            "Con la rodilla en extensión completa, movilizar manualmente la rótula en dirección cefálica, caudal, medial y lateral. Aplicar presión suave y sostenida durante 10 segundos en cada dirección. Este ejercicio previene adherencias peripatélares y mantiene la movilidad del aparato extensor.",
          repeticiones: "10 deslizamientos por dirección",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "No movilizar agresivamente sobre el sitio de fractura",
            "Suspender si genera dolor agudo o crepitación",
          ],
          progresion:
            "Incrementar la amplitud del deslizamiento conforme la cicatrización avance.",
        },
        {
          id: "rot-f1-e3",
          nombre: "Deslizamientos de talón asistidos con límite de flexión",
          descripcion:
            "En decúbito supino, deslizar el talón sobre la camilla flexionando la rodilla lentamente hasta el límite permitido (45 grados). Usar una banda o toalla para asistir el retorno a extensión. Realizar el movimiento de forma lenta y controlada, sin impulso.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "3 veces al día",
          precauciones: [
            "No exceder 45 grados de flexión en esta fase",
            "No realizar flexión activa contra gravedad",
            "Usar tope mecánico en la férula articulada",
          ],
          progresion:
            "Incrementar flexión 10 grados por semana según indicación del cirujano.",
        },
        {
          id: "rot-f1-e4",
          nombre: "Elevación de pierna recta (SLR) con férula",
          descripcion:
            "Con la férula bloqueada en extensión, realizar elevación de la pierna recta en decúbito supino. Contraer cuádriceps, elevar la pierna 30-45 grados, mantener 5 segundos y descender controladamente. La férula protege el aparato extensor durante el ejercicio.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "Siempre con férula bloqueada en extensión",
            "No realizar si hay lag de extensión (incapacidad de mantener extensión completa)",
          ],
          progresion:
            "Agregar peso en tobillera (0.5 kg) a partir de la semana 2 si tolera sin lag.",
        },
        {
          id: "rot-f1-e5",
          nombre: "Bombeos de tobillo y ejercicios circulatorios",
          descripcion:
            "Con la extremidad elevada, realizar flexión dorsal y plantar rítmica del tobillo. Complementar con circunducción del tobillo en ambas direcciones. Favorecer el retorno venoso y prevenir la TVP.",
          repeticiones: "20 repeticiones cada hora",
          frecuencia: "Cada hora durante vigilia",
        },
      ],
      precauciones: [
        "Férula articulada bloqueada en extensión para todos los traslados y deambulación",
        "No flexión activa de rodilla contra gravedad (solo pasiva asistida)",
        "No extensión contra resistencia (proteger cerclaje)",
        "Crioterapia 15-20 minutos después de cada sesión",
        "Vigilar integridad del cerclaje: crepitación metálica, prominencia del alambre",
        "Elevar extremidad para control de edema",
      ],
      banderasRojas: [
        "Pérdida de la capacidad de extensión activa (rotura del aparato extensor)",
        "Dolor agudo en la cara anterior de rodilla con crepitación metálica",
        "Aumento significativo de derrame articular",
        "Signos de infección: eritema, calor, secreción purulenta",
        "Migración palpable del alambre de cerclaje",
        "Signos de TVP: edema unilateral de pantorrilla",
      ],
      criteriosAvance: [
        "Flexión pasiva de rodilla ≥45 grados sin dolor",
        "Extensión completa activa sin lag",
        "Control adecuado del dolor (EVA ≤3)",
        "Herida quirúrgica en adecuada cicatrización",
        "Capacidad de realizar SLR sin déficit de extensión",
      ],
    },
    // =====================================================================
    // FASE 2: MOVILIDAD PROGRESIVA (Semanas 3-6)
    // =====================================================================
    {
      id: "rotula-rafi-fase-2",
      numero: 2,
      nombre: "Movilidad progresiva y fortalecimiento inicial",
      duracion: "Semanas 3-6",
      semanaInicio: 3,
      semanaFin: 6,
      objetivos: [
        "Incrementar flexión de rodilla progresivamente (meta: 90 grados)",
        "Fortalecer cuádriceps con ejercicios de cadena cinética cerrada",
        "Mejorar patrón de marcha con carga parcial progresiva",
        "Prevenir atrofia muscular del miembro inferior",
        "Restaurar propiocepción básica de rodilla",
      ],
      estadoCarga: "carga-parcial",
      cargaPorcentaje: 50,
      cargaDetalle:
        "Carga parcial progresiva al 50% con muletas. Desbloquear férula articulada para permitir flexión controlada durante la marcha (0-45 grados inicialmente, progresando a 0-90 grados).",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-90 grados",
          restriccion:
            "Incrementar 10-15 grados por semana. No forzar la flexión; progresión según tolerancia.",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0 grados (extensión completa mantenida)",
        },
      ],
      ejercicios: [
        {
          id: "rot-f2-e1",
          nombre: "Deslizamientos de talón con progresión de flexión",
          descripcion:
            "En decúbito supino, deslizar el talón flexionando la rodilla activamente asistida hasta el rango permitido (progresión semanal de 10-15 grados). Mantener la flexión máxima 5-10 segundos. Usar banda para asistir si es necesario. Meta: alcanzar 90 grados al final de esta fase.",
          repeticiones: "15 repeticiones x 3 series",
          frecuencia: "3-4 veces al día",
          precauciones: [
            "Progresión gradual: no incrementar más de 15 grados por semana",
            "No forzar si hay dolor agudo en la cara anterior de la rodilla",
          ],
          progresion:
            "Transicionar a flexión activa sin asistencia conforme mejore la fuerza del cuádriceps.",
        },
        {
          id: "rot-f2-e2",
          nombre: "Extensión terminal de rodilla (short arc quads)",
          descripcion:
            "En decúbito supino con un rodillo de 15 cm bajo la rodilla (manteniendo 20-30 grados de flexión), extender la rodilla completamente contrayendo el cuádriceps. Mantener la extensión 5 segundos. Este ejercicio fortalece selectivamente el cuádriceps en un rango seguro para la rótula.",
          repeticiones: "15 repeticiones x 3 series",
          frecuencia: "2-3 veces al día",
          precauciones: [
            "No usar rodillo grande que genere flexión >30 grados",
            "Evitar dolor en la superficie articular de la rótula",
          ],
          progresion:
            "Agregar tobillera con peso (0.5-1 kg) a partir de la semana 5.",
        },
        {
          id: "rot-f2-e3",
          nombre: "Mini sentadillas bilaterales (0-30 grados)",
          descripcion:
            "De pie con apoyo en barra paralela o pared, realizar flexión bilateral de rodillas hasta 30 grados únicamente. Mantener peso distribuido equitativamente. Enfatizar la activación del cuádriceps en la fase de ascenso. Este rango es seguro para la articulación patelofemoral.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "Diario",
          precauciones: [
            "No sobrepasar 30 grados de flexión en esta fase",
            "Mantener distribución simétrica de peso",
          ],
          progresion:
            "Incrementar profundidad a 45 grados en la semana 5-6.",
        },
        {
          id: "rot-f2-e4",
          nombre: "Bicicleta estática con asiento alto",
          descripcion:
            "Usar bicicleta estática con asiento en posición alta para limitar la flexión de rodilla. Iniciar con balanceo (pedaleo incompleto) y progresar a pedaleo completo cuando la flexión alcance 90 grados. Sin resistencia. El movimiento cíclico ayuda a mejorar la flexión de forma progresiva.",
          repeticiones: "10-15 minutos",
          frecuencia: "1-2 veces al día",
          precauciones: [
            "No agregar resistencia en esta fase",
            "Suspender si genera dolor patelofemoral",
          ],
          progresion:
            "Bajar asiento gradualmente conforme aumente la flexión.",
        },
      ],
      precauciones: [
        "Continuar con férula articulada para deambulación (desbloquear progresivamente)",
        "Evitar ejercicios de cadena cinética abierta con carga en rango de 45-90 grados (estrés patelofemoral máximo)",
        "No realizar sentadillas profundas ni lunges",
        "Vigilar signos de irritación del cerclaje: dolor puntual sobre alambres",
      ],
      banderasRojas: [
        "Pérdida de extensión activa previamente lograda",
        "Dolor patelofemoral creciente con la flexión",
        "Crepitación metálica palpable (migración de alambres)",
        "Derrame articular progresivo",
        "Bloqueo mecánico de la rodilla",
      ],
      criteriosAvance: [
        "Flexión de rodilla ≥90 grados",
        "Extensión completa activa mantenida",
        "Capacidad de pedaleo completo en bicicleta estática",
        "Marcha con patrón aceptable con muletas",
        "Fuerza de cuádriceps ≥3+/5",
      ],
    },
    // =====================================================================
    // FASE 3: FORTALECIMIENTO AVANZADO (Semanas 6-10)
    // =====================================================================
    {
      id: "rotula-rafi-fase-3",
      numero: 3,
      nombre: "Fortalecimiento avanzado y carga progresiva",
      duracion: "Semanas 6-10",
      semanaInicio: 6,
      semanaFin: 10,
      objetivos: [
        "Alcanzar flexión de rodilla ≥120 grados",
        "Progresión a carga completa y marcha independiente",
        "Fortalecimiento avanzado de cuádriceps e isquiotibiales",
        "Mejorar equilibrio y propiocepción",
        "Restaurar funcionalidad para actividades cotidianas",
      ],
      estadoCarga: "carga-progresiva",
      cargaPorcentaje: 75,
      cargaDetalle:
        "Carga progresiva al 75-100%. Transición de muletas a bastón y luego marcha independiente. Retiro de férula articulada cuando el control del cuádriceps sea adecuado (sin lag de extensión).",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-120 grados",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0 grados",
        },
      ],
      ejercicios: [
        {
          id: "rot-f3-e1",
          nombre: "Sentadillas bilaterales progresivas (0-60 grados)",
          descripcion:
            "De pie con los pies a la anchura de los hombros, realizar sentadillas controladas hasta 60 grados de flexión. Mantener alineación de rodillas sobre los pies. Usar peso corporal y progresar con mancuernas ligeras. Enfatizar control excéntrico en el descenso.",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "3 veces por semana",
          precauciones: [
            "No sobrepasar 60 grados de flexión hasta la semana 8",
            "Vigilar crepitación o dolor patelofemoral",
          ],
          progresion:
            "Incrementar profundidad a 90 grados a partir de la semana 8-9.",
        },
        {
          id: "rot-f3-e2",
          nombre: "Step-ups frontales con control excéntrico",
          descripcion:
            "Subir un escalón de 10-15 cm liderando con la pierna operada. Controlar el descenso con la pierna operada (fase excéntrica). Mantener alineación de rodilla y pelvis durante todo el movimiento. Este ejercicio fortalece cuádriceps y glúteo medio simultáneamente.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "Diario",
          precauciones: [
            "Iniciar con escalón bajo (10 cm)",
            "No permitir valgo dinámico de rodilla",
          ],
          progresion:
            "Incrementar altura del escalón a 20 cm y agregar peso.",
        },
        {
          id: "rot-f3-e3",
          nombre: "Prensa de piernas bilateral",
          descripcion:
            "En máquina de prensa, colocar pies en posición alta de la plataforma para reducir estrés patelofemoral. Flexionar rodillas a 60-70 grados y extender. Iniciar con carga ligera (20-30% del peso corporal).",
          repeticiones: "12 repeticiones x 3 series",
          frecuencia: "3 veces por semana",
          precauciones: [
            "Posicionar pies altos en la plataforma para disminuir fuerza de compresión patelofemoral",
            "No flexionar más allá de 70 grados inicialmente",
          ],
          progresion:
            "Incrementar carga y rango de flexión progresivamente.",
        },
        {
          id: "rot-f3-e4",
          nombre: "Equilibrio unipodal con perturbaciones",
          descripcion:
            "De pie sobre la pierna operada, mantener equilibrio durante 30 segundos. Progresar agregando perturbaciones externas suaves (empujes leves, lanzar y atrapar pelota). Usar superficie estable inicialmente y progresar a superficie inestable.",
          repeticiones: "5 repeticiones de 30 segundos x 3 series",
          frecuencia: "Diario",
          precauciones: [
            "Tener apoyo cercano disponible",
            "No realizar sobre superficie inestable hasta que el equilibrio en suelo firme sea sólido",
          ],
          progresion:
            "Progresar a cojín propioceptivo y ojos cerrados.",
        },
      ],
      precauciones: [
        "Evitar sentadillas profundas (>90 grados) hasta consolidación completa",
        "Evitar actividades con impacto directo sobre la rodilla (arrodillarse)",
        "Vigilar irritación por material de osteosíntesis (alambres prominentes)",
        "No realizar extensiones de rodilla en cadena abierta con carga pesada (alto estrés patelofemoral)",
      ],
      banderasRojas: [
        "Dolor anterior de rodilla progresivo con la actividad",
        "Crepitación dolorosa patelofemoral",
        "Migración o protrusión de alambres de cerclaje",
        "Pérdida de extensión activa",
        "Derrame articular recurrente",
      ],
      criteriosAvance: [
        "Flexión de rodilla ≥120 grados",
        "Marcha independiente sin auxiliar",
        "Fuerza de cuádriceps ≥4/5",
        "Capacidad de subir escaleras alternando pies",
        "Equilibrio unipodal ≥15 segundos",
      ],
    },
    // =====================================================================
    // FASE 4: RETORNO FUNCIONAL (Semanas 10-14)
    // =====================================================================
    {
      id: "rotula-rafi-fase-4",
      numero: 4,
      nombre: "Retorno funcional y actividad plena",
      duracion: "Semanas 10-14",
      semanaInicio: 10,
      semanaFin: 14,
      objetivos: [
        "Rango de movimiento completo funcional de rodilla (≥135 grados)",
        "Fuerza muscular simétrica bilateral",
        "Retorno a actividades de la vida diaria sin restricciones",
        "Reintegración laboral y actividades recreativas",
        "Preparación para retiro de material si se planifica",
      ],
      estadoCarga: "carga-completa",
      cargaPorcentaje: 100,
      cargaDetalle:
        "Carga completa sin restricciones. Marcha normalizada. Actividades de bajo impacto permitidas.",
      romObjetivos: [
        {
          movimiento: "Flexión de rodilla",
          rangoObjetivo: "0-135 grados (o simétrico al contralateral)",
        },
        {
          movimiento: "Extensión de rodilla",
          rangoObjetivo: "0 grados",
        },
      ],
      ejercicios: [
        {
          id: "rot-f4-e1",
          nombre: "Sentadillas unipodales parciales",
          descripcion:
            "De pie sobre la pierna operada, realizar sentadillas controladas hasta 45-60 grados. Mantener alineación de rodilla y pelvis estable. Este ejercicio evalúa y entrena la fuerza funcional del cuádriceps en condiciones de demanda real.",
          repeticiones: "8 repeticiones x 3 series",
          frecuencia: "3 veces por semana",
          precauciones: [
            "No realizar si hay dolor patelofemoral significativo",
            "Mantener control excéntrico",
          ],
          progresion:
            "Incrementar profundidad y agregar peso externo.",
        },
        {
          id: "rot-f4-e2",
          nombre: "Entrenamiento en escaleras con carga",
          descripcion:
            "Subir y bajar escaleras con patrón recíproco normal. Progresar a subir escaleras de dos en dos. Agregar carga externa (mochila con peso) para incrementar la demanda muscular. Enfatizar control excéntrico en el descenso.",
          repeticiones: "3-5 pisos completos",
          frecuencia: "Diario",
          precauciones: [
            "Usar barandilla si es necesario",
            "No saltar escalones",
          ],
          progresion:
            "Incrementar velocidad y carga externa progresivamente.",
        },
        {
          id: "rot-f4-e3",
          nombre: "Ejercicios pliométricos bilaterales",
          descripcion:
            "Realizar saltos bilaterales suaves sobre superficie blanda. Aterrizar con rodillas semiflexionadas para absorción de impacto. Progresar a saltos laterales y cambios de dirección controlados. Solo con consolidación completa confirmada.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "2-3 veces por semana",
          precauciones: [
            "Solo con consolidación radiográfica completa",
            "Aterrizar con absorción suave de impacto",
            "Evitar superficies duras inicialmente",
          ],
          progresion:
            "Progresar a saltos unipodales en las semanas finales.",
        },
        {
          id: "rot-f4-e4",
          nombre: "Entrenamiento funcional específico",
          descripcion:
            "Simular actividades específicas de la vida diaria y laboral del paciente: arrodillarse con protección, agacharse, levantarse del suelo, cambios de dirección. Adaptar según la ocupación y actividades recreativas del paciente.",
          repeticiones: "Según actividad",
          frecuencia: "Diario",
          precauciones: [
            "Usar rodillera acolchada para actividades que requieran arrodillarse",
            "Evitar deportes de contacto hasta retiro de material",
          ],
          progresion:
            "Incrementar demanda funcional según objetivos individuales.",
        },
      ],
      precauciones: [
        "Los alambres de cerclaje frecuentemente causan molestias al arrodillarse; considerar retiro del material",
        "Evitar deportes de contacto hasta evaluar necesidad de retiro de material",
        "Monitorizar síntomas patelofemorales (dolor al subir/bajar escaleras, crepitación)",
        "Arrodillarse puede requerir protección permanente con rodillera acolchada",
      ],
      banderasRojas: [
        "Dolor significativo al arrodillarse que limita actividades",
        "Migración tardía de alambres de cerclaje",
        "Crepitación patelofemoral dolorosa progresiva",
        "Limitación funcional que no mejora",
        "Refractura de rótula",
      ],
      criteriosAvance: [
        "Rango de movimiento funcional completo (≥130 grados de flexión)",
        "Fuerza de cuádriceps ≥85% del lado contralateral",
        "Marcha normalizada sin claudicación",
        "Capacidad de subir y bajar escaleras sin dolor",
        "Independencia en actividades de la vida diaria",
      ],
    },
  ],
  criteriosRetornoActividad: [
    "Consolidación radiográfica completa de la fractura de rótula",
    "Rango de movimiento de rodilla ≥130 grados de flexión con extensión completa",
    "Fuerza de cuádriceps ≥85% comparado con lado contralateral",
    "Marcha independiente normalizada sin claudicación",
    "Capacidad de subir y bajar escaleras alternando pies sin dolor",
    "Extensión activa completa sin lag",
    "Sin dolor patelofemoral significativo en actividades cotidianas",
    "Evaluación funcional satisfactoria (prueba de sentadilla unipodal)",
  ],
  complicacionesPotenciales: [
    "Dolor anterior de rodilla por material prominente (complicación más frecuente)",
    "Rigidez de rodilla con pérdida de flexión",
    "Artrofibrosis",
    "Migración de alambres de cerclaje",
    "No unión o retardo de consolidación",
    "Artrosis patelofemoral postraumática",
    "Rotura secundaria del aparato extensor",
    "Infección del sitio quirúrgico",
    "Necesidad de retiro de material de osteosíntesis (hasta 50% de los casos)",
    "Debilidad persistente del cuádriceps",
  ],
  referencias: [
    "ref-melvin-2011",
    "ref-bhandari-2017",
    "ref-lazaro-2013",
    "ref-lotke-2006",
    "ref-carpenter-2009",
  ],
  fechaActualizacion: "2025-06-15",
  nivelEvidencia: "Nivel II-III: Estudios prospectivos y revisiones sistemáticas",
};
