import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import './harta.css';
import * as L from "leaflet";
import { useState } from "react";

const Harta = () => { 
    const LeafIcon = L.Icon.extend
    ({
        options: {}
    });
    const greenIcon = new LeafIcon
    ({
        iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png"
    });
    const redIcon = new LeafIcon
    ({
        iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png"
    });
    const yIcon = new LeafIcon
    ({
        iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png"
    });
    const [icon] = useState(greenIcon);
    const [icon2] = useState(redIcon);
    const [icon3] = useState(yIcon);
    return (
        <div className='ivan'>
            <br></br>
            <MapContainer center={[44.4171588, 26.1135115]} zoom={18} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[44.416612, 26.112880]} icon={icon2}>
                    <Popup className='ciocea'>
                        Aici se afla un semafor de pietoni unde pietonii trec uneori pe rosu
                    </Popup>
                </Marker>
                <Marker position={[44.416856, 26.112775]} icon={icon2}>
                    <Popup className='ciocea'>
                        Aici se afla un semafor de pietoni unde pietonii trec uneori pe rosu
                    </Popup>
                </Marker>
                <Marker position={[44.417222, 26.113923]} icon={icon2}>
                    <Popup className='ciocea'>
                        Aici se afla un semafor de pietoni unde pietonii trec uneori pe rosu
                    </Popup>
                </Marker>
                <Marker position={[44.416896, 26.113307]} icon={icon3}>
                    <Popup className='ciocea'>
                        Aici recomandam plasarea unui echipaj de politie
                        Pozitia aceasta nu blocheaza traficul si se afla in apropiere de majoritatea trecerilor problematice de pietoni
                    </Popup>
                </Marker>
                <Marker position={[44.417195, 26.113794]} icon={icon2}>
                    <Popup className='ciocea'>
                        Aici se observa o usoara tendinta a soferilor de a trece pe rosu
                    </Popup>
                </Marker>
                <Marker position={[44.417119, 26.113175]} icon={icon2}>
                    <Popup className='ciocea'>
                        Aici se observa o usoara tendinta a soferilor de a trece pe rosu
                    </Popup>
                </Marker>
                <Marker position={[44.416714, 26.113143]} icon={icon2}>
                    <Popup className='ciocea'>
                        Aici se afla un semafor de pietoni unde pietonii trec uneori pe rosu
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
export default Harta;