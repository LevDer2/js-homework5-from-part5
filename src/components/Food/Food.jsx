import {
  All,
  Card,
  Image,
  Title,
  Details,
  Detail,
  Dificulty,
  DifficultyLabel,
  DifficultyRow,
  Dificult,
} from "./Food.style";

import { GiAlarmClock } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { CgGym } from "react-icons/cg";

function Food({ prop }) {
  return (
    <All>
      {prop.map(({ img, title, time_min, servings, calories, difficulty }) => {
        const diff = String(difficulty).toLowerCase();
        return (
          <Card key={title}>
            <Image src={img} alt={title} />
            <Title>{title}</Title>

            <Details>
              <Detail>
                <GiAlarmClock /> {time_min} min
              </Detail>
              <Detail>
                <IoFastFoodOutline /> {servings} servings
              </Detail>
              <Detail>
                <CgGym /> {calories} calories
              </Detail>
            </Details>

            <Dificulty>
              <DifficultyLabel>Difficulty</DifficultyLabel>
              <DifficultyRow>
                <Dificult $active={diff === "easy"}>Easy</Dificult>
                <Dificult $active={diff === "medium"}>Medium</Dificult>
                <Dificult $active={diff === "hard"}>Hard</Dificult>
              </DifficultyRow>
            </Dificulty>
          </Card>
        );
      })}
    </All>
  );
}

export default Food;
