import React from 'react'
import { useEffect } from 'react';

function Chatbot() {
 

  // Chat base : 
  useEffect(() => {
    // Define the configuration object
    const embeddedChatbotConfig = {
      chatbotId: "JitBHiPPDb4nRoPR0X9Bd",
      domain: "www.chatbase.co"
    };
  
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.defer = true;

    // Set the attributes using the configuration object
    script.setAttribute('chatbotId', embeddedChatbotConfig.chatbotId);
    script.setAttribute('domain', embeddedChatbotConfig.domain);

    // Append the script to the document body
    document.body.appendChild(script);

    // Optionally, you can clean up the script when the component unmounts
    return () => {
      // Remove the script or any cleanup logic if necessary
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts




  //bot press
  useEffect(() => {
    // Dynamically create script elements and add them to the document
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/b5a8718c-3f2f-4c41-b6a0-b6b1ce01ddf5/webchat/config.js';
    script2.defer = true;
    document.head.appendChild(script2);

    // Clean up the scripts when the component is unmounted
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);


}

export default Chatbot