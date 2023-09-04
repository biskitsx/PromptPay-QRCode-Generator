import { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [amount, setAmount] = useState(0);
    const [image, setImage] = useState('');

    const generateQRCode = async () => {
        try {
            const { data } = await axios.post("http://localhost:5050/generate", { amount });
            setImage(data.result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md flex gap-6 flex-col">
                    <h1 className="text-5xl font-bold">PromptPay Qrcode Generator 🧃</h1>
                    <p className="">ใส่จำนวนเงินที่ต้องการจะโอน</p>
                    <input type="number" placeholder="Type here" className="input input-bordered input-accent" value={amount} onChange={(event) => { setAmount(event.target.value) }} />
                    {image && <img alt='qrcode' src={image} className='shadow-md rounded-md' />}
                    <button className="btn btn-accent" onClick={generateQRCode}>Generate</button>
                </div>
            </div>
        </div>
    );
}
