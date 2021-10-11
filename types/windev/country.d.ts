interface Country {
  id: number;

  /** Code ISO du pays ([ISO 3166](https://fr.wikipedia.org/wiki/ISO_3166)). */
  iso: string;
  
  /** Libellé du pays en français et en majuscule. */
  label: string;
}