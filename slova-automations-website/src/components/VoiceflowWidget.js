'use client'; // This directive is crucial and must be at the top

import Script from 'next/script';

const VoiceflowWidget = () => {
  return (
    <Script
      strategy="lazyOnload"
      src="https://cdn.voiceflow.com/widget-next/bundle.mjs"
      onLoad={() => {
        // This function runs in the browser after the script has loaded
        window.voiceflow.chat.load({
          verify: { projectID: '68b925f3116f7170139c307c' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
      }}
    />
  );
};

export default VoiceflowWidget;