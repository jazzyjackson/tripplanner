var Sequelize = require('Sequelize');
var db = new Sequelize('postgres://localhost:5432/tripplanner', {logging: false});

var Place = db.define('place', {
  address: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT)
  }
}, {
  // hooks, getterMethods, instanceMethods

});

var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.INTEGER
  },
  amenities: {
    type: Sequelize.STRING
  }
});

var Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING
  },
  age_range: {
    type: Sequelize.STRING
  }
});

var Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  }
});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  db: db,
  Place: Place,
  Hotel: Hotel,
  Activity: Activity,
  Restaurant: Restaurant
}


