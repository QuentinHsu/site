import './index.scss'

interface LinkProps {
  title: string
  url: string
}

function SuperLink(props: LinkProps) {
  const { title, url } = props
  // Google Favicon 服务的 URL
  const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain_url=${url}`
  return (
    <span className="super-link">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          className="url-icon inline-flex m-0"
          src={faviconUrl}
          alt=""
          style={{ height: '1em', borderRadius: '25%' }}
        />
        <span className="title">
          {title}
        </span>
      </a>
    </span>
  )
}

export default SuperLink
