import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import ListSchema from "../../src/validation/listInputSchema";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { addListToHistory } from "../../src/features/listsHisotry/listsHistorySlice";

const ListFormInput = styled(motion.input)`
    border: 2px solid black;
    border-radius: 75px;
    height: 50px;
    box-sizing: border-box;
    min-width: 300px;
    padding: 10px;
    letter-spacing: 2px;
    outline: none;
`;

const FancyButton = styled(motion.button)`
    border: 2px solid black;
    border-radius: 75px;
    height: 50px;
    color: white;
    background-color: black;
    margin-left: 5px;
    padding: 10px;
    transition: all 0.25s ease;
    outline: none;

    &:hover {
        color: black;
        background-color: white;
        cursor: pointer;
    }

    @media (max-width: 550px) {
        & {
            margin-top: 5px;
            margin-left: 0px;
            min-width: 300px;
        }
    }
`;

const FormErrorMessage = styled(motion.div)`
    width: 100%;
    text-align: center;
    color: red;
    border-radius: 10px;
    margin: 10px 0px;
`;

const Form = styled(motion.form)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
`;

const ListForm = () => {
    const [formError, setFormError] = useState({});
    const ListInputRef = useRef(null);
    const dispatch = useDispatch();

    const getDividableByThree = (arr) => {
        const newArr = [];
        arr.forEach((el) => (el % 3 === 0 ? newArr.push(el) : () => {}));
        return newArr;
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const arrFromInput = ListInputRef.current.value.split(",");
        const { error } = ListSchema.validate(arrFromInput);
        if (error) {
            setFormError({ error: "Nieprawidłowy format listy" });
        } else {
            setFormError({});
            dispatch(
                addListToHistory({
                    originalList: arrFromInput,
                    result: getDividableByThree(arrFromInput),
                })
            );
        }
    };

    return (
        <Form onSubmit={onSubmit}>
            <ListFormInput
                placeholder="1,2,3,4"
                ref={ListInputRef}
                required
            ></ListFormInput>
            <FancyButton type="submit">Wypisz podzielne przez 3</FancyButton>
            {formError ? (
                <FormErrorMessage>{formError.error}</FormErrorMessage>
            ) : null}
        </Form>
    );
};

export default ListForm;
