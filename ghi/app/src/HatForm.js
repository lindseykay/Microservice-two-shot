import React from "react";

class HatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stylename: "",
      color: "",
      fabric: "",
      picurl: "",
      // location: "",
      locations: [],
    };

    this.handleChangeStylename = this.handleChangeStylename.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeFabric = this.handleChangeFabric.bind(this);
    this.handleChangePicurl = this.handleChangePicurl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  async componentDidMount() {
    const url = "http://localhost:8100/api/locations/";
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      this.setState({ locations: data.locations });
    }
  }

 
  async handleSubmit(event) {
    event.preventDefault();
    const data = {... this.state
    };

    delete data.locations;
    console.log(data)

    const hatUrl = "http://localhost:8090/api/hats/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(hatUrl, fetchConfig);
    if (response.ok) {
      const newHat = await response.json();
      console.log(newHat);
      this.setState({
        stylename: "",
        color: "",
        fabric: "",
        picurl: "",
        location: "",
      });
    }
  }


  handleChangeStylename(event) {
    const value = event.target.value;
    this.setState({ stylename: value });
  }

  handleChangeColor(event) {
    const value = event.target.value;
    this.setState({ color: value });
  }

  handleChangeFabric(event) {
    const value = event.target.value;
    this.setState({ fabric: value });
  }

  handleChangePicurl(event) {
    const value = event.target.value;
    this.setState({ picurl: value });
  }

  handleChangeLocation(event) {
    const value = event.target.value;
    this.setState({ location: value });
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Add Hat</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeStylename}
                  value={this.state.stylename}
                  placeholder="Style Name"
                  required
                  type="text"
                  name="stylename"
                  id="stylename"
                  className="form-control"
                />
                <label htmlFor="stylename">Style Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeColor}
                  value={this.state.color}
                  placeholder="Color"
                  required
                  type="text"
                  name="color"
                  id="color"
                  className="form-control"
                />
                <label htmlFor="color">Color</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangeFabric}
                  value={this.state.fabric}
                  placeholder="Fabric"
                  required
                  type="text"
                  name="fabric"
                  id="fabric"
                  className="form-control"
                />
                <label htmlFor="fabric">Fabric</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={this.handleChangePicurl}
                  value={this.state.picurl}
                  placeholder="Picture Url"
                  required
                  type="text"
                  name="picurl"
                  id="picurl"
                  className="form-control"
                />
                <label htmlFor="picurl">Picture Url</label>
              </div>
              <div className="mb-3">
                <select
                  onChange={this.handleChangeLocation}
                  value={this.state.location}
                  required
                  name="location"
                  id="location"
                  className="form-select"
                >
                  <option value="">Choose a location</option>
                  {this.state.locations.map((location) => {
                    return (
                      <option key={location.href} value={location.href}>
                        {location.closet_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default HatForm;


