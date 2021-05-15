import React from 'react';
import kvetinaUrl from './kvetina.svg';
import listUrl from './list.svg';
import slunceUrl from './slunce.svg';
import vlockaUrl from './vlocka.svg';

// Zadání: Dopiš komponentu tak, aby každé tlačítko po kliknutí vypsalo, jakou volbu uživatel vybral. Například pro poslední `console.log('Uživatel zvolil zimu')`.

export const Uloha3 = () => {
  const handleClick1 = () => {
    console.log('Uživatel vybral jaro');
  };
  const handleClick2 = () => {
    console.log('Uživatel vybral léto');
  };
  const handleClick3 = () => {
    console.log('Uživatel vybral podzim');
  };
  const handleClick4 = () => {
    console.log('Uživatel vybral zimu');
  };

  return (
    <>
      Které roční období je ve střední Evropě nejteplejší?
      <ol>
        <li>
          <button onClick={handleClick1}>
            <img src={kvetinaUrl} width={16} height={16} alt="květina" />
            jaro (březen až květen)
          </button>
        </li>
        <li>
          <button onClick={handleClick2}>
            <img src={slunceUrl} width={16} height={16} alt="slunce" />
            léto (červen až srpen)
          </button>
        </li>
        <li>
          <button onClick={handleClick3}>
            <img src={listUrl} width={16} height={16} alt="list" />
            podzim (září až listopad)
          </button>
        </li>
        <li>
          <button onClick={handleClick4}>
            <img src={vlockaUrl} width={16} height={16} alt="vločka" />
            zima (prosinec až únor)
          </button>
        </li>
      </ol>
    </>
  );
};
