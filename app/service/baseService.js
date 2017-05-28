/* eslint-disable camelcase,no-undef */
import _ from 'lodash';
import uuid from 'uuid';
import { browserHistory } from 'react-router';

import RestApiClient from './restApiClient';
import { getCookie, setCookie, deleteCookie } from './cookieHelper';

class BaseService {
  constructor() {
    this.requestHeaders = {
      'Content-Type': 'application/json',
    };
    this.token = null;
    if (getCookie('access-token')) {
      this.token = getCookie('access-token');
    }
    this.entryUrl = `${window.location.origin}/`;
    this.apiClient = new RestApiClient({
      entryUrl: this.entryUrl,
      requestHeaders: this.requestHeaders,
      token: this.token,
    });
    this.pendingRequests = {};
  }

  abortRequests(namespace = 'default') {
    Object.keys(this.pendingRequests).forEach((id) => {
      if (namespace === false || namespace === this.pendingRequests[id].namespace) {
        this.pendingRequests[id].request.abort();
        delete this.pendingRequests[id];
      }
    });
  }

  storeRequest(request, namespace = 'default') {
    const id = uuid.v4();
    this.pendingRequests[id] = { namespace, request };
    request
      .on('response', () => delete this.pendingRequests[id])
      .on('error', () => delete this.pendingRequests[id]);
  }

  /**
   * Обрабатывает ошибки выполнения запроса
   * @param error
   * @param response
   * @returns {Promise}
   */
  processLoginResponse(error, response) {
    const context = this;
    const token_type = response.body.token_type;
    const access_token = response.body.access_token;
    return new Promise((resolve, reject) => {
      if (!error) {
// eslint-disable-next-line camelcase
        context.token = `${token_type} ${access_token}`;
        setCookie('access-token', context.token);
        context.apiClient = new RestApiClient({
          entryUrl: context.entryUrl,
          requestHeaders: context.requestHeaders,
          token: context.token,
        });
        resolve(response.body);
      } else {
        reject({
          status: error && error.status,
          message: _.get(error, 'response.body.error_description') ||
          _.get(error, 'response.message') ||
          _.get(error, 'response.body.message') ||
          'Unexpected error',
        });
      }
    });
  }

  /**
   * Обрабатывает ошибки выполнения запроса
   * @param error
   * @param response
   * @returns {Promise}
   */
  processResponse(error, response) {
    return new Promise((resolve, reject) => {
      if (!error) {
        resolve(response.body);
      } else {
        if (error.status === 401 || error.status === 403) {
          this.logout();
          browserHistory.push('/login');
        }
        reject({
          status: error && error.status,
          message: _.get(error, 'response.body.error_description') ||
          _.get(error, 'response.message') ||
          _.get(error, 'response.body.message') ||
          'Unexpected error',
        });
      }
    });
  }

  login(login, password) {
    setCookie('username', login);

    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
      return new Promise((resolve, reject) => {
        this.processLoginResponse(null, {
          body: {
            access_token: 'fdd44498-ea99-4d7f-b953-e5d977194e37',
            token_type: 'bearer',
            refresh_token: '0c16ace4-ec7a-42cb-b44a-20bbc8e8fad8',
            expires_in: 25355,
            scope: 'openid',
          },
        }).then(resolve, reject);
      })
        .then(() => {
          if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
            return new Promise((resolve, reject) => {
              this.processResponse(null, { body: { id: 309, email: 'demo@', userName: 'demo' } }).then(resolve, reject);
            });
          }
          return new Promise((resolve, reject) => {
            this.apiClient
              .get(`hw/services/user?email=${getCookie('username')}`)
              .end((error, response) => {
                this.processResponse(error, response).then(resolve, reject);
              });
          });
        });
    }
    return new Promise((resolve, reject) => {
      this.apiClient
        .post(`hw/oauth/token?grant_type=password&client_id=acme&client_secret=acmesecret&username=${login}&password=${password}`)
        .end((error, response) => {
          this.processLoginResponse(error, response).then(resolve, reject);
        });
    })
      .then(() => {
        if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
          return new Promise((resolve, reject) => {
            this.processResponse(null, { body: { id: 309, email: 'demo@', userName: 'demo' } }).then(resolve, reject);
          });
        }
        return new Promise((resolve, reject) => {
          this.apiClient
            .get(`hw/services/user?email=${getCookie('username')}`)
            .end((error, response) => {
              this.processResponse(error, response).then(resolve, reject);
            });
        });
      });
  }

  singup(fields) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .post('hw/services/user', fields, {})
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject);
        });
    });
  }

  deleteDocumentById(id) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .delete(`hw/services/files/svg/${id}`)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject);
        });
    });
  }

  rememberPassword(login) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .post('oauth/uaa/user/password/restore', { login }, {})
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject);
        });
    });
  }

  getDocuments(tags, predicate) {
    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
      return new Promise((resolve, reject) => {
        this.processResponse(null, {
          body: [{
            id: 431,
            fileName: "Evgeniy' notebook 16-1_p98.svg",
            recognizedContent: '<p># HW #MEETING: Alexey Shapiguzou</p>\n<p>heavy use of lab books<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;excited by the pen<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;orders one as present<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;manages projects as folders<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;writes measurement table in the book<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;retypes to Excel<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#HW #idea<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use pen in data collection in developing countries</p>\n<p>Enrico: national parks<br>\n &nbsp;&nbsp;&nbsp;&nbsp;Mar- Leachy foundation<br>\n &nbsp;&nbsp;&nbsp;&nbsp;TM - Moscquito</p>',
            originalContent: '# HW t#MEETING #e: Alexey Shapiguzou\nheavy use of lab books\nexcited by the pen\norders one as present\nmanages projects as folders\nwrites measurement table in the book\nretypes to Excel\n# H W #idea\nUse pen in data collection in\ndeveloping countries "\nRnrrco: national perks\nMar- Leachy foundation\nT M-Mosgurtoe',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 404, value: 'todo', title: 'todo', ownerId: 309 }, {
              id: 408,
              value: 'meeting',
              title: 'meeting',
              ownerId: 309,
            }, { id: 416, value: 'mockup', title: 'mockup', ownerId: 309 }, {
              id: 464,
              value: 'ec',
              title: null,
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 338,
            fileName: "Evgeniy' notebook 16-1_p18_20170312_071338.svg",
            recognizedContent: '<p># meeting tvazminne need to come up worth estimate for course meeting data. Though the browser Call Marko to set up a meeting next week create a quote 28.9.16 #ECN, Glebe, Otso Need&nbsp;</p>\n<p>to integrate simple R script in Earth Cape. Make Earth Cape re-distributable moth own database. Installer moth all pre-requisites # Meeting: Tnazminne 29.9.2016 Exchange specs → Marko sends to me . then I make estimate start moth a part of the project this year is possible October busy , Nov-do work</p>',
            originalContent: '# meeting\ntvazminne\nneed to come up worth\nestimate for course\nmeeting\ndata. Though the browser\nCall Marko to set up a meeting\nnext week\ncreate a quote\n28.9.16 #ECN, Glebe, Otso\nNeed to integrate simple R script\nin Earth Cape.\nMake Earth Cape re-distributable\nmoth own database.\nInstaller moth all pre-requisites\n# Meeting: Tnazminne 29.9.2016\nExchange specs → Marko sends to me\n. then I make estimate\nstart moth a part of the project\nthis year is possible\nOctober busy , Nov-do work',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 410, value: 'prj_ecn', title: 'prj_ecn', ownerId: 309 }, {
              id: 408,
              value: 'meeting',
              title: 'meeting',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 411,
              value: 'prj_tv',
              title: 'prj_tv',
              ownerId: 309,
            }],
          }, {
            id: 316,
            fileName: "Evgeniy' notebook 16-1_p3_20170312_071259.svg",
            recognizedContent: '<p>H prep H ECN Poarkal#meeting preqparahrm catalog stabs files → post of F- B import new data database local copy dashboards demo data types UI converting 1. Convert scheme 2. run ECDB 3. "meng" option mug hangs by my sync failed!</p>',
            originalContent: 'H prep\nH ECN Poarkal#meeting preqparahrm\ncatalog\nstabs files → post of F- B\nimport new data\ndatabase local copy\ndashboards\ndemo data types\nUI\nconverting\n1. Convert scheme\n2. run ECDB\n3. "meng" option\nmug hangs\nby my sync\nfailed!',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 410, value: 'prj_ecn', title: 'prj_ecn', ownerId: 309 }, {
              id: 408,
              value: 'meeting',
              title: 'meeting',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 409,
              value: 'prep',
              title: 'prep',
              ownerId: 309,
            }],
          }, {
            id: 460,
            fileName: "Evgeniy' notebook 16-1_p196_20170412_100308.svg",
            recognizedContent: '11.04.2017-<br/>* todo<br/>o #TM get imperial database up to date<br/>#TM-s. update central<br/>:<br/># TM-1 field update spreadsheet generator<br/>0 Import mad birds and contact Hannah.<br/>0 frx error message when deleting BCG o TM.<br/>0 #slink: sharing concept document<br/># ecn: funding for 0 too<br/>0 #ecn: message final<br/>0<br/># ec: pay tax<br/>1#ecdb: web he ecn is behind database',
            originalContent: '11.04.2017-<br/>* todo<br/>o #TM get imperial database up to date<br/>#TM-s. update central<br/>:<br/># TM-1 field update spreadsheet generator<br/>0 Import mad birds and contact Hannah.<br/>0 frx error message when deleting BCG o TM.<br/>0 #slink: sharing concept document<br/># ecn: funding for 0 too<br/>0 #ecn: message final<br/>0<br/># ec: pay tax<br/>1#ecdb: web he ecn is behind database',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 464,
              value: 'ec',
              title: null,
              ownerId: 309,
            }, { id: 463, value: 'TM', title: null, ownerId: 309 }, {
              id: 462,
              value: 'ecdb',
              title: null,
              ownerId: 309,
            }, { id: 461, value: 'ecn', title: null, ownerId: 309 }],
          }, {
            id: 318,
            fileName: "Evgeniy' notebook 16-1_p4_20170312_071301.svg",
            recognizedContent: '<p># Hw #diagram r ttMeehmgmrfh@Leokhrrng07.og. 2016 idea about lab book and neo pen He has one trusted developer company in Moscow (moving to Luxemburg) and one in helshhr Pihlajamaki) ( Leo is potentially interested in developing this as a busyness NI has also hardware emporium e. g. build in GPs into notebook built in? (solar chasms?) Cops D) KLERRKT ⇐ ÷ BOOK klekkt web → ever hole (desktop) page → earth bape ruler - it → blehbot - - - ↳ i Nat - - f 1111 barcode Dm 14 to integrate moth can I lebbl or</p>',
            originalContent: '# Hw #diagram\nr\nttMeehmgmrfh@Leokhrrng07.og. 2016\nidea about lab book and neo pen\nHe has one trusted developer\ncompany in Moscow (moving to\nLuxemburg) and one in helshhr\nPihlajamaki)\n(\nLeo is potentially interested in\ndeveloping this as a busyness\nNI has also hardware emporium\ne. g. build in GPs into notebook\nbuilt in? (solar chasms?)\nCops\nD)\nKLERRKT\n⇐ ÷\nBOOK\nklekkt web\n→ ever hole\n(desktop)\npage\n→ earth bape\nruler\n-\nit\n→ blehbot\n-\n-\n-\n↳ i Nat\n-\n-\nf\n1111\nbarcode\nDm\n14\nto integrate moth\ncan\nI lebbl or',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 408,
              value: 'meeting',
              title: 'meeting',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 344,
            fileName: "Evgeniy' notebook 16-1_p23_20170312_071347.svg",
            recognizedContent: '<p>H Hw #klekkt #data klebkt Database Data Row (U id, spec. fields, var. fields loe. data, timestamp) species G strokes) Page (Ui d, doe, rows, images, locator) Book (aid, user (owner)) Location (Uid, cord., name) Nedra-images, sounds, files Gps tracks / logs User Project Event (collectors) 15 3) blob storage Page stroke date 1user) Media Gps data Lehihkoinen Alekgi meeting 5.10.2016 museum B L fi lo h (all Parraga in B) aehne ringers 500 confirmed: data servic is very needed per neck I page (em. photo) 1, t.is netbook per year s Transect: printed maps afandgps talked also to der in II → sound very invited \\</p>',
            originalContent: 'H Hw #klekkt #data\nklebkt\nDatabase\nData Row (U id, spec. fields, var. fields\nloe. data, timestamp)\nspecies\nG strokes)\nPage (Ui d, doe, rows, images, locator)\nBook (aid, user (owner))\nLocation (Uid, cord., name)\nNedra-images, sounds, files\nGps tracks / logs\nUser\nProject\nEvent (collectors)\n15 3) blob storage\nPage stroke date\n1user) Media\nGps data\nLehihkoinen Alekgi\nmeeting\n5.10.2016\nmuseum\nB L fi lo h (all Parraga in B)\naehne ringers 500\nconfirmed: data servic is very needed\nper neck I page (em. photo)\n1, t.is netbook per year\ns\nTransect: printed maps afandgps\ntalked also to der in II → sound\nvery invited\n\\',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 333,
            fileName: "Evgeniy' notebook 16-1_p14_20170312_071325.svg",
            recognizedContent: '<p>#plans #hw #NeoLabs #meeting #prep&nbsp;</p>\n<p>klebkt app text -<br>\nreceive data data<br>\nparse data drawings annotated snapshot. <br>\nstore in the cloud <br>\noutput tabular <br>\ntrack Gps <br>\ntake pictures&nbsp;</p>\n<p>klekkt book (irrhally slenderer Neo) Babe section seekers header place date - r. / -.. -r- f v -e, f -r. ← data header ✓ r. ( cri r (r [ ← data hlehht platform klebkt cloud Mongo DB klebkt klebkt DD app portal users Neo E.. pm Paper IF it</p>',
            originalContent: 'ooh\nNeo Labs\n# plans #HW\n#\nmeeting prep\nklebkt app\ntext\n-\nreceive data\ndata\nparse data\ndrawings\nannotated snapshot.\nstore in the cloud\noutput tabular\ntrade Gps\ntake pictures\nklehkt book (irrhally slenderer Neo)\nBabe section\nseekers header\nplace date\n- r. / -.. -r- f v -e, f -r.\n← data header\n✓ r. ( cri\nr (r\n[\n← data\nhlehht\nplatform\nklebkt cloud\nMongo DB\nklebkt\nklebkt\nDD app\nportal\nusers\nNeo\nE..\npm\nPaper\nIF it',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 415, value: 'diagram', title: 'diagram', ownerId: 309 }],
          }, {
            id: 427,
            fileName: 'wh#cool#fun#science#hashTag.svg',
            recognizedContent: 'Wh',
            originalContent: 'Wh',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [],
          }, {
            id: 349,
            fileName: "Evgeniy' notebook 16-1_p28_20170312_071409.svg",
            recognizedContent: '<p>H ECN#meeting things#to do Upload presentations send to participants decide on data paper Ofso thinks its a good idea and I should be a first author Quickly write first one page draft and sent to coauthors along with explanation of participation terms R integrations → talk to Gleb n Decide on Sochi meet Send datasets in processing info → Hello? RB puller H Earth Cape customize forms contact tester reserves export data update Google Groups!</p>',
            originalContent: 'H ECN#meeting things#to do\nUpload presentations\nsend to participants\ndecide on data paper\nOfso thinks its a good idea\nand I should be a first author\nQuickly write first one page draft\nand sent to coauthors along\nwith explanation of participation terms\nR integrations → talk to Gleb\nn\nDecide on Sochi meet\nSend datasets in processing info → Hello?\nRB puller\nH Earth Cape\ncustomize forms\ncontact tester reserves\nexport data\nupdate Google Groups',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 428,
            fileName: 'Pocket Note_p8.svg',
            recognizedContent: 'Jtpeaberr\nwhat would you\nlike to drink?',
            originalContent: 'Jtpeaberr\nwhat would you\nlike to drink?',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [],
          }, {
            id: 430,
            fileName: 'Pocket Note_p6.svg',
            recognizedContent: 'ohm\n&\n0\n$\nD',
            originalContent: 'ohm\n&\n0\n$\nD',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [],
          }, {
            id: 212,
            fileName: "Evgeniy' notebook 16-1_p42_20170312_071451.svg",
            recognizedContent: '# geo notes #HW #idea\na\n~\na, y\n813\na, y\nc¥\nIt\nx. y\n|\nEh\na, y\npage\ngps\ncamera\nDatakxs of geo referenced noted\nand image\ninteract with date\nmap',
            originalContent: '# geo notes #HW #idea\na\n~\na, y\n813\na, y\nc¥\nIt\nx. y\n|\nEh\na, y\npage\ngps\ncamera\nDatakxs of geo referenced noted\nand image\ninteract with date\nmap',
            owner: { id: 78, email: 'evgeniy@meyke.info', userName: 'evgeniy' },
            hashTags: [{ id: 213, value: 'geo', title: 'geo', ownerId: 78 }],
          }, {
            id: 394,
            fileName: "Evgeniy' notebook 16-1_p172_20170321_113017.svg",
            recognizedContent: "# call * meeting #slink#feedback\n@ Anelrii Domanski 21.03.2017\n- some people don't vote\n- word or tent files are used for\nprojects and protocols\n# slink #mockup\nA- ----\n.\n#\n#man\n# me\n- . -\nresults\ntags\nH meeting\nH mockup\nH mobile\n→\nH phone\nA test",
            originalContent: "# call * meeting #slink#feedback\n@ Anelrii Domanski 21.03.2017\n- some people don't vote\n- word or tent files are used for\nprojects and protocols\n# slink #mockup\nA- ----\n.\n#\n#man\n# me\n- . -\nresults\ntags\nH meeting\nH mockup\nH mobile\n→\nH phone\nA test",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 408,
              value: 'meeting',
              title: 'meeting',
              ownerId: 309,
            }, { id: 416, value: 'mockup', title: 'mockup', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }],
          }, {
            id: 220,
            fileName: "Evgeniy' notebook 16-1_p37_20170312_071435.svg",
            recognizedContent: 'to do: #to do\n# ECN: post gas pooling connection string\nHIM: append all types of data on export\nto the same XML hole\nttklelekt.. check e-ink Android dunes\n# ECDB client chosen logo → detaolvi\nattachment odbpat named Logo\ntflekkt: how to link images and\nmap maths to data\n# image.. 112125\n# map: 2\n• 2\n1\nN -coded map\ngenerated by app\nfor print out\nmap marking\nm9p\nare overlay ed with real\nin the background and data plotted\nMap Bon based pay-per-print service\ngenerates W-coded pdf based on map\nextent and stores on user account\nA- code just codes Oid of the map\nMap record stores extent and style\nUse printed map instead of f p s m',
            originalContent: 'to do: #to do\n# ECN: post gas pooling connection string\nHIM: append all types of data on export\nto the same XML hole\nttklelekt.. check e-ink Android dunes\n# ECDB client chosen logo → detaolvi\nattachment odbpat named Logo\ntflekkt: how to link images and\nmap maths to data\n# image.. 112125\n# map: 2\n• 2\n1\nN -coded map\ngenerated by app\nfor print out\nmap marking\nm9p\nare overlay ed with real\nin the background and data plotted\nMap Bon based pay-per-print service\ngenerates W-coded pdf based on map\nextent and stores on user account\nA- code just codes Oid of the map\nMap record stores extent and style\nUse printed map instead of f p s m',
            owner: { id: 78, email: 'evgeniy@meyke.info', userName: 'evgeniy' },
            hashTags: [{ id: 223, value: 'map', title: 'map', ownerId: 78 }],
          }, {
            id: 400,
            fileName: "Evgeniy' notebook 16-1_p104.svg",
            recognizedContent: 'WE U A database work\ncopied selected tables\ncreated sample sp and units file',
            originalContent: 'WE U A database work\ncopied selected tables\ncreated sample sp and units file',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 326,
            fileName: "Evgeniy' notebook 16-1_p7.svg",
            recognizedContent: 'Part Valkama museum bird people\ntalk before december\nbird meeting in October\nChinese wee paper books\n→ bird piaelehooh preferrer\nPENCIL !!\nspeeds\nID\nl /\n}\ns\nRicardo\nindustrial design\nfriend in Ben\nvisiting in December\nRicardo can help\nfinding the production source in as ra',
            originalContent: 'Part Valkama museum bird people\ntalk before december\nbird meeting in October\nChinese wee paper books\n→ bird piaelehooh preferrer\nPENCIL !!\nspeeds\nID\nl /\n}\ns\nRicardo\nindustrial design\nfriend in Ben\nvisiting in December\nRicardo can help\nfinding the production source in as ra',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 321,
            fileName: "Evgeniy' notebook 16-1_p5_20170312_071303.svg",
            recognizedContent: '# Klekkt #diagram #Hw\n(header)\nsurvey / project\ny\nis\n4\n4\ns r be info / route / god.\ni\nis\nmm\ndd\nDD\nCount\nspecies\ntome\nDD\nDD\nDD\nParnassians apollo\n12\nbarcode\nL\nof\n|\n1\nr - r -s\nKy. lbtaedyk\n22666088.220166\nis\nm\n14:05\nParnassus apollo\n1\n15:00\n3\nParnassus help him\nGeneral comment\ncomplex (large format)\n(small format)\nsimple\nDd@by\np reef\nSHE\nr\nD\nsun. I\nprey.. Is he I date\nDry"\nspecies 1\n•\ni.\ngpeenr 2\n^=\nB\nmean I\n.\n→\n±\n-\n÷\n|\ngreen 1\ngo\nID\nf\nproof.\nsotfmment\ncomment\nEllen',
            originalContent: '# Klekkt #diagram #Hw\n(header)\nsurvey / project\ny\nis\n4\n4\ns r be info / route / god.\ni\nis\nmm\ndd\nDD\nCount\nspecies\ntome\nDD\nDD\nDD\nParnassians apollo\n12\nbarcode\nL\nof\n|\n1\nr - r -s\nKy. lbtaedyk\n22666088.220166\nis\nm\n14:05\nParnassus apollo\n1\n15:00\n3\nParnassus help him\nGeneral comment\ncomplex (large format)\n(small format)\nsimple\nDd@by\np reef\nSHE\nr\nD\nsun. I\nprey.. Is he I date\nDry"\nspecies 1\n•\ni.\ngpeenr 2\n^=\nB\nmean I\n.\n→\n±\n-\n÷\n|\ngreen 1\ngo\nID\nf\nproof.\nsotfmment\ncomment\nEllen',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 323,
            fileName: "Evgeniy' notebook 16-1_p6_20170312_071306.svg",
            recognizedContent: 'A\nttklekkt. #ideas\n# Hw#idea\nGeneral\n1. list fields\n2. design page\n3. order notebook\n4. output data\nfields\nraw data\nform\narchive\ndesign\ntunneled\npage\ntomes taped\nlayout\nsniogned\n-\n-\n-\nb\n-\n-\npages\nintegrations stperalosed solutions\nlab hook\nfield tool\ncalendar\nmaps',
            originalContent: 'A\nttklekkt. #ideas\n# Hw#idea\nGeneral\n1. list fields\n2. design page\n3. order notebook\n4. output data\nfields\nraw data\nform\narchive\ndesign\ntunneled\npage\ntomes taped\nlayout\nsniogned\n-\n-\n-\nb\n-\n-\npages\nintegrations stperalosed solutions\nlab hook\nfield tool\ncalendar\nmaps',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 310,
            fileName: "Evgeniy' notebook 16-1_p2_20170312_071257.svg",
            recognizedContent: '<p>#todo<br>\n#SAFE</p>\n<p>decode on template<br>\nmeet moth David<br>\nupload data<br>\n</p>\n<p>@Mar</p>\n<p>create pdf<br>\nNew clients<br>\nSeal demo <br>\nTvaizminne demo<br>\nPolly needs to # TM talk to Fred simplest expert about the sheets to do and then we # Ecw # lteliconrus can meet update Panama V V set up enpnt</p>',
            originalContent: '# to do\n3\n# SAFE\ndecode on template\nmeet moth David\nupload data\n@ man\nups. create pdf\nNew clients\nTully\nSeal demo\n06.09.16\nTvaizminne demo\nPolly needs to\n# TM\ntalk to Fred\nsimplest expert\nabout the sheets\nto do\nand then we\n# Ecw\n# lteliconrus\ncan meet\nupdate Panama\nV\nV\nset up enpnt',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 404, value: 'todo', title: 'todo', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }],
          }, {
            id: 385,
            fileName: 'Idea Pad Mini_p16_20170321_113011.svg',
            recognizedContent: "<p>Holy smoke! This is cool D RD. Yuupiil .!! Npuloem Helsinki 55 Robert'); DROP TABLE Students; - Mo? Mo, little Bobby tables we call him... PIN 0391 - \"h O_0 I'm a pen, and I am SMART * go to Pesrrkelello Hello I This is a test I:-(o ) ( \\ 1</p>",
            originalContent: "Holy smoke! This is cool D\nRD.\nYuupiil .!!\nNpuloem Helsinki 55\nRobert'); DROP TABLE Students; -\nMo? Mo, little Bobby tables\nwe call him...\nPIN 0391\n- \"h\nO_0\nI'm a pen, and I am SMART\n*\ngo\nto\nPesrrkelello\nHello I\nThis is a test\nI:-(o\n)\n(\n\\\n1",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 404, value: 'todo', title: 'todo', ownerId: 309 }, {
              id: 417,
              value: 'architecture',
              title: 'architecture',
              ownerId: 309,
            }, { id: 413, value: 'book_ev_pad17', title: 'book_ev_pad17', ownerId: 309 }, {
              id: 418,
              value: 'pen_trial',
              title: 'pen_trial',
              ownerId: 309,
            }],
          }, {
            id: 327,
            fileName: "Evgeniy' notebook 16-1_p9_20170312_071310.svg",
            recognizedContent: '# hlekkt #mvp t#HW\nhlekkt mv p\nBook\nProduct\nnotebook\napp\nNotebook\nfoxed page template\nHeader\nPiaget\nsits me start\nDateline End\nID sp c T\nDate area\nID\nspecies\ncount\ntime\nApp\nreceive data\nparse page\noutput tabular data',
            originalContent: '# hlekkt #mvp t#HW\nhlekkt mv p\nBook\nProduct\nnotebook\napp\nNotebook\nfoxed page template\nHeader\nPiaget\nsits me start\nDateline End\nID sp c T\nDate area\nID\nspecies\ncount\ntime\nApp\nreceive data\nparse page\noutput tabular data',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 336,
            fileName: "Evgeniy' notebook 16-1_p15_20170312_071329.svg",
            recognizedContent: '# HW #diagram #idea\nGPS, camera, etc, ink, data, annotations\nL\nk\nsensor / capture date t data records\nklebbt\nstitching bots together in the cloud\nrate\ntake picture of object\naugmented paper\nimage annotation\n•\nplace on page in app\nannotate on paper\nMap marking\ninsert map on page\nuse pen to add\nlandmarks\nannotate during\nDatabase\nmozle\napplication\ni\napp I services\np\nneo\ndevelopers\nusers',
            originalContent: '# HW #diagram #idea\nGPS, camera, etc, ink, data, annotations\nL\nk\nsensor / capture date t data records\nklebbt\nstitching bots together in the cloud\nrate\ntake picture of object\naugmented paper\nimage annotation\n•\nplace on page in app\nannotate on paper\nMap marking\ninsert map on page\nuse pen to add\nlandmarks\nannotate during\nDatabase\nmozle\napplication\ni\napp I services\np\nneo\ndevelopers\nusers',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 420,
              value: 'sketch',
              title: 'sketch',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 407,
              value: 'idea',
              title: 'idea',
              ownerId: 309,
            }],
          }, {
            id: 337,
            fileName: "Evgeniy' notebook 16-1_p17_20170312_071336.svg",
            recognizedContent: '19.9.2016\n# idea He hlekkt A- Hw\nleleleht\ndigitizing motivation\nUse case\nchops, notebooks\naccumulate\nMaria Delgado\nJust page images\nare not enough, needs ante\ndata sheets generation.\nNext key point G PS!\nneed automatic coordinate\nassignment.\n•',
            originalContent: '19.9.2016\n# idea He hlekkt A- Hw\nleleleht\ndigitizing motivation\nUse case\nchops, notebooks\naccumulate\nMaria Delgado\nJust page images\nare not enough, needs ante\ndata sheets generation.\nNext key point G PS!\nneed automatic coordinate\nassignment.\n•',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 341,
            fileName: "Evgeniy' notebook 16-1_p22_20170312_071345.svg",
            recognizedContent: '# Hw A- klekkt#stack#der\napp\nklekkt stock\nReact Native\nMeteor is\nMongo D B\nhosting\nMeteor Galaxy\nCompere. io / M Lab ? I Atlas?\nto table data\ntranscribe\nMSI\nstore\non backend\n482\naccess\n1data e strokes)\nedof\nGps, images\nMS3\nEnrich\ntaxonomy\nlocation\nProducts\napp (s)\n1 services\nsubscriptions\npen\nbooks',
            originalContent: '# Hw A- klekkt#stack#der\napp\nklekkt stock\nReact Native\nMeteor is\nMongo D B\nhosting\nMeteor Galaxy\nCompere. io / M Lab ? I Atlas?\nto table data\ntranscribe\nMSI\nstore\non backend\n482\naccess\n1data e strokes)\nedof\nGps, images\nMS3\nEnrich\ntaxonomy\nlocation\nProducts\napp (s)\n1 services\nsubscriptions\npen\nbooks',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 406, value: 'dev', title: 'dev', ownerId: 309 }],
          }, {
            id: 362,
            fileName: "Evgeniy' notebook 16-1_p34_20170312_071422.svg",
            recognizedContent: "# HW #idea\nklekht\nNavigation:\nBooks (t pages)\nProjects (t events)\nLocations\nmap\nData\nrecords pages map\nproject\nBook\nlocators\nt\nevent\npage\ndata\n'speeds\ne date\nBook\ndata\na page → data\nBook\np\na data\nRupert\n→ date\nLocator\n→ data\nSpain\n→ date\nRant\nfretter\n\uDB80\uDC002\uDB80\uDC01 lol",
            originalContent: "# HW #idea\nklekht\nNavigation:\nBooks (t pages)\nProjects (t events)\nLocations\nmap\nData\nrecords pages map\nproject\nBook\nlocators\nt\nevent\npage\ndata\n'speeds\ne date\nBook\ndata\na page → data\nBook\np\na data\nRupert\n→ date\nLocator\n→ data\nSpain\n→ date\nRant\nfretter\n\uDB80\uDC002\uDB80\uDC01 lol",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 364,
            fileName: "Evgeniy' notebook 16-1_p41_20170312_071450.svg",
            recognizedContent: "→\n# Hw #diagram\ngpeeoalmcd end.\nsolutions\n/\nwin\nof'\nmapping\nNfb\n.\nEE * cell\nfield\n1\n|\ntoy\n3\n.\n\uDB80\uDC009\uDB80\uDC01\nBiology\n2\n→\npaper\nklehhtr\nSocial Netmrh\nM\ngeo notes\nCitizen science\n(CROWD)",
            originalContent: "→\n# Hw #diagram\ngpeeoalmcd end.\nsolutions\n/\nwin\nof'\nmapping\nNfb\n.\nEE * cell\nfield\n1\n|\ntoy\n3\n.\n\uDB80\uDC009\uDB80\uDC01\nBiology\n2\n→\npaper\nklehhtr\nSocial Netmrh\nM\ngeo notes\nCitizen science\n(CROWD)",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 365,
            fileName: "Evgeniy' notebook 16-1_p42_20170312_071451.svg",
            recognizedContent: '# geo notes #HW #idea\na\n~\na, y\n813\na, y\nc¥\nIt\nx. y\n|\nEh\na, y\npage\ngps\ncamera\nDatakxs of geo referenced noted\nand image\ninteract with date\nmap',
            originalContent: '# geo notes #HW #idea\na\n~\na, y\n813\na, y\nc¥\nIt\nx. y\n|\nEh\na, y\npage\ngps\ncamera\nDatakxs of geo referenced noted\nand image\ninteract with date\nmap',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 407,
              value: 'idea',
              title: 'idea',
              ownerId: 309,
            }],
          }, {
            id: 367,
            fileName: "Evgeniy' notebook 16-1_p43_20170312_071452.svg",
            recognizedContent: "Mum\n# HW A- diagram\nr\nled\nlaw\nhour\nmapmr\nGIs\nEmil\ne\n.\nso\ns\npan\nus\nON\ni\nfold\n7\ns\noff\nit'\ntyl\nW\n0. Traditions, specifics, regiments\nProblem ends, urgent, costs\nital\ncurrent solutions.\n1.\n!\nor\na) manual labour\nb) in-house dew\n4. Own enpcrttosoelllntan adv.\n5. customers\n6. Market srre Be\n7.. Consumer market\n' l ✓\n'Rue o heelan l",
            originalContent: "Mum\n# HW A- diagram\nr\nled\nlaw\nhour\nmapmr\nGIs\nEmil\ne\n.\nso\ns\npan\nus\nON\ni\nfold\n7\ns\noff\nit'\ntyl\nW\n0. Traditions, specifics, regiments\nProblem ends, urgent, costs\nital\ncurrent solutions.\n1.\n!\nor\na) manual labour\nb) in-house dew\n4. Own enpcrttosoelllntan adv.\n5. customers\n6. Market srre Be\n7.. Consumer market\n' l ✓\n'Rue o heelan l",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 331,
            fileName: "Evgeniy' notebook 16-1_p10_20170312_071313.svg",
            recognizedContent: '<p># Hw D B rd fer line miimtsee includes notebooks tabular input = ID / species / count f 213 / Parnassians apollo / 1 # 725 MAZ / Pieri s brassiere / 5 18 / species 2/33 A 5 / blabla 4 / 45 AT parse against GBDF "÷...÷. % 14 15 16 Mauch p - Vat he jhgghjgljh</p>',
            originalContent: '# Hw\nD B rd fer line miimtsee includes notebooks\ntabular input\n=\nID / species / count\nf\n213 / Parnassians apollo / 1\n# 725\nMAZ / Pieri s brassiere / 5\n18 / species 2/33\nA 5 / blabla 4 / 45\nAT\nparse against GBDF\n"÷...÷.\n%\n14\n15\n16\nMauch\np\n- Vat\nhe',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 368,
            fileName: "Evgeniy' notebook 16-1_p44_20170312_071454.svg",
            recognizedContent: "# HW He diagrams\n'im\nObservation / Measurement\n(writing)\nPaper\n(typing)\nTabular data\n(analysis)\nEnvironment\nObservation\ndevice\nbook\nimage\nlocation\nnote\napp\npen\nOCR\nenrichment\nprivate cloud\n- alls line",
            originalContent: "# HW He diagrams\n'im\nObservation / Measurement\n(writing)\nPaper\n(typing)\nTabular data\n(analysis)\nEnvironment\nObservation\ndevice\nbook\nimage\nlocation\nnote\napp\npen\nOCR\nenrichment\nprivate cloud\n- alls line",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 369,
            fileName: "Evgeniy' notebook 16-1_p47_20170312_071459.svg",
            recognizedContent: "µ\n# HW\n# diagram\nfr\ndata\ndog.\n1\n' .\nIf\n✓\ni\n9\nmanual wrath\nt\n/\nv\n!\napex t pen\nfactory I\nt¥FE%i\"\n-\n&\nis\n7\n$§§§fs/ Er $\n$\nPleasure\n\"$'$\nfact.y2\nfetmp\n$$.\n$\ns.\nv\nr\nPfirsch\nr\nbi.\n7",
            originalContent: "µ\n# HW\n# diagram\nfr\ndata\ndog.\n1\n' .\nIf\n✓\ni\n9\nmanual wrath\nt\n/\nv\n!\napex t pen\nfactory I\nt¥FE%i\"\n-\n&\nis\n7\n$§§§fs/ Er $\n$\nPleasure\n\"$'$\nfact.y2\nfetmp\n$$.\n$\ns.\nv\nr\nPfirsch\nr\nbi.\n7",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 420,
              value: 'sketch',
              title: 'sketch',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 347,
            fileName: "Evgeniy' notebook 16-1_p24_20170312_071349.svg",
            recognizedContent: "g- 14.10.16\nFew\n#\n# meeting #seminar\nData structure\nContact database\nRunning the project\nData types\nDrffrenlhres\nDate drshrbuhron\nsoftware doshobntrar\n-\nR integration\nprcregnsohes\nFuture plans\nPost apes\nBaba patchiness → missing\nNet. 4.5\nspecialist groups\nHow to increase porbrcrpahr?\nWin b-10\ninvolve more research\nR\ninstitutes?\nHow to advertize?\nDiscussion topics\nQnshsnaire Ec.\nOpen data (pub punks)\nWho interested\n'Earth cape\nHas IT\nMore members\nGIs?\nMeetings next year\nR integrations\nAgreements cont.?\nAsk the last\nPen\nfor Oto's book\nOpen science",
            originalContent: "g- 14.10.16\nFew\n#\n# meeting #seminar\nData structure\nContact database\nRunning the project\nData types\nDrffrenlhres\nDate drshrbuhron\nsoftware doshobntrar\n-\nR integration\nprcregnsohes\nFuture plans\nPost apes\nBaba patchiness → missing\nNet. 4.5\nspecialist groups\nHow to increase porbrcrpahr?\nWin b-10\ninvolve more research\nR\ninstitutes?\nHow to advertize?\nDiscussion topics\nQnshsnaire Ec.\nOpen data (pub punks)\nWho interested\n'Earth cape\nHas IT\nMore members\nGIs?\nMeetings next year\nR integrations\nAgreements cont.?\nAsk the last\nPen\nfor Oto's book\nOpen science",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 421, value: 'seminar', title: 'seminar', ownerId: 309 }, {
              id: 410,
              value: 'prj_ecn',
              title: 'prj_ecn',
              ownerId: 309,
            }, { id: 408, value: 'meeting', title: 'meeting', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }],
          }, {
            id: 384,
            fileName: "Evgeniy' notebook 16-1_p104.svg",
            recognizedContent: 'WE U A database work\ncopied selected tables\ncreated sample sp and units file',
            originalContent: 'WE U A database work\ncopied selected tables\ncreated sample sp and units file',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 350,
            fileName: "Evgeniy' notebook 16-1_p29_20170312_071405.svg",
            recognizedContent: '6\nA Hw#idea#data klekkt test\nCfield L] [field 2] [Species] [date]\nA Paznassius apollo / Pier is brass icae /\nU z b e ki s ta n / Ta s h teen t / 22. 05. 20 I 6\nObserved 2 females flying by\nso\nseveral males exhibited mating\nbehaviour\nthem is my hendnni tray test\nThe mat hnnollke fart writing\nthe most horrible and fast writing\nthe most horrible arm fart wintry\nthen is\nmy mohns test\nA t? -y.:; * * t ) C] A\n* * a * → ← T d A\nx * He#\nAbcDabBAxledftTT\nvery small part\nsmall prout\nhardly recognizable second line very small print\nCfield I] a) tho s is a general fouled\nEfield 23 beg\nE\nCspecies I\nCdescription] d J\nCfield I valued# [a [Parnassus]\nCde thos or a general des errphru value]',
            originalContent: '6\nA Hw#idea#data klekkt test\nCfield L] [field 2] [Species] [date]\nA Paznassius apollo / Pier is brass icae /\nU z b e ki s ta n / Ta s h teen t / 22. 05. 20 I 6\nObserved 2 females flying by\nso\nseveral males exhibited mating\nbehaviour\nthem is my hendnni tray test\nThe mat hnnollke fart writing\nthe most horrible and fast writing\nthe most horrible arm fart wintry\nthen is\nmy mohns test\nA t? -y.:; * * t ) C] A\n* * a * → ← T d A\nx * He#\nAbcDabBAxledftTT\nvery small part\nsmall prout\nhardly recognizable second line very small print\nCfield I] a) tho s is a general fouled\nEfield 23 beg\nE\nCspecies I\nCdescription] d J\nCfield I valued# [a [Parnassus]\nCde thos or a general des errphru value]',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 351,
            fileName: "Evgeniy' notebook 16-1_p30.svg",
            recognizedContent: '<field Is a>\n<field 2> a!\n<field 3> a!\nI fold t / a!\n! told 1! a!\n##field 1#a\n##field 2#b\n##fold 3#c\n# c: told l value b.. field b value\na: field A value\nMARK DOWN? → check specs\nuse#¥ for tagging records\n?\ny records?\nlace: Helsinki\nWalking around the garden is an\n$ p: P. apollo c: a female c: 5 male\nwho displayed rk mating #behaviour\ntime: 14105-15:08\nsp:? flying by very fast from east to west\nsp: bird sultry in the bush at: 15:08\nplace: Vantaa\nspp.: Prem hasrreae 1 or 3 of\nPaznassius apo O Chernak (I) 2 females',
            originalContent: '<field Is a>\n<field 2> a!\n<field 3> a!\nI fold t / a!\n! told 1! a!\n##field 1#a\n##field 2#b\n##fold 3#c\n# c: told l value b.. field b value\na: field A value\nMARK DOWN? → check specs\nuse#¥ for tagging records\n?\ny records?\nlace: Helsinki\nWalking around the garden is an\n$ p: P. apollo c: a female c: 5 male\nwho displayed rk mating #behaviour\ntime: 14105-15:08\nsp:? flying by very fast from east to west\nsp: bird sultry in the bush at: 15:08\nplace: Vantaa\nspp.: Prem hasrreae 1 or 3 of\nPaznassius apo O Chernak (I) 2 females',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 358,
            fileName: "Evgeniy' notebook 16-1_p32_20170312_071418.svg",
            recognizedContent: "B\npaper .\n# Hw\nc\nB\n# field work\n✓\nlike\nhe\ndis lo\nPro\nhlen\nthem\npro\n# Digitization\npyres\nv\nroutine\ndishte\nProblem\n# Data many\nchest\nlike\ndi' he\nshamus\ndime\nLIKE\n.\n✓\nDate analysers\ns\nhole\nv\nPub location\nthe\nR",
            originalContent: "B\npaper .\n# Hw\nc\nB\n# field work\n✓\nlike\nhe\ndis lo\nPro\nhlen\nthem\npro\n# Digitization\npyres\nv\nroutine\ndishte\nProblem\n# Data many\nchest\nlike\ndi' he\nshamus\ndime\nLIKE\n.\n✓\nDate analysers\ns\nhole\nv\nPub location\nthe\nR",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 414, value: 'field_work', title: 'field_work', ownerId: 309 }, {
              id: 407,
              value: 'idea',
              title: 'idea',
              ownerId: 309,
            }],
          }, {
            id: 361,
            fileName: "Evgeniy' notebook 16-1_p33_20170312_071420.svg",
            recognizedContent: '# idea\ngold It Hw\ni\n- W\nproblem\nBushes\nv\n1\ncese =\nImportance" Urgency (demeaning\n2 Business\n= Posirre How fluffy\noften you\nfeeling" need it\nCase\nklehkt app functionality\n1. Log GPs (start sessom, stop sassy\n2. Show on map\n3 Get pen data\n4. Create data record\n5. add coordinates\n6. Attach pictures\nViews: data ⇒ map es page es images\n7.\nStart / Stop\nConnect, download\nParse\nReview\nUpload\nBrowse\nMap',
            originalContent: '# idea\ngold It Hw\ni\n- W\nproblem\nBushes\nv\n1\ncese =\nImportance" Urgency (demeaning\n2 Business\n= Posirre How fluffy\noften you\nfeeling" need it\nCase\nklehkt app functionality\n1. Log GPs (start sessom, stop sassy\n2. Show on map\n3 Get pen data\n4. Create data record\n5. add coordinates\n6. Attach pictures\nViews: data ⇒ map es page es images\n7.\nStart / Stop\nConnect, download\nParse\nReview\nUpload\nBrowse\nMap',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 370,
            fileName: "Evgeniy' notebook 16-1_p49_20170312_071506.svg",
            recognizedContent: '# HW #diagram\npen\ntext, peep hns, screw\n← other sensor\nimages, location\nmobile app\napplication\nMeteor Is\n+ React Native\nserver app\nMongo DB\ndalah are I blob storage\n+ 533\n\uDB80\uDC006\uDB80\uDC01 Ps\nUser\ncamera\nuser\npen\nadmin\ns\napplocabm\napp\n^\nservices\napp\n)\nAPI\napp serve\nenkrnal\ndocument\nserve\ndb\napps\nserver',
            originalContent: '# HW #diagram\npen\ntext, peep hns, screw\n← other sensor\nimages, location\nmobile app\napplication\nMeteor Is\n+ React Native\nserver app\nMongo DB\ndalah are I blob storage\n+ 533\n\uDB80\uDC006\uDB80\uDC01 Ps\nUser\ncamera\nuser\npen\nadmin\ns\napplocabm\napp\n^\nservices\napp\n)\nAPI\napp serve\nenkrnal\ndocument\nserve\ndb\napps\nserver',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 415, value: 'diagram', title: 'diagram', ownerId: 309 }],
          }, {
            id: 371,
            fileName: "Evgeniy' notebook 16-1_p50_20170312_071510.svg",
            recognizedContent: "INPUT\npaper\ncamera\nGp\n# HW\npen\nt#diagram\nor'\n88\nI\nUSCZ\n-\napplication\nin\n\\\nserver\napp pp\n-\npassed doos\nuser data\nIntegrations\nFILES\nDB\norg. data\nLoc. data\nanalytics\n§$\nadmin app\nof\"\ni'\nserver app\nAnalytics\nAPI\nAPI\nspecials\napplnnt\napplval\ns\nspec. \uDB80\uDC001\uDB80\uDC01 bs\nfiles\ne\ndalahas\n'WEB\nmobile\nclient app",
            originalContent: "INPUT\npaper\ncamera\nGp\n# HW\npen\nt#diagram\nor'\n88\nI\nUSCZ\n-\napplication\nin\n\\\nserver\napp pp\n-\npassed doos\nuser data\nIntegrations\nFILES\nDB\norg. data\nLoc. data\nanalytics\n§$\nadmin app\nof\"\ni'\nserver app\nAnalytics\nAPI\nAPI\nspecials\napplnnt\napplval\ns\nspec. \uDB80\uDC001\uDB80\uDC01 bs\nfiles\ne\ndalahas\n'WEB\nmobile\nclient app",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 417, value: 'architecture', title: 'architecture', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 379,
            fileName: "Evgeniy' notebook 16-1_p87.svg",
            recognizedContent: "of\nEver Note ON C E S / Ela\nHw\n#\nf\npaper first\n-\n-\n-\n+\nt\ndater many\ne\n-\n-\ncollab was\n+\nt\n't\nT\nIt\nsimple\n+\n1\n(?\nseamless Gap to\n- dog)\n- 7\n+\n+ ent-ready\n|\nt\nt\ncost t\nII platform\n-\n-\nt\n#\n- ? eco system t\nt handwriting t\n+ -\n1\ny database any-\nWent sstfepss / to do\na eexttioxnaaiieee\nc\n1\nI comparison table\n3.\nProcess / dragon\nmatrix\nFunctionality\ns.\nbbbbbb\nIhs\nb\ns\n<",
            originalContent: "of\nEver Note ON C E S / Ela\nHw\n#\nf\npaper first\n-\n-\n-\n+\nt\ndater many\ne\n-\n-\ncollab was\n+\nt\n't\nT\nIt\nsimple\n+\n1\n(?\nseamless Gap to\n- dog)\n- 7\n+\n+ ent-ready\n|\nt\nt\ncost t\nII platform\n-\n-\nt\n#\n- ? eco system t\nt handwriting t\n+ -\n1\ny database any-\nWent sstfepss / to do\na eexttioxnaaiieee\nc\n1\nI comparison table\n3.\nProcess / dragon\nmatrix\nFunctionality\ns.\nbbbbbb\nIhs\nb\ns\n<",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 380,
            fileName: "Evgeniy' notebook 16-1_p99.svg",
            recognizedContent: "WRITE TO Ht#EE POINT\" AR\nBranche:\nDigital first 14 I\n1\nHw:\nSimple paper first UX\nData euheuhrrn\nHw:\nDocument creation\nProductivity\ntool\nAw..\nClean app tool\nHW:\nHw:\nO CR → source eorryinale link\nH task:\nA you work on\nE contractor\npaper...\nC\nme improve your UX\nF prefect..\n)\n(wnee\" Pll do the meagre)\nA@\nH link:\n'frx paper us\npaper UX\npaper → input device",
            originalContent: "WRITE TO Ht#EE POINT\" AR\nBranche:\nDigital first 14 I\n1\nHw:\nSimple paper first UX\nData euheuhrrn\nHw:\nDocument creation\nProductivity\ntool\nAw..\nClean app tool\nHW:\nHw:\nO CR → source eorryinale link\nH task:\nA you work on\nE contractor\npaper...\nC\nme improve your UX\nF prefect..\n)\n(wnee\" Pll do the meagre)\nA@\nH link:\n'frx paper us\npaper UX\npaper → input device",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 382,
            fileName: "Evgeniy' notebook 16-1_p103.svg",
            recognizedContent: 'H trip\nLondon 11-22.01.2016 #todo\nTasks:\nA Meet Delphine → next week\nSkype Bohdan Protz\nS hype kalle\nTeam viewer Lacamy\nVisit is ilmood\nE\ncheck with Rob\nDemo for Ukrainian reserves\nletter to ECN (Skype mrh Marr a)\nSkype moth Alexandr Kuzmin\nITTMM. S E demo\nRead on Java and Play\nRestore ECW database-installing...\nUpdate TM instill\nAsk Delphine for detailed panels\nUpdate ECDB men\nG Update RCDD urn',
            originalContent: 'H trip\nLondon 11-22.01.2016 #todo\nTasks:\nA Meet Delphine → next week\nSkype Bohdan Protz\nS hype kalle\nTeam viewer Lacamy\nVisit is ilmood\nE\ncheck with Rob\nDemo for Ukrainian reserves\nletter to ECN (Skype mrh Marr a)\nSkype moth Alexandr Kuzmin\nITTMM. S E demo\nRead on Java and Play\nRestore ECW database-installing...\nUpdate TM instill\nAsk Delphine for detailed panels\nUpdate ECDB men\nG Update RCDD urn',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 404, value: 'todo', title: 'todo', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }],
          }, {
            id: 363,
            fileName: "Evgeniy' notebook 16-1_p36_20170312_071433.svg",
            recognizedContent: 'ttklebkt lab book #HW\nImportant.. integrated lab book\narchiving solutions!\n-\n-\n-\nemeyke\nLog rn\npen ✓\nPen Or\n→\n→\n→\nstart\nstart\nC\nE\nME klelektrng\npages\nklekktrng\npages: 3\nEvents\n→ date\ndata: 15\nProjects\nkm; 10\nmap\nLocations\nhrs: 2:45\nBooks\nTop\nftp.yeehg\nprop L\nmulti select\npwj 2\nproj 3\nO put Y\ndata (map)',
            originalContent: 'ttklebkt lab book #HW\nImportant.. integrated lab book\narchiving solutions!\n-\n-\n-\nemeyke\nLog rn\npen ✓\nPen Or\n→\n→\n→\nstart\nstart\nC\nE\nME klelektrng\npages\nklekktrng\npages: 3\nEvents\n→ date\ndata: 15\nProjects\nkm; 10\nmap\nLocations\nhrs: 2:45\nBooks\nTop\nftp.yeehg\nprop L\nmulti select\npwj 2\nproj 3\nO put Y\ndata (map)',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 422,
              value: 'mobile',
              title: 'mobile',
              ownerId: 309,
            }],
          }, {
            id: 372,
            fileName: "Evgeniy' notebook 16-1_p51_20170312_071512.svg",
            recognizedContent: 'D= PAPER\nH Hw\nFORMS\nPAGES\nH diagram\nDo Devices\nphone\ncamera\npen\nGps\nr\nclient app\ns\n11\nMeteoets\nMOBILE\nWEB\nReact\nmet\ncore suit.\nNative\ne. g. for\nserver app.\ni.EE\nANALYTICS\nAmazon S 33\nMongo DB\nDocument server\ndatabases ever\nDB\nvector Documents\nstructured data\nimages\nuser data\nGps LOGS\nCORE APIs\ngeneral purpos\ne\nspecialized\nINTEGRATION\nSPECIALIZED\napplication',
            originalContent: 'D= PAPER\nH Hw\nFORMS\nPAGES\nH diagram\nDo Devices\nphone\ncamera\npen\nGps\nr\nclient app\ns\n11\nMeteoets\nMOBILE\nWEB\nReact\nmet\ncore suit.\nNative\ne. g. for\nserver app.\ni.EE\nANALYTICS\nAmazon S 33\nMongo DB\nDocument server\ndatabases ever\nDB\nvector Documents\nstructured data\nimages\nuser data\nGps LOGS\nCORE APIs\ngeneral purpos\ne\nspecialized\nINTEGRATION\nSPECIALIZED\napplication',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 417, value: 'architecture', title: 'architecture', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 373,
            fileName: "Evgeniy' notebook 16-1_p56_20170312_071521.svg",
            recognizedContent: '# Hw #idea\nWays to interact moth paper\nPen, camera\nhandwriting\nbar codes\nRFID\nt\nte\nIdea. Collaborate in project\n#\nby wrong own pen with other boor\npen 2\npen 1\nextend\nive\nrachn\nbe old\nboo ke\nUse case 1: field survey\nCollective survey\nsurvey admin provides registration\npage in his book where people\ncan "touch" moth own pens\nto "register" for the prophet\nBy registering (by physical pen interaction\nmoth another person is back,\nusers get access to shored info and pages',
            originalContent: '# Hw #idea\nWays to interact moth paper\nPen, camera\nhandwriting\nbar codes\nRFID\nt\nte\nIdea. Collaborate in project\n#\nby wrong own pen with other boor\npen 2\npen 1\nextend\nive\nrachn\nbe old\nboo ke\nUse case 1: field survey\nCollective survey\nsurvey admin provides registration\npage in his book where people\ncan "touch" moth own pens\nto "register" for the prophet\nBy registering (by physical pen interaction\nmoth another person is back,\nusers get access to shored info and pages',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 374,
            fileName: "Evgeniy' notebook 16-1_p57_20170312_071522.svg",
            recognizedContent: '# HW the idea\nUse care? ÷ admin pen\nby interacting with other books\n=\nget access\n±\nz\nproblem.. N-code is not book unique\nfwneuhrom\nSpecs.\ndata:\nadd, delete, share\n)\nGroup f\ns\nprojects\nBooks\nPages\n(GPS log)\n(Images lay\nUser\nago sbaofron, Login\ncreate or join groups\ncreate or prim projects\nregister pen\n(un)',
            originalContent: '# HW the idea\nUse care? ÷ admin pen\nby interacting with other books\n=\nget access\n±\nz\nproblem.. N-code is not book unique\nfwneuhrom\nSpecs.\ndata:\nadd, delete, share\n)\nGroup f\ns\nprojects\nBooks\nPages\n(GPS log)\n(Images lay\nUser\nago sbaofron, Login\ncreate or join groups\ncreate or prim projects\nregister pen\n(un)',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 375,
            fileName: "Evgeniy' notebook 16-1_p68.svg",
            recognizedContent: 'blehkt ideas\nEvery day paper\ndocument feidheuh\nNews papers\nMaps\nPackaging\n=\nNotebooks\nCalendars\n✓\nwhole boards\n✓\nAnnouncement Bonds\nSurveys\n÷\nU\nForms (e. g. bank customs)\nStrikers / Labels',
            originalContent: 'blehkt ideas\nEvery day paper\ndocument feidheuh\nNews papers\nMaps\nPackaging\n=\nNotebooks\nCalendars\n✓\nwhole boards\n✓\nAnnouncement Bonds\nSurveys\n÷\nU\nForms (e. g. bank customs)\nStrikers / Labels',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 376,
            fileName: "Evgeniy' notebook 16-1_p76.svg",
            recognizedContent: 'Protects\n-\n-\n-\nNavigation\nPro ref I\nPIT 2\nNotebooks\n3\nProjects\nCalendar\nSearch\nsettings\nMoto back\n-\nNotebook 2\n-\n-\nNotebook 7\nBrown / Projects /-..',
            originalContent: 'Protects\n-\n-\n-\nNavigation\nPro ref I\nPIT 2\nNotebooks\n3\nProjects\nCalendar\nSearch\nsettings\nMoto back\n-\nNotebook 2\n-\n-\nNotebook 7\nBrown / Projects /-..',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 422,
              value: 'mobile',
              title: 'mobile',
              ownerId: 309,
            }, { id: 415, value: 'diagram', title: 'diagram', ownerId: 309 }],
          }, {
            id: 377,
            fileName: "Evgeniy' notebook 16-1_p84.svg",
            recognizedContent: '# Hw * idea\ncapture method;\nenlunl dance\nme\nHand with\nHW\non screen\nsource:\nme\nJ\noutside\nbody sensors\nEvermore\nWearahles\nThou who wrote\n1.\n2.\nThis who wink\npreprocessing\n3.3\npurpose!\nWork\ncapture log\nprocessors',
            originalContent: '# Hw * idea\ncapture method;\nenlunl dance\nme\nHand with\nHW\non screen\nsource:\nme\nJ\noutside\nbody sensors\nEvermore\nWearahles\nThou who wrote\n1.\n2.\nThis who wink\npreprocessing\n3.3\npurpose!\nWork\ncapture log\nprocessors',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 386,
            fileName: "Evgeniy' notebook 16-1_p150.svg",
            recognizedContent: '# HW#mockup\nB tags\nQ search\ngroups he\nH hg I\ngrope\nH tag?\ngrip 2\nbaht\nbook\nboob\nbed\nH tag}\n|\ngun 3\nH tags\ngun 4\ngun 5\nH tags.\nH tag 6\n06.03.2012\n# Hw@Alex Shu\nagenda:\nY e application\nstartup school',
            originalContent: '# HW#mockup\nB tags\nQ search\ngroups he\nH hg I\ngrope\nH tag?\ngrip 2\nbaht\nbook\nboob\nbed\nH tag}\n|\ngun 3\nH tags\ngun 4\ngun 5\nH tags.\nH tag 6\n06.03.2012\n# Hw@Alex Shu\nagenda:\nY e application\nstartup school',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 388,
            fileName: "Evgeniy' notebook 16-1_p152_20170310_092825.svg",
            recognizedContent: '# to do\nMano a s hype-wed\n→ Wed .\nDavid sky he\no Adnoun Shyne\nEedb update: security, and\nY C application\no accounting earfhrcape\nAw I invo Me\ncheck neo notes one note integration\no TM. - neb to send\nTn. Field sheets → then\n8 Cinara MRC version\nwed\n• shuega skype → wtuede 8.30\nit ecelb -needs to delete user-user anvddof\nupdate eedb -weekend\ndate Dsc database\nmigrate TN dashboards\n0\nEcw program → talk to Oto\nOtso.. Gbdf?\ne\nanalysis?\na Eli?\npm Complnem / RBH assume → Lndng falter\neammppdle Tm',
            originalContent: '# to do\nMano a s hype-wed\n→ Wed .\nDavid sky he\no Adnoun Shyne\nEedb update: security, and\nY C application\no accounting earfhrcape\nAw I invo Me\ncheck neo notes one note integration\no TM. - neb to send\nTn. Field sheets → then\n8 Cinara MRC version\nwed\n• shuega skype → wtuede 8.30\nit ecelb -needs to delete user-user anvddof\nupdate eedb -weekend\ndate Dsc database\nmigrate TN dashboards\n0\nEcw program → talk to Oto\nOtso.. Gbdf?\ne\nanalysis?\na Eli?\npm Complnem / RBH assume → Lndng falter\neammppdle Tm',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 404, value: 'todo', title: 'todo', ownerId: 309 }, {
              id: 419,
              value: 'yc',
              title: 'yc',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 389,
            fileName: "Evgeniy' notebook 16-1_p154_20170310_092843.svg",
            recognizedContent: "# HW#idea\nconcept of \"spaces\"\n- add pages from any books\n- create common documents for\neasy pulling info from disparate\npages into single documents\n- keep the resulting data / tent\nlinked to originals\ns pence\nbook}\nbook 1\nbook'\nman well\np 30\np2l\npage 20\narrangement\n= light table\nbooks\nbook 9\npl\npw",
            originalContent: "# HW#idea\nconcept of \"spaces\"\n- add pages from any books\n- create common documents for\neasy pulling info from disparate\npages into single documents\n- keep the resulting data / tent\nlinked to originals\ns pence\nbook}\nbook 1\nbook'\nman well\np 30\np2l\npage 20\narrangement\n= light table\nbooks\nbook 9\npl\npw",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 390,
            fileName: "Evgeniy' notebook 16-1_p162_20170316_053517.svg",
            recognizedContent: '# It w He mockup\ni\nink LAST\n# mockup\n# meeting\n# Hw\n# idea\n# mockup\nA- der\n# mobile\nsearch\n# meehns\n# HW\nswope\n# idea\nleft\n# mockup\nA- mobile\nresults\ntags',
            originalContent: '# It w He mockup\ni\nink LAST\n# mockup\n# meeting\n# Hw\n# idea\n# mockup\nA- der\n# mobile\nsearch\n# meehns\n# HW\nswope\n# idea\nleft\n# mockup\nA- mobile\nresults\ntags',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 422,
              value: 'mobile',
              title: 'mobile',
              ownerId: 309,
            }],
          }, {
            id: 378,
            fileName: "Evgeniy' notebook 16-1_p85.svg",
            recognizedContent: "Work\npaper Idigclr\npaper\ndigital\narchive\ncapture (lag\nprocess\nhire\ndry try\ncapture →\n→\nprinces → are him\nmanage\np 20\nsipeu\nactrvrtg\nproducers\nHW\nBut\ncapture\nPaper-first\npaper\nsolution\nstairs\nEN HW\nµv.\nt\ndrgrtrze\n1\npre-\nh iz pieces\n12.\nprocess\nanalysers\nµW\nt\nsomeone\nmanage\nOverkill\narchon\nz\nafterthought\npzigma\nPAPIER\naerchnre\nworkflow change\ns\n1\nreason?\n±'re\noil'",
            originalContent: "Work\npaper Idigclr\npaper\ndigital\narchive\ncapture (lag\nprocess\nhire\ndry try\ncapture →\n→\nprinces → are him\nmanage\np 20\nsipeu\nactrvrtg\nproducers\nHW\nBut\ncapture\nPaper-first\npaper\nsolution\nstairs\nEN HW\nµv.\nt\ndrgrtrze\n1\npre-\nh iz pieces\n12.\nprocess\nanalysers\nµW\nt\nsomeone\nmanage\nOverkill\narchon\nz\nafterthought\npzigma\nPAPIER\naerchnre\nworkflow change\ns\n1\nreason?\n±'re\noil'",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 425,
            fileName: 'Pocket Note_p8.svg',
            recognizedContent: 'Jtpeaberr\nwhat would you\nlike to drink?',
            originalContent: null,
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [],
          }, {
            id: 426,
            fileName: 'Pocket Note_p7.svg',
            recognizedContent: '§\n¥23\n÷',
            originalContent: '§\n¥23\n÷',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [],
          }],
        }).then(resolve, reject);
      });
    }
    if (!tags.length && predicate === '') {
      return new Promise((resolve, reject) => {
        const request = this.apiClient
          .get('hw/services/files/svg');
        this.storeRequest(request);
        request
          .on('abort', reject)
          .end((error, response) => {
            this.processResponse(error, response).then(resolve, reject);
          });
      });
    } else if (!tags.length && predicate !== '') {
      return new Promise((resolve, reject) => {
        const request = this.apiClient
          .get(`hw/services/files/svg?text=${predicate}`);
        this.storeRequest(request);
        request
          .on('abort', reject)
          .end((error, response) => {
            this.processResponse(error, response).then(resolve, reject);
          });
      });
    } else {
      return new Promise((resolve, reject) => {
        const request = this.apiClient
          .get(`hw/services/files/svg?hashTagValues=${tags}&text=${predicate}`);
        this.storeRequest(request);
        request
          .on('abort', reject)
          .end((error, response) => {
            this.processResponse(error, response).then(resolve, reject);
          });
      });
    }
  }

  getTagsByName(name) {
    return new Promise((resolve, reject) => {
      const request = this.apiClient
        .get(`hw/services/hashTag?startWith=${name}`);
      this.storeRequest(request);
      request
        .on('abort', reject)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject);
        });
    });
  }

  getDocumentById(id) {
    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
      return new Promise((resolve, reject) => {
        this.processResponse(null, {
          body: {
            id: 431,
            fileName: "Evgeniy' notebook 16-1_p98.svg",
            recognizedContent: '<p># HW #MEETING: Alexey Shapiguzou</p>\n<p>heavy use of lab books<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;excited by the pen<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;orders one as present<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;manages projects as folders<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;writes measurement table in the book<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;retypes to Excel<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#HW #idea<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use pen in data collection in developing countries</p>\n<p>Enrico: national parks<br>\n &nbsp;&nbsp;&nbsp;&nbsp;Mar- Leachy foundation<br>\n &nbsp;&nbsp;&nbsp;&nbsp;TM - Moscquito</p>',
            originalContent: '# HW t#MEETING #e: Alexey Shapiguzou\nheavy use of lab books\nexcited by the pen\norders one as present\nmanages projects as folders\nwrites measurement table in the book\nretypes to Excel\n# H W #idea\nUse pen in data collection in\ndeveloping countries "\nRnrrco: national perks\nMar- Leachy foundation\nT M-Mosgurtoe',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 464, value: 'ec', title: null, ownerId: 309 }, {
              id: 407,
              value: 'idea',
              title: 'idea',
              ownerId: 309,
            }, { id: 416, value: 'mockup', title: 'mockup', ownerId: 309 }, {
              id: 408,
              value: 'meeting',
              title: 'meeting',
              ownerId: 309,
            }, { id: 404, value: 'todo', title: 'todo', ownerId: 309 }],
          },
        }).then(resolve, reject);
      });
    }
    return new Promise((resolve, reject) => {
      this.apiClient
        .get(`hw/services/files/svg/${id}`)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject);
        });
    });
  }

  getMyDocuments() {
    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
      return new Promise((resolve, reject) => {
        this.processResponse(null, {
          body: [{
            id: 431,
            fileName: "Evgeniy' notebook 16-1_p98.svg",
            recognizedContent: '<p># HW #MEETING: Alexey Shapiguzou</p>\n<p>heavy use of lab books<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;excited by the pen<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;orders one as present<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;manages projects as folders<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;writes measurement table in the book<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;retypes to Excel<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#HW #idea<br>\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use pen in data collection in developing countries</p>\n<p>Enrico: national parks<br>\n &nbsp;&nbsp;&nbsp;&nbsp;Mar- Leachy foundation<br>\n &nbsp;&nbsp;&nbsp;&nbsp;TM - Moscquito</p>',
            originalContent: '# HW t#MEETING #e: Alexey Shapiguzou\nheavy use of lab books\nexcited by the pen\norders one as present\nmanages projects as folders\nwrites measurement table in the book\nretypes to Excel\n# H W #idea\nUse pen in data collection in\ndeveloping countries "\nRnrrco: national perks\nMar- Leachy foundation\nT M-Mosgurtoe',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 404, value: 'todo', title: 'todo', ownerId: 309 }, {
              id: 408,
              value: 'meeting',
              title: 'meeting',
              ownerId: 309,
            }, { id: 416, value: 'mockup', title: 'mockup', ownerId: 309 }, {
              id: 464,
              value: 'ec',
              title: null,
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 338,
            fileName: "Evgeniy' notebook 16-1_p18_20170312_071338.svg",
            recognizedContent: '<p># meeting tvazminne need to come up worth estimate for course meeting data. Though the browser Call Marko to set up a meeting next week create a quote 28.9.16 #ECN, Glebe, Otso Need&nbsp;</p>\n<p>to integrate simple R script in Earth Cape. Make Earth Cape re-distributable moth own database. Installer moth all pre-requisites # Meeting: Tnazminne 29.9.2016 Exchange specs → Marko sends to me . then I make estimate start moth a part of the project this year is possible October busy , Nov-do work</p>',
            originalContent: '# meeting\ntvazminne\nneed to come up worth\nestimate for course\nmeeting\ndata. Though the browser\nCall Marko to set up a meeting\nnext week\ncreate a quote\n28.9.16 #ECN, Glebe, Otso\nNeed to integrate simple R script\nin Earth Cape.\nMake Earth Cape re-distributable\nmoth own database.\nInstaller moth all pre-requisites\n# Meeting: Tnazminne 29.9.2016\nExchange specs → Marko sends to me\n. then I make estimate\nstart moth a part of the project\nthis year is possible\nOctober busy , Nov-do work',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 410, value: 'prj_ecn', title: 'prj_ecn', ownerId: 309 }, {
              id: 408,
              value: 'meeting',
              title: 'meeting',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 411,
              value: 'prj_tv',
              title: 'prj_tv',
              ownerId: 309,
            }],
          }, {
            id: 316,
            fileName: "Evgeniy' notebook 16-1_p3_20170312_071259.svg",
            recognizedContent: '<p>H prep H ECN Poarkal#meeting preqparahrm catalog stabs files → post of F- B import new data database local copy dashboards demo data types UI converting 1. Convert scheme 2. run ECDB 3. "meng" option mug hangs by my sync failed!</p>',
            originalContent: 'H prep\nH ECN Poarkal#meeting preqparahrm\ncatalog\nstabs files → post of F- B\nimport new data\ndatabase local copy\ndashboards\ndemo data types\nUI\nconverting\n1. Convert scheme\n2. run ECDB\n3. "meng" option\nmug hangs\nby my sync\nfailed!',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 410, value: 'prj_ecn', title: 'prj_ecn', ownerId: 309 }, {
              id: 408,
              value: 'meeting',
              title: 'meeting',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 409,
              value: 'prep',
              title: 'prep',
              ownerId: 309,
            }],
          }, {
            id: 460,
            fileName: "Evgeniy' notebook 16-1_p196_20170412_100308.svg",
            recognizedContent: '11.04.2017-<br/>* todo<br/>o #TM get imperial database up to date<br/>#TM-s. update central<br/>:<br/># TM-1 field update spreadsheet generator<br/>0 Import mad birds and contact Hannah.<br/>0 frx error message when deleting BCG o TM.<br/>0 #slink: sharing concept document<br/># ecn: funding for 0 too<br/>0 #ecn: message final<br/>0<br/># ec: pay tax<br/>1#ecdb: web he ecn is behind database',
            originalContent: '11.04.2017-<br/>* todo<br/>o #TM get imperial database up to date<br/>#TM-s. update central<br/>:<br/># TM-1 field update spreadsheet generator<br/>0 Import mad birds and contact Hannah.<br/>0 frx error message when deleting BCG o TM.<br/>0 #slink: sharing concept document<br/># ecn: funding for 0 too<br/>0 #ecn: message final<br/>0<br/># ec: pay tax<br/>1#ecdb: web he ecn is behind database',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 464,
              value: 'ec',
              title: null,
              ownerId: 309,
            }, { id: 463, value: 'TM', title: null, ownerId: 309 }, {
              id: 462,
              value: 'ecdb',
              title: null,
              ownerId: 309,
            }, { id: 461, value: 'ecn', title: null, ownerId: 309 }],
          }, {
            id: 318,
            fileName: "Evgeniy' notebook 16-1_p4_20170312_071301.svg",
            recognizedContent: '<p># Hw #diagram r ttMeehmgmrfh@Leokhrrng07.og. 2016 idea about lab book and neo pen He has one trusted developer company in Moscow (moving to Luxemburg) and one in helshhr Pihlajamaki) ( Leo is potentially interested in developing this as a busyness NI has also hardware emporium e. g. build in GPs into notebook built in? (solar chasms?) Cops D) KLERRKT ⇐ ÷ BOOK klekkt web → ever hole (desktop) page → earth bape ruler - it → blehbot - - - ↳ i Nat - - f 1111 barcode Dm 14 to integrate moth can I lebbl or</p>',
            originalContent: '# Hw #diagram\nr\nttMeehmgmrfh@Leokhrrng07.og. 2016\nidea about lab book and neo pen\nHe has one trusted developer\ncompany in Moscow (moving to\nLuxemburg) and one in helshhr\nPihlajamaki)\n(\nLeo is potentially interested in\ndeveloping this as a busyness\nNI has also hardware emporium\ne. g. build in GPs into notebook\nbuilt in? (solar chasms?)\nCops\nD)\nKLERRKT\n⇐ ÷\nBOOK\nklekkt web\n→ ever hole\n(desktop)\npage\n→ earth bape\nruler\n-\nit\n→ blehbot\n-\n-\n-\n↳ i Nat\n-\n-\nf\n1111\nbarcode\nDm\n14\nto integrate moth\ncan\nI lebbl or',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 408,
              value: 'meeting',
              title: 'meeting',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 344,
            fileName: "Evgeniy' notebook 16-1_p23_20170312_071347.svg",
            recognizedContent: '<p>H Hw #klekkt #data klebkt Database Data Row (U id, spec. fields, var. fields loe. data, timestamp) species G strokes) Page (Ui d, doe, rows, images, locator) Book (aid, user (owner)) Location (Uid, cord., name) Nedra-images, sounds, files Gps tracks / logs User Project Event (collectors) 15 3) blob storage Page stroke date 1user) Media Gps data Lehihkoinen Alekgi meeting 5.10.2016 museum B L fi lo h (all Parraga in B) aehne ringers 500 confirmed: data servic is very needed per neck I page (em. photo) 1, t.is netbook per year s Transect: printed maps afandgps talked also to der in II → sound very invited \\</p>',
            originalContent: 'H Hw #klekkt #data\nklebkt\nDatabase\nData Row (U id, spec. fields, var. fields\nloe. data, timestamp)\nspecies\nG strokes)\nPage (Ui d, doe, rows, images, locator)\nBook (aid, user (owner))\nLocation (Uid, cord., name)\nNedra-images, sounds, files\nGps tracks / logs\nUser\nProject\nEvent (collectors)\n15 3) blob storage\nPage stroke date\n1user) Media\nGps data\nLehihkoinen Alekgi\nmeeting\n5.10.2016\nmuseum\nB L fi lo h (all Parraga in B)\naehne ringers 500\nconfirmed: data servic is very needed\nper neck I page (em. photo)\n1, t.is netbook per year\ns\nTransect: printed maps afandgps\ntalked also to der in II → sound\nvery invited\n\\',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 333,
            fileName: "Evgeniy' notebook 16-1_p14_20170312_071325.svg",
            recognizedContent: '<p>#plans #hw #NeoLabs #meeting #prep&nbsp;</p>\n<p>klebkt app text -<br>\nreceive data data<br>\nparse data drawings annotated snapshot. <br>\nstore in the cloud <br>\noutput tabular <br>\ntrack Gps <br>\ntake pictures&nbsp;</p>\n<p>klekkt book (irrhally slenderer Neo) Babe section seekers header place date - r. / -.. -r- f v -e, f -r. ← data header ✓ r. ( cri r (r [ ← data hlehht platform klebkt cloud Mongo DB klebkt klebkt DD app portal users Neo E.. pm Paper IF it</p>',
            originalContent: 'ooh\nNeo Labs\n# plans #HW\n#\nmeeting prep\nklebkt app\ntext\n-\nreceive data\ndata\nparse data\ndrawings\nannotated snapshot.\nstore in the cloud\noutput tabular\ntrade Gps\ntake pictures\nklehkt book (irrhally slenderer Neo)\nBabe section\nseekers header\nplace date\n- r. / -.. -r- f v -e, f -r.\n← data header\n✓ r. ( cri\nr (r\n[\n← data\nhlehht\nplatform\nklebkt cloud\nMongo DB\nklebkt\nklebkt\nDD app\nportal\nusers\nNeo\nE..\npm\nPaper\nIF it',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 415, value: 'diagram', title: 'diagram', ownerId: 309 }],
          }, {
            id: 427,
            fileName: 'wh#cool#fun#science#hashTag.svg',
            recognizedContent: 'Wh',
            originalContent: 'Wh',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [],
          }, {
            id: 349,
            fileName: "Evgeniy' notebook 16-1_p28_20170312_071409.svg",
            recognizedContent: '<p>H ECN#meeting things#to do Upload presentations send to participants decide on data paper Ofso thinks its a good idea and I should be a first author Quickly write first one page draft and sent to coauthors along with explanation of participation terms R integrations → talk to Gleb n Decide on Sochi meet Send datasets in processing info → Hello? RB puller H Earth Cape customize forms contact tester reserves export data update Google Groups!</p>',
            originalContent: 'H ECN#meeting things#to do\nUpload presentations\nsend to participants\ndecide on data paper\nOfso thinks its a good idea\nand I should be a first author\nQuickly write first one page draft\nand sent to coauthors along\nwith explanation of participation terms\nR integrations → talk to Gleb\nn\nDecide on Sochi meet\nSend datasets in processing info → Hello?\nRB puller\nH Earth Cape\ncustomize forms\ncontact tester reserves\nexport data\nupdate Google Groups',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 428,
            fileName: 'Pocket Note_p8.svg',
            recognizedContent: 'Jtpeaberr\nwhat would you\nlike to drink?',
            originalContent: 'Jtpeaberr\nwhat would you\nlike to drink?',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [],
          }, {
            id: 430,
            fileName: 'Pocket Note_p6.svg',
            recognizedContent: 'ohm\n&\n0\n$\nD',
            originalContent: 'ohm\n&\n0\n$\nD',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [],
          }, {
            id: 212,
            fileName: "Evgeniy' notebook 16-1_p42_20170312_071451.svg",
            recognizedContent: '# geo notes #HW #idea\na\n~\na, y\n813\na, y\nc¥\nIt\nx. y\n|\nEh\na, y\npage\ngps\ncamera\nDatakxs of geo referenced noted\nand image\ninteract with date\nmap',
            originalContent: '# geo notes #HW #idea\na\n~\na, y\n813\na, y\nc¥\nIt\nx. y\n|\nEh\na, y\npage\ngps\ncamera\nDatakxs of geo referenced noted\nand image\ninteract with date\nmap',
            owner: { id: 78, email: 'evgeniy@meyke.info', userName: 'evgeniy' },
            hashTags: [{ id: 213, value: 'geo', title: 'geo', ownerId: 78 }],
          }, {
            id: 394,
            fileName: "Evgeniy' notebook 16-1_p172_20170321_113017.svg",
            recognizedContent: "# call * meeting #slink#feedback\n@ Anelrii Domanski 21.03.2017\n- some people don't vote\n- word or tent files are used for\nprojects and protocols\n# slink #mockup\nA- ----\n.\n#\n#man\n# me\n- . -\nresults\ntags\nH meeting\nH mockup\nH mobile\n→\nH phone\nA test",
            originalContent: "# call * meeting #slink#feedback\n@ Anelrii Domanski 21.03.2017\n- some people don't vote\n- word or tent files are used for\nprojects and protocols\n# slink #mockup\nA- ----\n.\n#\n#man\n# me\n- . -\nresults\ntags\nH meeting\nH mockup\nH mobile\n→\nH phone\nA test",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 408,
              value: 'meeting',
              title: 'meeting',
              ownerId: 309,
            }, { id: 416, value: 'mockup', title: 'mockup', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }],
          }, {
            id: 220,
            fileName: "Evgeniy' notebook 16-1_p37_20170312_071435.svg",
            recognizedContent: 'to do: #to do\n# ECN: post gas pooling connection string\nHIM: append all types of data on export\nto the same XML hole\nttklelekt.. check e-ink Android dunes\n# ECDB client chosen logo → detaolvi\nattachment odbpat named Logo\ntflekkt: how to link images and\nmap maths to data\n# image.. 112125\n# map: 2\n• 2\n1\nN -coded map\ngenerated by app\nfor print out\nmap marking\nm9p\nare overlay ed with real\nin the background and data plotted\nMap Bon based pay-per-print service\ngenerates W-coded pdf based on map\nextent and stores on user account\nA- code just codes Oid of the map\nMap record stores extent and style\nUse printed map instead of f p s m',
            originalContent: 'to do: #to do\n# ECN: post gas pooling connection string\nHIM: append all types of data on export\nto the same XML hole\nttklelekt.. check e-ink Android dunes\n# ECDB client chosen logo → detaolvi\nattachment odbpat named Logo\ntflekkt: how to link images and\nmap maths to data\n# image.. 112125\n# map: 2\n• 2\n1\nN -coded map\ngenerated by app\nfor print out\nmap marking\nm9p\nare overlay ed with real\nin the background and data plotted\nMap Bon based pay-per-print service\ngenerates W-coded pdf based on map\nextent and stores on user account\nA- code just codes Oid of the map\nMap record stores extent and style\nUse printed map instead of f p s m',
            owner: { id: 78, email: 'evgeniy@meyke.info', userName: 'evgeniy' },
            hashTags: [{ id: 223, value: 'map', title: 'map', ownerId: 78 }],
          }, {
            id: 400,
            fileName: "Evgeniy' notebook 16-1_p104.svg",
            recognizedContent: 'WE U A database work\ncopied selected tables\ncreated sample sp and units file',
            originalContent: 'WE U A database work\ncopied selected tables\ncreated sample sp and units file',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 326,
            fileName: "Evgeniy' notebook 16-1_p7.svg",
            recognizedContent: 'Part Valkama museum bird people\ntalk before december\nbird meeting in October\nChinese wee paper books\n→ bird piaelehooh preferrer\nPENCIL !!\nspeeds\nID\nl /\n}\ns\nRicardo\nindustrial design\nfriend in Ben\nvisiting in December\nRicardo can help\nfinding the production source in as ra',
            originalContent: 'Part Valkama museum bird people\ntalk before december\nbird meeting in October\nChinese wee paper books\n→ bird piaelehooh preferrer\nPENCIL !!\nspeeds\nID\nl /\n}\ns\nRicardo\nindustrial design\nfriend in Ben\nvisiting in December\nRicardo can help\nfinding the production source in as ra',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 321,
            fileName: "Evgeniy' notebook 16-1_p5_20170312_071303.svg",
            recognizedContent: '# Klekkt #diagram #Hw\n(header)\nsurvey / project\ny\nis\n4\n4\ns r be info / route / god.\ni\nis\nmm\ndd\nDD\nCount\nspecies\ntome\nDD\nDD\nDD\nParnassians apollo\n12\nbarcode\nL\nof\n|\n1\nr - r -s\nKy. lbtaedyk\n22666088.220166\nis\nm\n14:05\nParnassus apollo\n1\n15:00\n3\nParnassus help him\nGeneral comment\ncomplex (large format)\n(small format)\nsimple\nDd@by\np reef\nSHE\nr\nD\nsun. I\nprey.. Is he I date\nDry"\nspecies 1\n•\ni.\ngpeenr 2\n^=\nB\nmean I\n.\n→\n±\n-\n÷\n|\ngreen 1\ngo\nID\nf\nproof.\nsotfmment\ncomment\nEllen',
            originalContent: '# Klekkt #diagram #Hw\n(header)\nsurvey / project\ny\nis\n4\n4\ns r be info / route / god.\ni\nis\nmm\ndd\nDD\nCount\nspecies\ntome\nDD\nDD\nDD\nParnassians apollo\n12\nbarcode\nL\nof\n|\n1\nr - r -s\nKy. lbtaedyk\n22666088.220166\nis\nm\n14:05\nParnassus apollo\n1\n15:00\n3\nParnassus help him\nGeneral comment\ncomplex (large format)\n(small format)\nsimple\nDd@by\np reef\nSHE\nr\nD\nsun. I\nprey.. Is he I date\nDry"\nspecies 1\n•\ni.\ngpeenr 2\n^=\nB\nmean I\n.\n→\n±\n-\n÷\n|\ngreen 1\ngo\nID\nf\nproof.\nsotfmment\ncomment\nEllen',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 323,
            fileName: "Evgeniy' notebook 16-1_p6_20170312_071306.svg",
            recognizedContent: 'A\nttklekkt. #ideas\n# Hw#idea\nGeneral\n1. list fields\n2. design page\n3. order notebook\n4. output data\nfields\nraw data\nform\narchive\ndesign\ntunneled\npage\ntomes taped\nlayout\nsniogned\n-\n-\n-\nb\n-\n-\npages\nintegrations stperalosed solutions\nlab hook\nfield tool\ncalendar\nmaps',
            originalContent: 'A\nttklekkt. #ideas\n# Hw#idea\nGeneral\n1. list fields\n2. design page\n3. order notebook\n4. output data\nfields\nraw data\nform\narchive\ndesign\ntunneled\npage\ntomes taped\nlayout\nsniogned\n-\n-\n-\nb\n-\n-\npages\nintegrations stperalosed solutions\nlab hook\nfield tool\ncalendar\nmaps',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 310,
            fileName: "Evgeniy' notebook 16-1_p2_20170312_071257.svg",
            recognizedContent: '<p>#todo<br>\n#SAFE</p>\n<p>decode on template<br>\nmeet moth David<br>\nupload data<br>\n</p>\n<p>@Mar</p>\n<p>create pdf<br>\nNew clients<br>\nSeal demo <br>\nTvaizminne demo<br>\nPolly needs to # TM talk to Fred simplest expert about the sheets to do and then we # Ecw # lteliconrus can meet update Panama V V set up enpnt</p>',
            originalContent: '# to do\n3\n# SAFE\ndecode on template\nmeet moth David\nupload data\n@ man\nups. create pdf\nNew clients\nTully\nSeal demo\n06.09.16\nTvaizminne demo\nPolly needs to\n# TM\ntalk to Fred\nsimplest expert\nabout the sheets\nto do\nand then we\n# Ecw\n# lteliconrus\ncan meet\nupdate Panama\nV\nV\nset up enpnt',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 404, value: 'todo', title: 'todo', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }],
          }, {
            id: 385,
            fileName: 'Idea Pad Mini_p16_20170321_113011.svg',
            recognizedContent: "<p>Holy smoke! This is cool D RD. Yuupiil .!! Npuloem Helsinki 55 Robert'); DROP TABLE Students; - Mo? Mo, little Bobby tables we call him... PIN 0391 - \"h O_0 I'm a pen, and I am SMART * go to Pesrrkelello Hello I This is a test I:-(o ) ( \\ 1</p>",
            originalContent: "Holy smoke! This is cool D\nRD.\nYuupiil .!!\nNpuloem Helsinki 55\nRobert'); DROP TABLE Students; -\nMo? Mo, little Bobby tables\nwe call him...\nPIN 0391\n- \"h\nO_0\nI'm a pen, and I am SMART\n*\ngo\nto\nPesrrkelello\nHello I\nThis is a test\nI:-(o\n)\n(\n\\\n1",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 404, value: 'todo', title: 'todo', ownerId: 309 }, {
              id: 417,
              value: 'architecture',
              title: 'architecture',
              ownerId: 309,
            }, { id: 413, value: 'book_ev_pad17', title: 'book_ev_pad17', ownerId: 309 }, {
              id: 418,
              value: 'pen_trial',
              title: 'pen_trial',
              ownerId: 309,
            }],
          }, {
            id: 327,
            fileName: "Evgeniy' notebook 16-1_p9_20170312_071310.svg",
            recognizedContent: '# hlekkt #mvp t#HW\nhlekkt mv p\nBook\nProduct\nnotebook\napp\nNotebook\nfoxed page template\nHeader\nPiaget\nsits me start\nDateline End\nID sp c T\nDate area\nID\nspecies\ncount\ntime\nApp\nreceive data\nparse page\noutput tabular data',
            originalContent: '# hlekkt #mvp t#HW\nhlekkt mv p\nBook\nProduct\nnotebook\napp\nNotebook\nfoxed page template\nHeader\nPiaget\nsits me start\nDateline End\nID sp c T\nDate area\nID\nspecies\ncount\ntime\nApp\nreceive data\nparse page\noutput tabular data',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 336,
            fileName: "Evgeniy' notebook 16-1_p15_20170312_071329.svg",
            recognizedContent: '# HW #diagram #idea\nGPS, camera, etc, ink, data, annotations\nL\nk\nsensor / capture date t data records\nklebbt\nstitching bots together in the cloud\nrate\ntake picture of object\naugmented paper\nimage annotation\n•\nplace on page in app\nannotate on paper\nMap marking\ninsert map on page\nuse pen to add\nlandmarks\nannotate during\nDatabase\nmozle\napplication\ni\napp I services\np\nneo\ndevelopers\nusers',
            originalContent: '# HW #diagram #idea\nGPS, camera, etc, ink, data, annotations\nL\nk\nsensor / capture date t data records\nklebbt\nstitching bots together in the cloud\nrate\ntake picture of object\naugmented paper\nimage annotation\n•\nplace on page in app\nannotate on paper\nMap marking\ninsert map on page\nuse pen to add\nlandmarks\nannotate during\nDatabase\nmozle\napplication\ni\napp I services\np\nneo\ndevelopers\nusers',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 420,
              value: 'sketch',
              title: 'sketch',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 407,
              value: 'idea',
              title: 'idea',
              ownerId: 309,
            }],
          }, {
            id: 337,
            fileName: "Evgeniy' notebook 16-1_p17_20170312_071336.svg",
            recognizedContent: '19.9.2016\n# idea He hlekkt A- Hw\nleleleht\ndigitizing motivation\nUse case\nchops, notebooks\naccumulate\nMaria Delgado\nJust page images\nare not enough, needs ante\ndata sheets generation.\nNext key point G PS!\nneed automatic coordinate\nassignment.\n•',
            originalContent: '19.9.2016\n# idea He hlekkt A- Hw\nleleleht\ndigitizing motivation\nUse case\nchops, notebooks\naccumulate\nMaria Delgado\nJust page images\nare not enough, needs ante\ndata sheets generation.\nNext key point G PS!\nneed automatic coordinate\nassignment.\n•',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 341,
            fileName: "Evgeniy' notebook 16-1_p22_20170312_071345.svg",
            recognizedContent: '# Hw A- klekkt#stack#der\napp\nklekkt stock\nReact Native\nMeteor is\nMongo D B\nhosting\nMeteor Galaxy\nCompere. io / M Lab ? I Atlas?\nto table data\ntranscribe\nMSI\nstore\non backend\n482\naccess\n1data e strokes)\nedof\nGps, images\nMS3\nEnrich\ntaxonomy\nlocation\nProducts\napp (s)\n1 services\nsubscriptions\npen\nbooks',
            originalContent: '# Hw A- klekkt#stack#der\napp\nklekkt stock\nReact Native\nMeteor is\nMongo D B\nhosting\nMeteor Galaxy\nCompere. io / M Lab ? I Atlas?\nto table data\ntranscribe\nMSI\nstore\non backend\n482\naccess\n1data e strokes)\nedof\nGps, images\nMS3\nEnrich\ntaxonomy\nlocation\nProducts\napp (s)\n1 services\nsubscriptions\npen\nbooks',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 406, value: 'dev', title: 'dev', ownerId: 309 }],
          }, {
            id: 362,
            fileName: "Evgeniy' notebook 16-1_p34_20170312_071422.svg",
            recognizedContent: "# HW #idea\nklekht\nNavigation:\nBooks (t pages)\nProjects (t events)\nLocations\nmap\nData\nrecords pages map\nproject\nBook\nlocators\nt\nevent\npage\ndata\n'speeds\ne date\nBook\ndata\na page → data\nBook\np\na data\nRupert\n→ date\nLocator\n→ data\nSpain\n→ date\nRant\nfretter\n\uDB80\uDC002\uDB80\uDC01 lol",
            originalContent: "# HW #idea\nklekht\nNavigation:\nBooks (t pages)\nProjects (t events)\nLocations\nmap\nData\nrecords pages map\nproject\nBook\nlocators\nt\nevent\npage\ndata\n'speeds\ne date\nBook\ndata\na page → data\nBook\np\na data\nRupert\n→ date\nLocator\n→ data\nSpain\n→ date\nRant\nfretter\n\uDB80\uDC002\uDB80\uDC01 lol",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 364,
            fileName: "Evgeniy' notebook 16-1_p41_20170312_071450.svg",
            recognizedContent: "→\n# Hw #diagram\ngpeeoalmcd end.\nsolutions\n/\nwin\nof'\nmapping\nNfb\n.\nEE * cell\nfield\n1\n|\ntoy\n3\n.\n\uDB80\uDC009\uDB80\uDC01\nBiology\n2\n→\npaper\nklehhtr\nSocial Netmrh\nM\ngeo notes\nCitizen science\n(CROWD)",
            originalContent: "→\n# Hw #diagram\ngpeeoalmcd end.\nsolutions\n/\nwin\nof'\nmapping\nNfb\n.\nEE * cell\nfield\n1\n|\ntoy\n3\n.\n\uDB80\uDC009\uDB80\uDC01\nBiology\n2\n→\npaper\nklehhtr\nSocial Netmrh\nM\ngeo notes\nCitizen science\n(CROWD)",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 365,
            fileName: "Evgeniy' notebook 16-1_p42_20170312_071451.svg",
            recognizedContent: '# geo notes #HW #idea\na\n~\na, y\n813\na, y\nc¥\nIt\nx. y\n|\nEh\na, y\npage\ngps\ncamera\nDatakxs of geo referenced noted\nand image\ninteract with date\nmap',
            originalContent: '# geo notes #HW #idea\na\n~\na, y\n813\na, y\nc¥\nIt\nx. y\n|\nEh\na, y\npage\ngps\ncamera\nDatakxs of geo referenced noted\nand image\ninteract with date\nmap',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 407,
              value: 'idea',
              title: 'idea',
              ownerId: 309,
            }],
          }, {
            id: 367,
            fileName: "Evgeniy' notebook 16-1_p43_20170312_071452.svg",
            recognizedContent: "Mum\n# HW A- diagram\nr\nled\nlaw\nhour\nmapmr\nGIs\nEmil\ne\n.\nso\ns\npan\nus\nON\ni\nfold\n7\ns\noff\nit'\ntyl\nW\n0. Traditions, specifics, regiments\nProblem ends, urgent, costs\nital\ncurrent solutions.\n1.\n!\nor\na) manual labour\nb) in-house dew\n4. Own enpcrttosoelllntan adv.\n5. customers\n6. Market srre Be\n7.. Consumer market\n' l ✓\n'Rue o heelan l",
            originalContent: "Mum\n# HW A- diagram\nr\nled\nlaw\nhour\nmapmr\nGIs\nEmil\ne\n.\nso\ns\npan\nus\nON\ni\nfold\n7\ns\noff\nit'\ntyl\nW\n0. Traditions, specifics, regiments\nProblem ends, urgent, costs\nital\ncurrent solutions.\n1.\n!\nor\na) manual labour\nb) in-house dew\n4. Own enpcrttosoelllntan adv.\n5. customers\n6. Market srre Be\n7.. Consumer market\n' l ✓\n'Rue o heelan l",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 331,
            fileName: "Evgeniy' notebook 16-1_p10_20170312_071313.svg",
            recognizedContent: '<p># Hw D B rd fer line miimtsee includes notebooks tabular input = ID / species / count f 213 / Parnassians apollo / 1 # 725 MAZ / Pieri s brassiere / 5 18 / species 2/33 A 5 / blabla 4 / 45 AT parse against GBDF "÷...÷. % 14 15 16 Mauch p - Vat he jhgghjgljh</p>',
            originalContent: '# Hw\nD B rd fer line miimtsee includes notebooks\ntabular input\n=\nID / species / count\nf\n213 / Parnassians apollo / 1\n# 725\nMAZ / Pieri s brassiere / 5\n18 / species 2/33\nA 5 / blabla 4 / 45\nAT\nparse against GBDF\n"÷...÷.\n%\n14\n15\n16\nMauch\np\n- Vat\nhe',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 368,
            fileName: "Evgeniy' notebook 16-1_p44_20170312_071454.svg",
            recognizedContent: "# HW He diagrams\n'im\nObservation / Measurement\n(writing)\nPaper\n(typing)\nTabular data\n(analysis)\nEnvironment\nObservation\ndevice\nbook\nimage\nlocation\nnote\napp\npen\nOCR\nenrichment\nprivate cloud\n- alls line",
            originalContent: "# HW He diagrams\n'im\nObservation / Measurement\n(writing)\nPaper\n(typing)\nTabular data\n(analysis)\nEnvironment\nObservation\ndevice\nbook\nimage\nlocation\nnote\napp\npen\nOCR\nenrichment\nprivate cloud\n- alls line",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 369,
            fileName: "Evgeniy' notebook 16-1_p47_20170312_071459.svg",
            recognizedContent: "µ\n# HW\n# diagram\nfr\ndata\ndog.\n1\n' .\nIf\n✓\ni\n9\nmanual wrath\nt\n/\nv\n!\napex t pen\nfactory I\nt¥FE%i\"\n-\n&\nis\n7\n$§§§fs/ Er $\n$\nPleasure\n\"$'$\nfact.y2\nfetmp\n$$.\n$\ns.\nv\nr\nPfirsch\nr\nbi.\n7",
            originalContent: "µ\n# HW\n# diagram\nfr\ndata\ndog.\n1\n' .\nIf\n✓\ni\n9\nmanual wrath\nt\n/\nv\n!\napex t pen\nfactory I\nt¥FE%i\"\n-\n&\nis\n7\n$§§§fs/ Er $\n$\nPleasure\n\"$'$\nfact.y2\nfetmp\n$$.\n$\ns.\nv\nr\nPfirsch\nr\nbi.\n7",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 420,
              value: 'sketch',
              title: 'sketch',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 347,
            fileName: "Evgeniy' notebook 16-1_p24_20170312_071349.svg",
            recognizedContent: "g- 14.10.16\nFew\n#\n# meeting #seminar\nData structure\nContact database\nRunning the project\nData types\nDrffrenlhres\nDate drshrbuhron\nsoftware doshobntrar\n-\nR integration\nprcregnsohes\nFuture plans\nPost apes\nBaba patchiness → missing\nNet. 4.5\nspecialist groups\nHow to increase porbrcrpahr?\nWin b-10\ninvolve more research\nR\ninstitutes?\nHow to advertize?\nDiscussion topics\nQnshsnaire Ec.\nOpen data (pub punks)\nWho interested\n'Earth cape\nHas IT\nMore members\nGIs?\nMeetings next year\nR integrations\nAgreements cont.?\nAsk the last\nPen\nfor Oto's book\nOpen science",
            originalContent: "g- 14.10.16\nFew\n#\n# meeting #seminar\nData structure\nContact database\nRunning the project\nData types\nDrffrenlhres\nDate drshrbuhron\nsoftware doshobntrar\n-\nR integration\nprcregnsohes\nFuture plans\nPost apes\nBaba patchiness → missing\nNet. 4.5\nspecialist groups\nHow to increase porbrcrpahr?\nWin b-10\ninvolve more research\nR\ninstitutes?\nHow to advertize?\nDiscussion topics\nQnshsnaire Ec.\nOpen data (pub punks)\nWho interested\n'Earth cape\nHas IT\nMore members\nGIs?\nMeetings next year\nR integrations\nAgreements cont.?\nAsk the last\nPen\nfor Oto's book\nOpen science",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 421, value: 'seminar', title: 'seminar', ownerId: 309 }, {
              id: 410,
              value: 'prj_ecn',
              title: 'prj_ecn',
              ownerId: 309,
            }, { id: 408, value: 'meeting', title: 'meeting', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }],
          }, {
            id: 384,
            fileName: "Evgeniy' notebook 16-1_p104.svg",
            recognizedContent: 'WE U A database work\ncopied selected tables\ncreated sample sp and units file',
            originalContent: 'WE U A database work\ncopied selected tables\ncreated sample sp and units file',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 350,
            fileName: "Evgeniy' notebook 16-1_p29_20170312_071405.svg",
            recognizedContent: '6\nA Hw#idea#data klekkt test\nCfield L] [field 2] [Species] [date]\nA Paznassius apollo / Pier is brass icae /\nU z b e ki s ta n / Ta s h teen t / 22. 05. 20 I 6\nObserved 2 females flying by\nso\nseveral males exhibited mating\nbehaviour\nthem is my hendnni tray test\nThe mat hnnollke fart writing\nthe most horrible and fast writing\nthe most horrible arm fart wintry\nthen is\nmy mohns test\nA t? -y.:; * * t ) C] A\n* * a * → ← T d A\nx * He#\nAbcDabBAxledftTT\nvery small part\nsmall prout\nhardly recognizable second line very small print\nCfield I] a) tho s is a general fouled\nEfield 23 beg\nE\nCspecies I\nCdescription] d J\nCfield I valued# [a [Parnassus]\nCde thos or a general des errphru value]',
            originalContent: '6\nA Hw#idea#data klekkt test\nCfield L] [field 2] [Species] [date]\nA Paznassius apollo / Pier is brass icae /\nU z b e ki s ta n / Ta s h teen t / 22. 05. 20 I 6\nObserved 2 females flying by\nso\nseveral males exhibited mating\nbehaviour\nthem is my hendnni tray test\nThe mat hnnollke fart writing\nthe most horrible and fast writing\nthe most horrible arm fart wintry\nthen is\nmy mohns test\nA t? -y.:; * * t ) C] A\n* * a * → ← T d A\nx * He#\nAbcDabBAxledftTT\nvery small part\nsmall prout\nhardly recognizable second line very small print\nCfield I] a) tho s is a general fouled\nEfield 23 beg\nE\nCspecies I\nCdescription] d J\nCfield I valued# [a [Parnassus]\nCde thos or a general des errphru value]',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 351,
            fileName: "Evgeniy' notebook 16-1_p30.svg",
            recognizedContent: '<field Is a>\n<field 2> a!\n<field 3> a!\nI fold t / a!\n! told 1! a!\n##field 1#a\n##field 2#b\n##fold 3#c\n# c: told l value b.. field b value\na: field A value\nMARK DOWN? → check specs\nuse#¥ for tagging records\n?\ny records?\nlace: Helsinki\nWalking around the garden is an\n$ p: P. apollo c: a female c: 5 male\nwho displayed rk mating #behaviour\ntime: 14105-15:08\nsp:? flying by very fast from east to west\nsp: bird sultry in the bush at: 15:08\nplace: Vantaa\nspp.: Prem hasrreae 1 or 3 of\nPaznassius apo O Chernak (I) 2 females',
            originalContent: '<field Is a>\n<field 2> a!\n<field 3> a!\nI fold t / a!\n! told 1! a!\n##field 1#a\n##field 2#b\n##fold 3#c\n# c: told l value b.. field b value\na: field A value\nMARK DOWN? → check specs\nuse#¥ for tagging records\n?\ny records?\nlace: Helsinki\nWalking around the garden is an\n$ p: P. apollo c: a female c: 5 male\nwho displayed rk mating #behaviour\ntime: 14105-15:08\nsp:? flying by very fast from east to west\nsp: bird sultry in the bush at: 15:08\nplace: Vantaa\nspp.: Prem hasrreae 1 or 3 of\nPaznassius apo O Chernak (I) 2 females',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 358,
            fileName: "Evgeniy' notebook 16-1_p32_20170312_071418.svg",
            recognizedContent: "B\npaper .\n# Hw\nc\nB\n# field work\n✓\nlike\nhe\ndis lo\nPro\nhlen\nthem\npro\n# Digitization\npyres\nv\nroutine\ndishte\nProblem\n# Data many\nchest\nlike\ndi' he\nshamus\ndime\nLIKE\n.\n✓\nDate analysers\ns\nhole\nv\nPub location\nthe\nR",
            originalContent: "B\npaper .\n# Hw\nc\nB\n# field work\n✓\nlike\nhe\ndis lo\nPro\nhlen\nthem\npro\n# Digitization\npyres\nv\nroutine\ndishte\nProblem\n# Data many\nchest\nlike\ndi' he\nshamus\ndime\nLIKE\n.\n✓\nDate analysers\ns\nhole\nv\nPub location\nthe\nR",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 414, value: 'field_work', title: 'field_work', ownerId: 309 }, {
              id: 407,
              value: 'idea',
              title: 'idea',
              ownerId: 309,
            }],
          }, {
            id: 361,
            fileName: "Evgeniy' notebook 16-1_p33_20170312_071420.svg",
            recognizedContent: '# idea\ngold It Hw\ni\n- W\nproblem\nBushes\nv\n1\ncese =\nImportance" Urgency (demeaning\n2 Business\n= Posirre How fluffy\noften you\nfeeling" need it\nCase\nklehkt app functionality\n1. Log GPs (start sessom, stop sassy\n2. Show on map\n3 Get pen data\n4. Create data record\n5. add coordinates\n6. Attach pictures\nViews: data ⇒ map es page es images\n7.\nStart / Stop\nConnect, download\nParse\nReview\nUpload\nBrowse\nMap',
            originalContent: '# idea\ngold It Hw\ni\n- W\nproblem\nBushes\nv\n1\ncese =\nImportance" Urgency (demeaning\n2 Business\n= Posirre How fluffy\noften you\nfeeling" need it\nCase\nklehkt app functionality\n1. Log GPs (start sessom, stop sassy\n2. Show on map\n3 Get pen data\n4. Create data record\n5. add coordinates\n6. Attach pictures\nViews: data ⇒ map es page es images\n7.\nStart / Stop\nConnect, download\nParse\nReview\nUpload\nBrowse\nMap',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 370,
            fileName: "Evgeniy' notebook 16-1_p49_20170312_071506.svg",
            recognizedContent: '# HW #diagram\npen\ntext, peep hns, screw\n← other sensor\nimages, location\nmobile app\napplication\nMeteor Is\n+ React Native\nserver app\nMongo DB\ndalah are I blob storage\n+ 533\n\uDB80\uDC006\uDB80\uDC01 Ps\nUser\ncamera\nuser\npen\nadmin\ns\napplocabm\napp\n^\nservices\napp\n)\nAPI\napp serve\nenkrnal\ndocument\nserve\ndb\napps\nserver',
            originalContent: '# HW #diagram\npen\ntext, peep hns, screw\n← other sensor\nimages, location\nmobile app\napplication\nMeteor Is\n+ React Native\nserver app\nMongo DB\ndalah are I blob storage\n+ 533\n\uDB80\uDC006\uDB80\uDC01 Ps\nUser\ncamera\nuser\npen\nadmin\ns\napplocabm\napp\n^\nservices\napp\n)\nAPI\napp serve\nenkrnal\ndocument\nserve\ndb\napps\nserver',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 415, value: 'diagram', title: 'diagram', ownerId: 309 }],
          }, {
            id: 371,
            fileName: "Evgeniy' notebook 16-1_p50_20170312_071510.svg",
            recognizedContent: "INPUT\npaper\ncamera\nGp\n# HW\npen\nt#diagram\nor'\n88\nI\nUSCZ\n-\napplication\nin\n\\\nserver\napp pp\n-\npassed doos\nuser data\nIntegrations\nFILES\nDB\norg. data\nLoc. data\nanalytics\n§$\nadmin app\nof\"\ni'\nserver app\nAnalytics\nAPI\nAPI\nspecials\napplnnt\napplval\ns\nspec. \uDB80\uDC001\uDB80\uDC01 bs\nfiles\ne\ndalahas\n'WEB\nmobile\nclient app",
            originalContent: "INPUT\npaper\ncamera\nGp\n# HW\npen\nt#diagram\nor'\n88\nI\nUSCZ\n-\napplication\nin\n\\\nserver\napp pp\n-\npassed doos\nuser data\nIntegrations\nFILES\nDB\norg. data\nLoc. data\nanalytics\n§$\nadmin app\nof\"\ni'\nserver app\nAnalytics\nAPI\nAPI\nspecials\napplnnt\napplval\ns\nspec. \uDB80\uDC001\uDB80\uDC01 bs\nfiles\ne\ndalahas\n'WEB\nmobile\nclient app",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 417, value: 'architecture', title: 'architecture', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 379,
            fileName: "Evgeniy' notebook 16-1_p87.svg",
            recognizedContent: "of\nEver Note ON C E S / Ela\nHw\n#\nf\npaper first\n-\n-\n-\n+\nt\ndater many\ne\n-\n-\ncollab was\n+\nt\n't\nT\nIt\nsimple\n+\n1\n(?\nseamless Gap to\n- dog)\n- 7\n+\n+ ent-ready\n|\nt\nt\ncost t\nII platform\n-\n-\nt\n#\n- ? eco system t\nt handwriting t\n+ -\n1\ny database any-\nWent sstfepss / to do\na eexttioxnaaiieee\nc\n1\nI comparison table\n3.\nProcess / dragon\nmatrix\nFunctionality\ns.\nbbbbbb\nIhs\nb\ns\n<",
            originalContent: "of\nEver Note ON C E S / Ela\nHw\n#\nf\npaper first\n-\n-\n-\n+\nt\ndater many\ne\n-\n-\ncollab was\n+\nt\n't\nT\nIt\nsimple\n+\n1\n(?\nseamless Gap to\n- dog)\n- 7\n+\n+ ent-ready\n|\nt\nt\ncost t\nII platform\n-\n-\nt\n#\n- ? eco system t\nt handwriting t\n+ -\n1\ny database any-\nWent sstfepss / to do\na eexttioxnaaiieee\nc\n1\nI comparison table\n3.\nProcess / dragon\nmatrix\nFunctionality\ns.\nbbbbbb\nIhs\nb\ns\n<",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 380,
            fileName: "Evgeniy' notebook 16-1_p99.svg",
            recognizedContent: "WRITE TO Ht#EE POINT\" AR\nBranche:\nDigital first 14 I\n1\nHw:\nSimple paper first UX\nData euheuhrrn\nHw:\nDocument creation\nProductivity\ntool\nAw..\nClean app tool\nHW:\nHw:\nO CR → source eorryinale link\nH task:\nA you work on\nE contractor\npaper...\nC\nme improve your UX\nF prefect..\n)\n(wnee\" Pll do the meagre)\nA@\nH link:\n'frx paper us\npaper UX\npaper → input device",
            originalContent: "WRITE TO Ht#EE POINT\" AR\nBranche:\nDigital first 14 I\n1\nHw:\nSimple paper first UX\nData euheuhrrn\nHw:\nDocument creation\nProductivity\ntool\nAw..\nClean app tool\nHW:\nHw:\nO CR → source eorryinale link\nH task:\nA you work on\nE contractor\npaper...\nC\nme improve your UX\nF prefect..\n)\n(wnee\" Pll do the meagre)\nA@\nH link:\n'frx paper us\npaper UX\npaper → input device",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 382,
            fileName: "Evgeniy' notebook 16-1_p103.svg",
            recognizedContent: 'H trip\nLondon 11-22.01.2016 #todo\nTasks:\nA Meet Delphine → next week\nSkype Bohdan Protz\nS hype kalle\nTeam viewer Lacamy\nVisit is ilmood\nE\ncheck with Rob\nDemo for Ukrainian reserves\nletter to ECN (Skype mrh Marr a)\nSkype moth Alexandr Kuzmin\nITTMM. S E demo\nRead on Java and Play\nRestore ECW database-installing...\nUpdate TM instill\nAsk Delphine for detailed panels\nUpdate ECDB men\nG Update RCDD urn',
            originalContent: 'H trip\nLondon 11-22.01.2016 #todo\nTasks:\nA Meet Delphine → next week\nSkype Bohdan Protz\nS hype kalle\nTeam viewer Lacamy\nVisit is ilmood\nE\ncheck with Rob\nDemo for Ukrainian reserves\nletter to ECN (Skype mrh Marr a)\nSkype moth Alexandr Kuzmin\nITTMM. S E demo\nRead on Java and Play\nRestore ECW database-installing...\nUpdate TM instill\nAsk Delphine for detailed panels\nUpdate ECDB men\nG Update RCDD urn',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 404, value: 'todo', title: 'todo', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }],
          }, {
            id: 363,
            fileName: "Evgeniy' notebook 16-1_p36_20170312_071433.svg",
            recognizedContent: 'ttklebkt lab book #HW\nImportant.. integrated lab book\narchiving solutions!\n-\n-\n-\nemeyke\nLog rn\npen ✓\nPen Or\n→\n→\n→\nstart\nstart\nC\nE\nME klelektrng\npages\nklekktrng\npages: 3\nEvents\n→ date\ndata: 15\nProjects\nkm; 10\nmap\nLocations\nhrs: 2:45\nBooks\nTop\nftp.yeehg\nprop L\nmulti select\npwj 2\nproj 3\nO put Y\ndata (map)',
            originalContent: 'ttklebkt lab book #HW\nImportant.. integrated lab book\narchiving solutions!\n-\n-\n-\nemeyke\nLog rn\npen ✓\nPen Or\n→\n→\n→\nstart\nstart\nC\nE\nME klelektrng\npages\nklekktrng\npages: 3\nEvents\n→ date\ndata: 15\nProjects\nkm; 10\nmap\nLocations\nhrs: 2:45\nBooks\nTop\nftp.yeehg\nprop L\nmulti select\npwj 2\nproj 3\nO put Y\ndata (map)',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 422,
              value: 'mobile',
              title: 'mobile',
              ownerId: 309,
            }],
          }, {
            id: 372,
            fileName: "Evgeniy' notebook 16-1_p51_20170312_071512.svg",
            recognizedContent: 'D= PAPER\nH Hw\nFORMS\nPAGES\nH diagram\nDo Devices\nphone\ncamera\npen\nGps\nr\nclient app\ns\n11\nMeteoets\nMOBILE\nWEB\nReact\nmet\ncore suit.\nNative\ne. g. for\nserver app.\ni.EE\nANALYTICS\nAmazon S 33\nMongo DB\nDocument server\ndatabases ever\nDB\nvector Documents\nstructured data\nimages\nuser data\nGps LOGS\nCORE APIs\ngeneral purpos\ne\nspecialized\nINTEGRATION\nSPECIALIZED\napplication',
            originalContent: 'D= PAPER\nH Hw\nFORMS\nPAGES\nH diagram\nDo Devices\nphone\ncamera\npen\nGps\nr\nclient app\ns\n11\nMeteoets\nMOBILE\nWEB\nReact\nmet\ncore suit.\nNative\ne. g. for\nserver app.\ni.EE\nANALYTICS\nAmazon S 33\nMongo DB\nDocument server\ndatabases ever\nDB\nvector Documents\nstructured data\nimages\nuser data\nGps LOGS\nCORE APIs\ngeneral purpos\ne\nspecialized\nINTEGRATION\nSPECIALIZED\napplication',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 417, value: 'architecture', title: 'architecture', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 373,
            fileName: "Evgeniy' notebook 16-1_p56_20170312_071521.svg",
            recognizedContent: '# Hw #idea\nWays to interact moth paper\nPen, camera\nhandwriting\nbar codes\nRFID\nt\nte\nIdea. Collaborate in project\n#\nby wrong own pen with other boor\npen 2\npen 1\nextend\nive\nrachn\nbe old\nboo ke\nUse case 1: field survey\nCollective survey\nsurvey admin provides registration\npage in his book where people\ncan "touch" moth own pens\nto "register" for the prophet\nBy registering (by physical pen interaction\nmoth another person is back,\nusers get access to shored info and pages',
            originalContent: '# Hw #idea\nWays to interact moth paper\nPen, camera\nhandwriting\nbar codes\nRFID\nt\nte\nIdea. Collaborate in project\n#\nby wrong own pen with other boor\npen 2\npen 1\nextend\nive\nrachn\nbe old\nboo ke\nUse case 1: field survey\nCollective survey\nsurvey admin provides registration\npage in his book where people\ncan "touch" moth own pens\nto "register" for the prophet\nBy registering (by physical pen interaction\nmoth another person is back,\nusers get access to shored info and pages',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 374,
            fileName: "Evgeniy' notebook 16-1_p57_20170312_071522.svg",
            recognizedContent: '# HW the idea\nUse care? ÷ admin pen\nby interacting with other books\n=\nget access\n±\nz\nproblem.. N-code is not book unique\nfwneuhrom\nSpecs.\ndata:\nadd, delete, share\n)\nGroup f\ns\nprojects\nBooks\nPages\n(GPS log)\n(Images lay\nUser\nago sbaofron, Login\ncreate or join groups\ncreate or prim projects\nregister pen\n(un)',
            originalContent: '# HW the idea\nUse care? ÷ admin pen\nby interacting with other books\n=\nget access\n±\nz\nproblem.. N-code is not book unique\nfwneuhrom\nSpecs.\ndata:\nadd, delete, share\n)\nGroup f\ns\nprojects\nBooks\nPages\n(GPS log)\n(Images lay\nUser\nago sbaofron, Login\ncreate or join groups\ncreate or prim projects\nregister pen\n(un)',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 375,
            fileName: "Evgeniy' notebook 16-1_p68.svg",
            recognizedContent: 'blehkt ideas\nEvery day paper\ndocument feidheuh\nNews papers\nMaps\nPackaging\n=\nNotebooks\nCalendars\n✓\nwhole boards\n✓\nAnnouncement Bonds\nSurveys\n÷\nU\nForms (e. g. bank customs)\nStrikers / Labels',
            originalContent: 'blehkt ideas\nEvery day paper\ndocument feidheuh\nNews papers\nMaps\nPackaging\n=\nNotebooks\nCalendars\n✓\nwhole boards\n✓\nAnnouncement Bonds\nSurveys\n÷\nU\nForms (e. g. bank customs)\nStrikers / Labels',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }],
          }, {
            id: 376,
            fileName: "Evgeniy' notebook 16-1_p76.svg",
            recognizedContent: 'Protects\n-\n-\n-\nNavigation\nPro ref I\nPIT 2\nNotebooks\n3\nProjects\nCalendar\nSearch\nsettings\nMoto back\n-\nNotebook 2\n-\n-\nNotebook 7\nBrown / Projects /-..',
            originalContent: 'Protects\n-\n-\n-\nNavigation\nPro ref I\nPIT 2\nNotebooks\n3\nProjects\nCalendar\nSearch\nsettings\nMoto back\n-\nNotebook 2\n-\n-\nNotebook 7\nBrown / Projects /-..',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 422,
              value: 'mobile',
              title: 'mobile',
              ownerId: 309,
            }, { id: 415, value: 'diagram', title: 'diagram', ownerId: 309 }],
          }, {
            id: 377,
            fileName: "Evgeniy' notebook 16-1_p84.svg",
            recognizedContent: '# Hw * idea\ncapture method;\nenlunl dance\nme\nHand with\nHW\non screen\nsource:\nme\nJ\noutside\nbody sensors\nEvermore\nWearahles\nThou who wrote\n1.\n2.\nThis who wink\npreprocessing\n3.3\npurpose!\nWork\ncapture log\nprocessors',
            originalContent: '# Hw * idea\ncapture method;\nenlunl dance\nme\nHand with\nHW\non screen\nsource:\nme\nJ\noutside\nbody sensors\nEvermore\nWearahles\nThou who wrote\n1.\n2.\nThis who wink\npreprocessing\n3.3\npurpose!\nWork\ncapture log\nprocessors',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 412,
              value: 'book_ev_2017',
              title: 'book_ev_2017',
              ownerId: 309,
            }, { id: 407, value: 'idea', title: 'idea', ownerId: 309 }, {
              id: 415,
              value: 'diagram',
              title: 'diagram',
              ownerId: 309,
            }],
          }, {
            id: 386,
            fileName: "Evgeniy' notebook 16-1_p150.svg",
            recognizedContent: '# HW#mockup\nB tags\nQ search\ngroups he\nH hg I\ngrope\nH tag?\ngrip 2\nbaht\nbook\nboob\nbed\nH tag}\n|\ngun 3\nH tags\ngun 4\ngun 5\nH tags.\nH tag 6\n06.03.2012\n# Hw@Alex Shu\nagenda:\nY e application\nstartup school',
            originalContent: '# HW#mockup\nB tags\nQ search\ngroups he\nH hg I\ngrope\nH tag?\ngrip 2\nbaht\nbook\nboob\nbed\nH tag}\n|\ngun 3\nH tags\ngun 4\ngun 5\nH tags.\nH tag 6\n06.03.2012\n# Hw@Alex Shu\nagenda:\nY e application\nstartup school',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 388,
            fileName: "Evgeniy' notebook 16-1_p152_20170310_092825.svg",
            recognizedContent: '# to do\nMano a s hype-wed\n→ Wed .\nDavid sky he\no Adnoun Shyne\nEedb update: security, and\nY C application\no accounting earfhrcape\nAw I invo Me\ncheck neo notes one note integration\no TM. - neb to send\nTn. Field sheets → then\n8 Cinara MRC version\nwed\n• shuega skype → wtuede 8.30\nit ecelb -needs to delete user-user anvddof\nupdate eedb -weekend\ndate Dsc database\nmigrate TN dashboards\n0\nEcw program → talk to Oto\nOtso.. Gbdf?\ne\nanalysis?\na Eli?\npm Complnem / RBH assume → Lndng falter\neammppdle Tm',
            originalContent: '# to do\nMano a s hype-wed\n→ Wed .\nDavid sky he\no Adnoun Shyne\nEedb update: security, and\nY C application\no accounting earfhrcape\nAw I invo Me\ncheck neo notes one note integration\no TM. - neb to send\nTn. Field sheets → then\n8 Cinara MRC version\nwed\n• shuega skype → wtuede 8.30\nit ecelb -needs to delete user-user anvddof\nupdate eedb -weekend\ndate Dsc database\nmigrate TN dashboards\n0\nEcw program → talk to Oto\nOtso.. Gbdf?\ne\nanalysis?\na Eli?\npm Complnem / RBH assume → Lndng falter\neammppdle Tm',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 404, value: 'todo', title: 'todo', ownerId: 309 }, {
              id: 419,
              value: 'yc',
              title: 'yc',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 389,
            fileName: "Evgeniy' notebook 16-1_p154_20170310_092843.svg",
            recognizedContent: "# HW#idea\nconcept of \"spaces\"\n- add pages from any books\n- create common documents for\neasy pulling info from disparate\npages into single documents\n- keep the resulting data / tent\nlinked to originals\ns pence\nbook}\nbook 1\nbook'\nman well\np 30\np2l\npage 20\narrangement\n= light table\nbooks\nbook 9\npl\npw",
            originalContent: "# HW#idea\nconcept of \"spaces\"\n- add pages from any books\n- create common documents for\neasy pulling info from disparate\npages into single documents\n- keep the resulting data / tent\nlinked to originals\ns pence\nbook}\nbook 1\nbook'\nman well\np 30\np2l\npage 20\narrangement\n= light table\nbooks\nbook 9\npl\npw",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 390,
            fileName: "Evgeniy' notebook 16-1_p162_20170316_053517.svg",
            recognizedContent: '# It w He mockup\ni\nink LAST\n# mockup\n# meeting\n# Hw\n# idea\n# mockup\nA- der\n# mobile\nsearch\n# meehns\n# HW\nswope\n# idea\nleft\n# mockup\nA- mobile\nresults\ntags',
            originalContent: '# It w He mockup\ni\nink LAST\n# mockup\n# meeting\n# Hw\n# idea\n# mockup\nA- der\n# mobile\nsearch\n# meehns\n# HW\nswope\n# idea\nleft\n# mockup\nA- mobile\nresults\ntags',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }, {
              id: 422,
              value: 'mobile',
              title: 'mobile',
              ownerId: 309,
            }],
          }, {
            id: 378,
            fileName: "Evgeniy' notebook 16-1_p85.svg",
            recognizedContent: "Work\npaper Idigclr\npaper\ndigital\narchive\ncapture (lag\nprocess\nhire\ndry try\ncapture →\n→\nprinces → are him\nmanage\np 20\nsipeu\nactrvrtg\nproducers\nHW\nBut\ncapture\nPaper-first\npaper\nsolution\nstairs\nEN HW\nµv.\nt\ndrgrtrze\n1\npre-\nh iz pieces\n12.\nprocess\nanalysers\nµW\nt\nsomeone\nmanage\nOverkill\narchon\nz\nafterthought\npzigma\nPAPIER\naerchnre\nworkflow change\ns\n1\nreason?\n±'re\noil'",
            originalContent: "Work\npaper Idigclr\npaper\ndigital\narchive\ncapture (lag\nprocess\nhire\ndry try\ncapture →\n→\nprinces → are him\nmanage\np 20\nsipeu\nactrvrtg\nproducers\nHW\nBut\ncapture\nPaper-first\npaper\nsolution\nstairs\nEN HW\nµv.\nt\ndrgrtrze\n1\npre-\nh iz pieces\n12.\nprocess\nanalysers\nµW\nt\nsomeone\nmanage\nOverkill\narchon\nz\nafterthought\npzigma\nPAPIER\naerchnre\nworkflow change\ns\n1\nreason?\n±'re\noil'",
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [{ id: 405, value: 'slink', title: 'slink', ownerId: 309 }, {
              id: 416,
              value: 'mockup',
              title: 'mockup',
              ownerId: 309,
            }, { id: 412, value: 'book_ev_2017', title: 'book_ev_2017', ownerId: 309 }],
          }, {
            id: 425,
            fileName: 'Pocket Note_p8.svg',
            recognizedContent: 'Jtpeaberr\nwhat would you\nlike to drink?',
            originalContent: null,
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [],
          }, {
            id: 426,
            fileName: 'Pocket Note_p7.svg',
            recognizedContent: '§\n¥23\n÷',
            originalContent: '§\n¥23\n÷',
            owner: { id: 309, email: 'demo@', userName: 'demo' },
            hashTags: [],
          }],
        }).then(resolve, reject);
      });
    }
    return new Promise((resolve, reject) => {
      const request = this.apiClient
        .get('hw/services/files/svg?onlyMy');
      this.storeRequest(request);
      request
        .on('abort', reject)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject);
        });
    });
  }

  saveTag(id, obj) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .put(`hw/services/hashTag/${id}`, obj)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject);
        });
    });
  }

  getTags(tags) {
    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
      return new Promise((resolve, reject) => {
        this.processResponse(null, {
          body: [{
            id: 408,
            value: 'meeting',
            title: 'meeting',
            description: '',
            fileIds: [338, 394, 347, 316, 318, 431],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 409,
            value: 'prep',
            title: 'prep',
            description: '',
            fileIds: [316],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 411,
            value: 'prj_tv',
            title: 'prj_tv',
            description: '',
            fileIds: [338],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 412,
            value: 'book_ev_2017',
            title: 'book_ev_2017',
            description: '',
            fileIds: [384, 321, 386, 323, 388, 389, 326, 390, 327, 394, 331, 333, 336, 400, 337, 338, 341, 344, 347, 349, 350, 351, 358, 361, 362, 363, 364, 365, 367, 368, 369, 370, 371, 372, 373, 310, 374, 375, 376, 377, 378, 379, 316, 380, 318, 382],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 410,
            value: 'prj_ecn',
            title: 'prj_ecn',
            description: '',
            fileIds: [338, 347, 316],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 413,
            value: 'book_ev_pad17',
            title: 'book_ev_pad17',
            description: '',
            fileIds: [385],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 414,
            value: 'field_work',
            title: 'field_work',
            description: '',
            fileIds: [358],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 415,
            value: 'diagram',
            title: 'diagram',
            description: '',
            fileIds: [368, 370, 323, 371, 372, 376, 377, 364, 333, 318, 367],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 416,
            value: 'mockup',
            title: 'mockup',
            description: '',
            fileIds: [321, 386, 389, 390, 376, 394, 378, 363, 365, 431],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 417,
            value: 'architecture',
            title: 'architecture',
            description: '',
            fileIds: [385, 371, 372],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 418,
            value: 'pen_trial',
            title: 'pen_trial',
            description: '',
            fileIds: [385],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 404,
            value: 'todo',
            title: 'todo',
            description: 'todo',
            fileIds: [385, 388, 310, 382, 431],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 405,
            value: 'slink',
            title: 'slink',
            description: '',
            fileIds: [321, 386, 323, 389, 390, 327, 394, 331, 460, 333, 336, 341, 351, 358, 361, 362, 363, 364, 365, 367, 368, 369, 370, 371, 372, 374, 375, 376, 377, 378, 318],
            users: [{ id: 39, email: 'aykuzmin@gmail.com', userName: 'aykuzmin' }],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 406,
            value: 'dev',
            title: 'dev',
            description: '',
            fileIds: [341],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 407,
            value: 'idea',
            title: 'idea',
            description: '',
            fileIds: [323, 358, 327, 361, 362, 331, 364, 365, 367, 431, 368, 336, 374, 375, 377, 351],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 419,
            value: 'yc',
            title: 'yc',
            description: '',
            fileIds: [388],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 420,
            value: 'sketch',
            title: 'sketch',
            description: '',
            fileIds: [336, 369],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 421,
            value: 'seminar',
            title: 'seminar',
            description: '',
            fileIds: [347],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 422,
            value: 'mobile',
            title: 'mobile',
            description: '',
            fileIds: [390, 376, 363],
            users: [{ id: 289, email: 'zuban@', userName: 'zuban@' }],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 213,
            value: 'geo',
            title: 'geo',
            description: null,
            fileIds: [212],
            users: [{ id: 39, email: 'aykuzmin@gmail.com', userName: 'aykuzmin' }, {
              id: 309,
              email: 'demo@',
              userName: 'demo',
            }],
            owner: { id: 78, email: 'evgeniy@meyke.info', userName: 'evgeniy' },
          }, {
            id: 223,
            value: 'map',
            title: 'map',
            description: null,
            fileIds: [220],
            users: [{ id: 309, email: 'demo@', userName: 'demo' }, {
              id: 39,
              email: 'aykuzmin@gmail.com',
              userName: 'aykuzmin',
            }],
            owner: { id: 78, email: 'evgeniy@meyke.info', userName: 'evgeniy' },
          }, {
            id: 435,
            value: 'HW',
            title: null,
            description: null,
            fileIds: [],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 461,
            value: 'ecn',
            title: null,
            description: null,
            fileIds: [460],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 462,
            value: 'ecdb',
            title: null,
            description: null,
            fileIds: [460],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 463,
            value: 'TM',
            title: null,
            description: null,
            fileIds: [460],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 464,
            value: 'ec',
            title: null,
            description: null,
            fileIds: [460, 431],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 432,
            value: 'e',
            title: 'e',
            description: null,
            fileIds: [],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 434,
            value: 'MEETING',
            title: 'MEETING',
            description: null,
            fileIds: [],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }, {
            id: 485,
            value: 'check',
            title: 'check',
            description: '',
            fileIds: [],
            users: [],
            owner: { id: 309, email: 'demo@', userName: 'demo' },
          }],
        }).then(resolve, reject);
      });
    }
    if (tags === '') {
      return new Promise((resolve, reject) => {
        this.apiClient
          .get('hw/services/hashTag')
          .end((error, response) => {
            this.processResponse(error, response).then(resolve, reject);
          });
      });
    } else {
      return new Promise((resolve, reject) => {
        this.apiClient
          .get(`hw/services/hashTag?relatedTagIds=${tags}`)
          .end((error, response) => {
            this.processResponse(error, response).then(resolve, reject);
          });
      });
    }
  }

  uploadSVG(file) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .postUpload('hw/services/files/svg', file)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject);
        });
    });
  }

  getForms() {
    return new Promise((resolve, reject) => {
      const request = this.apiClient
        .get('video-submission-form/submissionform/');
      this.storeRequest(request);
      request
        .on('abort', reject)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject);
        });
    });
  }

  getFormById(id) {
    return new Promise((resolve, reject) => {
      const request = this.apiClient
        .get(`video-submission-form/submissionform/${id}`);
      this.storeRequest(request);
      request
        .on('abort', reject)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject);
        });
    });
  }

  saveFormById(data) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .put(`video-submission-form/submissionform/${data.id}`, data)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject);
        });
    });
  }

  createPdf(data) {
    const formData = new FormData();

    Object.keys(data).forEach((item) => {
      formData.append(item, data[item]);
    });
    return new Promise((resolve, reject) => {
      this.apiClient
        .postForm('video-submission-form/hook/', formData)
        .end((error, response) => {
          resolve(response.text);
        });
    });
  }

  createNewRecord(formObj) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .post('video-submission-form/submissionform/ ', formObj)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject);
        });
    });
  }

  getUserByEmail(email) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .get(`hw/services/user?email=${email}`)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject);
        });
    });
  }

  getUser() {
    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
      return new Promise((resolve, reject) => {
        this.processResponse(null, { body: { id: 309, email: 'demo@', userName: 'demo' } }).then(resolve, reject);
      });
    }
    return new Promise((resolve, reject) => {
      this.apiClient
        .get(`hw/services/user?email=${getCookie('username')}`)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject);
        });
    });
  }

  saveDocumentById(id, data) {
    return new Promise((resolve, reject) => {
      this.apiClient
        .put(`hw/services/files/svg/${id}`, data)
        .end((error, response) => {
          this.processResponse(error, response).then(resolve, reject);
        });
    });
  }

  setUserId(id) {
    setCookie('userId', id);
  }

  checkToken() {
    return getCookie('access-token');
  }

  getCurrentUser() {
    return getCookie('username');
  }

  getCurrentUserId() {
    return getCookie('userId');
  }

  logout() {
    deleteCookie('access-token');
    deleteCookie('username');
    deleteCookie('userId');
  }
}

export default BaseService;
