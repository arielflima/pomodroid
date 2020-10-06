import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  MainTitle,
  Content,
  Timer,
  TimerTitle,
  Time,
  Buttons,
  StartButton,
  ResetButton,
  TextButton,
  Footer,
  DurationSession,
  DurationTitle,
  DurationView,
  Duration,
  BreakSession,
  BreakTitle,
  BreakView,
} from './styles';

const Home: React.FC = () => (
  <Container>
    <MainTitle>PomoDroid</MainTitle>
    <Content>
      <Timer>
        <TimerTitle>Session</TimerTitle>
        <Time>25:00</Time>
        <Buttons>
          <StartButton>
            <TextButton>Start</TextButton>
          </StartButton>
          <ResetButton>
            <TextButton>Reset</TextButton>
          </ResetButton>
        </Buttons>
      </Timer>
      <Footer>
        <DurationSession>
          <DurationTitle>Session Length</DurationTitle>
          <DurationView>
            <Icon name="arrow-down-circle-outline" size={40} color="#000" />
            <Duration>25 minutos</Duration>
            <Icon name="arrow-up-circle-outline" size={40} color="#000" />
          </DurationView>
        </DurationSession>
        <BreakSession>
          <BreakTitle>Session Length</BreakTitle>
          <BreakView>
            <Icon name="arrow-down-circle-outline" size={40} color="#000" />
            <Duration>5 minutos</Duration>
            <Icon name="arrow-up-circle-outline" size={40} color="#000" />
          </BreakView>
        </BreakSession>
      </Footer>
    </Content>
  </Container>
);

export default Home;
