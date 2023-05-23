import { useLocation } from "react-router-dom";
import { Container, Stack, Box } from "@mui/system";
import {
  TextField,
  Button,
  ImageList,
  ImageListItem,
  styled,
} from "@mui/material";
import styles from "../styles/Post.module.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import moment from "moment";
import "moment/locale/ko";
import { useState, useEffect } from "react";

const CommentWriteLayout = styled(TextField)({
  background: "#F9F9F9",
  borderRadius: "4px",
  width: "100%",
});

function Post() {
  const location = useLocation();
  const [commentText, setCommentText] = useState("");

  const handleCommentChange = (e) => {
    if (e.target.value.length <= 100) setCommentText(e.target.value);
  };
  return (
    <Container sx={{ marginTop: "50px" }}>
      <Stack flexDirection="row" justifyContent="space-between">
        <Box>
          <Box className={styles.title}>{location.state.title}</Box>
          <Box className={styles.info}>
            {moment(location.state.date).format("llll")} {location.state.writer}
          </Box>
        </Box>
        <Box>
          <Button>
            <BiDotsVerticalRounded size={20} color="#000000" />
          </Button>
        </Box>
      </Stack>
      <Box className={styles.content}>{location.state.content}</Box>
      <Container disableGutters sx={{ marginTop: "15px" }}>
        <Box className={styles.picText}>사진</Box>
        <ImageList
          cols={location.state.images.length + 1}
          sx={{ marginTop: "10px" }}
        >
          {location.state.images.map((img, idx) => (
            <ImageListItem key={idx} sx={{ width: "250px", height: "220px" }}>
              <img src={img} style={{ width: "250px", height: "220px" }} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <Container disableGutters>
        <Box sx={{ marginBottom: "4px" }}>
          <span className={styles.commentName}>댓글 </span>
          <span className={styles.count} style={{ color: "#1e4cf4" }}>
            {location.state.count}
          </span>
        </Box>
        <CommentWriteLayout
          multiline={true}
          placeholder="댓글을 남겨보세요!"
          sx={{ "& fieldset": { border: "none" } }}
          onChange={handleCommentChange}
          InputProps={{
            endAdornment: (
              <Box
                component="span"
                sx={{
                  position: "absolute",
                  right: "5px",
                  bottom: "10px",
                }}
                className={styles.commentGuide}
              >
                <span>{commentText.length}/100</span>
                <Button sx={{ color: "#A7A7A7" }}>등록</Button>
              </Box>
            ),
          }}
        />
      </Container>
      <Stack></Stack>
    </Container>
  );
}

export default Post;
