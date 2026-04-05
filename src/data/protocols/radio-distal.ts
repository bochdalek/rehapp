import type { Protocol } from "@/types/protocol";

export const radioDistalPlaca: Protocol = {
  id: "radio-distal-placa",
  nombre:
    "Protocolo de Rehabilitación Post-RAFI de Fractura de Radio Distal con Placa Volar Bloqueada",
  nombreCorto: "RAFI Radio Distal",
  descripcion:
    "Protocolo de rehabilitación basado en evidencia para el manejo postquirúrgico de fracturas de radio distal tratadas mediante reducción abierta y fijación interna (RAFI) con placa volar bloqueada. Incluye progresión gradual de movilidad, fortalecimiento y retorno funcional de la muñeca y mano en 12 semanas.",
  region: "miembro-superior",
  localizacion: "muneca",
  abordajeQuirurgico: ["RAFI", "placa"],
  clasificaciones: [
    "Frykman I-VIII",
    "AO/OTA 23-A, 23-B, 23-C",
    "Fernández tipo I-V",
  ],
  indicacionesQuirurgicas: [
    "Fractura intraarticular desplazada del radio distal",
    "Pérdida de la inclinación volar >15 grados",
    "Acortamiento radial >3 mm",
    "Escalón articular >2 mm",
    "Inestabilidad tras reducción cerrada",
    "Fractura conminuta con compromiso articular",
  ],
  duracionTotal: "12 semanas",
  semanasTotal: 12,
  fases: [
    // =====================================================================
    // FASE 1: PROTECCIÓN Y CONTROL DE INFLAMACIÓN (Semanas 0-2)
    // =====================================================================
    {
      id: "radio-distal-fase-1",
      numero: 1,
      nombre: "Protección y control de inflamación",
      duracion: "Semanas 0-2",
      semanaInicio: 0,
      semanaFin: 2,
      objetivos: [
        "Control del dolor y edema postquirúrgico",
        "Protección del sitio quirúrgico y material de osteosíntesis",
        "Mantener movilidad de articulaciones adyacentes (dedos, codo, hombro)",
        "Prevenir rigidez de dedos y síndrome de hombro-mano",
        "Educación del paciente sobre elevación y cuidados de la herida",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "No aplica (miembro superior). Uso de férula volar de protección según indicación del cirujano.",
      romObjetivos: [
        {
          movimiento: "Flexión/extensión de dedos",
          rangoObjetivo: "Rango completo activo",
        },
        {
          movimiento: "Flexión/extensión de codo",
          rangoObjetivo: "0-145 grados",
        },
        {
          movimiento: "Flexión/extensión de muñeca",
          rangoObjetivo: "Inmovilizada en férula",
          restriccion: "No movilizar muñeca hasta retiro de férula",
        },
        {
          movimiento: "Pronosupinación",
          rangoObjetivo: "Inmovilizada en férula",
          restriccion: "No rotar antebrazo activamente",
        },
      ],
      ejercicios: [
        {
          id: "rd-f1-e1",
          nombre: "Movilización activa de dedos (tendon gliding)",
          descripcion:
            "Con la férula colocada, realizar secuencia de deslizamiento tendinoso: extensión completa de dedos, puño recto (flexión MCF con IFP e IFD extendidas), puño en gancho (flexión IFP e IFD con MCF extendidas), puño completo. Este ejercicio previene adherencias tendinosas y mantiene la función de la mano.",
          repeticiones: "10 repeticiones de cada posición x 3 series",
          frecuencia: "4-5 veces al día",
          precauciones: [
            "No retirar la férula",
            "Suspender si genera dolor intenso en el sitio quirúrgico",
          ],
          progresion:
            "Aumentar series a 4-5 conforme mejore la tolerancia.",
        },
        {
          id: "rd-f1-e2",
          nombre: "Elevación y crioterapia",
          descripcion:
            "Mantener la mano y muñeca elevada por encima del nivel del corazón. Aplicar hielo envuelto en tela sobre la férula en la zona dorsal de la muñeca durante 15-20 minutos. La elevación reduce el edema por gravedad y la crioterapia controla la inflamación local.",
          repeticiones: "15-20 minutos por sesión",
          frecuencia: "Cada 2-3 horas durante vigilia",
          precauciones: [
            "No aplicar hielo directamente sobre la piel",
            "Proteger la herida quirúrgica de humedad",
          ],
        },
        {
          id: "rd-f1-e3",
          nombre: "Movilización activa de codo y hombro",
          descripcion:
            "Realizar flexión y extensión completa del codo, así como movimientos pendulares de Codman del hombro (circunducciones suaves con el tronco inclinado hacia adelante). Mantener el rango de movimiento de las articulaciones proximales para prevenir el síndrome hombro-mano.",
          repeticiones: "10 repeticiones x 3 series por articulación",
          frecuencia: "3 veces al día",
          precauciones: [
            "No cargar peso con la extremidad operada",
            "Evitar movimientos bruscos del hombro",
          ],
        },
        {
          id: "rd-f1-e4",
          nombre: "Ejercicios de oposición del pulgar",
          descripcion:
            "Tocar la punta del pulgar con la punta de cada uno de los dedos de la misma mano de forma secuencial (índice, medio, anular, meñique) y regresar. Este ejercicio mantiene la destreza fina y la movilidad del pulgar dentro de la férula.",
          repeticiones: "10 ciclos completos x 3 series",
          frecuencia: "3-4 veces al día",
        },
      ],
      precauciones: [
        "No retirar la férula sin autorización del cirujano",
        "Evitar levantar objetos con la mano operada",
        "No sumergir la extremidad en agua hasta el retiro de puntos",
        "Mantener la extremidad elevada durante el reposo",
      ],
      banderasRojas: [
        "Parestesias persistentes o progresivas en territorio del nervio mediano (síndrome del túnel carpiano agudo)",
        "Edema severo de dedos con incapacidad para flexionar activamente",
        "Dolor desproporcionado al esperado, especialmente con extensión pasiva de dedos (síndrome compartimental)",
        "Cambios de coloración o temperatura en los dedos",
        "Drenaje purulento o eritema progresivo alrededor de la herida",
      ],
      criteriosAvance: [
        "Herida quirúrgica sin signos de infección",
        "Edema controlado y en disminución",
        "Movilidad activa completa de dedos sin dolor significativo",
        "Radiografías de control satisfactorias (2 semanas)",
      ],
    },
    // =====================================================================
    // FASE 2: MOVILIDAD TEMPRANA (Semanas 2-6)
    // =====================================================================
    {
      id: "radio-distal-fase-2",
      numero: 2,
      nombre: "Movilidad temprana protegida",
      duracion: "Semanas 2-6",
      semanaInicio: 2,
      semanaFin: 6,
      objetivos: [
        "Iniciar movilidad activa y activa-asistida de muñeca",
        "Recuperar pronosupinación del antebrazo",
        "Continuar reducción del edema residual",
        "Mejorar deslizamiento tendinoso y prevenir adherencias",
        "Restaurar la función básica de prensión",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "No aplica (miembro superior). Uso de férula removible entre sesiones de ejercicio según indicación del cirujano.",
      romObjetivos: [
        {
          movimiento: "Flexión de muñeca",
          rangoObjetivo: "30-40 grados",
        },
        {
          movimiento: "Extensión de muñeca",
          rangoObjetivo: "30-40 grados",
        },
        {
          movimiento: "Desviación radial",
          rangoObjetivo: "10-15 grados",
        },
        {
          movimiento: "Desviación cubital",
          rangoObjetivo: "15-20 grados",
        },
        {
          movimiento: "Pronación",
          rangoObjetivo: "60-70 grados",
        },
        {
          movimiento: "Supinación",
          rangoObjetivo: "60-70 grados",
        },
      ],
      ejercicios: [
        {
          id: "rd-f2-e1",
          nombre: "Flexión y extensión activa de muñeca",
          descripcion:
            "Con el antebrazo apoyado sobre una mesa y la mano colgando por el borde, realizar flexión y extensión activa de la muñeca de forma lenta y controlada. El movimiento debe ser libre de dolor. Iniciar con rango parcial y progresar según tolerancia.",
          repeticiones: "10-15 repeticiones x 3 series",
          frecuencia: "4-5 veces al día",
          precauciones: [
            "No forzar el rango de movimiento",
            "Detenerse si aparece dolor agudo",
          ],
          progresion:
            "Progresar de rango parcial a rango completo conforme mejore la movilidad.",
        },
        {
          id: "rd-f2-e2",
          nombre: "Pronosupinación activa del antebrazo",
          descripcion:
            "Con el codo flexionado a 90 grados y pegado al costado del cuerpo, girar el antebrazo llevando la palma hacia arriba (supinación) y hacia abajo (pronación). Puede realizarse sosteniendo un lápiz o bastón ligero para facilitar el control del movimiento.",
          repeticiones: "10-15 repeticiones x 3 series",
          frecuencia: "4-5 veces al día",
          precauciones: [
            "No forzar la supinación si hay dolor en la estiloides cubital",
          ],
          progresion:
            "Aumentar rango progresivamente hasta alcanzar pronosupinación completa.",
        },
        {
          id: "rd-f2-e3",
          nombre: "Desviación radial y cubital activa",
          descripcion:
            "Con el antebrazo en pronación apoyado sobre una mesa, deslizar la mano hacia el lado radial (desviación radial) y hacia el lado cubital (desviación cubital). Mantener cada posición 2-3 segundos. Este ejercicio restaura la movilidad lateral de la muñeca necesaria para actividades funcionales.",
          repeticiones: "10 repeticiones hacia cada lado x 3 series",
          frecuencia: "3-4 veces al día",
        },
        {
          id: "rd-f2-e4",
          nombre: "Ejercicios de prensión suave (putty o esponja)",
          descripcion:
            "Apretar una esponja suave o masilla terapéutica (putty) de resistencia mínima con toda la mano, manteniendo la contracción 3-5 segundos. Alternar con prensión de pinza (pulgar contra cada dedo). Este ejercicio inicia el fortalecimiento funcional de la mano de forma segura.",
          repeticiones: "10 repeticiones x 3 series",
          frecuencia: "3 veces al día",
          precauciones: [
            "Usar resistencia mínima",
            "No apretar con fuerza máxima",
          ],
          progresion:
            "Progresar resistencia de la masilla (blanda → media) según tolerancia.",
        },
      ],
      precauciones: [
        "No cargar objetos pesados (>0.5 kg) con la mano operada",
        "Usar la férula entre sesiones de ejercicio según indicación médica",
        "Evitar actividades de impacto o torsión de la muñeca",
        "No realizar movilizaciones pasivas forzadas",
      ],
      banderasRojas: [
        "Pérdida súbita de rango de movimiento previamente alcanzado",
        "Dolor creciente no proporcional a la actividad",
        "Parestesias nuevas o progresivas en territorio del mediano",
        "Inestabilidad palpable o crepitación anormal en el foco de fractura",
        "Signos de distrofia simpática refleja (dolor quemante, cambios tróficos, edema desproporcionado)",
      ],
      criteriosAvance: [
        "Flexión/extensión de muñeca >30 grados en cada dirección",
        "Pronosupinación >60 grados en cada dirección",
        "Dolor EVA <3/10 durante ejercicios activos",
        "Radiografías con consolidación ósea progresiva adecuada",
        "Edema mínimo residual",
      ],
    },
    // =====================================================================
    // FASE 3: FORTALECIMIENTO PROGRESIVO (Semanas 6-10)
    // =====================================================================
    {
      id: "radio-distal-fase-3",
      numero: 3,
      nombre: "Fortalecimiento progresivo",
      duracion: "Semanas 6-10",
      semanaInicio: 6,
      semanaFin: 10,
      objetivos: [
        "Recuperar rango de movimiento completo de muñeca",
        "Iniciar fortalecimiento muscular progresivo",
        "Mejorar fuerza de prensión y pinza",
        "Restaurar control neuromuscular y propiocepción de la muñeca",
        "Reintegrar actividades funcionales básicas",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "No aplica (miembro superior). Se permite carga ligera funcional progresiva según tolerancia.",
      romObjetivos: [
        {
          movimiento: "Flexión de muñeca",
          rangoObjetivo: "60-70 grados",
        },
        {
          movimiento: "Extensión de muñeca",
          rangoObjetivo: "60-70 grados",
        },
        {
          movimiento: "Pronación",
          rangoObjetivo: "75-80 grados",
        },
        {
          movimiento: "Supinación",
          rangoObjetivo: "75-80 grados",
        },
        {
          movimiento: "Desviación radial",
          rangoObjetivo: "15-20 grados",
        },
        {
          movimiento: "Desviación cubital",
          rangoObjetivo: "25-30 grados",
        },
      ],
      ejercicios: [
        {
          id: "rd-f3-e1",
          nombre: "Fortalecimiento de flexores y extensores de muñeca con banda elástica",
          descripcion:
            "Con el antebrazo apoyado en una mesa y la mano colgando por el borde, realizar flexión y extensión de muñeca contra la resistencia de una banda elástica. Iniciar con banda de resistencia ligera y progresar a media. Realizar el movimiento de forma lenta y controlada, 3 segundos concéntrico y 3 segundos excéntrico.",
          repeticiones: "12-15 repeticiones x 3 series",
          frecuencia: "1 vez al día",
          precauciones: [
            "No usar resistencia excesiva que genere dolor",
            "Mantener el antebrazo estable durante el ejercicio",
          ],
          progresion:
            "Progresar de banda ligera a media y luego a mancuerna de 0.5-1 kg.",
        },
        {
          id: "rd-f3-e2",
          nombre: "Fortalecimiento de prensión con dinamómetro",
          descripcion:
            "Utilizar un dinamómetro de mano o dispositivo de prensión ajustable. Realizar prensiones máximas sostenidas de 5 segundos. Registrar la fuerza para documentar la progresión. La fuerza de prensión es un indicador objetivo de recuperación funcional.",
          repeticiones: "5 repeticiones máximas x 3 series",
          frecuencia: "1 vez al día",
          precauciones: [
            "Comparar con mano contralateral (objetivo: >50% de la mano sana)",
          ],
          progresion:
            "Objetivo: alcanzar 50-60% de la fuerza de la mano contralateral al final de esta fase.",
        },
        {
          id: "rd-f3-e3",
          nombre: "Propiocepción de muñeca con pelota",
          descripcion:
            "Con el antebrazo apoyado y la muñeca libre, rodar una pelota pequeña sobre una superficie en movimientos circulares controlados. También realizar ejercicios de estabilización con apoyo sobre una superficie inestable (foam). Estos ejercicios restauran el control neuromuscular articular.",
          repeticiones: "2 minutos en cada dirección x 3 series",
          frecuencia: "2 veces al día",
        },
        {
          id: "rd-f3-e4",
          nombre: "Ejercicios de destreza fina y funcionalidad",
          descripcion:
            "Realizar actividades funcionales progresivas: girar llaves, abrir frascos, escribir, usar cubiertos, abotonarse la ropa. Estas tareas integran fuerza, movilidad y coordinación en contextos funcionales reales. Documentar qué actividades puede realizar sin dolor.",
          repeticiones: "15-20 minutos de práctica",
          frecuencia: "2-3 veces al día",
          progresion:
            "Aumentar complejidad de las tareas progresivamente.",
        },
      ],
      precauciones: [
        "No realizar actividades de impacto (golpear, martillar)",
        "Evitar cargar objetos pesados (>2-3 kg) hasta que haya consolidación completa",
        "No realizar deportes de contacto o con riesgo de caídas",
        "Progresar resistencia solo si no hay dolor durante ni después del ejercicio",
      ],
      banderasRojas: [
        "Dolor persistente que no cede con reposo",
        "Pérdida de rango de movimiento previamente alcanzado",
        "Debilidad progresiva o incapacidad para progresar en fuerza",
        "Parestesias recurrentes o síntomas de síndrome del túnel carpiano",
        "Deformidad nueva o crepitación en el sitio quirúrgico",
      ],
      criteriosAvance: [
        "Flexión/extensión de muñeca >60 grados en cada dirección",
        "Pronosupinación >75 grados en cada dirección",
        "Fuerza de prensión >50% del lado contralateral",
        "Dolor EVA <2/10 durante actividades funcionales",
        "Consolidación radiográfica adecuada",
      ],
    },
    // =====================================================================
    // FASE 4: RETORNO FUNCIONAL (Semanas 10-12)
    // =====================================================================
    {
      id: "radio-distal-fase-4",
      numero: 4,
      nombre: "Retorno funcional y alta",
      duracion: "Semanas 10-12",
      semanaInicio: 10,
      semanaFin: 12,
      objetivos: [
        "Alcanzar rango de movimiento funcional completo",
        "Recuperar fuerza de prensión >80% del lado contralateral",
        "Retorno a actividades de la vida diaria sin restricciones",
        "Inicio gradual de actividades deportivas según corresponda",
        "Independencia completa en programa de ejercicios domiciliario",
      ],
      estadoCarga: "no-aplica",
      cargaDetalle:
        "No aplica (miembro superior). Se permite actividad funcional sin restricciones según tolerancia.",
      romObjetivos: [
        {
          movimiento: "Flexión de muñeca",
          rangoObjetivo: "70-80 grados",
        },
        {
          movimiento: "Extensión de muñeca",
          rangoObjetivo: "70-80 grados",
        },
        {
          movimiento: "Pronación",
          rangoObjetivo: "80-90 grados",
        },
        {
          movimiento: "Supinación",
          rangoObjetivo: "80-90 grados",
        },
        {
          movimiento: "Desviación radial",
          rangoObjetivo: "20 grados",
        },
        {
          movimiento: "Desviación cubital",
          rangoObjetivo: "30-35 grados",
        },
      ],
      ejercicios: [
        {
          id: "rd-f4-e1",
          nombre: "Fortalecimiento con mancuernas",
          descripcion:
            "Realizar flexión, extensión y desviaciones de muñeca con mancuernas de 1-3 kg. Incluir ejercicios de pronosupinación resistida con martillo o mancuerna. Realizar 3 segundos concéntricos y 4 segundos excéntricos para maximizar la ganancia de fuerza.",
          repeticiones: "10-12 repeticiones x 3 series",
          frecuencia: "1 vez al día, 5 días por semana",
          progresion:
            "Aumentar peso progresivamente (0.5 kg por semana según tolerancia).",
        },
        {
          id: "rd-f4-e2",
          nombre: "Ejercicios pliométricos suaves de muñeca",
          descripcion:
            "Lanzar y atrapar una pelota de tenis o pelota medicinal ligera (0.5-1 kg) contra una pared. Iniciar con lanzamientos cortos y progresar distancia e intensidad. Este ejercicio restaura la capacidad reactiva y de absorción de impacto de la muñeca.",
          repeticiones: "15-20 lanzamientos x 3 series",
          frecuencia: "1 vez al día",
          precauciones: [
            "Iniciar con pelota ligera",
            "No realizar si genera dolor",
          ],
        },
        {
          id: "rd-f4-e3",
          nombre: "Entrenamiento funcional específico por actividad",
          descripcion:
            "Simulación de actividades específicas del paciente: gestos deportivos (golf, tenis, natación), actividades laborales (uso de teclado, herramientas manuales), o actividades recreativas. Adaptar el entrenamiento a las demandas funcionales individuales del paciente.",
          repeticiones: "20-30 minutos por sesión",
          frecuencia: "1 vez al día",
          progresion:
            "Progresar intensidad y duración hasta alcanzar el nivel de actividad previo a la lesión.",
        },
      ],
      precauciones: [
        "Progresar deportes de contacto solo con autorización del cirujano",
        "Usar protección (muñequera) durante actividades de riesgo durante 2-3 meses adicionales",
        "Monitorear síntomas residuales y ajustar actividad según necesidad",
      ],
      banderasRojas: [
        "Dolor que limita las actividades de la vida diaria",
        "Fuerza de prensión <50% del lado contralateral al final del protocolo",
        "Rango de movimiento funcional insuficiente (<50% del normal)",
        "Síntomas persistentes de neuropatía compresiva",
        "Signos radiográficos de pérdida de reducción o falla del material",
      ],
      criteriosAvance: [
        "Rango de movimiento funcional alcanzado (flexión/extensión >60 grados)",
        "Fuerza de prensión >80% del lado contralateral",
        "DASH score <15 puntos",
        "Dolor EVA <1/10 en actividades cotidianas",
        "Paciente independiente en programa de ejercicios domiciliario",
      ],
    },
  ],
  criteriosRetornoActividad: [
    "Consolidación radiográfica completa confirmada",
    "Rango de movimiento funcional de muñeca (flexión/extensión >60° cada dirección)",
    "Fuerza de prensión >80% del lado contralateral",
    "Pronosupinación >80° en cada dirección",
    "DASH score <15 puntos",
    "Sin dolor durante actividades funcionales (EVA <2/10)",
    "Capacidad de realizar actividades de la vida diaria sin limitación",
    "Aprobación del cirujano para retorno a actividad deportiva/laboral",
  ],
  complicacionesPotenciales: [
    "Rigidez articular de muñeca y dedos",
    "Síndrome del túnel carpiano (compresión del nervio mediano por la placa o edema)",
    "Rotura o irritación de tendones flexores por la placa volar",
    "Síndrome de dolor regional complejo (distrofia simpática refleja)",
    "Pérdida de reducción o falla del material de osteosíntesis",
    "Consolidación viciosa (malunión)",
    "Artrosis postraumática radiocarpiana",
    "Inestabilidad de la articulación radiocubital distal",
    "Conflicto cubital (impactación cubital)",
  ],
  referencias: [
    "ref-handoll-2015-dr",
    "ref-valdes-2014",
    "ref-prat-2009",
    "ref-thewlis-2015",
  ],
  fechaActualizacion: "2025-06-01",
  nivelEvidencia: "Moderado (basado en revisiones sistemáticas y guías clínicas)",
};
