import venti from '../../assets/portfolioOLD/DigitalPaintings/venti.jpg';
import closetou from '../../assets/portfolioOLD/DigitalPaintings/close-to-u.jpg';
import alex from '../../assets/portfolioNEW/alex_wolff_digital.jpg';
import assumption from '../../assets/portfolioNEW/assumption.jpg';
import blueclouds from '../../assets/portfolioNEW/blueclouds.jpg';
import greyportrait from '../../assets/portfolioNEW/greyportrait.jpg';

interface MyObject {
    src: any;
    alt: string;
  }

const twentytwentythree: MyObject[] = [
    {
        src: alex,
        alt: 'Study of a still from Hereditary of Alex Wolff - digital - September 2023'
    },
    {
        src: assumption,
        alt: ''
    },
    {
        src: blueclouds,
        alt: ''
    },
    {
        src: greyportrait,
        alt: ''
    },
    {
        src: closetou,
        alt: "I'd give everything if it ment I could be close to u"
    },
    {
        src: venti,
        alt: 'Brittany Venti - digital - 2022'
    },
]

export default twentytwentythree;