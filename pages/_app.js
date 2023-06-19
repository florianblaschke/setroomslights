import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const allRooms = [
  { isOn: false, name: "Living Room" },
  { isOn: false, name: "Kitchen" },
  { isOn: false, name: "Bedroom" },
  { isOn: false, name: "Bathroom" },
  { isOn: false, name: "Garage" },
  { isOn: false, name: "Porch" },
  { isOn: false, name: "Garden" },
  { isOn: false, name: "Office" },
];

export default function App({ Component, pageProps }) {
  const [allLights, setAllLights] = useState(allRooms);

  function handleToggle(name) {
    setAllLights(
      allLights.map((room) =>
        room.name === name ? { ...room, isOn: !room.isOn } : room
      )
    );
  }

  function killAll() {
    setAllLights(
      allLights.map((light) => (light.isOn ? { ...light, isOn: false } : light))
    );
  }
  function activateAll() {
    setAllLights(
      allLights.map((light) => (!light.isOn ? { ...light, isOn: true } : light))
    );
  }

  const lit = allLights.reduce(
    (acc, room) => acc + (room.isOn === true ? 1 : 0),
    0
  );

  return (
    <Layout>
      <GlobalStyle />
      <Component
        lit={lit}
        allLights={allLights}
        onHandleToggle={handleToggle}
        killAll={killAll}
        activateAll={activateAll}
        {...pageProps}
      />
    </Layout>
  );
}
