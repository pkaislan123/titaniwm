import React from 'react';
import './styles.scss';
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider";
import { isMobile } from 'react-device-detect';

const TextoNivelado = (props) => {
    return (
        <div>
            <Grid
                container
                direction="row"
                item xs={12} sm={12} md={12} lg={12} xl={12}
                justifyContent="center"
                alignItems="center"
                style={{ paddingTop: 30, fontSize: 24, whiteSpace: 'pre-wrap' }}
            >

                <Grid item xs={12} sm={12} md={12} lg={1} xl={1} >
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={10} xl={10} >
                    <span> {props.texto} </span>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={1} xl={1} >
                </Grid>

            </Grid>
        </div>
    )
}

const Citacao = (props) => {
    return (
        <div>
            <Grid
                container
                direction="row"
                item xs={12} sm={12} md={12} lg={12} xl={12}

                style={{ fontWeight: 'bold', fontSize: isMobile ? 22 : 36, paddingTop: 30 }}
            >

                <Grid item xs={12} sm={12} md={12} lg={1} xl={1}
                >
                </Grid>

                <Grid
                    container
                    direction="column"
                    item xs={12} sm={12} md={12} lg={12} xl={12}
                    style={{ fontWeight: 'bold', fontSize: isMobile ? 22 : 36 }}
                >
                    <div style={{ backgroundColor: 'red', width: 5, height: '100%' }}>  </div>

                    <span style={{ paddingLeft: 20 }}> {props.texto} </span>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={1} xl={1} >
                </Grid>

            </Grid>
        </div>
    )
}


const Video = (props) => {
    return (
        <div>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                style={{ paddingTop: 30 }}
            >
                <iframe
                    width="100%"
                    height="532"
                    src={props.video1}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </Grid>
        </div>
    )
}




const BlogPage1 = (props) => {



    return (
        <div style={{ margin: '3%' }}>
            <Grid
                container
                direction="row"
                item xs={12} sm={12} md={12} lg={12} xl={12}
                justifyContent="center"
                alignItems="center"
                style={{ paddingTop: 40, paddingBottom: 40 }}
            >

                <Grid
                    container
                    direction="row"
                    item xs={12} sm={12} md={12} lg={12} xl={12}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={12} md={12} lg={2} xl={2} >
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={8} xl={8}

                    >
                        <span style={{ fontWeight: 'bold', fontSize: 52, lineHeight: '50px' }} > {props.titulo} </span>
                        <br></br>
                        <br></br>

                        <span style={{ fontSize: 22 }}> {props.subtitulo} </span>
                        <br></br> <br></br>


                        <span style={{ fontWeight: 'bold' }}> Por</span>
                        <span >{" " + props.redator}</span>

                        <span style={{ fontWeight: 'bold' }}> em </span>

                        <span > {props.data} {props.hora} </span>
                        <br></br>
                        <br></br>

                        <Divider style={{ color: 'black', backgroundColor: 'black' }} />


                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={2} xl={2} >
                    </Grid>

                </Grid>



                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >



                    {props.img1 && props.img1.length > 0 ?
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ paddingTop: 30 }}>
                            <img alt="img1" height={1000} width={1000}

                                src={props.img1}
                            />
                        </Grid>
                        : <div></div>}

                    {props.video1 && props.video1.length > 0 ?
                        <Video video1={props.video1} ></Video>
                        : <div></div>}


                    <TextoNivelado texto={props.texto1} ></TextoNivelado>

                    {props.citacao && props.citacao.length > 0 ?
                        <Citacao texto={props.citacao} ></Citacao>
                        : <div></div>}

                    <TextoNivelado texto={props.texto2} ></TextoNivelado>

                    {props.img2 && props.img2.img1 > 0 ?
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ paddingTop: 30 }}>
                            <img alt="img2"

                                src={props.img2}
                            />
                        </Grid>
                        : <div></div>}

                    {props.video2 && props.video2.length > 0 ?
                        <Video video1={props.video2} ></Video>
                        : <div></div>}

                    <TextoNivelado texto={props.texto3} ></TextoNivelado>

                    {props.img3 && props.img3.length > 0 ?
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ paddingTop: 30 }}>
                            <img alt="img3"


                                src={props.img3}
                            />
                        </Grid>
                        : <div></div>}

                    {props.video3 && props.video3.length > 0 ?
                        <Video video1={props.video3} ></Video>
                        : <div></div>}

                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
                </Grid>
            </Grid>
        </div>
    )
}
export default BlogPage1;