const mapping: Record<string, string> = {
  flashcards: 'flashcard',
  'flashcard-decks': 'flashcard_deck',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
