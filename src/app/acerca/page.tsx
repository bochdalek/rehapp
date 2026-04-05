import {
  BookOpen,
  GraduationCap,
  ShieldCheck,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";

export default function AcercaPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Metodología</h1>
      <p className="mb-10 text-lg text-muted-foreground">
        Cómo se desarrollan y actualizan nuestros protocolos de rehabilitación.
      </p>

      <div className="space-y-10">
        <Section
          icon={<BookOpen className="h-5 w-5 text-primary" />}
          title="Base Científica"
        >
          <p>
            Cada protocolo está fundamentado en la mejor evidencia científica
            disponible, incluyendo revisiones sistemáticas Cochrane, guías de
            práctica clínica de la AAOS (American Academy of Orthopaedic Surgeons),
            NICE (National Institute for Health and Care Excellence), y
            publicaciones en revistas indexadas como JBJS, JOT y Clinical
            Orthopaedics.
          </p>
        </Section>

        <Section
          icon={<GraduationCap className="h-5 w-5 text-primary" />}
          title="Estructura por Fases"
        >
          <p>
            Los protocolos siguen una estructura basada en las fases de
            cicatrización tisular y los principios de rehabilitación postquirúrgica:
          </p>
          <ul className="mt-3 space-y-2 pl-5">
            <li className="list-disc text-muted-foreground">
              <strong className="text-foreground">Fase de protección:</strong>{" "}
              Control del dolor, protección de la fijación, inicio de movilidad
              pasiva controlada.
            </li>
            <li className="list-disc text-muted-foreground">
              <strong className="text-foreground">Fase de movilidad:</strong>{" "}
              Recuperación progresiva del rango de movimiento activo-asistido y
              activo.
            </li>
            <li className="list-disc text-muted-foreground">
              <strong className="text-foreground">Fase de fortalecimiento:</strong>{" "}
              Ejercicios de fortalecimiento progresivo y recuperación funcional.
            </li>
            <li className="list-disc text-muted-foreground">
              <strong className="text-foreground">Fase de retorno:</strong>{" "}
              Reintegración a actividades de la vida diaria y/o deportivas con
              criterios objetivos.
            </li>
          </ul>
        </Section>

        <Section
          icon={<ShieldCheck className="h-5 w-5 text-primary" />}
          title="Criterios de Seguridad"
        >
          <p>
            Cada fase incluye criterios específicos de avance, banderas rojas
            para derivación inmediata, y precauciones basadas en el tipo de
            fijación y la biología de la consolidación ósea. Los protocolos
            consideran las precauciones específicas de cada abordaje quirúrgico.
          </p>
        </Section>

        <Section
          icon={<RefreshCw className="h-5 w-5 text-primary" />}
          title="Actualización"
        >
          <p>
            Los protocolos son revisados periódicamente para incorporar nueva
            evidencia. Cada protocolo incluye su fecha de última actualización y
            las referencias bibliográficas que lo respaldan.
          </p>
        </Section>

        <Section
          icon={<AlertTriangle className="h-5 w-5 text-amber-600" />}
          title="Aviso Importante"
        >
          <p>
            Estos protocolos son guías generales y deben ser adaptados según el
            criterio clínico del profesional tratante. Factores como el tipo
            específico de fractura, calidad ósea, estabilidad de la fijación,
            comorbilidades del paciente y hallazgos intraoperatorios pueden
            requerir modificaciones al protocolo estándar.
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold">
        {icon}
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
