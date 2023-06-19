import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, isOn, onHandleToggle }) {
  return (
    <LightButton
      type="button"
      onClick={() => {
        onHandleToggle(name);
      }}
      isOn={isOn}
    >
      <Icon isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
