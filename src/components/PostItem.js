import { styled } from "@mui/system";
import { Box, Container, Button } from "@mui/material";
import { AiOutlineComment } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import styles from "../styles/PostItem.module.css";
import moment from "moment";

const ContainerLayout = styled(Container)({
  width: "100%",
  margin: 0,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  borderBottom: "1px solid #CCCCCC",
});

const BoxLayout = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

export function PostItem(props) {
  return (
    <ContainerLayout>
      <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <Button
          sx={{
            padding: 0,
            marginBottom: "13px",
            "&:hover": {
              backgroundColor: "#EEEEEE",
            },
          }}
        >
          <NavLink
            to={"/" + props.postId}
            className={styles.title}
            state={props}
          >
            {props.title}
          </NavLink>
        </Button>
        <Box className={styles.date}>
          {moment(props.date).format("YYYY.MM.DD")} {props.writer}
        </Box>
      </Box>
      <BoxLayout>
        <AiOutlineComment style={{ width: "21px", height: "20px" }} />
        <Box className={styles.count}>{props.count}</Box>
      </BoxLayout>
    </ContainerLayout>
  );
}
