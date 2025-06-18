//Departamentos con su municipios
// Horas de sol por departamento
const data = [
    {
  "departamento": "Amazonas",
  "municipios": [
    { "nombre": "El Encanto", "horasSol": 4.1 },
    { "nombre": "La Chorrera", "horasSol": 4.3 },
    { "nombre": "La Pedrera", "horasSol": 4.2 },
    { "nombre": "La Victoria", "horasSol": 4.2 },
    { "nombre": "Leticia", "horasSol": 4.5 },           // capital, mejor medida
    { "nombre": "Puerto Alegría", "horasSol": 4.1 },
    { "nombre": "Puerto Arica", "horasSol": 4.0 },
    { "nombre": "Puerto Nariño", "horasSol": 4.3 },
    { "nombre": "Puerto Santander", "horasSol": 4.2 },
    { "nombre": "Tarapacá", "horasSol": 4.2 }
  ]
},

    {
  "departamento": "Antioquia",
  "municipios": [
    { "nombre": "Abejorral", "horasSol": 5.5 },
    { "nombre": "Abriaquí", "horasSol": 5.5 },
    { "nombre": "Alejandría", "horasSol": 5.5 },
    { "nombre": "Amagá", "horasSol": 5.5 },
    { "nombre": "Amalfi", "horasSol": 5.5 },
    { "nombre": "Andes", "horasSol": 5.5 },
    { "nombre": "Angelópolis", "horasSol": 5.5 },
    { "nombre": "Angostura", "horasSol": 5.5 },
    { "nombre": "Anorí", "horasSol": 5.5 },
    { "nombre": "Anza", "horasSol": 5.5 },
    { "nombre": "Apartadó", "horasSol": 5.5 },
    { "nombre": "Arboletes", "horasSol": 5.5 },
    { "nombre": "Argelia", "horasSol": 5.5 },
    { "nombre": "Armenia", "horasSol": 5.5 },
    { "nombre": "Barbosa", "horasSol": 5.5 },
    { "nombre": "Bello", "horasSol": 5.5 },
    { "nombre": "Belmira", "horasSol": 5.5 },
    { "nombre": "Betania", "horasSol": 5.5 },
    { "nombre": "Betulia", "horasSol": 5.5 },
    { "nombre": "Briceño", "horasSol": 5.5 },
    { "nombre": "Buriticá", "horasSol": 5.5 },
    { "nombre": "Cáceres", "horasSol": 5.5 },
    { "nombre": "Caicedo", "horasSol": 5.5 },
    { "nombre": "Caldas", "horasSol": 5.5 },
    { "nombre": "Campamento", "horasSol": 5.5 },
    { "nombre": "Cañasgordas", "horasSol": 5.5 },
    { "nombre": "Caracolí", "horasSol": 5.5 },
    { "nombre": "Caramanta", "horasSol": 5.5 },
    { "nombre": "Carepa", "horasSol": 5.5 },
    { "nombre": "Carolina", "horasSol": 5.5 },
    { "nombre": "Caucasia", "horasSol": 5.5 },
    { "nombre": "Chigorodó", "horasSol": 5.5 },
    { "nombre": "Cisneros", "horasSol": 5.5 },
    { "nombre": "Ciudad Bolívar", "horasSol": 5.5 },
    { "nombre": "Cocorná", "horasSol": 5.5 },
    { "nombre": "Concepción", "horasSol": 5.5 },
    { "nombre": "Concordia", "horasSol": 5.5 },
    { "nombre": "Copacabana", "horasSol": 5.5 },
    { "nombre": "Dabeiba", "horasSol": 5.5 },
    { "nombre": "Don Matías", "horasSol": 5.5 },
    { "nombre": "Ebéjico", "horasSol": 5.5 },
    { "nombre": "El Bagre", "horasSol": 5.5 },
    { "nombre": "El Carmen de Viboral", "horasSol": 5.5 },
    { "nombre": "El Santuario", "horasSol": 5.5 },
    { "nombre": "Entrerrios", "horasSol": 5.5 },
    { "nombre": "Envigado", "horasSol": 5.5 },
    { "nombre": "Fredonia", "horasSol": 5.5 },
    { "nombre": "Giraldo", "horasSol": 5.5 },
    { "nombre": "Girardota", "horasSol": 5.5 },
    { "nombre": "Gómez Plata", "horasSol": 5.5 },
    { "nombre": "Guadalupe", "horasSol": 5.5 },
    { "nombre": "Guarne", "horasSol": 5.5 },
    { "nombre": "Guatapé", "horasSol": 5.5 },
    { "nombre": "Heliconia", "horasSol": 5.5 },
    { "nombre": "Hispania", "horasSol": 5.5 },
    { "nombre": "Itagui", "horasSol": 5.5 },
    { "nombre": "Ituango", "horasSol": 5.5 },
    { "nombre": "Jericó", "horasSol": 5.5 },
    { "nombre": "La Ceja", "horasSol": 5.5 },
    { "nombre": "La Estrella", "horasSol": 5.5 },
    { "nombre": "La Pintada", "horasSol": 5.5 },
    { "nombre": "La Unión", "horasSol": 5.5 },
    { "nombre": "Liborina", "horasSol": 5.5 },
    { "nombre": "Maceo", "horasSol": 5.5 },
    { "nombre": "Marinilla", "horasSol": 5.5 },
    { "nombre": "Medellín", "horasSol": 5.5 },
    { "nombre": "Montebello", "horasSol": 5.5 },
    { "nombre": "Murindó", "horasSol": 5.5 },
    { "nombre": "Mutatá", "horasSol": 5.5 },
    { "nombre": "Nariño", "horasSol": 5.5 },
    { "nombre": "Necoclí", "horasSol": 5.5 },
    { "nombre": "Nechí", "horasSol": 5.5 },
    { "nombre": "Olaya", "horasSol": 5.5 },
    { "nombre": "Peñol", "horasSol": 5.5 },
    { "nombre": "Peque", "horasSol": 5.5 },
    { "nombre": "Pueblorrico", "horasSol": 5.5 },
    { "nombre": "Puerto Berrío", "horasSol": 5.5 },
    { "nombre": "Puerto Nare", "horasSol": 5.5 },
    { "nombre": "Puerto Triunfo", "horasSol": 5.5 },
    { "nombre": "Remedios", "horasSol": 5.5 },
    { "nombre": "Retiro", "horasSol": 5.5 },
    { "nombre": "Rionegro", "horasSol": 5.5 },
    { "nombre": "Sabanalarga", "horasSol": 5.5 },
    { "nombre": "Sabaneta", "horasSol": 5.5 },
    { "nombre": "Salgar", "horasSol": 5.5 },
    { "nombre": "San Andrés de Cuerquía", "horasSol": 5.5 },
    { "nombre": "San Carlos", "horasSol": 5.5 },
    { "nombre": "San Francisco", "horasSol": 5.5 },
    { "nombre": "San Jerónimo", "horasSol": 5.5 },
    { "nombre": "San José de La Montaña", "horasSol": 5.5 },
    { "nombre": "San Juan de Urabá", "horasSol": 5.5 },
    { "nombre": "San Luis", "horasSol": 5.5 },
    { "nombre": "San Pedro", "horasSol": 5.5 },
    { "nombre": "San Pedro de Uraba", "horasSol": 5.5 },
    { "nombre": "San Rafael", "horasSol": 5.5 },
    { "nombre": "San Roque", "horasSol": 5.5 },
    { "nombre": "San Vicente", "horasSol": 5.5 },
    { "nombre": "Santa Bárbara", "horasSol": 5.5 },
    { "nombre": "Santa Rosa de Osos", "horasSol": 5.5 },
    { "nombre": "Santafé de Antioquia", "horasSol": 5.5 },
    { "nombre": "Santo Domingo", "horasSol": 5.5 },
    { "nombre": "Segovia", "horasSol": 5.5 },
    { "nombre": "Sopetrán", "horasSol": 5.5 },
    { "nombre": "Támesis", "horasSol": 5.5 },
    { "nombre": "Tarazá", "horasSol": 5.5 },
    { "nombre": "Tarso", "horasSol": 5.5 },
    { "nombre": "Titiribí", "horasSol": 5.5 },
    { "nombre": "Toledo", "horasSol": 5.5 },
    { "nombre": "Turbo", "horasSol": 5.5 },
    { "nombre": "Uramita", "horasSol": 5.5 },
    { "nombre": "Urrao", "horasSol": 5.5 },
    { "nombre": "Valdivia", "horasSol": 5.5 },
    { "nombre": "Valparaíso", "horasSol": 5.5 },
    { "nombre": "Vegachí", "horasSol": 5.5 },
    { "nombre": "Venecia", "horasSol": 5.5 },
    { "nombre": "Vigía del Fuerte", "horasSol": 5.5 },
    { "nombre": "Yalí", "horasSol": 5.5 },
    { "nombre": "Yarumal", "horasSol": 5.5 },
    { "nombre": "Yolombó", "horasSol": 5.5 },
    { "nombre": "Yondó", "horasSol": 5.5 },
    { "nombre": "Zaragoza", "horasSol": 5.5 }
  ]
},

    {
  "departamento": "Arauca",
  "municipios": [
    { "nombre": "Arauca", "horasSol": 5.3 },
    { "nombre": "Arauquita", "horasSol": 5.3 },
    { "nombre": "Cravo Norte", "horasSol": 5.3 },
    { "nombre": "Fortul", "horasSol": 5.3 },
    { "nombre": "Puerto Rondón", "horasSol": 5.3 },
    { "nombre": "Saravena", "horasSol": 5.3 },
    { "nombre": "Tame", "horasSol": 5.3 }
  ]
},

    {
  "departamento": "Atlántico",
  "municipios": [
    { "nombre": "Baranoa", "horasSol": 8 },
    { "nombre": "Barranquilla", "horasSol": 8 },
    { "nombre": "Campo de La Cruz", "horasSol": 8 },
    { "nombre": "Candelaria", "horasSol": 8 },
    { "nombre": "Galapa", "horasSol": 8 },
    { "nombre": "Juan de Acosta", "horasSol": 8 },
    { "nombre": "Luruaco", "horasSol": 8 },
    { "nombre": "Malambo", "horasSol": 8 },
    { "nombre": "Manatí", "horasSol": 8 },
    { "nombre": "Palmar de Varela", "horasSol": 8 },
    { "nombre": "Piojó", "horasSol": 8 },
    { "nombre": "Polonuevo", "horasSol": 8 },
    { "nombre": "Sabanagrande", "horasSol": 8 },
    { "nombre": "Sabanalarga", "horasSol": 8 },
    { "nombre": "Santa Lucía", "horasSol": 8 },
    { "nombre": "Santo Tomás", "horasSol": 8 },
    { "nombre": "Soledad", "horasSol": 8 },
    { "nombre": "Suan", "horasSol": 8 },
    { "nombre": "Tubará", "horasSol": 8 },
    { "nombre": "Usiacurí", "horasSol": 8 }
  ]
},

    {
  "departamento": "Bolívar",
  "municipios": [
    { "nombre": "Achí", "horasSol": 8 },
    { "nombre": "Altos del Rosario", "horasSol": 8 },
    { "nombre": "Arenal", "horasSol": 8 },
    { "nombre": "Arjona", "horasSol": 8 },
    { "nombre": "Arroyohondo", "horasSol": 8 },
    { "nombre": "Barranco de Loba", "horasSol": 8 },
    { "nombre": "Calamar", "horasSol": 8 },
    { "nombre": "Cantagallo", "horasSol": 8 },
    { "nombre": "Cartagena de Indias", "horasSol": 8.3 },
    { "nombre": "Cicuco", "horasSol": 8 },
    { "nombre": "Clemencia", "horasSol": 8 },
    { "nombre": "Córdoba", "horasSol": 8 },
    { "nombre": "El Carmen de Bolívar", "horasSol": 8 },
    { "nombre": "El Guamo", "horasSol": 8 },
    { "nombre": "El Peñón", "horasSol": 8 },
    { "nombre": "Hatillo de Loba", "horasSol": 8 },
    { "nombre": "Magangué", "horasSol": 8 },
    { "nombre": "Mahates", "horasSol": 8 },
    { "nombre": "Margarita", "horasSol": 8 },
    { "nombre": "María La Baja", "horasSol": 8 },
    { "nombre": "Montecristo", "horasSol": 8 },
    { "nombre": "Morales", "horasSol": 8 },
    { "nombre": "Norosí", "horasSol": 8 },
    { "nombre": "Pinillos", "horasSol": 8 },
    { "nombre": "Regidor", "horasSol": 8 },
    { "nombre": "Río Viejo", "horasSol": 8 },
    { "nombre": "San Cristóbal", "horasSol": 8 },
    { "nombre": "San Estanislao", "horasSol": 8 },
    { "nombre": "San Fernando", "horasSol": 8 },
    { "nombre": "San Jacinto", "horasSol": 8 },
    { "nombre": "San Jacinto del Cauca", "horasSol": 8 },
    { "nombre": "San Juan Nepomuceno", "horasSol": 8 },
    { "nombre": "San Martín de Loba", "horasSol": 8 },
    { "nombre": "San Pablo", "horasSol": 8 },
    { "nombre": "Santa Catalina", "horasSol": 8 },
    { "nombre": "Santa Cruz de Mompox", "horasSol": 8 },
    { "nombre": "Santa Rosa", "horasSol": 8 },
    { "nombre": "Santa Rosa del Sur", "horasSol": 8 },
    { "nombre": "Simití", "horasSol": 8 },
    { "nombre": "Soplaviento", "horasSol": 8 },
    { "nombre": "Talaigua Nuevo", "horasSol": 8 },
    { "nombre": "Tiquisio", "horasSol": 8 },
    { "nombre": "Turbaco", "horasSol": 8 },
    { "nombre": "Turbaná", "horasSol": 8 },
    { "nombre": "Villanueva", "horasSol": 8 },
    { "nombre": "Zambrano", "horasSol": 8 }
  ]
},

    {
  "departamento": "Boyacá",
  "municipios": [
    { "nombre": "Almeida", "horasSol": 5.5 },
    { "nombre": "Aquitania", "horasSol": 5.5 },
    { "nombre": "Arcabuco", "horasSol": 5.5 },
    { "nombre": "Belén", "horasSol": 5.5 },
    { "nombre": "Berbeo", "horasSol": 5.5 },
    { "nombre": "Betéitiva", "horasSol": 5.5 },
    { "nombre": "Boavita", "horasSol": 5.5 },
    { "nombre": "Boyacá", "horasSol": 5.5 },
    { "nombre": "Briceño", "horasSol": 5.5 },
    { "nombre": "Buenavista", "horasSol": 5.5 },
    { "nombre": "Busbanzá", "horasSol": 5.5 },
    { "nombre": "Caldas", "horasSol": 5.5 },
    { "nombre": "Campohermoso", "horasSol": 5.5 },
    { "nombre": "Cerinza", "horasSol": 5.5 },
    { "nombre": "Chinavita", "horasSol": 5.5 },
    { "nombre": "Chiquinquirá", "horasSol": 5.5 },
    { "nombre": "Chiscas", "horasSol": 5.5 },
    { "nombre": "Chita", "horasSol": 5.5 },
    { "nombre": "Chitaraque", "horasSol": 5.5 },
    { "nombre": "Chivatá", "horasSol": 5.5 },
    { "nombre": "Chivor", "horasSol": 5.5 },
    { "nombre": "Ciénega", "horasSol": 5.5 },
    { "nombre": "Cómbita", "horasSol": 5.5 },
    { "nombre": "Coper", "horasSol": 5.5 },
    { "nombre": "Corrales", "horasSol": 5.5 },
    { "nombre": "Covarachía", "horasSol": 5.5 },
    { "nombre": "Cubará", "horasSol": 5.5 },
    { "nombre": "Cucaita", "horasSol": 5.5 },
    { "nombre": "Cuítiva", "horasSol": 5.5 },
    { "nombre": "Chíquiza", "horasSol": 5.5 },
    { "nombre": "Duitama", "horasSol": 5.5 },
    { "nombre": "El Cocuy", "horasSol": 5.5 },
    { "nombre": "El Espino", "horasSol": 5.5 },
    { "nombre": "Firavitoba", "horasSol": 5.5 },
    { "nombre": "Floresta", "horasSol": 5.5 },
    { "nombre": "Gachantivá", "horasSol": 5.5 },
    { "nombre": "Gameza", "horasSol": 5.5 },
    { "nombre": "Garagoa", "horasSol": 5.5 },
    { "nombre": "Guacamayas", "horasSol": 5.5 },
    { "nombre": "Guateque", "horasSol": 5.5 },
    { "nombre": "Guayatá", "horasSol": 5.5 },
    { "nombre": "Güicán", "horasSol": 5.5 },
    { "nombre": "Iza", "horasSol": 5.5 },
    { "nombre": "Jenesano", "horasSol": 5.5 },
    { "nombre": "Jericó", "horasSol": 5.5 },
    { "nombre": "Labranzagrande", "horasSol": 5.5 },
    { "nombre": "La Capilla", "horasSol": 5.5 },
    { "nombre": "La Victoria", "horasSol": 5.5 },
    { "nombre": "Macanal", "horasSol": 5.5 },
    { "nombre": "Maripí", "horasSol": 5.5 },
    { "nombre": "Miraflores", "horasSol": 5.5 },
    { "nombre": "Mongua", "horasSol": 5.5 },
    { "nombre": "Monguí", "horasSol": 5.5 },
    { "nombre": "Moniquirá", "horasSol": 5.5 },
    { "nombre": "Motavita", "horasSol": 5.5 },
    { "nombre": "Muzo", "horasSol": 5.5 },
    { "nombre": "Nobsa", "horasSol": 5.5 },
    { "nombre": "Nuevo Colón", "horasSol": 5.5 },
    { "nombre": "Oicatá", "horasSol": 5.5 },
    { "nombre": "Otanche", "horasSol": 5.5 },
    { "nombre": "Pachavita", "horasSol": 5.5 },
    { "nombre": "Páez", "horasSol": 5.5 },
    { "nombre": "Paipa", "horasSol": 5.5 },
    { "nombre": "Pajarito", "horasSol": 5.5 },
    { "nombre": "Panqueba", "horasSol": 5.5 },
    { "nombre": "Pauna", "horasSol": 5.5 },
    { "nombre": "Paya", "horasSol": 5.5 },
    { "nombre": "Pesca", "horasSol": 5.5 },
    { "nombre": "Pisba", "horasSol": 5.5 },
    { "nombre": "Puerto Boyacá", "horasSol": 5.5 },
    { "nombre": "Quípama", "horasSol": 5.5 },
    { "nombre": "Ramiriquí", "horasSol": 5.5 },
    { "nombre": "Ráquira", "horasSol": 5.5 },
    { "nombre": "Rondón", "horasSol": 5.5 },
    { "nombre": "Saboyá", "horasSol": 5.5 },
    { "nombre": "Sáchica", "horasSol": 5.5 },
    { "nombre": "Samacá", "horasSol": 5.5 },
    { "nombre": "San Eduardo", "horasSol": 5.5 },
    { "nombre": "San Mateo", "horasSol": 5.5 },
    { "nombre": "Santana", "horasSol": 5.5 },
    { "nombre": "Santa María", "horasSol": 5.5 },
    { "nombre": "Santa Sofía", "horasSol": 5.5 },
    { "nombre": "Sativanorte", "horasSol": 5.5 },
    { "nombre": "Sativasur", "horasSol": 5.5 },
    { "nombre": "Siachoque", "horasSol": 5.5 },
    { "nombre": "Soatá", "horasSol": 5.5 },
    { "nombre": "Socotá", "horasSol": 5.5 },
    { "nombre": "Socha", "horasSol": 5.5 },
    { "nombre": "Sogamoso", "horasSol": 5.5 },
    { "nombre": "Somondoco", "horasSol": 5.5 },
    { "nombre": "Sora", "horasSol": 5.5 },
    { "nombre": "Soracá", "horasSol": 5.5 },
    { "nombre": "Sotaquirá", "horasSol": 5.5 },
    { "nombre": "Susacón", "horasSol": 5.5 },
    { "nombre": "Sutamarchán", "horasSol": 5.5 },
    { "nombre": "Sutatenza", "horasSol": 5.5 },
    { "nombre": "Tasco", "horasSol": 5.5 },
    { "nombre": "Tenza", "horasSol": 5.5 },
    { "nombre": "Tibaná", "horasSol": 5.5 },
    { "nombre": "Tinjacá", "horasSol": 5.5 },
    { "nombre": "Tipacoque", "horasSol": 5.5 },
    { "nombre": "Toca", "horasSol": 5.5 },
    { "nombre": "Tópaga", "horasSol": 5.5 },
    { "nombre": "Tota", "horasSol": 5.5 },
    { "nombre": "Tunja", "horasSol": 5.5 },
    { "nombre": "Tununguá", "horasSol": 5.5 },
    { "nombre": "Turmequé", "horasSol": 5.5 },
    { "nombre": "Tutazá", "horasSol": 5.5 },
    { "nombre": "Umbita", "horasSol": 5.5 },
    { "nombre": "Ventaquemada", "horasSol": 5.5 },
    { "nombre": "Viracachá", "horasSol": 5.5 },
    { "nombre": "Zetaquira", "horasSol": 5.5 }
  ]
},

     {
  "departamento": "Caldas",
  "municipios": [
    { "nombre": "Aguadas", "horasSol": 4.3 },
    { "nombre": "Anserma", "horasSol": 4.3 },
    { "nombre": "Aranzazu", "horasSol": 4.3 },
    { "nombre": "Belalcázar", "horasSol": 4.3 },
    { "nombre": "Chinchiná", "horasSol": 4.3 },
    { "nombre": "Filadelfia", "horasSol": 4.3 },
    { "nombre": "La Dorada", "horasSol": 4.3 },
    { "nombre": "La Merced", "horasSol": 4.3 },
    { "nombre": "Manizales", "horasSol": 4.3 },
    { "nombre": "Manzanares", "horasSol": 4.3 },
    { "nombre": "Marmato", "horasSol": 4.3 },
    { "nombre": "Marquetalia", "horasSol": 4.3 },
    { "nombre": "Marulanda", "horasSol": 4.3 },
    { "nombre": "Neira", "horasSol": 4.3 },
    { "nombre": "Norcasia", "horasSol": 4.3 },
    { "nombre": "Pácora", "horasSol": 4.3 },
    { "nombre": "Palestina", "horasSol": 4.3 },
    { "nombre": "Pensilvania", "horasSol": 4.3 },
    { "nombre": "Riosucio", "horasSol": 4.3 },
    { "nombre": "Risaralda", "horasSol": 4.3 },
    { "nombre": "Salamina", "horasSol": 4.3 },
    { "nombre": "Samaná", "horasSol": 4.3 },
    { "nombre": "San José", "horasSol": 4.3 },
    { "nombre": "Supía", "horasSol": 4.3 },
    { "nombre": "Victoria", "horasSol": 4.3 },
    { "nombre": "Villamaría", "horasSol": 4.3 },
    { "nombre": "Viterbo", "horasSol": 4.3 }
  ]
},

    {
  "departamento": "Caquetá",
  "municipios": [
    { "nombre": "Albania", "horasSol": 4.25 },
    { "nombre": "Belén de los Andaquíes", "horasSol": 4.25 },
    { "nombre": "Cartagena del Chairá", "horasSol": 4.25 },
    { "nombre": "Curillo", "horasSol": 4.25 },
    { "nombre": "El Doncello", "horasSol": 4.25 },
    { "nombre": "El Paujil", "horasSol": 4.25 },
    { "nombre": "Florencia", "horasSol": 4.25 },
    { "nombre": "La Montañita", "horasSol": 4.25 },
    { "nombre": "Milán", "horasSol": 4.25 },
    { "nombre": "Morelia", "horasSol": 4.25 },
    { "nombre": "Puerto Rico", "horasSol": 4.25 },
    { "nombre": "San José del Fragua", "horasSol": 4.25 },
    { "nombre": "San Vicente del Caguán", "horasSol": 4.25 },
    { "nombre": "Solano", "horasSol": 4.25 },
    { "nombre": "Solita", "horasSol": 4.25 },
    { "nombre": "Valparaíso", "horasSol": 4.25 }
  ]
},

    {
  "departamento": "Casanare",
  "municipios": [
    { "nombre": "Aguazul", "horasSol": 5.5 },
    { "nombre": "Chámeza", "horasSol": 5.5 },
    { "nombre": "Hato Corozal", "horasSol": 5.5 },
    { "nombre": "La Salina", "horasSol": 5.5 },
    { "nombre": "Maní", "horasSol": 5.5 },
    { "nombre": "Monterrey", "horasSol": 5.5 },
    { "nombre": "Nunchía", "horasSol": 5.5 },
    { "nombre": "Orocué", "horasSol": 5.5 },
    { "nombre": "Paz de Ariporo", "horasSol": 5.5 },
    { "nombre": "Pore", "horasSol": 5.5 },
    { "nombre": "Recetor", "horasSol": 5.5 },
    { "nombre": "Sabanalarga", "horasSol": 5.5 },
    { "nombre": "Sácama", "horasSol": 5.5 },
    { "nombre": "San Luis de Palenque", "horasSol": 5.5 },
    { "nombre": "Támara", "horasSol": 5.5 },
    { "nombre": "Tauramena", "horasSol": 5.5 },
    { "nombre": "Trinidad", "horasSol": 5.5 },
    { "nombre": "Villanueva", "horasSol": 5.5 },
    { "nombre": "Yopal", "horasSol": 5.5 }
  ]
},
     {
  "departamento": "Cauca",
  "municipios": [
    { "nombre": "Almaguer", "horasSol": 4.5 },
    { "nombre": "Argelia", "horasSol": 4.5 },
    { "nombre": "Balboa", "horasSol": 4.5 },
    { "nombre": "Bolívar", "horasSol": 4.5 },
    { "nombre": "Buenos Aires", "horasSol": 4.5 },
    { "nombre": "Cajibío", "horasSol": 4.5 },
    { "nombre": "Caldono", "horasSol": 4.5 },
    { "nombre": "Caloto", "horasSol": 4.5 },
    { "nombre": "Corinto", "horasSol": 4.5 },
    { "nombre": "El Tambo", "horasSol": 4.5 },
    { "nombre": "Florencia", "horasSol": 4.5 },
    { "nombre": "Guachené", "horasSol": 4.5 },
    { "nombre": "Guapi", "horasSol": 4.5 },
    { "nombre": "Inzá", "horasSol": 4.5 },
    { "nombre": "Jambaló", "horasSol": 4.5 },
    { "nombre": "La Sierra", "horasSol": 4.5 },
    { "nombre": "La Vega", "horasSol": 4.5 },
    { "nombre": "López", "horasSol": 4.5 },
    { "nombre": "Mercaderes", "horasSol": 4.5 },
    { "nombre": "Miranda", "horasSol": 4.5 },
    { "nombre": "Morales", "horasSol": 4.5 },
    { "nombre": "Padilla", "horasSol": 4.5 },
    { "nombre": "Patía", "horasSol": 4.5 },
    { "nombre": "Piamonte", "horasSol": 4.5 },
    { "nombre": "Piendamó", "horasSol": 4.5 },
    { "nombre": "Popayán", "horasSol": 4.5 },
    { "nombre": "Puerto Tejada", "horasSol": 4.5 },
    { "nombre": "Puracé", "horasSol": 4.5 },
    { "nombre": "Rosas", "horasSol": 4.5 },
    { "nombre": "San Sebastián", "horasSol": 4.5 },
    { "nombre": "Santa Rosa", "horasSol": 4.5 },
    { "nombre": "Santander de Quilichao", "horasSol": 4.5 },
    { "nombre": "Silvia", "horasSol": 4.5 },
    { "nombre": "Sotara", "horasSol": 4.5 },
    { "nombre": "Suárez", "horasSol": 4.5 },
    { "nombre": "Sucre", "horasSol": 4.5 },
    { "nombre": "Timbío", "horasSol": 4.5 },
    { "nombre": "Timbiquí", "horasSol": 4.5 },
    { "nombre": "Toribio", "horasSol": 4.5 },
    { "nombre": "Totoró", "horasSol": 4.5 },
    { "nombre": "Villa Rica", "horasSol": 4.5 }
  ]
},

    {
  "departamento": "Cesar",
  "municipios": [
    { "nombre": "Agustín Codazzi", "horasSol": 8 },
    { "nombre": "Aguachica", "horasSol": 8 },
    { "nombre": "Astrea", "horasSol": 8 },
    { "nombre": "Becerril", "horasSol": 8 },
    { "nombre": "Bosconia", "horasSol": 8 },
    { "nombre": "Chimichagua", "horasSol": 8 },
    { "nombre": "Chiriguaná", "horasSol": 8 },
    { "nombre": "Curumaní", "horasSol": 8 },
    { "nombre": "El Copey", "horasSol": 8 },
    { "nombre": "El Paso", "horasSol": 8 },
    { "nombre": "Gamarra", "horasSol": 8 },
    { "nombre": "González", "horasSol": 8 },
    { "nombre": "La Gloria", "horasSol": 8 },
    { "nombre": "La Jagua de Ibirico", "horasSol": 8 },
    { "nombre": "La Paz", "horasSol": 8 },
    { "nombre": "Manaure", "horasSol": 7.8 },
    { "nombre": "Pailitas", "horasSol": 8 },
    { "nombre": "Pelaya", "horasSol": 8 },
    { "nombre": "Pueblo Bello", "horasSol": 8 },
    { "nombre": "Río de Oro", "horasSol": 8 },
    { "nombre": "San Alberto", "horasSol": 8 },
    { "nombre": "San Diego", "horasSol": 8 },
    { "nombre": "San Martín", "horasSol": 8 },
    { "nombre": "Tamalameque", "horasSol": 8 },
    { "nombre": "Valledupar", "horasSol": 8.3 }
  ]
},

    {
  "departamento": "Chocó",
  "municipios": [
    { "nombre": "Acandí", "horasSol": 3.5 },
    { "nombre": "Alto Baudó", "horasSol": 3.5 },
    { "nombre": "Atrato", "horasSol": 3.5 },
    { "nombre": "Bagadó", "horasSol": 3.5 },
    { "nombre": "Bahía Solano", "horasSol": 4.0 },
    { "nombre": "Bajo Baudó", "horasSol": 3.5 },
    { "nombre": "Belén de Bajirá", "horasSol": 3.5 },
    { "nombre": "Bojayá", "horasSol": 3.5 },
    { "nombre": "Cértegui", "horasSol": 3.5 },
    { "nombre": "Condoto", "horasSol": 3.5 },
    { "nombre": "El Cantón del San Pablo", "horasSol": 3.5 },
    { "nombre": "El Carmen de Atrato", "horasSol": 3.5 },
    { "nombre": "El Litoral del San Juan", "horasSol": 3.5 },
    { "nombre": "Istmina", "horasSol": 3.5 },
    { "nombre": "Juradó", "horasSol": 3.5 },
    { "nombre": "Lloró", "horasSol": 3.5 },
    { "nombre": "Medio Atrato", "horasSol": 3.5 },
    { "nombre": "Medio Baudó", "horasSol": 3.5 },
    { "nombre": "Medio San Juan", "horasSol": 3.5 },
    { "nombre": "Nóvita", "horasSol": 3.5 },
    { "nombre": "Nuquí", "horasSol": 3.5 },
    { "nombre": "Quibdó", "horasSol": 3.5 },
    { "nombre": "Río Iro", "horasSol": 3.5 },
    { "nombre": "Río Quito", "horasSol": 3.5 },
    { "nombre": "Riosucio", "horasSol": 3.5 },
    { "nombre": "San José del Palmar", "horasSol": 3.5 },
    { "nombre": "Sipí", "horasSol": 3.5 },
    { "nombre": "Unguía", "horasSol": 3.5 }
  ]
},

    {
  "departamento": "Córdoba",
  "municipios": [
    { "nombre": "Ayapel", "horasSol": 5.1 },
    { "nombre": "Buenavista", "horasSol": 5.1 },
    { "nombre": "Canalete", "horasSol": 5.1 },
    { "nombre": "Cereté", "horasSol": 5.1 },
    { "nombre": "Chimá", "horasSol": 5.1 },
    { "nombre": "Chinú", "horasSol": 5.1 },
    { "nombre": "Ciénaga de Oro", "horasSol": 5.1 },
    { "nombre": "Cotorra", "horasSol": 5.1 },
    { "nombre": "Los Córdobas", "horasSol": 5.1 },
    { "nombre": "Lorica", "horasSol": 5.1 },
    { "nombre": "Momil", "horasSol": 5.1 },
    { "nombre": "Moñitos", "horasSol": 5.1 },
    { "nombre": "Montería", "horasSol": 5.1 },
    { "nombre": "Planeta Rica", "horasSol": 5.1 },
    { "nombre": "Pueblo Nuevo", "horasSol": 5.1 },
    { "nombre": "Puerto Escondido", "horasSol": 5.1 },
    { "nombre": "Purísima", "horasSol": 5.1 },
    { "nombre": "Sahagún", "horasSol": 5.1 },
    { "nombre": "San Andrés Sotavento", "horasSol": 5.1 },
    { "nombre": "San Antero", "horasSol": 5.1 },
    { "nombre": "San Bernardo del Viento", "horasSol": 5.1 },
    { "nombre": "San Carlos", "horasSol": 5.1 },
    { "nombre": "San José de Uré", "horasSol": 5.1 },
    { "nombre": "San Pelayo", "horasSol": 5.1 },
    { "nombre": "Tierralta", "horasSol": 5.1 },
    { "nombre": "Tuchín", "horasSol": 5.1 },
    { "nombre": "Valencia", "horasSol": 5.1 }
  ]
},

    {
  "departamento": "Guainía",
  "municipios": [
    { "nombre": "Barranco Minas", "horasSol": 4.25 },
    { "nombre": "Cacahual", "horasSol": 4.25 },
    { "nombre": "Inírida", "horasSol": 4.25 },
    { "nombre": "La Guadalupe", "horasSol": 4.25 },
    { "nombre": "Mapiripana", "horasSol": 4.25 },
    { "nombre": "Morichal", "horasSol": 4.25 },
    { "nombre": "Pana Pana", "horasSol": 4.25 },
    { "nombre": "Puerto Colombia", "horasSol": 4.25 },
    { "nombre": "San Felipe", "horasSol": 4.25 }
  ]
},

   {
  "departamento": "Guaviare",
  "municipios": [
    { "nombre": "Calamar", "horasSol": 4.25 },
    { "nombre": "El Retorno", "horasSol": 4.25 },
    { "nombre": "Miraflores", "horasSol": 4.25 },
    { "nombre": "San José del Guaviare", "horasSol": 4.25 }
  ]
},

    {
  "departamento": "Huila",
  "municipios": [
    { "nombre": "Acevedo", "horasSol": 5.5 },
    { "nombre": "Agrado", "horasSol": 5.5 },
    { "nombre": "Aipe", "horasSol": 5.5 },
    { "nombre": "Algeciras", "horasSol": 5.5 },
    { "nombre": "Altamira", "horasSol": 5.5 },
    { "nombre": "Baraya", "horasSol": 5.5 },
    { "nombre": "Campoalegre", "horasSol": 5.5 },
    { "nombre": "Colombia", "horasSol": 5.5 },
    { "nombre": "Elías", "horasSol": 5.5 },
    { "nombre": "Garzón", "horasSol": 5.5 },
    { "nombre": "Gigante", "horasSol": 5.5 },
    { "nombre": "Guadalupe", "horasSol": 5.5 },
    { "nombre": "Hobo", "horasSol": 5.5 },
    { "nombre": "Iquira", "horasSol": 5.5 },
    { "nombre": "Isnos", "horasSol": 5.5 },
    { "nombre": "La Argentina", "horasSol": 5.5 },
    { "nombre": "La Plata", "horasSol": 5.5 },
    { "nombre": "Nátaga", "horasSol": 5.5 },
    { "nombre": "Neiva", "horasSol": 5.5 },
    { "nombre": "Oporapa", "horasSol": 5.5 },
    { "nombre": "Paicol", "horasSol": 5.5 },
    { "nombre": "Palermo", "horasSol": 5.5 },
    { "nombre": "Palestina", "horasSol": 5.5 },
    { "nombre": "Pital", "horasSol": 5.5 },
    { "nombre": "Pitalito", "horasSol": 5.5 },
    { "nombre": "Rivera", "horasSol": 5.5 },
    { "nombre": "Saladoblanco", "horasSol": 5.5 },
    { "nombre": "San Agustín", "horasSol": 5.5 },
    { "nombre": "Santa María", "horasSol": 5.5 },
    { "nombre": "Suaza", "horasSol": 5.5 },
    { "nombre": "Tarqui", "horasSol": 5.5 },
    { "nombre": "Tello", "horasSol": 5.5 },
    { "nombre": "Teruel", "horasSol": 5.5 },
    { "nombre": "Tesalia", "horasSol": 5.5 },
    { "nombre": "Timaná", "horasSol": 5.5 },
    { "nombre": "Tocado", "horasSol": 5.5 },
    { "nombre": "Villavieja", "horasSol": 5.5 },
    { "nombre": "Yaguará", "horasSol": 5.5 }
  ]
},

    {
  "departamento": "La Guajira",
  "municipios": [
    { "nombre": "Albania", "horasSol": 8 },
    { "nombre": "Barrancas", "horasSol": 8 },
    { "nombre": "Dibula", "horasSol": 8 },
    { "nombre": "Distracción", "horasSol": 8 },
    { "nombre": "El Molino", "horasSol": 8 },
    { "nombre": "Fonseca", "horasSol": 8 },
    { "nombre": "Hatonuevo", "horasSol": 8 },
    { "nombre": "La Jagua del Pilar", "horasSol": 8 },
    { "nombre": "Maicao", "horasSol": 8 },
    { "nombre": "Manaure", "horasSol": 8.2 },
    { "nombre": "Riohacha", "horasSol": 8.3 },
    { "nombre": "San Juan del Cesar", "horasSol": 8 },
    { "nombre": "Uribia", "horasSol": 8 },
    { "nombre": "Urumita", "horasSol": 8 },
    { "nombre": "Villanueva", "horasSol": 8 }
  ]
},

    {
  "departamento": "Magdalena",
  "municipios": [
    { "nombre": "Algarrobo", "horasSol": 8 },
    { "nombre": "Aracataca", "horasSol": 8 },
    { "nombre": "Ariguaní", "horasSol": 8 },
    { "nombre": "Cerro San Antonio", "horasSol": 8 },
    { "nombre": "Chivolo", "horasSol": 8 },
    { "nombre": "Concordia", "horasSol": 8 },
    { "nombre": "El Banco", "horasSol": 8 },
    { "nombre": "El Piñon", "horasSol": 8 },
    { "nombre": "El Retén", "horasSol": 8 },
    { "nombre": "Fundación", "horasSol": 8 },
    { "nombre": "Guamal", "horasSol": 8 },
    { "nombre": "Nueva Granada", "horasSol": 8 },
    { "nombre": "Pedraza", "horasSol": 8 },
    { "nombre": "Pijiño del Carmen", "horasSol": 8 },
    { "nombre": "Pivijay", "horasSol": 8 },
    { "nombre": "Plato", "horasSol": 8 },
    { "nombre": "Remolino", "horasSol": 8 },
    { "nombre": "Sabanas de San Angel", "horasSol": 8 },
    { "nombre": "Salamina", "horasSol": 8 },
    { "nombre": "San Sebastián de Buenavista", "horasSol": 8 },
    { "nombre": "San Zenón", "horasSol": 8 },
    { "nombre": "Santa Ana", "horasSol": 8 },
    { "nombre": "Santa Marta", "horasSol": 8.3 },
    { "nombre": "Sitionuevo", "horasSol": 8 },
    { "nombre": "Tenerife", "horasSol": 8 },
    { "nombre": "Zapayán", "horasSol": 8 },
    { "nombre": "Zona Bananera", "horasSol": 8 }
  ]
},

    {
  "departamento": "Meta",
  "municipios": [
    { "nombre": "Acacias", "horasSol": 5.5 },
    { "nombre": "Barranca de Upía", "horasSol": 5.5 },
    { "nombre": "Cabuyaro", "horasSol": 5.5 },
    { "nombre": "Cubarral", "horasSol": 5.5 },
    { "nombre": "Cumaral", "horasSol": 5.5 },
    { "nombre": "El Calvario", "horasSol": 5.5 },
    { "nombre": "El Castillo", "horasSol": 5.5 },
    { "nombre": "El Dorado", "horasSol": 5.5 },
    { "nombre": "Fuente de Oro", "horasSol": 5.5 },
    { "nombre": "Granada", "horasSol": 5.5 },
    { "nombre": "Guamal", "horasSol": 5.5 },
    { "nombre": "La Macarena", "horasSol": 5.5 },
    { "nombre": "La Uribe", "horasSol": 5.5 },
    { "nombre": "Lejanías", "horasSol": 5.5 },
    { "nombre": "Mapiripán", "horasSol": 5.5 },
    { "nombre": "Mesetas", "horasSol": 5.5 },
    { "nombre": "Puerto Concordia", "horasSol": 5.5 },
    { "nombre": "Puerto Gaitán", "horasSol": 5.5 },
    { "nombre": "Puerto López", "horasSol": 5.5 },
    { "nombre": "Puerto Lleras", "horasSol": 5.5 },
    { "nombre": "Puerto Rico", "horasSol": 5.5 },
    { "nombre": "Restrepo", "horasSol": 5.5 },
    { "nombre": "San Carlos de Guaroa", "horasSol": 5.5 },
    { "nombre": "San Juan de Arama", "horasSol": 5.5 },
    { "nombre": "San Juanito", "horasSol": 5.5 },
    { "nombre": "San Martín", "horasSol": 5.5 },
    { "nombre": "Villavicencio", "horasSol": 5.5 },
    { "nombre": "Vista Hermosa", "horasSol": 5.5 }
  ]
},

    {
  "departamento": "Nariño",
  "municipios": [
    { "nombre": "Albán", "horasSol": 5 },
    { "nombre": "Aldana", "horasSol": 5 },
    { "nombre": "Ancuyá", "horasSol": 5 },
    { "nombre": "Barbacoas", "horasSol": 5 },
    { "nombre": "Colón", "horasSol": 5 },
    { "nombre": "Consaca", "horasSol": 5 },
    { "nombre": "Contadero", "horasSol": 5 },
    { "nombre": "Córdoba", "horasSol": 5 },
    { "nombre": "Cuaspud", "horasSol": 5 },
    { "nombre": "Cumbal", "horasSol": 5 },
    { "nombre": "Cumbitara", "horasSol": 5 },
    { "nombre": "El Charco", "horasSol": 5 },
    { "nombre": "El Peñol", "horasSol": 5 },
    { "nombre": "El Rosario", "horasSol": 5 },
    { "nombre": "El Tablón de Gómez", "horasSol": 5 },
    { "nombre": "El Tambo", "horasSol": 5 },
    { "nombre": "Francisco Pizarro", "horasSol": 5 },
    { "nombre": "Funes", "horasSol": 5 },
    { "nombre": "Guachucal", "horasSol": 5 },
    { "nombre": "Guaitarilla", "horasSol": 5 },
    { "nombre": "Gualmatán", "horasSol": 5 },
    { "nombre": "Iles", "horasSol": 5 },
    { "nombre": "Imués", "horasSol": 5 },
    { "nombre": "Ipiales", "horasSol": 5 },
    { "nombre": "La Cruz", "horasSol": 5 },
    { "nombre": "La Florida", "horasSol": 5 },
    { "nombre": "La Llanada", "horasSol": 5 },
    { "nombre": "La Tola", "horasSol": 5 },
    { "nombre": "La Unión", "horasSol": 5 },
    { "nombre": "Leiva", "horasSol": 5 },
    { "nombre": "Linares", "horasSol": 5 },
    { "nombre": "Los Andes", "horasSol": 5 },
    { "nombre": "Magüí", "horasSol": 5 },
    { "nombre": "Mallama", "horasSol": 5 },
    { "nombre": "Mosquera", "horasSol": 5 },
    { "nombre": "Nariño", "horasSol": 5 },
    { "nombre": "Olaya Herrera", "horasSol": 5 },
    { "nombre": "Ospina", "horasSol": 5 },
    { "nombre": "Pasto", "horasSol": 5 },
    { "nombre": "Policarpa", "horasSol": 5 },
    { "nombre": "Potosí", "horasSol": 5 },
    { "nombre": "Providencia", "horasSol": 5 },
    { "nombre": "Puerres", "horasSol": 5 },
    { "nombre": "Pupiales", "horasSol": 5 },
    { "nombre": "Ricaurte", "horasSol": 5 },
    { "nombre": "Roberto Payán", "horasSol": 5 },
    { "nombre": "Samaniego", "horasSol": 5 },
    { "nombre": "San Bernardo", "horasSol": 5 },
    { "nombre": "San Lorenzo", "horasSol": 5 },
    { "nombre": "San Pablo", "horasSol": 5 },
    { "nombre": "San Pedro de Cartago", "horasSol": 5 },
    { "nombre": "Santa Bárbara", "horasSol": 5 },
    { "nombre": "Santacruz", "horasSol": 5 },
    { "nombre": "Sapuyes", "horasSol": 5 },
    { "nombre": "Sandoná", "horasSol": 5 },
    { "nombre": "Taminango", "horasSol": 5 },
    { "nombre": "Tangua", "horasSol": 5 },
    { "nombre": "Túquerres", "horasSol": 5 },
    { "nombre": "Yacuanquer", "horasSol": 5 }
  ]
},

     {
  "departamento": "Norte de Santander",
  "municipios": [
    { "nombre": "Arboledas", "horasSol": 6 },
    { "nombre": "Cácota", "horasSol": 6 },
    { "nombre": "Cucutilla", "horasSol": 6 },
    { "nombre": "El Tarra", "horasSol": 6 },
    { "nombre": "El Zulia", "horasSol": 6 },
    { "nombre": "Gramalote", "horasSol": 6 },
    { "nombre": "Mutiscua", "horasSol": 6 },
    { "nombre": "Ocaña", "horasSol": 6 },
    { "nombre": "Puerto Santander", "horasSol": 6 },
    { "nombre": "Salazar", "horasSol": 6 },
    { "nombre": "Silos", "horasSol": 6 },
    { "nombre": "Teorama", "horasSol": 6 },
    { "nombre": "Toledo", "horasSol": 6 }
  ]
},

    {
  "departamento": "Putumayo",
  "municipios": [
    { "nombre": "Colón", "horasSol": 4 },
    { "nombre": "Leguízamo", "horasSol": 4 },
    { "nombre": "Mocoa", "horasSol": 4 },
    { "nombre": "Orito", "horasSol": 4 },
    { "nombre": "Puerto Caicedo", "horasSol": 4 },
    { "nombre": "Puerto Guzmán", "horasSol": 4 },
    { "nombre": "San Francisco", "horasSol": 4 },
    { "nombre": "San Miguel", "horasSol": 4 },
    { "nombre": "Santiago", "horasSol": 4 },
    { "nombre": "Sibundoy", "horasSol": 4 },
    { "nombre": "Valle de Guamez", "horasSol": 4 }
  ]
},

    {
  "departamento": "Quindío",
  "municipios": [
    { "nombre": "Armenia", "horasSol": 4.3 },
    { "nombre": "Buenavista", "horasSol": 4.3 },
    { "nombre": "Circasia", "horasSol": 4.3 },
    { "nombre": "Córdoba", "horasSol": 4.3 },
    { "nombre": "Filandia", "horasSol": 4.3 },
    { "nombre": "La Tebaida", "horasSol": 4.3 },
    { "nombre": "Montenegro", "horasSol": 4.3 },
    { "nombre": "Pijao", "horasSol": 4.3 },
    { "nombre": "Quimbaya", "horasSol": 4.3 },
    { "nombre": "Salento", "horasSol": 4.3 }
  ]
},

   {
  "departamento": "Risaralda",
  "municipios": [
    { "nombre": "Apía", "horasSol": 4.4 },
    { "nombre": "Balboa", "horasSol": 4.4 },
    { "nombre": "Belén de Umbría", "horasSol": 4.4 },
    { "nombre": "Dosquebradas", "horasSol": 4.4 },
    { "nombre": "Guática", "horasSol": 4.4 },
    { "nombre": "La Celia", "horasSol": 4.4 },
    { "nombre": "La Virginia", "horasSol": 4.4 },
    { "nombre": "Marsella", "horasSol": 4.4 },
    { "nombre": "Mistrató", "horasSol": 4.4 },
    { "nombre": "Pereira", "horasSol": 4.4 },
    { "nombre": "Pueblo Rico", "horasSol": 4.4 },
    { "nombre": "Quinchía", "horasSol": 4.4 },
    { "nombre": "Santa Rosa de Cabal", "horasSol": 4.4 },
    { "nombre": "Santuario", "horasSol": 4.4 }
  ]
},

    {
  "departamento": "Archipiélago de San Andrés, Providencia y Santa Catalina",
  "municipios": [
    { "nombre": "San Andrés", "horasSol": 6.5 },
    { "nombre": "Providencia", "horasSol": 6.5 }
  ]
},

    {
  "departamento": "Santander",
  "municipios": [
    { "nombre": "Aguada", "horasSol": 5.5 },
    { "nombre": "Albania", "horasSol": 5.5 },
    { "nombre": "Aratoca", "horasSol": 5.5 },
    { "nombre": "Barbosa", "horasSol": 5.5 },
    { "nombre": "Barichara", "horasSol": 5.5 },
    { "nombre": "Barrancabermeja", "horasSol": 5.5 },
    { "nombre": "Betulia", "horasSol": 5.5 },
    { "nombre": "Bolívar", "horasSol": 5.5 },
    { "nombre": "Bucaramanga", "horasSol": 5.5 },
    { "nombre": "Cabrera", "horasSol": 5.5 },
    { "nombre": "California", "horasSol": 5.5 },
    { "nombre": "Capitanejo", "horasSol": 5.5 },
    { "nombre": "Carcasí", "horasSol": 5.5 },
    { "nombre": "Cepitá", "horasSol": 5.5 },
    { "nombre": "Cerrito", "horasSol": 5.5 },
    { "nombre": "Charalá", "horasSol": 5.5 },
    { "nombre": "Charta", "horasSol": 5.5 },
    { "nombre": "Chima", "horasSol": 5.5 },
    { "nombre": "Chipatá", "horasSol": 5.5 },
    { "nombre": "Cimitarra", "horasSol": 5.5 },
    { "nombre": "Concepción", "horasSol": 5.5 },
    { "nombre": "Confines", "horasSol": 5.5 },
    { "nombre": "Contratación", "horasSol": 5.5 },
    { "nombre": "Coromoro", "horasSol": 5.5 },
    { "nombre": "Curití", "horasSol": 5.5 },
    { "nombre": "El Carmen de Chucurí", "horasSol": 5.5 },
    { "nombre": "El Guacamayo", "horasSol": 5.5 },
    { "nombre": "El Peñón", "horasSol": 5.5 },
    { "nombre": "El Playón", "horasSol": 5.5 },
    { "nombre": "Encino", "horasSol": 5.5 },
    { "nombre": "Enciso", "horasSol": 5.5 },
    { "nombre": "Florián", "horasSol": 5.5 },
    { "nombre": "Floridablanca", "horasSol": 5.5 },
    { "nombre": "Galán", "horasSol": 5.5 },
    { "nombre": "Gámbita", "horasSol": 5.5 },
    { "nombre": "Girón", "horasSol": 5.5 },
    { "nombre": "Guaca", "horasSol": 5.5 },
    { "nombre": "Guadalupe", "horasSol": 5.5 },
    { "nombre": "Guapotá", "horasSol": 5.5 },
    { "nombre": "Guavatá", "horasSol": 5.5 },
    { "nombre": "Güepsa", "horasSol": 5.5 },
    { "nombre": "Hato", "horasSol": 5.5 },
    { "nombre": "Jesús María", "horasSol": 5.5 },
    { "nombre": "Jordán", "horasSol": 5.5 },
    { "nombre": "La Belleza", "horasSol": 5.5 },
    { "nombre": "La Paz", "horasSol": 5.5 },
    { "nombre": "Landázuri", "horasSol": 5.5 },
    { "nombre": "Lebrija", "horasSol": 5.5 },
    { "nombre": "Los Santos", "horasSol": 5.5 },
    { "nombre": "Macaravita", "horasSol": 5.5 },
    { "nombre": "Málaga", "horasSol": 5.5 },
    { "nombre": "Matanza", "horasSol": 5.5 },
    { "nombre": "Mogotes", "horasSol": 5.5 },
    { "nombre": "Molagavita", "horasSol": 5.5 },
    { "nombre": "Ocamonte", "horasSol": 5.5 },
    { "nombre": "Oiba", "horasSol": 5.5 },
    { "nombre": "Onzaga", "horasSol": 5.5 },
    { "nombre": "Palmar", "horasSol": 5.5 },
    { "nombre": "Palmas del Socorro", "horasSol": 5.5 },
    { "nombre": "Páramo", "horasSol": 5.5 },
    { "nombre": "Piedecuesta", "horasSol": 5.5 },
    { "nombre": "Pinchote", "horasSol": 5.5 },
    { "nombre": "Puente Nacional", "horasSol": 5.5 },
    { "nombre": "Puerto Parra", "horasSol": 5.5 },
    { "nombre": "Puerto Wilches", "horasSol": 5.5 },
    { "nombre": "Rionegro", "horasSol": 5.5 },
    { "nombre": "Sabana de Torres", "horasSol": 5.5 },
    { "nombre": "San Andrés", "horasSol": 5.5 },
    { "nombre": "San Benito", "horasSol": 5.5 },
    { "nombre": "San Gil", "horasSol": 5.5 },
    { "nombre": "San Joaquín", "horasSol": 5.5 },
    { "nombre": "San José de Miranda", "horasSol": 5.5 },
    { "nombre": "San Miguel", "horasSol": 5.5 },
    { "nombre": "San Vicente de Chucurí", "horasSol": 5.5 },
    { "nombre": "Santa Bárbara", "horasSol": 5.5 },
    { "nombre": "Santa Helena del Opón", "horasSol": 5.5 },
    { "nombre": "Simacota", "horasSol": 5.5 },
    { "nombre": "Socorro", "horasSol": 5.5 },
    { "nombre": "Suaita", "horasSol": 5.5 },
    { "nombre": "Sucre", "horasSol": 5.5 },
    { "nombre": "Suratá", "horasSol": 5.5 },
    { "nombre": "Tona", "horasSol": 5.5 },
    { "nombre": "Valle de San José", "horasSol": 5.5 },
    { "nombre": "Vélez", "horasSol": 5.5 },
    { "nombre": "Vetas", "horasSol": 5.5 },
    { "nombre": "Villanueva", "horasSol": 5.5 },
    { "nombre": "Zapatoca", "horasSol": 5.5 }
  ]
},

     {
  "departamento": "Sucre",
  "municipios": [
    { "nombre": "Buenavista", "horasSol": 5.2 },
    { "nombre": "Caimito", "horasSol": 5.2 },
    { "nombre": "Chalán", "horasSol": 5.2 },
    { "nombre": "Coloso", "horasSol": 5.2 },
    { "nombre": "Coveñas", "horasSol": 5.2 },
    { "nombre": "El Roble", "horasSol": 5.2 },
    { "nombre": "Galeras", "horasSol": 5.2 },
    { "nombre": "Guaranda", "horasSol": 5.2 },
    { "nombre": "La Unión", "horasSol": 5.2 },
    { "nombre": "Los Palmitos", "horasSol": 5.2 },
    { "nombre": "Majagual", "horasSol": 5.2 },
    { "nombre": "Morroa", "horasSol": 5.2 },
    { "nombre": "Ovejas", "horasSol": 5.2 },
    { "nombre": "Palmito", "horasSol": 5.2 },
    { "nombre": "San Benito Abad", "horasSol": 5.2 },
    { "nombre": "San Juan de Betulia", "horasSol": 5.2 },
    { "nombre": "San Luis de Sincé", "horasSol": 5.2 },
    { "nombre": "San Marcos", "horasSol": 5.2 },
    { "nombre": "San Onofre", "horasSol": 5.2 },
    { "nombre": "San Pedro", "horasSol": 5.2 },
    { "nombre": "Santiago de Tolú", "horasSol": 5.2 },
    { "nombre": "Sincelejo", "horasSol": 5.2 },
    { "nombre": "Sucre", "horasSol": 5.2 },
    { "nombre": "Tolú Viejo", "horasSol": 5.2 }
  ]
},

    {
  "departamento": "Tolima",
  "municipios": [
    { "nombre": "Alpujarra", "horasSol": 5.5 },
    { "nombre": "Alvarado", "horasSol": 5.5 },
    { "nombre": "Ambalema", "horasSol": 5.5 },
    { "nombre": "Armero", "horasSol": 5.5 },
    { "nombre": "Ataco", "horasSol": 5.5 },
    { "nombre": "Cajamarca", "horasSol": 5.5 },
    { "nombre": "Carmen de Apicala", "horasSol": 5.5 },
    { "nombre": "Chaparral", "horasSol": 5.5 },
    { "nombre": "Coello", "horasSol": 5.5 },
    { "nombre": "Coyaima", "horasSol": 5.5 },
    { "nombre": "Cunday", "horasSol": 5.5 },
    { "nombre": "Dolores", "horasSol": 5.5 },
    { "nombre": "Espinal", "horasSol": 5.5 },
    { "nombre": "Falan", "horasSol": 5.5 },
    { "nombre": "Flandes", "horasSol": 5.5 },
    { "nombre": "Fresno", "horasSol": 5.5 },
    { "nombre": "Guamo", "horasSol": 5.5 },
    { "nombre": "Herveo", "horasSol": 5.5 },
    { "nombre": "Honda", "horasSol": 5.5 },
    { "nombre": "Icononzo", "horasSol": 5.5 },
    { "nombre": "Mariquita", "horasSol": 5.5 },
    { "nombre": "Melgar", "horasSol": 5.5 },
    { "nombre": "Murillo", "horasSol": 5.5 },
    { "nombre": "Natagaima", "horasSol": 5.5 },
    { "nombre": "Ortega", "horasSol": 5.5 },
    { "nombre": "Palocabildo", "horasSol": 5.5 },
    { "nombre": "Piedras", "horasSol": 5.5 },
    { "nombre": "Planadas", "horasSol": 5.5 },
    { "nombre": "Prado", "horasSol": 5.5 },
    { "nombre": "Purificación", "horasSol": 5.5 },
    { "nombre": "Rio Blanco", "horasSol": 5.5 },
    { "nombre": "Roncesvalles", "horasSol": 5.5 },
    { "nombre": "Rovira", "horasSol": 5.5 },
    { "nombre": "Saldaña", "horasSol": 5.5 },
    { "nombre": "San Antonio", "horasSol": 5.5 },
    { "nombre": "San Luis", "horasSol": 5.5 },
    { "nombre": "Santa Isabel", "horasSol": 5.5 },
    { "nombre": "Valle de San Juan", "horasSol": 5.5 },
    { "nombre": "Venadillo", "horasSol": 5.5 },
    { "nombre": "Villahermosa", "horasSol": 5.5 },
    { "nombre": "Villarrica", "horasSol": 5.5 }
  ]
},

     {
  "departamento": "Valle del Cauca",
  "municipios": [
    { "nombre": "Alcalá", "horasSol": 5 },
    { "nombre": "Andalucía", "horasSol": 5 },
    { "nombre": "Ansermanuevo", "horasSol": 5 },
    { "nombre": "Argelia", "horasSol": 5 },
    { "nombre": "Bolívar", "horasSol": 5 },
    { "nombre": "Buenaventura", "horasSol": 5 },
    { "nombre": "Buga", "horasSol": 5 },
    { "nombre": "Bugalagrande", "horasSol": 5 },
    { "nombre": "Caicedonia", "horasSol": 5 },
    { "nombre": "Calima", "horasSol": 5 },
    { "nombre": "Candelaria", "horasSol": 5 },
    { "nombre": "Cartago", "horasSol": 5 },
    { "nombre": "Dagua", "horasSol": 5 },
    { "nombre": "El Águila", "horasSol": 5 },
    { "nombre": "El Cairo", "horasSol": 5 },
    { "nombre": "El Cerrito", "horasSol": 5 },
    { "nombre": "El Dovio", "horasSol": 5 },
    { "nombre": "Florida", "horasSol": 5 },
    { "nombre": "Ginebra", "horasSol": 5 },
    { "nombre": "Guacarí", "horasSol": 5 },
    { "nombre": "Jamundí", "horasSol": 5 },
    { "nombre": "La Cumbre", "horasSol": 5 },
    { "nombre": "La Unión", "horasSol": 5 },
    { "nombre": "La Victoria", "horasSol": 5 },
    { "nombre": "Obando", "horasSol": 5 },
    { "nombre": "Palmira", "horasSol": 5 },
    { "nombre": "Pradera", "horasSol": 5 },
    { "nombre": "Restrepo", "horasSol": 5 },
    { "nombre": "Riofrío", "horasSol": 5 },
    { "nombre": "Roldanillo", "horasSol": 5 },
    { "nombre": "San Pedro", "horasSol": 5 },
    { "nombre": "Sevilla", "horasSol": 5 },
    { "nombre": "Toro", "horasSol": 5 },
    { "nombre": "Trujillo", "horasSol": 5 },
    { "nombre": "Tuluá", "horasSol": 5 },
    { "nombre": "Ulloa", "horasSol": 5 },
    { "nombre": "Versalles", "horasSol": 5 },
    { "nombre": "Vijes", "horasSol": 5 },
    { "nombre": "Yotoco", "horasSol": 5 },
    { "nombre": "Yumbo", "horasSol": 5 },
    { "nombre": "Zarzal", "horasSol": 5 }
  ]
},
   {
  "departamento": "Bogotá D.C.",
  "municipios": [
    { "nombre": "Bogotá D.C.", "horasSol": 4.0 }
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
    const municipio = document.getElementById('municipio').value;
    const deptoInfo = data.find(d => d.departamento === departamento);
    const municipioInfo = deptoInfo?.municipios.find(m => m.nombre === municipio);
    const horasSol = municipioInfo?.horasSol || 4.5;

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



