import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

// race source: Pathfinder 2e
// for details, see https://2e.aonprd.com/Ancestries.aspx?ID=41

export const merfolk: RaceTrait = {
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
        'Seer', 'Huto', 'Conu', 'Muro', 'jorzed', 'Explorer', 'Trasher', 'Whitfallow', 'Clearbinder', 'Gid', 'Natula', 'Selkie', 'zeg', 'Tracker', 'Gravelbreath', 'jorvigg', 'ven', 'Seacrest', 'zugg', 'Jetind', 'Oceanfin', 'Scryer', 'Gazend', 'shoreshard', 'neg', 'jorzon', 'Starwine', 'Hisiro', 'Gilnogg', 'vanet', 'viyon', 'terzogg', 'not', 'Kono', 'nerdigg', 'Downsurge', 'gelregg', 'Priest', 'Gara', 'Fighter', 'wellward', 'Strongward', 'tayegg', 'Curama', 'azurevigor', 'Entangler', 'Januhi', 'azurebow', 'zeddet', 'Idoyo', 'sonnogg', 'gatind', 'Sitring', 'moonwake', 'vagg', 'Dreamglade', 'Sind', 'Marana', 'brightdream', 'talnid', 'Priest', 'Trapper', 'Sed', 'jitol', 'Jasolu', 'zan', 'jet', 'Strongcrest', 'von', 'windbar', 'Gana', 'dilnit', 'sind', 'nandal', 'jolrogg', 'vel', 'hazeweaver', 'sogg', 'Send', 'Omi', 'Cidino', 'nond', 'Nan', 'Til', 'Azureseeker', 'siting', 'Galono', 'Wellbow', 'Gong', 'zond', 'Entangler', 'Guardian', 'Ladadu', 'gagg', 'Nuzana', 'jinit', 'Mota', 'Nila', 'Elite', 'Dreamcrag', 'godrund', 'Infiltrator', 'Elite', 'Clearcrest', 'gravelcrag', 'Son', 'gurvigg', 'Raider', 'tind', 'sandon', 'Oceanfront', 'zet', 'Nala', 'Honadi', 'seng', 'Legate', 'Weaver', 'Pilferer', 'Trapper', 'Tanili', 'Seer', 'jing', 'Fighter', 'gunel', 'Ituma', 'gel', 'winddreamer', 'zedog', 'swiftbend', 'Gong', 'Hazecreek', 'Sedond', 'blueriver', 'Zug', 'Tracker', 'Razorbreeze', 'Tosona', 'Nend', 'Sin', 'zuzzen', 'Muso', 'Gog', 'Nazi', 'Wakedream', 'zet', 'jing', 'Jind', 'Zogg', 'Gravelcrash', 'tonnigg', 'vand', 'Spy', 'Norot', 'Tazed', 'Sel', 'Mystic', 'Patrol', 'tind'
      ],
      beardProbability: 0,
      baseHeight: 61,
      baseWeight: 90,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(2, 6)
    },
    woman: {
      firstName: [
        'zuyed', 'Explorer', 'Ton', 'Curu', 'jan', 'Depthsinger', 'Thola', 'zofrong', 'Summoner', 'Pilferer', 'Sind', 'Lowbough', 'garsad', 'roughrider', 'tind', 'Trasher', 'Duflen', 'Sentinel', 'Mitudo', 'Adept', 'Clearbough', 'Carunu', 'Raider', 'Litoha', 'zayan', 'Sage', 'Wildshine', 'sut', 'gal', 'Tursad', 'lowwake', 'Zeflagg', 'sandsoar', 'Covenshine', 'Thotu', 'nightshaper', 'prismspout', 'tond', 'Merchant', 'Strongwine', 'Watch', 'vorven', 'Siddil', 'Jad', 'coralline', 'Tind', 'jet', 'Scout', 'niyagg', 'Mystic', 'Softbrook', 'Drowner', 'lightline'
      ],
      beardProbability: 0,
      baseHeight: 62,
      baseWeight: 100,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(2, 6)
    },
    man: {
      firstName: [
        'sifrun', 'ton', 'Pilferer', 'Gravelflow', 'zil', 'Tong', 'sand', 'Osamo', 'Sit', 'Stalker', 'Ili', 'gal', 'tenin', 'Knight', 'Natama', 'vog', 'strongbreath', 'mellowflow', 'Tafred', 'Iti', 'Vifrid', 'Mamu', 'Assassin', 'Ding', 'zardad', 'nannand', 'Gand', 'Zirdind', 'azuresigh', 'Alida', 'tersil', 'Entangler', 'nolnand', 'nizig', 'sil', 'Lamo', 'jol', 'Sod', 'shorehelm', 'nulrand', 'Moto', 'dal', 'Conida', 'sinnang', 'Elite', 'noyin', 'Softfin', 'Jot', 'Nudo', 'Maso', 'sad', 'Lowshine', 'garsat', 'tin'
      ],
      beardProbability: 25,
      baseHeight: 62,
      baseWeight: 100,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(3, 6)
    }
  },
  lastName: [
    'Jolting', 'Gal', 'Non', 'Dek', 'allac', 'Turbulent', 'Fearless', 'Explorer', 'Explorer', 'Ben', 'Bec', 'Juvenile', 'en', 'Azure', 'Hunter', 'vem', 'gedak', 'Angler', 'datter', 'Nerrar', 'Illusionist', 'Juvenile', 'Runar', 'Sentinel', 'reran', 'ver', 'Hypnotist', 'Zadem', 'Vorem', 'reggem', 'il', 'zigguc', 'elom', 'Er', 'rem', 'Hero', 'geggem', 'Hasty', 'Ar', 'Lagoon', 'Priest', 'Mystic', 'ran', 'Vannun', 'Mage', 'Slippery', 'Adam', 'Fluxmage', 'der', 'Dorran', 'ran', 'bak', 'Vezzin', 'Bouncer', 'vigon', 'retam', 'Surfing', 'Mattek', 'Kar', 'ak', 'Elite', 'Rek', 'ger', 'Agile', 'Jolting', 'Ker', 'Fighter', 'innam', 'Illusionist', 'nar', 'Vicious', 'Gurol', 'Surge', 'Addem', 'Abyssal', 'Trasher', 'Melur', 'Radiant', 'Merran', 'ril', 'Storm', 'Mesmerist', 'dam', 'ik', 'Azzer', 'Scout', 'Rarrem', 'Sentinel', 'Adept', 'Aggak', 'Rider', 'Mesmerist', 'el', 'Glorious', 'Trader', 'Esteemed', 'nal', 'Nec', 'Gen', 'Mage', 'Alen', 'rel', 'Enclave', 'agul', 'Webbed', 'Diver', 'Hasty', 'Fighter', 'Jolting', 'Gal', 'Non', 'Dek', 'allac', 'Turbulent', 'Fearless', 'Explorer', 'Explorer', 'Ben', 'Bec', 'Juvenile', 'en', 'Azure', 'Hunter', 'vem', 'gedak', 'Angler', 'datter', 'Nerrar', 'Illusionist', 'Juvenile', 'Runar', 'Sentinel', 'reran', 'ver', 'Hypnotist', 'Zadem', 'Vorem', 'reggem', 'il', 'zigguc', 'elom', 'Er', 'rem', 'Hero', 'geggem', 'Hasty', 'Ar', 'Lagoon', 'Priest', 'Mystic', 'ran', 'Vannun', 'Mage', 'Slippery', 'Adam', 'Fluxmage', 'der', 'Dorran', 'ran', 'bak', 'Vezzin', 'Bouncer', 'vigon', 'Prophet', 'Kagguk', 'Il', 'Tracker', 'orrem', 'Fearless', 'Salty', 'Nalul', 'zonnim', 'Ker', 'menan', 'zettec', 'Visionary', 'em', 'Commander', 'Gen', 'atac', 'ruk', 'ezak', 'kerrer', 'ul', 'Trapper', 'daggan', 'Begec', 'Gel', 'Renak', 'kannal', 'Ec', 'Er', 'Angler', 'meggan', 'Oc', 'Trapper', 'Annem', 'gak', 'Expanse', 'Tidal', 'Guzzuk', 'otur', 'Dazzec', 'ritec', 'Ok', 'Nac', 'Prism', 'Explorer', 'kin', 'Slippery', 'Basin', 'Rider', 'Shaman', 'Van', 'ketak', 'Storm', 'ir', 'em', 'Entangler', 'um', 'Zon', 'Ek', 'val', 'Fearless', 'Wild', 'Diving', 'Basin', 'Bezam', 'Webbed', 'ak', 'Jolting', 'egec', 'Aron', 'zac', 'Guide', 'adim', 'Watch', 'Ak', 'Warrior', 'Erul', 'Summoner', 'Gelul', 'Careful', 'Scryer', 'Ben', 'Men', 'Dir', 'kanec', 'Rec', 'Rudik', 'Ac', 'Watch', 'er', 'zerrar', 'Ak', 'Nek', 'Raider', 'gozuk', 'ezan', 'Coral', 'Attel', 'An', 'Ac', 'Diving', 'Arctic', 'an', 'venel', 'zedal', 'Void', 'Diver', 'gatam', 'Zuc', 'rom', 'Vatac', 'Kannac', 'Wave', 'Enir', 'zal', 'odac', 'Bay', 'Aggac', 'mellal', 'Visionary', 'Warrior', 'Ennuk', 'Ettur', 'Zan', 'Ettar', 'Surge', 'On', 'keloc', 'kelan', 'Gul', 'Gam', 'Hypnotist', 'Vezol', 'keddar', 'Lagoon', 'barrem', 'gedec', 'vir', 'Val', 'dal', 'Vem', 'Elite', 'konnan', 'Duk', 'al', 'Rum', 'iral', 'Coral', 'kazzor', 'Tracker', 'Kozar', 'Vezzir', 'Zik', 'natak', 'Hunter', 'gener', 'ben'
  ],
  eyes: ['green', 'blue', 'gray', 'aqua', 'purple', 'gold', 'yellow', 'amber', 'brown', 'dark brown', 'hazel', 'red', 'blood red', 'dark red', 'black'],
  raceWords: {
    raceName: 'merfolk',
    racePlural: 'merfolk',
    raceSingular: 'merfolk',
    raceAdjective: 'merfolkin',
    raceLanguage: 'Alghollthu'
  },
  knownLanguages: ['Common', 'Alghollthu', 'Aklo', 'Aquan', 'Azlanti', 'Draconic', 'Elven', 'Undercommon'],
  beard: ['scraggly beard', 'long, flowing beard', 'goatee', 'goatee that seems to be trying to level up into a beard', 'rather wild, unkempt beard', 'dreadful beard'],
  abilities: {
    'Low-Light Vision': 'Accustomed to life underground, you have superior vision in dim conditions. You can see in dim light as though it were bright light, so you ignore the concealed condition due to dim light.',
    'Hydration': 'While you are an amphibious being equally as capable on land as in the water, your body requires you to return to aquatic environments at least once in a 24-hour period. You must submerge in water in order to rehydrate your water-acclimated skin. If you fail to do this, your skin begins to crack and your gills become painful. After the first 24 hours outside of water, you take a –1 status penalty to Fortitude saves. After 48 hours, you struggle to breathe air and begin to suffocate until returned to water.'
  }
}
