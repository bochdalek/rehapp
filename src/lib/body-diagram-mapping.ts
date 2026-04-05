import { AnatomicalLocation } from "@/types/protocol";

export type DiagramRegion =
  | "hombro"
  | "brazo"
  | "codo"
  | "muneca"
  | "pelvis"
  | "cadera"
  | "muslo"
  | "rodilla"
  | "pierna"
  | "tobillo-pie";

export const LOCATION_TO_DIAGRAM: Record<AnatomicalLocation, DiagramRegion> = {
  clavicula: "hombro",
  hombro: "hombro",
  brazo: "brazo",
  codo: "codo",
  muneca: "muneca",
  pelvis: "pelvis",
  acetabulo: "pelvis",
  cadera: "cadera",
  muslo: "muslo",
  rodilla: "rodilla",
  pierna: "pierna",
  tobillo: "tobillo-pie",
  pie: "tobillo-pie",
};

export const DIAGRAM_REGION_LABELS: Record<DiagramRegion, string> = {
  hombro: "Hombro y clavícula",
  brazo: "Brazo",
  codo: "Codo",
  muneca: "Muñeca y mano",
  pelvis: "Pelvis",
  cadera: "Cadera",
  muslo: "Muslo",
  rodilla: "Rodilla",
  pierna: "Pierna",
  "tobillo-pie": "Tobillo y pie",
};

export const DIAGRAM_REGIONS: DiagramRegion[] = [
  "hombro",
  "brazo",
  "codo",
  "muneca",
  "pelvis",
  "cadera",
  "muslo",
  "rodilla",
  "pierna",
  "tobillo-pie",
];
