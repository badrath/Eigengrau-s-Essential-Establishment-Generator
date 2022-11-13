import { dice } from '../../src/dice'
import { RaceTrait } from '../raceTraits'

// source: Pathfinder 2e
// for details, see https://2e.aonprd.com/Ancestries.aspx?ID=20

export const gnoll: RaceTrait = {
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
        'Abaddon','Asura','Beelzebub','Buruta','Hal','Ipos','Gorgon','Sekhmet','Vlad','Amon','Bora','Brone','Loki','Nukpana','Runihura','Urriz','Oteik','Homsui','Thaar','Ghyrk','Math','Dhoszraas','Graiwvoth','Mar','Kiar','Grak','Srith','Rakk','Kizz','Taaszhi','Oh','Zoziz','Tru','Enkyhr','Szuh','Veith','Thoc','Krue','Groh','Szihnai','Ziarr','Toumgac','Srerr','Orr','Durrg','Thuoxyr','Enit','Rurr','Gnuotyx','Szuargun','Trur','Rreathnahr','Mel','Ycykk','Khet','Zox','Dhesge','Drur','Threrg','Gorarr','Zeznu','Sreir','Gycarg','Thiblyrh','Vocix','Ot','Vuhz','Rrer','Broz','Drihuot'
      ],
      beardProbability: 0,
      baseHeight: 43,
      baseWeight: 55,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(2, 6)
    },
    woman: {
      firstName: [
        'Arma','Atzez','Eith','Gnerxerh','Glonzah','Gnora','Hyra','Hyrgna','Mastriz','Mirrin','Mrarhz','Mrurteish','Abaddon','Asura','Beelzebub','Buruta','Hal','Ipos','Gorgon','Sekhmet','Vlad','Uac','Veigyh','Ahrai','Thrergyrr','Elket','Gruegrot','Grraarxorth','Yvnurth','Immurr','Oukih','Arr','Tankail','Drycek','Oniac','Darr','Tozai','Hrosh','Vokezz','Mocuoc','Rroun','Myrgul','Burh','Trar','Hreiszihz','Trroz','Grukeirk','Draatyzz','Moz','Groukkuah','Dretyr','Ahzeth','Yzzuk','Dhevgu','Rhurh','Thebnyrth','Srot','Trom','Gror','Grrorth','Doukx','Shyhzirh','Khirg','Betshehn','Knuishy','Tha','Irgoh','Bruorr','Vuorrg','Pi','Vikok','Pe','Dorhuc','Gratourrg','Gnumvein','Azz'
      ],
      beardProbability: 0,
      baseHeight: 43,
      baseWeight: 50,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(2, 6)
    },
    man: {
      firstName: [
        'Ak','Grokxex','Gyrkec','Izz','Merrurr','Mirgoh','Abaddon','Asura','Beelzebub','Buruta','Hal','Ipos','Gorgon','Sekhmet','Vlad','Kreirr','Dholloz','Ghykk','Gith','Drakxih','Gahoh','Drac','Yrrozz','Thawva','Kreryx','Icux','Raxex','Drukk','Sziar','Mot','Rrhubne','Ok','Gros','Myx','Bieburh','Hui','Zyk','Gruhoc','Kakk','Iz','Thuhlihz','Grrodde','Khaargun','Mer','Sruggit','Rhythguhn','Thorrg','Glytsea','Khozle','Trea','Rark','Mretea','Dalkourr','Ghirr','Irnair','Gnyrroz','Gry','Airr','Eh','Khezz','Malvouth','Vimvu','Pivrys','Tuam','Gnournoth','Trehz','Rezz','Myrr'
      ],
      beardProbability: 0,
      baseHeight: 45,
      baseWeight: 55,
      heightModifier: () => dice(2, 4),
      weightModifier: () => dice(3, 6)
    }
  },
  lastName: [
    'Ashhook','Bloodfist','Boomglob','Crackcast','Crackcheck','Deadmouth','Filthhammer','Molegrappler','Crackhead','Snotgaze','Saltdeath','Scourgecast','Mudhammer','Dreckguise','Murkfangs','Frothnail','Salteyes','Bloodknob','Stainstick','Rottalon','Sludgefuse','Slimesmirk','Snotdent','Stainpinch','Sandskin','Murkfingers','Brinebrass','Splitear','Crackclash','Zesttoe','Mucusscrap','Slimetoes','Mucusgrinder','Dustbolt','Farboot','Sootgrinder','Farhammer','Snoresmile','Farface','Silthand','Ashskin','Funguseye','Gunkfrown','Soilstick','Clayscowl','Lumptusk','Splitstick','Siltscrap','Failtoes','Woefoot','Murkhook','Cracktusk','Dregsgleam','Sludgethumb','The','Brinehammer','Deadmug','Fizzlehallow','Scuzshrapnel','Gooknuckle','The','Woemug','Pebblewatch','Brokenguard','Pestface','Mudfangs','Bloodtine','Grappleblast','Failhand','Filthguise','Deadclash','Lardears','Goldbasher','Foammouth','Rotpaw','Failgleam','Sludgecrook','Dustbash','Filthtine','Salthook','Greasetusk','Frothdance','Dusthands','Pebblebash','Lardbasher','Boomfinger','Muddance','Dustthumb','Fastblast','Groundmug','Dampbrass','Failwatch','Blightmouth','Fizzlemouth','Saltfingers','Rotfeet','Murkboot','Blightfangs','Loosehead','Blightgob','Grimedeath','Farcast','Lumphands','Damppince','Crackhands','Fastbarb','Salttoe','Loosespear','Tamecloak','Bloodbarb','Snorebash','Pebblepince','Snoredeath','Mireblast','Fastpincer','Dustears','Crackedhead','Lumpspear','Mucuswizzle','Looseblast','Burstfangs','Soreclaw','Fungihook','Farsnag','Dregsgob','Gunkskin','Tameclub','Mirecheek','Rottooth','Grapplepaw','Foamdeath','Brineguise','Slimegleam','Blightbeam','Mudblase','Boomcloak','Filthfeet','Rentdent','Woecrook','Grapplehands','Rotpaw','Oozefang','Soilwizzle','Grimeknuckle','Tamegall','Crackedhook','Siltstick','Fizzlecloak','Fungusear','Gunkpince','Riverpaw','Sootbasher','Grimeknuckle','Dregswatch','Crackdance','Fizzlehammer','Rentspear','Scumspear','Groundnail','Soilfrown','Dirtpincer','Grimeeye','Staincast','Murkthumb','Rentblase','Molehook','Bloodfang','Loosescrap','Sleazenail','Crackgrappler','Rivertongue','Faileye','Gooshrapnel','Saltguard','Goldfangs','Bloodknob','Tamespear','Fizzlecast','Drecknail','Silttongue','Lumptalon','Blightcheek','Filthgrinder','Fizzlegrappler','Sorescrap','Sludgesmirk','Lumpmask','Muckscowl','Grapplehallow','Slimeteeth','Sandbeam','Gunkguard','The','Lardfingers','Goobasher','Foamhunter','Rivernose','Sludgefang','Lumpcloak','Scumwizzle','Dustgrapnel','Slabfist','Filthfist','Burstnail','Mucussmile','Fungithumb','Tamehand','Scuznail','Fizzbolt','Deadbeam','Gunkmask','Silttooth','Lumpblast','Bloodknob','Brinewatch','Ashsmile','Sleazeeye','Loosemask','Dregsear','Bloodcheek','Scuzguise','Snotgaze','Scuzcast','Ashhammer','Deadboot','Silttongue','Sludgefuse','Fartalon','Sootears','Crackskin','Crackpince','Glopscowl','Dustscowl','Grapplefist','Sludgehook','Deadhallow','Scuzgrapnel','Scuzhook','Tamesmile','Frothfrown','Salttongue','Fizzlestick','Fungiscowl','Fungiblase','Dampskin','Sludgesmirk','Slimeblase','Silttooth','Moleguise','The','Dregsteeth','Farpaw','Ashscrap','Oozefangs','Rentfuse','The','Fizzledance','Soottusk','Dirtclash','Fungitalon','Siltknob','Mucusgall','Sleazeknuckle','Sootfrown','Pesttoes','Sweatpince','Brineskin','Dampbeam','Soilfists','Slabtooth','Ashsmile','Fastnose','Rotmug','Riverfangs','Lumpscowl','Sweatgrinder'
  ],
  eyes: ['green', 'blue', 'gray', 'aqua', 'purple', 'gold', 'yellow', 'amber', 'brown', 'dark brown', 'hazel', 'red', 'blood red', 'dark red', 'black'],
  raceWords: {
    raceName: 'gnoll',
    racePlural: 'gnoll',
    raceSingular: 'gnoll',
    raceAdjective: 'gnollin',
    raceLanguage: 'Gnoll'
  },
  knownLanguages: ['Common', 'Gnoll', 'Draconic', 'Elven', 'Iruxi', 'Necril', 'Orcish', 'Sylvan'],
  beard: ['scraggly beard', 'long, flowing beard', 'goatee', 'goatee that seems to be trying to level up into a beard', 'rather wild, unkempt beard', 'dreadful beard'],
  abilities: {
    'Low-Light Vision': 'Accustomed to life underground, you have superior vision in dim conditions. You can see in dim light as though it were bright light, so you ignore the concealed condition due to dim light.',
    'Bite': 'Your sharp teeth and powerful jaws are fearsome weapons. You have a jaws unarmed attack that deals 1d6 piercing damage. Your jaws are in the brawling group.'
  }
}
