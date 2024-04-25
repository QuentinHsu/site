import { SITE } from '@config'
import type { CollectionEntry } from 'astro:content'

export default (post: CollectionEntry<'posts'>) => {
  return (
    <div
      style={{
        background: `linear-gradient(to top left, rgb(178, 153, 253), rgb(111, 203, 253))`,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
          background: '#fefbfb',
          borderRadius: '15px',
          display: 'flex',
          justifyContent: 'center',
          margin: '12px',
          height: '88%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '20px',
            width: '90%',
            height: '90%',
          }}
        >
          <p
            lang="zh-CN"
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              maxHeight: '70%',
              overflow: 'hidden',
            }}
          >
            {post.data.title}
          </p>
          <p
            lang="zh-CN"
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              maxHeight: '30%',
              overflow: 'hidden',
            }}
          >
            {post.data.description}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: '8px',
              fontSize: 28,
            }}
          >
            <span>
              by
              {' '}
              <span
                style={{
                  color: 'transparent',
                }}
              >
                "
              </span>
              <span style={{ overflow: 'hidden', fontWeight: 'bold' }}>
                {SITE.avatar && (
                  <img
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius: '50%',
                      marginRight: '8px',
                    }}
                    src={SITE.avatar}
                  />
                )}
                {post.data.author}
              </span>
            </span>

            <div style={{ overflow: 'hidden', fontWeight: 'bold', fontSize: 16, display: 'flex', flexDirection: 'column' }}>
              <div>
                {SITE.title}
              </div>
              <div>
                {SITE.website}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
