export function Footer() {
  return (
    <footer className="no-print border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-xs leading-relaxed text-muted-foreground">
            <strong>Aviso:</strong> Los protocolos presentados son guías basadas en
            la evidencia científica disponible y deben ser adaptados según el
            criterio clínico del profesional tratante, las características
            individuales del paciente y el tipo específico de fijación utilizada.
          </p>
          <p className="text-xs text-muted-foreground/60">
            REHAPP &copy; {new Date().getFullYear()} &middot; Protocolos de
            Rehabilitación Postquirúrgica
          </p>
        </div>
      </div>
    </footer>
  );
}
