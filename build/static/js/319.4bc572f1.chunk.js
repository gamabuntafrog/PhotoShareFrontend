'use strict'
;(self.webpackChunkphoto_share = self.webpackChunkphoto_share || []).push([
  [319],
  {
    1131: function (e, t, n) {
      var o = n(4836)
      t.Z = void 0
      var r = o(n(5649)),
        a = n(3329),
        i = (0, r.default)(
          (0, a.jsx)('path', { d: 'M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z' }),
          'ExpandMore'
        )
      t.Z = i
    },
    1267: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v
        }
      })
      var o = n(7462),
        r = n(3366),
        a = n(2791),
        i = n(8182),
        s = n(4419),
        c = n(277),
        d = n(5513),
        l = n(5878),
        u = n(1217)
      function p(e) {
        return (0, u.Z)('MuiAccordionDetails', e)
      }
      ;(0, l.Z)('MuiAccordionDetails', ['root'])
      var h = n(3329),
        f = ['className'],
        m = (0, c.ZP)('div', {
          name: 'MuiAccordionDetails',
          slot: 'Root',
          overridesResolver: function (e, t) {
            return t.root
          }
        })(function (e) {
          return { padding: e.theme.spacing(1, 2, 2) }
        }),
        v = a.forwardRef(function (e, t) {
          var n = (0, d.Z)({ props: e, name: 'MuiAccordionDetails' }),
            a = n.className,
            c = (0, r.Z)(n, f),
            l = n,
            u = (function (e) {
              var t = e.classes
              return (0, s.Z)({ root: ['root'] }, p, t)
            })(l)
          return (0,
          h.jsx)(m, (0, o.Z)({ className: (0, i.Z)(u.root, a), ref: t, ownerState: l }, c))
        })
    },
    3671: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y
        }
      })
      var o = n(4942),
        r = n(3366),
        a = n(7462),
        i = n(2791),
        s = n(8182),
        c = n(4419),
        d = n(277),
        l = n(5513),
        u = n(753),
        p = n(501),
        h = n(5878),
        f = n(1217)
      function m(e) {
        return (0, f.Z)('MuiAccordionSummary', e)
      }
      var v = (0, h.Z)('MuiAccordionSummary', [
          'root',
          'expanded',
          'focusVisible',
          'disabled',
          'gutters',
          'contentGutters',
          'content',
          'expandIconWrapper'
        ]),
        g = n(3329),
        Z = ['children', 'className', 'expandIcon', 'focusVisibleClassName', 'onClick'],
        b = (0, d.ZP)(u.Z, {
          name: 'MuiAccordionSummary',
          slot: 'Root',
          overridesResolver: function (e, t) {
            return t.root
          }
        })(function (e) {
          var t,
            n = e.theme,
            r = e.ownerState,
            i = { duration: n.transitions.duration.shortest }
          return (0,
          a.Z)(((t = { display: 'flex', minHeight: 48, padding: n.spacing(0, 2), transition: n.transitions.create(['min-height', 'background-color'], i) }), (0, o.Z)(t, '&.'.concat(v.focusVisible), { backgroundColor: (n.vars || n).palette.action.focus }), (0, o.Z)(t, '&.'.concat(v.disabled), { opacity: (n.vars || n).palette.action.disabledOpacity }), (0, o.Z)(t, '&:hover:not(.'.concat(v.disabled, ')'), { cursor: 'pointer' }), t), !r.disableGutters && (0, o.Z)({}, '&.'.concat(v.expanded), { minHeight: 64 }))
        }),
        x = (0, d.ZP)('div', {
          name: 'MuiAccordionSummary',
          slot: 'Content',
          overridesResolver: function (e, t) {
            return t.content
          }
        })(function (e) {
          var t = e.theme,
            n = e.ownerState
          return (0,
          a.Z)({ display: 'flex', flexGrow: 1, margin: '12px 0' }, !n.disableGutters && (0, o.Z)({ transition: t.transitions.create(['margin'], { duration: t.transitions.duration.shortest }) }, '&.'.concat(v.expanded), { margin: '20px 0' }))
        }),
        w = (0, d.ZP)('div', {
          name: 'MuiAccordionSummary',
          slot: 'ExpandIconWrapper',
          overridesResolver: function (e, t) {
            return t.expandIconWrapper
          }
        })(function (e) {
          var t = e.theme
          return (0,
          o.Z)({ display: 'flex', color: (t.vars || t).palette.action.active, transform: 'rotate(0deg)', transition: t.transitions.create('transform', { duration: t.transitions.duration.shortest }) }, '&.'.concat(v.expanded), { transform: 'rotate(180deg)' })
        }),
        y = i.forwardRef(function (e, t) {
          var n = (0, l.Z)({ props: e, name: 'MuiAccordionSummary' }),
            o = n.children,
            d = n.className,
            u = n.expandIcon,
            h = n.focusVisibleClassName,
            f = n.onClick,
            v = (0, r.Z)(n, Z),
            y = i.useContext(p.Z),
            k = y.disabled,
            S = void 0 !== k && k,
            R = y.disableGutters,
            C = y.expanded,
            M = y.toggle,
            z = (0, a.Z)({}, n, { expanded: C, disabled: S, disableGutters: R }),
            E = (function (e) {
              var t = e.classes,
                n = e.expanded,
                o = e.disabled,
                r = e.disableGutters,
                a = {
                  root: ['root', n && 'expanded', o && 'disabled', !r && 'gutters'],
                  focusVisible: ['focusVisible'],
                  content: ['content', n && 'expanded', !r && 'contentGutters'],
                  expandIconWrapper: ['expandIconWrapper', n && 'expanded']
                }
              return (0, c.Z)(a, m, t)
            })(z)
          return (0, g.jsxs)(
            b,
            (0, a.Z)(
              {
                focusRipple: !1,
                disableRipple: !0,
                disabled: S,
                component: 'div',
                'aria-expanded': C,
                className: (0, s.Z)(E.root, d),
                focusVisibleClassName: (0, s.Z)(E.focusVisible, h),
                onClick: function (e) {
                  M && M(e), f && f(e)
                },
                ref: t,
                ownerState: z
              },
              v,
              {
                children: [
                  (0, g.jsx)(x, { className: E.content, ownerState: z, children: o }),
                  u && (0, g.jsx)(w, { className: E.expandIconWrapper, ownerState: z, children: u })
                ]
              }
            )
          )
        })
    },
    7603: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return j
        }
      })
      var o = n(4506),
        r = n(9439),
        a = n(4942),
        i = n(3366),
        s = n(7462),
        c = n(2791),
        d = (n(8457), n(8182)),
        l = n(4419),
        u = n(277),
        p = n(5513),
        h = n(6752),
        f = n(5354),
        m = n(6780),
        v = n(4142),
        g = n(7933),
        Z = n(5878),
        b = n(1217)
      function x(e) {
        return (0, b.Z)('MuiCollapse', e)
      }
      ;(0, Z.Z)('MuiCollapse', [
        'root',
        'horizontal',
        'vertical',
        'entered',
        'hidden',
        'wrapper',
        'wrapperInner'
      ])
      var w = n(3329),
        y = [
          'addEndListener',
          'children',
          'className',
          'collapsedSize',
          'component',
          'easing',
          'in',
          'onEnter',
          'onEntered',
          'onEntering',
          'onExit',
          'onExited',
          'onExiting',
          'orientation',
          'style',
          'timeout',
          'TransitionComponent'
        ],
        k = (0, u.ZP)('div', {
          name: 'MuiCollapse',
          slot: 'Root',
          overridesResolver: function (e, t) {
            var n = e.ownerState
            return [
              t.root,
              t[n.orientation],
              'entered' === n.state && t.entered,
              'exited' === n.state && !n.in && '0px' === n.collapsedSize && t.hidden
            ]
          }
        })(function (e) {
          var t = e.theme,
            n = e.ownerState
          return (0,
          s.Z)({ height: 0, overflow: 'hidden', transition: t.transitions.create('height') }, 'horizontal' === n.orientation && { height: 'auto', width: 0, transition: t.transitions.create('width') }, 'entered' === n.state && (0, s.Z)({ height: 'auto', overflow: 'visible' }, 'horizontal' === n.orientation && { width: 'auto' }), 'exited' === n.state && !n.in && '0px' === n.collapsedSize && { visibility: 'hidden' })
        }),
        S = (0, u.ZP)('div', {
          name: 'MuiCollapse',
          slot: 'Wrapper',
          overridesResolver: function (e, t) {
            return t.wrapper
          }
        })(function (e) {
          var t = e.ownerState
          return (0,
          s.Z)({ display: 'flex', width: '100%' }, 'horizontal' === t.orientation && { width: 'auto', height: '100%' })
        }),
        R = (0, u.ZP)('div', {
          name: 'MuiCollapse',
          slot: 'WrapperInner',
          overridesResolver: function (e, t) {
            return t.wrapperInner
          }
        })(function (e) {
          var t = e.ownerState
          return (0,
          s.Z)({ width: '100%' }, 'horizontal' === t.orientation && { width: 'auto', height: '100%' })
        }),
        C = c.forwardRef(function (e, t) {
          var n = (0, p.Z)({ props: e, name: 'MuiCollapse' }),
            o = n.addEndListener,
            r = n.children,
            u = n.className,
            Z = n.collapsedSize,
            b = void 0 === Z ? '0px' : Z,
            C = n.component,
            M = n.easing,
            z = n.in,
            E = n.onEnter,
            N = n.onEntered,
            I = n.onEntering,
            P = n.onExit,
            B = n.onExited,
            A = n.onExiting,
            j = n.orientation,
            T = void 0 === j ? 'vertical' : j,
            F = n.style,
            G = n.timeout,
            D = void 0 === G ? f.x9.standard : G,
            q = n.TransitionComponent,
            W = void 0 === q ? h.ZP : q,
            L = (0, i.Z)(n, y),
            O = (0, s.Z)({}, n, { orientation: T, collapsedSize: b }),
            V = (function (e) {
              var t = e.orientation,
                n = e.classes,
                o = {
                  root: ['root', ''.concat(t)],
                  entered: ['entered'],
                  hidden: ['hidden'],
                  wrapper: ['wrapper', ''.concat(t)],
                  wrapperInner: ['wrapperInner', ''.concat(t)]
                }
              return (0, l.Z)(o, x, n)
            })(O),
            H = (0, v.Z)(),
            _ = c.useRef(),
            X = c.useRef(null),
            $ = c.useRef(),
            J = 'number' === typeof b ? ''.concat(b, 'px') : b,
            K = 'horizontal' === T,
            Q = K ? 'width' : 'height'
          c.useEffect(function () {
            return function () {
              clearTimeout(_.current)
            }
          }, [])
          var U = c.useRef(null),
            Y = (0, g.Z)(t, U),
            ee = function (e) {
              return function (t) {
                if (e) {
                  var n = U.current
                  void 0 === t ? e(n) : e(n, t)
                }
              }
            },
            te = function () {
              return X.current ? X.current[K ? 'clientWidth' : 'clientHeight'] : 0
            },
            ne = ee(function (e, t) {
              X.current && K && (X.current.style.position = 'absolute'),
                (e.style[Q] = J),
                E && E(e, t)
            }),
            oe = ee(function (e, t) {
              var n = te()
              X.current && K && (X.current.style.position = '')
              var o = (0, m.C)({ style: F, timeout: D, easing: M }, { mode: 'enter' }),
                r = o.duration,
                a = o.easing
              if ('auto' === D) {
                var i = H.transitions.getAutoHeightDuration(n)
                ;(e.style.transitionDuration = ''.concat(i, 'ms')), ($.current = i)
              } else e.style.transitionDuration = 'string' === typeof r ? r : ''.concat(r, 'ms')
              ;(e.style[Q] = ''.concat(n, 'px')),
                (e.style.transitionTimingFunction = a),
                I && I(e, t)
            }),
            re = ee(function (e, t) {
              ;(e.style[Q] = 'auto'), N && N(e, t)
            }),
            ae = ee(function (e) {
              ;(e.style[Q] = ''.concat(te(), 'px')), P && P(e)
            }),
            ie = ee(B),
            se = ee(function (e) {
              var t = te(),
                n = (0, m.C)({ style: F, timeout: D, easing: M }, { mode: 'exit' }),
                o = n.duration,
                r = n.easing
              if ('auto' === D) {
                var a = H.transitions.getAutoHeightDuration(t)
                ;(e.style.transitionDuration = ''.concat(a, 'ms')), ($.current = a)
              } else e.style.transitionDuration = 'string' === typeof o ? o : ''.concat(o, 'ms')
              ;(e.style[Q] = J), (e.style.transitionTimingFunction = r), A && A(e)
            })
          return (0, w.jsx)(
            W,
            (0, s.Z)(
              {
                in: z,
                onEnter: ne,
                onEntered: re,
                onEntering: oe,
                onExit: ae,
                onExited: ie,
                onExiting: se,
                addEndListener: function (e) {
                  'auto' === D && (_.current = setTimeout(e, $.current || 0)), o && o(U.current, e)
                },
                nodeRef: U,
                timeout: 'auto' === D ? null : D
              },
              L,
              {
                children: function (e, t) {
                  return (0, w.jsx)(
                    k,
                    (0, s.Z)(
                      {
                        as: C,
                        className: (0, d.Z)(
                          V.root,
                          u,
                          { entered: V.entered, exited: !z && '0px' === J && V.hidden }[e]
                        ),
                        style: (0, s.Z)((0, a.Z)({}, K ? 'minWidth' : 'minHeight', J), F),
                        ownerState: (0, s.Z)({}, O, { state: e }),
                        ref: Y
                      },
                      t,
                      {
                        children: (0, w.jsx)(S, {
                          ownerState: (0, s.Z)({}, O, { state: e }),
                          className: V.wrapper,
                          ref: X,
                          children: (0, w.jsx)(R, {
                            ownerState: (0, s.Z)({}, O, { state: e }),
                            className: V.wrapperInner,
                            children: r
                          })
                        })
                      }
                    )
                  )
                }
              }
            )
          )
        })
      C.muiSupportAuto = !0
      var M = C,
        z = n(286),
        E = n(501),
        N = n(5178)
      function I(e) {
        return (0, b.Z)('MuiAccordion', e)
      }
      var P = (0, Z.Z)('MuiAccordion', [
          'root',
          'rounded',
          'expanded',
          'disabled',
          'gutters',
          'region'
        ]),
        B = [
          'children',
          'className',
          'defaultExpanded',
          'disabled',
          'disableGutters',
          'expanded',
          'onChange',
          'square',
          'TransitionComponent',
          'TransitionProps'
        ],
        A = (0, u.ZP)(z.Z, {
          name: 'MuiAccordion',
          slot: 'Root',
          overridesResolver: function (e, t) {
            var n = e.ownerState
            return [
              (0, a.Z)({}, '& .'.concat(P.region), t.region),
              t.root,
              !n.square && t.rounded,
              !n.disableGutters && t.gutters
            ]
          }
        })(
          function (e) {
            var t,
              n = e.theme,
              o = { duration: n.transitions.duration.shortest }
            return (
              (t = {
                position: 'relative',
                transition: n.transitions.create(['margin'], o),
                overflowAnchor: 'none',
                '&:before': {
                  position: 'absolute',
                  left: 0,
                  top: -1,
                  right: 0,
                  height: 1,
                  content: '""',
                  opacity: 1,
                  backgroundColor: (n.vars || n).palette.divider,
                  transition: n.transitions.create(['opacity', 'background-color'], o)
                },
                '&:first-of-type': { '&:before': { display: 'none' } }
              }),
              (0, a.Z)(t, '&.'.concat(P.expanded), {
                '&:before': { opacity: 0 },
                '&:first-of-type': { marginTop: 0 },
                '&:last-of-type': { marginBottom: 0 },
                '& + &': { '&:before': { display: 'none' } }
              }),
              (0, a.Z)(t, '&.'.concat(P.disabled), {
                backgroundColor: (n.vars || n).palette.action.disabledBackground
              }),
              t
            )
          },
          function (e) {
            var t = e.theme,
              n = e.ownerState
            return (0, s.Z)(
              {},
              !n.square && {
                borderRadius: 0,
                '&:first-of-type': {
                  borderTopLeftRadius: (t.vars || t).shape.borderRadius,
                  borderTopRightRadius: (t.vars || t).shape.borderRadius
                },
                '&:last-of-type': {
                  borderBottomLeftRadius: (t.vars || t).shape.borderRadius,
                  borderBottomRightRadius: (t.vars || t).shape.borderRadius,
                  '@supports (-ms-ime-align: auto)': {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0
                  }
                }
              },
              !n.disableGutters && (0, a.Z)({}, '&.'.concat(P.expanded), { margin: '16px 0' })
            )
          }
        ),
        j = c.forwardRef(function (e, t) {
          var n = (0, p.Z)({ props: e, name: 'MuiAccordion' }),
            a = n.children,
            u = n.className,
            h = n.defaultExpanded,
            f = void 0 !== h && h,
            m = n.disabled,
            v = void 0 !== m && m,
            g = n.disableGutters,
            Z = void 0 !== g && g,
            b = n.expanded,
            x = n.onChange,
            y = n.square,
            k = void 0 !== y && y,
            S = n.TransitionComponent,
            R = void 0 === S ? M : S,
            C = n.TransitionProps,
            z = (0, i.Z)(n, B),
            P = (0, N.Z)({ controlled: b, default: f, name: 'Accordion', state: 'expanded' }),
            j = (0, r.Z)(P, 2),
            T = j[0],
            F = j[1],
            G = c.useCallback(
              function (e) {
                F(!T), x && x(e, !T)
              },
              [T, x, F]
            ),
            D = c.Children.toArray(a),
            q = (0, o.Z)(D),
            W = q[0],
            L = q.slice(1),
            O = c.useMemo(
              function () {
                return { expanded: T, disabled: v, disableGutters: Z, toggle: G }
              },
              [T, v, Z, G]
            ),
            V = (0, s.Z)({}, n, { square: k, disabled: v, disableGutters: Z, expanded: T }),
            H = (function (e) {
              var t = e.classes,
                n = {
                  root: [
                    'root',
                    !e.square && 'rounded',
                    e.expanded && 'expanded',
                    e.disabled && 'disabled',
                    !e.disableGutters && 'gutters'
                  ],
                  region: ['region']
                }
              return (0, l.Z)(n, I, t)
            })(V)
          return (0,
          w.jsxs)(A, (0, s.Z)({ className: (0, d.Z)(H.root, u), ref: t, ownerState: V, square: k }, z, { children: [(0, w.jsx)(E.Z.Provider, { value: O, children: W }), (0, w.jsx)(R, (0, s.Z)({ in: T, timeout: 'auto' }, C, { children: (0, w.jsx)('div', { 'aria-labelledby': W.props.id, id: W.props['aria-controls'], role: 'region', className: H.region, children: L }) }))] }))
        })
    },
    501: function (e, t, n) {
      var o = n(2791).createContext({})
      t.Z = o
    },
    1889: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return P
        }
      })
      var o = n(4942),
        r = n(3366),
        a = n(7462),
        i = n(2791),
        s = n(8182),
        c = n(4419),
        d = n(2065),
        l = n(9853),
        u = n(9439),
        p = n(277),
        h = n(5178),
        f = n(529),
        m = n(753),
        v = n(5878),
        g = n(1217)
      function Z(e) {
        return (0, g.Z)('PrivateSwitchBase', e)
      }
      ;(0, v.Z)('PrivateSwitchBase', [
        'root',
        'checked',
        'disabled',
        'input',
        'edgeStart',
        'edgeEnd'
      ])
      var b = n(3329),
        x = [
          'autoFocus',
          'checked',
          'checkedIcon',
          'className',
          'defaultChecked',
          'disabled',
          'disableFocusRipple',
          'edge',
          'icon',
          'id',
          'inputProps',
          'inputRef',
          'name',
          'onBlur',
          'onChange',
          'onFocus',
          'readOnly',
          'required',
          'tabIndex',
          'type',
          'value'
        ],
        w = (0, p.ZP)(m.Z)(function (e) {
          var t = e.ownerState
          return (0,
          a.Z)({ padding: 9, borderRadius: '50%' }, 'start' === t.edge && { marginLeft: 'small' === t.size ? -3 : -12 }, 'end' === t.edge && { marginRight: 'small' === t.size ? -3 : -12 })
        }),
        y = (0, p.ZP)('input')({
          cursor: 'inherit',
          position: 'absolute',
          opacity: 0,
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: 1
        }),
        k = i.forwardRef(function (e, t) {
          var n = e.autoFocus,
            o = e.checked,
            i = e.checkedIcon,
            d = e.className,
            p = e.defaultChecked,
            m = e.disabled,
            v = e.disableFocusRipple,
            g = void 0 !== v && v,
            k = e.edge,
            S = void 0 !== k && k,
            R = e.icon,
            C = e.id,
            M = e.inputProps,
            z = e.inputRef,
            E = e.name,
            N = e.onBlur,
            I = e.onChange,
            P = e.onFocus,
            B = e.readOnly,
            A = e.required,
            j = e.tabIndex,
            T = e.type,
            F = e.value,
            G = (0, r.Z)(e, x),
            D = (0, h.Z)({
              controlled: o,
              default: Boolean(p),
              name: 'SwitchBase',
              state: 'checked'
            }),
            q = (0, u.Z)(D, 2),
            W = q[0],
            L = q[1],
            O = (0, f.Z)(),
            V = m
          O && 'undefined' === typeof V && (V = O.disabled)
          var H = 'checkbox' === T || 'radio' === T,
            _ = (0, a.Z)({}, e, { checked: W, disabled: V, disableFocusRipple: g, edge: S }),
            X = (function (e) {
              var t = e.classes,
                n = e.checked,
                o = e.disabled,
                r = e.edge,
                a = {
                  root: ['root', n && 'checked', o && 'disabled', r && 'edge'.concat((0, l.Z)(r))],
                  input: ['input']
                }
              return (0, c.Z)(a, Z, t)
            })(_)
          return (0, b.jsxs)(
            w,
            (0, a.Z)(
              {
                component: 'span',
                className: (0, s.Z)(X.root, d),
                centerRipple: !0,
                focusRipple: !g,
                disabled: V,
                tabIndex: null,
                role: void 0,
                onFocus: function (e) {
                  P && P(e), O && O.onFocus && O.onFocus(e)
                },
                onBlur: function (e) {
                  N && N(e), O && O.onBlur && O.onBlur(e)
                },
                ownerState: _,
                ref: t
              },
              G,
              {
                children: [
                  (0, b.jsx)(
                    y,
                    (0, a.Z)(
                      {
                        autoFocus: n,
                        checked: o,
                        defaultChecked: p,
                        className: X.input,
                        disabled: V,
                        id: H && C,
                        name: E,
                        onChange: function (e) {
                          if (!e.nativeEvent.defaultPrevented) {
                            var t = e.target.checked
                            L(t), I && I(e, t)
                          }
                        },
                        readOnly: B,
                        ref: z,
                        required: A,
                        ownerState: _,
                        tabIndex: j,
                        type: T
                      },
                      'checkbox' === T && void 0 === F ? {} : { value: F },
                      M
                    )
                  ),
                  W ? i : R
                ]
              }
            )
          )
        }),
        S = n(5513)
      function R(e) {
        return (0, g.Z)('MuiSwitch', e)
      }
      var C = (0, v.Z)('MuiSwitch', [
          'root',
          'edgeStart',
          'edgeEnd',
          'switchBase',
          'colorPrimary',
          'colorSecondary',
          'sizeSmall',
          'sizeMedium',
          'checked',
          'disabled',
          'input',
          'thumb',
          'track'
        ]),
        M = ['className', 'color', 'edge', 'size', 'sx'],
        z = (0, p.ZP)('span', {
          name: 'MuiSwitch',
          slot: 'Root',
          overridesResolver: function (e, t) {
            var n = e.ownerState
            return [
              t.root,
              n.edge && t['edge'.concat((0, l.Z)(n.edge))],
              t['size'.concat((0, l.Z)(n.size))]
            ]
          }
        })(function (e) {
          var t,
            n = e.ownerState
          return (0,
          a.Z)({ display: 'inline-flex', width: 58, height: 38, overflow: 'hidden', padding: 12, boxSizing: 'border-box', position: 'relative', flexShrink: 0, zIndex: 0, verticalAlign: 'middle', '@media print': { colorAdjust: 'exact' } }, 'start' === n.edge && { marginLeft: -8 }, 'end' === n.edge && { marginRight: -8 }, 'small' === n.size && ((t = { width: 40, height: 24, padding: 7 }), (0, o.Z)(t, '& .'.concat(C.thumb), { width: 16, height: 16 }), (0, o.Z)(t, '& .'.concat(C.switchBase), (0, o.Z)({ padding: 4 }, '&.'.concat(C.checked), { transform: 'translateX(16px)' })), t))
        }),
        E = (0, p.ZP)(k, {
          name: 'MuiSwitch',
          slot: 'SwitchBase',
          overridesResolver: function (e, t) {
            var n = e.ownerState
            return [
              t.switchBase,
              (0, o.Z)({}, '& .'.concat(C.input), t.input),
              'default' !== n.color && t['color'.concat((0, l.Z)(n.color))]
            ]
          }
        })(
          function (e) {
            var t,
              n = e.theme
            return (
              (t = {
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
                color: n.vars
                  ? n.vars.palette.Switch.defaultColor
                  : ''.concat(
                      'light' === n.palette.mode ? n.palette.common.white : n.palette.grey[300]
                    ),
                transition: n.transitions.create(['left', 'transform'], {
                  duration: n.transitions.duration.shortest
                })
              }),
              (0, o.Z)(t, '&.'.concat(C.checked), { transform: 'translateX(20px)' }),
              (0, o.Z)(t, '&.'.concat(C.disabled), {
                color: n.vars
                  ? n.vars.palette.Switch.defaultDisabledColor
                  : ''.concat(
                      'light' === n.palette.mode ? n.palette.grey[100] : n.palette.grey[600]
                    )
              }),
              (0, o.Z)(t, '&.'.concat(C.checked, ' + .').concat(C.track), { opacity: 0.5 }),
              (0, o.Z)(t, '&.'.concat(C.disabled, ' + .').concat(C.track), {
                opacity: n.vars
                  ? n.vars.opacity.switchTrackDisabled
                  : ''.concat('light' === n.palette.mode ? 0.12 : 0.2)
              }),
              (0, o.Z)(t, '& .'.concat(C.input), { left: '-100%', width: '300%' }),
              t
            )
          },
          function (e) {
            var t,
              n = e.theme,
              r = e.ownerState
            return (0, a.Z)(
              {
                '&:hover': {
                  backgroundColor: n.vars
                    ? 'rgba('
                        .concat(n.vars.palette.action.activeChannel, ' / ')
                        .concat(n.vars.palette.action.hoverOpacity, ')')
                    : (0, d.Fq)(n.palette.action.active, n.palette.action.hoverOpacity),
                  '@media (hover: none)': { backgroundColor: 'transparent' }
                }
              },
              'default' !== r.color &&
                ((t = {}),
                (0, o.Z)(
                  t,
                  '&.'.concat(C.checked),
                  (0, o.Z)(
                    {
                      color: (n.vars || n).palette[r.color].main,
                      '&:hover': {
                        backgroundColor: n.vars
                          ? 'rgba('
                              .concat(n.vars.palette[r.color].mainChannel, ' / ')
                              .concat(n.vars.palette.action.hoverOpacity, ')')
                          : (0, d.Fq)(n.palette[r.color].main, n.palette.action.hoverOpacity),
                        '@media (hover: none)': { backgroundColor: 'transparent' }
                      }
                    },
                    '&.'.concat(C.disabled),
                    {
                      color: n.vars
                        ? n.vars.palette.Switch[''.concat(r.color, 'DisabledColor')]
                        : ''.concat(
                            'light' === n.palette.mode
                              ? (0, d.$n)(n.palette[r.color].main, 0.62)
                              : (0, d._j)(n.palette[r.color].main, 0.55)
                          )
                    }
                  )
                ),
                (0, o.Z)(t, '&.'.concat(C.checked, ' + .').concat(C.track), {
                  backgroundColor: (n.vars || n).palette[r.color].main
                }),
                t)
            )
          }
        ),
        N = (0, p.ZP)('span', {
          name: 'MuiSwitch',
          slot: 'Track',
          overridesResolver: function (e, t) {
            return t.track
          }
        })(function (e) {
          var t = e.theme
          return {
            height: '100%',
            width: '100%',
            borderRadius: 7,
            zIndex: -1,
            transition: t.transitions.create(['opacity', 'background-color'], {
              duration: t.transitions.duration.shortest
            }),
            backgroundColor: t.vars
              ? t.vars.palette.common.onBackground
              : ''.concat(
                  'light' === t.palette.mode ? t.palette.common.black : t.palette.common.white
                ),
            opacity: t.vars
              ? t.vars.opacity.switchTrack
              : ''.concat('light' === t.palette.mode ? 0.38 : 0.3)
          }
        }),
        I = (0, p.ZP)('span', {
          name: 'MuiSwitch',
          slot: 'Thumb',
          overridesResolver: function (e, t) {
            return t.thumb
          }
        })(function (e) {
          var t = e.theme
          return {
            boxShadow: (t.vars || t).shadows[1],
            backgroundColor: 'currentColor',
            width: 20,
            height: 20,
            borderRadius: '50%'
          }
        }),
        P = i.forwardRef(function (e, t) {
          var n = (0, S.Z)({ props: e, name: 'MuiSwitch' }),
            o = n.className,
            i = n.color,
            d = void 0 === i ? 'primary' : i,
            u = n.edge,
            p = void 0 !== u && u,
            h = n.size,
            f = void 0 === h ? 'medium' : h,
            m = n.sx,
            v = (0, r.Z)(n, M),
            g = (0, a.Z)({}, n, { color: d, edge: p, size: f }),
            Z = (function (e) {
              var t = e.classes,
                n = e.edge,
                o = e.size,
                r = e.color,
                i = e.checked,
                s = e.disabled,
                d = {
                  root: ['root', n && 'edge'.concat((0, l.Z)(n)), 'size'.concat((0, l.Z)(o))],
                  switchBase: [
                    'switchBase',
                    'color'.concat((0, l.Z)(r)),
                    i && 'checked',
                    s && 'disabled'
                  ],
                  thumb: ['thumb'],
                  track: ['track'],
                  input: ['input']
                },
                u = (0, c.Z)(d, R, t)
              return (0, a.Z)({}, t, u)
            })(g),
            x = (0, b.jsx)(I, { className: Z.thumb, ownerState: g })
          return (0,
          b.jsxs)(z, { className: (0, s.Z)(Z.root, o), sx: m, ownerState: g, children: [(0, b.jsx)(E, (0, a.Z)({ type: 'checkbox', icon: x, checkedIcon: x, ref: t, ownerState: g }, v, { classes: (0, a.Z)({}, Z, { root: Z.switchBase }) })), (0, b.jsx)(N, { className: Z.track, ownerState: g })] })
        })
    }
  }
])
//# sourceMappingURL=319.4bc572f1.chunk.js.map
