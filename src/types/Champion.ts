export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
  };
};

export interface ChampionDetail extends Champion {
  lore: string;
  passive: {
    name: string;
    description: string;
    image: {
      full: string;
    };
  };
  spells: [
    {
      id: string;
      name: string;
      description: string;
      image: {
        full: string;
      };
    }
  ];
}
