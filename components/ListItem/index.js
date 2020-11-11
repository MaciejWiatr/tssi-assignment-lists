/**@jsx jsx */
import { motion } from "framer-motion";
import { jsx, css } from "@emotion/core";

const ListItem = ({ value, index, firstRender }) => {
    return (
        <motion.div
            css={css`
                overflow: hidden !important;
            `}
        >
            <motion.p
                css={css`
                    margin: 0px;
                `}
                initial={{
                    transform: "translateX(-120px)",
                }}
                animate={{
                    transform: "translateX(0px)",
                }}
                exit={{
                    opacity: 0,
                    transition: {
                        delay: index / 7,
                    },
                }}
                transition={{
                    delay: firstRender ? index / 7 : 0.3,
                }}
            >
                [{`${value}`}]
            </motion.p>
        </motion.div>
    );
};

export default ListItem;
