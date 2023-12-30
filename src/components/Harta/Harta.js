import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import './harta.css';
const Harta = () => {
    const position = [44.4,26.1]
    return(
        <div className='ivan'>
            <MapContainer center={[44.4171588,26.1135115]} zoom={18} scrollWheelZoom={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                <Marker position={[44.416940, 26.113040]}>
                    <Popup>
                        Iesirea A de la metroi
                    </Popup>
                </Marker>
                <Marker position={[44.416314, 26.113774]}>
                    <Popup>
                        Iesirea B de la metroi
                    </Popup>
                </Marker>
                <Marker position={[44.417082, 26.113989]}>
                    <Popup>
                        De ce nu e si aici iesire ???
                    </Popup>
                </Marker>
            </MapContainer>
        </div>  
    )
}
export default Harta;