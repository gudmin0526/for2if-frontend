import {
  Stack,
  Button,
  ButtonGroup,
  Container,
  Box,
  Pagination,
} from "@mui/material";
import { SearchBar } from "../components/SearchBar";
import { styled } from "@mui/system";
import { useState, useEffect } from "react";
import { PostItem } from "../components/PostItem";
import dummydata from "../assets/dummydata";

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
  const [page, setPage] = useState(1); // 첫 페이지는 1
  const [posts, setPosts] = useState([dummydata.slice(7)]); // 첫 페이지의 posts

  const LAST_PAGE =
    dummydata.length % 7 === 0
      ? parseInt(dummydata.length / 7)
      : parseInt(dummydata.length / 7) + 1;

  useEffect(() => {
    setPosts(
      page === LAST_PAGE
        ? dummydata.slice(7 * (page - 1))
        : dummydata.slice(7 * (page - 1), 7 * (page - 1) + 7)
    );
  }, [page]);

  const handlePage = (e) => {
    const nowPageInt = parseInt(e.target.outerText);
    setPage(nowPageInt);
  };

  const toggleActive = (e) => {
    setBtnActive(() => e.target.value);
    console.log(btnActive);
  };
  return (
    <ContainerLayout>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          marginBottom: "5px",
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
      </Stack>
      <Stack>
        {posts.map((item, idx) => {
          return (
            <Stack key={idx}>
              <PostItem {...item} />
            </Stack>
          );
        })}
      </Stack>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        <Pagination
          count={LAST_PAGE}
          defaultPage={1}
          onChange={handlePage}
          color="primary"
        />
      </Container>
    </ContainerLayout>
  );
}

export default Board;
