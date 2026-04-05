import type { Protocol } from "@/types/protocol";

export const olecranonRAFI: Protocol = {
  id: "olecranon-rafi",
  nombre:
    "Protocolo de Rehabilitación Post-RAFI de Fractura de Olécranon con Cerclaje/Placa",
  nombreCorto: "RAFI Olécranon",
  descripcion:
    "Protocolo de rehabilitación basado en evidencia para el manejo postquirúrgico de fracturas de olécranon tratadas mediante reducción abierta y fijación interna (RAFI) con banda de tensión (cerclaje con alambre y agujas de Kirschner) o placa anatómica precontorneada. El protocolo contempla movilización temprana del codo con protección de la extensión activa resistida y retorno funcional en 12 semanas.",
  region: "miembro-superior",
  localizacion: "codo",
  abordajeQuirurgico: ["RAFI", "cerclaje"],
  clasificaciones: [
    "Mayo tipo I (no desplazada, estable)",
    "Mayo tipo II (desplazada, estable) - IIA simple, IIB conminuta",
    "Mayo tipo III (desplazada, inestable) - IIIA simple, IIIB conminuta",
    "Schatzker: transversa, transversa-impactada, oblicua, conminuta, oblicua-distal, fracturas-luxación",
  ],
  indicacionesQuirurgicas: [
    "Fractura desplazada >2 mm con disrupción del aparato extensor",
    "Incapacidad para la extensión activa del codo",
    "Fractura conminuta del olécranon con inestabilidad articular",
    "Fractura-luxación del codo (tipo Mayo III)",
    "Fractura de olécranon asociada a luxación de Monteggia",
    "Fractura articular con escalón >2 mm en la superficie troclear",
  ],
  duracionTotal: "12 semanas",
  semanasTotal: 12,
  fases: [
    // =====================================================================
    // FASE 1: PROTECCIÓN Y MOVILIDAD CONTROLADA (Semanas 0-2)
    // =====================================================================
    {
      id: "olecranon-rafi-fase-1",
      numero: 1,
      nombre: "Protección y movilidad controlada",
      duracion: "Semanas 0-2",
      semanaInicio: 0,
      semanaFin: 2,
      objetivos: [
        "Control del dolor y edema postquirúrgico",
        "Protección del aparato extensor reparado y el material de osteosíntesis",
        "Iniciar movilidad activa del codo en rango protegido",
        "Mantener movilidad de hombro y muñeca/mano",
        "Prevenir rigidez articular temprana del codo",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "No aplica (miembro superior). Férula posterior con codo a 60-90 grados de flexión. Retiro para ejercicios según indicación.",
      romObjetivos: [
        {
          movimiento: "Flexión de codo",
          rangoObjetivo: "30-100 grados (rango protegido)",
          restriccion: "No extensión completa activa contra gravedad",
        },
        {
          movimiento: "Extensión de codo",
          rangoObjetivo: "Limitada a -30 grados",
          restriccion:
            "No extensión activa contra resistencia. Extensión pasiva asistida hasta -30° solamente.",
        },
        {
          movimiento: "Pronosupinación",
          rangoObjetivo: "Rango completo tolerado",
        },
        {
          movimiento: "Flexión/extensión de muñeca y dedos",
          rangoObjetivo: "Rango completo activo",
        },
      ],
      ejercicios: [
        {
          id: "olec-f1-e1",
          nombre: "Flexión activa de codo en rango protegido",
          descripcion:
            "Con el paciente en decúbito supino o sedestación, retirar la férula y realizar flexión activa del codo desde 30 grados hasta 100 grados. La flexión activa es segura porque el tríceps trabaja como antagonista (excéntrico) durante la flexión. El retorno a la extensión debe ser pasivo asistido (usando la mano contralateral), no activo contra gravedad.",
          repeticiones: "10-15 repeticiones x 3 series",
          frecuencia: "4-5 veces al día",
          precauciones: [
            "No realizar extensión activa contra gravedad",
            "El retorno a extensión debe ser pasivo-asistido",
            "Recolocar la férula después de cada sesión",
          ],
          progresion:
            "Aumentar rango de flexión a 120 grados según tolerancia. Aumentar extensión pasiva gradualmente.",
        },
        {
          id: "olec-f1-e2",
          nombre: "Pronosupinación activa del antebrazo",
          descripcion:
            "Con el codo flexionado a 90 grados, realizar pronación y supinación completa del antebrazo. Este movimiento es seguro ya que no estresa directamente la reparación del olécranon. Puede realizarse sosteniendo un lápiz para facilitar el control del movimiento.",
          repeticiones: "10-15 repeticiones x 3 series",
          frecuencia: "4 veces al día",
        },
        {
          id: "olec-f1-e3",
          nombre: "Movilización activa de hombro, muñeca y mano",
          descripcion:
            "Mantener la movilidad de las articulaciones proximales y distales. Realizar pendulares de Codman para el hombro, flexión/extensión de muñeca, y ejercicios de deslizamiento tendinoso para los dedos. Previene rigidez secundaria y síndrome hombro-mano.",
          repeticiones: "10 repeticiones x 3 series por articulación",
          frecuencia: "3 veces al día",
        },
        {
          id: "olec-f1-e4",
          nombre: "Contracción isométrica de bíceps (suave)",
          descripcion:
            "Con el codo flexionado a 90 grados, realizar contracción isométrica suave del bíceps presionando la mano contra una superficie fija. Mantener 5 segundos al 25% del esfuerzo máximo. Este ejercicio mantiene el tono del bíceps sin estresar la reparación del olécranon.",
          repeticiones: "5-8 repeticiones x 3 series",
          frecuencia: "2 veces al día",
          precauciones: [
            "Contracción suave solamente (25% del esfuerzo máximo)",
            "No realizar contracción isométrica de tríceps",
          ],
        },
      ],
      precauciones: [
        "PROHIBIDA la extensión activa del codo contra gravedad o resistencia",
        "No apoyarse sobre el codo operado",
        "No cargar peso con la extremidad operada (>0.5 kg)",
        "Uso de férula posterior entre sesiones de ejercicio",
        "No realizar movimientos bruscos del codo",
      ],
      banderasRojas: [
        "Incapacidad total para la flexión activa del codo (posible falla del material)",
        "Migración palpable de las agujas de Kirschner (prominencia posterior)",
        "Dolor severo con la movilización en rango protegido",
        "Signos de infección: eritema progresivo, drenaje, fiebre",
        "Parestesias en territorio del nervio cubital (hormigueo en 4° y 5° dedo)",
        "Bloqueo articular mecánico (fragmento intraarticular)",
      ],
      criteriosAvance: [
        "Herida quirúrgica sin signos de infección",
        "Flexión activa del codo >90 grados sin dolor significativo",
        "Dolor controlado (EVA <4/10 durante ejercicios)",
        "Sin signos de migración del material de osteosíntesis",
        "Radiografía de control a las 2 semanas satisfactoria",
      ],
    },
    // =====================================================================
    // FASE 2: MOVILIDAD ACTIVA PROGRESIVA (Semanas 2-6)
    // =====================================================================
    {
      id: "olecranon-rafi-fase-2",
      numero: 2,
      nombre: "Movilidad activa progresiva",
      duracion: "Semanas 2-6",
      semanaInicio: 2,
      semanaFin: 6,
      objetivos: [
        "Progresar rango de movimiento activo del codo",
        "Iniciar extensión activa asistida por gravedad",
        "Discontinuar la férula (semana 3-4)",
        "Recuperar pronosupinación completa",
        "Prevenir contractura en flexión del codo",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "No aplica (miembro superior). Retiro de férula entre semanas 3-4 según criterio del cirujano.",
      romObjetivos: [
        {
          movimiento: "Flexión de codo",
          rangoObjetivo: "130-140 grados",
        },
        {
          movimiento: "Extensión de codo",
          rangoObjetivo: "-10 a 0 grados",
        },
        {
          movimiento: "Pronación",
          rangoObjetivo: "70-80 grados",
        },
        {
          movimiento: "Supinación",
          rangoObjetivo: "70-80 grados",
        },
      ],
      ejercicios: [
        {
          id: "olec-f2-e1",
          nombre: "Extensión activa asistida por gravedad",
          descripcion:
            "En decúbito supino con el brazo elevado verticalmente (hombro flexionado a 90 grados), dejar que el codo se extienda lentamente asistido por gravedad. El tríceps contrae mínimamente para guiar el movimiento. Esta posición reduce el estrés sobre la reparación al eliminar la gravedad como resistencia. Progresar a extensión activa en sedestación a partir de la semana 4.",
          repeticiones: "10-15 repeticiones x 3 series",
          frecuencia: "4-5 veces al día",
          precauciones: [
            "No realizar extensión activa contra resistencia hasta la semana 6",
            "El movimiento debe ser lento y controlado",
          ],
          progresion:
            "Semana 4: progresar a extensión activa en sedestación. Semana 5-6: extensión activa contra gravedad.",
        },
        {
          id: "olec-f2-e2",
          nombre: "Flexión y extensión activa completa del codo",
          descripcion:
            "Realizar arco completo de flexión y extensión activa del codo de forma lenta y controlada. Buscar ganar los últimos grados de extensión de forma progresiva. Si hay contractura en flexión, utilizar extensión pasiva suave con peso del antebrazo (low-load prolonged stretch) durante 10-15 minutos.",
          repeticiones: "10-15 repeticiones x 3 series",
          frecuencia: "4-5 veces al día",
          progresion:
            "Si hay déficit de extensión >15°, agregar estiramiento pasivo prolongado con peso ligero.",
        },
        {
          id: "olec-f2-e3",
          nombre: "Fortalecimiento isométrico de bíceps y tríceps",
          descripcion:
            "Realizar contracciones isométricas de bíceps y tríceps en múltiples ángulos del codo (30°, 60°, 90°). Presionar la mano contra una superficie fija en flexión (bíceps) y en extensión (tríceps). Iniciar tríceps isométrico al 25% e ir progresando a 50% del esfuerzo máximo hacia la semana 6.",
          repeticiones: "8-10 repeticiones x 3 series por ángulo",
          frecuencia: "2 veces al día",
          precauciones: [
            "Iniciar isométricos de tríceps solo a partir de la semana 3",
            "Progresar intensidad gradualmente (25% → 50%)",
          ],
        },
        {
          id: "olec-f2-e4",
          nombre: "Ejercicios de prensión y función de la mano",
          descripcion:
            "Realizar ejercicios de prensión con esponja suave o masilla terapéutica. Incluir oposición del pulgar, abducción/aducción de dedos. Estos ejercicios mantienen la función de la mano y previenen debilidad por desuso del miembro superior.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "3 veces al día",
        },
      ],
      precauciones: [
        "No extensión activa contra resistencia hasta la semana 6",
        "No apoyarse sobre el codo (push-ups, plancha) hasta la semana 8",
        "No cargar objetos pesados (>1 kg) hasta la semana 6",
        "Evitar actividades de impacto sobre el codo",
        "No realizar movilizaciones pasivas forzadas",
      ],
      banderasRojas: [
        "Contractura en flexión progresiva (pérdida de extensión)",
        "Dolor creciente con la extensión activa",
        "Migración del material (prominencia posterior de agujas)",
        "Bloqueo mecánico del codo (cuerpo libre intraarticular)",
        "Síntomas de neuropatía cubital (parestesias en 4° y 5° dedo)",
      ],
      criteriosAvance: [
        "Flexión de codo >130 grados",
        "Extensión de codo con déficit <15 grados",
        "Pronosupinación >70 grados en cada dirección",
        "Extensión activa contra gravedad sin dolor",
        "Dolor EVA <3/10 durante actividades",
        "Consolidación radiográfica progresiva adecuada",
      ],
    },
    // =====================================================================
    // FASE 3: FORTALECIMIENTO PROGRESIVO (Semanas 6-10)
    // =====================================================================
    {
      id: "olecranon-rafi-fase-3",
      numero: 3,
      nombre: "Fortalecimiento progresivo",
      duracion: "Semanas 6-10",
      semanaInicio: 6,
      semanaFin: 10,
      objetivos: [
        "Recuperar rango de movimiento completo del codo",
        "Iniciar fortalecimiento isotónico del bíceps y tríceps",
        "Fortalecer musculatura del antebrazo y muñeca",
        "Restaurar fuerza de prensión y función del miembro superior",
        "Reintegrar actividades funcionales de la vida diaria",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "No aplica (miembro superior). Carga funcional progresiva permitida.",
      romObjetivos: [
        {
          movimiento: "Flexión de codo",
          rangoObjetivo: "140-150 grados",
        },
        {
          movimiento: "Extensión de codo",
          rangoObjetivo: "0 grados (extensión completa)",
        },
        {
          movimiento: "Pronación",
          rangoObjetivo: "80-90 grados",
        },
        {
          movimiento: "Supinación",
          rangoObjetivo: "80-90 grados",
        },
      ],
      ejercicios: [
        {
          id: "olec-f3-e1",
          nombre: "Fortalecimiento isotónico del tríceps",
          descripcion:
            "Realizar extensión del codo contra resistencia con banda elástica o mancuerna ligera (0.5-2 kg). Incluir: extensión de tríceps sobre la cabeza, kickbacks, y press de tríceps. Controlar la fase excéntrica (4 segundos). Iniciar con resistencia mínima y progresar según tolerancia y consolidación.",
          repeticiones: "10-12 repeticiones x 3 series",
          frecuencia: "1 vez al día",
          precauciones: [
            "Iniciar con carga mínima y progresar gradualmente",
            "No realizar ejercicios de impacto (push-ups pliométricos)",
            "Suspender si aparece dolor en el olécranon",
          ],
          progresion:
            "Aumentar peso cada 1-2 semanas (0.5 kg). Progresar a push-ups modificadas (rodillas) a partir de la semana 8.",
        },
        {
          id: "olec-f3-e2",
          nombre: "Curl de bíceps con mancuerna",
          descripcion:
            "Realizar flexión de codo contra resistencia con mancuerna de 1-3 kg. Incluir variaciones: curl supinado, curl neutro (martillo) y curl pronado (reverso). Estos ejercicios fortalecen los flexores del codo y los músculos del antebrazo.",
          repeticiones: "12-15 repeticiones x 3 series",
          frecuencia: "1 vez al día",
          progresion:
            "Aumentar peso progresivamente hasta alcanzar resistencia funcional.",
        },
        {
          id: "olec-f3-e3",
          nombre: "Propiocepción del codo en cadena cerrada",
          descripcion:
            "Apoyar la mano sobre una pelota contra la pared con el codo ligeramente flexionado. Mantener la posición estable y realizar pequeños movimientos circulares. Progresar a cuadrupedia modificada (apoyo sobre manos con rodillas en suelo). Estos ejercicios restauran el control neuromuscular del codo.",
          repeticiones: "30-60 segundos x 3 series",
          frecuencia: "2 veces al día",
          progresion:
            "Progresar de pared a mesa, luego a suelo. Agregar superficie inestable.",
        },
        {
          id: "olec-f3-e4",
          nombre: "Ejercicios funcionales de carga progresiva",
          descripcion:
            "Incorporar actividades funcionales con carga progresiva: cargar objetos con ambas manos (bolsas, libros), abrir puertas con resistencia, usar herramientas manuales. Estas tareas integran fuerza, movilidad y coordinación en contextos funcionales reales.",
          repeticiones: "15-20 minutos de práctica funcional",
          frecuencia: "2-3 veces al día",
        },
      ],
      precauciones: [
        "No realizar push-ups completas ni ejercicios de apoyo sobre manos hasta consolidación confirmada",
        "No deportes de contacto ni actividades con riesgo de caída sobre el codo",
        "Progresar cargas solo sin dolor durante ni 24 horas después del ejercicio",
        "Vigilar síntomas de neuropatía cubital durante fortalecimiento",
      ],
      banderasRojas: [
        "Dolor en el olécranon durante extensión resistida",
        "Crepitación articular nueva o progresiva",
        "Bloqueo mecánico del codo (flexión o extensión)",
        "Parestesias cubitales que empeoran con el ejercicio",
        "Pérdida de rango de movimiento previamente alcanzado",
      ],
      criteriosAvance: [
        "Rango de movimiento funcional del codo (30-130° mínimo)",
        "Extensión activa contra resistencia sin dolor",
        "Fuerza de tríceps 4/5 en escala de Daniels",
        "Fuerza de prensión >60% del lado contralateral",
        "Consolidación radiográfica confirmada",
      ],
    },
    // =====================================================================
    // FASE 4: RETORNO FUNCIONAL (Semanas 10-12)
    // =====================================================================
    {
      id: "olecranon-rafi-fase-4",
      numero: 4,
      nombre: "Retorno funcional y alta",
      duracion: "Semanas 10-12",
      semanaInicio: 10,
      semanaFin: 12,
      objetivos: [
        "Alcanzar arco de movimiento funcional completo del codo",
        "Fuerza >80% del lado contralateral",
        "Retorno a actividades laborales y deportivas",
        "Independencia en programa de mantenimiento domiciliario",
        "Evaluar necesidad de retiro de material sintomático (especialmente agujas de Kirschner)",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "No aplica (miembro superior). Actividad funcional sin restricciones según consolidación.",
      romObjetivos: [
        {
          movimiento: "Flexión de codo",
          rangoObjetivo: "140-150 grados",
        },
        {
          movimiento: "Extensión de codo",
          rangoObjetivo: "0 a -5 grados",
        },
        {
          movimiento: "Pronación",
          rangoObjetivo: "80-90 grados",
        },
        {
          movimiento: "Supinación",
          rangoObjetivo: "80-90 grados",
        },
      ],
      ejercicios: [
        {
          id: "olec-f4-e1",
          nombre: "Programa de fortalecimiento avanzado del miembro superior",
          descripcion:
            "Realizar press de banca, remo con mancuerna, curl de bíceps, extensión de tríceps y press de hombro con cargas moderadas a altas. Push-ups completas en progresión (pared → inclinada → suelo → con aplauso). Entrenar al 70-85% del 1RM estimado.",
          repeticiones: "8-12 repeticiones x 3-4 series",
          frecuencia: "3-4 veces por semana",
          progresion:
            "Aumentar carga 5-10% cada 1-2 semanas según tolerancia.",
        },
        {
          id: "olec-f4-e2",
          nombre: "Ejercicios pliométricos del miembro superior",
          descripcion:
            "Lanzar y atrapar pelota medicinal (1-3 kg), push-ups pliométricas (con aplauso o sobre superficie elevada), lanzamientos de pelota contra pared. Estos ejercicios restauran la potencia y la capacidad reactiva de la musculatura del codo y hombro.",
          repeticiones: "10-15 repeticiones x 3 series",
          frecuencia: "2-3 veces por semana",
          precauciones: [
            "Solo iniciar tras consolidación radiográfica confirmada",
            "Calentar adecuadamente antes de pliométricos",
          ],
        },
        {
          id: "olec-f4-e3",
          nombre: "Entrenamiento funcional deportivo específico",
          descripcion:
            "Simulación de gestos deportivos específicos: lanzamiento (béisbol, voleibol), golpeo (tenis, golf), tracción (escalada, remo). Integrar ejercicios de cadena cinética completa. Adaptar según las demandas funcionales del paciente.",
          repeticiones: "20-30 minutos por sesión",
          frecuencia: "3-4 veces por semana",
          progresion:
            "Progresar a intensidad deportiva completa con aprobación del cirujano.",
        },
      ],
      precauciones: [
        "Deportes de contacto requieren autorización del cirujano y consolidación completa",
        "Valorar retiro de material si hay prominencia sintomática de agujas",
        "Vigilar signos de artrosis postraumática a mediano plazo",
        "Proteger el codo durante actividades de riesgo durante 3 meses adicionales",
      ],
      banderasRojas: [
        "Dolor persistente sobre el olécranon con la actividad",
        "Contractura residual del codo que no mejora (déficit de extensión >20°)",
        "Síntomas progresivos de neuropatía cubital",
        "Migración tardía del material de osteosíntesis",
        "Signos de artrosis postraumática (dolor, crepitación, derrame articular)",
      ],
      criteriosAvance: [
        "Arco de movimiento funcional del codo (30-130° mínimo; ideal 0-145°)",
        "Fuerza de bíceps y tríceps >80% del lado contralateral",
        "Fuerza de prensión >80% del lado contralateral",
        "Sin dolor durante actividades funcionales (EVA <1/10)",
        "DASH score <15 puntos",
        "Paciente independiente en programa de mantenimiento",
      ],
    },
  ],
  criteriosRetornoActividad: [
    "Consolidación radiográfica completa confirmada",
    "Arco de movimiento funcional del codo (extensión/flexión 0-130° mínimo)",
    "Pronosupinación >80° en cada dirección",
    "Fuerza de bíceps y tríceps >80% del lado contralateral",
    "DASH score <15 puntos",
    "Sin dolor durante actividades funcionales y deportivas",
    "Sin síntomas de neuropatía cubital",
    "Aprobación del cirujano para retorno a actividad deportiva/laboral",
  ],
  complicacionesPotenciales: [
    "Prominencia sintomática del material (especialmente agujas de Kirschner, 20-80%)",
    "Migración de las agujas de Kirschner",
    "Neuropatía cubital (irritación o compresión del nervio cubital, 2-12%)",
    "Pérdida de extensión del codo (contractura en flexión residual)",
    "Artrosis postraumática del codo",
    "Pseudoartrosis del olécranon (raro con fijación adecuada)",
    "Osificación heterotópica periarticular",
    "Infección del sitio quirúrgico",
    "Falla del material de osteosíntesis",
    "Inestabilidad articular residual (en fracturas-luxación)",
  ],
  referencias: [
    "ref-duckworth-2012",
    "ref-mckee-2012",
    "ref-valdes-2014",
    "ref-prat-2009",
  ],
  fechaActualizacion: "2025-06-01",
  nivelEvidencia: "Moderado (series de casos grandes y revisiones sistemáticas)",
};
