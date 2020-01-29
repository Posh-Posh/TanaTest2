import React from 'react';
import './App.css';

function App({data}) {
  
  const list = data.map( (info) => {

    const contentKeys = Object.keys(info.ressources);
    const elements = contentKeys.map((t) => 
      info.ressources[t].map((e) => (<li key={t}>{t} : <span className="version">{e}</span>,</li>))
    );
    
  return(elements);
  })

  return (
    <div className="app">
      <h1>Résultats détaillés</h1>   
        {data.map( (info, i) => {

          return (
            <main key={i}>
              <h2><span>1</span> - {info.name}</h2>
              <p className="explanation">{info.explanation}</p>                 

              <ul className="ressources">
                {list}
              </ul> 

              {info.data.map( (elem, j) => {

                return (
                  <section key={j}>
                    <div className="rectangle">
                      <p>140 x 100</p>
                    </div>

                    <div className="frame">
                      <div className="header">
                        <p className="outer">{elem.outer}</p>
                        <div className="circle"></div>
                      </div>
                      <h3>Détails</h3>
                      <h4>Attributs ARIA : </h4>
                      <ul className="aria">
                        {elem.accessibleName == null ? (
                          <li>Nom accessible : <span className="detail">Non spécifié</span></li>
                        ) : (
                          <li>Nom accessible : <span className="detail">{elem.accessibleName}</span></li>
                        )}                      
                        
                        {elem.canBeReachedUsingKeyboardWith.length === 0 ? (
                          <li>Atteignable au clavier :<span className="detail"> Non</span></li>
                        ) : (
                          <li>Atteignable au clavier : <span className="detail">Oui</span></li>
                        )}

                        {elem.isNotVisibleDueTo = [] ? (
                          <li>Affiché : <span className="detail">Oui</span></li>
                        ) : (
                          <li>Affiché : <span className="detail">{elem.isNotVisibleDueTo}</span></li>
                        )}   
                      </ul>
                    </div>
                  </section>
                )
              })}              
            </main>
          )
        })
      }        
    </div>
  );
}

export default App;
