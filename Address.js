class Address {
  constructor(city, district, country) {
    this._city = city;
    this._district = district;
    this._country = country;
  }
  get city() {
    return this._city;
  }
  set city(value) {
    this._city = value;
  }
  get district() {
    return this._district;
  }
  set district(value) {
    this._district = value;
  }
  get country() {
    return this._country;
  }
  set country(value) {
    this._country = value;
  }
}

export default Address;
