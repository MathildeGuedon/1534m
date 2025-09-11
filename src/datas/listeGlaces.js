import vanilleBourbon from '../assets/glace_vanille_sauce_caramel_eclats_amandes.jpeg'

export const listeGlaces = [
    {
        name: "Glace vanille de Tahiti, sauce caramel",
        id: "gvb",
        cover: vanilleBourbon,
        categorie: "glace",
        gamme: "classique",
        ingredients: [
            "lait",
            "crème",
            "sucre",
            "oeuf",
            "grains naturels de vanille"
        ],
        volume: 750,
        prix: 6,
        enSoldes: false,
        meilleuresVentes: false,
        enStock: true,
        nouveaute: false
    },
    {
        name: "Glace chocolat noir, sauce chocolat",
        id: "gcltn",
        cover: vanilleBourbon,
        categorie: "glace",
        gamme: "classique",
        ingredients: [
            "lait",
            "crème",
            "sucre",
            "oeuf",
            "poudre de cacao",
            "chocolat noir 70%"
        ],
        volume: 750,
        prix: 6,
        enSoldes: false,
        meilleuresVentes: false,
        enStock: true,
        nouveaute: false
    },
    {
        name: "Glace pistache, éclats de pistaches grillées",
        id: "gptch",
        cover: vanilleBourbon,
        categorie: "glace",
        gamme: "classique",
        ingredients: [
            "lait",
            "crème",
            "sucre",
            "pistache"
        ],
        volume: 750,
        prix: 7,
        enSoldes: false,
        meilleuresVentes: false,
        enStock: false,
        nouveaute: false
    },
    {
        name: "Glace caramel, éclats de caramel et fleur de sel",
        id: "gcfs",
        cover: vanilleBourbon,
        categorie: "glace",
        gamme: "classique",
        ingredients: [
            "lait",
            "crème",
            "sucre",
            "oeuf",
            "caramel",
            "fleur de sel"
        ],
        volume: 750,
        prix: 8,
        enSoldes: true,
        meilleuresVentes: true,
        enStock: true,
        nouveaute: false
    },
    {
        name: "Glace café, copeaux de chocolat noir 70%",
        id: "gcaf",
        cover: vanilleBourbon,
        categorie: "glace",
        gamme: "classique",
        ingredients: [
            "lait",
            "crème",
            "sucre",
            "extrait de café pur Arabica",
            "chocolat noir 70%"
        ],
        volume: 750,
        prix: 6,
        enSoldes: true,
        meilleuresVentes: false,
        enStock: true,
        nouveaute: false
    },
    {
        name: "Glace nougat de Montélimar, brisures de nougat",
        id: "gngm",
        cover: vanilleBourbon,
        categorie: "glace",
        gamme: "classique",
        ingredients: [
            "lait",
            "crème",
            "sucre",
            "oeuf",
            "amande",
            "miel",
            "nougat"
        ],
        volume: 750,
        prix: 9,
        enSoldes: false,
        meilleuresVentes: true,
        enStock: false,
        nouveaute: true
    },
    {
        name: "Glace praline, éclats de praline rose",
        id: "gprl",
        cover: vanilleBourbon,
        categorie: "glace",
        gamme: "saveur locale",
        ingredients: [
            "lait",
            "crème",
            "sucre",
            "oeuf",
            "amande",
            "praline",
            "sirop de glucose",
            "colorant carmin"
        ],
        volume: 750,
        prix: 10,
        enSoldes: false,
        meilleuresVentes: true,
        enStock: true,
        nouveaute: false
    },
    {
        name: "Glace noix de Grenoble, éclats de noix torréfiées",
        id: "gngnb",
        cover: vanilleBourbon,
        categorie: "glace",
        gamme: "saveur locale",
        ingredients: [
            "lait",
            "crème",
            "sucre",
            "oeuf",
            "noix de Grenoble"
        ],
        volume: 750,
        prix: 9,
        enSoldes: false,
        meilleuresVentes: false,
        enStock: true,
        nouveaute: true
    },
    {
        name: "Glace menthe et verveine citronnelle",
        id: "gmch",
        cover: vanilleBourbon,
        categorie: "glace",
        gamme: "aromatique",
        ingredients: [
            "lait",
            "crème",
            "sucre",
            "oeuf",
            "verveine citronnelle fraîche",
            "menthe fraîche"
        ],
        volume: 750,
        prix: 10,
        enSoldes: true,
        meilleuresVentes: false,
        enStock: true,
        nouveaute: false
    },
    {
        name: "Sorbet cassis",
        id: "scss",
        cover: vanilleBourbon,
        categorie: "sorbet",
        gamme: "classique",
        ingredients: [
            "eau",
            "sucre",
            "purée de cassis"
        ],
        volume: 750,
        prix: 7,
        enSoldes: false,
        meilleuresVentes: false,
        enStock: true,
        nouveaute: false
    },
    {
        name: "Sorbet citron vert basilic",
        id: "sctvb",
        cover: vanilleBourbon,
        categorie: "sorbet",
        gamme: "aromatique",
        ingredients: [
            "eau",
            "sucre",
            "purée de citron vert",
            "basilic frais"
        ],
        volume: 750,
        prix: 7,
        enSoldes: false,
        meilleuresVentes: false,
        enStock: false,
        nouveaute: false
    },
    {
        name: "Sorbet myrtille",
        id: "smrt",
        cover: vanilleBourbon,
        categorie: "sorbet",
        gamme: "saveur locale",
        ingredients: [
            "eau",
            "sucre",
            "purée de myrtille",
            "jus de citron"
        ],
        volume: 750,
        prix: 9,
        enSoldes: false,
        meilleuresVentes: false,
        enStock: true,
        nouveaute: true
    },
    {
        name: "Sorbet fraise, coulis de fraise",
        id: "sfrs",
        cover: vanilleBourbon,
        categorie: "sorbet",
        gamme: "classique",
        ingredients: [
            "eau",
            "sucre",
            "fraise",
            "jus de citron",
        ],
        volume: 750,
        prix: 7,
        enSoldes: false,
        meilleuresVentes: false,
        enStock: true,
        nouveaute: false
    },
    {
        name: "Sorbet abricot thym",
        id: "sath",
        cover: vanilleBourbon,
        categorie: "sorbet",
        gamme: "aromatique",
        ingredients: [
            "eau",
            "sucre",
            "purée d'abricot",
            "thym frais"
        ],
        volume: 750,
        prix: 10,
        enSoldes: true,
        meilleuresVentes: true,
        enStock: false,
        nouveaute: true
    },
]

