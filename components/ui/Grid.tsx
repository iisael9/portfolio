import React from 'react'
import { BentoGrid, BentoGridItem } from './bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map
        (({id, title, description, className, img, imgClassName, titleClassName, spareImg}) =>(
            <BentoGridItem
             id={id}
             key={id}
             title={title}
             description={description}
             //remove icon prop
             //remove original classname condition
             className={className}
             img={img}
             imgClassName={imgClassName}
             titleClassName={titleClassName}
             spareImg={spareImg}
            />
        ))
        }
      </BentoGrid>
    </section>
  )
}

export default Grid
