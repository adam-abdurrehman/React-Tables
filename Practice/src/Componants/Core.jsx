import React from 'react'

const Core = () => {
    const user = [
        {
            name: "Abdurrehman",
            role: "Front-end web developer",
            email: "abdurrehman12k6@gmail.com"
        },

        {
            name: "Abdullah",
            role: "Creative Designer",
            email: "abdullah@gmail.com"
        },
        {
            name: "Husnain",
            role: "UI/UX designer",
            email: "husnain@gmail.com"
        },
    ];
  return (
    <div className='text-2xl text-white w-[500px] h-[550px] bg-neutral-800 rounded-xl shadow-md flex flex-col items-center justify-center text-center m-auto'>
        {user.map(user => (
            <table className='flex items-center content-center flex-col ps-2 w-4/5 gap-2'>
                <tr className='border border-zinc-700 cursor-pointer hover:bg-neutral-900  p-1 rounded-xl w-full'>
                {user.name}
                </tr>
                <tr className='border border-zinc-700 cursor-pointer hover:bg-neutral-900 p-1 rounded-xl w-full'>
                {user.role}
                </tr>
                <tr className='border border-zinc-700 cursor-pointer hover:bg-neutral-900 p-1 rounded-xl w-full'>
                {user.email}
                </tr>
            </table>
            
        ))}
    </div>
  )
}

export default Core