import venti from '../../assets/portfolioOLD/DigitalPaintings/venti.jpg';
import closetou from '../../assets/portfolioOLD/DigitalPaintings/close-to-u.jpg';
import alex from '../../assets/portfolioNEW/alex_wolff_digital.jpg';
import assumption from '../../assets/portfolioNEW/assumption.jpg';
import blueclouds from '../../assets/portfolioNEW/blueclouds.jpg';
import greyportrait from '../../assets/portfolioNEW/greyportrait.jpg';
import handsGraphite from '../../assets/portfolioNEW/hands_graphite.jpg';
import rekha from '../../assets/portfolioNEW/rekha.jpg';
import indianYizheng from '../../assets/portfolioNEW/indian_yizheng.png';

interface MyObject {
    src: any;
    alt: string;
  }

const twentytwentythree: MyObject[] = [
    {
        src: indianYizheng,
        alt: 'Trying to add YizhengKe style to my digital art'
    },
    {
        src: rekha,
        alt: 'Rekha study - Nov 2023'
    },
    {
        src: handsGraphite,
        alt: 'Graphite hands study - October 2023'
    },
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