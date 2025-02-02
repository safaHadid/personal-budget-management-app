import {
  ChartsAxis,
  ChartsAxisHighlight,
  ChartsLegend,
  ChartsOverlay,
  ChartsTooltip,
  DEFAULT_X_AXIS_KEY,
  InteractionContext,
  ResponsiveChartContainer,
  Symbol,
  animated,
  area_default,
  catmullRom_default,
  color,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  getColor_default,
  getValueToPositionMapper,
  line_default,
  linear_default,
  monotoneX,
  monotoneY,
  natural_default,
  stepAfter,
  stepBefore,
  step_default,
  string_default,
  symbolsFill,
  to,
  useCartesianContext,
  useChartGradient,
  useChartId,
  useDrawingArea,
  useId,
  useInteractionItemProps,
  useItemHighlighted,
  useLineSeries,
  useSeries,
  useSlotProps_default,
  useSpring,
  useSvgRef,
  useTicks,
  useTransition
} from "./chunk-S52CMZF3.js";
import "./chunk-NR5Q5FIZ.js";
import {
  warnOnce
} from "./chunk-WBJSZGCN.js";
import "./chunk-F6N7N37R.js";
import "./chunk-HG3IM2SN.js";
import "./chunk-TAPUFPH2.js";
import "./chunk-WOQNJ2LE.js";
import {
  _objectWithoutPropertiesLoose
} from "./chunk-PF2VR3Y5.js";
import "./chunk-YMAQ3IUI.js";
import "./chunk-KRGTNDB7.js";
import "./chunk-HPDYDX5Q.js";
import "./chunk-JMVEG3FK.js";
import {
  useThemeProps
} from "./chunk-ZXHXXVGC.js";
import {
  _extends,
  require_jsx_runtime,
  styled_default2 as styled_default,
  useTheme
} from "./chunk-WQRUVB4G.js";
import {
  require_prop_types
} from "./chunk-ZNVVQF6B.js";
import {
  require_react
} from "./chunk-TWJRYSII.js";
import {
  __toESM
} from "./chunk-DC5AMYBS.js";

// node_modules/@mui/x-charts/LineChart/LineChart.js
var React18 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/LineChart/AreaPlot.js
var React4 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/LineChart/AreaElement.js
var React3 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/LineChart/AnimatedArea.js
var React2 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/@mui/x-charts/internals/cleanId.js
function cleanId(id) {
  return id.replace(" ", "_");
}

// node_modules/@mui/x-charts/internals/useStringInterpolator.js
var React = __toESM(require_react());
function usePrevious(value) {
  const ref = React.useRef({
    currentPath: value,
    previousPath: void 0
  });
  if (ref.current.currentPath !== value) {
    ref.current = {
      currentPath: value,
      previousPath: ref.current.currentPath
    };
  }
  return ref.current;
}
var useStringInterpolator = (path) => {
  const memoryRef = usePrevious(path);
  const interpolator = React.useMemo(() => memoryRef.previousPath ? string_default(memoryRef.previousPath, memoryRef.currentPath) : () => memoryRef.currentPath, [memoryRef.currentPath, memoryRef.previousPath]);
  return interpolator;
};

// node_modules/@mui/x-charts/LineChart/AnimatedArea.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["d", "skipAnimation", "ownerState"];
var AreaElementPath = styled_default(animated.path, {
  name: "MuiAreaElement",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState
}) => ({
  stroke: "none",
  fill: ownerState.gradientId && `url(#${ownerState.gradientId})` || ownerState.isHighlighted && color(ownerState.color).brighter(1).formatHex() || color(ownerState.color).brighter(0.5).formatHex(),
  transition: "opacity 0.2s ease-in, fill 0.2s ease-in",
  opacity: ownerState.isFaded ? 0.3 : 1
}));
function AnimatedArea(props) {
  const {
    d,
    skipAnimation,
    ownerState
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    left,
    top,
    right,
    bottom,
    width,
    height
  } = useDrawingArea();
  const chartId = useChartId();
  const stringInterpolator = useStringInterpolator(d);
  const transitionAppear = useTransition([1], {
    from: {
      animatedWidth: left
    },
    to: {
      animatedWidth: width + left + right
    },
    enter: {
      animatedWidth: width + left + right
    },
    leave: {
      animatedWidth: left
    },
    reset: false,
    immediate: skipAnimation
  });
  const transitionChange = useTransition([stringInterpolator], {
    from: {
      value: 0
    },
    to: {
      value: 1
    },
    enter: {
      value: 1
    },
    reset: false,
    immediate: skipAnimation
  });
  const clipId = cleanId(`${chartId}-${ownerState.id}-area-clip`);
  return (0, import_jsx_runtime.jsxs)(React2.Fragment, {
    children: [(0, import_jsx_runtime.jsx)("clipPath", {
      id: clipId,
      children: transitionAppear((style) => (0, import_jsx_runtime.jsx)(animated.rect, {
        x: 0,
        y: 0,
        width: style.animatedWidth,
        height: top + height + bottom
      }))
    }), (0, import_jsx_runtime.jsx)("g", {
      clipPath: `url(#${clipId})`,
      children: transitionChange((style, interpolator) => (0, import_jsx_runtime.jsx)(AreaElementPath, _extends({}, other, {
        ownerState,
        d: style.value.to(interpolator)
      })))
    })]
  });
}
true ? AnimatedArea.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  d: import_prop_types.default.string.isRequired,
  ownerState: import_prop_types.default.shape({
    classes: import_prop_types.default.object,
    color: import_prop_types.default.string.isRequired,
    gradientId: import_prop_types.default.string,
    id: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]).isRequired,
    isFaded: import_prop_types.default.bool.isRequired,
    isHighlighted: import_prop_types.default.bool.isRequired
  }).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types.default.bool
} : void 0;

// node_modules/@mui/x-charts/LineChart/AreaElement.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded2 = ["id", "classes", "color", "gradientId", "slots", "slotProps", "onClick"];
function getAreaElementUtilityClass(slot) {
  return generateUtilityClass("MuiAreaElement", slot);
}
var areaElementClasses = generateUtilityClasses("MuiAreaElement", ["root", "highlighted", "faded"]);
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, isHighlighted && "highlighted", isFaded && "faded"]
  };
  return composeClasses(slots, getAreaElementUtilityClass, classes);
};
function AreaElement(props) {
  const {
    id,
    classes: innerClasses,
    color: color2,
    gradientId,
    slots,
    slotProps,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const getInteractionItemProps = useInteractionItemProps();
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId: id
  });
  const ownerState = {
    id,
    classes: innerClasses,
    color: color2,
    gradientId,
    isFaded,
    isHighlighted
  };
  const classes = useUtilityClasses(ownerState);
  const Area = (slots == null ? void 0 : slots.area) ?? AnimatedArea;
  const areaProps = useSlotProps_default({
    elementType: Area,
    externalSlotProps: slotProps == null ? void 0 : slotProps.area,
    additionalProps: _extends({}, getInteractionItemProps({
      type: "line",
      seriesId: id
    }), {
      onClick,
      cursor: onClick ? "pointer" : "unset"
    }),
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime2.jsx)(Area, _extends({}, other, areaProps));
}
true ? AreaElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types2.default.object,
  color: import_prop_types2.default.string.isRequired,
  d: import_prop_types2.default.string.isRequired,
  gradientId: import_prop_types2.default.string,
  id: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string]).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types2.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types2.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types2.default.object
} : void 0;

// node_modules/@mui/x-charts/internals/getCurve.js
function getCurveFactory(curveType) {
  switch (curveType) {
    case "catmullRom": {
      return catmullRom_default.alpha(0.5);
    }
    case "linear": {
      return linear_default;
    }
    case "monotoneX": {
      return monotoneX;
    }
    case "monotoneY": {
      return monotoneY;
    }
    case "natural": {
      return natural_default;
    }
    case "step": {
      return step_default;
    }
    case "stepBefore": {
      return stepBefore;
    }
    case "stepAfter": {
      return stepAfter;
    }
    default:
      return monotoneX;
  }
}

// node_modules/@mui/x-charts/LineChart/AreaPlot.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded3 = ["slots", "slotProps", "onItemClick", "skipAnimation"];
var useAggregatedData = () => {
  const seriesData = useLineSeries();
  const axisData = useCartesianContext();
  const allData = React4.useMemo(() => {
    if (seriesData === void 0) {
      return [];
    }
    const {
      series,
      stackingGroups
    } = seriesData;
    const {
      xAxis,
      yAxis,
      xAxisIds,
      yAxisIds
    } = axisData;
    const defaultXAxisId = xAxisIds[0];
    const defaultYAxisId = yAxisIds[0];
    return stackingGroups.flatMap(({
      ids: groupIds
    }) => {
      return [...groupIds].reverse().map((seriesId) => {
        const {
          xAxisId: xAxisIdProp,
          yAxisId: yAxisIdProp,
          xAxisKey = defaultXAxisId,
          yAxisKey = defaultYAxisId,
          stackedData,
          data,
          connectNulls,
          baseline
        } = series[seriesId];
        const xAxisId = xAxisIdProp ?? xAxisKey;
        const yAxisId = yAxisIdProp ?? yAxisKey;
        const xScale = getValueToPositionMapper(xAxis[xAxisId].scale);
        const yScale = yAxis[yAxisId].scale;
        const xData = xAxis[xAxisId].data;
        const gradientUsed = yAxis[yAxisId].colorScale && [yAxisId, "y"] || xAxis[xAxisId].colorScale && [xAxisId, "x"] || void 0;
        if (true) {
          if (xData === void 0) {
            throw new Error(`MUI X: ${xAxisId === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisId}"`} should have data property to be able to display a line plot.`);
          }
          if (xData.length < stackedData.length) {
            throw new Error(`MUI X: The data length of the x axis (${xData.length} items) is lower than the length of series (${stackedData.length} items).`);
          }
        }
        const areaPath = area_default().x((d2) => xScale(d2.x)).defined((_, i) => connectNulls || data[i] != null).y0((d2) => {
          if (typeof baseline === "number") {
            return yScale(baseline);
          }
          if (baseline === "max") {
            return yScale.range()[1];
          }
          if (baseline === "min") {
            return yScale.range()[0];
          }
          const value = d2.y && yScale(d2.y[0]);
          if (Number.isNaN(value)) {
            return yScale.range()[0];
          }
          return value;
        }).y1((d2) => d2.y && yScale(d2.y[1]));
        const curve = getCurveFactory(series[seriesId].curve);
        const formattedData = (xData == null ? void 0 : xData.map((x, index) => ({
          x,
          y: stackedData[index]
        }))) ?? [];
        const d3Data = connectNulls ? formattedData.filter((_, i) => data[i] != null) : formattedData;
        const d = areaPath.curve(curve)(d3Data) || "";
        return _extends({}, series[seriesId], {
          gradientUsed,
          d,
          seriesId
        });
      });
    });
  }, [seriesData, axisData]);
  return allData;
};
function AreaPlot(props) {
  const {
    slots,
    slotProps,
    onItemClick,
    skipAnimation
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const getGradientId = useChartGradient();
  const completedData = useAggregatedData();
  return (0, import_jsx_runtime3.jsx)("g", _extends({}, other, {
    children: completedData.map(({
      d,
      seriesId,
      color: color2,
      area,
      gradientUsed
    }) => !!area && (0, import_jsx_runtime3.jsx)(AreaElement, {
      id: seriesId,
      d,
      color: color2,
      gradientId: gradientUsed && getGradientId(...gradientUsed),
      slots,
      slotProps,
      onClick: onItemClick && ((event) => onItemClick(event, {
        type: "line",
        seriesId
      })),
      skipAnimation
    }, seriesId))
  }));
}
true ? AreaPlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when a line area item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {LineItemIdentifier} lineItemIdentifier The line item identifier.
   */
  onItemClick: import_prop_types3.default.func,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types3.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types3.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types3.default.object
} : void 0;

// node_modules/@mui/x-charts/LineChart/LinePlot.js
var React7 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/LineChart/LineElement.js
var React6 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/LineChart/AnimatedLine.js
var React5 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded4 = ["d", "skipAnimation", "ownerState"];
var LineElementPath = styled_default(animated.path, {
  name: "MuiLineElement",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState
}) => ({
  strokeWidth: 2,
  strokeLinejoin: "round",
  fill: "none",
  stroke: ownerState.gradientId && `url(#${ownerState.gradientId})` || ownerState.isHighlighted && color(ownerState.color).brighter(0.5).formatHex() || ownerState.color,
  transition: "opacity 0.2s ease-in, stroke 0.2s ease-in",
  opacity: ownerState.isFaded ? 0.3 : 1
}));
function AnimatedLine(props) {
  const {
    d,
    skipAnimation,
    ownerState
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const {
    left,
    top,
    bottom,
    width,
    height,
    right
  } = useDrawingArea();
  const chartId = useChartId();
  const stringInterpolator = useStringInterpolator(d);
  const transitionAppear = useTransition([1], {
    from: {
      animatedWidth: left
    },
    to: {
      animatedWidth: width + left + right
    },
    enter: {
      animatedWidth: width + left + right
    },
    leave: {
      animatedWidth: left
    },
    reset: false,
    immediate: skipAnimation
  });
  const transitionChange = useTransition([stringInterpolator], {
    from: {
      value: 0
    },
    to: {
      value: 1
    },
    enter: {
      value: 1
    },
    reset: false,
    immediate: skipAnimation
  });
  const clipId = cleanId(`${chartId}-${ownerState.id}-line-clip`);
  return (0, import_jsx_runtime4.jsxs)(React5.Fragment, {
    children: [(0, import_jsx_runtime4.jsx)("clipPath", {
      id: clipId,
      children: transitionAppear((style) => (0, import_jsx_runtime4.jsx)(animated.rect, {
        x: 0,
        y: 0,
        width: style.animatedWidth,
        height: top + height + bottom
      }))
    }), (0, import_jsx_runtime4.jsx)("g", {
      clipPath: `url(#${clipId})`,
      children: transitionChange((style, interpolator) => (0, import_jsx_runtime4.jsx)(LineElementPath, _extends({}, other, {
        ownerState,
        d: style.value.to(interpolator)
      })))
    })]
  });
}
true ? AnimatedLine.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  d: import_prop_types4.default.string.isRequired,
  ownerState: import_prop_types4.default.shape({
    classes: import_prop_types4.default.object,
    color: import_prop_types4.default.string.isRequired,
    gradientId: import_prop_types4.default.string,
    id: import_prop_types4.default.oneOfType([import_prop_types4.default.number, import_prop_types4.default.string]).isRequired,
    isFaded: import_prop_types4.default.bool.isRequired,
    isHighlighted: import_prop_types4.default.bool.isRequired
  }).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types4.default.bool
} : void 0;

// node_modules/@mui/x-charts/LineChart/LineElement.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var _excluded5 = ["id", "classes", "color", "gradientId", "slots", "slotProps", "onClick"];
function getLineElementUtilityClass(slot) {
  return generateUtilityClass("MuiLineElement", slot);
}
var lineElementClasses = generateUtilityClasses("MuiLineElement", ["root", "highlighted", "faded"]);
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, isHighlighted && "highlighted", isFaded && "faded"]
  };
  return composeClasses(slots, getLineElementUtilityClass, classes);
};
function LineElement(props) {
  const {
    id,
    classes: innerClasses,
    color: color2,
    gradientId,
    slots,
    slotProps,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const getInteractionItemProps = useInteractionItemProps();
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId: id
  });
  const ownerState = {
    id,
    classes: innerClasses,
    color: color2,
    gradientId,
    isFaded,
    isHighlighted
  };
  const classes = useUtilityClasses2(ownerState);
  const Line = (slots == null ? void 0 : slots.line) ?? AnimatedLine;
  const lineProps = useSlotProps_default({
    elementType: Line,
    externalSlotProps: slotProps == null ? void 0 : slotProps.line,
    additionalProps: _extends({}, getInteractionItemProps({
      type: "line",
      seriesId: id
    }), {
      onClick,
      cursor: onClick ? "pointer" : "unset"
    }),
    className: classes.root,
    ownerState
  });
  return (0, import_jsx_runtime5.jsx)(Line, _extends({}, other, lineProps));
}
true ? LineElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types5.default.object,
  color: import_prop_types5.default.string.isRequired,
  d: import_prop_types5.default.string.isRequired,
  gradientId: import_prop_types5.default.string,
  id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types5.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types5.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types5.default.object
} : void 0;

// node_modules/@mui/x-charts/LineChart/LinePlot.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _excluded6 = ["slots", "slotProps", "skipAnimation", "onItemClick"];
var useAggregatedData2 = () => {
  const seriesData = useLineSeries();
  const axisData = useCartesianContext();
  const allData = React7.useMemo(() => {
    if (seriesData === void 0) {
      return [];
    }
    const {
      series,
      stackingGroups
    } = seriesData;
    const {
      xAxis,
      yAxis,
      xAxisIds,
      yAxisIds
    } = axisData;
    const defaultXAxisId = xAxisIds[0];
    const defaultYAxisId = yAxisIds[0];
    return stackingGroups.flatMap(({
      ids: groupIds
    }) => {
      return groupIds.flatMap((seriesId) => {
        const {
          xAxisId: xAxisIdProp,
          yAxisId: yAxisIdProp,
          xAxisKey = defaultXAxisId,
          yAxisKey = defaultYAxisId,
          stackedData,
          data,
          connectNulls
        } = series[seriesId];
        const xAxisId = xAxisIdProp ?? xAxisKey;
        const yAxisId = yAxisIdProp ?? yAxisKey;
        const xScale = getValueToPositionMapper(xAxis[xAxisId].scale);
        const yScale = yAxis[yAxisId].scale;
        const xData = xAxis[xAxisId].data;
        const gradientUsed = yAxis[yAxisId].colorScale && [yAxisId, "y"] || xAxis[xAxisId].colorScale && [xAxisId, "x"] || void 0;
        if (true) {
          if (xData === void 0) {
            throw new Error(`MUI X: ${xAxisId === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisId}"`} should have data property to be able to display a line plot.`);
          }
          if (xData.length < stackedData.length) {
            throw new Error(`MUI X: The data length of the x axis (${xData.length} items) is lower than the length of series (${stackedData.length} items).`);
          }
        }
        const linePath = line_default().x((d2) => xScale(d2.x)).defined((_, i) => connectNulls || data[i] != null).y((d2) => yScale(d2.y[1]));
        const formattedData = (xData == null ? void 0 : xData.map((x, index) => ({
          x,
          y: stackedData[index]
        }))) ?? [];
        const d3Data = connectNulls ? formattedData.filter((_, i) => data[i] != null) : formattedData;
        const d = linePath.curve(getCurveFactory(series[seriesId].curve))(d3Data) || "";
        return _extends({}, series[seriesId], {
          gradientUsed,
          d,
          seriesId
        });
      });
    });
  }, [seriesData, axisData]);
  return allData;
};
function LinePlot(props) {
  const {
    slots,
    slotProps,
    skipAnimation,
    onItemClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const getGradientId = useChartGradient();
  const completedData = useAggregatedData2();
  return (0, import_jsx_runtime6.jsx)("g", _extends({}, other, {
    children: completedData.map(({
      d,
      seriesId,
      color: color2,
      gradientUsed
    }) => {
      return (0, import_jsx_runtime6.jsx)(LineElement, {
        id: seriesId,
        d,
        color: color2,
        gradientId: gradientUsed && getGradientId(...gradientUsed),
        skipAnimation,
        slots,
        slotProps,
        onClick: onItemClick && ((event) => onItemClick(event, {
          type: "line",
          seriesId
        }))
      }, seriesId);
    })
  }));
}
true ? LinePlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Callback fired when a line item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {LineItemIdentifier} lineItemIdentifier The line item identifier.
   */
  onItemClick: import_prop_types6.default.func,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types6.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types6.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types6.default.object
} : void 0;

// node_modules/@mui/x-charts/LineChart/MarkPlot.js
var React10 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/LineChart/MarkElement.js
var React8 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/internals/getSymbol.js
function getSymbol(shape) {
  const symbolNames = "circle cross diamond square star triangle wye".split(/ /);
  return symbolNames.indexOf(shape) || 0;
}

// node_modules/@mui/x-charts/LineChart/markElementClasses.js
function getMarkElementUtilityClass(slot) {
  return generateUtilityClass("MuiMarkElement", slot);
}
var markElementClasses = generateUtilityClasses("MuiMarkElement", ["root", "highlighted", "faded"]);
var useUtilityClasses3 = (ownerState) => {
  const {
    classes,
    id,
    isFaded,
    isHighlighted
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`, isHighlighted && "highlighted", isFaded && "faded"]
  };
  return composeClasses(slots, getMarkElementUtilityClass, classes);
};

// node_modules/@mui/x-charts/LineChart/MarkElement.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _excluded7 = ["x", "y", "id", "classes", "color", "shape", "dataIndex", "onClick", "skipAnimation"];
var MarkElementPath = styled_default(animated.path, {
  name: "MuiMarkElement",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState,
  theme
}) => ({
  fill: (theme.vars || theme).palette.background.paper,
  stroke: ownerState.color,
  strokeWidth: 2
}));
function MarkElement(props) {
  var _a;
  const {
    x,
    y,
    id,
    classes: innerClasses,
    color: color2,
    shape,
    dataIndex,
    onClick,
    skipAnimation
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const getInteractionItemProps = useInteractionItemProps();
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId: id
  });
  const {
    axis
  } = React8.useContext(InteractionContext);
  const position = useSpring({
    to: {
      x,
      y
    },
    immediate: skipAnimation
  });
  const ownerState = {
    id,
    classes: innerClasses,
    isHighlighted: ((_a = axis.x) == null ? void 0 : _a.index) === dataIndex || isHighlighted,
    isFaded,
    color: color2
  };
  const classes = useUtilityClasses3(ownerState);
  return (0, import_jsx_runtime7.jsx)(MarkElementPath, _extends({}, other, {
    style: {
      transform: to([position.x, position.y], (pX, pY) => `translate(${pX}px, ${pY}px)`),
      transformOrigin: to([position.x, position.y], (pX, pY) => `${pX}px ${pY}px`)
    },
    ownerState,
    className: classes.root,
    d: Symbol(symbolsFill[getSymbol(shape)])(),
    onClick,
    cursor: onClick ? "pointer" : "unset"
  }, getInteractionItemProps({
    type: "line",
    seriesId: id,
    dataIndex
  })));
}
true ? MarkElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types7.default.object,
  /**
   * The index to the element in the series' data array.
   */
  dataIndex: import_prop_types7.default.number.isRequired,
  id: import_prop_types7.default.oneOfType([import_prop_types7.default.number, import_prop_types7.default.string]).isRequired,
  /**
   * The shape of the marker.
   */
  shape: import_prop_types7.default.oneOf(["circle", "cross", "diamond", "square", "star", "triangle", "wye"]).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types7.default.bool
} : void 0;

// node_modules/@mui/x-charts/LineChart/CircleMarkElement.js
var React9 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var _excluded8 = ["x", "y", "id", "classes", "color", "dataIndex", "onClick", "skipAnimation", "shape"];
function CircleMarkElement(props) {
  var _a;
  const {
    x,
    y,
    id,
    classes: innerClasses,
    color: color2,
    dataIndex,
    onClick,
    skipAnimation,
    shape
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded8);
  if (shape !== "circle") {
    warnOnce([`MUI X: The mark element of your line chart have shape "${shape}" which is not supported when using \`experimentalRendering=true\`.`, 'Only "circle" are supported with `experimentalRendering`.'].join("\n"), "error");
  }
  const theme = useTheme();
  const getInteractionItemProps = useInteractionItemProps();
  const {
    isFaded,
    isHighlighted
  } = useItemHighlighted({
    seriesId: id
  });
  const {
    axis
  } = React9.useContext(InteractionContext);
  const position = useSpring({
    to: {
      x,
      y
    },
    immediate: skipAnimation
  });
  const ownerState = {
    id,
    classes: innerClasses,
    isHighlighted: ((_a = axis.x) == null ? void 0 : _a.index) === dataIndex || isHighlighted,
    isFaded,
    color: color2
  };
  const classes = useUtilityClasses3(ownerState);
  return (0, import_jsx_runtime8.jsx)(animated.circle, _extends({}, other, {
    cx: position.x,
    cy: position.y,
    r: 5,
    fill: (theme.vars || theme).palette.background.paper,
    stroke: color2,
    strokeWidth: 2,
    className: classes.root,
    onClick,
    cursor: onClick ? "pointer" : "unset"
  }, getInteractionItemProps({
    type: "line",
    seriesId: id,
    dataIndex
  })));
}
true ? CircleMarkElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types8.default.object,
  /**
   * The index to the element in the series' data array.
   */
  dataIndex: import_prop_types8.default.number.isRequired,
  id: import_prop_types8.default.oneOfType([import_prop_types8.default.number, import_prop_types8.default.string]).isRequired,
  /**
   * The shape of the marker.
   */
  shape: import_prop_types8.default.oneOf(["circle", "cross", "diamond", "square", "star", "triangle", "wye"]).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types8.default.bool
} : void 0;

// node_modules/@mui/x-charts/LineChart/MarkPlot.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var _excluded9 = ["slots", "slotProps", "skipAnimation", "onItemClick", "experimentalRendering"];
function MarkPlot(props) {
  const {
    slots,
    slotProps,
    skipAnimation,
    onItemClick,
    experimentalRendering
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  const seriesData = useLineSeries();
  const axisData = useCartesianContext();
  const chartId = useChartId();
  const drawingArea = useDrawingArea();
  const Mark = (slots == null ? void 0 : slots.mark) ?? (experimentalRendering ? CircleMarkElement : MarkElement);
  if (seriesData === void 0) {
    return null;
  }
  const {
    series,
    stackingGroups
  } = seriesData;
  const {
    xAxis,
    yAxis,
    xAxisIds,
    yAxisIds
  } = axisData;
  const defaultXAxisId = xAxisIds[0];
  const defaultYAxisId = yAxisIds[0];
  return (0, import_jsx_runtime9.jsx)("g", _extends({}, other, {
    children: stackingGroups.flatMap(({
      ids: groupIds
    }) => {
      return groupIds.map((seriesId) => {
        const {
          xAxisId: xAxisIdProp,
          yAxisId: yAxisIdProp,
          xAxisKey = defaultXAxisId,
          yAxisKey = defaultYAxisId,
          stackedData,
          data,
          showMark = true
        } = series[seriesId];
        if (showMark === false) {
          return null;
        }
        const xAxisId = xAxisIdProp ?? xAxisKey;
        const yAxisId = yAxisIdProp ?? yAxisKey;
        const xScale = getValueToPositionMapper(xAxis[xAxisId].scale);
        const yScale = yAxis[yAxisId].scale;
        const xData = xAxis[xAxisId].data;
        if (xData === void 0) {
          throw new Error(`MUI X: ${xAxisId === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisId}"`} should have data property to be able to display a line plot.`);
        }
        const clipId = cleanId(`${chartId}-${seriesId}-line-clip`);
        const colorGetter = getColor_default(series[seriesId], xAxis[xAxisId], yAxis[yAxisId]);
        return (0, import_jsx_runtime9.jsx)("g", {
          clipPath: `url(#${clipId})`,
          children: xData == null ? void 0 : xData.map((x, index) => {
            const value = data[index] == null ? null : stackedData[index][1];
            return {
              x: xScale(x),
              y: value === null ? null : yScale(value),
              position: x,
              value,
              index
            };
          }).filter(({
            x,
            y,
            index,
            position,
            value
          }) => {
            if (value === null || y === null) {
              return false;
            }
            if (!drawingArea.isPointInside({
              x,
              y
            })) {
              return false;
            }
            if (showMark === true) {
              return true;
            }
            return showMark({
              x,
              y,
              index,
              position,
              value
            });
          }).map(({
            x,
            y,
            index
          }) => {
            return (0, import_jsx_runtime9.jsx)(Mark, _extends({
              id: seriesId,
              dataIndex: index,
              shape: "circle",
              color: colorGetter(index),
              x,
              y,
              skipAnimation,
              onClick: onItemClick && ((event) => onItemClick(event, {
                type: "line",
                seriesId,
                dataIndex: index
              }))
            }, slotProps == null ? void 0 : slotProps.mark), `${seriesId}-${index}`);
          })
        }, seriesId);
      });
    })
  }));
}
true ? MarkPlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true` the mark element will only be able to render circle.
   * Giving fewer customization options, but saving around 40ms per 1.000 marks.
   * @default false
   */
  experimentalRendering: import_prop_types9.default.bool,
  /**
   * Callback fired when a line mark item is clicked.
   * @param {React.MouseEvent<SVGPathElement, MouseEvent>} event The event source of the callback.
   * @param {LineItemIdentifier} lineItemIdentifier The line mark item identifier.
   */
  onItemClick: import_prop_types9.default.func,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types9.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types9.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types9.default.object
} : void 0;

// node_modules/@mui/x-charts/ChartsClipPath/ChartsClipPath.js
var React11 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
function ChartsClipPath(props) {
  const {
    id,
    offset: offsetProps
  } = props;
  const {
    left,
    top,
    width,
    height
  } = useDrawingArea();
  const offset = _extends({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }, offsetProps);
  return (0, import_jsx_runtime10.jsx)("clipPath", {
    id,
    children: (0, import_jsx_runtime10.jsx)("rect", {
      x: left - offset.left,
      y: top - offset.top,
      width: width + offset.left + offset.right,
      height: height + offset.top + offset.bottom
    })
  });
}
true ? ChartsClipPath.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  id: import_prop_types10.default.string.isRequired,
  offset: import_prop_types10.default.shape({
    bottom: import_prop_types10.default.number,
    left: import_prop_types10.default.number,
    right: import_prop_types10.default.number,
    top: import_prop_types10.default.number
  })
} : void 0;

// node_modules/@mui/x-charts/LineChart/LineHighlightPlot.js
var React13 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/LineChart/LineHighlightElement.js
var React12 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var _excluded10 = ["x", "y", "id", "classes", "color"];
function getHighlightElementUtilityClass(slot) {
  return generateUtilityClass("MuiHighlightElement", slot);
}
var lineHighlightElementClasses = generateUtilityClasses("MuiHighlightElement", ["root"]);
var useUtilityClasses4 = (ownerState) => {
  const {
    classes,
    id
  } = ownerState;
  const slots = {
    root: ["root", `series-${id}`]
  };
  return composeClasses(slots, getHighlightElementUtilityClass, classes);
};
var HighlightElement = styled_default("circle", {
  name: "MuiHighlightElement",
  slot: "Root",
  overridesResolver: (_, styles) => styles.root
})(({
  ownerState
}) => ({
  transform: `translate(${ownerState.x}px, ${ownerState.y}px)`,
  transformOrigin: `${ownerState.x}px ${ownerState.y}px`,
  fill: ownerState.color
}));
function LineHighlightElement(props) {
  const {
    x,
    y,
    id,
    classes: innerClasses,
    color: color2
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded10);
  const ownerState = {
    id,
    classes: innerClasses,
    color: color2,
    x,
    y
  };
  const classes = useUtilityClasses4(ownerState);
  return (0, import_jsx_runtime11.jsx)(HighlightElement, _extends({
    pointerEvents: "none",
    ownerState,
    className: classes.root,
    cx: 0,
    cy: 0,
    r: other.r === void 0 ? 5 : other.r
  }, other));
}
true ? LineHighlightElement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: import_prop_types11.default.object,
  id: import_prop_types11.default.oneOfType([import_prop_types11.default.number, import_prop_types11.default.string]).isRequired
} : void 0;

// node_modules/@mui/x-charts/LineChart/LineHighlightPlot.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var _excluded11 = ["slots", "slotProps"];
function LineHighlightPlot(props) {
  var _a;
  const {
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const seriesData = useLineSeries();
  const axisData = useCartesianContext();
  const drawingArea = useDrawingArea();
  const {
    axis
  } = React13.useContext(InteractionContext);
  const highlightedIndex = (_a = axis.x) == null ? void 0 : _a.index;
  if (highlightedIndex === void 0) {
    return null;
  }
  if (seriesData === void 0) {
    return null;
  }
  const {
    series,
    stackingGroups
  } = seriesData;
  const {
    xAxis,
    yAxis,
    xAxisIds,
    yAxisIds
  } = axisData;
  const defaultXAxisId = xAxisIds[0];
  const defaultYAxisId = yAxisIds[0];
  const Element = (slots == null ? void 0 : slots.lineHighlight) ?? LineHighlightElement;
  return (0, import_jsx_runtime12.jsx)("g", _extends({}, other, {
    children: stackingGroups.flatMap(({
      ids: groupIds
    }) => {
      return groupIds.flatMap((seriesId) => {
        const {
          xAxisId: xAxisIdProp,
          yAxisId: yAxisIdProp,
          xAxisKey = defaultXAxisId,
          yAxisKey = defaultYAxisId,
          stackedData,
          data,
          disableHighlight
        } = series[seriesId];
        const xAxisId = xAxisIdProp ?? xAxisKey;
        const yAxisId = yAxisIdProp ?? yAxisKey;
        if (disableHighlight || data[highlightedIndex] == null) {
          return null;
        }
        const xScale = getValueToPositionMapper(xAxis[xAxisId].scale);
        const yScale = yAxis[yAxisId].scale;
        const xData = xAxis[xAxisId].data;
        if (xData === void 0) {
          throw new Error(`MUI X: ${xAxisId === DEFAULT_X_AXIS_KEY ? "The first `xAxis`" : `The x-axis with id "${xAxisId}"`} should have data property to be able to display a line plot.`);
        }
        const x = xScale(xData[highlightedIndex]);
        const y = yScale(stackedData[highlightedIndex][1]);
        if (!drawingArea.isPointInside({
          x,
          y
        })) {
          return null;
        }
        const colorGetter = getColor_default(series[seriesId], xAxis[xAxisId], yAxis[yAxisId]);
        return (0, import_jsx_runtime12.jsx)(Element, _extends({
          id: seriesId,
          color: colorGetter(highlightedIndex),
          x,
          y
        }, slotProps == null ? void 0 : slotProps.lineHighlight), `${seriesId}`);
      });
    })
  }));
}
true ? LineHighlightPlot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types12.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types12.default.object
} : void 0;

// node_modules/@mui/x-charts/ChartsGrid/ChartsGrid.js
var React16 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());

// node_modules/@mui/x-charts/ChartsGrid/chartsGridClasses.js
function getChartsGridUtilityClass(slot) {
  return generateUtilityClass("MuiChartsGrid", slot);
}
var chartsGridClasses = generateUtilityClasses("MuiChartsGrid", ["root", "line", "horizontalLine", "verticalLine"]);

// node_modules/@mui/x-charts/ChartsGrid/styledCommonents.js
var GridRoot = styled_default("g", {
  name: "MuiChartsGrid",
  slot: "Root",
  overridesResolver: (props, styles) => [{
    [`&.${chartsGridClasses.verticalLine}`]: styles.verticalLine
  }, {
    [`&.${chartsGridClasses.horizontalLine}`]: styles.horizontalLine
  }, styles.root]
})({});
var GridLine = styled_default("line", {
  name: "MuiChartsGrid",
  slot: "Line",
  overridesResolver: (props, styles) => styles.line
})(({
  theme
}) => ({
  stroke: (theme.vars || theme).palette.divider,
  shapeRendering: "crispEdges",
  strokeWidth: 1
}));

// node_modules/@mui/x-charts/ChartsGrid/ChartsVerticalGrid.js
var React14 = __toESM(require_react());
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
function ChartsGridVertical(props) {
  const {
    axis,
    drawingArea,
    classes
  } = props;
  const {
    scale,
    tickNumber,
    tickInterval
  } = axis;
  const xTicks = useTicks({
    scale,
    tickNumber,
    tickInterval
  });
  return (0, import_jsx_runtime13.jsx)(React14.Fragment, {
    children: xTicks.map(({
      formattedValue,
      offset
    }) => (0, import_jsx_runtime13.jsx)(GridLine, {
      y1: drawingArea.top,
      y2: drawingArea.top + drawingArea.height,
      x1: offset,
      x2: offset,
      className: classes.verticalLine
    }, `vertical-${formattedValue}`))
  });
}

// node_modules/@mui/x-charts/ChartsGrid/ChartsHorizontalGrid.js
var React15 = __toESM(require_react());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
function ChartsGridHorizontal(props) {
  const {
    axis,
    drawingArea,
    classes
  } = props;
  const {
    scale,
    tickNumber,
    tickInterval
  } = axis;
  const yTicks = useTicks({
    scale,
    tickNumber,
    tickInterval
  });
  return (0, import_jsx_runtime14.jsx)(React15.Fragment, {
    children: yTicks.map(({
      formattedValue,
      offset
    }) => (0, import_jsx_runtime14.jsx)(GridLine, {
      y1: offset,
      y2: offset,
      x1: drawingArea.left,
      x2: drawingArea.left + drawingArea.width,
      className: classes.horizontalLine
    }, `horizontal-${formattedValue}`))
  });
}

// node_modules/@mui/x-charts/ChartsGrid/ChartsGrid.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var _excluded12 = ["vertical", "horizontal"];
var useUtilityClasses5 = ({
  classes
}) => {
  const slots = {
    root: ["root"],
    verticalLine: ["line", "verticalLine"],
    horizontalLine: ["line", "horizontalLine"]
  };
  return composeClasses(slots, getChartsGridUtilityClass, classes);
};
function ChartsGrid(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiChartsGrid"
  });
  const drawingArea = useDrawingArea();
  const {
    vertical,
    horizontal
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  const {
    xAxis,
    xAxisIds,
    yAxis,
    yAxisIds
  } = useCartesianContext();
  const classes = useUtilityClasses5(props);
  const horizontalAxis = yAxis[yAxisIds[0]];
  const verticalAxis = xAxis[xAxisIds[0]];
  return (0, import_jsx_runtime15.jsxs)(GridRoot, _extends({}, other, {
    className: classes.root,
    children: [vertical && (0, import_jsx_runtime15.jsx)(ChartsGridVertical, {
      axis: verticalAxis,
      drawingArea,
      classes
    }), horizontal && (0, import_jsx_runtime15.jsx)(ChartsGridHorizontal, {
      axis: horizontalAxis,
      drawingArea,
      classes
    })]
  }));
}
true ? ChartsGrid.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types13.default.object,
  /**
   * Displays horizontal grid.
   */
  horizontal: import_prop_types13.default.bool,
  /**
   * Displays vertical grid.
   */
  vertical: import_prop_types13.default.bool
} : void 0;

// node_modules/@mui/x-charts/ChartsOnAxisClickHandler/ChartsOnAxisClickHandler.js
var React17 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
function ChartsOnAxisClickHandler(props) {
  const {
    onAxisClick
  } = props;
  const svgRef = useSvgRef();
  const series = useSeries();
  const {
    axis
  } = React17.useContext(InteractionContext);
  const {
    xAxisIds,
    xAxis,
    yAxisIds,
    yAxis
  } = useCartesianContext();
  React17.useEffect(() => {
    const element = svgRef.current;
    if (element === null || !onAxisClick) {
      return () => {
      };
    }
    const handleMouseClick = (event) => {
      var _a;
      event.preventDefault();
      const isXaxis = axis.x && axis.x.index !== -1;
      const USED_AXIS_ID = isXaxis ? xAxisIds[0] : yAxisIds[0];
      const dataIndex = isXaxis ? axis.x && axis.x.index : axis.y && axis.y.index;
      if (dataIndex == null) {
        return;
      }
      const seriesValues = {};
      Object.keys(series).filter((seriesType) => ["bar", "line"].includes(seriesType)).forEach((seriesType) => {
        var _a2;
        (_a2 = series[seriesType]) == null ? void 0 : _a2.seriesOrder.forEach((seriesId) => {
          const seriesItem = series[seriesType].series[seriesId];
          const providedXAxisId = seriesItem.xAxisId ?? seriesItem.xAxisKey;
          const providedYAxisId = seriesItem.yAxisId ?? seriesItem.yAxisKey;
          const axisKey = isXaxis ? providedXAxisId : providedYAxisId;
          if (axisKey === void 0 || axisKey === USED_AXIS_ID) {
            seriesValues[seriesId] = seriesItem.data[dataIndex];
          }
        });
      });
      const axisValue = (_a = (isXaxis ? xAxis : yAxis)[USED_AXIS_ID].data) == null ? void 0 : _a[dataIndex];
      onAxisClick(event, {
        dataIndex,
        axisValue,
        seriesValues
      });
    };
    element.addEventListener("click", handleMouseClick);
    return () => {
      element.removeEventListener("click", handleMouseClick);
    };
  }, [axis.x, axis.y, onAxisClick, series, svgRef, xAxis, xAxisIds, yAxis, yAxisIds]);
  return (0, import_jsx_runtime16.jsx)(React17.Fragment, {});
}
true ? ChartsOnAxisClickHandler.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The function called for onClick events.
   * The second argument contains information about all line/bar elements at the current mouse position.
   * @param {MouseEvent} event The mouse event recorded on the `<svg/>` element.
   * @param {null | AxisData} data The data about the clicked axis and items associated with it.
   */
  onAxisClick: import_prop_types14.default.func
} : void 0;

// node_modules/@mui/x-charts/LineChart/useLineChartProps.js
var _excluded13 = ["xAxis", "yAxis", "series", "width", "height", "margin", "colors", "dataset", "sx", "tooltip", "onAxisClick", "onAreaClick", "onLineClick", "onMarkClick", "axisHighlight", "disableLineItemHighlight", "legend", "grid", "topAxis", "leftAxis", "rightAxis", "bottomAxis", "children", "slots", "slotProps", "skipAnimation", "loading", "highlightedItem", "onHighlightChange", "className", "experimentalMarkRendering"];
var useLineChartProps = (props) => {
  const {
    xAxis,
    yAxis,
    series,
    width,
    height,
    margin,
    colors,
    dataset,
    sx,
    tooltip,
    onAxisClick,
    onAreaClick,
    onLineClick,
    onMarkClick,
    axisHighlight,
    disableLineItemHighlight,
    legend,
    grid,
    topAxis,
    leftAxis,
    rightAxis,
    bottomAxis,
    children,
    slots,
    slotProps,
    skipAnimation,
    loading,
    highlightedItem,
    onHighlightChange,
    className,
    experimentalMarkRendering
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  const id = useId();
  const clipPathId = `${id}-clip-path`;
  const chartContainerProps = _extends({}, other, {
    series: series.map((s) => _extends({
      disableHighlight: !!disableLineItemHighlight,
      type: "line"
    }, s)),
    width,
    height,
    margin,
    colors,
    dataset,
    xAxis: xAxis ?? [{
      id: DEFAULT_X_AXIS_KEY,
      scaleType: "point",
      data: Array.from({
        length: Math.max(...series.map((s) => (s.data ?? dataset ?? []).length))
      }, (_, index) => index)
    }],
    yAxis,
    sx,
    highlightedItem,
    onHighlightChange,
    disableAxisListener: (tooltip == null ? void 0 : tooltip.trigger) !== "axis" && (axisHighlight == null ? void 0 : axisHighlight.x) === "none" && (axisHighlight == null ? void 0 : axisHighlight.y) === "none" && !onAxisClick,
    className
  });
  const axisClickHandlerProps = {
    onAxisClick
  };
  const gridProps = {
    vertical: grid == null ? void 0 : grid.vertical,
    horizontal: grid == null ? void 0 : grid.horizontal
  };
  const clipPathGroupProps = {
    clipPath: `url(#${clipPathId})`
  };
  const clipPathProps = {
    id: clipPathId
  };
  const areaPlotProps = {
    slots,
    slotProps,
    onItemClick: onAreaClick,
    skipAnimation
  };
  const linePlotProps = {
    slots,
    slotProps,
    onItemClick: onLineClick,
    skipAnimation
  };
  const markPlotProps = {
    slots,
    slotProps,
    onItemClick: onMarkClick,
    skipAnimation,
    experimentalRendering: experimentalMarkRendering
  };
  const overlayProps = {
    slots,
    slotProps,
    loading
  };
  const chartsAxisProps = {
    topAxis,
    leftAxis,
    rightAxis,
    bottomAxis,
    slots,
    slotProps
  };
  const axisHighlightProps = _extends({
    x: "line"
  }, axisHighlight);
  const lineHighlightPlotProps = {
    slots,
    slotProps
  };
  const legendProps = _extends({}, legend, {
    slots,
    slotProps
  });
  const tooltipProps = _extends({}, tooltip, {
    slots,
    slotProps
  });
  return {
    chartContainerProps,
    axisClickHandlerProps,
    gridProps,
    clipPathProps,
    clipPathGroupProps,
    areaPlotProps,
    linePlotProps,
    markPlotProps,
    overlayProps,
    chartsAxisProps,
    axisHighlightProps,
    lineHighlightPlotProps,
    legendProps,
    tooltipProps,
    children
  };
};

// node_modules/@mui/x-charts/LineChart/LineChart.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var LineChart = React18.forwardRef(function LineChart2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiLineChart"
  });
  const {
    chartContainerProps,
    axisClickHandlerProps,
    gridProps,
    clipPathProps,
    clipPathGroupProps,
    areaPlotProps,
    linePlotProps,
    markPlotProps,
    overlayProps,
    chartsAxisProps,
    axisHighlightProps,
    lineHighlightPlotProps,
    legendProps,
    tooltipProps,
    children
  } = useLineChartProps(props);
  return (0, import_jsx_runtime17.jsxs)(ResponsiveChartContainer, _extends({
    ref
  }, chartContainerProps, {
    children: [props.onAxisClick && (0, import_jsx_runtime17.jsx)(ChartsOnAxisClickHandler, _extends({}, axisClickHandlerProps)), (0, import_jsx_runtime17.jsx)(ChartsGrid, _extends({}, gridProps)), (0, import_jsx_runtime17.jsxs)("g", _extends({}, clipPathGroupProps, {
      children: [(0, import_jsx_runtime17.jsx)(AreaPlot, _extends({}, areaPlotProps)), (0, import_jsx_runtime17.jsx)(LinePlot, _extends({}, linePlotProps)), (0, import_jsx_runtime17.jsx)(ChartsOverlay, _extends({}, overlayProps)), (0, import_jsx_runtime17.jsx)(ChartsAxisHighlight, _extends({}, axisHighlightProps))]
    })), (0, import_jsx_runtime17.jsx)(ChartsAxis, _extends({}, chartsAxisProps)), (0, import_jsx_runtime17.jsx)("g", {
      "data-drawing-container": true,
      children: (0, import_jsx_runtime17.jsx)(MarkPlot, _extends({}, markPlotProps))
    }), (0, import_jsx_runtime17.jsx)(LineHighlightPlot, _extends({}, lineHighlightPlotProps)), (0, import_jsx_runtime17.jsx)(ChartsLegend, _extends({}, legendProps)), !props.loading && (0, import_jsx_runtime17.jsx)(ChartsTooltip, _extends({}, tooltipProps)), (0, import_jsx_runtime17.jsx)(ChartsClipPath, _extends({}, clipPathProps)), children]
  }));
});
true ? LineChart.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The configuration of axes highlight.
   * @see See {@link https://mui.com/x/react-charts/tooltip/#highlights highlight docs} for more details.
   * @default { x: 'line' }
   */
  axisHighlight: import_prop_types15.default.shape({
    x: import_prop_types15.default.oneOf(["band", "line", "none"]),
    y: import_prop_types15.default.oneOf(["band", "line", "none"])
  }),
  /**
   * Indicate which axis to display the bottom of the charts.
   * Can be a string (the id of the axis) or an object `ChartsXAxisProps`.
   * @default xAxisIds[0] The id of the first provided axis
   */
  bottomAxis: import_prop_types15.default.oneOfType([import_prop_types15.default.object, import_prop_types15.default.string]),
  children: import_prop_types15.default.node,
  className: import_prop_types15.default.string,
  /**
   * Color palette used to colorize multiple series.
   * @default blueberryTwilightPalette
   */
  colors: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.string), import_prop_types15.default.func]),
  /**
   * An array of objects that can be used to populate series and axes data using their `dataKey` property.
   */
  dataset: import_prop_types15.default.arrayOf(import_prop_types15.default.object),
  desc: import_prop_types15.default.string,
  /**
   * If `true`, the charts will not listen to the mouse move event.
   * It might break interactive features, but will improve performance.
   * @default false
   */
  disableAxisListener: import_prop_types15.default.bool,
  /**
   * If `true`, render the line highlight item.
   */
  disableLineItemHighlight: import_prop_types15.default.bool,
  /**
   * If `true` marks will render `<circle />` instead of `<path />` and drop theme override for faster rendering.
   */
  experimentalMarkRendering: import_prop_types15.default.bool,
  /**
   * Option to display a cartesian grid in the background.
   */
  grid: import_prop_types15.default.shape({
    horizontal: import_prop_types15.default.bool,
    vertical: import_prop_types15.default.bool
  }),
  /**
   * The height of the chart in px. If not defined, it takes the height of the parent element.
   */
  height: import_prop_types15.default.number,
  /**
   * The item currently highlighted. Turns highlighting into a controlled prop.
   */
  highlightedItem: import_prop_types15.default.shape({
    dataIndex: import_prop_types15.default.number,
    seriesId: import_prop_types15.default.oneOfType([import_prop_types15.default.number, import_prop_types15.default.string])
  }),
  /**
   * Indicate which axis to display the left of the charts.
   * Can be a string (the id of the axis) or an object `ChartsYAxisProps`.
   * @default yAxisIds[0] The id of the first provided axis
   */
  leftAxis: import_prop_types15.default.oneOfType([import_prop_types15.default.object, import_prop_types15.default.string]),
  /**
   * @deprecated Consider using `slotProps.legend` instead.
   */
  legend: import_prop_types15.default.shape({
    classes: import_prop_types15.default.object,
    direction: import_prop_types15.default.oneOf(["column", "row"]),
    hidden: import_prop_types15.default.bool,
    itemGap: import_prop_types15.default.number,
    itemMarkHeight: import_prop_types15.default.number,
    itemMarkWidth: import_prop_types15.default.number,
    labelStyle: import_prop_types15.default.object,
    markGap: import_prop_types15.default.number,
    onItemClick: import_prop_types15.default.func,
    padding: import_prop_types15.default.oneOfType([import_prop_types15.default.number, import_prop_types15.default.shape({
      bottom: import_prop_types15.default.number,
      left: import_prop_types15.default.number,
      right: import_prop_types15.default.number,
      top: import_prop_types15.default.number
    })]),
    position: import_prop_types15.default.shape({
      horizontal: import_prop_types15.default.oneOf(["left", "middle", "right"]).isRequired,
      vertical: import_prop_types15.default.oneOf(["bottom", "middle", "top"]).isRequired
    }),
    slotProps: import_prop_types15.default.object,
    slots: import_prop_types15.default.object
  }),
  /**
   * If `true`, a loading overlay is displayed.
   * @default false
   */
  loading: import_prop_types15.default.bool,
  /**
   * The margin between the SVG and the drawing area.
   * It's used for leaving some space for extra information such as the x- and y-axis or legend.
   * Accepts an object with the optional properties: `top`, `bottom`, `left`, and `right`.
   * @default object Depends on the charts type.
   */
  margin: import_prop_types15.default.shape({
    bottom: import_prop_types15.default.number,
    left: import_prop_types15.default.number,
    right: import_prop_types15.default.number,
    top: import_prop_types15.default.number
  }),
  /**
   * Callback fired when an area element is clicked.
   */
  onAreaClick: import_prop_types15.default.func,
  /**
   * The function called for onClick events.
   * The second argument contains information about all line/bar elements at the current mouse position.
   * @param {MouseEvent} event The mouse event recorded on the `<svg/>` element.
   * @param {null | AxisData} data The data about the clicked axis and items associated with it.
   */
  onAxisClick: import_prop_types15.default.func,
  /**
   * The callback fired when the highlighted item changes.
   *
   * @param {HighlightItemData | null} highlightedItem  The newly highlighted item.
   */
  onHighlightChange: import_prop_types15.default.func,
  /**
   * Callback fired when a line element is clicked.
   */
  onLineClick: import_prop_types15.default.func,
  /**
   * Callback fired when a mark element is clicked.
   */
  onMarkClick: import_prop_types15.default.func,
  /**
   * Indicate which axis to display the right of the charts.
   * Can be a string (the id of the axis) or an object `ChartsYAxisProps`.
   * @default null
   */
  rightAxis: import_prop_types15.default.oneOfType([import_prop_types15.default.object, import_prop_types15.default.string]),
  /**
   * The series to display in the line chart.
   * An array of [[LineSeriesType]] objects.
   */
  series: import_prop_types15.default.arrayOf(import_prop_types15.default.object).isRequired,
  /**
   * If `true`, animations are skipped.
   * @default false
   */
  skipAnimation: import_prop_types15.default.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: import_prop_types15.default.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: import_prop_types15.default.object,
  sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object]),
  title: import_prop_types15.default.string,
  /**
   * The configuration of the tooltip.
   * @see See {@link https://mui.com/x/react-charts/tooltip/ tooltip docs} for more details.
   * @default { trigger: 'item' }
   */
  tooltip: import_prop_types15.default.shape({
    axisContent: import_prop_types15.default.elementType,
    classes: import_prop_types15.default.object,
    itemContent: import_prop_types15.default.elementType,
    slotProps: import_prop_types15.default.object,
    slots: import_prop_types15.default.object,
    trigger: import_prop_types15.default.oneOf(["axis", "item", "none"])
  }),
  /**
   * Indicate which axis to display the top of the charts.
   * Can be a string (the id of the axis) or an object `ChartsXAxisProps`.
   * @default null
   */
  topAxis: import_prop_types15.default.oneOfType([import_prop_types15.default.object, import_prop_types15.default.string]),
  viewBox: import_prop_types15.default.shape({
    height: import_prop_types15.default.number,
    width: import_prop_types15.default.number,
    x: import_prop_types15.default.number,
    y: import_prop_types15.default.number
  }),
  /**
   * The width of the chart in px. If not defined, it takes the width of the parent element.
   */
  width: import_prop_types15.default.number,
  /**
   * The configuration of the x-axes.
   * If not provided, a default axis config is used.
   * An array of [[AxisConfig]] objects.
   */
  xAxis: import_prop_types15.default.arrayOf(import_prop_types15.default.shape({
    classes: import_prop_types15.default.object,
    colorMap: import_prop_types15.default.oneOfType([import_prop_types15.default.shape({
      colors: import_prop_types15.default.arrayOf(import_prop_types15.default.string).isRequired,
      type: import_prop_types15.default.oneOf(["ordinal"]).isRequired,
      unknownColor: import_prop_types15.default.string,
      values: import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.instanceOf(Date), import_prop_types15.default.number, import_prop_types15.default.string]).isRequired)
    }), import_prop_types15.default.shape({
      color: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.string.isRequired), import_prop_types15.default.func]).isRequired,
      max: import_prop_types15.default.oneOfType([import_prop_types15.default.instanceOf(Date), import_prop_types15.default.number]),
      min: import_prop_types15.default.oneOfType([import_prop_types15.default.instanceOf(Date), import_prop_types15.default.number]),
      type: import_prop_types15.default.oneOf(["continuous"]).isRequired
    }), import_prop_types15.default.shape({
      colors: import_prop_types15.default.arrayOf(import_prop_types15.default.string).isRequired,
      thresholds: import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.instanceOf(Date), import_prop_types15.default.number]).isRequired).isRequired,
      type: import_prop_types15.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types15.default.array,
    dataKey: import_prop_types15.default.string,
    disableLine: import_prop_types15.default.bool,
    disableTicks: import_prop_types15.default.bool,
    fill: import_prop_types15.default.string,
    hideTooltip: import_prop_types15.default.bool,
    id: import_prop_types15.default.oneOfType([import_prop_types15.default.number, import_prop_types15.default.string]),
    label: import_prop_types15.default.string,
    labelFontSize: import_prop_types15.default.number,
    labelStyle: import_prop_types15.default.object,
    max: import_prop_types15.default.oneOfType([import_prop_types15.default.instanceOf(Date), import_prop_types15.default.number]),
    min: import_prop_types15.default.oneOfType([import_prop_types15.default.instanceOf(Date), import_prop_types15.default.number]),
    position: import_prop_types15.default.oneOf(["bottom", "top"]),
    reverse: import_prop_types15.default.bool,
    scaleType: import_prop_types15.default.oneOf(["band", "linear", "log", "point", "pow", "sqrt", "time", "utc"]),
    slotProps: import_prop_types15.default.object,
    slots: import_prop_types15.default.object,
    stroke: import_prop_types15.default.string,
    sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object]),
    tickFontSize: import_prop_types15.default.number,
    tickInterval: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.array, import_prop_types15.default.func]),
    tickLabelInterval: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.func]),
    tickLabelPlacement: import_prop_types15.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types15.default.object,
    tickMaxStep: import_prop_types15.default.number,
    tickMinStep: import_prop_types15.default.number,
    tickNumber: import_prop_types15.default.number,
    tickPlacement: import_prop_types15.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types15.default.number,
    valueFormatter: import_prop_types15.default.func
  })),
  /**
   * The configuration of the y-axes.
   * If not provided, a default axis config is used.
   * An array of [[AxisConfig]] objects.
   */
  yAxis: import_prop_types15.default.arrayOf(import_prop_types15.default.shape({
    classes: import_prop_types15.default.object,
    colorMap: import_prop_types15.default.oneOfType([import_prop_types15.default.shape({
      colors: import_prop_types15.default.arrayOf(import_prop_types15.default.string).isRequired,
      type: import_prop_types15.default.oneOf(["ordinal"]).isRequired,
      unknownColor: import_prop_types15.default.string,
      values: import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.instanceOf(Date), import_prop_types15.default.number, import_prop_types15.default.string]).isRequired)
    }), import_prop_types15.default.shape({
      color: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.string.isRequired), import_prop_types15.default.func]).isRequired,
      max: import_prop_types15.default.oneOfType([import_prop_types15.default.instanceOf(Date), import_prop_types15.default.number]),
      min: import_prop_types15.default.oneOfType([import_prop_types15.default.instanceOf(Date), import_prop_types15.default.number]),
      type: import_prop_types15.default.oneOf(["continuous"]).isRequired
    }), import_prop_types15.default.shape({
      colors: import_prop_types15.default.arrayOf(import_prop_types15.default.string).isRequired,
      thresholds: import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.instanceOf(Date), import_prop_types15.default.number]).isRequired).isRequired,
      type: import_prop_types15.default.oneOf(["piecewise"]).isRequired
    })]),
    data: import_prop_types15.default.array,
    dataKey: import_prop_types15.default.string,
    disableLine: import_prop_types15.default.bool,
    disableTicks: import_prop_types15.default.bool,
    fill: import_prop_types15.default.string,
    hideTooltip: import_prop_types15.default.bool,
    id: import_prop_types15.default.oneOfType([import_prop_types15.default.number, import_prop_types15.default.string]),
    label: import_prop_types15.default.string,
    labelFontSize: import_prop_types15.default.number,
    labelStyle: import_prop_types15.default.object,
    max: import_prop_types15.default.oneOfType([import_prop_types15.default.instanceOf(Date), import_prop_types15.default.number]),
    min: import_prop_types15.default.oneOfType([import_prop_types15.default.instanceOf(Date), import_prop_types15.default.number]),
    position: import_prop_types15.default.oneOf(["left", "right"]),
    reverse: import_prop_types15.default.bool,
    scaleType: import_prop_types15.default.oneOf(["band", "linear", "log", "point", "pow", "sqrt", "time", "utc"]),
    slotProps: import_prop_types15.default.object,
    slots: import_prop_types15.default.object,
    stroke: import_prop_types15.default.string,
    sx: import_prop_types15.default.oneOfType([import_prop_types15.default.arrayOf(import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object, import_prop_types15.default.bool])), import_prop_types15.default.func, import_prop_types15.default.object]),
    tickFontSize: import_prop_types15.default.number,
    tickInterval: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.array, import_prop_types15.default.func]),
    tickLabelInterval: import_prop_types15.default.oneOfType([import_prop_types15.default.oneOf(["auto"]), import_prop_types15.default.func]),
    tickLabelPlacement: import_prop_types15.default.oneOf(["middle", "tick"]),
    tickLabelStyle: import_prop_types15.default.object,
    tickMaxStep: import_prop_types15.default.number,
    tickMinStep: import_prop_types15.default.number,
    tickNumber: import_prop_types15.default.number,
    tickPlacement: import_prop_types15.default.oneOf(["end", "extremities", "middle", "start"]),
    tickSize: import_prop_types15.default.number,
    valueFormatter: import_prop_types15.default.func
  }))
} : void 0;
export {
  AnimatedArea,
  AnimatedLine,
  AreaElement,
  AreaElementPath,
  AreaPlot,
  LineChart,
  LineElement,
  LineElementPath,
  LineHighlightElement,
  LineHighlightPlot,
  LinePlot,
  MarkElement,
  MarkPlot,
  areaElementClasses,
  getAreaElementUtilityClass,
  getHighlightElementUtilityClass,
  getLineElementUtilityClass,
  getMarkElementUtilityClass,
  lineElementClasses,
  lineHighlightElementClasses,
  markElementClasses
};
//# sourceMappingURL=@mui_x-charts_LineChart.js.map
