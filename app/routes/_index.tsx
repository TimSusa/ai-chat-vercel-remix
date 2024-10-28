import { useChat } from 'ai/react'
import { nanoid } from 'nanoid'

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
        initialMessages: [
            {
                id: nanoid(),
                role: 'system',
                content: 'You are a helpful AI assistant.'
            }
        ],
    })

    return (
        <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
            <h1 className="text-2xl font-bold text-center mb-4">AI Chat</h1>
            {messages.map(m => (
                <div key={m.id} className="whitespace-pre-wrap mb-4">
                    {m.role === 'user' ? 'Human: ' : 'AI: '}
                    {m.content}
                </div>
            ))}

            <form onSubmit={handleSubmit} className="fixed bottom-0 w-full max-w-md p-2 mb-8 border-t border-gray-200">
                <input
                    className="w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
                    value={input}
                    placeholder="Say something..."
                    onChange={handleInputChange}
                />
            </form>
        </div>
    )
}