import React from "react";

export default function profile(props) {
  const styleObject = {
    backgroundColor: "pink",color:"blue" ,width:"70%"
  };

  return (
    <div>
      <div style={styleObject}>
        <div className="dada">
          <h1
            onClick={() => {
              props.alertt(props.name);
            }}
          >
            Nom:{props.name}
          </h1>
          <h1>lastname:{props.lastname}</h1>
          <img src={props.image} />
        </div>
        <h1> Formation </h1>
        <ul>
          <li>Baccalauréat science éxperimental 2014</li>
          <li>licence fondamental en informatique et télécommunication 2017</li>
          <li>Développement Web :front-end</li>
        </ul>
        <h1>Expérience </h1>
        <ul>
          <li>
            Un mois de stage a la poste tunisienne Béchri souk lahad kébélli
          </li>
          <li>Travaille à radio Elissa FM Gabés</li>
          <li>
            Fabrication d'un robot d'espionnage comme un projet fin d'etude
          </li>
          <li>Création de site Web</li>
          <li> En train d'etudier le Développement Web à "GO MY CODE Gabés"</li>
          <li>J'ai une Expérience de deux ans dans un jardin d'enfant</li>
        </ul>
        <h1>Langues</h1>
        <ul>
          <li>Arabe:Langue maternélle</li>
          <li> Français:Trés bien</li>
          <li>Anglais:bien</li>
          <li>Italien:bien</li>
        </ul>
      </div>
    </div>
  );
}
