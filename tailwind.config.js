/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#0B3B6A',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: '#FF6B2C',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				silogistik: {
					blue: {
						50: '#E6EEF4',
						100: '#CCDDE9',
						200: '#99BBD3',
						300: '#6699BD',
						400: '#3377A7',
						500: '#0B3B6A',
						600: '#092F55',
						700: '#072340',
						800: '#04172B',
						900: '#020B16',
						DEFAULT: '#0B3B6A'
					},
					orange: {
						50: '#FFF0EC',
						100: '#FFE1D9',
						200: '#FFC3B3',
						300: '#FFA58D',
						400: '#FF8767',
						500: '#FF6B2C',
						600: '#CC5623',
						700: '#99411A',
						800: '#662B12',
						900: '#331609',
						DEFAULT: '#FF6B2C'
					}
				},
				brand: {
					50: '#E3F2FD',
					100: '#BBDEFB',
					200: '#90CAF9',
					300: '#64B5F6',
					400: '#42A5F5',
					500: '#2196F3',
					600: '#1E88E5',
					700: '#1976D2',
					800: '#1565C0',
					900: '#0D47A1',
				},
				cargo: {
					light: '#F0F7FF',
					DEFAULT: '#0EA5E9',
					dark: '#0C4A6E',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'zoom-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'zoom-in': 'zoom-in 0.5s ease-out forwards',
				'float': 'float 3s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MDAiIHZpZXdCb3g9IjAgMCAxNDQwIDUwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBvcGFjaXR5PSIwLjA1IiBkPSJNLTM4LjY5NjcgLTE1NUw5NjkuNSAtMTU1QzEwMTAuMDQgLTE1NSAxMDQzLjE5IC0xMjEuODU0IDEwNDMuMTkgLTgxLjMxNjlDMTA0My4xOSAtNDAuNzc5NyAxMDEwLjA0IC03LjYzMzc5IDk2OS41IC03LjYzMzc5TDQyLjYzMzMgLTcuNjMzNzlDMi4wOTYxOSAtNy42MzM3OSAtMzEuMDQ5NyAtNDAuNzc5NyAtMzEuMDQ5NyAtODEuMzE2OUMtMzEuMDQ5NyAtMTIxLjg1NCAxLjE4MDcxIC0xNTUgNDEuNzE3OSAtMTU1IiBmaWxsPSIjMEVBNUU5Ii8+PC9zdmc+Cg==')",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} 