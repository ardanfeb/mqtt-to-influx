import express from "express";
import influx from './utils/influxDB.js';
import clientMQTT from './utils/mqtt.js';

// App Config
const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

clientMQTT.subscribe('main/status/#');
clientMQTT.on('message', function (topic, message) {

	try {
		console.log('status: ' + topic);
    		influx.writeMeasurement('data_device', [
      			{
        			tags: { topic: topic },
        			fields: { data: message.toString() },
      			}
   		 ])
	} catch (error) {
		console.log('error 2: ' + error);
  	}
});

// Listener
app.listen(port, () => console.log(`Listening: ${port}`));
