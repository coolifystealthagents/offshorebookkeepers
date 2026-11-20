export const editorialPhotos = [
  '/photos/home-bookkeeping-review-lukas.webp',
  '/photos/services-bookkeeping-review-mikhail-nilov.webp',
] as const;

export function editorialPhoto(seed: string): string {
  let hash = 0;
  for (const char of seed) hash = (hash + char.charCodeAt(0)) % 997;
  return editorialPhotos[hash % editorialPhotos.length];
}
