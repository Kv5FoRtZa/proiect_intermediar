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
            <MapContainer center={[44.4171588, 26.1135115]} zoom={18} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[44.417203, 26.112985]} icon={icon}>
                    <Popup className='ciocea'>
                        Iesirea A de la metroi
                    </Popup>
                </Marker>
                <Marker position={[44.416446, 26.113605]} icon={icon}>
                    <Popup className='ciocea'>
                        Iesirea B de la metroi
                    </Popup>
                </Marker>
                <Marker position={[44.416575, 26.112556]} icon={icon}>
                    <Popup className='ciocea'>
                        Statia tramvai 19
                    </Popup>
                </Marker>
                <Marker position={[44.417263, 26.113926]} icon={icon2}>
                    <Popup className='ciocea'>
                        De ce nu e si aici iesire ???
                    </Popup>
                </Marker>
                <Marker position={[44.416786, 26.113061]} icon={icon3}>
                    <Popup className='ciocea'>
                        Semafoare de pietoni desincronizate
                    </Popup>
                </Marker>
                <Marker position={[44.416977, 26.113497]} icon={icon3}>
                    <Popup className='ciocea'>
                        Semafoare de pietoni desincronizate
                    </Popup>
                </Marker>
                <Marker position={[44.417201, 26.113878]} icon={icon3}>
                    <Popup className='ciocea'>
                        Semafoare de pietoni desincronizate
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
export default Harta;