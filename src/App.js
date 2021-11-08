import { getDayOfYear, getDaysInYear } from "date-fns";
import ProgressBar from "./components/ProgressBar";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #fbf3e4;
`;
const Title = styled.h2`
  color: #105652;
  font-size: 25px;
  padding: 15px 0;
`;

function App() {
  function currentDay(date) {
    return getDayOfYear(date);
  }
  function daysInYear(date) {
    return getDaysInYear(date);
  }
  const calculatePercentage = (dayofYear, totalDays) => {
    return (dayofYear * 100) / totalDays;
  };

  const currentDate = new Date();
  const dayofYear = currentDay(currentDate);
  const totalDays = daysInYear(currentDate);
  const percentage = calculatePercentage(dayofYear, totalDays);

  return (
    <Wrapper>
      <GlobalStyle />
      <ProgressBar value={percentage} max={100} />
      <Title>Progress of year {percentage}%</Title>
    </Wrapper>
  );
}

export default App;
