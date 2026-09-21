import './project-preview.css'

interface Preview {
  src?: string
  alt?: string
  comingSoon?: boolean
  phone?: boolean
}

// Add product imagery to coming-soon entries when available.
const previews: Record<string, Preview> = {
  'altrata-boolean-search': {
    src: '/project-previews/altrata.jpg',
    alt: 'Altrata Advanced Search product prototype',
  },
  'focused-learning': {
    src: '/project-previews/learning.jpg',
    alt: 'Focused Learning lesson workspace prototype',
  },
  omaia: {
    src: '/project-previews/omaia.jpg',
    alt: 'Omaia wellbeing app in a phone mockup',
    phone: true,
  },
  'document-management': {
    src: '/case-studies/document-management/1.png',
    alt: 'Library catalogue management interface',
  },
  'library-platform': {
    comingSoon: true,
  },
  'company-website': {
    comingSoon: true,
  },
  'food-menu-app': {
    comingSoon: true,
  },
}

export default function ProjectPreview({ projectId }: { projectId: string }) {
  const preview = previews[projectId] ?? previews['company-website']

  if (preview.comingSoon) {
    return (
      <div className={`project-preview project-preview--${projectId} project-preview--coming-soon`}>
        <span className="project-preview__coming-soon">Coming soon</span>
      </div>
    )
  }

  return (
    <div
      className={`project-preview project-preview--${projectId}${preview.phone ? ' project-preview--phone' : ''}`}
    >
      <div className="project-preview__mockup">
        <div className="project-preview__display">
          {!preview.phone && (
            <div className="project-preview__chrome" aria-hidden="true"><i /><i /><i /><span /></div>
          )}
          <div className="project-preview__screen">
            <img src={preview.src} alt={preview.alt} loading="lazy" decoding="async" />
          </div>
        </div>
        {!preview.phone && <div className="project-preview__laptop-base" aria-hidden="true"><span /></div>}
      </div>
    </div>
  )
}
