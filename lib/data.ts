import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'firdoseara117@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Firdose Ara, I am reaching out to you because...',

    portfolio: 'https://firdoseara.github.io/my-portfolio/',
    phone: '8971429106',
    location: 'Tumkur',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/firdoseara' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/firdose-ara-759763267/' },
    { name: 'Portfolio', url: GENERAL_INFO.portfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
    ],
    backend: [
        {
            name: 'Python',
            icon: '/logo/node.png', // Using node icon as placeholder for Python
        },
        {
            name: 'Flask',
            icon: '/logo/express.png', // Using express icon as placeholder for Flask
        },
        {
            name: 'Django',
            icon: '/logo/nest.svg', // Using nest icon as placeholder for Django
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'SQLite',
            icon: '/logo/prisma.png', // Using prisma icon as placeholder for SQLite
        },
    ],
    aiml: [
        {
            name: 'TensorFlow',
            icon: '/logo/redux.png', // Using redux icon as placeholder
        },
        {
            name: 'PyTorch',
            icon: '/logo/gsap.png', // Using gsap icon as placeholder
        },
        {
            name: 'Scikit-learn',
            icon: '/logo/framer-motion.png', // Using framer-motion icon as placeholder
        },
        {
            name: 'OpenCV',
            icon: '/logo/sass.png', // Using sass icon as placeholder
        },
        {
            name: 'Pandas',
            icon: '/logo/bootstrap.svg', // Using bootstrap icon as placeholder
        },
        {
            name: 'NumPy',
            icon: '/logo/postgreSQL.png', // Using postgreSQL icon as placeholder
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'GitHub',
            icon: '/logo/github.png',
        },
        {
            name: 'Jupyter Notebook',
            icon: '/logo/docker.svg', // Using docker icon as placeholder
        },
        {
            name: 'Google Colab',
            icon: '/logo/aws.png', // Using aws icon as placeholder
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Skin Cancer Detection System',
        slug: 'skin-cancer-detection',
        techStack: [
            'Python',
            'TensorFlow',
            'PyTorch',
            'CNN',
            'OpenCV',
            'NumPy',
            'Pandas',
            'Matplotlib',
            'Scikit-learn'
        ],
        thumbnail: '/projects/thumbnail/skin-cancer.png',
        longThumbnail: '/projects/long/skin-cancer.png',
        images: [
            '/projects/images/skin-cancer-1.png',
            '/projects/images/skin-cancer-2.png',
        ],
        sourceCode: 'https://github.com/firdoseara/skin-cancer-detection-CNN',
        year: 2024,
        description: `Built a deep learning model using Convolutional Neural Networks (CNNs) to classify different types of skin cancer from medical images. Implemented data augmentation techniques and transfer learning to improve classification accuracy. The system can identify multiple cancer categories from dermoscopic images, aiding in early detection and medical research.<br/><br/>
        
        Key Features:<br/>
        <ul>
            <li>🔬 Multi-class cancer classification from dermoscopic images</li>
            <li>� High accuracy through transfer learning and data augmentation</li>
            <li>� Comprehensive model evaluation and performance metrics</li>
            <li>🏥 Medical research application for early detection</li>
        </ul>`,
        role: `AI/ML Developer <br/>
        <ul>
            <li>🧠 Designed the CNN architecture for skin cancer classification</li>
            <li>📋 Handled dataset preprocessing and data augmentation</li>
            <li>🎯 Implemented and trained deep learning models</li>
            <li>⚡ Optimized hyperparameters for better performance</li>
            <li>📈 Evaluated model accuracy and performance metrics</li>
        </ul>`,
    },
    {
        title: 'Smart CCTV Surveillance System',
        slug: 'smart-cctv-system',
        techStack: [
            'Python',
            'OpenCV',
            'NumPy',
            'Pandas',
            'Computer Vision',
        ],
        thumbnail: '/projects/thumbnail/smart-cctv.png',
        longThumbnail: '/projects/long/smart-cctv.png',
        images: [
            '/projects/images/smart-cctv-1.png',
            '/projects/images/smart-cctv-2.png',
        ],
        sourceCode: 'https://github.com/firdoseara/smart-cctv',
        year: 2024,
        description: `Developed an AI-based surveillance system capable of real-time object and face detection using OpenCV. The system integrates motion detection and alert mechanisms, making it suitable for security monitoring in homes and commercial premises. It processes live video streams and triggers alerts when suspicious movement or unknown faces are detected.<br/><br/>
        
        Key Features:<br/>
        <ul>
            <li>🎥 Real-time video stream processing</li>
            <li>👤 Face detection and recognition</li>
            <li>🔍 Object detection and tracking</li>
            <li>🚨 Motion detection with alert system</li>
            <li>🏠 Suitable for home and commercial security</li>
        </ul>`,
        role: `Computer Vision Developer <br/>
        <ul>
            <li>👁️ Implemented object and face detection pipelines</li>
            <li>🔄 Integrated motion detection algorithms</li>
            <li>🚨 Built alert notification system</li>
            <li>📹 Optimized real-time video processing</li>
        </ul>`,
    },
    {
        title: 'Virtual Clinic Platform',
        slug: 'virtual-clinic',
        techStack: [
            'Python',
            'Flask',
            'Django',
            'WebRTC',
            'HTML',
            'CSS',
            'JavaScript',
            'AI',
        ],
        thumbnail: '/projects/thumbnail/virtual-clinic.jpg',
        longThumbnail: '/projects/long/virtual-clinic.jpg',
        images: [
            '/projects/images/virtual-clinic-1.jpg',
            '/projects/images/virtual-clinic-2.jpg',
        ],
        sourceCode: 'https://github.com/firdoseara/virtual-clinic',
        liveUrl: 'https://firdoseara.github.io/my-portfolio/',
        year: 2024,
        description: `Designed and implemented an AI-enabled telemedicine platform that supports real-time video consultations using WebRTC. Includes a doctor-patient matching system based on availability and specialization. The platform enables remote healthcare delivery with secure video sessions and appointment scheduling features.<br/><br/>
        
        Key Features:<br/>
        <ul>
            <li>🎥 Real-time video consultations via WebRTC</li>
            <li>🤖 AI-powered doctor-patient matching</li>
            <li>📅 Appointment scheduling system</li>
            <li>🔒 Secure video sessions for healthcare</li>
            <li>👨‍⚕️ Specialization-based doctor selection</li>
        </ul>`,
        role: `Full-Stack Developer <br/>
        <ul>
            <li>🔧 Developed the backend system with Flask/Django</li>
            <li>🤖 Implemented AI matching logic for doctor-patient pairing</li>
            <li>🎥 Integrated WebRTC for video consultations</li>
            <li>📋 Built appointment handling features</li>
            <li>🎨 Created responsive frontend interface</li>
        </ul>`,
    },
    {
        title: 'GlobeTales Flask',
        slug: 'globetales-flask',
        techStack: [
            'Python',
            'Flask',
            'HTML',
            'CSS',
            'JavaScript',
            'AI Text Generation',
            'Audio Processing',
        ],
        thumbnail: '/projects/thumbnail/Globtales.png',
        longThumbnail: '/projects/long/Globtales.png',
        images: [
            '/projects/images/Globtales-1.png',
            '/projects/images/Globetales-2.png',
        ],
        sourceCode: 'https://github.com/firdoseara/GlobTales-flask',
        year: 2025,
        description: `A culturally immersive storytelling platform where users select a country and receive narrated travel stories enriched with cultural facts, local phrases, and translations. Built with Flask for a smooth and interactive user experience, the platform integrates multimedia content and interactive features for language learning and cultural exploration.<br/><br/>
        
        Key Features:<br/>
        <ul>
            <li>🌍 Country-based story generation</li>
            <li>🗣️ Audio narration with local accents</li>
            <li>🌐 Multi-language support and translations</li>
            <li>📚 Cultural facts and local phrases integration</li>
            <li>🎓 Interactive language learning features</li>
        </ul>`,
        role: `Full-Stack Developer <br/>
        <ul>
            <li>🌐 Designed and developed Flask application architecture</li>
            <li>🤖 Implemented AI-based story generation logic</li>
            <li>🔊 Integrated translations and audio narration</li>
            <li>🎨 Styled frontend for rich user experience</li>
            <li>🔄 Built interactive cultural learning features</li>
        </ul>`,
    },
];


