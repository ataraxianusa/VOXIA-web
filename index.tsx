import React, { useState, useEffect, useRef } from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';
import { GoogleGenAI, Chat } from 'https://esm.sh/@google/genai';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const VoxiaChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [chat, setChat] = useState<Chat | null>(null);
    const chatBodyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const newChat = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: "You are a helpful and friendly AI assistant for VOXIA, a smart system that turns every WhatsApp conversation into business opportunities for Indonesian SMEs. Your role is to answer user questions about VOXIA's features, solutions, pricing, and benefits. Keep your answers concise, informative, and maintain a positive tone. The landing page content is your primary source of information.",
                },
            });
            setChat(newChat);
            setMessages([
                { role: 'model', text: 'Hello! I am the VOXIA AI Assistant. How can I help you learn about our platform today?' }
            ]);
        } catch (error) {
            console.error("Failed to initialize Generative AI:", error);
            setMessages([
                { role: 'model', text: 'Sorry, I am having trouble connecting right now. Please try again later.' }
            ]);
        }
    }, []);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading || !chat) return;

        const userMessage = { role: 'user' as const, text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            const response = await chat.sendMessage({ message: userMessage.text });
            const modelMessage = { role: 'model' as const, text: response.text };
            setMessages(prev => [...prev, modelMessage]);
        } catch (error) {
            console.error("Error sending message:", error);
            const errorMessage = { role: 'model' as const, text: 'Oops! Something went wrong. Please try again.' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const ChatBubble = () => (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="chat-bubble"
            aria-label={isOpen ? "Close chat" : "Open chat"}
            aria-expanded={isOpen}
        >
            {isOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
            )}
        </button>
    );

    const ChatWindow = () => (
        <div className={`chat-window ${isOpen ? '' : 'hidden'}`}>
            <div className="chat-header">
                <h3 className="font-bold text-lg">VOXIA AI Assistant</h3>
                <button onClick={() => setIsOpen(false)} aria-label="Close chat">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="chat-body" ref={chatBodyRef} aria-live="polite">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.role}`}>
                        {msg.text}
                    </div>
                ))}
                {isLoading && (
                    <div className="chat-message model loading-dots">
                        <span></span><span></span><span></span>
                    </div>
                )}
            </div>
            <form onSubmit={handleSendMessage} className="chat-input-form">
                <input
                    type="text"
                    className="chat-input"
                    placeholder="Ask a question..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    disabled={isLoading}
                    aria-label="Chat input"
                />
                <button type="submit" className="chat-send-btn" disabled={isLoading || !inputValue.trim()} aria-label="Send message">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                </button>
            </form>
        </div>
    );

    return (
        <>
            <ChatWindow />
            <ChatBubble />
        </>
    );
};

const container = document.getElementById('chat-widget-container');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<VoxiaChatbot />);
} else {
    console.error('Chat widget container not found. Make sure an element with id="chat-widget-container" exists in your HTML.');
}
