//Departamentos con su municipios
// Horas de sol por departamento
const data = [
    {
        "departamento": "Antioquia",
        "horasSol": 4.5,
        "municipios": [
            "Medellín",
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
            "Betania",
            "Betulia",
            "Ciudad Bolívar",
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
            "Cocorná",
            "Concepción",
            "Concordia",
            "Copacabana",
            "Dabeiba",
            "Don Matías",
            "Ebéjico",
            "El Bagre",
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
            "Belmira",
            "Jericó",
            "La Ceja",
            "La Estrella",
            "La Pintada",
            "La Unión",
            "Liborina",
            "Maceo",
            "Marinilla",
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
            "San Francisco",
            "San Jerónimo",
            "San Luis",
            "San Pedro",
            "San Rafael",
            "San Roque",
            "San Vicente",
            "Santa Bárbara",
            "Santo Domingo",
            "El Santuario",
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
            "Yalí",
            "Yarumal",
            "Yolombó",
            "Yondó",
            "Zaragoza",
            "San Pedro de Uraba",
            "Santafé de Antioquia",
            "Santa Rosa de Osos",
            "San Andrés de Cuerquía",
            "Vigía del Fuerte",
            "San José de La Montaña",
            "San Juan de Urabá",
            "El Carmen de Viboral",
            "San Carlos"
        ]
    },
    {
        "departamento": "Boyacá",
        "horasSol": 4.1,
        "municipios": [
            "Tununguá",
            "Motavita",
            "Ciénega",
            "Tunja",
            "Almeida",
            "Aquitania",
            "Arcabuco",
            "Berbeo",
            "Betéitiva",
            "Boavita",
            "Boyacá",
            "Briceño",
            "Buena Vista",
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
            "Togüí",
            "Villa de Leyva",
            "Paz de Río",
            "Santa Rosa de Viterbo",
            "San Pablo de Borbur",
            "San Luis de Gaceno",
            "San José de Pare",
            "San Miguel de Sema",
            "Tuta"
        ]
    },
    {
        "departamento": "Córdoba",
        "horasSol": 5.1,
        "municipios": [
            "San Bernardo del Viento",
            "Montería",
            "Ayapel",
            "Buenavista",
            "Canalete",
            "Cereté",
            "Chimá",
            "Chinú",
            "Cotorra",
            "Lorica",
            "Los Córdobas",
            "Momil",
            "Moñitos",
            "Planeta Rica",
            "Pueblo Nuevo",
            "Puerto Escondido",
            "Purísima",
            "Sahagún",
            "San Andrés Sotavento",
            "San Antero",
            "San Pelayo",
            "Tierralta",
            "Tuchín",
            "Valencia",
            "San José de Uré",
            "Ciénaga de Oro",
            "San Carlos"
        ]
    },
    {
        "departamento": "Chocó",
        "horasSol": 3.5,
        "municipios": [
            "Istmina",
            "Quibdó",
            "Acandí",
            "Alto Baudo",
            "Atrato",
            "Bagadó",
            "Bahía Solano",
            "Bajo Baudó",
            "Bojaya",
            "Cértegui",
            "Condoto",
            "Juradó",
            "Lloró",
            "Medio Atrato",
            "Medio Baudó",
            "Medio San Juan",
            "Nóvita",
            "Nuquí",
            "Río Iro",
            "Río Quito",
            "Riosucio",
            "Sipí",
            "Unguía",
            "El Litoral del San Juan",
            "El Cantón del San Pablo",
            "El Carmen de Atrato",
            "San José del Palmar",
            "Belén de Bajira"
        ]
    },
    {
        "departamento": "Nariño",
        "horasSol": 3.9,
        "municipios": [
            "Santacruz",
            "Pasto",
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
            "El Tambo",
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
            "Francisco Pizarro",
            "Policarpa",
            "Potosí",
            "Providencia",
            "Puerres",
            "Pupiales",
            "Ricaurte",
            "Roberto Payán",
            "Samaniego",
            "Sandoná",
            "San Bernardo",
            "San Lorenzo",
            "San Pablo",
            "Santa Bárbara",
            "Sapuyes",
            "Taminango",
            "Tangua",
            "Túquerres",
            "Yacuanquer",
            "San Pedro de Cartago",
            "El Tablón de Gómez"
        ]
    },
    {
        "departamento": "Santander",
        "horasSol": 4.7,
        "municipios": [
            "Puerto Wilches",
            "Puerto Parra",
            "Bucaramanga",
            "Aguada",
            "Albania",
            "Aratoca",
            "Barbosa",
            "Barichara",
            "Barrancabermeja",
            "Betulia",
            "Bolívar",
            "Cabrera",
            "California",
            "Carcasí",
            "Cepitá",
            "Cerrito",
            "Charalá",
            "Charta",
            "Chipatá",
            "Cimitarra",
            "Concepción",
            "Confines",
            "Contratación",
            "Coromoro",
            "Curití",
            "El Guacamayo",
            "El Playón",
            "Encino",
            "Enciso",
            "Florián",
            "Floridablanca",
            "Galán",
            "Gambita",
            "Girón",
            "Guaca",
            "Guadalupe",
            "Guapotá",
            "Guavatá",
            "Güepsa",
            "Jesús María",
            "Jordán",
            "La Belleza",
            "Landázuri",
            "La Paz",
            "Lebríja",
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
            "Páramo",
            "Piedecuesta",
            "Pinchote",
            "Puente Nacional",
            "Rionegro",
            "San Andrés",
            "San Gil",
            "San Joaquín",
            "San Miguel",
            "Santa Bárbara",
            "Simacota",
            "Socorro",
            "Suaita",
            "Sucre",
            "Suratá",
            "Tona",
            "Vélez",
            "Vetas",
            "Villanueva",
            "Zapatoca",
            "Palmas del Socorro",
            "San Vicente de Chucurí",
            "San José de Miranda",
            "Santa Helena del Opón",
            "Sabana de Torres",
            "El Carmen de Chucurí",
            "Valle de San José",
            "San Benito",
            "Hato"
        ]
    },
    {
        "departamento": "Meta",
        "horasSol": 5.5,
        "municipios": [
            "Uribe",
            "Villavicencio",
            "Acacias",
            "Cabuyaro",
            "Cubarral",
            "Cumaral",
            "El Calvario",
            "El Castillo",
            "El Dorado",
            "Granada",
            "Guamal",
            "Mapiripán",
            "Mesetas",
            "La Macarena",
            "Lejanías",
            "Puerto Concordia",
            "Puerto Gaitán",
            "Puerto López",
            "Puerto Lleras",
            "Puerto Rico",
            "Restrepo",
            "San Juanito",
            "San Martín",
            "Vista Hermosa",
            "Barranca de Upía",
            "Fuente de Oro",
            "San Carlos de Guaroa",
            "San Juan de Arama"
        ]
    },
    {
        "departamento": "Atlántico",
        "horasSol": 5.3,
        "municipios": [
            "Barranquilla",
            "Baranoa",
            "Candelaria",
            "Galapa",
            "Luruaco",
            "Malambo",
            "Manatí",
            "Piojó",
            "Polonuevo",
            "Sabanagrande",
            "Sabanalarga",
            "Santa Lucía",
            "Santo Tomás",
            "Soledad",
            "Suan",
            "Tubará",
            "Usiacurí",
            "Juan de Acosta",
            "Palmar de Varela",
            "Campo de La Cruz"
        ]
    },
    {
        "departamento": "Bolívar",
        "horasSol": 5.4,
        "municipios": [
            "Achí",
            "Arenal",
            "Arjona",
            "Arroyohondo",
            "Calamar",
            "Cantagallo",
            "Cicuco",
            "Córdoba",
            "Clemencia",
            "El Guamo",
            "Magangué",
            "Mahates",
            "Margarita",
            "Montecristo",
            "Mompós",
            "Morales",
            "Norosí",
            "Pinillos",
            "Regidor",
            "Río Viejo",
            "San Estanislao",
            "San Fernando",
            "San Juan Nepomuceno",
            "Santa Catalina",
            "Santa Rosa",
            "Simití",
            "Soplaviento",
            "Talaigua Nuevo",
            "Tiquisio",
            "Turbaco",
            "Turbaná",
            "Villanueva",
            "Barranco de Loba",
            "Santa Rosa del Sur",
            "Hatillo de Loba",
            "El Carmen de Bolívar",
            "San Martín de Loba",
            "Altos del Rosario",
            "San Jacinto del Cauca",
            "San Pablo de Borbur",
            "San Jacinto"
        ]
    },
    {
        "departamento": "Caldas",
        "horasSol": 4.3,
        "municipios": [
            "Manizales",
            "Aguadas",
            "Anserma",
            "Aranzazu",
            "Belalcázar",
            "Chinchiná",
            "Filadelfia",
            "La Dorada",
            "La Merced",
            "Manzanares",
            "Marmato",
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
        "horasSol": 4.6,
        "municipios": [
            "Florencia",
            "Albania",
            "Curillo",
            "El Doncello",
            "El Paujil",
            "Morelia",
            "Puerto Rico",
            "Solano",
            "Solita",
            "Valparaíso",
            "San José del Fragua",
            "Belén de Los Andaquies",
            "Cartagena del Chairá"
        ]
    },
    {
        "departamento": "Cauca",
        "horasSol": 4.0,
        "municipios": [
            "Popayán",
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
            "Puerto Tejada",
            "Puracé",
            "Rosas",
            "Santa Rosa",
            "Silvia",
            "Sotara",
            "Suárez",
            "Sucre",
            "Timbío",
            "Timbiquí",
            "Toribio",
            "Totoró",
            "Villa Rica",
            "Santander de Quilichao",
            "San Sebastián"
        ]
    },
    {
        "departamento": "Cesar",
        "horasSol": 5.6,
        "municipios": [
            "Valledupar",
            "Aguachica",
            "Agustín Codazzi",
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
            "Manaure",
            "Pailitas",
            "Pelaya",
            "Pueblo Bello",
            "La Paz",
            "San Alberto",
            "San Diego",
            "San Martín",
            "Tamalameque",
            "Río de Oro",
            "La Jagua de Ibirico"
        ]
    },
    {
        "departamento": "Cundinamarca",
        "horasSol": 4.2,
        "municipios": [
            "Anapoima",
            "Arbeláez",
            "Beltrán",
            "Bituima",
            "Bojacá",
            "Cabrera",
            "Cachipay",
            "Cajicá",
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
            "Venecia",
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
            "Apulo",
            "Ricaurte",
            "San Bernardo",
            "San Cayetano",
            "San Francisco",
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
            "Vianí",
            "Villagómez",
            "Villapinzón",
            "Villeta",
            "Viotá",
            "Zipacón",
            "San Juan de Río Seco",
            "Villa de San Diego de Ubate",
            "Guayabal de Siquima",
            "San Antonio del Tequendama",
            "Agua de Dios",
            "Carmen de Carupa",
            "Vergara"
        ]
    },
    {
        "departamento": "Huila",
        "horasSol": 5.4,
        "municipios": [
            "Neiva",
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
            "Oporapa",
            "Paicol",
            "Palermo",
            "Palestina",
            "Pital",
            "Pitalito",
            "Rivera",
            "Saladoblanco",
            "Santa María",
            "Suaza",
            "Tarqui",
            "Tesalia",
            "Tello",
            "Teruel",
            "Timaná",
            "Villavieja",
            "Yaguará",
            "San Agustín"
        ]
    },
    {
        "departamento": "La Guajira",
        "horasSol": 5.8,
        "municipios": [
            "Riohacha",
            "Albania",
            "Barrancas",
            "Dibula",
            "Distracción",
            "El Molino",
            "Fonseca",
            "Hatonuevo",
            "Maicao",
            "Manaure",
            "Uribia",
            "Urumita",
            "Villanueva",
            "La Jagua del Pilar",
            "San Juan del Cesar"
        ]
    },
    {
        "departamento": "Magdalena",
        "horasSol": 5.3,
        "municipios": [
            "Santa Marta",
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
            "Pivijay",
            "Plato",
            "Remolino",
            "Salamina",
            "San Zenón",
            "Santa Ana",
            "Sitionuevo",
            "Tenerife",
            "Zapayán",
            "Zona Bananera",
            "San Sebastián de Buenavista",
            "Sabanas de San Angel",
            "Pijiño del Carmen"
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
            "Pereira",
            "Apía",
            "Balboa",
            "Dosquebradas",
            "Guática",
            "La Celia",
            "La Virginia",
            "Marsella",
            "Mistrató",
            "Pueblo Rico",
            "Quinchía",
            "Santuario",
            "Santa Rosa de Cabal",
            "Belén de Umbría"
        ]
    },
    {
        "departamento": "Sucre",
        "horasSol": 5.2,
        "municipios": [
            "Sincelejo",
            "Buenavista",
            "Caimito",
            "Coloso",
            "Coveñas",
            "Chalán",
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
            "San Marcos",
            "San Onofre",
            "San Pedro",
            "Sucre",
            "Tolú Viejo",
            "San Luis de Sincé",
            "San Juan de Betulia",
            "Santiago de Tolú"
        ]
    },
    {
        "departamento": "Tolima",
        "horasSol": 5.3,
        "municipios": [
            "Alpujarra",
            "Alvarado",
            "Ambalema",
            "Armero",
            "Ataco",
            "Cajamarca",
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
            "Santa Isabel",
            "Venadillo",
            "Villahermosa",
            "Villarrica",
            "Valle de San Juan",
            "Carmen de Apicala",
            "San Luis",
            "San Antonio"
        ]
    },
    {
        "departamento": "Arauca",
        "horasSol": 5.3,
        "municipios": [
            "Arauquita",
            "Cravo Norte",
            "Fortul",
            "Puerto Rondón",
            "Saravena",
            "Tame",
            "Arauca"
        ]
    },
    {
        "departamento": "Casanare",
        "horasSol": 5.5,
        "municipios": [
            "Yopal",
            "Aguazul",
            "Chámeza",
            "Hato Corozal",
            "La Salina",
            "Monterrey",
            "Pore",
            "Recetor",
            "Sabanalarga",
            "Sácama",
            "Tauramena",
            "Trinidad",
            "Villanueva",
            "San Luis de Gaceno",
            "Paz de Ariporo"
        ]
    },
    {
        "departamento": "Putumayo",
        "horasSol": 3.8,
        "municipios": [
            "Mocoa",
            "Colón",
            "Orito",
            "Puerto Caicedo",
            "Puerto Guzmán",
            "Leguízamo",
            "Sibundoy",
            "San Francisco",
            "San Miguel",
            "Santiago",
            "Valle de Guamez"
        ]
    },
    {
        "departamento": "Amazonas",
        "horasSol": 4.2,
        "municipios": [
            "Leticia",
            "El Encanto",
            "La Chorrera",
            "La Pedrera",
            "La Victoria",
            "Puerto Arica",
            "Puerto Nariño",
            "Puerto Santander",
            "Tarapacá",
            "Puerto Alegría"
        ]
    },
    {
        "departamento": "Guainía",
        "horasSol": 4.4,
        "municipios": [
            "Inírida",
            "Barranco Minas",
            "Mapiripana",
            "San Felipe",
            "Puerto Colombia",
            "La Guadalupe",
            "Cacahual",
            "Pana Pana",
            "Morichal"
        ]
    },
    {
        "departamento": "Vaupés",
        "horasSol": 4.1,
        "municipios": [
            "Mitú",
            "Carurú",
            "Taraira",
            "Papunahua",
            "Yavaraté",
            "Pacoa"
        ]
    },
    {
        "departamento": "Vichada",
        "horasSol": 5.0,
        "municipios": [
            "Puerto Carreño",
            "La Primavera",
            "Santa Rosalía",
            "Cumaribo"
        ]
    },
    {
        "departamento": "Guaviare",
        "horasSol": 4.7,
        "municipios": [
            "Calamar",
            "San José del Guaviare",
            "Miraflores",
            "El Retorno"
        ]
    },
    {
        "departamento": "Archipiélago de San Andrés, Providencia y Santa Catalina",
        "horasSol": 5.6,
        "municipios": [
            "Providencia",
            "San Andrés"
        ]
    },
    {
        "departamento": "Bogotá D.C.",
        "horasSol": 4.0,
        "municipios": [
            "Bogotá D.C."
        ]
    },
    {
        "departamento": "Norte de Santander",
        "horasSol": 5.2,
        "municipios": [
            "Silos",
            "Cácota",
            "Toledo",
            "Mutiscua",
            "El Zulia",
            "Salazar",
            "Cucutilla",
            "Puerto Santander",
            "Gramalote",
            "El Tarra",
            "Teorama",
            "Arboledas"
        ]
    },
    {
        "departamento": "Valle del Cauca",
        "horasSol": 5.1,
        "municipios": [
            "El Dovio",
            "Roldanillo",
            "Argelia",
            "Sevilla",
            "Zarzal",
            "El Cerrito",
            "Cartago",
            "Caicedonia",
            "El Cairo",
            "La Unión",
            "Restrepo",
            "Dagua",
            "Guacarí"
        ]
    }
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

// Eficiencia general de un panel solar (15-22%)
const EFICIENCIA_PANEL = 0.18; // 18%

// Cargar consumo promedio cuando se seleccione estrato
document.getElementById('estrato').addEventListener('change', function() {
    const estrato = this.value;
    if (estrato) {
        const consumoPromedio = estratosData[estrato].consumo_promedio_kWh;
        document.getElementById('consumoPromedio').textContent = `Consumo promedio para estrato ${estrato}: ${consumoPromedio} kWh/mes`;
        document.getElementById('consumo').value = consumoPromedio;
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
    
    //  Valida si estan los datos completos
    if (!estrato || isNaN(consumo) || !departamento) {
        alert("Por favor, completa todos los campos antes de calcular.");
        return;
    }

    // Obtener datos del estrato seleccionado
    const estratoInfo = estratosData[estrato];
    const tarifa = estratoInfo.tarifa_kWh;
    const consumoPromedio = estratoInfo.consumo_promedio_kWh;
    
    //Obtener horas de sol dependiendo el departamento seleccionado
    const deptoInfo = data.find(d => d.departamento === departamento);
    const horasSol = deptoInfo?.horasSol || 4.5;

    // Calcular energía generada (kWh/mes)
    // Fórmula: Horas_sol * Eficiencia_panel * 30 días
    const energiaGenerada = horasSol * EFICIENCIA_PANEL * 30;
    
    // Calcular ahorro (la energía generada se descuenta del consumo)
    const ahorro = Math.min(energiaGenerada, consumo) * tarifa; //Evita que el sistema genere más energía de la que se consume
    
    // Calcular porcentaje de reducción
    const reduccion = (Math.min(energiaGenerada, consumo) / consumo) * 100;
    
    // Mostrar resultados
    document.getElementById('energiaGenerada').textContent = `${energiaGenerada.toFixed(2)} kWh/mes`;
    document.getElementById('ahorroMensual').textContent = `$${ahorro.toFixed(2)}`;
    document.getElementById('reduccion').textContent = `${reduccion.toFixed(2)}%`;
    
    // Mostrar información del estrato
    document.getElementById('infoConsumo').textContent = `${consumoPromedio} kWh/mes`;
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
                backgroundColor: [
                    'rgba(231, 76, 60, 0.7)',
                    'rgba(46, 204, 113, 0.7)',
                    'rgba(52, 152, 219, 0.7)'
                ],
                borderColor: [
                    'rgba(231, 76, 60, 1)',
                    'rgba(46, 204, 113, 1)',
                    'rgba(52, 152, 219, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
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
                            label += `$${context.raw.toFixed(2)}`;
                            return label;
                        }
                    }
                }
            }
        }
    });
}

window.onload = function () {
  cargarDepartamentos();
};

