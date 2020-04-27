import React, { Fragment } from 'react';

const Markets = ({ futures, stockMap }) => {

  const tkArray = [];
  const indices = [];
  const metals = [];
  const currencies = [];
  const bonds = [];
  const energy = [];

  for (let tk in stockMap.nodes) {
    tkArray.push({ name: tk, value: stockMap.nodes[tk] });
  }

  for(let ind in futures) {
    switch (ind) {
      case 'YM':
      case 'ES':  
      case 'NQ':
      case 'DY': 
      case 'ER2':
      case 'EX': 
      case 'VX': 
      case 'NKD': 
        indices.push(futures[ind]);
        break;
      case 'GC':
      case 'HG':  
      case 'HC':
      case 'PA':
      case 'PL':
      case 'SI':        
        metals.push(futures[ind]);  
        break;
      case '6A':
      case '6B':
      case '6C':
      case '6E':
      case '6J':
      case '6N':
      case '6S': 
      case 'DX':          
        currencies.push(futures[ind]);
        break; 
      case 'ZT':   
      case 'ZB':
      case 'ZF':
      case 'ZN':    
        bonds.push(futures[ind]);
        break;  
      case 'CL':
      case 'HO':
      case 'NG':
      case 'QA':
      case 'ZK':        
        energy.push(futures[ind]);
        break;    
      default:
        break;
    }
  }
  currencies.reverse();
  // ordening by relevance
  if (indices.length > 0) {
    const dax = indices[0];
    const russel_2000 = indices[1];
    const euro_500 = indices[3];
    indices[0] = indices[7];
    indices[7] = dax;
    indices[1] = indices[5];
    indices[5] = russel_2000;
    indices[3] = indices[6];
    indices[6] = euro_500;
  }
  if (metals.length > 0) {
    const metal_temp = metals[1];
    metals[1] = metals[4];
    metals[4] = metal_temp;
  }
  if (bonds.length > 0) {
    const bond_temp = bonds[1];
    bonds[1] = bonds[2];
    bonds[2] = bond_temp;
    bonds.reverse();
  }
  if (energy.length > 0) {
    const energy_temp = energy[1];
    energy[1] = energy[3];
    energy[3] = energy_temp;
  }

  const futureCard = ({ key, index }) => {
    return (
      <div className={
        key.change > 0 ? 'card col-1 bg-success m-1 card-size' : 'card col-1 bg-danger m-1 card-size'}
        key={index}>
        <div className="card-body p-2 justify-content-center flex-column">
          <b className="card-title text-light">{key.label}</b>
          <h3 className="card-subtitle text-light">{(key.last).toFixed(2)}</h3>
          <div className="d-flex flex-column">
            <div className="card-subtitle text-light font-13 d-flex m-0">
              <strong>Change {key.change}%</strong>
            </div>
            <div className="card-subtitle text-light font-11 d-flex m-0"> 
              H {(key.high).toFixed(2)}
            </div>
            <div className="card-subtitle text-light font-11 d-flex m-0"> 
              L {(key.low).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Markets 
  const Healtcare = [];
  const Technology = [];
  const Financial = [];
  const Basic_Materials = [];
  const Consumer_Goods = [];

  if (tkArray.length > 0) {
    for (let ticker in tkArray ) {
      const name = tkArray[ticker].name;
      switch(name) {
        case 'JNJ':
        case 'UNH':
        case 'PFE':
        case 'ABT':
        case 'TMO':
        case 'BDX':
        case 'VRTX':
        case 'GILD':
        case 'LLY':
          Healtcare.push(tkArray[ticker]);
          break;
        case 'MSFT':
        case 'GOOGL':
        case 'INTC':
        case 'ADBE': 
        case 'FB':
        case 'TWTR':
        case 'NVDA':   
        case 'AMD':        
          Technology.push(tkArray[ticker]); 
          break; 
        case 'PYPL':
        case 'NDAQ':
        case 'BLK':
        case 'MKTX':
        case 'PJT':        
          Financial.push(tkArray[ticker]);
          break;
        case 'KGC':
        case 'NEM':
        case 'PAAS':
        case 'AEM':
        case 'RGLD':
        case 'IAU':        
          Basic_Materials.push(tkArray[ticker]); 
          break;
        case 'AAPL':
        case 'NKE':
        case 'ATVI':
        case 'STZ':           
          Consumer_Goods.push(tkArray[ticker]);
          break;
        default:
          break;
      }
    }
  }

  const marketCard = ({ data }) => {
    return data.map((ticker, index) => {
      return (
        <Fragment key={index}>
          <div>
            <div className={
              ticker.value > 0 ? 'card col-1 bg-success m-1 card-size' : 'card col-1 bg-danger m-1 card-size'}
              key={index}>
                <div className="card-body p-2 justify-content-center d-flex flex-row justify-content-between align-items-center">
                  <h2 className="text-light">{ticker.name}</h2>
                  <b className="text-light">{(ticker.value).toFixed(2)} % </b>
                </div>
              </div>
            </div>
        </Fragment>
      )})
  }

  const header_title = ({ title }) => {
    return (
      <div className="breadcrumb mb-0"><h2 className="pl-2 ml-4">{title}</h2></div>
    );
  }

  return(
    <Fragment>
      <h1 className="p-2 ml-4">Futures</h1>
        {header_title({title:'Indices'})}
        <div className="d-flex flex-row justify-content-start align-items-start flex-wrap p-2 ml-4">
          {
            indices.map((key, index) => {
              return futureCard({ key, index });
            }) 
          }
        </div>  
        {header_title({title:'Metals'})}
        <div className="d-flex flex-row justify-content-start align-items-start flex-wrap p-2 ml-4">
          {
            metals.map((key, index) => {
              return futureCard({ key, index });
            }) 
          }
        </div> 
        {header_title({title:'Currencies'})}
        <div className="d-flex flex-row justify-content-start align-items-start flex-wrap p-2 ml-4">
          {
            currencies.map((key, index) => {
              return futureCard({ key, index });
            }) 
          }
        </div> 
        {header_title({title:'Bonds'})}
        <div className="d-flex flex-row justify-content-start align-items-start flex-wrap p-2 ml-4">
          {
            bonds.map((key, index) => {
              return futureCard({ key, index });
            }) 
          }
        </div>  
        {header_title({title:'Energy'})}
        <div className="d-flex flex-row justify-content-start align-items-start flex-wrap p-2 ml-4">
          {
            energy.map((key, index) => {
              return futureCard({ key, index });
            }) 
          }
        </div> 
      <hr></hr>  
      <h1 className="p-2 ml-4">Stocks</h1>
        {header_title({title:'Healtcare'})}
        <div className="d-flex flex-row justify-content-start align-items-start flex-wrap p-2 ml-4">
          { Healtcare.length > 0 ? marketCard({data: Healtcare}) : '' }
        </div>
        {header_title({title:'Technology'})}
        <div className="d-flex flex-row justify-content-start align-items-start flex-wrap p-2 ml-4">
          { Technology.length > 0 ? marketCard({data: Technology}) : '' }
        </div>
        {header_title({title:'Consumer Good'})}
        <div className="d-flex flex-row justify-content-start align-items-start flex-wrap p-2 ml-4">
          { Consumer_Goods.length > 0 ? marketCard({data: Consumer_Goods}) : '' }
        </div>
        {header_title({title:'Financial'})}
        <div className="d-flex flex-row justify-content-start align-items-start flex-wrap p-2 ml-4">
          { Financial.length > 0 ? marketCard({data: Financial}) : '' }
        </div>
        {header_title({title:'Basic Materials'})}
        <div className="d-flex flex-row justify-content-start align-items-start flex-wrap p-2 ml-4">
          { Basic_Materials.length > 0 ? marketCard({data: Basic_Materials}) : '' }
        </div>
    </Fragment>
  )
}

export default Markets;
