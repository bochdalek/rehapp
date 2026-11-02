import type { Exercise } from "./types";

const list: Exercise[] = [
  // ───────── Generales ─────────
  {
    id: "respiracion",
    name: "Respiraciones profundas",
    how: [
      "Sentado o tumbado, coge aire despacio por la nariz hinchando la tripa.",
      "Aguanta 2 segundos.",
      "Suelta el aire lentamente por la boca, como si soplaras una vela.",
    ],
    dose: "10 respiraciones, cada hora mientras estés despierto los primeros días",
    tip: "Ayuda a prevenir complicaciones en los pulmones mientras te mueves menos.",
  },
  {
    id: "bombeo-tobillo",
    name: "Bombeo de tobillos",
    how: [
      "Tumbado o sentado con las piernas estiradas.",
      "Lleva la punta de los pies hacia ti todo lo que puedas.",
      "Después estíralos hacia abajo, como pisando un acelerador.",
    ],
    dose: "20 veces, cada hora mientras estés despierto",
    tip: "Activa la circulación y ayuda a prevenir trombos. Si tu pie operado está inmovilizado, hazlo con el otro pie.",
  },
  {
    id: "caminar",
    name: "Paseos cortos",
    how: [
      "Camina con la ayuda que te hayan indicado (muletas, andador o sin ayuda).",
      "Empieza por paseos dentro de casa de 5 minutos.",
      "Cada pocos días, alarga un poco el paseo si la pierna no se hincha mucho después.",
    ],
    dose: "Varias veces al día, aumentando poco a poco",
    tip: "Respeta siempre el apoyo que te han permitido (mira el aviso en la pantalla de Hoy).",
  },

  // ───────── Rodilla / cadera ─────────
  {
    id: "cuadriceps-isometrico",
    name: "Apretar la rodilla contra la cama",
    how: [
      "Tumbado boca arriba con la pierna operada estirada.",
      "Aprieta el músculo del muslo empujando la parte de atrás de la rodilla contra la cama.",
      "Mantén 5 segundos y relaja.",
    ],
    dose: "10 repeticiones, 3 veces al día",
    tip: "Deberías ver cómo la rótula sube un poco al apretar.",
  },
  {
    id: "gluteos-isometrico",
    name: "Apretar los glúteos",
    how: [
      "Tumbado boca arriba o sentado.",
      "Aprieta los glúteos (las nalgas) como si quisieras sujetar una moneda.",
      "Mantén 5 segundos y relaja.",
    ],
    dose: "10 repeticiones, 3 veces al día",
  },
  {
    id: "talon-deslizar",
    name: "Deslizar el talón por la cama",
    how: [
      "Tumbado boca arriba con las piernas estiradas.",
      "Desliza el talón de la pierna operada hacia el glúteo doblando la rodilla.",
      "Llega hasta donde notes tirantez, mantén 5 segundos y vuelve a estirar.",
    ],
    dose: "10 repeticiones, 3 veces al día",
    tip: "Poner una bolsa de plástico bajo el talón ayuda a que deslice mejor.",
  },
  {
    id: "pierna-recta",
    name: "Elevar la pierna estirada",
    how: [
      "Tumbado boca arriba. Dobla la rodilla sana y apoya ese pie en la cama.",
      "Aprieta el muslo de la pierna operada para dejarla bien recta.",
      "Levántala unos 30 cm, mantén 3 segundos y bájala despacio.",
    ],
    dose: "10 repeticiones, 2-3 veces al día",
    tip: "Si la rodilla se dobla al levantar, sigue primero con 'Apretar la rodilla contra la cama'.",
  },
  {
    id: "rodilla-extension-toalla",
    name: "Estirar la rodilla con toalla bajo el tobillo",
    how: [
      "Sentado o tumbado, coloca una toalla enrollada bajo el tobillo de la pierna operada.",
      "Deja que la rodilla 'cuelgue' hacia abajo y se estire por su propio peso.",
      "Relaja el muslo y quédate así unos minutos.",
    ],
    dose: "5-10 minutos, 3 veces al día",
    tip: "Recuperar la rodilla totalmente estirada es una de las cosas más importantes. No pongas nunca una almohada bajo la rodilla para dormir.",
  },
  {
    id: "rodilla-arco-corto",
    name: "Estirar la rodilla sobre un rodillo",
    how: [
      "Tumbado, pon un rodillo o toalla gruesa enrollada bajo la rodilla operada.",
      "Levanta el talón hasta dejar la rodilla recta, sin despegar la rodilla del rodillo.",
      "Mantén 5 segundos y baja despacio.",
    ],
    dose: "10 repeticiones, 3 veces al día",
  },
  {
    id: "rodilla-flexion-sentado",
    name: "Doblar la rodilla sentado",
    how: [
      "Sentado en una silla firme con el pie en el suelo.",
      "Desliza el pie de la pierna operada hacia atrás, bajo la silla, doblando la rodilla.",
      "Puedes ayudarte empujando con el pie sano. Mantén 10 segundos y vuelve.",
    ],
    dose: "10 repeticiones, 3 veces al día",
  },
  {
    id: "rodilla-extension-sentado",
    name: "Estirar la rodilla sentado",
    how: [
      "Sentado en una silla con la espalda apoyada.",
      "Estira la rodilla operada levantando el pie hasta dejar la pierna recta.",
      "Mantén 3 segundos y baja despacio.",
    ],
    dose: "10 repeticiones, 3 veces al día",
    tip: "Más adelante puedes añadir un peso ligero en el tobillo si tu fisioterapeuta lo indica.",
  },
  {
    id: "cadera-abduccion-tumbado",
    name: "Separar la pierna tumbado",
    how: [
      "Tumbado boca arriba con las piernas estiradas.",
      "Desliza la pierna operada hacia fuera, manteniendo la punta del pie mirando al techo.",
      "Vuelve despacio al centro sin cruzar la línea media.",
    ],
    dose: "10 repeticiones, 3 veces al día",
  },
  {
    id: "cadera-flexion-sentado",
    name: "Levantar la rodilla sentado (marcha sentado)",
    how: [
      "Sentado en una silla firme.",
      "Levanta la rodilla de la pierna operada unos centímetros, como si marcharas.",
      "Baja despacio y alterna con la otra pierna.",
    ],
    dose: "10 repeticiones con cada pierna, 2-3 veces al día",
  },
  {
    id: "puente",
    name: "Puente de glúteos",
    how: [
      "Tumbado boca arriba con las rodillas dobladas y los pies apoyados.",
      "Aprieta los glúteos y levanta la cadera de la cama.",
      "Mantén 3 segundos y baja despacio.",
    ],
    dose: "10 repeticiones, 2 veces al día",
  },
  {
    id: "cadera-abduccion-lado",
    name: "Elevar la pierna de lado",
    how: [
      "Tumbado sobre el lado sano, con una almohada entre las rodillas si lo necesitas.",
      "Levanta la pierna operada hacia el techo, estirada y con el pie mirando al frente.",
      "Mantén 2 segundos y baja despacio.",
    ],
    dose: "10 repeticiones, 2 veces al día",
  },
  {
    id: "levantarse-silla",
    name: "Levantarse y sentarse de la silla",
    how: [
      "Siéntate en una silla firme con reposabrazos.",
      "Echa el cuerpo hacia delante y levántate empujando con las piernas (usa los brazos al principio si lo necesitas).",
      "Siéntate de nuevo despacio, controlando la bajada.",
    ],
    dose: "10 repeticiones, 2 veces al día",
    tip: "Cuando te resulte fácil, intenta hacerlo sin ayudarte de los brazos.",
  },
  {
    id: "cadera-extension-pie",
    name: "Llevar la pierna hacia atrás de pie",
    how: [
      "De pie, sujetándote al respaldo de una silla o a la encimera.",
      "Lleva la pierna operada hacia atrás, recta, sin inclinar el tronco.",
      "Vuelve despacio.",
    ],
    dose: "10 repeticiones, 2 veces al día",
  },
  {
    id: "rodilla-flexion-pie",
    name: "Doblar la rodilla de pie",
    how: ["De pie, sujetándote a una silla o encimera.", "Dobla la rodilla llevando el talón hacia el glúteo.", "Baja despacio."],
    dose: "10 repeticiones, 2 veces al día",
  },
  {
    id: "subir-escalon",
    name: "Subir y bajar un escalón",
    how: [
      "Ponte frente al primer escalón de una escalera, sujeto a la barandilla.",
      "Sube el escalón poniendo primero el pie de la pierna operada y empujando con ella.",
      "Baja despacio, primero con la pierna sana y luego con la operada. Repite.",
    ],
    dose: "10 repeticiones, 1-2 veces al día",
    tip: "En la escalera de casa, mientras aún haya dolor, recuerda: se sube con la pierna buena y se baja con la operada. Este ejercicio es distinto: sirve para fortalecer la pierna operada cuando ya tienes fuerza.",
  },
  {
    id: "sentadilla-parcial",
    name: "Media sentadilla con apoyo",
    how: [
      "De pie, con los pies separados al ancho de la cadera, sujeto a una encimera.",
      "Dobla las rodillas un poco, como para sentarte, sin pasar de un cuarto de sentadilla.",
      "Vuelve a subir apretando los glúteos.",
    ],
    dose: "10 repeticiones, 2 veces al día",
  },
  {
    id: "bici-estatica",
    name: "Bicicleta estática",
    how: [
      "Ajusta el sillín alto, para que la rodilla quede casi estirada abajo.",
      "Pedalea sin resistencia. Si no completas la vuelta, ve hacia delante y atrás.",
      "Aumenta tiempo antes que resistencia.",
    ],
    dose: "10-20 minutos, 1 vez al día",
  },
  {
    id: "equilibrio",
    name: "Equilibrio sobre una pierna",
    how: [
      "De pie, frente a una encimera, sujetándote con las manos.",
      "Levanta el pie sano y aguanta sobre la pierna operada.",
      "Cuando sea fácil, suelta una mano y luego las dos (siempre con la encimera cerca).",
    ],
    dose: "30 segundos, 5 veces, 1-2 veces al día",
  },
  {
    id: "puntillas",
    name: "Ponerse de puntillas",
    how: [
      "De pie, sujetándote a una encimera.",
      "Sube despacio sobre las puntas de los pies.",
      "Baja despacio. Más adelante, prueba solo con el pie operado.",
    ],
    dose: "15 repeticiones, 2 veces al día",
  },

  // ───────── Tobillo / pie ─────────
  {
    id: "tobillo-alfabeto",
    name: "Escribir el abecedario con el pie",
    how: [
      "Sentado, con la pierna operada apoyada y el pie en el aire.",
      "Dibuja con el dedo gordo las letras del abecedario, despacio y grandes.",
      "Mueve solo el tobillo, no la pierna entera.",
    ],
    dose: "1 abecedario, 3 veces al día",
  },
  {
    id: "tobillo-circulos",
    name: "Círculos con el tobillo",
    how: ["Sentado, con el pie en el aire.", "Haz círculos amplios con el pie hacia un lado.", "Luego hacia el otro lado."],
    dose: "10 círculos a cada lado, 3 veces al día",
  },
  {
    id: "toalla-dedos",
    name: "Arrugar una toalla con los dedos",
    how: [
      "Sentado, con el pie descalzo sobre una toalla en el suelo.",
      "Recoge la toalla hacia ti arrugándola con los dedos del pie.",
      "Estírala y repite.",
    ],
    dose: "5 veces, 2 veces al día",
  },
  {
    id: "gemelo-toalla",
    name: "Estirar el gemelo con una toalla",
    how: [
      "Sentado con la pierna estirada, pasa una toalla por la planta del pie.",
      "Tira suavemente de los extremos llevando la punta del pie hacia ti.",
      "Mantén 30 segundos notando tirantez en la pantorrilla.",
    ],
    dose: "3 veces, 2-3 veces al día",
  },
  {
    id: "gemelo-pared",
    name: "Estirar el gemelo en la pared",
    how: [
      "De pie frente a una pared, apoya las manos.",
      "Lleva la pierna operada atrás, con el talón en el suelo y la rodilla estirada.",
      "Inclínate hacia la pared hasta notar tirantez. Mantén 30 segundos.",
    ],
    dose: "3 veces, 2 veces al día",
  },
  {
    id: "tobillo-banda",
    name: "Fuerza de tobillo con goma",
    how: [
      "Sentado con la pierna estirada, pasa una goma elástica por la planta del pie.",
      "Empuja hacia abajo contra la goma, como pisando un pedal, y vuelve despacio.",
      "Puedes hacerlo también hacia dentro y hacia fuera atando la goma a una pata de la mesa.",
    ],
    dose: "15 repeticiones en cada dirección, 1-2 veces al día",
  },

  // ───────── Mano / muñeca / codo ─────────
  {
    id: "mano-puno",
    name: "Abrir y cerrar la mano",
    how: [
      "Con el brazo apoyado y la mano elevada (por encima del codo).",
      "Cierra la mano haciendo un puño completo.",
      "Ábrela separando bien los dedos.",
    ],
    dose: "10 veces, cada hora mientras estés despierto",
    tip: "Ayuda mucho a bajar la hinchazón. Mantén la mano elevada siempre que puedas.",
  },
  {
    id: "dedos-pulgar",
    name: "Tocar cada dedo con el pulgar",
    how: ["Toca con la punta del pulgar la punta de cada dedo, uno a uno.", "Haz el recorrido de ida y vuelta."],
    dose: "5 recorridos, 3-4 veces al día",
  },
  {
    id: "codo-flexoextension",
    name: "Doblar y estirar el codo",
    how: [
      "Sentado, con el brazo pegado al cuerpo.",
      "Dobla el codo llevando la mano hacia el hombro. Ayúdate con la otra mano si lo necesitas.",
      "Después estíralo todo lo que puedas.",
    ],
    dose: "10 repeticiones, 3 veces al día",
  },
  {
    id: "pronosupinacion",
    name: "Girar la palma arriba y abajo",
    how: [
      "Sentado, con el codo doblado a 90° y pegado al cuerpo.",
      "Gira la mano para que la palma mire al techo.",
      "Gira después para que mire al suelo. El codo no se separa del cuerpo.",
    ],
    dose: "10 repeticiones, 3 veces al día",
  },
  {
    id: "muneca-flexoextension",
    name: "Mover la muñeca arriba y abajo",
    how: [
      "Apoya el antebrazo sobre una mesa con la mano fuera del borde.",
      "Levanta la mano hacia arriba todo lo que puedas.",
      "Bájala hacia abajo. Puedes ayudarte suavemente con la otra mano.",
    ],
    dose: "10 repeticiones, 3 veces al día",
  },
  {
    id: "muneca-rezo",
    name: "Estiramiento de 'rezar'",
    how: [
      "Junta las palmas de las manos delante del pecho, como rezando.",
      "Baja las manos despacio manteniendo las palmas juntas hasta notar tirantez en la muñeca.",
      "Mantén 15 segundos.",
    ],
    dose: "5 veces, 3 veces al día",
  },
  {
    id: "pelota-apretar",
    name: "Apretar una pelota blanda",
    how: ["Coge una pelota blanda o una esponja.", "Apriétala con toda la mano durante 3-5 segundos.", "Suelta despacio."],
    dose: "15 repeticiones, 2-3 veces al día",
  },
  {
    id: "muneca-peso",
    name: "Fuerza de muñeca con una botella",
    how: [
      "Apoya el antebrazo en la mesa con la mano fuera del borde, sujetando una botella pequeña de agua.",
      "Sube la muñeca despacio y baja despacio.",
      "Repite con la palma hacia arriba.",
    ],
    dose: "10-15 repeticiones, 1-2 veces al día",
    tip: "Empieza con una botella de 0,5 L y aumenta muy poco a poco.",
  },
  {
    id: "biceps-botella",
    name: "Doblar el codo con peso ligero",
    how: ["De pie o sentado, con una botella de agua en la mano.", "Dobla el codo llevando la botella hacia el hombro.", "Baja despacio."],
    dose: "10-15 repeticiones, 1-2 veces al día",
  },
  {
    id: "triceps-botella",
    name: "Estirar el codo contra peso",
    how: [
      "Tumbado boca arriba, levanta el brazo con el codo doblado apuntando al techo.",
      "Sujeta una botella pequeña y estira el codo hacia el techo.",
      "Vuelve a doblar despacio.",
    ],
    dose: "10-15 repeticiones, 1-2 veces al día",
  },

  // ───────── Hombro ─────────
  {
    id: "cuello",
    name: "Movilidad de cuello",
    how: ["Sentado con la espalda recta.", "Gira la cabeza despacio a un lado y al otro.", "Inclina la oreja hacia cada hombro."],
    dose: "5 veces cada movimiento, 3 veces al día",
  },
  {
    id: "escapulas",
    name: "Juntar los omóplatos",
    how: [
      "Sentado con la espalda recta y los brazos relajados.",
      "Lleva los hombros hacia atrás y abajo, como si quisieras juntar los omóplatos.",
      "Mantén 5 segundos y relaja.",
    ],
    dose: "10 repeticiones, 3 veces al día",
  },
  {
    id: "pendular",
    name: "Péndulo",
    how: [
      "Apoya la mano sana en una mesa e inclina el tronco hacia delante.",
      "Deja colgar el brazo operado totalmente relajado.",
      "Balancea el cuerpo para que el brazo se mueva solo haciendo pequeños círculos y movimientos adelante-atrás.",
    ],
    dose: "1-2 minutos, 3 veces al día",
    tip: "El brazo no hace fuerza: se mueve por el balanceo del cuerpo.",
  },
  {
    id: "hombro-mesa",
    name: "Deslizar el brazo sobre la mesa",
    how: [
      "Sentado frente a una mesa, apoya el antebrazo operado sobre una toalla.",
      "Inclina el cuerpo hacia delante deslizando la mano por la mesa lo más lejos posible.",
      "Mantén 5 segundos y vuelve.",
    ],
    dose: "10 repeticiones, 3 veces al día",
  },
  {
    id: "hombro-baston-elevar",
    name: "Elevar los brazos con un bastón",
    how: [
      "Tumbado boca arriba, sujeta un bastón o palo de escoba con las dos manos.",
      "Con ayuda del brazo sano, sube el bastón por encima de la cabeza todo lo que puedas.",
      "Baja despacio.",
    ],
    dose: "10 repeticiones, 3 veces al día",
  },
  {
    id: "hombro-baston-rotacion",
    name: "Girar el brazo hacia fuera con bastón",
    how: [
      "Tumbado o sentado, con el codo del brazo operado pegado al cuerpo y doblado a 90°.",
      "Sujeta un bastón con las dos manos.",
      "Con el brazo sano, empuja el bastón para que la mano operada se vaya hacia fuera. El codo no se despega del cuerpo.",
    ],
    dose: "10 repeticiones, 3 veces al día",
  },
  {
    id: "hombro-pared",
    name: "Subir los dedos por la pared",
    how: [
      "De pie frente a una pared, apoya las yemas de los dedos.",
      "Sube 'caminando' con los dedos por la pared todo lo que puedas.",
      "Mantén 5 segundos arriba y baja despacio.",
    ],
    dose: "10 repeticiones, 2-3 veces al día",
  },
  {
    id: "hombro-activo",
    name: "Levantar el brazo sin ayuda",
    how: [
      "De pie o sentado, con el pulgar mirando al techo.",
      "Levanta el brazo operado hacia delante hasta donde puedas sin encoger el hombro.",
      "Baja despacio.",
    ],
    dose: "10 repeticiones, 2-3 veces al día",
  },
  {
    id: "hombro-isometrico",
    name: "Empujar contra la pared sin mover el brazo",
    how: [
      "De pie, con el codo doblado y pegado al cuerpo.",
      "Empuja suavemente con el puño contra la pared hacia delante, hacia fuera y hacia dentro (por turnos).",
      "Mantén 5 segundos cada empuje. El brazo no se mueve.",
    ],
    dose: "5 repeticiones en cada dirección, 2 veces al día",
  },
  {
    id: "goma-rotacion",
    name: "Rotaciones con goma elástica",
    how: [
      "Ata una goma elástica al pomo de una puerta, a la altura del codo.",
      "Con el codo pegado al cuerpo y doblado a 90°, tira de la goma hacia fuera.",
      "Luego ponte del otro lado y tira hacia dentro, hacia la tripa.",
    ],
    dose: "10-15 repeticiones en cada dirección, 1 vez al día",
  },
  {
    id: "goma-remo",
    name: "Remo con goma elástica",
    how: [
      "Ata una goma elástica a una puerta a la altura del pecho.",
      "Tira de los extremos hacia ti doblando los codos y juntando los omóplatos.",
      "Vuelve despacio.",
    ],
    dose: "10-15 repeticiones, 1 vez al día",
  },
];

export const EXERCISES: Record<string, Exercise> = Object.fromEntries(list.map((e) => [e.id, e]));

export function getExercise(id: string): Exercise {
  const e = EXERCISES[id];
  if (!e) throw new Error(`Ejercicio desconocido: ${id}`);
  return e;
}
