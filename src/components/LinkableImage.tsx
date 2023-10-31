import { LinkableImageProps } from '../types/LinkableImageProps'
import Image from './Image'

const LinkableImage = ({src, alt, children, link, target}: LinkableImageProps) => {
  return (
    <a href={link} target={target}>
      <Image src={src} alt={alt}>
      {children}
      </Image>
    </a>
  )
}

export default LinkableImage