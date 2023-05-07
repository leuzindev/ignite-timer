import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountDownButton = styled.button`
  width: 100%;
  border: 0;
  border-radius: 8px;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  color: ${(props) => props.theme['text-button']};
  cursor: pointer;

  transition: background-color 0.2s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountDownButton = styled(BaseCountDownButton)`
  background: ${(props) => props.theme['ignite-mid']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['ignite-dark']};
  }
`

export const StopCountDownButton = styled(StartCountDownButton)`
  background: ${(props) => props.theme['ec-light']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['ec-dark']};
  }
`
