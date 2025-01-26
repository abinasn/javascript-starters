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
                endGame:{
                    bg: "#d2d0d080",
                    text: "#845EC2"
                },
                primary: '#845EC2',
                hover: '#F1EDED',
                border: '#d2bbf8',
                dark: {
                    background: '#1a1a1a',
                    primary: '#a27ee3',
                    hover: '#2d2d2d',
                    border: '#4a4a4a',
                    endGame:{
                        bg: "#00000080",
                        text: "#a27ee3"
                    },
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