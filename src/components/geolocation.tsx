import React, { useEffect, useState } from 'react';
import { Geoposition } from '@ionic-native/geolocation';
import { IonButton, IonLoading, useIonViewWillEnter, IonTitle, IonIcon, IonGrid, IonRow,IonCol, IonText } from '@ionic/react';
import { useCurrentPosition, useWatchPosition, availableFeatures } from '@ionic/react-hooks/geolocation';
import { Plugins } from '@capacitor/core';
import { save } from 'ionicons/icons';

const { Geolocation, Storage } = Plugins;

const Geolocalisation: React.FC = () => {
    //Hooks useState
    const { currentPosition, getPosition } = useCurrentPosition();
    const [resLat, setResLat] = useState<string>()
    const [resLong, setResLong] = useState<string>()

    //Similaire à componentDidMount et componentDidUpdate
    useEffect(() => {
        handleRefreshPosition()
        // Arrondi à la puissance 10
        let resLat = currentPosition?.coords.latitude.toFixed(10)
        let resLong = currentPosition?.coords.longitude.toFixed(10)
        setResLat(resLat)
        setResLong(resLong)
    })

    //Récupère la position longitude, latitude
    const handleRefreshPosition = () => {
        getPosition()
        console.log('Latitude : ' + currentPosition?.coords.latitude)
        console.log('Longitude : ' + currentPosition?.coords.longitude)
    }

    interface IPosition {
        latitude?: string,
        longitude?: string
    }

    //Sauvgarde la longitude et la latitude actuelle
    const savePosition = () => {
        const position: IPosition = {
            latitude: resLat,
            longitude: resLong
        }
        //Envoie position
        Storage.set({
            key: 'position',
            value: JSON.stringify(position)
        })
        console.log(position)
    }

return(<>
    <IonGrid>
        <IonRow>
            <IonCol size="2"></IonCol>
            <IonCol size="8">
                <IonTitle class="first-title">Your current position is :</IonTitle>
                <p />
                <IonTitle>Latitude :{resLat}</IonTitle>
                <p />
                <IonTitle>Longitude :{resLong}</IonTitle>
                <p />
                <IonButton onClick={(savePosition)}>
                Save! 
                <IonIcon icon={save}/>
                </IonButton>
            </IonCol>
            <IonCol size="2"></IonCol>
        </IonRow>
    </IonGrid>
        </>
    )

}

export default Geolocalisation