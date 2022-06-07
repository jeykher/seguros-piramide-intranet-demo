import { AiOutlineArrowUp } from 'react-icons/ai'; 
import { BsCalendar3 } from 'react-icons/bs';
import { BsNewspaper } from 'react-icons/bs';
import { BsTelephoneFill } from 'react-icons/bs'
import { MdGroups } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';
import { FaBriefcaseMedical } from 'react-icons/fa';
import { BsCurrencyExchange } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';

const staticInitState = {
    slideshowImages: [
        {
            id: 1,
            imagePath: '/assets/image/iposImg1.png',
            imageAlt: 'Imagen 1'
        },
        {
            id: 2,
            imagePath: '/assets/image/iposImg2.png',
            imageAlt: 'Imagen 2'
        },
        {
            id: 3,
            imagePath: '/assets/image/iposImg3.png',
            imageAlt: 'Imagen 3'
        }
    ],
    humanManagementSection: {
        cards: [
            {
                id: 1,
                imagePath: '/assets/image/imagen.jpg',
                imageAlt: '',
                title: 'Calidad de Vida',
                description: 'Está unida estrechamente con los derechos y emociones del ser humano, con el carácter y las virtudes de la persona en su propio medio y con su propia cultura....'
            },
            {
                id: 2,
                imagePath: '/assets/image/imagen.jpg',
                imageAlt: '',
                title: 'Clima Organizacional',
                description: 'Clima organizacional es el nombre dado por diversos autores; se basa en el ambiente generado por las emociones de los miembros de un grupo u organización, el cual está relacionado con la motivación de...'
            },
            {
                id: 3,
                imagePath: '/assets/image/imagen.jpg',
                imageAlt: '',
                title: 'Evaluación de Desempeño',
                description: 'Toda organización de éxito que esté modernizada y a la vanguardia de las últimas corrientes la aplica. Por eso, lo mejor es que tu empresa no se quede atrás y aproveche los continuos adelantos y mejor...'          
            },
            {
                id: 4,
                imagePath: '/assets/image/imagen.jpg',
                imageAlt: '',
                title: 'Perfil Profesional',
                description: 'Entendemos por perfil profesional el conjunto de competencias técnicas (conocimientos), metodologicas (habilidades), de relación (participativas) y personales (cualidades y actitudes) que permiten al ...'
            },
            {
                id: 5,
                imagePath: '/assets/image/imagen.jpg',
                imageAlt: '',
                title: 'Queremos saber cómo te sientes! Medición de #ClimaLaboral 2021',   
                description: 'Hemos diseñado una encuesta para conocer tus experiencias y expectativas dentro de nuestra organización. Visita el enlace anexo......'             
            }
        ]
    },
    speedDialNavigatorElements: [
        {
            id: 1,
            componentIcon: <AiOutlineArrowUp color="white" size="20" />,
            tooltipTitle: "Inicio"
        },
        {
            id: 2,
            componentIcon: <BsCalendar3 color="white" size="20" />,
            tooltipTitle: "Eventos / Actividades / Jornadas"
        },
        {
            id: 3,
            componentIcon: <BsNewspaper color="white" size="20" />,
            tooltipTitle: "Noticias"
        },
        {
            id: 4,
            componentIcon: <BsTelephoneFill color="white" size="20" />,
            tooltipTitle: "Directorio Telefónico"
        },
        {
            id: 5,
            componentIcon:  <MdGroups color="white" size="25" />,
            tooltipTitle: "Nuestros Aliados"
        },
        {
            id: 6,
            componentIcon:  <FaBirthdayCake color="white" size="22" />,
            tooltipTitle: "Cumpleaños / Promociones"
        },
        {
            id: 7,
            componentIcon:  <FaBriefcaseMedical color="white" size="20" />,
            tooltipTitle: "Salud y Seguridad Laboral"
        },
        {
            id: 8,
            componentIcon:  <BsCurrencyExchange color="white" size="20" />,
            tooltipTitle: "Prevención Leg. Capitales"
        },
        {
            id: 9,
            componentIcon:
                <a href="#interest" className="ipos-speeddial-navigator-item-link">
                    <FaLink color="white" size="20" />
                </a>   
                ,
            tooltipTitle: "Enlaces de Interes"
        }
    ]
};

export default staticInitState;