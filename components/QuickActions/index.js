import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ killAll, activateAll }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          killAll();
        }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          activateAll();
        }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
