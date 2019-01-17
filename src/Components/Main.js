import React, {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';
import Addphoto from './Addphoto';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: "0",
          description: "Frédéric Michalak chez les Lolos noirs au Vietnam",
          imageLink: "https://tv5.ca/media/c4hgemhyxp6ftr/842X475/00481974_P0005155.jpg?t=ffdf3039c757f2ac9531d7ec40d35c2f"
        },
        {
          id: "1",
          description: "Edouard Baer chez les Dogons au Mali",
          imageLink: "https://tv5.ca/media/qaap57q95ykr9r/842X475/00481986_P0030322.jpg?t=1eae8c8125fa8410a4d4df3c3dc90d1f"
        },
        {
          id: "1",
          description: "Virginie Effira chez les Tsaatans en Mongolie",
          imageLink: "https://tv5.ca/media/rkvm5tb8v5k5wr/842X475/00481973_P0005548.jpg?t=316c1c4b0215b82be1c163c916b5e06e"
        },
        {
          id: "2",
          description: "Gérard Jugnot chez les Chipayas en Bolivie",
          imageLink: "https://tv5.ca/media/kgppptg788arcr/842X475/00481984_P0003355.jpg?t=575102b5a8a27ad9c1cd8f72507d1fe7"
        },
        {
          id: "3",
          description: "Sylvie Testud chez les Goranes au Tchad",
          imageLink: "https://tv5.ca/media/yjaxlvkdnrllnr/842X475/00481976_P0005259.jpg?t=89a7e786bc245089ac327e9488ecc7e9"
        },
        {
          id: "4",
          description: "Jacques Essebag chez les Quechuas au Pérou",
          imageLink: "https://tv5.ca/media/ftqf12e3xmhxtr/842X475/00570131_P0025735.jpg?t=d64102787e2b14075d9001204c5f3f3d"
        },
        {
          id: "5",
          description: "Cristiana Reali chez les Aborigènes Worrorra en Australie",
          imageLink: "https://tv5.ca/media/5443pn9127mlcr/842X475/00714982_P0032524.jpg?t=1ada08e5013efff1d4c4738a466a6f10"
        },
        {
          id: "6",
          description: "Mélanie Doutey chez les nomades de Mongolie",
          imageLink: "https://tv5.ca/media/clp0ic3m5syh3r/842X475/00714981_P0032523.jpg?t=8640ba754c09c22311713ce66cf0ea9f"
        },
        {
          id: "7",
          description: "Kev Adams chez les Suri en Éthiopie",
          imageLink: "https://www.avcesar.com/source/actualites/00/00/5A/F6/rendez-vous-en-terre-inconnue-avec-kev-adams_11174833.jpg"
        },
        {
          id: "8",
          description: "Mélissa Theuriau chez les Maasaïs en Tanzanie",
          imageLink: "https://tv5.ca/media/0o3yuvrmsqpshr/842X475/00570132_P0026301.jpg?t=80e627fbec3fc9048871f6dc13cd555a"
        },
        {
          id: "9",
          description: "Malik Bentalha dans les Cevennes en France",
          imageLink: "https://static.ladepeche.fr/content/media/image/large/2018/04/10/2503759-terres-inconnues.jpg"
        },
        {
          id: "10",
          description: "Pierre Palmade chez les Toauregs Ibankalan au Niger",
          imageLink: "http://www.fox-infographie.com/logos/rdvti02.jpg"
        },
        {
          id: "11",
          description: "Thomas Pesquet chez les Kogis en Colombie",
          imageLink: "https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/rendez-vous-en-terre-inconnue-thomas-pesquet-je-pense-souvent-aux-kogis-4616684/94852145-1-fre-FR/Rendez-vous-en-Terre-inconnue-Thomas-Pesquet-Je-pense-souvent-aux-Kogis.jpg"
        },
        {
          id: "12",
          description: "Bruno Solo chez les Cavaliers Mongols",
          imageLink: "http://idata.over-blog.com/0/00/74/35/25/RENDEZVOUSENTERREINCONNUEBRUNOSOLO_148021.jpg"
        },
        {
          id: "13",
          description: "Clovis Cornillac chez les Miao en Chine",
          imageLink: "http://medias.photodeck.com/71215751-f377-41af-a234-021f25861d7c/chineTInco-030_uxga.jpg"
        }
      ],
      screen: 'photos'
    }
    this.removePhoto = this.removePhoto.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  navigate() {
    this.setState({
      screen: 'addPhoto'
    })
  }

  removePhoto(postRemoved) {
    console.log(postRemoved.description);
    this.setState((state) => ({
      posts: state.posts.filter(post => post !== postRemoved)
    }))
  }

  render() {
    return <div>
            {
              this.state.screen === 'photos' && (
                <div>
                  <Title title={'rendez~vous en terre inconnue'}/>
                  <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>

                </div>
              )
            }
            {
              this.state.screen === 'addPhoto' && (
                <div>
                      <Addphoto/>
                </div>
              )
            }
          </div>

  }



}




export default Main
