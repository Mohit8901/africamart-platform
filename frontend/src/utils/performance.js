// src/utils/performance.js
export const trackAfricaPerf = () => {
    const connection = navigator.connection;
    if (connection) {
      console.log('African network conditions:', {
        effectiveType: connection.effectiveType,
        rtt: connection.rtt
      });
    }
  };