import React, { useState, useCallback, useEffect } from 'react';
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

const Home: React.FC = () => {
  const [rest, setRest] = useState(5);
  const [section, setSection] = useState(25);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const handleStart = useCallback(() => {
    console.log('aqui handleStart');
  }, []);

  const handleReset = useCallback(() => {}, []);

  return (
    <Container>
      <MainTitle>PomoDroid</MainTitle>
      <Content>
        <Timer>
          <TimerTitle>Seção</TimerTitle>
          <Time>{`${timerMinutes}:${timerSeconds}`}</Time>
          <Buttons>
            <StartButton onPress={handleStart}>
              <Icon
                name="play-outline"
                size={30}
                style={{ color: '#000', marginRight: 5 }}
              />
              <TextButton>Inicio</TextButton>
            </StartButton>

            <ResetButton onPress={handleReset}>
              <Icon
                name="refresh-outline"
                size={30}
                style={{ color: '#000', marginRight: 5 }}
              />
              <TextButton>Reset</TextButton>
            </ResetButton>
          </Buttons>
        </Timer>
        <Footer>
          <DurationSession>
            <DurationTitle>Seção</DurationTitle>
            <DurationView>
              <Icon
                name="arrow-down-circle-outline"
                size={40}
                style={{ color: '#d9ecf2' }}
              />
              <Duration>{section}</Duration>
              <Icon
                name="arrow-up-circle-outline"
                size={40}
                style={{ color: '#d9ecf2' }}
              />
            </DurationView>
          </DurationSession>
          <BreakSession>
            <BreakTitle>Intervalo</BreakTitle>
            <BreakView>
              <Icon
                name="arrow-down-circle-outline"
                size={40}
                style={{ color: '#d9ecf2' }}
              />
              <Duration>{rest}</Duration>
              <Icon
                name="arrow-up-circle-outline"
                size={40}
                style={{ color: '#d9ecf2' }}
              />
            </BreakView>
          </BreakSession>
        </Footer>
      </Content>
    </Container>
  );
};

export default Home;
