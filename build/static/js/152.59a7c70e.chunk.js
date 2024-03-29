'use strict'
;(self.webpackChunkphoto_share = self.webpackChunkphoto_share || []).push([
  [152],
  {
    3152: function (e, n, r) {
      r.r(n),
        r.d(n, {
          default: function () {
            return U
          }
        })
      var t = r(4165),
        i = r(5861),
        o = r(9439),
        s = r(6817),
        c = r(6015),
        l = r(4565),
        a = r(3811),
        d = r(7603),
        u = r(3671),
        h = r(1267),
        x = r(1889),
        p = r(7205),
        Z = r(9823),
        j = r(1131),
        f = r(2791),
        m = r(306),
        v = r(7033),
        g = r(7689),
        b = r(2436),
        C = r(1452),
        w = r(5444),
        y = r(5017),
        I = r(3329),
        k = f.lazy(function () {
          return Promise.all([r.e(87), r.e(510)]).then(r.bind(r, 510))
        })
      function T(e) {
        var n = e.collectionId,
          r = e.users,
          t = (0, f.useState)(''),
          i = (0, o.Z)(t, 2),
          s = i[0],
          c = i[1],
          a = function (e) {
            return c(e.target.value)
          },
          d = r.filter(function (e) {
            return e.username.includes(s)
          }),
          u = (0, b.Z)({ componentNameKey: 'Collection.CollectionSettings.RequestsInfo' })
        return 0 === d.length && 0 !== r.length
          ? (0, I.jsxs)(I.Fragment, {
              children: [
                (0, I.jsx)(y.Z, {
                  sx: { mb: 2 },
                  onChange: a,
                  fullWidth: !0,
                  placeholder: u('inputPlaceholder')
                }),
                (0, I.jsx)(l.Z, {
                  variant: 'h4',
                  textAlign: 'center',
                  children: u('wrongUsernameMessage')
                })
              ]
            })
          : 0 === r.length
          ? (0, I.jsx)(I.Fragment, {
              children: (0, I.jsx)(l.Z, {
                variant: 'h4',
                textAlign: 'center',
                children: u('listIsEmpty')
              })
            })
          : (0, I.jsxs)(I.Fragment, {
              children: [
                (0, I.jsx)(y.Z, {
                  sx: { mb: 2 },
                  onChange: a,
                  fullWidth: !0,
                  placeholder: u('inputPlaceholder')
                }),
                (0, I.jsx)(f.Suspense, {
                  fallback: (0, I.jsx)(w.Z, { fixed: !0, withMeta: !0 }),
                  children: (0, I.jsx)(k, { users: d, collectionId: n })
                })
              ]
            })
      }
      var A = f.lazy(function () {
          return r.e(253).then(r.bind(r, 253))
        }),
        W = f.lazy(function () {
          return r.e(379).then(r.bind(r, 379))
        }),
        M = f.lazy(function () {
          return Promise.all([r.e(87), r.e(799)]).then(r.bind(r, 8799))
        }),
        P = f.lazy(function () {
          return Promise.all([r.e(87), r.e(612)]).then(r.bind(r, 4612))
        })
      var S = function (e) {
        new ResizeObserver(function (n) {
          var r = (0, o.Z)(n, 1)[0]
          Math.ceil(r.contentRect.height) === Math.ceil(window.innerHeight)
            ? (e.style.borderRadius = '0px')
            : '0px' === e.style.borderRadius && (e.style.borderRadius = '8px')
        }).observe(e)
      }
      var U = function (e) {
        var n = e.data,
          r = e.closeSettingsModal,
          w = e.isSettingsOpen,
          y = n.collection,
          k = n.currentUserStatus,
          U = y._id,
          R = y.title,
          z = y.tags,
          F = y.authors,
          D = y.isPrivate,
          N = y.viewers,
          q = y.requests,
          B = (0, m.Z)(v.Z),
          L = (function (e) {
            var n = e.ifNodeFunction,
              r = (0, f.useRef)(null)
            return [
              (0, f.useCallback)(function (e) {
                r.current, e && n(e), (r.current = e)
              }, [])
            ]
          })({ ifNodeFunction: S }),
          _ = (0, o.Z)(L, 1)[0],
          K = (0, g.s0)(),
          O = C.Z.useChangeIsPrivateMutation(),
          E = (0, o.Z)(O, 1)[0],
          H = C.Z.useDeleteCurrentUserFromCollectionMutation(),
          J = (0, o.Z)(H, 1)[0],
          Q = C.Z.useDeleteCollectionMutation(),
          V = (0, o.Z)(Q, 1)[0],
          G = f.useState(!1),
          X = (0, o.Z)(G, 2),
          Y = X[0],
          $ = X[1],
          ee = function (e) {
            return function (n, r) {
              $(!!r && e)
            }
          },
          ne = function () {
            return $('panel1')
          },
          re = (k.isAuthor, k.isAdmin),
          te = (k.isViewer, k.isInQueue, z.join(' ')),
          ie = (0, b.Z)({ componentNameKey: 'Collection.CollectionSettings' }),
          oe = (function () {
            var e = (0, i.Z)(
              (0, t.Z)().mark(function e() {
                return (0, t.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!window.confirm(ie('isUserWantToLeave'))) {
                          e.next = 3
                          break
                        }
                        return (
                          (e.next = 3),
                          J({ collectionId: U }).then(function () {
                            return K('/')
                          })
                        )
                      case 3:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function () {
              return e.apply(this, arguments)
            }
          })(),
          se = (function () {
            var e = (0, i.Z)(
              (0, t.Z)().mark(function e() {
                return (0, t.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!re || !window.confirm(ie('isUserWantToDeleteCollection'))) {
                          e.next = 3
                          break
                        }
                        return (
                          (e.next = 3),
                          V({ id: U }).then(function () {
                            return K('/')
                          })
                        )
                      case 3:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function () {
              return e.apply(this, arguments)
            }
          })()
        return (0, I.jsx)(s.Z, {
          open: w,
          onClose: r,
          sx: B.backdrop,
          children: (0, I.jsxs)(c.Z, {
            sx: B.modalWrapper,
            ref: _,
            children: [
              (0, I.jsxs)(c.Z, {
                sx: B.closeIconWrapper,
                children: [
                  (0, I.jsx)(l.Z, { variant: 'body1', sx: B.title, children: ie('title') }),
                  (0, I.jsx)(a.Z, {
                    onClick: r,
                    sx: B.closeIcon,
                    color: 'error',
                    children: (0, I.jsx)(Z.Z, {})
                  })
                ]
              }),
              (0, I.jsxs)(c.Z, {
                sx: B.modalContainer,
                children: [
                  (0, I.jsx)(A, { collectionId: U, isAdmin: re, title: R, tags: te }),
                  re &&
                    (0, I.jsxs)(d.Z, {
                      sx: B.accordionWrapper,
                      expanded: 'panel1' === Y,
                      onChange: ee('panel1'),
                      children: [
                        (0, I.jsx)(u.Z, {
                          expandIcon: (0, I.jsx)(j.Z, { color: 'primary' }),
                          'aria-controls': 'panel1bh-content',
                          id: 'panel1bh-header',
                          children: (0, I.jsx)(l.Z, {
                            sx: B.accordionTitle,
                            children: ie('addUsersTitle')
                          })
                        }),
                        (0, I.jsx)(h.Z, { children: (0, I.jsx)(W, { collectionId: U }) })
                      ]
                    }),
                  (0, I.jsxs)(d.Z, {
                    sx: B.accordionWrapper,
                    expanded: 'panel2' === Y,
                    onChange: ee('panel2'),
                    children: [
                      (0, I.jsx)(u.Z, {
                        expandIcon: (0, I.jsx)(j.Z, { color: 'primary' }),
                        'aria-controls': 'panel2bh-content',
                        id: 'panel2bh-header',
                        children: (0, I.jsx)(l.Z, {
                          sx: B.accordionTitle,
                          children: ie('authorsListTitle')
                        })
                      }),
                      (0, I.jsx)(h.Z, {
                        children: (0, I.jsx)(M, {
                          isAdmin: re,
                          authors: F,
                          collectionId: U,
                          openAddUserAccordion: ne
                        })
                      })
                    ]
                  }),
                  (0, I.jsxs)(d.Z, {
                    sx: B.accordionWrapper,
                    expanded: 'panel3' === Y,
                    onChange: ee('panel3'),
                    children: [
                      (0, I.jsx)(u.Z, {
                        expandIcon: (0, I.jsx)(j.Z, { color: 'primary' }),
                        'aria-controls': 'panel3bh-content',
                        id: 'panel3bh-header',
                        children: (0, I.jsx)(l.Z, {
                          sx: B.accordionTitle,
                          children: ie('viewersListTitle')
                        })
                      }),
                      (0, I.jsx)(h.Z, {
                        children: (0, I.jsx)(P, {
                          isAdmin: re,
                          openAddUserAccordion: ne,
                          viewers: N,
                          collectionId: U
                        })
                      })
                    ]
                  }),
                  re &&
                    (0, I.jsxs)(d.Z, {
                      sx: B.accordionWrapper,
                      expanded: 'panel4' === Y,
                      onChange: ee('panel4'),
                      children: [
                        (0, I.jsx)(u.Z, {
                          expandIcon: (0, I.jsx)(j.Z, { color: 'primary' }),
                          'aria-controls': 'panel4bh-content',
                          id: 'panel4bh-header',
                          children: (0, I.jsx)(l.Z, {
                            sx: B.accordionTitle,
                            children: ie('requestsToJoinTitle')
                          })
                        }),
                        (0, I.jsx)(h.Z, { children: (0, I.jsx)(T, { collectionId: U, users: q }) })
                      ]
                    }),
                  re &&
                    (0, I.jsxs)(c.Z, {
                      sx: B.togglePrivateContainer,
                      children: [
                        (0, I.jsxs)(c.Z, {
                          children: [
                            (0, I.jsx)(l.Z, { children: ie('privateModeTitle') }),
                            (0, I.jsx)(l.Z, {
                              variant: 'caption',
                              sx: { color: 'text.secondary' },
                              children: ie('privateModeDescription')
                            })
                          ]
                        }),
                        (0, I.jsx)(x.Z, {
                          checked: D,
                          onClick: function () {
                            return E({ collectionId: U })
                          }
                        })
                      ]
                    }),
                  (0, I.jsxs)(c.Z, {
                    sx: B.dangerButtonsWrapper,
                    children: [
                      re &&
                        (0, I.jsx)(p.Z, {
                          onClick: se,
                          color: 'error',
                          variant: 'contained',
                          sx: { mr: 2 },
                          children: ie('deleteCollectionButton')
                        }),
                      (0, I.jsx)(p.Z, {
                        onClick: oe,
                        color: 'error',
                        variant: 'contained',
                        children: ie('leaveCollectionButton')
                      })
                    ]
                  })
                ]
              })
            ]
          })
        })
      }
    }
  }
])
//# sourceMappingURL=152.59a7c70e.chunk.js.map
