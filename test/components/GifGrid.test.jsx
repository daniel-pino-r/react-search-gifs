import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

 describe('Puebas en GifGrid.jsx', () => { 

    const category = 'One punch';

    test('debe de mostrar el login inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={ category } />);
        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

    });

    test('debe de mostrar item cuando se cargan las imagenes useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https:localhost/saitama.jpg',
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https:localhost/goku.jpg',
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } />);
        expect( screen.getAllByRole('img').length ).toBe(2);

    });

 });