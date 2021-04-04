import mqtt from 'mqtt';

const clientMQTT  = mqtt.connect('mqtt://localhost', {
  username: 'username',
  password: 'password'
});

export default clientMQTT;
