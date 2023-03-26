import React from 'react';
import { IonRow,IonCol, IonContent,IonButton, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Training.scss';
import HomePageImg from '../../../assets/img/sil.png';

const Training: React.FC = () => {

  

  return (
    <IonPage> 
      <IonContent fullscreen>       
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">Training</IonTitle>
          </IonToolbar>
        </IonHeader>
 
          <IonRow>
            <IonCol className="ion-padding-top">
            <img src={HomePageImg} alt={"MainImage"} />
            </IonCol>    
          </IonRow>
          <IonRow>
            <IonCol><IonButton expand="full" color="light" routerLink="/registration">Start Training</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonButton expand="full" color="light" routerLink="/registration">View All Trainings</IonButton></IonCol>
          </IonRow>
          <IonRow>
            <IonCol><IonButton expand="full" color="light" routerLink="/my/machines">Browse Machines</IonButton></IonCol>
          </IonRow>
        </IonContent>
    </IonPage>
  );
};

export default Training;
