import React from 'react';
import { IonContent,IonHeader,IonButtons,IonBackButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './MachineItem.scss';

import { firestore } from '../../../services/firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useRouteMatch } from 'react-router';
import { Machines } from '../../../services/datamodels';




interface RouteParams {
  id:string;
}

const MachineItem: React.FC = () => {
  const match = useRouteMatch<RouteParams>();
  const {id} = match.params;
  const [machine, setMachines] = useState<Machines>();
  const machineRef = collection(firestore, "machines");

  useEffect(() => {
      const getMachines = async () => {
        const data = await getDocs(machineRef);
        data.docs.map((doc)=>  {
          const machine = {...doc.data(), id: doc.id, title: doc.data().title, muscles: doc.data().musclemap}
          //const machine = {...doc.data(), id: doc.id, title: doc.data().title, muscles: doc.data().musclemap} // mapping out data for usage  
          setMachines(machine)       
        });
     };
     getMachines();
  }, [id]);

  

  return (
    <IonPage>     
        <IonHeader>    
          <IonToolbar>
          <IonButtons slot="start">
          <IonBackButton defaultHref='/' />
          </IonButtons>
            <IonTitle size="large">{machine?.title}</IonTitle>
           
          </IonToolbar>
        </IonHeader>
        {/* <IonContent fullscreen> 
        {console.log(machine?.muscles)}
         { !machine?.muscles && machine?.muscles.map((muscle, i) =>     
        <IonItem key={i}> 
                {muscle} 
                    </IonItem>)}

        </IonContent> */}
        <IonContent>{machine?.muscles}</IonContent>
    </IonPage>
  );

  

};

export default MachineItem;
