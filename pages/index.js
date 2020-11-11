import styled from "@emotion/styled";
import { motion } from "framer-motion";
import styles from "./index.module.scss";
import {
    clearListHistory,
    changeClearingAsync,
} from "../src/features/listsHisotry/listsHistorySlice";
import { useDispatch } from "react-redux";
import ListForm from "../components/ListForm";
import HistoryList from "../components/HistoryList";

const Header = styled(motion.h1)`
    font-size: 3rem;
    text-align: center;
    margin-bottom: 5px;
    overflow: hidden;
    & p {
        margin: 0px;
    }
`;

const ClearButton = styled(motion.button)`
    position: fixed;
    bottom: 0px;
    margin-bottom: 50px;
    background: white;
    color: lightgray;
    border: none;
    cursor: pointer;
    box-shadow: 0px 6px 23px -4px rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 25px;
`;

export default function Home() {
    const dispatch = useDispatch();

    return (
        <motion.div className={styles.main__container} id="tsparticles">
            <Header>
                <motion.p
                    initial={{ transform: "translateY(100px)" }}
                    animate={{ transform: "translateY(0px)" }}
                    exit={{ transform: "translateY(100px)" }}
                >
                    Wprowadź listę{" "}
                    <span className={styles.header__highlight}>numerów</span>
                </motion.p>
            </Header>
            <ListForm />
            <HistoryList />
            <ClearButton
                onClick={async () => {
                    dispatch(clearListHistory());
                    dispatch(changeClearingAsync());
                }}
                whileHover={{ scale: 1.1 }}
            >
                Wyczyść Historię
            </ClearButton>
        </motion.div>
    );
}
export async function getStaticProps(context) {
    return {
        props: {},
    };
}
