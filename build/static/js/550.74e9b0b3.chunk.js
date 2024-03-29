'use strict'
;(self.webpackChunkphoto_share = self.webpackChunkphoto_share || []).push([
  [550],
  {
    8550: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return z
          }
        })
      var r,
        o = t(1413),
        i = t(9439),
        a = t(6015),
        s = t(4565),
        l = t(4871),
        c = t(9365),
        d = t(6746),
        u = t(8254),
        p = t(3811),
        m = t(7205),
        f = t(2791),
        x = t(653),
        h = t(3153),
        v = t(9195),
        Z = t(9569),
        b = t(3710),
        g = t(4695),
        w = t(4343),
        j = t(306),
        y = t(4942),
        k = function (e) {
          return {
            backdrop: {
              background: 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('.concat(
                'https://images.unsplash.com/photo-1534484374439-6b8cd79be97c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
                ')'
              ),
              backgroundPositionY: 'center',
              backgroundSize: 'cover',
              minHeight: 'calc(100vh - 80px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'stretch'
            },
            loginContainer: (0, y.Z)(
              { py: 2, width: '90%', mx: 'auto', bgcolor: 'background.default' },
              e.breakpoints.down('tablet'),
              { width: '100%' }
            ),
            title: { textAlign: 'center', fontWeight: 'bold' },
            form: (0, y.Z)(
              {
                display: 'flex',
                flexDirection: 'column',
                width: 300,
                mx: 'auto',
                padding: 3,
                mt: 2
              },
              e.breakpoints.down('mobile'),
              { width: 'auto', py: 1, px: 3 }
            ),
            formInput: { mt: 1, mb: 2 },
            signInButton: { width: '50%', mx: 'auto' },
            signUpLink: {
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: '16px',
              textDecoration: 'underline'
            }
          }
        },
        M = t(4196),
        S = t(2436),
        L = t(5468),
        P = t(3329)
      !(function (e) {
        ;(e[(e.email = 0)] = 'email'), (e[(e.password = 1)] = 'password')
      })(r || (r = {}))
      var z = function () {
        var e = (0, v.cI)({ resolver: (0, g.X)(w.k), mode: 'all' }),
          n = e.register,
          t = e.handleSubmit,
          y = e.formState.errors,
          z = y.email,
          I = y.password,
          C = (0, h.T)(),
          E = t(function (e) {
            var n = e.email,
              t = e.password
            C((0, x.x4)({ email: n, password: t }))
          }),
          D = !!z || !!I,
          F = (0, f.useState)(!1),
          N = (0, i.Z)(F, 2),
          A = N[0],
          R = N[1],
          B = (0, j.Z)(k),
          G = (0, S.Z)({ componentNameKey: 'Login' }),
          T = null !== z && void 0 !== z && z.message ? G(z.message) : G('emailLabel'),
          H = null !== I && void 0 !== I && I.message ? G(I.message) : G('passwordLabel'),
          U = G(D ? 'loginButtonDisabled' : 'loginButton')
        return (0, P.jsxs)(P.Fragment, {
          children: [
            (0, P.jsx)(L.Z, { keyOfTitle: 'login' }),
            (0, P.jsx)(a.Z, {
              sx: B.backdrop,
              children: (0, P.jsxs)(a.Z, {
                sx: B.loginContainer,
                children: [
                  (0, P.jsx)(s.Z, { sx: B.title, variant: 'h1', children: G('title') }),
                  (0, P.jsxs)(l.Z, {
                    onSubmit: E,
                    sx: B.form,
                    children: [
                      (0, P.jsx)(c.Z, {
                        sx: { whiteSpace: 'unset' },
                        error: !!z,
                        htmlFor: ''.concat(r.email),
                        children: T
                      }),
                      (0, P.jsx)(
                        d.Z,
                        (0, o.Z)(
                          { id: ''.concat(r.email), sx: B.formInput, error: !!z, type: 'email' },
                          n('email')
                        )
                      ),
                      (0, P.jsx)(c.Z, {
                        sx: { whiteSpace: 'unset' },
                        error: !!I,
                        htmlFor: ''.concat(r.password),
                        children: H
                      }),
                      (0, P.jsx)(
                        d.Z,
                        (0, o.Z)(
                          (0, o.Z)(
                            { id: ''.concat(r.password), sx: B.formInput, error: !!I },
                            n('password')
                          ),
                          {},
                          {
                            type: A ? 'text' : 'password',
                            endAdornment: (0, P.jsx)(u.Z, {
                              position: 'end',
                              children: (0, P.jsx)(p.Z, {
                                'aria-label': 'toggle password visibility',
                                onClick: function () {
                                  return R(function (e) {
                                    return !e
                                  })
                                },
                                onMouseDown: function (e) {
                                  e.preventDefault()
                                },
                                edge: 'end',
                                sx: { mr: '-4px' },
                                children: A ? (0, P.jsx)(Z.Z, {}) : (0, P.jsx)(b.Z, {})
                              })
                            })
                          }
                        )
                      ),
                      (0, P.jsx)(m.Z, {
                        type: 'submit',
                        variant: 'contained',
                        onClick: E,
                        disabled: D,
                        sx: B.signInButton,
                        children: U
                      }),
                      (0, P.jsx)(M.bP, {
                        style: B.signUpLink,
                        to: '/register',
                        children: G('hasNotUserAccount')
                      })
                    ]
                  })
                ]
              })
            })
          ]
        })
      }
    },
    3710: function (e, n, t) {
      var r = t(1245),
        o = t(3329)
      n.Z = (0, r.Z)(
        (0, o.jsx)('path', {
          d: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z'
        }),
        'Visibility'
      )
    },
    9569: function (e, n, t) {
      var r = t(1245),
        o = t(3329)
      n.Z = (0, r.Z)(
        (0, o.jsx)('path', {
          d: 'M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z'
        }),
        'VisibilityOff'
      )
    },
    4871: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z
        }
      })
      var r = t(3366),
        o = t(7462),
        i = t(2791),
        a = t(8182),
        s = t(4419),
        l = t(277),
        c = t(5513),
        d = t(5878),
        u = t(1217)
      function p(e) {
        return (0, u.Z)('MuiFormGroup', e)
      }
      ;(0, d.Z)('MuiFormGroup', ['root', 'row', 'error'])
      var m = t(529),
        f = t(40),
        x = t(3329),
        h = ['className', 'row'],
        v = (0, l.ZP)('div', {
          name: 'MuiFormGroup',
          slot: 'Root',
          overridesResolver: function (e, n) {
            var t = e.ownerState
            return [n.root, t.row && n.row]
          }
        })(function (e) {
          var n = e.ownerState
          return (0,
          o.Z)({ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }, n.row && { flexDirection: 'row' })
        }),
        Z = i.forwardRef(function (e, n) {
          var t = (0, c.Z)({ props: e, name: 'MuiFormGroup' }),
            i = t.className,
            l = t.row,
            d = void 0 !== l && l,
            u = (0, r.Z)(t, h),
            Z = (0, m.Z)(),
            b = (0, f.Z)({ props: t, muiFormControl: Z, states: ['error'] }),
            g = (0, o.Z)({}, t, { row: d, error: b.error }),
            w = (function (e) {
              var n = e.classes,
                t = { root: ['root', e.row && 'row', e.error && 'error'] }
              return (0, s.Z)(t, p, n)
            })(g)
          return (0,
          x.jsx)(v, (0, o.Z)({ className: (0, a.Z)(w.root, i), ownerState: g, ref: n }, u))
        })
    },
    8254: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return y
        }
      })
      var r = t(4942),
        o = t(3366),
        i = t(7462),
        a = t(2791),
        s = t(8182),
        l = t(4419),
        c = t(9853),
        d = t(4565),
        u = t(1211),
        p = t(529),
        m = t(277),
        f = t(5878),
        x = t(1217)
      function h(e) {
        return (0, x.Z)('MuiInputAdornment', e)
      }
      var v,
        Z = (0, f.Z)('MuiInputAdornment', [
          'root',
          'filled',
          'standard',
          'outlined',
          'positionStart',
          'positionEnd',
          'disablePointerEvents',
          'hiddenLabel',
          'sizeSmall'
        ]),
        b = t(5513),
        g = t(3329),
        w = [
          'children',
          'className',
          'component',
          'disablePointerEvents',
          'disableTypography',
          'position',
          'variant'
        ],
        j = (0, m.ZP)('div', {
          name: 'MuiInputAdornment',
          slot: 'Root',
          overridesResolver: function (e, n) {
            var t = e.ownerState
            return [
              n.root,
              n['position'.concat((0, c.Z)(t.position))],
              !0 === t.disablePointerEvents && n.disablePointerEvents,
              n[t.variant]
            ]
          }
        })(function (e) {
          var n = e.theme,
            t = e.ownerState
          return (0,
          i.Z)({ display: 'flex', height: '0.01em', maxHeight: '2em', alignItems: 'center', whiteSpace: 'nowrap', color: (n.vars || n).palette.action.active }, 'filled' === t.variant && (0, r.Z)({}, '&.'.concat(Z.positionStart, '&:not(.').concat(Z.hiddenLabel, ')'), { marginTop: 16 }), 'start' === t.position && { marginRight: 8 }, 'end' === t.position && { marginLeft: 8 }, !0 === t.disablePointerEvents && { pointerEvents: 'none' })
        }),
        y = a.forwardRef(function (e, n) {
          var t = (0, b.Z)({ props: e, name: 'MuiInputAdornment' }),
            r = t.children,
            m = t.className,
            f = t.component,
            x = void 0 === f ? 'div' : f,
            Z = t.disablePointerEvents,
            y = void 0 !== Z && Z,
            k = t.disableTypography,
            M = void 0 !== k && k,
            S = t.position,
            L = t.variant,
            P = (0, o.Z)(t, w),
            z = (0, p.Z)() || {},
            I = L
          L && z.variant, z && !I && (I = z.variant)
          var C = (0, i.Z)({}, t, {
              hiddenLabel: z.hiddenLabel,
              size: z.size,
              disablePointerEvents: y,
              position: S,
              variant: I
            }),
            E = (function (e) {
              var n = e.classes,
                t = e.disablePointerEvents,
                r = e.hiddenLabel,
                o = e.position,
                i = e.size,
                a = e.variant,
                s = {
                  root: [
                    'root',
                    t && 'disablePointerEvents',
                    o && 'position'.concat((0, c.Z)(o)),
                    a,
                    r && 'hiddenLabel',
                    i && 'size'.concat((0, c.Z)(i))
                  ]
                }
              return (0, l.Z)(s, h, n)
            })(C)
          return (0,
          g.jsx)(u.Z.Provider, { value: null, children: (0, g.jsx)(j, (0, i.Z)({ as: x, ownerState: C, className: (0, s.Z)(E.root, m), ref: n }, P, { children: 'string' !== typeof r || M ? (0, g.jsxs)(a.Fragment, { children: ['start' === S ? v || (v = (0, g.jsx)('span', { className: 'notranslate', children: '\u200b' })) : null, r] }) : (0, g.jsx)(d.Z, { color: 'text.secondary', children: r }) })) })
        })
    }
  }
])
//# sourceMappingURL=550.74e9b0b3.chunk.js.map
