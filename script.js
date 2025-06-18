//Departamentos con su municipios
// Horas de sol por departamento
const data = [
    {
        "departamento": "Amazonas",
        "horasSol": 4.25,
        "municipios": [
           "El Encanto",
           "La Chorrera",
           "La Pedrera",
           "La Victoria",
           "Leticia",
           "Puerto Alegría",
           "Puerto Arica",
           "Puerto Nariño",
           "Puerto Santander",
           "Tarapacá"
        ]
    },
    {
        "departamento": "Antioquia",
        "horasSol": 5.5,
        "municipios": [
            "Abejorral",
    "Abriaquí",
    "Alejandría",
    "Amagá",
    "Amalfi",
    "Andes",
    "Angelópolis",
    "Angostura",
    "Anorí",
    "Anza",
    "Apartadó",
    "Arboletes",
    "Argelia",
    "Armenia",
    "Barbosa",
    "Bello",
    "Belmira",
    "Betania",
    "Betulia",
    "Briceño",
    "Buriticá",
    "Cáceres",
    "Caicedo",
    "Caldas",
    "Campamento",
    "Cañasgordas",
    "Caracolí",
    "Caramanta",
    "Carepa",
    "Carolina",
    "Caucasia",
    "Chigorodó",
    "Cisneros",
    "Ciudad Bolívar",
    "Cocorná",
    "Concepción",
    "Concordia",
    "Copacabana",
    "Dabeiba",
    "Don Matías",
    "Ebéjico",
    "El Bagre",
    "El Carmen de Viboral",
    "El Santuario",
    "Entrerrios",
    "Envigado",
    "Fredonia",
    "Giraldo",
    "Girardota",
    "Gómez Plata",
    "Guadalupe",
    "Guarne",
    "Guatapé",
    "Heliconia",
    "Hispania",
    "Itagui",
    "Ituango",
    "Jericó",
    "La Ceja",
    "La Estrella",
    "La Pintada",
    "La Unión",
    "Liborina",
    "Maceo",
    "Marinilla",
    "Medellín",
    "Montebello",
    "Murindó",
    "Mutatá",
    "Nariño",
    "Necoclí",
    "Nechí",
    "Olaya",
    "Peñol",
    "Peque",
    "Pueblorrico",
    "Puerto Berrío",
    "Puerto Nare",
    "Puerto Triunfo",
    "Remedios",
    "Retiro",
    "Rionegro",
    "Sabanalarga",
    "Sabaneta",
    "Salgar",
    "San Andrés de Cuerquía",
    "San Carlos",
    "San Francisco",
    "San Jerónimo",
    "San José de La Montaña",
    "San Juan de Urabá",
    "San Luis",
    "San Pedro",
    "San Pedro de Uraba",
    "San Rafael",
    "San Roque",
    "San Vicente",
    "Santa Bárbara",
    "Santa Rosa de Osos",
    "Santafé de Antioquia",
    "Santo Domingo",
    "Segovia",
    "Sopetrán",
    "Támesis",
    "Tarazá",
    "Tarso",
    "Titiribí",
    "Toledo",
    "Turbo",
    "Uramita",
    "Urrao",
    "Valdivia",
    "Valparaíso",
    "Vegachí",
    "Venecia",
    "Vigía del Fuerte",
    "Yalí",
    "Yarumal",
    "Yolombó",
    "Yondó",
    "Zaragoza"
        ]
    },
     {
        "departamento": "Arauca",
        "horasSol": 5.3,
        "municipios": [
     "Arauca",
    "Arauquita",
    "Cravo Norte",
    "Fortul",
    "Puerto Rondón",
    "Saravena",
    "Tame"
        ]
    },
     {
        "departamento": "Atlántico",
        "horasSol": 8,
        "municipios": [
    "Baranoa",
    "Barranquilla",
    "Campo de La Cruz",
    "Candelaria",
    "Galapa",
    "Juan de Acosta",
    "Luruaco",
    "Malambo",
    "Manatí",
    "Palmar de Varela",
    "Piojó",
    "Polonuevo",
    "Sabanagrande",
    "Sabanalarga",
    "Santa Lucía",
    "Santo Tomás",
    "Soledad",
    "Suan",
    "Tubará",
    "Usiacurí"
        ]
    },
    {
        "departamento": "Bolívar",
        "horasSol": 8,
        "municipios": [
           "Achí",
    "Altos del Rosario",
    "Arenal",
    "Arjona",
    "Arroyohondo",
    "Barranco de Loba",
    "Calamar",
    "Cantagallo",
    "Cartagena de Indias",
    "Cicuco",
    "Clemencia",
    "Córdoba",
    "El Carmen de Bolívar",
    "El Guamo",
    "El Peñón",
    "Hatillo de Loba",
    "Magangué",
    "Mahates",
    "Margarita",
    "María La Baja",
    "Montecristo",
    "Morales",
    "Norosí",
    "Pinillos",
    "Regidor",
    "Río Viejo",
    "San Cristóbal",
    "San Estanislao",
    "San Fernando",
    "San Jacinto",
    "San Jacinto del Cauca",
    "San Juan Nepomuceno",
    "San Martín de Loba",
    "San Pablo",
    "Santa Catalina",
    "Santa Cruz de Mompox",
    "Santa Rosa",
    "Santa Rosa del Sur",
    "Simití",
    "Soplaviento",
    "Talaigua Nuevo",
    "Tiquisio",
    "Turbaco",
    "Turbaná",
    "Villanueva",
    "Zambrano"
        ]
    },
    {
        "departamento": "Boyacá",
        "horasSol": 5.5,
        "municipios": [
    "Almeida",
    "Aquitania",
    "Arcabuco",
    "Belén",
    "Berbeo",
    "Betéitiva",
    "Boavita",
    "Boyacá",
    "Briceño",
    "Buenavista",
    "Busbanzá",
    "Caldas",
    "Campohermoso",
    "Cerinza",
    "Chinavita",
    "Chiquinquirá",
    "Chiscas",
    "Chita",
    "Chitaraque",
    "Chivatá",
    "Chivor",
    "Ciénega",
    "Cómbita",
    "Coper",
    "Corrales",
    "Covarachía",
    "Cubará",
    "Cucaita",
    "Cuítiva",
    "Chíquiza",
    "Chivor",
    "Duitama",
    "El Cocuy",
    "El Espino",
    "Firavitoba",
    "Floresta",
    "Gachantivá",
    "Gameza",
    "Garagoa",
    "Guacamayas",
    "Guateque",
    "Guayatá",
    "Güicán",
    "Iza",
    "Jenesano",
    "Jericó",
    "Labranzagrande",
    "La Capilla",
    "La Victoria",
    "Macanal",
    "Maripí",
    "Miraflores",
    "Mongua",
    "Monguí",
    "Moniquirá",
    "Muzo",
    "Nobsa",
    "Nuevo Colón",
    "Oicatá",
    "Otanche",
    "Pachavita",
    "Páez",
    "Paipa",
    "Pajarito",
    "Panqueba",
    "Pauna",
    "Paya",
    "Pesca",
    "Pisba",
    "Puerto Boyacá",
    "Quípama",
    "Ramiriquí",
    "Ráquira",
    "Rondón",
    "Saboyá",
    "Sáchica",
    "Samacá",
    "San Eduardo",
    "San Mateo",
    "Santana",
    "Santa María",
    "Santa Sofía",
    "Sativanorte",
    "Sativasur",
    "Siachoque",
    "Soatá",
    "Socotá",
    "Socha",
    "Sogamoso",
    "Somondoco",
    "Sora",
    "Sotaquirá",
    "Soracá",
    "Susacón",
    "Sutamarchán",
    "Sutatenza",
    "Tasco",
    "Tenza",
    "Tibaná",
    "Tinjacá",
    "Tipacoque",
    "Toca",
    "Tópaga",
    "Tota",
    "Turmequé",
    "Tutazá",
    "Umbita",
    "Ventaquemada",
    "Viracachá",
    "Zetaquira",
    "Tununguá",
    "Motavita",
    "Ciénega",
    "Tunja"
        ]
    },
     {
        "departamento": "Caldas",
        "horasSol": 4.3,
        "municipios": [
    "Aguadas",
    "Anserma",
    "Aranzazu",
    "Belalcázar",
    "Chinchiná",
    "Filadelfia",
    "La Dorada",
    "La Merced",
    "Manizales",
    "Manzanares",
    "Marmato",
    "Marquetalia",
    "Marulanda",
    "Neira",
    "Norcasia",
    "Pácora",
    "Palestina",
    "Pensilvania",
    "Riosucio",
    "Risaralda",
    "Salamina",
    "Samaná",
    "San José",
    "Supía",
    "Victoria",
    "Villamaría",
    "Viterbo"
        ]
    },
    {
        "departamento": "Caquetá",
        "horasSol": 4.25,
        "municipios": [
    "Albania",
    "Belén de los Andaquíes",
    "Cartagena del Chairá",
    "Curillo",
    "El Doncello",
    "El Paujil",
    "Florencia",
    "La Montañita",
    "Milán",
    "Morelia",
    "Puerto Rico",
    "San José del Fragua",
    "San Vicente del Caguán",
    "Solano",
    "Solita",
    "Valparaíso"
        ]
    },
    {
        "departamento": "Casanare",
        "horasSol": 5.5,
        "municipios": [
    "Aguazul",
    "Chámeza",
    "Hato Corozal",
    "La Salina",
    "Maní",
    "Monterrey",
    "Nunchía",
    "Orocué",
    "Paz de Ariporo",
    "Pore",
    "Recetor",
    "Sabanalarga",
    "Sácama",
    "San Luis de Palenque",
    "Támara",
    "Tauramena",
    "Trinidad",
    "Villanueva",
    "Yopal"
        ]
    },
     {
        "departamento": "Cauca",
        "horasSol": 4.5,
        "municipios": [
            "Almaguer",
    "Argelia",
    "Balboa",
    "Bolívar",
    "Buenos Aires",
    "Cajibío",
    "Caldono",
    "Caloto",
    "Corinto",
    "El Tambo",
    "Florencia",
    "Guachené",
    "Guapi",
    "Inzá",
    "Jambaló",
    "La Sierra",
    "La Vega",
    "López",
    "Mercaderes",
    "Miranda",
    "Morales",
    "Padilla",
    "Patía",
    "Piamonte",
    "Piendamó",
    "Popayán",
    "Puerto Tejada",
    "Puracé",
    "Rosas",
    "Santa Rosa",
    "Santander de Quilichao",
    "San Sebastián",
    "Silvia",
    "Sotara",
    "Suárez",
    "Sucre",
    "Timbío",
    "Timbiquí",
    "Timbío",
    "Timbiquí",
    "Toribio",
    "Totoró",
    "Villa Rica"
        ]
    },
    {
        "departamento": "Cesar",
        "horasSol": 8,
        "municipios": [
    "Agustín Codazzi",
    "Aguachica",
    "Astrea",
    "Becerril",
    "Bosconia",
    "Chimichagua",
    "Chiriguaná",
    "Curumaní",
    "El Copey",
    "El Paso",
    "Gamarra",
    "González",
    "La Gloria",
    "La Jagua de Ibirico",
    "La Paz",
    "Manaure",
    "Pailitas",
    "Pelaya",
    "Pueblo Bello",
    "Río de Oro",
    "San Alberto",
    "San Diego",
    "San Martín",
    "Tamalameque",
    "Valledupar"
        ]
    },
    {
        "departamento": "Chocó",
        "horasSol": 3.5,
        "municipios": [
            "Acandí",
    "Alto Baudó",
    "Atrato",
    "Bagadó",
    "Bahía Solano",
    "Bajo Baudó",
    "Belén de Bajirá",
    "Bojayá",
    "Cértegui",
    "Condoto",
    "El Cantón del San Pablo",
    "El Carmen de Atrato",
    "El Litoral del San Juan",
    "Istmina",
    "Juradó",
    "Lloró",
    "Medio Atrato",
    "Medio Baudó",
    "Medio San Juan",
    "Nóvita",
    "Nuquí",
    "Quibdó",
    "Río Iro",
    "Río Quito",
    "Riosucio",
    "San José del Palmar",
    "Sipí",
    "Unguía"
        ]
    },
    {
        "departamento": "Córdoba",
        "horasSol": 5.1,
        "municipios": [
    "Ayapel",
    "Buenavista",
    "Canalete",
    "Cereté",
    "Chimá",
    "Chinú",
    "Ciénaga de Oro",
    "Cotorra",
    "Los Córdobas",
    "Lorica",
    "Momil",
    "Moñitos",
    "Montería",
    "Planeta Rica",
    "Pueblo Nuevo",
    "Puerto Escondido",
    "Purísima",
    "Sahagún",
    "San Andrés Sotavento",
    "San Antero",
    "San Bernardo del Viento",
    "San Carlos",
    "San José de Uré",
    "San Pelayo",
    "Tierralta",
    "Tuchín",
    "Valencia"
        ]
    },
    {
        "departamento": "Cundinamarca",
        "horasSol": 5.5,
        "municipios": [
            "Agua de Dios",
    "Anapoima",
    "Apulo",
    "Arbeláez",
    "Beltrán",
    "Bituima",
    "Bojacá",
    "Cabrera",
    "Cachipay",
    "Cajicá",
    "Carmen de Carupa",
    "Caparrapí",
    "Caqueza",
    "Chaguaní",
    "Chipaque",
    "Choachí",
    "Chocontá",
    "Cogua",
    "Cota",
    "Cucunubá",
    "El Colegio",
    "El Rosal",
    "Fomeque",
    "Fosca",
    "Funza",
    "Fúquene",
    "Gachala",
    "Gachancipá",
    "Gachetá",
    "Girardot",
    "Granada",
    "Guachetá",
    "Guaduas",
    "Guasca",
    "Guataquí",
    "Guatavita",
    "Guayabetal",
    "Guayabal de Siquima",
    "Gutiérrez",
    "Jerusalén",
    "Junín",
    "La Calera",
    "La Mesa",
    "La Palma",
    "La Peña",
    "La Vega",
    "Lenguazaque",
    "Macheta",
    "Madrid",
    "Manta",
    "Medina",
    "Mosquera",
    "Nariño",
    "Nemocón",
    "Nilo",
    "Nimaima",
    "Nocaima",
    "Pacho",
    "Paime",
    "Pandi",
    "Paratebueno",
    "Pasca",
    "Puerto Salgar",
    "Pulí",
    "Quebradanegra",
    "Quetame",
    "Quipile",
    "Ricaurte",
    "San Antonio del Tequendama",
    "San Bernardo",
    "San Cayetano",
    "San Francisco",
    "San Juan de Río Seco",
    "Sesquilé",
    "Sibaté",
    "Silvania",
    "Simijaca",
    "Soacha",
    "Subachoque",
    "Suesca",
    "Supatá",
    "Susa",
    "Sutatausa",
    "Tabio",
    "Tausa",
    "Tena",
    "Tenjo",
    "Tibacuy",
    "Tibirita",
    "Tocaima",
    "Tocancipá",
    "Topaipí",
    "Ubalá",
    "Ubaque",
    "Une",
    "Útica",
    "Venecia",
    "Vergara",
    "Vianí",
    "Villagómez",
    "Villapinzón",
    "Villeta",
    "Viotá",
    "Villa de San Diego de Ubate",
    "Zipacón"
        ]
    },
    {
        "departamento": "Guainía",
        "horasSol": 4.25,
        "municipios": [
            "Barranco Minas",
    "Cacahual",
    "Inírida",
    "La Guadalupe",
    "Mapiripana",
    "Morichal",
    "Pana Pana",
    "Puerto Colombia",
    "San Felipe"
        ]
    },
    {
        "departamento": "Guaviare",
        "horasSol": 4.25,
        "municipios": [
           "Calamar",
    "El Retorno",
    "Miraflores",
    "San José del Guaviare"
        ]
    },
     {
        "departamento": "Huila",
        "horasSol": 5.5,
        "municipios": [
            "Acevedo",
    "Agrado",
    "Aipe",
    "Algeciras",
    "Altamira",
    "Baraya",
    "Campoalegre",
    "Colombia",
    "Elías",
    "Garzón",
    "Gigante",
    "Guadalupe",
    "Hobo",
    "Iquira",
    "Isnos",
    "La Argentina",
    "La Plata",
    "Nátaga",
    "Neiva",
    "Oporapa",
    "Paicol",
    "Palermo",
    "Palestina",
    "Pital",
    "Pitalito",
    "Rivera",
    "Saladoblanco",
    "San Agustín",
    "Santa María",
    "Suaza",
    "Tarqui",
    "Tello",
    "Teruel",
    "Tesalia",
    "Timaná",
    "Tocado",
    "Villavieja",
    "Yaguará"
        ]
    },
    {
        "departamento": "La Guajira",
        "horasSol": 8,
        "municipios": [
            "Albania",
    "Barrancas",
    "Dibula",
    "Distracción",
    "El Molino",
    "Fonseca",
    "Hatonuevo",
    "La Jagua del Pilar",
    "Maicao",
    "Manaure",
    "Riohacha",
    "San Juan del Cesar",
    "Uribia",
    "Urumita",
    "Villanueva"
        ]
    },
    {
        "departamento": "Magdalena",
        "horasSol": 8,
        "municipios": [
            "Algarrobo",
    "Aracataca",
    "Ariguaní",
    "Cerro San Antonio",
    "Chivolo",
    "Concordia",
    "El Banco",
    "El Piñon",
    "El Retén",
    "Fundación",
    "Guamal",
    "Nueva Granada",
    "Pedraza",
    "Pijiño del Carmen",
    "Pivijay",
    "Plato",
    "Remolino",
    "Sabanas de San Angel",
    "Salamina",
    "San Sebastián de Buenavista",
    "San Zenón",
    "Santa Ana",
    "Santa Marta",
    "Sitionuevo",
    "Tenerife",
    "Zapayán",
    "Zona Bananera"
        ]
    },
    {
        "departamento": "Meta",
        "horasSol": 5.5,
        "municipios": [
            "Acacias",
    "Barranca de Upía",
    "Cabuyaro",
    "Cubarral",
    "Cumaral",
    "El Calvario",
    "El Castillo",
    "El Dorado",
    "Fuente de Oro",
    "Granada",
    "Guamal",
    "La Macarena",
    "La Uribe",
    "Lejanías",
    "Mapiripán",
    "Mesetas",
    "Puerto Concordia",
    "Puerto Gaitán",
    "Puerto López",
    "Puerto Lleras",
    "Puerto Rico",
    "Restrepo",
    "San Carlos de Guaroa",
    "San Juan de Arama",
    "San Juanito",
    "San Martín",
    "Villavicencio",
    "Vista Hermosa"
        ]
    },
    {
        "departamento": "Nariño",
        "horasSol": 5,
        "municipios": [
             "Albán",
    "Aldana",
    "Ancuyá",
    "Barbacoas",
    "Colón",
    "Consaca",
    "Contadero",
    "Córdoba",
    "Cuaspud",
    "Cumbal",
    "Cumbitara",
    "El Charco",
    "El Peñol",
    "El Rosario",
    "El Tablón de Gómez",
    "El Tambo",
    "Francisco Pizarro",
    "Funes",
    "Guachucal",
    "Guaitarilla",
    "Gualmatán",
    "Iles",
    "Imués",
    "Ipiales",
    "La Cruz",
    "La Florida",
    "La Llanada",
    "La Tola",
    "La Unión",
    "Leiva",
    "Linares",
    "Los Andes",
    "Magüí",
    "Mallama",
    "Mosquera",
    "Nariño",
    "Olaya Herrera",
    "Ospina",
    "Pasto",
    "Policarpa",
    "Potosí",
    "Providencia",
    "Puerres",
    "Pupiales",
    "Ricaurte",
    "Roberto Payán",
    "Samaniego",
    "San Bernardo",
    "San Lorenzo",
    "San Pablo",
    "San Pedro de Cartago",
    "Santa Bárbara",
    "Santacruz",
    "Sapuyes",
    "Sandoná",
    "Taminango",
    "Tangua",
    "Túquerres",
    "Yacuanquer"
        ]
    },
     {
        "departamento": "Norte de Santander",
        "horasSol": 6,
        "municipios": [
            "Arboledas",
    "Cácota",
    "Cucutilla",
    "El Tarra",
    "El Zulia",
    "Gramalote",
    "Mutiscua",
    "Ocaña",
    "Puerto Santander",
    "Salazar",
    "Silos",
    "Teorama",
    "Toledo"
        ]
    },
    {
        "departamento": "Putumayo",
        "horasSol": 4,
        "municipios": [
            "Colón",
    "Leguízamo",
    "Mocoa",
    "Orito",
    "Puerto Caicedo",
    "Puerto Guzmán",
    "San Francisco",
    "San Miguel",
    "Santiago",
    "Sibundoy",
    "Valle de Guamez"
        ]
    },
    {
        "departamento": "Quindío",
        "horasSol": 4.3,
        "municipios": [
            "Armenia",
            "Buenavista",
            "Circasia",
            "Córdoba",
            "Filandia",
            "La Tebaida",
            "Montenegro",
            "Pijao",
            "Quimbaya",
            "Salento"
        ]
    },
    {
        "departamento": "Risaralda",
        "horasSol": 4.4,
        "municipios": [
            "Apía",
    "Balboa",
    "Belén de Umbría",
    "Dosquebradas",
    "Guática",
    "La Celia",
    "La Virginia",
    "Marsella",
    "Mistrató",
    "Pereira",
    "Pueblo Rico",
    "Quinchía",
    "Santa Rosa de Cabal",
    "Santuario"
        ]
    },
    {
        "departamento": "Archipiélago de San Andrés, Providencia y Santa Catalina",
        "horasSol": 6.5,
        "municipios": [
            "San Andrés",
            "Providencia"
        ]
    },
    {
        "departamento": "Santander",
        "horasSol": 5.5,
        "municipios": [
            "Aguada",
    "Albania",
    "Aratoca",
    "Barbosa",
    "Barichara",
    "Barrancabermeja",
    "Betulia",
    "Bolívar",
    "Bucaramanga",
    "Cabrera",
    "California",
    "Capitanejo",
    "Carcasí",
    "Cepitá",
    "Cerrito",
    "Charalá",
    "Charta",
    "Chima",
    "Chipatá",
    "Cimitarra",
    "Concepción",
    "Confines",
    "Contratación",
    "Coromoro",
    "Curití",
    "El Carmen de Chucurí",
    "El Guacamayo",
    "El Peñón",
    "El Playón",
    "Encino",
    "Enciso",
    "Florián",
    "Floridablanca",
    "Galán",
    "Gámbita",
    "Girón",
    "Guaca",
    "Guadalupe",
    "Guapotá",
    "Guavatá",
    "Güepsa",
    "Hato",
    "Jesús María",
    "Jordán",
    "La Belleza",
    "La Paz",
    "Landázuri",
    "Lebrija",
    "Los Santos",
    "Macaravita",
    "Málaga",
    "Matanza",
    "Mogotes",
    "Molagavita",
    "Ocamonte",
    "Oiba",
    "Onzaga",
    "Palmar",
    "Palmas del Socorro",
    "Páramo",
    "Piedecuesta",
    "Pinchote",
    "Puente Nacional",
    "Puerto Parra",
    "Puerto Wilches",
    "Rionegro",
    "Sabana de Torres",
    "San Andrés",
    "San Benito",
    "San Gil",
    "San Joaquín",
    "San José de Miranda",
    "San Miguel",
    "San Vicente de Chucurí",
    "Santa Bárbara",
    "Santa Helena del Opón",
    "Simacota",
    "Socorro",
    "Suaita",
    "Sucre",
    "Suratá",
    "Tona",
    "Valle de San José",
    "Vélez",
    "Vetas",
    "Villanueva",
    "Zapatoca"
        ]
    },
     {
        "departamento": "Sucre",
        "horasSol": 5.2,
        "municipios": [
           "Buenavista",
    "Caimito",
    "Chalán",
    "Coloso",
    "Coveñas",
    "El Roble",
    "Galeras",
    "Guaranda",
    "La Unión",
    "Los Palmitos",
    "Majagual",
    "Morroa",
    "Ovejas",
    "Palmito",
    "San Benito Abad",
    "San Juan de Betulia",
    "San Luis de Sincé",
    "San Marcos",
    "San Onofre",
    "San Pedro",
    "Santiago de Tolú",
    "Sincelejo",
    "Sucre",
    "Tolú Viejo"
        ]
    },
    {
        "departamento": "Tolima",
        "horasSol": 5.5,
        "municipios": [
             "Alpujarra",
    "Alvarado",
    "Ambalema",
    "Armero",
    "Ataco",
    "Cajamarca",
    "Carmen de Apicala",
    "Chaparral",
    "Coello",
    "Coyaima",
    "Cunday",
    "Dolores",
    "Espinal",
    "Falan",
    "Flandes",
    "Fresno",
    "Guamo",
    "Herveo",
    "Honda",
    "Icononzo",
    "Mariquita",
    "Melgar",
    "Murillo",
    "Natagaima",
    "Ortega",
    "Palocabildo",
    "Piedras",
    "Planadas",
    "Prado",
    "Purificación",
    "Rio Blanco",
    "Roncesvalles",
    "Rovira",
    "Saldaña",
    "San Antonio",
    "San Luis",
    "Santa Isabel",
    "Valle de San Juan",
    "Venadillo",
    "Villahermosa",
    "Villarrica"
        ]
    },
     {
        "departamento": "Valle del Cauca",
        "horasSol": 5,
        "municipios": [
            "Alcalá",
    "Andalucía",
    "Ansermanuevo",
    "Argelia",
    "Bolívar",
    "Buenaventura",
    "Buga",
    "Bugalagrande",
    "Caicedonia",
    "Calima",
    "Candelaria",
    "Cartago",
    "Dagua",
    "El Águila",
    "El Cairo",
    "El Cerrito",
    "El Dovio",
    "Florida",
    "Ginebra",
    "Guacarí",
    "Jamundí",
    "La Cumbre",
    "La Unión",
    "La Victoria",
    "Obando",
    "Palmira",
    "Pradera",
    "Restrepo",
    "Riofrío",
    "Roldanillo",
    "San Pedro",
    "Sevilla",
    "Toro",
    "Trujillo",
    "Tuluá",
    "Ulloa",
    "Versalles",
    "Vijes",
    "Yotoco",
    "Yumbo",
    "Zarzal"
        ]
    },
    {
        "departamento": "Vaupés",
        "horasSol": 4.1,
        "municipios": [
           "Carurú",
    "Mitú",
    "Pacoa",
    "Papunahua",
    "Taraira",
    "Yavaraté"
        ]
    },
    {
        "departamento": "Vichada",
        "horasSol": 5.0,
        "municipios": [
            "Cumaribo",
    "La Primavera",
    "Puerto Carreño",
    "Santa Rosalía"
        ]
    },
    
    
    {
        "departamento": "Bogotá D.C.",
        "horasSol": 4.0,
        "municipios": [
            "Bogotá D.C."
        ]
    },
   
   
]

// Funciones para llenar menus desplegables de departamento y municipio
function cargarDepartamentos() {
  const selectDepto = document.getElementById("departamento");
  selectDepto.innerHTML = "<option value=''>Seleccione</option>";
  data.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d.departamento;
    opt.textContent = d.departamento;
    selectDepto.appendChild(opt);
  });
}

function cargarMunicipios() {
  const depto = document.getElementById("departamento").value;
  const municipios = data.find(d => d.departamento === depto)?.municipios || [];
  const selectMpio = document.getElementById("municipio");

  selectMpio.innerHTML = "<option value=''>Seleccione</option>";
  municipios.forEach(m => {
    const opt = document.createElement("option");
    opt.value = m;
    opt.textContent = m;
    selectMpio.appendChild(opt);
  });
}

// Datos basados en el CSV proporcionado
const estratosData = {
    "1": {
        "consumo_promedio_kWh": 100,
        "tarifa_kWh": 250,
    },
    "2": {
        "consumo_promedio_kWh": 130,
        "tarifa_kWh": 300,
    },
    "3": {
        "consumo_promedio_kWh": 160,
        "tarifa_kWh": 350,
    }
};

// Eficiencia general de un panel solar (15-25%)
const EFICIENCIA_PANEL = 0.25; // 25%

// Cargar consumo promedio cuando se seleccione estrato
document.getElementById('estrato').addEventListener('change', function() {
    const estrato = this.value;
    if (estrato) {
        const consumoPromedio = estratosData[estrato].consumo_promedio_kWh;
        document.getElementById('consumoPromedio').textContent = `Consumo promedio para estrato ${estrato}: ${consumoPromedio} kWh/mes`;
        //document.getElementById('consumo').value = consumoPromedio;
    } else {
        document.getElementById('consumoPromedio').textContent = '';
    }
});

// Manejar el envío del formulario
document.getElementById('solarForm').addEventListener('submit', function(e) {
    e.preventDefault(); //Evita que la pag se recargue al enviar el form
    calcularAhorro();
});

//Funcion de cálculo de ahorro con paneles solares
function calcularAhorro() {
    // Obtener valores del formulario
    const estrato = document.getElementById('estrato').value;
    const consumo = parseFloat(document.getElementById('consumo').value);
    const departamento = document.getElementById('departamento').value;
    const Num_Paneles= document.getElementById('paneles').value;
    
    //  Valida si estan los datos completos
    if (!estrato || isNaN(consumo) || !departamento || !Num_Paneles) {
        alert("Por favor, completa todos los campos antes de calcular.");
        return;
    }

    // Obtener datos del estrato seleccionado
    const estratoInfo = estratosData[estrato];
    const tarifa = estratoInfo.tarifa_kWh;
   // const consumoPromedio = estratoInfo.consumo_promedio_kWh;
    
    //Obtener horas de sol dependiendo el departamento seleccionado
    const deptoInfo = data.find(d => d.departamento === departamento);
    const horasSol = deptoInfo?.horasSol || 4.5;

    // Calcular energía generada (kWh/mes)
    // Fórmula: Horas_sol * Eficiencia_panel * 30 días * Num_Paneles
    const energiaGenerada = horasSol * EFICIENCIA_PANEL * 30 * Num_Paneles; // kWh/mes
    
    // Calcular ahorro (la energía generada se descuenta del consumo)
    const ahorro = Math.min(energiaGenerada, consumo) * tarifa; //Evita que el sistema genere más energía de la que se consume
    
    // Calcular porcentaje de reducción
    const reduccion = (Math.min(energiaGenerada, consumo) / consumo) * 100;
    
    // Mostrar resultados
    document.getElementById('energiaGenerada').textContent = `${energiaGenerada.toFixed(2)} kWh/mes`;
    document.getElementById('ahorroMensual').textContent = `$${ahorro.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById('reduccion').textContent = `${reduccion.toFixed(2)}%`;
    
    // Mostrar información del estrato
    document.getElementById('infoConsumo').textContent = `${consumo} kWh/mes`;
    document.getElementById('infoTarifa').textContent = tarifa;
    document.getElementById('infoHorasSol').textContent = horasSol;
    
    // Mostrar sección de resultados
    document.getElementById('results').classList.remove('hidden');
    
// Crear gráfico
    crearGrafico(consumo, energiaGenerada, tarifa, ahorro);
}

function crearGrafico(consumo, energiaGenerada, tarifa, ahorro) {
    const ctx = document.getElementById('savingsChart').getContext('2d');
    
    // Destruir gráfico anterior si existe
    if (window.solarChart) {
        window.solarChart.destroy();
    }
    
    const consumoActual = consumo * tarifa;
    const consumoConPaneles = (consumo - Math.min(energiaGenerada, consumo)) * tarifa;
    const ahorroCalculado = consumoActual - consumoConPaneles;
    
    window.solarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Costo actual', 'Costo con paneles', 'Ahorro potencial'],
            datasets: [{
                label: 'Valor en pesos ($)',
                data: [consumoActual, consumoConPaneles, ahorroCalculado],
                backgroundColor: ['#ff6b6b', '#4ecdc4', '#ffe66d'],
                borderColor: ['#ff6b6b', '#4ecdc4', '#ffe66d'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1500, // 1.5 segundos
                easing: 'easeOutBounce' // Efecto rebote al cargar
            },

            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Costo ($)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Comparación de costos energéticos',
                    font: {
                        size: 16
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += `$${context.raw.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
                            return label;
                        }
                    }
                },
                datalabels: {
                    display: true,
                    anchor: 'end',
                    align: 'top',
                    color: '#2c3e50',
                    font: {
                    weight: 'bold',
                    size: 14
                    },
                    formatter: function(value) {
                        return `$${value.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
                    }
                    
                }
            }
        },
        plugins: [ChartDataLabels] // Activamos el plugin
   });
}
window.onload = function () {
  cargarDepartamentos();
};




