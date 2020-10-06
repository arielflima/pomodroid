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
        <TimerTitle>Seção</TimerTitle>
        <Time>25:00</Time>
        <Buttons>
          <StartButton>
            <Icon name="play-outline" size={30} style={{color: "#000", marginRight: 5}}/>
            <TextButton>Inicio</TextButton>
          </StartButton>
          <ResetButton>
          <Icon name="refresh-outline" size={30} style={{color: "#000", marginRight: 5}}/>
            <TextButton>Reset</TextButton>
          </ResetButton>
        </Buttons>
      </Timer>
      <Footer>
        <DurationSession>
          <DurationTitle>Tempo seção</DurationTitle>
          <DurationView>
            <Icon name="arrow-down-circle-outline" size={40}  style={{color: "#d9ecf2"}}/>
            <Duration>25 min</Duration>
            <Icon name="arrow-up-circle-outline" size={40} style={{color: "#d9ecf2"}}/>
          </DurationView>
        </DurationSession>
        <BreakSession>
          <BreakTitle>Tempo intervalo</BreakTitle>
          <BreakView>
            <Icon name="arrow-down-circle-outline" size={40}  style={{color: "#d9ecf2"}}/>
            <Duration>5 min</Duration>
            <Icon name="arrow-up-circle-outline" size={40} style={{color: "#d9ecf2"}}/>
          </BreakView>
        </BreakSession>
      </Footer>
    </Content>
  </Container>
);

export default Home;
