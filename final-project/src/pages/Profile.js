import React from 'react';
import Cookies from "js-cookie"

const Profile = () => {
    const user = JSON.parse(Cookies.get('user'));

    return(
        <>
            <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto mt-28">
                <div className="flex justify-center">
                        <img src={user.image_url} alt="" className="object-cover rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/>
                </div>
                <div className="mt-16">
                    <h1 className="font-bold text-center text-3xl text-gray-900">{user.name}</h1>
                    <label className="w-full text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 text-center">
                        {user.email}
                    </label>
                    <label className="text-sm w-full text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150 text-center">
                        Created: {user.created_at}
                    </label>
                </div>
            </div>
        </>
    )
}

export default Profile;