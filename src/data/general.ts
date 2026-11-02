import type { Faq, Limb } from "./types";

export interface AlarmLevel {
  level: "112" | "urgencias" | "consulta";
  title: string;
  items: string[];
}

export function alarms(limb: Limb, extra: string[] = []): AlarmLevel[] {
  const limbItems =
    limb === "inferior"
      ? ["Dedos del pie fríos, pálidos o azulados, o que no puedes mover", "Dolor en la pantorrilla con hinchazón, calor o enrojecimiento (posible trombo)"]
      : ["Dedos de la mano fríos, pálidos o azulados, o que no puedes mover"];
  return [
    {
      level: "112",
      title: "Llama al 112",
      items: ["Falta de aire repentina", "Dolor en el pecho", "Tos con sangre", "Desmayo o confusión"],
    },
    {
      level: "urgencias",
      title: "Acude a Urgencias",
      items: [
        "Dolor muy intenso que no mejora con la medicación ni elevando el miembro",
        ...limbItems,
        "Hormigueo o adormecimiento que va a más",
        "Fiebre de más de 38 °C con la herida roja, caliente o supurando",
        "La herida se abre o sangra mucho",
        "Una caída o un golpe con dolor nuevo, deformidad o un chasquido",
        ...extra,
      ],
    },
    {
      level: "consulta",
      title: "Llama a la consulta",
      items: [
        "La herida está algo enrojecida o sale líquido claro varios días después",
        "La férula, el vendaje o la bota te aprietan o te rozan",
        "La hinchazón aumenta en vez de ir bajando",
        "Fiebre de más de 38 °C sin otra causa",
        "Tienes dudas sobre la medicación o los ejercicios",
      ],
    },
  ];
}

export const GENERAL_FAQ: Faq[] = [
  {
    q: "¿Cuánto dolor es normal?",
    a: "Es normal tener dolor las primeras semanas, sobre todo después de los ejercicios. Debe ir mejorando poco a poco. Toma la medicación que te han pautado de forma regular los primeros días, sin esperar a que el dolor sea fuerte. Una molestia después de los ejercicios que desaparece en 1-2 horas es aceptable.",
  },
  {
    q: "¿Cómo controlo la hinchazón?",
    a: "Eleva el miembro operado por encima del nivel del corazón siempre que estés en reposo. Aplica frío (bolsa de hielo envuelta en un paño) 15-20 minutos varias veces al día; nunca directamente sobre la piel ni sobre una férula de escayola mojándola. Mueve los dedos con frecuencia.",
  },
  {
    q: "¿Cuándo puedo ducharme?",
    a: "Mientras la herida no esté cerrada, protégela con un plástico o apósito impermeable. En general, cuando te retiren los puntos o grapas (unos 12-15 días) y la herida esté seca, puedes ducharte normalmente. No te bañes en bañera, piscina o mar hasta que la herida esté completamente curada.",
  },
  {
    q: "¿Cómo cuido la herida?",
    a: "Mantén el apósito limpio y seco. Cámbialo según te hayan indicado. No apliques cremas sobre la herida hasta que esté cerrada. Cuando cicatrice, protege la cicatriz del sol durante un año (crema de protección alta).",
  },
  {
    q: "¿Tengo que ponerme la inyección (heparina)?",
    a: "Si te la han pautado, es para prevenir trombos. Póntela todos los días hasta la fecha indicada, sin saltarte ninguna. Si tienes dudas sobre cómo hacerlo, pregunta en tu centro de salud.",
  },
  {
    q: "¿Cuándo puedo conducir?",
    a: "Cuando puedas manejar el vehículo con total seguridad: sin inmovilización, con movimiento y fuerza suficientes para frenar de golpe o girar el volante, y sin medicación que dé sueño. Consúltalo en la revisión; tu seguro puede no cubrirte si conduces antes.",
  },
  {
    q: "¿Cuándo vuelvo a trabajar?",
    a: "Depende del tipo de trabajo. Un trabajo de oficina puede retomarse a veces en pocas semanas; un trabajo físico puede necesitar 3 meses o más. Lo hablaremos en las revisiones.",
  },
  {
    q: "¿Cuánto tarda en soldar el hueso?",
    a: "La mayoría de los huesos tardan entre 6 y 12 semanas en soldar, y algunos (fémur, tibia) pueden necesitar 4-6 meses. Las radiografías de las revisiones nos dicen cómo va. Fumar retrasa mucho la consolidación y aumenta el riesgo de que no suelde.",
  },
  {
    q: "¿Qué puedo hacer para curarme antes?",
    a: "No fumes, come de forma variada con suficiente proteína (carne, pescado, huevos, legumbres, lácteos), toma el sol con moderación (vitamina D), duerme bien y haz tus ejercicios cada día. Evita el alcohol.",
  },
  {
    q: "¿Hay que quitar la placa, el clavo o los tornillos?",
    a: "Normalmente no. El material está preparado para quedarse dentro toda la vida. Solo se retira si da molestias o por algún motivo concreto, y se valora pasado al menos un año.",
  },
  {
    q: "¿Pitará el material en los controles del aeropuerto?",
    a: "A veces sí. No hace falta ningún certificado: basta con avisar al personal de seguridad.",
  },
];
