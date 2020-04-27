import React, { useState, useEffect, Fragment } from 'react';
import { Col } from 'reactstrap';
import ax from "axios";

import Markets from './Markets';

const Dashboard = props => {
  const [marketsData, setMarkets] = useState({});

  useEffect(() => {
    async function fetchData() {
      const call = await ax.get('https://zafn1x8304.execute-api.us-east-1.amazonaws.com/dev/lambda-dev-hello');
      setMarkets(call.data);
    }
    fetchData();
  },[])

  return(
    <Fragment>
      <Col>
        <Markets
        futures={marketsData && marketsData.ft_res ? marketsData.ft_res : {}}
        stockMap={marketsData && marketsData.stock_map_result ? marketsData.stock_map_result : {}}
        />
      </Col>
    </Fragment>
  )
}

export default Dashboard;
