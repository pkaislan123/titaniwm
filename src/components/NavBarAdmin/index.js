import React, { useState, useEffect } from 'react';
import './styles.css';
import Grid from '@material-ui/core/Grid';

import {

    Link

} from "react-router-dom";
const NavBarAdmin = () => {


    const [width, setWidth] = useState(0);


    function checkDimenssoes() {
        var largura = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        setWidth(largura);

    }

    window.addEventListener('resize', function (event) {
        checkDimenssoes();
    });

    useEffect(() => {

        checkDimenssoes();

    }, []);


    const LogoExtendida = (props) => {
        return (
            <h1 >
                <span style={{ paddingLeft: 50, fontSize: 54, color: 'white' }}>LD Armazéns</span>

            </h1>
        )
    }

    const LogoRecolhida = (props) => {
        return (
            <h1>
                <span style={{ paddingLeft: 20, fontSize: 54, color: 'white' }}>LD</span>
                <p style={{ margin: 1 }} />
                <span style={{ paddingLeft: 20, fontSize: 54, color: 'white' }}>Armazéns</span>

            </h1>
        )
    }

    return (
        <div id='navbaradmin' style={{ backgroundColor: 'black' }}>
            <Grid
                container
                direction="row"
                item xs={12} sm={12} md={12} lg={12} xl={12}

            >
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >

                    <div style={{ paddingTop: 10 }} >
                        <Link className="a"

                            to={{
                                pathname: "/",

                            }}
                        >

                            {width > 0 ?
                                <LogoExtendida />
                                :
                                <LogoRecolhida />

                            }

                        </Link>
                    </div>
                </Grid>

                


            </Grid>

        </div >
    )
}
export default NavBarAdmin;
