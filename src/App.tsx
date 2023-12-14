import {
  ProgressBar,
  ProgressBarIndicator,
  ProgressBarLabel,
  ProgressBarTrack,
} from "./components/progress-bar";
import { css, cx } from "../styled-system/css";
import { progressBar } from "./theme/recipes/progress";
import { useMemo, useState } from "react";

const calculatePercentage = (
  value: number,
  minValue: number,
  maxValue: number
) => ((value - minValue) / (maxValue - minValue)) * 100;

function App() {
  const [progressValue] = useState(18);
  const [progressOptions] = useState({
    minValue: 0,
    maxValue: 100,
  });

  const percentage = useMemo(() => {
    return parseFloat(
      calculatePercentage(
        progressValue,
        progressOptions.minValue,
        progressOptions.maxValue
      ).toFixed(0)
    );
  }, [progressValue, progressOptions.minValue, progressOptions.maxValue]);

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
            minValue={0}
            maxValue={100}
            aria-label="Progress bar"
            className={progressBar().root}
          >
            <ProgressBarTrack className={progressBar().track}>
              <ProgressBarIndicator
                percentage={percentage}
                className={progressBar().indicator}
              />
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
          <ProgressBar
            value={progressValue}
            minValue={progressOptions.minValue}
            maxValue={progressOptions.maxValue}
            aria-label="Progress bar"
            className={progressBar().root}
          >
            <ProgressBarLabel className={progressBar().label}>
              <span>Progress With Label</span>
            </ProgressBarLabel>
            <ProgressBarTrack className={progressBar().track}>
              <ProgressBarIndicator
                percentage={percentage}
                className={progressBar().indicator}
              />
            </ProgressBarTrack>
          </ProgressBar>
          <ProgressBar
            value={progressValue}
            minValue={progressOptions.minValue}
            maxValue={progressOptions.maxValue}
            aria-label="Progress bar"
            className={progressBar().root}
          >
            <ProgressBarLabel
              className={cx(
                progressBar().label,
                css({ display: "flex", justifyContent: "space-between" })
              )}
            >
              <span>progress</span>
              <span>{`${percentage}%`}</span>
            </ProgressBarLabel>
            <ProgressBarTrack className={progressBar().track}>
              <ProgressBarIndicator
                percentage={percentage}
                className={progressBar().indicator}
              />
            </ProgressBarTrack>
          </ProgressBar>
          <ProgressBar
            value={progressValue}
            minValue={progressOptions.minValue}
            maxValue={progressOptions.maxValue}
            aria-label="Progress bar"
            className={progressBar().root}
          >
            <ProgressBarLabel
              className={cx(
                progressBar().label,
                css({ display: "flex", justifyContent: "space-between" })
              )}
            >
              <span>{`${percentage}%`}</span>
            </ProgressBarLabel>
            <ProgressBarTrack className={progressBar().track}>
              <ProgressBarIndicator
                percentage={percentage}
                className={progressBar().indicator}
              />
            </ProgressBarTrack>
          </ProgressBar>
          <ProgressBar
            value={progressValue}
            minValue={progressOptions.minValue}
            maxValue={progressOptions.maxValue}
            aria-label="Progress bar"
            className={progressBar().root}
          >
            <div
              className={css({
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "3",
              })}
            >
              <ProgressBarTrack
                className={css(
                  progressBar.raw().track,
                  css.raw({ bg: "gray.300" })
                )}
              >
                <ProgressBarIndicator
                  percentage={percentage}
                  className={progressBar().indicator}
                />
              </ProgressBarTrack>
              <span>{`${percentage}%`}</span>
            </div>
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
          <ProgressBar
            value={7}
            minValue={0}
            maxValue={100}
            aria-label="Progress bar"
            className={progressBar().root}
          >
            <ProgressBarLabel className={progressBar().label}>
              <span>sm size</span>
            </ProgressBarLabel>
            <ProgressBarTrack className={progressBar({ size: "sm" }).track}>
              <ProgressBarIndicator
                percentage={percentage}
                className={progressBar().indicator}
              />
            </ProgressBarTrack>
          </ProgressBar>
          <ProgressBar
            value={18}
            minValue={0}
            maxValue={100}
            aria-label="Progress bar"
            className={progressBar().root}
          >
            <ProgressBarLabel className={progressBar().label}>
              <span>md size (default)</span>
            </ProgressBarLabel>
            <ProgressBarTrack className={progressBar().track}>
              <ProgressBarIndicator
                percentage={percentage}
                className={progressBar().indicator}
              />
            </ProgressBarTrack>
          </ProgressBar>
          <ProgressBar
            value={100}
            minValue={0}
            maxValue={100}
            aria-label="Progress bar"
            className={progressBar().root}
          >
            <ProgressBarLabel className={progressBar().label}>
              <span>lg size</span>
            </ProgressBarLabel>
            <ProgressBarTrack className={progressBar({ size: "lg" }).track}>
              <ProgressBarIndicator
                percentage={percentage}
                className={progressBar().indicator}
              />
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
          <ProgressBar
            value={7}
            minValue={0}
            maxValue={100}
            aria-label="Progress bar"
            className={progressBar().root}
          >
            <ProgressBarTrack className={progressBar().track}>
              <ProgressBarIndicator
                percentage={percentage}
                className={css(
                  progressBar.raw().indicator,
                  css.raw({ bg: "red.400" })
                )}
              />
            </ProgressBarTrack>
          </ProgressBar>
          <ProgressBar
            value={50}
            minValue={0}
            maxValue={100}
            aria-label="Progress bar"
            className={progressBar().root}
          >
            <ProgressBarTrack className={progressBar().track}>
              <ProgressBarIndicator
                percentage={percentage}
                className={css(
                  progressBar.raw().indicator,
                  css.raw({ bg: "yellow.400" })
                )}
              />
            </ProgressBarTrack>
          </ProgressBar>
          <ProgressBar
            value={100}
            minValue={0}
            maxValue={100}
            aria-label="Progress bar"
            className={progressBar().root}
          >
            <ProgressBarTrack className={progressBar().track}>
              <ProgressBarIndicator
                percentage={percentage}
                className={css(
                  progressBar.raw().indicator,
                  css.raw({ bg: "green.400" })
                )}
              />
            </ProgressBarTrack>
          </ProgressBar>
        </div>
      </div>
    </div>
  );
}

export default App;
