import {
  require_react_dom
} from "./chunk-JMVEG3FK.js";
import {
  HTMLElementType,
  exactProp,
  getReactNodeRef,
  require_jsx_runtime,
  setRef,
  useEnhancedEffect_default,
  useForkRef
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

// node_modules/@mui/material/Portal/Portal.js
var React = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
var import_prop_types = __toESM(require_prop_types());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function getContainer(container) {
  return typeof container === "function" ? container() : container;
}
var Portal = React.forwardRef(function Portal2(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = React.useState(null);
  const handleRef = useForkRef(getReactNodeRef(children), forwardedRef);
  useEnhancedEffect_default(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect_default(() => {
    if (mountNode && !disablePortal) {
      setRef(forwardedRef, mountNode);
      return () => {
        setRef(forwardedRef, null);
      };
    }
    return void 0;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if (React.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return React.cloneElement(children, newProps);
    }
    return (0, import_jsx_runtime.jsx)(React.Fragment, {
      children
    });
  }
  return (0, import_jsx_runtime.jsx)(React.Fragment, {
    children: mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode
  });
});
true ? Portal.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: import_prop_types.default.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: import_prop_types.default.oneOfType([HTMLElementType, import_prop_types.default.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: import_prop_types.default.bool
} : void 0;
if (true) {
  Portal["propTypes"] = exactProp(Portal.propTypes);
}
var Portal_default = Portal;

export {
  Portal_default
};
//# sourceMappingURL=chunk-WOQNJ2LE.js.map
