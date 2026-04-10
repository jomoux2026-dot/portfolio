import { GalleryImage } from '@/lib/types'
import { ImageLightbox } from '@/components/ui/ImageLightbox'

interface ImageGalleryProps {
  images: GalleryImage[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  // Split into row of 3 and row of remaining
  const firstRow = images.slice(0, 3)
  const secondRow = images.slice(3)

  return (
    <section
      style={{
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: 'var(--page-margin)',
        paddingRight: 'var(--page-margin)',
        maxWidth: '1280px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box' as const,
        borderTop: '1px solid #1a1a1a',
      }}
    >
      <p style={{
        fontSize: '11px',
        fontWeight: 300,
        color: '#aaaaaa',
        letterSpacing: '0.12em',
        textTransform: 'uppercase' as const,
        marginBottom: '40px',
      }}>
        Final Screens
      </p>

      {/* Row 1 — 3 images */}
      {firstRow.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginBottom: secondRow.length > 0 ? '16px' : '0',
          }}
          className="gallery-grid"
        >
          {firstRow.map((image, i) => (
            <GalleryItem key={i} image={image} />
          ))}
        </div>
      )}

      {/* Row 2 — remaining images (up to 4) */}
      {secondRow.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${secondRow.length}, 1fr)`,
            gap: '16px',
          }}
          className="gallery-grid"
        >
          {secondRow.map((image, i) => (
            <GalleryItem key={i} image={image} />
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

function GalleryItem({ image }: { image: GalleryImage }) {
  return (
    <div>
      <div style={{ borderRadius: '4px', overflow: 'hidden', marginBottom: '6px' }}>
        <ImageLightbox
          src={image.src}
          alt={image.alt}
          style={{ objectFit: 'contain', height: 'auto' }}
        />
      </div>
      {image.caption && (
        <p style={{
          fontSize: '11px',
          fontWeight: 300,
          color: '#aaaaaa',
          lineHeight: 1.4,
          textAlign: 'center' as const,
        }}>
          {image.caption}
        </p>
      )}
    </div>
  )
}
