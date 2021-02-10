import { BlogFooterData } from 'shared/navigation/ui/footer/BlogFooterData';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

export const footerData: BlogFooterData = {
  firstColumnLinks: [
    {
      value: 'Odstresowani',
      href: '/#'
    },
    {
      value: 'Aktywuj Program',
      href: '/#'
    },
    {
      value: 'Kontakt z Autorami Bloga',
      href: '/#'
    }
  ],
  secondColumnLinks: [
    {
      value: 'Logowanie/Rejestracja',
      href: '/#'
    },
    {
      value: 'Dashboard',
      href: '/#'
    },
    {
      value: 'Regulamin',
      href: '/#'
    }
  ],
  thirdColumnLinks: [
    {
      value: 'Logowanie/Rejestracja',
      href: '/#'
    },
    {
      value: 'Dashboard',
      href: '/#'
    },
    {
      value: 'Regulamin',
      href: '/#'
    }
  ],
  socialMediaItems: [
    {
      icon: faFacebookSquare,
      href: '/#'
    },
    {
      icon: faTwitterSquare,
      href: '/#'
    },
    {
      icon: faInstagramSquare,
      href: '/#'
    },
    {
      icon: faLinkedin,
      href: '/#'
    }
  ],
  bottomRightLinks: [
    {
      value: 'Polityka prywatności',
      href: '/#'
    },
    {
      value: 'Polityka serwisu',
      href: '/#'
    }
  ]
};
