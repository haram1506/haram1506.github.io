import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Illustration from './Illustration';
import Modal from './Modal';
import './Gallery.css';

// Import your images
import art1 from '../../assets/illustrations/illust1.png';
import art2 from '../../assets/illustrations/illust2.png';
import art3 from '../../assets/illustrations/illust3.png';
import art4 from '../../assets/illustrations/illust4.png';
import art5 from '../../assets/illustrations/illust5.gif';
import art6 from '../../assets/illustrations/illust6.gif';
import art7 from '../../assets/illustrations/illust7.gif';
import art8 from '../../assets/illustrations/illust8.gif';
import art9 from '../../assets/illustrations/illust9.png';
import art10 from '../../assets/illustrations/illust10.png';
import art11 from '../../assets/illustrations/illust11.png';
import art12 from '../../assets/illustrations/illust12.png';
import art13 from '../../assets/illustrations/illust13.gif';
import art14 from '../../assets/illustrations/illust14.gif';
// ... import more images

// Define your gallery data
const illustrationData = [
  { id: 1, src: art1, title: 'Neuro the Queen of Cats', description: 'A parody art of Napoleon I on His Imperial Throne.' },
  { id: 2, src: art2, title: 'Tropical Summer Camping', description: 'My submission to the Neuro-Sama Headquarters Summer Art Contest.' },
  { id: 3, src: art3, title: 'Saba pickl', description: 'Pixel art of a fish and a crab.' },
  { id: 4, src: art4, title: 'Evil ~ 💔', description: 'My first attempt at emulating an oil-painting style in digital art.' },
  { id: 5, src: art10, title: 'Swarm Ad Astra', description: 'One of my first digital art pieces.' },
  { id: 6, src: art11, title: 'Neuro vs. the Sun', description: 'An experiment I did with perspective.' },
  { id: 10, src: art12, title: 'To the Mars', description: 'Cover image for <To the Mars>' },
  { id: 8, src: art14, title: 'Spacecraft 1', description: 'Placeholder pixel art for <Pilot>' },
  { id: 9, src: art7, title: 'Astro', description: 'Playable character in <To the Mars>' },
  { id: 7, src: art9, title: 'Black Hole', description: 'Placeholder pixel art for <Pilot>' },
  { id: 11, src: art6, title: 'Flying Neuro', description: 'Character animation for <LIFE DREAM MEMORY>' },
  { id: 12, src: art13, title: 'Neuro Run', description: 'Part of my <Neuro Platformer Sprites> Asset Pack.' },
  // ... add more illustrations
];

const Gallery = () => {
  const [selectedIllustration, setSelectedIllustration] = useState(null);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    750: 1
  };

  return (
    <>
      <section className="gallery-section">
        <h1 className="gallery-title">Art Gallery</h1>
        <div className="gallery-container">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {illustrationData.map((item) => (
              <Illustration
                key={item.id}
                src={item.src}
                alt={item.title}
                onClick={() => setSelectedIllustration(item)}
              />
            ))}
          </Masonry>
        </div>
      </section>
      
      {/* The Modal is rendered here but only visible when an illustration is selected */}
      <Modal illustration={selectedIllustration} onClose={() => setSelectedIllustration(null)} />
    </>
  );
};

export default Gallery;