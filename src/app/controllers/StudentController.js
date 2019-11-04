import * as Yup from "yup";

import Student from "../models/Student";

class StudentController {
    async store(request, response) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            age: Yup.number().required(),
            height: Yup.number().required(),
            weight: Yup.number().required(),
        });

        if (!(await schema.isValid(request.body))) {
            return response
                .status(400)
                .json({ error: "Check json structure!" });
        }

        const student = await Student.findOne({
            where: { email: request.body.email },
        });

        if (student) {
            return response
                .status(400)
                .json({ error: "Student already exists" });
        }

        const { id, name, email, age, height, weight } = await Student.create(
            request.body
        );

        return response.json({ id, name, email, age, height, weight });
    }

    async update(request, response) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email(),
            age: Yup.number(),
            height: Yup.number(),
            weight: Yup.number(),
        });

        if (!(await schema.isValid(request.body))) {
            return response
                .status(400)
                .json({ error: "Check json structure!" });
        }

        const student = await Student.findByPk(request.body.id);

        if (request.body.email && request.body.email !== student.email) {
            const studentExists = await Student.findOne({
                where: { email: request.body.email },
            });

            if (studentExists) {
                return response
                    .status(400)
                    .json({ error: "Student already exists" });
            }
        }

        const { id, name, email, age, weight, height } = await student.update(
            request.body
        );

        return response.json({ id, name, email, age, weight, height });
    }

    async index(request, response) {
        const students = await Student.findAll({
            attributes: ["id", "name", "age", "height", "weight"],
        });

        if (!students.length) {
            return response.status(204).json();
        }

        return response.json(students);
    }
}

export default new StudentController();
