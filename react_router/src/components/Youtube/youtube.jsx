import React, { useEffect, useState } from "react";

function Youtube() {
  const [subs, setSubs] = useState(null);

  useEffect(() => {
    // 🔹 Fake demo API key (replace with your real one from Google Cloud)
    const apiKey = "288839851227-b8amob32sgko22katcipoi7mtn0ulrgh.apps.googleusercontent.com";  

    // 🔹 Random public channel (Google Developers official channel)
    const channelId = "UC8bqP3KRASuaRDH254bj8Cg";  

    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          return setSubs(data.items[0].statistics.subscriberCount);
        } else {
          console.error("No channel data found", data);
        }
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      YouTube Subscribers: {subs ? subs : "Loading..."}
    </div>
  );
}

export default Youtube;
