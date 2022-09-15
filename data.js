const songs = [
  {
    _id: {
      $oid: '632071e8810488b932598830',
    },
    Singer: 'Grup Güney',
    SongName: 'Emine',
    Url: 'https://www.youtube.com/watch?v=UGw_kziw9bM',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598831',
    },
    Singer: 'Murat Göğebakan',
    SongName: 'Vurgunum',
    Url: 'https://www.youtube.com/watch?v=3z0IT3bXm_E',
    WhoLike: 'Kagan-Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598832',
    },
    Singer: 'Seda Tripkolic',
    SongName: 'Ne olur gitme',
    Url: 'https://www.youtube.com/watch?v=7xG9AwCcoy8',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598833',
    },
    Singer: 'Can bonomo',
    SongName: 'Hikayem bitmedi',
    Url: 'https://www.youtube.com/watch?v=BSNiX4AjVgY',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598834',
    },
    Singer: 'Manga',
    SongName: 'Bir kadın çizeceksin',
    Url: 'https://www.youtube.com/watch?v=M-rZ3602Lm8',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598835',
    },
    Singer: 'Gece yolculari',
    SongName: 'Meyhaneler sen',
    Url: 'https://www.youtube.com/watch?v=_sB9FEy4VFo',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598836',
    },
    Singer: 'Sertab erener',
    SongName: 'Olsun',
    Url: 'https://www.youtube.com/watch?v=sXXPgal-BM0',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598837',
    },
    Singer: 'Ziynet sali',
    SongName: 'Dağınık yatak',
    Url: 'https://www.youtube.com/watch?v=62njrCShlDc',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598838',
    },
    Singer: 'Eylem aktas',
    SongName: 'Fikrimin ince gülü',
    Url: 'https://www.youtube.com/watch?v=hDxRGej7G_Q',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598839',
    },
    Singer: 'Gökhan özen',
    SongName: 'Benden sorulur',
    Url: 'https://www.youtube.com/watch?v=2-vFHLzQ1CE',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259883a',
    },
    Singer: 'Haluk levent',
    SongName: 'Anlasana',
    Url: 'https://www.youtube.com/watch?v=S9_yk0Vnr8Y',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259883b',
    },
    Singer: 'Edip akbayram',
    SongName: 'Aldirma gonul',
    Url: 'https://www.youtube.com/watch?v=-rd-FXixlwU',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259883c',
    },
    Singer: 'Ferhat Göçer',
    SongName: 'Kalp kırılsa da sever',
    Url: 'https://www.youtube.com/watch?v=dMwKjHO58cM',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259883d',
    },
    Singer: 'Mor ve Ötesi',
    SongName: 'Bir derdim var',
    Url: 'https://www.youtube.com/watch?v=qnWYl9o68Nc',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b93259883e',
    },
    Singer: 'Demet sagiroglu',
    SongName: 'Arnavut kaldirimi',
    Url: 'https://www.youtube.com/watch?v=bdso4qwyul0',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259883f',
    },
    Singer: 'Haluk levent',
    SongName: 'Elfida',
    Url: 'https://www.youtube.com/watch?v=FpvReFa_uXo',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598840',
    },
    Singer: 'Haluk levent',
    SongName: 'Ben bu gece ölmezsem',
    Url: 'https://www.youtube.com/watch?v=kMwMA7LBIMw',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598841',
    },
    Singer: 'Ankaralı Namık',
    SongName: 'Şişeler',
    Url: 'https://www.youtube.com/watch?v=vNEnF6Y51hA',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598842',
    },
    Singer: 'Tayfun',
    SongName: 'Bide seviyom seni',
    Url: 'https://www.youtube.com/watch?v=phPq1rmc538',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598843',
    },
    Singer: 'Volkan Konak',
    SongName: 'Aleni aleni',
    Url: 'https://www.youtube.com/watch?v=kH9j9zHxj1Q',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598844',
    },
    Singer: 'Ebru gundes',
    SongName: 'Yaparım bilirsin',
    Url: 'https://www.youtube.com/watch?v=Z8FizcVEiJY',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598845',
    },
    Singer: 'Gulben ergen',
    SongName: 'Kandiramazsin  beni ',
    Url: 'https://www.youtube.com/watch?v=Q6VeOyhPC6A',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598846',
    },
    Singer: 'Oguzhan koc',
    SongName: 'Vermem seni',
    Url: 'https://www.youtube.com/watch?v=BYBGnwwfh9A&list=RDMM&index=14',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598847',
    },
    Singer: 'Can Yüce',
    SongName: 'Aklım gider aklina',
    Url: 'https://www.youtube.com/watch?v=H-GcBqW_Jt0&list=RDMM&index=1',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598848',
    },
    Singer: 'Mustafa Sandal',
    SongName: 'Aska Yürek Gerek',
    Url: 'https://www.youtube.com/watch?v=W0HOxT-IsV4',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598849',
    },
    Singer: 'Tarkan',
    SongName: 'Dudu',
    Url: 'https://www.youtube.com/watch?v=SCZgGVqVsbY',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b93259884a',
    },
    Singer: 'Turan Sahin',
    SongName: 'Ya Ben Anlatamadum',
    Url: 'https://www.youtube.com/watch?v=NhNjBQvcVYY',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259884b',
    },
    Singer: 'Haluk  Levent',
    SongName: 'Yollarda bulurum senı ',
    Url: 'https://www.youtube.com/watch?v=bpHBibwhkQE&list=RDwIQHqDiLGR0',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259884c',
    },
    Singer: 'Barış Manco',
    SongName: 'Gül Pembe',
    Url: 'https://www.youtube.com/watch?v=CuV0H-89HAE',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259884d',
    },
    Singer: 'Ogun Şanlısoy',
    SongName: 'Saydım',
    Url: 'https://www.youtube.com/watch?v=3YL4Btzcf2Q',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259884e',
    },
    Singer: 'Seda tripkolic',
    SongName: 'Herşeyden uzak',
    Url: 'https://www.youtube.com/watch?v=jiZ6nr5HoSQ',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259884f',
    },
    Singer: 'Tuna Velibaşoğlu',
    SongName: 'Kal ölene kadar ',
    Url: 'https://www.youtube.com/watch?v=wflNfzIsjD8',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598850',
    },
    Singer: 'Hayko Cepkin',
    SongName: 'Dans et',
    Url: 'https://www.youtube.com/watch?v=s2SAH7KLDf0',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598851',
    },
    Singer: 'Gökhan özen',
    SongName: 'Budala',
    Url: 'https://www.youtube.com/watch?v=DxP1V5SNiVc&list=RDMM&start_radio=1&rv=H-GcBqW_Jt0',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598852',
    },
    Singer: 'Mümin sarıkaya',
    SongName: 'Ben yoruldum hayat',
    Url: 'https://www.youtube.com/watch?v=K7z3590-Mt0',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598853',
    },
    Singer: 'Indila',
    SongName: 'Love Story',
    Url: 'https://www.youtube.com/watch?v=DF3XjEhJ40Y',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598854',
    },
    Singer: 'Indila',
    SongName: 'Ego',
    Url: 'https://www.youtube.com/watch?v=QwMyhL3buFE',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598855',
    },
    Singer: 'Indila',
    SongName: 'Mini World',
    Url: 'https://www.youtube.com/watch?v=h9zNNGXBC5Q',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598856',
    },
    Singer: 'Indila',
    SongName: 'Parle a ta ta tete',
    Url: 'https://www.youtube.com/watch?v=ZthUo-Z97uw',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598857',
    },
    Singer: 'Haluk  Levent',
    SongName: 'Aşkın Mapushane',
    Url: 'https://www.youtube.com/watch?v=FWx_yjzyRC4',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598858',
    },
    Singer: 'Isaac Chambers',
    SongName: 'Move on',
    Url: 'https://www.youtube.com/watch?v=mY3PTsit4Eo',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598859',
    },
    Singer: 'Taiwan Mc',
    SongName: 'Nuska',
    Url: 'https: //www.youtube.com/watch?v=Lax4pD6hOlY',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b93259885a',
    },
    Singer: 'Taiwan Mc',
    SongName: 'Mr.baylon',
    Url: 'https://www.youtube.com/watch?v=3tzXDE7zQGk',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b93259885b',
    },
    Singer: 'Hayko Cepkin',
    SongName: 'Geç kaldım',
    Url: 'https://www.youtube.com/watch?v=p5ugWu9NEGg',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b93259885c',
    },
    Singer: 'Erkin koray',
    SongName: 'Şaskın',
    Url: 'https://www.youtube.com/watch?v=L-UwhfKyOyQ',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b93259885d',
    },
    Singer: 'Hayko Cepkin',
    SongName: 'Fırtınam',
    Url: 'https://www.youtube.com/watch?v=ah-K6UMjIHA',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b93259885e',
    },
    Singer: 'Indila',
    SongName: 'Sos',
    Url: 'https://www.youtube.com/watch?v=m65jhGwtWrg',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259885f',
    },
    Singer: 'Manga',
    SongName: 'El Aman',
    Url: 'https://www.youtube.com/watch?v=2waY_TgSEyA',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598861',
    },
    Singer: 'Bege',
    SongName: 'Nazar',
    Url: 'https://music.youtube.com/watch?v=pH9lNG5V-is&feature=share',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598862',
    },
    Singer: 'Athena',
    SongName: 'Kime ne',
    Url: 'https://music.youtube.com/watch?v=oof-09Ge_d0&feature=share',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598863',
    },
    Singer: 'Ezhel',
    SongName: 'Küvet',
    Url: 'https://music.youtube.com/watch?v=XrBgJ641c6w&feature=share',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598864',
    },
    Singer: 'Ezhel',
    SongName: 'Şehrimin Tadi',
    Url: 'https://music.youtube.com/watch?v=NwODqk4KwBM&feature=share',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598865',
    },
    Singer: 'Bege',
    SongName: 'Neresi',
    Url: 'https://music.youtube.com/watch?v=TzhpNXHi3yA&feature=share',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598866',
    },
    Singer: 'Ceg',
    SongName: 'Şampanya',
    Url: 'https://music.youtube.com/watch?v=Xv12AJguUWA&feature=share',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598867',
    },
    Singer: 'Contral ve Anıl Pıyancı',
    SongName: 'Tavşan',
    Url: 'https://music.youtube.com/watch?v=s7OV6oV9Btw',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598868',
    },
    Singer: 'Lil Zey',
    SongName: 'Zor',
    Url: 'https://music.youtube.com/watch?v=9v2kRYLOU9c&list=RDAMVM9v2kRYLOU9c',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598869',
    },
    Singer: 'Khontkar ve Ben Fero',
    SongName: 'Jenga',
    Url: 'https://music.youtube.com/watch?v=5WfWIgRFBMI',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b93259886a',
    },
    Singer: 'Norm Ender',
    SongName: 'Kaktus',
    Url: 'https://music.youtube.com/watch?v=17a3pzgF2AU&feature=share',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b93259886b',
    },
    Singer: 'Lil Zey',
    SongName: 'Heveslenmem',
    Url: 'https://music.youtube.com/watch?v=eyMOHyYx8Ls&feature=share',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b93259886c',
    },
    Singer: 'Grogi ve Khontkar',
    SongName: 'Gelemem',
    Url: 'https://music.youtube.com/watch?v=mRnIZZDHD34&list=RDAMVMmRnIZZDHD34',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b93259886d',
    },
    Singer: 'Ezhel',
    SongName: 'Hayir',
    Url: 'https://music.youtube.com/watch?v=eSBMmJb6Ylw&feature=share',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b93259886e',
    },
    Singer: 'Eminem Snoop Dogg',
    SongName: 'From the D 2The LBC ',
    Url: 'https://www.youtube.com/watch?v=RjrA-slMoZ4',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b93259886f',
    },
    Singer: 'Eminem',
    SongName: 'The real slim Shady',
    Url: 'https://www.youtube.com/watch?v=eJO5HU_7_1w',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598870',
    },
    Singer: 'Eminem',
    SongName: 'Love The Way you',
    Url: 'https://www.youtube.com/watch?v=uelHwf8o7_U',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598871',
    },
    Singer: 'Eminem',
    SongName: 'Encore',
    Url: 'https://www.youtube.com/watch?v=_E0A1lwdzVs',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598872',
    },
    Singer: 'Eninem',
    SongName: 'Till l Collapse',
    Url: 'https://www.youtube.com/watch?v=Obim8BYGnOE',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598873',
    },
    Singer: 'Eminem',
    SongName: 'The monster',
    Url: 'https://www.youtube.com/watch?v=EHkozMIXZ8w',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598874',
    },
    Singer: 'Eminem',
    SongName: 'No love',
    Url: 'https://www.youtube.com/watch?v=KV2ssT8lzj8',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598875',
    },
    Singer: 'Eminem',
    SongName: 'Ass like that',
    Url: 'https://www.youtube.com/watch?v=WQ2cA2k4lYs',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598876',
    },
    Singer: 'Eminem',
    SongName: 'Hailies Song',
    Url: 'https://www.youtube.com/watch?v=tD5oQQ-CQ4E',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598877',
    },
    Singer: 'Eminem',
    SongName: 'Beautiful',
    Url: 'https://www.youtube.com/watch?v=lgT1AidzRWM',
    WhoLike: 'Kagan',
  },
  {
    _id: {
      $oid: '632071e8810488b932598878',
    },
    Singer: 'Hidra',
    SongName: 'Ölüme inat',
    Url: 'https://www.youtube.com/watch?v=4jM2iTUfAns',
    WhoLike: 'Kagan-Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b932598879',
    },
    Singer: 'Zen G',
    SongName: 'Alev alev',
    Url: 'https://www.youtube.com/watch?v=wPXzA09JPPo',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259887a',
    },
    Singer: 'Sagopa kajmer',
    SongName: 'istisnalar kaideyi bozmaz',
    Url: 'https://www.youtube.com/watch?v=XDSGEx6ZPXY',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259887b',
    },
    Singer: 'Teoman',
    SongName: 'Bana oyle bakma',
    Url: 'https://www.youtube.com/watch?v=x4c_mOCsw3E',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259887c',
    },
    Singer: 'Teoman',
    SongName: 'Sevdim bir kere',
    Url: 'https://www.youtube.com/watch?v=C54MOn6n_Ao',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259887d',
    },
    Singer: 'Teoman',
    SongName: 'Napim tabiatim boyle',
    Url: 'https://www.youtube.com/watch?v=Sdw7eaCSzhg',
    WhoLike: 'Emine',
  },
  {
    _id: {
      $oid: '632071e8810488b93259887e',
    },
    Singer: 'Teoman',
    SongName: 'Uykusuz he egec',
    Url: 'https://www.youtube.com/watch?v=Alc-LuD24ns',
    WhoLike: 'Emine',
  },
];

module.exports = songs;