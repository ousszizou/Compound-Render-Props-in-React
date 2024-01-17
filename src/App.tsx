import { ProgressBar } from "./components/app/app-progress-bar";
import { css } from "../styled-system/css";
import { useEffect, useState } from "react";

function App() {
  const [isConnected, setIsConnected] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isConnected) return;

    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 5);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isConnected, progress]);

  const handleReconnect = () => {
    setIsConnected(true);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
  };

  return (
    <div
      className={css({
        p: "10",
        minH: "screen",
      })}
    >
      <div className={css({ display: "flex", flexDir: "column", gap: "10" })}>
        <div className={css({ mb: "10" })}>
          {!isConnected && (
            <button
              type="button"
              className={css({ bg: "green.400", p: "4", rounded: "lg" })}
              onClick={handleReconnect}
            >
              Reconnect
            </button>
          )}
          {isConnected && progress < 100 && (
            <button
              type="button"
              className={css({ bg: "red.400", p: "4", rounded: "lg" })}
              onClick={handleDisconnect}
            >
              Disconnect
            </button>
          )}
        </div>
        <div className={css({ w: "xs" })}>
          <ProgressBar.Root
            value={progress}
            aria-label="Progress bar"
            isIndeterminate={!isConnected}
          >
            <ProgressBar.Label label="With Prop Getters (default)">
              {({ label, percentage }) => (
                <div
                  className={css({
                    display: "flex",
                    justifyContent: "space-between",
                  })}
                >
                  <span>{label}</span>
                  <span>
                    {isConnected ? `${percentage?.toFixed(0)}%` : "Loading..."}
                  </span>
                </div>
              )}
            </ProgressBar.Label>
            <ProgressBar.Track>
              <ProgressBar.Indicator />
            </ProgressBar.Track>
          </ProgressBar.Root>
        </div>
      </div>
    </div>
  );
}

export default App;
