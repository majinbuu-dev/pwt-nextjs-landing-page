'use client';
import { useEffect, useRef, useState } from 'react';

interface Conv { id: string; name: string; contact: string; takeover: number; updated_at: number; last_message: string; message_count: number; }
interface Msg { role: string; content: string; created_at?: number; }

export default function AdminChat() {
  const [convs, setConvs] = useState<Conv[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const selectedRef = useRef<string | null>(null);
  const setSelectedBoth = (id: string | null) => { selectedRef.current = id; setSelected(id); };
  const [messages, setMessages] = useState<Msg[]>([]);
  const [takeover, setTakeover] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const loadConvs = () => fetch('/api/admin/conversations').then(r => r.json()).then(setConvs);

  const loadMessages = async (id: string) => {
    const res = await fetch(`/api/admin/conversations/${id}`);
    const data = await res.json();
    setMessages(data.messages || []);
    setTakeover(!!data.conv?.takeover);
  };

  useEffect(() => {
    loadConvs();
    const es = new EventSource('/api/admin/stream');
    es.onmessage = () => loadConvs();
    return () => es.close();
  }, []);

  useEffect(() => {
    if (!selected) return;
    loadMessages(selected);
    const es = new EventSource(`/api/admin/stream?conv=${selected}`);
    es.onmessage = () => loadMessages(selected);
    return () => es.close();
  }, [selected]);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const handleTakeover = async () => {
    await fetch(`/api/admin/conversations/${selected}`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: takeover ? 'release' : 'takeover' }),
    });
    setTakeover(t => !t);
  };

  const sendReply = async () => {
    const text = inputRef.current?.value.trim();
    const id = selectedRef.current;
    if (!text || !id) return;
    if (inputRef.current) inputRef.current.value = '';
    await fetch(`/api/admin/conversations/${id}`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'reply', content: text }),
    });
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h1 className="font-bold text-lg">PwT Chat Admin</h1>
        </div>
        <div className="flex-1 overflow-y-auto">
          {convs.map(c => (
            <div key={c.id} onClick={() => setSelectedBoth(c.id)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${selected === c.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''}`}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold text-gray-800">{c.name || c.id.slice(0, 12)}</span>
                {c.takeover ? <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Manual</span>
                  : <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">AI</span>}
              </div>
              <p className="text-xs text-gray-400 mb-1">{c.contact}</p>
              <p className="text-sm text-gray-700 truncate">{c.last_message}</p>
              <p className="text-xs text-gray-400 mt-1">{c.message_count} messages</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        {selected ? (
          <>
            <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800">{convs.find(c => c.id === selected)?.name || selected}</p>
                <p className="text-xs text-gray-400">{convs.find(c => c.id === selected)?.contact}</p>
              </div>
              <button onClick={handleTakeover}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${takeover ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                {takeover ? 'Release to AI' : 'Takeover'}
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-3">
              {messages.map((m, i) => (
                <div key={i} className={`max-w-lg px-4 py-2.5 rounded-2xl text-sm whitespace-pre-wrap ${m.role === 'user' ? 'bg-gray-200 text-gray-900 self-start' : 'bg-blue-600 text-white self-end'}`}>
                  {m.role !== 'user' && <span className="text-xs opacity-70 block mb-1">{m.role === 'assistant' ? (takeover ? 'You' : 'AI') : m.role}</span>}
                  {m.content}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
            {takeover && (
              <div className="bg-white border-t border-gray-200 p-4 flex gap-3">
                <input ref={inputRef} defaultValue=""
                  onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); sendReply(); } }}
                  placeholder="Reply to customer…"
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500" />
                <button onClick={sendReply} className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700">Send</button>
              </div>
            )}
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">Select a conversation</div>
        )}
      </div>
    </div>
  );
}
