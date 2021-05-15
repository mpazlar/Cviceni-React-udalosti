import React from 'react';

// Zadání 1: Dopiš komponentu `Pozdrav`, aby v tlačítku byl text „Pozdrav DOPLŇ_JMÉNO_VE_ČTVRTÉM_PÁDĚ“.
// Zadání 2: Na klik zobraz bublinu s textem „Ahoj DOPLŇ_JMÉNO_V_PÁTÉM_PÁDĚ“.

const Pozdrav = ({ jmenoVeCtvrtemPade, jmenoVPatemPade }) => {
  const handleClick = () => {
    alert(`Ahoj ${jmenoVPatemPade}`);
  };
  return <button onClick={handleClick}>Pozdrav {jmenoVeCtvrtemPade}</button>;
};

// Zadání 3: Do komponenty `Uloha4` přidej ještě dvě použití komponenty `Pozdrav`. Jednou s tvým jménem a jednou se jménem kouče.

export const Uloha4 = () => {
  return (
    <>
      <Pozdrav jmenoVeCtvrtemPade="Martina" jmenoVPatemPade="Martine"></Pozdrav>
      <Pozdrav jmenoVeCtvrtemPade="Majdu" jmenoVPatemPade="Majdo"></Pozdrav>
      <Pozdrav jmenoVeCtvrtemPade="Zdeňka" jmenoVPatemPade="Zdeňku"></Pozdrav>
    </>
  );
};
