import { LinkableImageProps } from '../types/LinkableImageProps'
import Image from './Image'

const LinkableImage = ({src, alt, children, link}: LinkableImageProps) => {
  return (
    <a href={link}>
      <Image src={src} alt={alt}>
      {children}
      </Image>
    </a>
  )
}

export default LinkableImage