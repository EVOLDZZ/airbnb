import Map  , { Marker, Popup } from "react-map-gl";

import { useState } from "react";
import getCenter from "geolib/es/getCenter";
const MapComponent = ({ searchResult }) => {
  const [currentCoordinateLocation, setCurrentCoordinateLocation] = useState(
    {}
  );
  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
    width: "100%",
    height: "100%"
  });
  return (
   
   
    
    <Map 
      mapboxAccessToken={process.env.mapbox_key}
      mapStyle="mapbox://styles/totalxsj/cl0ynvthk00ts14qy6c546p3t"
      style={{ width: "100%", height: "100%" }}
      {...viewport}
      // onViewportChange={viewport => setViewport(viewport)}
      onMove={(viewport) => setViewport({ viewport })}
    >
      {searchResult.map((item) => (
        <div key={item.long}>
          <Marker longitude={item.long} latitude={item.lat}>
            <p
              className="cursor-pointer text-2xl animate-bounce"
              onClick={() => setCurrentCoordinateLocation(item)}
            >
              🏹
            </p>
          </Marker>
          {/* поп-ап при нажатии на смайлик */}
          {currentCoordinateLocation.long === item.long ? (
            <Popup
              onClose={() => currentCoordinateLocation({})}
              closeOnClick={true}
              latitude={item.lat}
              longitude={item.log}
            >
              {item.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </Map>
  );
  
};
// варианты развития логики 1.
//юзэффект по роутеру и передать через роутер query названия города или заголовка
//а дальше по нему сделать файнд из фетча и оттуда взять пропсы lat long сервер сайд рендерингом?
//и оттуда передать сюда
// Либо сделать через функцию что описана в search

// передаланая логика вариант 2 юзеффект роутера по роутеру делать фильтер по фильтру получать из объекта вьюпорт например Mexico все что с Mexico зарегано получить
export default MapComponent;
