/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/login`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/friends` | `/friends`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/setting` | `/setting`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/wdu` | `/wdu`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/login`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/friends` | `/friends`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/setting` | `/setting`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/wdu` | `/wdu`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/login${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/friends${`?${string}` | `#${string}` | ''}` | `/friends${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/setting${`?${string}` | `#${string}` | ''}` | `/setting${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/wdu${`?${string}` | `#${string}` | ''}` | `/wdu${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/login`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/friends` | `/friends`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/setting` | `/setting`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/wdu` | `/wdu`; params?: Router.UnknownInputParams; };
    }
  }
}
