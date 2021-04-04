import Influx from 'influx';

const influx = new Influx.InfluxDB({
  host: 'localhost',
  database: 'database_name',
  schema: [
    {
      measurement: 'measurement_name',
      tags: ['tags_name'],
      fields: {
        field_name: Influx.FieldType.STRING,
      }
    }
  ]
})

export default influx;
