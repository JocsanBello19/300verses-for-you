// src/utils/verseServices.js
import versesDB from '../data/versesDB.js';

// 1. Obtener un versículo completamente aleatorio
export const getRandomVerse = () => {
  const randomIndex = Math.floor(Math.random() * versesDB.length);
  return versesDB[randomIndex];
};

// 2. Obtener el "Versículo del Día" (cambia cada 24 horas)
export const getVerseOfTheDay = () => {
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const index = dayOfYear % versesDB.length;
  return versesDB[index];
};

// 3. Filtrar versículos por categoría
export const getVersesByCategory = (category) => {
  return versesDB.filter(
    (verse) => verse.cat.toLowerCase() === category.toLowerCase()
  );
};
