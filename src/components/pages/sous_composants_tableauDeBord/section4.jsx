import React, {useState, useEffect} from 'react'
import { Grid, Header, Segment } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBuilding
} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';



export default function (){

  const [transporteurs, setTransporteurs] = useState([]);
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://appkwilu2.herokuapp.com/clients",
    }).then((res) => {
      setTransporteurs(res.data);
      // setLoading(false);
    });
  }, [setTransporteurs]);

  return (<Grid.Column>
        <Segment style={{ height: "8rem", padding: "1rem" }}>
          <div className='Segment4'>
            <FontAwesomeIcon
              className='Icon3'
              icon={faBuilding}
            /><Header style={{marginLeft:'60px', marginTop:'1px', fontFamily: 'Prata-serif'}}>{transporteurs.length}</Header>
          </div>
          <strong className='LegendMarchandises'>Transporteurs</strong>
        </Segment>
      </Grid.Column>
)
}