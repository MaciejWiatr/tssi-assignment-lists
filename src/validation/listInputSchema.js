import Joi from "joi";

const schema = Joi.array().items(Joi.number()).required();

export default schema;
