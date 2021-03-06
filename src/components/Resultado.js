import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Mensaje = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizaacion = styled.div`
    text-align: center;
    padding: 1rem;
    border: 1px solid #26c6da;
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative; 
`

const TextoCotizacion = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;
const Resultado = ({cotizacion}) => {

    if (cotizacion === 0 ) return  null;

    return(
        (cotizacion === 0) 
            ? <Mensaje>Elije marca, año y tipo de seguro</Mensaje> 
            :
                (<ResultadoCotizaacion>
                    <TransitionGroup
                        component= "p"
                        className= "resultado"
                    >
                        <CSSTransition
                            classNames= "resultado"
                            key={cotizacion}
                            timeout= {{enter: 500, exit: 500}}
                        >
                            <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion> 
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotizaacion>
                )
    )
}

export default Resultado;
