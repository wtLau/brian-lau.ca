import NextLink, {
  LinkProps as NextLinkProps,
} from 'next/link'
import {
  Link as MaterialLink,
  LinkProps,
} from '@material-ui/core'

type TLink = NextLinkProps & LinkProps

const Link: React.FC<TLink> = ({
  href,
  passHref,
  children,
  ...props
}) => {
  return (
    <NextLink href={href} passHref>
      <MaterialLink
        color='textPrimary'
        underline='none'
        {...props}
      >
        {children}
      </MaterialLink>
    </NextLink>
  )
}

export default Link
