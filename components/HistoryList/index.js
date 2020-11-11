/**@jsx jsx */
import { useSelector } from "react-redux";
import {
    selectListHistory,
    selectClearing,
} from "../../src/features/listsHisotry/listsHistorySlice";
import { AnimatePresence } from "framer-motion";
import { css, jsx } from "@emotion/core";
import styles from "./index.module.scss";
import { useEffect, useRef } from "react";
import ListItem from "../ListItem";

const HistoryList = () => {
    const listHistory = useSelector(selectListHistory)
        ? useSelector(selectListHistory)
        : [];
    const isClearing = useSelector(selectClearing);
    const firstRender = useRef(true);

    useEffect(() => {
        firstRender.current = false;
    }, []);

    return (
        <div className={styles.history__container}>
            <h2 className={styles.history__header}>
                <p>Historia </p>
                <div className={styles.history__header__line}></div>
            </h2>
            <div
                className={styles.history__table__container}
                css={css`
                    max-height: ${`${listHistory.length * 20.91 + 40}px`};
                    transition: max-height ${isClearing ? "0.6s" : "0.3s"} ease;
                    transition-delay: ${isClearing ? "0.5s" : "0s"};
                    overflow: hidden;
                `}
            >
                <div className={styles.history__table__header}>Lista</div>
                <div className={styles.history__table__header}>Wynik</div>
                <div className={styles.history__table__column} key="original">
                    <AnimatePresence>
                        {listHistory.map((el, index) => (
                            <ListItem
                                value={el.originalList}
                                index={index}
                                key={index}
                                firstRender={firstRender.current}
                            />
                        ))}
                    </AnimatePresence>
                </div>
                <div className={styles.history__table__column} key="result">
                    <AnimatePresence>
                        {listHistory.map((el, index) => (
                            <ListItem
                                value={el.result}
                                index={index}
                                key={index}
                                firstRender={firstRender.current}
                            />
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default HistoryList;
