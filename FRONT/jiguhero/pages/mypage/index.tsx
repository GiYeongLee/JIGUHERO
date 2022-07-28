import { border, Box, color, Container } from "@mui/system";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Link from "next/link";
import { ButtonBorder, ButtonFull } from "styles/styled";
import { theme } from "pages/theme";

const Profile = styled("div")`
  display: flex;
  h2 {
    font-family: "PyeongChangPeace-Bold";
    font-size: 28px;
    margin: 10px 60px 20px 20px;
  }
  box {
    margin: 30px;
  }
  &:hover {
    cursor: pointer;
  }
`;

const BgImg = styled("div")`
  position: relative;
  width: 65px;
  height: 65px;

  border: 2px solid transparent;
  border-radius: 50%;
  background-image: linear-gradient(to bottom, #ff4848, #ffd362);
  background-origin: border-box;
  background-clip: content-box, border-box;
  img {
    display: flex;
    align-items: center;
    left: 2.5px;
    top: 2.4px;
    justify-content: center;
    position: relative;
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`;

const EntireContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: sm;
`;

const TextGroup = styled("div")`
  text-align: start;
  line-height: 2;
`;

const ButtonGroup = styled("div")`
  button {
    margin: 5px;
  }
`;

const Play = styled("div")`
  border-radius: 20px;
  border: solid 1px #65ace2;
  margin: 15px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 250px;
  height: 80px;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;
const Mis = styled("div")`
  border-radius: 20px;
  border: solid 1px #65ace2;
  margin: 15px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 250px;
  height: 80px;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }
`;

const Mypage = () => {
  // 탭 전환
  const [tab, setTab] = useState(true);

  // 프로필
  function ProfileDiv() {
    return (
      <Profile>
        <BgImg>
          <img alt="nitz" src="IMG_1008.JPG" />
        </BgImg>

        <h2>니츠</h2>
        <Box margin="14px 0 0 0">
          <ArrowForwardIosRoundedIcon />
        </Box>
      </Profile>
    );
  }

  // 임무
  function Mission() {
    const MissionList = ["하나", "둘", "셋"];

    return (
      <>
        {MissionList.map((num) => (
          <Link href="/" key={num}>
            <a>
              <Mis>{num}</Mis>
            </a>
          </Link>
        ))}
      </>
    );
  }

  // 활동구역
  function PlayingArea() {
    const PlayedArea = [
      { icon: "❤️", title: "내가 애정하는 친환경 카페" },
      { icon: "🏝", title: "제주도의 제로웨이스트 샵" },
      { icon: "🍽", title: "광주광역시의 비건식당" },
    ];

    return (
      <>
        {PlayedArea.map((dic) => (
          <Link href="/" key={dic.title}>
            <a>
              <Play key={dic.title}>
                {dic.icon}
                <br />
                {dic.title}
              </Play>
            </a>
          </Link>
        ))}
      </>
    );
  }

  // 프로필 클릭
  const onClickBox = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(event);
  };

  return (
    <EntireContainer>
      <Box onClick={onClickBox}>
        <Grid container>
          <Grid item xs={12}>
            <ProfileDiv />
          </Grid>
        </Grid>
      </Box>
      <TextGroup>
        <h3>현재 보유 포인트: 500</h3>
        <p>👀내가 좋아요한 활동구역 & 임무</p>
      </TextGroup>

      <ButtonGroup>
        {tab ? (
          <ButtonFull
            dColor={"#98C064"}
            hColor={"#65ACE2"}
            onClick={() => {
              setTab(true);
            }}
          >
            활동구역
          </ButtonFull>
        ) : (
          <ButtonBorder
            dColor={"#65ACE2"}
            onClick={() => {
              setTab(true);
            }}
          >
            활동구역
          </ButtonBorder>
        )}
        {tab ? (
          <ButtonBorder
            dColor={"#65ACE2"}
            onClick={() => {
              setTab(false);
            }}
            color={tab ? "hanle" : "yeondoo"}
          >
            임무
          </ButtonBorder>
        ) : (
          <ButtonFull
            dColor={"#98C064"}
            hColor={"#65ACE2"}
            onClick={() => {
              setTab(false);
            }}
          >
            임무
          </ButtonFull>
        )}
      </ButtonGroup>
      <Box>{tab ? <PlayingArea /> : <Mission />}</Box>
      <ButtonFull dColor={"#FF4848"} hColor={"#FF4848"}>
        로그아웃
      </ButtonFull>
    </EntireContainer>
  );
};

export default Mypage;
