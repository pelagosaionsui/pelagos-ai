import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export function CodeSnippet() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);
    controls.start({ opacity: 1 });
  }, [controls]);

  const code = `<span class="text-[#C678DD]">import</span> { <span class="text-[#61AFEF]">SuiAgentKit</span> } <span class="text-[#C678DD]">from</span> "<span class="text-[#61AFEF]">@pelagos/sui-agent-kit</span>";

&nbsp;
<span class="text-[#C678DD]">const</span> suiAgent = <span class="text-[#C678DD]">new</span> <span class="text-[#61AFEF]">SuiAgentKit</span>(
    <span class="text-[#98C379]">WALLET_PRIVATE_KEY</span>,
    <span class="text-[#98C379]">RPC_URL</span>,
    <span class="text-[#98C379]">OPENAI_API_KEY</span>,
);

&nbsp;
// Get your sui balance
<span class="text-[#C678DD]">const</span> suiBalance = <span class="text-[#C678DD]">await</span> suiAgent.<span class="text-[#E5C07B]">getBalance</span>();
`;

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-8 overflow-hidden rounded-lg bg-gray-900/80 backdrop-blur">
      <div className="flex items-center px-4 py-2 bg-gray-800/50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="p-4 overflow-x-auto"
      >
        <pre className="text-sm text-gray-200 text-left">
          <code
            className="block"
            dangerouslySetInnerHTML={{
              __html: code
                .split('\n')
                .map(
                  (line, i) => `<div class="typewriter-${i} pl-4">${line}</div>`
                )
                .join(''),
            }}
          />
        </pre>
      </motion.div>
    </div>
  );
}
