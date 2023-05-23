import { Button, ButtonGroup, Container, Box, Pagination } from "@mui/material";
import { SearchBar } from "../components/SearchBar";
import { styled } from "@mui/system";
import { useState } from "react";
import { PostItem } from "../components/PostItem";

const ContainerLayout = styled(Container)({
  marginTop: "45px",
  padding: 0,
});

const BoardButtonLayout = styled(Button)({
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  padding: 0,
  marginLeft: "20px",
  marginRight: "20px",
  letterSpacing: "0.1em",
});

const WriteButtonLayout = styled(Button)({
  backgroundColor: "#F9F9F9",
  borderRadius: "4px",
  width: "100px",
  height: "40px",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  letterSpacing: "0.1em",
  color: "#000000",
  marginLeft: "30px",
});

function Board() {
  let data = [
    { text: "전체", href: "" },
    { text: "공지", href: "/notification" },
    { text: "잡담", href: "/normal" },
  ];
  const [btnActive, setBtnActive] = useState("");
  const toggleActive = (e) => {
    setBtnActive(() => e.target.value);
    console.log(btnActive);
  };
  return (
    <ContainerLayout>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ButtonGroup variant="string">
          {data.map((item, idx) => {
            return (
              <BoardButtonLayout
                key={idx}
                value={idx}
                onClick={toggleActive}
                sx={{
                  color: idx == btnActive ? "#000000" : "#ADADAD",
                  borderBottom: 2,
                  borderBottomColor: idx == btnActive ? "#1073DE" : "#FFFFFF",
                  borderRadius: 0,
                }}
              >
                {item.text}
              </BoardButtonLayout>
            );
          })}
        </ButtonGroup>
        <Box component="span">
          <SearchBar />
          <WriteButtonLayout>글쓰기</WriteButtonLayout>
        </Box>
      </Container>
      <Container>
        <PostItem title="MT 공지" writer="김동현" date="2023.05.26" count="4" />
        <PostItem title="MT 공지" writer="김동현" date="2023.05.26" count="4" />
        <PostItem title="MT 공지" writer="김동현" date="2023.05.26" count="4" />
        <PostItem title="MT 공지" writer="김동현" date="2023.05.26" count="4" />
        <PostItem title="MT 공지" writer="김동현" date="2023.05.26" count="4" />
        <PostItem title="MT 공지" writer="김동현" date="2023.05.26" count="4" />
        <PostItem title="MT 공지" writer="김동현" date="2023.05.26" count="4" />
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Pagination count={5} color="primary" />
      </Container>
    </ContainerLayout>
  );
}

export default Board;
