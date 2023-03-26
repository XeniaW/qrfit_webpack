import React from 'react';
import { IonRow,IonCol, IonContent,IonButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Statistics.scss';
import HomePageImg from '../../../assets/img/sil.png';

const Statistics: React.FC = () => {

  return (
    <IonPage> 
      <IonContent fullscreen>       
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">Statistics</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonRow>
            <IonCol className="ion-padding-top">
            <img src={HomePageImg} alt={"MainImage"} />
            </IonCol>    
          </IonRow>
          <IonRow>
            <IonCol><IonButton expand="full" color="light" routerLink="/registration">Registration</IonButton></IonCol>
            <IonCol><IonButton expand="full" color="secondary" routerLink="/login">Login</IonButton></IonCol>
          </IonRow>
        </IonContent>
    </IonPage>
  );
};

export default Statistics;
