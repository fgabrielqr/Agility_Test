import React from 'react'
import profile from '../images/svg/profile-2user.svg';
import Map from '../images/svg/map-2.svg';
import Cpu from '../images/svg/cpu.svg';
import Building from "../images/svg/building.svg";
import ArrowTop from "../images/svg/arrow-top2.svg";
import ArrowDown from "../images/svg/arrow-down-red.svg";
import Minus from "../images/svg/minus-square.svg";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [];
for (let i = 1; i <= 30; i++) {
    data.push({ day: i, value: Math.floor(Math.random() * 100) });
}

const list = [
    {
        id: 1,
        icon: profile,
        title: "Total de clientes",
        subtitle: "Crescimento de",
        valuesubtitle: "10%",
        colorsubtitle: "text-agility-brand-color-green",
        iconsubtitle: ArrowTop,
        value: "+12mil",
    },
    {
        id: 2,
        icon: Map,
        title: "Total de cidades",
        subtitle: "Constância de",
        valuesubtitle: "10%",
        colorsubtitle: "text-agility-brand-color-yellow",
        iconsubtitle: Minus,
        value: "106",
    },
    {
        id: 3,
        icon: Cpu,
        title: "Total de assinaturas",
        subtitle: "Crescimento de",
        valuesubtitle: "10%",
        colorsubtitle: "text-agility-brand-color-green",
        iconsubtitle: ArrowTop,
        value: "+13mil",
    },
    {
        id: 4,
        icon: Building,
        title: "Total de lojas parceiras",
        subtitle: "Declinação de",
        valuesubtitle: "02%",
        colorsubtitle: "text-agility-brand-color-red",
        iconsubtitle: ArrowDown,
        value: "134",
    },
];

const listCity = [
    {
        id: 1,
        cidade: "Pereiro",
        montante: "R$ 120.334",
    },
    {
        id: 2,
        cidade: "São Miguel",
        montante: "R$ 114.423",
    },
    {
        id: 3,
        cidade: "Jaguaribe",
        montante: "R$ 112.781",
    },
    {
        id: 4,
        cidade: "Icó",
        montante: "R$ 109.988",
    },
    {
        id: 5,
        cidade: "Iguatu",
        montante: "R$ 107.326",
    },
    {
        id: 6,
        cidade: "Cedro",
        montante: "R$ 102.454",
    },
    {
        id: 7,
        cidade: "Lavras da Mangabeira",
        montante: "R$ 90.760",
    },
    {
        id: 8,
        cidade: "Juazeiro do Norte",
        montante: "R$ 90.750",
    },
];

export const Main = () => {
    return (
        <div className='px-[25px] pt-[25px] bg-[#F8F9FC] pb-[40px]'>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ">
                {list.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-8 rounded-[8px] shadow-sm flex"
                    >
                        <div className="w-[60%]">
                            <img src={item.icon} alt="" />
                            <p className="mt-1 mb-1 font-semibold text-base text-[#4F4F4F]">
                                {item.title}
                            </p>
                            <div>
                                <div className="font-medium text-sm flex items-center text-[#4F4F4F]">
                                    {item.subtitle}
                                    <div className="flex ml-0.5 items-center text-[#4F4F4F]">
                                        <p className={`${item.colorsubtitle}`}>
                                            {item.valuesubtitle}
                                        </p>
                                        <img src={item.iconsubtitle} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-end w-[40%] text-[#4F4F4F]">
                            <p className="font-bold text-3xl ">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex mt-[22px] w-full gap-[30px]'>
                <div className='basis-[76%] border bg-white shadow-md cursor-pointer rounded-[12px]'>
                    <div className='flex items-center justify-between py-[15px] px-[20px]'>
                        <h2 className='text-[#4F4F4F] text-[24px] p-5 leading-[19px] font-bold'>Entrada de clientes - Julho</h2>
                    </div>

                    <div className="w-full">
                        <LineChart width={1150}
                            height={500} data={data} margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="value" name='Entradas de clientes' stroke="#2382A0" />
                        </LineChart>
                    </div>

                </div>
                <div className="basis-[24%] bg-white p-5 shadow-md cursor-pointer rounded-[12px]">
                    <p className=" py-4 font-semibold text-2xl text-agility-gray-color-80">
                        Ranking de cidades
                    </p>
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase ">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Cidade
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Montante
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {listCity.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="bg-white border-b border-agility-gray-color-20"
                                    >
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium whitespace-nowrap text-agility-gray-color-100"
                                        >
                                            {item.cidade}
                                        </th>
                                        <td className="px-6 py-4 text-agility-gray-color-100">
                                            {item.montante}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    )
}
