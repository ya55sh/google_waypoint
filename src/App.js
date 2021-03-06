import React from "react";
import "./App.css";
import Googlemap from "./Googlemap";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      locationName: "",
      lat: "",
      lon: "",
      dataObj: [],
      triangleCoords: [],
      updatedLocation: false,
      showRoute: false
    };
  }
  handleHome = () => {
    this.setState({
      locationName: "",
      lat: "",
      lon: "",
      dataObj: [],
      triangleCoords: [],
      updatedLocation: false,
      showRoute: false
    });
  };

  handleLocationName = (e) => {
    this.setState({
      locationName: e.target.value,
    });
  };

  handleLat = (e) => {
    this.setState({
      lat: e.target.value,
    });
  };

  handleLon = (e) => {
    this.setState({
      lon: e.target.value,
    });
  };

  handleShowRoute = ()=>{
    this.setState({
      showRoute: true 
    })
  }

  handleAdd = () => {
    this.state.dataObj.push({
      locationName: this.state.locationName,
      lat: this.state.lat,
      lon: this.state.lon,
    });
    this.setState({
      triangleCoords: this.state.triangleCoords.concat({
        lat: parseFloat(this.state.lat),
        lng: parseFloat(this.state.lon),
      }),
    });
    this.setState({ updatedLocation: !this.state.updatedLocation });
  };

  render() {
    return (
      <div className="App">
        <button className="home_button" onClick={this.handleHome}>
          Home
        </button>
        <div className="main_box">
          <div className="header">
            <div className="header_content">
              <div className="header_content_container">
                <span className="ll">Location Name</span>
                <input
                  className="header_content_textbox"
                  type="text"
                  placeholder="Location"
                  value={this.state.locationName}
                  onChange={(event) => this.handleLocationName(event)}
                />
              </div>
              <div className="header_content_container">
                <span className="ll">Enter Latitude</span>
                <input
                  className="header_content_textbox"
                  type="number"
                  placeholder="Lat"
                  value={this.state.lat}
                  onChange={(event) => this.handleLat(event)}
                />
              </div>
              <div className="header_content_container">
                <span className="ll">Enter Longitude</span>
                <input
                  className="header_content_textbox"
                  type="number"
                  placeholder="Lon"
                  value={this.state.lon}
                  onChange={(event) => this.handleLon(event)}
                />
              </div>
            </div>
            <div className="container_button_submit">
              {this.state.locationName &&
              this.state.lat &&
              this.state.lon !== "" ? (
                <button className="button_add" onClick={this.handleAdd}>
                  ADD
                </button>
              ) : (
                <button className="button_submit" onClick={this.handleSubmit}>
                  SUBMIT
                </button>
              )}
            </div>
          </div>

          <div className="body_container">
            <div className="body_container_left">
              <div className="body_container_heading">
                <p>ALL CO-ORDINATES:</p>
              </div>
              <div className="body_container_coordinates">
                <div className="body_container_coordinate_header">
                  <div className="body_container_coordinate_title">
                    MY CO-ORDINATES
                  </div>
                  <div className="body_container_coordinate_default">
                    <div className="body_container_coordinate_lat">DEFAULT</div>
                    <div className="body_container_coordinate_lon">DEFAULT</div>
                  </div>
                </div>
                <div className="body_container_coordinate_data">
                  <div className="common_container">
                    <div className="body_container_location_name">
                      1)
                      {this.state.dataObj[0] === undefined
                        ? "------"
                        : this.state.dataObj[0].locationName}
                    </div>
                    <div className="body_container_coordinate_default">
                      <div className="body_container_coordinate_lat">
                        {this.state.dataObj[0] === undefined
                          ? "------"
                          : this.state.dataObj[0].lat}
                      </div>
                      <div className="body_container_coordinate_lon">
                        {this.state.dataObj[0] === undefined
                          ? "------"
                          : this.state.dataObj[0].lon}
                      </div>
                    </div>
                  </div>
                  <div className="common_container">
                    <div className="body_container_location_name">
                      2)
                      {this.state.dataObj[1] === undefined
                        ? "------"
                        : this.state.dataObj[1].locationName}
                    </div>
                    <div className="body_container_coordinate_default">
                      <div className="body_container_coordinate_lat">
                        {this.state.dataObj[1] === undefined
                          ? "------"
                          : this.state.dataObj[1].lat}
                      </div>
                      <div className="body_container_coordinate_lon">
                        {this.state.dataObj[1] === undefined
                          ? "------"
                          : this.state.dataObj[1].lon}
                      </div>
                    </div>
                  </div>
                  <div className="common_container">
                    <div className="body_container_location_name">
                      3)
                      {this.state.dataObj[2] === undefined
                        ? "------"
                        : this.state.dataObj[2].locationName}
                    </div>
                    <div className="body_container_coordinate_default">
                      <div className="body_container_coordinate_lat">
                        {this.state.dataObj[2] === undefined
                          ? "------"
                          : this.state.dataObj[2].lat}
                      </div>
                      <div className="body_container_coordinate_lon">
                        {this.state.dataObj[2] === undefined
                          ? "------"
                          : this.state.dataObj[2].lon}
                      </div>
                    </div>
                  </div>
                  <div className="common_container">
                    <div className="body_container_location_name">
                      4)
                      {this.state.dataObj[3] === undefined
                        ? "------"
                        : this.state.dataObj[3].locationName}
                    </div>
                    <div className="body_container_coordinate_default">
                      <div className="body_container_coordinate_lat">
                        {this.state.dataObj[3] === undefined
                          ? "------"
                          : this.state.dataObj[3].lat}
                      </div>
                      <div className="body_container_coordinate_lon">
                        {this.state.dataObj[3] === undefined
                          ? "------"
                          : this.state.dataObj[3].lon}
                      </div>
                    </div>
                  </div>
                  <div className="common_container">
                    <div className="body_container_location_name">
                      5)
                      {this.state.dataObj[4] === undefined
                        ? "------"
                        : this.state.dataObj[4].locationName}
                    </div>
                    <div className="body_container_coordinate_default">
                      <div className="body_container_coordinate_lat">
                        {this.state.dataObj[4] === undefined
                          ? "------"
                          : this.state.dataObj[4].lat}
                      </div>
                      <div className="body_container_coordinate_lon">
                        {this.state.dataObj[4] === undefined
                          ? "------"
                          : this.state.dataObj[4].lon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="body_container_show_route">
                <button className="show_route_button" onClick={this.handleShowRoute}>Show Route</button>
              </div>
            </div>
            <div className="body_container_map">
              {this.state.triangleCoords === undefined ? (
                <Googlemap showRoute={this.state.showRoute} />
              ) : (
                <Googlemap triangleCoords={this.state.triangleCoords} showRoute={this.state.showRoute} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
