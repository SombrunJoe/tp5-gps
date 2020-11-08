import { 
  IonList, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonToggle, 
  IonRadio, 
  IonCheckbox, 
  IonItemSliding, 
  IonItemOption, 
  IonItemOptions, 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import React from 'react';
// import ListPage from '../components/ListPage';
import Name from '../components/profil'
import './Profil.css';

const Profil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Name />
      </IonContent>
    </IonPage>
  );
};


export default Profil;
