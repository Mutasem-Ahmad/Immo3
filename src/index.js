import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import "./data/finisherConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
