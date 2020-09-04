import '@testing-library/jest-dom';
import { fileUpload } from '../../helpers/fileUpload';

describe('pruebas en fileUpload', () => {
    
    test('Carga un archivo y retorna un URL', async() => {

       const resp= await fetch('https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'); 
    
       const blob= await resp.blob();

       const file= new File([blob], 'foto.png');

       const url= await fileUpload(file);

        expect(typeof url).toBe('string');
    });
    
    test('retornar error', async() => {

        const file= new File([], 'foto.png');
 
        const url= await fileUpload(file);
 
         expect(url).toBe(null);
     });
     
})
