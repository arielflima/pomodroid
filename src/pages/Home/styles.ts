import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
  justify-content: center;
`;

export const MainTitle = styled.Text`
  color: #fff;
  font-size: 32px;
`;

export const Content = styled.View`
  width: 90%;
  height: 80%;
  background-color: #fff;
  border-radius: 55px;
`;
export const Timer = styled.View`
  width: 100%;
  height: 70%;
  background: #333;
  border-top-left-radius: 55px;
  border-top-right-radius: 55px;
  align-items: center;
  justify-content: center;
`;
export const TimerTitle = styled.Text`
  color: #fff;
  font-size: 30px;
`;
export const Time = styled.Text`
  color: #fff;
  font-size: 100px;
  margin-top: 20px;
`;

export const Buttons = styled.View`
  margin-top: 40px;
  flex-direction: row;
`;

export const StartButton = styled(RectButton)`
  width: 120px;
  height: 50px;
  background-color: #fff;
  margin-right: 20px;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
`;
export const ResetButton = styled(RectButton)`
  width: 120px;
  height: 50px;
  background-color: #fff;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 22px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const DurationSession = styled.View`
  width: 45%;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;
export const DurationTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const DurationView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Duration = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const BreakSession = styled.View`
  width: 45%;
  align-items: center;
  justify-content: center;
`;

export const BreakTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;`;

export const BreakView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;


