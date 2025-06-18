// Datos de departamentos y municipios
const datosColombia = [
     {
        "departamento": "Antioquia",
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
        "municipios": [
            "Puerto Carreño",
            "La Primavera",
            "Santa Rosalía",
            "Cumaribo"
        ]
    },
    {
        "departamento": "Guaviare",
        "municipios": [
            "Calamar",
            "San José del Guaviare",
            "Miraflores",
            "El Retorno"
        ]
    },
    {
        "departamento": "Archipiélago de San Andrés, Providencia y Santa Catalina",
        "municipios": [
            "Providencia",
            "San Andrés"
        ]
    },
    {
        "departamento": "Bogotá D.C.",
        "municipios": [
            "Bogotá D.C."
        ]
    },
    {
        "departamento": "Norte de Santander",
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
];

// Datos por estrato (del CSV proporcionado)
const datosEstratos = {
    "1": {
        "consumo_promedio_kWh": 100,
        "tarifa_kWh": 250,
        "horas_sol_promedio": 5.2
    },
    "2": {
        "consumo_promedio_kWh": 130,
        "tarifa_kWh": 300,
        "horas_sol_promedio": 5.5
    },
    "3": {
        "consumo_promedio_kWh": 160,
        "tarifa_kWh": 350,
        "horas_sol_promedio": 5.8
    }
};

// Configuración técnica de los paneles
const EFICIENCIA_PANEL = 0.18; // 18% de eficiencia
const PRODUCCION_POR_M2 = 0.15; // 0.15 kW/m² (150W por m²)

// Elementos del DOM
const selectDepartamento = document.getElementById('departamento');
const selectMunicipio = document.getElementById('municipio');
const selectEstrato = document.getElementById('estrato');
const inputConsumo = document.getElementById('consumo');
const deslizadorAreaPaneles = document.getElementById('deslizadorAreaPaneles');
const inputAreaPaneles = document.getElementById('areaPaneles');
const formularioSolar = document.getElementById('formularioSolar');

// Cargar departamentos al iniciar
function cargarDepartamentos() {
    selectDepartamento.innerHTML = '<option value="">Seleccione departamento</option>';
    
    datosColombia.forEach(departamento => {
        const opcion = document.createElement('option');
        opcion.value = departamento.departamento;
        opcion.textContent = departamento.departamento;
        selectDepartamento.appendChild(opcion);
    });
}

// Cargar municipios según departamento seleccionado
function cargarMunicipios() {
    const departamentoSeleccionado = selectDepartamento.value;
    selectMunicipio.innerHTML = '<option value="">Seleccione municipio</option>';
    
    if (!departamentoSeleccionado) {
        selectMunicipio.disabled = true;
        return;
    }
    
    selectMunicipio.disabled = false;
    const departamento = datosColombia.find(d => d.departamento === departamentoSeleccionado);
    
    if (departamento) {
        departamento.municipios.forEach(municipio => {
            const opcion = document.createElement('option');
            opcion.value = municipio;
            opcion.textContent = municipio;
            selectMunicipio.appendChild(opcion);
        });
    }
}

// Conectar deslizador con input para área de paneles
deslizadorAreaPaneles.addEventListener('input', function() {
    inputAreaPaneles.value = this.value;
});

inputAreaPaneles.addEventListener('input', function() {
    deslizadorAreaPaneles.value = this.value;
});

// Actualizar consumo al seleccionar estrato
selectEstrato.addEventListener('change', function() {
    const estrato = this.value;
    
    if (estrato && datosEstratos[estrato]) {
        const consumoPromedio = datosEstratos[estrato].consumo_promedio_kWh;
        inputConsumo.value = consumoPromedio;
    }
});

// Manejar el envío del formulario
formularioSolar.addEventListener('submit', function(evento) {
    evento.preventDefault();
    calcularAhorro();
});

// Función principal para calcular el ahorro
function calcularAhorro() {
    // Obtener valores del formulario
    const estrato = selectEstrato.value;
    const consumo = parseFloat(inputConsumo.value);
    const areaPaneles = parseFloat(inputAreaPaneles.value);
    const departamento = selectDepartamento.value;
    const municipio = selectMunicipio.value;
    
    // Validaciones
    if (!estrato) {
        mostrarError('Por favor selecciona tu estrato');
        return;
    }
    
    if (!departamento || !municipio) {
        mostrarError('Por favor selecciona tu departamento y municipio');
        return;
    }
    
    if (isNaN(consumo) {
        mostrarError('Por favor ingresa un consumo válido');
        return;
    }
    
    // Obtener datos del estrato seleccionado
    const datosEstrato = datosEstratos[estrato];
    const tarifa = datosEstrato.tarifa_kWh;
    const horasSol = datosEstrato.horas_sol_promedio;
    
    // Calcular energía generada (kWh/mes)
    const energiaGenerada = horasSol * EFICIENCIA_PANEL * areaPaneles * PRODUCCION_POR_M2 * 30;
    
    // Calcular ahorro (la energía generada se descuenta del consumo)
    const ahorro = Math.min(energiaGenerada, consumo) * tarifa;
    
    // Calcular porcentaje de reducción
    const reduccion = (Math.min(energiaGenerada, consumo) / consumo) * 100;
    
    // Mostrar resultados en la interfaz
    document.getElementById('energiaGenerada').textContent = `${energiaGenerada.toFixed(2)} kWh`;
    document.getElementById('ahorroMensual').textContent = `$${ahorro.toFixed(2)}`;
    document.getElementById('reduccion').textContent = `${reduccion.toFixed(2)}%`;
    
    // Mostrar información de ubicación
    document.getElementById('infoDepto').textContent = departamento;
    document.getElementById('infoMunicipio').textContent = municipio;
    document.getElementById('infoEstrato').textContent = `Estrato ${estrato}`;
    document.getElementById('infoHorasSol').textContent = `${horasSol} horas/día`;
    document.getElementById('infoTarifa').textContent = `$${tarifa} por kWh`;
    document.getElementById('infoConsumo').textContent = `${consumo} kWh/mes`;
    
    // Mostrar sección de resultados
    document.getElementById('resultados').classList.remove('oculto');
    
    // Crear gráfico de resultados
    crearGrafico(consumo, energiaGenerada, tarifa, ahorro);
    
    // Desplazarse suavemente a los resultados
    document.getElementById('resultados').scrollIntoView({ behavior: 'smooth' });
}

// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    alert(mensaje); // Puedes reemplazar esto con un mensaje más elegante en la UI
}

// Función para crear el gráfico de resultados
function crearGrafico(consumo, energiaGenerada, tarifa, ahorro) {
    const ctx = document.getElementById('graficoAhorros').getContext('2d');
    
    // Destruir gráfico anterior si existe
    if (window.graficoSolar) {
        window.graficoSolar.destroy();
    }
    
    // Calcular valores para el gráfico
    const consumoActual = consumo * tarifa;
    const consumoConPaneles = (consumo - Math.min(energiaGenerada, consumo)) * tarifa;
    const ahorroCalculado = consumoActual - consumoConPaneles;
    
    // Crear nuevo gráfico
    window.graficoSolar = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Costo Actual', 'Con Paneles', 'Ahorro'],
            datasets: [{
                label: 'Valor en Pesos ($)',
                data: [consumoActual, consumoConPaneles, ahorroCalculado],
                backgroundColor: [
                    'rgba(231, 76, 60, 0.7)',    // Rojo para costo actual
                    'rgba(46, 204, 113, 0.7)',    // Verde para con paneles
                    'rgba(52, 152, 219, 0.7)'     // Azul para ahorro
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
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Costo ($)',
                        font: {
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Comparación de Costos Energéticos Mensuales',
                    font: {
                        size: 16,
                        weight: 'bold'
                    },
                    padding: {
                        top: 10,
                        bottom: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(contexto) {
                            return `$${contexto.raw.toFixed(2)}`;
                        }
                    }
                }
            },
            animation: {
                duration: 1500
            }
        }
    });
}

// Inicializar la aplicación al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    cargarDepartamentos();
    selectDepartamento.addEventListener('change', cargarMunicipios);
});

window.onload = function () {
  cargarDepartamentos();
};
