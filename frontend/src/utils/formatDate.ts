export function formatDate(iso?: string): string {
  if (!iso) return '';

  return new Date(iso).toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}