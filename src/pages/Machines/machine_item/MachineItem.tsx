import React from 'react';
import { IonContent,IonHeader,IonButtons,IonBackButton, IonPage, IonTitle, IonToolbar, IonItem } from '@ionic/react';

import './MachineItem.scss';

import { firestore } from '../../../services/firebase';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { doc, getDoc } from "firebase/firestore";

import { useRouteMatch } from 'react-router';

import { Machines } from '../../../services/datamodels';




interface RouteParams {
  id:string;
}

const MachineItem: React.FC = () => {
  const match = useRouteMatch<RouteParams>();
  const {id} = match.params;
  const [machine, setMachine] = useState<Machines>();
  const machineRef = collection(firestore, "machines");

//   const getMachines = async () => {
//     const data = await getDocs(machineRef);
//     const arr = [];
//     data.docs.map((doc)=>  {
//       const machine = {...doc.data(), id: doc.id, title: doc.data().title, muscles: doc.data().musclemap};
//       arr.push(machine);
//       //const machine = {...doc.data(), id: doc.id, title: doc.data().title, muscles: doc.data().musclemap} // mapping out data for usage  
//     });
//     return arr;
//  };

const getMachine = async (id) => {
  const docRef = doc(firestore, "machines", id);
  try {
      const docSnap = await getDoc(docRef);
      return {...docSnap.data(), id: docSnap.id, title: docSnap.data().title, muscles: docSnap.data().muscles};
  } catch(error) {
      console.log(error)
  }
}

  useEffect(() => {
     getMachine(id).then((res)=> {
        setMachine(res);
     });
  }, [id]);

console.log(machine?.muscles)

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
        <IonContent fullscreen>
         { machine?.muscles && machine?.muscles.map((muscle, i) =>
            <IonItem key={i}>
                {muscle} 
            </IonItem>)}
        </IonContent>
    </IonPage>
  );

  

};

export default MachineItem;
