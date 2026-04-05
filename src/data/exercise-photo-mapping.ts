/**
 * Maps REHAPP exercises to free-exercise-db exercise IDs.
 * Photos are served locally from /public/exercises/{id}/0.jpg and /1.jpg
 * Source: https://github.com/yuhonas/free-exercise-db (Unlicense/public domain)
 */

// Tier 2: Keyword patterns matched against exercise name
// Order matters - more specific patterns first
const KEYWORD_MAP: { pattern: RegExp; exerciseId: string }[] = [
  // Ankle exercises
  { pattern: /bombeo.*tobillo|ankle.pump|circunducci.n.*tobillo/i, exerciseId: "Ankle_Circles" },
  { pattern: /alfabeto.*pie|ankle.*alphabet/i, exerciseId: "Ankle_Circles" },

  // Bridge variations
  { pattern: /puente.*gl.teo.*unipodal|single.leg.*bridge/i, exerciseId: "Single_Leg_Glute_Bridge" },
  { pattern: /puente.*gl.teo|glute.bridge|puente.*(pelvis|cadera)|hip.bridge/i, exerciseId: "Butt_Lift_Bridge" },
  { pattern: /bridging|puente$/i, exerciseId: "Butt_Lift_Bridge" },

  // Squats
  { pattern: /sentadilla.*unipodal|single.leg.squat/i, exerciseId: "Bodyweight_Squat" },
  { pattern: /sentadilla.*parcial|mini.squat|partial.squat/i, exerciseId: "Bodyweight_Squat" },
  { pattern: /sentadilla|squat/i, exerciseId: "Bodyweight_Squat" },

  // Lunges
  { pattern: /lunge|zancada|estocada|arremetida/i, exerciseId: "Bodyweight_Walking_Lunge" },

  // Step-ups
  { pattern: /step.?up|step.down|escal.n|escalera/i, exerciseId: "Step-up_with_Knee_Raise" },

  // Calf raises
  { pattern: /heel.raise|calf.raise|elevaci.n.*tal.n|talones.*punta|tiptoe/i, exerciseId: "Calf_Raises_-_With_Bands" },
  { pattern: /gastrocnemio.*estiramiento|calf.stretch|aquiles/i, exerciseId: "Standing_Gastrocnemius_Calf_Stretch" },

  // Balance / proprioception
  { pattern: /equilibrio.*unipodal|single.leg.*(stand|balance)|balance.board/i, exerciseId: "Single_Leg_Glute_Bridge" },
  { pattern: /propiocepci.n|balance|equilibrio.*(superficie|inestable)/i, exerciseId: "Single_Leg_Glute_Bridge" },

  // Hip exercises
  { pattern: /abducci.n.*cadera.*dec.bito.lateral|side.lying.*hip|side.lying.*abduction/i, exerciseId: "Side_Lying_Groin_Stretch" },
  { pattern: /abducci.n.*cadera.*banda|banded.*hip.abduction|lateral.walk/i, exerciseId: "Side_Lying_Groin_Stretch" },
  { pattern: /clamshell|clam.shell/i, exerciseId: "Side_Lying_Groin_Stretch" },

  // Knee exercises
  { pattern: /deslizamiento.*tal.n|heel.slide/i, exerciseId: "One_Knee_To_Chest" },
  { pattern: /rodilla.*pecho|knee.to.chest/i, exerciseId: "One_Knee_To_Chest" },
  { pattern: /extensi.n.*cuadriceps.*sentado|seated.*knee.extension/i, exerciseId: "Dumbbell_Lying_One-Arm_Rear_Lateral_Raise" },

  // Stretches
  { pattern: /isquiotibiales.*estiramiento|hamstring.stretch|estiramiento.*posterior.*muslo/i, exerciseId: "Seated_Floor_Hamstring_Stretch" },
  { pattern: /cuadriceps.*estiramiento|quad.*stretch|estiramiento.*anterior.*muslo/i, exerciseId: "All_Fours_Quad_Stretch" },
  { pattern: /pelvic.*tilt|tilt.*pelvis|b.scula.*pelv/i, exerciseId: "Standing_Pelvic_Tilt" },
  { pattern: /cat.*stretch|camel.*stretch|gato.*camello/i, exerciseId: "Cat_Stretch" },

  // Core / stability
  { pattern: /plancha(?!.*lateral)|plank(?!.*side)|front.plank/i, exerciseId: "Plank" },
  { pattern: /plancha.lateral|side.plank/i, exerciseId: "Side_Bridge" },

  // Shoulder exercises (fitness equivalents)
  { pattern: /press.*hombro|shoulder.press/i, exerciseId: "Dumbbell_Shoulder_Press" },
  { pattern: /front.raise|elevaci.n.*frontal|flexi.n.*hombro.*activa|mancuerna.*frontal/i, exerciseId: "Front_Dumbbell_Raise" },
  { pattern: /lateral.raise|abducci.n.*hombro.*activa|elevaci.n.*lateral/i, exerciseId: "Side_Lateral_Raise" },
  { pattern: /band.pull|pull.apart|remo.*banda/i, exerciseId: "Band_Pull_Apart" },

  // Biceps / triceps (advanced phases)
  { pattern: /curl.*b.ceps|biceps.curl|flexi.n.*codo.*mancuerna/i, exerciseId: "Dumbbell_Bicep_Curl" },
  { pattern: /extensi.n.*triceps|triceps.extension/i, exerciseId: "Triceps_Pushdown" },
];

// Tier 1: Exact exercise ID overrides (for specific cases)
const ID_OVERRIDES: Record<string, string> = {
  // Add overrides here if keyword matching picks the wrong one
};

/**
 * Resolves an exercise to a free-exercise-db photo ID.
 * Returns null if no match found (component renders nothing).
 */
export function resolvePhoto(
  exerciseId: string,
  exerciseName: string
): string | null {
  // Tier 1: ID override
  if (ID_OVERRIDES[exerciseId]) {
    return ID_OVERRIDES[exerciseId];
  }

  // Tier 2: Keyword match on name
  for (const { pattern, exerciseId: photoId } of KEYWORD_MAP) {
    if (pattern.test(exerciseName)) {
      return photoId;
    }
  }

  return null;
}

/**
 * Returns all unique photo IDs used by the mapping.
 * Used by the download script.
 */
export function getAllPhotoIds(): string[] {
  const ids = new Set<string>();
  KEYWORD_MAP.forEach(({ exerciseId }) => ids.add(exerciseId));
  Object.values(ID_OVERRIDES).forEach((id) => ids.add(id));
  return Array.from(ids);
}
