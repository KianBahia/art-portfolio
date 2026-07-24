// ============================================================================
//  ARTWORKS  —  This is the ONLY file you edit to add or change a painting.
// ============================================================================
//
//  HOW TO ADD A NEW PIECE:
//    1. Drop the image file into  public/artwork/   (e.g. sunset.jpg)
//    2. Copy one block below, paste it, and fill in the fields.
//    3. Save. It appears in the gallery automatically.
//
//  FIELDS:
//    id          – a unique short name (letters/numbers/dashes). Used by the
//                  calendars to reference a piece. Never reuse an id.
//    title       – shown under the image in the lightbox.
//    image       – the filename inside public/artwork/  (just the name).
//    category    – used by the top filter bar. Any text; new categories that
//                  you invent here appear as filter buttons automatically.
//    year        – the year it was painted.
//    medium      – e.g. "Oil on canvas"  (optional).
//    dimensions  – e.g. "60 × 80 cm"     (optional).
//    description – a sentence or two shown in the lightbox (optional).
//
//  The order below is the order shown on the page (newest first is nice).
// ============================================================================

export const artworks = [
  {
    id: 'still-water',
    title: 'Still Water',
    image: 'art-01.svg',
    category: 'Landscape',
    year: 2025,
    medium: 'Oil on canvas',
    dimensions: '70 × 50 cm',
    description:
      'A quiet study of light settling over open water at the end of the day.',
  },
  {
    id: 'first-frost',
    title: 'First Frost',
    image: 'art-02.svg',
    category: 'Landscape',
    year: 2025,
    medium: 'Oil on linen',
    dimensions: '50 × 65 cm',
    description: 'The moment the season turns, caught in cool morning tones.',
  },
  {
    id: 'interval',
    title: 'Interval',
    image: 'art-03.svg',
    category: 'Abstract',
    year: 2025,
    medium: 'Acrylic on board',
    dimensions: '60 × 60 cm',
    description: 'An exploration of balance between weight and open space.',
  },
  {
    id: 'low-tide',
    title: 'Low Tide',
    image: 'art-04.svg',
    category: 'Landscape',
    year: 2025,
    medium: 'Oil on canvas',
    dimensions: '80 × 45 cm',
    description: 'The long horizontal of a coast emptied by the retreating sea.',
  },
  {
    id: 'terracotta-study',
    title: 'Terracotta Study',
    image: 'art-05.svg',
    category: 'Still Life',
    year: 2024,
    medium: 'Oil on panel',
    dimensions: '50 × 70 cm',
    description: 'Warm earthen colour built up in patient, deliberate layers.',
  },
  {
    id: 'dusk-field',
    title: 'Dusk Field',
    image: 'art-06.svg',
    category: 'Landscape',
    year: 2024,
    medium: 'Oil on canvas',
    dimensions: '65 × 50 cm',
  },
  {
    id: 'quiet-room',
    title: 'Quiet Room',
    image: 'art-07.svg',
    category: 'Still Life',
    year: 2024,
    medium: 'Oil on linen',
    dimensions: '45 × 60 cm',
    description: 'An arrangement of everyday objects held in soft afternoon light.',
  },
  {
    id: 'undertow',
    title: 'Undertow',
    image: 'art-08.svg',
    category: 'Abstract',
    year: 2024,
    medium: 'Acrylic on canvas',
    dimensions: '75 × 50 cm',
  },
  {
    id: 'harvest',
    title: 'Harvest',
    image: 'art-09.svg',
    category: 'Landscape',
    year: 2024,
    medium: 'Oil on canvas',
    dimensions: '45 × 60 cm',
  },
  {
    id: 'the-clearing',
    title: 'The Clearing',
    image: 'art-10.svg',
    category: 'Landscape',
    year: 2023,
    medium: 'Oil on board',
    dimensions: '50 × 50 cm',
    description: 'Light breaking through a stand of trees onto open ground.',
  },
  {
    id: 'threshold',
    title: 'Threshold',
    image: 'art-11.svg',
    category: 'Abstract',
    year: 2023,
    medium: 'Mixed media',
    dimensions: '70 × 55 cm',
  },
  {
    id: 'evening-bloom',
    title: 'Evening Bloom',
    image: 'art-12.svg',
    category: 'Still Life',
    year: 2023,
    medium: 'Oil on linen',
    dimensions: '55 × 75 cm',
    description: 'Cut flowers at the point of fullest, fading colour.',
  },
  {
    id: 'shoreline',
    title: 'Shoreline',
    image: 'art-13.svg',
    category: 'Landscape',
    year: 2023,
    medium: 'Oil on canvas',
    dimensions: '75 × 42 cm',
  },
  {
    id: 'memory-of-blue',
    title: 'Memory of Blue',
    image: 'art-14.svg',
    category: 'Abstract',
    year: 2022,
    medium: 'Acrylic on canvas',
    dimensions: '50 × 62 cm',
  },
  {
    id: 'orchard',
    title: 'Orchard',
    image: 'art-15.svg',
    category: 'Landscape',
    year: 2022,
    medium: 'Oil on canvas',
    dimensions: '75 × 42 cm',
  },
  {
    id: 'nocturne',
    title: 'Nocturne',
    image: 'art-16.svg',
    category: 'Abstract',
    year: 2022,
    medium: 'Oil on panel',
    dimensions: '60 × 80 cm',
    description: 'A dark, slow composition worked almost entirely at night.',
  },
];
