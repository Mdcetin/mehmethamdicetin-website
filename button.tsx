import React from 'react'
export default function Button({children,...props}: React.ButtonHTMLAttributes<HTMLButtonElement>){return <button {...props} className='px-4 py-2 rounded-xl bg-slate-900 text-white'>{children}</button>}
