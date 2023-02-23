import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";


describe('Pruebas en getGifs', () => { 

    test('debe de retornar un arreglo de gifs', async() => { 

        const gifs = await getGifs('One punch');
        
        expect( gifs.length ).toBeGreaterThan( 0 ); //que sea un arreglo con mas de 0 elemento

        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ),
        }); //Evalua que lo que devuelve el arreglo gifs tengo un id, title, y url con strings dentro

    });

});