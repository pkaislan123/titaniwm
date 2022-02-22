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
                style={{ paddingTop: 60, paddingBottom: 60 }}
            >

                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                        style={{ fontWeight: 'bold', fontSize: 52, lineHeight: '50px' }}
                    >
                        <span > {props.titulo} </span>
                    </Grid>
                    <br></br>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                        style={{ fontSize: 22 }}
                    >
                        <span > {props.subtitulo} </span>
                    </Grid>
                    <br></br> <br></br>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                        style={{ fontWeight: 'bold', fontSize: 22 }}
                    >
                        <span > Por {props.redator}</span>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                        style={{ fontSize: 22 }}
                    >
                        <span > {props.data} {props.hora} </span>
                    </Grid>
                    <br></br>
                    <Divider style={{ color: 'black', backgroundColor: 'black' }} />

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ paddingTop: 30 }}>
                        <img alt="img capa"

                            src={props.imgCapa}
                        />
                    </Grid>
                    {props.videoCapa && props.videoCapa.length > 0 ?
                        <Video video1={props.videoCapa} ></Video>
                        : <div></div>}


                    <TextoNivelado texto={props.texto1} ></TextoNivelado>

                    {props.video1 && props.video1.length > 0 ?
                        <Video video1={props.video1} ></Video>
                        : <div></div>}

                    <TextoNivelado texto={props.texto2} ></TextoNivelado>

                    <Citacao texto={props.citacao} ></Citacao>

                    <TextoNivelado texto={props.texto3} ></TextoNivelado>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{ paddingTop: 30 }}>
                        <img alt="img fim"


                            src={props.imgFim}
                        />
                    </Grid>

                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={3} xl={3} >
                </Grid>
            </Grid>
        </div>
    )
}
export default BlogPage1;