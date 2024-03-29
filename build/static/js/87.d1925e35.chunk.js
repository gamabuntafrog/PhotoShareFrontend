'use strict'
;(self.webpackChunkphoto_share = self.webpackChunkphoto_share || []).push([
  [87],
  {
    2087: function (e, t, a) {
      a.d(t, {
        ZP: function () {
          return R
        }
      })
      var o = a(4942),
        n = a(3366),
        i = a(7462),
        r = a(2791),
        s = a(8182),
        d = a(4419),
        c = a(627),
        l = a(2065),
        u = a(277),
        p = a(5513),
        v = a(753),
        m = a(6258),
        b = a(3026),
        g = a(7933),
        Z = a(8826),
        f = a(5878),
        h = a(1217)
      function y(e) {
        return (0, h.Z)('MuiListItem', e)
      }
      var C = (0, f.Z)('MuiListItem', [
        'root',
        'container',
        'focusVisible',
        'dense',
        'alignItemsFlexStart',
        'disabled',
        'divider',
        'gutters',
        'padding',
        'button',
        'secondaryAction',
        'selected'
      ])
      var x = (0, f.Z)('MuiListItemButton', [
        'root',
        'focusVisible',
        'dense',
        'alignItemsFlexStart',
        'disabled',
        'divider',
        'gutters',
        'selected'
      ])
      function I(e) {
        return (0, h.Z)('MuiListItemSecondaryAction', e)
      }
      ;(0, f.Z)('MuiListItemSecondaryAction', ['root', 'disableGutters'])
      var S = a(3329),
        A = ['className'],
        P = (0, u.ZP)('div', {
          name: 'MuiListItemSecondaryAction',
          slot: 'Root',
          overridesResolver: function (e, t) {
            var a = e.ownerState
            return [t.root, a.disableGutters && t.disableGutters]
          }
        })(function (e) {
          var t = e.ownerState
          return (0,
          i.Z)({ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' }, t.disableGutters && { right: 0 })
        }),
        w = r.forwardRef(function (e, t) {
          var a = (0, p.Z)({ props: e, name: 'MuiListItemSecondaryAction' }),
            o = a.className,
            c = (0, n.Z)(a, A),
            l = r.useContext(Z.Z),
            u = (0, i.Z)({}, a, { disableGutters: l.disableGutters }),
            v = (function (e) {
              var t = e.disableGutters,
                a = e.classes,
                o = { root: ['root', t && 'disableGutters'] }
              return (0, d.Z)(o, I, a)
            })(u)
          return (0,
          S.jsx)(P, (0, i.Z)({ className: (0, s.Z)(v.root, o), ownerState: u, ref: t }, c))
        })
      w.muiName = 'ListItemSecondaryAction'
      var G = w,
        N = ['className'],
        k = [
          'alignItems',
          'autoFocus',
          'button',
          'children',
          'className',
          'component',
          'components',
          'componentsProps',
          'ContainerComponent',
          'ContainerProps',
          'dense',
          'disabled',
          'disableGutters',
          'disablePadding',
          'divider',
          'focusVisibleClassName',
          'secondaryAction',
          'selected',
          'slotProps',
          'slots'
        ],
        L = (0, u.ZP)('div', {
          name: 'MuiListItem',
          slot: 'Root',
          overridesResolver: function (e, t) {
            var a = e.ownerState
            return [
              t.root,
              a.dense && t.dense,
              'flex-start' === a.alignItems && t.alignItemsFlexStart,
              a.divider && t.divider,
              !a.disableGutters && t.gutters,
              !a.disablePadding && t.padding,
              a.button && t.button,
              a.hasSecondaryAction && t.secondaryAction
            ]
          }
        })(function (e) {
          var t,
            a = e.theme,
            n = e.ownerState
          return (0,
          i.Z)({ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', position: 'relative', textDecoration: 'none', width: '100%', boxSizing: 'border-box', textAlign: 'left' }, !n.disablePadding && (0, i.Z)({ paddingTop: 8, paddingBottom: 8 }, n.dense && { paddingTop: 4, paddingBottom: 4 }, !n.disableGutters && { paddingLeft: 16, paddingRight: 16 }, !!n.secondaryAction && { paddingRight: 48 }), !!n.secondaryAction && (0, o.Z)({}, '& > .'.concat(x.root), { paddingRight: 48 }), ((t = {}), (0, o.Z)(t, '&.'.concat(C.focusVisible), { backgroundColor: (a.vars || a).palette.action.focus }), (0, o.Z)(t, '&.'.concat(C.selected), (0, o.Z)({ backgroundColor: a.vars ? 'rgba('.concat(a.vars.palette.primary.mainChannel, ' / ').concat(a.vars.palette.action.selectedOpacity, ')') : (0, l.Fq)(a.palette.primary.main, a.palette.action.selectedOpacity) }, '&.'.concat(C.focusVisible), { backgroundColor: a.vars ? 'rgba('.concat(a.vars.palette.primary.mainChannel, ' / calc(').concat(a.vars.palette.action.selectedOpacity, ' + ').concat(a.vars.palette.action.focusOpacity, '))') : (0, l.Fq)(a.palette.primary.main, a.palette.action.selectedOpacity + a.palette.action.focusOpacity) })), (0, o.Z)(t, '&.'.concat(C.disabled), { opacity: (a.vars || a).palette.action.disabledOpacity }), t), 'flex-start' === n.alignItems && { alignItems: 'flex-start' }, n.divider && { borderBottom: '1px solid '.concat((a.vars || a).palette.divider), backgroundClip: 'padding-box' }, n.button && (0, o.Z)({ transition: a.transitions.create('background-color', { duration: a.transitions.duration.shortest }), '&:hover': { textDecoration: 'none', backgroundColor: (a.vars || a).palette.action.hover, '@media (hover: none)': { backgroundColor: 'transparent' } } }, '&.'.concat(C.selected, ':hover'), { backgroundColor: a.vars ? 'rgba('.concat(a.vars.palette.primary.mainChannel, ' / calc(').concat(a.vars.palette.action.selectedOpacity, ' + ').concat(a.vars.palette.action.hoverOpacity, '))') : (0, l.Fq)(a.palette.primary.main, a.palette.action.selectedOpacity + a.palette.action.hoverOpacity), '@media (hover: none)': { backgroundColor: a.vars ? 'rgba('.concat(a.vars.palette.primary.mainChannel, ' / ').concat(a.vars.palette.action.selectedOpacity, ')') : (0, l.Fq)(a.palette.primary.main, a.palette.action.selectedOpacity) } }), n.hasSecondaryAction && { paddingRight: 48 })
        }),
        O = (0, u.ZP)('li', {
          name: 'MuiListItem',
          slot: 'Container',
          overridesResolver: function (e, t) {
            return t.container
          }
        })({ position: 'relative' }),
        R = r.forwardRef(function (e, t) {
          var a = (0, p.Z)({ props: e, name: 'MuiListItem' }),
            o = a.alignItems,
            l = void 0 === o ? 'center' : o,
            u = a.autoFocus,
            f = void 0 !== u && u,
            h = a.button,
            x = void 0 !== h && h,
            I = a.children,
            A = a.className,
            P = a.component,
            w = a.components,
            R = void 0 === w ? {} : w,
            F = a.componentsProps,
            M = void 0 === F ? {} : F,
            j = a.ContainerComponent,
            V = void 0 === j ? 'li' : j,
            q = a.ContainerProps,
            B = (q = void 0 === q ? {} : q).className,
            D = a.dense,
            T = void 0 !== D && D,
            _ = a.disabled,
            z = void 0 !== _ && _,
            Y = a.disableGutters,
            E = void 0 !== Y && Y,
            H = a.disablePadding,
            J = void 0 !== H && H,
            K = a.divider,
            Q = void 0 !== K && K,
            U = a.focusVisibleClassName,
            W = a.secondaryAction,
            X = a.selected,
            $ = void 0 !== X && X,
            ee = a.slotProps,
            te = void 0 === ee ? {} : ee,
            ae = a.slots,
            oe = void 0 === ae ? {} : ae,
            ne = (0, n.Z)(a.ContainerProps, N),
            ie = (0, n.Z)(a, k),
            re = r.useContext(Z.Z),
            se = r.useMemo(
              function () {
                return { dense: T || re.dense || !1, alignItems: l, disableGutters: E }
              },
              [l, re.dense, T, E]
            ),
            de = r.useRef(null)
          ;(0, b.Z)(
            function () {
              f && de.current && de.current.focus()
            },
            [f]
          )
          var ce = r.Children.toArray(I),
            le = ce.length && (0, m.Z)(ce[ce.length - 1], ['ListItemSecondaryAction']),
            ue = (0, i.Z)({}, a, {
              alignItems: l,
              autoFocus: f,
              button: x,
              dense: se.dense,
              disabled: z,
              disableGutters: E,
              disablePadding: J,
              divider: Q,
              hasSecondaryAction: le,
              selected: $
            }),
            pe = (function (e) {
              var t = e.alignItems,
                a = e.button,
                o = e.classes,
                n = e.dense,
                i = e.disabled,
                r = {
                  root: [
                    'root',
                    n && 'dense',
                    !e.disableGutters && 'gutters',
                    !e.disablePadding && 'padding',
                    e.divider && 'divider',
                    i && 'disabled',
                    a && 'button',
                    'flex-start' === t && 'alignItemsFlexStart',
                    e.hasSecondaryAction && 'secondaryAction',
                    e.selected && 'selected'
                  ],
                  container: ['container']
                }
              return (0, d.Z)(r, y, o)
            })(ue),
            ve = (0, g.Z)(de, t),
            me = oe.root || R.Root || L,
            be = te.root || M.root || {},
            ge = (0, i.Z)({ className: (0, s.Z)(pe.root, be.className, A), disabled: z }, ie),
            Ze = P || 'li'
          return (
            x &&
              ((ge.component = P || 'div'),
              (ge.focusVisibleClassName = (0, s.Z)(C.focusVisible, U)),
              (Ze = v.Z)),
            le
              ? ((Ze = ge.component || P ? Ze : 'div'),
                'li' === V &&
                  ('li' === Ze ? (Ze = 'div') : 'li' === ge.component && (ge.component = 'div')),
                (0, S.jsx)(Z.Z.Provider, {
                  value: se,
                  children: (0, S.jsxs)(
                    O,
                    (0, i.Z)(
                      { as: V, className: (0, s.Z)(pe.container, B), ref: ve, ownerState: ue },
                      ne,
                      {
                        children: [
                          (0, S.jsx)(
                            me,
                            (0, i.Z)(
                              {},
                              be,
                              !(0, c.Z)(me) && {
                                as: Ze,
                                ownerState: (0, i.Z)({}, ue, be.ownerState)
                              },
                              ge,
                              { children: ce }
                            )
                          ),
                          ce.pop()
                        ]
                      }
                    )
                  )
                }))
              : (0, S.jsx)(Z.Z.Provider, {
                  value: se,
                  children: (0, S.jsxs)(
                    me,
                    (0, i.Z)(
                      {},
                      be,
                      { as: Ze, ref: ve },
                      !(0, c.Z)(me) && { ownerState: (0, i.Z)({}, ue, be.ownerState) },
                      ge,
                      { children: [ce, W && (0, S.jsx)(G, { children: W })] }
                    )
                  )
                })
          )
        })
    }
  }
])
//# sourceMappingURL=87.d1925e35.chunk.js.map
