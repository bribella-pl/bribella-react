const config = {
  backend: {
    name: "github",
    repo: "bribella-pl/bribella-react",
    branch: "main",
    base_url: "https://auth-provider-bribella-pls-projects.vercel.app",
    auth_endpoint: "/api/oauth",
  },
  media_folder: "public/images",
  public_folder: "/images",
  collections: [
    {
      name: "entries_quotesSection",
      label: "Cytaty",
      folder: "content/quotes",
      create: true,
      slug: "{{fields.author}}-{{year}}-{{month}}-{{day}}",
      fields: [
        {
          label: "Autor",
          name: "author",
          widget: "string",
        },
        {
          label: "Cytat",
          name: "quote",
          widget: "text",
        },
      ],
    },
    {
      name: "entries_homeSection",
      label: "StronaGlowna",
      folder: "content/home",
      create: false,
      slug: "{{slug}}",
      fields: [
        { label: "GlowneZdjecie", name: "mainImageUrl", widget: "image" },
        { label: "Sekcja1Tytul", name: "section1Title", widget: "string" },
        { label: "Sekcja1Tresc", name: "section1Text", widget: "string" },
        { label: "DrugieZdjecie", name: "secondImageUrl", widget: "image" },
        { label: "Sekcja2Tytul", name: "section2Title", widget: "string" },
        { label: "Sekcja2Tresc", name: "section2Text", widget: "string" },
        { label: "TrzecieZdjecie", name: "thirdImageUrl", widget: "image" },
      ],
    },
    {
      name: "entries_newsSection",
      label: "Aktualnosci",
      folder: "content/news/simple",
      create: false,
      slug: "{{slug}}",
      fields: [
        { label: "TytulSekcji", name: "title", widget: "string" },
        {
          label: "IloscWpisowNaStronie",
          name: "itemsPerPage",
          widget: "string",
        },
        { label: "TrescSekcji", name: "content", widget: "markdown" },
        { label: "GlowneZdjecie", name: "mainImageUrl", widget: "image" },
      ],
    },
    {
      name: "entries_newsPosts",
      label: "AktualnosciWpisy",
      folder: "content/news",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{fields.title}}",
      fields: [
        { label: "DataWpisu", name: "date", widget: "datetime" },
        { label: "TytulWpisu", name: "title", widget: "string" },
        { label: "TrescWpisu", name: "content", widget: "markdown" },
        {
          name: "images",
          label: "Zdjecia",
          widget: "list",
          allow_add: true,
          field: {
            label: "Obrazek",
            name: "imageUrl",
            widget: "image",
          },
        },
      ],
    },
    {
      name: "section_studsSection",
      label: "Kocury",
      files: [
        {
          label: "OpisKocurow",
          name: "file_studsPage",
          file: "content/cats/studs.md",
          fields: [
            { label: "Tytul", name: "title", widget: "string" },
            { label: "Tresc", name: "content", widget: "markdown" },
            { label: "ZdjecieGlowne", name: "mainImageUrl", widget: "image" },
          ],
        },
      ],
    },
    {
      name: "entries_studsPosts",
      label: "KocuryWpisy",
      folder: "content/cats/studs",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{fields.name}}",
      fields: [
        { label: "DataUr", name: "date", widget: "datetime" },
        { label: "Imie", name: "name", widget: "string" },
        { label: "Opis", name: "content", widget: "markdown" },
        {
          name: "images",
          label: "Zdjecia",
          widget: "list",
          allow_add: true,
          field: {
            label: "Obrazek",
            name: "imageUrl",
            widget: "image",
          },
        },
      ],
    },
    {
      name: "section_queensSection",
      label: "Kotki",
      files: [
        {
          label: "OpisKotek",
          name: "file_queensPage",
          file: "content/cats/queens.md",
          fields: [
            { label: "Tytul", name: "title", widget: "string" },
            { label: "Tresc", name: "content", widget: "markdown" },
            { label: "ZdjecieGlowne", name: "mainImageUrl", widget: "image" },
          ],
        },
      ],
    },
    {
      name: "entries_queensPosts",
      label: "KotkiWpisy",
      folder: "content/cats/queens",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{fields.name}}",
      fields: [
        { label: "DataUr", name: "date", widget: "datetime" },
        { label: "Imie", name: "name", widget: "string" },
        { label: "Opis", name: "content", widget: "markdown" },
        {
          name: "images",
          label: "Zdjecia",
          widget: "list",
          allow_add: true,
          field: {
            label: "Obrazek",
            name: "imageUrl",
            widget: "image",
          },
        },
      ],
    },
    {
      name: "section_kittensSection",
      label: "Kocieta",
      files: [
        {
          label: "OpisKociat",
          name: "file_kittensPage",
          file: "content/cats/kittens.md",
          fields: [
            { label: "Tytul", name: "title", widget: "string" },
            { label: "ZdjecieGlowne", name: "mainImageUrl", widget: "image" },
          ],
        },
      ],
    },
    {
      name: "entries_kittensPosts",
      label: "KocietaWpisy",
      folder: "content/cats/kittens",
      create: true,
      slug: "{{year}}-{{month}}-{{day}}-{{fields.name}}",
      fields: [
        { label: "DataUr", name: "date", widget: "datetime" },
        { label: "Imie", name: "name", widget: "string" },
        { label: "Opis", name: "content", widget: "markdown" },
        { label: "Miot", name: "litter", widget: "string" },
        {
          name: "images",
          label: "Zdjecia",
          widget: "list",
          allow_add: true,
          field: {
            label: "Obrazek",
            name: "imageUrl",
            widget: "image",
          },
        },
      ],
    },
    {
      name: "section_aboutSection",
      label: "O nas",
      files: [
        {
          label: "StronaONas",
          name: "file_aboutPage",
          file: "content/about/about.md",
          fields: [
            { label: "Tytul", name: "title", widget: "string" },
            { label: "Tresc", name: "content", widget: "markdown" },
            { label: "ZdjecieGlowne", name: "mainImageUrl", widget: "image" },
          ],
        },
      ],
    },
    {
      name: "section_contactSection",
      label: "Kontakt",
      files: [
        {
          label: "StronaKontakt",
          name: "file_contactPage",
          file: "content/contact/contact.md",
          fields: [
            { label: "Tytul", name: "title", widget: "string" },
            { label: "Tresc", name: "content", widget: "markdown" },
            { label: "ZdjecieGlowne", name: "mainImageUrl", widget: "image" },
          ],
        },
      ],
    },
    {
      name: "section_beforeBuySection",
      label: "Zanim kupisz",
      files: [
        {
          label: "StronaZanimKupisz",
          name: "file_beforeBuyPage",
          file: "content/before-you-buy/before-you-buy.md",
          fields: [
            { label: "Tytul", name: "title", widget: "string" },
            { label: "Tresc", name: "content", widget: "markdown" },
            { label: "ZdjecieGlowne", name: "mainImageUrl", widget: "image" },
          ],
        },
      ],
    },
    {
      name: "section_notFoundSection",
      label: "404 Strona",
      files: [
        {
          label: "StronaNieZnaleziona",
          name: "file_notFoundPage",
          file: "content/not-found/not-found.md",
          fields: [
            { label: "Tytul", name: "title", widget: "string" },
            { label: "Tresc", name: "content", widget: "markdown" },
            { label: "ZdjecieGlowne", name: "mainImageUrl", widget: "image" },
          ],
        },
      ],
    },
  ],
};
