import React from 'react';
import { X, Check } from 'lucide-react';

// Ejemplo de conversación: pregunta del huésped + respuesta mala vs buena.
function ChatExample({ question, bad, good }) {
  return (
    <div className="m-chat">
      <div className="m-chat-q">
        <span className="m-chat-who">Huésped</span>
        <p>{question}</p>
      </div>
      <div className="m-chat-answers">
        <div className="m-chat-a m-chat-a--bad">
          <span className="m-chat-badge">
            <X aria-hidden="true" /> Respuesta floja
          </span>
          <p>{bad}</p>
        </div>
        <div className="m-chat-a m-chat-a--good">
          <span className="m-chat-badge">
            <Check aria-hidden="true" /> Respuesta recomendada
          </span>
          <p>{good}</p>
        </div>
      </div>
    </div>
  );
}

export default ChatExample;
