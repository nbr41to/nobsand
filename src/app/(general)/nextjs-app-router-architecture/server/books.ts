import { cache } from 'react';

const bookDB = [
  {
    id: 1,
    title: 'The Awakening',
    category: 'Fiction',
    description:
      "The Awakening, originally titled A Solitary Soul, is a novel by Kate Chopin, first published in 1899. Set in New Orleans and on the Louisiana Gulf coast at the end of the 19th century, the plot centers on Edna Pontellier and her struggle between her increasingly unorthodox views on femininity and motherhood with the prevailing social attitudes of the turn-of-the-century American South. It is one of the earliest American novels that focuses on women's issues without condescension. It is also widely seen as a landmark work of early feminism, generating a mixed reaction from contemporary readers and critics.",
  },
  {
    id: 2,
    title: 'City of Glass',
    category: 'Fiction',
    description:
      'City of Glass is a 1985 mystery novel by American writer Paul Auster. It is the first installment of The New York Trilogy, followed by Ghosts and The Locked Room. ',
  },
  {
    id: 3,
    category: 'Mystery',
    title: 'The Catcher in the Rye',
    description:
      'The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. It was originally intended for adults but is read by adolescents for its themes of angst, alienation, and as a critique on superficiality in society. ',
  },
  {
    id: 4,
    category: 'Mystery',
    title: 'The Great Gatsby',
    description:
      "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
  },
  {
    id: 5,
    category: 'Biography',
    title: 'The Bell Jar',
    description:
      'The Bell Jar is a semi-autobiographical novel written by Sylvia Plath. It follows the story of Esther Greenwood, a young woman who experiences a mental breakdown while pursuing a career in New York City. Through Esther\'s narrative, Plath offers a raw and honest portrayal of her own struggles with depression and society’s expectations for women during the 1950s.The book delves into themes of identity, femininity, and the challenges faced by women in patriarchal societies.With its vivid prose and introspective storytelling, "The Bell Jar" continues to resonate as a powerful exploration of mental health and self- discovery.',
  },
  {
    id: 6,
    category: 'Biography',
    title: 'The Color Purple',
    description:
      'The Color Purple is a 1982 epistolary novel by American author Alice Walker which won the 1983 Pulitzer Prize for Fiction and the National Book Award for Fiction. It was later adapted into a film and musical of the same name.',
  },
];

export const getBooksAll = cache(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return bookDB;
});

export const getBooksByCategory = async (category: string) =>
  bookDB.filter((book) => book.category === category);

export const getBookById = cache(async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return bookDB.find((book) => book.id === id);
});

export const getBookImageById = cache(async (id: number) => {
  const ms = Math.random() * 2000;
  await new Promise((resolve) => setTimeout(resolve, ms));
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/photos/' + id,
  );
  const data = await response.json();

  return data.url;
});
