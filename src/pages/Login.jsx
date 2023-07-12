import React from "react";
import img from "../images/aerial-view-factory-trucks-parked-near-warehouse-daytime 1.png";
import logo from "../images/svg/logo.svg";
import { InputPassword } from "../components/InputPassword";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/authContext";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export const Login = () => {
    const auth = useAuth();

    const validationSchema = Yup.object().shape({
        email: Yup.string().required("Email é obrigatório"),
        senha: Yup.string().required("Senha é obrigatório"),
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            senha: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log(values);
            await auth.login(values.email, values.senha);
        },
    });
    return (
        <section>
            <div className="min-h-screen bg-white flex">
                <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm">
                        <div className="relative">
                            <img
                                src={logo}
                                alt="logo"
                                className="absolute bottom-60 left-0"
                            />
                        </div>
                        <h2 className="mt-6 text-[32px] font-semibold text-black">Login</h2>
                        <p className="mb-4 text-gray-400">
                            Informe os dados abaixo para acessar a nossa plataforma.
                        </p>
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <div>
                                    <Input
                                        id="email"
                                        title="Login"
                                        placeholder="Digite aqui"
                                        type="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <div className="text-red-500">{formik.errors.email}</div>
                                    )}
                                </div>
                                <div className="mt-3 mb-3">
                                    <InputPassword
                                        id="senha"
                                        title="Senha"
                                        placeholder="Digite aqui"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.senha}
                                    />
                                    {formik.touched.senha && formik.errors.senha && (
                                        <div className="text-red-500">{formik.errors.senha}</div>
                                    )}
                                </div>
                                <div>
                                    <Button
                                        title="Acessar"
                                        type="submit"
                                        disabled={formik.isSubmitting}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="hidden lg:block relative w-0 flex-1 bg-gray-900">
                    <div className="flex h-full justify-center items-center">
                        <img
                            src={img}
                            alt="Imagem de fundo"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
