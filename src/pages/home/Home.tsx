import React from 'react';
import { IonRow,IonCol, IonContent,IonButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import HomePageImg from '../../assets/img/sil.png';
import { useTranslation } from "react-i18next";

import './Home.scss';


const Home: React.FC = () => {
const { t } = useTranslation();

  return (
    <IonPage> 
      <IonContent  fullscreen>       
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">{t('Welcome to QRFit')}</IonTitle>
          </IonToolbar>
        </IonHeader>
 
          <IonRow className="bg">
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

export default Home;
