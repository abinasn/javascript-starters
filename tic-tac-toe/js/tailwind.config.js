tailwind.config = {
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                'lato': ['Lato', 'sans-serif'],
            },
            colors: {
                playerX: {
                    primary: "#c34a36"
                },
                playerO: {
                    primary: "#4d8076"
                },
                // background: "#E2DEDE",
                primary: '#845EC2',
                hover: '#F1EDED',
                border: '#d2bbf8',
                dark: {
                    background: '#1a1a1a',
                    primary: '#a27ee3',
                    hover: '#2d2d2d',
                    border: '#4a4a4a',
                    playerX: {
                        primary: "#c34a36"
                    },
                    playerO: {
                        primary: "#4d8076"
                    },
                }
            }
        }
    }
}