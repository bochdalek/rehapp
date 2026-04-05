import { Protocol } from "@/types/protocol";
import { humeroProximalRAFI } from "./humero-proximal";
import { diafisisHumeralClavo } from "./diafisis-humeral";
import { radioDistalPlaca } from "./radio-distal";
import { claviculaRAFI } from "./clavicula";
import { olecranonRAFI } from "./olecranon";
import { tobilloRAFI } from "./tobillo";
import { caderaCuelloFemoralArtroplastia } from "./cadera-cuello-femoral";
import { caderaIntertrocantericaClavo } from "./cadera-intertrocanterica";
import { diafisisFemoralClavo } from "./diafisis-femoral";
import { diafisisTibialClavo } from "./diafisis-tibial";
import { mesetaTibialRAFI } from "./meseta-tibial";
import { femurDistalRAFI } from "./femur-distal";
import { rotulaRAFI } from "./rotula";
import { calcaneoRAFI } from "./calcaneo";
import { pelvisRAFI } from "./pelvis";
import { acetabuloRAFI } from "./acetabulo";

export const allProtocols: Protocol[] = [
  // Miembro Superior
  humeroProximalRAFI,
  diafisisHumeralClavo,
  radioDistalPlaca,
  claviculaRAFI,
  olecranonRAFI,

  // Miembro Inferior
  caderaCuelloFemoralArtroplastia,
  caderaIntertrocantericaClavo,
  diafisisFemoralClavo,
  femurDistalRAFI,
  rotulaRAFI,
  tobilloRAFI,
  diafisisTibialClavo,
  mesetaTibialRAFI,
  calcaneoRAFI,

  // Pelvis y Acetábulo
  pelvisRAFI,
  acetabuloRAFI,
];
