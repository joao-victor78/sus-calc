/**
 * Componente de exibição do escore SUS de um respondente.
 *
 * Props:
 *  - score      {number} — escore calculado (0–100)
 *  - label      {string} — classificação qualitativa (ex.: "Bom")
 *  - color      {string} — cor hexadecimal sem # (ex.: "1E8449")
 *  - systemName {string} — nome do sistema avaliado
 */
export default function ScoreCard({ score, label, color, systemName }) {
  return (
    <div
      className="score-card"
      style={{ backgroundColor: `#${color}` }}
      role="status"
      aria-live="polite"
    >
      {systemName && <p className="score-card-system">Sistema: {systemName}</p>}
      <p className="score-card-score">Escore SUS: <strong>{score.toFixed(1)}</strong></p>
      <p className="score-card-label">Classificação: <strong>{label}</strong></p>
    </div>
  );
}
