<script>
  import { onMount } from 'svelte';
  
  let isOpen = false;
  let messages = [];
  let inputValue = '';
  let chatContainer;
  
  const botResponses = {
    greeting: ["Hello! I'm here to help. What would you like to know?", "Hi there! How can I assist you today?"],
    skills: ["I specialize in full-stack development with expertise in JavaScript, Svelte, Node.js, and more!"],
    contact: ["You can reach me through the social links at the top of the page, or use the contact form below!"],
    default: ["I'm still learning! Feel free to ask about my skills, projects, or how to contact me."]
  };
  
  function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
    } else if (lowerMessage.includes('skill') || lowerMessage.includes('tech')) {
      return botResponses.skills[0];
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
      return botResponses.contact[0];
    }
    return botResponses.default[0];
  }
  
  function sendMessage() {
    if (!inputValue.trim()) return;
    
    messages = [...messages, { text: inputValue, sender: 'user' }];
    const userMessage = inputValue;
    inputValue = '';
    
    setTimeout(() => {
      messages = [...messages, { text: getBotResponse(userMessage), sender: 'bot' }];
      scrollToBottom();
    }, 500);
  }
  
  function scrollToBottom() {
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }
  
  onMount(() => {
    messages = [{ text: "Hello! I'm your AI assistant. How can I help you today?", sender: 'bot' }];
  });
</script>

<div class="fixed bottom-4 right-4 z-40">
  <button
    on:click={() => isOpen = !isOpen}
    class="bg-summer-accent hover:bg-summer-dark text-white p-3 rounded-full shadow-lg transition-all"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  </button>
  
  {#if isOpen}
    <div class="absolute bottom-16 right-0 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex flex-col h-96">
      <div class="flex justify-between items-center p-4 border-b dark:border-gray-700">
        <h3 class="font-semibold">Chat Assistant</h3>
        <button 
          on:click={() => isOpen = false}
          class="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>
      
      <div bind:this={chatContainer} class="flex-1 overflow-y-auto p-4 space-y-3">
        {#each messages as message}
          <div class={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div class={`max-w-xs px-4 py-2 rounded-lg ${
              message.sender === 'user' 
                ? 'bg-summer-accent text-white' 
                : 'bg-gray-200 dark:bg-gray-700'
            }`}>
              {message.text}
            </div>
          </div>
        {/each}
      </div>
      
      <form on:submit|preventDefault={sendMessage} class="p-4 border-t dark:border-gray-700">
        <div class="flex space-x-2">
          <input
            bind:value={inputValue}
            type="text"
            placeholder="Type a message..."
            class="flex-1 px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-summer-accent"
          />
          <button
            type="submit"
            class="px-4 py-2 bg-summer-accent text-white rounded-lg hover:bg-summer-dark transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  {/if}
</div>