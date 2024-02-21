LoRa and Drones in Remote Area Surveillance

This project explores the innovative use of Long Range (LoRa) technology and drones for surveillance in remote areas. The system is designed to enhance Internet of Things (IoT) deployments, particularly in scenarios where real-time data collection and transmission are crucial.

Workers in the field are equipped with various sensors, including a Ublox neo 6m GPS device, a pulse sensor, and an MLX90614 temperature sensor. These sensors collect vital data which is then transmitted using a mobile LoRaWAN gateway. The drone, a Pixhawk F450, serves as a bridge in our system, receiving the data from the workers and transmitting it to a central station.

The central station, powered by Google Cloud and Firebase, stores the data for further processing and analysis. The processed data is then displayed on a local host website, built using ReactJS for the frontend and NodeJS for the backend, allowing for real-time monitoring and analysis.

Through this architecture, our system ensures efficient data collection, transmission, storage, processing, and display, thereby enhancing safety and productivity in various fields such as remote worker monitoring, health and safety, and more.
