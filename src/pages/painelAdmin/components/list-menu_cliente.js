import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListSubheader from '@material-ui/core/ListSubheader';
import Cookies from 'js-cookie';
import {faHome, faNewspaper} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const mainListItems = (
  <div>
    <ListItem button component="a"  href="/minhaconta" >
      <ListItemIcon>
      <FontAwesomeIcon icon={faHome} size="2x"/>
      </ListItemIcon>
      <ListItemText primary="Meus Dados" />
    </ListItem>

    <ListItem button component="a"  href="/minhasnoticias" >
      <ListItemIcon>
      <FontAwesomeIcon icon={faNewspaper} size="2x"/>
      </ListItemIcon>
      <ListItemText primary="Notícias" />
    </ListItem>
  
  </div>
);


function confirmSair  ()  {
  Cookies.set('token', undefined);
  window.location.href = "/login"
 

}

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Opções</ListSubheader>
    <ListItem button onClick={ confirmSair}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItem>
  </div>
);

