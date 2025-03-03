import React, { PropsWithChildren, SVGAttributes } from 'react'
import { icons, IconType } from 'assets/icons'

type PropType = PropsWithChildren<
  SVGAttributes<SVGElement> & {
    svg: IconType
    size?: string
  }
>

export const Icon = (props: PropType) => {
  const { svg, size = '100%', ...restProps } = props
  const Svg = icons[svg]

  return (
    <Svg
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      {...restProps}
    />
  )
}
