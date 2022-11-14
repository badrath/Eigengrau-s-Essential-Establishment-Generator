import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

// source: Pathfinder 2e
// for details, see https://2e.aonprd.com/Ancestries.aspx?ID=18

export const kobold: RaceTrait = {
  muscleMass: 9,
  bmiModifier: 703,
  ageTraits: {
    'ageDescriptors': [
      [65, 'ancient'],
      [60, 'incredibly elderly'],
      [58, 'vulnerably elderly'],
      [55, 'withered'],
      [53, 'elderly'],
      [50, 'weathered'],
      [48, 'aged'],
      [45, 'old'],
      [43, 'middle aged'],
      [40, 'middle aged'],
      [35, 'early middle aged'],
      [20, 'adult'],
      [18, 'prime adult aged'],
      [16, 'young adult'],
      [15, 'youthful adult'],
      [14, 'relatively young'],
      [13, 'surprisingly young'],
      [12, 'barely adult aged'],
      [11, 'youngster'],
      [8, 'adolescent'],
      [7, 'prepubescent'],
      [3, 'child'],
      [2, 'young child'],
      [1, 'toddler'],
      [0, 'newborn']
    ],
    'elderly': {
      baseAge: 50,
      ageModifier: () => dice(3, 4)
    },
    'settled adult': {
      baseAge: 30,
      ageModifier: () => dice(3, 10)
    },
    'young adult': {
      baseAge: 20,
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
        'tuzno','Dhazzi','Oknerlug','sohozrek','dolsorse','cruk','Lolkeam','Hihorsun','esgo','isril','Lihro','qrop','Virkem','Zolzo','idhodoolp','fazur','brunrin','qorkop','Soson','Jazholk','norlezrik','grognep','Tetre','grunk','ArgalulpZarsin','ithrigraa','vorool','Kag','Zenzonen','Gheaze','aahi','Hakkrizri','qrikmilp','Brikrullurk','Vhup','gasgrusge','omox','mukal','qrutrusk','Tori','Dheprild','dazras','Qremkak','Ulkasik','Zix','gursu','Zaakroolp','zetho','Nelga','Dazeek','Dorle','jirdo','Dilrak','Vromzep','Utli','Loozlis','Dalp','Drogmirne','Itli','dizhe','vhogmab','marru','Kulnokmas','gesku','qild','Osroo','Kilk','gezrur','Gosk','Silta','zazaa','Zeakmab','Zukzedraark','Zahak','Nerka','Zass','Kogs','Hatt','Todri','Gosrirka','ooro','drirk','Vure','Rohe','Passim','heskan','bros','Sniv','uskiso','jed','Ruhru','Zoss','vis','dhezreap','Dukru','iglo','jild','zorki','Gos','Rhargo','Vheen','Nedki','Dalsi','fulsaa','Nehle','Irso','Gass','Molderk','rogrigrid','Nax','drermealk','Susgaglu','Zekke','Rhild','nillurild','kuxugnulp','Voodra','Brusk','vrinzu','Murti','Brozhik','Lothe','tearloh','Sern','vhalp','nikkrarke','Zida','Zex','vrix','Sagla','HeahodroRutho','Rikdu','Satru','Mosgah','munk','dhegzakreelp','qril','Snog','arnimkusk','ghutrunk','Nadelne','vollig','Sigs','Dissrun','HorseGhakzad','Qirronk','azi','Isgrih','breellirguld','Ulsek','gudirneelp','Snun','Bregrib','Tarkim','Uhi','zask','FathranMerluk','maksogre','Von','orren','gora'
      ],
      beardProbability: 0,
      baseHeight: 43,
      baseWeight: 55,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(2, 6)
    },
    woman: {
      firstName: [
        'irses','Nova','vrernitzoos','Mukba','Terkirka','asri','Dukkolk','nilo','Nadu','risk','lorkokil','zosgi','irzol','vad','Nube','Taatra','Fisolkol','Mege','Qrulrin','Brireex','Gotho','Ditlu','zoghugzux','Kogri','Molbi','Adesgri','Rirke','vheezze','Snid','volra','Grirmora','Jognol','Matoknelk','arguh','Narku','siskin','reksim','brornaka','dusgra','Etild','Ognu','Ghip','jeelnalraalp','eardeeb','Assraa','vhurmu','Rage','aprerzeeld','lissru','grollagzol','Cramkuxu','qraax','dodri','Ikli','eskar','Girka','elroog','Rimogmalp','Veelsu','raxogmu','Etli','Utlu','Toska','Qrarkark','Diga','jek','Loraka','luko','dhogmun','vrildisk','qronrig','Vuxix','eaksa','arloo','Pirgoo','Gahel','Zugge','ede','Zuzne','qresk','nunzatunk','rharkalp','Masgoo','crax','Gaglo','Peehi','Tud','Crenk','zodralzisk','zorsa','eezik','dhork','Vhork','Diskraa','Croomzosk','Gholernead','Vosgi','Dogzisk','FudkurloGrurk','utraan','Ghulk','Mak','pelsa','Ruhze','menrugzog','Mazra','Uto','Ele'
      ],
      beardProbability: 0,
      baseHeight: 43,
      baseWeight: 50,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(2, 6)
    },
    man: {
      firstName: [
        'Girka','elroog','Rimogmalp','Veelsu','raxogmu','Etli','Utlu','Toska','Qrarkark','Diga','jek','Loraka','luko','dhogmun','vrildisk','qronrig','Vuxix','eaksa','arloo','Pirgoo','Gahel','Zugge','ede','Zuzne','qresk','nunzatunk','rharkalp','Masgoo','crax','Gaglo','Peehi','Tud','Crenk','zodralzisk','zorsa','eezik','dhork','Vhork','Diskraa','Croomzosk','Gholernead','Vosgi','Dogzisk','FudkurloGrurk','utraan','Ghulk','Mak','pelsa','Ruhze','menrugzog','Mazra','Uto','Ele'
      ],
      beardProbability: 0,
      baseHeight: 45,
      baseWeight: 55,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(3, 6)
    }
  },
  lastName: [
  ],
  eyes: ['green', 'blue', 'gray', 'aqua', 'purple', 'gold', 'yellow', 'amber', 'brown', 'dark brown', 'hazel', 'red', 'blood red', 'dark red', 'black'],
  raceWords: {
    raceName: 'kobold',
    racePlural: 'kobold',
    raceSingular: 'kobold',
    raceAdjective: 'koboldin',
    raceLanguage: 'Draconic'
  },
  knownLanguages: ['Common', 'Draconic', 'Aklo', 'Dwarven', 'Gnomish', 'Infernal', 'Terran', 'Undercommon'],
  beard: ['scraggly beard', 'long, flowing beard', 'goatee', 'goatee that seems to be trying to level up into a beard', 'rather wild, unkempt beard', 'dreadful beard'],
  abilities: {
    'Darkvision': 'You can see in darkness and dim light just as well as you can see in bright light, though your vision in darkness is in black and white.',
    'Draconic Exemplar': 'You draw minor powers from your draconic exemplar. Choose a type of chromatic or metallic dragon to be your exemplar. This determines your scale color and appearance, and dragons sometimes look more favorably upon those kobolds who resemble them, at the GM’s discretion. Your exemplar may also determine details of other abilities you have, using the Draconic Exemplars table.'
  }
}
