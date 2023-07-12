import React, { useState } from "react";
import ArrowLeft from "../images/svg/arrow-left.svg";
import { Button } from "./Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "./Input";

export const ModalForm = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const validationSchema = Yup.object().shape({
        nomeLoja: Yup.string().required("Nome da loja é obrigatório"),
        cidade: Yup.string().required("Cidade é obrigatória"),
        latitude: Yup.string().required("Latitude é obrigatória"),
        longitude: Yup.string().required("Longitude é obrigatória"),
        montante: Yup.string().required("Montante do mês é obrigatório"),
    });

    const formik = useFormik({
        initialValues: {
            nomeLoja: "",
            cidade: "",
            latitude: "",
            longitude: "",
            montante: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div>
            <button
                className="text-agility-gray-color-80 font-medium py-2 px-4 rounded flex items-center"
                onClick={openModal}
            >
                <p className="text-2xl font-medium mr-2 text-agility-brand-color-blue-100">
                    +
                </p>{" "}
                Cadastrar loja
            </button>

            {modalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-end bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded shadow h-screen w-full md:w-[20%]">
                        <div className="w-full flex items-center justify-between">
                            <img
                                className="cursor-pointer"
                                onClick={closeModal}
                                src={ArrowLeft}
                                alt=""
                            />
                            <p>Cadastrar Loja</p>
                            <div />
                        </div>
                        <div className="mt-4">
                            <div className="mt-3">
                                <Input
                                    id="nomeLoja"
                                    title="Nome da loja"
                                    placeholder="Digite aqui"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.nomeLoja}
                                />
                                {formik.touched.nomeLoja && formik.errors.nomeLoja && (
                                    <div className="text-red-500">{formik.errors.nomeLoja}</div>
                                )}
                            </div>
                            <div className="mt-3">
                                <Input
                                    id="cidade"
                                    title="Cidade"
                                    placeholder="Digite aqui"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.cidade}
                                />
                                {formik.touched.cidade && formik.errors.cidade && (
                                    <div className="text-red-500">{formik.errors.cidade}</div>
                                )}
                            </div>
                            <div className="mt-3">
                                <Input
                                    id="latitude"
                                    title="Latitude"
                                    placeholder="Digite aqui"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.latitude}
                                />
                                {formik.touched.latitude && formik.errors.latitude && (
                                    <div className="text-red-500">{formik.errors.latitude}</div>
                                )}
                            </div>
                            <div className="mt-3">
                                <Input
                                    id="longitude"
                                    title="Longitude"
                                    placeholder="Digite aqui"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.longitude}
                                />
                                {formik.touched.longitude && formik.errors.longitude && (
                                    <div className="text-red-500">{formik.errors.longitude}</div>
                                )}
                            </div>
                            <div className="mt-3">
                                <Input
                                    id="montante"
                                    title="Montante do mês"
                                    placeholder="Digite aqui"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.montante}
                                />
                                {formik.touched.montante && formik.errors.montante && (
                                    <div className="text-red-500">{formik.errors.montante}</div>
                                )}
                            </div>
                            <div className="mt-3">
                                <Button
                                    title="Cadastrar"
                                    type="submit"
                                    disabled={formik.isSubmitting}
                                />
                            </div>
                            <button
                                className="h-14 flex justify-center items-center w-full"
                                type="button"
                                onClick={formik.handleReset}
                            >
                                Limpar campos
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
