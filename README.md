# Angular Universal starter kit
[![Build Status](https://semaphoreci.com/api/v1/angularru/angular-universal-starter/branches/ionic/badge.svg)](https://semaphoreci.com/angularru/angular-universal-starter)

Репозиторий с Angular CLI и Angular Universal

- публичный чат https://t.me/angular_universal_ru

- http://ionic-ssr.gorniv.com/ - серверный рендеринг ionic

- http://ionic-csr.gorniv.com/ - клиенский рендеринг ionic

Не работает.
Ошибка на сервере:
```
ERROR ReferenceError: Node is not defined
    at Menu.ngOnInit (/Users/Gorniv/GitHub/angular-universal-starter/server.js:113595:44)
    at checkAndUpdateDirectiveInline (/Users/Gorniv/GitHub/angular-universal-starter/server.js:12365:19)
    at checkAndUpdateNodeInline (/Users/Gorniv/GitHub/angular-universal-starter/server.js:13868:20)
    at checkAndUpdateNode (/Users/Gorniv/GitHub/angular-universal-starter/server.js:13811:16)
    at prodCheckAndUpdateNode (/Users/Gorniv/GitHub/angular-universal-starter/server.js:14514:5)
    at Object.updateDirectives (/Users/Gorniv/GitHub/angular-universal-starter/server.js:156131:3367)
    at Object.updateDirectives (/Users/Gorniv/GitHub/angular-universal-starter/server.js:14255:29)
    at checkAndUpdateView (/Users/Gorniv/GitHub/angular-universal-starter/server.js:13778:14)
    at callViewAction (/Users/Gorniv/GitHub/angular-universal-starter/server.js:14128:21)
    at execComponentViewsAction (/Users/Gorniv/GitHub/angular-universal-starter/server.js:14060:13)
ERROR { Error: StaticInjectorError[Config]:
  StaticInjectorError[Config]:
    NullInjectorError: No provider for Config!
    at _NullInjector.get (/Users/Gorniv/GitHub/angular-universal-starter/server.js:1193:19)
    at resolveToken (/Users/Gorniv/GitHub/angular-universal-starter/server.js:1481:24)
    at tryResolveToken (/Users/Gorniv/GitHub/angular-universal-starter/server.js:1423:16)
    at StaticInjector.get (/Users/Gorniv/GitHub/angular-universal-starter/server.js:1294:20)
    at resolveToken (/Users/Gorniv/GitHub/angular-universal-starter/server.js:1481:24)
    at tryResolveToken (/Users/Gorniv/GitHub/angular-universal-starter/server.js:1423:16)
    at StaticInjector.get (/Users/Gorniv/GitHub/angular-universal-starter/server.js:1294:20)
    at resolveNgModuleDep (/Users/Gorniv/GitHub/angular-universal-starter/server.js:10855:25)
    at NgModuleRef_.get (/Users/Gorniv/GitHub/angular-universal-starter/server.js:12076:16)
    at resolveDep (/Users/Gorniv/GitHub/angular-universal-starter/server.js:12572:45) ngTempTokenPath: null, ngTokenPath: [ [Function: Config] ] }
```
Ошибка в браузере:
```
core.js:1350 ERROR Error: Uncaught (in promise): TypeError: menuTypes[type] is not a constructor
TypeError: menuTypes[type] is not a constructor
    at Function.webpackJsonp.../../../../ionic-angular/components/app/menu-controller.js.MenuController.create (menu-controller.js:314)
    at Menu.webpackJsonp.../../../../ionic-angular/components/menu/menu.js.Menu._getType (menu.js:330)
    at menu.js:349
    at new ZoneAwarePromise (zone.js:890)
    at Menu.webpackJsonp.../../../../ionic-angular/components/menu/menu.js.Menu.setOpen (menu.js:347)
    at Menu.webpackJsonp.../../../../ionic-angular/components/menu/menu.js.Menu.toggle (menu.js:484)
    at MenuToggle.webpackJsonp.../../../../ionic-angular/components/menu/menu-toggle.js.MenuToggle.toggle (menu-toggle.js:104)
    at Object.handleEvent (home.ngfactory.ts:38)
    at handleEvent (core.js:13255)
    at callWithDebugContext (core.js:14740)
    at Function.webpackJsonp.../../../../ionic-angular/components/app/menu-controller.js.MenuController.create (menu-controller.js:314)
    at Menu.webpackJsonp.../../../../ionic-angular/components/menu/menu.js.Menu._getType (menu.js:330)
    at menu.js:349
    at new ZoneAwarePromise (zone.js:890)
    at Menu.webpackJsonp.../../../../ionic-angular/components/menu/menu.js.Menu.setOpen (menu.js:347)
    at Menu.webpackJsonp.../../../../ionic-angular/components/menu/menu.js.Menu.toggle (menu.js:484)
    at MenuToggle.webpackJsonp.../../../../ionic-angular/components/menu/menu-toggle.js.MenuToggle.toggle (menu-toggle.js:104)
    at Object.handleEvent (home.ngfactory.ts:38)
    at handleEvent (core.js:13255)
    at callWithDebugContext (core.js:14740)
    at resolvePromise (zone.js:824)
    at new ZoneAwarePromise (zone.js:893)
    at Menu.webpackJsonp.../../../../ionic-angular/components/menu/menu.js.Menu.setOpen (menu.js:347)
    at Menu.webpackJsonp.../../../../ionic-angular/components/menu/menu.js.Menu.toggle (menu.js:484)
    at MenuToggle.webpackJsonp.../../../../ionic-angular/components/menu/menu-toggle.js.MenuToggle.toggle (menu-toggle.js:104)
    at Object.handleEvent (home.ngfactory.ts:38)
    at handleEvent (core.js:13255)
    at callWithDebugContext (core.js:14740)
    at Object.debugHandleEvent [as handleEvent] (core.js:14327)
    at dispatchEvent (core.js:9704)
    ```