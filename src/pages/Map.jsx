import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { LatLng } from "leaflet";
import { ModalForm } from "../components/ModalForm";

export const Map = () => {
    const center = new LatLng(-6.1684677, -38.4928379);

    const locations = [
        {
            position: new LatLng(-6.1684677, -38.4928379),
            nameLoja: "Doutor Severiano",
            endereço: "Rua Cônego Ismar Fernandes, Centro, Dr. Severiano, 59910-000",
            montante: "R$ 147.768",
            nameCity: "Doutor Severiano, RN",
        },
        {
            position: new LatLng(-6.360896, -39.2953322),
            nameLoja: "Iguatu",
            endereço: "Av. Manoel Paulino, 155 - Iguatu, CE, 63500-000",
            montante: "R$ 71.589",
            nameCity: "Iguatu, CE",
        },
        {
            position: new LatLng(-5.9929248, -38.1503427),
            nameLoja: "Jaguaribe",
            endereço: "R. Cel. Bezerra, 522 - Jaguaribe, CE, 63475-000",
            montante: "R$ 93.273",
            nameCity: "Jaguaribe, CE",
        },
        {
            position: new LatLng(-6.050188, -38.4780918),
            nameLoja: "Pereiro",
            endereço: "R. Nel Queiroz, 329-333 - Pereiro, CE, 63460-000",
            montante: "R$ 147.768",
            nameCity: "Pereiro, CE",
        },
        {
            position: new LatLng(-6.3577923, -39.2981511),
            nameLoja: "Encanto",
            endereço: "R. Severino Lourenço da Silva, 1199 - Encanto, RN, 59925-000",
            montante: "R$ 85.942",
            nameCity: "Encanto, RN",
        },
    ];

    const locationIcon = L.icon({
        iconUrl:
            "https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png",
        iconSize: [28, 28],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
    });

    return (
        <div className="w-full bg-agility-background p-1 md:p-10">
            <div className="bg-white p-10 rounded-md shadow-md">
                <div className="h-[700px] md:h-[730px]">
                    <div className="w-full flex mb-3 items-center justify-between">
                        <p className="font-semibold text-2xl text-agility-gray-color-100">Mapa de lojas</p>
                        <ModalForm />
                    </div>
                    <MapContainer center={center} zoom={5} style={{ height: "90%", zIndex: 1 }}>
                        <TileLayer
                            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=uN2Fj9CIq4JpHiDQyAYE"
                            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                        />

                        {locations.map((location, index) => (
                            <Marker
                                key={index}
                                position={location.position}
                                icon={locationIcon}
                            >
                                <Popup>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-lg text-agility-gray-color-100">
                                            {location.nameLoja}
                                        </span>
                                        <span>{location.nameCity}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-medium text-base text-agility-gray-color-100">
                                            Endereço
                                        </span>
                                        <span>{location.endereço}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-medium text-base text-agility-gray-color-100">
                                            Montante
                                        </span>
                                        <span>{location.montante}</span>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};
