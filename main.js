

var theRestofTheJavascript = function(data) {
    
    var dangerousAsteroids = [] //stores all of the raw data for each dangerous asteroid
    
    var asteroid = [] //stores just my specific data for each asteroid 


    for (let days in data.near_earth_objects) {
        for (var i = 0; i < data.near_earth_objects[days].length; i++) {
            if (data.near_earth_objects[days][i].is_potentially_hazardous_asteroid === true) {
                dangerousAsteroids.push(data.near_earth_objects[days][i])
            }
        }
    }
    console.log(dangerousAsteroids)

    console.log(dangerousAsteroids[0].estimated_diameter.miles.estimated_diameter_max)
    console.log(dangerousAsteroids[0].close_approach_data[0].close_approach_date)
    console.log(dangerousAsteroids[0].close_approach_data[0].relative_velocity.miles_per_hour)
    console.log(dangerousAsteroids[0].close_approach_data[0].orbiting_body)
    console.log(dangerousAsteroids[0].close_approach_data[0].miss_distance.miles)
    
    var asteroidObject = function(diameter, approach_date, speed, orbiting_body, miss_distance) { //this function will create separate objects for each of my asteriods
        this.diameter = diameter;
        this.approach_date = approach_date;
        this.speed = speed;
        this.orbiting_body = orbiting_body;
        this.miss_distance = miss_distance;
    }

    for (i = 0; i < dangerousAsteroids.length; i++) { 
        asteroid.push(new asteroidObject(dangerousAsteroids[i].estimated_diameter.miles.estimated_diameter_max, dangerousAsteroids[i].close_approach_data[0].close_approach_date, dangerousAsteroids[i].close_approach_data[0].relative_velocity.miles_per_hour, dangerousAsteroids[i].close_approach_data[0].orbiting_body, dangerousAsteroids[i].close_approach_data[0].miss_distance.miles))
    }
    console.log(asteroid)

}
$(document).ready(function(){ 
    
     $.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-09-01&end_date=2017-09-07&api_key=oelul3xgp43s2yLjkmIuyJzOYqhKKLCke4XB24nh', function(data) {
        theRestofTheJavascript(data)   
     })
    
})