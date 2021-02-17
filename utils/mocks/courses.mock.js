const coursesMock = [
  {
    id: '75wmB0qB9Q3X9PB3M5saS6XX',
    name: 'german',
    teacher: 'd642AVoE8w1BCK9R323yTl40',
    lessons: [
      {
        name: 'lesson1',
        description:
          'quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede',
      },
      {
        name: 'lesson2',
        description:
          'sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac',
      },
      {
        name: 'lesson3',
        description:
          'mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec',
      },
      {
        name: 'lesson4',
        description:
          'lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum',
      },
      { name: 'lesson5', description: 'quis tortor id nulla ultrices aliquet maecenas leo odio condimentum' },
      {
        name: 'lesson6',
        description:
          'ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at',
      },
      { name: 'lesson7', description: 'sapien non mi integer ac neque duis bibendum morbi non quam nec dui' },
      {
        name: 'lesson8',
        description:
          'id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
      },
    ],
    tags: [{ tags_id: 'K23x301441zO89hb25lv6Fl3' }, { tags_id: 'i31wp531G6HVR588WsdmJ4V7' }],
    students: [
      { user_id: 'i51Mb420I58sT86f61807OE1' },
      { user_id: 'vxagHD5nC2S7bc0i80Vg28M3' },
      { user_id: 'bUNS1ZG002F885I4kN73052B' },
    ],
    description:
      'lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa',
  },
  {
    id: '87934w7UI096kR5dHYZf163s',
    name: 'music',
    teacher: 'i51Mb420I58sT86f61807OE1',
    lessons: [
      {
        name: 'lesson\\d',
        description: 'convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis',
      },
      { name: 'lesson\\d', description: 'non velit nec nisi vulputate nonummy maecenas tincidunt lacus at' },
      {
        name: 'lesson\\d',
        description:
          'nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque',
      },
      {
        name: 'lesson\\d',
        description:
          'semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus',
      },
    ],
    tags: [
      { tags_id: 'C8AA23BGW7688H27t6kIO51P' },
      { tags_id: 'wxfMy121wuO0O898U3MH6B7Q' },
      { tags_id: 'Nb54797956u54O1qH3epoUN7' },
      { tags_id: 'F711eo31gIQ6077M2634L4kp' },
    ],
    students: [{ user_id: 'vxagHD5nC2S7bc0i80Vg28M3' }],
    description: 'sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci',
  },
  {
    id: 'KJJ7s9nYDHECTMG4Zx2656Xg',
    name: 'maths',
    teacher: 'd642AVoE8w1BCK9R323yTl40',
    lessons: [
      {
        name: 'lesson1',
        description:
          'natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum',
      },
      {
        name: 'lesson2',
        description:
          'faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor',
      },
      {
        name: 'lesson3',
        description:
          'sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci',
      },
    ],
    tags: [
      { tags_id: 'e95539qy0B0M69tUvl7Z1esW' },
      { tags_id: '0m5bx9N7tbz20H1zo8le5j5A' },
      { tags_id: 'G4t916v7hdMu069Z34Ehink2' },
      { tags_id: '5jIRV5671qX1232u0Mc0U8WV' },
      { tags_id: '9c3818G0apy8qEnvn4781A7Y' },
    ],
    students: [{ user_id: 'i51Mb420I58sT86f61807OE1' }, { user_id: 'd642AVoE8w1BCK9R323yTl40' }],
    description:
      'vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla',
  },
  {
    id: 'aJ1S00482n7y495r3104702l',
    name: 'maths',
    teacher: 'bUNS1ZG002F885I4kN73052B',
    lessons: [
      { name: 'lessond1', description: 'condimentum id luctus nec molestie sed justo pellentesque viverra pede' },
      {
        name: 'lesson2',
        description: 'quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras',
      },
      { name: 'lesson3', description: 'quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante' },
      {
        name: 'lesson4',
        description:
          'pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper',
      },
      {
        name: 'lesson5',
        description:
          'sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus',
      },
      {
        name: 'lesson6',
        description: 'facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus',
      },
      {
        name: 'lesson7',
        description: 'odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis',
      },
    ],
    tags: [
      { tags_id: '6IcHxw79YMn5086y9eMJ4530' },
      { tags_id: '5jNM95Xjkyw0776o3E878788' },
      { tags_id: 'Gt6r7C6i9mXjv1r5vgt65LSv' },
    ],
    students: [{ user_id: 'vxagHD5nC2S7bc0i80Vg28M3' }, { user_id: 'bUNS1ZG002F885I4kN73052B' }],
    description: 'lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla',
  },
  {
    id: 'qA2Hv145g132OpI247D5J3vM',
    name: 'painting',
    teacher: 'vxagHD5nC2S7bc0i80Vg28M3',
    lessons: [
      {
        name: 'lesson1',
        description:
          'donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer',
      },
      {
        name: 'lesson2',
        description: 'nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor',
      },
      { name: 'lesson3', description: 'nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id' },
      {
        name: 'lesson4',
        description: 'luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in',
      },
      { name: 'lesson5', description: 'tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed' },
      {
        name: 'lesson6',
        description:
          'suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare',
      },
      {
        name: 'lesson7',
        description:
          'donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis',
      },
      {
        name: 'lesson8',
        description: 'vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a',
      },
      { name: 'lesson\\d', description: 'ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo' },
    ],
    tags: [
      { tags_id: '65Ja8JH93M48R8l97m0R9tYW' },
      { tags_id: '33314a48E82h0o90j0274762' },
      { tags_id: '9964Wu3h7QW9v139155lpkV0' },
    ],
    students: [{ user_id: 'd642AVoE8w1BCK9R323yTl40' }],
    description: 'sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam',
  },
  {
    id: '3mYF5D93aQKnCZ0Z8wmb931j',
    name: 'physics',
    teacher: 'bUNS1ZG002F885I4kN73052B',
    lessons: [
      { name: 'lesson1', description: 'justo in hac habitasse platea dictumst etiam faucibus cursus urna ut' },
      {
        name: 'lesson2',
        description: 'mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus',
      },
      {
        name: 'lesson3',
        description:
          'vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat',
      },
      {
        name: 'lesson4',
        description: 'purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient',
      },
      {
        name: 'lesson5',
        description:
          'ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
      },
      {
        name: 'lesson6',
        description:
          'ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel',
      },
      {
        name: 'lesson7',
        description: 'ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui',
      },
    ],
    tags: [{ tags_id: '59v4vO66J40010TLd41yg7Dm' }, { tags_id: 'UUJ12942tzn952Mv6M5OPdOR' }],
    students: [{ user_id: 'vxagHD5nC2S7bc0i80Vg28M3' }, { user_id: 'i51Mb420I58sT86f61807OE1' }],
    description: 'elit proin risus praesent lectus vestibulum quam sapien varius ut blandit',
  },
  {
    id: '93ZkN1b77Nyai6fg1sOM4v6Q',
    name: 'english',
    teacher: 'bUNS1ZG002F885I4kN73052B',
    lessons: [
      {
        name: 'lesson1',
        description: 'platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris',
      },
      {
        name: 'lesson2',
        description:
          'tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam',
      },
      {
        name: 'lesson3',
        description: 'ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla',
      },
      {
        name: 'lesson4',
        description: 'posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam',
      },
      {
        name: 'lesson5',
        description: 'donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis',
      },
      { name: 'lesson6', description: 'ultrices posuere cubilia curae nulla dapibus dolor vel est donec' },
      {
        name: 'lesson7',
        description:
          'in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer',
      },
    ],
    tags: [{ tags_id: 'l01vnj7NW3m378W7856F90J2' }],
    students: [
      { user_id: 'sM2LO1xL6A8xmkrwgt991s0F' },
      { user_id: 'i51Mb420I58sT86f61807OE1' },
      { user_id: 'd642AVoE8w1BCK9R323yTl40' },
    ],
    description: 'morbi porttitor lorem id ligula suspendisse ornare consequat lectus in',
  },
  {
    id: 'SFL528f8v4p048Z9h2WdmE10',
    name: 'german',
    teacher: 'vxagHD5nC2S7bc0i80Vg28M3',
    lessons: [
      {
        name: 'lesson1',
        description: 'justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id',
      },
      { name: 'lesson2', description: 'arcu libero rutrum ac lobortis vel dapibus at diam nam' },
      {
        name: 'lesson3',
        description:
          'eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris',
      },
      {
        name: 'lesson4',
        description:
          'nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor',
      },
      {
        name: 'lesson5',
        description:
          'et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit',
      },
      {
        name: 'lesson6',
        description:
          'consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis',
      },
      {
        name: 'lesson7',
        description:
          'rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede',
      },
      {
        name: 'lesson8',
        description:
          'at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam',
      },
      {
        name: 'lesson9',
        description:
          'velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum',
      },
    ],
    tags: [{ tags_id: 'C3f5RDuGEC4e6308mS1HnO5u' }],
    students: [{ user_id: 'vxagHD5nC2S7bc0i80Vg28M3' }, { user_id: 'bUNS1ZG002F885I4kN73052B' }],
    description: 'dapibus nulla suscipit ligula in lacus curabitur at ipsum ac',
  },
  {
    id: 'C1l78f0T674875JP156410za',
    name: 'german',
    teacher: 'i51Mb420I58sT86f61807OE1',
    lessons: [
      {
        name: 'lesson1',
        description: 'turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin',
      },
      {
        name: 'lesson2',
        description: 'ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu',
      },
      { name: 'lesson3', description: 'velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus' },
      {
        name: 'lesson4',
        description:
          'massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in',
      },
      { name: 'lesson5', description: 'metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet' },
      {
        name: 'lesson6',
        description:
          'a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue',
      },
    ],
    tags: [
      { tags_id: '3qG5m899A9Kr8zKp2sg7I3VH' },
      { tags_id: '0Q66z9773I8027o2q5B7D9SL' },
      { tags_id: 'x0o78wW5pY40lRDI9Wu022NP' },
    ],
    students: [{ user_id: 'd642AVoE8w1BCK9R323yTl40' }],
    description: 'sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet',
  },
  {
    id: '9670K5bl3MU995T6xBCR697Z',
    name: 'maths',
    teacher: 'd642AVoE8w1BCK9R323yTl40',
    lessons: [
      {
        name: 'lesson1',
        description:
          'egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis',
      },
      {
        name: 'lesson2',
        description:
          'ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce',
      },
    ],
    tags: [{ tags_id: '3z1rkAkA5134603Ei56P291i' }],
    students: [{ user_id: 'i51Mb420I58sT86f61807OE1' }, { user_id: 'vxagHD5nC2S7bc0i80Vg28M3' }],
    description: 'vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit',
  },
];

module.exports = coursesMock;
