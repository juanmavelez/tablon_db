const coursesMock = [
  {
    id: 1,
    name: 'Tsonga',
    teacher: 33,
    lessons: [
      {
        name: 'Hotel Hell Vacation',
        description: 'condimentum id luctus nec molestie sed justo pellentesque viverra pede ac',
      },
      {
        name: 'The Package',
        description: 'sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus',
      },
      {
        name: 'Confessions of a Dangerous Mind',
        description:
          'vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra',
      },
      {
        name: 'Harvard Man',
        description:
          'convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet',
      },
      { name: 'Dacii', description: 'consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel' },
    ],
    tags: ['phasellus', 'suspendisse', 'justo', 'vestibulum', 'praesent', 'vestibulum', 'lacus', 'maecenas'],
  },
  {
    id: 2,
    name: 'Spanish',
    teacher: 36,
    lessons: [
      {
        name: 'Touch of Spice, A (Politiki kouzina)',
        description: 'urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras',
      },
      {
        name: 'Strange Voyage',
        description:
          'orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin',
      },
      {
        name: 'Lovers and Lollipops',
        description:
          'ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac',
      },
      {
        name: "Agatha Christie's 'Ten Little Indians' (Ten Little Indians) (And Then There Were None)",
        description:
          'erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit',
      },
    ],
    tags: ['integer', 'eget', 'metus', 'eros', 'ligula', 'morbi', 'ipsum'],
  },
  {
    id: 3,
    name: 'New Zealand Sign Language',
    teacher: 19,
    lessons: [
      {
        name: 'Children of Noisy Village, The (a.k.a Children of Bullerby Village, The) (Alla vi barn i Bullerbyn)',
        description:
          'eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer',
      },
      {
        name: 'Peace, Propaganda & the Promised Land',
        description:
          'vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis',
      },
      {
        name: "Une étudiante d'aujourd'hui",
        description: 'pede malesuada in imperdiet et commodo vulputate justo in blandit',
      },
      {
        name: 'Charade',
        description: 'eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis',
      },
    ],
    tags: ['rutrum', 'diam', 'bibendum', 'convallis', 'nullam', 'aliquam', 'phasellus'],
  },
  {
    id: 4,
    name: 'Finnish',
    teacher: 23,
    lessons: [
      {
        name: 'Toxic Avenger Part III: The Last Temptation of Toxie, The',
        description:
          'morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo',
      },
    ],
    tags: ['sapien', 'gravida', 'cubilia', 'mauris', 'aenean', 'tellus', 'commodo', 'nisl', 'congue', 'aliquam'],
  },
  {
    id: 5,
    name: 'Hiri Motu',
    teacher: 32,
    lessons: [
      {
        name: 'Cinematographer Style',
        description: 'enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum',
      },
      {
        name: 'Lost Youth',
        description: 'aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non',
      },
      {
        name: 'Jungle Creature: Hugo, The (Jungledyret) (Go Hugo Go)',
        description:
          'congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque',
      },
      { name: 'Shadowzone', description: 'donec odio justo sollicitudin ut suscipit a feugiat et eros' },
    ],
    tags: ['luctus', 'sit', 'lacinia'],
  },
  {
    id: 6,
    name: 'Kannada',
    teacher: 23,
    lessons: [
      {
        name: 'Wanted',
        description:
          'metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet',
      },
    ],
    tags: ['sem', 'in', 'integer', 'pede', 'dictumst', 'dictumst', 'vivamus', 'massa', 'amet', 'congue'],
  },
  {
    id: 7,
    name: 'Kazakh',
    teacher: 22,
    lessons: [
      {
        name: 'Terra (a.k.a. Battle for Terra)',
        description:
          'sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel',
      },
    ],
    tags: ['sociis', 'ipsum', 'lobortis'],
  },
  {
    id: 8,
    name: 'New Zealand Sign Language',
    teacher: 20,
    lessons: [
      { name: 'Nativity!', description: 'bibendum morbi non quam nec dui luctus rutrum nulla tellus in' },
      {
        name: 'Into the West',
        description:
          'lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce',
      },
      {
        name: 'Hedwig and the Angry Inch',
        description: 'placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque',
      },
      {
        name: 'Bone Collector, The',
        description:
          'enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum',
      },
      {
        name: 'Death Defying Acts',
        description: 'nibh in lectus pellentesque at nulla suspendisse potenti cras in purus',
      },
    ],
    tags: ['nisl', 'elit', 'donec', 'id', 'integer', 'eleifend', 'nulla', 'odio', 'porttitor'],
  },
  {
    id: 9,
    name: 'Croatian',
    teacher: 26,
    lessons: [
      {
        name: 'Shadow of Angels (Schatten der Engel)',
        description:
          'lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed',
      },
      {
        name: 'Female Convict Scorpion: Jailhouse 41 (Joshuu sasori: Dai-41 zakkyo-bô)',
        description: 'volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus',
      },
      { name: 'Reef, The', description: 'massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi' },
      {
        name: 'Condemned, The',
        description: 'ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget',
      },
    ],
    tags: ['faucibus', 'nulla', 'duis', 'faucibus', 'sapien', 'velit'],
  },
  {
    id: 10,
    name: 'Norwegian',
    teacher: 1,
    lessons: [
      {
        name: 'Het Vonnis',
        description:
          'imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium',
      },
      { name: "Slugger's Wife, The", description: 'integer non velit donec diam neque vestibulum eget vulputate ut' },
      {
        name: 'I aionia epistrofi tou Antoni Paraskeva',
        description:
          'rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id',
      },
      {
        name: 'Eat Drink Man Woman (Yin shi nan nu)',
        description:
          'erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt',
      },
      {
        name: 'Express, The',
        description:
          'orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin',
      },
    ],
    tags: ['ac', 'non', 'neque'],
  },
  {
    id: 11,
    name: 'Kurdish',
    teacher: 18,
    lessons: [
      {
        name: 'La Belle équipe',
        description: 'felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat',
      },
      {
        name: 'Complicit',
        description: 'eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui',
      },
    ],
    tags: ['lacinia', 'in'],
  },
  {
    id: 12,
    name: 'Tajik',
    teacher: 44,
    lessons: [
      { name: 'Gambit', description: 'eget tempus vel pede morbi porttitor lorem id ligula suspendisse' },
      {
        name: 'American Heart',
        description:
          'auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede',
      },
      { name: 'Patty Hearst', description: 'congue risus semper porta volutpat quam pede lobortis ligula sit' },
      { name: 'SSSSSSS', description: 'convallis eget eleifend luctus ultricies eu nibh quisque id justo' },
    ],
    tags: ['iaculis'],
  },
  {
    id: 13,
    name: 'Greek',
    teacher: 35,
    lessons: [
      {
        name: 'Short Eyes',
        description:
          'non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non',
      },
    ],
    tags: ['neque', 'sodales', 'ac', 'dolor', 'donec', 'in', 'nulla', 'amet', 'convallis'],
  },
  {
    id: 14,
    name: 'Nepali',
    teacher: 30,
    lessons: [
      {
        name: 'Kid Millions',
        description: 'lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec',
      },
      {
        name: "White Men Can't Jump",
        description: 'a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor',
      },
      {
        name: 'Drogówka',
        description: 'egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero',
      },
      {
        name: 'Incredible Melting Man, The',
        description: 'sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam',
      },
      {
        name: "What's the Matter with Helen?",
        description: 'ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum',
      },
    ],
    tags: ['neque'],
  },
  {
    id: 15,
    name: 'Telugu',
    teacher: 30,
    lessons: [
      { name: 'Casanova', description: 'pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus' },
      {
        name: 'Veer Zaara',
        description:
          'consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer',
      },
      {
        name: 'Our Beloved Month of August (Aquele Querido Mês de Agosto)',
        description: 'donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi',
      },
    ],
    tags: ['nulla', 'vitae', 'curabitur', 'pede', 'vestibulum', 'vulputate', 'ligula'],
  },
  {
    id: 16,
    name: 'Luxembourgish',
    teacher: 29,
    lessons: [
      {
        name: 'Bachelorette',
        description: 'felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut',
      },
      {
        name: 'Three-Step Dance',
        description:
          'augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus',
      },
      {
        name: 'World of Apu, The (Apur Sansar)',
        description:
          'sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus',
      },
    ],
    tags: ['nam', 'vestibulum', 'non'],
  },
  {
    id: 17,
    name: 'Hungarian',
    teacher: 17,
    lessons: [
      { name: 'FairyTale: A True Story', description: 'eu nibh quisque id justo sit amet sapien dignissim vestibulum' },
    ],
    tags: ['nulla', 'sapien', 'vulputate', 'ultrices'],
  },
  {
    id: 18,
    name: 'Guaraní',
    teacher: 12,
    lessons: [
      {
        name: 'Sextette',
        description:
          'augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus',
      },
      {
        name: 'Anne Frank Remembered',
        description: 'amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis',
      },
      {
        name: 'Cat and the Canary, The',
        description: 'pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu',
      },
      {
        name: 'Passenger Side',
        description: 'augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis',
      },
      {
        name: 'Bright Lights (Adventures in Africa)',
        description: 'ipsum praesent blandit lacinia erat vestibulum sed magna at nunc',
      },
    ],
    tags: ['non', 'felis', 'metus'],
  },
  {
    id: 19,
    name: 'Bulgarian',
    teacher: 16,
    lessons: [
      {
        name: 'Best of Times, The (Mei li shi guang)',
        description:
          'interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit',
      },
    ],
    tags: ['rhoncus', 'et'],
  },
  {
    id: 20,
    name: 'Croatian',
    teacher: 19,
    lessons: [
      {
        name: 'Charlie Chan in Shanghai',
        description:
          'porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac habitasse platea dictumst morbi',
      },
      {
        name: 'Cabin Fever 2: Spring Fever',
        description:
          'dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa',
      },
      {
        name: 'ID:A',
        description: 'nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem',
      },
      {
        name: 'Secret of Kells, The',
        description:
          'pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien',
      },
    ],
    tags: ['at', 'nam', 'justo', 'nisl'],
  },
  {
    id: 21,
    name: 'Gujarati',
    teacher: 15,
    lessons: [
      {
        name: 'Legend of Sleepy Hollow, The',
        description:
          'ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus',
      },
      {
        name: 'Printed Rainbow',
        description: 'magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis',
      },
    ],
    tags: ['praesent', 'accumsan', 'faucibus', 'mollis', 'et', 'pellentesque', 'maecenas', 'integer', 'et'],
  },
  {
    id: 22,
    name: 'Quechua',
    teacher: 29,
    lessons: [
      {
        name: 'Body of War',
        description: 'vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
      },
    ],
    tags: ['cubilia', 'sollicitudin', 'lacus', 'integer', 'fusce'],
  },
  {
    id: 23,
    name: 'English',
    teacher: 30,
    lessons: [
      {
        name: 'Outfit, The',
        description: 'pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta',
      },
      {
        name: 'Evil Dead II (Dead by Dawn)',
        description: 'libero rutrum ac lobortis vel dapibus at diam nam tristique',
      },
      { name: 'Q', description: 'leo rhoncus sed vestibulum sit amet cursus id turpis integer' },
      {
        name: 'Trouble with Angels, The',
        description:
          'platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi',
      },
      {
        name: 'Breaker! Breaker!',
        description:
          'ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit',
      },
    ],
    tags: ['massa', 'eros'],
  },
  {
    id: 24,
    name: 'Swedish',
    teacher: 36,
    lessons: [
      {
        name: 'Out of Africa',
        description:
          'nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non',
      },
      {
        name: 'Across 110th Street',
        description:
          'nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac',
      },
      {
        name: 'RoboCop 3',
        description:
          'maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi',
      },
      {
        name: 'Generation Kill',
        description:
          'sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus',
      },
      {
        name: 'First Love (Primo Amore)',
        description:
          'primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse',
      },
    ],
    tags: ['lacus'],
  },
  {
    id: 25,
    name: 'Haitian Creole',
    teacher: 39,
    lessons: [
      {
        name: 'Murk (Mørke)',
        description:
          'nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec',
      },
      { name: 'Crime Spree', description: 'non velit nec nisi vulputate nonummy maecenas tincidunt lacus at' },
      {
        name: 'Tortilla Soup',
        description:
          'suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum',
      },
      {
        name: 'Nenette and Boni (Nénette et Boni)',
        description: 'tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit',
      },
      {
        name: 'Up the Sandbox',
        description:
          'id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis',
      },
    ],
    tags: ['odio'],
  },
  {
    id: 26,
    name: 'Fijian',
    teacher: 29,
    lessons: [
      {
        name: 'Hideaway',
        description: 'maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque',
      },
      {
        name: 'Colorado Territory',
        description:
          'elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis',
      },
      {
        name: 'Air Bud',
        description: 'neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui',
      },
    ],
    tags: ['tincidunt', 'nunc', 'vulputate', 'viverra', 'arcu', 'augue', 'ut'],
  },
  {
    id: 27,
    name: 'Nepali',
    teacher: 37,
    lessons: [
      {
        name: 'Five Fingers',
        description:
          'nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis',
      },
    ],
    tags: ['viverra', 'nulla', 'felis', 'mauris', 'tortor', 'aenean'],
  },
  {
    id: 28,
    name: 'Indonesian',
    teacher: 44,
    lessons: [
      {
        name: 'Songcatcher',
        description:
          'purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis',
      },
    ],
    tags: ['in', 'rutrum', 'vulputate', 'aliquam', 'duis', 'odio', 'magna'],
  },
  {
    id: 29,
    name: 'Dhivehi',
    teacher: 34,
    lessons: [
      {
        name: 'Chang: A Drama of the Wilderness',
        description:
          'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus',
      },
      {
        name: 'Blind Faith',
        description:
          'consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante',
      },
      {
        name: 'Four Sided Triangle',
        description:
          'odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit',
      },
    ],
    tags: ['ligula', 'mauris', 'nam', 'ultrices', 'id', 'donec', 'nunc', 'ut'],
  },
  {
    id: 30,
    name: 'Bosnian',
    teacher: 32,
    lessons: [
      {
        name: 'Box, The',
        description: 'integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna',
      },
    ],
    tags: ['vehicula', 'metus'],
  },
  {
    id: 31,
    name: 'Bengali',
    teacher: 39,
    lessons: [
      {
        name: 'Negative Happy Chainsaw Edge (Negatibu happî chênsô ejji)',
        description:
          'ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec',
      },
      {
        name: 'Violence at Noon (Hakuchu no torima)',
        description:
          'quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec',
      },
      {
        name: 'The Little Death',
        description:
          'primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut',
      },
      {
        name: 'World of Suzie Wong, The',
        description: 'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio',
      },
    ],
    tags: ['lobortis', 'nibh', 'proin'],
  },
  {
    id: 32,
    name: 'Moldovan',
    teacher: 28,
    lessons: [
      {
        name: 'Cherry Blossoms (Kirschblüten - Hanami)',
        description: 'vestibulum vestibulum ante ipsum primis in faucibus orci luctus et',
      },
      {
        name: 'Tintin and I',
        description: 'tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac',
      },
    ],
    tags: ['sed', 'et'],
  },
  {
    id: 33,
    name: 'Chinese',
    teacher: 1,
    lessons: [
      {
        name: 'Platoon',
        description: 'sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium',
      },
    ],
    tags: ['risus', 'quis', 'blandit', 'lacus'],
  },
  {
    id: 34,
    name: 'Lao',
    teacher: 42,
    lessons: [
      {
        name: 'Learning Curve, The',
        description:
          'cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum',
      },
      {
        name: 'Hangover, The',
        description:
          'erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae',
      },
      {
        name: "Off the Menu: The Last Days of Chasen's",
        description: 'non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh',
      },
      {
        name: 'Mark of the Devil (Hexen bis aufs Blut gequält)',
        description:
          'ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis',
      },
      {
        name: 'Wristcutters: A Love Story',
        description:
          'est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien',
      },
    ],
    tags: ['pretium', 'elementum', 'id', 'congue', 'neque', 'arcu'],
  },
  {
    id: 35,
    name: 'Portuguese',
    teacher: 41,
    lessons: [
      {
        name: 'Great Ziegfeld, The',
        description: 'a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut',
      },
      {
        name: 'Waist Deep',
        description:
          'consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices',
      },
      {
        name: 'Someone Like You (Unnaipol Oruvan)',
        description: 'a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla',
      },
      {
        name: 'Net 2.0, The ',
        description: 'suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in',
      },
    ],
    tags: ['sit', 'lacinia'],
  },
  {
    id: 36,
    name: 'Afrikaans',
    teacher: 7,
    lessons: [
      {
        name: 'Internecine Project, The',
        description: 'ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique',
      },
      {
        name: 'Hans (Kukkulan kuningas) ',
        description:
          'nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes',
      },
    ],
    tags: ['consectetuer', 'viverra', 'praesent'],
  },
  {
    id: 37,
    name: 'Pashto',
    teacher: 21,
    lessons: [
      {
        name: 'Whispers in the Dark',
        description:
          'porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit',
      },
      {
        name: "Breakfast at Tiffany's",
        description: 'sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante',
      },
      { name: 'Isle, The (Seom)', description: 'luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh' },
    ],
    tags: ['integer'],
  },
  {
    id: 38,
    name: 'Icelandic',
    teacher: 3,
    lessons: [
      {
        name: '8 Diagram Pole Fighter, The (a.k.a. Invincible Pole Fighter) (Wu Lang ba gua gun)',
        description: 'eu nibh quisque id justo sit amet sapien dignissim vestibulum',
      },
      {
        name: 'Win a Date with Tad Hamilton!',
        description:
          'magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis',
      },
      {
        name: 'First Deadly Sin, The',
        description: 'tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac',
      },
    ],
    tags: ['curabitur', 'est', 'etiam', 'hac', 'hac', 'magna'],
  },
  {
    id: 39,
    name: 'Fijian',
    teacher: 48,
    lessons: [
      {
        name: 'Scent of a Woman',
        description:
          'duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh',
      },
      {
        name: 'Taken',
        description: 'risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc',
      },
      { name: 'Hot Pepper', description: 'dui vel sem sed sagittis nam congue risus semper porta volutpat quam' },
      {
        name: 'Deficit (Déficit)',
        description:
          'sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed',
      },
    ],
    tags: ['condimentum', 'elit', 'praesent', 'cubilia', 'lacinia', 'erat', 'consequat', 'nulla'],
  },
  {
    id: 40,
    name: 'Hebrew',
    teacher: 29,
    lessons: [
      {
        name: 'Day of the Doctor, The',
        description: 'scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus',
      },
      { name: 'Tin Cup', description: 'nunc nisl duis bibendum felis sed interdum venenatis turpis enim' },
      {
        name: 'Late Shift, The',
        description: 'faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel',
      },
      {
        name: 'RocketMan (a.k.a. Rocket Man)',
        description: 'vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien',
      },
      {
        name: 'Spider-Man 3',
        description: 'neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis',
      },
    ],
    tags: ['diam', 'parturient'],
  },
  {
    id: 41,
    name: 'Estonian',
    teacher: 10,
    lessons: [
      {
        name: 'Going Places (Valseuses, Les)',
        description:
          'tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec',
      },
      {
        name: 'Ragnarok',
        description:
          'at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante',
      },
      {
        name: 'Yellow Cab Man, The',
        description: 'integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id',
      },
      {
        name: 'Hasty Heart, The',
        description: 'donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo',
      },
    ],
    tags: ['velit'],
  },
  {
    id: 42,
    name: 'Afrikaans',
    teacher: 3,
    lessons: [
      { name: 'Bug', description: 'eget tincidunt eget tempus vel pede morbi porttitor lorem id' },
      {
        name: 'Long Day Closes, The',
        description: 'pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper',
      },
      {
        name: 'Kurt & Courtney',
        description:
          'in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante',
      },
    ],
    tags: ['tortor', 'accumsan', 'consequat', 'erat', 'ut', 'aliquet', 'id', 'at'],
  },
  {
    id: 43,
    name: 'Burmese',
    teacher: 1,
    lessons: [
      {
        name: 'How to Make Money Selling Drugs',
        description: 'sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh',
      },
      {
        name: "You're Next",
        description: 'dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque',
      },
      { name: 'Sweet Rush (Tatarak)', description: 'sit amet eros suspendisse accumsan tortor quis turpis sed ante' },
      { name: 'Iron Eagle II', description: 'nulla suspendisse potenti cras in purus eu magna vulputate luctus cum' },
    ],
    tags: ['lobortis', 'at', 'curae', 'tempus', 'ante', 'mus', 'auctor', 'pharetra'],
  },
  {
    id: 44,
    name: 'Icelandic',
    teacher: 11,
    lessons: [
      {
        name: 'Luminarias',
        description:
          'sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam',
      },
      { name: 'Stage Struck', description: 'enim sit amet nunc viverra dapibus nulla suscipit ligula in' },
      {
        name: 'Three Stooges, The',
        description:
          'justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie',
      },
      {
        name: 'Pulling Strings',
        description: 'in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis',
      },
      {
        name: 'Hollow Reed',
        description:
          'rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat',
      },
    ],
    tags: ['est', 'sagittis', 'blandit', 'praesent', 'commodo', 'dui', 'vestibulum', 'nisl', 'non', 'ultrices'],
  },
  {
    id: 45,
    name: 'Kurdish',
    teacher: 40,
    lessons: [
      {
        name: '3some (Castillos de cartón)',
        description: 'duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi',
      },
      {
        name: 'Mac',
        description:
          'purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor eu',
      },
      {
        name: 'The New Centurions',
        description: 'semper sapien a libero nam dui proin leo odio porttitor id consequat in',
      },
      {
        name: "Killer's Kiss",
        description:
          'habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent',
      },
    ],
    tags: ['mattis', 'enim', 'venenatis', 'fermentum', 'ut', 'primis', 'erat', 'ipsum', 'id'],
  },
  {
    id: 46,
    name: 'Telugu',
    teacher: 28,
    lessons: [
      {
        name: 'Shopgirl',
        description:
          'aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia',
      },
      {
        name: 'Royal Scandal, The',
        description: 'lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea',
      },
      {
        name: 'Liberation of L.B. Jones, The',
        description:
          'pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla',
      },
    ],
    tags: ['ut', 'augue', 'pulvinar', 'nulla'],
  },
  {
    id: 47,
    name: 'Dari',
    teacher: 1,
    lessons: [
      {
        name: 'Hotel',
        description: 'tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula',
      },
      {
        name: "Relax... It's Just Sex",
        description:
          'neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim',
      },
      {
        name: 'Rampage',
        description:
          'nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo',
      },
      {
        name: 'Trip, The',
        description:
          'risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis',
      },
      {
        name: "Captain's Paradise, The",
        description:
          'dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia',
      },
    ],
    tags: ['enim', 'a', 'sed', 'lorem', 'tortor', 'in', 'nunc'],
  },
  {
    id: 48,
    name: 'Arabic',
    teacher: 34,
    lessons: [
      {
        name: 'Pretty Devils',
        description:
          'ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui',
      },
      {
        name: 'Five Dedicated to Ozu',
        description: 'vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa',
      },
      {
        name: 'Micmacs (Micmacs à tire-larigot)',
        description: 'in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit',
      },
    ],
    tags: ['lacinia', 'iaculis', 'leo', 'suspendisse', 'ultrices'],
  },
  {
    id: 49,
    name: 'Tok Pisin',
    teacher: 2,
    lessons: [
      {
        name: 'Once Upon a Time in Shanghai',
        description:
          'magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum',
      },
      {
        name: 'Living Skeleton, The (Kyûketsu dokuro-sen)',
        description: 'nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam',
      },
      {
        name: 'Movie Crazy',
        description:
          'nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum',
      },
      {
        name: 'No Logo',
        description:
          'orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis',
      },
    ],
    tags: ['sed', 'varius', 'lacus', 'luctus', 'eros', 'aliquam'],
  },
  {
    id: 50,
    name: 'Afrikaans',
    teacher: 34,
    lessons: [
      {
        name: 'Shrimp on the Barbie, The',
        description: 'lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum',
      },
      {
        name: 'Thank You a Lot',
        description:
          'lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra',
      },
      {
        name: 'Easier with Practice',
        description: 'dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio',
      },
    ],
    tags: ['ac', 'justo', 'vitae', 'blandit', 'nullam', 'mattis', 'vestibulum', 'vehicula', 'donec'],
  },
];

module.exports = coursesMock;
