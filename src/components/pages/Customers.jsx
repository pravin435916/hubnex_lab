import React from 'react';
export const Customers = () => {
    const UsersData = [
        {
            info:"As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
            img:"https://images.pexels.com/photos/11406237/pexels-photo-11406237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name:"Alex Rivera",
            id:"jamietechguru00",
        },
        {
            info:"I was amazed at how quickly we were able to integrate this app into our workflow.",
            img:"https://images.pexels.com/photos/11406237/pexels-photo-11406237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name:"Casey Jordan",
            id:"caseyj",
        },
        {
            info:"Adopting this app for our team has streamlined our project management and improved communication across the board. ",
            img:"https://images.pexels.com/photos/11406237/pexels-photo-11406237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name:"Jordan Patels",
            id:"jpatelsdesign",
        },
        {
            info:"Our team’s productivity has skyrocketed since we started using this tool. ",
            img:"https://images.pexels.com/photos/11406237/pexels-photo-11406237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name:"Josh Smith",
            id:"jjsmith",
        },
        {
            info:"Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
            img:"https://images.pexels.com/photos/11406237/pexels-photo-11406237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name:"Taylor Kim",
            id:"taylorkimm",
        },
        {
            info:"With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
            img:"https://images.pexels.com/photos/11406237/pexels-photo-11406237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name:"Sam Dawson",
            id:"dawsontechtips",
        },
        {
            info:"This app has completely transformed how I manage my projects and deadlines.",
            img:"https://images.pexels.com/photos/11406237/pexels-photo-11406237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name:"Morgan Lee",
            id:"morganleewhiz",
        },
        {
            info:"The customizability and integration capabilities of this app are top-notch.",
            img:"https://images.pexels.com/photos/11406237/pexels-photo-11406237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name:"Riley Smith",
            id:"rileysmith1",
        },
        {
            info:"Its user-friendly interface and robust features support our diverse needs.",
            img:"https://images.pexels.com/photos/11406237/pexels-photo-11406237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name:"Casey Harper",
            id:"casey09",
        },
    ]
    return (
        <div className='w-full h-full overflow-hidden relative'>
            <div className='w-full h-full flex justify-center items-center flex-col gap-4 p-8 bg-gradient-to-b from-white to-transparant'>
                <span className='border border-gray-300 p-2 rounded-lg'>Testimonials</span>
                <span className='text-3xl sm:text-5xl font-bold sm:w-[32rem] text-center'>What our users say</span>
                
                <div className='w-[90vw] flex justify-center items-center flex-wrap gap-4 mt-4 ' >
                   {
                    UsersData.map((user,index)=> (
                        <div key={index} className='w-[22rem] flex flex-col border-xs shadow-xl rounded-[1rem] p-6 gap-2'>
                          <span>{user.info}</span>
                          <div className='flex gap-4 items-center'>
                            <img className='w-10 h-10 border rounded-full' src={user.img} alt="" />
                            <div className='flex flex-col'>
                                <span>{user.name}</span>
                                <span>@{user.id}</span>
                            </div>
                          </div>
                        </div>
                    ))
                   }
                </div>
            </div>
        </div>
    );
};
