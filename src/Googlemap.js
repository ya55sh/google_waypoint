import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper, Polyline } from "google-maps-react";

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
        lat: 20.5937,
        lng: 78.9629,
      },
      
    };
  }

  render() {
    const showRoute = this.props.showRoute

    if (this.props.triangleCoords[0] === undefined) {
      return (
        <Map
          google={this.props.google}
          style={{
            width: "716px",
            height: "592px",
            borderRadius: "0px 0px 20px 0px",
          }}
          zoom={6}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng,
          }}
        ></Map>
      );
    } else {
      return (
        <Map
          google={this.props.google}
          style={{
            width: "716px",
            height: "592px",
            borderRadius: "0px 0px 20px 0px",
          }}
          zoom={6}
          center={{
            lat: 20.5937,
            lng: 78.9629,
          }}
        >
          {this.props.triangleCoords.length >= 2 && showRoute && (
              <Polyline
              path={this.props.triangleCoords}
              strokeColor="#00000"
              strokeOpacity={0.8}
              strokeWeight={2}
            />
          )}

          {this.props.triangleCoords.map((coord,idx) => (
            <Marker
              key={idx}
              title={"The marker`s title will appear as a tooltip."}
              name={"hyderabad"}
              position={{
                lat: parseFloat(coord.lat),
                lng: parseFloat(coord.lng),
              }}
            />
          ))}

          <Marker onClick={this.onMarkerClick} name={"Current location"} />
        </Map>
      );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDfNbXEmtsbzKxs7G4FF7U7nkEcJIfz3n0",
})(MapContainer);
