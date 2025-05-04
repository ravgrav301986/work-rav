import {
  type ReactNode,
  type JSX,
  type Dispatch,
  type FC,
  type SetStateAction,
  SVGProps,
} from 'react'

export type TClassName = { className?: string }
export type TChildren = { children: Readonly<ReactNode> }
export type TChildrenGen<T> = { children: T }
export type TTag = keyof JSX.IntrinsicElements
export type TIcon = SVGProps<SVGSVGElement>
export type TState<T> = Dispatch<SetStateAction<T>>

type FCWithGenerics<P = {}> = FC<P>
export type DynamicTagProps<
  T extends keyof JSX.IntrinsicElements = 'div',
  P = {},
> = {
  tag: T
} & JSX.IntrinsicElements[T] &
  P
export type TDynamicTagProps<T = {}> = FCWithGenerics<
  DynamicTagProps<keyof JSX.IntrinsicElements, T>
>
