import React from 'react';
import {IonContent,IonHeader,IonButtons,IonBackButton, IonPage, IonTitle, IonToolbar, IonList, IonItem } from '@ionic/react';
import './Machines.scss';
import { firestore } from '../../services/firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs} from 'firebase/firestore';


const MachineList: React.FC = () => {
  const [machines, setMachines] = useState<any[]>([]);
  const machineRef = collection(firestore, "machines");

  useEffect(() => {
      const getMachines = async () => {
        const data = await getDocs(machineRef);
        setMachines(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
     };
     getMachines();
  }, []);

  return (
    <IonPage>     
        <IonHeader>
          <IonToolbar>
          <IonButtons slot="start">
          <IonBackButton defaultHref='/' />
          </IonButtons>
            <IonTitle size="large">Machines</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>    
            <IonList>
              {machines.map((machine) =>
              <IonItem button key={machine.id}
                    routerLink={`/my/machines/${machine.id}`}>
                      {machine.title}
                    </IonItem>)}
            </IonList>
             
         
        </IonContent>
    </IonPage>
  );
};

export default MachineList;
