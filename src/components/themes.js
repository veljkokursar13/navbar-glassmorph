export const themes = {
    original: {
        // Body and main background
        bodyBackground: '#cecece',
        pageContentBackground: 'rgba(20, 20, 20, 0.25)',
        pageContentColor: '#000',
        
        // Navbar - Original glassmorphism
        navbarBackground: 'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(200,220,255,0.13) 100%)',
        navbarShadow: '0 12px 48px rgba(0, 0, 0, 0.8), 0 0 0 2px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.2)',
        
        // Text colors
        navHeaderColor: 'rgba(30, 30, 30, 0.5)',
        navLinksColor: 'rgba(40, 40, 60, 0.7)',
        navToggleColor: '#ffffff',
        socialLinksBackground: '#ffffff',
        socialLinksColor: '#2c3e50',
        
        // Links hover
        linksHoverBackground: 'rgba(255, 255, 255, 0.5)',
        linksHoverColor: '#000',
        
        // Social links hover
        socialLinksHoverBackground: '#2c3e50',
        socialLinksHoverColor: '#ffffff',
        fontColor: '#000000'
    },
    
    light: {
        // Body and main background - LIGHT
        bodyBackground: '#f8f9fa',
        pageContentBackground: 'rgba(255, 255, 255, 0.8)',
        pageContentColor: '#2c3e50',
        
        // Navbar - DARK (for light theme)
        navbarBackground: 'linear-gradient(135deg, rgba(40,40,40,0.8) 0%, rgba(20,20,30,0.7) 100%)',
        navbarShadow: '0 12px 20px rgba(0, 0, 0, 0.9), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.1), inset 0 -2px 0 rgba(0, 0, 0, 0.5)',
        
        // Text colors - WHITE (for dark navbar)
        navHeaderColor: '#ffffff',
        navLinksColor: '#ffffff',
        navToggleColor: '#ffffff',
        socialLinksBackground: '#ffffff',
        socialLinksColor: '#2c3e50',
        
        // Links hover
        linksHoverBackground: 'rgba(255, 255, 255, 0.2)',
        linksHoverColor: '#ffffff',
        
        // Social links hover
        socialLinksHoverBackground: '#2c3e50',
        socialLinksHoverColor: '#ffffff',
        fontColor: '#ffffff'
    },
    
    dark: {
        // Body and main background - DARK
        bodyBackground: '#1a1a1a',
        pageContentBackground: 'rgba(30, 30, 30, 0.8)',
        pageContentColor: '#ecf0f1',
        
        // Navbar - WHITE (for contrast against dark background) - WHITE FONTS
        navbarBackground: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(240,248,255,0.25) 100%)',
        navbarShadow: '0 8px 16px rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        
        // Text colors - WHITE (for white navbar)
        navHeaderColor: '#ffffff',
        navLinksColor: '#ffffff',
        navToggleColor: '#ffffff',
        socialLinksBackground: '#ffffff',
        socialLinksColor: '#2c3e50',
        
        // Links hover
        linksHoverBackground: 'rgba(255, 255, 255, 0.2)',
        linksHoverColor: '#ffffff',
        
        // Social links hover
        socialLinksHoverBackground: '#2c3e50',
        socialLinksHoverColor: '#ffffff'
    }
};