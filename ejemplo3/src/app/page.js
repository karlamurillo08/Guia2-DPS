"use client";
import { useState } from "react";
import styles from "./page.module.css";
export default function Home() {
const [numero1, setNumero1] = useState('');
const [numero2, setNumero2] = useState('');
const [resultado, setResultado] = useState(null);
const sumar = () => {
const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
setResultado(`Resultado de la suma: ${resultadoSuma}`);
};
const restar = () => {
const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
setResultado(`Resultado de la resta: ${resultadoResta}`);
};
const multiplicacion = () => {
const resultadoMultiplicacion = parseFloat(numero1) * parseFloat(numero2);
setResultado(`Resultado de la multiplicacion: ${resultadoMultiplicacion}`);
};
const division = () => {
const resultadoDivision = parseFloat(numero1) / parseFloat(numero2);
setResultado(`Resultado de la division: ${resultadoDivision.toFixed(2)}`);
};
const potenciacion = () => {
const resultadoPotenciacion = Math.pow(parseFloat(numero1), parseFloat(numero2));
setResultado(`Resultado de la potencia: ${resultadoPotenciacion.toFixed(2)}`);
};
const raices = () => {
const resultadoRaices = Math.pow(parseFloat(numero1), 1 / parseFloat(numero2));
setResultado(`Resultado de la raiz: ${resultadoRaices.toFixed(2)}`);
};
const limpiar = () => {
    setNumero1('');
    setNumero2('');
    setResultado('');
    };

return (
<main className={styles.main}>
<div className={styles.calculadora}>
<div className={styles.numeros}>
<label className={styles.text}>Número 1:</label>
<input className={styles.inputnum} type="number"
value={numero1} onChange={(e) => setNumero1(e.target.value)} />
</div>
<div className={styles.numeros}>
<label className={styles.text} >Número 2:</label>
<input className={styles.inputnum} type="number"
value={numero2} onChange={(e) => setNumero2(e.target.value)} />
</div>
<div>
<button className={styles.button}
onClick={sumar}>Sumar</button>
<button className={styles.button}
onClick={restar}>Restar</button>
<button className={styles.button}
onClick={multiplicacion}>Multiplicacion</button>
<button className={styles.button}
onClick={division}>Division</button>
<button className={styles.button}
onClick={potenciacion}>Potencia</button>
<button className={styles.button}
onClick={raices}>Raiz cuadrada</button>

<button className={styles.buttonlimpiar}
onClick={limpiar}>Reiniciar calculadora</button>
</div>
{resultado && <div
className={styles.resultado}>{resultado}</div>}
</div>
</main>
);
}

