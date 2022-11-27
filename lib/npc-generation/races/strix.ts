import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

// race source: Pathfinder 2e
// for details, see https://2e.aonprd.com/Ancestries.aspx?ID=38

export const strix: RaceTrait = {
  muscleMass: 9,
  bmiModifier: 703,
  ageTraits: {
    'ageDescriptors': [
      [110, 'ancient'],
      [90, 'incredibly elderly'],
      [80, 'vulnerably elderly'],
      [75, 'withered'],
      [70, 'elderly'],
      [65, 'weathered'],
      [60, 'aged'],
      [55, 'old'],
      [50, 'middle aged'],
      [45, 'middle aged'],
      [40, 'early middle aged'],
      [37, 'adult'],
      [35, 'mid thirties'],
      [32, 'earlyish thirties'],
      [30, 'prime adult aged'],
      [26, 'young adult'],
      [24, 'youthful adult'],
      [22, 'relatively young'],
      [20, 'surprisingly young'],
      [19, 'nineteen year old'],
      [18, 'barely adult aged'],
      [17, 'late teenager'],
      [16, 'teenager'],
      [15, 'young teenager'],
      [14, 'adolescent'],
      [12, 'prepubescent'],
      [10, 'child'],
      [8, 'young child'],
      [6, 'toddler'],
      [0, 'newborn']
    ],
    'elderly': {
      baseAge: 65,
      ageModifier: () => dice(3, 4)
    },
    'settled adult': {
      baseAge: 30,
      ageModifier: () => dice(3, 10)
    },
    'young adult': {
      baseAge: 15,
      ageModifier: () => dice(4, 5)
    },
    'child': {
      baseAge: 5,
      ageModifier: () => dice(3, 4)
    }
  },
  genderTraits: {
    entity: {},
    nonbinary: {
      firstName: [
        'Rush', 'Ririru', 'Tomota', 'Parker', 'Ekrald', 'Rahazi', 'Heqaf', 'Julian', 'Scooter', 'Astehi', 'Ekkarc', 'Prancer', 'Mazerr', 'Agulerro', 'Kuhk', 'Koirik', 'HotShot', 'Sable', 'Qlukerk', 'Olaf', 'Lorrehu', 'Erza', 'Osrir', 'Oreo', 'Sundrio', 'Red', 'Asahri', 'Warekh', 'Ruilei', 'Orobhi', 'Barack', 'Vader', 'Milio', 'Zelel', 'Tessa', 'Scoundrel', 'Walter', 'Agar', 'Ekkos', 'Scroll', 'Houd', 'Azach', 'Eglarro', 'Krantir', 'Vixen', 'Nahir', 'Soirik', 'Justice', 'Anikez', 'Hector', 'Jiniaz', 'Ferrari', 'Doukke', 'Danger', 'Swahbe', 'Hazel', 'Daf', 'Oiditi', 'Maduha', 'Purrincess', 'Cuzik', 'Quelzi', 'Wahia', 'Qhukka', 'Vurki', 'Chatty', 'Mahsik', 'Chester', 'Rillass', 'Roirin', 'Caruxxo', 'Maddy', 'Nash', 'Ora', 'Gabe', 'Sobhik', 'Daisy', 'Mahsir', 'Nibbles', 'Alic', 'Kusik', 'Oigir', 'Purio', 'Palir', 'Silla', 'Rapscallion', 'Dereia', 'Jet', 'Enmo', 'Peppy', 'Brooke', 'Zarlahi', 'Cricir', 'Saul', 'Gaagii', 'Hula', 'Ignacio', 'Brainerd', 'Dalton', 'Adam', 'Richie', 'Elizabeth', 'Brainard', 'Draven', 'Beorhthramm', 'Cody', 'Corbit', 'Mavis', 'Maui', 'Olivia', 'Branwenn', 'Rang', 'Prince', 'Gus', 'Malyia', 'Nesta', 'Mátt', 'Lily', 'Corbitt', 'Mason', 'Werner', 'Renfred', 'Chase', 'Asher', 'Ezgelerro', 'Cyrec', 'Queseri', 'Tink', 'Ouce', 'Brarn', 'Eliza', 'accea', 'Urreck', 'Rua', 'Qerk', 'Qlukerk', 'Siqaac', 'Accack', 'Ucis', 'Kirerr', 'Yaress', 'Grookif', 'Qhikeehk', 'Sakkee', 'Daf', 'Silla', 'Alic', 'Qlucce', 'Sehk', 'Ouhk', 'Grick', 'Zelel', 'Qaref'
      ],
      beardProbability: 0,
      baseHeight: 61,
      baseWeight: 90,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(2, 6)
    },
    woman: {
      firstName: [
        'Freddy', 'Bud', 'Scarlett', 'Vlad', 'Harper', 'Pidgeotto', 'Apollo', 'Petey', 'Pilot', 'Jack', 'Captain', 'Harley', 'Ella', 'Quicksilver', 'Diva', 'Milan', 'Silver', 'Parrot', 'Keebler', 'Eve', 'Disney', 'Tabitha', 'Luna', 'Sub-Zero', 'Pippy', 'Ace', 'Ragnar', 'Black', 'Ivory', 'Grace', 'Toni', 'Sheldon', 'Karrion', 'Diego', 'Blanche', 'Bruce', 'Neo', 'Sage', 'Osiris', 'Pear', 'Scarlett', 'Arkham', 'Cedric', 'Nigel', 'Dexter', 'Cthulhu', 'Beau', 'Ziggy', 'Magic', 'Keira', 'Oliver', 'Leo', 'Ina', 'Bonnie', 'Speedy', 'Sterling', 'Churchill', 'Angela', 'Phoenix', 'Luke', 'Leviathan', 'Tesla', 'Cha-Cha', 'Lark', 'Halo', 'Cortana', 'Elvis', 'Alien', 'Ripley', 'Tomato', 'Sasquatch', 'Sterling', 'Damien', 'Angel', 'Taffy', 'Dixon', 'Prudence', 'Liu', 'Rocket', 'Jack', 'Hemmingway', 'Colleen', 'Neville', 'Bandit', 'Tulip', 'Eldritch', 'Jasper', 'Austin', 'Donna', 'Springy', 'Jesus', 'Marshmallow', 'Kipper', 'Calico', 'Maple', 'Aphrodite', 'Bowie', 'Queen', 'Isaac', 'Ashley', 'Phoebe', 'Ariel', 'Blossom', 'Haley', 'Ivy', 'Shredder', 'Dracula', 'Fleur', 'Fable'
      ],
      beardProbability: 0,
      baseHeight: 62,
      baseWeight: 100,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(2, 6)
    },
    man: {
      firstName: [
        'Charlie', 'Pelaz', 'Gass', 'Clovis', 'Dekiess', 'Bailey', 'Dodger', 'Jester', 'Ziggy', 'Mary', 'June', 'Kodo', 'Bear', 'Josephine', 'Penny', 'Palari', 'Akali', 'Qlukkirrk', 'Kitty', 'Eskali', 'Probro', 'Rhahk', 'Aburzzo', 'Korek', 'Demon', 'Horatlia', 'Weston', 'Marlehi', 'Subihi', 'Ezgarr', 'Carson', 'Tippy', 'Ralari', 'Vibarr', 'Streak', 'Arutto', 'Zen', 'Riot', 'Tadret', 'Eqirr', 'Kaztek', 'Caed', 'Uacial', 'Arra', 'Puck', 'Ghoita', 'Poliz', 'Meownce', 'Lancelot', 'GoofyCat', 'Tundraj', 'Zamburro', 'Qhallif', 'Esgosh', 'Carter', 'Farrah', 'Marza', 'Fiona', 'Cleress', 'Kroirik', 'Har', 'Lucy', 'Angelicat', 'Vovolodo', 'Eglsr', 'Aayezi', 'Journey', 'Rua', 'Subhik', 'Suzy', 'Rallerr', 'Hermione', 'Ferret', 'Kral', 'Hieral', 'Slinky', 'Bandarri', 'Nuzik', 'Ginger', 'Irkia', 'Kaccea', 'Zukiss', 'Antoinette', 'Qhikeehk', 'Krandilla', 'Mahazen', 'Rarik', 'Velocity', 'Kralemi', 'Wahitan', 'Tennyson', 'Cleehk', 'Zik', 'Kondreri', 'Uiess', 'Aarlekh', 'Rylex', 'Chunk', 'Kiztel', 'Scooter'
      ],
      beardProbability: 25,
      baseHeight: 62,
      baseWeight: 100,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(3, 6)
    }
  },
  lastName: [
    'Amethyst', 'Briar', 'Char', 'Fliege', 'Mist', 'Nightshade', 'Pyro', 'River', 'Snow', 'Swill', 'CloudKins', 'MageTribe', 'Mistcliffs', 'StarMountTribe', 'StormClan', 'Cleress', 'Qrul', 'Qlecihk', 'Cricir', 'Irrk', 'Gruak', 'Krarri', 'Rhule', 'Ges', 'Daial', 'Rillass', 'Klirrk', 'Zukiss', 'Eqirr', 'Qhukka', 'Uiess', 'Rhahk', 'Khis', 'Arress', 'Gra', 'Khaf', 'Ouce', 'Rhar', 'Rallerr', 'Caed', 'Ukea', 'Qhelis', 'Rhurc', 'Doukke'
  ],
  eyes: ['green', 'blue', 'gray', 'aqua', 'purple', 'gold', 'yellow', 'amber', 'brown', 'dark brown', 'hazel', 'red', 'blood red', 'dark red', 'black'],
  raceWords: {
    raceName: 'strix',
    racePlural: 'strix',
    raceSingular: 'strix',
    raceAdjective: 'strixin',
    raceLanguage: 'Strix'
  },
  knownLanguages: ['Common', 'Strix', 'Draconic', 'Jotun', 'Gnome', 'Infernal'],
  beard: ['scraggly beard', 'long, flowing beard', 'goatee', 'goatee that seems to be trying to level up into a beard', 'rather wild, unkempt beard', 'dreadful beard'],
  abilities: {
    'Low-Light Vision': 'Accustomed to life underground, you have superior vision in dim conditions. You can see in dim light as though it were bright light, so you ignore the concealed condition due to dim light.',
    'Wings': "All strix possess powerful wings. While not all strix focus on honing their flying skills, a strong flap of their wings allows strix to travel longer distances when jumping. When Leaping horizontally, you move an additional 5 feet. You don't automatically fail your checks to High Jump or Long Jump if you don't Stride at least 10 feet first. In addition, when you make a Long Jump, you can jump a distance up to 10 feet further than your Athletics check result, though still with the normal maximum of your Speed. "
  }
}
