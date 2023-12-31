// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType & DisallowNamespaces
export type BaseLocale = 'en'

export type Locales =
	| 'de'
	| 'en'

export type Translation = RootTranslation & DisallowNamespaces

export type Translations = RootTranslation &
{
	demo: NamespaceDemoTranslation
}

type RootTranslation = {
	/**
	 * H​i​ ​{​n​a​m​e​}​!
	 * @param {string} name
	 */
	HI: RequiredParams<'name'>
}

export type NamespaceDemoTranslation = {
	/**
	 * H​i​ ​{​n​a​m​e​}​!
	 * @param {string} name
	 */
	HI: RequiredParams<'name'>
}

export type Namespaces =
	| 'demo'

type DisallowNamespaces = {
	/**
	 * reserved for 'demo'-namespace\
	 * you need to use the `./demo/index.ts` file instead
	 */
	demo?: "[typesafe-i18n] reserved for 'demo'-namespace. You need to use the `./demo/index.ts` file instead."
}

export type TranslationFunctions = {
	/**
	 * Hi {name}!
	 */
	HI: (arg: { name: string }) => LocalizedString
	demo: {
		/**
		 * Hi {name}!
		 */
		HI: (arg: { name: string }) => LocalizedString
	}
}

export type Formatters = {}
