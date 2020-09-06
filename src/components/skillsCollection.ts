export type SkillArea = {
  category: string
  skills: Skill[]
}
export type Skill = {
  name: string
  link: string
  desc: string
  image: string
}

export const skillsCollection: SkillArea[] = [
  {
    category: "Programming",
    skills: [
      {
        image: "./images/cpp.svg",
        name: "C++",
        link: "https://isocpp.org/",
        desc:
          "Metallic, high level language with every feature desirable, secure and reliable. It's easy to do the right thing but hard to do the wrong. Plus wonderful community.",
      },
      {
        image: "./images/python.svg",
        name: "Python 3",
        link: "https://www.python.org/",
        desc:
          "General purpose scipting language, weakly typed but the goto choice for automation, prototyping language, the laguage I would trust like a leap of faith.",
      },
      {
        image: "./images/js.svg",
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        desc:
          "Language of the web, diffrent than other two but useful if right tools are used. Making dead pages alive since 1995.",
      },
      {
        image: "./images/ts.svg",
        name: "TypeScript",
        link: "https://typescriptlang.org",
        desc:
          "JavaScript but better with type checking and awesome tools to write code fearlessly",
      },
      {
        image: "./images/dart.svg",
        name: "Dart",
        link: "https://dartlang.org",
        desc:
          "Language made for flutter from the ground, program and design in the same language, performant, cross-platform, easy and rich and intuitive syntax, what more do you want",
      },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      {
        image: "./images/react.svg",
        name: "React",
        link: "https://reactjs.org",
        desc:
          "Components, Components, Components making web development simple, micro-lithic",
      },
      {
        image: "./images/flutter.svg",
        name: "Flutter",
        link: "https://flutter.dev",
        desc:
          "Widgets, widgets, widgets, cros-platform application, without losing performance, with Material UI",
      },
      {
        image: "./images/nodejs.svg",
        name: "NodeJS",
        link: "https://nodejs.org",
        desc:
          "JavasScript environment, i.e. run JS without the browser prison. Make a server backend using language you use for frontend Reuse, Repeat",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        image: "./images/git.svg",
        link: "https://git-scm.com",
        name: "git",
        desc:
          "High-performance Distributed source code management system, do wonders with <i>checkpoints</i> and <i>multiplayer</i> in code",
      },
      {
        image: "./images/manjaro.svg",
        name: "Manjaro Linux",
        link: "https://manjaro.org",
        desc:
          "Freedom as in free-speech, latest apps with stability, best package manager IMO, Stable Arch for noobs",
      },
      {
        image: "./images/neovim.svg",
        link: "https://neovim.org",
        name: "NeoVim",
        desc:
          "Modal text-editor, runs on terminal&#10084;, with plethora of plugins, light on resouces, logical editing, makes writing code as much fun as programming. Learning it was a massive powerup for me.",
      },
      {
        image: "./images/inkscape.svg",
        link: "https://inkscape.org",
        name: "Inkscape",
        desc:
          "SVG editor, open source, efficient, fun, easy, logical. Produces stunning images. I use is for graphic designing and batch processing.",
      },
      {
        image: "./images/glade.svg",
        link: "https://glade.gnome.org/",
        name: "Glade",
        desc:
          "WYSIWYG UI builder to use with GTK, ease creation of UI and even non-programmers can enhance the UI on programmers link the code to UI components. Save a lot of hard coding.",
      },
    ],
  },
  {
    category: "Markup",
    skills: [
      {
        image: "./images/HTML5.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        name: "HTML5",
        desc:
          "Markup language powering the web, was made to support porability in an era where computers were as diverse as psuedo random numbers.",
      },
      {
        image: "./images/md.svg",
        link: "https://en.wikipedia.org/wiki/Markdown",
        name: "MarkDown",
        desc:
          'Pun intended, designed to work with plain text to ensure portability, easy syntax. When you want your pages to look good not "fancy". Goto for documentation',
      },
      {
        image: "./images/pug.svg",
        link: "https://pugjs.org",
        name: "pug",
        desc:
          "Pug is an HTML5 preprocessing toolchain that uses css selectors and indentation, It renders html by easing the part of typing it, and thus is fun and I use it instead of HTML whenever possible",
      },
    ],
  },
  {
    category: "Styling",
    skills: [
      {
        image: "./images/css3.svg",
        link: "https://developer.mozilla.org/en/docs/Web/CSS/CSS3",
        name: "CSS3",
        desc:
          "Making web pages beautiful so that they don't look like a book without colors, it gives candy crush with eye candy",
      },
      {
        image: "./images/less.svg",
        link: "http://lesscss.org/",
        name: "less",
        desc:
          "CSS preprocessor was born to ease developers work, providing features like variables, inheritance and logical relations. Renders exact CSS nothing more needed.",
      },
      {
        image: "./images/sass.svg",
        link: "https://sass-lang.com",
        name: "Sass",
        desc:
          "Like less but not my personal favourite, as I learned less earlier",
      },
    ],
  },
]
