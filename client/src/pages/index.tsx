// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import { useState } from 'react'
// import axios from 'axios'

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//     const [amout, setAmout] = useState(0)
//     const [image, setImage] = useState("")

//     const generateQRCode = async () => {
//         try {
//             const { data } = await axios.post("http://localhost:5050/generate", { amout })
//             setImage(data.result)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     return (
//         <div className="hero min-h-screen bg-base-200">
//             <div className="hero-content text-center">
//                 <div className="max-w-md flex gap-6 flex-col">
//                     <h1 className="text-5xl font-bold">PromptPay Qrcode Generator</h1>
//                     <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     <input type="number" placeholder="Type here" className="input input-bordered input-primary" value={amout} onChange={(event) => { setAmout(event.target.value) }} />
//                     {image && <Image src={image} alt='qrcode' />}
//                     <button className="btn btn-primary" onClick={generateQRCode}>Generate</button>
//                 </div>
//             </div>
//         </div>)
// }
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [amount, setAmount] = useState(0);
    const [image, setImage] = useState('');

    const generateQRCode = async () => {
        try {
            const { data } = await axios.post("http://localhost:5050/generate", { amount });
            setImage(data.result);
            console.log(data.result)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md flex gap-6 flex-col">
                    <h1 className="text-5xl font-bold">PromptPay Qrcode Generator 🧸</h1>
                    <p className="">ใส่จำนวนเงินที่ต้องการจะโอน</p>
                    <input type="number" placeholder="Type here" className="input input-bordered input-primary" value={amount} onChange={(event) => { setAmount(event.target.value) }} />
                    {image && <img alt='qrcode' src={image} className='shadow-md rounded-md' />}
                    <button className="btn btn-primary" onClick={generateQRCode}>Generate</button>
                </div>
            </div>
        </div>
    );
}
