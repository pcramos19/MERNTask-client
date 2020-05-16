import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyectos from '../proyectos/ListadoProyectos';

const Sidebar = () => {
    return ( 
        <aside>
            {/* <h1>Man<span>Tasks</span></h1> */}
            <img src="../../../logo_transparent.png" alt=""/>

            <NuevoProyecto />

            <div className="proyectos">
                <h2>Tus Proyectos</h2>
                <ListadoProyectos />
            </div>
        </aside>
     );
}
 
export default Sidebar;