import React from "react";

function Test({ a, b, c, d }) {
  const onwindowmessage = (event) => {
    if (event.source !== window) return;
    const data = event.data;
    // Only react to requests. Notifications and responses are not supported from dApps
    if (!isRequest(data)) return;
    if (backgroundPort == null) connect();
    // TODO: We could filter out different types of messages here like metamask does,
    // where only user "initiated" messages cause the keep-alive loop to refresh
    keepAlive(backgroundPort); // refresh keepalive on each message
    backgroundPort.postMessage(data);
  };

  useEffect(() => {
    window.addEventListener("message", onwindowmessage, false);
  }, []);

  const sum = (a, b, c, d) => {
    return a + b + c + d;
  };
  return (
    <div>
      <div>{sum(a, b, c, d)}</div>
      <div>TEST TEST TEST TRES</div>
    </div>
  );
}

export default Test;
