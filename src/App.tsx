import {
  ProgressBar,
  ProgressBarIndicator,
  ProgressBarLabel,
  ProgressBarTrack,
} from "./components/progress-bar";
import { css } from "../styled-system/css";
import { progressBar } from "./theme/recipes/progress";

function App() {
  return (
    <div
      className={css({
        p: "10",
        minH: "screen",
      })}
    >
      <div className={css({ display: "flex", flexDir: "column", gap: "10" })}>
        <div className={css({ w: "xs" })}>
          <ProgressBar
            value={18}
            aria-label="Progress bar"
            className={progressBar().root}
          >
            <ProgressBarLabel label="Progress" className={progressBar().label}>
              {({ label, percentage }) => (
                <div
                  className={css({
                    display: "flex",
                    justifyContent: "space-between",
                  })}
                >
                  <span>{label}</span>
                  <span>
                    {percentage ? (
                      <>{percentage.toFixed(0)}%</>
                    ) : (
                      <>Loading...</>
                    )}
                  </span>
                </div>
              )}
            </ProgressBarLabel>
            <ProgressBarTrack className={progressBar().track}>
              <ProgressBarIndicator className={progressBar().indicator} />
            </ProgressBarTrack>
          </ProgressBar>
        </div>
        <div
          className={css({
            w: "xs",
            display: "flex",
            flexDir: "column",
            gap: "3",
          })}
        >
          <ProgressBar aria-label="Progress bar" className={progressBar().root}>
            <ProgressBarLabel label="Progress" className={progressBar().label}>
              {({ label, percentage }) => (
                <div
                  className={css({
                    display: "flex",
                    justifyContent: "space-between",
                  })}
                >
                  <span>{label}</span>
                  <span>
                    {percentage ? (
                      <>{percentage.toFixed(0)}%</>
                    ) : (
                      <>Loading...</>
                    )}
                  </span>
                </div>
              )}
            </ProgressBarLabel>
            <ProgressBarTrack className={progressBar().track}>
              <ProgressBarIndicator className={progressBar().indicator} />
            </ProgressBarTrack>
          </ProgressBar>
        </div>
      </div>
    </div>
  );
}

export default App;
