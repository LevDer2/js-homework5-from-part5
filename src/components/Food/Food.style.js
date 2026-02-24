import styled from "styled-components";

export const All = styled.ul`
  margin: 0;
  padding: 40px 60px;

  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: center;
  align-items: flex-start;

  background: #fbf2cf;
`;

export const Card = styled.li`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 18px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #111;
`;

export const Details = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 99px;
  padding: 10px 14px;

  display: flex;
  justify-content: space-between;
  gap: 12px;

  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.04);
`;

export const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  font-size: 12px;
  color: #222;
  white-space: nowrap;
`;

export const Dificulty = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 16px;
  padding: 14px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DifficultyLabel = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  color: #111;
`;

export const DifficultyRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const Dificult = styled.span`
  padding: 6px 10px;
  border-radius: 99px;

  font-size: 12px;
  line-height: 1;

  background: ${({ $active }) => ($active ? "#ff6f73" : "#fff2c7")};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};
`;