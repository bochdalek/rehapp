/**
 * Evidencia de cada protocolo, revisada en PubMed. Solo la ve el equipo médico.
 * Cada referencia se comprobó contra los metadatos de PubMed (PMID, título, autores, revista, año).
 */

export type EvidenceLevel = "alta" | "moderada" | "baja" | "muy baja";

export interface Reference {
  pmid: string;
  authors: string;
  title: string;
  journal: string;
  year: number;
  doi?: string;
  /** Qué apoya del protocolo */
  supports: string;
}

export interface Evidence {
  level: EvidenceLevel;
  summary: string;
  /** Puntos sin evidencia sólida, a criterio del cirujano */
  gaps: string[];
  refs: Reference[];
}

export const EVIDENCE: Record<string, Evidence> = {
  "protesis-rodilla": {
    level: "moderada",
    summary:
      "La carga inmediata según tolerancia y la movilización en las primeras 24 h tras la prótesis total de rodilla están respaldadas: reducen la estancia sin aumentar los eventos adversos. La CPM no aporta beneficios clínicamente importantes (Cochrane, calidad moderada), y un programa domiciliario de ejercicios da resultados a corto plazo similares a la fisioterapia supervisada ambulatoria. No se necesita ortesis. El tiempo de frenada se normaliza hacia las 2 semanas (rodilla izquierda) y las 4 semanas (rodilla derecha).",
    gaps: [
      "Evitar la almohada bajo la rodilla: es lógico para prevenir la contractura en flexión, pero no hay ensayos que lo evalúen.",
      "Evitar correr y saltar por el desgaste de la prótesis: recomendación de consenso, sin ensayos.",
      "Semanas exactas de las fases y objetivos de 90° y 100-110°: convenciones razonables, no derivan de ensayos.",
      "Conducir antes de la semana 6: el tiempo de frenada lo permitiría (2 semanas izquierda, 4 derecha), pero depende de más factores.",
    ],
    refs: [
      {
        pmid: "24500904",
        authors: "Harvey LA, Brosseau L, Herbert RD.",
        title: "Continuous passive motion following total knee arthroplasty in people with arthritis.",
        journal: "Cochrane Database Syst Rev",
        year: 2014,
        doi: "10.1002/14651858.CD004260.pub3",
        supports:
          "La CPM no tiene efectos clínicamente importantes en flexión activa, dolor, función ni calidad de vida que justifiquen su uso rutinario.",
      },
      {
        pmid: "25452634",
        authors: "Guerra ML, Singh PJ, Taylor NF.",
        title:
          "Early mobilization of patients who have had a hip or knee joint replacement reduces length of stay in hospital: a systematic review.",
        journal: "Clin Rehabil",
        year: 2015,
        doi: "10.1177/0269215514558641",
        supports:
          "Sentarse en las primeras 24 h y caminar en las primeras 48 h reduce la estancia unos 1,8 días sin aumentar eventos adversos.",
      },
      {
        pmid: "27401004",
        authors: "Florez-García M, García-Pérez F, Curbelo R, et al.",
        title:
          "Efficacy and safety of home-based exercises versus individualized supervised outpatient physical therapy programs after total knee arthroplasty: a systematic review and meta-analysis.",
        journal: "Knee Surg Sports Traumatol Arthrosc",
        year: 2017,
        doi: "10.1007/s00167-016-4231-x",
        supports: "Los ejercicios domiciliarios no son inferiores a la fisioterapia supervisada ambulatoria a corto plazo.",
      },
      {
        pmid: "28927563",
        authors: "Hartman J, Thornley P, Oreskovich S, et al.",
        title: "Braking Time Following Total Knee Arthroplasty: A Systematic Review.",
        journal: "J Arthroplasty",
        year: 2018,
        doi: "10.1016/j.arth.2017.08.012",
        supports: "El tiempo de frenada se normaliza a las 4 semanas tras prótesis derecha y a las 2 tras la izquierda.",
      },
      {
        pmid: "34600595",
        authors: "Nadeem S, Mundi R, Chaudhry H.",
        title: "Surgery-related predictors of kneeling ability following total knee arthroplasty: a systematic review and meta-analysis.",
        journal: "Knee Surg Relat Res",
        year: 2021,
        doi: "10.1186/s43019-021-00117-z",
        supports: "Menos de la mitad de los pacientes puede arrodillarse tras la prótesis (36,8% a ≥1 año, 47,6% a ≥3 años).",
      },
    ],
  },
  cadera: {
    level: "moderada",
    summary:
      "Tras la cirugía de fractura de cadera, movilizarse pronto (día 0-1) se asocia a menos mortalidad y complicaciones a 30 días. El entrenamiento de marcha, equilibrio y tareas funcionales mejora la movilidad en el hospital y tras el alta (Cochrane). Restringir la carga en ancianos reduce la movilidad sin reducir de verdad la carga, lo que respalda la carga completa según tolerancia. Las precauciones de cadera tras hemiartroplasia no redujeron luxaciones en un ensayo aleatorizado por grupos (abordaje lateral), y en prótesis total su evidencia es muy baja.",
    gaps: [
      "Momento óptimo para pasar del andador al bastón: no hay ensayos, depende del paciente.",
      "Precauciones tras hemiartroplasia o prótesis total con abordaje posterior: evidencia de baja calidad, decisión del cirujano.",
      "Carga completa inmediata en patrones inestables (subtrocantéreas, conminutas): solo series retrospectivas.",
      "Fisioterapia supervisada frente a programa domiciliario tras el alta: no hay comparación concluyente.",
    ],
    refs: [
      {
        pmid: "36070134",
        authors: "Fairhall NJ, Dyer SM, Mak JC, et al.",
        title: "Interventions for improving mobility after hip fracture surgery in adults.",
        journal: "Cochrane Database Syst Rev",
        year: 2022,
        doi: "10.1002/14651858.CD001704.pub5",
        supports:
          "El entrenamiento de marcha, equilibrio y tareas funcionales mejora la movilidad en el hospital y tras el alta (40 ensayos).",
      },
      {
        pmid: "38353351",
        authors: "Agarwal N, Feng T, Maclullich A, et al.",
        title:
          "Early mobilisation after hip fracture surgery is associated with improved patient outcomes: A systematic review and meta-analysis.",
        journal: "Musculoskeletal Care",
        year: 2024,
        doi: "10.1002/msc.1863",
        supports: "La movilización precoz se asocia a menor mortalidad y menos complicaciones a 30 días (datos observacionales).",
      },
      {
        pmid: "31053870",
        authors: "Pfeufer D, Zeller A, Mehaffey S, et al.",
        title: "Weight-bearing restrictions reduce postoperative mobility in elderly hip fracture patients.",
        journal: "Arch Orthop Trauma Surg",
        year: 2019,
        doi: "10.1007/s00402-019-03193-9",
        supports: "La carga parcial reduce la movilidad sin cambiar la carga real sobre la pierna (estudio pequeño).",
      },
      {
        pmid: "31122743",
        authors: "Jobory A, Rolfson O, Åkesson KE, et al.",
        title:
          "Hip precautions not meaningful after hemiarthroplasty due to hip fracture. Cluster-randomized study of 394 patients operated with direct anterolateral approach.",
        journal: "Injury",
        year: 2019,
        doi: "10.1016/j.injury.2019.05.002",
        supports: "Sin precauciones de cadera no hubo más luxaciones tras hemiartroplasia con abordaje lateral.",
      },
      {
        pmid: "27374001",
        authors: "Smith TO, Jepson P, Beswick A, et al.",
        title:
          "Assistive devices, hip precautions, environmental modifications and training to prevent dislocation and improve function after hip arthroplasty.",
        journal: "Cochrane Database Syst Rev",
        year: 2016,
        doi: "10.1002/14651858.CD010815.pub2",
        supports: "La evidencia de que las precauciones de cadera prevengan la luxación tras prótesis total es muy baja.",
      },
    ],
  },
  "pelvis-acetabulo": {
    level: "baja",
    summary:
      "No hay ensayos aleatorizados. Las revisiones sistemáticas, basadas sobre todo en series retrospectivas, describen como protocolo más habitual tras fijar el acetábulo: isométricos desde el día 1 y carga parcial con muletas de la semana 1 a la 12, con carga completa hacia los 3 meses. La carga precoz no parece aumentar la pérdida de reducción en pacientes seleccionados con fijación estable, pero la evidencia es baja.",
    gaps: [
      "No hay ensayos de carga precoz frente a diferida; en patrones complejos, mala calidad ósea o fijación dudosa, la descarga sigue siendo decisión del cirujano (plantilla «Descarga 6 sem»).",
      "Fracturas del anillo pélvico con fijación posterior: evidencia aún más escasa.",
      "Acetábulo en ancianos tratado con prótesis aguda: tiene su propio protocolo, no cubierto aquí.",
    ],
    refs: [
      {
        pmid: "38930099",
        authors: "Giordano V, Pires RE, Faria LPG, et al.",
        title:
          "Doctor, When Should I Start Walking? Revisiting Postoperative Rehabilitation and Weight-Bearing Protocols in Operatively Treated Acetabular Fractures: A Systematic Review and Meta-Analysis.",
        journal: "J Clin Med",
        year: 2024,
        doi: "10.3390/jcm13123570",
        supports:
          "Protocolo más habitual: isometría desde el día 1, carga parcial de la semana 1 a la 12 y completa hacia los 3 meses (22 estudios).",
      },
      {
        pmid: "40905923",
        authors: "Lommerse MI, Mennen AHM, Bloemers FW, et al.",
        title: "Early weight-bearing after acetabular fractures in the older patient: a systematic review.",
        journal: "EFORT Open Rev",
        year: 2025,
        doi: "10.1530/EOR-2024-0191",
        supports: "En mayores, la carga precoz podría ser una alternativa tras la fijación (evidencia limitada).",
      },
      {
        pmid: "42724229",
        authors: "Junaidi MA, Suskhan RF, Iskandar WW.",
        title:
          "Effectiveness of early weight-bearing rehabilitation protocols on outcomes after surgical fixation of pelvic and acetabular fractures: A systematic review.",
        journal: "Narra J",
        year: 2026,
        doi: "10.52225/narra.v6i2.3122",
        supports: "El fallo de la fijación fue raro con carga precoz en pacientes seleccionados, pero no se recomienda de forma rutinaria.",
      },
      {
        pmid: "28481386",
        authors: "Heare A, Kramer N, Salib C, et al.",
        title: "Early Versus Late Weight-Bearing Protocols for Surgically Managed Posterior Wall Acetabular Fractures.",
        journal: "Orthopedics",
        year: 2017,
        doi: "10.3928/01477447-20170503-02",
        supports: "En pared posterior, la carga completa a las 12 semanas o antes no empeoró resultados ni complicaciones.",
      },
    ],
  },
  "femur-diafisis": {
    level: "baja",
    summary:
      "No hay ensayos aleatorizados en adultos. Series retrospectivas grandes tras clavo endomedular muestran que la carga inmediata sin restricción no aumenta la pseudoartrosis ni el fallo del implante, y retrasar la carga se ha asociado de forma independiente a pseudoartrosis. La carga según tolerancia desde el primer día es un punto de partida razonable; puede restringirse en fracturas conminutas, hueso osteoporótico o montaje inestable.",
    gaps: [
      "Sin ensayos aleatorizados: toda la evidencia es retrospectiva (nivel III).",
      "Fracturas conminutas o segmentarias, hueso osteoporótico y clavos finos: datos insuficientes; los tornillos de bloqueo fallaron más en mayores con osteoporosis.",
      "No hay evidencia sobre cuándo conducir ni sobre la progresión al deporte.",
    ],
    refs: [
      {
        pmid: "35021030",
        authors: "Deliberato D, Myers DM, Schnee B, et al.",
        title:
          "Weight Bearing as Tolerated After Intramedullary Nailing of the Femur: A Retrospective Analysis of Clinical and Radiographic Outcomes.",
        journal: "Orthopedics",
        year: 2022,
        doi: "10.3928/01477447-20220105-10",
        supports: "Sin diferencias en consolidación ni fallo del implante con carga inmediata frente a parcial o descarga (341 fracturas).",
      },
      {
        pmid: "41454330",
        authors: "Xu M, Chen Y, Zhao L, et al.",
        title: "Risk factors and a predictive nomogram for nonunion following intramedullary nailing of femoral shaft fractures.",
        journal: "BMC Musculoskelet Disord",
        year: 2025,
        doi: "10.1186/s12891-025-09425-x",
        supports: "La carga diferida es un predictor independiente de pseudoartrosis tras el clavo (OR 4,67).",
      },
      {
        pmid: "33563415",
        authors: "Yoon YC, Song HK, Han JS, Lee KC.",
        title:
          "Antegrade nailing in femoral shaft fracture patients - comparison of outcomes of isolated fractures, multiple fractures and severely injured patients.",
        journal: "Injury",
        year: 2021,
        doi: "10.1016/j.injury.2021.01.044",
        supports: "La consolidación no cambió según el momento de la carga completa.",
      },
    ],
  },
  "femur-distal": {
    level: "baja",
    summary:
      "Dos metaanálisis de 2024 (sobre todo estudios retrospectivos en mayores, con placa o clavo retrógrado) no encuentran más revisiones ni complicaciones con la carga precoz. Un análisis de un ensayo aleatorizado en mayores de 65 años mostró que 8 semanas de carga parcial empeoran la marcha incluso al año, y una serie multicéntrica no asoció la carga prescrita con mortalidad ni reintervenciones. Seis semanas de descarga total por defecto no tienen respaldo; se mantiene carga parcial 6 semanas como protección intermedia.",
    gaps: [
      "Casi toda la evidencia es de mayores y retrospectiva; faltan datos en jóvenes con fracturas articulares de alta energía (AO 33C), en los que puede preferirse la plantilla «Descarga 6 sem».",
      "No hay comparación directa entre carga parcial y según tolerancia en adultos jóvenes.",
      "No hay evidencia sobre los objetivos de flexión por semana.",
    ],
    refs: [
      {
        pmid: "39465540",
        authors: "Aebischer AS, Gouk CJC, Steer R.",
        title: "Early weight-bearing following distal femur fracture fixation - a systematic review and meta-analysis.",
        journal: "ANZ J Surg",
        year: 2024,
        doi: "10.1111/ans.19288",
        supports: "La carga precoz no aumenta revisiones ni complicaciones (10 estudios).",
      },
      {
        pmid: "38777887",
        authors: "Wardle B, Lynch JT, Staniforth T, et al.",
        title: "Weightbearing versus non-weight bearing in geriatric distal femoral fractures: a systematic review and meta-analysis.",
        journal: "Eur J Trauma Emerg Surg",
        year: 2024,
        doi: "10.1007/s00068-024-02550-7",
        supports: "En mayores, sin diferencias en pseudoartrosis, infección ni complicaciones del implante (16 estudios).",
      },
      {
        pmid: "37842343",
        authors: "Paulsson M, Ekholm C, Rolfson O, et al.",
        title:
          "Temporary Partial Weight-Bearing Restriction in Elderly Patients Treated With a Plate Fixation After a Distal Femur Fracture had a Negative Long-Term Impact on Gait Recovery.",
        journal: "Geriatr Orthop Surg Rehabil",
        year: 2023,
        doi: "10.1177/21514593231184945",
        supports: "Ensayo aleatorizado: 8 semanas de carga parcial dejan peor marcha que persiste al año.",
      },
      {
        pmid: "41505718",
        authors: "Haller JM, Lee C, Brodke D, et al.",
        title: "Postoperative Weight-bearing Status Is Not Associated With Patient Mortality After Geriatric Distal Femur Fracture.",
        journal: "J Am Acad Orthop Surg",
        year: 2026,
        doi: "10.5435/JAAOS-D-25-00586",
        supports: "La carga prescrita no se asocia con mortalidad, infección profunda ni cirugía por pseudoartrosis (404 pacientes).",
      },
    ],
  },
  rotula: {
    level: "muy baja",
    summary:
      "La revisión Cochrane solo compara técnicas quirúrgicas; no hay ensayos sobre el tratamiento postoperatorio (ortesis, movilidad o carga). Series pequeñas con placa dorsal y movilidad inmediata, o con cerclaje y carga inmediata en mayores, no muestran más fallos. Cargar en extensión con ortesis y flexión progresiva es razonable y depende de la fijación.",
    gaps: [
      "No hay ensayos sobre ortesis frente a movilidad libre ni sobre su duración.",
      "Los límites de flexión (30-60° al principio, 90° hacia la semana 6) son práctica habitual, no evidencia; con placas se ha usado movilidad inmediata.",
      "Fracturas del polo inferior y conminutas: sin datos para pautas distintas.",
    ],
    refs: [
      {
        pmid: "33625743",
        authors: "Sayum Filho J, Lenza M, Tamaoki MJ, et al.",
        title: "Interventions for treating fractures of the patella in adults.",
        journal: "Cochrane Database Syst Rev",
        year: 2021,
        doi: "10.1002/14651858.CD009651.pub3",
        supports: "Solo hay ensayos de muy baja calidad sobre técnicas quirúrgicas; ninguno sobre rehabilitación postoperatoria.",
      },
      {
        pmid: "38527085",
        authors: "Phen HM, Barth KA, Bilodeau RE, et al.",
        title:
          "Dorsal Hook Plating of Patella Fractures With Immediate Range of Motion Results in Reliable Fixation, Low Implant Removal Rates, and Satisfactory Clinical Outcomes.",
        journal: "J Orthop Trauma",
        year: 2024,
        doi: "10.1097/BOT.0000000000002809",
        supports: "Con placa dorsal, movilidad inmediata con 96,7% de consolidación (nivel IV).",
      },
      {
        pmid: "41209984",
        authors: "Zainy A, Sadik H, Doltu L, et al.",
        title: "Influence of Weight-Bearing Status After Tension Band Wiring of Patellar Fractures in Elderly Patients.",
        journal: "Cureus",
        year: 2025,
        doi: "10.7759/cureus.94090",
        supports: "En mayores con cerclaje, la carga inmediata no aumentó complicaciones (24 pacientes).",
      },
    ],
  },
  "meseta-tibial": {
    level: "baja",
    summary:
      "Ensayos aleatorizados pequeños, de un centro, en Schatzker I-IV con placa: la carga inmediata frente a 6 semanas de descarga mejora el resultado clínico (dolor, marcha, movilidad) sin diferencias radiológicas ni más hundimiento articular. Revisiones y un metaanálisis apuntan en la misma dirección con estudios heterogéneos. No hay datos sólidos en bicondilares (V-VI); se mantiene carga parcial 6 semanas como protección intermedia.",
    gaps: [
      "Schatzker V-VI, conminución metafisaria, osteoporosis o fijación precaria: sin ensayos; puede usarse la plantilla «Descarga 6 sem · parcial hasta 10».",
      "Los ensayos son pequeños (unos 45 pacientes), de un centro y con riesgo de sesgo.",
      "No hay evidencia sobre los objetivos de flexión por semana.",
    ],
    refs: [
      {
        pmid: "39964437",
        authors: "Ibrahim MA, Moustafa MMA, Brismée JM, et al.",
        title:
          "Immediate weight-bearing after tibial plateau fractures internal fixation results in better clinical outcomes with similar radiological outcomes: a randomized clinical trial.",
        journal: "Int Orthop",
        year: 2025,
        doi: "10.1007/s00264-025-06443-1",
        supports:
          "Ensayo aleatorizado (Schatzker I-IV): la carga inmediata mejora la función a 6 meses sin diferencias en TC ni radiografía.",
      },
      {
        pmid: "38693286",
        authors: "Kadam A, Wani S, Gadekar G, et al.",
        title:
          "Effect of early weight bearing program with conventional physiotherapy on functional outcomes in surgically treated proximal tibia fracture: a pilot randomized controlled trial.",
        journal: "Arch Orthop Trauma Surg",
        year: 2024,
        doi: "10.1007/s00402-024-05347-w",
        supports: "Ensayo piloto: la carga precoz mejora dolor, movilidad y función a 12 semanas sin efectos adversos.",
      },
      {
        pmid: "35549974",
        authors: "Canton G, Sborgia A, Dussi M, et al.",
        title: "Early weight bearing in tibial plateau fractures treated with ORIF: a systematic review of literature.",
        journal: "J Orthop Surg Res",
        year: 2022,
        doi: "10.1186/s13018-022-03156-8",
        supports: "La carga precoz es segura en casos seleccionados tras placa (9 estudios).",
      },
      {
        pmid: "41281038",
        authors: "Elsenosy AM, Yousef AS, Hassan E, et al.",
        title: "Early Versus Delayed Weight-Bearing Following Tibial Plateau Fracture Surgery: A Systematic Review and Meta-Analysis.",
        journal: "Cureus",
        year: 2025,
        doi: "10.7759/cureus.95185",
        supports: "Sin diferencias en dolor, consolidación ni pseudoartrosis entre carga precoz y diferida (940 pacientes).",
      },
    ],
  },
  clavicula: {
    level: "baja",
    summary:
      "No hay ensayos aleatorizados de pautas de rehabilitación tras la osteosíntesis de clavícula. Cohortes y casos-control muestran que la movilización inmediata sin inmovilización y la carga a tolerancia (incluso apoyándose en muletas o andador) no aumentan el fallo del material ni la pseudoartrosis con placa. El cabestrillo corto y la restricción de carga hasta unas 6 semanas son prudentes, probablemente más conservadores de lo necesario con montajes rígidos. En el ensayo COTS la consolidación radiográfica tras placa tardó de media 16 semanas.",
    gaps: [
      "No hay ensayos de rehabilitación precoz frente a diferida tras la osteosíntesis.",
      "Carga precoz: solo cohortes retrospectivas con placa; sin datos con clavo intramedular ni placa gancho del tercio lateral (que tiene sus propias restricciones).",
      "Limitar la elevación por encima del hombro las primeras semanas es práctica habitual sin evidencia comparativa.",
    ],
    refs: [
      {
        pmid: "17200303",
        authors: "Canadian Orthopaedic Trauma Society.",
        title:
          "Nonoperative treatment compared with plate fixation of displaced midshaft clavicular fractures. A multicenter, randomized clinical trial.",
        journal: "J Bone Joint Surg Am",
        year: 2007,
        doi: "10.2106/JBJS.F.00020",
        supports: "Con placa, la consolidación radiográfica media fue de 16,4 semanas.",
      },
      {
        pmid: "28552824",
        authors: "Lädermann A, Abrassart S, Denard PJ, et al.",
        title:
          "Functional recovery following early mobilization after middle third clavicle osteosynthesis for acute fractures or nonunion: A case-control study.",
        journal: "Orthop Traumatol Surg Res",
        year: 2017,
        doi: "10.1016/j.otsr.2017.03.021",
        supports:
          "Tras placa, la movilización inmediata sin inmovilización fue segura y recuperó el movimiento completo hacia los 17 días.",
      },
      {
        pmid: "38251900",
        authors: "Frane N, Watzig B, Vohra A, et al.",
        title:
          "Immediate Weight-bearing Through Walker or Crutches After Surgical Fixation of Clavicle Fractures in Patients With Lower Extremity Fractures: A Retrospective Cohort Study.",
        journal: "J Orthop Trauma",
        year: 2024,
        doi: "10.1097/BOT.0000000000002773",
        supports: "Apoyarse en muletas o andador tras placa de clavícula no aumentó el fallo del material.",
      },
      {
        pmid: "23982401",
        authors: "Meisterling SW, Cain EL, Fleisig GS, et al.",
        title: "Return to athletic activity after plate fixation of displaced midshaft clavicle fractures.",
        journal: "Am J Sports Med",
        year: 2013,
        doi: "10.1177/0363546513501494",
        supports: "Vuelta media al deporte a los 83 días tras placa (rango 13-277).",
      },
    ],
  },
  "humero-proximal": {
    level: "baja",
    summary:
      "Según Cochrane (2022), los ensayos no bastan para elegir entre pautas de rehabilitación tras la cirugía. Un ensayo aleatorizado de 2025 con placa bloqueada no encontró diferencias a 24 meses entre movimiento activo libre desde el inicio y 4 semanas de cabestrillo; ambos grupos evitaron cargas pesadas y golpes 3 meses. La pauta publicada más habitual coincide con la de la app: cabestrillo unas 3 semanas, péndulos desde el inicio, movilidad asistida o activa desde la semana 3 y fuerza desde la 6.",
    gaps: [
      "Movilización activa precoz tras placa: un solo ensayo, sin diferencias; queda a criterio según hueso y fijación.",
      "Fisioterapia supervisada o domiciliaria tras la cirugía: sin datos en operados.",
      "El protocolo no distingue placa, clavo y artroplastia; las artroplastias (cicatrización de tuberosidades) tienen otras precauciones no revisadas aquí.",
    ],
    refs: [
      {
        pmid: "35727196",
        authors: "Handoll HH, Elliott J, Thillemann TM, et al.",
        title: "Interventions for treating proximal humeral fractures in adults.",
        journal: "Cochrane Database Syst Rev",
        year: 2022,
        doi: "10.1002/14651858.CD000434.pub5",
        supports: "No hay evidencia suficiente para elegir entre intervenciones de rehabilitación tras la cirugía.",
      },
      {
        pmid: "40032060",
        authors: "Crepaz-Eger U, Dankl L, Knierzinger D, et al.",
        title:
          "Postoperative treatment of proximal humerus fractures with an early active motion protocol: a prospective randomized controlled trail.",
        journal: "J Shoulder Elbow Surg",
        year: 2025,
        doi: "10.1016/j.jse.2025.01.042",
        supports: "Movimiento activo libre no inferior a 4 semanas de cabestrillo tras placa; cargas pesadas evitadas 3 meses.",
      },
      {
        pmid: "39346799",
        authors: "Budharaju A, Hones KM, Hao KA, et al.",
        title: "Rehabilitation protocols in proximal humerus fracture management: A systematic review.",
        journal: "Shoulder Elbow",
        year: 2023,
        doi: "10.1177/17585732231182374",
        supports:
          "Pauta más habitual: cabestrillo 3 semanas, péndulos desde el día 1, asistida/activa desde la semana 3, fuerza desde la 6.",
      },
    ],
  },
  "humero-diafisis": {
    level: "muy baja",
    summary:
      "Casi no hay estudios comparativos de rehabilitación tras la osteosíntesis de diáfisis humeral. En una serie con placa, apoyarse en el brazo operado de inmediato no aumentó la pseudoartrosis ni la mala alineación, por lo que las restricciones de carga son sobre todo de prudencia. Placa y clavo consiguen consolidación y función similares; el clavo anterógrado da más problemas de hombro y la placa más parálisis radial transitoria.",
    gaps: [
      "No hay ensayos sobre cuándo cargar o fortalecer; la seguridad de la carga inmediata viene de una sola serie antigua con placa.",
      "Con clavo anterógrado hay más pinzamiento y rigidez de hombro; podría convenir insistir antes en su movilidad, sin estudios específicos.",
      "Evitar girar el brazo con fuerza es una precaución biomecánica sin estudios clínicos.",
    ],
    refs: [
      {
        pmid: "10963539",
        authors: "Tingstad EM, Wolinsky PR, Shyr Y, Johnson KD.",
        title: "Effect of immediate weightbearing on plated fractures of the humeral shaft.",
        journal: "J Trauma",
        year: 2000,
        doi: "10.1097/00005373-200008000-00014",
        supports: "La carga inmediata a través del brazo con placa no modificó la consolidación (83 fracturas).",
      },
      {
        pmid: "34219193",
        authors: "Beeres FJP, van Veelen N, Houwert RM, et al.",
        title:
          "Open plate fixation versus nailing for humeral shaft fractures: a meta-analysis and systematic review of randomised clinical trials and observational studies.",
        journal: "Eur J Trauma Emerg Surg",
        year: 2021,
        doi: "10.1007/s00068-021-01728-7",
        supports:
          "Placa y clavo con función y consolidación similares; el clavo, más problemas de hombro; la placa, más parálisis radial transitoria.",
      },
      {
        pmid: "35293229",
        authors: "Oliver WM, Molyneux SG, White TO, et al.",
        title: "Return to work and sport after a humeral shaft fracture.",
        journal: "Bone Jt Open",
        year: 2022,
        doi: "10.1302/2633-1462.33.BJO-2021-0198.R1",
        supports: "Vuelta al trabajo media a las 14 semanas; al deporte, el 34% a los 6 meses.",
      },
    ],
  },
  "tibia-diafisis": {
    level: "moderada",
    summary:
      "Un ensayo aleatorizado tras clavo endomedular bloqueado (fracturas 42-A y 42-B) mostró que apoyar según tolerancia desde el primer día no alarga la consolidación ni aumenta complicaciones frente a 6 semanas sin apoyo. Un metaanálisis encuentra que apoyar antes de 6 semanas acorta algo la consolidación (evidencia limitada). En el ensayo la consolidación tardó de media 21-22 semanas.",
    gaps: [
      "Sin datos sólidos de carga inmediata en fracturas 42-C, abiertas graves o pacientes de alto riesgo: a criterio del cirujano.",
      "Momento de volver al deporte de impacto.",
      "Las semanas de inicio de cada fase de ejercicios no tienen respaldo específico.",
    ],
    refs: [
      {
        pmid: "27049908",
        authors: "Gross SC, Galos DK, Taormina DP, et al.",
        title: "Can Tibial Shaft Fractures Bear Weight After Intramedullary Nailing? A Randomized Controlled Trial.",
        journal: "J Orthop Trauma",
        year: 2016,
        doi: "10.1097/BOT.0000000000000598",
        supports:
          "La carga inmediata tras clavo no cambia la consolidación (unas 22 semanas) ni las complicaciones frente a 6 semanas sin apoyo.",
      },
      {
        pmid: "35238986",
        authors: "Bhanushali A, Kovoor JG, Stretton B, et al.",
        title:
          "Outcomes of early versus delayed weight-bearing with intramedullary nailing of tibial shaft fractures: a systematic review and meta-analysis.",
        journal: "Eur J Trauma Emerg Surg",
        year: 2022,
        doi: "10.1007/s00068-022-01919-w",
        supports: "Apoyar antes de 6 semanas acorta la consolidación unas 2,4 semanas, con menos complicaciones.",
      },
    ],
  },
  tobillo: {
    level: "moderada",
    summary:
      "La revisión Cochrane de 2024 (53 estudios) concluye que apoyar en las 3 primeras semanas tras la osteosíntesis probablemente mejora algo la función sin más reoperaciones, y que una ortesis removible que permita ejercicios mejora la función. El ensayo WAX (561 pacientes) mostró que apoyar según tolerancia desde la semana 2 es no inferior a hacerlo desde la 6, algo mejor a los 4 meses y con las mismas complicaciones.",
    gaps: [
      "Duración de la bota: el consenso de WAX dice que puede dejarse desde la semana 2 si se apoya, sin ensayos; 6 semanas es razonable.",
      "WAX excluyó pacientes sin sensibilidad protectora (p. ej. neuropatía diabética): en ellos, ajustar.",
      "Fisioterapia supervisada frente a ejercicios en casa: certeza muy baja. Sindesmosis o maléolo posterior: sin datos por subgrupo.",
    ],
    refs: [
      {
        pmid: "39312389",
        authors: "Lewis SR, Pritchard MW, Parker R, et al.",
        title: "Rehabilitation for ankle fractures in adults.",
        journal: "Cochrane Database Syst Rev",
        year: 2024,
        doi: "10.1002/14651858.CD005595.pub4",
        supports: "Apoyar en las 3 primeras semanas y usar ortesis removible mejoran algo la función sin más reoperaciones.",
      },
      {
        pmid: "38848738",
        authors: "Bretherton CP, Achten J, Jogarah V, et al.",
        title:
          "Early versus delayed weight-bearing following operatively treated ankle fracture (WAX): a non-inferiority, multicentre, randomised controlled trial.",
        journal: "Lancet",
        year: 2024,
        doi: "10.1016/S0140-6736(24)00710-4",
        supports: "Apoyar desde la semana 2 es no inferior a hacerlo desde la 6, con complicaciones similares.",
      },
      {
        pmid: "39847234",
        authors: "Bretherton C, Al-Saadawi A, Sandhu PH, et al.",
        title:
          "Co-design of a novel rehabilitation intervention for patients after ankle fracture surgery: establishing healthcare professional consensus.",
        journal: "Musculoskelet Surg",
        year: 2025,
        doi: "10.1007/s12306-025-00881-1",
        supports: "Consenso: aumentar la carga según comodidad; la bota es de comodidad y puede dejarse desde la semana 2.",
      },
    ],
  },
  "pilon-tibial": {
    level: "muy baja",
    summary:
      "No hay ensayos sobre carga precoz tras osteosíntesis de pilón tibial; los ensayos de carga precoz de tobillo lo excluyen. El único estudio aleatorizado de carga inmediata en fracturas periarticulares es un piloto sin potencia, con 2 reoperaciones en el grupo de carga inmediata. La infección del sitio quirúrgico afecta a cerca del 17 % de los pilones operados, lo que respalda priorizar la herida y la carga diferida por defecto.",
    gaps: [
      "Momento óptimo de la carga: sin evidencia comparativa.",
      "Tipo y duración de la ortesis.",
      "Pronóstico funcional a largo plazo.",
    ],
    refs: [
      {
        pmid: "41194216",
        authors: "Mittwede PN, Li V, Okhuereigbe DO, et al.",
        title:
          "Immediate versus delayed weight bearing for fractures of the pelvis, acetabulum, distal femur, and proximal and distal tibia: a feasibility randomized controlled trial.",
        journal: "Pilot Feasibility Stud",
        year: 2025,
        doi: "10.1186/s40814-025-01708-3",
        supports: "La carga inmediata en fracturas periarticulares de tibia no está demostrada (piloto).",
      },
      {
        pmid: "40834913",
        authors: "Li PZ, He JW, Xia XS.",
        title: "Risk factors for surgical site infections in patients with pilon fractures: A systematic review and meta-analysis.",
        journal: "J Foot Ankle Surg",
        year: 2025,
        doi: "10.1053/j.jfas.2025.08.006",
        supports: "Infección en torno al 17 %; riesgo mayor con edad, diabetes, fractura abierta y tipo C.",
      },
    ],
  },
  calcaneo: {
    level: "baja",
    summary:
      "Dos revisiones sistemáticas (casi solo estudios observacionales) no encuentran que empezar el apoyo parcial antes de 6 semanas empeore el ángulo de Böhler, la función ni las complicaciones; lo habitual sigue siendo 6-9 semanas sin apoyo. Las complicaciones de la herida son el problema principal: la diabetes es el factor de riesgo de más peso.",
    gaps: [
      "Apoyo parcial desde la semana 6 (plantilla «Descarga 6 sem · parcial hasta 10») parece seguro con datos observacionales, sobre todo con abordaje mínimamente invasivo: a criterio del cirujano.",
      "Ortesis de descarga del talón: sin resultados publicados.",
      "El tabaco solo muestra una tendencia no significativa sobre la herida, pero dejarlo es un consejo razonable.",
    ],
    refs: [
      {
        pmid: "29496317",
        authors: "De Boer AS, Van Lieshout EMM, Van Moolenbroek G, et al.",
        title:
          "The effect of time to post-operative weightbearing on functional and clinical outcomes in adults with a displaced intra-articular calcaneal fracture; A systematic review and pooled analysis.",
        journal: "Injury",
        year: 2018,
        doi: "10.1016/j.injury.2018.02.021",
        supports: "Empezar el apoyo parcial antes de 6 semanas no empeora el Böhler, la función ni las complicaciones (72 estudios).",
      },
      {
        pmid: "40608204",
        authors: "Verstappen C, Driessen MLS, Brandts L, et al.",
        title:
          "The role of early weight bearing in the aftertreatment of unilateral displaced intraarticular calcaneal fractures: a systematic review and pooled analysis.",
        journal: "J Orthop Traumatol",
        year: 2025,
        doi: "10.1186/s10195-025-00863-w",
        supports: "Los protocolos de carga precoz parecen seguros.",
      },
      {
        pmid: "25882442",
        authors: "Zhang W, Chen E, Xue D, et al.",
        title: "Risk factors for wound complications of closed calcaneal fractures after surgery: a systematic review and meta-analysis.",
        journal: "Scand J Trauma Resusc Emerg Med",
        year: 2015,
        doi: "10.1186/s13049-015-0092-4",
        supports: "La diabetes (OR 9,8) es el mayor factor de riesgo de complicaciones de la herida.",
      },
    ],
  },
  "pie-metatarsianos": {
    level: "muy baja",
    summary:
      "Para las lesiones de Lisfranc operadas solo hay series de casos y un consenso de expertos con revisión sistemática (deportistas de élite): apoyo de media hacia la semana 3,5-4,5, apoyo completo a las 8-12 semanas y deporte a los 4-6 meses. Algunos protocolos mantienen 6 semanas sin apoyo en fijaciones ligamentosas. Los defaults actuales encajan en ese rango.",
    gaps: [
      "Lesiones ligamentosas puras o con tornillos transarticulares: muchos cirujanos mantienen 6 semanas sin apoyo y apoyo completo a las 10-12.",
      "Retirada de tornillos transarticulares a los 4-6 meses: no figura en el texto.",
      "Duración de la bota: sin evidencia comparativa.",
    ],
    refs: [
      {
        pmid: "41582692",
        authors: "Webber KJ, Balboni JM, Semelsberger SD, et al.",
        title:
          "Return to sport following Lisfranc injuries in elite athletes-2024 International Foot and Ankle Sports Consensus and systematic review.",
        journal: "Knee Surg Sports Traumatol Arthrosc",
        year: 2026,
        doi: "10.1002/ksa.70285",
        supports: "Apoyo hacia las 3,5-4,5 semanas, completo a las 8-12 y deporte a los 4-6 meses (consenso).",
      },
      {
        pmid: "38274284",
        authors: "Desai MN, Martin KD.",
        title: "Closed Reduction and Percutaneous Fixation of Lisfranc Injury Using Suspensory Fixation.",
        journal: "JBJS Essent Surg Tech",
        year: 2023,
        doi: "10.2106/JBJS.ST.21.00066",
        supports: "Protocolo experto en fijación ligamentosa: 6 semanas sin apoyo y carga progresiva de la 6 a la 12.",
      },
    ],
  },
  "radio-distal": {
    level: "moderada",
    summary:
      "Varios metaanálisis de ensayos aleatorizados con placa volar coinciden en que movilizar pronto la muñeca (inmediatamente o en las 2 primeras semanas) da mejor función a las 6 semanas que esperar 5-6, sin más complicaciones globales ni reoperaciones. Un metaanálisis encontró una tendencia límite a más aflojamiento o pérdida de reducción con la movilización precoz, por lo que es razonable mantener 2 semanas de férula y acortarlas solo con montaje estable. En pacientes sin complicaciones, los ejercicios en casa bien explicados equivalen a la fisioterapia supervisada. Sobre cuándo cargar peso no hay ensayos.",
    gaps: [
      "Momento de cargar peso (6 semanas): sin ensayos; una serie retrospectiva no encontró pérdida de reducción con carga para la vida diaria en casos seleccionados.",
      "Movilización inmediata sin férula: parece segura, con posible señal de más desplazamiento; según estabilidad del montaje y calidad ósea.",
      "Ninguna estrategia ha demostrado prevenir el síndrome de dolor regional complejo (incidencia en torno al 2,4 %). Rotura del extensor largo del pulgar en torno al 1,3 %.",
    ],
    refs: [
      {
        pmid: "26403335",
        authors: "Handoll HH, Elliott J.",
        title: "Rehabilitation for distal radial fractures in adults.",
        journal: "Cochrane Database Syst Rev",
        year: 2015,
        doi: "10.1002/14651858.CD003324.pub3",
        supports: "Evidencia baja o muy baja; sin diferencias entre ejercicios supervisados y no supervisados.",
      },
      {
        pmid: "25817323",
        authors: "Valdes K, Naughton N, Burke CJ.",
        title: "Therapist-supervised hand therapy versus home therapy with therapist instruction following distal radius fracture.",
        journal: "J Hand Surg Am",
        year: 2015,
        doi: "10.1016/j.jhsa.2015.01.036",
        supports:
          "Ensayo con placa volar: el programa en casa equivale a la terapia en consulta salvo con complicaciones o comorbilidades.",
      },
      {
        pmid: "34972603",
        authors: "Lee JK, Yoon BH, Kim B, et al.",
        title:
          "Is early mobilization after volar locking plate fixation in distal radius fractures really beneficial? A meta-analysis of prospective randomized studies.",
        journal: "J Hand Ther",
        year: 2021,
        doi: "10.1016/j.jht.2021.10.003",
        supports: "Movilizar la muñeca en 2 semanas o menos mejora el DASH a las 6 semanas sin más complicaciones.",
      },
      {
        pmid: "34819123",
        authors: "Deng Z, Wu J, Tang K, et al.",
        title:
          "In adults, early mobilization may be beneficial for distal radius fractures treated with open reduction and internal fixation: a systematic review and meta-analysis.",
        journal: "J Orthop Surg Res",
        year: 2021,
        doi: "10.1186/s13018-021-02837-0",
        supports: "Mejor función precoz, con posible aumento del aflojamiento o redesplazamiento (p = 0,05).",
      },
      {
        pmid: "40143784",
        authors: "Daher M, Casey JC, Helou P, et al.",
        title:
          "Is Immobilization Necessary After Open Reduction and Internal Fixation of Distal Radius Fractures? A Meta-Analysis of Randomized Controlled Trials.",
        journal: "Hand (N Y)",
        year: 2025,
        doi: "10.1177/15589447251325825",
        supports: "La movilización inmediata no aumenta complicaciones ni reoperaciones.",
      },
      {
        pmid: "37552141",
        authors: "Nwosu C, Rodriguez K, Zeng S, et al.",
        title:
          "Complications Following Volar Locking Plate Fixation of Distal Radius Fractures in Adults: A Systematic Review of Randomized Control Trials.",
        journal: "J Hand Surg Am",
        year: 2023,
        doi: "10.1016/j.jhsa.2023.04.022",
        supports: "Tras placa volar: nervio mediano 7,1 %, dolor regional complejo 2,4 %, rotura tendinosa 1,3 %.",
      },
    ],
  },
  codo: {
    level: "muy baja",
    summary:
      "No hay ensayos aleatorizados sobre cuándo movilizar o cargar tras la cirugía de fracturas de codo en adultos. Las revisiones coinciden en que la rigidez postraumática es frecuente (10-15 %) y en una rehabilitación precoz e individualizada. En la tríada terrible, empezar la movilidad antes de 7 días no mejoró los resultados. La neuropatía cubital es frecuente tras fijar el húmero distal (9-13 %), lo que respalda el aviso.",
    gaps: [
      "Cargar peso y fortalecer desde la semana 6: sin evidencia; según tipo de fractura y montaje.",
      "Limitar la extensión activa contra gravedad tras fijar el olécranon (tríceps): sin evidencia.",
      "Un protocolo único para olécranon, húmero distal y cabeza de radio es un compromiso; la evidencia no permite afinar por subtipo.",
    ],
    refs: [
      {
        pmid: "40932855",
        authors: "Fan M, Xu F, Fei C, et al.",
        title: "Post-traumatic elbow stiffness: etiology, risk factors and current treatments.",
        journal: "Front Surg",
        year: 2025,
        doi: "10.3389/fsurg.2025.1643326",
        supports: "Rigidez en el 10-15 % tras traumatismo de codo; se recomienda rehabilitación precoz e individualizada.",
      },
      {
        pmid: "39552691",
        authors: "Larwa J, Buchanan TR, Janke RL, et al.",
        title:
          "Characteristics of rehabilitation protocols following operative treatment of terrible triad elbow injuries and the influence of early motion: A systematic review and meta-analysis.",
        journal: "Shoulder Elbow",
        year: 2024,
        doi: "10.1177/17585732241269807",
        supports: "En la tríada terrible, empezar la movilidad a 7 días o menos no mejoró la movilidad ni el MEPS.",
      },
      {
        pmid: "33711499",
        authors: "Yetter TR, Weatherby PJ, Somerson JS.",
        title: "Complications of articular distal humeral fracture fixation: a systematic review and meta-analysis.",
        journal: "J Shoulder Elbow Surg",
        year: 2021,
        doi: "10.1016/j.jse.2021.02.017",
        supports: "Tras fijar el húmero distal: neuropatía en el 9-13 %.",
      },
    ],
  },
  mano: {
    level: "baja",
    summary:
      "Las revisiones coinciden en que la movilización precoz tras la fijación abierta de metacarpianos y falanges es clave para evitar la rigidez. Un metaanálisis muy heterogéneo de 53 estudios encontró consolidación algo más rápida con movilización inmediata (7 días o menos) pero más eventos adversos que con la diferida; no permite fijar un momento óptimo.",
    gaps: [
      "Momento óptimo para mover los dedos fijados: evidencia contradictoria; con placas o tornillos estables puede bajarse la férula a 0-1 semanas.",
      "Fijaciones con agujas de Kirschner suelen requerir más protección; el protocolo no las distingue.",
      "Cuándo cargar peso o volver a deportes de contacto: sin evidencia.",
    ],
    refs: [
      {
        pmid: "40373359",
        authors: "Kynaston J, Yang JJ, Harrison C, et al.",
        title: "Systematic review and meta-analysis of mobilisation following open reduction and internal fixation of hand fractures.",
        journal: "J Plast Reconstr Aesthet Surg",
        year: 2025,
        doi: "10.1016/j.bjps.2025.05.006",
        supports: "Consolidación más rápida con movilización inmediata y menos eventos adversos con la diferida; no concluyente.",
      },
      {
        pmid: "37704027",
        authors: "Lambi AG, Rowland RJ, Brady NW, et al.",
        title: "Metacarpal fractures.",
        journal: "J Hand Surg Eur Vol",
        year: 2023,
        doi: "10.1177/17531934231184119",
        supports: "La movilización precoz tras fijación abierta es esencial para prevenir la rigidez.",
      },
    ],
  },
  general: {
    level: "baja",
    summary:
      "Los consejos generales son correctos y prudentes. Que fumar retrasa la consolidación y aumenta la pseudoartrosis está bien respaldado. Ducharse a los 12-15 días es conservador: la evidencia aleatorizada sobre la ducha precoz es escasa y no concluyente, pero esperar no es inseguro.",
    gaps: [
      "Ducha precoz (24-48 h con apósito impermeable): un solo ensayo en cirugía menor, sin diferencia en infección; puede adelantarse a criterio del cirujano.",
    ],
    refs: [
      {
        pmid: "24740664",
        authors: "Scolaro JA, Schenker ML, Yannascoli S, et al.",
        title: "Cigarette smoking increases complications following fracture: a systematic review.",
        journal: "J Bone Joint Surg Am",
        year: 2014,
        doi: "10.2106/JBJS.M.00081",
        supports: "Fumar aumenta la pseudoartrosis (OR 2,32) tras cirugía de huesos largos.",
      },
      {
        pmid: "26204454",
        authors: "Toon CD, Sinha S, Davidson BR, et al.",
        title: "Early versus delayed post-operative bathing or showering to prevent wound complications.",
        journal: "Cochrane Database Syst Rev",
        year: 2015,
        doi: "10.1002/14651858.CD010075.pub3",
        supports: "No hay evidencia concluyente a favor ni en contra de la ducha precoz.",
      },
      {
        pmid: "32032439",
        authors: "Karantana A, Handoll HH, Sabouni A.",
        title: "Percutaneous pinning for treating distal radial fractures in adults.",
        journal: "Cochrane Database Syst Rev",
        year: 2020,
        doi: "10.1002/14651858.CD006080.pub3",
        supports: "Las agujas percutáneas se retiran; infección del trayecto con antibiótico en torno al 7,7 %.",
      },
    ],
  },
};

/** Fecha de la última revisión bibliográfica */
export const EVIDENCE_REVIEWED = "noviembre de 2026";
