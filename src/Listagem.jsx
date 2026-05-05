import { useState } from "react";
import './Listagem.css'
import logo from './assets/logo1.png'

export default function Listagem(){
    
    return (
        <>
        <main>
        <img src= {logo} alt="logo" id='logo' />
        
        <table>
        <tr>
            <td>Nome</td>
            <td>Sala</td>
            <td>Agenda</td>
            <td>Editar</td>
            <td>Excluir</td>
        </tr>

        <tr>
            <td>Dr. Fernando</td>
            <td>5</td>
            <td>Livre</td>
            <td>✏️</td>
            <td>🗑️</td>
        </tr>

        <tr>
            <td>Dr. Roberto</td>
            <td>8</td>
            <td>Ocupada</td>
            <td>✏️</td>
            <td>🗑️</td>
        </tr>

        <tr>
            <td>Dra. Deolane</td>
            <td>10</td>
            <td>Livre</td>
            <td>✏️</td>
            <td>🗑️</td>
        </tr>

        <tr>
            <td>Dr. Rafael</td>
            <td>12</td>
            <td>Livre</td>
            <td>✏️</td>
            <td>🗑️</td>
        </tr>


        </table>

        </main>
        </>
    )
}