"use client"
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
 const router =useRouter();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const staticEmail = 'me@gmail.com';
        const staticPassword = 'me@gmail.com';

        if (email === staticEmail && password === staticPassword) {
            Cookies.set('token', 'login success', { expires: 1 });
            setError('');
            router.push('/dashboard');
            toast.success('Login success');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen b">
            <div className="w-full max-w-md p-8 space-y-6 bg-slate-700 rounded shadow-md">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    {error && <p className="text-sm text-red-600">{error}</p>}
                    <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;