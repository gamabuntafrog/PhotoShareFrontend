'use strict'
;(self.webpackChunkphoto_share = self.webpackChunkphoto_share || []).push([
  [953],
  {
    5953: function (n, r, t) {
      t.d(r, {
        ZP: function () {
          return z
        }
      })
      var e = t(3433),
        a = t(4942),
        i = t(3366),
        o = t(7462),
        c = t(2791),
        u = t(8182),
        s = t(1184),
        p = t(8519),
        f = t(4419),
        d = t(277),
        l = t(5513),
        m = t(4142)
      var v = c.createContext(),
        g = t(5878),
        h = t(1217)
      function w(n) {
        return (0, h.Z)('MuiGrid', n)
      }
      var x = ['auto', !0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        b = (0, g.Z)(
          'MuiGrid',
          ['root', 'container', 'item', 'zeroMinWidth'].concat(
            (0, e.Z)(
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (n) {
                return 'spacing-xs-'.concat(n)
              })
            ),
            (0, e.Z)(
              ['column-reverse', 'column', 'row-reverse', 'row'].map(function (n) {
                return 'direction-xs-'.concat(n)
              })
            ),
            (0, e.Z)(
              ['nowrap', 'wrap-reverse', 'wrap'].map(function (n) {
                return 'wrap-xs-'.concat(n)
              })
            ),
            (0, e.Z)(
              x.map(function (n) {
                return 'grid-xs-'.concat(n)
              })
            ),
            (0, e.Z)(
              x.map(function (n) {
                return 'grid-sm-'.concat(n)
              })
            ),
            (0, e.Z)(
              x.map(function (n) {
                return 'grid-md-'.concat(n)
              })
            ),
            (0, e.Z)(
              x.map(function (n) {
                return 'grid-lg-'.concat(n)
              })
            ),
            (0, e.Z)(
              x.map(function (n) {
                return 'grid-xl-'.concat(n)
              })
            )
          )
        ),
        k = t(3329),
        S = [
          'className',
          'columns',
          'columnSpacing',
          'component',
          'container',
          'direction',
          'item',
          'rowSpacing',
          'spacing',
          'wrap',
          'zeroMinWidth'
        ]
      function Z(n) {
        var r = parseFloat(n)
        return ''.concat(r).concat(String(n).replace(String(r), '') || 'px')
      }
      function W(n) {
        var r = n.breakpoints,
          t = n.values,
          e = ''
        Object.keys(t).forEach(function (n) {
          '' === e && 0 !== t[n] && (e = n)
        })
        var a = Object.keys(r).sort(function (n, t) {
          return r[n] - r[t]
        })
        return a.slice(0, a.indexOf(e))
      }
      var M = (0, d.ZP)('div', {
        name: 'MuiGrid',
        slot: 'Root',
        overridesResolver: function (n, r) {
          var t = n.ownerState,
            a = t.container,
            i = t.direction,
            o = t.item,
            c = t.spacing,
            u = t.wrap,
            s = t.zeroMinWidth,
            p = t.breakpoints,
            f = []
          a &&
            (f = (function (n, r) {
              var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              if (!n || n <= 0) return []
              if (('string' === typeof n && !Number.isNaN(Number(n))) || 'number' === typeof n)
                return [t['spacing-xs-'.concat(String(n))]]
              var e = []
              return (
                r.forEach(function (r) {
                  var a = n[r]
                  Number(a) > 0 && e.push(t['spacing-'.concat(r, '-').concat(String(a))])
                }),
                e
              )
            })(c, p, r))
          var d = []
          return (
            p.forEach(function (n) {
              var e = t[n]
              e && d.push(r['grid-'.concat(n, '-').concat(String(e))])
            }),
            [r.root, a && r.container, o && r.item, s && r.zeroMinWidth].concat(
              (0, e.Z)(f),
              [
                'row' !== i && r['direction-xs-'.concat(String(i))],
                'wrap' !== u && r['wrap-xs-'.concat(String(u))]
              ],
              d
            )
          )
        }
      })(
        function (n) {
          var r = n.ownerState
          return (0, o.Z)(
            { boxSizing: 'border-box' },
            r.container && { display: 'flex', flexWrap: 'wrap', width: '100%' },
            r.item && { margin: 0 },
            r.zeroMinWidth && { minWidth: 0 },
            'wrap' !== r.wrap && { flexWrap: r.wrap }
          )
        },
        function (n) {
          var r = n.theme,
            t = n.ownerState,
            e = (0, s.P$)({ values: t.direction, breakpoints: r.breakpoints.values })
          return (0, s.k9)({ theme: r }, e, function (n) {
            var r = { flexDirection: n }
            return (
              0 === n.indexOf('column') && (r['& > .'.concat(b.item)] = { maxWidth: 'none' }), r
            )
          })
        },
        function (n) {
          var r = n.theme,
            t = n.ownerState,
            e = t.container,
            i = t.rowSpacing,
            o = {}
          if (e && 0 !== i) {
            var c,
              u = (0, s.P$)({ values: i, breakpoints: r.breakpoints.values })
            'object' === typeof u && (c = W({ breakpoints: r.breakpoints.values, values: u })),
              (o = (0, s.k9)({ theme: r }, u, function (n, t) {
                var e,
                  i = r.spacing(n)
                return '0px' !== i
                  ? (0, a.Z)({ marginTop: '-'.concat(Z(i)) }, '& > .'.concat(b.item), {
                      paddingTop: Z(i)
                    })
                  : null != (e = c) && e.includes(t)
                  ? {}
                  : (0, a.Z)({ marginTop: 0 }, '& > .'.concat(b.item), { paddingTop: 0 })
              }))
          }
          return o
        },
        function (n) {
          var r = n.theme,
            t = n.ownerState,
            e = t.container,
            i = t.columnSpacing,
            o = {}
          if (e && 0 !== i) {
            var c,
              u = (0, s.P$)({ values: i, breakpoints: r.breakpoints.values })
            'object' === typeof u && (c = W({ breakpoints: r.breakpoints.values, values: u })),
              (o = (0, s.k9)({ theme: r }, u, function (n, t) {
                var e,
                  i = r.spacing(n)
                return '0px' !== i
                  ? (0, a.Z)(
                      { width: 'calc(100% + '.concat(Z(i), ')'), marginLeft: '-'.concat(Z(i)) },
                      '& > .'.concat(b.item),
                      { paddingLeft: Z(i) }
                    )
                  : null != (e = c) && e.includes(t)
                  ? {}
                  : (0, a.Z)({ width: '100%', marginLeft: 0 }, '& > .'.concat(b.item), {
                      paddingLeft: 0
                    })
              }))
          }
          return o
        },
        function (n) {
          var r,
            t = n.theme,
            e = n.ownerState
          return t.breakpoints.keys.reduce(function (n, a) {
            var i = {}
            if ((e[a] && (r = e[a]), !r)) return n
            if (!0 === r) i = { flexBasis: 0, flexGrow: 1, maxWidth: '100%' }
            else if ('auto' === r)
              i = { flexBasis: 'auto', flexGrow: 0, flexShrink: 0, maxWidth: 'none', width: 'auto' }
            else {
              var c = (0, s.P$)({ values: e.columns, breakpoints: t.breakpoints.values }),
                u = 'object' === typeof c ? c[a] : c
              if (void 0 === u || null === u) return n
              var p = ''.concat(Math.round((r / u) * 1e8) / 1e6, '%'),
                f = {}
              if (e.container && e.item && 0 !== e.columnSpacing) {
                var d = t.spacing(e.columnSpacing)
                if ('0px' !== d) {
                  var l = 'calc('.concat(p, ' + ').concat(Z(d), ')')
                  f = { flexBasis: l, maxWidth: l }
                }
              }
              i = (0, o.Z)({ flexBasis: p, flexGrow: 0, maxWidth: p }, f)
            }
            return (
              0 === t.breakpoints.values[a] ? Object.assign(n, i) : (n[t.breakpoints.up(a)] = i), n
            )
          }, {})
        }
      )
      var y = function (n) {
          var r = n.classes,
            t = n.container,
            a = n.direction,
            i = n.item,
            o = n.spacing,
            c = n.wrap,
            u = n.zeroMinWidth,
            s = n.breakpoints,
            p = []
          t &&
            (p = (function (n, r) {
              if (!n || n <= 0) return []
              if (('string' === typeof n && !Number.isNaN(Number(n))) || 'number' === typeof n)
                return ['spacing-xs-'.concat(String(n))]
              var t = []
              return (
                r.forEach(function (r) {
                  var e = n[r]
                  if (Number(e) > 0) {
                    var a = 'spacing-'.concat(r, '-').concat(String(e))
                    t.push(a)
                  }
                }),
                t
              )
            })(o, s))
          var d = []
          s.forEach(function (r) {
            var t = n[r]
            t && d.push('grid-'.concat(r, '-').concat(String(t)))
          })
          var l = {
            root: ['root', t && 'container', i && 'item', u && 'zeroMinWidth'].concat(
              (0, e.Z)(p),
              [
                'row' !== a && 'direction-xs-'.concat(String(a)),
                'wrap' !== c && 'wrap-xs-'.concat(String(c))
              ],
              d
            )
          }
          return (0, f.Z)(l, w, r)
        },
        N = c.forwardRef(function (n, r) {
          var t = (0, l.Z)({ props: n, name: 'MuiGrid' }),
            e = (0, m.Z)().breakpoints,
            a = (0, p.Z)(t),
            s = a.className,
            f = a.columns,
            d = a.columnSpacing,
            g = a.component,
            h = void 0 === g ? 'div' : g,
            w = a.container,
            x = void 0 !== w && w,
            b = a.direction,
            Z = void 0 === b ? 'row' : b,
            W = a.item,
            N = void 0 !== W && W,
            z = a.rowSpacing,
            j = a.spacing,
            G = void 0 === j ? 0 : j,
            P = a.wrap,
            E = void 0 === P ? 'wrap' : P,
            O = a.zeroMinWidth,
            B = void 0 !== O && O,
            C = (0, i.Z)(a, S),
            L = z || G,
            T = d || G,
            $ = c.useContext(v),
            R = x ? f || 12 : $,
            _ = {},
            D = (0, o.Z)({}, C)
          e.keys.forEach(function (n) {
            null != C[n] && ((_[n] = C[n]), delete D[n])
          })
          var F = (0, o.Z)(
              {},
              a,
              {
                columns: R,
                container: x,
                direction: Z,
                item: N,
                rowSpacing: L,
                columnSpacing: T,
                wrap: E,
                zeroMinWidth: B,
                spacing: G
              },
              _,
              { breakpoints: e.keys }
            ),
            q = y(F)
          return (0,
          k.jsx)(v.Provider, { value: R, children: (0, k.jsx)(M, (0, o.Z)({ ownerState: F, className: (0, u.Z)(q.root, s), as: h, ref: r }, D)) })
        }),
        z = N
    }
  }
])
//# sourceMappingURL=953.a464df42.chunk.js.map
