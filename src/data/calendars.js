// ============================================================================
//  CALENDARS  —  Each year's calendar = the 12 featured pieces for that year.
// ============================================================================
//
//  HOW TO ADD A YEAR:
//    1. Copy a block below and change the year.
//    2. List the 12 months. For each month, point to a painting by its `id`
//       (the same id from artworks.js). That's it — the image and title are
//       pulled in automatically, so you never repeat that information here.
//
//    If a month's painting is NOT in artworks.js (say it was a one-off just
//    for the calendar) you can instead give it its own image + title inline:
//        { month: 'March', image: 'special.jpg', title: 'Spring Melt' }
//
//  Newest year first looks best.
// ============================================================================

export const calendars = [
  {
    year: 2025,
    subtitle: 'Twelve paintings from the past year',
    months: [
      { month: 'January', artworkId: 'nocturne' },
      { month: 'February', artworkId: 'memory-of-blue' },
      { month: 'March', artworkId: 'first-frost' },
      { month: 'April', artworkId: 'the-clearing' },
      { month: 'May', artworkId: 'orchard' },
      { month: 'June', artworkId: 'evening-bloom' },
      { month: 'July', artworkId: 'harvest' },
      { month: 'August', artworkId: 'dusk-field' },
      { month: 'September', artworkId: 'shoreline' },
      { month: 'October', artworkId: 'low-tide' },
      { month: 'November', artworkId: 'threshold' },
      { month: 'December', artworkId: 'still-water' },
    ],
  },
  {
    year: 2024,
    subtitle: 'Twelve paintings from the past year',
    months: [
      { month: 'January', artworkId: 'quiet-room' },
      { month: 'February', artworkId: 'terracotta-study' },
      { month: 'March', artworkId: 'undertow' },
      { month: 'April', artworkId: 'interval' },
      { month: 'May', artworkId: 'the-clearing' },
      { month: 'June', artworkId: 'evening-bloom' },
      { month: 'July', artworkId: 'harvest' },
      { month: 'August', artworkId: 'dusk-field' },
      { month: 'September', artworkId: 'shoreline' },
      { month: 'October', artworkId: 'low-tide' },
      { month: 'November', artworkId: 'threshold' },
      { month: 'December', artworkId: 'memory-of-blue' },
    ],
  },
];
