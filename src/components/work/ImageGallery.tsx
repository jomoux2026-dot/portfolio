import { GalleryImage } from '@/lib/types'
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder'

interface ImageGalleryProps {
  images: GalleryImage[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <section
      style={{
        padding: '80px 40px',
        maxWidth: '1000px',
        margin: '0 auto',
        width: '100%',
        borderTop: '1px solid #1a1a1a',
      }}
    >
      <p
        style={{
          fontSize: '11px',
          fontWeight: 300,
          color: '#aaaaaa',
          letterSpacing: '0.12em',
          textTransform: 'uppercase' as const,
          marginBottom: '40px',
        }}
      >
        Final Screens
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
        }}
      >
        {images.map((image, i) => (
          <div key={i}>
            <ImagePlaceholder
              label={image.alt}
              height={360}
              style={{ borderRadius: '4px', marginBottom: '12px' }}
            />
            {image.caption && (
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: 300,
                  color: '#aaaaaa',
                  lineHeight: 1.5,
                }}
              >
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
