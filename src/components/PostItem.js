import { styled } from "@mui/system";
import { Box, Container } from "@mui/material";
import { AiOutlineComment } from "react-icons/ai";
import styles from "../styles/PostItem.module.css";

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
        <Box className={styles.title}>{props.title}</Box>
        <Box className={styles.date}>
          {props.date} {props.writer}
        </Box>
      </Box>
      <BoxLayout>
        <AiOutlineComment style={{ width: "21px", height: "20px" }} />
        <Box className={styles.count}>{props.count}</Box>
      </BoxLayout>
    </ContainerLayout>
  );
}
