import styles from "./page.module.css";
const Equipos = ({ equipos }) => {
return (
<div className={styles.container__list}>
<h2 className={styles.title}>Equipos de Fútbol</h2>
{equipos.map((equipo) => (
<div key={equipo.id}>
<h3 className={styles.nameclub}>{equipo.nombre}</h3>
<ul >
{equipo.plantilla.map((jugador) => (

<li className={styles.container__list} key={jugador.id}>
<img src={jugador.imagen} alt={`Imagen de ${jugador.nombre}`} className={styles.jugador_imagen}/>
<strong>{jugador.nombre}</strong>
<p>Altura: {jugador.Altura}m <br></br> 
Peso: {jugador.Peso}Kg</p>

</li>
))}
</ul>
</div>
))}
</div>
);
};
export default function Home() {
  // Simula la obtención de datos desde tu JSON
const equiposData = [
  {"id": 1,
  "nombre": "Real Madrid",
  "plantilla":[
  {"id": 1,"imagen": "/images/hazard.jpg", "nombre":"Eden Hazard","Altura":"1.75","Peso":"74"},
  {"id": 2,"nombre":"Gonzalo García","Altura":"1.82","Peso":"74", "imagen": "/images/gonzalo.jpg"},
  {"id": 3,"nombre":"Karim Benzema","Altura":"1.85","Peso":"81", "imagen": "/images/benzema.jpg"}
  ]},
  {"id": 2,
  "nombre": "Barcelona",
  "plantilla":[
  {"id": 1,"nombre":"Marc-André ter Stegen","Altura":"1.75","Peso":"74", "imagen": "/images/terstegen.png"},
  {"id": 2,"nombre":"Iñigo Martinez","Altura":"1.82","Peso":"74", "imagen": "/images/martinez.jpg"},
  {"id": 3,"nombre":"Gavi","Altura":"1.85","Peso":"81", "imagen": "/images/gavi.jpg"}
  ]},
  {"id": 3,
    "nombre": "U.D Las Palmas",
    "plantilla":[
    {"id": 1,"nombre":"Alvaro Valles", "Altura":"1.75","Peso":"74", "imagen": "/images/valles.jpg"},
    {"id": 2,"nombre":"Marvin Park","Altura":"1.82","Peso":"74", "imagen": "/images/park.png"},
    {"id": 3,"nombre":"Juan Herzog","Altura":"1.85","Peso":"81", "imagen": "/images/herzog.jpg"}
    ]},
    {"id": 4,
    "nombre": "Atletico de Madrid",
    "plantilla":[
    {"id": 1,"nombre":"Antony Griezman","Altura":"1.75","Peso":"74", "imagen": "/images/griezman.jpg"},
    {"id": 2,"nombre":"Alvaro Morata","Altura":"1.82","Peso":"74", "imagen": "/images/morata.jpg"},
    {"id": 3,"nombre":"Marcos Llorente","Altura":"1.85","Peso":"81", "imagen": "/images/llorente.jpg"}
    ]}

  
  ];
  return (
  <main className={styles.main}>
  <div>
  <h1>Mi Aplicación de Fútbol</h1>
  <Equipos equipos={equiposData} />
  </div>
  </main>
  );
  }
