import styled from '../../../styles/styledComponents';
import { mediaMixin } from '../../../styles/mixins';

export const SettingsWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  h6 {
    margin: 0 0 .2em 0;
  }
`;

export const SettingsHeader = styled.header`
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.main_200};
  padding: .5em;
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-direction: column;
`;

export const IconButton = styled.button`
  padding: .3em;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;

export const SettingsContent = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: auto;
  display: flex;
  ${props => mediaMixin(props.theme, {
    sm: `
      overflow-y: auto;
    `,
    md: ``,
  })}
`;