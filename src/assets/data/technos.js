const technos = [
  {
    name: "Front End",
    type: "FrontEnd",
    technos: [
      {
        name: "HTML5",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/HTML5_logo_black.svg/512px-HTML5_logo_black.svg.png?20110118165859",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "JS",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "ReactJS",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207",
        link: "https://react.dev/",
      },
      {
        name: "Redux",
        img: "https://cdn.worldvectorlogo.com/logos/redux.svg",
        link: "https://redux.js.org/",
      },
      {
        name: "Vite",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png?20220412224743",
        link: "https://vitejs.dev/guide/",
      },
      {
        name: "VueJS",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558",
        link: "https://vuejs.org/",
      },
      {
        name: "Angular",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
        link: "https://angular.io/",
      },
      {
        name: "Sass",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/512px-Sass_Logo_Color.svg.png?20150315202757",
        link: "https://sass-lang.com/",
      },
      {
        name: "Bootstrap",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024",
        link: "https://getbootstrap.com/",
      },
    ],
  },
  {
    name: "Back End",
    type: "BackEnd",
    technos: [
      {
        name: "PHP",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/711px-PHP-logo.svg.png?20180502235434",
        link: "https://www.php.net/",
      },
      {
        name: "Java",
        img: "https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/322px-Java_Logo.svg.png?20061227215918",
        link: "https://www.java.com/fr/",
      },
      {
        name: "Python",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png?20220821155029",
        link: "https://www.python.org/",
      },
      {
        name: "C++",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png?20170928190710",
        link: "https://en.wikipedia.org/wiki/C%2B%2B",
      },
      {
        name: "C#",
        img: "https://cdn.worldvectorlogo.com/logos/c--4.svg",
        link: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)",
      },
      {
        name: "MySQL",
        img: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
        link: "https://www.mysql.com/",
      },
    ],
  },
  {
    name: "Design",
    type: "Design",
    technos: [
      {
        name: "Figma",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/400px-Figma-logo.svg.png?20190122211436",
        link: "https://www.figma.com/files/recent?fuid=1168920121935997430",
      },
      {
        name: "Gimp",
        img: "https://logos-marques.com/wp-content/uploads/2021/03/GIMP-Logo-500x283.png",
        link: "https://www.gimp.org/",
      },
      {
        name: "Adobe Illustrator",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/640px-Adobe_Illustrator_CC_icon.svg.png",
        link: "https://www.adobe.com/products/illustrator.html",
      },
      {
        name: "Blender",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/1280px-Blender_logo_no_text.svg.png",
        link: "https://www.blender.org/",
      },
      {
        name: "Aseprite",
        img: "https://upload.wikimedia.org/wikipedia/en/b/be/Aseprite_logo_128.png",
        link: "https://www.aseprite.org/",
      },
      {
        name: "Sony Vegas Pro",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Vegas_Pro_19.svg/500px-Vegas_Pro_19.svg.png?20210828125751",
        link: "https://www.vegascreativesoftware.com/us/vegas-pro/",
      },
      {
        name: "Audacity",
        img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Audacity.png?20120527164337",
        link: "https://www.audacityteam.org/",
      },
    ],
  },
  {
    name: "Autres",
    type: "Autres",
    technos: [
      {
        name: "Construct",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Construct_3_Logo.svg/600px-Construct_3_Logo.svg.png?20190811071800",
        link: "https://www.construct.net/en",
      },
      {
        name: "Unity",
        img: "https://seeklogo.com/images/U/unity-logo-988A22E703-seeklogo.com.png",
        link: "https://unity.com/fr",
        reverseColor: true,
      },
      {
        name: "GitHub",
        img: "https://img.icons8.com/?size=512&id=12599&format=png",
        link: "https://github.com/DamienBELGHIT/",
        reverseColor: true,
      },
    ],
  },
]
export default technos
