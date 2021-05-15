import React from 'react';

// Zadání 1: Dopiš komponentu `NakupniPolozka`, aby v divu byl vypsaný název položky a tlačítko s textem „koupit“.
// Zadání 2: Po kliknutí na tlačítko vypiš do konzole „Uživatel chce koupit DOPLŇ_NÁZEV_POLOŽKY“.

export const NakupniPolozka = ({ nazev }) => {
  const handleClick = () => {
    console.log(`Uživatel chce koupit ${nazev}`);
  };
  return (
    <div>
      {nazev}
      <button onClick={handleClick}>Koupit</button>
    </div>
  );
};

// Zadání 3: Pomocí `polozky.map` vypiš všechny názvy jako nákupní položky.

export const Uloha5 = () => {
  const polozky = ['hrušky', 'jablka', 'třešně', 'jahody'];

  return (
    <>
      {polozky.map((m) => (
        <NakupniPolozka nazev={m} />
      ))}
    </>
  );
};
