import React from 'react';

const Social = () => {
    const redes = [
        { name: 'GitHub', image: 'images/github.png', link: 'https://github.com/ezequieliribarren' },
        { name: 'WhatsApp', image: 'images/whats.png', link: 'https://wa.me/+541136331300' },
        { name: 'LinkedIn', image: 'images/linkedin.png', link: 'https://www.linkedin.com/in/ezequiel-iribarren-/' },
        { name: 'Mail', image: 'images/mail.png', link: 'mailto:info@ezequieliribarren.com' }
    ];

    return (
        <div className='social'>
        {redes.map((red, index) => (
            <a key={index} href={red.link} target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={red.image} alt={red.name} className="social-image" />
            </a>
        ))}
    </div>
    );
};

export default Social;
