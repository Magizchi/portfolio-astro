export const info = {
    baseUrl: "",
    name: "JEAN CASTOR",
    jobDescription: "Developpeur Web",
    about: "",

    mission: '',
    activities: [],
    experience: [
        {
            number: 1,
            company: "CHR CAFFE",
            startDate: "Nov 2015",
            endDate: "Sept 2017",
            post: "Technicien maintenance",
            description: [
                {
                    mission: "Maintenance et installation de machine à café",
                    activity: [
                        "- Mon rôle consistait à assurer le bon fonctionnement des machines à café dans divers établissements tels que les restaurants, les cafés, et les hôtels.",
                        "- Mes principales responsabilités incluaient la maintenance préventive et curative des machines, ce qui impliquait la réparation et le remplacement de pièces défectueuses."
                    ],
                }
            ],
        },
        {
            number: 2,
            company: "BOSSARD BASIS",
            startDate: "Nov 2017",
            endDate: "Jan 2018",
            post: "Automaticien",
            description: [
                {
                    mission: "Migration et mise à jour du programme",
                    activity: [
                        "- Mon rôle principal consistait à assurer une transition efficace et réussie des programmes existants vers des versions actualisées."
                    ],
                }
            ],
        },
        {
            number: 3,
            company: "FARECOT FAYAT",
            startDate: "Mars 2018",
            endDate: "Avril 2018",
            post: "Technicien maintenance",
            description: [
                {
                    mission: "Suivi de qualité, maintenance et mise en service",
                    activity: [
                        "- Je me suis occupé de faire le suivi de qualité et la mise en service d'équipements. Pendant cette période, j'ai été responsable de veiller à la fiabilité et au bon fonctionnement des équipements"
                    ],
                }
            ],
        },
        {
            number: 4,
            company: "EIFFAGE ENERGIE SYSTÈME",
            startDate: "Mai 2018",
            endDate: "Nov 2018",
            post: "Automaticien et Administrateur Réseau",
            description: [
                {
                    mission: "Suivi de qualité, maintenance et mise en service",
                    activity: [
                        "- J'ai participé à la mise en place d'un parc réseau comprenant des switchs, des serveurs et des ordinateurs. Mon rôle a consisté à concevoir et installer l'infrastructure réseau, en assurant la configuration et le déploiement des équipements. J'ai également pris en charge la gestion des serveurs pour garantir leur bon fonctionnement et leur sécurité.",
                        "- J'ai été en charge de la maintenance des automates responsables de la gestion de l'éclairage. Mon travail consistait à effectuer des inspections régulières, des diagnostics approfondis et des interventions de maintenance préventive et curative sur les automates. "
                    ],
                }
            ],
        },
        {
            number: 5,
            company: "LE REACTEUR",
            startDate: "Mars 2019",
            endDate: "",
            post: "Développeur Full-Stack (Reactjs, Nodejs)",
            description: [
                {
                    mission: `Plate-forme e-commerce qui propose un abonnement pour recevoir des produits dans des coffrets chaque mois :`,
                    activity: [
                        "- Création de la page d'inscription avec des composant de Material UI",
                        "- Création d'une base de données client (mongodb, noSQL)",
                        "- Gestion d'envois de mail",
                        "- Implémentation Stripe pour l'abonnement et cartes cadeau",
                        "- Création des routes avec la methode API REST",
                        // "- Tout d'abord, j'ai créé la page d'inscription en utilisant les composants de Material UI pour une interface utilisateur moderne et attrayante. Ensuite, nous avons mis en place une base de données client en utilisant MongoDB, une solution NoSQL, pour assurer une gestion efficace des données. Pour améliorer l'expérience utilisateur, nous avons implémenté une fonctionnalité d'envoi de mails pour les notifications et la communication avec les utilisateurs.",
                        // "- Pour faciliter le processus de paiement, nous avons intégré Stripe, une plateforme de paiement en ligne, pour gérer les abonnements et les cartes cadeaux. Cela permet aux utilisateurs de bénéficier d'une expérience de paiement sécurisée.",
                        // "- une API REST pour le backend de l'application, nous avons suivi une approche méthodique. Tout d'abord, nous avons choisi un langage de programmation approprié pour notre serveur, comme Node.js ou Python avec Flask ou Django. Ensuite, nous avons créé les différentes routes qui permettent à notre application de communiquer avec le serveur."
                    ],
                    technologies: "React, Node.js, Express, Material UI, HTML, CSS, mailgun, stripe",
                },
            ],
        },
        {
            number: 6,
            company: "ALTYOR",
            startDate: "Mai 2019",
            endDate: "Oct 2019",
            post: "Développeur Front-end",
            description: [
                {
                    mission: `Finir le developpement du site`,
                    activity: [
                        "-  Intégration web avec React js (hooks, HTML, CSS)",
                        "-  Travail en équipe (Github)",
                        "-  Gestion de connexion via la LDAP",
                        "-  Gestion de rendez-vous : affichage, ajout, modification et suppression",
                        "-  Création d'un formulaire qui remplit la base de données de Mailchimp et noCRM "
                    ],
                    technologies: "React, Node.js, HTML, CSS",
                },
            ]
        },
        {
            number: 7,
            company: "WEBLAGENCE",
            post: "Développeur Front-end",
            startDate: "Nov 2019",
            endDate: "Dec 2019",
            description: [
                {
                    mission: "Plate-forme qui propose des droits sur des romans pour le monde du cinéma",
                    activity: [
                        "- Migration (développement et Intégration) du site web PHP en React"
                    ],
                    technologies: "React, HTML, CSS",
                },
            ]
        },
        {
            number: 8,
            company: "ZLZ HOLDING",
            post: "Développeur Front-end",
            startDate: "Sept 2020",
            endDate: "Jan 2023",
            description: [
                {
                    mission: "Projet: MediMatrix - Web/Mobile",
                    activity: [
                        "- Plate-forme qui permet d'améliorer la gestion des livraisons des colis",
                        "- Affichage des documents/colis/feuille de routes",
                        "- Affichage des points à livrer sur une carte, avec la position du livreur",
                        "- Gestion du chargement/livraison depuis le PDA",
                    ],
                    technologies: "React, HTML, CSS, TailwindCss, Python(Flask), OVH",
                },
                {
                    mission: "Projet: Parashop - Web/Mobile",
                    activity: [
                        "Plate-forme qui permet d'améliorer la gestion de stock",
                        "- Gestion de stock (inventaires; réception; entrée/sortie stock)",
                        "- Scan des produits depuis le PDA(appli mobile)",
                        "- Utilisation de AntDesgin",
                        "- Gestion d'impression depuis le PDA et le BO",
                    ],
                    technologies: "React, HTML, CSS, TailwindCss, Python(Flask), OVH, AntDesgin",
                },
            ]

        },
        {
            number: 9,
            company: "WEBNET",
            post: "Developpeur Web",
            startDate: "Avr 2023",
            endDate: "poste actuel",
            description: [
                {
                    mission: "Mission 1",
                    activity: [
                        "- Finir la création/téléchargement/génération des pdf",
                        "- Corriger les bug (affichage, fonctionnelle)",
                        "- Créer les pages d'affichage des données en utilisant les composant existant"
                    ],
                    technologies: "Vuejs(Nuxtjs), Nestjs, GraphQl, typescript, POSTGRESQL, git"
                },
                {
                    mission: "Mission 2",
                    activity: [
                        "- Implementation des POSTHOG",
                        "- Mise place des clés de traduction (weblate)"
                    ],
                    technologies: "Angular, weblate, posthog, i18n, typescript, git"
                }
            ]
        }
    ],

    education: [
        {
            name: "Pakistan Institute of Professional Science & Technology (PIPS-TECH)",
            location: "Karāchi, Sindh, Pakistan",
            startDate: "2019",
            endDate: "2022",
            description: [
                "Diploma of Associate Engineering,  Computer Information Technology (CIT)",
            ],
        },
        {
            name: "Govt. Degree Boys College Buffer Zone",
            location: "Karāchi, Sindh, Pakistan",
            startDate: "2018",
            endDate: "2020",
            description: ["Intermediate, Pre-Engineering"],
        },
        {
            name: "Ghazi Foundation Schools & Colleges",
            location: "Karāchi, Sindh, Pakistan",
            startDate: "2016",
            endDate: "2018",
            description: ["Matriculation,  Computer Science"],
        },
    ],

    socialMedia: {
        facebook: "https://www.facebook.com/profile.php?id=100022899849583",
        twitter: "https://twitter.com/Uzzii_21",
        github: "https://github.com/uzzii-21",
        email: "uzairahmed@74372gmail.com",
        linkedin: "https://www.linkedin.com/in/uzzii21/",
    },

    projects: [
        {
            title: "Astro Portfolio",
            isFeatured: true,
            thumbnail: "/assets/images/astro-portfolio.png",
            githubUrl: "https://github.com/uzzii-21/astro-portfolio",
            liveUrl: "https://astro-portfolio-uzair.vercel.app/",
        },
    ],
};
