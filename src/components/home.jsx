import React, {useEffect, useState} from "react";
import Libros from "./Libros";
import Racha from './racha';
//import Libro from "../data/libros";

function Home(){

    const currentlyReading = [
        {
            titulo: 'Reina Roja',
            imgPortada: 'https://m.media-amazon.com/images/I/71GC9IBeQjL._AC_UF894,1000_QL80_.jpg',
            start: '27/03/2024',
            end: null
        },
        {
            titulo: 'Los 7 hábitos de la gente altamente efectiva',
            imgPortada: 'https://m.media-amazon.com/images/I/71SBAzCBDLL._AC_UF1000,1000_QL80_.jpg',
            start: '22/03/2024',
            end: null            
        }
    ];

    const [quote, setQuote] = useState('');

    useEffect(()=>{

        

    }, []);
    
    return (
        <>
            <section id="currently-reading">
                <article>
                    <h2>Libros leyendo actualmente</h2>
                    <div className="libros-actuales">
                        {   
                            currentlyReading.map((book) => { 
                                return <Libros titulo={book.titulo} imgPortada={book.imgPortada} start={book.start} end={book.end} />
                            })
                        }
                    </div>
                    <Racha />
                </article>
            </section>
        </>
    );
}

export default Home;