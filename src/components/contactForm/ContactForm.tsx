import { useState } from "react";


export default function ContactForm() {

    const [option, setOption] = useState<'hello' | 'quote'>('hello');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const option = formData.get('option');
        console.log(name, email, message, option);
    }

    return (
        <form 
            className="flex flex-col gap-10 w-full lg:w-1/2"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-wrap gap-10 items-center">
                <div className="flex flex-row gap-4">
                    <label className="flex flex-row gap-2 items-center">
                        <input 
                            type='radio'
                            name="option"
                            value="hello"
                            checked={option === 'hello'}
                            onChange={() => setOption('hello')}
                            className="hidden"
                        />
                        <span
                        className={`w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center
                            `}
                        >
                    
                        <span className={`w-5 h-5 rounded-full bg-myGreen transition-all duration-200 
                            cursor-pointer ${option === 'hello' ? 'opacity-100' : 'opacity-0'}`}></span>
                        </span>
                        <span className="space-grotesk-400 text-lg">Say Hello</span>
                    </label>
                </div>
                <div className="flex flex-row gap-4">
                    <label className="flex flex-row gap-2 items-center">
                        <input 
                            type='radio'
                            name='option'
                            value="quote"
                            checked={option === 'quote'}
                            onChange={() => setOption('quote')}
                            className="hidden"
                        />
                        <span
                        className={`w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center
                            `}
                        >
                    
                        <span className={`w-5 h-5 rounded-full bg-myGreen transition-all duration-200 
                            cursor-pointer ${option === 'quote' ? 'opacity-100' : 'opacity-0'}`}></span>
                        </span>
                        <span className="space-grotesk-400 text-lg">Get a Quote</span>
                    </label>
                </div>
            </div>
            <label className="flex flex-col gap-2 items-start">
                <span className="space-grotesk-400 text-lg">Name*</span>
                <input 
                    type="text" 
                    className="w-full rounded-md border border-gray-300 outline-none space-grotesk-400 bg-white p-4" 
                    name="name" 
                    required
                />
            </label>
            <label className="flex flex-col gap-2 items-start">
                <span className="space-grotesk-400 text-lg">Email*</span>
                <input 
                    type="email" 
                    className="w-full rounded-md border border-gray-300 outline-none space-grotesk-400 bg-white p-4" 
                    name="email" 
                    required
                />
            </label>
            <label className="flex flex-col gap-2 items-start">
                <span className="space-grotesk-400 text-lg">Message*</span>
                <textarea 
                    className="w-full rounded-md border border-gray-300 outline-none space-grotesk-400 bg-white p-4 resize-none" 
                    name="message" 
                    required
                />
            </label>
            <button 
                type="submit" 
                className={`
                    w-full py-4 rounded-md bg-myBlack text-white 
                    cursor-pointer hover:bg-myGreen transition-all duration-200 
                    hover:text-myBlack hover:scale-105 text-lg space-grotesk-400
                    `}
            >
                Send
            </button>
        </form>
    )
}