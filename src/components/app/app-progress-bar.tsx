/* eslint-disable react-refresh/only-export-components */
import { createStyleContext } from "../../theme/create-style-context";

import {
  ProgressBar as BaseProgressBar,
  ProgressBarIndicator,
  ProgressBarLabel,
  ProgressBarTrack,
} from "../progress-bar";

import { progressBar } from "../../../styled-system/recipes/progress-bar";
import { styled } from "../../../styled-system/jsx";

const { withProvider, withContext } = createStyleContext(progressBar);

const Root = withProvider(styled(BaseProgressBar), "root");

const Label = withContext(styled(ProgressBarLabel), "label");

const Track = withContext(styled(ProgressBarTrack), "track");

const Indicator = withContext(styled(ProgressBarIndicator), "indicator");

export const ProgressBar = { Root, Label, Track, Indicator };
