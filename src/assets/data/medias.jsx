import sitePortfolio from "../img/SitePortfolio.png"
import sitePetitsPlats from "../img/SitePetitsPlats.png"
import siteFisheye from "../img/SiteFisheye.png"
import siteSportSee from "../img/SiteSportSee.png"
import siteDataTable from "../img/SiteDataTable.png"
import siteOhMyFood from "../img/SiteOhMyFood.png"

import tablette1 from "../img/CutHair.png"
import tablette2 from "../img/Holga.png"

import blender1 from "../img/Bottaro.png"
import blender2 from "../img/Donut.png"

import vectorialThumbnail from "../img/VectorialThumbnail.png"
import vectorial1 from "../img/Sui.png"
import vectorial2 from "../img/Sloth.jpg"
import vectorial3 from "../img/TeteDessin.png"
import vectorial4 from "../img/Reinald.png"
import vectorial5 from "../img/Chibi.png"

import pixelArtThumbnail from "../img/PixelArtThumbnail.png"
import pixelArt1 from "../img/Race.png"
import pixelArt2 from "../img/Dizzy.png"
import pixelArt3 from "../img/Artificial.png"

const medias = [
  {
    type: "Sites",
    medias: [
      {
        title: "Portfolio",
        description: "Mon site portfolio en React",
        img: sitePortfolio,
        link: "https://github.com/DamienBELGHIT/portfolio_damien_belghit",
      },
      {
        title: "Les Petits Plats",
        description: "Site de recherche de recettes en JS pur",
        img: sitePetitsPlats,
        link: "https://damienbelghit.github.io/LesPetitsPlats-Projet5/",
      },
      {
        title: "SportSee",
        description: "Tableau analytics sportif en React + Recharts",
        img: siteSportSee,
        link: "https://github.com/DamienBELGHIT/SportSee",
      },
      {
        title: "Fisheye",
        description: "Site de photographes axé accessibilité",
        img: siteFisheye,
        link: "https://github.com/DamienBELGHIT/Fisheye",
      },
      {
        title: "Kasa",
        description: "Site AirBnB en React",
        img: "./src/assets/img/SiteKasa.PNG",
        link: "https://damienbelghit.github.io/kasa",
      },
      {
        title: "DataTable",
        description:
          "Librairie React permettant d'insérer des tableaux de données intéractifs",
        img: siteDataTable,
        link: "https://www.npmjs.com/package/react-interactive-datatable?activeTab=explore",
      },
      {
        title: "ohmyfood",
        description: "Site de menu de restauration en Sass",
        img: siteOhMyFood,
        link: "https://damienbelghit.github.io/ohmyfood/",
      },
    ],
  },
  {
    type: "Jeux",
    medias: [
      {
        title: "Hex & Tricks",
        description: "Jeu de cartes et d'aventure",
        img: "https://cdn.akamai.steamstatic.com/steam/apps/2098550/capsule_616x353.jpg?t=1675762142",
        link: "https://store.steampowered.com/app/2098550/Hex_And_Tricks/",
      },
      {
        title: "Wild Fire",
        description: "Jeu réalisé en 3 jours pour la ScoreSpace Jam #22",
        img: "https://img.itch.zone/aW1nLzEwMzU0NjEyLnBuZw==/original/G2o3hQ.png",
        link: "https://flatwhitecanvas.itch.io/wild-fire",
      },
      {
        title: "Pro GM Move",
        description: "Jeu réalisé en 2 jours pour la GMTK Jam 2022",
        img: "https://img.itch.zone/aW1nLzk1NDA5NjkuZ2lm/315x250%23cm/Tg%2B7J9.gif",
        link: "https://poishiche.itch.io/pro-gm-move",
      },
      {
        title: "Catch Up",
        description: "Jeu réalisé en 3 jours pour la Mini Jam #86",
        img: "https://img.itch.zone/aW1nLzY2OTc2NjAuanBn/315x250%23c/yZ9JXV.jpg",
        link: "https://poishiche.itch.io/catch-up",
      },
      {
        title: "Match Maker",
        description: "Jeu réalisé en 2 jours pour la GMTK Jam 2021",
        img: "https://img.itch.zone/aW1nLzYyMjI1MTEuanBn/315x250%23c/Q%2Fa6FD.jpg",
        link: "https://poishiche.itch.io/match-maker",
      },
      {
        title: "Sheep Bullying",
        description: "Jeu réalisé en 3 heures pour la Trijam #152",
        img: "https://img.itch.zone/aW1nLzc4Nzc1NzIucG5n/315x250%23c/RIt8Xc.png",
        link: "https://poishiche.itch.io/sheep-bullying",
      },
    ],
  },
  {
    type: "Illustrations",
    medias: [
      {
        title: "Vectoriel",
        img: vectorialThumbnail,
        list: [vectorial1, vectorial2, vectorial3, vectorial4, vectorial5],
      },
      {
        title: "Tablette",
        img: tablette1,
        list: [tablette1, tablette2],
      },
      {
        title: "3D",
        img: blender1,
        list: [blender1, blender2],
      },
      {
        title: "Pixel Art",
        img: pixelArtThumbnail,
        list: [pixelArt1, pixelArt2, pixelArt3],
      },
    ],
  },
]
export default medias
