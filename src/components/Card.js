import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Card() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const doc = await axios.get("https://randomuser.me/api/?page=1&results=10&inc=name,gender,phone,picture");
            console.log("🚀 ~ doc:", doc.data["results"])
            setData(doc.data["results"])
        }
        fetchData();
    }, [])
    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto  grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-2 ">
                    <ul className="grid gap-x-8  gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {data.map((ele, ind) => {
                            return (
                                <li key={ind} >
                                    <div className="flex  justify-center items-center gap-x-6 border-2 ">
                                        <img className="h-25 w-25 pt-10 pb-10" src={ele.picture["large"]} alt="avatar" />
                                        <div>
                                            <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">{ele.name['first']} {ele.name['last']}</h3>
                                            <p className="text-base font-semibold leading-6 text-indigo-600">{ele.gender}</p>
                                            <p className="text-base font-semibold leading-6 text-indigo-600">{ele.phone}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div >
        </>
    )
}

export default Card